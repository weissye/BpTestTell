#!/usr/bin/env python
"""Generate a new OpenAPI spec from a high-level text description using an LLM."""

import argparse
import json
from pathlib import Path

from new_repo.llm.llm_client import LLMClient


# repo root = two levels up: new_repo/pipeline -> new_repo -> repo_root
ROOT = Path(__file__).resolve().parents[2]


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True, help="Name of the new or existing system (SUT)")
    ap.add_argument("--description-file", required=True, help="Path to a text/markdown description")
    ap.add_argument("--out-openapi", help="Where to write the generated OpenAPI JSON (optional)")
    ap.add_argument("--model", default="gpt-4o-mini")
    args = ap.parse_args()

    desc_path = Path(args.description_file)
    if not desc_path.is_file():
        raise SystemExit(f"Description file not found: {desc_path}")

    description = desc_path.read_text(encoding="utf-8")

    system_prompt = (ROOT / "new_repo" / "llm" / "prompts" / "openapi_from_description.md").read_text(
        encoding="utf-8"
    )
    user_prompt = description
    schema_desc = "OpenAPI 3.0+ document in JSON form."

    client = LLMClient(model_name=args.model, temperature=0.1)
    raw = client.complete_json(system_prompt, user_prompt, schema_desc)

    try:
        openapi = json.loads(raw)
    except Exception as e:
        raise SystemExit(f"LLM did not return valid JSON OpenAPI: {e}\nRaw: {raw[:500]}") from e

    if args.out_openapi:
        out_path = Path(args.out_openapi)
        out_path.parent.mkdir(parents=True, exist_ok=True)
    else:
        out_path = ROOT / "packs" / "new_suts" / args.sut / "openapi.generated.json"
        out_path.parent.mkdir(parents=True, exist_ok=True)

    out_path.write_text(json.dumps(openapi, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"[OK] Wrote generated OpenAPI to {out_path}")


if __name__ == "__main__":
    main()
