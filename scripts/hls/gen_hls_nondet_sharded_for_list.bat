@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ================================================================================
rem gen_hls_nondet_sharded_for_list.bat  (robust, with deep debug)
rem - Reads SUTs from a list and calls gen_hls_nondet.bat for each SUT.
rem - Provider is detected by checking which hls_det_gold.json exists.
rem
rem Env:
rem   HLS_DEBUG=1      verbose debug printing
rem   HLS_DRYRUN=1     print commands, do not execute
rem   HLS_SHARDS       default 12
rem   HLS_NONDET_MAX   default 0
rem   HLS_SEED         default 911177
rem ================================================================================

rem ----- resolve python (informational) -----
set "PY=python"
if defined VIRTUAL_ENV if exist "%VIRTUAL_ENV%\Scripts\python.exe" set "PY=%VIRTUAL_ENV%\Scripts\python.exe"

rem ----- inputs & defaults -----
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

if not defined HLS_SHARDS     set "HLS_SHARDS=12"
if not defined HLS_NONDET_MAX set "HLS_NONDET_MAX=0"
if not defined HLS_SEED       set "HLS_SEED=911177"

set "GEN_BAT=%~dp0gen_hls_nondet.bat"

echo ============================================
echo HLS-NONDET (sharded) from: "%LIST%"
echo CWD: %CD%
echo Using: %PY%
echo SHARDS=%HLS_SHARDS%  MAX=%HLS_NONDET_MAX%  SEED=%HLS_SEED%
echo Generator: %GEN_BAT%
echo ============================================

if not exist "%LIST%" (
  echo [ERR ] list not found: %LIST%
  exit /b 1
)
if not exist "%GEN_BAT%" (
  echo [ERR ] generator BAT not found: %GEN_BAT%
  exit /b 1
)

if defined HLS_DEBUG (
  echo [DBG ] where gen_hls_nondet_sharded_for_list.bat:
  where gen_hls_nondet_sharded_for_list.bat 2>nul
  echo [DBG ] where gen_hls_nondet.bat:
  where gen_hls_nondet.bat 2>nul
  echo [DBG ] where python:
  where python 2>nul

  echo [DBG ] Dumping "%LIST%" with line numbers:
  for /f "usebackq tokens=* delims=" %%X in (`findstr /n /r "^" "%LIST%"`) do echo   [DBG] %%X
)

echo [DBG ] Entering generation loop...

set /a __TOT=0, __BUILT=0, __SKIP=0, __ERR=0

rem IMPORTANT: specify eol to disable default eol=; swallowing
for /f "usebackq eol=~ tokens=* delims=" %%L in ("%LIST%") do (
  call :PROCESS "%%L"
)

echo.
echo [SUM ] total=%__TOT%  built=%__BUILT%  skip=%__SKIP%  err=%__ERR%
echo [DONE] gen_hls_nondet_sharded_for_list.bat finished.
exit /b 0


:PROCESS
setlocal EnableDelayedExpansion
set "LINE=%~1"
if defined HLS_DEBUG echo [DBG ] PROCESS start: RAW="!LINE!"

rem ----- handle blanks and comment/header lines (with reasons) -----
if "!LINE!"=="" (
  if defined HLS_DEBUG echo [DBG ]   reason=blank line
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)

set "FIRST=!LINE:~0,1!"
if "!FIRST!"=="#" (
  if defined HLS_DEBUG echo [DBG ]   reason=comment starts with '#'
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)
if "!FIRST!"==";" (
  if defined HLS_DEBUG echo [DBG ]   reason=comment starts with ';'
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)
if "!FIRST!"=="=" (
  if defined HLS_DEBUG echo [DBG ]   reason=section header starts with '='
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)

rem ----- parse first token as SUT -----
set "SUT="
for /f "tokens=1 delims=,;#() " %%A in ("!LINE!") do set "SUT=%%~A"
if not defined SUT (
  if defined HLS_DEBUG echo [DBG ]   reason=could not parse SUT token
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)

rem ----- detect provider by probing hls_det_gold.json -----
set "P1=artifacts\hls_det\7_suts_llm_provider\!SUT!\hls_det_gold.json"
set "P2=artifacts\hls_det\real_world_llm_provider\!SUT!\hls_det_gold.json"

if defined HLS_DEBUG (
  echo [DBG ]   SUT=!SUT!
  echo [DBG ]   probe P1="!P1!"
  if exist "!P1!" (echo [DBG ]     P1 exists) else (echo [DBG ]     P1 missing)
  echo [DBG ]   probe P2="!P2!"
  if exist "!P2!" (echo [DBG ]     P2 exists) else (echo [DBG ]     P2 missing)
)

set "PROVIDER="
if exist "!P1!" set "PROVIDER=7_suts_llm_provider"
if not defined PROVIDER if exist "!P2!" set "PROVIDER=real_world_llm_provider"

if not defined PROVIDER (
  echo [SKIP] !SUT!  reason=no hls_det_gold under either provider
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)

set "HLSDET=artifacts\hls_det\!PROVIDER!\!SUT!\hls_det_gold.json"
set "OUTDIR=artifacts\hls_nondet\!PROVIDER!\!SUT!"
set "OUTJSON=!OUTDIR!\hls_nondet_gold.json"

echo [LOOP] SUT=!SUT!  PROVIDER=!PROVIDER!
echo [GEN ] !SUT!
echo   [IN ] !HLSDET!
echo   [OUT] !OUTJSON!
if defined HLS_DEBUG echo   [ENV] HLS_SHARDS=!HLS_SHARDS!  HLS_NONDET_MAX=!HLS_NONDET_MAX!  HLS_SEED=!HLS_SEED!

if defined HLS_DRYRUN (
  echo   [CMD] call "%GEN_BAT%" "!SUT!" "!PROVIDER!"
  endlocal & (
    set /a __TOT+=1
    set /a __SKIP+=1
  ) & goto :EOF
)

if not exist "!OUTDIR!" (
  if defined HLS_DEBUG echo   [MKDIR] !OUTDIR!
  mkdir "!OUTDIR!" >nul 2>&1
)

echo   [CALL] "%GEN_BAT%" "!SUT!" "!PROVIDER!"
call "%GEN_BAT%" "!SUT!" "!PROVIDER!"
set "RC=!errorlevel!"
echo   [RET ] errorlevel=!RC!

if not "!RC!"=="0" (
  echo [ERR ] generator failed for !SUT! rc=!RC!
  endlocal & (
    set /a __TOT+=1
    set /a __ERR+=1
  ) & goto :EOF
)

if exist "!OUTJSON!" (
  echo [OK  ] !OUTJSON!
  endlocal & (
    set /a __TOT+=1
    set /a __BUILT+=1
  ) & goto :EOF
)

echo [WARN] expected output missing: !OUTJSON!
endlocal & (
  set /a __TOT+=1
  set /a __ERR+=1
) & goto :EOF
