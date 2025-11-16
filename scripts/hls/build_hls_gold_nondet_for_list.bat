@echo off
setlocal EnableExtensions EnableDelayedExpansion
if "%~2"=="" (
  echo Usage: %~nx0 ^<list.txt^> ^<provider^>
  exit /b 2
)
set LIST=%~1
set PROVIDER=%~2
set ROOT=%~dp0..\..
set PY=%ROOT%\.venv\Scripts\python.exe
if not exist "%PY%" set "PY=python"

echo ============================================
echo NONDET HLS GOLD from graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROVIDER%
echo ============================================
for /f "usebackq delims=" %%S in (`findstr /R /V /C:"^$" /C:"^#.*" /C:"^;.*" "%LIST%"`) do (
  set SUT=%%S
  rem Default to RWs path; override for SUTs
  
  set "DSL=%ROOT%\models\hls\RWs\%%S\dsl_map.json"
  if /I "%PROVIDER%"=="7_suts_llm_provider" set "DSL=%ROOT%\models\hls\SUTs\%%S\dsl_map.json"
  
  set GRAPH=%ROOT%\artifacts\analysis\%PROVIDER%\%%S\graph.json
  set OUT=%ROOT%\artifacts\hls_nondet\%PROVIDER%\%%S\hls_gold.json
  echo [RUN ] NONDET GOLD: %%S - %PROVIDER%
  "%PY%" -u "%ROOT%\scripts\hls\build_hls_gold_nondet.py" --provider "%PROVIDER%" --sut "%%S" --graph "!GRAPH!" --dsl "!DSL!" --out "!OUT!"
)
echo [DONE] build_hls_gold_nondet_for_list.bat
endlocal
