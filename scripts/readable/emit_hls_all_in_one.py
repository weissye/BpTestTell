#!/usr/bin/env python3
# -*- coding: utf-8 -*-
r"""
emit_hls_all_in_one.py
----------------------
Generate "garage-style" BPjs High-Level Stories (HLS) from an OpenAPI-derived graph.json
and a DSL mapping (interface.js function names + shapes).
"""
import argparse, json, os, sys, re
from pathlib import Path
from typing import Dict, List, Tuple, Any, Optional

def normp(p: Path) -> str:
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

def split_provider_and_sut(sut_dir: str) -> Tuple[str, str]:
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

def titlecase(name: str) -> str:
    if not name:
        return name
    parts = re.split(r'[^A-Za-z0-9]+', name)
    return ''.join(p[:1].upper() + p[1:].lower() for p in parts if p)

def concat(*parts: str) -> str:
    return "".join(parts)

def _normalize_entity(e: dict, fallback_name: Optional[str] = None) -> dict:
    e = dict(e or {})
    nm = e.get("name") or fallback_name or ""
    nm = titlecase(re.sub(r"[^A-Za-z0-9]", "", nm)) if nm else ""
    e["name"] = nm or e.get("name") or fallback_name or ""
    if "args" not in e or not isinstance(e.get("args"), list):
        e["args"] = ["id"]
    e["do"] = dict(e.get("do") or {})
    e["match"] = dict(e.get("match") or {})
    e["wait"] = dict(e.get("wait") or {})
    e["verify"] = dict(e.get("verify") or {})
    return e

def build_entity_dsl(entity_name: str, edsl: Dict[str, Any]) -> Dict[str, Dict[str, Any]]:
    E = titlecase(entity_name)
    edsl = _normalize_entity(edsl, fallback_name=E)
    args = edsl.get("args") or ["id"]

    def _fallback_do(op):
        return edsl.get("do", {}).get(op) or concat(op, E)

    def _fallback_match(op):
        return edsl.get("match", {}).get(op) or concat("match", titlecase(op), E)

    def _fallback_wait(kind):
        base = {"added":"Added","updated":"Updated","deleted":"Deleted"}.get(kind, titlecase(kind))
        return edsl.get("wait", {}).get(kind) or concat("waitForAny", E, base)

    def _fallback_verify(kind):
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

def derive_entities_from_dsl(dsl: dict) -> Dict[str, dict]:
    out: Dict[str, dict] = {}
    raw = dsl.get("entities", {})

    if isinstance(raw, dict):
        for k, v in raw.items():
            if isinstance(v, dict):
                norm = _normalize_entity(v, fallback_name=k)
                if norm.get("name"):
                    out[titlecase(norm["name"])] = norm
        return out

    if isinstance(raw, list):
        for item in raw:
            if not isinstance(item, dict):
                continue
            if "name" in item and isinstance(item["name"], str):
                norm = _normalize_entity(item, fallback_name=item["name"])
                out[titlecase(norm["name"])] = norm
                continue
            if len(item) == 1:
                k, v = next(iter(item.items()))
                if isinstance(v, dict):
                    norm = _normalize_entity(v, fallback_name=k)
                    out[titlecase(norm["name"])] = norm
        return out

    return out

