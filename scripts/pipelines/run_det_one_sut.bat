@echo off
setlocal EnableExtensions EnableDelayedExpansion

if "%~1"=="" (
  echo Usage: %~nx0 ^<sut-name^>
  echo   Example: %~nx0 banking
  exit /b 2
)
set "ARG=%~1"

for %%I in ("%~dp0..\..\") do set "ROOT=%%~fI"

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

set "REALM="
if defined REALM set "REALM=%REALM%"

if not defined REALM (
  if exist "%ROOT%\packs\7_suts\%ARG%\openapi.json" set "REALM=7"
  if exist "%ROOT%\packs\realworld\%ARG%\openapi.json" if not defined REALM set "REALM=realworld"
)

if /i "%REALM%"=="7" (
  set "SPEC=%ROOT%\packs\7_suts\%ARG%\openapi.json"
  set "OUTDIR=%ROOT%\artifacts\det_checked\7_suts_llm_provider\%ARG%"
  set "REALM_LABEL=7-SUTS"
) else if /i "%REALM%"=="realworld" (
  set "SPEC=%ROOT%\packs\realworld\%ARG%\openapi.json"
  set "OUTDIR=%ROOT%\artifacts\det_checked\real_world_llm_provider\%ARG%"
  set "REALM_LABEL=REAL-WORLD"
) else (
  echo [ERR] Could not determine realm for "%ARG%". Set REALM=7 or REALM=realworld and retry.
  exit /b 3
)

if not exist "%SPEC%" (
  echo [ERR] Could not locate openapi.json at "%SPEC%".
  exit /b 4
)

echo [INFO] CWD=%CD%
echo [INFO] GEN_PY=%GEN_PY%
if defined PROVIDER echo [INFO] PROVIDER=%PROVIDER%  MODEL=%MODEL%

echo.
echo ==== %ARG% ^(%REALM_LABEL%^) ====
echo [RUN] provider=%PROVIDER%  model=%MODEL%
echo [RUN] spec="%SPEC%"  out="%OUTDIR%"

"%PYTHON_EXE%" "%GEN_PY%" --spec "%SPEC%" --name "%ARG%" --out-dir "%OUTDIR%" --provider "%PROVIDER%" --model "%MODEL%" %CLEAN_FLAG% %FORCE_FLAG%
if errorlevel 1 (echo [WARN] %ARG% failed. & exit /b 5) else (echo [OK] %ARG%)

endlocal
