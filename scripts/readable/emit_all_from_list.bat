@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem =========================
rem Config / inputs
rem =========================
if "%~1"=="" (
  set "LIST=config\suts_and_rw.txt"
) else (
  set "LIST=%~1"
)

set "PROV1=7_suts_llm_provider"
set "PROV2=real_world_llm_provider"
set "MIN_BYTES=200"

echo Using LIST: %LIST%
echo Providers (nondet): %PROV1% %PROV2%
echo.

rem =========================
rem Write a tiny PowerShell JSON checker (escape pipes as ^|)
rem Exit codes:
rem  0=OK, 10=missing file, 11=invalid JSON, 12=no 'stories' prop, 13=stories<=0, 14=file too small
rem =========================
set "PSCHK=%TEMP%\check_hls_json_%RANDOM%.ps1"
if exist "%PSCHK%" del "%PSCHK%" >nul 2>&1

>>"%PSCHK%" echo param([string]^$Path,[int]^$MinBytes=%MIN_BYTES%)
>>"%PSCHK%" echo if (-not (Test-Path -LiteralPath ^$Path)) { exit 10 }
>>"%PSCHK%" echo if ((Get-Item -LiteralPath ^$Path).Length -lt ^$MinBytes) { exit 14 }
>>"%PSCHK%" echo try { ^$j = Get-Content -Raw -LiteralPath ^$Path ^| ConvertFrom-Json } catch { exit 11 }
>>"%PSCHK%" echo if (-not ^$j.PSObject.Properties.Match('stories')) { exit 12 }
>>"%PSCHK%" echo if ((^$j.stories ^| Measure-Object).Count -lt 1) { exit 13 }
>>"%PSCHK%" echo exit 0

echo [DBG] Starting scan of "%LIST%"
echo.

rem =========================
rem Main loop — delegate per-line handling to a subroutine (no ELSE in the FOR)
rem =========================
for /f "usebackq tokens=* delims=" %%L in ("%LIST%") do call :ProcessLine "%%~L"
goto :End

rem =========================
rem Subroutines
rem =========================
:ProcessLine
set "LINE=%~1"
rem Trim leading spaces
for /f "tokens=* delims= " %%A in ("%LINE%") do set "LINE=%%~A"
if "%LINE%"=="" goto :eof
if "%LINE:~0,1%"==";" goto :eof

echo ============================================
echo Processing "%LINE%"
echo ============================================

call :DoOne "%PROV1%" "%LINE%"
call :DoOne "%PROV2%" "%LINE%"
echo.
goto :eof

:DoOne
set "PROV=%~1"
set "SUT=%~2"
set "SUT_DIR=artifacts\hls_nondet\%PROV%\%SUT%"
set "JSON=%SUT_DIR%\hls_nondet_gold.json"

echo [DBG] Provider="%PROV%"  SUT="%SUT%"
echo [DBG] SUT_DIR="%SUT_DIR%"
echo [DBG] JSON   ="%JSON%"

if not exist "%JSON%" (
  echo [SKIP] %PROV%\%SUT% - no NONDET gold at "%JSON%"
  goto :eof
)

for %%Z in ("%JSON%") do set "SZ=%%~zZ"
if %SZ% LSS %MIN_BYTES% (
  echo [SKIP] %PROV%\%SUT% - NONDET JSON too small (%SZ% bytes
  goto :eof
)

rem Validate JSON structure with PowerShell
powershell -NoProfile -ExecutionPolicy Bypass -File "%PSCHK%" -Path "%JSON%" -MinBytes %MIN_BYTES%
if errorlevel 1 (
  echo [SKIP] %PROV%\%SUT% - invalid or empty NONDET JSON
  goto :eof
)

if not exist "%SUT_DIR%\readable" mkdir "%SUT_DIR%\readable" >nul 2>&1

rem Emit stories.js from NONDET gold
".\.venv\Scripts\python.exe" scripts\readable\emit_hls_all_in_one.py --sut_dir "%SUT_DIR%" --mode nondet --out "%SUT_DIR%\readable\stories_hls.js" --profile basic
if errorlevel 1 (
  echo [FAIL] %PROV%\%SUT% emit failed
  goto :eof
)

echo [OK  ] %PROV%\%SUT% -> %SUT_DIR%\readable\stories_hls.js
goto :eof

:End
del "%PSCHK%" >nul 2>&1
echo ALL READABLES DONE
exit /b 0
