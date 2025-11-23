#!/usr/bin/env python3
# scripts/pipelines/det_from_graph.py
#
# Build DET LLE GOLD directly from graph.json (not from raw OpenAPI),
# using the same ops-extraction logic as HLS (build_hls_gold_nondet.py).
#
# Outputs (same shape as det_from_openapi.py):
#   <sut>_llm_gold_ops.json
#   <sut>_det_gold.json  (+ optional <sut>_llm_gold.json)
#   <sut>_shards/shard_XX.json
#
# This keeps the pipeline order (OpenAPI -> graph -> LLE -> HLS)
# while ensuring that LLE and HLS see the *same* ops and entity
# shapes, because both are derived from graph.json.

import argparse
import json
import sys
from pathlib import Path
from typing import Any, Dict, List, Tuple

# ---------------------------------------------------------------------------
# Basic IO
# ---------------------------------------------------------------------------

def _load_json(path: Path) -> Any:
    text = path.read_text(encoding="utf-8")
    return json.loads(text)

def _write_json(path: Path, obj: Any) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)
    path.write_text(json.dumps(obj, ensure_ascii=False, indent=2),
                    encoding="utf-8")

# ---------------------------------------------------------------------------
# Ops extraction  (copied from build_hls_gold_nondet.py)
# ---------------------------------------------------------------------------

def _flatten_graph(node: Any, acc: List[Dict]) -> None:
    """Fallback extraction if graph['ops'] is not present."""
    if isinstance(node, dict):
        if "method" in node and "path" in node:
            m = (node.get("method") or node.get("http_method") or "").upper()
            p = (node.get("path")
                 or node.get("http_path")
                 or node.get("endpoint"))
            if m and p:
                acc.append(
                    {
                        "method": m,
                        "path": p,
                        "body": (node.get("body")
                                 or node.get("requestBody")
                                 or None),
                        "body_required": (
                            node.get("body_required")
                            or node.get("required_body_fields")
                            or []
                        ),
                    }
                )
        for v in node.values():
            _flatten_graph(v, acc)
    elif isinstance(node, list):
        for v in node:
            _flatten_graph(v, acc)


def extract_ops_from_graph(graph: Any) -> List[Dict]:
    """Normalise the graph into a list of ops: {method, path, body?, body_required?}."""
    ops: List[Dict] = []
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        for o in graph["ops"]:
            if not isinstance(o, dict):
                continue
            m = (o.get("method") or o.get("http_method") or "").upper()
            p = (o.get("path")
                 or o.get("http_path")
                 or o.get("endpoint"))
            if not (m and p):
                continue
            body = o.get("body") or o.get("requestBody") or None
            body_required = (o.get("body_required")
                             or o.get("required_body_fields")
                             or [])
            ops.append(
                {
                    "method": m,
                    "path": p,
                    "body": body,
                    "body_required": body_required,
                }
            )
    if not ops:
        _flatten_graph(graph, ops)

    # Deduplicate by (method, path)
    dedup: Dict[Tuple[str, str], Dict] = {}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k] = o
    return list(dedup.values())

# ---------------------------------------------------------------------------
# Sharding (same as det_from_openapi.py)
# ---------------------------------------------------------------------------

def shard_ops(ops: List[Dict], shards_count: int) -> List[List[Dict]]:
    if shards_count <= 0:
        return []
    # stable split: round-robin after sorting by (path, method)
    ops_sorted = sorted(ops, key=lambda o: (o["path"], o["method"]))
    shards: List[List[Dict]] = [[] for _ in range(shards_count)]
    for i, op in enumerate(ops_sorted):
        shards[i % shards_count].append(op)
    # Drop trailing empty shards
    while shards and not shards[-1]:
        shards.pop()
    return shards

# ---------------------------------------------------------------------------
# main
# ---------------------------------------------------------------------------

def main() -> int:
    ap = argparse.ArgumentParser(
        description="Pure DET from graph.json (shared with HLS, no direct OpenAPI here)."
    )
    ap.add_argument("graph",
                    help="Path to graph.json (output of openapi_to_graph.py)")
    ap.add_argument("out_dir",
                    help="Output dir, e.g. artifacts/det_checked/<provider>/<sut>")
    ap.add_argument("--sut", required=True,
                    help="SUT name, used for filenames")
    ap.add_argument("--shards", type=int, default=24,
                    help="How many shards to create (default: 24)")
    ap.add_argument(
        "--emit_llm_gold",
        action="store_true",
        help="Also emit <sut>_llm_gold.json (compat wrapper around det_gold)",
    )
    args = ap.parse_args()

    graph_path = Path(args.graph)
    out_dir = Path(args.out_dir)

    if not graph_path.is_file():
        print(f"[ERR ] graph.json not found: {graph_path}", file=sys.stderr)
        return 3

    try:
        graph = _load_json(graph_path)
    except Exception as e:
        print(f"[ERR ] Failed to parse graph.json: {e}", file=sys.stderr)
        return 4

    ops = extract_ops_from_graph(graph)
    if not ops:
        print("[WARN] No ops extracted from graph.json.", file=sys.stderr)

    # 1) Raw ops wrapper (for tools that expect *_llm_gold_ops.json)
    ops_file = out_dir / f"{args.sut}_llm_gold_ops.json"
    _write_json(ops_file, {"ops": ops})
    print(f"[OK  ] ops={len(ops)} -> {ops_file}")

    # 2) Deterministic GOLD wrapper
    det_gold = {"gold": [{"op": op, "source": "graph-det"} for op in ops]}
    det_gold_file = out_dir / f"{args.sut}_det_gold.json"
    _write_json(det_gold_file, det_gold)
    print(f"[OK  ] det_gold entries={len(det_gold['gold'])} -> {det_gold_file}")

    # 3) Optional llm_gold compatibility copy
    if args.emit_llm_gold:
        llm_gold_file = out_dir / f"{args.sut}_llm_gold.json"
        _write_json(llm_gold_file, det_gold)
        print(f"[OK  ] compat llm_gold entries={len(det_gold['gold'])} -> {llm_gold_file}")

    # 4) Shards
    shards = shard_ops(ops, args.shards)
    shards_dir = out_dir / f"{args.sut}_shards"
    for i, chunk in enumerate(shards, start=1):
        shard_name = f"shard_{i:02d}.json"
        _write_json(shards_dir / shard_name, {"ops": chunk})
    print(f"[OK  ] shards={len(shards)} -> {shards_dir}")

    return 0

if __name__ == "__main__":
    raise SystemExit(main())
