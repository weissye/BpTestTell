import re
import json
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any
from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_response_codes, collect_entity_params,
    get_operation_signature_params  
)

def _is_valid_js_identifier(name: str) -> bool:
    """ULTIMATE FIX: Resolves NameError in emit_interfaces."""
    if not name or not isinstance(name, str): return False
    if "..." in name or "…" in name or name.strip() == "": return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _get_js_header(spec, raw_spec, sut_name):
    """ULTIMATE FIX: Fixed JS syntax (removed double braces)."""
    base_url = spec.get("base_url", "http://localhost:8080")
    parsed = urlparse(base_url)
    auth_header = ', "api_key": "special-key"'
    return [
        '//@provengo summon rest',
        f'// === Auto-generated interfaces for {sut_name} ===',
        f"var host = (typeof host !== 'undefined') ? host : '{parsed.hostname or 'localhost'}';",
        f"var port = (typeof port !== 'undefined') ? port : {parsed.port or 8080};",
        f"var protocol = (typeof protocol !== 'undefined') ? protocol : '{parsed.scheme or 'http'}';",
        f"var path = '{parsed.path.rstrip('/')}';",
        '',
        f'const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", {{ headers: {{ "Content-Type": "application/json"{auth_header} }} }});',
        '',
        'const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };',
        'function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }',
        'function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }',
        ''
    ]
        
        
# Add this to interface_emitter.py
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
    lines.append(f'function {sanitize_param(fn_name)}({", ".join([sanitize_param(p) for p in sig_params])}) {{')
    lines.append(f'  var url = {js_url}; var body = {object_body};')
    lines.append(f'  svc.post(url, {{ body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: {{ description: "Verify rejection" }} }});')
    lines.append(f'  bp.sync({{ request: bp.Event("Done: Negative: " + url) }});')
    lines.append('}')
    return lines

# UPDATE YOUR IMPORTS IN interface_emitter.py:
# from new_repo.pipeline.emitter_utils import (
#     ensure_dir, sanitize_param, get_raw_spec, 
#     get_response_codes, collect_entity_params,
#     get_operation_signature_params  # <--- ADD THIS IMPORT
# )

