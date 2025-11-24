#!/usr/bin/env python
"""OpenAPI → unified spec (via LLM) → interfaces.readable.js + stories_hls.js."""

import argparse
import json
from pathlib import Path
from typing import Any

from new_repo.llm.llm_client import LLMClient
from new_repo.pipeline.emit_interfaces_and_stories_from_spec import main as gen_main


# repo root = two levels up: new_repo/pipeline -> new_repo -> repo_root
ROOT = Path(__file__).resolve().parents[2]
NEW_REPO = ROOT / "new_repo"


def load_openapi(path: Path) -> Any:
    """Load OpenAPI from JSON or YAML file."""
    text = path.read_text(encoding="utf-8")
    suffix = path.suffix.lower()
    if suffix == ".json":
        return json.loads(text)

    if suffix in (".yaml", ".yml"):
        try:
            import yaml  # type: ignore
        except ImportError:
            raise SystemExit(
                "YAML OpenAPI given but PyYAML is not installed. Run `pip install pyyaml`."
            )
        return yaml.safe_load(text)

    # Fallback: try JSON then YAML
    try:
        return json.loads(text)
    except Exception:
        try:
            import yaml  # type: ignore
        except ImportError:
            raise SystemExit(
                "Could not parse OpenAPI as JSON and PyYAML not installed. "
                "Install PyYAML or provide JSON."
            )
        return yaml.safe_load(text)


def main():
    ap = argparse.ArgumentParser()
    ap.add_argument("--sut", required=True, help="SUT name (for naming outputs)")
    ap.add_argument("--openapi", required=True, help="Path to OpenAPI JSON or YAML file")
    ap.add_argument("--out-dir", required=True, help="Directory for JS outputs (Provengo spec/js)")
    ap.add_argument("--model", default="gpt-4o-mini", help="LLM model name")
    args = ap.parse_args()

    openapi_path = Path(args.openapi)
    if not openapi_path.is_file():
        raise SystemExit(f"OpenAPI file not found: {openapi_path}")

    # 1) Load OpenAPI
    openapi = load_openapi(openapi_path)

    # 2) Call LLM to build unified spec
    system_prompt = (NEW_REPO / "llm" / "prompts" / "spec_from_openapi.md").read_text(encoding="utf-8")
    user_payload = {"sut": args.sut, "openapi": openapi}
    user_prompt = json.dumps(user_payload, ensure_ascii=False)

    schema_desc = "Unified interaction spec JSON with entities, operations, waitForPatterns, and stories."

    client = LLMClient(model_name=args.model, temperature=0.1)
    
    # LLMClient.complete_json already returns a parsed dict
    spec = client.complete_json(system_prompt, user_prompt, schema_desc)

    # 3) Save spec for inspection
    specs_dir = NEW_REPO / "specs"
    specs_dir.mkdir(parents=True, exist_ok=True)
    spec_path = specs_dir / f"{args.sut}.generated.json"
    spec_path.write_text(json.dumps(spec, indent=2, ensure_ascii=False) + "\n", encoding="utf-8")
    print(f"[OK] Wrote unified spec to {spec_path}")

    # 4) Call the deterministic generator: spec → JS
    import sys
    argv_backup = sys.argv[:]
    try:
        sys.argv = [
            "emit_interfaces_and_stories_from_spec.py",
            "--spec",
            str(spec_path),
            "--out-dir",
            args.out_dir,
        ]
        gen_main()
    finally:
        sys.argv = argv_backup


if __name__ == "__main__":
    main()
