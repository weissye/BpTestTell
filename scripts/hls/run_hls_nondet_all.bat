@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM ------------------------------------------------------------
REM BpTestTell - HLS det -> nondet + emit stories_hls.js (ALL)
REM - Reads config\suts_and_rw.txt
REM - Uses existing gen_hls_det.bat, gen_hls_nondet.bat, emit_hls_all_in_one.py
REM - Uses graph when present: artifacts\analysis\<prov>\<name>\graph.json
REM - Writes verification logs under artifacts\logs
REM - Progress goes to stdout (screen) only; logs are only the 2 scans
REM ------------------------------------------------------------

REM Resolve repo root (this file lives in scripts\hls\)
pushd "%~dp0\..\.." 1>nul || (echo [FAIL] Cannot cd to repo root & exit /b 1)

set "ROOT=%CD%"
set "LIST=config\suts_and_rw.txt"
set "LOGDIR=artifacts\logs"
set "TMP_TARGETS=%LOGDIR%\_hls_targets.txt"

echo ===========================================
echo  ROOT: %ROOT%
echo  LIST: %LIST%
echo ===========================================

if not exist "%LIST%" (
  echo [FAIL] List not found: %LIST%
  popd & exit /b 1
)

if not exist "%LOGDIR%" mkdir "%LOGDIR%" 1>nul 2>nul

REM Sanity: helpers present?
if not exist "scripts\hls\gen_hls_det.bat" (
  echo [FAIL] Missing helper: scripts\hls\gen_hls_det.bat
  popd & exit /b 2
)
if not exist "scripts\hls\gen_hls_nondet.bat" (
  echo [FAIL] Missing helper: scripts\hls\gen_hls_nondet.bat
  popd & exit /b 2
)

REM --- Expand the list file into lines:  PROVIDER|NAME  (via one-time PowerShell) ---
REM Accepted list format:
REM   ; 7_suts_llm_provider
REM   banking
REM   ...
REM   ; real_world_llm_provider
REM   directus
REM   ...
REM Blank lines and comments starting with ';' (header lines only), '#', or '//' are ignored.
powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$p='';Get-Content '%LIST%'|%%{ $t=$_.Trim(); if([string]::IsNullOrWhiteSpace($t)){return};" ^
  "if($t.StartsWith('#') -or $t.StartsWith('//')){return};" ^
  "if($t.StartsWith(';')){ if($t -match '7_suts_llm_provider'){$p='7_suts_llm_provider'} elseif($t -match 'real_world_llm_provider'){$p='real_world_llm_provider'}; return };" ^
  "if($p){ Write-Output ($p+'|'+$t) } }" ^
  > "%TMP_TARGETS%"

if not exist "%TMP_TARGETS%" (
  echo [FAIL] Could not produce targets from %LIST%
  popd & exit /b 1
)

set /a processed=0

for /f "usebackq tokens=1,2 delims=|" %%A in ("%TMP_TARGETS%") do (
  call :ProcessOne "%%~A" "%%~B"
  set /a processed+=1
)

REM =======================
REM Verification scans
REM =======================
echo [SCAN] Writing verification logs under %LOGDIR%

REM 1) interfaces.readable.js: find legacy ndc lambda vs numeric return
> "%LOGDIR%\interfaces_ndc_scan.log" echo === interfaces.readable.js scan (legacy ndc lambda / parseInt) ===
for /r "artifacts" %%F in (interfaces.readable.js) do (
  >> "%LOGDIR%\interfaces_ndc_scan.log" (
    echo [FILE] %%F
    REM regex-like search for "ndc: (x)=>"
    findstr /n /r /c:"ndc:[ ]*(x)=>" "%%F"
    findstr /n /c:"parseInt(" "%%F"
  )
)

