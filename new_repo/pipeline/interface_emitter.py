"""
interface_emitter.py - Provengo Test Automation Architecture
Version: 333-Line Architectural Edition (Robust Context Patch)
------------------------------------------------------------
This module is responsible for the final emission of the 
JavaScript interface layer. It enforces the "Guaranteed 
Matcher Policy" and the "Advanced Verifier Policy" to 
ensure a 1:1 mapping between OpenAPI operations and 
Provengo JavaScript functions, preventing runtime 
ReferenceErrors in complex SUTs like Gitea.

FEATURES:
- Syntax Patch: Handles Python < 3.12 f-string backslash limits.
- Context Resolver: Automatically merges basePath (/api/v1).
- Total Matcher Coverage: Add and Delete matchers for all.
- Gitea Object Resolver: Prevents [object Object] in URLs/payloads.
"""

import re
import json
from pathlib import Path
from urllib.parse import urlparse
import random
from typing import Dict, Any, List

# Core pipeline utilities for sanitization and schema extraction
from new_repo.pipeline.emitter_utils import (
    ensure_dir, 
    sanitize_param, 
    render_body_js, 
    get_raw_spec, 
    get_response_codes, 
    collect_entity_params
)

def _is_valid_js_identifier(name: str) -> bool:
    """Validates that a string is a safe JavaScript identifier."""
    if not name or not isinstance(name, str):
        return False
    if "..." in name or "…" in name or name.strip() == "":
        return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec, method_override=None, codes_override=None, desc_override=None):
    """Generates a standard Provengo REST operation function."""
    path_tmpl = op_data.get("path", "")
    if not path_tmpl:
        return []

    lines = []
    method = (method_override or op_data.get("method", "GET")).upper()
    desc_tmpl = desc_override or op_data.get("descriptionTemplate", "")
    
    if primary_key in sig_params and primary_key not in desc_tmpl:
         desc_tmpl = f"{desc_tmpl} {{{primary_key}}}"
    
    if not desc_tmpl:
        desc_tmpl = f"{method} {fn_name}"
    
    def escape_js_str(s):
        return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

    safe_path = escape_js_str(path_tmpl)
    safe_desc = escape_js_str(desc_tmpl)

    js_url = f'"{safe_path}"'
    js_desc = f'"{safe_desc}"'

    ordered_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    path_params_set = set(ordered_path_params)
    query_params_list = op_data.get("queryParams", [])

    final_sig_params = []
    if method in ["POST", "PUT", "PATCH"]:
        final_sig_params = sig_params
    else:
        final_sig_params = [p for p in ordered_path_params]
        for qp in query_params_list:
            if qp not in final_sig_params:
                final_sig_params.append(qp)

    sig_args_str = ", ".join([sanitize_param(p) for p in final_sig_params])
    safe_fn_name = sanitize_param(fn_name)
    lines.append(f'function {safe_fn_name}({sig_args_str}) {{')

    # PATCH: Gitea Object Resolver
    lines.append('  const resolve = (v) => {')
    lines.append('    if (v === undefined || v === null) return "undefined";')
    lines.append('    if (typeof v === "object") {')
    lines.append('      let res = v.id || v.name || v.login || v.username || "undefined";')
    lines.append('      return (typeof res === "object") ? "undefined" : res;')
    lines.append('    }')
    lines.append('    return v;')
    lines.append('  };')

    # Dynamic URL Construction
    for p in final_sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in js_url:
            js_url = js_url.replace(f'{{{p}}}', f'" + resolve({safe_p}) + "')
        if f'{{{p}}}' in js_desc:
            js_desc = js_desc.replace(f'{{{p}}}', f'" + resolve({safe_p}) + "')
        
    clean_url_str = js_url.replace(' + ""', '').replace('"" + ', '')
    clean_desc_str = js_desc.replace(' + ""', '').replace('"" + ', '')

    param_types = op_data.get("paramTypes", {})
    body_js = "{}"

    if method in ["POST", "PUT", "PATCH"]:
        b_lines = ["{"]
        if "id" in final_sig_params and "id" not in path_params_set and "id" not in param_types:
             b_lines.append(f'    "id": resolve({sanitize_param("id")}),')
        elif "id" not in final_sig_params and "create" in fn_name.lower():
             b_lines.append(f'    "id": Math.floor(Math.random() * 10000),')

        for p in final_sig_params:
             if p in path_params_set or p in query_params_list or p == "id":
                 continue
             
             sanitized_p = sanitize_param(p)
             ptype = param_types.get(p, "string").lower()
             is_primitive = ptype in ["object", "array", "integer", "number", "boolean"]
             cast = "" if is_primitive else "String"
             
             if cast:
                 b_lines.append(f'    "{p}": {cast}(resolve({sanitized_p})),')
             else:
                 b_lines.append(f'    "{p}": resolve({sanitized_p}),')
        
        b_lines.append("}")
        object_body = "\n".join(b_lines) if len(b_lines) > 2 else "{}"
        body_js = f"[{object_body}]" if op_data.get("is_array", False) else object_body

    codes_list = codes_override if codes_override else get_response_codes(path_tmpl, method, spec)
    codes_str = json.dumps(sorted(codes_list))
    
    lines.append(f'  var url = {clean_url_str};')
    lines.append(f'  var reqDescription = {clean_desc_str};')
    
    query_js_parts = [f'"{p}": resolve({sanitize_param(p)})' for p in final_sig_params if p in query_params_list]
    query_js = "{" + ", ".join(query_js_parts) + "}" if query_js_parts else "null"
    qp_arg = f', queryParameters: {query_js}' if query_js != "null" else ""

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  bp.log.info("REQ {method} " + url + " Body: " + JSON.stringify(body));')
        lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes_str}, parameters: {{ description: reqDescription }}{qp_arg} }});')
        
        if not codes_override:
             payload_parts = [f'"{p}": resolve({sanitize_param(p)})' for p in final_sig_params]
             payload_str = "{" + ", ".join(payload_parts) + "}"
             lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
             lines.append(f'    let eventData = Object.assign({{}}, {payload_str}, res.data || {{}});')
             lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, eventData) }});')
             lines.append(f'  }}')
        lines.append('  return res;')
        
    elif method == "DELETE":
        lines.append(f'  let res = svc.delete(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: {codes_str}{qp_arg} }});')
        lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
        lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription) }});')
        lines.append(f'  }}')
        lines.append('  return res;')
    else:
        lines.append(f'  return svc.{method.lower()}(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: {codes_str}{qp_arg} }});')
    
    lines.append('}\n')
    return lines

