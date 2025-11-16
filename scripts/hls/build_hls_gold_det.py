#!/usr/bin/env python3
import argparse, json, os, sys, datetime, re

def _flatten_entities(ent):
    """Accepts strings / lists / dicts and returns a flat list of sanitized entity names."""
    names = []
    if ent is None:
        return ["record"]
    if isinstance(ent, str):
        names = [ent]
    elif isinstance(ent, dict):
        # try keys as entity hints
        names = list(ent.keys())
        # also check common fields
        for k in ("name", "entity", "type"):
            v = ent.get(k)
            if isinstance(v, str):
                names.append(v)
    elif isinstance(ent, list):
        for item in ent:
            if isinstance(item, str):
                names.append(item)
            elif isinstance(item, dict):
                # prefer explicit fields
                for k in ("name", "entity", "type"):
                    v = item.get(k)
                    if isinstance(v, str):
                        names.append(v)
                        break
                else:
                    # fall back to any string value
                    for v in item.values():
                        if isinstance(v, str):
                            names.append(v)
                            break

    def sanitize(s):
        s = s.strip()
        s = re.sub(r"\s+", "_", s)
        s = re.sub(r"[^A-Za-z0-9_]", "_", s)
        s = re.sub(r"_+", "_", s).strip("_")
        return s or "record"

    names = [sanitize(n) for n in names if isinstance(n, str) and n.strip()]
    return sorted(set(names or ["record"]))

def extract_entities_from_dsl(dsl: dict):
    """Try multiple common keys to discover entity names in the DSL map."""
    for key in ("entities", "entity_names", "types", "objects"):
        flat = _flatten_entities(dsl.get(key))
        if flat:
            return flat
    if isinstance(dsl, dict) and dsl:
        return _flatten_entities(list(dsl.keys()))
    return ["record"]

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--provider", required=True)
    ap.add_argument("--dsl_map", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    # read DSL map
    try:
        with open(args.dsl_map, "r", encoding="utf-8") as f:
            dsl = json.load(f)
    except Exception as e:
        print(f"[ERR ] failed to read DSL map: {args.dsl_map}  ({e})", file=sys.stderr)
        sys.exit(2)

    entities = extract_entities_from_dsl(dsl)

    # minimal, deterministic CRUD story skeleton per entity
    stories = [{"name": f"CRUD_{e}", "entity": e, "steps": []} for e in entities]

    gold = {
        "sut": args.sut,
        "provider": args.provider,
        "generated_at": datetime.datetime.utcnow().isoformat() + "Z",
        "stories": stories
    }

    out_path = os.path.abspath(args.out)
    os.makedirs(os.path.dirname(out_path), exist_ok=True)
    try:
        with open(out_path, "w", encoding="utf-8") as f:
            json.dump(gold, f, indent=2, ensure_ascii=False)
    except Exception as e:
        print(f"[ERR ] failed to write: {out_path}  ({e})", file=sys.stderr)
        sys.exit(3)

    # Avoid backslashes inside f-string expressions
    out_norm = out_path.replace("\\", "/")
    print("[OK] wrote {}  (stories={})".format(out_norm, len(stories)))
    sys.exit(0)

if __name__ == "__main__":
    main()
