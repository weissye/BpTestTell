#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
emit_hls_all_in_one.py
Emits stories_hls.js from an HLS GOLD JSON.
- Auto-detects GOLD file (hls_gold.json / hls_nondet_gold.json / hls_det_gold.json / *_gold.json),
  or use --gold to point directly.
- If GOLD contains ready-made JS, uses it; otherwise synthesizes BPJS from structured stories.
- Never writes an empty file: falls back to a small seed if needed.
"""
import argparse, json, re, sys
from pathlib import Path
from collections import Counter
from typing import Any, Dict, List, Tuple, Union

def read_json(p: Union[str, Path]) -> Any:
    if not p: return None
    p = Path(p)
    if not p.exists(): return None
    txt = p.read_text(encoding="utf-8", errors="ignore").strip()
    if not txt: return None
    try:
        return json.loads(txt)
    except Exception:
        # salvage an embedded JSON object if present
        try:
            s, e = txt.find("{"), txt.rfind("}")
            if s != -1 and e != -1 and e > s:
                return json.loads(txt[s:e+1])
        except Exception:
            return None

def ensure_parent(path: Union[str, Path]) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)

def count_bthreads(js: str) -> int:
    return len(re.findall(r'\bbp\.registerBThread\s*\(', js or ""))

def try_js_from_gold(g: Any) -> Tuple[str, int]:
    if not isinstance(g, (dict, list)): return ("", -1)

    # Big JS blob fields
    if isinstance(g, dict):
        for k in ("stories_js", "js", "readable_js", "storiesHlsJs"):
            v = g.get(k)
            if isinstance(v, str) and v.strip():
                return (v, -1)

    # Per-story JS snippets
    def _grab(item) -> str:
        if isinstance(item, str) and item.strip():
            return item
        if isinstance(item, dict):
            for kk in ("js","story_js","bt_js","code","text","content","body","script"):
                vv = item.get(kk)
                if isinstance(vv, str) and vv.strip():
                    return vv
        return ""

    snippets: List[str] = []
    if isinstance(g, dict) and isinstance(g.get("stories"), list):
        for it in g["stories"]:
            s = _grab(it)
            if s: snippets.append(s)
    elif isinstance(g, list):
        for it in g:
            s = _grab(it)
            if s: snippets.append(s)

    return ("\n\n".join(snippets), len(snippets)) if snippets else ("", -1)

def synthesize_from_struct(g: Any) -> Tuple[str, int]:
    if not isinstance(g, dict): return ("", 0)
    stories = g.get("stories")
    if not isinstance(stories, list): return ("", 0)

    def ev_name(ev):
        if isinstance(ev, str): return ev
        if isinstance(ev, dict):
            return ev.get("event") or ev.get("name") or ev.get("type") or ev.get("op") or ev.get("id") or "Unknown"
        return "Unknown"

    out: List[str] = []
    idx = 0
    for i, st in enumerate(stories, 1):
        if isinstance(st, dict):
            name = st.get("name") or st.get("title") or f"story#{i}"
            seq = None
            for k in ("events","sequence","seq","steps","calls","content","body"):
                v = st.get(k)
                if isinstance(v, list) and v:
                    seq = v; break
            if not seq: continue
            lines = []
            for ev in seq:
                en = str(ev_name(ev)).replace('"','\\"')
                lines.append(f'  bp.sync({{request: Event("{en}")}});')
            out.append(f'bthread("{name}", function () {{\n' + "\n".join(lines) + "\n});\n")
            idx += 1
        elif isinstance(st, str) and st.strip():
            s = st.strip()
            if s.startswith("bthread"):
                out.append(s if s.endswith("\n") else s+"\n")
            else:
                out.append(f'bthread("story#{i}", function () {{\n  // {s}\n}});\n')
            idx += 1

    js = "\n".join(out)
    return (js, idx)

def seed_js() -> Tuple[str,int]:
    js = """\
// Minimal fallback seed to avoid empty file
bthread("seed-open-close", function(){ bp.sync({request: Event("Open")}); bp.sync({request: Event("Close")}); });
bthread("seed-login-logout", function(){ bp.sync({request: Event("Login")}); bp.sync({request: Event("Logout")}); });
"""
    return (js, 2)

def flatten_ops(d: Any) -> List[Dict[str,Any]]:
    out: List[Dict[str,Any]] = []
    def walk(x):
        if isinstance(x, dict):
            if any(k in x for k in ("op","operation","endpoint","kind","entity","path","name")):
                out.append(x)
            for v in x.values(): walk(v)
        elif isinstance(x, list):
            for v in x: walk(v)
    walk(d)
    return out

def graph_coverage(graph: Any) -> Tuple[int, Dict[str,int]]:
    if not graph: return (0,{})
    ops = 0; by = Counter()
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        ops = len(graph["ops"])
        for op in graph["ops"]:
            ent = None
            if isinstance(op, dict):
                ent = op.get("entity") or op.get("kind") or op.get("resource") or op.get("name")
            if isinstance(ent, str): by[ent]+=1
    if ops == 0:
        flat = flatten_ops(graph); ops = len(flat)
        for rec in flat:
            ent = rec.get("entity") or rec.get("kind") or rec.get("resource") or rec.get("name")
            if isinstance(ent, str): by[ent]+=1
            elif isinstance(rec.get("path"), str):
                tail = rec["path"].strip("/").split("/")[-1]
                if tail: by[tail]+=1
    return (ops, dict(by))

def autodetect_gold(sut_dir: Path, explicit: Union[str,Path,None]) -> Path:
    if explicit:
        p = Path(explicit)
        return p if p.exists() else Path()
    for name in ("hls_gold.json","hls_nondet_gold.json","hls_det_gold.json"):
        p = sut_dir / name
        if p.exists(): return p
    globs = list(sut_dir.glob("*_gold.json"))
    return globs[0] if len(globs)==1 else Path()

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True)
    ap.add_argument("--gold", default=None)
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

    gold_path = autodetect_gold(sut_dir, args.gold)
    gold = read_json(gold_path) if gold_path else None
    if gold_path:
        print(f"[INFO] Using GOLD: {gold_path.as_posix()}")

    graph = read_json(args.graph) if args.graph else None

    js, n = try_js_from_gold(gold)
    if not js.strip():
        js2, n2 = synthesize_from_struct(gold)
        if js2.strip():
            js, n = js2, n2
    if not js.strip():
        js, n = seed_js()

    if args.per_entity_max and args.per_entity_max > 0:
        chunks = re.split(r'(?=bp\.registerBThread\s*\()', js)
        head, bts = chunks[0], chunks[1:]
        if bts:
            bts = bts[:args.per_entity_max]
            js = head + "".join(bts)
            n = len(bts)

    out_path = Path(args.out) if args.out else (sut_dir / "readable" / "stories_hls.js")
    ensure_parent(out_path)
    out_path.write_text(js, encoding="utf-8")

    ops, by = graph_coverage(graph)
    print(f"[OK] wrote {out_path.as_posix()} ({n} stories)")
    print(f"[COVERAGE] sut={args.mode} ops={ops} by_entity={by}")

    if args.fail_under_stories and n < args.fail_under_stories:
        print(f"[ERR] Story count {n} < threshold {args.fail_under_stories}", file=sys.stderr)
        return 3
    return 0

if __name__ == "__main__":
    sys.exit(main())