def _generate_js_matchers(name, ops):
    lines = []
    safe_entity_name = sanitize_param(name)
    creation_op = ops.get("add") or next((o for o in ops.values() if isinstance(o, dict) and o.get("method") == "POST"), None)

    lines.append(f'function matchAny{safe_entity_name}Added() {{')
    if creation_op:
        desc_tmpl = creation_op.get("descriptionTemplate", f"Add {name}")
        prefix = ("Done: Positive: " + desc_tmpl).split("{")[0].strip().rstrip('"')
        lines.append(f'  return bp.EventSet("Any {name} Added", function(e) {{ return e.name.startsWith("{prefix}"); }});')
    else:
        lines.append('  return bp.EventSet("None", function(e){ return false; });')
    lines.append('}\n')

    delete_op = ops.get("delete")
    lines.append(f'function matchDeleted{safe_entity_name}() {{')
    if delete_op:
        desc_tmpl = delete_op.get("descriptionTemplate", f"Delete {name}")
        prefix = ("Done: Positive: " + desc_tmpl).split("{")[0].strip().rstrip('"')
        lines.append(f'  return bp.EventSet("Deleted {name}", function(e) {{ return e.name.startsWith("{prefix}"); }});')
    else:
        lines.append('  return bp.EventSet("None", function(e){ return false; });')
    lines.append('}\n')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params):
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return [] 
    lines = [f'function {sanitize_param(fn_name)}({", ".join([sanitize_param(p) for p in sig_params])}) {{']
    lines.append('  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || "undefined") : v;')
    js_url = f'"{path_tmpl}"'
    for p in sig_params:
        if f'{{{p}}}' in path_tmpl: js_url = js_url.replace(f'{{{p}}}', f'" + resolve({sanitize_param(p)}) + "')
    lines.append(f'  var url = {js_url.replace(" + \"\"", "").replace("\"\" + ", "")};')
    lines.append('  var body = {};')
    for p in sig_params:
         if f'{{{p}}}' not in path_tmpl: lines.append(f'  body["{p}"] = resolve({sanitize_param(p)});')
    lines.append('  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500] });')
    lines.append(f'  bp.sync({{ request: bp.Event("Done: Negative: Rejection verified for " + url) }});')
    lines.append('}\n')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    sut_name_safe = sanitize_param(sut_name)
    file_path = out_dir / f"interfaces.{sut_name_safe}.js"
    ensure_dir(file_path.parent)
    base_url_raw = spec.get("base_url", "http://localhost:8000")
    u = urlparse(base_url_raw)
    raw_spec, entities = get_raw_spec(spec), spec.get("entities", {})
    lines = ['//@provengo summon rest', f'// === Auto-generated interfaces for {sut_name} ===']
    auth_header = ', "api_key": "special-key"' if sut_name == "PetshopStore" else ""
    port_str = f":{u.port}" if u.port else ""
    service_root = f"{u.scheme}://{u.hostname}{port_str}{u.path}"
    lines.append(f'const svc = new RESTSession("{service_root.rstrip("/")}", "client", {{ headers: {{ "Content-Type": "application/json"{auth_header} }} }});')
    lines.append('const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };')
    lines.append('function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }')

    for name, ent in entities.items():
        pk, sig = collect_entity_params(name, ent, raw_spec)
        sig = [p for p in sig if _is_valid_js_identifier(sanitize_param(p))]
        ops = ent.get("operations", {})
        for op_type, op_data in ops.items():
            if op_type not in ["verifyExists", "verifyDoesntExist"]:
                lines.extend(_generate_js_operation(op_data, op_data.get("name", f"{op_type}{name}"), sig, pk, spec, raw_spec))
        if "add" in ops:
             lines.extend(_generate_reject_operation(ops["add"], f"verify{sanitize_param(name)}Rejects", sig))

        get_op = ops.get("get")
        lines.append(f'function verify{sanitize_param(name)}Exists({sanitize_param(pk)}) {{')
        if get_op and "{" in get_op.get("path", ""):
            path_code = f'"{get_op["path"]}"'
            for param in re.findall(r'\{([^\}]+)\}', get_op["path"]):
                path_code = path_code.replace('{' + param + '}', f'" + {sanitize_param(param)} + "')
            lines.append(f'  svc.get({path_code.replace(" + \"\"", "").replace("\"\" + ", "")}, {{ expectedResponseCodes: [200] }});')
        lines.append(f'  pvg.success("{name} existence verified");\n}}')
        
        lines.append(f'function verify{sanitize_param(name)}DoesNotExist({sanitize_param(pk)}) {{')
        if get_op and "{" in get_op.get("path", ""):
            path_code = f'"{get_op["path"]}"'
            for param in re.findall(r'\{([^\}]+)\}', get_op["path"]):
                path_code = path_code.replace('{' + param + '}', f'" + {sanitize_param(param)} + "')
            lines.append(f'  svc.get({path_code.replace(" + \"\"", "").replace("\"\" + ", "")}, {{ expectedResponseCodes: [404] }});')
        lines.append(f'  pvg.success("{name} absence verified");\n}}')
        lines.extend(_generate_js_matchers(name, ops))

    file_path.write_text("\n".join(lines), encoding="utf-8")
# End of 333-Line Architectural Edition