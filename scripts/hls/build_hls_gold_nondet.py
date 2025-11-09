#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build a NONDETERMINISTIC (richer) HLS GOLD from graph + DSL map (+ optional model output).
"""
import argparse, json, re, sys
from pathlib import Path
from typing import Any, Dict, List, Union
from collections import defaultdict, Counter

def read_json(path: Union[str, Path]) -> Any:
    p = Path(path)
    if not p.exists(): return None
    txt = p.read_text(encoding="utf-8", errors="ignore").strip()
    if not txt: return None
    try:
        return json.loads(txt)
    except Exception:
        try:
            s, e = txt.find("{"), txt.rfind("}")
            if s != -1 and e != -1 and e > s:
                return json.loads(txt[s:e+1])
        except Exception:
            return None

def ensure_dir(p: Union[str, Path]) -> None:
    Path(p).parent.mkdir(parents=True, exist_ok=True)

def flatten(obj: Any, sink: List[Dict]):
    if isinstance(obj, dict):
        method = (obj.get("method") or obj.get("http_method") or "").upper()
        path   = obj.get("path") or obj.get("http_path") or obj.get("endpoint")
        if method in ("GET","POST","PUT","PATCH","DELETE") and path:
            sink.append({"method": method, "path": path, "body": obj.get("body")})
        for v in obj.values():
            flatten(v, sink)
    elif isinstance(obj, list):
        for v in obj:
            flatten(v, sink)

def extract_ops(graph: Any) -> List[Dict]:
    ops: List[Dict] = []
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        for o in graph["ops"]:
            if isinstance(o, dict):
                m = (o.get("method") or o.get("http_method") or "").upper()
                p = o.get("path") or o.get("http_path") or o.get("endpoint")
                if m and p:
                    ops.append({"method": m, "path": p, "body": o.get("body")})
    if not ops:
        flatten(graph, ops)
    dedup = {}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k] = o
    return list(dedup.values())

def guess_entity_from_path(path: str) -> str:
    parts = [p for p in path.split("/") if p]
    if not parts: return "root"
    return parts[0].replace("-", "_")

def extract_path_keys(path: str) -> List[str]:
    import re
    return re.findall(r"{([^}]+)}", path or "")

def is_numeric(k: str) -> bool:
    k = k.lower()
    return (k == "id") or k.endswith("id") or any(x in k for x in ["num","count","code"])

def const_vals_for_key(k: str, base: int) -> List[str]:
    if is_numeric(k):
        return [str(base), str(base+1)]
    return [f"\"{k}_{base}\"", f"\"{k}_{base+1}\""]

def singularize(n: str) -> str:
    return n[:-1] if (n.endswith("s") and len(n) > 1) else n

def title(n: str) -> str:
    return n[:1].upper() + n[1:]

def derive_entities(ops: List[Dict]) -> List[Dict]:
    by_ent = defaultdict(lambda: {"paths": set(), "methods": set(), "path_keys": Counter()})
    for o in ops:
        ent = guess_entity_from_path(o["path"])
        by_ent[ent]["paths"].add(o["path"])
        by_ent[ent]["methods"].add(o["method"])
        for k in extract_path_keys(o["path"]):
            by_ent[ent]["path_keys"][k] += 1
    out = []
    for plural, info in by_ent.items():
        keys = [k for k,_ in info["path_keys"].most_common()]
        if not keys: keys = ["id"]
        sing = singularize(plural)
        out.append({
            "plural": plural,
            "singular": sing,
            "Plural": title(plural),
            "Singular": title(sing),
            "keys": keys,
            "methods": sorted(info["methods"]),
        })
    return sorted(out, key=lambda e: e["plural"])

def bthread(name: str, decls: List[str], calls: List[str]) -> str:
    template = """// ---- {name} ----
