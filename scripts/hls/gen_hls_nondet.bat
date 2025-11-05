@echo off
setlocal ENABLEEXTENSIONS

rem =====================================================================
rem gen_hls_nondet.bat
rem Usage:
rem   gen_hls_nondet.bat <SUT> [PROVIDER]
rem Examples:
rem   gen_hls_nondet.bat banking 7_suts_llm_provider
rem   gen_hls_nondet.bat github  real_world_llm_provider
rem If PROVIDER omitted, the script auto-detects based on existing hls_det.
rem Environment:
rem   HLS_SHARDS        default 12 (RW), forced to 1 for 7_suts unless HLS_FORCE_SHARDS is set
rem   HLS_FORCE_SHARDS  if set (any value), do not force 1 for 7_suts
rem   HLS_NONDET_MAX    if >0 will pass --max_stories
rem   HLS_SEED          default 911177
rem   HLS_MODEL_ID      optional, forwarded to --model_id
rem   HLS_TEMPERATURE   optional, forwarded to --temperature
rem   HLS_TOP_P         optional, forwarded to --top_p
rem   HLS_N_PER_STORY   optional, forwarded to --n_per_story
rem   PYTHON            path to python; autodetected if not set
rem =====================================================================

set "SUT=%~1"
set "PROVIDER=%~2"

if "%SUT%"=="" goto :USAGE

rem ---------- locate python ----------
if not defined PYTHON (
  if exist ".venv\Scripts\python.exe" ( set "PYTHON=.venv\Scripts\python.exe" ) else ( set "PYTHON=python" )
)

rem ---------- defaults ----------
if not defined HLS_SEED set "HLS_SEED=911177"

rem ---------- resolve provider if missing ----------
if "%PROVIDER%"=="" (
  if exist "artifacts\hls_det\7_suts_llm_provider\%SUT%\hls_det_gold.json" (
    set "PROVIDER=7_suts_llm_provider"
  ) else if exist "artifacts\hls_det\real_world_llm_provider\%SUT%\hls_det_gold.json" (
    set "PROVIDER=real_world_llm_provider"
  ) else (
    echo [ERR] cannot detect provider for %SUT% because hls_det file is missing
    echo       looked in:
    echo       artifacts\hls_det\7_suts_llm_provider\%SUT%\hls_det_gold.json
    echo       artifacts\hls_det\real_world_llm_provider\%SUT%\hls_det_gold.json
    exit /b 2
  )
)

rem ---------- paths ----------
set "IN_SUT=artifacts\hls_det\%PROVIDER%\%SUT%\hls_det_gold.json"
set "MODEL_DIR=models\hls\%SUT%"
set "OUT=artifacts\hls_nondet\%PROVIDER%\%SUT%\hls_nondet_gold.json"
set "SHARD_DIR=artifacts\hls_nondet\%PROVIDER%\%SUT%\shards"

if /i "%PROVIDER%"=="7_suts_llm_provider" (
  set "DSL_MAP=models\hls\SUTs\%SUT%\dsl_map.json"
) else (
  set "DSL_MAP=models\hls\RWs\%SUT%\dsl_map.json"
)

rem ---------- sanity ----------
if not exist "%IN_SUT%" (
  echo [ERR] missing input hls_det json: "%IN_SUT%"
  exit /b 3
)
if not exist "%MODEL_DIR%\model_ref.json" (
  echo [ERR] missing trained model in "%MODEL_DIR%"
  echo       expected file: model_ref.json
  exit /b 4
)

rem ---------- compute shards ----------
set "_DEF_SHARDS=12"
if defined HLS_SHARDS set "_DEF_SHARDS=%HLS_SHARDS%"
set "_SH=%_DEF_SHARDS%"

rem 7_suts usually small: default to 1 shard unless user explicitly forces shards
if /i "%PROVIDER%"=="7_suts_llm_provider" (
  if not defined HLS_FORCE_SHARDS set "_SH=1"
)

rem clamp to at least 1
if "%_SH%"=="" set "_SH=1"
for /f "tokens=1 delims=0123456789" %%Q in ("%_SH%") do set "_SH=1"

rem ---------- print header ----------
echo [GEN ] %SUT%
echo   [IN ] %IN_SUT%
echo   [DSL] %DSL_MAP%
echo   [MOD] %MODEL_DIR%\model_ref.json
echo   [OUT] %OUT%
echo   [ENV] HLS_SHARDS=%_SH%  HLS_NONDET_MAX=%HLS_NONDET_MAX%  HLS_SEED=%HLS_SEED%

rem ---------- build common arg line ----------
set "ARG_COMMON=--sut "%SUT%" --hls_det "%IN_SUT%" --trained_model_dir "%MODEL_DIR%""
if defined HLS_MODEL_ID      set "ARG_COMMON=%ARG_COMMON% --model_id "%HLS_MODEL_ID%""
if defined HLS_TEMPERATURE   set "ARG_COMMON=%ARG_COMMON% --temperature %HLS_TEMPERATURE%"
if defined HLS_TOP_P         set "ARG_COMMON=%ARG_COMMON% --top_p %HLS_TOP_P%"
if defined HLS_N_PER_STORY   set "ARG_COMMON=%ARG_COMMON% --n_per_story %HLS_N_PER_STORY%"
if defined HLS_SEED          set "ARG_COMMON=%ARG_COMMON% --seed %HLS_SEED%"

