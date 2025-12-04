#!/usr/bin/env python
"""
OpenAPI -> unified CRUD spec (JSON).
Strategy: Batch processing by OpenAPI 'Tags' with SIZE LIMITS to handle massive files.
Includes caching (in 'new_repo/inter') to avoid re-running LLM calls.
"""

import argparse
import json
import yaml
import os
from pathlib import Path
from collections import defaultdict

from new_repo.llm.llm_client import LLMClient
from new_repo.pipeline.emit_interfaces_and_stories_from_spec import emit_interfaces_and_stories

ROOT = Path(__file__).resolve().parents[2]

# Max paths per LLM request to avoid Token Limits (400k TPM)
MAX_PATHS_PER_BATCH = 10 

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
    """Group API paths by their first tag."""
    tagged_groups = defaultdict(dict)
    
    paths = openapi_data.get("paths", {})
    for path_str, path_item in paths.items():
        if not isinstance(path_item, dict): continue

        for method, details in path_item.items():
            if method in ["parameters", "summary", "description", "$ref", "servers"]: continue
            if not isinstance(details, dict): continue

            tags = details.get("tags", [])
            # Fallback group if no tags
            group = tags[0] if tags and isinstance(tags, list) else "General"
            
            if path_str not in tagged_groups[group]:
                tagged_groups[group][path_str] = {}
            tagged_groups[group][path_str][method] = details
            
    return tagged_groups

def chunk_dict(d, chunk_size):
    """Yield successive chunk_size-sized dictionaries from d."""
    it = iter(d)
    for i in range(0, len(d), chunk_size):
        yield {k: d[k] for k in list(d)[i:i + chunk_size]}

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

def get_safe_filename(tag):
    """Sanitize tag string for filesystem."""
    return "".join([c if c.isalnum() or c in ('-', '_') else '_' for c in tag])

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sut", required=True)
    parser.add_argument("--openapi", required=True)
    parser.add_argument("--out-dir", required=True)
    parser.add_argument("--force", action="store_true", help="Ignore cache and regenerate all")
    args = parser.parse_args()

    openapi_path = Path(args.openapi)
    if not openapi_path.is_file():
        raise SystemExit(f"[ERR] File not found: {openapi_path}")

    # Prepare Inter directory for caching
    inter_dir = Path("new_repo/inter") / args.sut
    inter_dir.mkdir(parents=True, exist_ok=True)

    print(f"[INFO] Loading OpenAPI for {args.sut}...")
    try:
        openapi_data = load_openapi(openapi_path)
    except Exception as e:
        print(f"[ERR] Failed to parse OpenAPI file: {e}")
        return

    # 1. Group by Tags
    grouped_paths = get_paths_by_tag(openapi_data)
    
    # 2. Prepare Work Batches (Split large tags into smaller chunks)
    work_batches = []
    for tag, paths in grouped_paths.items():
        if len(paths) > MAX_PATHS_PER_BATCH:
            # Split huge tags (like 'dcim') into sub-parts
            chunks = list(chunk_dict(paths, MAX_PATHS_PER_BATCH))
            for idx, chunk in enumerate(chunks):
                batch_name = f"{tag}_part{idx+1}"
                work_batches.append((batch_name, chunk))
        else:
            work_batches.append((tag, paths))

    print(f"[INFO] Found {len(grouped_paths)} tags, split into {len(work_batches)} processing batches.")

    client = LLMClient()
    master_spec = {
        "sut": args.sut,
        "base_url": "http://localhost:8080",
        "entities": {},
        "stories": [],
        "original_spec": openapi_data
    }

    # Get timestamp of input file for cache validation
    input_mtime = openapi_path.stat().st_mtime

    # 3. Process Batches
    for i, (batch_name, paths) in enumerate(work_batches):
        safe_name = get_safe_filename(batch_name)
        cache_path = inter_dir / f"{safe_name}.json"
        
        partial_spec = None
        
        # --- CACHE CHECK ---
        if not args.force and cache_path.exists():
            # Check if cache is newer than the input file
            if cache_path.stat().st_mtime > input_mtime:
                try:
                    print(f"   > Batch {i+1}/{len(work_batches)}: '{batch_name}' (Loading from cache)")
                    partial_spec = json.loads(cache_path.read_text(encoding="utf-8"))
                except Exception:
                    print(f"   [WARN] Cache corrupted for '{batch_name}', regenerating...")
        
        # --- REGENERATE IF NEEDED ---
        if not partial_spec:
            print(f"   > Batch {i+1}/{len(work_batches)}: '{batch_name}' (Processing {len(paths)} paths with LLM)...")
            user_prompt = (
                f"SUT: {args.sut}\n"
                f"Domain: {batch_name}\n"
                f"Analyze these API paths and extract entities:\n"
                f"{simplify_spec_chunk(paths)}"
            )
            
            try:
                partial_spec = client.complete_json(SYSTEM_PROMPT, user_prompt, "CRUD chunk")
                # Save to cache
                cache_path.write_text(json.dumps(partial_spec, indent=2), encoding="utf-8")
            except Exception as e:
                print(f"   [WARN] Failed batch '{batch_name}': {e}")
                continue

        # --- MERGE INTO MASTER ---
        if partial_spec and "entities" in partial_spec:
            for e_name, e_data in partial_spec["entities"].items():
                if e_name not in master_spec["entities"]:
                    master_spec["entities"][e_name] = e_data
                else:
                    # Merge operations if entity is split across batches
                    master_spec["entities"][e_name]["operations"].update(e_data.get("operations", {}))
                    # Merge params
                    existing_params = set(master_spec["entities"][e_name].get("params", []))
                    new_params = set(e_data.get("params", []))
                    master_spec["entities"][e_name]["params"] = list(existing_params.union(new_params))

    # 4. Save Unified Spec
    specs_dir = Path("new_repo/specs")
    specs_dir.mkdir(parents=True, exist_ok=True)
    spec_path = specs_dir / f"{args.sut}.generated.json"
    
    # Save debug spec (without the huge original_spec to save space)
    debug_spec = master_spec.copy()
    debug_spec.pop("original_spec", None)
    spec_path.write_text(json.dumps(debug_spec, indent=2), encoding="utf-8")
    
    print(f"[OK] Saved unified spec to {spec_path} ({len(master_spec['entities'])} entities found)")

    # 5. Emit Code
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    
    emit_interfaces_and_stories(master_spec, out_dir)
    print(f"[OK] Generated JS in {out_dir}")

if __name__ == "__main__":
    main()