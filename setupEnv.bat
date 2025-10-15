@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM ------------------------------------------------------------
REM Generic Python env setup for Windows cmd.exe
REM - Creates .venv if missing (or with --recreate)
REM - Activates it
REM - Upgrades pip
REM - Installs from requirements.txt if present, otherwise a sane default
REM ------------------------------------------------------------

set "REPO=%CD%"
set "VENV=%REPO%\.venv"
set "VENV_PY=%VENV%\Scripts\python.exe"

REM --- flags ---
set "RECREATE="
if /I "%~1"=="--recreate" set "RECREATE=1"

echo(
echo ===========================================
echo   Environment Setup / Check (generic)
echo ===========================================
echo Working dir: %REPO%
echo(

REM --- locate a Python launcher/exe (outside venv) ---
set "PYEXE="
if defined RECREATE (
  REM force recreation; ignore existing venv python
) else (
  if exist "%VENV_PY%" set "PYEXE=%VENV_PY%"
)
if not defined PYEXE (
  for %%C in (python.exe py.exe) do (
    for /f "delims=" %%F in ('where %%C 2^>NUL') do if not defined PYEXE set "PYEXE=%%F"
  )
)
if not defined PYEXE (
  echo [ERROR] Python not found on PATH.
  echo         Install Python 3.10+ and re-run.
  exit /b 1
)

REM --- (re)create venv if needed ---
if defined RECREATE (
  if exist "%VENV%" (
    echo [STEP ] Removing existing venv: %VENV%
    rmdir /s /q "%VENV%"
  )
)
if not exist "%VENV_PY%" (
  echo [STEP ] Creating venv at: %VENV%
  "%PYEXE%" -m venv "%VENV%" || (echo [ERROR] venv creation failed & exit /b 1)
)

REM --- activate venv ---
call "%VENV%\Scripts\activate" || (echo [ERROR] activate failed & exit /b 1)
echo [OK   ] venv activated: %VENV%

REM --- upgrade pip ---
python -m pip --version >NUL 2>&1 || (echo [STEP ] Installing pip... & python -m ensurepip --upgrade)
echo [STEP ] Upgrading pip...
python -m pip install --upgrade pip || (echo [WARN ] pip upgrade failed)

REM --- install deps ---
if exist "%REPO%\requirements.txt" (
  echo [STEP ] Installing from requirements.txt ...
  python -m pip install -r "%REPO%\requirements.txt" || (echo [ERROR] pip install failed & exit /b 1)
) else (
  echo [STEP ] Installing default packages (openai, httpx, tiktoken, pyyaml) ...
  python -m pip install openai httpx tiktoken pyyaml || (echo [ERROR] pip install failed & exit /b 1)
)

REM --- optional import check (quick sanity) ---
python -c "import sys;print('Python',sys.version.split()[0])" 1>NUL 2>NUL || (echo [ERROR] Python not runnable in venv & exit /b 1)
python -c "import importlib,sys; \
ok=True; \
import importlib.util as u; \
mods=['openai','httpx','tiktoken','yaml']; \
missing=[m for m in mods if u.find_spec(m) is None]; \
print('Missing:',missing) if missing else print('Imports OK')" || (echo [WARN ] Import sanity check failed)

REM --- API key hint ---
if not defined OPENAI_API_KEY (
  echo [WARN ] OPENAI_API_KEY is not set in this shell.  Use:
  echo         setx OPENAI_API_KEY "sk-xxxx"  ^(persist^)
  echo         or:  set OPENAI_API_KEY=sk-xxxx  ^(current shell only^)
) else (
  echo [OK   ] OPENAI_API_KEY present.
)

echo [DONE ] Environment is ready.
exit /b 0
