import argparse
from pathlib import Path
import sys

# Ensure we can import modules from the project root
sys.path.append(str(Path(__file__).resolve().parent.parent.parent))

# Import your actual processing modules
from new_repo.pipeline.process_openapi_to_spec import process_openapi
from new_repo.pipeline.emit_interfaces_and_stories_from_spec import emit_interfaces_and_stories

def run_pipeline(sut_name: str, openapi_path: Path, out_dir: Path, force: bool):
    print(f"[Pipeline] Processing {sut_name}...")
    if force:
        print("[Pipeline] Force mode enabled: ignoring cache.")
    
    # 1. Process OpenAPI -> Intermediate Spec (Pass 'force' here!)
    spec_dict = process_openapi(openapi_path, sut_name, force)
    
    # 2. Emit Interfaces & Stories (Via Wrapper)
    print(f"[Pipeline] Generating Interfaces and Stories...")
    emit_interfaces_and_stories(spec_dict, out_dir, sut_name)
    
    print(f"[Pipeline] Done. Output in {out_dir}")

def main():
    parser = argparse.ArgumentParser()
    parser.add_argument("--sut", required=True, help="SUT Name")
    parser.add_argument("--openapi", required=True, help="Path to OpenAPI JSON/YAML")
    parser.add_argument("--out-dir", required=True, help="Output directory")
    parser.add_argument("--force", action="store_true", help="Force re-generation (ignore cache)")
    args = parser.parse_args()

    # Pass args.force to the pipeline
    run_pipeline(args.sut, Path(args.openapi), Path(args.out_dir), args.force)

if __name__ == "__main__":
    main()