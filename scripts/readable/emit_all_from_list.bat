@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ============================================================
rem emit_all_from_list.bat  — robust, header-aware, no-ELSE-traps
rem Usage:
rem   scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  [providers=all|7|rw]  [modes=both|det|nondet]  [max_stories=0]
rem Defaults: providers=all, modes=both, max_stories=0 (no cap)
rem Output: readable\<provider>\<sut>\stories_hls.det.js / stories_hls.nondet.js
rem ============================================================

set "LIST=%~1"
if not defined LIST set "LIST=config\suts_and_rw.txt"
if not exist "%LIST%" (
  echo [ERR ] List file not found: "%LIST%"
  exit /b 1
)

set "PROV_FILTER=%~2"
set "MODESEL=%~3"
set "MAX_STORIES=%~4"

if not defined PROV_FILTER set "PROV_FILTER=all"
if not defined MODESEL    set "MODESEL=both"
if not defined MAX_STORIES set "MAX_STORIES=0"

rem Python & emitter
set "PY=.\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
set "EMITTER=scripts\readable\emit_hls_all_in_one.py"

echo  [DBG] Python="%PY%"
echo  [DBG] Emitter="%EMITTER%"  Type="ALLINONE"
echo  Using LIST: %LIST%
echo  Providers focus: %PROV_FILTER%
echo  Modes: %MODESEL%
echo  Max stories: %MAX_STORIES%
echo.

set "SECTION="
set "PROVIDER="

for /f usebackq^ tokens^=*^ delims^= %%L in ("%LIST%") do (
  set "RAW=%%L"

  rem --- normalize line, strip tabs, BOM variants, and trim leading spaces
  set "L=!RAW:	= !"
  set "L=!L:ï»¿=!"
  set "L=!L:∩╗┐=!"
  for /f "tokens=* delims= " %%Z in ("!L!") do set "L=%%Z"

  rem --- skip blanks
  if "!L!"=="" (
    rem noop
  ) else if "!L:~0,1!"==";" (
    rem --- header line switches provider context
    set "HEADER=!L!"
    if /i not "!HEADER:7_suts_llm_provider=!"=="!HEADER!" (
      set "PROVIDER=7_suts_llm_provider"
      set "SECTION=SUTs"
      echo [DBG] => Section SUTs (7_suts_llm_provider)
    ) else if /i not "!HEADER:real_world_llm_provider=!"=="!HEADER!" (
      set "PROVIDER=real_world_llm_provider"
      set "SECTION=RWs"
      echo [DBG] => Section RWs (real_world_llm_provider)
    ) else (
      echo [DBG] (ignored header) !HEADER!
    )
  ) else (
    rem --- SUT line
    set "SUT=!L!"

    if not defined PROVIDER (
      echo [WARN] No provider section yet. Skipping "!SUT!".
    ) else (
      rem --- provider filtering
      set "DO_THIS="
      if /i "%PROV_FILTER%"=="all" set "DO_THIS=1"
      if /i "%PROV_FILTER%"=="7"  if /i "!PROVIDER!"=="7_suts_llm_provider" set "DO_THIS=1"
      if /i "%PROV_FILTER%"=="rw" if /i "!PROVIDER!"=="real_world_llm_provider" set "DO_THIS=1"

      if defined DO_THIS (
        if /i "!SECTION!"=="SUTs" (
          set "DSL=models\hls\SUTs\!SUT!\dsl_map.json"
        ) else (
          set "DSL=models\hls\RWs\!SUT!\dsl_map.json"
        )

        rem --- mode selection
        set "DO_DET=" & set "DO_ND="
        if /i "%MODESEL%"=="det" set "DO_DET=1"
        if /i "%MODESEL%"=="nondet" set "DO_ND=1"
        if /i "%MODESEL%"=="both" set "DO_DET=1" & set "DO_ND=1"

        if defined DO_DET (
          set "JSON=artifacts\hls_det\!PROVIDER!\!SUT!\hls_gold.json"
          set "OUTJS=readable\!PROVIDER!\!SUT!\stories_hls.det.js"
          call :emit_one "!SUT!" "!PROVIDER!" "!DSL!" "!JSON!" "!OUTJS!" "%MAX_STORIES%"
        )

        if defined DO_ND (
          set "JSON=artifacts\hls_nondet\!PROVIDER!\!SUT!\hls_gold.json"
          set "OUTJS=readable\!PROVIDER!\!SUT!\stories_hls.nondet.js"
          call :emit_one "!SUT!" "!PROVIDER!" "!DSL!" "!JSON!" "!OUTJS!" "%MAX_STORIES%"
        )
      ) else (
        echo [DBG] (filtered) !PROVIDER!\!SUT!
      )
    )
  )
)

