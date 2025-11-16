@echo off
setlocal EnableExtensions EnableDelayedExpansion

rem ---------- locate repo root ----------
for %%A in ("%~dp0..\..") do set "ROOT=%%~fA"
cd /d "%ROOT%"

rem ---------- tools ----------
set "PY=%ROOT%\.venv\Scripts\python.exe"
if not exist "%PY%" set "PY=python"
set "EXPANDER=%ROOT%\scripts\readable\expand_lle_gold_nondet.py"
set "EXTRACTOR=%ROOT%\scripts\readable\extract_field_catalog.py"
set "NORMALIZER=%ROOT%\scripts\readable\normalize_gold_for_readables.py"

rem ---------- list file ----------
set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"
if exist "%LIST%" (set "LISTABS=%LIST%") else (set "LISTABS=%ROOT%\%LIST%")
if not exist "%LISTABS%" (
  echo [ERR] list file not found: %LIST%
  echo --------------------------------------------
  echo DONE.
  exit /b 1
)

echo [DBG] Python="%PY%"
echo [DBG] Expander="%EXPANDER%"
echo [DBG] Extractor="%EXTRACTOR%"
echo [DBG] Normalizer="%NORMALIZER%"
echo Using LIST: %LISTABS%
echo Providers focus: auto

set "P7=7suts_llm_provider"
set "PRW=realworld_llm_provider"

for /f usebackq^ tokens^=*^ delims^= %%L in ("%LISTABS%") do (
  set "SUT=%%L"
  if not "!SUT!"=="" if "!SUT:~0,1!" NEQ "#" call :process
)

echo --------------------------------------------
echo DONE.
exit /b 0

:process
for /f "tokens=* delims= " %%S in ("!SUT!") do set "SUT=%%~S"

set "OPENAPI="
set "SRC="

if exist "packs\7_suts\!SUT!\openapi.json" (
  set "OPENAPI=packs\7_suts\!SUT!\openapi.json"
  set "SRC=7suts"
) else if exist "packs\realworld\!SUT!\openapi.json" (
  set "OPENAPI=packs\realworld\!SUT!\openapi.json"
  set "SRC=realworld"
) else (
  echo [WARN] !SUT! no openapi found
  goto :eof
)

if "!SRC!"=="7suts" ( set "PROV=!P7!" ) else ( set "PROV=!PRW!" )
echo [DBG] SUT="!SUT!" source="!SRC!"

rem ---------- field catalog (try both new and legacy) ----------
set "CATALOG=artifacts\lle_fields\!PROV!\!SUT!\field_catalog.json"
if not exist "!CATALOG!" (
  if "!PROV!"=="!P7!"  if exist "artifacts\lle_fields\7_suts_llm_provider\!SUT!\field_catalog.json" set "CATALOG=artifacts\lle_fields\7_suts_llm_provider\!SUT!\field_catalog.json"
  if "!PROV!"=="!PRW!" if exist "artifacts\lle_fields\real_world_llm_provider\!SUT!\field_catalog.json" set "CATALOG=artifacts\lle_fields\real_world_llm_provider\!SUT!\field_catalog.json"
)
if not exist "!CATALOG!" (
  echo [DBG] generating field catalog
  mkdir "artifacts\lle_fields\!PROV!\!SUT!" >nul 2>nul
  "%PY%" "%EXTRACTOR%" --openapi "!OPENAPI!" --out "artifacts\lle_fields\!PROV!\!SUT!\field_catalog.json"
  set "CATALOG=artifacts\lle_fields\!PROV!\!SUT!\field_catalog.json"
)

rem ---------- DET GOLD (support legacy input locations) ----------
set "DET=artifacts\det_checked\!PROV!\!SUT!\!SUT!_llm_gold.json"
if not exist "!DET!" (
  if "!PROV!"=="!P7!"  if exist "artifacts\det_checked\7_suts_llm_provider\!SUT!\!SUT!_llm_gold.json" set "DET=artifacts\det_checked\7_suts_llm_provider\!SUT!\!SUT!_llm_gold.json"
  if "!PROV!"=="!PRW!" if exist "artifacts\det_checked\real_world_llm_provider\!SUT!\!SUT!_llm_gold.json" set "DET=artifacts\det_checked\real_world_llm_provider\!SUT!\!SUT!_llm_gold.json"
)
if not exist "!DET!" (
  echo [ERR] !SUT! det gold missing
  goto :eof
)

rem ---------- outputs ----------
set "OUTDIR=artifacts\nondet_checked\!PROV!\!SUT!"
mkdir "!OUTDIR!" >nul 2>nul
set "OUTP=!OUTDIR!\!SUT!_llm_gold.json"

rem ---------- normalize (correct CLI) ----------
echo [DBG] normalize det "!SUT!"
set "TMP=!OUTDIR!\__det_norm_%RANDOM%%RANDOM%.json"
"%PY%" "%NORMALIZER%" --out "!TMP!" "!DET!"
if not exist "!TMP!" (
  echo [ERR] normalize failed for !SUT!
  goto :eof
)

rem ---------- expand ----------
echo [RUN ] expand nondet for "!PROV!\!SUT!"
"%PY%" "%EXPANDER%" --det "!TMP!" --catalog "!CATALOG!" --out "!OUTP!" --single-cap 8 --pairwise-cap 8 --include-negative 1

if exist "!OUTP!" (
  echo [OK ] wrote "!OUTP!"
) else (
  echo [ERR] failed to write "!OUTP!"
)

del /q "!TMP!" >nul 2>nul
goto :eof
