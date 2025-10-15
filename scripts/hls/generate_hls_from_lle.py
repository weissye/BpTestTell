#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
DET -> HLS-DET generator.
- Parses the LLE json (format-agnostic; regex-falls back).
- Extracts (entity, op) pairs. If unknown, synthesizes add/update/delete for the SUT.
- Emits stories with deterministic structure.
"""
import argparse, json, os, re, random, sys
from pathlib import Path

def safe_read_json(p):
    try:
        return json.loads(Path(p).read_text(encoding="utf-8"))
    except Exception:
        # best-effort: sometimes the "gold" is a JSONL / shards; try to concatenate objects
        try:
            lines = [json.loads(x) for x in Path(p).read_text(encoding="utf-8").splitlines() if x.strip()]
            return {"_lines": lines}
        except Exception:
            return None

def find_ops_entities(data_text):
    # e.g., addUser, updateAccount, deleteRepo
    found = re.findall(r'\b(add|create|update|modify|delete|remove)([A-Z][A-Za-z0-9_]*)\b', data_text)
    pairs = set()
    for verb, ent in found:
        op = {"add":"add","create":"add","update":"update","modify":"update","delete":"delete","remove":"delete"}[verb]
        pairs.add((ent, op))
    return pairs

def guess_entities(data_obj, fallback_name):
    ents = set()
    # look for top-level keys that look like entities
    if isinstance(data_obj, dict):
        for k,v in data_obj.items():
            if isinstance(k,str) and re.match(r'^[A-Za-z][A-Za-z0-9_]*$', k) and k.lower() not in {"ops","events","shards","meta"}:
                ents.add(k[0].upper()+k[1:])
    # fallback to the sut name
    if not ents:
        ents = {fallback_name[0].upper()+fallback_name[1:]}
    return ents

def build_story(entity, op):
    reverse = {"add":"delete","update":"update","delete":"add"}[op]
    checks = []
    if op=="add":
        checks = [f"verify{entity}Exists"]
    elif op=="update":
        checks = [f"verify{entity}Exists", f"verify{entity}Updated"]
    elif op=="delete":
        checks = [f"verify{entity}NotExists"]
    return {
        "entity": entity,
        "op": op,
        "params": {"id":"<id>"},
        "blocks": [f"{reverse}{entity}"],
        "checks": checks
    }

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--lle_gold", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()
    random.seed(args.seed)

    src = Path(args.lle_gold)
    txt = src.read_text(encoding="utf-8", errors="ignore")
    data = safe_read_json(src)

    pairs = find_ops_entities(txt)
    if not pairs and isinstance(data, dict):
        # try pull entity list and synthesize
        ents = guess_entities(data, args.sut)
        pairs = {(e,"add") for e in ents} | {(e,"update") for e in ents} | {(e,"delete") for e in ents}
    # cap size to something reasonable, deterministic
    pairs = sorted(pairs)[:60]

    stories = [build_story(ent, op) for (ent, op) in pairs]
    out_obj = {
        "sut": args.sut,
        "source": str(src),
        "seed": args.seed,
        "stories": stories
    }

    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(json.dumps(out_obj, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[OK] wrote {args.out} with {len(stories)} stories")

if __name__ == "__main__":
    sys.exit(main())
