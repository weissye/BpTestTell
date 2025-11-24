# -*- coding: utf-8 -*-
"""
Fine-tune an OpenAI model on models/hls/ALL/train.jsonl and write model_ref.json
Usage:
  python scripts/hls/openai_ft_train_all.py --jsonl models/hls/ALL/train.jsonl --base_model gpt-4o-mini-2024-07-18
ENV:
  OPENAI_API_KEY must be set.
"""
import argparse, time, json, sys
from pathlib import Path
from openai import OpenAI
from openai import BadRequestError, APIConnectionError, RateLimitError, AuthenticationError

def wait(job_id: str, client: OpenAI, poll: int = 5):
    """Poll the FT job until a terminal status."""
    while True:
        job = client.fine_tuning.jobs.retrieve(job_id)
        status = getattr(job, "status", None) or "unknown"
        print(f"[FT] job={job.id} status={status}", flush=True)
        if status in ("succeeded", "failed", "cancelled"):
            return job
        time.sleep(poll)

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--jsonl", required=True)
    ap.add_argument("--base_model", required=True)  # e.g., gpt-4o-mini-2024-07-18
    ap.add_argument("--outdir", default="models/hls/ALL")
    args = ap.parse_args()

    outdir = Path(args.outdir)
    outdir.mkdir(parents=True, exist_ok=True)

    client = OpenAI()

    # 1) Upload training file
    tr_path = Path(args.jsonl)
    if not tr_path.exists():
        print(f"[ERROR] Missing dataset: {tr_path}", file=sys.stderr)
        return 2

    print(f"[UPLOAD] {tr_path}")
    try:
        f = client.files.create(file=tr_path, purpose="fine-tune")
    except Exception as e:
        print(f"[ERROR] upload failed: {e}", file=sys.stderr)
        return 2

    # 2) Create FT job
    try:
        print(f"[CREATE] fine-tune: model={args.base_model} training_file={getattr(f,'id',None)}")
        job = client.fine_tuning.jobs.create(model=args.base_model, training_file=f.id)
    except BadRequestError as e:
        # Quota / model-not-available or other 400s
        msg = getattr(e, "message", "") or str(e)
        print(f"[WARN] fine-tune create failed: {msg}")
        # Write a fallback ref so downstream can proceed deterministically
        ref = {
            "model": "ALL",
            "base": args.base_model,
            "training_file_id": getattr(f, "id", None),
            "job_id": None,
            "fine_tuned_model": None,
            "mode": "create_failed",
            "error": msg,
        }
        (outdir / "model_ref.json").write_text(json.dumps(ref, indent=2), encoding="utf-8")
        print("[OK] Wrote fallback model_ref.json; downstream will use deterministic NON-DET.")
        return 0
    except (APIConnectionError, RateLimitError, AuthenticationError) as e:
        print(f"[ERROR] FT create error: {e}", file=sys.stderr)
        return 3

    # 3) Wait for completion
    job = wait(job.id, client)
    status = getattr(job, "status", None)
    if status != "succeeded":
        print(f"[ERROR] fine-tune ended with status={status}", file=sys.stderr)
        # Still write a reference (no fine_tuned_model) so pipeline can continue deterministically
        ref = {
            "model": "ALL",
            "base": args.base_model,
            "training_file_id": getattr(f, "id", None),
            "job_id": getattr(job, "id", None),
            "fine_tuned_model": None,
            "mode": status or "unknown",
        }
        (outdir / "model_ref.json").write_text(json.dumps(ref, indent=2), encoding="utf-8")
        return 4

    # 4) Success → record the FT model id
    ft_model = getattr(job, "fine_tuned_model", None)
    ref = {
        "model": "ALL",
        "base": args.base_model,
        "training_file_id": getattr(f, "id", None),
        "job_id": getattr(job, "id", None),
        "fine_tuned_model": ft_model,
        "mode": "succeeded",
    }
    (outdir / "model_ref.json").write_text(json.dumps(ref, indent=2), encoding="utf-8")
    print(f"[OK] model_ref.json written with fine_tuned_model={ft_model}")
    return 0

if __name__ == "__main__":
    raise SystemExit(main())
