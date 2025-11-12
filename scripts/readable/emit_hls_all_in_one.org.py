#!/usr/bin/env python3
# -*- coding: utf-8 -*-

"""
Emit stories_hls.js (readable) from HLS GOLD (det/nondet), optionally using graph and DSL map.
Fixes:
- Count both bp.registerBThread(...) and bthread(...) so "(-1 stories)" goes away when JS uses bthread.
Behavior:
- Reads GOLD JSON and tries fields: stories_js/js/readable_js/storiesText. If none, tries structured synth; if none, seeds.
- Writes ops file: <sut_dir>/hls_gold_ops.json
- Writes JS file: <sut_dir>/readable/stories_hls.js
- Prints consistent [DBG]/[INFO]/[OK]/[WARN]/[ERR] lines like your logs.
"""

from __future__ import annotations
import argparse, json, re, sys
from pathlib import Path
from typing import Any, Dict, List, Tuple, Union

def pexists(p: Union[str, Path]) -> bool:
    return p and Path(p).exists()

def read_json(p: Union[str, Path]) -> Any:
    try:
        if not p: return None
        path = Path(p)
        if not path.exists(): return None
        return json.loads(path.read_text(encoding="utf-8", errors="replace"))
    except Exception as e:
        print(f"[WARN] Failed reading JSON {p}: {e}")
        return None

def write_text(p: Union[str, Path], s: str) -> None:
    Path(p).parent.mkdir(parents=True, exist_ok=True)
    Path(p).write_text(s, encoding="utf-8", errors="replace")

def write_json(p: Union[str, Path], obj: Any) -> None:
    Path(p).parent.mkdir(parents=True, exist_ok=True)
    Path(p).write_text(json.dumps(obj, ensure_ascii=False, indent=2), encoding="utf-8", errors="replace")

def slug(name: str) -> str:
    s = re.sub(r"[^A-Za-z0-9_]+", "_", name or "")
    return s.strip("_") or "Story"

def count_bthreads(js: str) -> int:
    """
    Count stories declared either with 'bp.registerBThread(' or 'bthread('.
    """
    if not js: 
        return -1
    return len(re.findall(r'\bbp\.registerBThread\s*\(|\bbthread\s*\(', js))

def seed_js() -> Tuple[str,int]:
    # very small deterministic seed using 'bthread' (your new style)
    js = """\
// Auto-seeded fallback stories_hls.js
// Uses bthread(...) so count works for both det and nondet
function bthread(name, fn) { bp.registerBThread(name, fn); } // compatibility shim if needed

bthread("Seed_Create_Entity", function() {
  bp.sync({request: POST("/entities", {name:"seed"})});
  bp.sync({waitFor: OK()});
});

bthread("Seed_List_Entities", function() {
  bp.sync({request: GET("/entities")});
  bp.sync({waitFor: OK()});
});
"""
    return (js, 2)

def synthesize_from_struct(g: Any) -> Tuple[str,int]:
    """
    If GOLD has structured 'stories' (array) but no raw JS blob, synthesize minimal JS.
    Accepts items with .name and .steps lists, and emits bthread wrappers.
    """
    if not isinstance(g, dict): 
        return ("", -1)

    stories = g.get("stories") or g.get("hls_stories") or []
    if not isinstance(stories, list) or not stories:
        return ("", -1)

    lines: List[str] = []
    lines.append('// Synthesized stories_hls.js from structured GOLD')
    lines.append('function bthread(name, fn) { if (typeof bp !== "undefined" && bp.registerBThread) { bp.registerBThread(name, fn); } else { /* shim for count only */ } }')
    count = 0
    for s in stories:
        nm = slug(str(s.get("name") or f"S{count+1}"))
        steps = s.get("steps") or []
        lines.append(f'\nbthread("{nm}", function() {{')
        for st in steps:
            # Try to render a readable BP sync step from fields
            method = (st.get("method") or st.get("http_method") or "GET").upper()
            path   = st.get("path")   or st.get("endpoint") or st.get("http_path") or "/"
            body   = st.get("body")   or st.get("payload")  or st.get("requestBody")
            if body is not None:
                body_json = json.dumps(body, ensure_ascii=False)
                lines.append(f'  bp.sync({{request: {method}("{path}", {body_json})}});')
            else:
                lines.append(f'  bp.sync({{request: {method}("{path}")}});')
            lines.append('  bp.sync({waitFor: OK()});')
        lines.append('});')
        count += 1

    return ("\n".join(lines) + "\n", count if count else -1)