def parse_graph(graph: Optional[Dict[str, Any]]) -> Dict[str, Any]:
    if not graph:
        return {"entities": [], "operations": {}, "relationships": [], "negative": [], "kinds": []}

    out = {"entities": set(), "operations": {}, "relationships": [], "negative": [], "kinds": []}

    if isinstance(graph.get("entities"), list):
        for e in graph["entities"]:
            nm = e.get("name") or e.get("entity") or e.get("id")
            if nm:
                out["entities"].add(titlecase(nm))

    if isinstance(graph.get("operations"), list):
        for op in graph["operations"]:
            en = op.get("entity")
            if en:
                en = titlecase(en)
                out["entities"].add(en)
                out["operations"].setdefault(en, set()).add(op.get("op", "op"))
                st = op.get("status") or {}
                for code in st.keys():
                    try: icode = int(code)
                    except: icode = None
                    if icode and icode >= 400:
                        out["negative"].append({
                            "entity": en, "op": op.get("op", "op"),
                            "status": icode, "desc": op.get("summary") or ""
                        })

    verb_map = {
        "create": "add", "add": "add", "approve": "update", "close": "update", "reset": "update",
        "update": "update", "delete": "delete", "remove": "delete"
    }
    http_map = {"post": "add", "put": "update", "patch": "update", "delete": "delete", "get": "get"}

    if "paths" in graph and isinstance(graph["paths"], dict):
        for path, methods in graph["paths"].items():
            if not isinstance(methods, dict):
                continue
            segs = [s for s in path.strip("/").split("/") if s]
            if not segs:
                continue

            last = segs[-1].lower()
            if last in verb_map and len(segs) >= 2:
                entity = titlecase(segs[-2])
                out["entities"].add(entity)
                for method, spec in methods.items():
                    op = verb_map[last]
                    out["operations"].setdefault(entity, set()).add(op)
                    for code in (spec.get("responses", {}) or {}):
                        try: icode = int(code)
                        except: icode = None
                        if icode and icode >= 400:
                            out["negative"].append({
                                "entity": entity, "op": op, "status": icode,
                                "desc": spec.get("summary") or ""
                            })
            else:
                entity_seg = segs[-1] if not segs[-1].startswith("{") else (segs[-2] if len(segs) >= 2 else segs[-1])
                entity = titlecase(entity_seg)
                out["entities"].add(entity)
                for method, spec in methods.items():
                    op = http_map.get(method.lower(), method.lower())
                    out["operations"].setdefault(entity, set()).add(op)
                    for code in (spec.get("responses", {}) or {}):
                        try: icode = int(code)
                        except: icode = None
                        if icode and icode >= 400:
                            out["negative"].append({
                                "entity": entity, "op": op, "status": icode,
                                "desc": spec.get("summary") or ""
                            })

    rels = graph.get("relationships")
    if isinstance(rels, list):
        for r in rels:
            parent = r.get("parent") or r.get("from") or r.get("source")
            child  = r.get("child")  or r.get("to")   or r.get("target")
            rtype  = r.get("type")   or r.get("kind") or "relation"
            fk     = r.get("fk")     or r.get("via")  or None
            if parent and child:
                out["relationships"].append({
                    "parent": titlecase(parent),
                    "child":  titlecase(child),
                    "type":   rtype,
                    "fk":     fk
                })

    kinds = graph.get("kinds")
    if isinstance(kinds, list):
        out["kinds"] = kinds

    out["entities"] = list(out["entities"])
    out["operations"] = {k: list(v) for k, v in out["operations"].items()}
    return out

_TRAILING_VERBS = ("create","add","update","delete","approve","close","reset","remove")

def cleanup_entity_against_dsl(raw_name: str, dsl_names: List[str]) -> Optional[str]:
    if not raw_name:
        return None
    dsl_lower = {n.lower(): n for n in dsl_names}
    rn = raw_name.strip()
    if rn.lower() in dsl_lower:
        return dsl_lower[rn.lower()]
    low = rn.lower()
    for vb in _TRAILING_VERBS:
        if low.endswith(vb):
            stem = low[: -len(vb)]
            stem = stem.rstrip("_-/ ")
            if stem in dsl_lower:
                return dsl_lower[stem]
            tc = titlecase(stem)
            if tc.lower() in dsl_lower:
                return dsl_lower[tc.lower()]
    return None

