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

def ensure_dir(path: Path):
    path.mkdir(parents=True, exist_ok=True)

def sanitize_param(name: str) -> str:
    if name == "..." or name == "…": return "_ellipsis"
    clean_name = re.sub(r'[^a-zA-Z0-9_$]', '_', name)
    if clean_name in JS_RESERVED: return f"_{clean_name}"
    return clean_name

def render_body_js(template: Any, indent=4) -> str:
    if not template: return "undefined"
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
            return f'String({sanitize_param(var_name)})'
        return f'"{template}"'
    return str(template)

def resolve_schema(schema, full_spec):
    if not schema: return {}
    if "$ref" in schema:
        ref = schema["$ref"]
        if ref.startswith("#/"):
            parts = ref.lstrip("#/").split("/")
            current = full_spec
            try:
                for part in parts: current = current.get(part, {})
                return resolve_schema(current, full_spec)
            except Exception: return {}
    if "allOf" in schema:
        merged_props = {}
        merged_required = []
        for sub_schema in schema["allOf"]:
            resolved_sub = resolve_schema(sub_schema, full_spec)
            if "properties" in resolved_sub: merged_props.update(resolved_sub["properties"])
            if "required" in resolved_sub: merged_required.extend(resolved_sub["required"])
        return { "type": "object", "properties": merged_props, "required": list(set(merged_required)) }
    if "properties" in schema: return schema
    return schema

def get_raw_spec(spec):
    if "paths" in spec: return spec
    if "original_spec" in spec: return spec["original_spec"]
    return spec

def get_response_codes(path, method, full_spec):
    raw_spec = get_raw_spec(full_spec)
    if not raw_spec: return []
    paths = raw_spec.get("paths", {})
    path_item = paths.get(path)
    if not path_item:
        if path.endswith("/"): path_item = paths.get(path[:-1])
        else: path_item = paths.get(path + "/")
    if not path_item: return []
    op = path_item.get(method.lower())
    if not op: return []
    responses = op.get("responses", {})
    codes = []
    for code in responses.keys():
        if code.isdigit(): codes.append(int(code))
    if method.upper() == "DELETE":
        if 204 in codes and 200 not in codes: codes.append(200)
        elif 200 in codes and 204 not in codes: codes.append(204)
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
    resolved_schema = resolve_schema(schema_ref, raw_spec)
    required = resolved_schema.get("required", [])
    return resolved_schema, required

def infer_type(param_name, known_type="string"):
    if known_type != "string": return known_type
    lower = param_name.lower()
    if "address" in lower or "meta" in lower: return "object"
    if lower in ["year", "mileage", "age", "count", "amount", "quantity", "baycount", "intervalkm", "intervalmonths"]: return "integer"
    if lower in ["active", "enabled", "visible"]: return "boolean"
    return "string"

def collect_entity_params(name: str, ent: Dict[str, Any], raw_spec: Dict[str, Any]) -> Tuple[str, List[str]]:
    ops = ent.get("operations", {})
    
    # Detect Primary Key
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
                if p and p != "..." and p != "…": all_params_set.add(p)
            if "bodyTemplate" in op and isinstance(op["bodyTemplate"], dict):
                for v in op["bodyTemplate"].values():
                    if isinstance(v, str) and v.startswith("{") and v.endswith("}"):
                        clean = v.strip("{}")
                        if clean and clean != "..." and clean != "…": all_params_set.add(clean)
    
    for p in ent.get("params", []):
        if p and p != "..." and p != "…": all_params_set.add(p)

    if "add" in ops and isinstance(ops["add"], dict):
        schema, required_fields = get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
        props = schema.get("properties", {})
        for k in props.keys(): 
            if k and k != "..." and k != "…": all_params_set.add(k)
        for k in required_fields:
            if k and k != "..." and k != "…": all_params_set.add(k)
            
    # --- HEURISTIC FALLBACK (Centralized) ---
    candidates = [name, name.capitalize(), name.upper(), name + "Create", name.capitalize() + "Create"]
    schemas = raw_spec.get("components", {}).get("schemas", {})
    for cand in candidates:
        if cand in schemas:
            resolved = resolve_schema(schemas[cand], raw_spec)
            if "properties" in resolved:
                for k in resolved["properties"].keys():
                     if k and k != "..." and k != "…": all_params_set.add(k)
        
    return primary_key, sorted(list(all_params_set))