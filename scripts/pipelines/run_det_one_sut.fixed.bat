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

REM === Script location (as you confirmed) ===
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
REM IMPORTANT: do NOT use TEMP (reserved by Windows). Use TEMPERATURE.
if not defined TEMPERATURE set "TEMPERATURE=0.2"
if not defined JSON_MODE set "JSON_MODE=1"
if not defined N_SHARDS set "N_SHARDS=0"
if not defined OPS_PER_SHARD set "OPS_PER_SHARD=0"
if not defined MAX_SPEC_CHARS set "MAX_SPEC_CHARS=18000"
if not defined MAX_USER_CHARS set "MAX_USER_CHARS=4000"

if /I "%JSON_MODE%"=="1" ( set "JSON_FLAG=--json-mode" ) else ( set "JSON_FLAG=" )

if "%~1"=="" (
  echo Usage: %~nx0 ^<sut-name^>
  echo Where ^<sut-name^> is one of: banking config_control ecommerce factory garage library pharmacy
  popd
  exit /b 2
)

set "NAME=%~1"
echo ==== !NAME! (DET) ====
set "SPEC=%REPO%\packs\7_suts\!NAME!\openapi.json"
set "OUT=%REPO%\artifacts\det_checked\7_suts_llm_provider\!NAME!"
echo [RUN] !NAME!  provider=%PROVIDER%  model=%MODEL%
echo [RUN] spec="!SPEC!"  out="!OUT!"

"%PYEXE%" "%PY_SCRIPT%" --spec "!SPEC!" --name "!NAME!" --out-dir "!OUT!" ^
    --n-shards %N_SHARDS% --ops-per-shard %OPS_PER_SHARD% --provider "%PROVIDER%" ^
    --model "%MODEL%" --gen-model "%GEN_MODEL%" --temperature %TEMPERATURE% ^
    --max-spec-chars %MAX_SPEC_CHARS% --max-user-chars %MAX_USER_CHARS% %JSON_FLAG%

set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" (
  echo [ERROR] run_llm_gold_and_grade failed for !NAME! (rc=%RC%)
  popd
  exit /b %RC%
)

echo [OK] !NAME!
popd
exit /b 0
