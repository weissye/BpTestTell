#!/usr/bin/env python
"""
OpenAPI -> unified CRUD spec (JSON).
Strategy: Batch processing by OpenAPI 'Tags', further chunked by size to handle massive files.
Includes robustness fixes for 'parameters' lists and malformed paths.
"""

import argparse
import json
import yaml
from pathlib import Path
from collections import defaultdict

from new_repo.llm.llm_client import LLMClient
from new_repo.pipeline.emit_interfaces_and_stories_from_spec import emit_interfaces_and_stories

ROOT = Path(__file__).resolve().parents[2]

SYSTEM_PROMPT = """
You are a Test Automation Architect.
Extract "CRUD Entities" from the provided OpenAPI fragment.

CRITICAL RULES:
1. **Identify Entities**: Group paths into logical entities (e.g., 'Repository', 'Issue').
2. **Operations**: Find 'add' (POST), 'delete' (DELETE), 'update' (PATCH/PUT), 'get' (GET).
3. **Parameter Normalization**: 
   - **MANDATORY**: You MUST examine the Schema for the request body.
   - **IF** a field (like 'id', 'ndc', 'key', 'slug') is listed in `required` AND is NOT marked `readOnly`, you **MUST** include it in `params` and `bodyTemplate`.
   - **IF** a field is `readOnly` or missing from `required` (standard auto-increment IDs), do **NOT** include it in the `add` body.
4. **Regex**: Generate 'waitForPatterns' with regex matching the 'descriptionTemplate'.

OUTPUT JSON FORMAT (Return ONLY this object):
{
  "entities": {
    "Drug": {
      "displayName": "drug",
      "params": ["id", "name"], 
      "operations": {
        "add": { 
            "name": "createDrug", 
            "method": "POST", 
            "path": "/drugs", 
            "descriptionTemplate": "Create drug {name} with id {id}",
            "params": ["id", "name"],
            "bodyTemplate": {"id": "{id}", "name": "{name}"}
        }
      }
    }
  }
}
"""

def load_openapi(path: Path):
    text = path.read_text(encoding="utf-8")
    if path.suffix == ".yaml" or path.suffix == ".yml":
        return yaml.safe_load(text)
    return json.loads(text)

def get_paths_by_tag(openapi_data):
    """Group API paths by their first tag to create manageable chunks."""
    tagged_groups = defaultdict(dict)
    
    paths = openapi_data.get("paths", {})
    for path_str, path_item in paths.items():
        # Robustness Check: Ensure path_item is a dictionary
        if not isinstance(path_item, dict):
            continue

        for method, details in path_item.items():
            # Robustness Check: Skip 'parameters', 'summary', '$ref' keys at path level
            if method in ["parameters", "summary", "description", "$ref", "servers"]:
                continue
            
            # Robustness Check: Ensure 'details' is actually a dict (the method definition)
            if not isinstance(details, dict):
                continue

            # Use the first tag as the grouping key, or "General" if none
            tags = details.get("tags", [])
            
            # Handle case where tags might not be a list (malformed spec)
            if tags and isinstance(tags, list):
                group = tags[0]
            else:
                group = "General"
            
            if path_str not in tagged_groups[group]:
                tagged_groups[group][path_str] = {}
            tagged_groups[group][path_str][method] = details
            
    return tagged_groups

def simplify_spec_chunk(chunk_paths):
    """Remove heavy response/example data to save tokens."""
    simplified = {}
    for p, methods in chunk_paths.items():
        simplified[p] = {}
        for m, details in methods.items():
            simplified[p][m] = {
                "summary": details.get("summary", ""),
                "operationId": details.get("operationId", ""),
                "parameters": details.get("parameters", []),
                "requestBody": details.get("requestBody", {})
            }
    return json.dumps(simplified, indent=2)

