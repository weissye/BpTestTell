from pathlib import Path
import json
import re
from typing import Dict, Any, List, Tuple, Optional

# --- JavaScript Reserved Words ---
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

def render_body_js(template: Any, indent=4) -> str:
    """Recursively renders a JSON body template into a JS string."""
    if not template: return "undefined"
    
    if isinstance(template, list):
        items = []
        for item in template:
            items.append(render_body_js(item, indent))
        return "[" + ", ".join(items) + "]"

    if isinstance(template, dict):
        lines = ["{"]
        for k, v in template.items():
            if k == "..." or not k: continue
            val_str = render_body_js(v, indent + 2)
            lines.append(f'{" " * indent}"{k}": {val_str},')
        lines.append(f'{" " * (indent-2)}}}')
        return "\n".join(lines)
    
    if isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
            var_name = template.strip("{}")
            if var_name == "..." or var_name == "…": return '"..."'
            
            clean_var = sanitize_param(var_name)
            lower_var = var_name.lower()
            
            # 1. Handle Integers
            if lower_var in ["year", "mileage", "baycount", "intervalkm", "intervalmonths"]:
                 return f'Number({clean_var})'
            
            # 2. Handle Booleans (FIXED)
            if lower_var in ["active", "enabled", "visible"]:
                 return clean_var # Return variable directly (true/false), no String() wrapper
                 
            # 3. Default to String
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
    content = req_body.get("content", {})
    json_media = content.get("application/json", {})
    schema_ref = json_media.get("schema", {})
    
    return schema_ref, []

def infer_type(param_name, known_type="string"):
    if known_type != "string": return known_type
    lower = param_name.lower()
    if lower in ["year", "mileage", "age", "count", "amount", "quantity", "id", "pk", "baycount", "intervalkm", "intervalmonths"]: 
        return "integer"
    if lower in ["active", "enabled", "visible"]: 
        return "boolean"
    return "string"

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
                for v in op["bodyTemplate"].values():
                    if isinstance(v, str) and v.startswith("{") and v.endswith("}"):
                        clean = v.strip("{}")
                        if clean and clean not in ["...", "…"]: all_params_set.add(clean)
                    elif isinstance(v, list):
                        for item in v:
                            if isinstance(item, str) and item.startswith("{") and item.endswith("}"):
                                clean = item.strip("{}")
                                if clean: all_params_set.add(clean)

    return primary_key, sorted(list(all_params_set))