@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Usage: emit_stories_one.bat <sut>
if "%~1"=="" (
  echo Usage: %~nx0 SUT_NAME
  exit /b 2
)

set "SUT=%~1"

rem ROOT = repo root (this file is under scripts\readable\...)
set "ROOT=%~dp0..\.."
for %%# in ("%ROOT%") do set "ROOT=%%~f#"

set "PY=%ROOT%\.venv\Scripts\python.exe"

echo --------------------------------------------
echo [ENTR] %~nx0
echo [DBG ]   SUT    = %SUT%
echo [DBG ]   ROOT   = %ROOT%
echo [DBG ]   PY     = %PY%

rem Decide provider by SUT
set "PROVIDER=real_world_llm_provider"
for %%S in (banking config_control ecommerce factory garage library pharmacy) do (
  if /I "%%S"=="%SUT%" set "PROVIDER=7_suts_llm_provider"
)
echo [DBG ]   PROVIDER = %PROVIDER%

rem DSL & GRAPH locations (unchanged)
if /I "%PROVIDER%"=="7_suts_llm_provider" (
  set "DSL=%ROOT%\models\hls\SUTs\%SUT%\dsl_map.json"
  set "GRAPH=%ROOT%\artifacts\analysis\7_suts_llm_provider\%SUT%\graph.json"
) else (
  set "DSL=%ROOT%\models\hls\RWs\%SUT%\dsl_map.json"
  set "GRAPH=%ROOT%\artifacts\analysis\real_world_llm_provider\%SUT%\graph.json"
)
echo [DBG ]   DSL      = %DSL%
echo [DBG ]   GRAPH    = %GRAPH%

rem ---------- emit NONDET ----------
set "MODE=nondet"
set "OUT_JS=%ROOT%\artifacts\hls_%MODE%\%PROVIDER%\%SUT%\readables\stories.js"
echo --------------------------------------------
echo [RUN ] NONDET: %SUT% (%PROVIDER%)
echo [DBG ]   OUT_JS = %OUT_JS%
if not exist "%OUT_JS%\.." mkdir "%OUT_JS%\.." >nul 2>&1
"%PY%" -u "%ROOT%\scripts\readable\emit_hls_all_in_one.py" ^
  --sut_dir "%ROOT%\%SUT%" ^
  --mode %MODE% ^
  --dsl_map "%DSL%" ^
  --graph "%GRAPH%" ^
  --out "%OUT_JS%"
if errorlevel 1 (
  echo [ERR ] NONDET emitter failed for %SUT% (errorlevel=%errorlevel%)
) else (
  echo [OK  ] NONDET emitter finished for %SUT%
)

rem ---------- emit DET ----------
set "MODE=det"
set "OUT_JS=%ROOT%\artifacts\hls_%MODE%\%PROVIDER%\%SUT%\readables\stories.js"
echo --------------------------------------------
echo [RUN ] DET: %SUT% (%PROVIDER%)
echo [DBG ]   OUT_JS = %OUT_JS%
if not exist "%OUT_JS%\.." mkdir "%OUT_JS%\.." >nul 2>&1
"%PY%" -u "%ROOT%\scripts\readable\emit_hls_all_in_one.py" ^
  --sut_dir "%ROOT%\%SUT%" ^
  --mode %MODE% ^
  --dsl_map "%DSL%" ^
  --graph "%GRAPH%" ^
  --out "%OUT_JS%"
if errorlevel 1 (
  echo [ERR ] DET emitter failed for %SUT% (errorlevel=%errorlevel%)
) else (
  echo [OK  ] DET emitter finished for %SUT%
)

echo [DONE] %~nx0 completed for %SUT%
exit /b 0
