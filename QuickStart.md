# QuickStart — BpTestTell

A one‑page guide to go from OpenAPI to DET/NONDET artifacts and lifecycle outputs.

## 0) Prerequisites
- Windows 10/11 (cmd.exe), Python 3.10+, Git
- A model key exported in your shell (e.g., `OPENAI_API_KEY`)

## 1) Clone
```bat
git clone https://github.com/<your-user>/BpTestTell.git
cd BpTestTell
```

## 2) (Optional) Virtualenv
```bat
REM python -m venv .venv
REM .venv\Scripts\activate
REM pip install -r requirements.txt
```

## 3) Set your model key
```bat
set "OPENAI_API_KEY=sk-...your key..."
```

## 4) Prepare specs
- SUTs are already in `packs\7_suts\*\openapi.json`
- Fetch Real‑World specs listed in the manifest:
```bat
scripts\realworld\fetch_openapi_manifest.bat
```

## 5) Generate DET
- All 7 SUTs:
```bat
scripts\pipelines\run_det_all_7suts.bat
```
- Real‑World (selected/all):
```bat
scripts\training\e2e_train_7suts_real*.bat
```

## 6) Run E2E + NONDET
- Execute your E2E run (model‑assisted evaluation). Outputs appear under:
```
artifacts\nondet_checked\...
```

## 7) Review outputs
- Deterministic: `artifacts\det_checked\...`
- Non‑deterministic: `artifacts\nondet_checked\...`
- Open generated `lifecycle.js` visualization

## Troubleshooting
- Batch errors: escape `|` as `^|`, avoid bare parentheses inside FOR/IF blocks; comment headings with `REM`
- RW fetch 404s: verify the manifest **raw** URLs for JSON/YAML
- Python/venv: `where python` to confirm the interpreter
