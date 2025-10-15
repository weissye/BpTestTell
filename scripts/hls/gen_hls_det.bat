@echo off
setlocal EnableExtensions
if "%~3"=="" (
  echo Usage: gen_hls_det.bat ^<NAME^> ^<lle_gold.json^> ^<out_hls_det.json^> [seed]
  exit /b 2
)

set "NAME=%~1"
set "LLE=%~2"
set "OUT=%~3"
set "SEED=%~4"
if "%SEED%"=="" set "SEED=42"

for %%D in ("%OUT%") do set "OUTDIR=%%~dpD"
if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo [RUN ] DET→HLS-DET: %NAME%
python scripts\hls\generate_hls_from_lle.py --sut "%NAME%" --lle_gold "%LLE%" --out "%OUT%" --seed %SEED%
if errorlevel 1 (echo [FAIL] generate_hls_from_lle.py & exit /b 1)
if not exist "%OUT%" (echo [FAIL] Missing output: %OUT% & exit /b 1)
echo [OK  ] %OUT%
exit /b 0
