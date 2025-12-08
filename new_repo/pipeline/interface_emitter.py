import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, render_body_js, 
    get_raw_spec, get_response_codes, collect_entity_params
)

def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    path_tmpl = op_data.get("path", "")
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

    body_js = "undefined"
    if method in ["POST", "PUT", "PATCH"]:
        if "bodyTemplate" in op_data and isinstance(op_data["bodyTemplate"], dict):
            body_js = render_body_js(op_data["bodyTemplate"])
        else:
            b_lines = ["{"]
            for p in sig_params:
                 if p != primary_key: b_lines.append(f'    "{p}": String({sanitize_param(p)}),')
            b_lines.append("  }")
            body_js = "\n".join(b_lines)
    if "..." in body_js: body_js = "{}"

    if codes_override: codes_str = json.dumps(codes_override)
    else: codes_str = json.dumps(get_response_codes(path_tmpl, method, spec))

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    lines.append(f'function {fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    
    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes_str}, parameters: {{ description: description }} }});')
        
        if not codes_override:
             payload_parts = []
             for p in sig_params:
                 s_p = sanitize_param(p)
                 payload_parts.append(f'"{s_p}": {s_p}')
             payload_str = "{" + ", ".join(payload_parts) + "}"
             lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {payload_str}) }});')
    else:
        lines.append(f'  svc.{method.lower()}(url, {{ parameters: {{ description: description }}, expectedResponseCodes: {codes_str} }});')
    lines.append('}')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_host = parsed.hostname or "localhost"
    default_port = parsed.port or (80 if parsed.scheme == "http" else 443)
    
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    lines = []
    lines.append('//@provengo summon rest')
    lines.append(f'// === Auto-generated interfaces for {sut_name} ===')
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{parsed.scheme or 'http'}';")
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });')
    
    lines.append('const pvg = {')
    lines.append('  success: function(msg) { bp.log.info(msg); },')
    lines.append('  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }')
    lines.append('};')

    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }')
    lines.append('function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }')

    for name, ent in entities.items():
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        sig_params = [p for p in sig_params if _is_valid_js_identifier(p)]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        
        ops = ent.get("operations", {})

        # --- LOGIC CHECK: Can we verify/control ID? ---
        item_get_op = ops.get("get")
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        # Check if Primary Key is in the POST body template
        pk_in_body = False
        if "add" in ops and isinstance(ops["add"], dict):
            body_tmpl = ops["add"].get("bodyTemplate", {})
            if isinstance(body_tmpl, dict) and primary_key in body_tmpl:
                pk_in_body = True
        
        # We only generate verifiers/negatives IF we have specific get AND we control the ID
        can_verify = has_specific_get and pk_in_body
        # ----------------------------------------------

        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist"]: continue
            if not op_data: continue
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        # Wrapper: Try Add Existing (Only if we control ID)
        if "add" in ops and isinstance(ops["add"], dict) and can_verify:
             lines.extend(_generate_js_operation(ops["add"], f"tryToAddExisting{name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"Try Add Existing {name}"))
             lines.append('')

        # Verification Logic
        if can_verify:
            # OPTION A: ID-based Verification
            path_tmpl = item_get_op.get("path", "")
            js_item_url = f'"{path_tmpl}"'
            for p in sig_params: js_item_url = js_item_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_item_url = js_item_url.replace(' + ""', '')

            safe_pk = sanitize_param(primary_key)
            lines.append(f'function verify{name}Exists({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " exists";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [200], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} found");')
            lines.append('}')
            lines.append('')

            lines.append(f'function verify{name}DoesNotExist({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " does not exist";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [404], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} not found");')
            lines.append('}')
            lines.append('')
        elif not pk_in_body:
             # If we don't control ID, we explicitly DO NOT generate verifiers
             # because we can't reliably check for the item we just created.
             lines.append(f'// No verify{name}Exists generated: Primary Key "{primary_key}" is not in POST body (Server-Generated ID).')
        else:
            # Fallback for List scanning (only if we control ID but lack GET /id)
            list_op = ops.get("list")
            coll_url = list_op.get("path", "") if list_op else ""
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
                lines.append(f'      pvg.fail("Item not found in list");')
                lines.append('  }});')
                lines.append('}')
                lines.append('')
            else:
                 lines.append(f'function verify{name}Exists({sig_args_str}) {{ pvg.fail("No GET operation found"); }}')

        # Negative Delete (Only if we control ID)
        if "delete" in ops and isinstance(ops["delete"], dict) and can_verify:
            neg_codes = ops["delete"].get("x-negative-delete-expected-codes", [404])
            path = ops["delete"].get("path", "")
            js_url = f'"{path}"'
            for p in sig_params: js_url = js_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_url = js_url.replace(' + ""', '')
            lines.append(f'function tryToDeleteANonExisting{name}({sig_args_str}) {{')
            lines.append(f'  var url = {js_url};')
            lines.append(f'  var description = "Verify negative delete for {name}";')
            lines.append(f'  svc.delete(url, {{ expectedResponseCodes: {json.dumps(neg_codes)}, parameters: {{ description: description }} }});')
            lines.append('}')
            lines.append('')
            
            desc_tmpl = ops["delete"].get("descriptionTemplate", f"Delete {name}")
            js_desc_match = f'"{desc_tmpl}"'
            for p in sig_params: js_desc_match = js_desc_match.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_desc_match = js_desc_match.replace(' + ""', '')
            
            lines.append(f'function matchDeleted{name}({sig_args_str}) {{')
            lines.append(f'  return bp.EventSet("Delete {name}", function(e) {{')
            lines.append(f'      return e.name === "Done: " + {js_desc_match};')
            lines.append(f'  }});')
            lines.append('}')
            lines.append('')

        # Waiters - Always generate
        desc_tmpl = "Create " + name
        if "add" in ops and isinstance(ops["add"], dict):
             desc_tmpl = ops["add"].get("descriptionTemplate", desc_tmpl)
             lines.append(f'function waitFor{name}Added({sig_args_str}) {{')
             js_desc = f'"{desc_tmpl}"'
             for p in sig_params: js_desc = js_desc.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
             js_desc = js_desc.replace(' + ""', '')
             lines.append(f'  waitFor(matchSuccess({js_desc}));')
             lines.append('}')
             lines.append('')
        
        regex_start = f"Done: {desc_tmpl}".split("{")[0]
        lines.append(f'function matchAny{name}Added() {{')
        lines.append(f'  return bp.EventSet("Any {name} Added", function(e) {{')
        lines.append(f'      return e.name.startsWith("{regex_start}");')
        lines.append(f'  }});')
        lines.append('}')
        lines.append('')

    ensure_dir(out_dir)
    (out_dir / f"interfaces.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")