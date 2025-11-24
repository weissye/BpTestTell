#!/usr/bin/env python
"""
Run the OpenAPI → interfaces.readable.js + stories_hls.js pipeline
for all 7 SUTs + 10 real-world systems.

Output is written under:
    <REPO_ROOT>/provengo_ready/<sut>/spec/js
"""

import subprocess
import sys
from pathlib import Path

# 7 synthetic CRUD SUTs
SUTS_7 = [
    "banking",
    "config_control",
    "ecommerce",
    "factory",
    "garage",
    "library",
    "pharmacy",
]

# 10 real-world systems
SUTS_REAL = [
    "directus",
    "gitea",
    "github",
    "jira_cloud",
    "keycloak_admin",
    "meilisearch",
    "netbox",
    "stripe",
    "trello",
    "twilio",
    "zulip",
]


def run_for_sut(sut: str, openapi_path: Path, out_dir: Path) -> None:
    print("-" * 60)
    print(f"[RUN ] SUT={sut}")
    print(f"[INFO] OpenAPI: {openapi_path}")
    print(f"[INFO] OutDir : {out_dir}")

    out_dir.mkdir(parents=True, exist_ok=True)

    cmd = [
        sys.executable,
        "-m",
        "new_repo.pipeline.run_openapi_to_interfaces_and_stories",
        "--sut",
        sut,
        "--openapi",
        str(openapi_path),
        "--out-dir",
        str(out_dir),
    ]

    try:
        subprocess.run(cmd, check=True)
    except subprocess.CalledProcessError as e:
        print(f"[ERR ] Failed for {sut}: {e}")
    else:
        print(f"[DONE] {sut}")


def main() -> None:
    # new_repo/pipeline/run_all_suts_from_openapi.py -> new_repo -> repo root
    repo_root = Path(__file__).resolve().parents[2]

    packs_7_root = repo_root / "packs" / "7_suts"
    packs_real_root = repo_root / "packs" / "real_world"

    # *** NEW OUTPUT ROOT ***
    provengo_root = repo_root / "provengo_ready"

    # 7 SUTs
    for sut in SUTS_7:
        openapi_path = packs_7_root / sut / "openapi.json"
        out_dir = provengo_root / sut / "spec" / "js"
        run_for_sut(sut, openapi_path, out_dir)

    # Real-world SUTs
    for sut in SUTS_REAL:
        openapi_path = packs_real_root / sut / "openapi.json"
        out_dir = provengo_root / sut / "spec" / "js"
        run_for_sut(sut, openapi_path, out_dir)

    print("=" * 60)
    print("[DONE] All SUTs processed.")


if __name__ == "__main__":
    main()
