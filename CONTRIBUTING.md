# Contributing to BpTestTell

Thanks for your interest in improving **BpTestTell**! This document describes how to propose changes, file issues, and contribute code/documentation.

## Code of Conduct
Be respectful and constructive. We welcome first‑time contributors—please ask questions!

## Ways to contribute
- Report bugs and edge cases
- Improve docs (README, QuickStart, guides)
- Add/extend story templates and RW packs
- Enhance scripts, validation, and DX

## Getting started (dev setup)
```bat
git clone https://github.com/<your-user>/BpTestTell.git
cd BpTestTell
REM optional:
REM python -m venv .venv && .venv\Scripts\activate && pip install -r requirements.txt
```

## Branching & commits
- Create feature branches from `main`: `feat/<topic>`, `fix/<issue>`, `docs/<area>`
- Write clear commit messages: imperative mood, short summary + context

## Making changes
- Keep changes focused and well‑scoped
- Update or add docs when behavior changes
- Add test scenarios or validation where helpful

## Running workflows locally
- Fetch Real‑World specs from manifest:
  ```bat
  scripts\realworld\fetch_openapi_manifest.bat
  ```
- Generate DET for SUTs:
  ```bat
  scripts\pipelines\run_det_all_7suts.bat
  ```
- Run RW DET/E2E:
  ```bat
  scripts\training\e2e_train_7suts_real*.bat
  ```

## Submitting a PR
1. Fork the repo, create a branch, push commits
2. Open a PR to `main`
3. Describe **what/why/how**, include repro steps and last ~30 log lines if relevant
4. Be responsive to review comments

## Issue reports
Please include:
- OS & Python version
- exact command(s) run
- expected vs actual behavior
- last ~30 lines of logs/output

## Security
Do **not** post secrets (keys, tokens) in issues/PRs. Report security concerns privately to the maintainers.

## License
By contributing, you agree your contributions will be under the project’s eventual license.
