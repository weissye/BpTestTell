@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM Usage: emit_hls_stories_from_gold_for_list.bat LIST_FILE PROVIDER [ROOT]
REM Emits stories.js from NONDET gold into artifacts\hls_nondet\...\readables\stories.js

if "%~1"=="" (
  echo Usage: %~nx0 LIST_FILE PROVIDER [ROOT]
  exit /b 2
)

set "LIST=%~1"
set "PROV=%~2"
set "ROOT=%~3"
if "%ROOT%"=="" set "ROOT=%~dp0..\.."
for %%# in ("%ROOT%") do set "ROOT=%%~f#"

set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

echo ============================================
echo EMIT HLS stories.js from NONDET GOLD
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROV%
echo ============================================

for /f "usebackq tokens=1 delims=" %%S in ("%LIST%") do (
  set "S=%%S"
  if not "!S!"=="" if not "!S:~0,1!"==";" (
    set "GOLD=%ROOT%\artifacts\hls_nondet\%PROV%\!S!\hls_gold.json"
    set "OUTDIR=%ROOT%\artifacts\hls_nondet\%PROV%\!S!\readables"
    set "OUTJS=%OUTDIR%\stories.js"

    if not exist "!GOLD!" (
      echo   [SKIP] !S! - missing NONDET GOLD: "!GOLD!"
    ) else (
      if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>&1
      echo [RUN ] EMIT stories.js: !S!
      "%PY%" -u "%ROOT%\scripts\hls\emit_hls_all_in_one.py" ^
        --provider "%PROV%" --sut "!S!" --gold "!GOLD!" --out-js "!OUTJS!"
      if errorlevel 1 (
        echo   [ERR ] emitter failed for !S!
      ) else if exist "!OUTJS!" (
        for %%A in ("!OUTJS!") do echo   [OK  ] wrote "%%~fA"  (%%~zA bytes)
      ) else (
        echo   [WARN] emitter returned 0 but no stories.js for !S!
      )
    )
  )
)

echo --------------------------------------------
echo DONE.
endlocal
