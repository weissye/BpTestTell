@echo off
setlocal EnableExtensions EnableDelayedExpansion

REM Scans both det and nondet trees for 7_suts_llm_provider/* and runs the per-SUT driver.

set "ROOT1=artifacts\det_checked\7_suts_llm_provider"
set "ROOT2=artifacts\nondet_checked\7suts_llm_provider"

for %%R in ("%ROOT1%" "%ROOT2%") do (
  if exist "%%~fR" (
    for /D %%S in ("%%~fR\*") do (
      echo ------------------------------------------------------------
      echo [RUN ] %%S
      call scripts\readable\run_js_sut_from_gold.bat "%%~fS"
      echo.
    )
  ) else (
    echo [WARN] not found: %%~fR
  )
)

echo [DONE]
exit /b 0
