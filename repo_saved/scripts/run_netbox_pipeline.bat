@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: ===============================================
:: Netbox Provengo Test Pipeline
:: ===============================================
:: This script runs the complete LLE + HLS pipeline for Netbox
:: and sets up a Provengo project structure for testing.
::
:: Prerequisites:
::   - OPENAI_API_KEY environment variable set
::   - Python environment activated
::   - Provengo installed and on PATH
::
:: Usage: scripts\run_netbox_pipeline.bat

echo.
echo ====================================
echo Netbox Provengo Test Pipeline
echo ====================================
echo.

:: Get repository root
for %%I in ("%~dp0..\") do set "ROOT=%%~fI"
cd /d "%ROOT%"

:: Check environment
if "%OPENAI_API_KEY%"=="" (
    echo [WARN] OPENAI_API_KEY not set. Model-driven steps will fail.
    echo        Set it with: set OPENAI_API_KEY=sk-...
)

:: Set Python executable
if not defined PYTHON_EXE if exist "%ROOT%\.venv\Scripts\python.exe" set "PYTHON_EXE=%ROOT%\.venv\Scripts\python.exe"
if not defined PYTHON_EXE set "PYTHON_EXE=python"

:: Verify Netbox OpenAPI exists
set "NETBOX_SPEC=%ROOT%\packs\realworld\netbox\openapi.json"
if not exist "%NETBOX_SPEC%" (
    echo [ERR] Netbox OpenAPI not found at: %NETBOX_SPEC%
    echo       Please ensure the OpenAPI file exists.
    exit /b 1
)

echo [INFO] Using OpenAPI: %NETBOX_SPEC%
echo.

:: ===============================================
:: SECTION A: LLE (Low-Level Events) Pipeline
:: ===============================================

echo.
echo ============ LLE Pipeline ============
echo.

:: A3: Build DET LLE GOLD
echo [A3] Building DET LLE GOLD for Netbox...
echo.
call scripts\pipelines\run_det_one_sut.bat netbox
if errorlevel 1 (
    echo.
    echo [ERROR] DET LLE GOLD build failed.
    echo        This step generates deterministic low-level events from OpenAPI.
    echo        Check that PROVIDER and MODEL environment variables are set:
    echo          set PROVIDER=openai
    echo          set MODEL=gpt-4o-mini
    echo.
    exit /b 1
)
echo [OK] DET LLE GOLD created
echo.

:: A4: Build Field Catalog
echo [A4] Building Field Catalog...
"%PYTHON_EXE%" scripts\readable\extract_field_catalog.py ^
    --openapi "%NETBOX_SPEC%" ^
    --out "artifacts\lle_fields\real_world_llm_provider\netbox\field_catalog.json" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] Field catalog build failed.
    echo        This step extracts field metadata from OpenAPI for NONDET expansion.
    echo.
    exit /b 1
)
echo [OK] Field catalog created
echo.

:: A6: Expand NONDET LLE (if field catalog exists)
if exist "artifacts\lle_fields\real_world_llm_provider\netbox\field_catalog.json" (
    echo [A6] Expanding NONDET LLE GOLD ^( optional, skipping on error ^)...
    "%PYTHON_EXE%" scripts\readable\expand_lle_gold_nondet.py ^
        --det "artifacts\det_checked\real_world_llm_provider\netbox\netbox_llm_gold.json" ^
        --catalog "artifacts\lle_fields\real_world_llm_provider\netbox\field_catalog.json" ^
        --out "artifacts\lle_nondet\real_world_llm_provider\netbox\lle_nondet_gold.json" 2>nul
    if errorlevel 1 (
        echo [SKIP] NONDET LLE expansion failed - DET GOLD may be empty
    ) else (
        echo [OK] NONDET LLE GOLD created
    )
    echo.
)

:: A7: Emit interfaces.readable.js (DET)
echo [A7] Emitting interfaces.readable.js...
"%PYTHON_EXE%" scripts\readable\emit_readables_from_gold.py ^
    --gold "artifacts\det_checked\real_world_llm_provider\netbox\netbox_llm_gold.json" ^
    --out-dir "artifacts\readable\real_world_llm_provider\netbox" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] Readable emission failed.
    echo        This step generates Provengo interface files from LLE GOLD.
    echo.
    exit /b 1
)
echo [OK] interfaces.readable.js created
echo.

:: ===============================================
:: SECTION B: HLS (High-Level Stories) Pipeline
:: ===============================================

echo.
echo ============ HLS Pipeline ============
echo.

:: B1: OpenAPI → Graph
echo [B1] Generating graph from OpenAPI...
"%PYTHON_EXE%" scripts\analysis\openapi_to_graph.py ^
    --in "%NETBOX_SPEC%" ^
    --out "artifacts\analysis\real_world_llm_provider\netbox\graph.json" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] Graph generation failed.
    echo        This step analyzes OpenAPI to extract resource relationships.
    echo.
    exit /b 1
)
echo [OK] Graph created
echo.

:: B2: Graph → DSL map
echo [B2] Building DSL map from graph...
"%PYTHON_EXE%" scripts\analysis\build_dsl_map.py ^
    --sut netbox ^
    --provider real_world_llm_provider ^
    --graph "artifacts\analysis\real_world_llm_provider\netbox\graph.json" ^
    --out "models\hls\RWs\netbox\dsl_map.json" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] DSL map build failed.
    echo        This step creates domain-specific language mappings for HLS.
    echo.
    exit /b 1
)
echo [OK] DSL map created
echo.

