# starts the job and exits; writes model_ref.json (mode: "submitted")
import argparse, json
from pathlib import Path
from openai import OpenAI

ap = argparse.ArgumentParser()
ap.add_argument("--jsonl", required=True)
ap.add_argument("--base_model", required=True)
ap.add_argument("--outdir", default="models/hls/ALL")
a = ap.parse_args()

out = Path(a.outdir); out.mkdir(parents=True, exist_ok=True)
c = OpenAI()

f = c.files.create(file=Path(a.jsonl), purpose="fine-tune")
job = c.fine_tuning.jobs.create(model=a.base_model, training_file=f.id)
ref = {"model":"ALL","base":a.base_model,"training_file_id":f.id,"job_id":job.id,"fine_tuned_model":None,"mode":"submitted"}
(out/"model_ref.json").write_text(json.dumps(ref,indent=2),encoding="utf-8")
print(f"[SUBMITTED] {job.id}")
