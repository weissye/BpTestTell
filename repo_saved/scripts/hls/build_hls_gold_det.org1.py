#!/usr/bin/env python3
# coding: utf-8
"""
Deterministic HLS GOLD builder.

Inputs (any can be omitted to use repo-style defaults):
  --provider      Name of provider directory, e.g. 7_suts_llm_provider or real_world_llm_provider
  --sut           SUT/RealWorld key, e.g. banking / github / ...
  --graph         Path to analysis graph.json (defaults from --provider/--sut)
  --dsl           Path to DSL map json (defaults from --provider/--sut)
  --out           Output path for GOLD json (defaults to artifacts/hls_gold_det/<provider>/<sut>/hls_gold.json)

What it produces:
  A deterministic, reproducible "HLS GOLD" JSON that downstream emitters can
  turn into stories_hls.js. We keep the schema simple and compatible with
  emit_hls_all_in_one.py, which looks for either:
     - stories_js (string), or
     - stories: [ { js: "..."} | "...", ... ]

We intentionally avoid any randomness and only emit stories for ops/entities
that can be inferred from the graph/DSL. If no CRUD can be inferred, we fall
back to a small set of deterministic "navigation seeds".
"""
from __future__ import annotations

import argparse, json, os, re, sys, datetime
from pathlib import Path
from typing import Any, Dict, List, Tuple

# ---------- Helpers ----------

def read_json(path: Path) -> Any:
    if not path or not path.exists():
        return None
    try:
        with path.open("r", encoding="utf-8") as fh:
            return json.load(fh)
    except Exception as e:
        print(f"[WARN] failed to read JSON: {path} ({e})", file=sys.stderr)
        return None

def ensure_parent(p: Path) -> None:
    p.parent.mkdir(parents=True, exist_ok=True)

def coerce_list(x) -> List[Any]:
    if x is None: return []
    if isinstance(x, list): return x
    return [x]

def uniq(seq):
    seen = set(); out = []
    for s in seq:
        if s not in seen:
            seen.add(s); out.append(s)
    return out

def short_entity_name(path: str) -> str:
    """
    Infer entity name from a path like '/books/{id}' -> 'book'.
    """
    if not path: return ""
    segs = [s for s in re.split(r"[\/]", path) if s and not s.startswith("{")]
    if not segs: return ""
    base = segs[-1]
    # de-pluralize crudely
    if base.endswith("ies"): base = base[:-3] + "y"
    elif base.endswith("s") and not base.endswith("ss"): base = base[:-1]
    return re.sub(r"[^A-Za-z0-9_]", "_", base).lower()

def collect_ops_from_graph(G: Any) -> List[Dict[str, Any]]:
    ops = []
    if not isinstance(G, dict): return ops

    # Common schema 1: { "ops": [{ id, method, path, ...}, ...] }
    if isinstance(G.get("ops"), list):
        for o in G["ops"]:
            if not isinstance(o, dict): continue
            ops.append({
                "id": o.get("id") or o.get("name") or "",
                "method": (o.get("method") or o.get("http_method") or "").upper(),
                "path": o.get("path") or o.get("http_path") or o.get("endpoint") or "",
            })

    # Common schema 2: graph as nodes/edges where nodes of type/kind 'op'
    if not ops and isinstance(G.get("nodes"), list):
        for n in G["nodes"]:
            if not isinstance(n, dict): continue
            kind = (n.get("kind") or n.get("type") or "").lower()
            if kind != "op": continue
            meta = n.get("meta") or {}
            ops.append({
                "id": n.get("id") or n.get("name") or "",
                "method": (meta.get("method") or meta.get("http_method") or "").upper(),
                "path": meta.get("path") or meta.get("http_path") or meta.get("endpoint") or "",
            })
    # Drop empties
    return [o for o in ops if (o.get("id") or o.get("path")) and o.get("method")]

def index_ops_by_entity(ops: List[Dict[str, Any]]) -> Dict[str, Dict[str, List[Dict[str, Any]]]]:
    """
    Returns: entity -> verb -> [ops]
    """
    verbs = ("GET", "POST", "PUT", "PATCH", "DELETE")
    out: Dict[str, Dict[str, List[Dict[str, Any]]]] = {}
    for o in ops:
        ent = short_entity_name(o.get("path", "")) or "item"
        verb = o.get("method", "").upper()
        if verb not in verbs: continue
        out.setdefault(ent, {}).setdefault(verb, []).append(o)
    return out

