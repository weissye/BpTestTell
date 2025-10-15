@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM Usage: scripts\hls\train_hls_llm_all.bat [LIST_PATH]
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

set "OUTDIR=models\hls\ALL"
if not exist "%OUTDIR%" mkdir "%OUTDIR%"
set "JSONL=%OUTDIR%\train.jsonl"
if exist "%JSONL%" del "%JSONL%"

set /a COUNT=0
for /f "usebackq delims=" %%S in ("%LIST%") do call :APPEND_ONE "%%S"
echo [OK] Dataset: %JSONL%  (from %COUNT% systems)

REM write stub model ref (so you can proceed immediately)
python scripts\hls\write_all_model_ref.py --jsonl "%JSONL%" --out "%OUTDIR%\model_ref.json" || exit /b 1
echo [OK] ALL model ref at %OUTDIR%\model_ref.json
exit /b 0

:APPEND_ONE
setlocal EnableExtensions EnableDelayedExpansion
set "NAME=%~1"
if "%NAME%"=="" goto :done
if "%NAME:~0,1%"=="#" goto :done

set "DET1=artifacts\hls_det\7_suts_llm_provider\%NAME%\hls_det_gold.json"
set "DET2=artifacts\hls_det\real_world_llm_provider\%NAME%\hls_det_gold.json"
set "DET="

if exist "%DET1%" set "DET=%DET1%"
if exist "%DET2%" set "DET=%DET2%"

if not "%DET%"=="" (
  python scripts\hls\append_det_to_jsonl.py --det "%DET%" --out "%JSONL%" || (endlocal & exit /b 1)
  endlocal & set /a COUNT+=1 & goto :eof
) else (
  echo [WARN] Missing HLS-DET for %NAME%
)
:done
endlocal & goto :eof
