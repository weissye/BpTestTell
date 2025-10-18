#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
emit_hls_all_in_one.py
----------------------
Generate "garage-style" BPjs High-Level Stories (HLS) from an OpenAPI-derived graph.json
and a DSL mapping (interface.js function names + shapes).

Highlights
- Garage-style bthreads (active lifecycles, passive verifications, guards)
- Uses interface.js-style DSL function names from a dsl_map.json
- Negative & edge-path guards using status codes (best-effort)
- Cross-entity guard stories from relationships
- Passive guards derived from DSL wait/match helpers
- Coverage gate: prints a quick coverage line and notes "FAIL" if below threshold
- NO `if (mode === "MODEL")` wrapper

CLI
----
python emit_hls_all_in_one.py --sut_dir 7_suts_llm_provider\banking \
  --mode det --profile rich --per_entity_max 3 --fail_under_stories 10 \
  --graph artifacts\analysis\7_suts_llm_provider\banking\graph.json \
  --dsl_map models\hls\banking\dsl_map.json

Defaults (if --graph / --dsl_map omitted):
  graph:   artifacts/analysis/<provider>/<sut>/graph.json
  dsl_map: models/hls/<sut>/dsl_map.json

Output (if --out omitted):
  artifacts/hls_<mode>/<provider>/<sut>/readable/stories_hls.js

The DSL map format is intentionally flexible. Minimal supported shape:

{
  "entities": {
    "Customer": {
      "args": ["id","name"],               // fields to pass into add/update/etc
      "do":    {"add":"addCustomer","update":"updateCustomer","delete":"deleteCustomer"},
      "match": {"add":"matchAddCustomer","update":"matchUpdateCustomer","delete":"matchDeleteCustomer"},
      "wait":  {"added":"waitForAnyCustomerAdded","updated":"waitForAnyCustomerUpdated","deleted":"waitForAnyCustomerDeleted"},
      "verify":{"exists":"verifyCustomerExists","updated":"verifyCustomerUpdated","notExists":"verifyCustomerDoesNotExist"}
    },
    "Vehicle": { ... }
  },
  "consts": {"ANY":"ANY"}                  // constant identifier for wildcard
}

