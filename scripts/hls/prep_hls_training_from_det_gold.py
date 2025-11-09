#!/usr/bin/env python3
# -*- coding: utf-8 -*-
import argparse, json, sys
from pathlib import Path

def read_json(p: str):
    p = Path(p)
    if not p.exists(): return None
    try:
        return json.loads(p.read_text(encoding="utf-8"))
    except Exception:
        return None

def ensure_dir(p: str):
    Path(p).parent.mkdir(parents=True, exist_ok=True)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--provider", required=True)
    ap.add_argument("--sut", required=True)
    ap.add_argument("--gold", required=True)
    ap.add_argument("--out", required=True)
    args = ap.parse_args()

    g = read_json(args.gold)
    if not g or not isinstance(g.get("stories"), list):
        print(f'[ERR] invalid det GOLD: "{args.gold}"', file=sys.stderr); sys.exit(2)

    lines = []
    for s in g["stories"]:
        js = s.get("js") or ""
        if not js.strip(): continue
        prompt = {
            "task": "Write a readable BPJS CRUD story chain.",
            "provider": args.provider,
            "sut": args.sut,
            "entity": s.get("name","").split(":")[1] if ":" in s.get("name","") else "",
            "hints": "Use add/verify/update/delete helpers; set parameters.description consistently."
        }
        lines.append(json.dumps({"input": json.dumps(prompt, ensure_ascii=False), "output": js}, ensure_ascii=False))

    ensure_dir(args.out)
    Path(args.out).write_text("\n".join(lines) + ("\n" if lines else ""), encoding="utf-8")
    print(f"[OK] wrote training JSONL -> \"{args.out}\" ({len(lines)} samples)")

if __name__ == "__main__":
    main()
