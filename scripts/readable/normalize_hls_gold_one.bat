@echo off
setlocal enabledelayedexpansion

rem Usage: normalize_hls_gold_one.bat <sut> <det|nondet> <provider>
set SUT=%~1
set MODE=%~2
set PROV=%~3
if "%SUT%"==""  (echo [ERR] SUT required & exit /b 2)
if "%MODE%"=="" (set MODE=det)
if "%PROV%"=="" (set PROV=7_suts_llm_provider)

set ROOT=%~dp0..\..
set PY=%ROOT%\.venv\Scripts\python.exe
set DIR=%ROOT%\artifacts\hls_%MODE%\%PROV%\%SUT%

set IN1=%DIR%\hls_%MODE%_gold.json
set IN2=%DIR%\hls_%MODE%_gold_fixed.json
set OUT=%DIR%\hls_%MODE%_gold_ops.json

if not exist "%IN1%" if not exist "%IN2%" (
  echo [SKIP] no GOLD for %SUT% (%MODE% %PROV%)
  exit /b 0
)

echo [RUN ] normalize: %SUT% (hls_%MODE% %PROV%)
"%PY%" "%ROOT%\scripts\readable\normalize_gold_for_readables.py" --out "%OUT%" "%IN1%" "%IN2%"
endlocal