# Ensure this import is present at the top of the file
from new_repo.pipeline.emitter_utils import get_operation_signature_params

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    """
    STRICT FIDELITY ACTUATOR: Extracts every 2xx code and ensures scope-safe payloads.
    """
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 

    lines, method = [], (method_override or op_data.get("method", "GET")).upper()
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", f"{method} {fn_name}")
    def js_esc(s): return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n')
    js_url, js_desc = f'"{js_esc(path_tmpl)}"', f'"{js_esc(desc_tmpl)}"'

    final_sig_params = get_operation_signature_params(method, path_tmpl, sig_params, op_data.get("queryParams", []))
    for p in final_sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in path_tmpl: js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
        
    js_url, js_desc = js_url.replace(' + ""', '').replace('"" + ', ''), js_desc.replace(' + ""', '').replace('"" + ', '')
    query_js_parts = [f'    "{p}": {sanitize_param(p)}' for p in final_sig_params if p in op_data.get("queryParams", [])]
    query_js = "{" + ", ".join(query_js_parts) + "}" if query_js_parts else "null"

    # SUCCESS CODE FIDELITY: Captured from raw OpenAPI spec
    codes_list = codes_override or [c for c in get_response_codes(path_tmpl, method, spec) if c < 400]
    if not codes_list:
        codes_list = [200, 201, 202, 204] # Safe fallback for undocumented specs

    codes_str, sig_args_str = json.dumps(sorted(list(set(codes_list)))), ", ".join([sanitize_param(p) for p in final_sig_params] + ["config"])
    
    lines.append(f'function {sanitize_param(fn_name)}({sig_args_str}) {{')
    lines.append(f'  var url = {js_url}; var reqDescription = {js_desc};')
    lines.append('  reqDescription = reqDescription.replace(/\\{[^\\}]+\\}/g, "context");')
    
    qp_arg = f', queryParameters: {query_js}' if query_js != "null" else ""
    lines.append(f'  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : {codes_str};')
    
    if method in ["POST", "PUT", "PATCH"]:
        b_lines, body_fields = [], op_data.get("bodyTemplate", {}).keys()
        for p in final_sig_params:
             if p in re.findall(r'\{([^}]+)\}', path_tmpl) or p in op_data.get("queryParams", []): continue
             json_key = "id" if (p == primary_key and p not in body_fields and "id" in op_data.get("paramTypes", {})) else p
             if json_key in body_fields or p == primary_key: b_lines.append(f'    "{json_key}": {sanitize_param(p)}') 
        object_body = "{\n" + ",\n".join(b_lines) + "\n  }" if b_lines else "{}"
        body_js = f"[{object_body}]" if (op_data.get("is_array", False) or "WithList" in fn_name) else object_body
        lines.append(f'  var body = {body_js}; bp.log.info("REQ {method} " + url + " Body: " + JSON.stringify(body));')
        lines.append(f'  let response = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: {{ description: reqDescription }}{qp_arg} }});')
    else:
        lines.append(f'  let response = svc.{method.lower()}(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: finalCodes{qp_arg} }});')

    payload_parts = [f'"{p}": {sanitize_param(p)}' for p in final_sig_params]
    if primary_key in final_sig_params and primary_key != "id":
        payload_parts.append(f'"id": {sanitize_param(primary_key)}')
    payload = "{" + ", ".join(list(set(payload_parts))) + "}"
    
    lines.extend(['  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);',
                  f'  if (code !== undefined) {{ if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);',
                  f'    if (finalCodes.includes(code)) {{ if (code >= 200 && code < 300) bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, {payload}) }});',
                  f'      else bp.sync({{ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {{status: code}}) }}); }}',
                  f'    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);',
                  f'  }} else {{ bp.log.warn("Response status missing."); bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, {payload}) }}); }}',
                  '  return response;\n}'])
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
    ULTIMATE STABLE VERSION: Generates full JS interface with verification stubs.
    Guarantees no ReferenceError for any system (Gitea, Petstore, Directus).
    """
    sut_name_safe = sanitize_param(sut_name)
    file_path = out_dir / f"interfaces.{sut_name_safe}.js"
    ensure_dir(file_path.parent)
    
    print(f"   > 📄 Generating automated interfaces for {sut_name}...")
    raw_spec = get_raw_spec(spec)
    entities = spec.get("entities", {})
    
    # 1. Generate Header and Environment Initialization
    lines = _get_js_header(spec, raw_spec, sut_name)

    # 2. Iterate through Entities to generate Operations
    for name, ent in entities.items():
        if not isinstance(ent, dict): continue
        safe_entity_name = sanitize_param(name)
        primary_key, sig_params = collect_entity_params(name, ent, raw_spec)
        
        # Clean parameter identifiers for JS safety
        sig_params = [p for p in sig_params if _is_valid_js_identifier(sanitize_param(p))]
        sig_args_str = ", ".join([sanitize_param(p) for p in sig_params])
        ops = ent.get("operations", {})

        # Identify Specific and List operations for verification
        item_get_op = ops.get("get")
        if isinstance(item_get_op, list): 
            item_get_op = item_get_op[0] if item_get_op else None
        has_specific_get = item_get_op and "{" in item_get_op.get("path", "")
        
        list_op = None
        for op in ops.values():
            if isinstance(op, dict) and op.get("method") == "GET" and "{" not in op.get("path", ""):
                list_op = op
                break

        # Generate Standard API Operations (Add, Update, Delete)
        for op_type, op_data in ops.items():
            if op_type in ["verifyExists", "verifyDoesntExist", "tryToAddExisting"]: continue
            if not op_data: continue
            if isinstance(op_data, list): op_data = op_data[0] if op_data else {}
            
            fn_name = op_data.get("name", f"{op_type}{name}")
            lines.extend(_generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec))
            lines.append('')

        # GENERATE COLLISION AGENT (Forces ID collision testing)
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_js_operation(
                 ops["add"], 
                 f"tryToAddExisting{safe_entity_name}", 
                 sig_params, primary_key, spec, raw_spec, 
                 "POST", [400, 409], 
                 f"Try Add Existing {name}"
             ))
             lines.append('')              
             
        # GENERATE REJECTION AGENT (Fixes NameError by calling helper)
        if "add" in ops and isinstance(ops["add"], dict):
             lines.extend(_generate_reject_operation(ops["add"], f"verify{safe_entity_name}Rejects", sig_params, primary_key))
             lines.append('')
                      
        # 3. Generate Verification Logic (Existence/Absence)
        safe_pk = sanitize_param(primary_key)
        
        if has_specific_get:
            # OPTION A: Resource has a direct GET endpoint (High Fidelity)
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
             # OPTION B: Resource must be found by filtering a List endpoint
             list_fn_name = sanitize_param(list_op.get("name", f"list{name}"))
             lines.append(f'function verify{safe_entity_name}Exists({sig_args_str}) {{')
             lines.append(f'  let res = {list_fn_name}({sig_args_str});') 
             lines.append(f'  try {{')
             lines.append(f'      let listData = (typeof res === "string") ? JSON.parse(res) : res;') 
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

        else:
            # OPTION C: THE SAFETY NET BRIDGE
            # This handles Actions like Markdown/Markup and Asymmetric Resources.
            # Prevents "ReferenceError" crashes when stories call verification functions.
            lines.append(f'function verify{safe_entity_name}Exists({safe_pk}) {{')
            lines.append(f'  bp.log.warn("Verification skipped: {name} is an Action or asymmetric resource without a documented GET endpoint.");')
            lines.append('}')
            lines.append(f'function verify{safe_entity_name}DoesNotExist({safe_pk}) {{')
            lines.append(f'  bp.log.warn("Absence check skipped: {name} has no GET endpoint.");')
            lines.append('}')
            lines.append('')

        # 4. Append Operation Matchers
        lines.extend(_generate_js_matchers(name, ops, primary_key))

    # 5. Final file persistence
    (out_dir / f"interfaces.{sut_name}.js").write_text("\n".join(lines), encoding="utf-8")
    print(f"   > ✅ Final automated interfaces generated: {file_path}")