#!/usr/bin/env python3
# -*- coding: utf-8 -*-
"""
train_hls_llm.py
Writes models/<domain>/model_ref.json that downstream nondet generation can consume.

We *optionally* kick off fine-tuning via separate tooling, but this script’s contract is:
- produce a valid model_ref.json that contains a usable "model_id".
- never write placeholders like "ref".
"""

import argparse, json, os, sys, datetime
from pathlib import Path

def parse_args():
    p = argparse.ArgumentParser()
    p.add_argument("--sut", required=True, help="SUT name (e.g., banking)")
    p.add_argument("--hls_det", required=False, help="Path to hls_det_gold.json (optional metadata)")
    p.add_argument("--out_dir", required=True, help="Directory to write model_ref.json")
    p.add_argument("--base_model", default=os.environ.get("HLS_BASE_MODEL", "gpt-4o-mini"),
                   help="Base model to use if no true fine-tune is available")
    p.add_argument("--force", action="store_true", help="Overwrite existing model_ref.json")
    return p.parse_args()

def main():
    args = parse_args()
    out_dir = Path(args.out_dir)
    out_dir.mkdir(parents=True, exist_ok=True)
    out_file = out_dir / "model_ref.json"

    if out_file.exists() and not args.force:
        # Keep existing reference (idempotent)
        print(f"[OK] model ready at {out_file}")
        return 0

    # If you actually run fine-tuning elsewhere, that tool should later update this file’s "model_id".
    # Here we at least write a working base model id so generate_nondet can proceed.
    ref = {
        "sut": args.sut,
        "provider": "openai",
        "trained": False,                 # set True (and add finetune_id) if you later fine-tune
        "model_id": args.base_model,      # guaranteed non-placeholder
        "created": datetime.datetime.utcnow().isoformat() + "Z",
    }
    if args.hls_det:
        ref["source_det"] = str(Path(args.hls_det))

    with out_file.open("w", encoding="utf-8") as f:
        json.dump(ref, f, ensure_ascii=False, indent=2)

    print(f"[OK] model ready at {out_file}")
    return 0

if __name__ == "__main__":
    sys.exit(main())
