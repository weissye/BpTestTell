# -*- coding: utf-8 -*-
"""
Generate NON-DET from a trained LLM.
- With --model_id (or model_ref.json containing fine_tuned_model): query OpenAI to vary stories.
- Else: fallback deterministic shuffle.
"""
import argparse, json, random, sys, os
from pathlib import Path

PROMPT = """You are generating high-level stories (HLS) for a b-threads test system.
Given this base story (JSON), produce ONE varied story JSON with the same schema:
{{
  "entity": string,
  "op": "add"|"update"|"delete",
  "params": {{...}},
  "blocks": [reverseOperationNameStrings],
  "checks": [assertionNameStrings]
}}
Rules:
- Keep operation logically valid.
- Preserve entity/op intent but you may tweak params keys/values.
- Keep blocks/reverse-op consistent (add↔delete, update↔update).
- Keep checks aligned (verify<Entity>Exists, verify<Entity>Updated, verify<Entity>NotExists).
- STRICTLY return a single JSON object, no preamble text.
Base story JSON:
"""

def load_model_id(model_dir: Path, cli_id: str|None) -> str|None:
    if cli_id: return cli_id
    ref = model_dir/"model_ref.json"
    if ref.exists():
        obj = json.loads(ref.read_text(encoding="utf-8"))
        return obj.get("fine_tuned_model") or obj.get("model_id")
    return None

def openai_vary(story, model_id):
    from openai import OpenAI
    client = OpenAI()
    prompt = PROMPT + json.dumps(story, ensure_ascii=False, indent=2)
    # Responses API with JSON response
    resp = client.responses.create(
        model=model_id,
        input=[{"role":"user","content":prompt}],
        temperature=0.6,
        response_format={"type":"json_object"},
        max_output_tokens=600,
    )
    # Extract text JSON
    text = resp.output_text
    try:
        return json.loads(text)
    except Exception:
        # If JSON parsing fails, just return original with a nondet flag
        s = dict(story); s["nondet"]=True; return s

def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True)
    ap.add_argument("--hls_det", required=True)
    ap.add_argument("--trained_model_dir", required=True)
    ap.add_argument("--out", required=True)
    ap.add_argument("--seed", type=int, default=142)
    ap.add_argument("--model_id", help="override (fine-tuned) model id")
    args = ap.parse_args()

    det = json.loads(Path(args.hls_det).read_text(encoding="utf-8"))
    stories = det.get("stories", [])
    Path(args.out).parent.mkdir(parents=True, exist_ok=True)

    model_id = load_model_id(Path(args.trained_model_dir), args.model_id)
    out_stories = []

    if model_id:
        # LLM-based non-det
        for s in stories:
            varied = openai_vary(s, model_id)
            varied["nondet"] = True
            out_stories.append(varied)
    else:
        # Fallback deterministic
        random.seed(args.seed)
        out_stories = stories[:]
        random.shuffle(out_stories)
        for i, s in enumerate(out_stories, 1):
            s["variant_id"]=i; s["nondet"]=True

    out = {"sut": args.sut, "from_det": args.hls_det, "model_or_dir": args.trained_model_dir, "stories": out_stories}
    Path(args.out).write_text(json.dumps(out, ensure_ascii=False, indent=2), encoding="utf-8")
    print(f"[OK] wrote {args.out} with {len(out_stories)} stories")

if __name__ == "__main__":
    raise SystemExit(main())
