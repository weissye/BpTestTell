@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM === Usage: build_hls_gold_det_for_list.bat <list.txt> <provider> ===

if "%~1"==""  (echo [ERR] Missing list file & exit /b 2)
if "%~2"==""  (echo [ERR] Missing provider & exit /b 2)

set "LIST=%~1"
set "PROV=%~2"

REM Repo root (this .bat is under scripts\hls\)
pushd "%~dp0..\.." >nul
set "ROOT=%CD%"
set "PY=%ROOT%\.venv\Scripts\python.exe"

echo ============================================
echo DET HLS GOLD from graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROV%
echo ============================================

REM Choose DSL base per provider
if /i "%PROV%"=="7_suts_llm_provider" (
  set "DSL_BASE=%ROOT%\models\hls\SUTs"
) else if /i "%PROV%"=="real_world_llm_provider" (
  set "DSL_BASE=%ROOT%\models\hls\RWs"
) else (
  echo [ERR] Unknown provider "%PROV%"
  popd & exit /b 3
)

set /a OK=0
set /a SKIP=0
set /a ERR=0

for /f "usebackq delims=" %%S in ("%LIST%") do call :PROCESS "%%~S"

echo --------------------------------------------
echo DONE. OK=%OK% SKIP=%SKIP% ERR=%ERR%
popd
exit /b 0

:PROCESS
setlocal EnableDelayedExpansion
set "S=%~1"
if not defined S goto :eof

REM trim leading spaces
for /f "tokens=* delims= " %%A in ("!S!") do set "S=%%A"

REM skip empty / comment lines
if "!S!"=="" goto :eof
if "!S:~0,1!"=="#" goto :eof
if "!S:~0,1!"==";" goto :eof

set "GRAPH=%ROOT%\artifacts\analysis\%PROV%\!S!\graph.json"
set "DSL=%DSL_BASE%\!S!\dsl_map.json"
set "OUT=%ROOT%\artifacts\hls_det\%PROV%\!S!\hls_gold.json"

echo [RUN ] det GOLD: !S! ^(%PROV%^) 
if not exist "!GRAPH!" (
  echo   [SKIP] missing graph: "!GRAPH!"
  endlocal & set /a SKIP+=1 & goto :eof
)
if not exist "!DSL!" (
  echo   [SKIP] missing DSL:   "!DSL!"
  endlocal & set /a SKIP+=1 & goto :eof
)

mkdir "%ROOT%\artifacts\hls_det\%PROV%\!S!" >nul 2>&1

"%PY%" -u "%ROOT%\scripts\hls\build_hls_gold_det.py" ^
  --provider "%PROV%" ^
  --sut "!S!" ^
  --dsl "!DSL!" ^
  --graph "!GRAPH!" ^
  --out "!OUT!" 

if errorlevel 1 (
  echo   [ERR ] python failed for !S!
  endlocal & set /a ERR+=1 & goto :eof
) else (
  echo   [OK  ] wrote "!OUT!"
  endlocal & set /a OK+=1 & goto :eof
)
