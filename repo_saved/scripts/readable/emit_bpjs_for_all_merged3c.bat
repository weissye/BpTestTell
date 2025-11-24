@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM === Configuration ===
set "PROFILE=rich"
set "PER_ENTITY_MAX=10"
set "FAIL_UNDER=0"

set "DEFAULT_CFG=%CD%\config\suts_and_rw.txt"
set "CFG=%~1"
if "%CFG%"=="" set "CFG=%DEFAULT_CFG%"

echo ============================================
echo Emitting BPjs readables from: "%CFG%"
echo CWD: %CD%
echo PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo Providers: 7_suts_llm_provider ^| real_world_llm_provider
echo ============================================

set "SCRIPT_DIR=%~dp0"

if not exist "%CFG%" (
  echo.
  echo [ERR] Config file not found: "%CFG%"
  exit /b 2
)

for /f "usebackq tokens=* delims=" %%L in ("%CFG%") do (
  set "raw=%%L"
  REM trim leading spaces
  for /f "tokens=* delims= " %%A in ("!raw!") do set "line=%%A"
  if not "!line!"=="" if not "!line:~0,1!"=="#" (
    set "SUT=!line!"
    echo.
    echo [SUT ] !SUT!
    call :PROCESS_PROVIDER 7_suts_llm_provider "!SUT!"
    call :PROCESS_PROVIDER real_world_llm_provider "!SUT!"
  )
)

echo.
echo [DONE] %~nx0 finished.
exit /b 0

:PROCESS_PROVIDER
set "PROVIDER=%~1"
set "SUT=%~2"

if /i "%PROVIDER%"=="7_suts_llm_provider" (
  set "DSL_MAP=models\hls\SUTs\%SUT%\dsl_map.json"
  set "SUT_DIR=models\hls\SUTs\%SUT%"
) else (
  set "DSL_MAP=models\hls\RWs\%SUT%\dsl_map.json"
  set "SUT_DIR=models\hls\RWs\%SUT%"
)
set "GRAPH=artifacts\analysis\%PROVIDER%\%SUT%\graph.json"

if not exist "%GRAPH%" (
  echo   [SKIP] no graph:  %PROVIDER%\%SUT%
  goto :eof
)

echo   [GEN ] dsl_map: %PROVIDER%\%SUT%
echo   [RUN ] python -u "%SCRIPT_DIR%\..\analysis\build_dsl_map.py" --sut "%SUT%" --provider "%PROVIDER%" --graph "%GRAPH%" --out "%DSL_MAP%"
python -u "%SCRIPT_DIR%\..\analysis\build_dsl_map.py" --sut "%SUT%" --provider "%PROVIDER%" --graph "%GRAPH%" --out "%DSL_MAP%"
if errorlevel 1 (
  echo   [ERR ] failed to build DSL map for %PROVIDER%\%SUT%
  goto :eof
)
echo   [OK ] DSL map ready: %DSL_MAP%
echo     using --graph "%GRAPH%"
echo     using --dsl_map "%DSL_MAP%"

REM Strip UTF-8 BOM if present (prevents JSONDecodeError)
powershell -NoProfile -Command ^
  "$p='%CD%\%DSL_MAP%'; if (Test-Path $p) { $b=[System.IO.File]::ReadAllBytes($p); if ($b.Length -ge 3 -and $b[0] -eq 239 -and $b[1] -eq 187 -and $b[2] -eq 191) { [System.IO.File]::WriteAllBytes($p, $b[3..($b.Length-1)]) } }"

REM --- Emit (det) ---
echo     using --graph "%GRAPH%"
echo     using --dsl_map "%DSL_MAP%"
python -u "%SCRIPT_DIR%\emit_hls_all_in_one.py" --sut_dir "%SUT_DIR%" --mode det --graph "%GRAPH%" --dsl_map "%DSL_MAP%" --profile "%PROFILE%" --per_entity_max %PER_ENTITY_MAX% --fail_under_stories %FAIL_UNDER%
if errorlevel 1 (
  echo   [ERR ] emitter failed for %PROVIDER%\%SUT% mode=det rc=!ERRORLEVEL!
) else (
  echo   [OK ] emitter done for %PROVIDER%\%SUT% mode=det
)

REM --- Emit (nondet) ---
echo     using --graph "%GRAPH%"
echo     using --dsl_map "%DSL_MAP%"
python -u "%SCRIPT_DIR%\emit_hls_all_in_one.py" --sut_dir "%SUT_DIR%" --mode nondet --graph "%GRAPH%" --dsl_map "%DSL_MAP%" --profile "%PROFILE%" --per_entity_max %PER_ENTITY_MAX% --fail_under_stories %FAIL_UNDER%
if errorlevel 1 (
  echo   [ERR ] emitter failed for %PROVIDER%\%SUT% mode=nondet rc=!ERRORLEVEL!
) else (
  echo   [OK ] emitter done for %PROVIDER%\%SUT% mode=nondet
)

goto :eof