def js_header(sut_name: str) -> str:
    hdr = []
    hdr.append("// ====================================================================")
    hdr.append("// Auto-generated garage-style High-Level Stories (HLS)")
    hdr.append(f"// SUT: {sut_name}")
    hdr.append("// ====================================================================")
    hdr.append("")
    hdr.append("var ANY = (typeof H !== 'undefined' && H.ANY) ? H.ANY : (typeof ANY !== 'undefined' ? ANY : '*');")
    hdr.append("")
    hdr.append("// --- pick() shim: prefer BPjs nondet, else random fallback ---")
    hdr.append("if (typeof pick === 'undefined') {")
    hdr.append("  function pick(options) {")
    hdr.append("    if (typeof bp !== 'undefined' && typeof bp.pickFrom === 'function') {")
    hdr.append("      return bp.pickFrom(options); // nondeterministic exploration")
    hdr.append("    }")
    hdr.append("    // fallback for plain JS execution")
    hdr.append("    return options[Math.floor(Math.random() * options.length)];")
    hdr.append("  }")
    hdr.append("}")
    hdr.append("")
    hdr.append("// --- _pk(e,key): robust primary-key extractor for wait/match events ---")
    hdr.append("function _pk(e, key) {")
    hdr.append("  if (e == null) return undefined;")
    hdr.append("  if (typeof e === 'object') {")
    hdr.append("    if (Object.prototype.hasOwnProperty.call(e, key) && typeof e[key] !== 'function') return e[key];")
    hdr.append("    if (e.data && Object.prototype.hasOwnProperty.call(e.data, key) && typeof e.data[key] !== 'function') return e.data[key];")
    hdr.append("    if (e.payload && Object.prototype.hasOwnProperty.call(e.payload, key) && typeof e.payload[key] !== 'function') return e.payload[key];")
    hdr.append("    if (Object.prototype.hasOwnProperty.call(e, 'id') && typeof e['id'] !== 'function') return e['id'];")
    hdr.append("    // minimal extra fallback for Inventory-like entities")
    hdr.append("    if (Object.prototype.hasOwnProperty.call(e, 'ndc') && typeof e['ndc'] !== 'function') return e['ndc'];")
    hdr.append("  }")
    hdr.append("  return (typeof e === 'string' || typeof e === 'number') ? e : undefined;")
    hdr.append("}")
    hdr.append("")
    hdr.append("// --- canonKey(v): normalize any key-like value to a scalar string ---")
    hdr.append("function canonKey(v) {")
    hdr.append("  if (v == null) return '1001';")
    hdr.append("  if (typeof v === 'function') return '1001';")
    hdr.append("  if (typeof v === 'object') {")
    hdr.append("    if ('id' in v) return String(v.id);")
    hdr.append("    if ('ndc' in v) return String(v.ndc);")
    hdr.append("    const ks = Object.keys(v);")
    hdr.append("    if (ks.length) return String(v[ks[0]]);")
    hdr.append("    return '1001';")
    hdr.append("  }")
    hdr.append("  return String(v);")
    hdr.append("}")
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
    match = edsl.get("match", {})
    wait  = edsl.get("wait", {})

    def _specific_wait(fn: str) -> str:
        if not fn:
            return fn
        return re.sub(r'^waitForAny', 'waitFor', fn)

    def sample_val(i, k):
        kl = k.lower()
        if kl.endswith("id") or kl == "id":
            return str(1000 + i)
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
    arglist = ", ".join([f"x.{a}" for a in args])
    arg0 = args[0] if args else "id"

    body += js_pick_samples("x", samples)
    body.append(concat("const id = canonKey(", "x.", arg0, ");"))

    body.append(concat(do["add"], "(", arglist, ");"))
    w_add = _specific_wait(wait.get("added", ""))
    if w_add:
        body.append(concat("const e_add = ", w_add, "(id);"))
        if "delete" in match:
            body.append(concat("block(", match["delete"], "(id), function () {"))
            body.append(concat("  ", ver["exists"], "(id);"))
            body.append("});")
        else:
            body.append(concat(ver["exists"], "(id);"))

    up_count = min(2, max(1, per_entity_max-1))
    for _ in range(up_count):
        body.append(concat(do["update"], "(", arglist, ");"))
    w_upd = _specific_wait(wait.get("updated", ""))
    if w_upd:
        body.append(concat("const e_upd = ", w_upd, "(id);"))
        if "delete" in match:
            body.append(concat("block(", match["delete"], "(id), function () {"))
            body.append(concat("  ", ver["updated"], "(id);"))
            body.append("});")
        else:
            body.append(concat(ver["updated"], "(id);"))

    body.append(concat(do["delete"], "(", arglist, ");"))
    w_del = _specific_wait(wait.get("deleted", ""))
    if w_del:
        body.append(concat("const e_del = ", w_del, "(id);"))
        if "add" in match:
            body.append(concat("block(", match["add"], "(id), function () {"))
            body.append(concat("  ", ver["notExists"], "(id);"))
            body.append("});")
        else:
            body.append(concat(ver["notExists"], "(id);"))

    return [ bthread(titlecase(name), body) ]

def build_nondet_variants(entity: str, edsl: Dict[str, Any], per_entity_max: int) -> List[str]:
    args = edsl["args"]; do = edsl["do"]; ver = edsl["verify"]
    arglist = ", ".join([f"x.{a}" for a in args])

    sample_obj = {}
    for a in args:
        if a.lower().endswith("id") or a.lower() == "id":
            sample_obj[a] = "1001"
        else:
            sample_obj[a] = f"{entity}_{a}_N"

    body = []
    body += js_pick_samples("x", [sample_obj])
    body.append("const steps = pick([0,1,2," + str(max(3, per_entity_max)) + "]);")
    body.append(concat(do["add"], "(", arglist, ");"))
    body.append("for (var i=0; i<steps; i++) {")
    body.extend(indent([concat(do["update"], "(", arglist, ");")]))
    body.append("}")
    body.append("if (pick([true,false])) { " + concat(do["delete"], "(", arglist, ");") + " }")
    body.append(concat(ver["exists"], "(", f"x.{args[0]}", ");"))
    body.append(concat(ver["updated"], "(", f"x.{args[0]}", ");"))
    v1 = bthread(f"{entity} nondet variant – burst updates & optional delete", body)

    body = []
    body.append("const ids = pick([[1,2],[10,11],[100,101]]);")
    body.append(f"const a = {{ {args[0]}: ids[0] }};")
    body.append(f"const b = {{ {args[0]}: ids[1] }};")
    body.append(concat(do["add"], "(a.", args[0], ");"))
    body.append(concat("block(", edsl["match"]["add"], "(a.", args[0], ", ANY), function () {});"))
    body.append(concat(do["add"], "(b.", args[0], ");"))
    v2 = bthread(f"{entity} nondet variant – uniqueness during parallel adds", body)

    return [v1, v2]

