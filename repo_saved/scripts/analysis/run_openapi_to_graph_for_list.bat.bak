@echo off
setlocal ENABLEDELAYEDEXPANSION

REM ============================================================
REM Build graph.json from OpenAPI for all SUTs in a list file.
REM Usage:
REM   scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
REM Looks for OpenAPI at:
REM   packs\7_suts\<sut>\openapi.json (or .yaml)
REM   packs\realworld\<sut>\openapi.json (or .yaml)
REM Writes to:
REM   artifacts\analysis\<provider>\<sut>\graph.json
REM Providers emitted:
REM   7_suts_llm_provider, real_world_llm_provider
REM ============================================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo ============================================
echo Building graph.json from OpenAPI for SUTs in: "%LIST%"
echo CWD: %CD%
echo ============================================

if not exist "%LIST%" (
  echo [FAIL] SUT list not found: "%LIST%"
  exit /b 1
)

set "OPENAPI_7=packs\7_suts"
set "OPENAPI_RW=packs\realworld"

for /F "usebackq delims=" %%S in ("%LIST%") do (
  set "SUT=%%~S"
  if not "!SUT!"=="" (
    REM Skip comment lines starting with ';'
    if /I not "!SUT:~0,1!"==";" (
      REM Trim at first whitespace (defensive)
      for /F "delims= " %%A in ("!SUT!") do set "SUT=%%~A"

      echo [SUT ] !SUT!

      REM -------- 7_suts_llm_provider --------
      call :PROCESS_ONE "7_suts_llm_provider" "!OPENAPI_7!\!SUT!\openapi.json" "!OPENAPI_7!\!SUT!\openapi.yaml" "!SUT!"

      REM -------- real_world_llm_provider ----
      call :PROCESS_ONE "real_world_llm_provider" "!OPENAPI_RW!\!SUT!\openapi.json" "!OPENAPI_RW!\!SUT!\openapi.yaml" "!SUT!"
    )
  )
)

echo ALL GRAPHS DONE
exit /b 0

:PROCESS_ONE
REM %1 = PROVIDER
REM %2 = CANDIDATE JSON
REM %3 = CANDIDATE YAML
REM %4 = SUT
setlocal
set "PROVIDER=%~1"
set "CAND_JSON=%~2"
set "CAND_YAML=%~3"
set "SUT=%~4"

set "OPENAPI="
if exist "%CAND_JSON%" (
  set "OPENAPI=%CAND_JSON%"
) else if exist "%CAND_YAML%" (
  set "OPENAPI=%CAND_YAML%"
)

if not defined OPENAPI (
  echo [SKIP] Missing OpenAPI for %PROVIDER%\%SUT%
  endlocal & exit /b 0
)

set "OUTDIR=artifacts\analysis\%PROVIDER%\%SUT%"
if not exist "%OUTDIR%" mkdir "%OUTDIR%" >nul 2>&1

echo [RUN ] graph: %PROVIDER%\%SUT% ^<%OPENAPI%^>
python -u scripts\analysis\openapi_to_graph.py --in "%OPENAPI%" --out "%OUTDIR%\graph.json"
if errorlevel 1 (
  echo [FAIL] graph: %PROVIDER%\%SUT%
) else (
  echo [OK  ] "%OUTDIR%\graph.json"
)
endlocal & exit /b 0
