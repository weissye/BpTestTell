@echo off
setlocal EnableExtensions EnableDelayedExpansion

echo ============================================
echo Emitting NONDET READABLES from: "%~1"
echo CWD: %CD%
echo ============================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"
if not exist "%LIST%" (
  echo [FAIL] SUT list not found: "%LIST%"
  exit /b 1
)

for /F "usebackq delims=" %%L in ("%LIST%") do (
  set "LINE=%%~L"
  rem trim leading spaces
  for /F "tokens=* delims= " %%A in ("!LINE!") do set "LINE=%%~A"
  if defined LINE if not "!LINE:~0,1!"==";" (
    call :DO_ONE "!LINE!"
  )
)

echo ALL NONDET READABLES DONE
exit /b 0

:DO_ONE
setlocal
set "SUT=%~1"
set "SUT=%SUT:"=%"
echo [SUT ] %SUT%

call :DO_PROVIDER "%SUT%" "7_suts_llm_provider"
call :DO_PROVIDER "%SUT%" "real_world_llm_provider"

endlocal & goto :eof

:DO_PROVIDER
setlocal
set "SUT=%~1"
set "PROV=%~2"

set "NONDET=artifacts\hls_nondet\%PROV%\%SUT%\hls_nondet_gold.json"
set "DET=artifacts\hls_det\%PROV%\%SUT%\hls_det_gold.json"
set "OUTDIR=artifacts\hls_nondet\%PROV%\%SUT%\readable"
set "OUT=%OUTDIR%\stories_hls.js"

if not exist "%NONDET%" (
  echo [SKIP] Missing NONDET for %PROV%\%SUT%
  endlocal & goto :eof
)

mkdir "%OUTDIR%" 2>nul

if exist "%DET%" (
  echo [RUN ] NONDET→JS with DET enrich: %PROV%\%SUT%
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%NONDET%" --active "%DET%" --out "%OUT%" --name %SUT%  --format bpjs
) else (
  echo [RUN ] NONDET→JS: %PROV%\%SUT%
  python -u scripts\readable\emit_hls_all_in_one.py --gold "%NONDET%" --out "%OUT%" --name %SUT%  --format bpjs
)

endlocal & goto :eof
