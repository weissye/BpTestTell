# BpTestTell — README **v11** (updated 2025-11-15)

> **Purpose**  
> This repository automates **infrastructure generation for Story‑Based Testing with Behavioral Programming (BP)** for **CRUD‑based systems**.  
> Given an **OpenAPI** spec (YAML/JSON), it derives:
> - **Low‑Level Events (LLE)** → `interfaces.readable.js` for Provengo,
> - **High‑Level Stories (HLS)** → `stories_hls.js`,
> - both in **DET** (deterministic, baseline) and **NONDET** (model‑based, expanded) flavors.
>
> NONDET is **only** produced *after* training a model on DET outputs (LLE/HLS). It injects valid and negative variants (via field types: keys/composite keys, mandatory/optional) with pairwise/t‑wise controls to curb explosion.

---

## Repo overview (high‑level)

```
BpTestTell/
├─ banking/, config_control/, ecommerce/, factory/, garage/, library/, pharmacy/   # SUTs (project folders with Provengo spec/)
│  └─ spec/js/                                                                    # preferred landing for *.readable.js and stories_hls.js
├─ RWs/                                                                           # Real-world projects (same structure as SUTs)
│  └─ <rw>/spec/js/
├─ openapis/
│  └─ <provider>/<sut>/(openapi.yaml|openapi.json)                                # normalized OpenAPI sources (post A.0/A.1)
├─ models/
│  ├─ lle/<provider>/(model files)                                                # trained LLE models
│  └─ hls/<provider>/(model files + dsl_map.json per SUT)
├─ artifacts/
│  ├─ det_checked/<provider>/<sut>/                                               # DET LLE GOLD + optional grading/prompts
│  │  ├─ <sut>_lle_gold.json
│  │  ├─ <sut>_lle_gold_ops.json                                                  # op list derived from GOLD (if enabled)
│  │  ├─ grades.json                                                              # only if grading is enabled
│  │  └─ prompts.jsonl                                                            # only if prompt tracing is enabled
│  ├─ lle_nondet/<provider>/<sut>/                                                # NONDET LLE GOLD
│  │  └─ lle_gold.json
│  ├─ analysis/<provider>/<sut>/                                                  # graphs, field catalogs, etc.
│  │  ├─ graph.json                                                               # HLS graph
│  │  └─ field_catalog.json                                                       # entity/field types for LLE expansion
│  ├─ hls_det/<provider>/<sut>/
│  │  ├─ hls_gold.json
│  │  └─ readable/stories_hls.js
│  └─ hls_nondet/<provider>/<sut>/
│     ├─ hls_gold.json
│     └─ readable/stories_hls.js
├─ scripts/
│  ├─ openapi/                                                                    # YAML→JSON, normalize, etc.
│  ├─ readable/                                                                   # LLE + emitters
│  │  ├─ emit_all_from_list.bat                                                   # HLS emitter (DET/NONDET) → stories_hls.js
│  │  ├─ build_field_catalog_for_list.bat                                         # NEW in v11
│  │  └─ expand_lle_nondet_for_list.bat                                           # NEW in v11
│  └─ hls/                                                                        # graphs/DSL + HLS GOLD builders
│     └─ build_hls_gold_det_for_list.bat
├─ config/
│  └─ suts_and_rw.txt                                                             # master list (with provider sections)
└─ README.md (this file)
```

**Provider list** typically has two sections inside `config\\suts_and_rw.txt`:

```
; === SUTs (7_suts_llm_provider) ===
banking
config_control
ecommerce
factory
garage
library
pharmacy

; === RWs (real_world_llm_provider) ===
directus
gitea
github
jira_cloud
keycloak_admin
meilisearch
netbox
trello
twilio
zulip
```

> Many batch wrappers accept a provider focus: `all | 7_suts_llm_provider | real_world_llm_provider`, and a mode: `det | nondet | both`.

---

## Installation & prerequisites

- **Windows 10/11**, **PowerShell** or **cmd**.
- **Python 3.10+** (repo uses `.venv`).  
- **Provengo** installed and on PATH.
- `git`, `pip`, and typical build utils.
- Run once to setup:
  ```powershell
  py -3.10 -m venv .venv
  .\.venv\Scripts\activate
  pip install -r requirements.txt
  ```

---

## End‑to‑end pipeline (17 systems, fully reproducible)

Every major step uses a **batch wrapper** and iterates **all 17 systems** from `config\\suts_and_rw.txt`. No direct Python here.

### A) OpenAPI → **DET LLE GOLD** → **interfaces.readable.js** (DET) → **Train LLE** → **NONDET LLE GOLD** → **interfaces.readable.js** (NONDET)

