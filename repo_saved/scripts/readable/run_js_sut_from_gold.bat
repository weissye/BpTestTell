@echo off
setlocal EnableExtensions

rem =============================================================
rem run_js_sut_from_gold.bat
rem Usage (preferred, from wrapper):
rem   %1=det_checked|nondet_checked  %2=PROVIDER  %3=SUT  %4=SUT_DIR
rem Fallback (legacy):
rem   %1=SUT_DIR   (we'll infer the rest)
rem =============================================================

for %%I in ("%~dp0..\..") do set "ROOT=%%~fI"

rem ---------- Parse args ----------
if "%~4"=="" (
  set "SUT_DIR=%~1"
  if not defined SUT_DIR (
    echo [ERR ] Missing arguments. Expected:
    echo        run_js_sut_from_gold.bat det_checked^|nondet_checked PROVIDER SUT SUT_DIR
    exit /b 2
  )
  rem Infer base/provider/sut from path
  set "BASE_DIR="
  echo %SUT_DIR% | findstr /I /C:"\artifacts\det_checked\" >nul && set "BASE_DIR=det_checked"
  if not defined BASE_DIR set "BASE_DIR=nondet_checked"

  for /f "tokens=1,2 delims=\ " %%a in ("%SUT_DIR:%ROOT%\artifacts\%BASE_DIR%\=%") do (
    set "PROVIDER=%%a"
    set "SUT=%%b"
  )
) else (
  set "BASE_DIR=%~1"
  set "PROVIDER=%~2"
  set "SUT=%~3"
  set "SUT_DIR=%~4"
)

if /I "%BASE_DIR%"=="det_checked" (set "BASE=det") else (set "BASE=nondet")

echo [INFO] Using: "%~f0"
echo [INFO] ROOT="%ROOT%"
echo [INFO] BASE="%BASE%"
echo [INFO] PROVIDER="%PROVIDER%"
echo [INFO] SUT="%SUT%"
echo [DBG ] SUT_DIR="%SUT_DIR%"

rem ---------- Must be an existing directory ----------
if not exist "%SUT_DIR%\." (
  if exist "%SUT_DIR%" (
    echo [ERR ] Path exists but is not a directory: "%SUT_DIR%"
  ) else (
    echo [ERR ] SUT dir not found: "%SUT_DIR%"
  )
  exit /b 1
)

rem ---------- Inputs/outputs ----------
if /I "%BASE%"=="det" (
  set "RAW=%SUT_DIR%\%SUT%_llm_gold_ops.json"
  set "NORM=%SUT_DIR%\%SUT%_gold_ops.normalized.json"
) else (
  set "RAW=%SUT_DIR%\%SUT%_llm_gold.json"
  set "NORM=%SUT_DIR%\%SUT%_llm_gold.normalized.json"
)
set "OUT=%SUT_DIR%\readables"

if not exist "%RAW%" (
  if /I "%BASE%"=="det" (
    echo [INFO] DET GOLD not found for "%SUT%" under "%SUT_DIR%".
  ) else (
    echo [INFO] NONDET GOLD not found for "%SUT%" under "%SUT_DIR%".
  )
  exit /b 0
)

if /I "%BASE%"=="det" (
  echo [DBG ] DET_INPUTS="%RAW%"
) else (
  echo [DBG ] ND_INPUTS="%RAW%"
)

set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"

rem ---------- Normalize ----------
echo [CMD ] "%PY%" "%ROOT%\scripts\readable\normalize_gold_for_readables.py" --out="%NORM%" "%RAW%"
"%PY%" "%ROOT%\scripts\readable\normalize_gold_for_readables.py" --out="%NORM%" "%RAW%"
if errorlevel 1 (
  echo [ERR ] normalize_gold_for_readables.py failed.
  exit /b 1
)

rem ---------- Ensure OUT is a directory ----------
if not exist "%OUT%\." (
  if exist "%OUT%" (
    echo [WARN] "%OUT%" exists as a file. Renaming to "readables.bak".
    ren "%OUT%" "readables.bak" >nul 2>&1
  )
  md "%OUT%" >nul 2>&1
)

rem ---------- Emit readables ----------
echo [CMD ] "%PY%" "%ROOT%\scripts\readable\emit_readables_from_gold.py" --gold "%NORM%" --out-dir "%OUT%"
"%PY%" "%ROOT%\scripts\readable\emit_readables_from_gold.py" --gold "%NORM%" --out-dir "%OUT%"
if errorlevel 1 (
  echo [ERR ] emit_readables_from_gold.py failed.
  exit /b 1
)

echo [DONE] %SUT%
exit /b 0
