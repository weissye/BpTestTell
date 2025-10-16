# scripts/analysis/derive_guard_candidates.py
import json, sys
from pathlib import Path

def loadj(p): return json.loads(Path(p).read_text(encoding="utf-8"))

def mk_guard(entity, op, params, blocks, checks, why):
    return {"entity": entity, "op": op, "params": params, "blocks": blocks, "checks": checks, "why": why, "source": "deterministic"}

def main():
    if len(sys.argv) < 5:
        print("Usage: python scripts/analysis/derive_guard_candidates.py <NAME> <domain_graph.json> <lle_det_gold.json> <OUT_JSON>", file=sys.stderr)
        sys.exit(2)
    name, graph_p, lle_p, out_p = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3]), Path(sys.argv[4])
    G = loadj(graph_p)
    L = loadj(lle_p)
    stories = L.get("stories") or []

    entities = G["entities"]
    rels = G["relations"]

    guards = []

    # FK delete guard: block deleting parent while children exist
    for r in rels:
        child, parent, via = r["from"], r["to"], r["via"]
        blocks = [f"delete{parent}({via.replace('Id','')+'Id'})"]
        checks = [f"verifyNo{child}sFor{parent}({via.replace('Id','')+'Id'})"]
        guards.append(
            mk_guard(parent, "delete", {"id": "<id>"}, blocks, checks,
                     why=f"FK: {child}.{via} -> {parent}.id")
        )

    # Requires parent exists on child creation (if a via field exists)
    for r in rels:
        child, parent, via = r["from"], r["to"], r["via"]
        blocks = []
        checks = [f"verify{parent}Exists({via})"]
        guards.append(
            mk_guard(child, "add", {via: "<id>"}, blocks, checks,
                     why=f"requires existing {parent} before add {child}")
        )

    # Uniqueness fields => duplicate add guard
    for en, e in entities.items():
        uniqs = [f["name"] for f in e["fields"] if f.get("unique") or f["name"] in ("email","username","vin","workOrderNumber")]
        for u in uniqs:
            guards.append(
                mk_guard(en, "add", {u: f"<{u}>"}, [f"add{en}({u})"], [f"verify{en}{u.capitalize()}Unique({u})"],
                         why=f"unique field {en}.{u}")
            )

    # Immutability/readOnly fields => block updates changing them
    for en, e in entities.items():
        imm = [f["name"] for f in e["fields"] if f.get("readOnly")]
        for u in imm:
            guards.append(
                mk_guard(en, "update", {"id": "<id>", u: "<new>"}, [f"update{en}({u})"], [f"verify{en}{u.capitalize()}Unchanged(id)"],
                         why=f"readOnly {en}.{u}")
            )

    out_p = Path(out_p)
    out_p.parent.mkdir(parents=True, exist_ok=True)
    out_p.write_text(json.dumps({"sut": name, "guards": guards}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[GUARDS.det] {out_p}  ({len(guards)} candidates)")

if __name__ == "__main__":
    main()
