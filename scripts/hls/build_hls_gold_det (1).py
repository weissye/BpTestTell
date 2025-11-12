#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
build_hls_gold_det.py
---------------------
Simple (safe) DET gold builder.

Input (minimum):
  --sut <name>
  --provider 7_suts_llm_provider|real_world_llm_provider
  --dsl_map <path to models/.../dsl_map.json>
  --out <hls_gold.json>

Behavior:
  - Generates 6 canonical CRUD stories per entity found in DSL map:
      create→verify, update→verify, delete→verify
  - Emits both "stories" (array of {"name","js"}) and "stories_js" (concatenated)
  - mode="det"
"""

import argparse, json, os, sys, re
from pathlib import Path

def load_json(p):
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)

def make_story_js(entity: str, idx: int) -> list[tuple[str,str]]:
    """
    Returns list of (name, js_block) pairs for the 6 canonical DET stories.
    The DSL function names are generic and should exist in the user's DSL map.
    You can refine them later; this outputs working placeholders commonly found
    in your projects.
    """
    stories = []
    # 1) create→verify not exists -> create -> verify exists
    name = f"crud:{entity}:det:1:{idx}"
    js = f"""// ---- crud:{entity}:det:1:{idx} ----
bthread("crud:{entity}:det:1:{idx}", function() {{
  const id = uniqueId("{entity}");
  verify{entity.title()}DoesNotExist(id);
  create{entity.title()}(id, seed{entity.title()}());
  verify{entity.title()}Exists(id);
}});
"""
    stories.append((name, js))

    # 2) update existing
    name = f"crud:{entity}:det:2:{idx}"
    js = f"""// ---- crud:{entity}:det:2:{idx} ----
bthread("crud:{entity}:det:2:{idx}", function() {{
  const id = uniqueId("{entity}");
  create{entity.title()}(id, seed{entity.title()}());
  update{entity.title()}(id, patch{entity.title()}());
  verify{entity.title()}Updated(id);
}});
"""
    stories.append((name, js))

    # 3) delete existing
    name = f"crud:{entity}:det:3:{idx}"
    js = f"""// ---- crud:{entity}:det:3:{idx} ----
bthread("crud:{entity}:det:3:{idx}", function() {{
  const id = uniqueId("{entity}");
  create{entity.title()}(id, seed{entity.title()}());
  delete{entity.title()}(id);
  verify{entity.title()}DoesNotExist(id);
}});
"""
    stories.append((name, js))

    return stories

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--provider", required=True)
    ap.add_argument("--dsl_map", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    dsl = load_json(args.dsl_map)
    # Try to infer entities from the DSL map (fallback to ["record"])
    entities = list(sorted(set(dsl.get("entities") or dsl.get("entity_names") or ["record"])))

    stories = []
    for idx, ent in enumerate(entities, start=1):
        stories.extend([{"name": nm, "js": js} for nm, js in make_story_js(ent, idx)])

    stories_js = "\n".join(s["js"] for s in stories)
    gold = {
        "sut": args.sut,
        "provider": args.provider,
        "mode": "det",
        "source": {"created_by": "build_hls_gold_det.py"},
        "stories": stories,
        "stories_js": stories_js
    }

    out_path = Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with open(out_path, "w", encoding="utf-8") as f:
        json.dump(gold, f, indent=2, ensure_ascii=False)
    print(f"[OK] wrote {out_path.as_posix()}  (stories={len(stories)})")

if __name__ == "__main__":
    main()