**A.0 — Fetch/locate OpenAPI**  
Place each spec in `openapis\\<provider>\\<sut>\\openapi.(yaml|json)`.

**A.1 — Convert YAML → JSON (single file, no deref)**  
```
scripts\openapi\yaml_to_json_for_list.bat config\suts_and_rw.txt
```
_Output_: `openapis\\<provider>\\<sut>\\openapi.json`

**A.2 — Build DET LLE GOLD from OpenAPI (baseline, deterministic)**  
```
scripts\readable\build_lle_gold_det_for_list.bat config\suts_and_rw.txt
```
_Output per SUT_:  
```
artifacts\det_checked\<provider>\<sut>\<sut>_lle_gold.json
artifacts\det_checked\<provider>\<sut>\<sut>_lle_gold_ops.json   (if ops extraction is enabled)
```

**A.3 — Emit LLE runtime (DET) → `interfaces.readable.js`**  
Prefer writing into the project’s `spec\js`, with fallback to artifacts:
```
scripts\readable\emit_js_lle_from_gold_for_list.bat config\suts_and_rw.txt det
```
_Output per SUT_ (first existing path is used):
```
<SUT>\spec\js\interfaces.readable.js
RWs\<sut>\spec\js\interfaces.readable.js
artifacts\readable\<provider>\<sut>\js\interfaces.readable.js
```

**A.4 — Train the LLE model (on DET)**  
> Required to unlock NONDET. Also enables optional grading/prompt tracing.
```
scripts\readable\train_lle_model_for_list.bat config\suts_and_rw.txt
```
_Output_:  
```
models\lle\<provider>\(model files)
artifacts\det_checked\<provider>\<sut>\grades.json    (only if grading enabled)
artifacts\det_checked\<provider>\<sut>\prompts.jsonl  (only if prompt tracing enabled)
```
**Why `grades.json` / `prompts.jsonl` might be missing:**  
They are **diagnostics**. To generate them, enable flags that your wrapper forwards (e.g., set `LLE_SAVE_PROMPTS=1`, `LLE_GRADING=1`).

**A.5 — Build field catalog (entity/field roles for expansion)** — **NEW in v11**  
```
scripts\readable\build_field_catalog_for_list.bat config\suts_and_rw.txt
```
_Output per SUT_:  
```
artifacts\analysis\<provider>\<sut>\field_catalog.json
```
Contains entity types, key/partial‑key/mandatory/optional fields.

**A.6 — Expand to NONDET LLE GOLD (model‑based + field catalog)** — **NEW in v11**  
```
scripts\readable\expand_lle_nondet_for_list.bat config\suts_and_rw.txt
```
- Uses **trained LLE model** + `field_catalog.json` to create valid/negative **payload permutations** (pairwise/t‑wise; per‑endpoint caps).  
_Output per SUT_:  
```
artifacts\lle_nondet\<provider>\<sut>\lle_gold.json
```
(If an ops extract is produced, it will be **beside** this file, *not* under `readable/`.)

**A.7 — Emit LLE runtime (NONDET) → `interfaces.readable.js` (one function per variant)**  
```
scripts\readable\emit_js_lle_from_gold_for_list.bat config\suts_and_rw.txt nondet
```

---

### B) LLE/Graph → **HLS DET** → **Train HLS** → **HLS NONDET** → **stories_hls.js**

**B.1 — Build HLS analysis graph + DSL map**  
```
scripts\hls\build_graphs_and_dsl_for_list.bat config\suts_and_rw.txt
```
_Output per SUT_:  
```
artifacts\analysis\<provider>\<sut>\graph.json
models\hls\<provider>\<sut>\dsl_map.json
```

**B.2 — Build HLS GOLD (DET) from graph + DSL**  
```
scripts\hls\build_hls_gold_det_for_list.bat config\suts_and_rw.txt
```
_Output per SUT_:  
```
artifacts\hls_det\<provider>\<sut>\hls_gold.json
```

**B.3 — Emit HLS runtime (DET) → `stories_hls.js`**  
```
scripts\readable\emit_all_from_list.bat config\suts_and_rw.txt all det
```
_Output per SUT_:  
```
artifacts\hls_det\<provider>\<sut>\readable\stories_hls.js
```

**B.4 — Train the HLS model (on DET)**  
```
scripts\hls\train_hls_model_for_list.bat config\suts_and_rw.txt
```
_Output_:  
```
models\hls\<provider>\(model files)
artifacts\hls_det\<provider>\<sut>\grades.json    (if enabled)
artifacts\hls_det\<provider>\<sut>\prompts.jsonl  (if enabled)
```

