from __future__ import annotations  # Python 3.9-safe union annotations

import argparse, json, pathlib, re
from typing import Any, Dict, List

URL_PATH_RE = re.compile(r"https?://[^/]+(?P<path>/.*)$", re.I)

def load_any(path: pathlib.Path) -> Any:
    # Read with BOM-tolerant codec and be lenient on empties
    text = path.read_text(encoding="utf-8-sig")
    s = text.strip()
    if not s:
        return {}  # treat empty as no-ops
    if path.suffix.lower() == ".jsonl":
        items = []
        for line in text.splitlines():
            line = line.strip()
            if not line:
                continue
            try:
                items.append(json.loads(line))
            except json.JSONDecodeError:
                # skip bad lines instead of crashing
                continue
        return {"gold": items}
    try:
        return json.loads(s)
    except json.JSONDecodeError:
        # be tolerant: if it's not valid JSON, treat as no-ops
        return {}

def to_path(x: Any) -> str:
    if not x: return ""
    s = str(x).strip()
    if s.startswith("/"): return s
    m = URL_PATH_RE.match(s)
    return m.group("path") if m else s

def upper(x: Any) -> str:
    return str(x).strip().upper() if x else ""

def make_op(method: Any, path: Any, body: Any = None) -> Dict[str, Any]:
    return {"method": upper(method), "path": to_path(path), "body": body}

def try_extract_from_dict(d: Dict[str, Any]) -> Dict[str, Any] | None:
    if not isinstance(d, dict): return None
    method = d.get("method") or d.get("http_method") or d.get("verb")
    path   = d.get("path")   or d.get("http_path")   or d.get("endpoint") or d.get("urlPath") or d.get("url")
    for k in ("op", "request", "operation", "http", "input"):
        if not method:
            method = (d.get(k) or {}).get("method") or (d.get(k) or {}).get("http_method") or (d.get(k) or {}).get("verb")
        if not path:
            path   = (d.get(k) or {}).get("path")   or (d.get(k) or {}).get("http_path")   or (d.get(k) or {}).get("endpoint") \
                   or (d.get(k) or {}).get("urlPath") or (d.get(k) or {}).get("url")
    if "gold" in d and isinstance(d["gold"], dict):
        g = d["gold"]
        if not method:
            for k in ("op","request","operation","http","input"):
                method = (g.get(k) or {}).get("method") or (g.get(k) or {}).get("http_method") or (g.get(k) or {}).get("verb") or method
        if not path:
            for k in ("op","request","operation","http","input"):
                path = (g.get(k) or {}).get("path") or (g.get(k) or {}).get("http_path") or (g.get(k) or {}).get("endpoint") \
                     or (g.get(k) or {}).get("urlPath") or (g.get(k) or {}).get("url") or path
    if not method or not path: return None
    body = d.get("body") or (d.get("request") or {}).get("body") or (d.get("input") or {}).get("body") \
        or d.get("payload") or (d.get("op") or {}).get("body") or (d.get("operation") or {}).get("body") or (d.get("http") or {}).get("body")
    return make_op(method, path, body)

def walk_collect_ops(obj: Any, out: List[Dict[str, Any]]) -> None:
    if isinstance(obj, dict) and isinstance(obj.get("ops"), list):
        for item in obj["ops"]:
            if isinstance(item, dict) and item.get("method") and item.get("path"):
                out.append(make_op(item["method"], item["path"], item.get("body")))
        return
    if isinstance(obj, dict):
        for key in ("gold", "examples", "data", "items"):
            if isinstance(obj.get(key), list):
                for it in obj[key]:
                    if isinstance(it, dict):
                        op = try_extract_from_dict(it)
                        if op: out.append(op)
    def rec(x: Any):
        if isinstance(x, dict):
            op = try_extract_from_dict(x)
            if op: out.append(op)
            for v in x.values(): rec(v)
        elif isinstance(x, list):
            for v in x: rec(v)
    rec(obj)

def main():
    print("=== normalize_gold_for_readables.py ===")
    ap = argparse.ArgumentParser(description="Normalize GOLD files into a single ops JSON for readables.")
    ap.add_argument("--out", required=True, help="Output JSON path")
    ap.add_argument("gold_files", nargs="+", help="Input GOLD/GOLD_FIXED JSON/JSONL files")
    args = ap.parse_args()

    all_ops: List[Dict[str, Any]] = []
    for p in args.gold_files:
        path = pathlib.Path(p)
        if not path.exists():
            print(f"[WARN] missing gold file: {path}")
            continue
        obj = load_any(path)
        ops: List[Dict[str, Any]] = []
        walk_collect_ops(obj, ops)
        all_ops.extend(ops)

    out_path = pathlib.Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    out_path.write_text(json.dumps({"ops": all_ops}, indent=2), encoding="utf-8")
    print(f"[OK] normalized {len(all_ops)} ops -> {out_path}")

if __name__ == "__main__":
    main()
