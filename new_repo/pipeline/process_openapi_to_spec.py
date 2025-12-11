import os
import json
import hashlib
import time
import sys
from pathlib import Path
from typing import Dict, Any, List, Set
from openai import OpenAI, RateLimitError

client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

CACHE_DIR = Path("new_repo/cache")
CACHE_DIR.mkdir(parents=True, exist_ok=True)

MODEL_NAME = "gpt-4o" 

SYSTEM_PROMPT = """
You are an expert Test Automation Architect. 
Your task is to analyze a small subset of OpenAPI paths and extract "Entities" and "Operations".

### Rules:
1. **Identify Entities:** Group paths by the resource they manage (e.g., /dcim/devices/{id} -> Entity "Devices").
2. **Identify Operations:** Map methods to: "add" (POST), "get" (GET item), "list" (GET collection), "update" (PUT/PATCH), "delete" (DELETE).
3. **Extract Parameters:** List path/query/body params.
   - **Crucial:** Always include "id" in the 'params' list and 'bodyTemplate' if it appears in the schema.
4. **Body Template:** Create a JSON template for POST/PUT. 
   - Use placeholders matching the **Property Name** (e.g. "{name}", "{device_role}").
   - **CRITICAL:** For boolean fields, use the placeholder "{fieldName}" (no quotes).
5. **Extract Types (CRITICAL):** For EVERY parameter (in path, query, OR BODY fields), identify its primitive type.
   - **Must be one of:** "string", "integer", "boolean", "number", "object", "array".
   - **Enums:** Treat as "string".
   - **Nested Fields:** If a field like `meta.hidden` exists, list it as `hidden` in paramTypes with type `boolean`.
   - **Look closely at the spec:** If the spec says `type: boolean`, you MUST output "boolean".

### Output Format (Strict JSON):
{
  "EntityName": {
    "operations": {
      "opType": {
        "name": "functionName",
        "descriptionTemplate": "desc",
        "method": "METHOD",
        "path": "/path",
        "params": ["p1", "hidden", "versioning", "id"], 
        "bodyTemplate": {"key": "{key}", "id": "{id}", "meta": {"hidden": "{hidden}"}},
        "paramTypes": {"p1": "string", "key": "integer", "hidden": "boolean", "versioning": "boolean", "id": "string"},
        "x-negative-delete-expected-codes": [404] 
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

def get_cache_path(content_hash: str) -> Path:
    return CACHE_DIR / f"{content_hash}.json"

def call_llm(chunk_data: Dict[str, Any], force: bool) -> Dict[str, Any]:
    chunk_str = json.dumps(chunk_data, sort_keys=True)
    chunk_hash = hashlib.md5(chunk_str.encode("utf-8")).hexdigest()
    cache_file = get_cache_path(chunk_hash)

    if not force and cache_file.exists():
        return json.loads(cache_file.read_text(encoding="utf-8"))

    print(f"   > 🧠 Processing chunk {chunk_hash[:8]} with {MODEL_NAME}...")
    max_retries = 5
    retry_delay = 5 
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
            time.sleep(retry_delay)
            retry_delay *= 2
    raise Exception("Max retries exceeded.")

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

def patch_known_types(entities: Dict[str, Any]):
    print("   > 🔧 Patching known parameter types...")
    bool_keywords = ["hidden", "versioning", "singleton", "enabled", "locked", "readonly", "required", "system", "active"]
    int_keywords = ["limit", "offset", "width", "height", "sort", "year", "mileage", "capacity"]

    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op in ops.values():
            param_list = op.get("params", [])
            param_types = op.setdefault("paramTypes", {})
            
            all_keys = set(param_list)
            if "bodyTemplate" in op:
                 _recursive_find_keys(op["bodyTemplate"], all_keys)

            for p in all_keys:
                if p.lower() in bool_keywords:
                    param_types[p] = "boolean"
                elif p.lower() in int_keywords:
                    param_types[p] = "integer"

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
            
            if not schema:
                continue

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

            # Promote COMMON OPTIONAL fields
            common_fields = ["name", "title", "data", "description", "key"]
            for field in common_fields:
                if field in properties and field not in add_op.get("params", []):
                    add_op["params"].append(field)
                    add_op.setdefault("paramTypes", {})[field] = "string"
                    add_op.setdefault("bodyTemplate", {})[field] = f"{{{field}}}"

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

def patch_normalize_id_parameters(entities: Dict[str, Any]):
    """
    Renames entity-specific IDs (e.g. idBoard, idCard) to 'id' in all operations.
    This ensures that Create and Verify steps share the same variable.
    """
    print("   > 🏷️  Normalizing ID parameters...")
    
    for ent_name, ent_data in entities.items():
        # Calculate the Trello-style ID name (e.g. Boards -> idBoard)
        singular_name = ent_name.rstrip("s").lower()
        # Handle exceptions or simple singularization
        if ent_name.endswith("ies"): singular_name = ent_name[:-3] + "y"
        
        trello_key = "id" + singular_name.capitalize() # idBoard
        
        ops = ent_data.get("operations", {})
        for op_type, op_data in ops.items():
            params = op_data.get("params", [])
            path = op_data.get("path", "")
            
            # If we find idBoard, rename to id
            if trello_key in params:
                # 1. Update Params List
                params = [p if p != trello_key else "id" for p in params]
                op_data["params"] = params
                
                # 2. Update Path
                op_data["path"] = path.replace(f"{{{trello_key}}}", "{id}")
                
                # 3. Update Param Types
                ptypes = op_data.get("paramTypes", {})
                if trello_key in ptypes:
                    ptypes["id"] = ptypes.pop(trello_key)
                    
                # 4. Update Body Template (if exists)
                if "bodyTemplate" in op_data:
                    # If the body actually USES idBoard, we keep the key but value is {id}
                    if trello_key in op_data["bodyTemplate"]:
                        op_data["bodyTemplate"][trello_key] = "{id}"

def patch_augment_creation_params(entities: Dict[str, Any]):
    print("   > 🆔 Optimizing entity configuration (Generic)...")
    
    system_entity_keywords = [
        "activity", "log", "revision", "version", 
        "file", "operation", "folder", "permission", "role", "preset", 
        "relation", "comment", "field", "item"
    ]
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        if "id" not in add_op.get("params", []):
            add_op.setdefault("params", []).append("id")
            add_op.setdefault("paramTypes", {})["id"] = "string"
            if add_op.get("bodyTemplate") is None: add_op["bodyTemplate"] = {}
            add_op["bodyTemplate"]["id"] = "{id}"
        
        if any(kw in ent_name.lower() for kw in system_entity_keywords):
             add_op["x-generate-full-story"] = False

        singular_name = ent_name.rstrip("s").lower()
        params = add_op.get("params", [])
        
        if singular_name in params and singular_name != "id":
             add_op["params"].remove(singular_name)
             if add_op.get("bodyTemplate") is None: add_op["bodyTemplate"] = {}
             add_op["bodyTemplate"][singular_name] = "{id}"
             
        if ent_name == "Webhooks" and "idWebhook" in params:
             add_op["params"].remove("idWebhook")

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

def patch_augment_response_codes(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    print("   > 🔍 Extracting valid response codes from OpenAPI...")
    paths = raw_spec.get("paths", {})
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op_type, op_data in ops.items():
            path = op_data.get("path")
            method = op_data.get("method", "").lower()
            
            if path in paths and method in paths[path]:
                responses = paths[path][method].get("responses", {})
                codes = []
                for code in responses.keys():
                    if code.isdigit():
                        codes.append(int(code))
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
            
        action_keywords = ["/sync", "/provision", "/render-config", "/requeue", "/generate", "/promote", "/clear", "/reset"]
        for ent_name, ent_data in entities.items():
            add_op = ent_data.get("operations", {}).get("add")
            if add_op:
                path = add_op.get("path", "")
                if any(path.endswith(kw) or path.endswith(kw + "/") for kw in action_keywords):
                    add_op["x-generate-full-story"] = False
    except: pass

def load_openapi(path: Path) -> Dict[str, Any]:
    with open(path, 'r', encoding='utf-8') as f: return json.load(f)

def process_openapi(openapi_path: Path, sut_name: str, force: bool = False) -> Dict[str, Any]:
    output_path = Path("new_repo/specs") / f"{sut_name}.generated.json"
    if not force and output_path.exists(): return json.loads(output_path.read_text(encoding="utf-8"))

    raw_spec = load_openapi(openapi_path)
    chunks = chunk_openapi(raw_spec)
    all_entities = {}
    for chunk in chunks:
        extracted = call_llm(chunk, force)
        merge_specs(all_entities, extracted)
    
    patch_known_types(all_entities)
    patch_ensure_required_fields(all_entities, raw_spec) 
    patch_link_orphaned_operations(all_entities, raw_spec)
    patch_simplify_primary_operations(all_entities, raw_spec)
    # --- NEW: Normalize IDs after simplification ---
    patch_normalize_id_parameters(all_entities)
    # -----------------------------------------------
    patch_augment_creation_params(all_entities) 
    patch_augment_response_codes(all_entities, raw_spec)
    dependencies = map_dependencies(all_entities)
    classify_entities_semantically(all_entities, raw_spec)

    context = {"sut_name": sut_name, "base_url": "http://localhost:8000", "entities": all_entities, "dependencies": dependencies, "original_spec": raw_spec}
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f: json.dump(context, f, indent=2)
    return context