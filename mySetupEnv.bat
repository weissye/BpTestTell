@echo off
REM ==========================================================
REM  BpTestTell - Environment Setup / Check  (cmd.exe safe)
REM  - No delayed expansion
REM  - No parentheses in IF blocks (use labels)
REM  - All pip calls via python -m pip
REM ==========================================================
setlocal EnableExtensions

echo.
echo ===========================================
echo   BpTestTell - Environment Setup / Check
echo ===========================================
echo.

REM --- Locate Python in the venv ---
set "PY=.\.venv\Scripts\python.exe"

echo [CHECK] Python interpreter:
if not exist "%PY%" (
  echo   [ERROR] Could not find "%PY%".
  echo          Create/activate a venv first:
  echo          python -m venv .venv ^&^& .\.venv\Scripts\activate
  exit /b 1
) else (
  echo   Using: %PY%
)

REM --- Python details via temp script (avoid -c quoting) ---
set "TMP_INFO=%TEMP%\bp_pyinfo_%RANDOM%.py"
set "TMP_OUT=%TEMP%\bp_pyout_%RANDOM%.txt"
> "%TMP_INFO%" echo import sys, platform
>>"%TMP_INFO%" echo print("exe=", sys.executable, sep="")
>>"%TMP_INFO%" echo print("ver=", platform.python_version(), sep="")
>>"%TMP_INFO%" echo print("os=", platform.system(), sep="")

"%PY%" "%TMP_INFO%" >"%TMP_OUT%" 2>nul
if errorlevel 1 goto :PYINFO_FAIL

echo [INFO ] Python details:
for /f "usebackq tokens=1* delims==" %%A in ("%TMP_OUT%") do (
  if /i "%%~A"=="exe" echo     exe = %%~B
  if /i "%%~A"=="ver" echo     ver = %%~B
  if /i "%%~A"=="os"  echo     os  = %%~B
)
del /q "%TMP_INFO%" >nul 2>nul
del /q "%TMP_OUT%" >nul 2>nul
goto :PIP_STEP

:PYINFO_FAIL
echo   [ERROR] Failed to query Python details.
del /q "%TMP_INFO%" >nul 2>nul
del /q "%TMP_OUT%" >nul 2>nul
exit /b 1

:PIP_STEP
echo.
echo [STEP ] Ensuring pip is available...
"%PY%" -m ensurepip --upgrade >nul 2>nul
"%PY%" -m pip --version

echo.
echo [STEP ] Installing required packages (openai, httpx, tiktoken, pyyaml)...
"%PY%" -m pip install --disable-pip-version-check -q openai httpx tiktoken pyyaml
if errorlevel 1 goto :PIP_WARN

:PIP_OK
REM continue regardless
goto :VERIFY_IMP

:PIP_WARN
echo   [WARN ] pip install returned a non-zero exit code. Continuing...
goto :VERIFY_IMP

:VERIFY_IMP
echo.
echo [CHECK] Verifying Python stdlib importlib.util and required imports...
set "TMP_IMP=%TEMP%\bp_imports_%RANDOM%.py"
> "%TMP_IMP%" echo import importlib, importlib.util
>>"%TMP_IMP%" echo import openai, httpx, tiktoken, yaml

"%PY%" "%TMP_IMP%" >nul 2>nul
if errorlevel 1 goto :IMP_FAIL

del /q "%TMP_IMP%" >nul 2>nul
echo   All imports OK.
goto :SCAN_SHADOW

:IMP_FAIL
del /q "%TMP_IMP%" >nul 2>nul
echo   [ERROR] Import check failed: importlib.util or required packages not importable.
echo          Check that no file or folder named "importlib" exists in the project root.
echo          You can reinstall deps with: %PY% -m pip install openai httpx tiktoken pyyaml
exit /b 1

:SCAN_SHADOW
echo.
echo [CHECK] Scanning repo root for items named "importlib" ...
if exist ".\importlib" (
  echo   [WARN ] Found ".\importlib" in repo root. This can shadow stdlib. Please rename or remove it.
) else (
  echo   None found at repo root.
)

echo.
echo [CHECK] OPENAI_API_KEY present?
if defined OPENAI_API_KEY (
  echo   OPENAI_API_KEY is set in this shell.
) else (
  echo   [WARN ] OPENAI_API_KEY is NOT set.
  echo          Set it for this session:
  echo          set "OPENAI_API_KEY=ssk-proj-UX0yvNOWlXrLGsTtjIp52QngplrDnY1wPq0n5PexjiAM9ujPQJLyXt2sfrZrAG3CaNXiVAPVx-T3BlbkFJbOBXI_-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"
)


REM --- Activate the project's venv for this *current* shell session ---
if exist "%~dp0.venv\Scripts\activate.bat" (
  echo [STEP ] Activating venv for this shell...
  endlocal & call "%~dp0.venv\Scripts\activate.bat"
  echo [OK   ] venv activated.
) else (
  echo [WARN ] %~dp0.venv\Scripts\activate.bat not found; skipping activation.
)


echo.
echo [OK   ] Environment is ready.
endlocal
exit /b 0
