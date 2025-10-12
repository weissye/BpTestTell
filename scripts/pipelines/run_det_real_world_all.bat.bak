@echo off
setlocal EnableExtensions EnableDelayedExecution

REM === Resolve repo root (two levels up) ===
set "THIS=%~dp0"
pushd "%THIS%\..\.."
set "REPO=%CD%"
echo [INFO] CWD=%REPO%

REM === Prefer venv python ===
if defined VIRTUAL_ENV (
  set "PYEXE=%VIRTUAL_ENV%\Scripts\python.exe"
) else (
  set "PYEXE=python"
)

REM === Driver script ===
set "PY_SCRIPT=%REPO%\scripts\llm\run_llm_gold_and_grade.py"
if not exist "%PY_SCRIPT%" (
  echo [FATAL] Not found: %PY_SCRIPT%
  popd
  exit /b 3
)

REM === Config (override via env) ===
if not defined PROVIDER set "PROVIDER=openai"
if not defined MODEL set "MODEL=gpt-4o-mini"
if not defined GEN_MODEL set "GEN_MODEL=%MODEL%"
if not defined TEMPERATURE set "TEMPERATURE=0.2"
if not defined JSON_MODE set "JSON_MODE=1"
if not defined N_SHARDS set "N_SHARDS=0"
if not defined OPS_PER_SHARD set "OPS_PER_SHARD=0"
if not defined MAX_SPEC_CHARS set "MAX_SPEC_CHARS=18000"
if not defined MAX_USER_CHARS set "MAX_USER_CHARS=4000"

REM === Real-world root auto (supports real_world or realworld) ===
if not defined RW_DIR (
  if exist "%REPO%\packs\realworld" (
    set "RW_DIR=packs\realworld"
  ) else (
    set "RW_DIR=packs\realworld"
  )
)
if not defined OUT_BASE set "OUT_BASE=artifacts\det_checked\real_world_llm_provider"

if /I "%JSON_MODE%"=="1" ( set "JSON_FLAG=--json-mode" ) else ( set "JSON_FLAG=" )

set /a _attempted=0
set /a _ok=0
set /a _fail=0

REM === Iterate subfolders that contain openapi.json/.yaml/.yml ===
for /d %%D in ("%REPO%\%RW_DIR%\*") do call :maybe_run "%%~nD" "%%~fD"

echo.
echo [SUMMARY] attempted=!_attempted!  ok=!_ok!  failed=!_fail!
popd
exit /b 0

:pick_spec
REM Given a dir path in %1, pick best openapi file (json > yaml > yml), else empty
set "SPEC="
if exist "%~1\openapi.json" set "SPEC=%~1\openapi.json"
if not defined SPEC if exist "%~1\openapi.yaml" set "SPEC=%~1\openapi.yaml"
if not defined SPEC if exist "%~1\openapi.yml"  set "SPEC=%~1\openapi.yml"
exit /b 0

:maybe_run
set "NAME=%~1"
set "DIR=%~2"

call :pick_spec "%DIR%"
if not defined SPEC (
  REM no spec in this directory; skip silently
  goto :eof
)

set /a _attempted+=1
set "OUT=%REPO%\%OUT_BASE%\!NAME!"
echo ==== !NAME! (REAL-WORLD) ====
echo [RUN] provider=%PROVIDER%  model=%MODEL%
echo [RUN] spec="!SPEC!"  out="!OUT!"

"%PYEXE%" "%PY_SCRIPT%" --spec "!SPEC!" --name "!NAME!" --out-dir "!OUT!" ^
    --n-shards %N_SHARDS% --ops-per-shard %OPS_PER_SHARD% --provider "%PROVIDER%" ^
    --model "%MODEL%" --gen-model "%GEN_MODEL%" --temperature %TEMPERATURE% ^
    --max-spec-chars %MAX_SPEC_CHARS% --max-user-chars %MAX_USER_CHARS% %JSON_FLAG%

if errorlevel 1 (
  echo [ERROR] Real-world run failed for !NAME! (continuing)
  set /a _fail+=1
) else (
  echo [OK] !NAME!
  set /a _ok+=1
)
exit /b 0
