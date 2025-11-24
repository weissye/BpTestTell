# BpTestTell (self-contained, LLM-based version)

This repository is a **self-contained replacement** for the original BpTestTell,
focused on a unified, LLM-based pipeline:

> **OpenAPI (JSON/YAML)** → **unified spec (JSON)** →  
> **`interfaces.readable.js` + `stories_hls.js`** (generated from the same infra)

Key ideas:

- The **only required input** per SUT is its **OpenAPI specification**.
- A **unified interaction spec JSON** is derived from the OpenAPI using an LLM.
- A **single deterministic generator** (`emit_interfaces_and_stories_from_spec.py`)
  emits both `interfaces.readable.js` and `stories_hls.js`.
- This guarantees that the **function signatures and parameter lists match**.

This repo does **not** include your original proprietary data (OpenAPI, GOLD,
Provengo projects). Before deleting the old repo, you MUST:

1. Copy your existing `packs/` directory (7 SUTs + 10 real-world) into this repo:
   - `packs/7_suts/<sut>/openapi.json`
   - `packs/real_world/<sut>/openapi.json`
2. Copy your Provengo projects under `provengo/<sut>/` if you want to run them.
3. Optionally copy `artifacts/` if you still need the old deterministic GOLD.

Once you copy those directories, this repo can stand alone and regenerate
interfaces & stories for all 17 SUTs.

High-level layout:

- `new_repo/` – Python package with the new LLM + generation pipeline.
- `packs/` – **(you must copy)** OpenAPI specs for the 17 SUTs.
- `provengo/` – **(optional)** Provengo projects for each SUT.
- `artifacts/` – **(optional)** for legacy GOLD/training if you keep it.

See `new_repo/README.md` for detailed usage.