def crud_story_js(entity: str, bucket: Dict[str, List[Dict[str, Any]]]) -> str:
    """
    Emit a deterministic CRUD story using Provengo REST helper.
    We pick 1 op per VERB (first in sort order) when available.
    """
    # Choose canonical ops (deterministically by id/path)
    def choose(oplist):
        if not oplist: return None
        return sorted(oplist, key=lambda x: (x.get("id",""), x.get("path","")))[:1][0]

    post  = choose(bucket.get("POST"))
    get1  = choose(bucket.get("GET"))
    put   = choose(bucket.get("PUT")) or choose(bucket.get("PATCH"))
    get2  = choose(bucket.get("GET"))
    dele  = choose(bucket.get("DELETE"))

    # Helper: format a REST call line
    def call_line(op, var_assign: str | None = None):
        if not op: return None
        path = op.get("path") or "/"
        meth = op.get("method") or "GET"
        line = f'  bp.sync({{request: REST.{meth}("{path}", {{}})}});'
        if var_assign:
            # We keep id placeholder deterministic; it can be post-processed by a later step
            line = f'  let {var_assign} = "ID1";\n' + line
        return line

    lines = [
        f'// Deterministic CRUD flow for entity: {entity}',
        'bthread("HLS: CRUD ' + entity + '", function () {',
    ]
    if post:  lines.append(call_line(post, var_assign="id") or "")
    if get1:  lines.append(call_line(get1) or "")
    if put:   lines.append(call_line(put) or "")
    if get2:  lines.append(call_line(get2) or "")
    if dele:  lines.append(call_line(dele) or "")
    lines.append("});")
    return "\n".join([ln for ln in lines if ln.strip()])

def seed_js() -> str:
    return """\
// Seed flows to guarantee at least two runnable b-threads
bthread("seed: open-close", function () {
  bp.sync({request: Event("Open")});
  bp.sync({request: Event("Close")});
});

bthread("seed: noop", function () {
  bp.sync({request: Event("Tick")});
});
"""


# --- Minimal additions: use DSL story_templates for pretty DET stories ---

def _dsl_index(dsl):
    """Index DSL functions by name and collect story_templates."""
    if not isinstance(dsl, dict):
        return {}, []
    fns = {}
    for f in dsl.get("functions", []):
        if isinstance(f, dict) and f.get("name"):
            fns[f["name"]] = f
    templates = [t for t in dsl.get("story_templates", []) if isinstance(t, dict) and t.get("uses")]
    return fns, templates

def _has_id_param(path: str) -> bool:
    return isinstance(path, str) and ("{" in path and "}" in path)

def _cap1(s: str) -> str:
    return s[:1].upper() + s[1:] if s else s

def _guess_entity_from_fn(fn: dict) -> str:
    ent = fn.get("entity")
    if ent:
        return ent
    # fallback: infer from path tail
    p = (fn.get("path") or "").strip("/")
    tail = p.split("/")[-1] if p else "item"
    if tail.endswith("ies"): tail = tail[:-3] + "y"
    elif tail.endswith("s") and not tail.endswith("ss"): tail = tail[:-1]
    return re.sub(r"[^A-Za-z0-9_]", "_", tail).lower() or "item"

def _decl_vars_for(fn: dict):
    """Create deterministic id vars if the path contains keys."""
    decls = []
    path = fn.get("path") or ""
    if _has_id_param(path):
        decls.append('id = "ID1"')
    return decls

def _helper_call_for(fn: dict, ent: str, have_id: bool) -> str:
    """Map REST to helper-style calls to match NONDET visual style."""
    method = (fn.get("method") or fn.get("http_method") or "").upper()
    Ent = _cap1(ent)
    plural = ent if ent.endswith("s") else ent + "s"
    arglist = "id" if have_id else ""
    if method == "POST":
        return f"add{Ent}({arglist});"
    if method == "GET":
        if _has_id_param(fn.get("path") or ""):
            return f"verify{Ent}Exists({arglist});"
        return f"list{_cap1(plural)}({arglist});"
    if method in ("PUT", "PATCH"):
        return f"update{Ent}({arglist});"
    if method == "DELETE":
        return f"delete{Ent}({arglist});"
    return f"// TODO: {method} {fn.get('path','')}"

def _bthread_js(name: str, decls, calls) -> str:
    decl_block = ""
    if decls:
        decl_block = "  " + "\\n  ".join([f"let {d};" if "=" not in d else f"let {d}" for d in decls]) + "\\n"
    call_block = "  " + "\\n  ".join(calls) + "\\n" if calls else ""
    return f'// ---- {name} ----\\n' f'bthread("{name}", function () {{\\n' + decl_block + call_block + "});"