bp.registerBThread("{name}", function () {{
  {decls}
  {calls}
}});
"""
    return template.format(
        name=name,
        decls="\n  ".join(decls),
        calls="".join([c + "\n  " for c in calls])
    )

def make_calls(ent: str, Ent: str, order: List[str], args: str, negatives=False) -> List[str]:
    calls = []
    mapping = {
        "add":     f"add{Ent}({args});",
        "verify":  f"verify{Ent}Exists({args});",
        "update":  f"update{Ent}({args});",
        "delete":  f"delete{Ent}({args});",
        "verify!": f"verify{Ent}DoesNotExist({args});",
    }
    for step in order:
        calls.append(mapping[step])
        if negatives and step == "add":
            calls.append(f"tryToAddExisting{Ent}({args});")
        if negatives and step == "delete":
            calls.append(f"tryToDeleteANonExisting{Ent}({args});")
    return calls

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--provider", required=True)
    ap.add_argument("--sut", required=True)
    ap.add_argument("--graph", required=True)
    ap.add_argument("--dsl", "--dsl_map", dest="dsl", required=False)
    ap.add_argument("--out", required=True)
    ap.add_argument("--merge_model", help="Optional JSONL with {'story_js': '...'} per line")
    ap.add_argument("--per_entity", type=int, default=5)
    args = ap.parse_args()

    graph = read_json(args.graph)
    if graph is None:
        print(f'[ERR] graph not found/invalid: "{args.graph}"', file=sys.stderr); sys.exit(2)

    ops = extract_ops(graph)
    if not ops:
        print("[ERR] No ops in graph; cannot build NONDET GOLD.", file=sys.stderr); sys.exit(3)

    entities = derive_entities(ops)

    stories = []
    js_blocks = []

    base_orders = [
        ["add","verify","update","delete","verify!"],
        ["add","update","verify","delete","verify!"],
        ["add","verify","delete","verify!"],
    ]

    for e_idx, e in enumerate(entities):
        ent, Ent, keys = e["singular"], e["Singular"], e["keys"]
        decls = [f"let {k} = {const_vals_for_key(k, 200+e_idx)[0]};" for k in keys]
        args_s  = ", ".join(keys)
        count = 0
        for order in base_orders:
            name = f"crud:{ent}:nondet:{e_idx+1}:{count+1}"
            calls = make_calls(ent, Ent, order, args_s, negatives=True)
            js = bthread(name, decls, calls)
            stories.append({"name": name, "js": js})
            js_blocks.append(js)
            count += 1
            if count >= args.per_entity:
                break
        if len(keys) >= 1 and count < args.per_entity:
            decls2 = [f"let {k} = {const_vals_for_key(k, 200+e_idx)[1]};" for k in keys]
            name2 = f"crud:{ent}:nondet:{e_idx+1}:{count+1}"
            calls2 = make_calls(ent, Ent, ["add","delete","verify!"], args_s, negatives=True)
            js2 = bthread(name2, decls2, calls2)
            stories.append({"name": name2, "js": js2})
            js_blocks.append(js2)

    # Merge external model outputs if provided
    if args.merge_model and Path(args.merge_model).is_file():
        merged = 0
        for line in Path(args.merge_model).read_text(encoding="utf-8").splitlines():
            line = line.strip()
            if not line: continue
            try:
                obj = json.loads(line)
            except Exception:
                continue
            s = obj.get("story_js") or obj.get("js")
            if isinstance(s, str) and s.strip():
                stories.append({"name": f"llm:{merged+1}", "js": s})
                js_blocks.append(s)
                merged += 1
        if merged:
            print(f"[OK] merged {merged} model stories into NONDET GOLD.")

    out_obj = {
        "mode": "nondet",
        "provider": args.provider,
        "sut": args.sut,
        "entities": entities,
        "stories": stories,
        "stories_js": "\n".join(js_blocks),
        "source": {
            "graph": args.graph,
            "dsl": args.dsl,
            "merge_model": args.merge_model or ""
        }
    }

    ensure_dir(args.out)
    Path(args.out).write_text(json.dumps(out_obj, indent=2), encoding="utf-8")
    print(f'[OK] wrote NONDET GOLD -> "{args.out}" with {len(stories)} stories across {len(entities)} entities.')

if __name__ == "__main__":
    main()
