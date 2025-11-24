@echo off
setlocal
REM Run all SUTs by scanning packs/*/*/openapi.(json|yaml|yml)
REM and generating interfaces.readable.js + stories_hls.js into provengo\<sut>\spec\js

python new_repo\pipeline\run_all_suts_from_openapi.py %*
endlocal
