#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse, json, re, sys, subprocess
from pathlib import Path
from typing import Any, Dict, List, Tuple

try:
    import yaml
except Exception:
    yaml = None

def _norm(p: Path) -> str:
    return str(p).replace("/", "\\")

def load_openapi(spec_path: Path) -> Dict[str, Any]:
    if not spec_path.exists():
        raise FileNotFoundError(f"Spec file not found: {spec_path}")
    text = spec_path.read_text(encoding="utf-8", errors="ignore")
    try:
        return json.loads(text)
    except Exception:
        pass
    if yaml is None:
        raise RuntimeError("PyYAML not installed and JSON parse failed. Install pyyaml or provide JSON.")
    return yaml.safe_load(text)

def collect_operations(openapi: Dict[str, Any]) -> List[Dict[str, Any]]:
    ops: List[Dict[str, Any]] = []
    paths = openapi.get("paths") or {}
    for path_str, path_item in paths.items():
        if not isinstance(path_item, dict):
            continue
        for method, op in path_item.items():
            if method.lower() not in ["get","put","post","delete","patch","options","head","trace"]:
                continue
            if not isinstance(op, dict):
                continue
            tags = op.get("tags") or []
            ops.append({
                "path": path_str,
                "method": (method or "").upper(),
                "tags": tags,
                "summary": op.get("summary") or "",
                "operationId": op.get("operationId") or f"{method.upper()} {path_str}",
            })
    return ops

def group_by_tag(ops: List[Dict[str, Any]]) -> Dict[str, List[Dict[str, Any]]]:
    g: Dict[str, List[Dict[str, Any]]] = {}
    for op in ops:
        tags = op.get("tags") or []
        if tags:
            for t in tags:
                g.setdefault(t, []).append(op)
        else:
            g.setdefault("_untagged_", []).append(op)
    return g

def chunk_round_robin(xs: List[Any], n: int) -> List[List[Any]]:
    if n <= 0:
        return [xs]
    buckets = [[] for _ in range(n)]
    for i, x in enumerate(xs):
        buckets[i % n].append(x)
    return [b for b in buckets if b]

