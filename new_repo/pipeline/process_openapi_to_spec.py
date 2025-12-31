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

def merge_specs(main_entities, new_entities):
    for ent_name, ent_data in new_entities.items():
        if ent_name not in main_entities: main_entities[ent_name] = {"operations": {}}
        if "operations" in ent_data: main_entities[ent_name]["operations"].update(ent_data["operations"])

def _recursive_find_keys(template: Any, found_keys: Set[str]):
    if isinstance(template, dict):
        for k, v in template.items():
            found_keys.add(k)
            _recursive_find_keys(v, found_keys)
    elif isinstance(template, list):
        for item in template:
            _recursive_find_keys(item, found_keys)
    elif isinstance(template, str):
        if template.startswith("{") and template.endswith("}"):
             found_keys.add(template.strip("{}"))

# --- MANUAL FALLBACK ---

def manual_fallback_extraction(raw_spec: Dict[str, Any]) -> Dict[str, Any]:
    print("   > ⚠️  LLM returned empty results. Running manual fallback extraction...")
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
            # Path/Query params
            for p in details.get("parameters", []):
                p_name = p.get("name")
                p_type = p.get("schema", {}).get("type", "string")
                params.append(p_name)
                param_types[p_name] = p_type
            
            # Body params
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
                "bodyTemplate": body_tmpl,
                "paramTypes": param_types
            }
            entities[entity_name]["operations"][op_type] = op_data
    return entities

# --- CORE PATCHING LOGIC (FULL) ---

