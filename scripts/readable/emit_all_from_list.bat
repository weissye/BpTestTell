@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ==========================================================
REM  emit_all_from_list.bat
REM  Build stories_hls.js from NONDET HLS golds for a list of SUTs
REM
REM  Usage:
REM    scripts\readable\emit_all_from_list.bat [LIST] [MAX_STORIES] [PROVIDERS]
REM
REM  Defaults:
REM    LIST        = config\suts_and_rw.txt
REM    MAX_STORIES = 0        (0 = unlimited; do not cap)
REM    PROVIDERS   = 7_suts_llm_provider real_world_llm_provider
REM
REM  Notes:
REM    - Fixes the wrong graph path. Now looks at:
REM        artifacts\analysis\<provider>\<sut>\graph.json
REM    - Removes the 5-story cap by default (MAX_STORIES=0).
REM    - Still skips gracefully when a NONDET gold is missing.
REM    - Calls the existing Python: scripts\hls\emit_hls_all_in_one.py
REM ==========================================================

if "%~1"=="" (set "LIST=config\suts_and_rw.txt") else set "LIST=%~1"
if "%~2"=="" (set "MAX_STORIES=0") else set "MAX_STORIES=%~2"
if "%~3"=="" (set "PROVIDERS=7_suts_llm_provider real_world_llm_provider") else set "PROVIDERS=%~3"

echo Using LIST: %LIST%
echo Providers (nondet): %PROVIDERS%
echo Max stories: %MAX_STORIES%
echo.
echo [DBG] Starting scan of "%LIST%"

REM Read list file; ignore blank lines and lines starting with # // ;
for /f "usebackq delims=" %%L in ("%LIST%") do (
  set "LINE=%%L"
  REM trim leading spaces
  for /f "tokens=1,*" %%A in ("!LINE!") do set "FIRST=%%A"
  if not "!FIRST!"=="" (
    if not "!FIRST:~0,1!"=="#" if /i not "!FIRST:~0,2!"=="//" if not "!FIRST:~0,1!"==";" (
      set "SUT=!FIRST!"
      echo.
      echo ============================================
      echo Processing "!SUT!"
      echo ============================================

      for %%P in (%PROVIDERS%) do (
        set "PROVIDER=%%P"
        set "SUT_DIR=artifacts\hls_nondet\!PROVIDER!\!SUT!"
        set "JSON=!SUT_DIR!\hls_nondet_gold.json"
        set "OUTDIR=!SUT_DIR!\readable"
        set "OUTJS=!OUTDIR!\stories_hls.js"
        set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"

        echo [DBG] Provider="!PROVIDER!"  SUT="!SUT!"
        echo [DBG] SUT_DIR="!SUT_DIR!"
        echo [DBG] JSON   ="!JSON!"

        if not exist "!JSON!" (
          echo [SKIP] !PROVIDER!\!SUT! - no NONDET gold at "!JSON!"
        ) else (
          if not exist "!OUTDIR!" mkdir "!OUTDIR!"

          set "GFLAG="
          if exist "!GRAPH!" (
            echo     [DBG] graph="!GRAPH!"
            set "GFLAG=--graph ""!GRAPH!"""
          ) else (
            echo     [WARN] Graph not found at "!GRAPH!"
          )

          set "LFLAG="
          if not "%MAX_STORIES%"=="0" (
            set "LFLAG=--max_stories %MAX_STORIES%"
          )

          REM Use the existing Python that emits stories_hls.js from NONDET gold
          python -u scripts\hls\emit_hls_all_in_one.py --gold "!JSON!" --out "!OUTJS!" !GFLAG! !LFLAG!
        )
      )
    )
  )
)

echo.
echo ALL READABLES DONE
endlocal