def build_shards(openapi: Dict[str, Any], ops: List[Dict[str, Any]], max_shards: int, ops_per_shard: int) -> List[Dict[str, Any]]:
    if ops:
        if ops_per_shard > 0:
            n = max(1, (len(ops) + ops_per_shard - 1) // ops_per_shard)
            n = min(n, max_shards) if max_shards > 0 else n
            chunks = chunk_round_robin(ops, n)
        else:
            by_tag = group_by_tag(ops)
            tag_chunks = [by_tag[k] for k in sorted(by_tag.keys())]
            if max_shards:
                if len(tag_chunks) >= max_shards:
                    chunks = chunk_round_robin(ops, max_shards)
                else:
                    chunks = chunk_round_robin(ops, max_shards)
            else:
                chunks = tag_chunks if tag_chunks else [ops]
        payloads: List[Dict[str, Any]] = []
        for ch in chunks:
            payloads.append({
                "openapi_meta": {
                    "title": (openapi.get("info") or {}).get("title") or "",
                    "version": (openapi.get("info") or {}).get("version") or "",
                },
                "instructions": (
                    "Generate LLM GOLD examples for these API operations. "
                    "Return JSON: {\"gold\": [{\"path\",\"method\",\"operationId\",\"user\",\"ideal\"}...]}"
                ),
                "operations": ch,
            })
        return payloads
    # fallback: whole spec one shard
    return [{
        "openapi_meta": {
            "title": (openapi.get("info") or {}).get("title") or "",
            "version": (openapi.get("info") or {}).get("version") or "",
        },
        "instructions": "Generate LLM GOLD examples across this API spec. Return JSON: {\"gold\": [...]}",
        "spec": openapi
    }]

def ensure_shards(spec: Path, shards_dir: Path, n_shards: int, ops_per_shard: int, rebuild: bool) -> List[Path]:
    shards_dir.mkdir(parents=True, exist_ok=True)
    existing = sorted(shards_dir.glob("shard_*.json"))
    if existing and not rebuild:
        return existing

    for f in existing:
        try: f.unlink()
        except Exception: pass

    openapi = load_openapi(spec)
    ops = collect_operations(openapi)
    payloads = build_shards(openapi, ops, n_shards if n_shards > 0 else 0, ops_per_shard if ops_per_shard > 0 else 0)

    out: List[Path] = []
    for i, payload in enumerate(payloads, start=1):
        p = shards_dir / f"shard_{i:02d}.json"
        p.write_text(json.dumps(payload, ensure_ascii=False, indent=2), encoding="utf-8")
        out.append(p)
    return out

def run_cmd(cmd: List[str]) -> Tuple[int, str]:
    proc = subprocess.Popen(cmd, stdout=subprocess.PIPE, stderr=subprocess.STDOUT, text=True)
    out_lines = []
    for line in proc.stdout:
        sys.stdout.write(line)
        out_lines.append(line)
    proc.wait()
    return proc.returncode, "".join(out_lines)

def _read_gold_anyshape(p: Path) -> List[Dict[str, Any]]:
    """
    Accept several shapes for robustness:
      - {"gold":[...]}
      - {"examples":[...]}
      - [...list...]
      - JSONL text (list of objects)
    """
    txt = p.read_text(encoding="utf-8", errors="ignore")
    # Try JSON first
    try:
        obj = json.loads(txt)
    except Exception:
        # Try JSONL
        items = []
        for line in txt.splitlines():
            s = line.strip()
            if not s:
                continue
            try:
                o = json.loads(s)
                if isinstance(o, dict):
                    items.append(o)
            except Exception:
                pass
        return items

    if isinstance(obj, dict):
        if isinstance(obj.get("gold"), list):
            return obj["gold"]
        if isinstance(obj.get("examples"), list):
            return obj["examples"]
        # A single example dict?
        if {"path","method","user","ideal"} <= set(obj.keys()):
            return [obj]
        return []
    if isinstance(obj, list):
        return obj
    return []

def merge_gold_files(out_dir: Path, name: str) -> Path:
    shard_gold = sorted(out_dir.glob(f"{name}_llm_gold_shard_*.json"))
    if not shard_gold:
        print(f"[WARN] No per-shard gold files found in '{_norm(out_dir)}'. Nothing to merge.")
        return Path()

    merged: List[Dict[str, Any]] = []
    for f in shard_gold:
        try:
            items = _read_gold_anyshape(f)
        except Exception:
            print(f"[WARN] Could not parse JSON: {f.name}; skipping.")
            continue
        if not items:
            print(f"[WARN] {f.name} does not look like a gold file; skipping.")
            continue
        # Optionally normalize keys
        for ex in items:
            if not isinstance(ex, dict): 
                continue
            ex.setdefault("operationId", "")
            ex.setdefault("summary", "")
            merged.append(ex)

    if not merged:
        print("[WARN] Merge found no 'gold' examples; not writing output.")
        return Path()

    out = out_dir / f"{name}_llm_gold.json"
    out.write_text(json.dumps({"gold": merged}, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[OK  ] wrote merged gold -> {out}")
    return out

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--spec", required=True)
    ap.add_argument("--name", required=True)
    ap.add_argument("--out-dir", required=True)
    ap.add_argument("--n-shards", type=int, default=0, help="0=auto")
    ap.add_argument("--ops-per-shard", type=int, default=0, help="target ops per shard (round-robin)")
    ap.add_argument("--rebuild-shards", action="store_true")
    ap.add_argument("--provider", default="openai")
    ap.add_argument("--model", required=True, help="fine-tuned model id (reserved)")
    ap.add_argument("--gen-model", default="gpt-4o-mini")
    ap.add_argument("--temperature", type=float, default=0.2)
    ap.add_argument("--max-spec-chars", type=int, default=18000)
    ap.add_argument("--max-user-chars", type=int, default=4000)
    ap.add_argument("--json-mode", action="store_true")
    ap.add_argument("--force", action="store_true")
    args = ap.parse_args()

    spec = Path(args.spec)
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)

    # 1) shards
    shards_dir = out_dir / f"{args.name}_shards"
    shards = ensure_shards(spec, shards_dir, args.n_shards, args.ops_per_shard, args.rebuild_shards)
    print(json.dumps({"shards": [_norm(s) for s in shards]}, indent=2))

    # 2) per-shard generation
    gen_script = Path(__file__).parent / "generate_gold_llm.py"
    for shard in shards:
        m = re.search(r"shard_(\d+)\.json$", shard.name)
        idx = m.group(1) if m else "XX"
        out_json = out_dir / f"{args.name}_llm_gold_shard_{idx}.json"
        if out_json.exists() and not args.force:
            print(f"[SKIP] {out_json.name} (exists; use --force to regenerate)")
            continue
        cmd = [
            sys.executable, str(gen_script),
            str(shard), str(out_json),
            "--model", args.gen_model,
            "--temperature", str(args.temperature),
            "--max-spec-chars", str(args.max_spec_chars),
            "--max-user-chars", str(args.max_user_chars),
        ]
        if args.json_mode:
            cmd.append("--json-mode")
        # provider is accepted by the generator for CLI compat (unused)
        cmd += ["--provider", args.provider]

        print(f"[RUN ] ({args.name}) {sys.executable} {gen_script} {shard} {out_json} "
              f"--temperature {args.temperature} --provider {args.provider} --model {args.gen_model} "
              f"--max-spec-chars {args.max_spec_chars} --max-user-chars {args.max_user_chars}" + (" --json-mode" if args.json_mode else ""))
        rc, _ = run_cmd(cmd)
        if rc != 0:
            print(f"[ERR ] generation failed for {shard.name} (rc={rc}); continuing.")

    # 3) merge
    print("[RUN ] (merge) concatenating per-shard gold -> single file")
    merged = merge_gold_files(out_dir, args.name)
    if not merged:
        print("[WARN] merge produced no output")

if __name__ == "__main__":
    main()