echo --------------------------------------------
echo DONE.
endlocal & exit /b 0

:emit_one
setlocal EnableDelayedExpansion
set "SUT=%~1"
set "PROVIDER=%~2"
set "DSL=%~3"
set "JSON=%~4"
set "OUTJS=%~5"
set "MAX_STORIES=%~6"

echo [RUN ] !PROVIDER!\!SUT!
echo [DBG]   JSON="!JSON!"
echo [DBG]   DSL ="!DSL!"
echo [DBG]   OUT ="!OUTJS!"

if not exist "!JSON!" (
  echo [SKIP] !PROVIDER!\!SUT! - gold not found at "!JSON!"
  endlocal & exit /b 0
)

for %%D in ("!OUTJS!") do if not exist "%%~dpD" mkdir "%%~dpD" >nul 2>&1

set "MSFLAG="
if not "%MAX_STORIES%"=="0" set "MSFLAG=--max_stories %MAX_STORIES%"

if exist "!DSL!" (
  "%PY%" "%EMITTER%" --json "!JSON!" --provider "!PROVIDER!" --sut "!SUT!" --dsl_map "!DSL!" --out "!OUTJS!" %MSFLAG%
) else (
  echo [WARN] DSL map not found at "!DSL!" (will rely on seed stories if supported)
  "%PY%" "%EMITTER%" --json "!JSON!" --provider "!PROVIDER!" --sut "!SUT!" --out "!OUTJS!" %MSFLAG%
)

