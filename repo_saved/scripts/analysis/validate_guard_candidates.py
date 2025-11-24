# scripts/analysis/validate_guard_candidates.py
import json, sys
from pathlib import Path

def loadj(p): return json.loads(Path(p).read_text(encoding="utf-8"))

def collect_atoms(graph, lle):
    entities = set(graph["entities"].keys())
    # accepted ops from LLE stories
    ops = set()
    fields = {e: set(f["name"] for f in v["fields"]) for e, v in graph["entities"].items()}
    for s in (lle.get("stories") or []):
        e, op = s.get("entity"), s.get("op")
        if e and op: ops.add((e,op))
    return entities, ops, fields

def valid_story(st, entities, ops, fields):
    e, op, params = st.get("entity"), st.get("op"), st.get("params") or {}
    if e not in entities: return False
    if (e, op) not in ops: return False
    # params keys must exist in entity fields or be 'id'/'*_id'
    for k in params.keys():
        if k not in fields.get(e, set()) and k not in ("id", f"{e[0].lower()+e[1:]}Id"):
            return False
    return True

def main():
    if len(sys.argv) < 6:
        print("Usage: python scripts/analysis/validate_guard_candidates.py <NAME> <domain_graph.json> <lle_det_gold.json> <candidates.json> <OUT_JSON>", file=sys.stderr)
        sys.exit(2)
    name, graph_p, lle_p, cand_p, out_p = sys.argv[1], Path(sys.argv[2]), Path(sys.argv[3]), Path(sys.argv[4]), Path(sys.argv[5])
    G, L, C = loadj(graph_p), loadj(lle_p), loadj(cand_p)
    ents, ops, fields = collect_atoms(G, L)
    valid = []
    for st in (C.get("guards") or []):
        if valid_story(st, ents, ops, fields):
            valid.append(st)
    out_p.parent.mkdir(parents=True, exist_ok=True)
    out_p.write_text(json.dumps({"sut": name, "guards": valid}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[GUARDS.valid] {out_p}  ({len(valid)} kept / {len(C.get('guards',[]))} total)")

if __name__ == "__main__":
    main()
