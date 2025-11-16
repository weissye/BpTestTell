# BpTestTell — README (Version 13)

> **Purpose.** Automatic infrastructure generation for **Story‑Based Testing with Behavioral Programming (BP)** for **CRUD‑based systems**.  
> The repository turns OpenAPI contracts into executable **BP artifacts** for **Provengo**:  
> - **Low‑Level Events (LLE)** → `interfaces.readable.js` (baseline DET + model‑driven NONDET)  
> - **High‑Level Stories (HLS)** → `stories_hls.js` (DET + NONDET)  
> - End‑to‑end, **batch‑driven**, reproducible builds for **all 17 systems** (7 SUTs + 10 real‑world).

---

## 0) Prerequisites & Quick Setup

- **Windows 10/11**, `cmd.exe` or PowerShell
- **Python** 3.9+ (repo uses Python internally, but you will run **BAT wrappers only**)
- **Node.js** and **Provengo** installed and on PATH (`provengo --version`)
- **Git**
- **OpenAI API key** (required only for model‑driven NONDET steps)

```bat
git clone https://github.com/weissye/BpTestTell.git
cd BpTestTell
py -3.9 -m venv .venv
.\.venv\Scripts\activate
pip install -r requirements.txt
```

**Config list (17 systems):** `config\suts_and_rw.txt` (one SUT/RW name per line; `;` lines are comments).

Repository areas you will use most:
```
artifacts/
  analysis/                          # HLS graph outputs
  det_checked/                       # LLE DET GOLD + normalized ops (+ grades/prompts if enabled)
  hls_det/                           # HLS DET GOLD
  hls_nondet/                        # HLS NONDET GOLD
config/
models/
packs/                               # OpenAPI for 7_suts and realworld
pharmacy/                            # Example Provengo project
scripts/
  analysis/                          # OpenAPI→graph, graph→DSL
  hls/                               # HLS GOLD builders
  pipelines/                         # End-to-end wrappers for DET LLE
  readable/                          # Emitters (LLE readables & HLS stories)
  realworld/                         # Fetch helpers for RW OpenAPI
  training/                          # Model training wrappers
```

---

## A) LLE (Low‑Level Events) — Deterministic & NONDET

**Goal:** From OpenAPI contracts, build **DET LLE GOLD** and **interfaces.readable.js**; then **train** and **expand** to **NONDET** (rich variants), and **emit** the NONDET `interfaces.readable.js` as well — across **all 17 systems** via batch wrappers.

### A0) Environment & List

```bat
rem ==== Required for NONDET / model-driven steps ====
set "OPENAI_API_KEY=sk-..."
rem ==== Controls for NONDET expansion (consumed by existing wrappers) ====
set "LLE_ND_TWISE=2"                rem 2=pairwise, 3=t-wise, etc.
set "LLE_ND_MAX_PER_EP=25"          rem cap variants per endpoint
set "LLE_NEG_STRICT=1"              rem include negative (missing/invalid/boundary) variants
rem ==== Optional telemetry / auditing ====
set "LLE_ENABLE_GRADING=0"          rem 1 to output artifacts\det_checked\...\grades.json
set "LLE_TRACE_PROMPTS=0"           rem 1 to output artifacts\det_checked\...\prompts.jsonl
```

Verify the list of systems:
```
type config\suts_and_rw.txt
```

> **Outcomes controlled by the flags above** (when enabled by wrappers):  
> `artifacts\det_checked\<provider>\<sut>\grades.json` — quality metrics per op  
> `artifacts\det_checked\<provider>\<sut>\prompts.jsonl` — prompt/response trace for auditability

---

### A1) (RW only) Fetch OpenAPI contracts from manifest

**Input →** `scripts\realworld\manifest.json`  
**Run →**
```bat
scripts\realworld\fetch_openapi_manifest.bat
```
**Output →** `packs\realworld\<name>\openapi.(yaml|yml|json)`

> If your SUT/YAML is local, simply place it under `packs\7_suts\<sut>\openapi.(yaml|json)`.

---

### A2) Convert YAML → JSON (when needed)

If your OpenAPI is YAML, convert it to JSON before running DET LLE pipelines (keep it in `packs\...\openapi.json`). If your repo has a BAT for conversion, use it; otherwise use any standard converter and commit the JSON to `packs\...`.

