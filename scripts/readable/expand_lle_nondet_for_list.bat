@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ---------- locate repo root ----------
for %%A in ("%~dp0..\..") do set "ROOT=%%~fA"
cd /d "%ROOT%"

rem ---------- tools ----------
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
set "EXPANDER=%ROOT%\scripts\readable\expand_lle_gold_nondet.py"
set "EXTRACTOR=%ROOT%\scripts\readable\build_lle_field_catalog_from_graph.py"
set "NORMALIZER=%ROOT%\scripts\readable\normalize_gold_for_readables.py"

rem ---------- list file ----------
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

if exist "%LIST%" (
  set "LISTABS=%LIST%"
) else (
  set "LISTABS=%ROOT%\%LIST%"
)

if not exist "%LISTABS%" (
  echo [ERR] list file not found: %LIST%
  exit /b 2
)

echo ============================================
echo LLE NONDET expansion from DET + graph-based field catalogs
echo ROOT      : %ROOT%
echo LIST file : %LISTABS%
echo PY        : %PY%
echo EXPANDER  : %EXPANDER%
echo EXTRACTOR : %EXTRACTOR%
echo NORMALIZER: %NORMALIZER%
echo ============================================

rem Provider names aligned with HLS / graph analysis
set "P7=7_suts_llm_provider"
set "PRW=real_world_llm_provider"

rem ---------- iterate SUTs from list ----------
for /f usebackq^ tokens^=*^ delims^= %%L in ("%LISTABS%") do (
  set "SUT=%%L"
  call :process_one
)

echo [DONE] expand_lle_nondet_for_list.bat
exit /b 0


:process_one
rem Trim spaces
for /f "tokens=* delims= " %%S in ("!SUT!") do set "SUT=%%~S"

rem Skip empty / commented lines
if "!SUT!"=="" goto :eof
if "!SUT:~0,1!"=="#" goto :eof
if "!SUT:~0,1!"==";" goto :eof

rem Decide source pack (7_suts vs realworld) for compatibility
set "SRC="
if exist "packs\7_suts\!SUT!\openapi.json" (
  set "SRC=7suts"
) else if exist "packs\realworld\!SUT!\openapi.json" (
  set "SRC=realworld"
) else (
  echo [WARN] SUT "!SUT!" not found under packs\7_suts or packs\realworld - skipping
  goto :eof
)

if "!SRC!"=="7suts" (
  set "PROV=!P7!"
) else (
  set "PROV=!PRW!"
)

rem Graph must match the HLS pipeline
set "GRAPH=artifacts\analysis\!PROV!\!SUT!\graph.json"
if not exist "!GRAPH!" (
  echo [WARN] graph.json missing for "!PROV!\!SUT!" at "!GRAPH!" - skipping
  goto :eof
)

rem ---------- field catalog (graph-based, shared with HLS logic) ----------
set "CATALOG=artifacts\lle_fields\!PROV!\!SUT!\field_catalog.json"
if not exist "!CATALOG!" (
  echo [INFO] field_catalog missing for "!PROV!\!SUT!", building from graph
  mkdir "artifacts\lle_fields\!PROV!\!SUT!" >nul 2>nul
  "%PY%" "%EXTRACTOR%" --graph "!GRAPH!" --out "!CATALOG!"
  if errorlevel 1 (
    echo [ERR ] build_lle_field_catalog_from_graph.py failed for "!PROV!\!SUT!"
    goto :eof
  )
)

rem ---------- DET input (we use *_llm_gold.json as before) ----------
set "DET=artifacts\det_checked\!PROV!\!SUT!\!SUT!_llm_gold.json"
if not exist "!DET!" (
  echo [WARN] DET *_llm_gold.json not found for "!PROV!\!SUT!" at "!DET!" - skipping
  goto :eof
)

rem ---------- output + temp ----------
set "OUTDIR=artifacts\nondet_checked\!PROV!\!SUT!"
if not exist "!OUTDIR!" mkdir "!OUTDIR!" >nul 2>nul

set "OUTP=!OUTDIR!\!SUT!_llm_gold.json"
set "TMP=!OUTDIR!\__det_norm_%RANDOM%%RANDOM%.json"

echo [INFO] SUT=!SUT! PROV=!PROV!
echo [DBG ] DET     = "!DET!"
echo [DBG ] CATALOG = "!CATALOG!"
echo [DBG ] TMP     = "!TMP!"
echo [DBG ] OUTP    = "!OUTP!"

rem ---------- normalize DET ----------
"%PY%" "%NORMALIZER%" --out "!TMP!" "!DET!"
if errorlevel 1 (
  echo [ERR ] normalize_gold_for_readables.py failed for "!PROV!\!SUT!"
  del /q "!TMP!" >nul 2>nul
  goto :eof
)

rem ---------- expand ----------
echo [RUN ] expand nondet for "!PROV!\!SUT!"
"%PY%" "%EXPANDER%" --det "!TMP!" --catalog "!CATALOG!" --out "!OUTP!" --single-cap 8 --pairwise-cap 8 --include-negative 1
if errorlevel 1 (
  echo [ERR ] expand_lle_gold_nondet.py failed for "!PROV!\!SUT!"
  del /q "!TMP!" >nul 2>nul
  goto :eof
)

if exist "!OUTP!" (
  echo [OK  ] wrote "!OUTP!"
) else (
  echo [ERR ] failed to write "!OUTP!"
)

del /q "!TMP!" >nul 2>nul
goto :eof
