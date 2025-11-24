@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM =============================================================================
REM hls_build_nondet_and_stories_from_list.bat — build NONDET + stories only
REM Usage:
REM   scripts\hls\hls_build_nondet_and_stories_from_list.bat [--debug] [listfile]
REM     listfile default: config\suts_and_rw.txt
REM Env:
REM   DEBUG=1        -> verbose TRY/HIT
REM   DSL_FILE=<p>   -> optional DSL passed to gen_hls_nondet
REM   SEED_NONDET=142 (default)
REM =============================================================================

:parse_flags
if /I "%~1"=="--debug" set "DEBUG=1" & shift & goto :parse_flags

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"
if not defined SEED_NONDET set "SEED_NONDET=142"

echo(
echo Using LIST: %LIST%
if defined DEBUG echo DEBUG mode is ON
if defined DSL_FILE echo DSL_FILE=%DSL_FILE%
echo Providers searched for HLS-DET: 7_suts_llm_provider, real_world_llm_provider, 7suts_llm_provider, realworld_llm_provider
echo(

for /f "usebackq tokens=* delims=" %%S in ("%LIST%") do (
  set "NAME=%%~S"
  if not "!NAME!"=="" if not "!NAME:~0,1!"==";" call :DO_ONE
)
echo ALL DONE.
exit /b

:DO_ONE
setlocal EnableDelayedExpansion
set "SYS=!NAME!"

echo ============================================
echo Building NONDET + stories for !SYS!
echo ============================================

REM locate HLS-DET under any provider (DET/NONDET trees are irrelevant now)
set "FOUND="
for %%P in (7_suts_llm_provider real_world_llm_provider 7suts_llm_provider realworld_llm_provider) do (
  set "HDET=artifacts\hls_det\%%P\!SYS!\hls_det_gold.json"
  if defined DEBUG echo [DBG] TRY HLS-DET: "!HDET!"
  if exist "!HDET!" (
    set "PROVIDER=%%P"
    set "FOUND=1"
    goto :HAVE_DET
  )
)

if not defined FOUND (
  echo [SKIP] No HLS-DET for !SYS! (expected artifacts\hls_det\<provider>\!SYS!\hls_det_gold.json)
  echo(
  endlocal & exit /b
)

:HAVE_DET
set "HLS_DET=artifacts\hls_det\!PROVIDER!\!SYS!\hls_det_gold.json"
set "HLS_NON=artifacts\hls_nondet\!PROVIDER!\!SYS!\hls_nondet_gold.json"
set "STORIES=artifacts\hls_nondet\!PROVIDER!\!SYS!\readable\stories_hls.js"
set "MODEL=models\hls\!SYS!\model_ref.json"

if defined DEBUG (
  echo [DBG] PROVIDER=!PROVIDER!
  echo [DBG] HLS_DET=!HLS_DET!
  echo [DBG] MODEL=!MODEL!
  echo [DBG] HLS_NON=!HLS_NON!
  echo [DBG] STORIES=!STORIES!
)

if not exist "artifacts\hls_nondet\!PROVIDER!\!SYS!\readable" mkdir "artifacts\hls_nondet\!PROVIDER!\!SYS!\readable" >nul 2>&1

REM gen_hls_nondet (try with model+DSL -> model -> bare)
set "GEN_OK="

echo [RUN ] gen_hls_nondet
if defined DSL_FILE if exist "!MODEL!" (
  call scripts\hls\gen_hls_nondet.bat "!SYS!" "!HLS_DET!" "!HLS_NON!" !SEED_NONDET! "!MODEL!" "!DSL_FILE!"
  if exist "!HLS_NON!" set "GEN_OK=1"
)

if not defined GEN_OK if exist "!MODEL!" (
  call scripts\hls\gen_hls_nondet.bat "!SYS!" "!HLS_DET!" "!HLS_NON!" !SEED_NONDET! "!MODEL!"
  if exist "!HLS_NON!" set "GEN_OK=1"
)

if not defined GEN_OK (
  call scripts\hls\gen_hls_nondet.bat "!SYS!" "!HLS_DET!" "!HLS_NON!" !SEED_NONDET!
  if exist "!HLS_NON!" set "GEN_OK=1"
)

if not defined GEN_OK (
  echo [ERROR] HLS-NONDET not created: !HLS_NON!
  echo(
  endlocal & exit /b
)

echo [RUN ] emit_hls_all_in_one
call scripts\readable\emit_hls_all_in_one.bat "!HLS_NON!" "" "!STORIES!" --name "!SYS!"
if not exist "!STORIES!" (
  echo [WARN] stories not written: !STORIES!
) else (
  echo [OK  ] !STORIES!
)
echo(
endlocal & exit /b