:: B3: Graph + DSL → HLS GOLD (DET)
echo [B3] Generating HLS DET GOLD...
"%PYTHON_EXE%" scripts\hls\build_hls_gold_det.py ^
    --sut netbox ^
    --provider real_world_llm_provider ^
    --dsl_map "models\hls\RWs\netbox\dsl_map.json" ^
    --out "artifacts\hls_det\real_world_llm_provider\netbox\hls_gold.json" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] HLS DET GOLD build failed.
    echo        This step generates deterministic high-level story templates.
    echo.
    exit /b 1
)
echo [OK] HLS DET GOLD created
echo.

:: B4: Prepare HLS training set
echo [B4] Preparing HLS training set ^( optional, skipping on error ^)...
"%PYTHON_EXE%" scripts\hls\prep_hls_training_from_det_gold.py ^
    --in "artifacts\hls_det\real_world_llm_provider\netbox\hls_gold.json" ^
    --out "artifacts\hls_training\real_world_llm_provider\netbox\train.jsonl" >nul 2>nul
if errorlevel 1 (
    echo [SKIP] HLS training prep failed
) else (
    echo [OK] HLS training set created
)
echo.

:: B5: Graph + DSL → HLS GOLD (NONDET)
echo [B5] Generating HLS NONDET GOLD ^( optional, skipping on error ^)...
"%PYTHON_EXE%" scripts\hls\build_hls_gold_nondet.py ^
    --in "artifacts\analysis\real_world_llm_provider\netbox\graph.json" ^
    --dsl "models\hls\RWs\netbox\dsl_map.json" ^
    --det "artifacts\hls_det\real_world_llm_provider\netbox\hls_gold.json" ^
    --out "artifacts\hls_nondet\real_world_llm_provider\netbox\hls_nondet_gold.json" >nul 2>nul
if errorlevel 1 (
    echo [SKIP] HLS NONDET GOLD build failed
) else (
    echo [OK] HLS NONDET GOLD created
)
echo.

:: B6: Emit stories_hls.js (DET)
echo [B6] Emitting stories_hls.js...
"%PYTHON_EXE%" scripts\readable\emit_hls_all_in_one.py ^
    --gold "artifacts\hls_det\real_world_llm_provider\netbox\hls_gold.json" ^
    --out_dir "artifacts\hls_det\real_world_llm_provider\netbox\readable" >nul
if errorlevel 1 (
    echo.
    echo [ERROR] HLS story emission failed.
    echo        This step generates Provengo story files from HLS GOLD.
    echo.
    exit /b 1
)
echo [OK] stories_hls.js created
echo.

:: ===============================================
:: SECTION C: Provengo Project Setup
:: ===============================================

echo.
echo ============ Provengo Setup ============
echo.

set "PG_ROOT=%ROOT%\provengo\netbox"

:: Create directory structure
echo [INFO] Creating Provengo project structure...
mkdir "%PG_ROOT%\spec\js" 2>nul
mkdir "%PG_ROOT%\config" 2>nul
mkdir "%PG_ROOT%\meta-spec" 2>nul
mkdir "%PG_ROOT%\data" 2>nul

:: Copy interfaces.readable.js
echo [INFO] Copying interfaces.readable.js...
copy /Y "artifacts\readable\real_world_llm_provider\netbox\interfaces.readable.js" "%PG_ROOT%\spec\js\" >nul
if errorlevel 1 (
    echo [WARN] Could not copy interfaces.readable.js
)

:: Copy stories_hls.js
echo [INFO] Copying stories_hls.js...
copy /Y "artifacts\hls_det\real_world_llm_provider\netbox\readable\stories_hls.js" "%PG_ROOT%\spec\js\" >nul
if errorlevel 1 (
    echo [WARN] Could not copy stories_hls.js
)

:: Create provengo.yml config
echo [INFO] Creating provengo.yml...
(
echo # Netbox Provengo Configuration
echo version: 2
echo rest-api.ssl.validation: false
echo analyze:
echo     output:
echo         format: pdf
echo visualization:
echo     order: visual
echo     layout: vertical
echo output:
echo     offline: false
echo sample:
echo     overwrite: true
echo ensemble:
echo     size: 5
echo selenium:
echo     browser: chrome
echo     implicit-wait: 5000
echo     max-windows: true
echo report:
echo     suite:
echo         query: :last-5
) > "%PG_ROOT%\config\provengo.yml"

:: Copy meta-spec files from pharmacy as template
echo [INFO] Copying meta-spec files...
if exist "%ROOT%\provengo\pharmacy\meta-spec\" (
    xcopy /Y /Q "%ROOT%\provengo\pharmacy\meta-spec\*.*" "%PG_ROOT%\meta-spec\" >nul
)

echo [OK] Provengo project structure created
echo.

:: ===============================================
:: Summary
:: ===============================================

echo.
echo ============================================
echo           Pipeline Complete!
echo ============================================
echo.
echo Netbox test artifacts created:
echo   - LLE Events: artifacts\readable\real_world_llm_provider\netbox\
echo   - HLS Stories: artifacts\hls_det\real_world_llm_provider\netbox\readable\
echo   - Provengo Project: provengo\netbox\
echo.
echo To run Provengo tests:
echo   1. Start the mock server: cd mocks ^& python netbox_mock.py
echo   2. Run tests: cd provengo\netbox ^& provengo run -Dhost=127.0.0.1 -Dport=5000
echo.
echo ============================================

endlocal
exit /b 0
