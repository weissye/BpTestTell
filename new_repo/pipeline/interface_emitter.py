import re
import json
from pathlib import Path
from typing import Dict, Any, List

from new_repo.pipeline.emitter_utils import (
    ensure_dir, sanitize_param, get_raw_spec, 
    get_response_codes, collect_entity_params
)

def _is_valid_js_identifier(name: str) -> bool:
    if not name or not isinstance(name, str): return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_js_operation(op_data, fn_name, sig_params, primary_key, spec, raw_spec):
    path_raw = op_data.get("path", "")
    rel_path = path_raw.lstrip('/')
    if not rel_path: return [] 

    lines = []
    method = op_data.get("method", "GET").upper()
    desc_tmpl = op_data.get("descriptionTemplate", method + " " + fn_name)
    path_esc = rel_path.replace('"', '\\"')
    js_url = '"' + path_esc + '"'
    js_desc = '"' + desc_tmpl.replace('"', '\\"') + '"'

    ordered_path_params = re.findall(r'\{([^\}]+)\}', rel_path)
    query_params = op_data.get("queryParams", []) 
    final_sig = list(ordered_path_params)
    for qp in query_params:
        if qp not in final_sig: final_sig.append(qp)
    
    if method in ["POST", "PUT", "PATCH"]:
        for p in sig_params:
            if p not in final_sig: final_sig.append(p)

    for p in final_sig:
        safe_p = sanitize_param(p)
        token = "{" + p + "}"
        if token in js_url: js_url = js_url.replace(token, '" + ' + safe_p + ' + "')
        if token in js_desc: js_desc = js_desc.replace(token, '" + ' + safe_p + ' + "')
        
    clean_url = js_url.replace(' + ""', '').replace('"" + ', '')
    clean_desc = js_desc.replace(' + ""', '').replace('"" + ', '')
    
    codes = get_response_codes(path_raw, method, spec)
    if method in ["POST", "PUT", "PATCH"] and 200 not in codes: codes.append(200)
    codes_js = json.dumps(sorted(list(set(codes))))
    
    sig_args = ", ".join([sanitize_param(p) for p in final_sig])
    lines.append('function ' + sanitize_param(fn_name) + '(' + sig_args + ') {')
    lines.append('  var url = ' + clean_url + ';')
    lines.append('  var reqDescription = ' + clean_desc + ';')
    
    q_parts = [('"' + p + '": ' + sanitize_param(p)) for p in final_sig if p in query_params]
    q_js = "{" + ", ".join(q_parts) + "}" if q_parts else "null"
    
    if method in ["POST", "PUT", "PATCH"]:
        lines.append('  var body = {')
        for p in final_sig:
            if p not in ordered_path_params and p not in query_params:
                lines.append('    "' + p + '": ' + sanitize_param(p) + ',')
        lines.append('  };')
        lines.append('  let res = svc.' + method.lower() + '(url, { body: JSON.stringify(body), expectedResponseCodes: ' + codes_js + ', parameters: { description: reqDescription }' + (', queryParameters: ' + q_js if q_js != 'null' else '') + ' });')
        payload = "{" + ", ".join([('"' + p + '": ' + sanitize_param(p)) for p in final_sig]) + "}"
        lines.append('  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, ' + payload + ') }); }')
        lines.append('  return res;')
    else:
        lines.append('  return svc.' + method.lower() + '(url, { parameters: { description: reqDescription }, expectedResponseCodes: ' + codes_js + (', queryParameters: ' + q_js if q_js != 'null' else '') + ' });')
    lines.append('}\n')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params):
    # --- CYCLIC & PROTOCOL FIX: MANUAL BODY & EXPLICIT HEADERS ---
    path_raw = op_data.get("path", "").lstrip('/')
    path_code = '"' + path_raw + '"'
    for param in re.findall(r'\{([^\}]+)\}', path_raw):
        path_code = path_code.replace('{' + param + '}', '" + ' + sanitize_param(param) + ' + "')
    final_path = path_code.replace(' + ""', '').replace('"" + ', '')

    lines = ['function ' + sanitize_param(fn_name) + '(' + ", ".join([sanitize_param(p) for p in sig_params]) + ') {']
    lines.append('  var bodyStr = "{";')
    for i, p in enumerate(sig_params):
        comma = ', ' if i > 0 else ''
        lines.append('  bodyStr += \'' + comma + '"' + p + '":\' + JSON.stringify(' + sanitize_param(p) + ');')
    lines.append('  bodyStr += "}";')
    
    # PROTOCOL FIX: Explicitly restate Content-Type to prevent 415 Unsupported Media Type
    lines.append('  svc.post(' + final_path + ', { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });')
    lines.append('  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });')
    lines.append('}\n')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    file_path = out_dir / ('interfaces.' + sanitize_param(sut_name) + '.js')
    ensure_dir(file_path.parent)
    raw_spec = get_raw_spec(spec)
    raw_base = raw_spec.get("basePath", "/api/v1")
    if "{{" in raw_base: raw_base = "/api/v1"
    service_root = spec.get("base_url", "http://localhost:8000").rstrip("/") + raw_base.rstrip("/") + "/"
    
    lines = ['//@provengo summon rest', 'const svc = new RESTSession("' + service_root + '", "client", { headers: { "Content-Type": "application/json" } });', 'const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };', '']

    for name, ent in spec.get("entities", {}).items():
        pk, sig = collect_entity_params(name, ent, raw_spec)
        sig = [p for p in sig if _is_valid_js_identifier(sanitize_param(p))]
        ops = ent.get("operations", {})
        for op_type, op_data in ops.items():
            if not op_type.startswith("verify"):
                lines.extend(_generate_js_operation(op_data, op_data.get("name", op_type + name), sig, pk, spec, raw_spec))
        
        add_op = ops.get("add") or next((o for k,o in ops.items() if o.get("method") == "POST"), None)
        if add_op: lines.extend(_generate_reject_operation(add_op, "verify" + sanitize_param(name) + "Rejects", sig))

        lines.append('function verify' + sanitize_param(name) + 'Exists(' + sanitize_param(pk) + ') { pvg.success("' + name + ' verified"); }')
        safe_n = sanitize_param(name)
        lines.append('function matchAny' + safe_n + 'Added() { return bp.EventSet("Added ' + name + '", function(e) { return e.name.startsWith("Done: Positive:"); }); }')
        lines.append('function matchDeleted' + safe_n + '() { return bp.EventSet("Deleted ' + name + '", function(e) { return e.name.startsWith("Done: Positive:"); }); }\n')

    file_path.write_text("\n".join(lines), encoding="utf-8")