# scripts/readable/normalize_gold_for_readables.py
# Robustly extracts HTTP ops from one or more GOLD / GOLD_FIXED (JSON/JSONL) files
# and writes a single {"ops":[...]} JSON for emit_readables_from_gold.py.

import argparse, json, sys, pathlib, re
from typing import Any, Dict, List

URL_PATH_RE = re.compile(r"https?://[^/]+(?P<path>/.*)$", re.I)

def load_any(path: pathlib.Path) -> Any:
    text = path.read_text(encoding="utf-8")
    if path.suffix.lower() == ".jsonl":
        items = [json.loads(line) for line in text.splitlines() if line.strip()]
        # Many of our gold files are JSONL per-example; wrap it so the walker can find them.
        return {"gold": items}
    return json.loads(text)

def to_path(x: Any) -> str:
    """
    Normalize path: accept "/v1/...", or full URL and strip to path.
    """
    if not x:
        return ""
    s = str(x).strip()
    if s.startswith("/"):
        return s
    m = URL_PATH_RE.match(s)
    if m:
        return m.group("path")
    return s  # last resort

def upper(x: Any) -> str:
    return str(x).strip().upper() if x else ""

def make_op(method: Any, path: Any, body: Any = None) -> Dict[str, Any]:
    return {
        "method": upper(method),
        "path": to_path(path),
        "body": body,
    }

def try_extract_from_dict(d: Dict[str, Any]) -> Dict[str, Any] | None:
    """
    Try a bunch of common shapes to find method/path/body in a single dict node.
    Return an op dict or None.
    """
    if not isinstance(d, dict):
        return None

    # Direct fields
    method = d.get("method") or d.get("http_method") or d.get("verb")
    path   = d.get("path")   or d.get("http_path")   or d.get("endpoint") or d.get("urlPath") or d.get("url")

    # Nested containers we often see
    for k in ("op", "request", "operation", "http", "input"):
        if not method:
            method = (d.get(k) or {}).get("method") or (d.get(k) or {}).get("http_method") or (d.get(k) or {}).get("verb")
        if not path:
            path   = (d.get(k) or {}).get("path")   or (d.get(k) or {}).get("http_path")   or (d.get(k) or {}).get("endpoint") \
                   or (d.get(k) or {}).get("urlPath") or (d.get(k) or {}).get("url")

    # Some examples tuck op info under example["gold"]["op"] or example["gold"]["request"]
    if "gold" in d and isinstance(d["gold"], dict):
        g = d["gold"]
        if not method:
            for k in ("op","request","operation","http","input"):
                method = (g.get(k) or {}).get("method") or (g.get(k) or {}).get("http_method") or (g.get(k) or {}).get("verb") or method
        if not path:
            for k in ("op","request","operation","http","input"):
                path = (g.get(k) or {}).get("path") or (g.get(k) or {}).get("http_path") or (g.get(k) or {}).get("endpoint") \
                     or (g.get(k) or {}).get("urlPath") or (g.get(k) or {}).get("url") or path

    if not method or not path:
        return None

    # Body-like hints (optional)
    body = d.get("body") \
        or (d.get("request") or {}).get("body") \
        or (d.get("input") or {}).get("body") \
        or d.get("payload") \
        or (d.get("op") or {}).get("body") \
        or (d.get("operation") or {}).get("body") \
        or (d.get("http") or {}).get("body")

    return make_op(method, path, body)

def walk_collect_ops(obj: Any, out: List[Dict[str, Any]]) -> None:
    # Fast path: already in ops form
    if isinstance(obj, dict) and "ops" in obj and isinstance(obj["ops"], list):
        for item in obj["ops"]:
            if isinstance(item, dict) and item.get("method") and item.get("path"):
                out.append(make_op(item["method"], item["path"], item.get("body")))
        return

    # Common: {"gold":[...]} or {"examples":[...]}
    if isinstance(obj, dict):
        for key in ("gold", "examples", "data", "items"):
            if key in obj and isinstance(obj[key], list):
                for it in obj[key]:
                    if isinstance(it, dict):
                        op = try_extract_from_dict(it)
                        if op: out.append(op)

    # Generic deep walk
    def rec(x: Any):
        if isinstance(x, dict):
            op = try_extract_from_dict(x)
            if op:
                out.append(op)
            for v in x.values():
                rec(v)
        elif isinstance(x, list):
            for v in x:
                rec(v)

    rec(obj)

def main():
    ap = argparse.ArgumentParser(description="Normalize GOLD files into a single ops JSON for readables.")
    ap.add_argument("--out", required=True, help="Output JSON path, e.g., ...\\banking_llm_gold_ops.json")
    ap.add_argument("gold_files", nargs="+", help="Input GOLD/GOLD_FIXED JSON/JSONL files")
    args = ap.parse_args()

    all_ops: List[Dict[str, Any]] = []

    for p in args.gold_files:
        try:
            path = pathlib.Path(p)
            if not path.exists():
                print(f"[WARN] missing gold file: {path}")
                continue
            obj = load_any(path)
            ops: List[Dict[str, Any]] = []
            walk_collect_ops(obj, ops)
            all_ops.extend(ops)
        except Exception as e:
            print(f"[WARN] normalize skipped '{p}' ({e})")

    out_path = pathlib.Path(args.out)
    out_path.parent.mkdir(parents=True, exist_ok=True)
    with out_path.open("w", encoding="utf-8") as f:
        json.dump({"ops": all_ops}, f, indent=2)

    print(f"[OK] normalized {len(all_ops)} ops -> {out_path}")

if __name__ == "__main__":
    main()
