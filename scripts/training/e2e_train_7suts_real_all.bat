@echo off
setlocal EnableExtensions EnableDelayedExpansion

:: -----------------------------
:: Config
:: -----------------------------
set PROVIDER=openai
set BASE_MODEL=gpt-3.5-turbo-0125
set SUFFIX=v27-7suts+real
set GEN_MODEL=gpt-4o-mini
set JSON_MODE=--json-mode
set MAX_SPEC_CHARS=18000
set MAX_USER_CHARS=4000

:: Fine-tune model to use for grading/non-det (override if you have a new one)
if "%MODEL_ID%"=="" (
  set MODEL_ID=ft:gpt-3.5-turbo-0125:ll25:v27-7suts-real:COBejRuj
)

:: Real-world packs (add more later)
set REAL_PACKS=netbox github trello twilio jira_cloud directus meilisearch keycloak_admin zulip

:: 7 SUT packs
set SUT_PACKS=banking config_control ecommerce factory garage library pharmacy

:: -----------------------------
:: Sanity checks
:: -----------------------------
if "%OPENAI_API_KEY%"=="" (
  echo [ERR] OPENAI_API_KEY is not set.
  exit /b 1
)

where python >nul 2>nul
if errorlevel 1 (
  echo [ERR] python not found in PATH
  exit /b 1
)

:: -----------------------------
:: Build/refresh training JSONL
:: -----------------------------
echo [RUN] Building training JSONL...
python scripts\training\gold_to_jsonl.py ^
  --schema "schemas\schema_v1.json" ^
  --in "artifacts\det_checked\7_suts_llm_provider\*\*_llm_gold*.json" ^
  --in "artifacts\det_checked\real_world_llm_provider\*\*_llm_gold*.json" ^
  --in "artifacts\nondet_checked\7_suts_llm_provider\*\*_llm_gold*.json" ^
  --in "artifacts\nondet_checked\realworld_llm_provider\*\*_llm_gold*.json" ^
  --out "data\train\%SUFFIX%\train_7suts+real_all.jsonl"
if errorlevel 1 (
  echo [ERR] gold_to_jsonl failed
  exit /b 1
)

:: -----------------------------
:: Resolve/confirm model id (optional – you can keep the fallback above)
:: -----------------------------
if exist scripts\training\resolve_model_id.py (
  for /f "usebackq tokens=* delims=" %%M in (`python scripts\training\resolve_model_id.py --base "%BASE_MODEL%" --suffix "%SUFFIX%" --receipts-dir "artifacts\finetunes\openai"`) do (
    set RESOLVED_MODEL_ID=%%M
  )
  if not "%RESOLVED_MODEL_ID%"=="" set MODEL_ID=%RESOLVED_MODEL_ID%
)
echo [INFO] Using model: %MODEL_ID%

:: -----------------------------
:: Function-like macro to run a pack
:: Usage: call :RUN_PACK realworld netbox packs\realworld\netbox\openapi.yaml artifacts\nondet_checked\realworld_llm_provider\netbox
:: -----------------------------
goto :AFTER_FUNCS

:RUN_PACK
setlocal
set CATEGORY=%~1
set NAME=%~2
set SPEC=%~3
if not exist "%SPEC%" (
  rem Try alternate OpenAPI extensions if the provided one is missing
  for %%E in (yaml yml json) do (
    if exist "%SPEC:.json=.%%E%" set "SPEC=%SPEC:.json=.%%E%"
    if exist "%SPEC:.yml=.%%E%"  set "SPEC=%SPEC:.yml=.%%E%"
    if exist "%SPEC:.yaml=.%%E%" set "SPEC=%SPEC:.yaml=.%%E%"
  )
)
set OUTROOT=%~4

if not exist "%SPEC%" (
  echo [SKIP] %CATEGORY% "%NAME%" missing spec: "%SPEC%"
  goto :RUN_PACK_END
)

set SHARDDIR=%OUTROOT%\%NAME%_shards
set LOGDIR=%OUTROOT%\logs
set RUNSTAMP=%date:~10,4%%date:~4,2%%date:~7,2%_%time:~0,2%%time:~3,2%%time:~6,2%
set RUNSTAMP=%RUNSTAMP: =0%
set RUNDIR=%OUTROOT%\runs\run_%RUNSTAMP%
mkdir "%OUTROOT%" 2>nul
mkdir "%SHARDDIR%" 2>nul
mkdir "%LOGDIR%" 2>nul
mkdir "%RUNDIR%" 2>nul

echo [INFO] (%CATEGORY%) SUT="%NAME%" PROVIDER="%PROVIDER%" MODEL="%MODEL_ID%"
echo [RUN ] (%CATEGORY%) shard + generate + (optional) merge

