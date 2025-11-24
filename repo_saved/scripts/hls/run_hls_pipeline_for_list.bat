@echo off
setlocal EnableExtensions EnableDelayedExpansion
if "%~2"=="" (
  echo Usage: %~nx0 ^<list.txt^> ^<provider^>
  exit /b 2
)
set LIST=%~1
set PROVIDER=%~2
set ROOT=%~dp0..\..
set PY=%ROOT%\.venv\Scripts\python.exe
echo ============================================
echo HLS Sequential Pipeline (DET->TRAIN->NONDET->EMIT)
echo LIST : "%LIST%"
echo ROOT : %ROOT%
echo PY   : %PY%
echo PROV : %PROVIDER%
echo ============================================
call "%ROOT%\scripts\hls\build_hls_gold_det_for_list.bat" "%LIST%" "%PROVIDER%"
call "%ROOT%\scripts\hls\prep_hls_training_from_det_gold_for_list.bat" "%LIST%" "%PROVIDER%"
call "%ROOT%\scripts\hls\build_hls_gold_nondet_for_list.bat" "%LIST%" "%PROVIDER%"
for /f "usebackq delims=" %%S in (`findstr /R /V /C:"^$" /C:"^#.*" /C:"^;.*" "%LIST%"`) do (
  set SUT=%%S
  set ND_DIR=%ROOT%\artifacts\hls_gold_nondet\%PROVIDER%\%%S
  set DT_DIR=%ROOT%\artifacts\hls_gold_det\%PROVIDER%\%%S
  if exist "!ND_DIR!\hls_gold.json" (
    copy /Y "!ND_DIR!\hls_gold.json" "!ND_DIR!\hls_nondet_gold.json" >nul
    if /I "%PROVIDER%"=="7_suts_llm_provider" (
      set DSL=%ROOT%\models\hls\SUTs\%%S\dsl_map.json
    ) else (
      set DSL=%ROOT%\models\hls\RWs\%%S\dsl_map.json
    )
    set GRAPH=%ROOT%\artifacts\analysis\%PROVIDER%\%%S\graph.json
    set OUTDIR_N=%ROOT%\artifacts\hls_nondet\%PROVIDER%\%%S\readables
    if not exist "!OUTDIR_N!" mkdir "!OUTDIR_N!"
    "%PY%" -u "%ROOT%\scripts\readable\emit_hls_all_in_one.py" --sut_dir "!ND_DIR!" --mode nondet --graph "!GRAPH!" --dsl_map "!DSL!" --out "!OUTDIR_N!\hls_stories.js"
  ) else (
    echo [SKIP] NONDET GOLD missing for %%S
  )
  if exist "!DT_DIR!\hls_gold.json" (
    copy /Y "!DT_DIR!\hls_gold.json" "!DT_DIR!\hls_det_gold.json" >nul
    if /I "%PROVIDER%"=="7_suts_llm_provider" (
      set DSL=%ROOT%\models\hls\SUTs\%%S\dsl_map.json
    ) else (
      set DSL=%ROOT%\models\hls\RWs\%%S\dsl_map.json
    )
    set GRAPH=%ROOT%\artifacts\analysis\%PROVIDER%\%%S\graph.json
    set OUTDIR_D=%ROOT%\artifacts\hls_det\%PROVIDER%\%%S\readables
    if not exist "!OUTDIR_D!" mkdir "!OUTDIR_D!"
    "%PY%" -u "%ROOT%\scripts\readable\emit_hls_all_in_one.py" --sut_dir "!DT_DIR!" --mode det --graph "!GRAPH!" --dsl_map "!DSL!" --out "!OUTDIR_D!\hls_stories.js"
  ) else (
    echo [SKIP] DET GOLD missing for %%S
  )
)
echo [DONE] run_hls_pipeline_for_list.bat
endlocal
