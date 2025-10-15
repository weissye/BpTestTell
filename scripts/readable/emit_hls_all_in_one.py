#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Readable emitter:
- If --active given, merges provided active lifecycles.
- Always emits PASSIVE assertions/guards from gold stories.
"""
import argparse, json
from pathlib import Path

def js_escape(s:str)->str:
    return s.replace("\\","\\\\").replace("`","\\`")

def emit_passive(stories):
    lines = []
    for s in stories:
        ent = s.get("entity","Entity")
        op  = s.get("op","add")
        bname = f"HLS PASSIVE: {op} {ent}"
        lines.append(f"bthread(`{js_escape(bname)}`, function () {{")
        lines.append(f"  const ev = waitFor({{op: '{op}', entity: '{ent}'}});")
        for blk in s.get("blocks",[]):
            lines.append(f"  block({{op: '{blk}'}});")
        for chk in s.get("checks",[]):
            lines.append(f"  {chk}(ev.id);")
        lines.append("});\n")
    return "\n".join(lines)

def emit_active(samples):
    # Expect format: [{name, steps:[{op,entity,params}]}, ...]
    lines = []
    for i, flow in enumerate(samples, 1):
        name = flow.get("name", f"Active sample #{i}")
        lines.append(f"bthread(`HLS ACTIVE: {js_escape(name)}`, function () {{")
        for step in flow.get("steps", []):
            op = step.get("op"); ent = step.get("entity")
            params = step.get("params", {})
            lines.append(f"  request({{op:'{op}', entity:'{ent}', params:{json.dumps(params)}}});")
        lines.append("});\n")
    return "\n".join(lines)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--gold", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--active")
    args = ap.parse_args()

    gold = json.loads(Path(args.gold).read_text(encoding="utf-8"))
    stories = gold.get("stories", [])
    sut = gold.get("sut","unknown")

    header = f"""// Auto-generated HLS readables (ACTIVE+PASSIVE)
// SUT: {sut}
// Source: {args.gold}
"""

    passive = emit_passive(stories)
    active = ""
    if args.active and Path(args.active).exists():
        try:
            samples = json.loads(Path(args.active).read_text(encoding="utf-8"))
            active = emit_active(samples)
        except Exception:
            active = "// [WARN] Could not parse active samples; emitting PASSIVE only.\n"

    content = header + "\n" + active + "\n" + passive + "\n"
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)
    Path(args.out).write_text(content, encoding="utf-8")
    print(f"[OK] wrote JS {args.out}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
