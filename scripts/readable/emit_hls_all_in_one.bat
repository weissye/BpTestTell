@echo off
setlocal EnableExtensions
if "%~3"=="" (
  echo Usage: emit_hls_all_in_one.bat ^<gold.json^> ^<active_samples.json or ""^> ^<out_js^>
  exit /b 2
)
set "GOLD=%~1"
set "ACTIVE=%~2"
set "OUTJS=%~3"

for %%D in ("%OUTJS%") do set "OUTDIR=%%~dpD"
if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo [RUN ] Emit readable JS
if "%ACTIVE%"=="" (
  python scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --out "%OUTJS%"
) else (
  python scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --active "%ACTIVE%" --out "%OUTJS%"
)
if errorlevel 1 (echo [FAIL] emit_hls_all_in_one.py & exit /b 1)
if not exist "%OUTJS%" (echo [FAIL] Missing output: %OUTJS% & exit /b 1)
echo [OK  ] %OUTJS%
exit /b 0
