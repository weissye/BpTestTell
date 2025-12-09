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
3. **Extract Parameters:** List path/query params.
4. **Body Template:** Create a JSON template for POST/PUT. 
   - Use placeholders matching the **Property Name** (e.g. "{name}", "{device_role}").
5. **Extract Types (CRITICAL):** For EVERY parameter (in path, query, or body fields), identify its primitive type.
   - Format: "string", "integer", "boolean", "number".
   - If a field is an enum, treat as its base type (usually string).

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
        "paramTypes": {"p1": "string", "key": "integer", "isActive": "boolean"},
        "x-negative-delete-expected-codes": [404] 
      }
    }
  }
}
"""

def get_cache_path(content_hash: str) -> Path:
    return CACHE_DIR / f"{content_hash}.json"

def call_llm(chunk_data: Dict[str, Any], force: bool) -> Dict[str, Any]:
    chunk_str = json.dumps(chunk_data, sort_keys=True)
    chunk_hash = hashlib.md5(chunk_str.encode("utf-8")).hexdigest()
    cache_file = get_cache_path(chunk_hash)

    if not force and cache_file.exists():
        print(f"   > Loaded chunk {chunk_hash[:8]} from chunk-cache.")
        return json.loads(cache_file.read_text(encoding="utf-8"))

    print(f"   > 🧠 Processing chunk {chunk_hash[:8]} with {MODEL_NAME}...")
    
    max_retries = 5
    retry_delay = 5 
    
    for attempt in range(max_retries):
        try:
            response = client.chat.completions.create(
                model=MODEL_NAME,
                response_format={"type": "json_object"},
                messages=[
                    {"role": "system", "content": SYSTEM_PROMPT},
                    {"role": "user", "content": f"Analyze this paths subset:\n{chunk_str}"}
                ],
                temperature=0
            )
            result_str = response.choices[0].message.content
            result_json = json.loads(result_str)
            cache_file.write_text(json.dumps(result_json, indent=2), encoding="utf-8")
            return result_json

        except RateLimitError:
            print(f"   ⏳ Rate limit hit. Waiting {retry_delay}s... ({attempt+1}/{max_retries})")
            time.sleep(retry_delay)
            retry_delay *= 2 
            
        except Exception as e:
            print(f"   ❌ LLM Error: {e}")
            raise e
            
    raise Exception("Max retries exceeded.")

def chunk_openapi(raw_spec: Dict[str, Any], batch_size=5) -> List[Dict[str, Any]]:
    paths = list(raw_spec.get("paths", {}).items())
    chunks = []
    for i in range(0, len(paths), batch_size):
        chunk_paths = dict(paths[i:i + batch_size])
        chunk = { "paths": chunk_paths }
        chunks.append(chunk)
    return chunks

def merge_specs(main_entities: Dict[str, Any], new_entities: Dict[str, Any]):
    for ent_name, ent_data in new_entities.items():
        if ent_name not in main_entities:
            main_entities[ent_name] = {"operations": {}}
        if "operations" in ent_data:
            main_entities[ent_name]["operations"].update(ent_data["operations"])

def load_openapi(path: Path) -> Dict[str, Any]:
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def process_openapi(openapi_path: Path, sut_name: str, force: bool = False) -> Dict[str, Any]:
    output_path = Path("new_repo/specs") / f"{sut_name}.generated.json"

    if not force and output_path.exists():
        print(f"[Processor] ⚡ Found cache: {output_path}")
        return json.loads(output_path.read_text(encoding="utf-8"))

    print(f"[Processor] Loading OpenAPI from {openapi_path}...")
    raw_spec = load_openapi(openapi_path)
    
    chunks = chunk_openapi(raw_spec, batch_size=5)
    print(f"[Processor] Optimized Split: {len(chunks)} chunks.")
    
    all_entities = {}
    try:
        for i, chunk in enumerate(chunks):
            print(f"[Batch {i+1}/{len(chunks)}]")
            extracted = call_llm(chunk, force)
            merge_specs(all_entities, extracted)
            time.sleep(0.5) 
    except Exception as e:
        print(f"\n❌ FATAL: Pipeline stopped. Reason: {e}")
        sys.exit(1)

    context = {
        "sut_name": sut_name,
        "base_url": raw_spec.get("servers", [{}])[0].get("url", "http://localhost:8000"),
        "entities": all_entities,
        "original_spec": raw_spec
    }

    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(context, f, indent=2)
    
    print(f"[OK] Saved model to {output_path}")
    return context