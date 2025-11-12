@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ============================================================================
rem emit_all_from_list.bat
rem Usage:
rem   scripts\readable\emit_all_from_list.bat  <list.txt>  <provider|all>  <det|nondet|both>  [max_stories=0]
rem
rem Example:
rem   scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  both
rem ============================================================================

rem ---- Resolve repo root ----
set "REPO=%~dp0..\.."
for %%# in ("%REPO%") do set "REPO=%%~f#"

rem ---- Parse args ----
if "%~1"=="" (
  echo [ERR] Missing LIST file path
  exit /b 2
)
set "LIST=%~1"
set "PROVIDER_ARG=%~2"
if "%PROVIDER_ARG%"=="" set "PROVIDER_ARG=all"
set "KIND=%~3"
if "%KIND%"=="" set "KIND=both"
set "MAX_STORIES=%~4"
if "%MAX_STORIES%"=="" set "MAX_STORIES=0"

rem ---- Python exe ----
set "PY=%REPO%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

set "EMITTER=%REPO%\scripts\readable\emit_hls_all_in_one.py"

echo [DBG] Python="%PY%"
echo [DBG] Emitter="scripts\readable\emit_hls_all_in_one.py"  Type="ALLINONE"
echo Using LIST: %LIST%
echo Providers focus: %PROVIDER_ARG%
echo Modes: %KIND%
echo Max stories: %MAX_STORIES%
echo.

if not exist "%LIST%" (
  echo [ERR] LIST not found: %LIST%
  exit /b 2
)

rem ---- Helpers ----
set "MODELS_SUTS=%REPO%\models\hls\SUTs"
set "MODELS_RWS=%REPO%\models\hls\RWs"
set "ANALYSIS=%REPO%\artifacts\analysis"

rem ---------------------------------------------------------------------------
rem Iterate SUT/RW names from list, skipping comments and empty lines
rem ---------------------------------------------------------------------------
echo [DBG] Starting scan of "%LIST%"
for /f "usebackq eol=# tokens=* delims=" %%S in ("%LIST%") do (
  set "NAME=%%~S"
  if not "!NAME!"=="" (
    call :PROCESS_ONE "!NAME!"
  )
)
echo.
echo ALL READABLES DONE
exit /b 0

:PROCESS_ONE
set "NAME=%~1"
echo.
echo ============================================
echo Processing "%NAME%"
echo ============================================

call :DO_ONE_PROVIDER "7_suts_llm_provider" "%NAME%"
call :DO_ONE_PROVIDER "real_world_llm_provider" "%NAME%"
exit /b 0

:DO_ONE_PROVIDER
set "PROV=%~1"
set "NAME=%~2"

rem Respect provider focus arg
if /i not "%PROVIDER_ARG%"=="all" if /i not "%PROVIDER_ARG%"=="%PROV%" exit /b 0

for %%M in (nondet det) do (
  if /i "%KIND%"=="both"  call :DO_ONE_MODE "%PROV%" "%NAME%" "%%M"
  if /i "%KIND%"=="det"   if /i "%%M"=="det"   call :DO_ONE_MODE "%PROV%" "%NAME%" "%%M"
  if /i "%KIND%"=="nondet" if /i "%%M"=="nondet" call :DO_ONE_MODE "%PROV%" "%NAME%" "%%M"
)
exit /b 0

:DO_ONE_MODE
set "PROV=%~1"
set "NAME=%~2"
set "MODE=%~3"

set "SUFFIX=hls_%MODE%"
set "SUT_DIR=%REPO%\artifacts\%SUFFIX%\%PROV%\%NAME%"
set "GOLD=%SUT_DIR%\hls_gold.json"
set "GRAPH=%ANALYSIS%\%PROV%\%NAME%\graph.json"

rem Choose DSL map location by provider (models first, then artifacts/analysis fallback)
if /i "%PROV%"=="real_world_llm_provider" (
  set "DSLMAP=%MODELS_RWS%\%NAME%\dsl_map.json"
) else (
  set "DSLMAP=%MODELS_SUTS%\%NAME%\dsl_map.json"
)

echo [DBG] Provider="%PROV%"  SUT="%NAME%"
echo [DBG] SUT_DIR="%SUT_DIR%"
echo [DBG] JSON   ="%GOLD%"

if exist "%GRAPH%" (
  set "GRAPH_ARG=--graph ""%GRAPH%"""
) else (
  set "GRAPH_ARG="
)

set "DSLMAP_ARG="
if exist "%DSLMAP%" (
  echo     using --dsl_map "%DSLMAP%"
  set "DSLMAP_ARG=--dsl_map ""%DSLMAP%"""
) else (
  set "ALT_DSL=%ANALYSIS%\%PROV%\%NAME%\dsl_map.json"
  if exist "%ALT_DSL%" (
    echo     using --dsl_map "%ALT_DSL%"
    set "DSLMAP_ARG=--dsl_map ""%ALT_DSL%"""
  ) else (
    echo [WARN] DSL map not found at "%DSLMAP%" or "%ALT_DSL%" (may fall back to seed stories)
  )
)

if not exist "%GOLD%" (
  echo [SKIP] %PROV%\%NAME% - no %MODE% gold at "%GOLD%"
  exit /b 0
)

set "OUT_READABLE=%SUT_DIR%\readable"
mkdir "%OUT_READABLE%" >nul 2>nul

"%PY%" "%EMITTER%" --gold "%GOLD%" --out_dir "%OUT_READABLE%" %GRAPH_ARG% %DSLMAP_ARG% --max_stories %MAX_STORIES%
exit /b 0