def try_js_from_gold(g: Any) -> Tuple[str,int]:
    """
    Extract raw JS blob from multiple likely keys. Return js, nStories (n may be -1 when counting later).
    """
    if not isinstance(g, (dict, list)):
        return ("", -1)

    # Big JS blob fields in a dict
    if isinstance(g, dict):
        for k in ("stories_js", "js", "readable_js", "storiesText"):
            v = g.get(k)
            if isinstance(v, str) and v.strip():
                return (v, count_bthreads(v))

    # Or in a top-level array (rare)
    if isinstance(g, list):
        # Try to find an element that looks like a blob
        for item in g:
            if isinstance(item, dict):
                for k in ("stories_js", "js", "readable_js", "storiesText"):
                    v = item.get(k)
                    if isinstance(v, str) and v.strip():
                        return (v, count_bthreads(v))
    return ("", -1)

def compute_ops(g: Any, graph: Any) -> Tuple[List[Dict[str,Any]], Dict[str,int]]:
    """
    Produce a flat list of ops and a by_entity coverage map.
    Prefer GOLD["ops"]; else try to derive a rough count from GOLD["stories"] or graph nodes.
    """
    ops: List[Dict[str,Any]] = []
    by_entity: Dict[str,int] = {}

    # Direct ops from GOLD
    if isinstance(g, dict):
        gol_ops = g.get("ops")
        if isinstance(gol_ops, list):
            for op in gol_ops:
                if isinstance(op, dict):
                    ops.append(op)

    # Try to infer entities from ops
    for op in ops:
        ent = (op.get("entity") or op.get("object") or "?")
        by_entity[ent] = by_entity.get(ent, 0) + 1

    # Fallback: derive a coarse measure from stories steps
    if not ops and isinstance(g, dict):
        stories = g.get("stories") or g.get("hls_stories") or []
        if isinstance(stories, list):
            for s in stories:
                steps = s.get("steps") or []
                for st in steps:
                    ent = st.get("entity") or st.get("object") or "?"
                    by_entity[ent] = by_entity.get(ent, 0) + 1

    # As a last resort, peek at graph
    if not ops and isinstance(graph, dict):
        nodes = graph.get("nodes") or []
        for n in nodes if isinstance(nodes, list) else []:
            ent = (n.get("entity") or n.get("label") or "?")
            by_entity[ent] = by_entity.get(ent, 0) + 1

    return (ops, by_entity)

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True, help="SUT directory (det/nondet folder)")
    ap.add_argument("--json", required=True, help="GOLD JSON path")
    ap.add_argument("--graph", default="", help="Graph JSON (optional)")
    ap.add_argument("--dsl_map", default="", help="DSL map JSON (optional)")
    ap.add_argument("--max_stories", type=int, default=0, help="Max stories cap (0 = unlimited)")
    ap.add_argument("--per_entity", action="store_true", help="Print coverage per entity")
    args = ap.parse_args()

    sut_dir = Path(args.sut_dir)
    gold_path = Path(args.json)

    if not gold_path.exists():
        print(f"[SKIP] {gold_path.as_posix()} - GOLD not found")
        return 0

    print(f"[INFO] Using GOLD: {gold_path.as_posix()}")

    gold = read_json(gold_path)
    graph = read_json(args.graph) if args.graph else None
    dsl = read_json(args.dsl_map) if args.dsl_map else None
    if args.dsl_map and not dsl:
        print(f"[WARN] DSL map not found at \"{args.dsl_map}\" (may fall back to seed stories)")

    js, n = try_js_from_gold(gold)
    if not js.strip():
        js2, n2 = synthesize_from_struct(gold)
        if js2.strip():
            js, n = js2, n2
    if not js.strip():
        js, n = seed_js()

    # Enforce max stories if requested (naive, by trimming bthreads)
    if args.max_stories and args.max_stories > 0:
        # split by starting bthread
        chunks = re.split(r'(?=^bthread\s*\()', js, flags=re.M)
        # Keep preface + first N stories
        if len(chunks) > 1:
            pre = chunks[0]
            bodies = chunks[1:1+args.max_stories]
            js = pre + "".join(bodies)
        n = min(n if n >= 0 else args.max_stories, args.max_stories)

    # Ensure readable folder and write JS
    out_js = sut_dir / "readable" / "stories_hls.js"
    write_text(out_js, js)

    # Re-count after trimming/finalize
    n_final = count_bthreads(js)

    # Emit ops file and coverage
    ops, by_entity = compute_ops(gold, graph)
    out_ops = sut_dir / "hls_gold_ops.json"
    write_json(out_ops, {"ops": ops})

    print(f"[INFO] wrote OPS: {out_ops.as_posix()} ({len(ops)} ops)")
    print(f"[OK] wrote {out_js.as_posix()} ({n_final} stories)")
    if by_entity:
        print(f"[COVERAGE] sut={'det' if 'hls_det' in out_js.as_posix() else 'nondet'} ops={sum(by_entity.values())} by_entity={by_entity}")

    return 0

if __name__ == "__main__":
    try:
        sys.exit(main())
    except KeyboardInterrupt:
        sys.exit(130)
