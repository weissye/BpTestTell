@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM Usage:
REM   scripts\analysis\build_dsl_from_graph_for_list.bat [listPath] [provider]
REM     listPath : defaults to config\suts_and_rw.txt
REM     provider : 7_suts_llm_provider | real_world_llm_provider | both (default: both)

set "LIST=%~1"
if not defined LIST set "LIST=config\suts_and_rw.txt"

set "WHICH=%~2"
if not defined WHICH set "WHICH=both"

REM Resolve repo root from this script's folder
for %%I in ("%~dp0..\..") do set "ROOT=%%~fI"
pushd "%ROOT%" 1>nul 2>nul
if errorlevel 1 (
  echo [ERR ] Could not cd to repo root from "%~dp0"
  exit /b 1
)

REM Prefer venv python if present
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

echo ============================================
echo Build DSL maps FROM graphs
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo WHICH: %WHICH%
echo ============================================

set /a COUNT_OK=0, COUNT_SKIP=0, COUNT_ERR=0

for %%P in (7_suts_llm_provider real_world_llm_provider) do (
  set "DO="
  if /I "%WHICH%"=="both"  set "DO=1"
  if /I "%WHICH%"=="%%P"   set "DO=1"
  if defined DO (
    echo [PROVIDER] %%P

    REM Filter: drop blanks and #/; comments
    for /f "usebackq delims=" %%S in (`
      findstr /R /V /C:"^$" /C:"^#.*" /C:"^;.*" "%LIST%"
    `) do (
      set "SUT=%%~S"
      set "GRAPH=%ROOT%\artifacts\analysis\%%P\!SUT!\graph.json"

      REM choose OUTBASE without ELSE
      set "OUTBASE=%ROOT%\models\hls\RWs"
      if /I "%%P"=="7_suts_llm_provider" set "OUTBASE=%ROOT%\models\hls\SUTs"

      set "OUTDIR=!OUTBASE!\!SUT!"
      set "OUTMAP=!OUTDIR!\dsl_map.json"

      if not exist "!GRAPH!" (
        echo   [SKIP] !SUT! - missing graph: "!GRAPH!"
        set /a COUNT_SKIP+=1
      )

      if exist "!GRAPH!" (
        if not exist "!OUTDIR!" mkdir "!OUTDIR!" 1>nul 2>nul
        echo   [RUN ] !SUT! -> "!OUTMAP!"
        "%PY%" -u "%ROOT%\scripts\analysis\build_dsl_map.py" ^
          --provider "%%P" --sut "!SUT!" ^
          --graph "!GRAPH!" ^
          --out   "!OUTMAP!"
        set "rc=!errorlevel!"
        if not "!rc!"=="0" (
          echo   [ERR ] !SUT! (provider %%P, rc=!rc!)
          set /a COUNT_ERR+=1
        )
        if "!rc!"=="0" (
          echo   [OK  ] !SUT! (provider %%P)
          set /a COUNT_OK+=1
        )
      )
    )
  )
)

echo --------------------------------------------
echo DONE. OK=%COUNT_OK% SKIP=%COUNT_SKIP% ERR=%COUNT_ERR%
popd
endlocal
