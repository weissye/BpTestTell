#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
build_hls_gold_nondet.py
------------------------

Build a NONDETERMINISTIC (richer) HLS GOLD from:

  * a graph JSON (with ops), and
  * an optional DSL map, and
  * an optional model output (JSONL with JS stories).

Goals:
  - Derive entities and their key fields from HTTP paths.
  - Derive *realistic* attributes from example request bodies and/or DSL.
  - Generate nondeterministic CRUD stories that use IDs + attributes.
  - Keep the existing CLI contract so existing BAT files continue to work.
"""

import argparse
import json
import re
import sys
from collections import Counter, defaultdict
from pathlib import Path
from typing import Any, Dict, Iterable, List, Optional, Tuple, Union


# ---------------------------------------------------------------------------
# Basic IO helpers
# ---------------------------------------------------------------------------

def read_json(path: Union[str, Path]) -> Any:
    p = Path(path)
    if not p.exists():
        return None
    txt = p.read_text(encoding="utf-8", errors="ignore").strip()
    if not txt:
        return None
    try:
        return json.loads(txt)
    except Exception as e:  # defensive – GOLD generation should not crash silently
        print(f'[ERR] Failed to parse JSON from "{p}": {e}', file=sys.stderr)
        return None


def ensure_parent(path: Union[str, Path]) -> None:
    Path(path).parent.mkdir(parents=True, exist_ok=True)


# ---------------------------------------------------------------------------
# Graph → ops
# ---------------------------------------------------------------------------

def flatten_graph(node: Any, acc: List[Dict]) -> None:
    """
    Fallback extraction if graph["ops"] is not present.

    Recurses through dictionaries/lists and picks any dict with both
    'method' and 'path' keys as an operation.
    """
    if isinstance(node, dict):
        if "method" in node and "path" in node:
            m = str(node.get("method") or "").upper()
            p = node.get("path")
            if m and p:
                acc.append({
                    "method": m,
                    "path": p,
                    "body": node.get("body") or node.get("requestBody") or None,
                })
        for v in node.values():
            flatten_graph(v, acc)
    elif isinstance(node, list):
        for v in node:
            flatten_graph(v, acc)


def extract_ops(graph: Any) -> List[Dict]:
    """
    Normalise the graph into a list of ops:
      { method, path, body? }

    If graph has an 'ops' list, use that. Otherwise, recursively scan.
    """
    ops: List[Dict] = []
    if isinstance(graph, dict) and isinstance(graph.get("ops"), list):
        for o in graph["ops"]:
            if not isinstance(o, dict):
                continue
            m = (o.get("method") or o.get("http_method") or "").upper()
            p = o.get("path") or o.get("http_path") or o.get("endpoint")
            if not (m and p):
                continue
            body = o.get("body") or o.get("requestBody") or None
            ops.append({"method": m, "path": p, "body": body})
    if not ops:
        flatten_graph(graph, ops)

    # Deduplicate by (method, path)
    dedup: Dict[Tuple[str, str], Dict] = {}
    for o in ops:
        k = (o["method"], o["path"])
        if k not in dedup:
            dedup[k] = o
    return list(dedup.values())


# ---------------------------------------------------------------------------
# Entity & field derivation
# ---------------------------------------------------------------------------

def guess_entity_from_path(path: str) -> str:
    """
    /users/{id}/roles -> 'users'
    /projects/{projectId}/issues -> 'projects'
    """
    parts = [p for p in (path or "").split("/") if p]
    if not parts:
        return "root"
    return parts[0]


def extract_path_keys(path: str) -> List[str]:
    return re.findall(r"{([^}]+)}", path or "")


def singularize(name: str) -> str:
    """
    Very small heuristic singularization: projects -> project, libraries -> library.
    """
    if name.endswith("ies"):
        return name[:-3] + "y"
    if name.endswith("ses"):
        return name[:-2]   # 'classes' -> 'class'
    if name.endswith("s") and len(name) > 1:
        return name[:-1]
    return name


def sanitize_js_ident(name: str) -> str:
    """
    Turn arbitrary string into a safe JS identifier.

    - Replace spaces / hyphens with underscores.
    - Strip non-alphanumeric/underscore.
    - Avoid starting with a digit.
    """
    name = re.sub(r"[\s\-]+", "_", str(name))
    name = re.sub(r"[^0-9A-Za-z_]", "", name)
    name = re.sub(r"_+", "_", name).strip("_")
    if not name:
        name = "id"
    if name[0].isdigit():
        name = "_" + name
    return name


def collect_attrs_from_dsl(dsl: Any, entity: str) -> List[str]:
    """
    Best-effort extraction of attribute names from DSL.

    We support a few plausible shapes:

    1) { "entities": { "user": { "attributes": ["name","email"] } } }
    2) { "entities": { "user": { "attributes": [{"name":"name"}, ...] } } }
    3) Any other structure -> ignored.
    """
    if not dsl or not isinstance(dsl, dict):
        return []

    ent_map = dsl.get("entities") or dsl.get("Entities") or {}
    ent_meta = ent_map.get(entity) or ent_map.get(singularize(entity)) or {}
    attrs = ent_meta.get("attributes") or ent_meta.get("fields") or []
    out: List[str] = []
    if isinstance(attrs, list):
        for a in attrs:
            if isinstance(a, str):
                out.append(a)
            elif isinstance(a, dict) and "name" in a:
                out.append(str(a["name"]))
    return out


def collect_attrs_from_bodies(ops: List[Dict], entity: str, keys: Iterable[str]) -> List[str]:
    """
    Look at example request bodies for this entity and pick a few
    frequent field names as attributes (excluding key fields).
    """
    key_set = set(keys)
    counter: Counter = Counter()
    for o in ops:
        if guess_entity_from_path(o["path"]) != entity:
            continue
        body = o.get("body")
        if not isinstance(body, dict):
            continue
        for k in body.keys():
            if not isinstance(k, str):
                continue
            if k in key_set:
                continue
            if k.startswith("_"):
                continue
            if k.lower() in {"id", "created_at", "updated_at"}:
                continue
            counter[k] += 1
    # Take the top few so we don't explode argument lists
    return [k for k, _ in counter.most_common(4)]


def derive_entities(ops: List[Dict], dsl: Any) -> List[Dict]:
    """
    Derive entities, their key fields, and realistic attributes.
    """
    by_ent: Dict[str, Dict[str, Any]] = defaultdict(
        lambda: {"paths": set(), "methods": set(), "path_keys": Counter()}
    )

    for o in ops:
        ent = guess_entity_from_path(o["path"])
        info = by_ent[ent]
        info["paths"].add(o["path"])
        info["methods"].add(o["method"])
        for k in extract_path_keys(o["path"]):
            info["path_keys"][k] += 1

    entities: List[Dict] = []
    for plural, info in by_ent.items():
        keys = [k for k, _ in info["path_keys"].most_common()]
        if not keys:
            keys = ["id"]
        sing = singularize(plural)

        # Attributes from DSL + bodies
        attrs_from_dsl = collect_attrs_from_dsl(dsl, plural)
        attrs_from_bodies = collect_attrs_from_bodies(ops, plural, keys)
        attrs_merged: List[str] = []
        seen: set = set()
        for src in (attrs_from_dsl, attrs_from_bodies):
            for a in src:
                if a not in seen and a not in keys:
                    seen.add(a)
                    attrs_merged.append(a)

        entities.append(
            {
                "entity": plural,
                "singular": sing,
                "plural": plural,
                "keys": keys,
                "attrs": attrs_merged,
                "methods": sorted(info["methods"]),
                "paths": sorted(info["paths"]),
            }
        )

    # Sort for stable output
    entities.sort(key=lambda e: e["entity"])
    return entities


# ---------------------------------------------------------------------------
# Constant value generation
# ---------------------------------------------------------------------------

def const_vals_for_key(name: str, base: int) -> Tuple[Any, Any]:
    """
    Generate two deterministic constant values for a key field.

    For IDs we prefer integers; for other keys we generate strings.
    """
    lname = (name or "").lower()
    if lname.endswith("_id") or lname == "id" or "id" in lname:
        return base, base + 1
    # string-like key
    v1 = f"{name or 'key'}_{base}"
    v2 = f"{name or 'key'}_{base+1}"
    return v1, v2


def const_val_for_attr(name: str, base: int, variant: int = 0) -> Any:
    """
    Generate a realistic-looking constant for an attribute.
    """
    lname = (name or "").lower()
    suffix = base + variant

    if any(x in lname for x in ("name", "title")):
        return f"{name.capitalize()} {suffix}"
    if "email" in lname:
        return f"user{suffix}@example.com"
    if "status" in lname:
        return "active" if suffix % 2 == 0 else "inactive"
    if "desc" in lname:
        return f"{name} description {suffix}"
    if "date" in lname:
        return f"2025-01-{(suffix % 28) + 1:02d}"
    if "flag" in lname or lname.startswith("is_"):
        return bool(suffix % 2)

    # generic string attribute
    return f"{name}_{suffix}"


# ---------------------------------------------------------------------------
# Story JS helpers
# ---------------------------------------------------------------------------

def bthread(name: str, decls: List[str], calls: List[str]) -> str:
    decl_block = ""
    if decls:
        decl_block = "\n  " + "\n  ".join(decls)
    call_block = ""
    if calls:
        call_block = "\n  " + "\n  ".join(calls)

    return f"""// ---- {name} ----
