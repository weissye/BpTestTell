@echo off
setlocal
if "%~3"=="" (
  echo Usage: %~nx0 SUT HLS_DET_JSON OUT_NONDET_JSON [SEED]
  exit /b 1
)
set SUT=%~1
set HLSDET=%~2
set OUT=%~3
set SEED=%~4
if "%SEED%"=="" set SEED=142
set MODEL=models\hls\%SUT%
python scripts\hls\generate_nondet_from_llm.py --sut %SUT% --hls_det "%HLSDET%" --trained_model_dir "%MODEL%" --out "%OUT%" --seed %SEED%
