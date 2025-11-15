# scripts/readable/expand_lle_gold_nondet.py
import argparse, json, os, sys, itertools
from typing import Dict, Any, List

def _load_json(path: str):
    with open(path, "r", encoding="utf-8") as f:
        return json.load(f)

def _save_json(path: str, obj):
    os.makedirs(os.path.dirname(path), exist_ok=True)
    with open(path, "w", encoding="utf-8") as f:
        json.dump(obj, f, indent=2, ensure_ascii=False)

def _ops_from_gold(g: Any) -> List[Dict[str, Any]]:
    if isinstance(g, dict):
        if "ops" in g and isinstance(g["ops"], list):
            return g["ops"]
        if "operations" in g and isinstance(g["operations"], list):
            return g["operations"]
    if isinstance(g, list):
        return g
    return []

def _ensure_body_dict(op: Dict[str, Any]) -> Dict[str, Any]:
    body = op.get("body")
    if body is None:
        return {}
    if isinstance(body, dict):
        return body
    return {"_raw": body}

def _variant_name(prefix: str, parts: List[str]) -> str:
    return prefix if not parts else prefix + "_" + "_".join(parts)

def _coerce_catalog(obj: Any) -> Dict[str, Dict[str, Any]]:
    """
    Accept either:
      * dict keyed by "METHOD /path" -> {keys, mandatory/required, optional, base}
      * list of entries: {method, path, required, optional, properties, ...}
      * dict {"entries": [...]} like above
    Normalize to dict keyed by "METHOD path".
    """
    if isinstance(obj, dict):
        if "entries" in obj and isinstance(obj["entries"], list):
            return _coerce_catalog(obj["entries"])
        # assume already keyed
        return obj
    if isinstance(obj, list):
        out: Dict[str, Dict[str, Any]] = {}
        for e in obj:
            if not isinstance(e, dict): 
                continue
            m = (e.get("method") or "").upper()
            p = e.get("path") or ""
            if not m or not p:
                continue
            key = f"{m} {p}"
            out[key] = {
                "keys":      e.get("keys") or [],
                "mandatory": e.get("mandatory") or e.get("required") or [],
                "optional":  e.get("optional") or [],
                "base":      e.get("base") or {},
            }
        return out
    return {}

def expand_ops(det_ops: List[Dict[str, Any]],
               catalog: Dict[str, Dict[str, Any]],
               single_cap: int,
               pair_cap: int,
               include_negative: int) -> List[Dict[str, Any]]:
    out = []
    for op in det_ops:
        method = (op.get("method") or op.get("http_method") or "").upper()
        path   = op.get("path") or op.get("http_path") or op.get("endpoint") or ""
        key = f"{method} {path}"

        entry = catalog.get(key) or {}
        keys       = entry.get("keys") or []
        mandatory  = entry.get("mandatory") or []
        optional   = entry.get("optional") or []
        base       = entry.get("base") or {}

        base_body = _ensure_body_dict(op).copy()
        variants = []

        # Positive variants
        min_body = {k: base.get(k, base_body.get(k)) for k in (keys + mandatory)}
        variants.append({"name": "min", "body": {k: v for k, v in min_body.items() if v is not None}})

        all_body = {k: base.get(k, base_body.get(k)) for k in (keys + mandatory + optional)}
        variants.append({"name": "all", "body": {k: v for k, v in all_body.items() if v is not None}})

        # single optional on
        count = 0
        for o in optional:
            if count >= single_cap: break
            body = {k: base.get(k, base_body.get(k)) for k in (keys + mandatory + [o])}
            variants.append({"name": _variant_name("opt", [o]), "body": {k: v for k, v in body.items() if v is not None}})
            count += 1

        # pairwise optionals
        count = 0
        for a, b in itertools.combinations(optional, 2):
            if count >= pair_cap: break
            body = {k: base.get(k, base_body.get(k)) for k in (keys + mandatory + [a, b])}
            variants.append({"name": _variant_name("opt", [a, b]), "body": {k: v for k, v in body.items() if v is not None}})
            count += 1

        # Negative variants (missing mandatory)
        if include_negative:
            for m in mandatory:
                neg = {k: base.get(k, base_body.get(k)) for k in (keys + mandatory)}
                if m in neg:
                    neg.pop(m, None)
                variants.append({"name": f"neg_missing_{m}", "body": {k: v for k, v in neg.items() if v is not None}, "expect_status": 400})

        new_op = dict(op)
        if variants:
            new_op["variants"] = variants
        out.append(new_op)
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--det", required=True, help="DET LLE GOLD (JSON)")
    ap.add_argument("--catalog", required=True, help="Field Catalog JSON (list or dict)")
    ap.add_argument("--out", required=True, help="NONDET LLE GOLD (JSON)")
    ap.add_argument("--single-cap", type=int, default=8)
    ap.add_argument("--pairwise-cap", type=int, default=8)
    ap.add_argument("--include-negative", type=int, default=1)
    args = ap.parse_args()

    det = _load_json(args.det)
    cat_raw = _load_json(args.catalog)
    cat = _coerce_catalog(cat_raw)

    ops = _ops_from_gold(det)
    if not ops:
        print("[ERR] No ops found in DET GOLD.", file=sys.stderr)
        return 2

    new_ops = expand_ops(ops, cat, args.single_cap, args.pairwise_cap, args.include_negative)

    # Preserve top-level shape if possible
    if isinstance(det, dict):
        if "ops" in det and isinstance(det["ops"], list):
            out_obj = dict(det); out_obj["ops"] = new_ops
        elif "operations" in det and isinstance(det["operations"], list):
            out_obj = dict(det); out_obj["operations"] = new_ops
        else:
            out_obj = {"ops": new_ops}
    else:
        out_obj = new_ops

    _save_json(args.out, out_obj)
    print("[OK] NONDET written to " + args.out.replace("\\", "/"))
    return 0

if __name__ == "__main__":
    sys.exit(main())
