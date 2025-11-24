@echo off
setlocal enabledelayedexpansion
REM ============================================
REM Emitting HLS (garage-style) stories for all SUTs & RWs
REM Usage: scripts\readable\emit_bpjs_for_all.bat [config\suts_and_rw.txt]
REM ============================================

set CFG=%~1
if "%CFG%"=="" set CFG=config\suts_and_rw.txt

echo ============================================
echo Emitting BPjs readables from: "%CFG%"
echo CWD: %CD%
echo PROFILE=exhaustive  PER_ENTITY_MAX=10  FAIL_UNDER=0
echo ============================================

for /f "usebackq tokens=1 delims=, " %%S in ("%CFG%") do (
  set SUT=%%S
  if not "!SUT!"=="" if not "!SUT:~0,1!"=="#" (
    for %%P in (7_suts_llm_provider real_world_llm_provider) do (
      if exist artifacts\analysis\%%P\!SUT!\graph.json (
        echo [SUT ] %%P\!SUT!

        REM ---- det ----
        python -u scripts\readable\emit_hls_all_in_one.py ^
          --sut_dir %%P\!SUT! ^
          --mode det

        REM ---- nondet ----
        python -u scripts\readable\emit_hls_all_in_one.py ^
          --sut_dir %%P\!SUT! ^
          --mode nondet

      ) else (
        echo [SKIP] no graph: %%P\!SUT!
      )
    )
  )
)

echo [DONE] emit_bpjs_for_all.bat finished.
endlocal