def build_passive_verifications(entity: str, edsl: Dict[str, Any]) -> List[str]:
    wait = edsl["wait"]; match = edsl["match"]; ver = edsl["verify"]
    arg0 = edsl["args"][0] if edsl["args"] else "id"

    stories = []

    # create
    body = []
    body.append(concat("const e = ", wait["added"], "();"))
    body.append('if (typeof e === "function") { return; }')
    body.append(concat("const k = canonKey(_pk(e, '", arg0, "'));"))
    body.append(concat("block(", match["delete"], "(k), function () {"))
    body.extend(indent([concat(ver["exists"], "(k);")]))
    body.append("});")
    stories.append(bthread(f"{entity} create verification", body))

    # update
    body = []
    body.append(concat("const e = ", wait["updated"], "();"))
    body.append('if (typeof e === "function") { return; }')
    body.append(concat("const k = canonKey(_pk(e, '", arg0, "'));"))
    body.append(concat("block(", match["delete"], "(k), function () {"))
    body.extend(indent([concat(ver["updated"], "(k);")]))
    body.append("});")
    stories.append(bthread(f"{entity} update verification", body))

    # delete
    body = []
    body.append(concat("const e = ", wait["deleted"], "();"))
    body.append('if (typeof e === "function") { return; }')
    body.append(concat("const k = canonKey(_pk(e, '", arg0, "'));"))
    body.append(concat("block(", match["add"], "(k), function () {"))
    body.extend(indent([concat(ver["notExists"], "(k);")]))
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
        body.append('if (typeof x === "function") { return; }')
        body.append(concat("const k = canonKey(_pk(x, '", key, "'));"))
        body.append(concat("block(", edsl["match"]["add"], "(k, ANY), function () {});"))
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
            mfn = edsl["match"]["add"]; label = f"Guard: {en} add – avoid {status}"
        elif op in ("put","patch","update"):
            mfn = edsl["match"]["update"]; label = f"Guard: {en} update – avoid {status}"
        elif op in ("delete","del","remove"):
            mfn = edsl["match"]["delete"]; label = f"Guard: {en} delete – avoid {status}"
        else:
            mfn = edsl["match"].get(op) or edsl["match"]["add"]; label = f"Guard: {en} {op} – avoid {status}"
        body = []
        body.append("const t = tick();")
        body.append(concat("block(", mfn, "(ANY, ANY), function () {});"))
        out.append(bthread(label, body))
    return out

def build_stories(graph: Optional[Dict[str, Any]], dsl: Dict[str, Any], profile: str, per_entity_max: int, mode: str):
    graph_info = parse_graph(graph)
    dsl_entities: Dict[str, dict] = derive_entities_from_dsl(dsl)
    dsl_names = sorted(dsl_entities.keys())

    name_set = set(dsl_names)
    for raw in graph_info.get("entities", []):
        mapped = cleanup_entity_against_dsl(raw, dsl_names)
        if mapped:
            name_set.add(mapped)

    if not name_set:
        name_set.update(titlecase(raw) for raw in graph_info.get("entities", []))

    entities: List[str] = sorted(name_set)
    edsl_map: Dict[str, dict] = {}
    for e in entities:
        edsl_map[e] = build_entity_dsl(e, dsl_entities.get(e, {}))

    kinds = graph_info.get("kinds") or []
    operations = graph_info.get("operations") or {}
    by_entity_ops = {}
    for e in entities:
        ops_from_graph = operations.get(e, [])
        if ops_from_graph:
            by_entity_ops[e] = len(ops_from_graph)
        else:
            d = edsl_map[e].get("do", {})
            approx = [k for k in ("add","update","delete") if d.get(k)]
            by_entity_ops[e] = len(approx)

    stories: List[str] = []
    if entities:
        stories.append(js_header(safe_get(dsl, "sut_name", default="unknown") or "unknown"))

    for e in entities:
        stories.extend(build_active_lifecycle(e, edsl_map[e], per_entity_max))

    if mode == "nondet":
        stories.append("// ===== NONDET VARIANTS =====\n")
        for e in entities:
            stories.extend(build_nondet_variants(e, edsl_map[e], per_entity_max))

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

def write_stories(out_path: Path, stories: List[str]) -> None:
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open('w', encoding='utf-8') as f:
        f.write("\n".join(stories))
        if not stories or not stories[-1].endswith("\n"):
            f.write("\n")
    print(f"[OK] wrote {os.path.normpath(str(out_path))} ({len(stories)} stories)")

def main() -> int:
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut_dir", required=True, help="e.g., 7_suts_llm_provider\\banking")
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

    stories, cov = build_stories(graph, dsl, args.profile, args.per_entity_max, args.mode)

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
