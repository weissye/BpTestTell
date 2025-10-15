# polls a given job_id (or reads from models/hls/ALL/model_ref.json)
import argparse, json, time, sys
from pathlib import Path
from openai import OpenAI

ap = argparse.ArgumentParser()
ap.add_argument("--job_id")
ap.add_argument("--model_ref", default="models/hls/ALL/model_ref.json")
ap.add_argument("--poll", type=int, default=10)
a = ap.parse_args()

if not a.job_id:
    ref = json.loads(Path(a.model_ref).read_text(encoding="utf-8"))
    a.job_id = ref.get("job_id")
    if not a.job_id: sys.exit("[ERROR] No job_id")

c = OpenAI()
while True:
    j = c.fine_tuning.jobs.retrieve(a.job_id)
    print(f"[FT] {j.id} {j.status}")
    if j.status in ("succeeded","failed","cancelled"):
        ref = {"job_id": j.id, "status": j.status, "fine_tuned_model": getattr(j,"fine_tuned_model",None)}
        print(json.dumps(ref, indent=2))
        Path("models/hls/ALL/model_ref.json").write_text(json.dumps({
            "model":"ALL","base": getattr(j,"model",None),
            "training_file_id": getattr(j,"training_file",None),
            "job_id": j.id,
            "fine_tuned_model": getattr(j,"fine_tuned_model",None),
            "mode": j.status
        }, indent=2), encoding="utf-8")
        break
    time.sleep(a.poll)
