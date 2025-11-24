import json
from pathlib import Path
p = Path("models/hls/ALL/model_ref.json")
try:
    j = json.loads(p.read_text(encoding="utf-8"))
    print(j.get("fine_tuned_model",""))
except Exception:
    print("")