**B.5 — Build HLS GOLD (NONDET) — model‑based**  
```
scripts\hls\build_hls_gold_nondet_for_list.bat config\suts_and_rw.txt
```
_Output_:  
```
artifacts\hls_nondet\<provider>\<sut>\hls_gold.json
```

**B.6 — Emit HLS runtime (NONDET) → `stories_hls.js`**  
```
scripts\readable\emit_all_from_list.bat config\suts_and_rw.txt all nondet
```
_Output per SUT_:  
```
artifacts\hls_nondet\<provider>\<sut>\readable\stories_hls.js
```

---

## One‑shot executions

- **DET only (LLE+HLS)**:
```
call scripts\openapi\yaml_to_json_for_list.bat          config\suts_and_rw.txt
call scripts\readable\build_lle_gold_det_for_list.bat   config\suts_and_rw.txt
call scripts\readable\emit_js_lle_from_gold_for_list.bat config\suts_and_rw.txt det
call scripts\hls\build_graphs_and_dsl_for_list.bat      config\suts_and_rw.txt
call scripts\hls\build_hls_gold_det_for_list.bat        config\suts_and_rw.txt
call scripts\readable\emit_all_from_list.bat            config\suts_and_rw.txt all det
```

- **Train + NONDET (LLE+HLS)**:
```
call scripts\readable\train_lle_model_for_list.bat      config\suts_and_rw.txt
call scripts\readable\build_field_catalog_for_list.bat  config\suts_and_rw.txt
call scripts\readable\expand_lle_nondet_for_list.bat    config\suts_and_rw.txt
call scripts\readable\emit_js_lle_from_gold_for_list.bat config\suts_and_rw.txt nondet

call scripts\hls\train_hls_model_for_list.bat           config\suts_and_rw.txt
call scripts\hls\build_hls_gold_nondet_for_list.bat     config\suts_and_rw.txt
call scripts\readable\emit_all_from_list.bat            config\suts_and_rw.txt all nondet
```

---

## How to add a new system

1. Create `openapis\\<provider>\\<sut>\\openapi.(yaml|json)`.
2. Append `<sut>` under the right provider section in `config\\suts_and_rw.txt`.
3. Run **A.1→A.7** then **B.1→B.6** using the wrappers above.
4. Final run outputs land under:
   - LLE runtime: `<project or RWs>/<sut>/spec/js/interfaces.readable.js` (preferred) or `artifacts/readable/.../js/`.
   - HLS runtime: `artifacts/<hls_det|hls_nondet>/<provider>/<sut>/readable/stories_hls.js`.

---

## Notes on diagnostics (`grades.json`, `prompts.jsonl`)

These are **optional** artifacts for training/validation transparency. They appear only if the corresponding wrappers forward flags (e.g., `--grade`, `--save-prompts` or environment knobs like `LLE_GRADING=1`, `LLE_SAVE_PROMPTS=1`). If you do not see them, enable the flags and re‑train.

---

## Running with Provengo

Inside each SUT project folder (where `spec/js` exists), you can execute scenarios, for example:
```
provengo run random -p banking
```
Make sure `interfaces.readable.js` and `stories_hls.js` are present (either directly in `spec/js/` or via the artifacts fallback).

---

## Troubleshooting

- **`) was unexpected at this time`** → A batch block has an unmatched `(` or `)`. Avoid complex `if (...) else (...)` on a single line. Use multi‑line `if` blocks with `(` and `)` balanced.
- **Empty `stories_hls.js`** → ensure you passed `--out_dir` to the emitter and that you’re pointing it at the correct **GOLD** (DET vs NONDET).
- **`grades.json` / `prompts.jsonl` missing** → (explained above) enable flags and re‑train.
- **Path mixups** → prefer forward slashes **inside Python**, backslashes in `.bat`. Emitters should normalize when printing paths.
- **NONDET not changing anything** → confirm models are trained and `field_catalog.json` exists. Check pairwise/t‑wise caps.

---

## Change log

- **v11**
  - Clarified **purpose** and **full repo** at a practical level.
  - Enforced that **NONDET is model‑based only** (no NONDET without training).
  - Added missing step to **train the LLE model** before NONDET.
  - Introduced two new wrappers:  
    - `scripts\readable\build_field_catalog_for_list.bat`  
    - `scripts\readable\expand_lle_nondet_for_list.bat`
  - Explained **`grades.json` / `prompts.jsonl`** and how to generate them.
  - All major steps run via **batch wrappers for all 17 systems** — no direct Python in the main path.