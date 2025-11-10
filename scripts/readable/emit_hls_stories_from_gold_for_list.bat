@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ---------------------------------------------------------
REM Minimal emitter wrapper (tiny, robust)
REM Usage:
REM   scripts\readable\emit_hls_stories_from_gold_for_list.bat <list> <provider> [mode]
REM     <list>     = e.g., config\suts_and_rw.txt
REM     <provider> = 7_suts_llm_provider | real_world_llm_provider
REM     [mode]     = det | nondet   (default: nondet)
REM Output:
REM   artifacts\hls_<mode>\<provider>\<sut>\readable\stories_hls.js
REM Requires:
REM   artifacts\hls_<mode>\<provider>\<sut>\hls_gold.json
REM ---------------------------------------------------------

REM resolve repo root from this .bat (…/scripts/readable/ -> root)
for %%I in ("%~dp0\..\..") do set "ROOT=%%~fI"

set "LIST=%~1"
set "PROV=%~2"
set "MODE=%~3"
if not defined MODE set "MODE=nondet"

set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

echo [BOOT] emit_hls_stories_from_gold_for_list.bat
echo [BOOT] ROOT="%ROOT%"
echo [BOOT] LIST="%LIST%"  PROV="%PROV%"  MODE="%MODE%"
echo [BOOT] PY="%PY%"
echo.

if not defined LIST (
  echo [ERR] Missing list file path.
  exit /b 1
)
if not exist "%ROOT%\%LIST%" (
  echo [ERR] List file not found: "%ROOT%\%LIST%"
  exit /b 1
)
if /I not "%PROV%"=="7_suts_llm_provider" if /I not "%PROV%"=="real_world_llm_provider" (
  echo [ERR] Provider must be 7_suts_llm_provider or real_world_llm_provider (got "%PROV%")
  exit /b 1
)

echo ============================================
echo EMIT hls_stories.js (existing emitter)
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROV%
echo MODE : %MODE%
echo OUT  : artifacts\hls_%MODE%\%PROV%\[sut]\readable\stories_hls.js
echo ============================================
echo.

set /a OK=0, SKIP=0, ERR=0, ROW=0, KEPT=0

REM one-line FOR body; real work in :DO_SUT to avoid parser issues
for /f "usebackq tokens=* delims=" %%L in ("%ROOT%\%LIST%") do call :FILTER_AND_DO "%%L"
echo --------------------------------------------
echo DONE. OK=%OK% SKIP=%SKIP% ERR=%ERR%
if %ERR% GTR 0 (exit /b 1) else (exit /b 0)


:FILTER_AND_DO
setlocal EnableExtensions EnableDelayedExpansion
set /a ROW+=1
set "LINE=%~1"

REM trim leading spaces
for /f "tokens=* delims= " %%A in ("%LINE%") do set "LINE=%%A"
REM drop blanks / comments
if "!LINE!"==""  (endlocal & goto :eof)
if "!LINE:~0,1!"==";" (endlocal & goto :eof)

set /a KEPT+=1

REM first 7 lines belong to SUTs, rest to RWs
if /I "%PROV%"=="7_suts_llm_provider" (
  if !KEPT! GTR 7 (endlocal & goto :eof)
) else (
  if !KEPT! LEQ 7 (endlocal & goto :eof)
)

endlocal & call :DO_SUT "%LINE%"
goto :eof


:DO_SUT
setlocal EnableExtensions EnableDelayedExpansion
set "SUT=%~1"

set "GOLD=%ROOT%\artifacts\hls_%MODE%\%PROV%\%SUT%\hls_gold.json"
set "OUT=%ROOT%\artifacts\hls_%MODE%\%PROV%\%SUT%\readable\stories_hls.js"

if not exist "%GOLD%" (
  echo   [SKIP] %SUT% - missing GOLD: "%GOLD%"
  endlocal & set /a SKIP+=1 & goto :eof
)

for %%P in ("%OUT%") do if not exist "%%~dpP" mkdir "%%~dpP" >nul 2>&1
for %%P in ("%GOLD%") do set "GDIR=%%~dpP"

pushd "%GDIR%" >nul
"%PY%" -u "%ROOT%\scripts\readable\emit_hls_all_in_one.py" ^
  --sut_dir . --mode %MODE% --out "%OUT%"
set "RC=%ERRORLEVEL%"
popd >nul

if "%RC%"=="0" (
  echo   [OK ] %SUT%
  endlocal & set /a OK+=1 & goto :eof
) else (
  echo   [ERR] %SUT% rc=%RC%
  endlocal & set /a ERR+=1 & goto :eof
)
