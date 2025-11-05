#!/usr/bin/env python
# scripts/pipelines/det_from_openapi.py
# Deterministically extract REST ops from OpenAPI and emit:
#  - <sut>_llm_gold_ops.json
#  - <sut>_det_gold.json  (+ a compat copy <sut>_llm_gold.json)
#  - <sut>_shards/shard_XX.json  (ops split evenly across N shards)
#
# No LLM calls, no provider/model/temperature.

import json, sys, argparse, math
from pathlib import Path

REST_METHODS = {"get","post","put","patch","delete","head","options","trace"}

def load_openapi(path: Path):
    text = path.read_text(encoding="utf-8-sig")
    s = text.lstrip()
    # Try JSON first
    try:
        return json.loads(s)
    except Exception:
        # Optional YAML fallback (if file is really YAML with .json name)
        try:
            import yaml  # type: ignore
        except Exception:
            print(f"[ERR ] Failed to parse as JSON. If your spec is YAML, install pyyaml and re-run. Path={path}", file=sys.stderr)
            raise
        return yaml.safe_load(text)

def extract_ops(spec: dict):
    ops = []
    paths = spec.get("paths") or {}
    if not isinstance(paths, dict):
        return ops
    for path, item in sorted(paths.items(), key=lambda kv: kv[0]):
        if not isinstance(item, dict):
            # PathItem via $ref or malformed; best-effort skip
            continue
        for method, meta in item.items():
            m = str(method).lower()
            if m in REST_METHODS:
                ops.append({"method": m.upper(), "path": path})
    return ops

def shard_ops(ops, shards_count: int):
    if shards_count <= 0:
        return []
    # stable split: round-robin after sorting by (path, method)
    ops_sorted = sorted(ops, key=lambda o: (o["path"], o["method"]))
    shards = [[] for _ in range(shards_count)]
    for i, op in enumerate(ops_sorted):
        shards[i % shards_count].append(op)
    # Drop trailing empty shards to mirror your earlier behavior
    while shards and not shards[-1]:
        shards.pop()
    return shards

def write_json(p: Path, obj):
    p.parent.mkdir(parents=True, exist_ok=True)
    p.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")

def main():
    ap = argparse.ArgumentParser(description="Pure DET from OpenAPI (no model).")
    ap.add_argument("spec", help="Path to OpenAPI JSON/YAML")
    ap.add_argument("out_dir", help="Output directory (e.g., artifacts/det_checked/real_world_llm_provider/<sut>)")
    ap.add_argument("--sut", required=True, help="SUT name, used for filenames")
    ap.add_argument("--shards", type=int, default=24, help="Shards to create (default: 24)")
    ap.add_argument("--emit_llm_gold", action="store_true", help="Also emit <sut>_llm_gold.json for compatibility")
    args = ap.parse_args()

    spec_path = Path(args.spec)
    out_dir   = Path(args.out_dir)
    if not spec_path.exists():
        print(f"[ERR ] Spec not found: {spec_path}", file=sys.stderr)
        sys.exit(3)

    try:
        spec = load_openapi(spec_path)
    except Exception as e:
        print(f"[ERR ] Failed to parse OpenAPI: {e}", file=sys.stderr)
        sys.exit(4)

    ops = extract_ops(spec)
    ops_file = out_dir / f"{args.sut}_llm_gold_ops.json"
    write_json(ops_file, {"ops": ops})
    print(f"[OK  ] ops={len(ops)} -> {ops_file}")

    # Deterministic 'gold' wrapper for other processes
    det_gold = {"gold": [{"op": op, "source": "openapi-det"} for op in ops]}
    det_gold_file = out_dir / f"{args.sut}_det_gold.json"
    write_json(det_gold_file, det_gold)
    print(f"[OK  ] det_gold entries={len(det_gold['gold'])} -> {det_gold_file}")

    if args.emit_llm_gold:
        llm_gold_file = out_dir / f"{args.sut}_llm_gold.json"
        write_json(llm_gold_file, det_gold)
        print(f"[OK  ] compat llm_gold entries={len(det_gold['gold'])} -> {llm_gold_file}")

    # Shards
    shards = shard_ops(ops, args.shards)
    shards_dir = out_dir / f"{args.sut}_shards"
    for i, chunk in enumerate(shards, start=1):
        shard_name = f"shard_{i:02d}.json"
        write_json(shards_dir / shard_name, {"ops": chunk})
    print(f"[OK  ] shards={len(shards)} -> {shards_dir}")

    # Non-zero check to help you catch empty outputs early
    if len(ops) == 0:
        print("[WARN] Extracted 0 ops. Check that your OpenAPI has a non-empty 'paths' object.", file=sys.stderr)

if __name__ == "__main__":
    main()
