import json
import os
import re
import random
from collections import defaultdict

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'gitea', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'gitea_mock.py')

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_status_codes(spec):
    """
    STRICT MULTI-METHOD EXTRACTION: Captures success codes for ALL methods.
    Ensures PUT/PATCH/DELETE fidelity (e.g., 204 for starring).
    """
    codes = {}
    for path, methods in spec.get('paths', {}).items():
        clean_path = path.strip('/')
        if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]
        
        path_data = {}
        for method, data in methods.items():
            if method.lower() not in ['get', 'post', 'put', 'patch', 'delete']: continue
            responses = data.get('responses', {})
            # Prioritize specific success codes found in spec
            if '204' in responses: path_data[method.upper()] = 204
            elif '202' in responses: path_data[method.upper()] = 202
            elif '201' in responses: path_data[method.upper()] = 201
            else: path_data[method.upper()] = 200
        codes[clean_path] = path_data
    return codes

def generate_mock_code(status_codes):
    """
    ULTIMATE BUILDER: Generates a mock with permissive Action-Upsert logic.
    """
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random")
    code.append("import re")
    code.append("")
    code.append("app = Flask(__name__)")
    code.append("mock_db = defaultdict(list)")
    code.append("")
    code.append(f"SPEC_CODES = {json.dumps(status_codes, indent=4)}")
    code.append("")
    code.append("def get_success_code(path, method):")
    code.append("    method = method.upper()")
    code.append("    if path.startswith('api/v1/'): path = path[7:]")
    code.append("    # Exact match check")
    code.append("    if path in SPEC_CODES and method in SPEC_CODES[path]: return SPEC_CODES[path][method]")
    code.append("    # Regex match check for paths with {id}")
    code.append("    for pattern, methods in SPEC_CODES.items():")
    code.append("        if '{' in pattern:")
    code.append("            regex = '^' + re.sub(r'\\{[^}]+\\}', '[^/]+', pattern) + '$'")
    code.append("            if re.fullmatch(regex, path) and method in methods: return methods[method]")
    code.append("    return 204 if method == 'DELETE' else (201 if method == 'POST' else 200)")
    code.append("")
    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id): return item")
    code.append("    return None")
    code.append("")
    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    clean_path = resource_path")
    code.append("    if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]")
    code.append("    parts = clean_path.split('/')")
    code.append("    ")
    # FIX: Robust Hierarchy Logic - Don't treat collections as IDs
    code.append("    if request.method == 'POST' or clean_path in SPEC_CODES:")
    code.append("        resource_key, item_id = clean_path, None")
    code.append("    elif len(parts) > 1:")
    code.append("        resource_key, item_id = '/'.join(parts[:-1]), parts[-1]")
    code.append("    else:")
    code.append("        resource_key, item_id = clean_path, None")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {clean_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("    success_code = get_success_code(clean_path, request.method)")
    code.append("")
    code.append("    if request.method == 'GET':")
    code.append("        item = mock_retrieve(resource_key, item_id)")
    code.append("        if item: return jsonify(item)")
    code.append("        if resource_key in mock_db and item_id is None: return jsonify(mock_db[resource_key])")
    code.append("        if clean_path in SPEC_CODES: return jsonify([])")
    code.append("        return jsonify({'message': 'Not Found'}), 404")
    code.append("")
    code.append("    elif request.method == 'POST':")
    code.append("        if 'admin/unadopted' in clean_path: return '', 204")
    code.append("        try: new_item = request.json or {}")
    code.append("        except: new_item = {}")
    code.append("        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        return jsonify(new_item), success_code")
    code.append("")
    code.append("    elif request.method in ['PUT', 'PATCH']:")
    # FIX: Action-Upsert logic for relationship endpoints (like starring)
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        try: payload = request.json or {}")
    code.append("        except: payload = {}")
    code.append("        if existing_item:")
    code.append("            existing_item.update(payload)")
    code.append("            return jsonify(existing_item), success_code")
    code.append("        # Idempotent creation for relationship PUTs")
    code.append("        payload['id'] = item_id")
    code.append("        mock_db[resource_key].append(payload)")
    code.append("        return jsonify(payload), success_code")
    code.append("")
    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("            mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("            return '', success_code")
    code.append("        return '', 405")
    code.append("")
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Gitea Mock Server (Fidelity Fix) running on http://127.0.0.1:8000')")
    code.append("    app.run(debug=False, port=8000)")
    
    return "\n".join(code)

def main():
    spec = load_spec(OPENAPI_PATH)
    status_codes = extract_status_codes(spec)
    mock_script = generate_mock_code(status_codes)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(mock_script)
    print(f"✅ Re-built Mock Builder at: {OUTPUT_PATH}")

if __name__ == '__main__':
    main()