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
    """
    Sanitizes a parameter name for use as a JS variable.
    """
    # FIX: Handle "..." specifically to avoid syntax errors
    if name == "..." or name == "…":
        return "_ellipsis"
        
    # Standard sanitization
    clean_name = re.sub(r'[^a-zA-Z0-9_$]', '_', name)
    
    if clean_name in JS_RESERVED:
        return f"_{clean_name}"
    return clean_name

def render_body_js(template: Any, indent=4) -> str:
    if not template: return "undefined"
    if isinstance(template, dict):
        lines = ["{"]
        for k, v in template.items():
            # Skip invalid keys
            if k == "..." or not k: continue
            
            val_str = render_body_js(v, indent + 2)
            lines.append(f'{" " * indent}"{k}": {val_str},')
        lines.append(f'{" " * (indent-2)}}}')
        return "\n".join(lines)
    if isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
            var_name = template.strip("{}")
            # FIX: Prevent String(...) generation for ellipsis
            if var_name == "..." or var_name == "…": return '"..."'
            return f'String({sanitize_param(var_name)})'
        return f'"{template}"'
    return str(template)

def template_to_regex(template: str):
    parts = re.split(r'\{([^}]+)\}', template)
    regex_parts = []
    param_names = []
    for i, part in enumerate(parts):
        if i % 2 == 0:
            if part: regex_parts.append(re.escape(part))
        else:
            param_names.append(part)
            regex_parts.append("(.+)")
    return "^" + "".join(regex_parts) + "$", param_names

def resolve_schema(schema, full_spec):
    if not schema: return {}
    
    def get_components(obj):
        if "components" in obj: return obj["components"]
        if "original_spec" in obj and "components" in obj["original_spec"]:
             return obj["original_spec"]["components"]
        return {}

    comps = get_components(full_spec)

    if "$ref" in schema:
        ref_path = schema["$ref"].split("/")
        if len(ref_path) > 3 and ref_path[1] == "components" and ref_path[2] == "schemas":
            schema_name = ref_path[3]
            resolved = comps.get("schemas", {}).get(schema_name, {})
            if resolved:
                return resolve_schema(resolved, full_spec)

    if "allOf" in schema:
        merged_props = {}
        merged_required = []
        for sub_schema in schema["allOf"]:
            resolved_sub = resolve_schema(sub_schema, full_spec)
            if "properties" in resolved_sub:
                merged_props.update(resolved_sub["properties"])
            if "required" in resolved_sub:
                merged_required.extend(resolved_sub["required"])
        return {
            "type": "object",
            "properties": merged_props,
            "required": list(set(merged_required))
        }
    
    if schema.get("type") == "object" and "properties" in schema:
        return schema

    return schema

def get_raw_spec(spec):
    if "paths" in spec: return spec
    if "original_spec" in spec: return spec["original_spec"]
    return spec

def get_response_codes(path, method, full_spec):
    raw_spec = full_spec.get("original_spec", full_spec)
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
        if code.isdigit():
            codes.append(int(code))
    
    if method.upper() == "DELETE":
        if 204 in codes and 200 not in codes:
            codes.append(200)
        elif 200 in codes and 204 not in codes:
            codes.append(204)
    
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
    """
    Collects all parameters for an entity from its operations and schema.
    Returns (primary_key, sorted_list_of_params)
    """
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
    
    all_params_set = set()
    if primary_key: all_params_set.add(primary_key)
    
    # 1. Ops Params & Body Template Vars
    for op in ops.values():
        if isinstance(op, dict):
            for p in op.get("params", []):
                # FIX: Filter out "..."
                if p and p != "..." and p != "…":
                    all_params_set.add(p)
            
            if "bodyTemplate" in op and isinstance(op["bodyTemplate"], dict):
                for v in op["bodyTemplate"].values():
                    if isinstance(v, str) and v.startswith("{") and v.endswith("}"):
                        clean = v.strip("{}")
                        if clean and clean != "..." and clean != "…":
                            all_params_set.add(clean)
    
    # 2. Entity Params
    for p in ent.get("params", []):
        if p and p != "..." and p != "…":
            all_params_set.add(p)

    # 3. Schema Params (for ADD)
    if "add" in ops and isinstance(ops["add"], dict):
        schema, required_fields = get_operation_schema(ops["add"].get("path"), "POST", raw_spec)
        props = schema.get("properties", {})
        for k in props.keys(): 
            if k and k != "..." and k != "…": all_params_set.add(k)
        for k in required_fields:
            if k and k != "..." and k != "…": all_params_set.add(k)
        
    return primary_key, sorted(list(all_params_set))