@echo off
setlocal enableextensions enabledelayedexpansion
REM Build readable JS for the 7-SUTs pack across det and nondet trees.

set "REPO=%~dp0..\.."
pushd "%REPO%" >nul

set "PY=python"
set "ONE=scripts\readable\build_readables_for_one_sut.bat"

REM Roots (as you specified)
set "DET_ROOT=artifacts\det_checked\7_suts_llm_provider"
set "NONDET_ROOT=artifacts\nondet_checked\7suts_llm_provider"

REM The seven SUTs
set SUTS=banking config_control ecommerce factory garage library pharmacy

for %%S in (%SUTS%) do (
  for %%R in ("%DET_ROOT%" "%NONDET_ROOT%") do (
    set "DIR=%%~R\%%~S"
    if exist "!DIR!\" (
      dir /b "!DIR!\*_llm_gold*.json" >nul 2>&1
      if not errorlevel 1 (
        call "%ONE%" "!DIR!"
      ) else (
        echo [SKIP] No GOLDs in "!DIR!".
      )
    ) else (
      echo [SKIP] "!DIR!" not found.
    )
  )
)

popd >nul
exit /b 0
