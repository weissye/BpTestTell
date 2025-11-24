import json
import re
import os

# Configuration paths
# Paths are relative to this script's location
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# packs/realworld/netbox/openapi.json
OPENAPI_PATH = os.path.join(BASE_DIR, '..', 'packs', 'realworld', 'netbox', 'openapi.json')
# netbox_mock.py
OUTPUT_PATH = os.path.join(BASE_DIR, 'netbox_mock.py')

def load_spec(path):
    """Loads the OpenAPI specification from a JSON file."""
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def convert_path_to_flask(path):
    """
    Converts OpenAPI path parameters to Flask's format.
    Example: /api/circuits/{id}/ -> /api/circuits/<id>/
    """
    return re.sub(r'\{([^}]+)\}', r'<\1>', path)

def generate_mock(spec):
    """
    Generates the source code for a Flask application based on the OpenAPI spec.
    It creates a single file with:
    1. In-memory database
    2. Helper functions for CRUD operations
    3. Route handlers for each path in the spec
    """
    lines = []
    
    # --- Header & Imports ---
    lines.append("from flask import Flask, request, jsonify, make_response")
    lines.append("import uuid")
    lines.append("import datetime")
    lines.append("")
    lines.append("app = Flask(__name__)")
    lines.append("# Disable strict slashes to avoid 308 redirects for missing trailing slashes")
    lines.append("app.url_map.strict_slashes = False")
    lines.append("")

    # --- In-Memory Database ---
    lines.append("# In-memory database to store state")
    lines.append("# Structure: { 'resource_key': { 'id': {data} } }")
    lines.append("db = {}")
    lines.append("")

    # --- Helper Functions ---
    lines.append("def get_resource_key(path):")
    lines.append("    # Simple heuristic to group resources")
    lines.append("    # e.g. /api/circuits/circuit-group-assignments/ -> api_circuits_circuit_group_assignments")
    lines.append("    parts = path.strip('/').split('/')")
    lines.append("    # Remove ID placeholders")
    lines.append("    parts = [p for p in parts if not p.startswith('<')]")
    lines.append("    return '_'.join(parts)")
    lines.append("")

    lines.append("# Generic CRUD helpers")
    lines.append("def mock_list(key, args):")
    lines.append("    if key not in db: db[key] = {}")
    lines.append("    return {'count': len(db[key]), 'next': None, 'previous': None, 'results': list(db[key].values())}")
    lines.append("")

    lines.append("def mock_create(key, data):")
    lines.append("    if key not in db: db[key] = {}")
    lines.append("    if 'id' not in data:")
    lines.append("        data['id'] = len(db[key]) + 1")
    lines.append("    data['created'] = datetime.datetime.now().isoformat()")
    lines.append("    data['last_updated'] = datetime.datetime.now().isoformat()")
    lines.append("    db[key][str(data['id'])] = data")
    lines.append("    return data")
    lines.append("")

    lines.append("def mock_retrieve(key, id):")
    lines.append("    if key not in db: return None")
    lines.append("    return db[key].get(str(id))")
    lines.append("")

    lines.append("def mock_update(key, id, data):")
    lines.append("    if key not in db: return None")
    lines.append("    if str(id) not in db[key]: return None")
    lines.append("    db[key][str(id)].update(data)")
    lines.append("    db[key][str(id)]['last_updated'] = datetime.datetime.now().isoformat()")
    lines.append("    return db[key][str(id)]")
    lines.append("")

    lines.append("def mock_delete(key, id):")
    lines.append("    if key not in db: return False")
    lines.append("    if str(id) in db[key]:")
    lines.append("        del db[key][str(id)]")
    lines.append("        return True")
    lines.append("    return False")
    lines.append("")

    # --- Route Generation ---
    paths = spec.get('paths', {})
    
    for path, methods in paths.items():
        flask_path = convert_path_to_flask(path)
        
        for method, details in methods.items():
            # Generate a unique function name
            operation_id = details.get('operationId', f"{method}_{path.replace('/', '_').replace('{', '').replace('}', '')}")
            operation_id = operation_id.replace('-', '_')
            
            lines.append(f"@app.route('{flask_path}', methods=['{method.upper()}'])")
            lines.append(f"def {operation_id}(**kwargs):")
            lines.append(f"    # Operation: {details.get('summary', 'No summary')}")
            lines.append(f"    resource_key = get_resource_key('{flask_path}')")
            
            # Generate logic based on HTTP method
            if method.lower() == 'get':
                if '{id}' in path or '{' in path: # Heuristic for detail view
                    # Extract parameter name from path (e.g., 'id' from '{id}')
                    param_name = path.split('{')[-1].split('}')[0]
                    lines.append(f"    item = mock_retrieve(resource_key, kwargs.get('{param_name}'))")
                    lines.append("    if item:")
                    lines.append("        return jsonify(item)")
                    lines.append("    return jsonify({'detail': 'Not found.'}), 404")
                else:
                    # List view
                    lines.append("    return jsonify(mock_list(resource_key, request.args))")
            
            elif method.lower() == 'post':
                lines.append("    data = request.get_json(silent=True) or {}")
                lines.append("    created = mock_create(resource_key, data)")
                lines.append("    return jsonify(created), 201")
            
            elif method.lower() in ['put', 'patch']:
                param_name = path.split('{')[-1].split('}')[0] if '{' in path else 'id'
                lines.append("    data = request.get_json(silent=True) or {}")
                lines.append(f"    updated = mock_update(resource_key, kwargs.get('{param_name}'), data)")
                lines.append("    if updated:")
                lines.append("        return jsonify(updated)")
                lines.append("    return jsonify({'detail': 'Not found.'}), 404")
            
            elif method.lower() == 'delete':
                param_name = path.split('{')[-1].split('}')[0] if '{' in path else 'id'
                lines.append(f"    success = mock_delete(resource_key, kwargs.get('{param_name}'))")
                lines.append("    if success:")
                lines.append("        return '', 204")
                lines.append("    return jsonify({'detail': 'Not found.'}), 404")
            
            else:
                lines.append("    return jsonify({'status': 'Not implemented'}), 501")
            
            lines.append("")

    # --- Main Execution ---
    lines.append("if __name__ == '__main__':")
    lines.append("    app.run(debug=True, port=5000)")

    return "\n".join(lines)

if __name__ == "__main__":
    print(f"Loading spec from {OPENAPI_PATH}...")
    spec = load_spec(OPENAPI_PATH)
    print("Generating mock code...")
    code = generate_mock(spec)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(code)
    print(f"Generated mock at {OUTPUT_PATH}")
