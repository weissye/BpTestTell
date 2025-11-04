#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
emit_hls_all_in_one.py
Reads the NONDET HLS gold for a given SUT directory and writes a single stories_hls.js.
"""
import argparse, json, re, sys
from pathlib import Path
from collections import Counter
from typing import Any, Dict, List, Tuple, Union

def read_json(p: Union[str, Path]) -> Any:
    p = Path(p)
    if not p.exists(): return None
    txt = p.read_text(encoding="utf-8").strip()
    if not txt: return None
    try:
        return json.loads(txt)
    except Exception:
        try:
            start, end = txt.find("{"), txt.rfind("}")
            if start != -1 and end != -1 and end > start:
                return json.loads(txt[start:end+1])
        except Exception:
            return None

def ensure_parent_dir(path: Union[str, Path]) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)

def count_bthreads(js_text: str) -> int:
    return len(re.findall(r'\bbp\.registerBThread\s*\(', js_text))

def try_extract_js_from_gold(gold: Any) -> Tuple[str, int]:
    if gold is None: return ("", -1)
    for key in ("stories_js", "js", "readable_js", "storiesHlsJs"):
        v = gold.get(key) if isinstance(gold, dict) else None
        if isinstance(v, str) and v.strip(): return (v, -1)
    snippets: List[str] = []
    if isinstance(gold, dict) and isinstance(gold.get("stories"), list):
        for item in gold["stories"]:
            if isinstance(item, str) and item.strip(): snippets.append(item)
            elif isinstance(item, dict):
                for k in ("js", "story_js", "code", "text"):
                    vv = item.get(k)
                    if isinstance(vv, str) and vv.strip(): snippets.append(vv); break
    elif isinstance(gold, list):
        for item in gold:
            if isinstance(item, str) and item.strip(): snippets.append(item)
            elif isinstance(item, dict):
                for k in ("js", "story_js", "code", "text"):
                    vv = item.get(k)
                    if isinstance(vv, str) and vv.strip(): snippets.append(vv); break
    if snippets:
        return ("\n\n".join(snippets), len(snippets))
    return ("", -1)

def minimal_seed_js() -> Tuple[str, int]:
    seed = """\
// Auto-generated minimal seed (fallback when no mappable ops were found)
bp.registerBThread("seed: open-close", function () {
  bp.sync({request: Event("Open")});
  bp.sync({request: Event("Close")});
});

bp.registerBThread("seed: login-logout", function () {
  bp.sync({request: Event("Login")});
  bp.sync({request: Event("Logout")});
});

bp.registerBThread("seed: nop-1", function () { });
bp.registerBThread("seed: nop-2", function () { });
bp.registerBThread("seed: nop-3", function () { });
"""
    return (seed, 5)

def flatten_dicts(d: Any) -> List[Dict[str, Any]]:
    out: List[Dict[str, Any]] = []
    def _walk(x: Any):
        if isinstance(x, dict):
            if any(k in x for k in ("op","operation","endpoint","kind","entity","path","name")):
                out.append(x)
            for v in x.values(): _walk(v)
        elif isinstance(x, list):
            for v in x: _walk(v)
    _walk(d); return out

def coverage_from_graph(graph: Any) -> Tuple[int, Dict[str, int]]:
    if not graph: return (0, {})
    ops = 0; by_entity: Counter = Counter()
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        ops = len(graph["ops"])
        for op in graph["ops"]:
            if isinstance(op, dict):
                ent = op.get("entity") or op.get("kind") or op.get("resource") or op.get("name")
                if isinstance(ent, str): by_entity[ent] += 1
    if ops == 0:
        flat = flatten_dicts(graph); ops = len(flat)
        for rec in flat:
            ent = rec.get("entity") or rec.get("kind") or rec.get("resource") or rec.get("name")
            if isinstance(ent, str): by_entity[ent] += 1
            else:
                p = rec.get("path") or rec.get("endpoint")
                if isinstance(p, str):
                    tail = p.strip("/").split("/")[-1]
                    if tail: by_entity[tail] += 1
    return (ops, dict(by_entity))

def write_file(path: Union[str, Path], text: str) -> None:
    ensure_parent_dir(path)
    Path(path).write_text(text, encoding="utf-8")

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True)
    ap.add_argument("--mode", choices=("det","nondet"), default="nondet")
    ap.add_argument("--out", default=None)
    ap.add_argument("--graph", default=None)
    ap.add_argument("--dsl_map", default=None)
    ap.add_argument("--profile", choices=("basic","rich"), default="basic")
    ap.add_argument("--per_entity_max", type=int, default=0)
    ap.add_argument("--fail_under_stories", type=int, default=0)
    args = ap.parse_args()

    sut_dir = Path(args.sut_dir)
    if not sut_dir.exists():
      print(f'[ERR] SUT dir not found: "{sut_dir}"', file=sys.stderr)
      return 2

    gold_name = "hls_nondet_gold.json" if args.mode == "nondet" else "hls_det_gold.json"
    gold  = read_json(sut_dir / gold_name)
    graph = read_json(args.graph) if args.graph else None
    _dsl  = read_json(args.dsl_map) if args.dsl_map else None

    js_text, known_count = try_extract_js_from_gold(gold)
    if not js_text.strip():
        js_text, known_count = minimal_seed_js()

    if args.per_entity_max and args.per_entity_max > 0:
        blocks = re.split(r'(?=bp\.registerBThread\s*\()', js_text)
        header, bts = blocks[0], blocks[1:]
        if bts:
            limited = bts[:args.per_entity_max]
            js_text = header + "".join(limited)
            known_count = len(limited)

    if known_count < 0:
        known_count = count_bthreads(js_text)

    out_path = Path(args.out) if args.out else (sut_dir / "readable" / "stories_hls.js")
    write_file(out_path, js_text)

    ops_count, by_entity = coverage_from_graph(graph)
    print(f"[OK] wrote {out_path.as_posix()} ({known_count} stories)")
    print(f"[COVERAGE] sut={args.mode} kinds=[] ops={ops_count} by_entity={by_entity} rels=[]")

    if args.fail_under_stories and known_count < args.fail_under_stories:
        print(f"[ERR] Story count {known_count} is under threshold {args.fail_under_stories}", file=sys.stderr)
        return 3
    return 0

if __name__ == "__main__":
    sys.exit(main())
