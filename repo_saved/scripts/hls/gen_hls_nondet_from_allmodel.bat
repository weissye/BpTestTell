@echo off
setlocal EnableExtensions DisableDelayedExpansion

rem ============================================================
rem  Generate NONDET HLS for all SUTs from a list
rem  Usage: scripts\hls\gen_hls_nondet_from_allmodel.bat  config\suts_and_rw.txt
rem ============================================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo ============================================
echo Generating NONDET for all SUTs from: %LIST%
echo CWD: %CD%
echo Python:
where python
echo ============================================

if not exist "%LIST%" (
  echo [FAIL] SUT list not found: "%LIST%"
  exit /b 1
)

for /F "usebackq delims=" %%S in ("%LIST%") do call :PROCESS_SUT "%%~S"
echo ALL NONDET DONE
exit /b 0

:PROCESS_SUT
setlocal
set "SUT=%~1"

rem Trim to first token, skip empty lines/comments
for /f "tokens=1" %%A in ("%SUT%") do set "SUT=%%~A"
if "%SUT%"=="" ( endlocal & goto :eof )
if "%SUT:~0,1%"==";" ( echo [SKIP] comment line & endlocal & goto :eof )
if "%SUT:~0,1%"=="#" ( echo [SKIP] comment line & endlocal & goto :eof )

echo [SUT ] %SUT%

call :PROCESS_PROVIDER "%SUT%" "7_suts_llm_provider"
call :PROCESS_PROVIDER "%SUT%" "real_world_llm_provider"

endlocal & goto :eof

:PROCESS_PROVIDER
setlocal
set "SUT=%~1"
set "PROVIDER=%~2"

set "HLS_DET=artifacts\hls_det\%PROVIDER%\%SUT%\hls_det_gold.json"
set "OUT=artifacts\hls_nondet\%PROVIDER%\%SUT%\hls_nondet_gold.json"
set "TRAIN=models\hls\%SUT%"

echo [DBG ] PROVIDER=%PROVIDER%  HLS_DET="%HLS_DET%"  TRAIN="%TRAIN%"  OUT="%OUT%"

if not exist "%HLS_DET%" (
  echo [SKIP] Missing HLS-DET for %PROVIDER%\%SUT%
  endlocal & goto :eof
)

rem ensure output directory exists
for %%D in ("%OUT%") do set "OUTDIR=%%~dpD"
if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo [RUN ] NONDET (%PROVIDER%\%SUT%)
python -u scripts\hls\generate_nondet_from_llm.py ^
  --sut "%SUT%" ^
  --hls_det "%HLS_DET%" ^
  --trained_model_dir "%TRAIN%" ^
  --out "%OUT%" ^
  --seed 142

set "RC=%ERRORLEVEL%"

if "%RC%"=="0" (
  echo [OK  ] %OUT%
)
if not "%RC%"=="0" (
  echo [FAIL] %PROVIDER%\%SUT% (rc=%RC%)
)

endlocal & goto :eof
