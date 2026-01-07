import os
import json
import hashlib
import time
import sys
import re
from pathlib import Path
from typing import Dict, Any, List, Set
from openai import OpenAI

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

CACHE_DIR = Path("new_repo/cache")
CACHE_DIR.mkdir(parents=True, exist_ok=True)

MODEL_NAME = os.getenv("OPENAI_MODEL", "gpt-4o") 

# --- PROMPTS ---

SYSTEM_PROMPT = """
You are an expert Test Automation Architect. 
Your task is to analyze a small subset of OpenAPI paths and extract "Entities" and "Operations".

### Rules:
1. **Identify Entities:** Group paths by the resource they manage (e.g., /dcim/devices/{id} -> Entity "Devices").
2. **Identify Operations:** Map methods to: "add" (POST), "get" (GET item), "list" (GET collection), "update" (PUT/PATCH), "delete" (DELETE).
3. **Extract Parameters:** List path/query/body params.
4. **Body Template:** Create a JSON template for POST/PUT. 
   - Use placeholders matching the **Property Name** (e.g. "{name}", "{device_role}").
5. **Extract Types:** For EVERY parameter, identify its primitive type (string, integer, boolean, object, array).

### Output Format (Strict JSON):
{
  "EntityName": {
    "operations": {
      "opType": {
        "name": "functionName",
        "descriptionTemplate": "desc",
        "method": "METHOD",
        "path": "/path",
        "params": ["p1"], 
        "bodyTemplate": {"key": "{key}"},
        "paramTypes": {"p1": "string"}
      }
    }
  }
}
"""

DEPENDENCY_PROMPT = """
Analyze the API Entities. Identify creation dependencies.
Rules:
1. Ignore "id" (primary key), "key", "token".
2. Look for foreign keys in path (e.g. /groups/{groupId}/users) or body (e.g. "group_id").
Input: {summary}
Output JSON: {"Entity": ["ParentEntity"]}
"""

CLASSIFICATION_PROMPT = """
Classify each API Entity Operation based on its **Behavior**.
1. **Resource (true)**: Returns 201 Created. Has a GET endpoint. (e.g. Users, Devices).
2. **Action (false)**: Returns 200 OK. RPC/Command. No persistent GET. (e.g. Sync, Reset, Invite).

Input: {summary}
Output JSON: {"EntityName": true/false}
"""

# --- UTILS ---

def get_cache_path(content_hash: str) -> Path:
    return CACHE_DIR / f"{content_hash}.json"

def call_llm(chunk_data: Dict[str, Any], force: bool) -> Dict[str, Any]:
    chunk_str = json.dumps(chunk_data, sort_keys=True)
    chunk_hash = hashlib.md5(chunk_str.encode("utf-8")).hexdigest()
    cache_file = get_cache_path(chunk_hash)

    if not force and cache_file.exists():
        return json.loads(cache_file.read_text(encoding="utf-8"))

    print(f"   > 🧠 Processing chunk {chunk_hash[:8]} with {MODEL_NAME}...")
    max_retries = 3
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=MODEL_NAME,
                response_format={"type": "json_object"},
                messages=[{"role": "system", "content": SYSTEM_PROMPT}, {"role": "user", "content": f"Analyze:\n{chunk_str}"}],
                temperature=0
            )
            return json.loads(response.choices[0].message.content)
        except Exception as e:
            print(f"   ⏳ Error: {e}. Retrying...")
            time.sleep(2)
    return {}

def chunk_openapi(raw_spec: Dict[str, Any], batch_size=5) -> List[Dict[str, Any]]:
    paths = list(raw_spec.get("paths", {}).items())
    return [{"paths": dict(paths[i:i + batch_size])} for i in range(0, len(paths), batch_size)]

def sanitize_llm_output(extracted: Dict[str, Any]) -> Dict[str, Any]:
    """FIREWALL: Discards operations with missing/empty paths or methods."""
    clean = {}
    for ent, data in extracted.items():
        clean_ops = {}
        for op_key, op_data in data.get("operations", {}).items():
            if op_data.get("path") and op_data.get("method"):
                clean_ops[op_key] = op_data
        if clean_ops:
            clean[ent] = {"operations": clean_ops}
    return clean

def merge_specs(main_entities, new_entities):
    for ent_name, ent_data in new_entities.items():
        if ent_name not in main_entities: main_entities[ent_name] = {"operations": {}}
        if "operations" in ent_data: main_entities[ent_name]["operations"].update(ent_data["operations"])

