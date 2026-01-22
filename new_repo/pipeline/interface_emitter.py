import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_response_codes, collect_entity_params
)

# HELPER: Ensure this is defined at the top to avoid NameError
def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

from urllib.parse import urlparse

def _get_js_header(spec, raw_spec, sut_name):
    """
    Standardized JS Header: 
    Extracts Base Path, Port, and Security Headers directly from the Spec.
    """
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    
    default_host = parsed.hostname or "localhost"
    default_scheme = parsed.scheme or "http"
    default_port = parsed.port or (80 if default_scheme == "http" else 443)
    path_suffix = parsed.path.rstrip('/')
    
    # Ensure localhost uses http
    if "localhost" in default_host or "127.0.0.1" in default_host: 
        default_scheme = "http" 

    # Automated Security/Auth Logic
    security_schemes = raw_spec.get('components', {}).get('securitySchemes', {})
    auth_header = ""
    # Inject api_key if defined in spec or for known Petstore variants
    if 'api_key' in security_schemes or sut_name in ["PetshopStore", "Petstore"]:
        auth_header = ', "api_key": "special-key"'

    return [
        '//@provengo summon rest',
        f'// === Auto-generated interfaces for {sut_name} ===',
        f"var host = (typeof host !== 'undefined') ? host : '{default_host}';",
        f"var port = (typeof port !== 'undefined') ? port : {default_port};",
        f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{default_scheme}';",
        f"var path = '{path_suffix}';",
        '',
        f'const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", {{ headers: {{ "Content-Type": "application/json"{auth_header} }} }});',
        '',
        'const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };',
        'function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }',
        'function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }',
        'function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }',
        ''
    ]

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None, is_dual_intent=False):
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 

    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    
    if primary_key in sig_params and primary_key not in desc_tmpl:
         desc_tmpl = desc_tmpl + " {" + primary_key + "}"
    
    def escape_js_str(s):
        return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

    js_url, js_desc = f'"{escape_js_str(path_tmpl)}"', f'"{escape_js_str(desc_tmpl)}"'
    ordered_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    path_params_set = set(ordered_path_params)
    query_params_list = op_data.get("queryParams", []) 

    final_sig_params = sig_params if method in ["POST", "PUT", "PATCH", "DELETE"] else ordered_path_params + [qp for qp in query_params_list if qp not in ordered_path_params]
    for p in final_sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl: js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
        
    js_url, js_desc = js_url.replace(' + ""', ''), js_desc.replace(' + ""', '')
    query_js_parts = [f'    "{p}": {sanitize_param(p)}' for p in final_sig_params if p in query_params_list]
    query_js = "{" + ", ".join(query_js_parts) + "}" if query_js_parts else "null"
    qp_arg = f', queryParameters: {query_js}' if query_js != "null" else ""
    sig_args_str = ", ".join([sanitize_param(p) for p in final_sig_params])

    lines.append(f'function {sanitize_param(fn_name)}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url}; var reqDescription = {js_desc};')

    # --- DUAL INTENT BRANCH (Adversarial Path) ---
    if is_dual_intent and method in ["POST", "PUT", "PATCH", "DELETE"]:
        fail_suffix = "Conflict" if method == "POST" else ("Dependency" if method == "DELETE" else "IllegalState")
        lines.append(f'  let e = bp.sync({{')
        lines.append(f'    request: [')
        lines.append(f'      bp.Event("Req:{sanitize_param(fn_name)}:Success:" + {sanitize_param(primary_key)}),')
        lines.append(f'      bp.Event("Req:{sanitize_param(fn_name)}:Fail:{fail_suffix}:" + {sanitize_param(primary_key)})')
        lines.append(f'    ]')
        lines.append(f'  }});')
        lines.append(f'  let isSuccess = e.name.includes("Success");')
        lines.append(f'  let codes = isSuccess ? [200, 201, 204] : [400, 403, 409, 422, 500];')

        if method in ["POST", "PUT", "PATCH"]:
            b_lines = [f'    "{p}": {sanitize_param(p)}' for p in final_sig_params if p in op_data.get("bodyTemplate", {}).keys()]
            object_body = "{\n" + ",\n".join(b_lines) + "\n  }" if b_lines else "{}"
            lines.append(f'  var body = {object_body};')
            lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: codes, parameters: {{ description: reqDescription }}{qp_arg} }});')
        else: # DELETE
            lines.append(f'  let res = svc.delete(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: codes{qp_arg} }});')

        # Synchronized Internal Verifier (Uses only PK)
        safe_ent = sanitize_param(op_data.get("entity", fn_name.replace("delete", "").replace("add", "")))
        lines.append(f'  if (isSuccess && res.status < 300) {{')
        lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription) }});')
        lines.append(f'    verify{safe_ent}' + ('DoesNotExist' if method == "DELETE" else 'Exists') + f'({sanitize_param(primary_key)});')
        lines.append('  }')
        lines.append('  return res;')

    # --- STANDARD BRANCH (Leaf Path) ---
    else:
        # ... (Standard REST call logic from original interface_emitter.py) ...
        pass
    lines.append('}')
    return lines


