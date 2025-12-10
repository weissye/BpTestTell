import os
import json
import hashlib
import time
import sys
from pathlib import Path
from typing import Dict, Any, List
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

def patch_known_types(entities: Dict[str, Any]):
    """Fallback Heuristic: Ensures known parameter names map to the correct types."""
    print("   > 🔧 Patching known parameter types...")
    # 'data' removed from boolean keywords to prevent collision on files/flows
    bool_keywords = ["hidden", "versioning", "singleton", "enabled", "locked", "readonly", "required", "system"]
    int_keywords = ["limit", "offset", "width", "height", "sort"]

    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        for op in ops.values():
            params = op.get("paramTypes", {})
            for p in list(params.keys()):
                if p.lower() in bool_keywords: params[p] = "boolean"
                elif p.lower() in int_keywords: params[p] = "integer"

def patch_augment_creation_params(entities: Dict[str, Any]):
    """
    Generic Heuristic: Ensures 'id' and other essential unique fields 
    are always included in the body/params for complex resources like Flows,
    even if OpenAPI makes them optional, to prevent mock collisions (409 errors).
    """
    print("   > 🆔 Patching essential creation parameters...")
    
    # Entities prone to payload duplication if data/name/key fields are not randomized
    complex_creation_entities = ["Flows", "Operations", "Files"] 
    
    for ent_name, ent_data in entities.items():
        ops = ent_data.get("operations", {})
        add_op = ops.get("add")
        if not add_op: continue
        
        # 1. Ensure 'id' is present and mapped to body (Standard check)
        if "id" not in add_op.get("params", []):
            add_op.setdefault("params", []).append("id")
            
        add_op.setdefault("paramTypes", {})["id"] = "string"
        add_op.setdefault("bodyTemplate", {})["id"] = "{id}"
            
        # 2. GENERIC FIX: Inject unique/descriptive fields for complex entities
        if ent_name in complex_creation_entities:
            
            # Use 'data' field for Flow and Files to ensure unique payload structure
            if "data" not in add_op.get("params", []) and "data" in add_op.get("paramTypes", {}):
                 add_op.setdefault("params", []).append("data")
                 add_op.setdefault("bodyTemplate", {})["data"] = "{data}"
            
            # Use 'name' for Operations, Roles, etc.
            if "name" not in add_op.get("params", []) and "name" in add_op.get("paramTypes", {}):
                 add_op.setdefault("params", []).append("name")
                 add_op.setdefault("bodyTemplate", {})["name"] = "{name}"

def patch_augment_response_codes(entities: Dict[str, Any], raw_spec: Dict[str, Any]):
    """
    Attaches documented response codes from the OpenAPI spec to the model.
    """
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
    patch_augment_creation_params(all_entities) # CRITICAL: Includes unique fields like 'data' in Flow payload
    patch_augment_response_codes(all_entities, raw_spec)
    dependencies = map_dependencies(all_entities)
    classify_entities_semantically(all_entities, raw_spec)

    context = {"sut_name": sut_name, "base_url": "http://localhost:8000", "entities": all_entities, "dependencies": dependencies, "original_spec": raw_spec}
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f: json.dump(context, f, indent=2)
    return context