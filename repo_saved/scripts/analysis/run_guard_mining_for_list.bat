@echo off
setlocal EnableExtensions EnableDelayedExpansion
:: Usage: run_guard_mining_for_list.bat config\suts_and_rw.txt

set "LIST=%~1"
if "%LIST%"=="" set "LIST=config\suts_and_rw.txt"

for /f "usebackq eol=# delims=" %%S in ("%LIST%") do (
  set "NAME=%%~S"
  if not "!NAME!"=="" call :ONE "!NAME!"
)
echo [DONE] guard mining for list
exit /b 0

:ONE
setlocal
set "NAME=%~1"

set "PROV=" & set "DET="
if exist "artifacts\hls_det\7_suts_llm_provider\%NAME%\hls_det_gold.json" (
  set "PROV=7_suts_llm_provider"
  set "DET=artifacts\hls_det\7_suts_llm_provider\%NAME%\hls_det_gold.json"
)
if exist "artifacts\hls_det\real_world_llm_provider\%NAME%\hls_det_gold.json" (
  set "PROV=real_world_llm_provider"
  set "DET=artifacts\hls_det\real_world_llm_provider\%NAME%\hls_det_gold.json"
)

if "%DET%"=="" (echo [SKIP] %NAME% no DET& endlocal& goto :eof)

set "API=apis\%NAME%\openapi.yaml"
if not exist "%API%" if exist "apis\%NAME%\openapi.json" set "API=apis\%NAME%\openapi.json"
if not exist "%API%" (echo [SKIP] %NAME% no OpenAPI& endlocal& goto :eof)

set "AN=artifacts\analysis\%PROV%\%NAME%"
mkdir "%AN%" 2>nul

python scripts\analysis\openapi_to_graph.py "%NAME%" "%API%" "%AN%\domain_graph.json" || (echo [FAIL] graph %NAME%& endlocal& goto :eof)
python scripts\analysis\derive_guard_candidates.py "%NAME%" "%AN%\domain_graph.json" "%DET%" "%AN%\guard_candidates.det.json" || (echo [FAIL] det-guards %NAME%& endlocal& goto :eof)
python scripts\analysis\infer_guards_from_domain.py "%NAME%" "%AN%\domain_graph.json" "%DET%" "models\hls\ALL\model_ref.json" "%AN%\guard_candidates.llm.json" || (echo [WARN] llm-guards %NAME%)
python scripts\analysis\validate_guard_candidates.py "%NAME%" "%AN%\domain_graph.json" "%DET%" "%AN%\guard_candidates.det.json" "%AN%\guard_candidates.det.valid.json" || (echo [FAIL] validate det %NAME%& endlocal& goto :eof)

if exist "%AN%\guard_candidates.llm.json" (
  python scripts\analysis\validate_guard_candidates.py "%NAME%" "%AN%\domain_graph.json" "%DET%" "%AN%\guard_candidates.llm.json" "%AN%\guard_candidates.llm.valid.json"
)

echo [OK] %NAME%
endlocal& goto :eof
