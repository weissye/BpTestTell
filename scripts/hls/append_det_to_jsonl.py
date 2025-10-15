import json, argparse
from pathlib import Path

ap = argparse.ArgumentParser()
ap.add_argument("--det", required=True, help="path to hls_det_gold.json")
ap.add_argument("--out", required=True, help="path to JSONL to append to")
args = ap.parse_args()

det = Path(args.det)
out = Path(args.out)
out.parent.mkdir(parents=True, exist_ok=True)

data = json.loads(det.read_text(encoding="utf-8"))
stories = data.get("stories", [])
with out.open("a", encoding="utf-8") as f:
    for s in stories:
        ex = {
            "prompt": {
                "task": "emit_hls_passive_story",
                "entity": s.get("entity"),
                "op": s.get("op"),
                "params_keys": list((s.get("params") or {}).keys()),
                "checks": s.get("checks", []),
            },
            "response": s,
        } 
        f.write(json.dumps(ex, ensure_ascii=False) + "\n")
print(f"[OK] appended {len(stories)} stories from {det}")
