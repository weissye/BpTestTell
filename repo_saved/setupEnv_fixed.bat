@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ===========================================
echo   BpTestTell - Environment Setup / Check
echo ===========================================

:: Optional flag --no-activate
set "NOACT="
if /I "%~1"=="--no-activate" set "NOACT=1"

:: 1) Pick a Python launcher (prefer py 3.10/3.11/3.9, fallback to python)
set "_PY_CMD="
py -3.10 -V >nul 2>&1 && set "_PY_CMD=py -3.10"
if not defined _PY_CMD py -3.11 -V >nul 2>&1 && set "_PY_CMD=py -3.11"
if not defined _PY_CMD py -3.9  -V >nul 2>&1 && set "_PY_CMD=py -3.9"
if not defined _PY_CMD python   -V >nul 2>&1 && set "_PY_CMD=python"

if not defined _PY_CMD (
  echo [ERROR] No suitable Python found (need 3.9+). Install Python and re-run.
  exit /b 1
)

:: 2) Create venv if missing
if not exist ".venv\Scripts\python.exe" (
  echo [STEP ] Creating virtual environment (.venv)...
  %_PY_CMD% -m venv .venv
  if errorlevel 1 (
    echo [ERROR] Failed to create virtual environment.
    exit /b 1
  )
) else (
  echo [OK   ] Virtual environment already exists.
)

:: 3) Upgrade pip/setuptools/wheel
echo [STEP ] Upgrading pip/setuptools/wheel...
".venv\Scripts\python.exe" -m pip install --upgrade pip setuptools wheel
if errorlevel 1 (
  echo [ERROR] pip upgrade failed.
  exit /b 1
)

:: 4) Install dependencies
if exist "requirements.txt" (
  echo [STEP ] Installing deps from requirements.txt...
  ".venv\Scripts\python.exe" -m pip install -r requirements.txt
  if errorlevel 1 (
    echo [ERROR] Installing requirements.txt failed.
    exit /b 1
  )
) else if exist "requirements_suts.txt" (
  echo [STEP ] Installing SUT deps from requirements_suts.txt...
  ".venv\Scripts\python.exe" -m pip install -r requirements_suts.txt
  if errorlevel 1 (
    echo [ERROR] Installing requirements_suts.txt failed.
    exit /b 1
  )
) else (
  echo [STEP ] Installing minimal SUT dep: Flask...
  ".venv\Scripts\python.exe" -m pip install Flask
  if errorlevel 1 (
    echo [ERROR] Installing Flask failed.
    exit /b 1
  )
)

:: 5) Verify Flask import (non-fatal if your project doesn't need it)
echo [STEP ] Verifying Flask import...
".venv\Scripts\python.exe" -c "import importlib,sys; m=importlib.util.find_spec('flask'); print('[OK   ] Flask found' if m else '[WARN ] Flask not found')"

:: 6) Optionally activate venv for this shell
if defined NOACT (
  echo [DONE ] Setup complete (no activation requested).
  exit /b 0
)

if exist ".\.venv\Scripts\activate.bat" (
  echo [STEP ] Activating venv for this shell...
  call ".\.venv\Scripts\activate.bat"
  echo [OK   ] venv activated.
) else (
  echo [WARN ] Activation script not found. Use:  .\.venv\Scripts\python.exe <your_script.py>
)

echo [DONE ] Setup complete.
exit /b 0
