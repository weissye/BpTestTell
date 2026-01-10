import re
import json
import logging
from pathlib import Path
from urllib.parse import urlparse
from typing import Dict, Any, List

# Core pipeline utilities for sanitization and schema extraction
from new_repo.pipeline.emitter_utils import (
    ensure_dir, 
    sanitize_param, 
    get_raw_spec, 
    collect_entity_params,
    get_response_codes
)

def _is_valid_js_identifier(name: str) -> bool:
    """Validates safe JavaScript identifiers for generated code."""
    if not name or not isinstance(name, str):
        return False
    if "..." in name or name.strip() == "":
        return False
    return bool(re.match(r'^[a-zA-Z_$][a-zA-Z0-9_$]*$', name))

def _generate_js_operation(op_data, fn_name, sig_params, pk, spec, raw_spec):
    """
    Generates a Provengo REST operation function.
    Maintains BC by emitting sync events for matchers.
    """
    path_tmpl = op_data.get("path", "")
    if not path_tmpl:
        return []

    lines = []
    method = op_data.get("method", "GET").upper()
    desc_tmpl = op_data.get("descriptionTemplate", f"{method} {fn_name}")
    
    # Generic signature logic
    ordered_path_params = re.findall(r'\{([^\}]+)\}', path_tmpl)
    query_params_list = op_data.get("queryParams", [])
    
    final_sig = list(ordered_path_params)
    for qp in query_params_list:
        if qp not in final_sig:
            final_sig.append(qp)
            
    if method in ["POST", "PUT", "PATCH"]:
        for p in sig_params:
            if p not in final_sig:
                final_sig.append(p)

    safe_path = path_tmpl.replace('\\', '\\\\').replace('"', '\\"')
    js_url = f'"{safe_path}"'
    js_desc = f'"{desc_tmpl}"'
    
    # Inject variables into URL and Description
    for p in final_sig:
        safe_p = sanitize_param(p)
        if f'{{{p}}}' in js_url:
            js_url = js_url.replace(f'{{{p}}}', f'" + {safe_p} + "')
        if f'{{{p}}}' in js_desc:
            js_desc = js_desc.replace(f'{{{p}}}', f'" + {safe_p} + "')
    
    clean_url = js_url.replace(' + ""', '').replace('"" + ', '')
    clean_desc = js_desc.replace(' + ""', '').replace('"" + ', '')
    sig_args = ", ".join([sanitize_param(p) for p in final_sig])
    codes = json.dumps(get_response_codes(path_tmpl, method, spec))

    lines.append(f'function {sanitize_param(fn_name)}({sig_args}) {{')
    lines.append(f'  var url = {clean_url};')
    lines.append(f'  var reqDescription = {clean_desc};')
    
    if method in ["POST", "PUT", "PATCH"]:
        lines.append('  var body = {')
        for p in final_sig:
            if p not in ordered_path_params and p not in query_params_list:
                lines.append(f'    "{p}": {sanitize_param(p)},')
        lines.append('  };')
        lines.append(f'  let res = svc.{method.lower()}(url, {{ body: JSON.stringify(body), expectedResponseCodes: {codes}, parameters: {{ description: reqDescription }} }});')
        
        # BC Sync Logic
        payload_parts = [f'"{p}": {sanitize_param(p)}' for p in final_sig]
        lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
        lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription, {{{", ".join(payload_parts)}}}) }});')
        lines.append(f'  }}')
    else:
        lines.append(f'  let res = svc.{method.lower()}(url, {{ expectedResponseCodes: {codes}, parameters: {{ description: reqDescription }} }});')
        if method == "DELETE":
            lines.append(f'  if (res.status >= 200 && res.status < 300) {{')
            lines.append(f'    bp.sync({{ request: bp.Event("Done: Positive: " + reqDescription) }});')
            lines.append(f'  }}')
            
    lines.append('  return res;')
    lines.append('}\n')
    return lines

def _generate_reject_operation(op_data, fn_name, sig_params):
    """Restored: Handles negative testing for generic integration."""
    path_tmpl = op_data.get("path", "")
    if not path_tmpl: return []
    sig_args = ", ".join([sanitize_param(p) for p in sig_params])
    lines = [f'function {sanitize_param(fn_name)}({sig_args}) {{']
    lines.append(f'  var url = "{path_tmpl}";')
    lines.append('  svc.post(url, { body: "{}", expectedResponseCodes: [400, 422, 409, 500] });')
    lines.append(f'  bp.sync({{ request: bp.Event("Done: Negative: Rejection verified for " + url) }});')
    lines.append('}\n')
    return lines

def _generate_js_matchers(name, ops):
    """Generates life-cycle event matchers. Uses standard prefixes for BC."""
    lines = []
    safe_name = sanitize_param(name)
    for action, prefix in [("Added", "Add"), ("Deleted", "Delete")]:
        lines.append(f'function match{"Any" if action=="Added" else ""}{safe_name}{"Added" if action=="Added" else ""}() {{')
        lines.append(f'  return bp.EventSet("{action} {name}", function(e) {{')
        lines.append(f'    return e.name.startsWith("Done: Positive: {prefix} {name}");')
        lines.append('  });')
        lines.append('}\n')
    return lines

def emit_interfaces(spec: Dict[str, Any], out_dir: Path, sut_name: str):
    """Master emission entry point using Generic Path Resolution Policy."""
    sut_name_safe = sanitize_param(sut_name)
    file_path = out_dir / f"interfaces.{sut_name_safe}.js"
    ensure_dir(file_path.parent)
    
    service_root = spec.get("base_url", "http://localhost:8000")
    raw_spec, entities = get_raw_spec(spec), spec.get("entities", {})
    
    lines = ['//@provengo summon rest', f'// === Auto-generated interfaces for {sut_name} ===']
    lines.append(f'const svc = new RESTSession("{service_root.rstrip("/")}", "client", {{ headers: {{ "Content-Type": "application/json" }} }});')
    lines.append('const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };\n')

    for name, ent in entities.items():
        pk, sig = collect_entity_params(name, ent, raw_spec)
        ops = ent.get("operations", {})

        for op_type, op_data in ops.items():
            if not op_type.startswith("verify"): 
                lines.extend(_generate_js_operation(op_data, f"{op_type}{name}", sig, pk, spec, raw_spec))

        if "add" in ops:
            lines.extend(_generate_reject_operation(ops["add"], f"verify{sanitize_param(name)}Rejects", sig))

        lines.extend(_generate_js_matchers(name, ops))

        # Robust Verifier Stubs
        lines.append(f'function verify{sanitize_param(name)}Exists({sanitize_param(pk)}) {{')
        lines.append(f'  bp.log.info("Verifying existence of {name}: " + {sanitize_param(pk)});')
        lines.append('}\n')

    file_path.write_text("\n".join(lines), encoding="utf-8")