def validate_extraction(entities: Dict[str, Any]) -> bool:
    """Checks if the extracted entities contain valid paths/methods."""
    if not entities: return False
    valid_count = 0
    for ent in entities.values():
        for op in ent.get("operations", {}).values():
            if op.get("path") and op.get("method"):
                valid_count += 1
    return valid_count > 0

def manual_fallback_extraction(raw_spec: Dict[str, Any]) -> Dict[str, Any]:
    print("   > ⚠️  LLM returned empty or invalid results. Running manual fallback extraction...")
    entities = {}
    for path, methods in raw_spec.get("paths", {}).items():
        parts = [p for p in path.split("/") if p and "{" not in p]
        entity_name = parts[-1].capitalize() if parts else "Root"
        
        if entity_name not in entities: entities[entity_name] = {"operations": {}}
        
        for method, details in methods.items():
            if method not in ["get", "post", "put", "delete", "patch"]: continue
            
            op_type = "list"
            if method == "post": op_type = "add"
            elif method == "delete": op_type = "delete"
            elif method == "put": op_type = "update"
            elif method == "get" and "{" in path: op_type = "get"
            
            params = []
            param_types = {}
            query_params = [] 
            
            for p in details.get("parameters", []):
                p_name = p.get("name")
                p_in = p.get("in")
                params.append(p_name)
                param_types[p_name] = p.get("schema", {}).get("type", "string")
                if p_in == "query":
                    query_params.append(p_name)
            
            body_tmpl = {}
            if method in ["post", "put"]:
                content = details.get("requestBody", {}).get("content", {})
                schema = content.get("application/json", {}).get("schema", {})
                props = schema.get("properties", {})
                for k, v in props.items():
                    params.append(k)
                    param_types[k] = v.get("type", "string")
                    body_tmpl[k] = f"{{{k}}}"

            op_data = {
                "name": details.get("operationId", f"{op_type}{entity_name}"),
                "descriptionTemplate": details.get("summary", f"{method.upper()} {path}"),
                "method": method.upper(),
                "path": path,
                "params": list(set(params)),
                "queryParams": query_params,
                "bodyTemplate": body_tmpl,
                "paramTypes": param_types
            }
            entities[entity_name]["operations"][op_type] = op_data
    return entities

def _fuzzy_match_path(target_path: str, all_paths: List[str]) -> str:
    if target_path in all_paths: return target_path
    target_regex = "^" + re.sub(r'\{[^}]+\}', r'{[^}]+}', target_path) + "$"
    for path in all_paths:
        candidate_regex = re.sub(r'\{[^}]+\}', r'{[^}]+}', path)
        if candidate_regex == target_regex.replace("^", "").replace("$", ""):
            return path 
    return None

def _get_schema_by_ref(ref: str, raw_spec: Dict[str, Any]) -> Dict[str, Any]:
    """Resolves references for both OpenAPI 3.0 and Swagger 2.0."""
    parts = ref.split("/")
    name = parts[-1]
    
    # Try OpenAPI 3.0
    schema = raw_spec.get("components", {}).get("schemas", {}).get(name)
    if schema: return schema
    
    # Try Swagger 2.0
    schema = raw_spec.get("definitions", {}).get(name)
    if schema: return schema
    
    return {}

def _resolve_schema_properties(schema: Dict[str, Any], raw_spec: Dict[str, Any], visited: Set[str] = None) -> Dict[str, Any]:
    """Recursively resolves properties from schema, handling $ref and allOf."""
    if visited is None: visited = set()
    properties = {}
    
    if "$ref" in schema:
        ref_key = schema["$ref"]
        if ref_key not in visited:
            visited.add(ref_key)
            ref_schema = _get_schema_by_ref(ref_key, raw_spec)
            properties.update(_resolve_schema_properties(ref_schema, raw_spec, visited))
            
    if "allOf" in schema:
        for sub_schema in schema["allOf"]:
            properties.update(_resolve_schema_properties(sub_schema, raw_spec, visited))
    
    if "properties" in schema:
        properties.update(schema["properties"])
        
    return properties

# --- PATCHES ---

