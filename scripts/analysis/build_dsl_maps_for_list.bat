@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ---------- resolve python ----------
set "PY=python"
if defined VIRTUAL_ENV if exist "%VIRTUAL_ENV%\Scripts\python.exe" set "PY=%VIRTUAL_ENV%\Scripts\python.exe"

rem ---------- input list ----------
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

echo ============================================
echo Building DSL maps from: "%LIST%"
echo CWD: %CD%
echo ============================================
if not exist "%LIST%" ( echo [ERR] list file not found: %LIST% & exit /b 1 )

rem process each line via subroutine (avoids ') was unexpected...' bug)
for /f "usebackq tokens=* delims=" %%S in ("%LIST%") do call :ProcessLine "%%S"
goto :Done

:ProcessLine
setlocal EnableDelayedExpansion
set "LINE=%~1"
if "!LINE!"=="" goto :eol
set "FIRST=!LINE:~0,1!"
if "!FIRST!"=="#" goto :eol
if "!FIRST!"==";" goto :eol

rem take first token before space , ; # ( )
for /f "tokens=1 delims=,;#() " %%A in ("!LINE!") do set "SUT=%%~A"
if not defined SUT goto :eol

rem pick provider by existing graph
set "PROVIDER=7_suts_llm_provider"
if not exist "artifacts\analysis\!PROVIDER!\!SUT!\graph.json" set "PROVIDER=real_world_llm_provider"
set "GRAPH=artifacts\analysis\!PROVIDER!\!SUT!\graph.json"
if not exist "!GRAPH!" ( echo   [SKIP] no graph: !PROVIDER!\!SUT! & goto :eol )

rem canonical output path
if /i "!PROVIDER!"=="7_suts_llm_provider" (
  set "OUTDIR=models\hls\SUTs\!SUT!"
) else (
  set "OUTDIR=models\hls\RWs\!SUT!"
)
set "OUT=!OUTDIR!\dsl_map.json"
if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>&1

echo.
echo [SUT ] !SUT!
echo   [GRPH] !GRAPH!
echo   [RUN ] %PY% -u "%CD%\scripts\analysis\build_dsl_map.py" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"
%PY% -u "%CD%\scripts\analysis\build_dsl_map.py" --sut "!SUT!" --provider "!PROVIDER!" --graph "!GRAPH!" --out "!OUT!"

rem ---- remove ONLY the legacy mirror (no other changes) ----
if exist "models\hls\!SUT!\dsl_map.json" del /q "models\hls\!SUT!\dsl_map.json" >nul 2>&1
if exist "models\hls\!SUT!" rd /s /q "models\hls\!SUT!" >nul 2>&1

:eol
endlocal & goto :EOF

:Done
echo.
echo [DONE] build_dsl_maps_for_list.bat finished.
endlocal
