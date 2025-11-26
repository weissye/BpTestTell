#!/usr/bin/env python
"""
OpenAPI -> unified CRUD spec (JSON).
Strategy: Batch processing by OpenAPI 'Tags' to handle massive files like GitHub.
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
   - If the path is `/repos/{owner}/{repo}` and body has `name`, mapped them carefully.
   - **IMPORTANT**: The 'params' list MUST include ALL path parameters (e.g., 'owner', 'repo') needed to identify the resource.
4. **Regex**: Generate 'waitForPatterns' with regex matching the 'descriptionTemplate'.

OUTPUT JSON FORMAT (Return ONLY this object):
{
  "entities": {
    "Repository": {
      "displayName": "repository",
      "params": ["owner", "repo"],
      "operations": {
        "add": { 
            "name": "createRepo", 
            "method": "POST", 
            "path": "/user/repos", 
            "descriptionTemplate": "Create repo {name}",
            "params": ["name"],
            "bodyTemplate": {"name": "{name}"} 
        },
        "delete": { 
            "name": "deleteRepo", 
            "method": "DELETE", 
            "path": "/repos/{owner}/{repo}", 
            "descriptionTemplate": "Delete repo {repo} of {owner}",
            "params": ["owner", "repo"]
        }
      },
      "waitForPatterns": { ... }
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
    for path_str, methods in paths.items():
        for method, details in methods.items():
            # Use the first tag as the grouping key, or "General" if none
            tags = details.get("tags", [])
            group = tags[0] if tags else "General"
            
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
    openapi_data = load_openapi(openapi_path)
    
    # 1. Group by Tags
    grouped_paths = get_paths_by_tag(openapi_data)
    print(f"[INFO] Found {len(grouped_paths)} tag groups. Processing batches...")

    client = LLMClient()
    master_spec = {
        "sut": args.sut,
        "base_url": "http://localhost:8080",
        "entities": {},
        "stories": []
    }

    # 2. Iterate and Process
    # We process the top 35 largest groups to ensure we capture Repos, Issues, etc.
    sorted_groups = sorted(grouped_paths.items(), key=lambda x: len(x[1]), reverse=True)
    
    for i, (tag, paths) in enumerate(sorted_groups[:35]):
        print(f"   > Processing Batch {i+1}/35: '{tag}' ({len(paths)} paths)...")
        
        user_prompt = (
            f"SUT: {args.sut}\n"
            f"Domain: {tag}\n"
            f"Analyze these API paths and extract entities:\n"
            f"{simplify_spec_chunk(paths)}"
        )
        
        try:
            partial_spec = client.complete_json(SYSTEM_PROMPT, user_prompt, "CRUD chunk")
            
            # Merge into master
            if "entities" in partial_spec:
                for e_name, e_data in partial_spec["entities"].items():
                    # Basic de-duplication
                    if e_name not in master_spec["entities"]:
                        master_spec["entities"][e_name] = e_data
                    else:
                        # Merge operations if split across tags
                        master_spec["entities"][e_name]["operations"].update(e_data.get("operations", {}))
                        
        except Exception as e:
            print(f"   [WARN] Failed batch '{tag}': {e}")

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