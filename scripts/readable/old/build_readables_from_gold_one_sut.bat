@echo off
setlocal EnableExtensions

if "%~1"=="" (
  echo Usage: %~nx0 ^<sutName^>
  exit /b 2
)

set "S=%~1"
set "ROOT_A=artifacts\v25\nondet_checked\7_suts_llm_provider\%S%"
set "ROOT_B=artifacts\v25\7_suts_llm_trained\%S%"

rem Prefer NONDET path; fallback to trained
if exist "%ROOT_A%\%S%_llm_gold_fixed.json" (
  set "GOLD1=%ROOT_A%\%S%_llm_gold_fixed.json"
  set "GOLD2=%ROOT_A%\%S%_llm_gold.json"
  set "OUT=%ROOT_A%\readable"
) else (
  if exist "%ROOT_B%\%S%_llm_gold_fixed.json" (
    set "GOLD1=%ROOT_B%\%S%_llm_gold_fixed.json"
    set "GOLD2=%ROOT_B%\%S%_llm_gold.json"
    set "OUT=%ROOT_B%\readable"
  ) else (
    echo [ERR] Can't find GOLD for %S%
    exit /b 1
  )
)

echo [RUN] %S% -^> %OUT%
python scripts\readable\emit_readables_from_gold.py --gold "%GOLD1%" "%GOLD2%" --out-dir "%OUT%" --force-crud
if errorlevel 1 exit /b 1
echo [OK] Readables under: %OUT%
exit /b 0
