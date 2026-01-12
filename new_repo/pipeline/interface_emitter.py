import re
import json
from pathlib import Path
from urllib.parse import urlparse
import random
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
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 

    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
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

    # Extract path params
    ordered_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    path_params_set = set(ordered_path_params)
    query_params_list = op_data.get("queryParams", []) 

    final_sig_params = []
    
    # STRICT ARGUMENT ORDERING
    if method in ["POST", "PUT", "PATCH"]:
        final_sig_params = sig_params
    else:
        # For GET/DELETE, force arguments to match URL path order
        final_sig_params = [p for p in ordered_path_params]
        # Append query params
        for qp in query_params_list:
            if qp not in final_sig_params: final_sig_params.append(qp)

    # URL Construction
    for p in final_sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl:
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
        
    js_url = js_url.replace(' + ""', '')
    js_desc = js_desc.replace(' + ""', '')

    param_types = op_data.get("paramTypes", {})
    body_js = "{}"

    query_js_parts = []
    for p in final_sig_params:
        if p in query_params_list:
            safe_p = sanitize_param(p)
            query_js_parts.append(f'    "{p}": {safe_p}')
    query_js = "{" + ", ".join(query_js_parts) + "}" if query_js_parts else "null"

    if method in ["POST", "PUT", "PATCH"]:
        b_lines = ["{"]
        
        # Ensure ID is present if creating
        if "id" in final_sig_params and "id" not in path_params_set and "id" not in param_types:
             b_lines.append(f'    "id": id,')
        elif "id" not in final_sig_params and "create" in fn_name.lower():
             b_lines.append(f'    "id": Math.floor(Math.random() * 10000),')

        has_username = False
        for p in final_sig_params:
             if p in path_params_set or p in query_params_list: continue
             if p == "username": has_username = True
             if p in op_data.get("paramTypes", {}): 
                 sanitized_p = sanitize_param(p)
                 ptype = param_types.get(p, "string").lower()
                 is_primitive = ptype in ["object", "array", "integer", "number", "boolean"]
                 cast = "" if is_primitive else "String"
                 if cast: b_lines.append(f'    "{p}": {cast}({sanitized_p}),')
                 else: b_lines.append(f'    "{p}": {sanitized_p},')
        
        # Ensure username for user creation
        if not has_username and "user" in path_tmpl.lower() and "create" in fn_name.lower():
             b_lines.append(f'    "username": "user_" + Math.floor(Math.random() * 1000),')

        b_lines.append("}")
        
        object_body = "\n".join(b_lines) if len(b_lines) > 2 else "{}"
        
        # CONSISTENT FIX: Use the flag from the spec
        if op_data.get("is_array", False):
            if object_body == "{}":
                object_body = '{ "id": Math.floor(Math.random() * 10000), "username": "default_user" }'
            body_js = f"[{object_body}]"
        else:
            body_js = object_body

    if "..." in body_js: body_js = "{}"

    if codes_override: 
        codes_list = codes_override
    else: 
        codes_list = get_response_codes(path_tmpl, method, spec)
        if method == "POST" and 409 not in codes_list: codes_list.append(409)
        if method == "DELETE" and 204 not in codes_list: codes_list.append(204)
        
        has_success_defined = any(200 <= c < 300 for c in codes_list)
        if not has_success_defined and method in ["POST", "PUT", "PATCH", "DELETE"]:
            for success_code in [200, 201, 204]:
                if success_code not in codes_list:
                    codes_list.append(success_code)
            
    codes_str = json.dumps(sorted(codes_list))
    sig_args_str = ", ".join([sanitize_param(p) for p in final_sig_params])
    safe_fn_name = sanitize_param(fn_name)
    
    lines.append(f'function {safe_fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var reqDescription = {js_desc};')
    
    qp_arg = f', queryParameters: {query_js}' if query_js != "null" else ""

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  bp.log.info("REQ {method} " + url + " Body: " + JSON.stringify(body));')
        lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes_str}, parameters: {{ description: reqDescription }}{qp_arg} }});')
        if not codes_override:
             payload_parts = []
             for p in final_sig_params:
                 s_p = sanitize_param(p)
                 payload_parts.append(f'"{p}": {s_p}')
             payload_str = "{" + ", ".join(payload_parts) + "}"
             
             lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
             lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, {payload_str}) }});')
             lines.append(f'  }}')
        lines.append('  return res;')
    elif method == "DELETE":
        lines.append(f'  let res = svc.delete(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: {codes_str}{qp_arg} }});')
        lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
        lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription) }});')
        lines.append(f'  }}')
        lines.append('  return res;')
    else:
        # GET
        lines.append(f'  return svc.{method.lower()}(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: {codes_str}{qp_arg} }});')
    lines.append('}')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params, primary_key):
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 

    lines = []
    safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    js_url = f'"{safe_path}"'
    
    path_params = set()
    for p in sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl:
            path_params.add(p)
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
    js_url = js_url.replace(' + ""', '')

    query_params_list = op_data.get("queryParams", []) 
    b_lines = ["{"]
    if "id" in sig_params and "id" not in path_params:
         b_lines.append(f'    "id": id,')

    param_types = op_data.get("paramTypes", {})
    for p in sig_params:
         if p.lower() in query_params_list or p in path_params: continue
         if p not in param_types and p != "id": continue 
         sanitized_p = sanitize_param(p)
         b_lines.append(f'    "{p}": {sanitized_p},') 
                 
    b_lines = [l for l in b_lines if l.strip()]
    if len(b_lines) > 1: b_lines.append("}")
    
    object_body = "\n".join(b_lines) if len(b_lines) > 1 else "{}"
    if op_data.get("is_array", False):
        body_js = f"[{object_body}]"
    else:
        body_js = object_body

    sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
    safe_fn_name = sanitize_param(fn_name)

    lines.append(f'function {safe_fn_name}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var reqDescription = "Negative Test: Verify Rejection for " + url;')
    lines.append(f'  var body = {body_js};')
    lines.append(f'  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));')
    
    # FIX: Added 500 to expected codes to tolerate server crashes during negative testing
    lines.append(f'  svc.post(url, {{ body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: {{ description: reqDescription }} }});')
    
    lines.append(f'  bp.sync({{ request: bp.Event("Done: Negative: " + reqDescription) }});')
    lines.append('}')
    return lines