def chunk_dict(data, size):
    """Yield successive size-chunks from dictionary items."""
    it = iter(data.items())
    # We consume the iterator in chunks
    for i in range(0, len(data), size):
        # Grab 'size' items, or whatever is left
        chunk = {}
        for _ in range(size):
            try:
                k, v = next(it)
                chunk[k] = v
            except StopIteration:
                break
        yield chunk

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sut", required=True)
    parser.add_argument("--openapi", required=True)
    parser.add_argument("--out-dir", required=True)
    args = parser.parse_args()

    openapi_path = Path(args.openapi)
    if not openapi_path.is_file():
        raise SystemExit(f"[ERR] File not found: {openapi_path}")

    print(f"[INFO] Loading OpenAPI for {args.sut}...")
    try:
        openapi_data = load_openapi(openapi_path)
    except Exception as e:
        print(f"[ERR] Failed to parse OpenAPI file: {e}")
        return

    # 1. Group by Tags
    grouped_paths = get_paths_by_tag(openapi_data)
    print(f"[INFO] Found {len(grouped_paths)} tag groups.")

    client = LLMClient()
    
    # Pass the raw OpenAPI spec to the Emitter later so it can resolve schemas!
    master_spec = {
        "sut": args.sut,
        "base_url": "http://localhost:8080",
        "entities": {},
        "stories": [],
        "original_spec": openapi_data # Pass complete spec for reference
    }

    # 2. Iterate and Process
    sorted_groups = sorted(grouped_paths.items(), key=lambda x: len(x[1]), reverse=True)
    
    # Limit processing to top 35 tags to avoid indefinite runtimes on huge specs
    MAX_TAGS = 35
    # Max paths per LLM call (Safe limit for 128k context models)
    MAX_PATHS_PER_BATCH = 10 
    
    for i, (tag, paths) in enumerate(sorted_groups[:MAX_TAGS]):
        
        # Split large tags into smaller chunks
        path_chunks = list(chunk_dict(paths, MAX_PATHS_PER_BATCH))
        
        for chunk_idx, chunk_paths in enumerate(path_chunks):
            print(f"   > Processing Batch {i+1}/{min(len(sorted_groups), MAX_TAGS)} [{chunk_idx+1}/{len(path_chunks)}]: '{tag}' ({len(chunk_paths)} paths)...")
            
            user_prompt = (
                f"SUT: {args.sut}\n"
                f"Domain: {tag} (Part {chunk_idx+1})\n"
                f"Analyze these API paths and extract entities:\n"
                f"{simplify_spec_chunk(chunk_paths)}"
            )
            
            try:
                partial_spec = client.complete_json(SYSTEM_PROMPT, user_prompt, "CRUD chunk")
                
                # Merge into master
                if "entities" in partial_spec:
                    for e_name, e_data in partial_spec["entities"].items():
                        if e_name not in master_spec["entities"]:
                            master_spec["entities"][e_name] = e_data
                        else:
                            # Merge operations if entity already exists (split across chunks)
                            if "operations" in e_data:
                                master_spec["entities"][e_name]["operations"].update(e_data["operations"])
                            
                            # Merge params (unify lists)
                            if "params" in e_data:
                                current_params = set(master_spec["entities"][e_name].get("params", []))
                                new_params = set(e_data["params"])
                                master_spec["entities"][e_name]["params"] = list(current_params.union(new_params))
                            
            except Exception as e:
                print(f"   [WARN] Failed batch '{tag}' part {chunk_idx+1}: {e}")

    # 3. Save Intermediate
    specs_dir = Path("new_repo/specs")
    specs_dir.mkdir(parents=True, exist_ok=True)
    spec_path = specs_dir / f"{args.sut}.generated.json"
    spec_path.write_text(json.dumps(master_spec, indent=2), encoding="utf-8")
    print(f"[OK] Saved unified spec to {spec_path} ({len(master_spec['entities'])} entities found)")

    # 4. Emit Code
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    emit_interfaces_and_stories(master_spec, out_dir)
    print(f"[OK] Generated JS in {out_dir}")

if __name__ == "__main__":
    main()