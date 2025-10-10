@echo off
setlocal enableextensions
REM Build interfaces.readable.js + hle.readable.js for ONE folder of GOLD files.

REM Usage:
REM   scripts\readable\build_readables_for_one_sut.bat artifacts\...\<sut_folder>

if "%~1"=="" (
  echo [ERR ] Usage: %~nx0 ^<gold-dir^>
  exit /b 2
)

set "GOLD_DIR=%~1"
if not exist "%GOLD_DIR%\" (
  echo [WARN] %GOLD_DIR% does not exist; skipping.
  exit /b 0
)

dir /b "%GOLD_DIR%\*_llm_gold*.json" >nul 2>&1
if errorlevel 1 (
  echo [WARN] No *_llm_gold*.json in %GOLD_DIR%; skipping.
  exit /b 0
)

set "PY=python"
set "GEN_IF=scripts\readable\emit_interface_js.py"
set "GEN_HLE=scripts\readable\emit_hle_js.py"

echo [RUN ] interfaces.readable.js in "%GOLD_DIR%"
%PY% "%GEN_IF%" --gold-dir "%GOLD_DIR%"
if errorlevel 1 (
  echo [WARN] emit_interface_js failed in "%GOLD_DIR%"; continuing.
) else (
  echo [OK  ] interfaces.readable.js created in "%GOLD_DIR%"
)

echo [RUN ] hle.readable.js in "%GOLD_DIR%"
%PY% "%GEN_HLE%" --gold-dir "%GOLD_DIR%"
if errorlevel 1 (
  echo [WARN] emit_hle_js failed in "%GOLD_DIR%"; continuing.
) else (
  echo [OK  ] hle.readable.js created in "%GOLD_DIR%"
)

exit /b 0
