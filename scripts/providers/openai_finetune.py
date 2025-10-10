#!/usr/bin/env python
"""
OpenAI fine-tune helper (stub).
After you start a real fine-tune with OpenAI, put the resulting model id into models\...\model_id.txt.
"""
import argparse, json, time
from pathlib import Path

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--base-model", required=True)
    ap.add_argument("--train", required=True)
    ap.add_argument("--out-dir", required=True)
    args = ap.parse_args()

    out = Path(args.out_dir); out.mkdir(parents=True, exist_ok=True)
    (out/"config.json").write_text(json.dumps({
        "provider":"openai","base_model":args.base_model,"train_file":args.train,"created_at":int(time.time())
    }, indent=2), encoding="utf-8")
    (out/"model_id.txt").write_text(args.base_model, encoding="utf-8")
    print(f"[OK] wrote {out/'config.json'} and {out/'model_id.txt'} (placeholder model id = base-model)")
    print("Replace model_id.txt with your actual fine-tuned model id when training completes.")

if __name__ == "__main__":
    main()
