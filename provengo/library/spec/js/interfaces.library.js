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
    
    if primary_key in sig_params and primary_key not in desc_tmpl:
         desc_tmpl = desc_tmpl + " {" + primary_key + "}"
    if not desc_tmpl: desc_tmpl = f"{method} {fn_name}"
    
    def escape_js_str(s):
        return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

    safe_path = escape_js_str(path_tmpl)
    safe_desc = escape_js_str(desc_tmpl)

    js_url = f'"{safe_path}"'
    js_desc = f'"{safe_desc}"'

    path_params = set()
    for p in sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl:
            path_params.add(p)
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
        
    js_url = js_url.replace(' + ""', '')
    js_desc = js_desc.replace(' + ""', '')

    param_types = op_data.get("paramTypes", {})

    body_js = "{}"
    if method in ["POST", "PUT", "PATCH"]:
        excluded_query_params = ["fields", "filter", "limit", "meta", "offset", "page", "search", "sort", "keys"]
        b_lines = ["{"]
        if "id" in sig_params and "id" not in path_params and "id" not in param_types:
             b_lines.append(f'    "id": id,')

        for p in sig_params:
             if p.lower() in excluded_query_params or p in path_params: continue
             if p in op_data.get("paramTypes", {}): 
                 sanitized_p = sanitize_param(p)
                 ptype = param_types.get(p, "string").lower()
                 
                 # --- FIX: Type-Aware Casting ---
                 # Do NOT wrap Integers, Booleans, or complex types in String()
                 cast = "String"
                 if ptype in ["integer", "number", "boolean", "array", "object"]: 
                     cast = "" 
                 
                 if cast: 
                     b_lines.append(f'    "{p}": {cast}({sanitized_p}),')
                 else: 
                     b_lines.append(f'    "{p}": {sanitized_p},')
                     
        b_lines = [l for l in b_lines if l.strip()]
        if len(b_lines) > 1:
            b_lines.append("}")
            body_js = "\n".join(b_lines)
        else:
            body_js = "{}"

    if "..." in body_js: body_js = "{}"

    if codes_override: 
        codes_list = codes_override
    else: 
        codes_list = get_response_codes(path_tmpl, method, spec)
        if method == "POST" and 409 not in codes_list: codes_list.append(409)
        if method == "DELETE" and 204 not in codes_list: codes_list.append(204)
            
    codes_str = json.dumps(sorted(codes_list))
    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    safe_fn_name = sanitize_param(fn_name)
    
    lines.append(f'function {safe_fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = {js_desc};')
    
    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes_str}, parameters: {{ description: description }} }});')
        if not codes_override:
             payload_parts = []
             for p in sig_params:
                 s_p = sanitize_param(p)
                 payload_parts.append(f'"{p}": {s_p}')
             payload_str = "{" + ", ".join(payload_parts) + "}"
             lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description, {payload_str}) }});')
        lines.append('  return res;')
    else:
        lines.append(f'  return svc.{method.lower()}(url, {{ parameters: {{ description: description }}, expectedResponseCodes: {codes_str} }});')
    lines.append('}')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params, primary_key):
    lines = []
    path_tmpl = op_data.get("path", "")
    
    safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    js_url = f'"{safe_path}"'
    
    path_params = set()
    for p in sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl:
            path_params.add(p)
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
    js_url = js_url.replace(' + ""', '')

    b_lines = ["{"]
    if "id" in sig_params and "id" not in path_params:
         b_lines.append(f'    "id": id,')

    excluded_query_params = ["fields", "filter", "limit", "meta", "offset", "page", "search", "sort", "keys"]
    for p in sig_params:
         if p.lower() in excluded_query_params or p in path_params: continue
         sanitized_p = sanitize_param(p)
         # For fuzzing/negative tests, we generally want to send the raw value
         b_lines.append(f'    "{p}": {sanitized_p},') 
                 
    b_lines = [l for l in b_lines if l.strip()]
    if len(b_lines) > 1:
        b_lines.append("}")
        body_js = "\n".join(b_lines)
    else:
        body_js = "{}"

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    safe_fn_name = sanitize_param(fn_name)

    lines.append(f'function {safe_fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var description = "Negative Test: Verify Rejection for " + url;')
    lines.append(f'  var body = {body_js};')
    lines.append(f'  svc.post(url, {{ body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409], parameters: {{ description: description }} }});')
    lines.append(f'  bp.sync({{ request: bp.Event("Done: " + description) }});')
    lines.append('}')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_host = parsed.hostname or "localhost"
    default_scheme = parsed.scheme or "http"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)
    if "localhost" in default_host or "127.0.0.1" in default_host: default_scheme = "http" 
    
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    lines = []
    lines.append('//@provengo summon rest')
    lines.append(f'// === Auto-generated interfaces for {sut_name} ===')
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{default_scheme}';")
    lines.append('const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });')
    lines.append('const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };')
    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }')
    lines.append('function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }')

    for name, ent in entities.items():
        safe_entity_name = sanitize_param(name)
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        sig_params = [p for p in sig_params if _is_valid_js_identifier(sanitize_param(p))]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        
        ops = ent.get("operations", {})

        item_get_op = ops.get("get")
        if isinstance(item_get_op, list): item_get_op = item_get_op[0] if item_get_op else None
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        list_op = None
        for op in ops.values():
            if isinstance(op, dict) and op.get("method") == "GET" and "{" not in op.get("path", ""):
                list_op = op
                break

        # Standard CRUD
        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist", "tryToAddExisting"]: continue
            if not op_data: continue
            if isinstance(op_data, list): op_data = op_data[0] if op_data else {}
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        # TryAddExisting
        if "add" in ops and isinstance(ops["add"], dict) and has_specific_get:
             lines.extend(_generate_js_operation(ops["add"], f"tryToAddExisting{safe_entity_name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"Try Add Existing {name}"))
             lines.append('')
             
        # Negative Verification (Fuzzing)
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_reject_operation(ops["add"], f"verify{safe_entity_name}Rejects", sig_params, primary_key))
             lines.append('')

        # === 1. Verify Exists (Universal) ===
        safe_pk = sanitize_param(primary_key)
        
        if has_specific_get:
            path_tmpl = item_get_op.get("path", "")
            safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            js_item_url = f'"{safe_path}"'
            for p in sig_params: js_item_url = js_item_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_item_url = js_item_url.replace(' + ""', '')
            
            lines.append(f'function verify{safe_entity_name}Exists({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " exists";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [200], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} found");')
            lines.append('}')
            lines.append('')
        elif list_op:
             list_fn_name = sanitize_param(list_op.get("name", f"list{name}"))
             lines.append(f'function verify{safe_entity_name}Exists({sig_args_str}) {{')
             lines.append(f'  // Fallback: Use list operation to verify existence')
             lines.append(f'  let res = {list_fn_name}({sig_args_str});') 
             lines.append(f'  try {{')
             lines.append(f'      let listData = res;') 
             lines.append(f'      if (typeof listData === "string") listData = JSON.parse(listData);') 
             lines.append(f'      if (!Array.isArray(listData) && listData.data) listData = listData.data;')
             lines.append(f'      if (Array.isArray(listData)) {{')
             lines.append(f'          let found = listData.find(item => item.{primary_key} == {safe_pk} || item.id == {safe_pk});')
             lines.append(f'          if (found) pvg.success("{name} found in list");')
             lines.append(f'          else pvg.fail("{name} NOT found in list");')
             lines.append(f'      }}')
             lines.append(f'  }} catch (err) {{ bp.log.warn("Failed to parse list response: " + err); }}')
             lines.append('}')
             lines.append('')
        else:
             lines.append(f'// verify{safe_entity_name}Exists skipped: No GET /{{id}} or GET /collection detected.')

        # === 2. Verify Deleted (Universal) ===
        if has_specific_get:
            path_tmpl = item_get_op.get("path", "")
            safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            js_item_url = f'"{safe_path}"'
            for p in sig_params: js_item_url = js_item_url.replace(f'{{{p}}}', f'" + {sanitize_param(p)} + "')
            js_item_url = js_item_url.replace(' + ""', '')

            lines.append(f'function verify{safe_entity_name}Deleted({sig_args_str}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " deleted";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [404], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} correctly deleted (404)");')
            lines.append('}')
            lines.append('')
            
            lines.append(f'function verify{safe_entity_name}DoesNotExist({sig_args_str}) {{ verify{safe_entity_name}Deleted({sig_args_str}); }}')
            lines.append('')
            
        elif list_op:
             list_fn_name = sanitize_param(list_op.get("name", f"list{name}"))
             lines.append(f'function verify{safe_entity_name}Deleted({sig_args_str}) {{')
             lines.append(f'  // Fallback: Use list operation to verify deletion')
             lines.append(f'  let res = {list_fn_name}({sig_args_str});')
             lines.append(f'  try {{')
             lines.append(f'      let listData = res;')
             lines.append(f'      if (typeof listData === "string") listData = JSON.parse(listData);')
             lines.append(f'      if (!Array.isArray(listData) && listData.data) listData = listData.data;')
             lines.append(f'      if (Array.isArray(listData)) {{')
             lines.append(f'          let found = listData.find(item => item.{primary_key} == {safe_pk} || item.id == {safe_pk});')
             lines.append(f'          if (!found) pvg.success("{name} correctly not found in list");')
             lines.append(f'          else pvg.fail("{name} still found in list (deletion failed)");')
             lines.append(f'      }}')
             lines.append(f'  }} catch (err) {{ bp.log.warn("Failed to parse list response: " + err); }}')
             lines.append('}')
             lines.append('')
             lines.append(f'function verify{safe_entity_name}DoesNotExist({sig_args_str}) {{ verify{safe_entity_name}Deleted({sig_args_str}); }}')
             lines.append('')
        else:
             lines.append(f'// verify{safe_entity_name}Deleted skipped.')

        # Matchers
        desc_tmpl = "Create " + name
        if "add" in ops and isinstance(ops["add"], dict): desc_tmpl = ops["add"].get("descriptionTemplate", desc_tmpl)
        regex_start = f"Done: {desc_tmpl.replace(chr(92), chr(92)+chr(92)).replace(chr(34), chr(92)+chr(34))}".split("{")[0]
        if regex_start.endswith('"'): regex_start = regex_start[:-1]
        
        lines.append(f'function matchAny{safe_entity_name}Added() {{')
        lines.append(f'  return bp.EventSet("Any {name} Added", function(e) {{')
        lines.append(f'      return e.name.startsWith("{regex_start}");')
        lines.append(f'  }});')
        lines.append('}')
        lines.append('')

    ensure_dir(out_dir)
    (out_dir / f"interfaces.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")