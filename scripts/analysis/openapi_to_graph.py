#!/usr/bin/env python
import argparse, json, sys
from pathlib import Path

try:
    import yaml  # optional, for .yaml/.yml inputs
except Exception:
    yaml = None

def load_openapi(in_path: str):
    p = Path(in_path)
    text = p.read_text(encoding="utf-8")
    if p.suffix.lower() in (".yaml", ".yml"):
        if yaml is None:
            print("[ERR ] YAML file given but PyYAML not installed. Run: pip install pyyaml", file=sys.stderr)
            sys.exit(1)
        return yaml.safe_load(text)
    return json.loads(text)

def iter_schemas(spec: dict):
    comps = (spec or {}).get("components") or {}
    schemas = comps.get("schemas") or {}
    # schemas can contain dicts OR booleans in OpenAPI 3.x
    for name, sch in (schemas.items() if isinstance(schemas, dict) else []):
        if isinstance(sch, bool):
            # boolean schema: ignore for graph/entity inference
            continue
        if not isinstance(sch, dict):
            continue
        yield name, sch

def to_list(x):
    return x if isinstance(x, list) else []

def to_dict(x):
    return x if isinstance(x, dict) else {}

def guess_entities(spec: dict):
    """
    Very light inference: each component schema becomes an 'entity'.
    """
    entities = []
    for name, sch in iter_schemas(spec):
        required = to_list(sch.get("required"))
        props = to_dict(sch.get("properties"))
        entities.append({
            "name": name,
            "required": required,
            "properties": list(props.keys())
        })
    return entities

def build_ops(spec: dict):
    """
    Extract a minimal operation list from paths:
      method, path, operationId, tags, params-in, requestBody content types, response codes
    """
    paths = to_dict(spec.get("paths"))
    ops = []
    for path, item in paths.items():
        if not isinstance(item, dict):
            continue
        for method, op in item.items():
            if method.lower() not in ("get","post","put","patch","delete","options","head","trace"):
                continue
            if not isinstance(op, dict):
                continue
            params = []
            for p in to_list(op.get("parameters")):
                if isinstance(p, dict):
                    params.append({
                        "name": p.get("name"),
                        "in": p.get("in"),
                        "required": bool(p.get("required", False))
                    })
            req_body_ct = []
            rb = op.get("requestBody")
            if isinstance(rb, dict):
                content = to_dict(rb.get("content"))
                req_body_ct = list(content.keys())
            resp_codes = list(to_dict(op.get("responses")).keys())
            ops.append({
                "method": method.upper(),
                "path": path,
                "operationId": op.get("operationId"),
                "tags": to_list(op.get("tags")),
                "params": params,
                "requestBodyCT": req_body_ct,
                "responses": resp_codes
            })
    return ops

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--in", dest="in_path", required=True)
    ap.add_argument("--out", dest="out_path", required=True)
    args = ap.parse_args()

    spec = load_openapi(args.in_path)
    print("[GRAPH] --out")  # keeps your existing log line
    out = {
        "entities": guess_entities(spec),
        "ops": build_ops(spec)
    }
    Path(args.out_path).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out_path).write_text(json.dumps(out, indent=2), encoding="utf-8")

if __name__ == "__main__":
    main()
