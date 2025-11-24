@echo off
setlocal EnableExtensions

REM Root of your real-world specs
set "ROOT=packs\realworld"
REM Path to your venv python
set "PY=.venv\Scripts\python.exe"

echo [INFO] Converting every openapi.yaml/yml to openapi.json under "%ROOT%" ...

set /a FOUND=0
set /a CONVERTED=0
set /a FAILED=0

for /r "%ROOT%" %%F in (openapi.yaml) do call :do_convert "%%~fF"
for /r "%ROOT%" %%F in (openapi.yml)  do call :do_convert "%%~fF"

echo(
echo [INFO] Done. FOUND=%FOUND%  CONVERTED=%CONVERTED%  FAILED=%FAILED%
exit /b 0

:do_convert
set /a FOUND+=1
set "SRC=%~1"
for %%A in ("%SRC%") do set "DST=%%~dpAopenapi.json"

REM Pure one-liner Python; no here-doc, no line continuations.
"%PY%" -c "import json,yaml;from pathlib import Path;p=Path(r'%SRC%');o=Path(r'%DST%');o.write_text(json.dumps(yaml.safe_load(p.read_text(encoding='utf-8')),ensure_ascii=False,indent=2),encoding='utf-8')" 1>nul 2>nul

if errorlevel 1 (
  echo [FAIL] %SRC%
  set /a FAILED+=1
) else (
  echo [OK]   %SRC%  ^> openapi.json
  set /a CONVERTED+=1
)
goto :eof
