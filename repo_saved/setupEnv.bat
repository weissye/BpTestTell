@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ===========================================
echo   BpTestTell - Environment Setup / Check
echo ===========================================

:: Accept optional --no-activate flag
set "NOACT=%~1"
if /I "%NOACT%"=="--no-activate" ( set "NOACT=1" ) else ( set "NOACT=" )

:: 1) Pick a Python launcher (prefer py 3.10/3.11, fallback to python)
set "_PY_CMD="
where py >nul 2>&1 && ( for /f "tokens=* delims=" %%v in ('py -0p ^| find "3.10"') do set "_PY_CMD=py -3.10" )
if not defined _PY_CMD (
  where py >nul 2>&1 && ( for /f "tokens=* delims=" %%v in ('py -0p ^| find "3.11"') do set "_PY_CMD=py -3.11" )
)
if not defined _PY_CMD set "_PY_CMD=python"

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

:: 4) Install SUT dependencies
if exist "requirements.txt" (
  echo [STEP ] Installing SUT deps from requirements.txt...
  ".venv\Scripts\python.exe" -m pip install -r requirements.txt
  if errorlevel 1 (
    echo [ERROR] Installing requirements.txt failed.
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

:: 5) Verify Flask import
echo [STEP ] Verifying Flask import...
".venv\Scripts\python.exe" -c "import flask,sys;print('[OK   ] Flask', flask.__version__)"
if errorlevel 1 (
  echo [ERROR] Flask not importable in this venv.
  exit /b 1
)

:: 6) Optionally activate venv for this shell
if defined NOACT (
  echo [DONE ] Setup complete (no activation requested).
  exit /b 0
)

if exist ".\.venv\Scripts\activate.bat" (
  echo [STEP ] Activating venv for this shell...
  call ".\.venv\Scripts\activate.bat"
  echo [OK   ] venv activated.  (If you are in PowerShell, this .bat activation still works.)
) else (
  echo [WARN ] Activation script not found. Use:  .\.venv\Scripts\python.exe <your_script.py>
)

echo [DONE ] Setup complete.
exit /b 0
