@echo off
setlocal EnableExtensions EnableDelayedExpansion
set LIST=%~1
if "%LIST%"=="" set LIST=config\suts_and_rw.txt
for /f "usebackq tokens=* delims=" %%S in ("%LIST%") do (
  set NAME=%%S
  if not "!NAME!"=="" if not "!NAME:~0,1!"=="#" (
    call scripts\hls\hls_pipeline_one_sut.bat !NAME! artifacts\det_checked\!NAME!\!NAME!_lle_gold.json 42 142
  )
)