If some keys are missing, the generator will synthesize reasonable defaults
based on the entity name (e.g., addCustomer, matchAddCustomer, waitForAnyCustomerAdded, etc.).
"""

import argparse, json, os, sys, re
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

# ------------------------------
# Utilities
# ------------------------------

def normp(p: Path) -> str:
    # Print nice OS-native paths
    return os.path.normpath(str(p))

def ensure_parent(path: Path) -> None:
    path.parent.mkdir(parents=True, exist_ok=True)

def load_json(path: Path) -> Any:
    if not path.exists():
        return None
    with path.open('r', encoding='utf-8') as f:
        return json.load(f)

def safe_get(d: dict, *keys, default=None):
    cur = d
    for k in keys:
        if not isinstance(cur, dict) or k not in cur:
            return default
        cur = cur[k]
    return cur

# ------------------------------
# Default path logic
# ------------------------------

def split_provider_and_sut(sut_dir: str) -> Tuple[str, str]:
    # sut_dir looks like "7_suts_llm_provider\banking" -> ("7_suts_llm_provider", "banking")
    p = Path(sut_dir)
    if len(p.parts) >= 2:
        return p.parts[0], p.parts[1]
    elif len(p.parts) == 1:
        return "", p.parts[0]
    return "", sut_dir

def default_graph_path(sut_dir: str) -> Path:
    provider, sut = split_provider_and_sut(sut_dir)
    return Path("artifacts") / "analysis" / provider / sut / "graph.json"

def default_dsl_map_path(sut_dir: str) -> Path:
    _, sut = split_provider_and_sut(sut_dir)
    return Path("models") / "hls" / sut / "dsl_map.json"

def default_out_path(sut_dir: str, mode: str) -> Path:
    provider, sut = split_provider_and_sut(sut_dir)
    base = Path("artifacts") / f"hls_{mode}" / provider / sut / "readable"
    return base / "stories_hls.js"

# ------------------------------
# DSL helpers (build names if missing)
# ------------------------------

def titlecase(name: str) -> str:
    return name[:1].upper() + name[1:]

def concat(*parts: str) -> str:
    return "".join(parts)

def build_entity_dsl(entity_name: str, edsl: Dict[str, Any]) -> Dict[str, Dict[str, Any]]:
    """Return a dict with do/match/wait/verify + args finalized for entity."""
    E = titlecase(entity_name)
    args = edsl.get("args") or ["id"]
    def _fallback_do(op):
        return edsl.get("do", {}).get(op) or concat(op, E)
    def _fallback_match(op):
        return edsl.get("match", {}).get(op) or concat("match", titlecase(op), E)
    def _fallback_wait(kind):
        # "added","updated","deleted"
        base = {"added":"Added","updated":"Updated","deleted":"Deleted"}.get(kind, titlecase(kind))
        return edsl.get("wait", {}).get(kind) or concat("waitForAny", E, base)
    def _fallback_verify(kind):
        # "exists","updated","notExists"
        mapping = {"exists":"Exists","updated":"Updated","notExists":"DoesNotExist"}
        return edsl.get("verify", {}).get(kind) or concat("verify", E, mapping.get(kind, titlecase(kind)))

    return {
        "args": args,
        "do": {
            "add": _fallback_do("add"),
            "update": _fallback_do("update"),
            "delete": _fallback_do("delete"),
        },
        "match": {
            "add": _fallback_match("add"),
            "update": _fallback_match("update"),
            "delete": _fallback_match("delete"),
        },
        "wait": {
            "added": _fallback_wait("added"),
            "updated": _fallback_wait("updated"),
            "deleted": _fallback_wait("deleted"),
        },
        "verify": {
            "exists": _fallback_verify("exists"),
            "updated": _fallback_verify("updated"),
            "notExists": _fallback_verify("notExists"),
        },
    }

def derive_entities_from_dsl(dsl: Dict[str, Any]) -> List[str]:
    ents = []
    entities_obj = dsl.get("entities") or {}
    for k,_ in entities_obj.items():
        ents.append(k)
    return ents

# ------------------------------
# Graph parsing (very forgiving)
# ------------------------------

def parse_graph(graph: Optional[Dict[str, Any]]) -> Dict[str, Any]:
    """Attempt to extract:
       - entities: List[str]
       - operations: Dict[entity, List[str]] (e.g., add/update/delete/...)
       - relationships: List[{"parent":..., "child":..., "type":..., "fk":...}]
       - negative: List[{"entity":..., "op":..., "status": <int or str>, "desc":...}]
       - kinds: List[str] (tags / groups), if present
    """
    if not graph:
        return {"entities": [], "operations": {}, "relationships": [], "negative": [], "kinds": []}

    out = {"entities": set(), "operations": {}, "relationships": [], "negative": [], "kinds": []}

    # 1) explicit entities/operations
    if isinstance(graph.get("entities"), list):
        for e in graph["entities"]:
            nm = e.get("name") or e.get("entity") or e.get("id")
            if nm: out["entities"].add(nm)

    if isinstance(graph.get("operations"), list):
        for op in graph["operations"]:
            en = op.get("entity")
            if en:
                out["entities"].add(en)
                out["operations"].setdefault(en, set()).add(op.get("op","op"))
                st = op.get("status") or {}
                for code in st.keys():
                    try:
                        icode = int(code)
                    except:
                        icode = None
                    if icode and icode >= 400:
                        out["negative"].append({"entity": en, "op": op.get("op","op"), "status": icode, "desc": op.get("summary") or ""})

    # 2) OpenAPI-ish paths
    if "paths" in graph and isinstance(graph["paths"], dict):
        for path, methods in graph["paths"].items():
            ent_guess = path.strip("/").split("/")[-1]
            if ent_guess:
                # normalize to alnum + TitleCase
                import re
                ent_norm = re.sub(r"[^A-Za-z0-9]", "", ent_guess)
                ent_norm = titlecase(ent_norm) if ent_norm else ent_guess
                out["entities"].add(ent_norm)
                if isinstance(methods, dict):
                    for method, spec in methods.items():
                        op = method.lower()
                        out["operations"].setdefault(ent_norm, set()).add(op)
                        resp = spec.get("responses", {})
                        for code in resp.keys():
                            try:
                                icode = int(code)
                            except:
                                icode = None
                            if icode and icode >= 400:
                                out["negative"].append({"entity": ent_norm, "op": op, "status": icode, "desc": spec.get("summary") or ""})

    # 3) relationships
    rels = graph.get("relationships")
    if isinstance(rels, list):
        for r in rels:
            parent = r.get("parent") or r.get("from") or r.get("source")
            child  = r.get("child")  or r.get("to")   or r.get("target")
            rtype  = r.get("type")   or r.get("kind") or "relation"
            fk     = r.get("fk")     or r.get("via")  or None
            if parent and child:
                out["relationships"].append({"parent": titlecase(parent), "child": titlecase(child), "type": rtype, "fk": fk})

    kinds = graph.get("kinds")
    if isinstance(kinds, list):
        out["kinds"] = kinds

    out["entities"] = list(out["entities"])
    out["operations"] = {k:list(v) for k,v in out["operations"].items()}
    return out

# ------------------------------
# JS builders (garage-style bthreads)
# ------------------------------

def js_header(sut_name: str) -> str:
    hdr = []
    hdr.append("// ====================================================================")
    hdr.append("// Auto-generated garage-style High-Level Stories (HLS)")
    hdr.append(f"// SUT: {sut_name}")
    hdr.append("// ====================================================================")
    hdr.append("")
    hdr.append("var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');")
    hdr.append("")
    hdr.append("// ===== ACTIVE LIFECYCLES =====")
    hdr.append("")
    return "\n".join(hdr) + "\n"

def indent(lines: List[str], n: int = 2) -> List[str]:
    pad = " " * n
    return [pad + ln if ln else "" for ln in lines]

def bthread(name: str, body_lines: List[str]) -> str:
    out = []
    out.append(f"bthread(\"{name}\", function () {{")
    out.extend(indent(body_lines, 2))
    out.append("});")
    out.append("")
    return "\n".join(out)

def js_pick_samples(var_name: str, sample_objs: List[dict]) -> List[str]:
    arr_items = []
    for obj in sample_objs:
        parts = []
        for k,v in obj.items():
            parts.append(f"{k}: {json.dumps(v)}")
        arr_items.append("{" + ", ".join(parts) + "}")
    line = f"const {var_name} = pick([{', '.join(arr_items)}]);"
    return [line]

def build_active_lifecycle(entity: str, edsl: Dict[str, Any], per_entity_max: int) -> List[str]:
    name = f"{entity} lifecycle"
    args = edsl["args"]
    do   = edsl["do"]
    ver  = edsl["verify"]

    def sample_val(i, k):
        kl = k.lower()
        if kl.endswith("id") or kl == "id":
            return f"{entity[:1].upper()}{i:03d}"
        if "name" in kl:
            return ["Alpha","Bravo","Charlie","Delta"][i % 4]
        if any(x in kl for x in ["amount","price","total"]):
            return (i+1)*100
        return f"{entity}_{k}_{i}"

    samples = []
    for i in range(2):
        obj = {k: sample_val(i+1,k) for k in args}
        samples.append(obj)

    body = []
    body += js_pick_samples("x", samples)

    body.append(concat(do["add"], "(", ", ".join([f"x.{a}" for a in args]), ");"))
    up_count = min(2, max(1, per_entity_max-1))
    for u in range(up_count):
        body.append(concat(do["update"], "(", ", ".join([f"x.{a}" for a in args]), ");"))

    body.append(concat(ver["exists"], "(", ", ".join([f"x.{a}" for a in args]), ");"))
    body.append(concat(ver["updated"], "(", ", ".join([f"x.{a}" for a in args]), ");"))
    return [ bthread(titlecase(name), body) ]

def build_passive_verifications(entity: str, edsl: Dict[str, Any]) -> List[str]:
    wait = edsl["wait"]; match = edsl["match"]; ver = edsl["verify"]
    arg0 = edsl["args"][0] if edsl["args"] else "id"

    stories = []

    body = []
    body.append(concat("const e = ", wait["added"], "();"))
    body.append(concat("block(", match["delete"], "(e.", arg0, ", ANY), function () {"))
    body.extend(indent([concat(ver["exists"], "(e.", arg0, ");")]))
    body.append("});")
    stories.append(bthread(f"{entity} create verification", body))

    body = []
    body.append(concat("const e = ", wait["updated"], "();"))
    body.append(concat("block(", match["delete"], "(e.", arg0, ", ANY), function () {"))
    body.extend(indent([concat(ver["updated"], "(e.", arg0, ");")]))
    body.append("});")
    stories.append(bthread(f"{entity} update verification", body))

    body = []
    body.append(concat("const e = ", wait["deleted"], "();"))
    body.append(concat("block(", match["add"], "(e.", arg0, ", ANY), function () {"))
    body.extend(indent([concat(ver["notExists"], "(e.", arg0, ");")]))
    body.append("});")
    stories.append(bthread(f"{entity} delete verification", body))

    return stories

def build_relationship_guards(rels: List[Dict[str, Any]], dsl: Dict[str, Any]) -> List[str]:
    out = []
    for r in rels:
        parent = r["parent"]; child = r["child"]
        ents = dsl["entities"]
        if parent not in ents or child not in ents:
            continue
        pdsl = ents[parent]; cdsl = ents[child]
        body = []
        body.append(concat("const c = ", cdsl["wait"]["added"], "();"))
        body.append(concat("block(", pdsl["match"]["delete"], "(ANY, ANY), function () {});"))
        out.append(bthread(f"Guard: No {parent} delete with {child} present", body))
    return out

def build_unique_guards(entities: List[str], dsl: Dict[str, Any]) -> List[str]:
    out = []
    for e in entities:
        edsl = dsl["entities"][e]
        key = edsl["args"][0] if edsl["args"] else "id"
        body = []
        body.append(concat("const x = ", edsl["wait"]["added"], "();"))
        body.append(concat("block(", edsl["match"]["add"], "(x.", key, ", ANY), function () {});"))
        out.append(bthread(f"Guard: Unique {e}", body))
    return out

def build_negative_status_guards(graph_info: Dict[str, Any], dsl: Dict[str, Any]) -> List[str]:
    out = []
    for item in graph_info.get("negative", []):
        en = titlecase(item["entity"])
        ents = dsl["entities"]
        if en not in ents:
            continue
        edsl = ents[en]
        op = item["op"].lower()
        status = item["status"]
        if op in ("post","add","create"):
            mfn = edsl["match"]["add"]
            label = f"Guard: {en} add – avoid {status}"
        elif op in ("put","patch","update"):
            mfn = edsl["match"]["update"]
            label = f"Guard: {en} update – avoid {status}"
        elif op in ("delete","del","remove"):
            mfn = edsl["match"]["delete"]
            label = f"Guard: {en} delete – avoid {status}"
        else:
            mfn = edsl["match"].get(op) or edsl["match"]["add"]
            label = f"Guard: {en} {op} – avoid {status}"
        body = []
        body.append("const t = tick();")
        body.append(concat("block(", mfn, "(ANY, ANY), function () {});"))
        out.append(bthread(label, body))
    return out

# ------------------------------
# Main story builder
# ------------------------------

def build_stories(graph: Optional[Dict[str, Any]], dsl: Dict[str, Any], profile: str, per_entity_max: int):
    graph_info = parse_graph(graph)
    entities = derive_entities_from_dsl(dsl)
    for e in graph_info["entities"]:
        if e not in entities:
            entities.append(e)
    entities = [titlecase(e) for e in entities]

    edsl_map = {}
    for e in entities:
        edsl_map[e] = build_entity_dsl(e, safe_get(dsl, "entities", e, default={}) or {})

    kinds = graph_info.get("kinds") or []
    operations = graph_info.get("operations") or {}
    by_entity_ops = {e: len(operations.get(e, [])) for e in entities}

    stories: List[str] = []
    if entities:
        stories.append(js_header(safe_get(dsl, "sut_name", default="unknown") or "unknown"))

    for e in entities:
        stories.extend(build_active_lifecycle(e, edsl_map[e], per_entity_max))

    stories.append("// ===== PASSIVE ASSERTIONS =====\n")
    for e in entities:
        stories.extend(build_passive_verifications(e, edsl_map[e]))

    stories.append("// ===== RELATIONSHIP GUARDS =====\n")
    stories.extend(build_relationship_guards(graph_info.get("relationships", []), {"entities": edsl_map}))

    stories.append("// ===== UNIQUENESS GUARDS =====\n")
    stories.extend(build_unique_guards(entities, {"entities": edsl_map}))

    stories.append("// ===== NEGATIVE/EDGE STATUS GUARDS =====\n")
    stories.extend(build_negative_status_guards(graph_info, {"entities": edsl_map}))

    cov = {
        "kinds": kinds,
        "ops": sum(by_entity_ops.values()),
        "by_entity": by_entity_ops,
        "rels": graph_info.get("relationships", []),
    }
    return stories, cov

# ------------------------------
# File writer & CLI
# ------------------------------

def write_stories(out_path: Path, stories: List[str]) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open('w', encoding='utf-8') as f:
        f.write("\n".join(stories))
        if not stories or not stories[-1].endswith("\n"):
            f.write("\n")
    print(f"[OK] wrote {os.path.normpath(str(out_path))} ({len(stories)} stories)")

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True, help="e.g., 7_suts_llm_provider\banking")
    ap.add_argument("--mode", choices=["det","nondet"], default="det")
    ap.add_argument("--out", default=None)
    ap.add_argument("--graph", default=None)
    ap.add_argument("--dsl_map", default=None)
    ap.add_argument("--profile", choices=["basic","rich"], default="rich")
    ap.add_argument("--per_entity_max", type=int, default=3)
    ap.add_argument("--fail_under_stories", type=int, default=0)
    args = ap.parse_args()

    out_path = Path(args.out) if args.out else default_out_path(args.sut_dir, args.mode)
    graph_path = Path(args.graph) if args.graph else default_graph_path(args.sut_dir)
    dsl_map_path = Path(args.dsl_map) if args.dsl_map else default_dsl_map_path(args.sut_dir)

    if graph_path.exists():
        print(f'    using --graph "{os.path.normpath(str(graph_path))}"')
    else:
        print(f'    [WARN] Graph not found at "{os.path.normpath(str(graph_path))}"')

    if dsl_map_path.exists():
        print(f'    using --dsl_map "{os.path.normpath(str(dsl_map_path))}"')

    graph = load_json(graph_path) or {}
    dsl   = load_json(dsl_map_path) or {}

    _, sut = split_provider_and_sut(args.sut_dir)
    dsl.setdefault("sut_name", sut)

    stories, cov = build_stories(graph, dsl, args.profile, args.per_entity_max)

    if not graph_path.exists() and len(stories) == 0:
        print(f"[SKIP] no graph:  {args.sut_dir}")
        return 0

    write_stories(out_path, stories)

    kinds = cov.get("kinds", [])
    ops_count = cov.get("ops", 0)
    by_entity = cov.get("by_entity", {})
    rels = cov.get("rels", [])
    rel_pairs = [(r.get('parent'), r.get('child')) for r in rels]
    print(f"[COVERAGE] sut={sut} kinds={kinds} ops={ops_count} by_entity={by_entity} rels={rel_pairs}")

    if args.fail_under_stories and len(stories) < args.fail_under_stories:
        print(f"[FAIL] story count {len(stories)} < threshold {args.fail_under_stories}")

    return 0

if __name__ == "__main__":
    sys.exit(main())
