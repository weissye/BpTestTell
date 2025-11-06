#!/usr/bin/env python3
import argparse, glob, json, os, sys

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--out", required=True, help="output merged JSON path")
    ap.add_argument("--glob", required=True, help=r'glob for shard files, e.g. path\file.json.shard*.json')
    args = ap.parse_args()

    shard_paths = sorted(glob.glob(args.glob))
    if not shard_paths:
        print(f"[ERR] no shard files match: {args.glob}", file=sys.stderr)
        return 1

    stories = []
    total_files = 0
    for p in shard_paths:
        try:
            with open(p, "r", encoding="utf-8") as fh:
                data = json.load(fh)
            total_files += 1
            if isinstance(data, list):
                stories.extend(data)
            elif isinstance(data, dict) and isinstance(data.get("stories"), list):
                stories.extend(data["stories"])
            else:
                print(f"[WARN] unexpected JSON shape in {p}; skipping", file=sys.stderr)
        except Exception as e:
            print(f"[WARN] failed to read {p}: {e}", file=sys.stderr)

    os.makedirs(os.path.dirname(args.out), exist_ok=True)
    with open(args.out, "w", encoding="utf-8") as oh:
        json.dump({"stories": stories}, oh, ensure_ascii=False, indent=2)

    print(f"[OK] merged {total_files} shards -> {len(stories)} stories -> {args.out}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