bthread("{name}", function () {{{decl_block}{call_block}
}});
"""


def make_calls(ent: str, Ent: str, order: List[str], args: str, negatives: bool = False) -> List[str]:
    """
    Build the sequence of JS calls for a structured CRUD story.

    'args' is a comma-separated JS expression list: id, attr1, attr2, ...
    """
    calls: List[str] = []
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


# ---------------------------------------------------------------------------
# Main builder
# ---------------------------------------------------------------------------

def main() -> None:
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
        print(f'[ERR] graph not found/invalid: "{args.graph}"', file=sys.stderr)
        sys.exit(2)

    dsl = read_json(args.dsl) if args.dsl else None

    ops = extract_ops(graph)
    if not ops:
        print(f'[ERR] No operations extracted from graph: "{args.graph}"', file=sys.stderr)
        sys.exit(2)

    entities = derive_entities(ops, dsl)

    stories: List[Dict[str, Any]] = []
    js_blocks: List[str] = []

    base_orders: List[List[str]] = [
        ["add", "verify", "update", "delete", "verify!"],
        ["add", "update", "verify", "delete", "verify!"],
        ["add", "verify", "delete", "verify!"],
    ]

    # For each entity, generate up to --per_entity randomized CRUD patterns
    for e_idx, e in enumerate(entities):
        ent = e["singular"]
        Ent = ent[:1].upper() + ent[1:]
        keys = e["keys"]
        attrs = e["attrs"]

        key_vars = [sanitize_js_ident(k or "id") for k in keys]
        attr_vars = [sanitize_js_ident(f"{ent}_{a}") for a in attrs]

        count = 0
        for order in base_orders:
            base_val = 200 + e_idx * 10 + count

            decls: List[str] = []

            # Keys first (IDs)
            for k_name, v_name in zip(keys, key_vars):
                v1, _ = const_vals_for_key(k_name, base_val)
                lit = json.dumps(v1)
                decls.append(f"let {v_name} = {lit};")

            # Attributes from DSL/body examples
            for a_name, v_name in zip(attrs, attr_vars):
                v = const_val_for_attr(a_name, base_val, variant=0)
                lit = json.dumps(v)
                decls.append(f"let {v_name} = {lit};")

            args_list = key_vars + attr_vars
            args_s = ", ".join(args_list) if args_list else ""

            name = f"crud:{ent}:nondet:{e_idx+1}:{count+1}"
            calls = make_calls(ent, Ent, order, args_s, negatives=True)
            js = bthread(name, decls, calls)

            stories.append(
                {
                    "name": name,
                    "entity": ent,
                    "mode": "nondet",
                    "js": js,
                }
            )
            js_blocks.append(js)

            count += 1
            if count >= args.per_entity:
                break

        # Optional extra story using a second value set (if we still have budget)
        if keys and count < args.per_entity:
            base_val = 200 + e_idx * 10 + count

            decls = []
            for k_name, v_name in zip(keys, key_vars):
                _, v2 = const_vals_for_key(k_name, base_val)
                lit = json.dumps(v2)
                decls.append(f"let {v_name} = {lit};")

            for a_name, v_name in zip(attrs, attr_vars):
                v = const_val_for_attr(a_name, base_val, variant=1)
                lit = json.dumps(v)
                decls.append(f"let {v_name} = {lit};")

            args_list = key_vars + attr_vars
            args_s = ", ".join(args_list) if args_list else ""
            name = f"crud:{ent}:nondet:{e_idx+1}:{count+1}"
            calls = make_calls(ent, Ent, ["add", "delete", "verify!"], args_s, negatives=True)
            js = bthread(name, decls, calls)

            stories.append(
                {
                    "name": name,
                    "entity": ent,
                    "mode": "nondet",
                    "js": js,
                }
            )
            js_blocks.append(js)

    # Optionally merge model-provided JS stories (raw)
    if args.merge_model:
        model_path = Path(args.merge_model)
        if model_path.exists():
            with model_path.open("r", encoding="utf-8", errors="ignore") as fh:
                for line in fh:
                    line = line.strip()
                    if not line:
                        continue
                    try:
                        obj = json.loads(line)
                    except Exception:
                        continue
                    js = obj.get("story_js") or obj.get("js")
                    name = obj.get("name") or obj.get("id") or "model-story"
                    if not js:
                        continue
                    stories.append(
                        {
                            "name": name,
                            "entity": obj.get("entity") or "?",
                            "mode": "nondet",
                            "js": js,
                        }
                    )
                    js_blocks.append(js)

    out_obj: Dict[str, Any] = {
        "meta": {
            "provider": args.provider,
            "sut": args.sut,
            "mode": "nondet",
        },
        "entities": entities,
        "stories": stories,
        "stories_js": "\n".join(js_blocks),
        "source": {
            "graph": args.graph,
            "dsl": args.dsl,
            "merge_model": args.merge_model or "",
        },
    }

    ensure_parent(args.out)
    Path(args.out).write_text(json.dumps(out_obj, indent=2), encoding="utf-8")
    print(
        f'[OK] wrote NONDET GOLD -> "{args.out}" '
        f'with {len(stories)} stories across {len(entities)} entities.'
    )


if __name__ == "__main__":
    main()
