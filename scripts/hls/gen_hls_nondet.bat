@echo off
setlocal EnableExtensions
if "%~3"=="" (
  echo Usage: gen_hls_nondet.bat ^<NAME^> ^<hls_det.json^> ^<out_nondet.json^> [seed]
  exit /b 2
)
set "NAME=%~1"
set "DET=%~2"
set "OUT=%~3"
set "SEED=%~4"
if "%SEED%"=="" set "SEED=142"
set "MODEL_DIR=models\hls\%NAME%"

if not exist "%MODEL_DIR%" (
  echo [FAIL] Model dir not found: %MODEL_DIR%  (run train_hls_llm.bat first)
  exit /b 1
)

for %%D in ("%OUT%") do set "OUTDIR=%%~dpD"
if not exist "%OUTDIR%" mkdir "%OUTDIR%"

echo [RUN ] NON-DET: %NAME%
python scripts\hls\generate_nondet_from_llm.py --sut "%NAME%" --hls_det "%DET%" --trained_model_dir "%MODEL_DIR%" --out "%OUT%" --seed %SEED%
if errorlevel 1 (echo [FAIL] generate_nondet_from_llm.py & exit /b 1)
if not exist "%OUT%" (echo [FAIL] Missing output: %OUT% & exit /b 1)
echo [OK  ] %OUT%
exit /b 0
