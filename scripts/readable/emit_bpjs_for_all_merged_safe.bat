@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM ============================================================
REM emit_bpjs_for_all_merged_safe.bat  (list-aware)
REM - Accepts either a SUT ROOT DIRECTORY (default: suts\flask_impl)
REM   OR a TEXT FILE listing SUT dirs (and optional per-line overrides).
REM - Calls: emit_hls_all_in_one.py
REM ------------------------------------------------------------
REM List file format (whitespace/comma/semicolon/pipe delimited):
REM   sut_dir [modes] [profile] [per_entity_max] [fail_under]
REM Examples:
REM   suts\flask_impl\ecommerce
REM   suts\flask_impl\banking  det         exhaustive   10  0
REM   suts\flask_impl\factory  det,nondet  rich         6   0
REM Lines starting with # are ignored.
REM ============================================================

set "_HERE=%~dp0"
set "TARGET=%~1"
if "%TARGET%"=="" set "TARGET=suts\flask_impl"

set "MODES=%~2"
if "%MODES%"=="" set "MODES=det,nondet"

set "PROFILE=%~3"
if "%PROFILE%"=="" set "PROFILE=exhaustive"

set "PER_ENTITY_MAX=%~4"
if "%PER_ENTITY_MAX%"=="" set "PER_ENTITY_MAX=10"

set "FAIL_UNDER=%~5"
if "%FAIL_UNDER%"=="" set "FAIL_UNDER=0"

REM Resolve Python emitter path
set "EMITTER=%_HERE%emit_hls_all_in_one.py"
if not exist "%EMITTER%" (
  if exist "%_HERE%..\..\emit_hls_all_in_one.py" set "EMITTER=%_HERE%..\..\emit_hls_all_in_one.py"
)
if not exist "%EMITTER%" (
  echo [ERR ] Could not find emit_hls_all_in_one.py near "%_HERE%"
  goto :eof
)

echo ============================================
echo [INFO] TARGET=%TARGET%
echo [INFO] MODES=%MODES%
echo [INFO] PROFILE=%PROFILE%
echo [INFO] PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo [INFO] EMITTER=%EMITTER%
echo ============================================

REM Decide whether TARGET is a directory (has NUL) or a file list
if exist "%TARGET%\NUL" (
  REM -------- Directory mode --------
  for /d %%S in ("%TARGET%\*") do call :run_one "%%~fS" "%MODES%" "%PROFILE%" "%PER_ENTITY_MAX%" "%FAIL_UNDER%"
) else (
  if exist "%TARGET%" (
    REM -------- List file mode --------
    for /f "usebackq eol=# tokens=1-5 delims=,;| 	 " %%A in ("%TARGET%") do (
      set "LSUT=%%~A"
      if not defined LSUT (
        REM skip blank
      ) else (
        set "LMODES=%%~B"
        if "!LMODES!"=="" set "LMODES=%MODES%"
        set "LPROFILE=%%~C"
        if "!LPROFILE!"=="" set "LPROFILE=%PROFILE%"
        set "LPEM=%%~D"
        if "!LPEM!"=="" set "LPEM=%PER_ENTITY_MAX%"
        set "LFAIL=%%~E"
        if "!LFAIL!"=="" set "LFAIL=%FAIL_UNDER%"
        call :run_one "!LSUT!" "!LMODES!" "!LPROFILE!" "!LPEM!" "!LFAIL!"
      )
    )
  ) else (
    echo [ERR ] TARGET not found: %TARGET%
    goto :eof
  )
)

echo.
echo [DONE] emit_bpjs_for_all_merged_safe.bat finished.
endlocal
exit /b 0

:run_one
setlocal EnableExtensions EnableDelayedExpansion
set "SUT_DIR=%~1"
set "RMODES=%~2"
set "RPROFILE=%~3"
set "RPEM=%~4"
set "RFAIL=%~5"

echo.
echo [RUN ] %SUT_DIR%
for %%M in (%RMODES%) do (
  echo    - mode=%%M
  call python "%EMITTER%" ^
    --sut_dir "%SUT_DIR%" ^
    --mode %%M ^
    --profile "%RPROFILE%" ^
    --per_entity_max %RPEM% ^
    --fail_under_stories %RFAIL%
  if errorlevel 1 (
    echo    [ERR ] emitter failed for "%SUT_DIR%" mode=%%M rc=!errorlevel!
  )
)
endlocal
exit /b 0
