import json, argparse
from pathlib import Path

SYS = ("You generate High-Level Stories (HLS) as a single JSON object with keys: "
       "entity, op, params, blocks, checks. Output only JSON (no prose).")

ap = argparse.ArgumentParser()
ap.add_argument("--det", required=True, help="path to hls_det_gold.json")
ap.add_argument("--out", required=True, help="path to JSONL to append to")
args = ap.parse_args()

det = Path(args.det)
out = Path(args.out)
out.parent.mkdir(parents=True, exist_ok=True)

data = json.loads(det.read_text(encoding="utf-8"))
stories = data.get("stories", [])

with out.open("a", encoding="utf-8", newline="\n") as f:
    for s in stories:
        # build a short “prompt” summarizing intent
        entity = s.get("entity")
        op     = s.get("op")
        params = list((s.get("params") or {}).keys())
        checks = s.get("checks", [])
        user_prompt = (
            f"Emit one HLS story for entity={entity}, op={op}. "
            f"params_keys={params}. checks={checks}. "
            "Keep reverse-op consistent (add↔delete, update↔update)."
        )

        # assistant target is exactly the JSON story; store as a string
        assistant_json = json.dumps(s, ensure_ascii=False)

        ex = {
            "messages": [
                {"role": "system", "content": SYS},
                {"role": "user",   "content": user_prompt},
                {"role": "assistant", "content": assistant_json}
            ]
        }
        f.write(json.dumps(ex, ensure_ascii=False) + "\n")
print(f"[OK] appended {len(stories)} stories from {det}")
