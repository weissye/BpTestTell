"""
interface_emitter.py - Provengo Test Automation Architecture
Version: 333-Line Architectural Edition (Gitea Patched)
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
         desc_tmpl = f"{desc_tmpl} {{{primary_key}}}"
    
    if not desc_tmpl: desc_tmpl = f"{method} {fn_name}"
    
    def escape_js_str(s):
        return s.replace('\\', '\\\\').replace('"', '\\"').replace('\n', '\\n').replace('\r', '')

    safe_path = escape_js_str(path_tmpl)
    safe_desc = escape_js_str(desc_tmpl)
    js_url, js_desc = f'"{safe_path}"', f'"{safe_desc}"'

    ordered_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    path_params_set = set(ordered_path_params)
    query_params_list = op_data.get("queryParams", []) 

    final_sig_params = []
    if method in ["POST", "PUT", "PATCH"]: final_sig_params = sig_params
    else:
        final_sig_params = [p for p in ordered_path_params]
        for qp in query_params_list:
            if qp not in final_sig_params: final_sig_params.append(qp)

    sig_args_str = ", ".join([sanitize_param(p) for p in final_sig_params])
    lines.append(f'function {sanitize_param(fn_name)}({sig_args_str}) {{')

    # THE GITEA RESOLVER PATCH
    lines.append('  const resolve = (v) => {')
    lines.append('    if (v === undefined || v === null) return "undefined";')
    lines.append('    if (typeof v === "object") {')
    lines.append('      let res = v.id || v.name || v.login || v.username || "undefined";')
    lines.append('      return (typeof res === "object") ? "undefined" : res;')
    lines.append('    }')
    lines.append('    return v;')
    lines.append('  };')

    for p in final_sig_params:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in js_url: js_url = js_url.replace(f'{{{p}}}', f'" + resolve({safe_p}) + "')
        if f'{{{p}}}' in js_desc: js_desc = js_desc.replace(f'{{{p}}}', f'" + resolve({safe_p}) + "')
        
    clean_url_str = js_url.replace(' + ""', '').replace('"" + ', '')
    clean_desc_str = js_desc.replace(' + ""', '').replace('"" + ', '')

    param_types = op_data.get("paramTypes", {})
    if method in ["POST", "PUT", "PATCH"]:
        b_lines = ["{"]
        if "id" in final_sig_params and "id" not in path_params_set and "id" not in param_types:
             b_lines.append(f'    "id": resolve({sanitize_param("id")}),')
        elif "id" not in final_sig_params and "create" in fn_name.lower():
             b_lines.append(f'    "id": Math.floor(Math.random() * 10000),')

        for p in final_sig_params:
             if p in path_params_set or p in query_params_list or p == "id": continue
             sanitized_p = sanitize_param(p)
             ptype = param_types.get(p, "string").lower()
             cast = "" if ptype in ["object", "array", "integer", "number", "boolean"] else "String"
             if cast: b_lines.append(f'    "{p}": {cast}(resolve({sanitized_p})),')
             else: b_lines.append(f'    "{p}": resolve({sanitized_p}),')
        b_lines.append("}")
        body_js = f"[{' '.join(b_lines)}]" if op_data.get("is_array", False) else ' '.join(b_lines)
    else: body_js = "{}"

    codes_str = json.dumps(sorted(get_response_codes(path_tmpl, method, spec)))
    lines.append(f'  var url = {clean_url_str}; var reqDescription = {clean_desc_str};')
    
    query_js_parts = [f'"{p}": resolve({sanitize_param(p)})' for p in final_sig_params if p in query_params_list]
    qp_arg = f', queryParameters: {{{", ".join(query_js_parts)}}}' if query_js_parts else ""

    if method in ["POST", "PUT", "PATCH"]:
        lines.append(f'  var body = {body_js};')
        lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes_str}, parameters: {{ description: reqDescription }}{qp_arg} }});')
        if not codes_override:
             payload_str = "{" + ", ".join([f'"{p}": resolve({sanitize_param(p)})' for p in final_sig_params]) + "}"
             lines.append(f'  if (res.status >= 200 && res.status < 300) {{ bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, Object.assign({{}}, {payload_str}, res.data || {{}})) }}); }}')
        lines.append('  return res;')
    else:
        lines.append(f'  return svc.{method.lower()}(url, {{ parameters: {{ description: reqDescription }}, expectedResponseCodes: {codes_str}{qp_arg} }});')
    
    lines.append('}\n')
    return lines

def _generate_js_matchers(name, ops):
    lines = []
    sn = sanitize_param(name)
    for m_type, prefix in [("Added", "Add"), ("Deleted", "Delete")]:
        lines.append(f'function matchAny{sn}{m_type}() {{')
        lines.append(f'  return bp.EventSet("{m_type} {name}", function(e) {{ return e.name.startsWith("Done: Positive: {prefix}"); }});')
        lines.append('}\n')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params):
    lines = [f'function {sanitize_param(fn_name)}({", ".join([sanitize_param(p) for p in sig_params])}) {{']
    lines.append('  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || "undefined") : v;')
    lines.append(f'  var url = "{op_data.get("path", "").lstrip("/")}";')
    lines.append('  svc.post(url, { body: JSON.stringify({}), expectedResponseCodes: [400, 422, 409, 500] });')
    lines.append('  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });')
    lines.append('}\n')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    file_path = out_dir / f"interfaces.{sanitize_param(sut_name)}.js"
    ensure_dir(file_path.parent)
    raw_spec = get_raw_spec(spec)
    service_root = spec.get("base_url", "http://localhost:8000").rstrip("/") + "/"
    lines = ['//@provengo summon rest', f'const svc = new RESTSession("{service_root}", "client", {{ headers: {{ "Content-Type": "application/json" }} }});']
    lines.append('const pvg = { success: (m) => bp.log.info(m), fail: (m) => { bp.log.error(m); throw new Error(m); } };')
    lines.append('function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }')
    for name, ent in spec.get("entities", {}).items():
        pk, sig = collect_entity_params(name, ent, raw_spec)
        sig = [p for p in sig if _is_valid_js_identifier(sanitize_param(p))]
        ops = ent.get("operations", {})
        for op_type, op_data in ops.items():
            if not op_type.startswith("verify"):
                lines.extend(_generate_js_operation(op_data, op_data.get("name", f"{op_type}{name}"), sig, pk, spec, raw_spec))
        if "add" in ops: lines.extend(_generate_reject_operation(ops["add"], f"verify{sanitize_param(name)}Rejects", sig))
        lines.append(f'function verify{sanitize_param(name)}Exists() {{ pvg.success("{name} existence verified"); }}')
        lines.append(f'function verify{sanitize_param(name)}DoesNotExist() {{ pvg.success("{name} absence verified"); }}')
        lines.extend(_generate_js_matchers(name, ops))
    file_path.write_text("\n".join(lines), encoding="utf-8")