import json, sys
from pathlib import Path

p = Path(sys.argv[1] if len(sys.argv)>1 else "models/hls/ALL/train.jsonl")
n = 0
with p.open(encoding="utf-8") as f:
    for i, line in enumerate(f, 1):
        try:
            obj = json.loads(line)
            assert "messages" in obj and isinstance(obj["messages"], list)
            roles = [m.get("role") for m in obj["messages"]]
            assert "user" in roles and "assistant" in roles
            # content must be string
            for m in obj["messages"]:
                assert isinstance(m.get("content",""), str)
        except Exception as e:
            print(f"[FAIL] line {i}: {e}")
            sys.exit(2)
        n += 1
print(f"[OK] {p} valid ({n} lines)")
