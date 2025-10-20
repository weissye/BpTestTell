@echo off
setlocal enableextensions enabledelayedexpansion

REM === Defaults (can be overridden via environment) ===
if not defined PROFILE set "PROFILE=rich"
if not defined PER_ENTITY_MAX set "PER_ENTITY_MAX=10"
if not defined FAIL_UNDER set "FAIL_UNDER=0"

REM === Config file handling ===
set "CONFIG=%~1"
if not defined CONFIG (
    if exist "config\suts_and_rw.txt" (
        set "CONFIG=config\suts_and_rw.txt"
    ) else (
        echo Usage: %~nx0 ^<config-file^>
        echo Example: %~nx0 config\suts_and_rw.txt
        exit /b 2
    )
)

for %%I in ("%CONFIG%") do set "CONFIG=%%~fI"
if not exist "%CONFIG%" (
    echo [ERR] Config file not found: "%CONFIG%"
    exit /b 3
)

echo ============================================
echo Emitting BPjs readables from: "%CONFIG%"
echo CWD: %CD%
echo PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo Providers: 7_suts_llm_provider ^| real_world_llm_provider
echo ============================================

REM === Read config (ignore blank lines and # comments) ===
set "LIST="
for /f "usebackq delims=" %%L in ("%CONFIG%") do (
    set "LINE=%%L"
    for /f "tokens=* delims= " %%T in ("!LINE!") do set "LINE=%%T"
    if not "!LINE!"=="" if not "!LINE:~0,1!"=="#" (
        set "LIST=!LIST!!LINE!;"
    )
)

REM === Auto-discover if config produced nothing ===
set "ROOT=artifacts\analysis"
if not defined LIST (
    for /d %%P in ("%ROOT%\*") do (
        for /d %%S in ("%%~fP\*") do (
            if exist "%%~fS\graph.json" (
                set "PROVIDER=%%~nxP"
                set "SUT=%%~nxS"
                set "LIST=!LIST!!PROVIDER!\!SUT!;"
            )
        )
    )
)

REM === Process each entry ===
for %%E in (!LIST!) do (
    set "ENTRY=%%~E"
    call :process "!ENTRY!"
)

echo.
echo [DONE] %~nx0 finished.
exit /b 0

:process
setlocal
set "ENTRY=%~1"
set "PROVIDER="
set "SUT=%ENTRY%"

for /f "tokens=1,2 delims=\," %%A in ("%ENTRY%") do (
    set "FIRST=%%~A"
    set "SECOND=%%~B"
)
if defined SECOND (
    set "PROVIDER=%FIRST%"
    set "SUT=%SECOND%"
)

if not defined PROVIDER (
    call :run_one "7_suts_llm_provider" "%SUT%"
    call :run_one "real_world_llm_provider" "%SUT%"
) else (
    call :run_one "%PROVIDER%" "%SUT%"
)
endlocal & exit /b

:run_one
setlocal
set "PROVIDER=%~1"
set "SUT=%~2"

set "GRAPH=artifacts\analysis\%PROVIDER%\%SUT%\graph.json"
if not exist "%GRAPH%" (
    echo   [SKIP] no graph:  %PROVIDER%\%SUT%
    endlocal & exit /b 0
)

echo.
echo [SUT ] %SUT%
echo   [GEN ] dsl_map: %PROVIDER%\%SUT%

set "DSL_DIR=models\hls"
if /i "%PROVIDER%"=="real_world_llm_provider" set "DSL_DIR=models\hls\RWs"
if /i "%PROVIDER%"=="7_suts_llm_provider" set "DSL_DIR=models\hls\SUTs"

set "OUT_DIR=%DSL_DIR%\%SUT%"
if not exist "%OUT_DIR%" mkdir "%OUT_DIR%" >nul 2>&1
set "DSL_MAP=%OUT_DIR%\dsl_map.json"

echo   [RUN ] python -u "%~dp0\..\analysis\build_dsl_map.py" --sut "%SUT%" --provider "%PROVIDER%" --graph "%GRAPH%" --out "%DSL_MAP%"
python -u "%~dp0\..\analysis\build_dsl_map.py" --sut "%SUT%" --provider "%PROVIDER%" --graph "%GRAPH%" --out "%DSL_MAP%"
if errorlevel 1 (
    echo   [ERR ] failed to build DSL map for %PROVIDER%\%SUT%
    endlocal & exit /b 1
)

REM Mirror legacy location for convenience
set "LEGACY=models\hls\%SUT%\dsl_map.json"
copy /Y "%DSL_MAP%" "%LEGACY%" >nul 2>&1

REM Strip UTF-8 BOM if present (prevents JSONDecodeError)
call :strip_bom "%DSL_MAP%"

echo   [OK ] DSL map ready: %DSL_MAP%
echo     using --graph "%GRAPH%"
echo     using --dsl_map "%DSL_MAP%"

for %%M in (det nondet) do (
    echo     using --graph "%GRAPH%"
    echo     using --dsl_map "%DSL_MAP%"
    python -u "%~dp0emit_hls_all_in_one.py" --graph "%GRAPH%" --dsl_map "%DSL_MAP%" --mode %%M --profile "%PROFILE%" --per_entity_max %PER_ENTITY_MAX% --fail_under %FAIL_UNDER%
    if errorlevel 1 (
        echo   [ERR ] emitter failed for %PROVIDER%\%SUT% mode=%%M rc=!errorlevel!
    )
)
endlocal & exit /b 0

:strip_bom
setlocal
set "TARGET=%~1"
if not exist "%TARGET%" endlocal & exit /b 0
powershell -NoProfile -Command ^
  "$p = '%TARGET%';" ^
  "try{" ^
  "  $bytes = [System.IO.File]::ReadAllBytes($p);" ^
  "  if($bytes.Length -ge 3 -and $bytes[0] -eq 0xEF -and $bytes[1] -eq 0xBB -and $bytes[2] -eq 0xBF){" ^
  "    [System.IO.File]::WriteAllBytes($p, $bytes[3..($bytes.Length-1)])" ^
  "  }" ^
  "}catch{ exit 1 }"
endlocal & exit /b 0
