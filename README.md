# BpTestTell

> **An automatic infrastructure generation for Story-Based Testing with BP for CRUD-based systems.**

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
    # This installs openai, pyyaml, and other standard libraries.
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
python run_manager.py --sut github
```
*This command automatically searches the `packs/` directory for the `github` folder, identifies the JSON or YAML OpenAPI file, and generates the Provengo code in `provengo_ready/github/spec/js`.*

### 2. Generate for All Systems
To batch process every system found in the `packs` folder (useful for full benchmark reproduction):

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

## 🧠 The Contribution of the LLM

This project leverages a Large Language Model (LLM) as a **Semantic Architect**, transforming static, inconsistent API specifications into cohesive behavioral testing models.

Traditional parsing techniques rely on rigid heuristics that are notoriously brittle when applied to heterogeneous naming conventions (e.g., `POST /users` vs `PUT /create-user`). The LLM solves three critical challenges:

1.  **Entity Discovery:** The model analyzes the raw topography of API paths to distinguish between core business entities (such as Users, Webhooks, or Issues) and auxiliary utility endpoints. It semantically infers that a path like `POST /users/invite` represents a creation event for a "User" entity, even if the standard REST convention is absent.
2.  **Operation Mapping:** It categorizes endpoints into standard CRUD actions (Create, Read, Update, Delete) based on contextual clues rather than just HTTP methods. This is essential for handling edge cases where systems deviate from standard practices.
3.  **Monitor Generation:** The model synthesizes **Natural Language Monitors** and their corresponding **Regular Expressions**. By generating human-readable event descriptions (e.g., *"Add user {username}"*) and deriving the precise Regex patterns needed to detect these events, the framework can automatically generate "block" and "wait" logic for behavioral threads.

This semantic abstraction allows the framework to be **universal**: a single generic prompt successfully decomposes and models 17+ distinct real-world systems without requiring custom parsers for each one.

---

## 📄 Outcome

For every processed system, the tool generates a `spec/js` folder containing:

### 1. `interfaces.readable.js`
* **Low-Level Logic:** Contains executable functions for every API operation.
* **Negative Wrappers:** Includes aliases like `tryToDeleteNonExisting` that express failure intent while calling the underlying API.
* **Event Matchers:** Includes logic (e.g., `matchAddUser`) that allows the test engine to "listen" for specific data events.

### 2. `stories_hls.js`
* **High-Level Scenarios:** A suite of **Behavioral Threads (b-threads)**.
* **Nondet Variants:** 4 distinct race-condition flows per entity (e.g., Add -> Duplicate -> Update -> Delete) to stress-test concurrency.
* **Negative Tests:** Scenarios that intentionally try to duplicate existing items or delete non-existent ones to verify error handling.
* **Passive Monitors:** Background threads that enforce state consistency (e.g., blocking the creation of an entity if it already exists).

---

## 📜 License

[Include your license here, e.g., MIT, Apache 2.0]