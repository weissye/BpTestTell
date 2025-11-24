REM ===== Verify HLS nondet outputs =====
echo [SCAN] Verifying HLS readable outputs under artifacts\hls_nondet\*\readable\
if not exist "artifacts\logs" mkdir "artifacts\logs"
set "_VERIFY_LOG=artifacts\logs\hls_nondet_verify.log"
> "%_VERIFY_LOG%" echo HLS NONDET verification started

set /a _OK=0
set /a _WARN=0
set /a _FILES=0

REM Only iterate over existing files to avoid FINDSTR errors
for /R "artifacts\hls_nondet" %%F in (stories_hls.js) do (
  set /a _FILES+=1
  REM Basic sanity: look for at least one 'story(' occurrence
  findstr /R /C:"story(" "%%F" >NUL 2>&1
  if errorlevel 1 (
    echo [WARN] No 'story(' found in "%%F"
    >> "%_VERIFY_LOG%" echo [WARN] No 'story(' found in "%%F"
    set /a _WARN+=1
  ) else (
    echo [OK] HLS readable: "%%F"
    >> "%_VERIFY_LOG%" echo [OK] "%%F"
    set /a _OK+=1
  )
)

echo [SCAN] Files checked: %_FILES%  OK: %_OK%  WARN(no story(): %_WARN%)
>> "%_VERIFY_LOG%" echo Files checked: %_FILES%  OK: %_OK%  WARN: %_WARN%
