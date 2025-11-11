# BpTestTell — README (Version 7)
_Last updated: 2025-11-11 21:24_

> Contract → **LLE** → **HLS** pipelines for BP-based CRUD testing (DET & NONDET)  
> **Windows-first, BAT-only reproducible runs**

This repository transforms **OpenAPI** contracts into executable **Behavioral Programming** (BP) artifacts:
- **LLE** (low‑level events) → `interfaces.readable.js`, `lifecycle.readable.js`
- **HLS** (high‑level stories) → `stories_hls.js` (**DET** and **NONDET** variants)

All steps are driven by **wrapper `.bat`** scripts. Every step lists **Input → Run → Output** so you can chain the pipeline without guesswork.

---

## 0) Prerequisites

- **Windows 10/11** (`cmd.exe`), **Python 3.10+**
- **Provengo** on PATH (`provengo --version`)
- **OpenAPI** specs under `packs\` (7 SUTs are included; real‑world specs fetched via manifest)
- **Model key** for NONDET steps (set in the same shell):
  ```bat
  set "OPENAI_API_KEY=sk-..."
  ```
- **Servers up** for your SUTs before running Provengo.

---

## 1) Repository Layout (matches the current tree)

Top level (from your repo):
```
artifacts/
config/
data/
docker/
HLS/
library/             # Provengo project(s)
logs/
models/
packs/
pharmacy/            # Provengo project (see section 5)
schemas/
scripts/
templates/
```

Artifacts (current standard):
```
artifacts/
  analysis/                          # HLS graphs, etc.
  det_checked/                       # LLE DET outputs (gold, grades, prompts)
  hls_det/                           # HLS DET gold (hls_gold.json)
  hls_model/                         # model outputs / merges (optional)
  hls_nondet/                        # HLS NONDET gold (hls_nondet_gold.json)
  nondet_checked/                    # NONDET eval results (if any)
```

Packs:
```
packs/
  7_suts/<sut>/openapi.json
  realworld/<name>/openapi.(json|yaml|yml)
  suts/ ... (legacy, optional)
```

Scripts (groups used by the pipelines):
```
scripts/
  analysis/
  hls/
  llm/
  pipelines/
  providers/
  readable/
  realworld/
  templates/
  training/
  utils/
```

> **Convention:** Everything that **builds** HLS is under `scripts\hls\...`. Everything that **emits** JS (interfaces/stories) is under `scripts\readable\...`.

---

## 2) Configuration

Use a **single list file** for both SUTs and RW:  
`config\suts_and_rw.txt` — one system per line (e.g., `pharmacy`, `library`, `garage`, `factory`, `banking`, `config`, `ecommerce`, plus real‑world names).

Provider is usually `7_suts_llm_provider` for the 7 SUTs; use your RW provider name for real‑world runs.

> **Param order used below (for-list BATs):**  
> `[LIST_FILE]  [PROVIDER]  [SCOPE]` where `SCOPE` is `SUTs` or `RWs`.

---

## 3) Process A — OpenAPI → LLE → `interfaces.readable.js`

### A1) (Real‑world only) Fetch OpenAPI by manifest
**Input →** `scripts\realworld\manifest.json` (RW names + raw URLs)  
**Run →**
```bat
scripts\realworld\fetch_openapi_manifest.bat
```
**Output →** `packs\realworld\<name>\openapi.(yaml|yml|json)`

---

### A2) Build LLE (DET) from OpenAPI
**Input →** `packs\[7_suts|realworld]\<sut>\openapi.json` (and/or realworld)  
**Run (for list) →**
```bat
scripts\pipelines\run_det_all_7suts.bat  
scripts\pipelines\run_det_real_world_all.bat  
```
**Run (single SUT) →**
```bat
scripts\pipelines\run_det_one_sut.bat  <sut>  7_suts_llm_provider
```
**Output →** `artifacts\det_checked\<provider>\<sut>\*_gold.json` (+ grades/prompts)

---

### A3) Build LLE (NON-DET) from OpenAPI
>Train the LLM model (prompt) and generate the nondet gold.js.

>This step requiured an API key for GPT platform

**Input →** `packs\[7_suts|realworld]\<sut>\openapi.json` (and/or realworld)  
**Run (for list) →**
```bat
scripts\training\e2e_train_7suts_rw_all.bat  
```

**Output →** `artifacts\nondet_checked\<provider>\<sut>\*_gold.json` (+ grades/prompts)

---

### A4) Emit LLE readables (per SUT)
**Input →** `artifacts\det_checked\<provider>\<sut>\*_gold.json`  

**Run →**
```bat
scripts\readable\run_js_all_from_gold.bat  
```
Or for a single sut:
```bat
scripts\readable\run_js_sut_from_gold.bat  <sut>  
```


**Output →**
```
packs\7_suts\<sut>\readable\interfaces.readable.js
packs\7_suts\<sut>\readable\lifecycle.readable.js (basic stories)
```

> The emitter uses vendor hints from OpenAPI (e.g., `x-negative-delete-expected-codes`) so **negative deletes** expect `[200,404,401]` and **duplicates** include `409`. No manual patching required.

---

## 4) Process B — OpenAPI + LLE → HLS → `stories_hls.js` (DET & NONDET)

All steps are **for‑list** BATs to keep runs reproducible. Each **Output** feeds the next step.

### B1) OpenAPI → Graph (for list)
**Input →** `packs\7_suts\<sut>\openapi.json` (or `packs\realworld\<name>\openapi.*`)  
**Run →**
```bat
scripts\hls\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
```
**Output →** `artifacts\analysis\<provider>\<sut>\graph.json`

---

### B2) Graph → DSL map (for list)
**Input →** `artifacts\analysis\<provider>\<sut>\graph.json`  
**Run →**
```bat
scripts\hls\build_dsl_from_graph_all.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
:: use RWs for real‑world
```
**Output →** `models\hls\(SUTs|RWs)\<sut>\dsl_map.json`

---

### B3) Graph + DSL → HLS GOLD (DET) (for list)
**Input →** `...graph.json`, `...dsl_map.json`  
**Run →**
```bat
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
```
**Output →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
Deterministic, reproducible HLS baseline (no randomness, no model).

---

### B4) (Optional) DET GOLD → training set (for list)
**Input →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**Run →**
```bat
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
:: use 'real_world_llm_provider' for real‑world

