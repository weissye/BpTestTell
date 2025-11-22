# Netbox Provengo Testing Guide

This guide explains how to set up and run Provengo-based stateful fuzzing tests for the Netbox mock server.

## Overview

The Netbox testing infrastructure consists of:
1. **Mock Server** (`mocks/netbox_mock.py`) - A Flask application implementing all Netbox OpenAPI routes
2. **Provengo Pipeline** (`scripts/run_netbox_pipeline.bat`) - Generates test artifacts from OpenAPI spec
3. **Provengo Project** (`provengo/netbox/`) - Executable test suite

## Prerequisites

- Windows 10/11
- Python 3.9+ with virtual environment activated
- Node.js and Provengo installed (`provengo --version`)
- OpenAI API key (for model-driven pipeline steps)

## Quick Start

### 1. Set up environment

```bat
rem Set your OpenAI API key for model-driven steps
set OPENAI_API_KEY=sk-...

rem Activate Python virtual environment
.venv\Scripts\activate
```

### 2. Generate mock server (if needed)

```bat
rem Generate the mock from OpenAPI spec
python mocks\netbox_mock_generator.py

rem Start the mock server (keep this running)
python mocks\netbox_mock.py
```

The server will start on `http://127.0.0.1:5000`.

### 3. Run the Provengo pipeline

```bat
rem This generates all test artifacts and sets up the Provengo project
scripts\run_netbox_pipeline.bat
```

This script will:
- Build DET LLE GOLD (deterministic low-level events)
- Generate field catalog
- Expand NONDET LLE (non-deterministic variants)
- Emit `interfaces.readable.js` 
- Generate graph from OpenAPI
- Build DSL map
- Create HLS DET GOLD (high-level stories)
- Create HLS NONDET GOLD
- Emit `stories_hls.js`
- Set up `provengo/netbox/` project structure

### 4. Run Provengo tests

```bat
rem Navigate to the Provengo project
cd provengo\netbox

rem Run tests against the mock server
provengo run -Dhost=127.0.0.1 -Dport=5000

rem Optional: Run with specific seed for reproducibility
provengo run -Dhost=127.0.0.1 -Dport=5000 -Dseed=12345

rem Optional: Run multiple times
provengo run -Dhost=127.0.0.1 -Dport=5000 -DnRuns=10
```

## Project Structure

```
mocks/
  netbox_mock_generator.py    # Generator script
  netbox_mock.py               # Generated Flask mock server

packs/realworld/netbox/
  openapi.json                 # Netbox OpenAPI specification

artifacts/
  det_checked/real_world_llm_provider/netbox/
    netbox_llm_gold.json       # DET LLE GOLD
  lle_fields/real_world_llm_provider/netbox/
    field_catalog.json         # Field catalog
  lle_nondet/real_world_llm_provider/netbox/
    lle_nondet_gold.json       # NONDET LLE GOLD
  readable/real_world_llm_provider/netbox/
    interfaces.readable.js     # Generated LLE events
  hls_det/real_world_llm_provider/netbox/
    hls_gold.json              # HLS DET GOLD
    readable/
      stories_hls.js           # Generated HLS stories

provengo/netbox/
  spec/js/
    interfaces.readable.js     # Copied from artifacts
    stories_hls.js             # Copied from artifacts
  config/
    provengo.yml               # Provengo configuration
  meta-spec/                   # Metadata scripts
```

## Planting Bugs in the Mock

To demonstrate the fuzzing tool's capabilities, you can plant bugs in `mocks/netbox_mock.py`:

### Example 1: State-dependent bug

```python
@app.route('/api/circuits/circuits/', methods=['POST'])
def circuits_circuits_create(**kwargs):
    resource_key = get_resource_key('/api/circuits/circuits/')
    
    # BUG: Crash if more than 5 circuits are created
    if len(db.get(resource_key, {})) >= 5:
        return jsonify({'error': 'Too many circuits'}), 500
        
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201
```

### Example 2: Off-by-one bug

```python
@app.route('/api/circuits/circuits/<id>/', methods=['DELETE'])
def circuits_circuits_destroy(**kwargs):
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    
    # BUG: Delete wrong item (off by one)
    wrong_id = str(int(kwargs.get('id')) - 1)
    success = mock_delete(resource_key, wrong_id)
    
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404
```

### Example 3: Complex story bug

```python
# BUG: If you create a circuit, then a termination, 
# then try to update the circuit, it fails
@app.route('/api/circuits/circuits/<id>/', methods=['PUT'])
def circuits_circuits_update(**kwargs):
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    term_key = get_resource_key('/api/circuits/circuit-terminations/')
    
    # BUG: Fail if any terminations exist
    if db.get(term_key, {}):
        return jsonify({'error': 'Cannot update circuit with terminations'}), 400
        
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404
```

## Comparing with Microsoft RESTler

The Provengo-based approach excels at finding bugs that require longer request sequences (stories) because:

1. **State-aware**: Tracks system state through high-level stories
2. **Semantic understanding**: Uses DSL to understand resource relationships
3. **Longer sequences**: Can explore complex multi-step scenarios
4. **Behavioral programming**: Uses BP threads to manage concurrent request patterns

RESTler focuses on shorter sequences and may miss bugs that only manifest after specific multi-step workflows.

## Troubleshooting

### Mock server fails to start
- Check that port 5000 is available
- Verify Flask is installed: `pip install flask`

### Pipeline script fails
- Ensure `OPENAI_API_KEY` is set
- Check Python environment is activated
- Verify OpenAPI file exists at `packs\realworld\netbox\openapi.json`

### Provengo tests fail
- Verify mock server is running on port 5000
- Check that `interfaces.readable.js` and `stories_hls.js` were generated
- Try running with `-Dseed=12345` for reproducible results

### 308 Redirects
- The mock has `app.url_map.strict_slashes = False` to handle URLs both with and without trailing slashes

## Next Steps

1. **Plant more bugs** in the mock to demonstrate detection capabilities
2. **Run comparison tests** against Microsoft RESTler
3. **Analyze results** to show which bugs each tool finds
4. **Document findings** for your demonstration

## References

- Main README: `README.md`
- Provengo docs: https://docs.provengo.tech
- OpenAPI spec: `packs/realworld/netbox/openapi.json`