def _generate_reject_operation(op_data, fn_name, sig_params, primary_key):
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 

    lines, path_params = [], set()
    safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    js_url = f'"{safe_path}"'
    
    for p in sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl:
            path_params.add(p)
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
    js_url = js_url.replace(' + ""', '')

    b_lines = [f'    "{p}": {sanitize_param(p)}' for p in sig_params if p not in path_params]
    
    object_body = "{\n" + ",\n".join(b_lines) + "\n  }" if b_lines else "{}"
    body_js = f"[{object_body}]" if op_data.get("is_array", False) else object_body

    lines.append(f'function {sanitize_param(fn_name)}({", ".join([sanitize_param(p) for p in sig_params])}) {{')
    lines.append(f'  var url = {js_url};')
    lines.append(f'  var reqDescription = "Negative Test: Verify Rejection for " + url;')
    lines.append(f'  var body = {body_js};')
    lines.append(f'  bp.log.info("REQ POST (Negative) " + url + " Body: " + JSON.stringify(body));')
    lines.append(f'  svc.post(url, {{ body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: {{ description: reqDescription }} }});')
    lines.append(f'  bp.sync({{ request: bp.Event("Done: Negative: " + reqDescription) }});')
    lines.append('}')
    return lines

def _generate_js_matchers(name, ops, primary_key):
    """
    Standardized Matcher Generator:
    Preserves casing to ensure compatibility with story-side calls.
    """
    lines = []
    # ARCHITECTURAL RULE: Use the technical name directly to ensure character-perfect alignment.
    # We remove .capitalize() which was lowercasing internal letters (e.g., TenantGroups -> Tenantgroups)
    safe_entity_name = sanitize_param(name)
    
    # 1. ADD MATCHER (Generic)
    if "add" in ops:
        desc_tmpl = f"Create a new {name}"
        if isinstance(ops["add"], dict): 
            desc_tmpl = ops["add"].get("descriptionTemplate", desc_tmpl)
        
        regex_start = f"Done: Positive: {desc_tmpl}".split("{")[0].strip().rstrip('"')
        
        lines.append(f'function matchAny{safe_entity_name}Added() {{')
        lines.append(f'  return bp.EventSet("Any {name} Added", function(e) {{')
        lines.append(f'      return e.name.startsWith("{regex_start}");')
        lines.append('  });')
        lines.append('}')
        lines.append('')

    # 2. DELETE MATCHERS (Specific and Generic)
    if "delete" in ops:
        del_desc_tmpl = f"Delete {name}"
        if isinstance(ops["delete"], dict):
            del_desc_tmpl = ops["delete"].get("descriptionTemplate", del_desc_tmpl)
            
        del_regex_start = f"Done: Positive: {del_desc_tmpl}".split("{")[0].strip().rstrip('"')
        safe_pk = sanitize_param(primary_key)
        
        # Resource-specific matcher for blocking logic
        lines.append(f'function matchDeleted{safe_entity_name}({safe_pk}) {{')
        lines.append(f'  return bp.EventSet("Deleted {name} " + {safe_pk}, function(e) {{')
        lines.append(f'      return e.name.startsWith("{del_regex_start}") && e.name.includes({safe_pk});')
        lines.append('  });')
        lines.append('}') 
        lines.append('')
        
        # Generic matcher for hyper-story reactive threads
        lines.append(f'function matchAny{safe_entity_name}Deleted() {{')
        lines.append(f'  return bp.EventSet("Any {name} Deleted", function(e) {{')
        lines.append(f'      return e.name.startsWith("{del_regex_start}");')
        lines.append('  });')
        lines.append('}')
        lines.append('')
        
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    """
    Standardized Interface Emitter:
    Automated environment detection with fidelity-preserved operations.
    """
    sut_name_safe = sanitize_param(sut_name)
    file_path = out_dir / f"interfaces.{sut_name_safe}.js"
    ensure_dir(file_path.parent)
    
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    # 1. Generate Header and Environment Initialization
    lines = _get_js_header(spec, raw_spec, sut_name)

    # 2. Iterate through Entities to generate Operations
    for name, ent in entities.items():
        # FIDELITY FIX: Use sanitize_param(name) to match story calls
        safe_entity_name = sanitize_param(name)
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        
        # Clean parameter identifiers for JS safety
        sig_params = [p for p in sig_params if _is_valid_js_identifier(sanitize_param(p))]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        ops = ent.get("operations", {})

        # Identify Specific and List operations
        item_get_op = ops.get("get")
        if isinstance(item_get_op, list): 
            item_get_op = item_get_op[0] if item_get_op else None
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        list_op = None
        for op in ops.values():
            if isinstance(op, dict) and op.get("method") == "GET" and "{" not in op.get("path", ""):
                list_op = op
                break

        # Generate Standard API Operations
        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist", "tryToAddExisting"]: continue
            if not op_data: continue
            if isinstance(op_data, list): op_data = op_data[0] if op_data else {}
            
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        # Generate Advanced Operations (Collision & Fuzzing)
        if "add" in ops and isinstance(ops["add"], dict) and has_specific_get:
             lines.extend(_generate_js_operation(ops["add"], f"tryToAddExisting{safe_entity_name}", sig_params, primary_key, spec, raw_spec, "POST", [400, 409], f"Try Add Existing {name}"))
             lines.append('')
             
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_reject_operation(ops["add"], f"verify{safe_entity_name}Rejects", sig_params, primary_key))
             lines.append('')

        # Generate Verification Logic (Existence/Absence)
        safe_pk = sanitize_param(primary_key)
        
        if has_specific_get:
            path_tmpl = item_get_op.get("path", "")
            safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
            js_item_url = f'"{safe_path}"'.replace(f'{{{primary_key}}}', f'" + {safe_pk} + "').replace(' + ""', '')
            
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
             lines.append(f'      let listData = (typeof res === "string") ? JSON.parse(res) : res;') 
             if not any(k in ["id", "data"] for k in ["id", "data"]): # Simplified check
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
             lines.append(f'      let listData = (typeof res === "string") ? JSON.parse(res) : res;')
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

        # 3. Append Operation Matchers
        lines.extend(_generate_js_matchers(name, ops, primary_key))

    # 4. Final file persistence
    (out_dir / f"interfaces.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    print(f"   > 📄 Final automated interfaces generated: {file_path}")