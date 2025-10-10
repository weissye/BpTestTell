# Readables from GOLD — One Command

These wrappers emit `interfaces.readable.js` and `lifecycle.readable.js` from any available GOLD outputs, searching across deterministic & non-deterministic runs, provider & trained models, for both **7 SUTs** and **real-world** packs.

## Windows

```bat
:: one SUT
scripts\pipelines\emit_readables_any.bat one-sut banking

:: all 7 SUTs
scripts\pipelines\emit_readables_any.bat all-7suts

:: one real-world
scripts\pipelines\emit_readables_any.bat one-realworld stripe

:: all real-world
scripts\pipelines\emit_readables_any.bat all

:: outputs
artifacts\readables\7_suts\<name>\{interfaces,lifecycle}.readable.js
artifacts\readables\realworld\<name>\{interfaces,lifecycle}.readable.js