REM 2) stories_hls.js: look for numeric/coercion/ID-related patterns
> "%LOGDIR%\stories_scan.log" echo === stories_hls.js scan (parseInt / Number( / isNaN / coercion / pk / id) ===
for /r "artifacts" %%F in (stories_hls.js) do (
  >> "%LOGDIR%\stories_scan.log" (
    echo [FILE] %%F
    findstr /n /c:"parseInt(" "%%F"
    findstr /n /c:"Number("   "%%F"
    findstr /n /c:"isNaN"     "%%F"
    findstr /n /c:"coercion"  "%%F"
    findstr /n /c:" pk "      "%%F"
    findstr /n /c:" id "      "%%F"
  )
)

echo.
echo [DONE] Processed %processed% systems.
popd
exit /b 0


:ProcessOne
set "PROV=%~1"
set "NAME=%~2"

echo ------------------------------------------------------------
echo [RUN ] %PROV% / %NAME%

REM Prefer det_checked LLE; fall back to nondet_checked
set "LLE_DET=artifacts\det_checked\%PROV%\%NAME%\%NAME%_llm_gold_ops.json"
set "LLE_NON=artifacts\nondet_checked\%PROV%\%NAME%\%NAME%_llm_gold_ops.json"
set "LLE="

if exist "%LLE_DET%" (
  set "LLE=%LLE_DET%"
) else if exist "%LLE_NON%" (
  set "LLE=%LLE_NON%"
)

if "%LLE%"=="" (
  echo [WARN] LLE gold not found for %PROV%/%NAME%  -- skipping HLS-DET/NONDET
  goto :Emit
)

REM Output paths
set "OUT_DET=artifacts\hls_det\%PROV%\%NAME%\hls_det_gold.json"
set "OUT_NON=artifacts\hls_nondet\%PROV%\%NAME%\hls_nondet_gold.json"

for %%P in ("%OUT_DET%" "%OUT_NON%") do if not exist "%%~dpP" mkdir "%%~dpP" 1>nul 2>nul

echo [RUN ] HLS-DET from LLE
call scripts\hls\gen_hls_det.bat "%NAME%" "%LLE%" "%OUT_DET%" 1234

echo [RUN ] HLS-NONDET from HLS-DET
call scripts\hls\gen_hls_nondet.bat "%NAME%" "%OUT_DET%" "%OUT_NON%" 1234

:Emit
REM Emit stories_hls.js — prefer DSL map; else graph; else synthesize
set "DSL=artifacts\hls_det\%PROV%\%NAME%\dsl_map.json"
set "GRAPH=artifacts\analysis\%PROV%\%NAME%\graph.json"
set "OUT_DIR=artifacts\hls_nondet\%PROV%\%NAME%"
set "OUT_JS=%OUT_DIR%\readable\stories_hls.js"
if not exist "%OUT_DIR%\readable" mkdir "%OUT_DIR%\readable" 1>nul 2>nul

if exist "%DSL%" (
  echo [EMIT] via DSL map: %DSL%
  if exist ".\.venv\Scripts\python.exe" (
    .\.venv\Scripts\python.exe scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich --dsl_map "%DSL%"
  ) else (
    python scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich --dsl_map "%DSL%"
  )
) else if exist "%GRAPH%" (
  echo [EMIT] via GRAPH: %GRAPH%
  if exist ".\.venv\Scripts\python.exe" (
    .\.venv\Scripts\python.exe scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich --graph "%GRAPH%"
  ) else (
    python scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich --graph "%GRAPH%"
  )
) else (
  echo [EMIT] no DSL/graph found; synthesizing defaults
  if exist ".\.venv\Scripts\python.exe" (
    .\.venv\Scripts\python.exe scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich
  ) else (
    python scripts\readable\emit_hls_all_in_one.py --sut_dir "%OUT_DIR%" --mode nondet --out "%OUT_JS%" --profile rich
  )
)

REM quick sanity (count lines; cheap signal file exists & non-empty)
set "LINES=0"
if exist "%OUT_JS%" (
  for /f "usebackq delims=" %%C in (`findstr /r /n "." "%OUT_JS%" ^| find /c /v ""`) do set "LINES=%%C"
  echo [INFO] %OUT_JS% -> %LINES% lines
) else (
  echo [WARN] stories_hls.js was not created (check previous steps)
)
exit /b 0
