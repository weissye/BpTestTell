@echo off
setlocal EnableExtensions EnableDelayedExpansion
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

set "MODEL_DIR=models\hls\ALL"
set "REF=%MODEL_DIR%\model_ref.json"
if not exist "%REF%" (
  echo [ERROR] Missing %REF%  (run scripts\hls\train_openai_all.bat)
  exit /b 1
)

for /f "usebackq delims=" %%S in ("%LIST%") do call :ONE "%%S"
echo NONDET DONE for all.
exit /b 0

:ONE
setlocal
set "NAME=%~1"
if "%NAME%"=="" goto :done
if "%NAME:~0,1%"=="#" goto :done

set "DET1=artifacts\hls_det\7_suts_llm_provider\%NAME%\hls_det_gold.json"
set "DET2=artifacts\hls_det\real_world_llm_provider\%NAME%\hls_det_gold.json"
set "DET="  &  set "NONDET_BASE=artifacts\hls_nondet"

if exist "%DET1%" ( set "DET=%DET1%" & set "NONDET_BASE=%NONDET_BASE%\7_suts_llm_provider" )
if exist "%DET2%" ( set "DET=%DET2%" & set "NONDET_BASE=%NONDET_BASE%\real_world_llm_provider" )

if "%DET%"=="" (
  echo [SKIP] Missing HLS-DET for %NAME%
  goto :done
)

for /f "usebackq tokens=2 delims=:" %%M in (`findstr /i "fine_tuned_model" "%REF%"`) do set "MID=%%~M"
set "MID=%MID:~,256%"
set "MID=%MID: =%"
set "MID=%MID:\"",=%"
set "MID=%MID:\"",=%"

set "OUT_NONDET=%NONDET_BASE%\%NAME%\hls_nondet_gold.json"
if "%MID%"=="" (
  echo [WARN] No fine_tuned_model in %REF% ; using local shuffle mode
  python scripts\hls\generate_nondet_from_llm.py --sut "%NAME%" --hls_det "%DET%" --trained_model_dir "%MODEL_DIR%" --out "%OUT_NONDET%" --seed 142 || (endlocal & exit /b 1)
) else (
  python scripts\hls\generate_nondet_from_llm.py --sut "%NAME%" --hls_det "%DET%" --trained_model_dir "%MODEL_DIR%" --out "%OUT_NONDET%" --seed 142 --model_id "%MID%" || (endlocal & exit /b 1)
)
echo [NONDET] %OUT_NONDET%

:done
endlocal & goto :eof