:: Call the driver that must:
::  1) compute #shards automatically when --n-shards 0
::  2) write shard json files under %SHARDDIR%
::  3) for each shard -> call generate_gold_llm.py to hit the real model
::  4) (optional) merge shard outputs into %OUTROOT%\%NAME%_llm_gold.json
python scripts\llm\run_llm_gold_and_grade.py ^
  --spec "%SPEC%" ^
  --name "%NAME%" ^
  --out-dir "%OUTROOT%" ^
  --n-shards 0 ^
  --provider "%PROVIDER%" ^
  --model "%MODEL_ID%" ^
  --gen-model "%GEN_MODEL%" ^
  --max-spec-chars %MAX_SPEC_CHARS% ^
  --max-user-chars %MAX_USER_CHARS% ^
  %JSON_MODE%

if errorlevel 1 (
  echo [WARN] %CATEGORY% "%NAME%" failed; continuing.
)

:RUN_PACK_END
endlocal & goto :eof

:AFTER_FUNCS

:: -----------------------------
:: Run REAL-WORLD packs
:: -----------------------------
for %%P in (%REAL_PACKS%) do (
  if /I "%%P"=="netbox"         call :RUN_PACK realworld netbox         packs\realworld\netbox\openapi.json         artifacts\nondet_checked\realworld_llm_provider\netbox
  if /I "%%P"=="github"         call :RUN_PACK realworld github         packs\realworld\github\openapi.json         artifacts\nondet_checked\realworld_llm_provider\github
  if /I "%%P"=="trello"         call :RUN_PACK realworld trello         packs\realworld\trello\openapi.yaml         artifacts\nondet_checked\realworld_llm_provider\trello
  if /I "%%P"=="twilio"         call :RUN_PACK realworld twilio         packs\realworld\twilio\openapi.json         artifacts\nondet_checked\realworld_llm_provider\twilio
  if /I "%%P"=="directus"  		call :RUN_PACK realworld directus  		packs\realworld\directus\openapi.yaml  		artifacts\nondet_checked\realworld_llm_provider\directus
  if /I "%%P"=="jira_cloud"     call :RUN_PACK realworld jira_cloud     packs\realworld\jira_cloud\openapi.json     artifacts\nondet_checked\realworld_llm_provider\jira_cloud
  if /I "%%P"=="gitea"          call :RUN_PACK realworld gitea          packs\realworld\gitea\openapi.json          artifacts\nondet_checked\realworld_llm_provider\gitea
  if /I "%%P"=="meilisearch"    call :RUN_PACK realworld meilisearch    packs\realworld\meilisearch\openapi.yaml    artifacts\nondet_checked\realworld_llm_provider\meilisearch
  if /I "%%P"=="keycloak_admin" call :RUN_PACK realworld keycloak_admin packs\realworld\keycloak_admin\openapi.json artifacts\nondet_checked\realworld_llm_provider\keycloak_admin
  if /I "%%P"=="zulip"          call :RUN_PACK realworld zulip          packs\realworld\zulip\openapi.yaml          artifacts\nondet_checked\realworld_llm_provider\zulip
)

:: -----------------------------
:: Run 7-SUT packs
:: -----------------------------
for %%P in (%SUT_PACKS%) do (
  if /I "%%P"=="banking"         call :RUN_PACK 7suts banking         packs\7_suts\banking\openapi.json         artifacts\nondet_checked\7suts_llm_provider\banking
  if /I "%%P"=="config_control"  call :RUN_PACK 7suts config_control  packs\7_suts\config_control\openapi.json  artifacts\nondet_checked\7suts_llm_provider\config_control
  if /I "%%P"=="ecommerce"       call :RUN_PACK 7suts ecommerce       packs\7_suts\ecommerce\openapi.json       artifacts\nondet_checked\7suts_llm_provider\ecommerce
  if /I "%%P"=="factory"         call :RUN_PACK 7suts factory         packs\7_suts\factory\openapi.json         artifacts\nondet_checked\7suts_llm_provider\factory
  if /I "%%P"=="garage"          call :RUN_PACK 7suts garage          packs\7_suts\garage\openapi.json          artifacts\nondet_checked\7suts_llm_provider\garage
  if /I "%%P"=="library"         call :RUN_PACK 7suts library         packs\7_suts\library\openapi.json         artifacts\nondet_checked\7suts_llm_provider\library
  if /I "%%P"=="pharmacy"        call :RUN_PACK 7suts pharmacy        packs\7_suts\pharmacy\openapi.json        artifacts\nondet_checked\7suts_llm_provider\pharmacy
)

echo [DONE]
exit /b 0