**Input →** `packs\[7_suts|realworld]\<name>\openapi.(yaml|yml)`  
**Output →** `packs\[7_suts|realworld]\<name>\openapi.json`

---

### A3) Build **DET LLE GOLD** (contract → ops) for all 17

**Inputs →**  
- `packs\7_suts\<sut>\openapi.json` (7 SUTs)  
- `packs\realworld\<name>\openapi.json` (10 RW)

**Run (for the 7 SUTs) →**
```bat
scripts\pipelines\run_det_all_7suts.bat
```

**Run (for all real‑world) →**
```bat
scripts\pipelines\run_det_real_world_all.bat
```

**Run (single SUT) →**
```bat
scripts\pipelines\run_det_one_sut.bat  <sut>  7_suts_llm_provider
```

**Outcomes (per system) →**
```
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json
artifacts\det_checked\<provider>\<sut>\grades.json       (if LLE_ENABLE_GRADING=1)
artifacts\det_checked\<provider>\<sut>\prompts.jsonl     (if LLE_TRACE_PROMPTS=1)
```

---

### A4) Build **Field Catalog** (keys / partial keys / mandatory / optional) for all 17

**Input →** `packs\[7_suts|realworld]\<name>\openapi.json`  
**Run →**
```bat
rem Reuse the same NONDET controls if desired for consistency
set "LLE_ND_TWISE=2"
set "LLE_ND_MAX_PER_EP=25"
set "LLE_NEG_STRICT=1"
set "LLE_ENABLE_GRADING=0"
set "LLE_TRACE_PROMPTS=0"

scripts\readable\build_field_catalog_for_list.bat  config\suts_and_rw.txt
```
**Output →**
```
artifacts\lle_fields\<provider>\<sut>\field_catalog.json
```
Notes:
- Catalog captures type/format/enums/min/max and simple cross‑field constraints when available in OpenAPI.
- Purely static analysis of the contract (no model calls).

---

### A5) Train **LLE** model from **DET LLE GOLD** (for 17)

**Input →** `artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold_ops.json` (all systems)  
**Run →**
```bat
scripts\training\e2e_train_7suts_real_all.bat
```
**Output →** Trained model checkpoint(s) under the training area used by your repo’s wrappers.

---

### A6) Expand **NONDET LLE GOLD** using the trained model + field catalog (for 17)

**Inputs →**
```
artifacts\det_checked\<provider>\<sut>\<sut>_llm_gold.json
artifacts\lle_fields\<provider>\<sut>\field_catalog.json
```
**Run →**
```bat
scripts\readable\expand_lle_nondet_for_list.bat  config\suts_and_rw.txt
```
**Output →**
```
artifacts\lle_nondet\<provider>\<sut>\lle_nondet_gold.json
```

> The NONDET expansion produces both **positive** and **negative** variants per endpoint.  
> Combinatorial control is taken from `LLE_ND_TWISE` and `LLE_ND_MAX_PER_EP` (see A0/A4).

---

### A7) Emit **interfaces.readable.js** for DET and NONDET (for 17)

**DET →**
```bat
scripts\readable\run_js_all_sut_from_gold.bat
```
**NONDET →** (re‑use the same wrappers if they support NONDET location; otherwise call single‑SUT wrapper and point at NONDET gold)
```bat
rem Example single-SUT emission from NONDET GOLD
scripts\readable\run_js_sut_from_gold.bat  artifacts\lle_nondet\<provider>\<sut>
```

**Outputs →** (repo‑conventional paths)
```
<sut>\spec\js\interfaces.readable.js                    # commonly used by projects like pharmacy/
packs\7_suts\<sut>\readable\interfaces.readable.js      # some branches place it here
```

> If your branch emits to `artifacts\readable\...`, keep the default and commit the generated files into your SUT project folder when needed.

---

## B) HLS (High‑Level Stories) — Deterministic & NONDET

The following HLS section mirrors the previously validated process and uses only **existing** BAT wrappers. Step B4 is **required** (not optional).

### B1) OpenAPI → Graph (for list)

