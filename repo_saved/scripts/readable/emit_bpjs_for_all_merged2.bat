@echo off
setlocal EnableExtensions EnableDelayedExpansion
REM =====================================================================
REM emit_bpjs_for_all_merged.bat   —   ONE launcher to replace both old BATs
REM
REM Usage:
REM   scripts\readable\emit_bpjs_for_all_merged.bat config\suts_and_rw.txt [modes] [profile] [per_entity_max] [fail_under]
REM   - Line format in list:   sut_name [modes] [profile] [per_entity_max] [fail_under]
REM   - Comments/banners are allowed. Lines starting with # ; // == are ignored.
REM   - Providers tried for each SUT:  7_suts_llm_provider   real_world_llm_provider
REM   - Graphs are expected at: artifacts\analysis\<provider>\<sut>\graph.json
REM   - DSL maps written to:   models\hls\SUTs\<sut>\dsl_map.json  (or RWs\ for real_world)
REM     and mirrored to legacy: models\hls\<sut>\dsl_map.json
REM   - Profile 'exhaustive' is auto-mapped to 'rich'.
REM
REM Notes:
REM   * If build_dsl_map.py is missing, we skip DSL map generation but still try to emit
REM     using a pre-existing models\hls\<sut>\dsl_map.json (if present).
REM   * If emit_hls_all_in_one.py is missing, we only do DSL maps.
REM =====================================================================

set "_HERE=%~dp0"
set "_ROOT=%CD%"
set "TARGET=%~1"
if "%TARGET%"=="" (
  echo Usage: %~nx0 ^<list_file.txt^> [modes] [profile] [per_entity_max] [fail_under]
  exit /b 2
)

set "MODES=%~2"
if "%MODES%"=="" set "MODES=det,nondet"

set "PROFILE=%~3"
if "%PROFILE%"=="" set "PROFILE=rich"
if /I "%PROFILE%"=="exhaustive" set "PROFILE=rich"

set "PER_ENTITY_MAX=%~4"
if "%PER_ENTITY_MAX%"=="" set "PER_ENTITY_MAX=10"

set "FAIL_UNDER=%~5"
if "%FAIL_UNDER%"=="" set "FAIL_UNDER=0"

REM Tools (allow overrides via environment)
if not defined BUILDER set "BUILDER=%_HERE%\..\analysis\build_dsl_map.py"
if not defined EMITTER set "EMITTER=%_HERE%\emit_hls_all_in_one.py"

set "HAS_BUILDER=1"
if not exist "%BUILDER%" (
  echo [WARN] "%BUILDER%" not found. DSL map building will be skipped if maps are missing.
  set "HAS_BUILDER=0"
)
set "HAS_EMITTER=1"
if not exist "%EMITTER%" (
  echo [WARN] "%EMITTER%" not found. Story emission will be skipped.
  set "HAS_EMITTER=0"
)

echo ============================================
echo Emitting BPjs readables from: "%TARGET%"
echo CWD: %_ROOT%
echo PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo Providers: 7_suts_llm_provider ^| real_world_llm_provider
echo ============================================

if not exist "%TARGET%" (
  echo [ERR ] List file not found: %TARGET%
  exit /b 2
)

REM Ensure base output dirs exist
if not exist "models\hls\SUTs" mkdir "models\hls\SUTs" >nul 2>nul
if not exist "models\hls\RWs"  mkdir "models\hls\RWs"  >nul 2>nul
if not exist "models\hls"      mkdir "models\hls"      >nul 2>nul

for /f "usebackq delims=" %%L in ("%TARGET%") do (
  set "LINE=%%L"
  if not defined LINE ( rem skip blanks
  ) else (
    set "TRIM=!LINE: =!"
    set "HEAD2=!TRIM:~0,2!"
    set "HEAD3=!TRIM:~0,3!"
    if "!HEAD2!"=="# " ( rem comment
    ) else if "!HEAD2!"=="; " ( rem comment
    ) else if "!HEAD3!"=="// " ( rem comment
    ) else if "!HEAD2!"=="==" ( rem banner
    ) else if "!TRIM!"=="#" ( rem comment
    ) else if "!TRIM!"==";" ( rem comment
    ) else if "!TRIM!"=="//" ( rem comment
    ) else if "!TRIM:~0,1!"=="#" ( rem comment
    ) else if "!TRIM:~0,1!"==";" ( rem comment
    ) else if "!TRIM:~0,2!"=="==" ( rem banner
    ) else (
      for /f "tokens=1-5 delims=,;| 	" %%A in ("!LINE!") do (
        set "SUT=%%~A"
        set "LMODES=%%~B"
        set "LPROFILE=%%~C"
        set "LPEM=%%~D"
        set "LFAIL=%%~E"
        if not defined LMODES set "LMODES=%MODES%"
        if not defined LPROFILE set "LPROFILE=%PROFILE%"
        if /I "!LPROFILE!"=="exhaustive" set "LPROFILE=rich"
        if not defined LPEM set "LPEM=%PER_ENTITY_MAX%"
        if not defined LFAIL set "LFAIL=%FAIL_UNDER%"
        call :process_sut "!SUT!" "!LMODES!" "!LPROFILE!" "!LPEM!" "!LFAIL!"
      )
    )
  )
)

