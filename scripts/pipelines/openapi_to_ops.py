#!/usr/bin/env python
# Deterministically extract REST ops (method + path) from an OpenAPI JSON file.
# No LLM. Writes {"ops":[{"method":"GET","path":"/foo"}, ...]} to the output JSON.

import json, sys
from pathlib import Path

REST_METHODS = {"get","post","put","patch","delete","head","options"}

def read_openapi_json(p: Path):
    text = p.read_text(encoding="utf-8-sig")
    return json.loads(text)

def extract_ops(spec: dict):
    ops = []
    paths = spec.get("paths") or {}
    for path, item in paths.items():
        if not isinstance(item, dict):
            continue
        for method, meta in item.items():
            m = str(method).lower()
            if m in REST_METHODS:
                ops.append({"method": m.upper(), "path": path})
    return ops

def main():
    if len(sys.argv) != 3:
        print("Usage: openapi_to_ops.py <openapi.json> <out_ops.json>", file=sys.stderr)
        sys.exit(2)
    spec_path = Path(sys.argv[1])
    out_path  = Path(sys.argv[2])

    if not spec_path.exists():
        print(f"[ERR ] Spec not found: {spec_path}", file=sys.stderr)
        sys.exit(3)

    try:
        spec = read_openapi_json(spec_path)
    except Exception as e:
        print(f"[ERR ] Failed to parse OpenAPI JSON: {e}", file=sys.stderr)
        sys.exit(4)

    ops = extract_ops(spec)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps({"ops": ops}, indent=2), encoding="utf-8")
    print(f"[OK  ] {len(ops)} ops -> {out_path}")

if __name__ == "__main__":
    main()
