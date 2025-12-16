# BpTestTell

> **Automated Infrastructure Generation for Story-Based Testing with BP for CRUD-based Systems.**

**BpTestTell** is an automated research framework designed to bridge the gap between static API specifications and dynamic concurrency testing. It automatically converts **OpenAPI (Swagger)** documents into executable **Provengo** test models, enabling the detection of race conditions, non-deterministic bugs, and logical inconsistencies in real-world applications.

---

## 🚀 Key Features

* **Automated Infrastructure Generation:** Instantly transforms `openapi.json` or `openapi.yaml` files into fully functional Provengo testing projects (Interfaces + Stories).
* **LLM-Driven Architecture:** Uses a Large Language Model (LLM) as a semantic architect to parse diverse API structures, identifying entities and operations that traditional regex parsers miss.
* **Concurrency Stress Testing:** Automatically generates "Nondet" (Non-Deterministic) test stories that deliberately attempt race conditions (e.g., simultaneous updates, duplicate adds, delete-then-fetch sequences).
* **Batch Processing:** Capable of rebuilding the test infrastructure for 17+ different systems (Directus, GitHub, Gitea, etc.) in a single run.
* **Dual-Layer Output:**
    * **`interfaces.readable.js`:** Low-level, executable JavaScript functions wrapping REST calls.
    * **`stories_hls.js`:** High-level behavioral threads (b-threads) defining complex user flows and state monitors.

---

## 📂 Repository Structure

```text
BpTestTell/
├── new_repo/               # Core Logic & Pipeline
│   ├── llm/                # LLM client wrapper and system prompts
│   └── pipeline/           # Main generation scripts
│       ├── run_openapi_to_interfaces...py  # JSON Generation (Batch processing logic)
│       └── emit_interfaces...py            # Code Emission (JS generation logic)
├── packs/                  # Input Data (OpenAPI Specs)
│   ├── 7_suts/             # Synthetic systems (Library, Banking, etc.)
│   └── real_world/         # Real-world systems (GitHub, Directus, Gitea, etc.)
├── provengo_ready/         # Output Directory (Generated Test Code)
├── run_manager.py          # Master execution script (Entry Point)
├── requirements.txt        # Python dependencies
└── README.md               # Project Documentation
```

---

## 🛠️ Installation

### Prerequisites
* **Python 3.8+**
* **Node.js** (Required for running the generated Provengo tests)
* **Provengo Tool** (Installed and configured in your system path)
* **OpenAI API Key** (Required for the LLM pipeline)

### Setup Steps

1.  **Clone the repository:**
    ```bash
    git clone [https://github.com/weissye/BpTestTell.git](https://github.com/weissye/BpTestTell.git)
    cd BpTestTell
    ```

2.  **Install Python dependencies:**
    ```bash
    pip install -r requirements.txt
    # This installs openai, pyyaml, flask, and other standard libraries.
    ```

3.  **Set your OpenAI API Key:**

    * **Windows (PowerShell):**
        ```powershell
        $env:OPENAI_API_KEY = "your-api-key-here"
        ```

    * **Linux/Mac:**
        ```bash
        export OPENAI_API_KEY="your-api-key-here"
        ```

---

## 🏃 Usage

The repository includes a robust `run_manager.py` script to handle generation efficiently.

### 1. Generate for a Single System
To generate the test infrastructure for a specific system (e.g., `github` or `directus`):
```bash
python run_manager.py --sut netbox
```
*This command automatically searches the `packs/` directory for the `netbox` folder, identifies the JSON or YAML OpenAPI file, and generates the Provengo code in `provengo_ready/netbox/spec/js`.*

### 2. Generate for All Systems
To batch process every system found in the packs folder (useful for full benchmark reproduction):
```bash
python run_manager.py
```

---

## ➕ How to Add a New System

You can easily extend this framework to test any new application that provides an OpenAPI specification.