def patch_extract_all_types_from_schema(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🧬 Extracting EXACT types from OpenAPI schema...")
    paths = raw_spec.get("paths", {})
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        target_path = add_op.get("path")
        method = add_op.get("method", "").lower()
        
        real_path = _fuzzy_match_path(target_path, list(paths.keys()))
        
        if real_path and method in paths[real_path]:
            req_body = paths[real_path][method].get("requestBody", {})
            content = req_body.get("content", {}).get("application/json", {})
            schema = content.get("schema", {})
            
            if not schema: continue

            properties = _resolve_schema_properties(schema, raw_spec)
            
            if "paramTypes" not in add_op: add_op["paramTypes"] = {}
            if "paramFormats" not in add_op: add_op["paramFormats"] = {} # NEW: Capture Formats
            if "params" not in add_op: add_op["params"] = []
            if "bodyTemplate" not in add_op: add_op["bodyTemplate"] = {}

            for prop_name, prop_def in properties.items():
                raw_type = prop_def.get("type", "string")
                raw_format = prop_def.get("format", None)
                if raw_type == "number": raw_type = "integer" 
                
                add_op["paramTypes"][prop_name] = raw_type
                if raw_format: add_op["paramFormats"][prop_name] = raw_format
                
                if prop_name != "id" and prop_name not in add_op["params"]:
                    add_op["params"].append(prop_name)
                    add_op["bodyTemplate"][prop_name] = f"{{{prop_name}}}"

def patch_ensure_required_fields(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🛡️  Enforcing required fields from OpenAPI schema...")
    paths = raw_spec.get("paths", {})
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        path = add_op.get("path")
        method = add_op.get("method", "").lower()
        
        real_path = _fuzzy_match_path(path, list(paths.keys()))
        if real_path and method in paths[real_path]:
            req_body = paths[real_path][method].get("requestBody", {})
            content = req_body.get("content", {}).get("application/json", {})
            schema = content.get("schema", {})
            
            if not schema: continue

            # --- FIX STARTS HERE ---
            # Reuse the existing resolver to handle $ref, allOf, etc.
            properties = _resolve_schema_properties(schema, raw_spec)
            required_fields = schema.get("required", [])

            for field in required_fields:
                if field not in add_op.get("params", []):
                    # Add to parameters list
                    add_op.setdefault("params", []).append(field)
                    
                    # Determine type
                    field_type = "string"
                    field_format = None
                    if field in properties:
                        prop_type = properties[field].get("type")
                        prop_format = properties[field].get("format")
                        if prop_type == "integer" or prop_type == "number": field_type = "integer"
                        elif prop_type == "boolean": field_type = "boolean"
                        elif prop_type == "array": field_type = "array"
                        if prop_format: field_format = prop_format
                    
                    # Store
                    add_op.setdefault("paramTypes", {})[field] = field_type
                    if field_format: add_op.setdefault("paramFormats", {})[field] = field_format
                    add_op.setdefault("bodyTemplate", {})[field] = f"{{{field}}}"
            # --- FIX ENDS HERE ---

def patch_link_orphaned_operations(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🔗 Linking orphaned operations by Schema...")
    
    schema_map = {}
    paths = raw_spec.get("paths", {})
    
    def get_response_schema(op_data):
        path = op_data.get("path")
        method = op_data.get("method", "").lower()
        if not path or not method: return None
        
        real_path = _fuzzy_match_path(path, list(paths.keys()))
        if not real_path: return None

        responses = paths[real_path].get(method, {}).get("responses", {})
        success_code = next((c for c in ["200", "201", "202"] if c in responses), None)
        if not success_code: return None
        
        schema = responses[success_code].get("schema", {})
        if "$ref" in schema: return schema["$ref"]
        if schema.get("type") == "array" and "$ref" in schema.get("items", {}):
            return schema["items"]["$ref"]
        return None

    for name, ent in entities.items():
        ops = ent.get("operations", {})
        if "add" in ops:
            ref = get_response_schema(ops["add"])
            if ref:
                if ref not in schema_map: schema_map[ref] = {"readers": [], "creators": []}
                schema_map[ref]["creators"].append(name)
        if "get" in ops:
            ref = get_response_schema(ops["get"])
            if ref:
                if ref not in schema_map: schema_map[ref] = {"readers": [], "creators": []}
                schema_map[ref]["readers"].append(name)

    for ref, roles in schema_map.items():
        creators = roles["creators"]
        readers = roles["readers"]
        
        if len(creators) >= 1 and len(readers) == 1:
            target_ent_name = readers[0]
            for source_ent_name in creators:
                if source_ent_name == target_ent_name: continue
                source_ent = entities[source_ent_name]
                target_ent = entities[target_ent_name]
                target_ent["operations"]["add"] = source_ent["operations"]["add"]

def patch_simplify_primary_operations(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🧹 Simplifying primary operations...")
    paths = raw_spec.get("paths", {})
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op_type in ["get", "update", "delete"]:
            if op_type not in ops: continue
            current_op = ops[op_type]
            path = current_op.get("path", "")
            param_count = path.count("{")
            if param_count > 1:
                prefix = path.split("/{")[0] 
                best_match = None
                for raw_path, raw_methods in paths.items():
                    if raw_path.startswith(prefix) and raw_path.count("{") == 1:
                        target_method = "get" if op_type == "get" else ("delete" if op_type == "delete" else ("put" if "put" in raw_methods else "patch"))
                        if target_method in raw_methods:
                             op_id = raw_methods[target_method].get("operationId", f"{op_type}{ent_name}Simplified")
                             best_match = {
                                 "name": op_id,
                                 "descriptionTemplate": raw_methods[target_method].get("summary", ""),
                                 "method": target_method.upper(),
                                 "path": raw_path,
                                 "params": [], 
                                 "paramTypes": {},
                                 "queryParams": [] 
                             }
                             for p in raw_methods[target_method].get("parameters", []):
                                 p_name = p.get("name")
                                 best_match["params"].append(p_name)
                                 best_match["paramTypes"][p_name] = "string"
                                 if p.get("in") == "query":
                                     best_match["queryParams"].append(p_name)
                             break
                if best_match:
                    ops[op_type] = best_match

def patch_augment_response_codes(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🔍 Extracting valid response codes...")
    paths = raw_spec.get("paths", {})
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op_type, op_data in ops.items():
            path = op_data.get("path")
            method = op_data.get("method", "").lower()
            real_path = _fuzzy_match_path(path, list(paths.keys()))
            if real_path and method in paths[real_path]:
                responses = paths[real_path][method].get("responses", {})
                codes = [int(c) for c in responses.keys() if c.isdigit()]
                op_data["x-defined-response-codes"] = sorted(codes)

def patch_verify_methods(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    """
    CRITICAL: Kills any operation (like DELETE) that doesn't exist in the OpenAPI spec.
    """
    print("   > 🕵️  Verifying methods against Source OpenAPI...")
    paths = raw_spec.get("paths", {})
    path_keys = list(paths.keys())
    
    for ent_name, ent in entities.items():
        ops = ent.get("operations", {})
        to_delete = []
        for op_key, op_data in ops.items():
            path = op_data.get("path")
            method = op_data.get("method", "").lower()
            
            real_path = _fuzzy_match_path(path, path_keys)
            
            if not real_path:
                print(f"     [DROP] Path not found: {path}")
                to_delete.append(op_key)
                continue
            
            if method not in paths[real_path]:
                print(f"     [DROP] Method {method} not allowed for {real_path}")
                to_delete.append(op_key)
                
        for k in to_delete:
            del ops[k]

def patch_enforce_schema_parameters(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    """
    STRICT SCHEMA ENFORCEMENT WITH SAFETY NET:
    1. Resolve full schema properties (recursive).
    2. IF properties found: Wipe AI params and use Schema (Ground Truth).
    3. IF NO properties found (Resolution failed): KEEP AI params (Safety Net).
    """
    print("   > 🧬 Enforcing Strict Schema Parameters (Recursive + Safe)...")
    paths = raw_spec.get("paths", {})
    path_keys = list(paths.keys())
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        
        for op_type, op_data in ops.items():
            target_path = op_data.get("path")
            method = op_data.get("method", "").lower()
            
            real_path = _fuzzy_match_path(target_path, path_keys)
            
            if real_path and method in paths[real_path]:
                print(f"     [DEBUG] Processing {method.upper()} {real_path}...")
                spec_op = paths[real_path][method]
                
                # Check Body
                req_body = spec_op.get("requestBody", {})
                content = req_body.get("content", {}).get("application/json", {})
                schema = content.get("schema", {})
                
                # --- SAFETY NET ---
                properties = {}
                if schema:
                    properties = _resolve_schema_properties(schema, raw_spec)
                
                if not properties:
                    print(f"     [DEBUG] No body properties found for {real_path}. Skipping strict enforcement.")
                    continue

                # --- PROCEED WITH RESET ---
                print(f"     [DEBUG] STRICT MODE: Resetting params for {ent_name} {op_type}")
                op_data["paramTypes"] = {}
                op_data["params"] = []
                op_data["bodyTemplate"] = {}
                op_data["queryParams"] = [] 
                
                # 1. Path/Query Params
                for p_def in spec_op.get("parameters", []):
                    p_name = p_def.get("name")
                    p_in = p_def.get("in") 
                    p_schema = p_def.get("schema", {})
                    p_type = p_schema.get("type", "string")
                    
                    if p_in == "query":
                        print(f"       + Query Param: {p_name}")
                        op_data["queryParams"].append(p_name)
                        if p_name not in op_data["params"]: op_data["params"].append(p_name)
                        op_data["paramTypes"][p_name] = p_type
                    elif p_in == "path":
                        print(f"       + Path Param: {p_name}")
                        if p_name not in op_data["params"]: op_data["params"].append(p_name)
                        op_data["paramTypes"][p_name] = p_type

                # 2. Body Params
                for prop_name, prop_def in properties.items():
                    raw_type = prop_def.get("type", "string")
                    if raw_type == "number": raw_type = "integer" 
                    
                    print(f"       + Body Param: {prop_name} ({raw_type})")
                    op_data["paramTypes"][prop_name] = raw_type
                    
                    if prop_name != "id":
                        if prop_name not in op_data["params"]:
                            op_data["params"].append(prop_name)
                        op_data["bodyTemplate"][prop_name] = f"{{{prop_name}}}"

def map_dependencies(entities: Dict[str, Any]) -> Dict[str, List[str]]:
    print("   > 🔗 Mapping global dependencies (LLM)...")
    summary = {}
    for name, data in entities.items():
        add_op = data.get("operations", {}).get("add")
        if not add_op: continue 
        summary[name] = {
            "path": add_op.get("path"),
            "params": add_op.get("params", []),
            "body_fields": list(add_op.get("paramTypes", {}).keys())
        }
    if not summary: return {}
    try:
        res = client.chat.completions.create(model=MODEL_NAME, response_format={"type": "json_object"}, messages=[{"role": "user", "content": DEPENDENCY_PROMPT.replace("{summary}", json.dumps(summary))}])
        return json.loads(res.choices[0].message.content)
    except: return {}

def classify_entities_semantically(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🏷️  Classifying operations (Action vs Resource)...")
    summary = {}
    for name, data in entities.items():
        add_op = data.get("operations", {}).get("add")
        if not add_op: continue
        summary[name] = {"path": add_op.get("path"), "method": add_op.get("method")}
    if not summary: return
    try:
        res = client.chat.completions.create(model=MODEL_NAME, response_format={"type": "json_object"}, messages=[{"role": "user", "content": CLASSIFICATION_PROMPT.replace("{summary}", json.dumps(summary))}], temperature=0)
        classification = json.loads(res.choices[0].message.content)
        for name, is_res in classification.items():
            if name in entities: entities[name]["operations"]["add"]["x-generate-full-story"] = is_res
    except: pass

def load_openapi(path: Path) -> Dict[str, Any]:
    with open(path, 'r', encoding='utf-8') as f: return json.load(f)

# --- MAIN DRIVER ---

def process_openapi(openapi_path: Path, sut_name: str, force: bool = False) -> Dict[str, Any]:
    output_path = Path("new_repo/specs") / f"{sut_name}.generated.json"
    if not force and output_path.exists(): return json.loads(output_path.read_text(encoding="utf-8"))

    raw_spec = load_openapi(openapi_path)
    chunks = chunk_openapi(raw_spec)
    all_entities = {}
    
    # 1. LLM Extraction
    for chunk in chunks:
        extracted = call_llm(chunk, force)
        clean_extracted = sanitize_llm_output(extracted)
        merge_specs(all_entities, clean_extracted)
    
    if not validate_extraction(all_entities):
        all_entities = manual_fallback_extraction(raw_spec)

    # 2. Patching Phase
    patch_extract_all_types_from_schema(all_entities, raw_spec)
    
    # REMOVED: patch_heuristic_type_inference(all_entities)
    
    patch_ensure_required_fields(all_entities, raw_spec) 
    patch_link_orphaned_operations(all_entities, raw_spec)
    patch_simplify_primary_operations(all_entities, raw_spec)
    
    # REMOVED: patch_augment_creation_params(all_entities)
    
    patch_augment_response_codes(all_entities, raw_spec)
    patch_verify_methods(all_entities, raw_spec)
    patch_enforce_schema_parameters(all_entities, raw_spec) 
    
    dependencies = map_dependencies(all_entities)
    classify_entities_semantically(all_entities, raw_spec)

    context = {"sut_name": sut_name, "base_url": "http://localhost:8000", "entities": all_entities, "dependencies": dependencies, "original_spec": raw_spec}
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f: json.dump(context, f, indent=2)
    return context

if __name__ == "__main__":
    # Test run
    # process_openapi(Path("packs/real_world/directus/openapi.json"), "directus", False)
    pass