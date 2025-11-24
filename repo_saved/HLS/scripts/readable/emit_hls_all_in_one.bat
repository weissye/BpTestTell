@echo off
setlocal
if "%~3"=="" (
  echo Usage: %~nx0 HLS_GOLD_JSON ACTIVE_SAMPLES_JSON OUT_JS
  echo Tip: If you don't have ACTIVE samples, pass "" (empty quotes) to use only PASSIVE.
  exit /b 1
)
set GOLD=%~1
set ACTIVE=%~2
set OUT=%~3
python scripts\readable\emit_hls_all_in_one.py --gold "%GOLD%" --active_samples "%ACTIVE%" --out "%OUT%"
