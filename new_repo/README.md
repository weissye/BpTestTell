# new_repo – OpenAPI → unified infra → interfaces.readable.js + stories_hls.js

This folder defines a **combined, spec-driven pipeline** for BpTestTell where the
**main input is an OpenAPI spec (JSON or YAML)** and the outputs are:

- `interfaces.readable.js`
- `stories_hls.js`

Both files are generated from the **same unified spec** that is derived from
the OpenAPI, so their function signatures and parameter orders stay compatible.

High-level flow:

> OpenAPI (json/yaml)  
> → LLM builds a unified interaction spec (JSON)  
> → Python generator emits BOTH `interfaces.readable.js` and `stories_hls.js`.

We still support generating OpenAPI from a textual description for **new SUTs**.

---

## 1. Core Components

### 1.1 Unified SUT spec (internal JSON)

For each SUT we work with a **unified interaction spec** (JSON) of the form:

- `sut`: SUT name (e.g. "netbox").
- `entities`: map of entity name → info:
  - `params`: ordered list of parameter names (id, name, ...).
  - `operations`: `add`, `delete`, `verifyExists`, etc.
  - `waitForPatterns`: regex-based patterns on `parameters.description`.
- `stories`: basic patterns like `"crud_basic"`, `"duplicate_add"` that refer to entities.

This spec is **not the user input**; it is **derived from OpenAPI** by an LLM
(`spec_from_openapi.md`) and cached under `new_repo/specs/<sut>.generated.json`
so you can inspect and edit it if you want.

An example is in `specs/example_sut_spec.json` – this is exactly the format
the LLM is asked to output.

### 1.2 Generator: one script → two JS files

`pipeline/emit_interfaces_and_stories_from_spec.py` is the deterministic generator.

Input:

- `--spec new_repo/specs/<sut>.generated.json`
- `--out-dir provengo/<sut>/spec/js`

Output:

- `<out-dir>/interfaces.readable.js`
- `<out-dir>/stories_hls.js`

Both use the **same `params` array** per entity:

- Function signatures in `interfaces.readable.js`.
- `waitForAny*` return object shape.
- Story argument lists in `stories_hls.js`.

Therefore, interfaces and stories **cannot drift** unless the spec itself is wrong.

### 1.3 Orchestrator: OpenAPI → spec → JS

`pipeline/run_openapi_to_interfaces_and_stories.py` is the **main entrypoint**
for you:

Input:

- `--sut` – SUT name (e.g. `netbox`).
- `--openapi` – path to OpenAPI file (JSON or YAML).
- `--out-dir` – where to put `interfaces.readable.js` and `stories_hls.js`.
- `--model` (optional) – LLM model name (default `gpt-4o-mini`).

Steps:

1. Load and parse the OpenAPI file.
2. Call the LLM with prompt `llm/prompts/spec_from_openapi.md` to get a **unified spec JSON**.
3. Save this spec to `new_repo/specs/<sut>.generated.json`.
4. Call `emit_interfaces_and_stories_from_spec.py` on that spec to write the JS files.

So your **user-visible pipeline input is the OpenAPI**, not the spec.

---

## 2. LLM Integration

We use LLMs in two places:

1. **OpenAPI from description** (optional for new systems)
2. **Spec from OpenAPI** (this is the crucial part for merged infra)

### 2.1 OpenAPI from description

Script: `pipeline/run_generate_openapi_from_description.py`  
Prompt: `llm/prompts/openapi_from_description.md`

Usage:

```bash
python new_repo/pipeline/run_generate_openapi_from_description.py ^
    --sut my_new_system ^
    --description-file docs/my_new_system_description.md
```

Output:

- `packs/new_suts/my_new_system/openapi.generated.json`

You can then feed that OpenAPI into the **main orchestrator**:

```bash
python new_repo/pipeline/run_openapi_to_interfaces_and_stories.py ^
    --sut my_new_system ^
    --openapi packs/new_suts/my_new_system/openapi.generated.json ^
    --out-dir provengo/my_new_system/spec/js
```

### 2.2 Unified spec from OpenAPI

Script: `pipeline/run_openapi_to_interfaces_and_stories.py`  
Prompt: `llm/prompts/spec_from_openapi.md`

The prompt explains the unified spec format and gives an example. The LLM
must respond with **only JSON** in that format.

The resulting spec is stored in:

- `new_repo/specs/<sut>.generated.json`

You can manually review / edit this file if needed and then call the generator
directly:

```bash
python new_repo/pipeline/emit_interfaces_and_stories_from_spec.py ^
    --spec new_repo/specs/netbox.generated.json ^
    --out-dir provengo/netbox/spec/js
```

---

## 3. Existing 17 SUTs

`new_repo/config/systems.json` lists the 17 SUTs (7 synthetic + 10 real-world) with
paths to their current OpenAPI.

To regenerate combined interfaces + stories for an existing SUT:

```bash
python new_repo/pipeline/run_openapi_to_interfaces_and_stories.py ^
    --sut netbox ^
    --openapi packs/real_world/netbox/openapi.json ^
    --out-dir provengo/netbox/spec/js
```

(Adjust SUT name and OpenAPI path for each system.)

---

## 4. Files Overview

- `new_repo/README.md` – this document.
- `new_repo/config/systems.json` – metadata for the 17 SUTs.
- `new_repo/llm/llm_client.py` – minimal OpenAI-based client (can be swapped to local model).
- `new_repo/llm/prompts/openapi_from_description.md` – description → OpenAPI.
- `new_repo/llm/prompts/spec_from_openapi.md` – OpenAPI → unified spec.
- `new_repo/specs/example_sut_spec.json` – sample spec format (used in the prompt).
- `new_repo/specs/<sut>.generated.json` – LLM-derived specs (created at runtime).
- `new_repo/pipeline/emit_interfaces_and_stories_from_spec.py` – spec → JS generator.
- `new_repo/pipeline/run_generate_openapi_from_description.py` – description → OpenAPI.
- `new_repo/pipeline/run_openapi_to_interfaces_and_stories.py` – **OpenAPI → spec → JS** orchestrator.

---

## 5. Summary

- The **pipeline input** is now **OpenAPI (json/yaml)**.
- Internally we derive a **unified spec** using an LLM.
- From that spec a deterministic generator creates **both** `interfaces.readable.js`
  and `stories_hls.js` so they share **exactly the same infrastructure** and
  cannot diverge.

## 6. Running all current SUTs starting from OpenAPI files

You do **not** have to maintain a separate config file to run all systems.
Instead, the driver:

- `new_repo/pipeline/run_all_suts_from_openapi.py`

simply scans:

- `packs/7_suts/*/openapi.(json|yaml|yml)`
- `packs/real_world/*/openapi.(json|yaml|yml)`
- `packs/new_suts/*/openapi.(json|yaml|yml)` (if present)

For each SUT directory that contains one of these files, it calls the
`run_openapi_to_interfaces_and_stories` orchestrator and writes:

- `provengo/<sut>/spec/js/interfaces.readable.js`
- `provengo/<sut>/spec/js/stories_hls.js`

Usage from the repo root:

```bash
python new_repo/pipeline/run_all_suts_from_openapi.py
```

On Windows you can also use the wrapper:

```bat
scripts\run_all_suts_from_openapi.bat
```
