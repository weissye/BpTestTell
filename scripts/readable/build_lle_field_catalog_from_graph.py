#!/usr/bin/env python3
# scripts/readable/build_lle_field_catalog_from_graph.py
#
# Build a field catalog for expand_lle_gold_nondet.py directly from graph.json
# using the same entity/key logic as HLS (build_hls_gold_nondet.py).
#
# Output format is what expand_lle_gold_nondet._coerce_catalog() expects:
#   { "entries": [ {method, path, keys, mandatory, optional, base, entity}, ... ] }

import argparse, json, re, sys
from pathlib import Path
from typing import Any, Dict, List, Tuple

# ---------- basic IO ----------

def _load_json(path: Path) -> Any:
    return json.loads(path.read_text(encoding="utf-8"))

def _write_json(path: Path, obj: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8")

# ---------- shared graph → ops (same as HLS) ----------

def _flatten_graph(node: Any, acc: List[Dict]) -> None:
    if isinstance(node, dict):
        if "method" in node and "path" in node:
            m = (node.get("method") or node.get("http_method") or "").upper()
            p = (node.get("path") or node.get("http_path") or node.get("endpoint"))
            if m and p:
                acc.append({
                    "method": m,
                    "path": p,
                    "body": node.get("body") or node.get("requestBody") or None,
                    "body_required": (
                        node.get("body_required")
                        or node.get("required_body_fields")
                        or []
                    ),
                })
        for v in node.values():
            _flatten_graph(v, acc)
    elif isinstance(node, list):
        for v in node:
            _flatten_graph(v, acc)

def extract_ops_from_graph(graph: Any) -> List[Dict]:
    ops: List[Dict] = []
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        for o in graph["ops"]:
            if not isinstance(o, dict):
                continue
            m = (o.get("method") or o.get("http_method") or "").upper()
            p = (o.get("path") or o.get("http_path") or o.get("endpoint"))
            if not (m and p):
                continue
            body = o.get("body") or o.get("requestBody") or None
            body_required = (
                o.get("body_required") or
                o.get("required_body_fields") or
                []
            )
            ops.append({
                "method": m,
                "path": p,
                "body": body,
                "body_required": body_required,
            })
    if not ops:
        _flatten_graph(graph, ops)

    dedup: Dict[Tuple[str, str], Dict] = {}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k] = o
    return list(dedup.values())

# ---------- same helpers as HLS ----------

def singularize(name: str) -> str:
    if name.endswith("ies"):
        return name[:-3] + "y"
    if name.endswith("ses"):
        return name[:-2]
    if name.endswith("s") and len(name) > 1:
        return name[:-1]
    return name

def guess_entity(path: str) -> str:
    parts = [p for p in (path or "").split("/") if p]
    if not parts:
        return "root"
    return parts[0]

def extract_path_keys(path: str) -> List[str]:
    return re.findall(r"{([^}]+)}", path or "")

# ---------- catalog builder ----------

def build_catalog(ops: List[Dict]) -> Dict[str, Any]:
    entries: List[Dict[str, Any]] = []

    for op in ops:
        method = op["method"]
        path   = op["path"]
        entity = guess_entity(path)

        body = op.get("body")
        if not isinstance(body, dict):
            body = {}

        body_required = op.get("body_required") or []
        if not isinstance(body_required, list):
            body_required = []

        # keys from path params
        keys = extract_path_keys(path)
        # fallback: look for '*id' field in body if no path keys
        if not keys:
            for k in body.keys():
                kl = k.lower()
                if kl == "id" or kl.endswith("id"):
                    keys = [k]
                    break

        # mandatory = keys + required fields
        mandatory = []
        seen = set()
        for k in keys + body_required:
            if k and k not in seen:
                seen.add(k)
                mandatory.append(k)

        # optional = rest of body
        optional = [k for k in body.keys() if k not in seen]

        entries.append({
            "method": method,
            "path": path,
            "entity": entity,
            "keys": keys,
            "mandatory": mandatory,
            "optional": optional,
            "base": body,
        })

    return {"entries": entries}

# ---------- main ----------

def main() -> int:
    ap = argparse.ArgumentParser(
        description="Build LLE field catalog from graph.json (for expand_lle_gold_nondet.py)."
    )
    ap.add_argument("--graph", required=True, help="Path to graph.json")
    ap.add_argument("--out", required=True, help="Output catalog JSON")
    args = ap.parse_args()

    g = _load_json(Path(args.graph))
    ops = extract_ops_from_graph(g)
    if not ops:
        print("[ERR] No ops extracted from graph.json", file=sys.stderr)
        return 2

    cat = build_catalog(ops)
    _write_json(Path(args.out), cat)
    print(f"[OK] catalog entries={len(cat['entries'])} -> {args.out}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
