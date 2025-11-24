# scripts/analysis/openapi_to_graph.py
import json, sys, os, re
from pathlib import Path
try:
    import yaml
except Exception:
    yaml = None

def load_openapi(p: Path):
    t = p.read_text(encoding="utf-8")
    if p.suffix.lower() in (".yaml", ".yml"):
        if not yaml: raise SystemExit("[ERROR] pyyaml not installed: pip install pyyaml")
        return yaml.safe_load(t)
    return json.loads(t)

def guess_entities(spec):
    comps = spec.get("components", {}).get("schemas", {})
    entities = {}
    for name, sch in comps.items():
        props = (sch.get("properties") or {})
        required = set(sch.get("required") or [])
        fields = []
        for k, v in props.items():
            fields.append({
                "name": k,
                "type": v.get("type", "object"),
                "format": v.get("format"),
                "readOnly": bool(v.get("readOnly")),
                "writeOnly": bool(v.get("writeOnly")),
                "enum": v.get("enum"),
                "description": v.get("description"),
                "unique": bool(v.get("x-unique", False) or v.get("unique", False)),
                "ref": (v.get("$ref") or v.get("allOf", [{}])[0].get("$ref")),
            })
        entities[name] = {"name": name, "fields": fields, "required": list(required), "description": sch.get("description")}
    return entities

def detect_relations(entities):
    # Very simple heuristic: field named <OtherEntity>Id or <other>Id implies FK->OtherEntity
    names = set(entities.keys())
    edges = []  # {"from": "Child", "to": "Parent", "via": "parentId", "card": "many-to-one"}
    for en, e in entities.items():
        for f in e["fields"]:
            fn = f["name"]
            m = re.match(r"^([A-Za-z0-9_]+)Id$", fn)
            if m:
                tgt = m.group(1)
                # Normalize case-insensitive name match
                candidates = [n for n in names if n.lower() == tgt.lower()]
                if candidates:
                    edges.append({"from": en, "to": candidates[0], "via": fn, "card": "many-to-one"})
    return edges

def extract_ops(spec):
    # Map HTTP ops into operation names per entity by path naming
    paths = spec.get("paths", {})
    ops = []
    for pth, item in paths.items():
        for method, op in (item or {}).items():
            if method.upper() not in ("GET","POST","PUT","PATCH","DELETE"): continue
            summ = op.get("summary") or ""
            desc = op.get("description") or ""
            tags = op.get("tags") or []
            # guess entity from path fragment /{entity}s or /entity
            m = re.findall(r"/([A-Za-z0-9_]+)", pth or "")
            entity_guess = m[-1] if m else ""
            ops.append({
                "path": pth, "method": method.upper(),
                "summary": summ, "description": desc, "tags": tags,
                "entity_guess": entity_guess
            })
    return ops

def main():
    if len(sys.argv) < 4:
        print("Usage: python scripts/analysis/openapi_to_graph.py <NAME> <openapi.(yaml|json)> <OUT_JSON>", file=sys.stderr)
        sys.exit(2)
    name = sys.argv[1]
    src = Path(sys.argv[2])
    out = Path(sys.argv[3])
    spec = load_openapi(src)
    entities = guess_entities(spec)
    relations = detect_relations(entities)
    ops = extract_ops(spec)
    out.parent.mkdir(parents=True, exist_ok=True)
    out.write_text(json.dumps({
        "sut": name,
        "entities": entities,
        "relations": relations,
        "ops": ops,
        "info": spec.get("info", {}),
    }, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[GRAPH] {out}")

if __name__ == "__main__":
    main()
