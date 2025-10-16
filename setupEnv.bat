@echo off
setlocal EnableExtensions
cd /d "%~dp0"

echo ===========================================
echo   BpTestTell - Environment Setup / Check
echo ===========================================

:: 1) Ensure Python is in PATH
where python >nul 2>&1
if errorlevel 1 (
  echo [ERROR] Python not found in PATH. Install Python 3.10+ and re-run.
  exit /b 1
)

:: 2) Create venv if missing (avoid parens in echoed text)
if not exist ".venv\Scripts\python.exe" goto CREATE_VENV
goto HAVE_VENV

:CREATE_VENV
echo [STEP ] Creating virtual environment: .venv ...
python -m venv .venv
if errorlevel 1 (
  echo [ERROR] Failed to create venv.
  exit /b 1
)
:HAVE_VENV

:: 3) Verify pip inside venv
".\.venv\Scripts\python.exe" -m pip --version >nul 2>&1
if errorlevel 1 (
  echo [ERROR] pip not available in venv.
  exit /b 1
)

:: 4) Upgrade pip and install requirements
echo [STEP ] Upgrading pip...
".\.venv\Scripts\python.exe" -m pip install --upgrade pip >nul 2>&1

echo [STEP ] Installing required packages: openai, httpx, tiktoken, pyyaml ...
".\.venv\Scripts\python.exe" -m pip install -q --disable-pip-version-check openai httpx tiktoken pyyaml
if errorlevel 1 (
  echo [ERROR] pip install failed.
  exit /b 1
)

:: 5) Sanity import (no () grouping)
".\.venv\Scripts\python.exe" -c "import importlib.util,sys;mods=('openai','httpx','tiktoken','yaml');sys.exit(1 if any(importlib.util.find_spec(m) is None for m in mods) else 0)"
if errorlevel 1 (
  echo [ERROR] One or more Python modules are missing.
  exit /b 1
)

:: 6) API key presence (warn only)
if "%OPENAI_API_KEY%"=="" (
  echo [WARN ] OPENAI_API_KEY not set in this shell.
) else (
  echo [OK   ] OPENAI_API_KEY present.
)

:: 7) Activate venv for the caller
if exist ".\.venv\Scripts\activate.bat" (
  echo [STEP ] Activating venv for this shell...
  endlocal & call ".\.venv\Scripts\activate.bat"
  echo [OK   ] venv activated.
  goto :EOF
)

echo [OK   ] Environment is ready.
endlocal
exit /b 0
