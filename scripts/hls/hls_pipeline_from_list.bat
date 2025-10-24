@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM ======================================================================
REM hls_pipeline_from_list.bat — robust for 7 SUTs + 10 RWs (pure CMD) with DEBUG
REM Usage:
REM   scripts\hls\hls_pipeline_from_list.bat  [list]  [roots]  [patterns]
REM     list     (default): config\suts_and_rw.txt
REM     roots    (default): artifacts\det_checked artifacts\nondet_checked
REM                        ^ You may also pass comma-separated; we normalize it.
REM     patterns (default): *_llm_gold*.json *_lle*_gold*.json
REM                        ^ You may also pass comma-separated; we normalize it.
REM Env (optional): SEED_DET (default 42), SEED_NONDET (default 142), DEBUG=1 for verbose logs
REM ======================================================================

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

set "ROOTS=%~2"
if "%ROOTS%"=="" (
  set "ROOTS=artifacts\det_checked artifacts\nondet_checked"
)

set "PATS=%~3"
if "%PATS%"=="" (
  set "PATS=*_llm_gold*.json *_lle*_gold*.json"
)

REM --- normalize comma-separated args to spaces so FOR expands them correctly ---
set "ROOTS=%ROOTS:,= %"
set "PATS=%PATS:,= %"

if not defined SEED_DET set "SEED_DET=42"
if not defined SEED_NONDET set "SEED_NONDET=142"

call :DBG "LIST=%LIST%"
call :DBG "RAW ROOTS arg=%~2"
call :DBG "RAW PATS  arg=%~3"
call :DBG "NORMALIZED ROOTS=%ROOTS%"
call :DBG "NORMALIZED PATS =%PATS%"
echo.
echo Using LIST: %LIST%
echo Searching ROOTS: %ROOTS%
echo Patterns: %PATS%
echo.

for /f "usebackq tokens=* delims=" %%S in ("%LIST%") do call :PROCESS_ONE "%%~S"
echo ALL DONE.
exit /b

:PROCESS_ONE
setlocal EnableDelayedExpansion
set "NAME=%~1"
if "!NAME!"=="" exit /b
if "!NAME:~0,1!"==";" exit /b

set "NAME_U=!NAME!"
set "NAME_H=!NAME_U:_=-!"

echo ============================================
echo Processing !NAME!
echo ============================================

set "GOLD="
set "ROOT_HIT="
set "PROV="

for %%R in (%ROOTS%) do (
  call :DBG "SEARCH ROOT=%%~R NAME_U=!NAME_U! NAME_H=!NAME_H! PATS=!PATS!"
  if not defined GOLD call :FIND_IN_ROOT "%%~R" "!NAME_U!" "!PATS!"
  if not defined GOLD call :FIND_IN_ROOT "%%~R" "!NAME_H!" "!PATS!"
)

if not defined GOLD (
  echo [SKIP] no gold under %ROOTS% for !NAME!
  echo.
  endlocal & exit /b
)

echo [FOUND] !GOLD!

REM provider = first segment after ROOT_HIT
set "REL=!GOLD:%ROOT_HIT%\=!"
for /f "tokens=1 delims=\ " %%P in ("!REL!") do set "PROV=%%P"
if "!PROV!"=="" set "PROV=unknown_provider"
call :DBG "PROVIDER=!PROV!  REL=!REL!"

set "HLS_DET=artifacts\hls_det\!PROV!\!NAME!\hls_det_gold.json"
set "HLS_NON=artifacts\hls_nondet\!PROV!\!NAME!\hls_nondet_gold.json"
set "STORIES=artifacts\hls_nondet\!PROV!\!NAME!\readable\stories_hls.js"

if not exist "artifacts\hls_det\!PROV!\!NAME!"            mkdir "artifacts\hls_det\!PROV!\!NAME!" >nul 2>&1
if not exist "artifacts\hls_nondet\!PROV!\!NAME!\readable" mkdir "artifacts\hls_nondet\!PROV!\!NAME!\readable" >nul 2>&1

echo [RUN] gen_hls_det
call scripts\hls\gen_hls_det.bat !NAME! "!GOLD!" "!HLS_DET!" !SEED_DET!

if exist "!HLS_DET!" (
  echo [RUN] train_hls_llm
  call scripts\hls\train_hls_llm.bat !NAME! "!HLS_DET!"

  echo [RUN] gen_hls_nondet
  call scripts\hls\gen_hls_nondet.bat !NAME! "!HLS_DET!" "!HLS_NON!" !SEED_NONDET!

  if exist "!HLS_NON!" (
    echo [RUN] emit_hls_all_in_one
    call scripts\readable\emit_hls_all_in_one.bat "!HLS_NON!" "" "!STORIES!" --name !NAME!
  ) else (
    echo [WARN] NONDET json missing: !HLS_NON!
  )
) else (
  echo [WARN] HLS-DET json missing: !HLS_DET!
)
echo.
endlocal & exit /b

REM ---- helper: search one root for a system name + patterns ---------------
:FIND_IN_ROOT
setlocal EnableDelayedExpansion
set "ROOT=%~1"
set "NM=%~2"
set "PATS=%~3"

for %%A in (!PATS!) do (
  call :DBG "TRY: dir /b /s /a-d \"!ROOT!\*\!NM!\%%A\""
  if not defined GOLD (
    for /f "delims=" %%F in ('dir /b /s /a-d "!ROOT!\*\!NM!\%%A" 2^>nul') do (
      call :DBG "HIT: %%~fF"
      endlocal & set "GOLD=%%~fF" & set "ROOT_HIT=%ROOT%" & goto :EOF
    )
  )
)
endlocal & goto :EOF

REM ---- debug echo ---------------------------------------------------------
:DBG
if /I "%DEBUG%"=="1" echo [DBG] %~1
goto :EOF
