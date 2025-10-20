@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM ============================================================
REM emit_bpjs_for_all_merged_safe.bat  (hardened, list-aware)
REM - Accepts a SUT ROOT DIRECTORY or a TEXT FILE list.
REM - If list: format -> sut_dir [modes] [profile] [per_entity_max] [fail_under]
REM - Skips lines starting with # ; // or == (banners).
REM - Resolves bare names (e.g., "banking") against common roots: suts\flask_impl 7_suts_llm_provider real_world_llm_provider suts
REM - Maps profile 'exhaustive' -> 'rich' for compatibility.
REM - Calls: emit_hls_all_in_one.py
REM ============================================================

set "_HERE=%~dp0"
set "TARGET=%~1"
if "%TARGET%"=="" set "TARGET=suts\flask_impl"

set "MODES=%~2"
if "%MODES%"=="" set "MODES=det,nondet"

set "PROFILE=%~3"
if "%PROFILE%"=="" set "PROFILE=rich"

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

if exist "%TARGET%\NUL" (
  for /d %%S in ("%TARGET%\*") do call :run_one "%%~fS" "%MODES%" "%PROFILE%" "%PER_ENTITY_MAX%" "%FAIL_UNDER%"
) else (
  if exist "%TARGET%" (
    for /f "usebackq delims=" %%L in ("%TARGET%") do (
      set "LINE=%%L"
      if not defined LINE ( rem skip blank
      ) else (
        set "TRIM=!LINE: =!"
        set "HEAD=!TRIM:~0,2!"
        set "HEAD3=!TRIM:~0,3!"
        if "!HEAD!"=="# "  ( rem comment
        ) else if "!HEAD!"=="; " ( rem comment
        ) else if "!HEAD3!"=="// " ( rem comment
        ) else if "!HEAD!"=="==" ( rem banner
        ) else if "!TRIM!"=="#" ( rem comment
        ) else if "!TRIM!"==";" ( rem comment
        ) else if "!TRIM!"=="//" ( rem comment
        ) else if "!TRIM:~0,1!"=="#" ( rem comment
        ) else if "!TRIM:~0,1!"==";" ( rem comment
        ) else if "!TRIM:~0,2!"=="==" ( rem banner
        ) else (
          for /f "tokens=1-5 delims=,;| 	" %%A in ("!LINE!") do (
            set "LSUT=%%~A"
            set "LMODES=%%~B"
            set "LPROFILE=%%~C"
            set "LPEM=%%~D"
            set "LFAIL=%%~E"
            if not defined LMODES set "LMODES=%MODES%"
            if not defined LPROFILE set "LPROFILE=%PROFILE%"
            if /I "!LPROFILE!"=="exhaustive" set "LPROFILE=rich"
            if not defined LPEM set "LPEM=%PER_ENTITY_MAX%"
            if not defined LFAIL set "LFAIL=%FAIL_UNDER%"
            call :resolve_and_run "!LSUT!" "!LMODES!" "!LPROFILE!" "!LPEM!" "!LFAIL!"
          )
        )
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

:resolve_and_run
setlocal EnableExtensions EnableDelayedExpansion
set "RAW=%~1"
set "RMODES=%~2"
set "RPROFILE=%~3"
set "RPEM=%~4"
set "RFAIL=%~5"

REM If RAW is a valid dir, use it
if exist "%RAW%\NUL" (
  call :run_one "%RAW%" "!RMODES!" "!RPROFILE!" "!RPEM!" "!RFAIL!"
  goto :end
)

REM Try to resolve against common roots
for %%R in (suts\flask_impl 7_suts_llm_provider real_world_llm_provider suts) do (
  if exist "%%R\%RAW%\NUL" (
    call :run_one "%%R\%RAW%" "!RMODES!" "!RPROFILE!" "!RPEM!" "!RFAIL!"
    goto :end
  )
)

echo [SKIP] Not a directory (and not resolved): %RAW%
:end
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
