@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ===========================================================
rem Emit BPjs readables (and always build DSL maps first)
rem ===========================================================

set "PY=python"

rem This .bat is in scripts\readable\
set "THIS_DIR=%~dp0"
set "EMIT_PY=%THIS_DIR%\emit_bpjs_readable.py"
rem Single canonical build_dsl_map.py location:
set "BUILD_DSL_MAP_PY=%THIS_DIR%\..\analysis\build_dsl_map.py"

rem Input list file
set "LIST_FILE=%~1"
if not defined LIST_FILE set "LIST_FILE=config\suts_and_rw.txt"

rem Optional knobs (defaults)
if not defined PROFILE set "PROFILE=exhaustive"
if not defined PER_ENTITY_MAX set "PER_ENTITY_MAX=10"
if not defined FAIL_UNDER set "FAIL_UNDER=0"

echo(============================================
echo(Emitting BPjs readables from: "%LIST_FILE%"
echo(CWD: %CD%
echo(PROFILE=%PROFILE%  PER_ENTITY_MAX=%PER_ENTITY_MAX%  FAIL_UNDER=%FAIL_UNDER%
echo(============================================

if not exist "%LIST_FILE%" (
  echo([ERR ] List file not found: "%LIST_FILE%"
  exit /b 1
)

if not exist "%BUILD_DSL_MAP_PY%" (
  echo([ERR ] build_dsl_map.py not found at "%BUILD_DSL_MAP_PY%"
  echo(       Keep a SINGLE copy here: scripts\analysis\build_dsl_map.py
  exit /b 1
)

if not exist "%EMIT_PY%" (
  echo([WARN] "%EMIT_PY%" not found.
  echo(       I will still build DSL maps; readable emission will be skipped.
)

rem Iterate SUTs: skip blanks/#/; and strip inline comments after ';'
for /f "usebackq tokens=* delims=" %%L in ("%LIST_FILE%") do (
  set "LINE=%%L"
  for /f "tokens=* delims= " %%A in ("!LINE!") do set "LINE=%%A"
  if not "!LINE!"=="" if not "!LINE:~0,1!"=="#" if not "!LINE:~0,1!"==";" (
    for /f "tokens=1 delims=;" %%S in ("!LINE!") do set "SUT=%%~S"
    for /f "tokens=* delims= " %%Z in ("!SUT!") do set "SUT=%%Z"

    if not "!SUT!"=="" (
      echo(
      echo([SUT ] !SUT!)

      for %%P in (7_suts_llm_provider real_world_llm_provider) do (
        set "PROVIDER=%%P"
        set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"

        rem Output location for new DSL map (canonical)
        if /I "!PROVIDER!"=="7_suts_llm_provider" (
          set "OUT=models\hls\SUTs\!SUT!\dsl_map.json"
        ) else (
          set "OUT=models\hls\RWs\!SUT!\dsl_map.json"
        )

        rem Legacy path (both providers mirror to models\hls\<sut>\dsl_map.json)
        set "DSL_MAP_LEGACY=models\hls\!SUT!\dsl_map.json"

        echo(  [GEN ] dsl_map: !PROVIDER!\!SUT!
        if exist "!GRAPH!" (
          echo(  [RUN ] %PY% -u "%BUILD_DSL_MAP_PY%" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"
          %PY% -u "%BUILD_DSL_MAP_PY%" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"
          if errorlevel 1 (
            echo(  [ERR ] build_dsl_map.py failed with exit code !errorlevel!
          ) else (
            echo(  [OK ] DSL map ready: !OUT!
          )
        ) else (
          echo(  [SKIP] no graph:  !PROVIDER!\!SUT!
        )

        rem Emit readables only if emitter exists and graph exists
        if exist "!EMIT_PY!" if exist "!GRAPH!" (
          echo(  [RUN ] det JS: !PROVIDER!\!SUT!
          echo(    using --graph "!GRAPH!"
          echo(    using --dsl_map "!DSL_MAP_LEGACY!"
          %PY% -u "%EMIT_PY%" ^
            --profile "!PROFILE!" ^
            --per_entity_max "!PER_ENTITY_MAX!" ^
            --fail_under "!FAIL_UNDER!" ^
            --mode det ^
            --provider "!PROVIDER!" ^
            --sut "!SUT!" ^
            --graph "!GRAPH!" ^
            --dsl_map "!DSL_MAP_LEGACY!"
          if errorlevel 1 (
            echo(  [ERR ] emitter ^(det^) failed with exit code !errorlevel!
          )

          echo(  [RUN ] nondet JS: !PROVIDER!\!SUT!
          echo(    using --graph "!GRAPH!"
          echo(    using --dsl_map "!DSL_MAP_LEGACY!"
          %PY% -u "%EMIT_PY%" ^
            --profile "!PROFILE!" ^
            --per_entity_max "!PER_ENTITY_MAX!" ^
            --fail_under "!FAIL_UNDER!" ^
            --mode nondet ^
            --provider "!PROVIDER!" ^
            --sut "!SUT!" ^
            --graph "!GRAPH!" ^
            --dsl_map "!DSL_MAP_LEGACY!"
          if errorlevel 1 (
            echo(  [ERR ] emitter ^(nondet^) failed with exit code !errorlevel!
          )
        )
      )
    )
  )
)

echo(
echo([DONE] emit_bpjs_for_all.bat finished.
exit /b 0
