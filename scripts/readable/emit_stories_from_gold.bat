@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem Usage: emit_stories_from_gold.bat MODE SUT PROVIDER
rem MODE: NONDET or DET
if "%~1"==""  ( echo MODE must be NONDET or DET & exit /b 2 )
if /I not "%~1"=="NONDET" if /I not "%~1"=="DET" ( echo MODE must be NONDET or DET & exit /b 2 )

set "MODE=%~1"
set "SUT=%~2"
set "PROVIDER=%~3"

if "%SUT%"=="" ( echo [ERR ] SUT is required & exit /b 2 )
if "%PROVIDER%"=="" ( echo [ERR ] PROVIDER is required & exit /b 2 )

set "SELF_DIR=%~dp0"
for %%# in ("%SELF_DIR%\..\..\") do set "ROOT=%%~f#"
if "%ROOT:~-1%"=="\" set "ROOT=%ROOT:~0,-1%"

set "PY=.venv\Scripts\python.exe"

rem Locate DSL (SUTs first, then RWs)
set "DSL=%ROOT%\models\hls\SUTs\%SUT%\dsl_map.json"
if not exist "%DSL%" (
  set "DSL=%ROOT%\models\hls\RWs\%SUT%\dsl_map.json"
)
if not exist "%DSL%" (
  echo [ERR ] DSL not found: %ROOT%\models\hls\SUTs\%SUT%\dsl_map.json ^| %ROOT%\models\hls\RWs\%SUT%\dsl_map.json
  exit /b 3
)

if /I "%MODE%"=="NONDET" (
  set "GOLD=%ROOT%\artifacts\hls_nondet\%PROVIDER%\%SUT%\hls_nondet_gold.json"
  set "OUTFILE=stories_hls_nondet.js"
) else (
  set "GOLD=%ROOT%\artifacts\hls_det\%PROVIDER%\%SUT%\hls_det_gold.json"
  set "OUTFILE=stories_hls_det.js"
)

if not exist "%GOLD%" (
  echo [ERR ] GOLD not found: %GOLD%
  exit /b 4
)

set "OUTDIR=%ROOT%\%SUT%\spec\js"
if not exist "%OUTDIR%" mkdir "%OUTDIR%" >nul 2>&1

echo --------------------------------------------
echo [RUN ] %MODE%: %SUT% (%PROVIDER%)
echo [IN  ] GOLD: %GOLD%
echo [IN  ] DSL : %DSL%
echo [OUT ] Dir : %OUTDIR%
echo --------------------------------------------

"%PY%" -u "%ROOT%\scripts\hls\emit_stories_from_gold.py" ^
  --sut "%SUT%" ^
  --gold "%GOLD%" ^
  --dsl "%DSL%" ^
  --out "%OUTDIR%\%OUTFILE%"

if errorlevel 1 (
  echo [ERR ] emitter failed for %MODE% %SUT% (%PROVIDER%)
  exit /b 5
)

rem Convenience alias (latest wins)
copy /Y "%OUTDIR%\%OUTFILE%" "%OUTDIR%\stories_hls.js" >nul

echo [OK ] stories emitted -> %OUTDIR%\%OUTFILE%
exit /b 0