def _stories_from_dsl_templates(dsl: dict):
    """Build DET stories directly from DSL story_templates if present."""
    fns, templates = _dsl_index(dsl)
    stories = []
    for idx, t in enumerate(templates, start=1):
        uses = [u for u in t.get("uses", []) if u in fns]
        if not uses:
            continue
        ent = _guess_entity_from_fn(fns[uses[0]])
        # declarations once per story
        decls = []
        for u in uses:
            decls.extend(_decl_vars_for(fns[u]))
        # de-dup decls preserving order
        seen = set(); tmp = []
        for d in decls:
            if d in seen: continue
            seen.add(d); tmp.append(d)
        decls = tmp
        have_id = any("id =" in d for d in decls)
        calls = [_helper_call_for(fns[u], ent, have_id) for u in uses]
        name = t.get("name") or f"template:{ent}:{idx}"
        stories.append({"name": name, "desc": f"DET from DSL template '{name}'", "entity": ent, "js": _bthread_js(name, decls, calls)})
    return stories
# --- End minimal additions ---

# ---------- Main logic ----------

def build_gold(provider: str, sut: str, graph_path: Path, dsl_path: Path, out_path: Path) -> Dict[str, Any]:
    G = read_json(graph_path)
    D = read_json(dsl_path)
    ops = collect_ops_from_graph(G)
    by_ent = index_ops_by_entity(ops)

    stories: List[Dict[str, Any]] = []
    # Deterministically pick up to N entities for compact HLS
    ENTITY_LIMIT = 4
    for ent in sorted(by_ent.keys())[:ENTITY_LIMIT]:
        js = crud_story_js(ent, by_ent[ent])
        if js.strip():
            stories.append({
                "name": f"CRUD {ent}",
                "desc": f"Deterministic CRUD flow for entity '{ent}' inferred from graph.",
                "entity": ent,
                "js": js
            })

    if not stories:
        # Always provide a seed to keep the pipe moving
        stories.append({"name":"seed", "desc":"No CRUD could be inferred; seed flows only.", "js": seed_js()})

    gold: Dict[str, Any] = {
        "kind": "hls_gold",
        "deterministic": True,
        "provider": provider,
        "sut": sut,
        "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
        "source": {
            "graph": str(graph_path) if graph_path else None,
            "dsl": str(dsl_path) if dsl_path else None
        },
        "entities": [{"name": k, "verbs": sorted(v.keys())} for k, v in sorted(by_ent.items())],
        "stories": stories
    }
    ensure_parent(out_path)
    with out_path.open("w", encoding="utf-8") as fh:
        json.dump(gold, fh, ensure_ascii=False, indent=2)
    print(f'[OK] wrote HLS DET GOLD -> "{out_path}"  (stories={len(stories)}, entities={len(by_ent)})')
    return gold

def resolve_defaults(provider: str, sut: str, graph: str|None, dsl: str|None, out: str|None) -> Tuple[Path, Path, Path]:
    root = Path.cwd()
    g = Path(graph) if graph else (root / "artifacts" / "analysis" / provider / sut / "graph.json")
    d = Path(dsl)   if dsl   else (
            (root / "models" / "hls" / ("SUTs" if provider=="7_suts_llm_provider" else "RWs") / sut / "dsl_map.json")
         )
    o = Path(out) if out else (root / "artifacts" / "hls_gold_det" / provider / sut / "hls_gold.json")
    return (g, d, o)

def main():
    ap = argparse.ArgumentParser(description="Deterministic HLS GOLD builder")
    ap.add_argument("--provider", required=True, help="7_suts_llm_provider | real_world_llm_provider")
    ap.add_argument("--sut", required=True, help="banking | github | ...")
    ap.add_argument("--graph", default=None, help="Optional custom path to graph.json")
    ap.add_argument("--dsl",   default=None, help="Optional custom path to dsl_map.json")
    ap.add_argument("--out",   default=None, help="Optional custom output path for GOLD")
    args = ap.parse_args()

    g, d, o = resolve_defaults(args.provider, args.sut, args.graph, args.dsl, args.out)

    missing = []
    if not g.exists(): missing.append(str(g))
    if not d.exists(): missing.append(str(d))
    if missing:
        print("[ERR] Missing required inputs:")
        for m in missing: print("   ", m)
        sys.exit(2)

    build_gold(args.provider, args.sut, g, d, o)

if __name__ == "__main__":
    main()
