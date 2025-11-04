@echo off
setlocal EnableExtensions

REM -----------------------------------------
REM emit_all_from_list.bat  (v3: robust parsing + escaped parens)
REM -----------------------------------------

REM Resolve Python
set "PY=.\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

REM Emitter script path
set "EMITTER=scripts\readable\emit_hls_all_in_one.py"

REM Input list of SUTs
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

REM Providers to process (space-separated)
set "PROVIDERS=7_suts_llm_provider real_world_llm_provider"

REM Optional knobs via env
if "%MAX_STORIES%"=="" set "MAX_STORIES=0"
if "%PROFILE%"=="" set "PROFILE=basic"
if "%FAIL_UNDER%"=="" set "FAIL_UNDER=0"

if "%MAX_STORIES%"=="0" (
  set PER_ENTITY_FLAG=
) else (
  set PER_ENTITY_FLAG=--per_entity_max %MAX_STORIES%
)

echo [DBG] Python="%PY%"
echo [DBG] Emitter="%EMITTER%"  Type="ALLINONE"
echo Using LIST: %LIST%
echo Providers (nondet): %PROVIDERS%
echo Max stories: %MAX_STORIES%
echo.

if not exist "%LIST%" (
  echo [ERR] List file not found: "%LIST%"
  exit /b 1
)

echo [DBG] Starting scan of "%LIST%"
echo.

for /f "usebackq tokens=1 eol=# delims=,; " %%S in ("%LIST%") do (
  call :PROCESS_SUT "%%~S"
)

echo ALL READABLES DONE
exit /b 0


:PROCESS_SUT
setlocal EnableDelayedExpansion
set "SUT=%~1"

REM Trim quotes/whitespace
for /f "delims=" %%A in ("!SUT!") do set "SUT=%%~A"

REM Skip blanks and headers/separators/comments
if "!SUT!"==""  ( endlocal & goto :EOF )
if "!SUT:~0,1!"=="=" ( endlocal & goto :EOF )
if "!SUT:~0,1!"==";" ( endlocal & goto :EOF )
if "!SUT:~0,2!"=="//" ( endlocal & goto :EOF )
if /i "!SUT!"=="===" ( endlocal & goto :EOF )

echo ============================================
echo Processing "!SUT!"
echo ============================================

for %%P in (%PROVIDERS%) do (
  set "PROVIDER=%%P"
  set "SUT_DIR=artifacts\hls_nondet\!PROVIDER!\!SUT!"
  set "JSON=!SUT_DIR!\hls_nondet_gold.json"
  set "OUTJS=!SUT_DIR!\readable\stories_hls.js"

  echo [DBG] Provider="!PROVIDER!"  SUT="!SUT!"
  echo [DBG] SUT_DIR="!SUT_DIR!"
  echo [DBG] JSON   ="!JSON!"

  if exist "!JSON!" (
    if not exist "!SUT_DIR!\readable" mkdir "!SUT_DIR!\readable" >nul 2>&1

    set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"
    set "GFLAG="
    echo     [DBG] graph="!GRAPH!"
    if exist "!GRAPH!" (
      echo     using --graph "!GRAPH!"
      set "GFLAG=--graph ""!GRAPH!"""
    )

    set "DSLMAP=artifacts\analysis\!PROVIDER!\!SUT!\dsl_map.json"
    set "MFLAG="
    if exist "!DSLMAP!" (
      echo     using --dsl_map "!DSLMAP!"
      set "MFLAG=--dsl_map ""!DSLMAP!"""
    ) else (
      REM Escape parentheses inside echo:
      echo     [WARN] DSL map not found at "!DSLMAP!" ^(may fall back to seed stories^)
    )

    set "PFLAG=--profile %PROFILE%"
    set "LFLAG="
    if not "%MAX_STORIES%"=="0" set "LFLAG=--per_entity_max %MAX_STORIES%"
    set "FFLAG="
    if not "%FAIL_UNDER%"=="0" set "FFLAG=--fail_under_stories %FAIL_UNDER%"

    "%PY%" -u "%EMITTER%" ^
      --sut_dir "!SUT_DIR!" ^
      --mode nondet ^
      --out "!OUTJS!" ^
      !GFLAG! !MFLAG! !PFLAG! !LFLAG! !FFLAG!
  ) else (
    echo [SKIP] !PROVIDER!\!SUT! - no NONDET gold at "!JSON!"
  )

  echo.
)

endlocal & goto :EOF
