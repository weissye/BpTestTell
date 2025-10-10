@echo off
setlocal EnableExtensions EnableDelayedExpansion
pushd "%~dp0..\.." >NUL

REM Add/remove systems as you like
set "SYSTEMS=airtable directus github jira_cloud notion shopify_admin stripe supabase trello twilio"

for %%S in (%SYSTEMS%) do (
  echo.
  echo === Building readables for %%S ===
  call "scripts\readable\build_readables_from_gold_one_sut.bat" "%%~S"
  if errorlevel 1 (
    echo [WARN] Skipping %%S due to error.
  )
)

echo.
echo [DONE] Readables attempted for real-world systems.
popd >NUL
exit /b 0
