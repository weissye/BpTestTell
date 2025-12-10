import json
import os
import re

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Adjust this path if your packs are located elsewhere
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'netbox', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'netbox_mock.py')

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def extract_status_codes(spec):
    """
    Analyzes the OpenAPI spec to determine the expected success code 
    (200 vs 201) for every POST operation.
    """
    path_overrides = {}
    
    for path, methods in spec.get('paths', {}).items():
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            clean_path = path.strip('/')
            
            # Check if 200 is expected but 201 is NOT (indicates an Action/RPC)
            if '200' in responses and '201' not in responses:
                path_overrides[clean_path] = 200
            elif '201' in responses:
                path_overrides[clean_path] = 201
                
    return path_overrides

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec:
        return

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
    
    code.append(f"# Map of API paths to their expected POST success code")
    code.append(f"PATH_STATUS_CODES = {json.dumps(status_code_map, indent=4)}")
    code.append("")

    code.append("def get_success_code(resource_path):")
    # --- FIX: Heuristic for Actions (Sync, Render, Clean, etc.) ---
    code.append("    # These action suffixes imply an RPC operation, not a creation.")
    code.append("    action_suffixes = ['/sync', '/clean', '/render-config', '/napalm', '/trace']")
    code.append("    for suffix in action_suffixes:")
    code.append("        if resource_path.endswith(suffix):")
    code.append("            return 200")
    # -------------------------------------------------------------
    
    code.append("    if resource_path in PATH_STATUS_CODES:")
    code.append("        return PATH_STATUS_CODES[resource_path]")
    code.append("    for path_pattern, code in PATH_STATUS_CODES.items():")
    code.append("        if '{' in path_pattern:")
    # --- FIX: Double backslash to prevent SyntaxWarning ---
    code.append("            regex = re.sub(r'\\{[^}]+\\}', '[^/]+', path_pattern)")
    code.append("            regex = '^' + regex + '$'")
    # -----------------------------------------------------
    code.append("            if re.fullmatch(regex, resource_path):")
    code.append("                return code")
    code.append("    return 201")
    code.append("")

    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id):")
    code.append("            return item")
    code.append("    return None")
    code.append("")
    
    code.append("def mock_list(resource_key, filters):")
    code.append("    items = mock_db[resource_key]")
    code.append("    filtered_results = []")
    code.append("    for item in items:")
    code.append("        match = True")
    code.append("        for key, value in filters.items():")
    code.append("            if key in ['limit', 'offset', 'ordering', 'q', 'description']: continue")
    code.append("            # Basic string comparison for filters")
    code.append("            if key in item and str(item[key]) != str(value):")
    code.append("                match = False")
    code.append("                break")
    code.append("        if match:")
    code.append("            filtered_results.append(item)")
    code.append("    return filtered_results")
    code.append("")
    
    code.append("@app.route('/api/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    resource_path = resource_path.rstrip('/')")
    code.append("    resource_key = resource_path")
    code.append("    parts = resource_key.split('/')")
    code.append("    item_id = None")
    code.append("    ")
    code.append("    if len(parts) > 0 and parts[-1].isdigit():")
    code.append("        item_id = int(parts[-1])")
    code.append("        resource_key = '/'.join(parts[:-1])")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    code.append("    if request.method == 'GET':")
    code.append("        if item_id is not None:")
    code.append("            item = mock_retrieve(resource_key, item_id)")
    code.append("            if item: return jsonify(item)")
    code.append("            return jsonify({'detail': 'Not found.'}), 404")
    code.append("        else:")
    code.append("            data = mock_list(resource_key, request.args)")
    code.append("            return jsonify({'count': len(data), 'next': None, 'previous': None, 'results': data})")
    code.append("")

    code.append("    elif request.method == 'POST':")
    code.append("        success_code = get_success_code(resource_path)")
    code.append("        new_item = request.json or {}")
    code.append("        ")
    code.append("        # 1. ID Generation")
    code.append("        if 'id' in new_item:")
    code.append("            target_id = str(new_item['id'])")
    code.append("        else:")
    code.append("            target_id = str(random.randint(1000, 9999))")
    code.append("            new_item['id'] = int(target_id)")
    code.append("")
    code.append("        # 2. Strict Duplicate Detection")
    code.append("        unique_fields = ['name', 'slug', 'key', 'label', 'serial', 'asset_tag', 'device_role', 'cable', 'circuit']")
    code.append("        ")
    code.append("        for item in mock_db[resource_key]:")
    code.append("            # A. Check ID Collision")
    code.append("            if str(item.get('id')) == target_id:")
    code.append("                print(f\"DEBUG POST: Duplicate ID {target_id}. Returning 409.\")")
    code.append("                return jsonify({'detail': 'ID already exists.'}), 409")
    code.append("            ")
    code.append("            # B. Check Unique Field Collision")
    code.append("            for field in unique_fields:")
    code.append("                if field in new_item and field in item:")
    code.append("                    if str(new_item[field]) == str(item[field]):")
    code.append("                        print(f\"DEBUG POST: Duplicate {field} '{new_item[field]}'. Returning 409.\")")
    code.append("                        return jsonify({'detail': f'{field} already exists.'}), 409")
    code.append("            ")
    code.append("            # C. Check Full Payload Exact Match (Deep Equality)")
    code.append("            is_exact_match = True")
    code.append("            for k, v in new_item.items():")
    code.append("                if k == 'id': continue")
    code.append("                if k not in item or str(item[k]) != str(v):")
    code.append("                    is_exact_match = False")
    code.append("                    break")
    code.append("            if is_exact_match:")
    code.append("                print(f\"DEBUG POST: Payload Exact Match. Returning 409.\")")
    code.append("                return jsonify({'detail': 'Duplicate entry detected.'}), 409")
    code.append("")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        print(f\"DEBUG POST: Added to '{resource_key}'. Returning {success_code}\")")
    code.append("        return jsonify(new_item), success_code")
    code.append("")

    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        if item_id is None:")
    code.append("            return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            existing_item.update(request.json or {})")
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
    code.append("            return jsonify({'detail': 'Method not allowed'}), 405")
    code.append("")
    
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Netbox Mock Server (RAM Only) running on http://127.0.0.1:5000')")
    code.append("    app.run(debug=False, port=5000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    
    print(f"Successfully generated RAM-only mock server at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)