@echo off
setlocal EnableExtensions EnableDelayedExpansion

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

REM === Real-world root (NOT SUTs). Support both names: real_world and realworld.
if not defined RW_DIR (
  if exist "%REPO%\packs\realworld" (
    set "RW_DIR=packs\realworld"
  ) else (
    set "RW_DIR=packs\realworld"
  )
)
if not defined OUT_BASE set "OUT_BASE=artifacts\det_checked\real_world_llm_provider"

if /I "%JSON_MODE%"=="1" ( set "JSON_FLAG=--json-mode" ) else ( set "JSON_FLAG=" )

REM === Arg parsing ===
if "%~1"=="" (
  echo Usage: %~nx0 ^<real-world-name^>
  echo Example names: github stripe ...
  popd
  exit /b 2
)

set "NAME=%~1"

REM === Try common spec filenames in RW_DIR then in the alternate folder name ===
set "SPEC="
for %%F in ("openapi.json" "openapi.yaml" "openapi.yml") do (
  if exist "%REPO%\%RW_DIR%\!NAME!\%%~F" (
    set "SPEC=%REPO%\%RW_DIR%\!NAME!\%%~F"
    goto :spec_found
  )
)

REM Try the alternate base folder name
if /I "%RW_DIR%"=="packs\real_world" ( set "ALT_RW=packs\realworld" ) else ( set "ALT_RW=packs\real_world" )
for %%F in ("openapi.json" "openapi.yaml" "openapi.yml") do (
  if exist "%REPO%\!ALT_RW!\!NAME!\%%~F" (
    set "SPEC=%REPO%\!ALT_RW!\!NAME!\%%~F"
    goto :spec_found
  )
)

REM As a last resort, pick first openapi.* in the dir (either RW base)
for %%D in ("%REPO%\%RW_DIR%\!NAME!" "%REPO%\!ALT_RW!\!NAME!") do (
  if exist "%%~D" (
    for %%F in ("%%~D\openapi.*") do (
      set "SPEC=%%~fF"
      goto :spec_found
    )
  )
)

echo [FATAL] Spec not found for !NAME! in "%REPO%\%RW_DIR%\!NAME!" or "%REPO%\!ALT_RW!\!NAME!"
popd
exit /b 4

:spec_found
set "OUT=%REPO%\%OUT_BASE%\!NAME!"
echo ==== !NAME! (REAL-WORLD) ====
echo [RUN] provider=%PROVIDER%  model=%MODEL%
echo [RUN] spec="!SPEC!"  out="!OUT!"

"%PYEXE%" "%PY_SCRIPT%" --spec "!SPEC!" --name "!NAME!" --out-dir "!OUT!" ^
    --n-shards %N_SHARDS% --ops-per-shard %OPS_PER_SHARD% --provider "%PROVIDER%" ^
    --model "%MODEL%" --gen-model "%GEN_MODEL%" --temperature %TEMPERATURE% ^
    --max-spec-chars %MAX_SPEC_CHARS% --max-user-chars %MAX_USER_CHARS% %JSON_FLAG%

set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" (
  echo [ERROR] Real-world run failed for !NAME! (rc=%RC%)
  popd
  exit /b %RC%
)

echo [OK] !NAME!
popd
exit /b 0