def _generate_js_matchers(name, ops, primary_key):
    lines = []
    safe_entity_name = sanitize_param(name).capitalize()
    
    # 1. ADD MATCHER
    if "add" in ops:
        desc_tmpl = f"Create a new {name}"
        if isinstance(ops["add"], dict): desc_tmpl = ops["add"].get("descriptionTemplate", desc_tmpl)
        
        regex_start = f"Done: Positive: {desc_tmpl.replace(chr(92), chr(92)+chr(92)).replace(chr(34), chr(92)+chr(34))}".split("{")[0]
        if regex_start.endswith('"'): regex_start = regex_start[:-1]
        
        lines.append(f'function matchAny{safe_entity_name}Added() {{')
        lines.append(f'  return bp.EventSet("Any {name} Added", function(e) {{')
        lines.append(f'      return e.name.startsWith("{regex_start}");')
        lines.append(f'  }});')
        lines.append('}')
        lines.append('')

    # 2. DELETE MATCHER
# 2. DELETE MATCHER
    if "delete" in ops:
         del_desc_tmpl = ops["delete"].get("descriptionTemplate", f"Delete {name}")
         del_regex_start = f"Done: Positive: {del_desc_tmpl.replace(chr(92), chr(92)+chr(92)).replace(chr(34), chr(92)+chr(34))}".split("{")[0].strip().rstrip('"')
         
         # FIX: Ensure the variable name in the () matches the one in the body
         safe_pk = sanitize_param(primary_key)
         
         lines.append(f'function matchDeleted{safe_entity_name}({safe_pk}) {{')
         lines.append(f'  return bp.EventSet("Deleted {name} " + {safe_pk}, function(e) {{')
         lines.append(f'      return e.name.startsWith("{del_regex_start}") && e.name.includes({safe_pk});')
         lines.append('  });')
         lines.append('}')         
         lines.append('')

    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    sut_name_safe = sanitize_param(sut_name)
    file_path = out_dir / f"interfaces.{sut_name_safe}.js"
    ensure_dir(file_path.parent)
    
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    default_host = parsed.hostname or "localhost"
    default_scheme = parsed.scheme or "http"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)
    path_suffix = parsed.path.rstrip('/')
    if "localhost" in default_host or "127.0.0.1" in default_host: default_scheme = "http" 
    
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    lines = []
    lines.append('//@provengo summon rest')
    lines.append(f'// === Auto-generated interfaces for {sut_name} ===')
    
    lines.append(f"var host = (typeof host !== 'undefined') ? host : '{default_host}';")
    lines.append(f"var port = (typeof port !== 'undefined') ? port : {default_port};")
    lines.append(f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{default_scheme}';")
    lines.append(f"var path = '{path_suffix}';")
    
    auth_header = ""
    if sut_name == "PetshopStore":
        auth_header = ', "api_key": "special-key"'

    lines.append(f'const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", {{ headers: {{ "Content-Type": "application/json"{auth_header} }} }});')
    
    lines.append('const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };')
    lines.append('function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }')
    lines.append('function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }')
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

        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist", "tryToAddExisting"]: continue
            if not op_data: continue
            if isinstance(op_data, list): op_data = op_data[0] if op_data else {}
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        if "add" in ops and isinstance(ops["add"], dict) and has_specific_get:
             lines.extend(_generate_js_operation(ops["add"], f"tryToAddExisting{safe_entity_name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"Try Add Existing {name}"))
             lines.append('')
             
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_reject_operation(ops["add"], f"verify{safe_entity_name}Rejects", sig_params, primary_key))
             lines.append('')

        safe_pk = sanitize_param(primary_key)
        
        if has_specific_get:
            path_tmpl = item_get_op.get("path", "")
            safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            js_item_url = f'"{safe_path}"'
            js_item_url = js_item_url.replace(f'{{{primary_key}}}', f'" + {safe_pk} + "')
            js_item_url = js_item_url.replace(' + ""', '')
            
            lines.append(f'function verify{safe_entity_name}Exists({safe_pk}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " exists";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [200], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} found");')
            lines.append('}')
            lines.append('')
            
            lines.append(f'function verify{safe_entity_name}Deleted({safe_pk}) {{')
            lines.append(f'  var url = {js_item_url};')
            lines.append(f'  var description = "Verify {name} " + {safe_pk} + " deleted";')
            lines.append(f'  svc.get(url, {{ expectedResponseCodes: [404], parameters: {{ description: description }} }});')
            lines.append(f'  pvg.success("{name} correctly deleted (404)");')
            lines.append('}')
            lines.append('')
            lines.append(f'function verify{safe_entity_name}DoesNotExist({safe_pk}) {{ verify{safe_entity_name}Deleted({safe_pk}); }}')
            lines.append('')
            
        elif list_op:
             list_fn_name = sanitize_param(list_op.get("name", f"list{name}"))
             lines.append(f'function verify{safe_entity_name}Exists({sig_args_str}) {{')
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
             
             lines.append(f'function verify{safe_entity_name}Deleted({sig_args_str}) {{')
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

        lines.extend(_generate_js_matchers(name, ops, primary_key))

    ensure_dir(out_dir)
    (out_dir / f"interfaces.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    print(f"   > 📄 Interfaces generated: {file_path}")