echo.
echo [DONE] %~nx0 finished.
exit /b 0

:process_sut
setlocal EnableExtensions EnableDelayedExpansion
set "SUT=%~1"
set "MODES=%~2"
set "PROFILE=%~3"
set "PEM=%~4"
set "FAIL=%~5"

echo.
echo [SUT ] !SUT!

REM Providers to try for this SUT
for %%P in (7_suts_llm_provider real_world_llm_provider) do (
  set "PROVIDER=%%P"
  set "GRAPH=artifacts\analysis\%%P\!SUT!\graph.json"
  if exist "!GRAPH!" (
    REM Prepare DSL map out path by provider
    if "%%P"=="7_suts_llm_provider" (
      set "MAP_OUT=models\hls\SUTs\!SUT!\dsl_map.json"
    ) else (
      set "MAP_OUT=models\hls\RWs\!SUT!\dsl_map.json"
    )
    if not exist "%%~dpnXMAP_OUT%%" ( rem create dir if needed
    )
    if not exist "models\hls\SUTs\!SUT!" mkdir "models\hls\SUTs\!SUT!" >nul 2>nul
    if not exist "models\hls\RWs\!SUT!"  mkdir "models\hls\RWs\!SUT!"  >nul 2>nul

    echo   [GEN ] dsl_map: %%P\!SUT!
    if "!HAS_BUILDER!"=="1" (
      echo   [RUN ] python -u "%BUILDER%" --sut "!SUT!" --provider "%%P" --graph "!GRAPH!" --out "!MAP_OUT!"
      python -u "%BUILDER%" --sut "!SUT!" --provider "%%P" --graph "!GRAPH!" --out "!MAP_OUT!"
      if errorlevel 1 (
        echo   [ERR ] build_dsl_map failed for %%P\!SUT!  rc=!errorlevel!
      ) else (
        echo [OK] wrote DSL map -> !MAP_OUT!
        REM Mirror to legacy path used by emitters
        set "LEGACY=models\hls\!SUT!\dsl_map.json"
        if not exist "models\hls\!SUT!" mkdir "models\hls\!SUT!" >nul 2>nul
        copy /Y "!MAP_OUT!" "!LEGACY!" >nul
        echo [OK] mirrored legacy -> %CD%\!LEGACY!
        echo   [OK ] DSL map ready: !LEGACY!
      )
    ) else (
      echo   [SKIP] builder missing; will try to use existing legacy models\hls\!SUT!\dsl_map.json
    )

    REM Emit stories (if possible)
    if "!HAS_EMITTER!"=="1" (
      set "LEGACY=models\hls\!SUT!\dsl_map.json"
      if exist "!LEGACY!" (
        set "SUT_DIR=%%P\!SUT!"
        for %%M in (!MODES!) do (
          echo     using --graph "!GRAPH!"
          echo     using --dsl_map "!LEGACY!"
          call python -u "%EMITTER%" ^
            --sut_dir "!SUT_DIR!" ^
            --mode %%M ^
            --graph "!GRAPH!" ^
            --dsl_map "!LEGACY!" ^
            --profile "!PROFILE!" ^
            --per_entity_max !PEM! ^
            --fail_under_stories !FAIL!
          if errorlevel 1 (
            echo   [ERR ] emitter failed for %%P\!SUT! mode=%%M rc=!errorlevel!
          )
        )
      ) else (
        echo   [SKIP] no DSL map available at "!LEGACY!" — cannot emit stories for %%P\!SUT!
      )
    )
  ) else (
    echo   [SKIP] no graph:  %%P\!SUT!
  )
)

endlocal
exit /b 0
