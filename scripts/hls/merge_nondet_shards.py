#!/usr/bin/env python
import argparse, json, glob, os, sys, re

ap = argparse.ArgumentParser()
ap.add_argument("--sut", required=True)
ap.add_argument("--provider", required=True)
ap.add_argument("--out", required=True)
args = ap.parse_args()

outdir = os.path.dirname(args.out)
pattern = os.path.join(outdir, "hls_nondet_gold.json.shard*.json")
files = sorted(glob.glob(pattern), key=lambda p: int(re.search(r"shard(\d+)", p).group(1)))
if not files:
    print(f"[ERR ] No shards found: {pattern}", file=sys.stderr)
    sys.exit(2)

stories = []
meta = {}
for p in files:
    with open(p, "r", encoding="utf-8") as fh:
        data = json.load(fh)
    if not meta and isinstance(data, dict):
        meta = {k: v for k, v in data.items() if k != "stories"}
    stories.extend(data.get("stories", []))

merged = dict(meta)
merged["stories"] = stories

os.makedirs(outdir, exist_ok=True)
with open(args.out, "w", encoding="utf-8") as fh:
    json.dump(merged, fh, ensure_ascii=False, indent=2)

print(f"[OK ] merged -> {args.out} (stories={len(stories)})")
