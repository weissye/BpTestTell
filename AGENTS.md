---
name: BpTestTell Agent Instructions
description: Instructions for AI agents working on the BpTestTell automated testing framework
---

# BpTestTell Agent Instructions

## Project Overview
BpTestTell is an automated framework that converts OpenAPI specifications into executable Provengo test models for detecting race conditions and non-deterministic bugs in CRUD-based APIs. It uses LLM-driven semantic analysis to understand API structures.

## Key Commands
- **Generate tests for a system:** `python run_manager.py --sut <name>` (e.g., netbox, github)
- **Generate all systems:** `python run_manager.py`
- **Run Provengo tests:** `provengo run provengo_ready/<sut>`
- **Analyze results:** `provengo analyze -f pdf provengo_ready/<sut>`

## Architecture
- **Three-layer pipeline:** OpenAPI → JSON spec (LLM-generated) → JavaScript code (interfaces + stories)
- **Synthetic SUTs:** 7 systems in `packs/7_suts/` for controlled testing
- **Real-world APIs:** 10+ systems in `packs/real_world/` for live testing
- **Outputs:** `provengo_ready/<sut>/spec/js/` (interfaces.js, stories.js)

## Conventions
- Use `new_repo/specs/<sut>.generated.json` for cached specs (edit manually if needed)
- Interfaces wrap REST calls; stories define behavioral threads (b-threads)
- DET: baseline contracts; NONDET: concurrency testing with variants
- Set `OPENAI_API_KEY` environment variable before running LLM pipeline

## Pitfalls
- Ensure Provengo is installed and on PATH
- Check OpenAPI spec validity (3.0+) before processing
- Cache regeneration requires `--force` flag
- Subdirectories may have specific instructions in `.github/copilot-instructions.md`

## Key Files
- `run_manager.py`: Main entry point
- `new_repo/pipeline/`: Core generation logic
- `packs/`: OpenAPI specifications
- `provengo_ready/`: Generated test code
- `artifacts/`: Test outputs and logs

For detailed documentation, see [README.md](README.md) and [repo_saved/README.md](repo_saved/README.md).</content>
<parameter name="filePath">c:\work\Yeshayahu\BpTestTell\AGENTS.md