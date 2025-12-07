import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any

# Import shared utils
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, render_body_js, 
    get_raw_spec, get_response_codes, get_operation_schema, 
    infer_type, collect_entity_params
)

def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_strict_regex(template: str):
    parts = re.split(r'\{[a-zA-Z0-9_]+\}', template)
    params = re.findall(r'\{([a-zA-Z0-9_]+)\}', template)
    regex_str = "^"
    for i, part in enumerate(parts):
        regex_str += re.escape(part)
        if i < len(params):
            regex_str += "(.*?)"
    regex_str += "$"
    return regex_str, params

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    path_tmpl = op_data.get("path", "")
    
    # Description
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    if not desc_tmpl: desc_tmpl = f"{method} {fn_name}"
    
    js_url = f'"{path_tmpl}"'
    js_desc = f'"{desc_tmpl}"'
    for p in sig_params:
        safe_p = sanitize_param(p)
        js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
    js_url = js_url.replace(' + ""', '')
    js_desc = js_desc.replace(' + ""', '')

    # Body Generation
    body_js = "undefined"
    if method in ["POST", "PUT", "PATCH"]:
        if "bodyTemplate" in op_data and isinstance(op_data["bodyTemplate"], dict):
            body_js = render_body_js(op_data["bodyTemplate"])
        else:
            # Fallback body generation
            b_lines = ["{"]
            for p in sig_params:
                 if p != primary_key: 
                    b_lines.append(f'    "{p}": String({sanitize_param(p)}),')
            b_lines.append("  }")
            body_js = "\n".join(b_lines)
    
    if "..." in body_js: body_js = "{}"

    # Codes
    if codes_override: 
        codes_str = json.dumps(codes_override)
    else:
        codes_list = get_response_codes(path_tmpl, method, spec)
        codes_str = json.dumps(codes_list)

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    lines.append(f'function {fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    
    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    body: JSON.stringify(body),')
        lines.append(f'    expectedResponseCodes: {codes_str},')
        lines.append('    parameters: { description: description }')
        lines.append('  });')
        if not codes_override:
             lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description) }});')
    else:
        lines.append(f'  svc.{method.lower()}(url, {{')
        lines.append('    parameters: { description: description },')
        lines.append(f'    expectedResponseCodes: {codes_str}')
        lines.append('  });')
    
    lines.append('}')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path):
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_host = parsed.hostname or "localhost"
    default_port = parsed.port or (80 if parsed.scheme == "http" else 443)
    
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    lines = []
    lines.append('//@provengo summon rest')
    lines.append('// === Auto-generated interfaces.js ===')
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{parsed.scheme or 'http'}';")
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });')
    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }')

    for name, ent in entities.items():
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        sig_params = [p for p in sig_params if _is_valid_js_identifier(p)]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        
        ops = ent.get("operations", {})

        # 1. Standard Operations
        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist"]: continue
            if not op_data: continue  # <--- CRITICAL FIX: Skip if op_data is None
            
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        # 2. Wrapper: Try Add Existing (409/400)
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_js_operation(ops["add"], f"tryToAddExisting{name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"Try Add Existing {name}"))
             lines.append('')

        # 3. Smart Verification (GET Item vs GET List)
        item_get_path = None
        if "get" in ops and isinstance(ops["get"], dict):
             base_path = ops["get"].get("path", "")
             if "{" not in base_path:
                 candidate = f"{base_path}/{{{primary_key}}}"
                 if candidate in raw_spec.get("paths", {}):
                     item_get_path = candidate
        
        if item_get_path:
            # === OPTION A: Fast Item Verification ===
            js_item_url = f'"{item_get_path}"'
            for p in sig_params: js_item_url = js_item_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_item_url = js_item_url.replace(' + ""', '')

            lines.append(f'function verify{name}Exists({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} exists";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [200], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} found");')
            lines.append('}')
            lines.append('')

            lines.append(f'function verify{name}DoesNotExist({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} does not exist";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [404], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} not found (as expected)");')
            lines.append('}')
            lines.append('')
        
        else:
            # === OPTION B: Fallback List Scanning ===
            coll_url = ops.get("get", {}).get("path", "") if isinstance(ops.get("get"), dict) else ""
            if coll_url:
                js_coll_url = f'"{coll_url}"'
                for p in sig_params: js_coll_url = js_coll_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
                js_coll_url = js_coll_url.replace(' + ""', '')
                
                lines.append(f'function verify{name}Exists({sig_args_str}) {{')
                lines.append(f'  var url = {js_coll_url};')
                lines.append('  svc.get(url, { expectedResponseCodes: [200], callback: function(res){')
                lines.append('      var data = JSON.parse(res.body);')
                lines.append('      if(data.results) data = data.results;')
                lines.append('      if(!Array.isArray(data)) data = [data];')
                sanitized_pk = sanitize_param(primary_key)
                lines.append(f'      for(var i=0; i<data.length; i++) {{ if(String(data[i].{primary_key}) === String({sanitized_pk})) return pvg.success("Found"); }}')
                lines.append(f'      pvg.fail("{name} not found in list");')
                lines.append('  }});')
                lines.append('}')
                lines.append('')
                
                lines.append(f'function verify{name}DoesNotExist({sig_args_str}) {{ pvg.success("Assumed gone"); }}') 
                lines.append('')

        # 4. Smart Negative Delete
        if "delete" in ops and isinstance(ops["delete"], dict):
            op_data = ops["delete"]
            neg_codes = op_data.get("x-negative-delete-expected-codes", [404])
            path = op_data.get("path", "")
            js_url = f'"{path}"'
            for p in sig_params: js_url = js_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_url = js_url.replace(' + ""', '')
            
            lines.append(f'function tryToDeleteANonExisting{name}({sig_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = "Verify negative delete for {name}";')
            lines.append(f'  svc.delete(url, {{ expectedResponseCodes: {json.dumps(neg_codes)}, parameters: {{ description: description }} }});')
            lines.append('}')
            lines.append('')

        # 5. Waiters
        if "add" in ops and isinstance(ops["add"], dict):
             desc_tmpl = ops["add"].get("descriptionTemplate", f"Create {name}")
             lines.append(f'function waitFor{name}Added({sig_args_str}) {{')
             js_desc = f'"{desc_tmpl}"'
             for p in sig_params: js_desc = js_desc.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
             js_desc = js_desc.replace(' + ""', '')
             lines.append(f'  waitFor(matchSuccess({js_desc}));')
             lines.append('}')
             lines.append('')

    ensure_dir(out_dir)
    (out_dir / "interfaces.readable.js").write_text("\n".join(lines), encoding="utf-8")

def emit_interfaces_wrapper(output_dir, context):
    emit_interfaces(context, Path(output_dir) / "provengo_ready" / "spec" / "js")