# scripts/analysis/mine_guards_from_openapi.py
# Minimal scaffold to infer guard candidates (checks/blocks) from OpenAPI + LLE det.
# Output:
#   artifacts/analysis/<provider>/<sut>/guard_candidates.openapi.valid.json
#   artifacts/analysis/<provider>/<sut>/guard_candidates.det.valid.json
#   artifacts/analysis/<provider>/<sut>/guard_candidates.merged.valid.json

from __future__ import annotations
import argparse, json, re, sys
from pathlib import Path

try:
    import yaml  # PyYAML
except Exception:
    yaml = None

def _read_json_or_yaml(path: Path):
    txt = path.read_text(encoding="utf-8")
    if path.suffix.lower() in (".yaml", ".yml"):
        if yaml is None:
            raise SystemExit("[ERROR] PyYAML not installed. pip install pyyaml")
        return yaml.safe_load(txt)
    return json.loads(txt)

def _ucfirst(s: str) -> str:
    return s[:1].upper() + s[1:] if s else s

def _unique(seq):
    seen = set(); out = []
    for x in seq:
        if x not in seen:
            seen.add(x); out.append(x)
    return out

ID_PAT = re.compile(r"^([a-zA-Z][a-zA-Z0-9_]*)Id$")

def mine_relations_from_openapi(spec: dict):
    rels = set()
    comps = (spec or {}).get("components", {})
    schemas = comps.get("schemas", {}) or {}
    for schema_name, schema in schemas.items():
        props = (schema or {}).get("properties", {}) or {}
        for prop_name in props.keys():
            m = ID_PAT.match(prop_name)
            if not m: continue
            parent = _ucfirst(m.group(1))
            child  = _ucfirst(schema_name)
            if parent and child and parent != child:
                rels.add((child, parent, prop_name))

    paths = (spec or {}).get("paths", {}) or {}
    for pth, item in paths.items():
        for m in re.finditer(r"\{([a-zA-Z][a-zA-Z0-9_]*)\}", pth or ""):
            pname = m.group(1)
            m2 = ID_PAT.match(pname)
            if not m2: continue
            parent = _ucfirst(m2.group(1))
            segs = [s for s in pth.split("/") if s and not s.startswith("{")]
            child_guess = None
            if segs:
                last = segs[-1]
                if last.endswith("s") and len(last) > 1: last = last[:-1]
                child_guess = _ucfirst(re.sub(r"[^a-zA-Z0-9]", "", last))
            if parent and child_guess and parent != child_guess:
                rels.add((child_guess, parent, pname))
    return rels

def _iter_lle_records(det_json):
    if isinstance(det_json, list):
        for x in det_json: yield x; return
    if isinstance(det_json, dict):
        for key in ("events","stories","data","items"):
            arr = det_json.get(key)
            if isinstance(arr, list):
                for x in arr: yield x

def mine_relations_from_lle(det_json):
    rels = set()
    for rec in _iter_lle_records(det_json):
        if not isinstance(rec, dict): continue
        entity = rec.get("entity") or rec.get("table") or rec.get("resource")
        params = rec.get("params") or rec.get("payload") or rec.get("data") or {}
        if not entity or not isinstance(params, dict): continue
        child = _ucfirst(str(entity))
        for k in params.keys():
            m = ID_PAT.match(k)
            if not m: continue
            parent = _ucfirst(m.group(1))
            if parent and parent != child:
                rels.add((child, parent, k))
    return rels

def guards_from_relations(relations):
    checks, blocks, explain = set(["verifyStateConsistent"]), set(), []
    def plural(s: str) -> str: return s + "s" if not s.endswith("s") else s
    for child, parent, via in sorted(relations):
        checks.add(f"verify{parent}Exists")
        checks.add(f"verifyNo{plural(child)}For{parent}")
        blocks.add(f"noDelete{parent}WithExisting{child}")
        blocks.add(f"require{parent}ForAdd{child}")
        explain.append({
            "relation": {"child": child, "parent": parent, "via": via},
            "implies": {
                "checks": [f"verify{parent}Exists", f"verifyNo{plural(child)}For{parent}"],
                "blocks": [f"noDelete{parent}WithExisting{child}", f"require{parent}ForAdd{child}"]
            }
        })
    return sorted(checks), sorted(blocks), explain

def write_json(path: Path, obj):
    path.parent.mkdir(parents=True, exist_ok=True)
    tmp = path.with_suffix(path.suffix + ".tmp")
    tmp.write_text(json.dumps(obj, ensure_ascii=False, indent=2) + "\n", encoding="utf-8")
    tmp.replace(path)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--provider", required=True, choices=["7_suts_llm_provider","real_world_llm_provider"])
    ap.add_argument("--openapi", required=False)
    ap.add_argument("--lle_det", required=False)
    ap.add_argument("--out_dir", required=False)
    args = ap.parse_args()

    sut, provider = args.sut, args.provider
    out_dir = Path(args.out_dir) if args.out_dir else Path("artifacts/analysis")/provider/sut

    openapi_rels, det_rels = set(), set()

    if args.openapi:
        op = Path(args.openapi)
        if op.exists():
            try:
                spec = _read_json_or_yaml(op)
                openapi_rels = mine_relations_from_openapi(spec)
            except Exception as e:
                print(f"[WARN] Failed reading OpenAPI {op}: {e}", file=sys.stderr)
        else:
            print(f"[WARN] OpenAPI not found: {op}", file=sys.stderr)

    if args.lle_det:
        lle = Path(args.lle_det)
        if lle.exists():
            try:
                det_json = json.loads(lle.read_text(encoding="utf-8"))
                det_rels = mine_relations_from_lle(det_json)
            except Exception as e:
                print(f"[WARN] Failed reading LLE det {lle}: {e}", file=sys.stderr)
        else:
            print(f"[WARN] LLE det not found: {lle}", file=sys.stderr)

    op_checks, op_blocks, op_explain = guards_from_relations(openapi_rels)
    det_checks, det_blocks, det_explain = guards_from_relations(det_rels)

    merged_checks = _unique(op_checks + det_checks)
    merged_blocks = _unique(op_blocks + det_blocks)

    write_json(out_dir / "guard_candidates.openapi.valid.json", {
        "sut": sut, "provider": provider, "provenance": "openapi",
        "relations": sorted(list(openapi_rels)),
        "checks": op_checks, "blocks": op_blocks, "explain": op_explain
    })
    write_json(out_dir / "guard_candidates.det.valid.json", {
        "sut": sut, "provider": provider, "provenance": "lle_det",
        "relations": sorted(list(det_rels)),
        "checks": det_checks, "blocks": det_blocks, "explain": det_explain
    })
    write_json(out_dir / "guard_candidates.merged.valid.json", {
        "sut": sut, "provider": provider, "provenance": "merged",
        "checks": merged_checks, "blocks": merged_blocks
    })

    print(f"[OK] wrote guard candidates for {sut} under {out_dir}")

if __name__ == "__main__":
    raise SystemExit(main())