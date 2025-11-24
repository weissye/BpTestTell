# scripts/hls/append_varied_to_jsonl.py
# Add "vary this story" examples to train.jsonl so the FT gets better at variation.
import json, sys
from pathlib import Path

def append_pair(out_path: Path, det_story: dict):
    sys_msg = {"role":"system","content":"Return ONLY a JSON object with keys entity, op, params, blocks, checks. Make it distinct from input: concrete params + modified checks/blocks."}
    user = {"role":"user","content":json.dumps({"task":"vary","story":det_story}, ensure_ascii=False)}
    # Create a light synthetic target (deterministic nudge) as the "assistant"
    s = dict(det_story)
    s["params"] = s.get("params") or {}
    for k,v in list(s["params"].items()):
        if isinstance(v, str) and v.startswith("<") and v.endswith(">"):
            s["params"][k] = k.lower()+"-train-12345"
    checks = set(s.get("checks") or [])
    checks.add("verifyStateConsistent")
    s["checks"] = sorted(checks)
    asst = {"role":"assistant","content":json.dumps(s, ensure_ascii=False)}
    with out_path.open("a", encoding="utf-8") as f:
        f.write(json.dumps({"messages":[sys_msg,user,asst]}, ensure_ascii=False)+"\n")

def main():
    if len(sys.argv) < 3:
        print("Usage: python scripts/hls/append_varied_to_jsonl.py <det_gold.json> <OUT_JSONL>", file=sys.stderr)
        sys.exit(2)
    det = json.loads(Path(sys.argv[1]).read_text(encoding="utf-8"))
    out = Path(sys.argv[2])
    stories = det.get("stories") if isinstance(det, dict) else det
    for st in stories or []:
        if isinstance(st, dict):
            append_pair(out, st)
    print(f"[OK] appended vary-pairs from {sys.argv[1]} into {out}")

if __name__ == "__main__":
    main()
