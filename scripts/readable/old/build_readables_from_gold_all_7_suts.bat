@echo off
setlocal EnableExtensions
for %%S in (banking config_control ecommerce factory garage library pharmacy) do (
  call scripts\readable\build_readables_from_gold_one_sut.bat %%S || goto :err
)
echo [DONE] 7-SUT readables
exit /b 0
:err
echo [ERR] Failed on %%S
exit /b 1