if errorlevel 1 (
  echo [ERR ] emitter failed for !PROVIDER!\!SUT!
) else (@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ============================================================
rem emit_all_from_list.bat — robust, header-aware, **NO ELSE** anywhere
rem Usage:
rem   scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  [providers=all|7|rw]  [modes=both|det|nondet]  [max_stories=0]
rem Defaults: providers=all, modes=both, max_stories=0
rem Outputs under: readable\<provider>\<sut>\stories_hls.det.js / stories_hls.nondet.js
rem ============================================================

set "LIST=%~1"
if not defined LIST set "LIST=config\suts_and_rw.txt"
if not exist "%LIST%" (
  echo [ERR ] List file not found: "%LIST%"
  exit /b 1
)

set "PROV_FILTER=%~2"
set "MODESEL=%~3"
set "MAX_STORIES=%~4"

if not defined PROV_FILTER set "PROV_FILTER=all"
if not defined MODESEL    set "MODESEL=both"
if not defined MAX_STORIES set "MAX_STORIES=0"

rem Python & emitter
set "PY=.\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
set "EMITTER=scripts\readable\emit_hls_all_in_one.py"

echo( [DBG] Python="%PY%"
echo( [DBG] Emitter="%EMITTER%"  Type="ALLINONE"
echo( Using LIST: %LIST%
echo( Providers focus: %PROV_FILTER%
echo( Modes: %MODESEL%
echo( Max stories: %MAX_STORIES%
echo(

set "SECTION="
set "PROVIDER="

for /f usebackq^ tokens^=*^ delims^= %%L in ("%LIST%") do (
  set "RAW=%%L"

  rem --- normalize: remove tabs, common BOMs, trim leading spaces
  set "L=!RAW:	= !"
  set "L=!L:ï»¿=!"
  set "L=!L:∩╗┐=!"
  for /f "tokens=* delims= " %%Z in ("!L!") do set "L=%%Z"

  rem --- skip blank lines
  if "!L!"=="" goto :_nextline

  rem --- header line begins with ';'
  if not "!L:~0,1!"==";" goto :_sutline

  set "HEADER=!L!"
  rem detect 7_suts header
  set "IS7="
  echo(!HEADER!| findstr /i /c:"7_suts_llm_provider" >nul && set "IS7=1"
  if defined IS7 (
    set "PROVIDER=7_suts_llm_provider"
    set "SECTION=SUTs"
    echo( [DBG] => Section SUTs (7_suts_llm_provider)
    goto :_nextline
  )

  rem detect real_world header
  set "ISRW="
  echo(!HEADER!| findstr /i /c:"real_world_llm_provider" >nul && set "ISRW=1"
  if defined ISRW (
    set "PROVIDER=real_world_llm_provider"
    set "SECTION=RWs"
    echo( [DBG] => Section RWs (real_world_llm_provider)
    goto :_nextline
  )

  echo( [DBG] (ignored header) !HEADER!
  goto :_nextline

:_sutline
  set "SUT=!L!"

  if not defined PROVIDER (
    echo( [WARN] No provider section yet. Skipping "!SUT!".
    goto :_nextline
  )

  rem --- provider filtering
  set "DO_THIS="
  if /i "%PROV_FILTER%"=="all" set "DO_THIS=1"
  if /i "%PROV_FILTER%"=="7"  if /i "!PROVIDER!"=="7_suts_llm_provider" set "DO_THIS=1"
  if /i "%PROV_FILTER%"=="rw" if /i "!PROVIDER!"=="real_world_llm_provider" set "DO_THIS=1"
  if not defined DO_THIS (
    echo( [DBG] (filtered) !PROVIDER!\!SUT!
    goto :_nextline
  )

  rem --- decide DSL path by section (no ELSE)
  set "DSL="
  if /i "!SECTION!"=="SUTs" set "DSL=models\hls\SUTs\!SUT!\dsl_map.json"
  if /i "!SECTION!"=="RWs"  set "DSL=models\hls\RWs\!SUT!\dsl_map.json"

  rem --- modes
  set "DO_DET=" & set "DO_ND="
  if /i "%MODESEL%"=="det"    set "DO_DET=1"
  if /i "%MODESEL%"=="nondet" set "DO_ND=1"
  if /i "%MODESEL%"=="both"   set "DO_DET=1" & set "DO_ND=1"

  rem det
  if defined DO_DET (
    set "JSON=artifacts\hls_det\!PROVIDER!\!SUT!\hls_gold.json"
    set "OUTJS=readable\!PROVIDER!\!SUT!\stories_hls.det.js"
    call :emit_one "!SUT!" "!PROVIDER!" "!DSL!" "!JSON!" "!OUTJS!" "%MAX_STORIES%"
  )

  rem nondet
  if defined DO_ND (
    set "JSON=artifacts\hls_nondet\!PROVIDER!\!SUT!\hls_gold.json"
    set "OUTJS=readable\!PROVIDER!\!SUT!\stories_hls.nondet.js"
    call :emit_one "!SUT!" "!PROVIDER!" "!DSL!" "!JSON!" "!OUTJS!" "%MAX_STORIES%"
  )

:_nextline
)

echo --------------------------------------------
echo DONE.
endlocal & exit /b 0


:emit_one
setlocal EnableDelayedExpansion
set "SUT=%~1"
set "PROVIDER=%~2"
set "DSL=%~3"
set "JSON=%~4"
set "OUTJS=%~5"
set "MAX_STORIES=%~6"

echo( [RUN ] !PROVIDER!\!SUT!
echo( [DBG]   JSON="!JSON!"
echo( [DBG]   DSL ="!DSL!"
echo( [DBG]   OUT ="!OUTJS!"

if not exist "!JSON!" (
  echo( [SKIP] !PROVIDER!\!SUT! - gold not found at "!JSON!"
  endlocal & exit /b 0
)

for %%D in ("!OUTJS!") do if not exist "%%~dpD" mkdir "%%~dpD" >nul 2>&1

set "HAS_DSL="
if exist "!DSL!" set "HAS_DSL=1"

set "CMD=%PY% "%EMITTER%" --json "!JSON!" --provider "!PROVIDER!" --sut "!SUT!" --out "!OUTJS!""
if defined HAS_DSL set "CMD=!CMD! --dsl_map "!DSL!""
if not defined HAS_DSL echo( [WARN] DSL map not found at "!DSL!" (falling back if supported)
if not "%MAX_STORIES%"=="0" set "CMD=!CMD! --max_stories %MAX_STORIES%"

call !CMD!
if errorlevel 1 (
  echo( [ERR ] emitter failed for !PROVIDER!\!SUT!
) 
if not errorlevel 1 (
  echo( [OK  ] wrote "!OUTJS!"
)

endlocal & exit /b 0

)
endlocal & exit /b 0