1.  **Create a folder** in `packs/real_world/` with your system name (e.g., `packs/real_world/jira/`).
2.  **Place the Spec:** Save the raw OpenAPI file inside that folder as `openapi.json` or `openapi.yaml`.
3.  **Run the Builder:**
    ```bash
    python run_manager.py --sut jira
    ```
4.  **Run the Tests:** Navigate to `provengo_ready/jira` and run your standard Provengo command (e.g., `provengo run`).

---

## ⚡ The `--force` Parameter

By default, the pipeline uses a sophisticated **Caching System** (`new_repo/cache/`) to save time and money. If the LLM has already analyzed a specific chunk of the API, it reuses the cached result.

Using the `--force` flag overrides this behavior:
```bash
python run_manager.py --sut directus --force
```

* **Effect:** It deletes the cache for the target system and forces a fresh re-analysis by the LLM.
* **When to use it:** Use this only if you have modified the underlying `SYSTEM_PROMPT` in the pipeline scripts or if you suspect the cached analysis is outdated.

---

## 🧠 The Role of the LLM

This framework leverages an LLM (Large Language Model) not just for writing code, but for **Semantic Architecture Analysis**. The LLM is responsible for three critical tasks:

1.  **Entity Extraction & Operation Mapping:**
    * The LLM analyzes raw API paths (e.g., `/user/repos`, `/repos/{owner}/{repo}`) and semantically groups them into logical **Entities** (e.g., `Repository`).
    * It links "Orphaned Creators" (`POST /user/repos`) with "Orphaned Readers" (`GET /repos/...`) to form complete CRUD lifecycles.

2.  **Type Inference & Safety:**
    * It inspects parameter names and descriptions to infer strict types. For example, it identifies that `hidden` should be a boolean and `limit` should be an integer, preventing `400 Bad Request` errors.

3.  **Dependency Resolution:**
    * The LLM identifies logical dependencies. It understands that creating a `Comment` requires a valid `issueId` and `repoId`, allowing the generator to build stories that wait for parent entities to exist.

---

## 🛠️ The Pipeline Scripts

The core logic resides in `new_repo/pipeline`, where three main scripts orchestrate the process:

1.  **`process_openapi_to_spec.py` (The Architect):** Chunks the API spec, feeds it to the LLM, merges results, and applies heuristic patches (e.g., mapping Trello's `idBoard` to `id`). Outputs a normalized JSON spec.
2.  **`interface_emitter.py` (The Translator):** Generates the low-level JavaScript interface functions (`interfaces.sut.js`) and event matchers for Provengo.
3.  **`story_emitter.py` (The Director):** Generates high-level test scenarios (`stories.sut.js`). It builds full CRUD flows for resources and "Create-Only" flows for system events (webhooks, logs).

---

## 📂 Project Structure: `provengo` vs `provengo_ready`

* **`provengo/` (The Staging Area):**
    This is the active output directory. Files generated by `run_manager.py` land here. Use this for development, debugging, and review.

* **`provengo_ready/` (The Stable Release):**
    This folder represents the "Gold Standard" or frozen version of the tests, intended for CI/CD pipelines.

---

## 🎭 The Mock Infrastructure (`mocks/`)

To allow testing without complex Docker setups, the framework automates Mock Server creation.

* **Mock Builders (`*_mock_generator.py`):** Scripts that read the OpenAPI spec and write a Python Flask server file. They implement "Smart Logic" like Upsert (update-if-exists) and intelligent ID handling to match the real system's behavior.
* **Mock Runners (`mocks/sut_name/`):** The actual executable mock servers (e.g., `mocks/trello/trello_mock.py`). Running this script spins up a fast, in-memory API on localhost that mimics the real SUT.

---

## 📄 Outcome Files (Detailed)

For every processed system, the tool generates a `spec/js` folder containing:

* **`interfaces.sut.js`:** Low-level logic, executable wrapper functions, and event matchers.
* **`stories.sut.js`:** High-level behavioral threads defining linear CRUD stories, negative tests, and dependency synchronization.

---

Ready to use: pharmacy, library, garage, netbox, directus, trello

---

## 📜 License

[Include your license here, e.g., MIT, Apache 2.0]