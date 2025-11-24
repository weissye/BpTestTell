@echo off
setlocal
if "%~2"=="" (
  echo Usage: %~nx0 SUT HLS_DET_JSON
  exit /b 1
)
set SUT=%~1
set HLSDET=%~2
set OUTDIR=models\hls\%SUT%
python scripts\hls\train_hls_llm.py --sut %SUT% --hls_det "%HLSDET%" --out_dir "%OUTDIR%"
