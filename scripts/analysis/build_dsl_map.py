#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
Build a DSL map JSON from a graph.json produced by the OpenAPI-to-graph step.

Robust to several graph shapes:
- OpenAPI-like: {"paths": {"/x": {"get": {...}, "post": {...}}}}
- Node/Edge graphs: {"nodes": [...], "edges": [...]}
- Arbitrary nested dicts/lists that include {"method": "...", "path": "/..."}

Writes to --out and also mirrors legacy to models/hls/<sut>/dsl_map.json.
"""

from __future__ import annotations
import argparse, json, os, re, sys, datetime
from typing import Any, Dict, Iterable, List, Tuple, Optional

HTTP_METHODS = {"get","post","put","delete","patch","options","head"}

# -----------------------------
# Utilities
# -----------------------------

def load_json(path: str) -> Any:
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def dump_json(path: str, data: Any, pretty: bool = False) -> None:
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        if pretty:
            json.dump(data, f, ensure_ascii=False, indent=2)
        else:
            json.dump(data, f, ensure_ascii=False, separators=(",", ":"))

def singularize(token: str) -> str:
    t = token.strip().lower().replace(" ", "_")
    if t.endswith("ies") and len(t) > 3:
        return t[:-3] + "y"
    if t.endswith("ses") and len(t) > 3:
        return t[:-2]  # e.g., 'classes' -> 'classe' (imperfect but better than 'class')
    if t.endswith("s") and len(t) > 1:
        return t[:-1]
    return t

def pluralize(token: str) -> str:
    t = token.strip().lower().replace(" ", "_")
    if t.endswith("y") and len(t) > 1:
        return t[:-1] + "ies"
    if not t.endswith("s"):
        return t + "s"
    return t

def path_segments(path: str) -> List[str]:
    segs = [s for s in path.strip().split("/") if s]
    return segs

def is_param(seg: str) -> bool:
    return seg.startswith("{") and seg.endswith("}") and len(seg) > 2

def param_name(seg: str) -> str:
    return seg.strip("{}").strip()

def safe_fn_name(method: str, path: str) -> str:
    # normalize path: replace {var} with var; keep literal segments
    parts = []
    for seg in path_segments(path):
        if is_param(seg):
            parts.append(param_name(seg))
        else:
            parts.append(seg)
    base = "_".join(parts).replace("-", "_").replace(".", "_")
    return f"{method.lower()}_{base or 'root'}"

def unique(seq: Iterable[Any]) -> List[Any]:
    seen, out = set(), []
    for x in seq:
        if json.dumps(x, sort_keys=True) in seen:
            continue
        seen.add(json.dumps(x, sort_keys=True))
        out.append(x)
    return out

# -----------------------------
# Operation discovery
# -----------------------------

def discover_from_openapi_like(obj: Dict[str, Any]) -> List[Dict[str, Any]]:
    """Look for {"paths": { "/a": {"get": {...}}}} structures."""
    ops: List[Dict[str, Any]] = []
    paths = obj.get("paths")
    if isinstance(paths, dict):
        for pth, methods in paths.items():
            if not isinstance(methods, dict):
                continue
            for m, meta in methods.items():
                if m.lower() in HTTP_METHODS:
                    oid = meta.get("operationId") if isinstance(meta, dict) else None
                    ops.append({"method": m.lower(), "path": pth, "operationId": oid})
    return ops

def _collect_ops_recursive(node: Any, acc: List[Dict[str, Any]]) -> None:
    if isinstance(node, dict):
        # direct method/path
        method = node.get("method") or node.get("http_method") or node.get("verb")
        path = node.get("path") or node.get("url") or node.get("route")
        if isinstance(method, str) and isinstance(path, str) and method.lower() in HTTP_METHODS:
            oid = node.get("operationId") or node.get("id") or node.get("name")
            acc.append({"method": method.lower(), "path": path, "operationId": oid})
        # special case: node-style with data/attributes
        data = node.get("data") or node.get("attributes")
        if isinstance(data, dict):
            method = data.get("method") or data.get("http_method") or data.get("verb")
            path = data.get("path") or data.get("url") or data.get("route")
            if isinstance(method, str) and isinstance(path, str) and method.lower() in HTTP_METHODS:
                oid = data.get("operationId") or data.get("id") or data.get("name")
                acc.append({"method": method.lower(), "path": path, "operationId": oid})

        for v in node.values():
            _collect_ops_recursive(v, acc)
    elif isinstance(node, list):
        for v in node:
            _collect_ops_recursive(v, acc)

def discover_from_graph_generic(obj: Any) -> List[Dict[str, Any]]:
    ops: List[Dict[str, Any]] = []
    _collect_ops_recursive(obj, ops)
    return ops

def discover_operations(obj: Any) -> List[Dict[str, Any]]:
    ops = []
    if isinstance(obj, dict):
        ops.extend(discover_from_openapi_like(obj))
    ops.extend(discover_from_graph_generic(obj))
    # Dedup
    uniq = []
    seen = set()
    for o in ops:
        key = (o.get("method"), o.get("path"))
        if not (key in seen or not o.get("method") or not o.get("path")):
            seen.add(key)
            uniq.append(o)
    return uniq

# -----------------------------
# DSL construction
# -----------------------------

def derive_entities(ops: List[Dict[str, Any]]) -> Tuple[List[Dict[str, Any]], Dict[str, Dict[str, Any]]]:
    """Return (entities_list, entity_index_by_name)."""
    entity_set = set()
    for op in ops:
        p = op.get("path") or "/"
        for seg in path_segments(p):
            if not is_param(seg) and seg not in (".", ".."):
                entity_set.add(seg.replace("-", "_"))
    # Also add parameters as potential typed ids
    entities: List[Dict[str, Any]] = []
    index: Dict[str, Dict[str, Any]] = {}
    for e in sorted(entity_set):
        singular = singularize(e)
        plural = pluralize(singular)
        ent = {
            "name": singular,
            "synonyms": list(sorted(set([singular, plural, e, e.replace("_"," "), singular.replace("_", " ")]))),
        }
        entities.append(ent)
        index[singular] = ent
    return entities, index

def assign_entity_for_path(path: str, entity_index: Dict[str, Dict[str, Any]]) -> Optional[str]:
    segs = [s for s in path_segments(path) if not is_param(s)]
    # Prefer the last concrete segment
    for seg in reversed(segs):
        cand = singularize(seg)
        if cand in entity_index:
            return cand
    # fallback: first concrete segment
    for seg in segs:
        cand = singularize(seg)
        if cand in entity_index:
            return cand
    return None

def build_functions(ops: List[Dict[str, Any]], entity_index: Dict[str, Dict[str, Any]]) -> List[Dict[str, Any]]:
    funs: List[Dict[str, Any]] = []
    for op in ops:
        method = op["method"]
        path = op["path"]
        name = safe_fn_name(method, path)
        entity = assign_entity_for_path(path, entity_index)
        fun = {
            "name": name,
            "method": method,
            "path": path,
            "entity": entity,
            "operationId": op.get("operationId"),
        }
        funs.append(fun)
    return funs

def build_guard_candidates(ops: List[Dict[str, Any]], entities: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    guards: List[Dict[str, Any]] = []
    entity_names = [e["name"] for e in entities]
    # per-entity exist/no-exist
    for e in entity_names:
        guards.append({"name": f"{e}_exists", "args": [e]})
        guards.append({"name": f"no_{e}_exists", "args": [e]})
    # param presence guards
    seen_params = set()
    for op in ops:
        for seg in path_segments(op["path"]):
            if is_param(seg):
                pname = param_name(seg)
                if pname not in seen_params:
                    seen_params.add(pname)
                    guards.append({"name": f"has_{pname}", "args": [pname]})
    return guards

def default_story_templates(entities: List[Dict[str, Any]], functions: List[Dict[str, Any]]) -> List[Dict[str, Any]]:
    templates: List[Dict[str, Any]] = []
    # Simple list/fetch/create patterns per entity if matching functions exist
    for e in entities:
        en = e["name"]
        list_funcs = [f for f in functions if f["entity"] == en and f["method"] == "get"]
        create_funcs = [f for f in functions if f["entity"] == en and f["method"] == "post"]
        if list_funcs:
            templates.append({
                "name": f"list_{pluralize(en)}",
                "goal": f"List {pluralize(en)} via GET",
                "uses": [list_funcs[0]["name"]],
            })
        if create_funcs:
            templates.append({
                "name": f"create_{en}",
                "goal": f"Create a {en} via POST",
                "uses": [create_funcs[0]["name"]],
            })
    # If nothing, add a single catch-all template to keep downstream from producing empties
    if not templates and functions:
        templates.append({
            "name": "smoke_call_first_function",
            "goal": "Call a representative API to verify wiring",
            "uses": [functions[0]["name"]],
        })
    return templates

def build_synonyms(entities: List[Dict[str, Any]]) -> Dict[str, List[str]]:
    out: Dict[str, List[str]] = {}
    for e in entities:
        name = e["name"]
        syns = set(e.get("synonyms", []))
        syns.update([pluralize(name), name.replace("_"," "), pluralize(name).replace("_"," ")])
        out[name] = sorted(syns)
    # method synonyms common
    out["_method"] = ["get=fetch,list,read", "post=create,add", "put=update,replace", "delete=remove,del"]
    return out

def build_dsl(graph: Any, sut: str, provider: str) -> Dict[str, Any]:
    ops = discover_operations(graph)
    entities, eidx = derive_entities(ops)
    functions = build_functions(ops, eidx)
    guards = build_guard_candidates(ops, entities)
    stories = default_story_templates(entities, functions)
    dsl = {
        "meta": {
            "sut": sut,
            "provider": provider,
            "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
        },
        "entities": entities,
        "functions": unique(functions),
        "guards": unique(guards),
        "synonyms": build_synonyms(entities),
        "story_templates": stories,
    }
    return dsl

def mirror_legacy(out_path: str, sut: str) -> Optional[str]:
    # Legacy location: models/hls/<sut>/dsl_map.json
    legacy = os.path.join("models", "hls", sut, "dsl_map.json")
    try:
        os.makedirs(os.path.dirname(legacy), exist_ok=True)
        with open(out_path, "r", encoding="utf-8") as src, open(legacy, "w", encoding="utf-8") as dst:
            dst.write(src.read())
        return legacy
    except Exception:
        return None

def main(argv: Optional[List[str]] = None) -> int:
    p = argparse.ArgumentParser(description="Build a DSL map JSON from a graph.json")
    p.add_argument("--sut", required=True, help="System under test name (e.g., banking)")
    p.add_argument("--provider", required=True, help="Provider bucket (e.g., 7_suts_llm_provider or real_world_llm_provider)")
    p.add_argument("--graph", required=True, help="Path to graph.json")
    p.add_argument("--out", required=True, help="Path to dsl_map.json to write")
    p.add_argument("--pretty", action="store_true", help="Pretty-print JSON output")
    args = p.parse_args(argv)

    if not os.path.exists(args.graph):
        print(f"[ERR] graph not found: {args.graph}", file=sys.stderr)
        return 2

    graph = load_json(args.graph)
    dsl = build_dsl(graph, sut=args.sut, provider=args.provider)
    dump_json(args.out, dsl, pretty=args.pretty)

    print(f"[OK] wrote DSL map -> {args.out}")
    legacy = mirror_legacy(args.out, args.sut)
    if legacy:
        print(f"[OK] mirrored legacy -> {os.path.abspath(legacy)}")
    else:
        print("[WARN] legacy mirror failed (non-fatal)")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