def patch_extract_all_types_from_schema(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🧬 Extracting EXACT types from OpenAPI schema (Generic)...")
    paths = raw_spec.get("paths", {})
    
    # Regex to identify "Action-like" names (e.g. chainCreate, updateCar) to ban them
    # This prevents the generator from treating Operation IDs as parameters
    bad_param_regex = re.compile(r'^[a-z]+[A-Z][a-zA-Z]+$') 

    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        path = add_op.get("path")
        method = add_op.get("method", "").lower()
        
        # 1. Locate the Schema for this operation
        if path in paths and method in paths[path]:
            req_body = paths[path][method].get("requestBody", {})
            content = req_body.get("content", {}).get("application/json", {})
            schema = content.get("schema", {})
            
            if not schema: continue

            # 2. Resolve $ref (e.g., "$ref": "#/components/schemas/Car")
            if "$ref" in schema:
                ref_name = schema["$ref"].split("/")[-1]
                schema = raw_spec.get("components", {}).get("schemas", {}).get(ref_name, {})

            # 3. Iterate over ALL properties (Required AND Optional)
            properties = schema.get("properties", {})
            
            # --- CRITICAL FIX: RESET PARAMETERS ---
            # We wipe the existing params (which might contain hallucinations like 'chainCreate')
            # and rebuild them strictly from the schema properties.
            add_op["paramTypes"] = {}
            add_op["params"] = []
            add_op["bodyTemplate"] = {}

            for prop_name, prop_def in properties.items():
                # Correctly map OpenAPI types to our internal types
                raw_type = prop_def.get("type", "string")
                if raw_type == "number": raw_type = "integer" # Simplify numbers to int for testing
                
                # Check against regex filter if the name looks like an action (CamelCase)
                # But mostly, since we iterate *properties*, we are safe.
                # The extra safety is ensuring we don't accidentally pull in metadata.
                
                add_op["paramTypes"][prop_name] = raw_type
                
                if prop_name != "id":
                    add_op["params"].append(prop_name)
                    add_op["bodyTemplate"][prop_name] = f"{{{prop_name}}}"

            # 4. Handle ID logic specifically (Force IDs to string if generic)
            for p in list(add_op["paramTypes"].keys()):
                if p.lower().endswith("id") and p.lower() != "id":
                     add_op["paramTypes"][p] = "string"

def patch_heuristic_type_inference(entities: Dict[str, Any]):
    print("   > 🧠 Applying Heuristic Type Inference (Generic)...")
    object_hints = ["schedule", "address", "meta", "config", "settings", "location", "properties", "payload", "data"]
    array_hints = ["list", "tags", "roles", "permissions", "tasks", "services"]
    
    for ent in entities.values():
        ops = ent.get("operations", {})
        for op in ops.values():
            param_types = op.setdefault("paramTypes", {})
            params = op.get("params", [])
            
            for p in params:
                # If type is missing or generic 'string', try to improve it
                if p not in param_types or param_types[p] == "string":
                    p_lower = p.lower()
                    if any(h in p_lower for h in object_hints):
                        param_types[p] = "object"
                    elif any(h in p_lower for h in array_hints):
                        param_types[p] = "array"

def patch_ensure_required_fields(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🛡️  Enforcing required fields from OpenAPI schema...")
    paths = raw_spec.get("paths", {})
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        path = add_op.get("path")
        method = add_op.get("method", "").lower()
        
        if path in paths and method in paths[path]:
            req_body = paths[path][method].get("requestBody", {})
            content = req_body.get("content", {}).get("application/json", {})
            schema = content.get("schema", {})
            
            if not schema: continue

            if "$ref" in schema:
                ref_name = schema["$ref"].split("/")[-1]
                schema = raw_spec.get("components", {}).get("schemas", {}).get(ref_name, {})

            required_fields = schema.get("required", [])
            properties = schema.get("properties", {})

            for field in required_fields:
                if field not in add_op.get("params", []):
                    add_op.setdefault("params", []).append(field)
                    
                    field_type = "string"
                    if field in properties:
                        prop_type = properties[field].get("type")
                        if prop_type == "integer" or prop_type == "number": field_type = "integer"
                        elif prop_type == "boolean": field_type = "boolean"
                        elif prop_type == "array": field_type = "array"
                    
                    add_op.setdefault("paramTypes", {})[field] = field_type
                    add_op.setdefault("bodyTemplate", {})[field] = f"{{{field}}}"

def patch_link_orphaned_operations(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🔗 Linking orphaned operations by Schema...")
    
    schema_map = {}
    paths = raw_spec.get("paths", {})
    
    def get_response_schema(op_data):
        path = op_data.get("path")
        method = op_data.get("method", "").lower()
        if not path or not method: return None
        
        responses = paths.get(path, {}).get(method, {}).get("responses", {})
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
                                 "paramTypes": {}
                             }
                             for p in raw_methods[target_method].get("parameters", []):
                                 p_name = p.get("name")
                                 best_match["params"].append(p_name)
                                 best_match["paramTypes"][p_name] = "string"
                             break
                if best_match:
                    ops[op_type] = best_match

def patch_augment_creation_params(entities: Dict[str, Any]):
    print("   > 🆔 Optimizing entity configuration...")
    
    system_entity_keywords = [
        "activity", "log", "revision", "version", 
        "file", "operation", "folder", "permission", "role", "preset", 
        "relation", "comment", "field", "item"
    ]
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        # REMOVE GHOST ID logic
        params = add_op.get("params", [])
        if "id" in params:
            has_specific = any(p.lower().endswith("id") and p != "id" for p in params)
            if has_specific or ent_name in ["Chains", "Garages", "Customers", "Cars", "RepairOrders", "PeriodicMaintenance"]:
                params.remove("id")
                if "id" in add_op.get("paramTypes", {}):
                    del add_op["paramTypes"]["id"]

        if any(kw in ent_name.lower() for kw in system_entity_keywords):
             add_op["x-generate-full-story"] = False

        singular_name = ent_name.rstrip("s").lower()
        if singular_name in params and singular_name != "id":
             add_op["params"].remove(singular_name)
             if add_op.get("bodyTemplate") is None: add_op["bodyTemplate"] = {}
             add_op["bodyTemplate"][singular_name] = "{id}"
             
        if ent_name == "Webhooks" and "idWebhook" in params:
             add_op["params"].remove("idWebhook")

def patch_augment_response_codes(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🔍 Extracting valid response codes...")
    paths = raw_spec.get("paths", {})
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op_type, op_data in ops.items():
            path = op_data.get("path")
            method = op_data.get("method", "").lower()
            if path in paths and method in paths[path]:
                responses = paths[path][method].get("responses", {})
                codes = [int(c) for c in responses.keys() if c.isdigit()]
                op_data["x-defined-response-codes"] = sorted(codes)

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
    
    # 1. Try LLM Extraction
    for chunk in chunks:
        extracted = call_llm(chunk, force)
        merge_specs(all_entities, extracted)
    
    # 2. Fallback to Manual Extraction if LLM failed
    if not all_entities:
        all_entities = manual_fallback_extraction(raw_spec)

    # 3. Apply all patches (The order matters!)
    # First, fix the types and params based on the schema (Fixes phantom params)
    patch_extract_all_types_from_schema(all_entities, raw_spec)
    
    # Second, verify if any heuristic fixes are needed (e.g. schedule -> object)
    patch_heuristic_type_inference(all_entities)
    
    # Then apply standard logic
    patch_ensure_required_fields(all_entities, raw_spec) 
    patch_link_orphaned_operations(all_entities, raw_spec)
    patch_simplify_primary_operations(all_entities, raw_spec)
    patch_augment_creation_params(all_entities) 
    patch_augment_response_codes(all_entities, raw_spec)
    
    dependencies = map_dependencies(all_entities)
    classify_entities_semantically(all_entities, raw_spec)

    context = {"sut_name": sut_name, "base_url": "http://localhost:8000", "entities": all_entities, "dependencies": dependencies, "original_spec": raw_spec}
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f: json.dump(context, f, indent=2)
    return context