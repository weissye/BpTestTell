#!/usr/bin/env python
# -*- coding: utf-8 -*-
"""
Minimal "training":
- Reads HLS-DET and writes a model directory with a reference file.
- You can replace this with your real training later; the interface stays the same.
"""
import argparse, json
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--hls_det", required=True)
    ap.add_argument("--outdir", required=True)
    args = ap.parse_args()

    det = json.loads(Path(args.hls_det).read_text(encoding="utf-8"))
    stories = det.get("stories", [])
    Path(args.outdir).mkdir(parents=True, exist_ok=True)
    model = {
        "sut": args.sut,
        "trained_on": args.hls_det,
        "num_stories": len(stories),
        "version": 1
    }
    Path(args.outdir, "model_ref.json").write_text(json.dumps(model, indent=2), encoding="utf-8")
    print(f"[OK] model ready at {Path(args.outdir, 'model_ref.json')}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
