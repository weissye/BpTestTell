@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ===========================================
echo   BpTestTell - Environment Setup / Check
echo ===========================================

rem ---- optional flag --no-activate ----
set "NOACT="
if /I "%~1"=="--no-activate" set "NOACT=1"

rem ---- choose python launcher (prefer py 3.10, then 3.11, 3.9, else python) ----
set "_PY_CMD="

rem try py 3.10
py -3.10 -V >nul 2>&1
if not errorlevel 1 set "_PY_CMD=py -3.10"

rem try py 3.11 if not set
if not defined _PY_CMD (
  py -3.11 -V >nul 2>&1
  if not errorlevel 1 set "_PY_CMD=py -3.11"
)

rem try py 3.9 if not set
if not defined _PY_CMD (
  py -3.9 -V >nul 2>&1
  if not errorlevel 1 set "_PY_CMD=py -3.9"
)

rem try generic python last
if not defined _PY_CMD (
  python -V >nul 2>&1
  if not errorlevel 1 set "_PY_CMD=python"
)

if not defined _PY_CMD (
  echo [ERROR] No suitable Python found (need 3.9+). Install Python and re-run.
  exit /b 1
)

rem ---- create venv if missing ----
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

rem ---- upgrade pip/setuptools/wheel ----
echo [STEP ] Upgrading pip/setuptools/wheel...
".venv\Scripts\python.exe" -m pip install --upgrade pip setuptools wheel
if errorlevel 1 (
  echo [ERROR] pip upgrade failed.
  exit /b 1
)

rem ---- install dependencies (prefer requirements.txt) ----
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

rem ---- verify Flask (non-fatal) ----
echo [STEP ] Verifying Flask import...
".venv\Scripts\python.exe" -c "import importlib; import sys; m=importlib.util.find_spec('flask'); sys.exit(0 if m else 0)"
if errorlevel 1 (
  echo [WARN ] Flask not found (this might be fine if a SUT does not require it).
) else (
  echo [OK   ] Flask available.
)

rem ---- optionally activate venv ----
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
