#!/usr/bin/env python
"""
Master Runner for BpTestTell Pipeline (Enhanced).
"""

import argparse
import subprocess
import sys
import os
from pathlib import Path
from typing import Dict, Optional

def find_openapi_file(sut_dir: Path) -> Optional[Path]:
    json_path = sut_dir / "openapi.json"
    if json_path.exists(): return json_path
    yaml_path = sut_dir / "openapi.yaml"
    if yaml_path.exists(): return yaml_path
    return None

def discover_suts(root_path: Path) -> Dict[str, Path]:
    suts = {}
    source_dirs = [
        root_path / "packs" / "7_suts",
        root_path / "packs" / "real_world"
    ]
    for source in source_dirs:
        if not source.exists(): continue
        for sut_dir in source.iterdir():
            if sut_dir.is_dir():
                openapi_file = find_openapi_file(sut_dir)
                if openapi_file:
                    suts[sut_dir.name] = openapi_file
    return suts

def verify_output(sut_name: str, out_dir: Path):
    """Check if generated files look healthy."""
    # CHANGED: Look for sut specific filenames
    stories_file = out_dir / f"stories.{sut_name}.js"
    interfaces_file = out_dir / f"interfaces.{sut_name}.js"
    
    if not stories_file.exists() or not interfaces_file.exists():
        print(f"❌ [FAIL] Output files missing for {sut_name}")
        print(f"   Expected: {stories_file.name}, {interfaces_file.name}")
        return False
    
    size = stories_file.stat().st_size
    if size < 500:
        print(f"⚠️ [WARN] {sut_name} stories file is suspiciously small ({size} bytes). Check generation.")
        return True
    
    print(f"✅ [OK] Generated {size} bytes of stories.")
    return True

def run_pipeline(sut_name: str, openapi_path: Path, root_path: Path, force: bool = False):
    out_dir = root_path / "provengo_ready" / sut_name / "spec" / "js"
    
    print("=" * 60)
    print(f"🚀 PROCESSING SUT: {sut_name}")
    print(f"   📄 Input:  {openapi_path.relative_to(root_path)}")
    print(f"   TB Output: {out_dir.relative_to(root_path)}")
    if force:
        print("   ⚠️  Force Mode: Cache will be ignored.")
    print("=" * 60)

    cmd = [
        sys.executable,
        "-m",
        "new_repo.pipeline.run_openapi_to_interfaces_and_stories",
        "--sut", sut_name,
        "--openapi", str(openapi_path),
        "--out-dir", str(out_dir)
    ]
    
    if force:
        cmd.append("--force")

    try:
        subprocess.run(cmd, check=True)
        verify_output(sut_name, out_dir)
    except subprocess.CalledProcessError as e:
        print(f"\n❌ [ERROR] Failed generating {sut_name}. Exit code: {e.returncode}")

def main():
    root = Path(__file__).resolve().parent
    parser = argparse.ArgumentParser()
    parser.add_argument("--sut", type=str, help="Specific SUT to run")
    parser.add_argument("--force", action="store_true", help="Force re-generation (ignore cache)")
    args = parser.parse_args()

    available_suts = discover_suts(root)
    
    if not available_suts:
        print("[ERR] No SUTs found.")
        return

    if args.sut:
        if args.sut in available_suts:
            run_pipeline(args.sut, available_suts[args.sut], root, args.force)
        else:
            print(f"[ERR] SUT '{args.sut}' not found.")
    else:
        print(f"🌍 Found {len(available_suts)} SUTs. Running all...")
        for sut_name, openapi_path in available_suts.items():
            run_pipeline(sut_name, openapi_path, root, args.force)

if __name__ == "__main__":
    main()