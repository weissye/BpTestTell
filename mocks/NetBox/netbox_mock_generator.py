import json
import os
import re
import yaml
import random
from collections import defaultdict
from flask import Flask, request, jsonify

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Adjust this path to point to your real OpenAPI file location
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'netbox', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'netbox_mock.py')

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        if path.endswith('.yaml') or path.endswith('.yml'):
            return yaml.safe_load(f)
        return json.load(f)

def extract_status_codes(spec):
    path_overrides = {}
    for path, methods in spec.get('paths', {}).items():
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            clean_path = path.strip('/')
            # Prioritize 201, then 200, then 204
            if '201' in responses: path_overrides[clean_path] = 201
            elif '200' in responses: path_overrides[clean_path] = 200
            elif '204' in responses: path_overrides[clean_path] = 204
            else: path_overrides[clean_path] = 201 # Default to 201 if success code unclear
    return path_overrides

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec: return

    status_code_map = extract_status_codes(spec)
    title = spec.get('info', {}).get('title', 'NetBox API')
    
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
    code.append("    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]")
    code.append("    # Regex matching for paths with IDs")
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
    code.append("    resource_path = resource_path.rstrip('/')")
    code.append("    resource_key = resource_path")
    code.append("    parts = resource_key.split('/')")
    code.append("    item_id = None")
    code.append("    if len(parts) > 1:")
    code.append("        last_part = parts[-1]")
    code.append("        if last_part.isdigit() or len(last_part) > 30 or last_part.startswith('id_'):")
    code.append("            item_id = last_part")
    code.append("            resource_key = '/'.join(parts[:-1])")
    code.append("    ")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    code.append("    if request.method == 'GET':")
    code.append("        if item_id is not None:")
    code.append("            item = mock_retrieve(resource_key, item_id)")
    code.append("            if item: return jsonify(item)")
    code.append("            return jsonify({'detail': 'Not found.'}), 404")
    code.append("        else:")
    code.append("            return jsonify({'count': len(mock_db[resource_key]), 'results': mock_db[resource_key]})")
    code.append("")

    code.append("    elif request.method == 'POST':")
    code.append("        success_code = get_success_code(resource_path)")
    code.append("        try: new_item = request.get_json(silent=True) or {}")
    code.append("        except: new_item = {}")
    code.append("        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)")
    code.append("        ")
    code.append("        # Test Friendly Logic: Upsert if ID exists, otherwise Append")
    code.append("        existing_idx = next((index for (index, d) in enumerate(mock_db[resource_key]) if str(d.get('id')) == str(new_item.get('id'))), None)")
    code.append("        if existing_idx is not None:")
    code.append("             mock_db[resource_key][existing_idx] = new_item")
    code.append("             return jsonify(new_item), 200")
    code.append("        ")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        return jsonify(new_item), success_code")
    code.append("")

    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        # --- FIX: Allow Bulk Update (item_id is None) ---")
    code.append("        if item_id is None:")
    code.append("             # Determine bulk update logic or just return success")
    code.append("             return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200")
    code.append("        # -----------------------------------------------")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            try: existing_item.update(request.get_json(silent=True) or {})")
    code.append("            except: pass")
    code.append("            return jsonify(existing_item)")
    code.append("        return jsonify({'detail': 'Not found.'}), 404")
    code.append("")

    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("             initial_len = len(mock_db[resource_key])")
    code.append("             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("             if len(mock_db[resource_key]) < initial_len:")
    code.append("                 return '', 204")
    code.append("             return jsonify({'detail': 'Not found.'}), 404")
    code.append("        else:")
    code.append("             # Batch delete allowed")
    code.append("             mock_db[resource_key].clear()")
    code.append("             return '', 204") 

    code.append("if __name__ == '__main__':")
    code.append("    app.run(debug=False, port=5000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print(f"Mock server generated at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)