@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM ============================================================
REM emit_bpjs_for_all_hazards.bat
REM Runner for HLS emission across all SUTs (DET + NONDET) **with Auto-Hazard pack**
REM Uses: emit_hls_all_in_one_hazards.py
REM ------------------------------------------------------------
REM Usage:
REM   emit_bpjs_for_all_hazards.bat [SUT_ROOT] [MODES] [PROFILE] [PER_ENTITY_MAX] [FAIL_UNDER]
REM ============================================================

set "_HERE=%~dp0"
set "SUT_ROOT=%~1"
if "%SUT_ROOT%"=="" set "SUT_ROOT=suts\flask_impl"

set "MODES=%~2"
if "%MODES%"=="" set "MODES=det,nondet"

set "PROFILE=%~3"
if "%PROFILE%"=="" set "PROFILE=exhaustive"

set "PER_ENTITY_MAX=%~4"
if "%PER_ENTITY_MAX%"=="" set "PER_ENTITY_MAX=10"

set "FAIL_UNDER=%~5"
if "%FAIL_UNDER%"=="" set "FAIL_UNDER=0"

REM Resolve Python emitter path (hazard-enabled)
set "EMITTER=%_HERE%emit_hls_all_in_one_hazards.py"
if not exist "%EMITTER%" (
  if exist "%_HERE%..\..\emit_hls_all_in_one_hazards.py" set "EMITTER=%_HERE%..\..\emit_hls_all_in_one_hazards.py"
)
if not exist "%EMITTER%" (
  echo [ERR ] Could not find emit_hls_all_in_one_hazards.py near "%_HERE%"
  exit /b 1
)

REM Ensure @auto-hazard behavior (on by default, but we pin it explicitly)
set "HLS_HAZARD_PACK=auto"
set "HLS_HAZARD_OVR=1"
set "HLS_HAZARD_CAS=1"
set "HLS_HAZARD_WSK=1"

echo ============================================
echo [INFO] SUT_ROOT=%SUT_ROOT%
echo [INFO] MODES=%MODES%
echo [INFO] PROFILE=%PROFILE%
echo [INFO] PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo [INFO] EMITTER=%EMITTER%
echo [INFO] @auto-hazard is ENABLED  (HLS_HAZARD_PACK=%HLS_HAZARD_PACK%)
echo ============================================

for /d %%S in ("%SUT_ROOT%\*") do (
  set "SUT_DIR=%%~fS"
  set "SUT_NAME=%%~nS"
  echo(
  echo [RUN ] %%~nS (auto-hazard)

  for %%M in (%MODES%) do (
    echo    - mode=%%M
    python "%EMITTER%" ^
      --sut_dir "!SUT_DIR!" ^
      --mode %%M ^
      --profile "%PROFILE%" ^
      --per_entity_max %PER_ENTITY_MAX% ^
      --fail_under_stories %FAIL_UNDER%
    if errorlevel 1 (
      echo(    [ERR ] emitter failed for "!SUT_DIR!" (mode=%%M) ^(exit !errorlevel!^)
    )
  )
)

echo(
echo([DONE] emit_bpjs_for_all_hazards.bat finished.
exit /b 0
