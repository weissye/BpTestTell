import json
import os
import re

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'trello', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'trello_mock.py')

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_status_codes(spec):
    path_overrides = {}
    for path, methods in spec.get('paths', {}).items():
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            clean_path = path.strip('/')
            if clean_path.startswith('1/'): clean_path = clean_path[2:]
            
            if '200' in responses: path_overrides[clean_path] = 200
            elif '201' in responses: path_overrides[clean_path] = 201
            elif '204' in responses: path_overrides[clean_path] = 204
    return path_overrides

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec:
        return

    status_code_map = extract_status_codes(spec)
    title = spec.get('info', {}).get('title', 'Trello API')
    
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random")
    code.append("import string")
    code.append("import re")
    code.append("")
    code.append(f"# Auto-generated Mock for {title}")
    code.append("app = Flask(__name__)")
    code.append("mock_db = defaultdict(list)")
    code.append("")
    
    code.append(f"# Map of API paths to their expected POST success code")
    code.append(f"PATH_STATUS_CODES = {json.dumps(status_code_map, indent=4)}")
    code.append("")

    code.append("def get_success_code(resource_path):")
    code.append("    if resource_path in PATH_STATUS_CODES:")
    code.append("        return PATH_STATUS_CODES[resource_path]")
    code.append("    for path_pattern, code in PATH_STATUS_CODES.items():")
    code.append("        if '{' in path_pattern:")
    code.append("            # Safe Regex replacement for parameter matching")
    code.append("            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)")
    code.append("            regex = '^' + regex + '$'")
    code.append("            if re.fullmatch(regex, resource_path):")
    code.append("                return code")
    code.append("    return 200 # Default to 200 for Trello")
    code.append("")

    code.append("def generate_trello_id():")
    code.append("    return ''.join(random.choices('0123456789abcdef', k=24))")
    code.append("")

    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id): return item")
    code.append("    return None")
    code.append("")
    
    code.append("def mock_list(resource_key, filters):")
    code.append("    items = mock_db[resource_key]")
    code.append("    return items")
    code.append("")
    
    # --- FIX: Universal Route Handler ---
    # Catches /1/path, /path, and anything else.
    code.append("@app.route('/', defaults={'resource_path': ''}, methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    # Normalize path: strip leading '1/' if present")
    code.append("    clean_path = resource_path.strip('/')")
    code.append("    if clean_path.startswith('1/'):")
    code.append("        clean_path = clean_path[2:]")
    code.append("    ")
    code.append("    resource_key = clean_path")
    code.append("    parts = clean_path.split('/')")
    code.append("    item_id = None")
    code.append("    ")
    code.append("    # Trello ID Heuristic: 24-char hex OR just the last segment if it looks like an ID context")
    code.append("    potential_id = parts[-1]")
    code.append("    # Relaxed ID check to support generated IDs like 'idOrg_3320'")
    code.append("    is_hex = len(potential_id) == 24 and all(c in '0123456789abcdef' for c in potential_id)")
    code.append("    is_gen_id = '_' in potential_id # Support our test IDs")
    code.append("    ")
    code.append("    if len(parts) > 1 and (is_hex or is_gen_id):")
    code.append("        item_id = potential_id")
    code.append("        resource_key = '/'.join(parts[:-1])")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Clean: {clean_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    code.append("    if request.method == 'GET':")
    code.append("        if item_id is not None:")
    code.append("            item = mock_retrieve(resource_key, item_id)")
    code.append("            if item: return jsonify(item)")
    code.append("            return jsonify({'message': 'Not Found', 'error': 'ERROR'}), 404")
    code.append("        else:")
    code.append("            data = mock_list(resource_key, request.args)")
    code.append("            return jsonify(data)")
    code.append("")

    code.append("    elif request.method == 'POST':")
    code.append("        success_code = get_success_code(clean_path)")
    code.append("        new_item = request.json or {}")
    code.append("        if not new_item: new_item = request.args.to_dict()")
    code.append("        ")
    code.append("        if 'id' not in new_item:")
    code.append("            new_item['id'] = generate_trello_id()")
    code.append("")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        print(f\"DEBUG POST: Added to '{resource_key}'. ID: {new_item.get('id')}\")")
    code.append("        return jsonify(new_item), success_code")
    code.append("")

    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        if item_id is None: return '', 405")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            existing_item.update(request.json or request.args.to_dict())")
    code.append("            return jsonify(existing_item)")
    code.append("        return jsonify({'message': 'Not Found'}), 404")
    code.append("")

    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("             initial_len = len(mock_db[resource_key])")
    code.append("             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("             if len(mock_db[resource_key]) < initial_len:")
    code.append("                 return jsonify({'_value': None}), 200")
    code.append("             return jsonify({'message': 'Not Found'}), 404")
    code.append("        return '', 405")
    code.append("")
    
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Trello Mock Server (RAM Only) running on http://127.0.0.1:3000')")
    code.append("    app.run(debug=False, port=3000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    
    print(f"Successfully generated Trello mock server at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)