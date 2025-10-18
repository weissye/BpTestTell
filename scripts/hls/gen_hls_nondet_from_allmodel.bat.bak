:: scripts\hls\gen_hls_nondet_from_allmodel.bat
@echo on
setlocal ENABLEDELAYEDEXPANSION

echo ============================================
echo Generating NONDET for all SUTs from: %~1
echo CWD: %CD%
echo Python:
where python
echo ============================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"
echo [DBG ] LIST="%LIST%"
if not exist "%LIST%" (
  echo [FAIL] SUT list not found: "%LIST%"
  exit /b 1
)

for /f "usebackq delims=" %%S in ("%LIST%") do call :PROCESS_SUT "%%~S"

echo(
echo ALL NONDET DONE
exit /b 0

:PROCESS_SUT
setlocal
set "SUT=%~1"
if "%SUT%"=="" (
  echo [SKIP] blank line
  endlocal & exit /b 0
)
if "%SUT:~0,1%"==";" (
  echo [SKIP] comment line: %SUT%
  endlocal & exit /b 0
)
for /f "delims= " %%A in ("%SUT%") do set "SUT=%%~A"
echo [SUT ] !SUT!

for %%P in (7_suts_llm_provider real_world_llm_provider) do (
  set "PROVIDER=%%P"
  set "HLS_DET=artifacts\hls_det\!PROVIDER!\!SUT!\hls_det_gold.json"
  set "OUT=artifacts\hls_nondet\!PROVIDER!\!SUT!\hls_nondet_gold.json"
  set "TRAIN=models\hls\!SUT!"
  echo [DBG ] PROVIDER=!PROVIDER!  HLS_DET="!HLS_DET!"  TRAIN="!TRAIN!"  OUT="!OUT!"

  if exist "!HLS_DET!" (
    echo [RUN ] NONDET (!PROVIDER!\!SUT!)
    call :GEN_NONDET "!SUT!" "!HLS_DET!" "!TRAIN!" "!OUT!"
    if errorlevel 1 ( echo [FAIL] !PROVIDER!\!SUT! ) ELSE ( echo [OK  ] !OUT! )
  ) ELSE (
    echo [SKIP] Missing HLS-DET for !PROVIDER!\!SUT!  ->  "!HLS_DET!"
  )
)

endlocal & exit /b 0

:GEN_NONDET
setlocal
set "SUT=%~1"
set "HLS_DET=%~2"
set "TRAIN=%~3"
set "OUT=%~4"

echo [DBG ] python -u scripts\hls\generate_nondet_from_llm.py --sut "%SUT%" --hls_det "%HLS_DET%" --trained_model_dir "%TRAIN%" --out "%OUT%" --seed 142
python -u scripts\hls\generate_nondet_from_llm.py ^
  --sut "%SUT%" ^
  --hls_det "%HLS_DET%" ^
  --trained_model_dir "%TRAIN%" ^
  --out "%OUT%" ^
  --seed 142
set "RC=%ERRORLEVEL%"
echo [DBG ] RC=%RC%
endlocal & exit /b %RC%
