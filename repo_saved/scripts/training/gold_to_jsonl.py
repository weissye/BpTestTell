#!/usr/bin/env python
import argparse, json, sys, glob
from pathlib import Path
from typing import Dict, Any, Iterable

def load_json(p: Path):
    with open(p, "r", encoding="utf-8") as f:
        return json.load(f)

def iter_examples(data) -> Iterable[Dict[str, Any]]:
    # Accept either {"gold":[...]} or top-level list, or common alternates
    if isinstance(data, dict) and "gold" in data and isinstance(data["gold"], list):
        yield from data["gold"]
    elif isinstance(data, list):
        yield from data
    else:
        for key in ("items", "examples", "data"):
            if isinstance(data, dict) and isinstance(data.get(key), list):
                yield from data[key]
                return

def to_messages(example: Dict[str, Any]) -> list:
    user_payload = {
        "operationId": example.get("operationId"),
        "method":      example.get("method"),
        "path":        example.get("path"),
        "tags":        example.get("tags"),
        "request":     example.get("request"),
    }
    assistant_payload = {
        "expect":       example.get("expect"),
        "verification": example.get("verification"),
    }
    return [
        {"role": "user", "content": json.dumps(user_payload, ensure_ascii=False)},
        {"role": "assistant", "content": json.dumps(assistant_payload, ensure_ascii=False)},
    ]

def main():
    ap = argparse.ArgumentParser(description="Convert GOLD JSON into instruction JSONL.")
    ap.add_argument("--schema", required=False)
    ap.add_argument("--out", required=True)
    ap.add_argument("--in", dest="inputs", action="append", default=[])
    ap.add_argument("--min-examples", type=int, default=1)
    args = ap.parse_args()

    patterns = args.inputs or []
    files = []
    for pattern in patterns:
        files.extend(glob.glob(pattern, recursive=True))
    files = sorted(set(files))

    if not files:
        print("[ERR] No files matched your --in patterns:", file=sys.stderr)
        for pat in patterns: print(f"  - {pat}", file=sys.stderr)
        sys.exit(2)

    print("[INFO] Matched files:")
    for fp in files: print(f"  - {fp}")

    n_rows = 0
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as w:
        for fp in files:
            try:
                data = load_json(Path(fp))
                exs = list(iter_examples(data))
                if len(exs) < args.min_examples:
                    print(f"[WARN] {fp}: has {len(exs)} examples (< {args.min_examples}); skipping.")
                    continue
                for ex in exs:
                    w.write(json.dumps({"messages": to_messages(ex)}, ensure_ascii=False) + "\n")
                    n_rows += 1
            except Exception as e:
                print(f"[WARN] skip {fp}: {e}", file=sys.stderr)

    print(f"[OK] wrote {n_rows} rows to {args.out}")
    if n_rows == 0:
        print("[ERR] 0 rows written. Check your input GOLD files contain a 'gold' array or a list of examples.", file=sys.stderr)
        sys.exit(2)

if __name__ == "__main__":
    main()
