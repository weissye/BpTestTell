@echo off
setlocal
set LIST=%~1
set PROV=%~2
if "%LIST%"==""  set LIST=config\suts_and_rw.txt
if "%PROV%"==""  set PROV=7_suts_llm_provider

for /f "usebackq delims=" %%S in (`findstr /R /V /C:"^$" /C:"^[#;]" "%LIST%"`) do (
  call "%~dp0normalize_hls_gold_one.bat" "%%~S" det "%PROV%"
  call "%~dp0normalize_hls_gold_one.bat" "%%~S" nondet "%PROV%"
)
endlocal
