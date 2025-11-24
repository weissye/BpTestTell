@echo off
setlocal EnableExtensions
if "%~2"=="" (
  echo Usage: train_hls_llm.bat ^<NAME^> ^<hls_det.json^>
  exit /b 2
)
set "NAME=%~1"
set "DET=%~2"
set "MODEL_DIR=models\hls\%NAME%"
if not exist "%MODEL_DIR%" mkdir "%MODEL_DIR%"

echo [RUN ] Train model: %NAME%
python scripts\hls\train_hls_llm.py --sut "%NAME%" --hls_det "%DET%" --outdir "%MODEL_DIR%"
if errorlevel 1 (echo [FAIL] train_hls_llm.py & exit /b 1)
if not exist "%MODEL_DIR%" (echo [FAIL] Missing model dir: %MODEL_DIR% & exit /b 1)
REM Optional: expect a marker like model_ref.json
if not exist "%MODEL_DIR%\model_ref.json" echo [WARN] model_ref.json not found in %MODEL_DIR% (continuing)
echo [OK  ] %MODEL_DIR%
exit /b 0
