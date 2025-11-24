#!/usr/bin/env python
# -*- coding: utf-8 -*-

import argparse
from pathlib import Path
import sys

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base", required=True, help="base model name used for fine-tune, e.g. gpt-3.5-turbo-0125")
    ap.add_argument("--suffix", required=True, help="training suffix, e.g. v27-7suts+real")
    ap.add_argument("--receipts-dir", default="artifacts/receipts", help="directory containing receipt txt files")
    ap.add_argument("--receipt", default="", help="explicit path to a single receipt file (overrides --receipts-dir)")
    args = ap.parse_args()

    if args.receipt:
        receipt_path = Path(args.receipt)
    else:
        receipt_path = Path(args.receipts_dir) / f"{args.base}__{args.suffix}.txt"

    if not receipt_path.exists():
        print(f"[WARN] Receipt not found: {receipt_path}")
        sys.exit(2)

    text = receipt_path.read_text(encoding="utf-8", errors="ignore")
    model_id = ""
    for line in text.splitlines():
        s = line.strip()
        if s.startswith("ft:"):
            model_id = s
            break
        # common formats:
        # MODEL_ID=ft:... or "model": "ft:..."
        if "ft:" in s:
            start = s.find("ft:")
            # consume until whitespace or quote
            end = start
            while end < len(s) and s[end] not in ['"', "'", ' ', '\t', ',', ';', ')', ']', '}']:
                end += 1
            model_id = s[start:end]
            break

    if not model_id:
        print(f"[WARN] Could not find fine-tune model in receipt: {receipt_path}")
        sys.exit(3)

    print(f"[INFO] Resolved model id from {receipt_path.name}")
    print(model_id)

if __name__ == "__main__":
    main()