set "ARG_MAX="
if defined HLS_NONDET_MAX (
  rem only pass if numeric and >0
  for /f "tokens=* delims= " %%Z in ("%HLS_NONDET_MAX%") do set "_MAX=%%Z"
  for /f "tokens=1 delims=0123456789" %%Q in ("%_MAX%") do set "_MAX="
  if not "%_MAX%"=="" (
    rem non-numeric -> ignore
    set "ARG_MAX="
  ) else (
    if "%HLS_NONDET_MAX%"=="0" ( set "ARG_MAX=" ) else ( set "ARG_MAX=--max_stories %HLS_NONDET_MAX%" )
  )
)

rem ---------- single shard fast path ----------
if "%_SH%"=="1" (
  for %%D in ("%OUT%") do if not exist "%%~dpD" mkdir "%%~dpD" >nul 2>nul
  echo [RUN ] HLS-NONDET: %SUT%
  echo   [CMD] %PYTHON% -u "scripts\hls\generate_nondet_from_llm.py" %ARG_COMMON% %ARG_MAX% --out "%OUT%"
  "%PYTHON%" -u "scripts\hls\generate_nondet_from_llm.py" %ARG_COMMON% %ARG_MAX% --out "%OUT%"
  set "RC=%ERRORLEVEL%"
  if not "%RC%"=="0" (
    echo [ERR] generator failed for %SUT% rc=%RC%
    exit /b %RC%
  )
  echo [OK ] NONDET written to %OUT%
  exit /b 0
)

rem ---------- multi-shard path ----------
if not exist "%SHARD_DIR%" mkdir "%SHARD_DIR%" >nul 2>nul

setlocal ENABLEDELAYEDEXPANSION
for /l %%I in (1,1,%_SH%) do (
  set "SHFILE=%SHARD_DIR%\shard_%%I.json"
  echo [RUN ] HLS-NONDET: %SUT% shard %%I of %_SH%
  echo   [CMD] %PYTHON% -u "scripts\hls\generate_nondet_from_llm.py" %ARG_COMMON% %ARG_MAX% --out "!SHFILE!"
  "%PYTHON%" -u "scripts\hls\generate_nondet_from_llm.py" %ARG_COMMON% %ARG_MAX% --out "!SHFILE!"
  set "RC=!ERRORLEVEL!"
  if not "!RC!"=="0" (
    echo [ERR] shard %%I failed rc=!RC!
    endlocal & exit /b !RC!
  )
)
endlocal

call :MERGE_SHARDS
set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" exit /b %RC%

echo [OK ] merged shards to %OUT%
exit /b 0

rem ===================== MERGE SHARDS =====================
:MERGE_SHARDS
if not exist "%SHARD_DIR%" (
  echo [ERR] shards dir missing: "%SHARD_DIR%"
  exit /b 2
)

powershell -NoProfile -ExecutionPolicy Bypass -Command ^
  "$shardDir = '%SHARD_DIR%';" ^
  "$out      = '%OUT%';" ^
  "$files    = Get-ChildItem -Path $shardDir -Filter '*.json' | Sort-Object Name;" ^
  "if (-not $files -or $files.Count -eq 0) { Write-Host ('[ERR] no shard jsons found in ' + $shardDir); exit 3 }" ^
  "$flat = New-Object System.Collections.ArrayList;" ^
  "foreach ($f in $files) {" ^
  "  try {" ^
  "    $arr = Get-Content -Raw $f.FullName | ConvertFrom-Json" ^
  "    if ($arr -is [System.Collections.IEnumerable]) { [void]$flat.AddRange($arr) }" ^
  "  } catch { Write-Host ('[ERR] failed to read or parse ' + $f.FullName + ': ' + $_.Exception.Message); exit 4 }" ^
  "}" ^
  "$json = $flat | ConvertTo-Json -Depth 32;" ^
  "[IO.Directory]::CreateDirectory([IO.Path]::GetDirectoryName($out)) | Out-Null;" ^
  "[IO.File]::WriteAllText($out, $json, [Text.UTF8Encoding]::new($false));" ^
  "Write-Host ([string]::Format('[OK] merged {0} shards, total stories={1} to {2}', $files.Count, $flat.Count, $out))"

set "RC=%ERRORLEVEL%"
if not "%RC%"=="0" (
  echo [ERR] merge failed rc=%RC%
  exit /b %RC%
)
exit /b 0
rem =================== END MERGE SHARDS ===================

:USAGE
echo Usage: %~nx0 ^<SUT^> [7_suts_llm_provider ^| real_world_llm_provider]
exit /b 1
