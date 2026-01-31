from pathlib import Path
import json
import re
from typing import Dict, Any, List, Tuple, Optional, Set

JS_RESERVED = {
    "abstract", "arguments", "await", "boolean", "break", "byte", "case", "catch",
    "char", "class", "const", "continue", "debugger", "default", "delete", "do",
    "double", "else", "enum", "eval", "export", "extends", "false", "final",
    "finally", "float", "for", "function", "goto", "if", "implements", "import",
    "in", "instanceof", "int", "interface", "let", "long", "native", "new",
    "null", "package", "private", "protected", "public", "return", "short",
    "static", "super", "switch", "synchronized", "this", "throw", "throws",
    "transient", "true", "try", "typeof", "var", "void", "volatile", "while",
    "with", "yield"
}


def get_operation_signature_params(method: str, path_tmpl: str, full_entity_sig: List[str], query_params: List[str]) -> List[str]:
    """
    CENTRALIZED SIGNATURE LOGIC: Standardizes argument lists for any SUT.
    Ensures GET/DELETE operations use only path/query parameters.
    """
    method = method.upper()
    path_params = re.findall(r'\{([^}]+)\}', path_tmpl)
    
    if method in ["POST", "PUT", "PATCH"]:
        return full_entity_sig
    else:
        # Merge path and query params, ensuring no duplicates
        sig = path_params + [qp for qp in query_params if qp not in path_params]
        return sig
    

def ensure_directory_exists(path: Path):
    path.mkdir(parents=True, exist_ok=True)

ensure_dir = ensure_directory_exists

def sanitize_param(name: str) -> str:
    if not name: return "undefined_var"
    if name == "..." or name == "…": return "_ellipsis"
    clean_name = re.sub(r'[^a-zA-Z0-9_$]', '_', name)
    if clean_name and clean_name[0].isdigit():
        clean_name = "_" + clean_name
    if clean_name in JS_RESERVED:
        return f"_{clean_name}"
    return clean_name

def render_body_js(template: Any, type_map: Dict[str, str] = {}, indent=4) -> str:
    """Recursively renders a JSON body template into a JS string using type_map."""
    if not template: return "undefined"
    
    if isinstance(template, list):
        items = [render_body_js(item, type_map, indent) for item in template]
        return "[" + ", ".join(items) + "]"

    if isinstance(template, dict):
        lines = ["{"]
        for k, v in template.items():
            if k == "..." or not k: continue
            val_str = render_body_js(v, type_map, indent + 2)
            lines.append(f'{" " * indent}"{k}": {val_str},')
        lines.append(f'{" " * (indent-2)}}}')
        return "\n".join(lines)
    
    if isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
            var_name = template.strip("{}")
            if var_name == "..." or var_name == "…": return '"..."'
            
            clean_var = sanitize_param(var_name)
            
            # STRICT TYPE LOOKUP
            ptype = type_map.get(var_name, "string").lower()
            
            if ptype in ["integer", "number", "int", "float", "double"]:
                return f'Number({clean_var})'
            
            if ptype == "boolean":
                return clean_var 
            
            return f'String({clean_var})'
            
        return f'"{template}"'
    
    return str(template)

def get_raw_spec(spec):
    if "paths" in spec: return spec
    if "original_spec" in spec: return spec["original_spec"]
    return spec

def get_response_codes(path, method, full_spec):
    raw_spec = get_raw_spec(full_spec)
    if not raw_spec: return []
    paths = raw_spec.get("paths", {})
    path_item = paths.get(path)
    if not path_item: return []
    op = path_item.get(method.lower())
    if not op: return []
    responses = op.get("responses", {})
    codes = []
    for code in responses.keys():
        if code.isdigit():
            codes.append(int(code))
    if method.upper() == "DELETE":
        if 204 in codes and 200 not in codes: codes.append(200)
    return sorted(list(set(codes)))

def get_operation_schema(path, method, raw_spec):
    if not raw_spec or not path: return {}, []
    method = method.lower()
    paths = raw_spec.get("paths", {})
    path_item = paths.get(path)
    if not path_item: return {}, []
    op = path_item.get(method)
    if not op: return {}, []
    req_body = op.get("requestBody", {})
    if not req_body: return {}, []
    content = req_body.get("content", {})
    if not content: return {}, []
    json_media = content.get("application/json") or content.get("application/vnd.api+json") or {}
    schema_ref = json_media.get("schema", {})
    if schema_ref is None: return {}, []
    return schema_ref, []

def infer_type(param_name, known_type="string"):
    return known_type

def _recursive_collect_params(template: Any, params_set: Set[str]):
    if isinstance(template, dict):
        for v in template.values():
            _recursive_collect_params(v, params_set)
    elif isinstance(template, list):
        for item in template:
            _recursive_collect_params(item, params_set)
    elif isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
            clean = template.strip("{}")
            if clean and clean not in ["...", "…"]:
                params_set.add(clean)

def collect_entity_params(name: str, ent: Dict[str, Any], raw_spec: Dict[str, Any]) -> Tuple[str, List[str]]:
    ops = ent.get("operations", {})
    primary_key = None
    check_ops = [ops.get('get'), ops.get('delete'), ops.get('update')]
    for op in check_ops:
        if op and isinstance(op, dict) and '{' in op.get('path', ''):
            matches = re.findall(r'\{([^}]+)\}', op['path'])
            if matches:
                primary_key = matches[0]
                break
    if not primary_key: primary_key = "id"
    all_params_set = set()
    if primary_key: all_params_set.add(primary_key)
    for op in ops.values():
        if isinstance(op, dict):
            for p in op.get("params", []):
                if p and p not in ["...", "…"]: all_params_set.add(p)
            if "bodyTemplate" in op and isinstance(op["bodyTemplate"], dict):
                _recursive_collect_params(op["bodyTemplate"], all_params_set)
    return primary_key, sorted(list(all_params_set))