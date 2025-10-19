@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ============================================
rem Build DSL maps for each SUT in a list file
rem ============================================

set "PY=python"

rem Path to THIS .bat
set "THIS_DIR=%~dp0"
rem build_dsl_map.py is in scripts\analysis
set "BUILD_DSL_MAP_PY=%THIS_DIR%\build_dsl_map.py"

rem Input list file
set "LIST_FILE=%~1"
if not defined LIST_FILE set "LIST_FILE=config\suts_and_rw.txt"

echo ============================================
echo Building DSL maps from: "%LIST_FILE%"
echo CWD: %CD%
echo ============================================

if not exist "%LIST_FILE%" (
  echo [ERR ] List file not found: "%LIST_FILE%"
  exit /b 1
)

if not exist "%BUILD_DSL_MAP_PY%" (
  echo [ERR ] build_dsl_map.py not found at "%BUILD_DSL_MAP_PY%"
  echo        Keep a SINGLE copy here: scripts\analysis\build_dsl_map.py
  exit /b 1
)

rem Process non-empty, non-comment lines; strip inline ';' comments.
for /f "usebackq tokens=* delims=" %%L in ("%LIST_FILE%") do (
  set "LINE=%%L"
  rem trim leading spaces
  for /f "tokens=* delims= " %%A in ("!LINE!") do set "LINE=%%A"

  if not "!LINE!"=="" (
    if not "!LINE:~0,1!"=="#" if not "!LINE:~0,1!"==";" (
      for /f "tokens=1 delims=;" %%S in ("!LINE!") do set "SUT=%%~S"
      rem trim again after cutting comment
      for /f "tokens=* delims= " %%Z in ("!SUT!") do set "SUT=%%Z"

      if not "!SUT!"=="" (
        echo.
        echo [SUT ] !SUT!

        for %%P in (7_suts_llm_provider real_world_llm_provider) do (
          set "PROVIDER=%%P"
          set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"

          if /I "!PROVIDER!"=="7_suts_llm_provider" (
            set "OUT=models\hls\SUTs\!SUT!\dsl_map.json"
          ) else (
            set "OUT=models\hls\RWs\!SUT!\dsl_map.json"
          )

          echo   [GRPH] !GRAPH!
          if exist "!GRAPH!" (
            echo   [RUN ] %PY% -u "%BUILD_DSL_MAP_PY%" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"
            %PY% -u "%BUILD_DSL_MAP_PY%" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"
            if errorlevel 1 (
              echo   [ERR ] build_dsl_map.py failed with exit code !errorlevel!
            ) else (
              echo   [OK  ] wrote DSL map -> !OUT!
            )
          ) else (
            echo   [SKIP] no graph:  !PROVIDER!\!SUT!
          )
        )
      )
    )
  )
)

echo.
echo [DONE] build_dsl_maps_for_list.bat finished.
exit /b 0
