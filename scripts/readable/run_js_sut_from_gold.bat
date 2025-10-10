@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM Usage:
REM   run_js_sut_from_gold.bat  artifacts\det_checked\7_suts_llm_provider\banking
REM   run_js_sut_from_gold.bat  artifacts\nondet_checked\realworld_llm_provider\stripe

if "%~1"=="" (
  echo [ERR] Please provide a SUT folder path.
  echo Example: scripts\readable\run_js_sut_from_gold.bat artifacts\det_checked\7_suts_llm_provider\banking
  exit /b 1
)

set SUT_DIR=%~1
set PY=%~dp0..\..\ .venv\Scripts\python.exe
set PY=%~dp0..\..\ .venv\Scripts\python.exe
set PY=%~dp0..\..\ .venv\Scripts\python.exe
REM Normalize path for spaces
set "PY=%~dp0..\..\..\ .venv\Scripts\python.exe"
REM Fallback if above expansion is weird in your tree:
if not exist "%PY%" set "PY=%CD%\.venv\Scripts\python.exe"

if not exist "%SUT_DIR%" (
  echo [ERR] SUT dir not found: %SUT_DIR%
  exit /b 1
)

REM pick SUT name from leaf folder
for %%A in ("%SUT_DIR%") do set "SUT=%%~nA"

set "OUT_DIR=%SUT_DIR%\readable"
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%" 2>nul

REM Prefer *_llm_gold_fixed.(json|jsonl), else *_llm_gold.(json|jsonl), else per-shard *_llm_gold_shard_*.json
set "CANDIDATES="
for %%F in ("%SUT_DIR%\%SUT%_llm_gold_fixed.json" "%SUT_DIR%\%SUT%_llm_gold_fixed.jsonl" "%SUT_DIR%\%SUT%_llm_gold.json" "%SUT_DIR%\%SUT%_llm_gold.jsonl") do (
  if exist "%%~fF" set "CANDIDATES=!CANDIDATES! "%%~fF""
)

if "%CANDIDATES%"=="" (
  for %%F in ("%SUT_DIR%\%SUT%_llm_gold_shard_*.json") do (
    if exist "%%~fF" set "CANDIDATES=!CANDIDATES! "%%~fF""
  )
)

if "%CANDIDATES%"=="" (
  echo [WARN] No GOLD files found under %SUT_DIR%. Skipping.
  exit /b 0
)

set "OPS_OUT=%SUT_DIR%\%SUT%_llm_gold_ops.json"

REM Normalize + merge ops (never fail the batch)
echo [RUN ] normalizing ops -> "%OPS_OUT%"
%PY% scripts\readable\normalize_gold_for_readables.py --out "%OPS_OUT%" %CANDIDATES%
if errorlevel 1 (
  echo [WARN] normalization failed for %SUT%. Continuing.
)

REM Run the single producer (interfaces + lifecycle from gold)
echo [RUN ] emit_readables_from_gold.py for "%SUT%"
%PY% scripts\readable\emit_readables_from_gold.py --gold "%OPS_OUT%" --out-dir "%OUT_DIR%" --force-crud
if errorlevel 1 (
  echo [WARN] emit_readables_from_gold.py failed for %SUT%. Continuing.
) else (
  echo [OK  ] readables written to "%OUT_DIR%"
)

exit /b 0