**Input →** `packs\7_suts\<sut>\openapi.json` (or `packs\realworld\<name>\openapi.*`)  
**Run →**
```bat
scripts\analysis\run_openapi_to_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `artifacts\analysis\<provider>\<sut>\graph.json`

---

### B2) Graph → DSL map (for list)

**Input →** `artifacts\analysis\<provider>\<sut>\graph.json`  
**Run →**
```bat
scripts\analysis\build_dsl_from_graph_for_list.bat  config\suts_and_rw.txt
```
**Output →** `models\hls\(SUTs|RWs)\<sut>\dsl_map.json`

---

### B3) Graph + DSL → **HLS GOLD (DET)** (for list)

**Input →** `...graph.json`, `...dsl_map.json`  
**Run →**
```bat
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
rem or:
scripts\hls\build_hls_gold_det_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`

---

### B4) **Prepare HLS training set from DET GOLD** (for list) — **REQUIRED**

**Input →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**Run →**
```bat
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  SUTs
rem or, for real-world:
scripts\hls\prep_hls_training_from_det_gold_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider  RWs
```
**Output →** `artifacts\hls_training\<provider>\<sut>\train.jsonl`

---

### B5) Graph + DSL (+ model outputs) → **HLS GOLD (NONDET)** (for list)

**Input →** `...graph.json`, `...dsl_map.json` (+ optional model artifacts)  
**Run →**
```bat
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  7_suts_llm_provider
rem or:
scripts\hls\build_hls_gold_nondet_for_list.bat  config\suts_and_rw.txt  real_world_llm_provider
```
**Output →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`

---

### B6) Emit **stories_hls.js** (DET & NONDET) — final (for list)

**Input (DET) →** `artifacts\hls_det\<provider>\<sut>\hls_gold.json`  
**Input (NONDET) →** `artifacts\hls_nondet\<provider>\<sut>\hls_nondet_gold.json`  
**Run →**
```bat
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  det
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  7_suts_llm_provider  nondet
rem or real-world:
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  real_world_llm_provider  det
scripts\readable\emit_all_from_list.bat  config\suts_and_rw.txt  real_world_llm_provider  nondet
```
**Output →** `artifacts\hls_(det|nondet)\<provider>\<sut>\readable\stories_hls.js`

---

## C) Running the **Pharmacy** Provengo project

Typical structure:
```
pharmacy/
  spec/js/
    interfaces.readable.js
    lifecycle.readable.js
    stories_hls.js
  dsls/
  libs/
  resources/
```
**Run →**
```bat
cd pharmacy
provengo run [-Dhost=127.0.0.1 -Dport=5014 -Dseed=12345 -DnRuns=1]
```

---

## D) Troubleshooting (quick)

- `) was unexpected at this time` — usually a mismatched `for (...) do (` or nested `if (...) else (...)` in BAT. Use `setlocal enabledelayedexpansion` and ensure all parentheses are balanced in custom edits.
- `--out_dir required` — pass `--out_dir` in emitters; HLS emitter already sets it to `artifacts\hls_(det|nondet)\...\readable`.
- Empty `stories_hls.js` header with non‑empty GOLD — ensure you pointed the emitter at the correct GOLD path (DET vs NONDET) and that `hls_gold_ops.json` is written next to GOLD, not under `readable/`.

---

## E) Adding a **new** system (OpenAPI JSON/YAML)

1. Place the OpenAPI under `packs\<provider>\<new_sut>\openapi.(json|yaml)` and add `<new_sut>` to `config\suts_and_rw.txt` under the correct provider section.
2. Run the pipeline **in order** across all for‑list wrappers:  
   - **A3** (DET LLE) → **A4** (Field catalog) → **A5** (Train LLE) → **A6** (NONDET LLE) → **A7** (emit LLE)  
   - **B1** (Graph) → **B2** (DSL) → **B3** (HLS DET) → **B4** (HLS train set) → **B5** (HLS NONDET) → **B6** (emit HLS)

This preserves reproducibility across both SUTs and real‑world systems.

---

## F) Checklist for this version

- **Section A (LLE)** — replaced with end‑to‑end, field‑aware LLE process including env `set` blocks in **A0** and **A4**, and NONDET expansion steps via existing batch wrappers.
- **HLS section (B1–B6)** — taken from the previously validated process; **B4** is required.
- **Pharmacy** — kept as the runnable example with Provengo.
- **Adding a new system** — retained and clarified so the same wrappers work for any OpenAPI‑based system.

---

## License & Contributions

- Keep OpenAPI authoritative.  
- Encode expected negative codes and duplicates in OpenAPI via vendor hints when applicable.  
- PRs: include OS/Python versions and last 30 log lines for any failing step.
