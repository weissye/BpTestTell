@echo off
setlocal EnableExtensions EnableDelayedExpansion

for %%I in ("%~dp0..\..\") do set "ROOT=%%~fI"
set "SUTS=directus gitea github jira_cloud keycloak_admin meilisearch netbox stripe trello twilio zulip"

if not defined PYTHON_EXE if exist "%ROOT%\.venv\Scripts\python.exe" set "PYTHON_EXE=%ROOT%\.venv\Scripts\python.exe"
if not defined PYTHON_EXE set "PYTHON_EXE=python"

if not defined GEN_PY (
  if exist "%ROOT%\scripts\llm\run_llm_gold_and_grade.py" (
    set "GEN_PY=%ROOT%\scripts\llm\run_llm_gold_and_grade.py"
  ) else if exist "%ROOT%\scripts\llm\emit_llm_gold_from_openapi.py" (
    set "GEN_PY=%ROOT%\scripts\llm\emit_llm_gold_from_openapi.py"
  )
)
if not exist "%GEN_PY%" (
  echo [ERR] Generator script not found at "%GEN_PY%".
  echo       PowerShell: ^$env:GEN_PY = "%ROOT%\scripts\llm\run_llm_gold_and_grade.py"
  exit /b 1
)

set "CLEAN_FLAG="
if defined CLEAN set "CLEAN_FLAG=--rebuild-shards"
set "FORCE_FLAG="
if defined FORCE set "FORCE_FLAG=--force"

echo [INFO] CWD=%CD%
echo [INFO] GEN_PY=%GEN_PY%
if defined PROVIDER echo [INFO] PROVIDER=%PROVIDER%  MODEL=%MODEL%

for %%S in (%SUTS%) do (
  set "SUT=%%S"
  echo.
  echo ==== !SUT! ^(REAL-WORLD^) ====
  set "SPEC=%ROOT%\packs\realworld\!SUT!\openapi.json"
  set "OUTDIR=%ROOT%\artifacts\det_checked\real_world_llm_provider\!SUT!"

  if not exist "!SPEC!" (
    echo [ERR] Could not locate openapi.json for "!SUT!".
    echo [WARN] !SUT! failed.
  ) else (
    echo [RUN] provider=!PROVIDER!  model=!MODEL!
    echo [RUN] spec="!SPEC!"  out="!OUTDIR!"
    "%PYTHON_EXE%" "%GEN_PY%" --spec "!SPEC!" --name "!SUT!" --out-dir "!OUTDIR!" --provider "!PROVIDER!" --model "!MODEL!" !CLEAN_FLAG! !FORCE_FLAG!
    if errorlevel 1 (echo [WARN] !SUT! failed.) else (echo [OK] !SUT!)
  )
)

echo.
echo [SUMMARY] real-world run finished.
endlocal
