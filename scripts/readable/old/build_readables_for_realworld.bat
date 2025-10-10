@echo off
setlocal enableextensions enabledelayedexpansion
REM Build readable JS for REAL-WORLD SUTs across det and nondet trees.

set "REPO=%~dp0..\.."
pushd "%REPO%" >nul

set "PY=python"
set "ONE=scripts\readable\build_readables_for_one_sut.bat"

REM Roots (as you specified)
set "DET_ROOT=artifacts\det_checked\real_world_llm_provider"
set "NONDET_ROOT=artifacts\nondet_checked\realworld_llm_provider"

REM List your real-world SUT folders here
set SUTS=stripe github twilio

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
