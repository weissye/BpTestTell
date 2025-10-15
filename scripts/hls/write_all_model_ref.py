import json, argparse
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument("--jsonl", required=True)
ap.add_argument("--out", required=True)
args = ap.parse_args()

outp = Path(args.out)
outp.parent.mkdir(parents=True, exist_ok=True)
ref = {
    "model": "ALL",
    "dataset": str(Path(args.jsonl)),
    "notes": "stub model; replace with a trained model if desired"
}
outp.write_text(json.dumps(ref, indent=2), encoding="utf-8")
print(f"[OK] wrote {outp}")
