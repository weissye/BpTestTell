import json
import os
import re
import yaml # pip install PyYAML
import random
from collections import defaultdict
from flask import Flask, request, jsonify

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
    path_overrides = {}
    for path, methods in spec.get('paths', {}).items():
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            clean_path = path.strip('/')
            # Remove api/v1/ prefix if present to match mock logic
            if clean_path.startswith('api/v1/'):
                clean_path = clean_path[7:]
            
            # FIX: Added check for 202 (Accepted)
            if '201' in responses:
                path_overrides[clean_path] = 201
            elif '200' in responses:
                path_overrides[clean_path] = 200
            elif '204' in responses:
                path_overrides[clean_path] = 204
            elif '202' in responses:
                path_overrides[clean_path] = 202
                
    return path_overrides

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec: return

    status_code_map = extract_status_codes(spec)
    title = spec.get('info', {}).get('title', 'Gitea API')
    
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random")
    code.append("import re")
    code.append("")
    code.append(f"# Auto-generated Mock for {title}")
    code.append("app = Flask(__name__)")
    code.append("mock_db = defaultdict(list)")
    code.append("")
    
    code.append(f"PATH_STATUS_CODES = {json.dumps(status_code_map, indent=4)}")
    code.append("")

    code.append("def get_success_code(resource_path):")
    code.append("    # Normalize path")
    code.append("    if resource_path.startswith('api/v1/'): resource_path = resource_path[7:]")
    code.append("    ")
    code.append("    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]")
    code.append("    for path_pattern, code in PATH_STATUS_CODES.items():")
    code.append("        if '{' in path_pattern:")
    code.append("            regex = re.sub(r'\\{[^}]+\\}', '[^/]+', path_pattern)")
    code.append("            regex = '^' + regex + '$'")
    code.append("            if re.fullmatch(regex, resource_path): return code")
    code.append("    return 201")
    code.append("")

    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id): return item")
    code.append("    return None")
    code.append("")
    
    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    # Normalize Gitea API path")
    code.append("    clean_path = resource_path")
    code.append("    if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]")
    code.append("    ")
    code.append("    resource_key = clean_path")
    code.append("    parts = clean_path.split('/')")
    code.append("    item_id = None")
    code.append("    if len(parts) > 1:")
    code.append("        last_part = parts[-1]")
    code.append("        # Gitea IDs are integers, usernames are strings. Simple heuristic:")
    code.append("        # If it looks like an ID (digit) or we are in a detail route context")
    code.append("        item_id = last_part")
    code.append("        resource_key = '/'.join(parts[:-1])")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Clean: {clean_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    code.append("    if request.method == 'GET':")
    code.append("        # List vs Item logic")
    code.append("        # A heuristic: if 'item_id' seems to be a variable part, try retrieve.")
    code.append("        # If retrieve fails, it might be a list endpoint that just looks like a detail.")
    code.append("        item = mock_retrieve(resource_key, item_id)")
    code.append("        if item: return jsonify(item)")
    code.append("        ")
    code.append("        # Fallback: Maybe it wasn't an ID, but a list resource")
    code.append("        if resource_key in mock_db and len(mock_db[resource_key]) > 0:")
    code.append("             # It was a list, return list")
    code.append("             return jsonify(mock_db[resource_key])")
    code.append("        ")
    code.append("        # Check if the full path is a list key")
    code.append("        if clean_path in mock_db:")
    code.append("             return jsonify(mock_db[clean_path])")
    code.append("        ")
    code.append("        return jsonify({'message': 'Not Found'}), 404")
    code.append("")

    code.append("    elif request.method == 'POST':")
    code.append("        success_code = get_success_code(clean_path)")
    code.append("        # Handle empty body (204) or specific logic")
    code.append("        if 'admin/unadopted' in clean_path:")
    code.append("             return '', 204")
    code.append("")
    code.append("        try: new_item = request.json or {}")
    code.append("        except: new_item = {}")
    code.append("        ")
    code.append("        if 'id' not in new_item:")
    code.append("            new_item['id'] = random.randint(1000, 9999)")
    code.append("")
    code.append("        # Upsert Logic for Tests")
    code.append("        existing_idx = next((index for (index, d) in enumerate(mock_db[resource_key]) if str(d.get('id')) == str(new_item.get('id'))), None)")
    code.append("        if existing_idx is not None:")
    code.append("             mock_db[resource_key][existing_idx] = new_item")
    code.append("             # Return 200 for updates to avoid conflicts, or the expected success code if safe")
    code.append("             return jsonify(new_item), 200")
    code.append("")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        print(f\"DEBUG POST: Added to '{resource_key}'. Returning {success_code}\")")
    code.append("        if success_code == 204: return '', 204")
    code.append("        return jsonify(new_item), success_code")
    code.append("")

    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        if item_id is None: return '', 405")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            try: existing_item.update(request.json or {})")
    code.append("            except: pass")
    code.append("            return jsonify(existing_item)")
    code.append("        return jsonify({'message': 'Not Found'}), 404")
    code.append("")

    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("             initial_len = len(mock_db[resource_key])")
    code.append("             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("             if len(mock_db[resource_key]) < initial_len:")
    code.append("                 return '', 204")
    code.append("             return jsonify({'message': 'Not Found'}), 404")
    code.append("        return '', 405")
    code.append("")
    
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Gitea Mock Server (RAM Only) running on http://127.0.0.1:8000')")
    code.append("    app.run(debug=False, port=8000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print(f"Mock server generated at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)