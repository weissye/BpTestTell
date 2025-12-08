import os
import json
import hashlib
from pathlib import Path
from typing import Dict, Any, List
from openai import OpenAI

# Initialize OpenAI Client (Ensure OPENAI_API_KEY is set in your env)
client = OpenAI(api_key=os.environ.get("OPENAI_API_KEY"))

# Cache Directory for Chunks
CACHE_DIR = Path("new_repo/cache")
CACHE_DIR.mkdir(parents=True, exist_ok=True)

MODEL_NAME = "gpt-4o" 

SYSTEM_PROMPT = """
You are an expert Test Automation Architect. 
Your task is to analyze a portion of an OpenAPI specification and extract "Entities" and their "Operations" for a test generation pipeline.

### Rules for Extraction:
1. **Identify Entities:** Group paths by the resource they manage (e.g., /books/{id} -> Entity "Books"). Use the 'tags' field if available.
2. **Identify Operations:** For each path/method, determine the operation type:
   - "add" (POST)
   - "get" (GET item)
   - "list" (GET collection)
   - "update" (PUT/PATCH)
   - "delete" (DELETE)
3. **Extract Parameters:** List all path and query parameters.
4. **Construct Body Template:** For POST/PUT, create a JSON template of the request body. Resolve $ref links mentally if possible, or use placeholders like "{field_name}" for required fields.
5. **Smart Logic:**
   - If a DELETE operation has 'x-negative-delete-expected-codes', capture it.
   - Distinctly separate "list" (GET /items) from "get" (GET /items/{id}).

### Output Format (Strict JSON):
Return a JSON object with this structure:
{
  "EntityName": {
    "operations": {
      "opType": {
        "name": "functionName",
        "descriptionTemplate": "description string",
        "method": "HTTP_METHOD",
        "path": "/path/to/resource",
        "params": ["param1", "param2"],
        "bodyTemplate": {"key": "{value}"},
        "x-negative-delete-expected-codes": [404] 
      }
    }
  }
}
"""

def get_cache_path(content_hash: str) -> Path:
    return CACHE_DIR / f"{content_hash}.json"

def call_llm(chunk_data: Dict[str, Any], force: bool) -> Dict[str, Any]:
    """Sends a spec chunk to the LLM or retrieves from cache."""
    chunk_str = json.dumps(chunk_data, sort_keys=True)
    chunk_hash = hashlib.md5(chunk_str.encode("utf-8")).hexdigest()
    cache_file = get_cache_path(chunk_hash)

    # Note: We can still use chunk-level caching even if forcing the main file re-generation,
    # but strictly speaking, if 'force' is True, we usually want to bypass this too.
    if not force and cache_file.exists():
        print(f"   > Loaded chunk {chunk_hash[:8]} from chunk-cache.")
        return json.loads(cache_file.read_text(encoding="utf-8"))

    print(f"   > 🧠 Processing chunk {chunk_hash[:8]} with {MODEL_NAME}...")
    try:
        response = client.chat.completions.create(
            model=MODEL_NAME,
            response_format={"type": "json_object"},
            messages=[
                {"role": "system", "content": SYSTEM_PROMPT},
                {"role": "user", "content": f"Analyze this OpenAPI subset:\n{chunk_str}"}
            ],
            temperature=0
        )
        result_str = response.choices[0].message.content
        result_json = json.loads(result_str)
        
        # Save to chunk cache
        cache_file.write_text(json.dumps(result_json, indent=2), encoding="utf-8")
        return result_json
    except Exception as e:
        print(f"   ❌ LLM Error: {e}")
        return {}

def chunk_openapi(raw_spec: Dict[str, Any], batch_size=8) -> List[Dict[str, Any]]:
    """Splits OpenAPI paths into smaller chunks to fit context window."""
    paths = list(raw_spec.get("paths", {}).items())
    chunks = []
    for i in range(0, len(paths), batch_size):
        chunk_paths = dict(paths[i:i + batch_size])
        chunk = {
            "openapi": raw_spec.get("openapi", "3.0.0"),
            "components": raw_spec.get("components", {}),
            "paths": chunk_paths
        }
        chunks.append(chunk)
    return chunks

def merge_specs(main_entities: Dict[str, Any], new_entities: Dict[str, Any]):
    """Merges results from multiple LLM calls."""
    for ent_name, ent_data in new_entities.items():
        if ent_name not in main_entities:
            main_entities[ent_name] = {"operations": {}}
        
        if "operations" in ent_data:
            main_entities[ent_name]["operations"].update(ent_data["operations"])

def load_openapi(path: Path) -> Dict[str, Any]:
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def process_openapi(openapi_path: Path, sut_name: str, force: bool = False) -> Dict[str, Any]:
    """
    1. Checks if intermediate JSON exists.
    2. IF exists AND not force: Returns it (Fast Path).
    3. ELSE: Runs LLM processing (Slow Path).
    4. Saves output and returns context.
    """
    output_path = Path("new_repo/specs") / f"{sut_name}.generated.json"

    # --- 1. FAST PATH (Cache Hit) ---
    if not force and output_path.exists():
        print(f"[Processor] ⚡ Found existing intermediate model: {output_path}")
        print(f"[Processor] Skipping LLM. To re-learn, run with --force.")
        try:
            with open(output_path, "r", encoding="utf-8") as f:
                return json.load(f)
        except Exception as e:
            print(f"[Processor] ⚠️ Error loading cache: {e}. Falling back to LLM.")

    # --- 2. SLOW PATH (LLM Processing) ---
    print(f"[Processor] Loading OpenAPI from {openapi_path}...")
    raw_spec = load_openapi(openapi_path)
    
    # Chunk and Process
    chunks = chunk_openapi(raw_spec, batch_size=8)
    print(f"[Processor] Split into {len(chunks)} chunks for AI analysis.")
    
    all_entities = {}
    for i, chunk in enumerate(chunks):
        print(f"[Batch {i+1}/{len(chunks)}]")
        extracted = call_llm(chunk, force)
        merge_specs(all_entities, extracted)

    # Construct Context
    servers = raw_spec.get("servers", [])
    base_url = servers[0].get("url", "http://localhost:8080") if servers else "http://localhost:8080"

    context = {
        "sut_name": sut_name,
        "base_url": base_url,
        "entities": all_entities,
        "original_spec": raw_spec
    }

    # --- 3. SAVE INTERMEDIATE FILE ---
    output_path.parent.mkdir(parents=True, exist_ok=True)
    with open(output_path, "w", encoding="utf-8") as f:
        json.dump(context, f, indent=2)
    
    print(f"[OK] Saved new model to {output_path}")
    return context