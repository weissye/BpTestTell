@echo off
setlocal enabledelayedexpansion

REM ============================================================
REM Build DSL maps for every SUT listed in a file.
REM For each SUT we attempt both providers and only build if
REM the corresponding graph.json exists.
REM Usage: scripts\analysis\build_dsl_maps_for_list.bat config\suts_and_rw.txt
REM ============================================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo ============================================
echo Building DSL maps from: "%LIST%"
echo CWD: %CD%
echo ============================================

if not exist "%LIST%" (
  echo [ERR ] list file not found: %LIST%
  exit /b 1
)

for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do (
  set "LINE=%%L"
  REM skip empty and comment lines
  if not "!LINE!"=="" (
    echo.!LINE! | findstr /r "^[ 	]*#" >nul
    if errorlevel 1 (
      for %%S in (!LINE!) do (
        set "SUT=%%~S"
        call :build_for_provider "7_suts_llm_provider" "!SUT!"
        call :build_for_provider "real_world_llm_provider" "!SUT!"
        goto :eol_line
      )
    )
  )
  :eol_line
)

echo.
echo [DONE] build_dsl_maps_for_list.bat finished.
exit /b 0

:build_for_provider
set "PROV=%~1"
set "SUT=%~2"
set "GRAPH=artifacts\analysis\%PROV%\%SUT%\graph.json"

echo.
echo [SUT ] %SUT%  [PROVIDER] %PROV%
echo   [GRPH] %GRAPH%

if not exist "%GRAPH%" (
  echo   [SKIP] no graph:  %PROV%\%SUT%
  exit /b 0
)

if /I "%PROV%"=="real_world_llm_provider" (
  set "OUT=models\hls\RWs\%SUT%\dsl_map.json"
) else (
  set "OUT=models\hls\SUTs\%SUT%\dsl_map.json"
)

echo   [RUN ] python -u scripts\analysis\build_dsl_map.py --sut %SUT% --provider %PROV% --graph "%GRAPH%" --out "%OUT%"
python -u scripts\analysis\build_dsl_map.py --sut %SUT% --provider %PROV% --graph "%GRAPH%" --out "%OUT%"
if errorlevel 1 (
  echo   [ERR ] build_dsl_map.py failed for %PROV%\%SUT%
  exit /b 1
)
exit /b 0