```
**Output →** `artifacts\hls_training\<provider>\<sut>\train.jsonl`

---

### B5) Graph + DSL (+ model outputs) → HLS GOLD (NONDET) (for list)
**Input →** `...graph.json`, `...dsl_map.json` (+ optional `model_outputs.jsonl`)  
**Run →**
```bat
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
REM or:
scripts\hls\build_hls_variants_for_list.bat    config\suts_and_rw.txt  7_suts_llm_provider  SUTs
```
**Output →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`

---

### B6) Emit **stories_hls.js** (final step, for list) ✅
> `build_hls_nondet_and_stories_for_list.bat` does **not** generate the JS in this repo; the emitter below does.

**Input (DET) →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**Input (NONDET) →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`  
**Run →**
```bat
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
:: use RWs for real‑world targets:
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  real_world_llm_provider  RWs
```
**Output →**
```
packs\7_suts\<sut>\readable\stories_hls.det.js
packs\7_suts\<sut>\readable\stories_hls.nondet.js
```

---

## 5) Running the **Pharmacy** Provengo project

Folder highlights (common BP project layout):
```
pharmacy/
  spec/js/
    interfaces.readable.js      # auto‑generated LLE calls (REST ops)
    lifecycle.readable.js       # optional seed/lifecycle threads
    stories_hls.js              # auto‑generated HLS stories (DET/NONDET)
  dsls/                         # DSLs (e.g., bp-base.js)
  libs/                         # support libs (e.g., rest.js)
  resources/                    # optional data
```

**How to run** (from the repo root or `pharmacy\`):
```bat
cd pharmacy
provengo run [-Dhost=127.0.0.1 -Dport=5014]
```
Options you may find useful:
- `-Dseed=12345` — deterministic selection per run
- `-DnRuns=1`    — how many test executions
- `-Dhost`/`-Dport` — override service URL if not using the defaults embedded in readables

**Endpoints exercised** (as generated by your OpenAPI/LLE/HLS):
- `POST/GET/PUT/DELETE /patients`
- `POST/GET/PUT/DELETE /drugs`
- `POST/GET/PUT/DELETE /prescriptions`
- `POST/GET/PUT/DELETE /orders`
- `POST/GET/PUT/DELETE /inventory`
- `POST/GET/PUT/DELETE /reset` (control channel)

Payload keys (per create/update), following your current SUTs:
- `patients`: `{"id": 203}`
- `drugs`: `{"id": 200}`
- `prescriptions`: `{"id": 205}`
- `orders`: `{"id": 202}`
- `inventory`: `{"ndc": "ndc_201"}`

**Expected responses**
- **Create duplicate** → `409` (documented in OpenAPI, propagated to GOLD and stories)
- **DELETE non‑existing** → `200` or `404` (idempotent delete) and `401` when simulated negative auth; encoded via `x-negative-delete-expected-codes`

If you change behavior, update **OpenAPI** first and regenerate (A→B pipelines).

---

## 6) Troubleshooting & Tips

- **Hosts/ports**: Override via `-Dhost` / `-Dport` when running Provengo; ensure OpenAPI `servers` includes the URLs you actually use (localhost/127.0.0.1/LAN).  
- **Negative delete**: Expect `[200,404,401]`; do not hand‑edit generated files—fix OpenAPI/SUT and regenerate.  
- **Duplicates**: POST duplicates should return `409`; encode in OpenAPI so LLE/HLS expectations align.  
- **Reproducibility**: Re‑run the entire chain on a clean `artifacts\` if you suspect drift.  
- **Lists**: Keep `config\suts_and_rw.txt` authoritative; the for‑list BATs iterate these names.

---

## 7) Changelog

- **v7** — Unified list file `config\suts_and_rw.txt`; clarified final emission step (`scripts\readable\emit_all_from_list.bat`); added **Pharmacy** project section and concrete run commands; tightened **Input → Run → Output** for every step.
- v6 — Added explicit parameters (LIST/PROVIDER/SCOPE) and corrected folders to match repo.
- v5 — First complete write‑up of BAT‑only HLS pipeline.

---

## 8) Contributing

- Keep **OpenAPI** authoritative; encode behavior via vendor hints so generators remain clean.  
- PRs: include OS/Python version and the last ~30 log lines for any failing step.
