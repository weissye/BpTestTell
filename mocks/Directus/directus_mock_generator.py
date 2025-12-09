import json
import os
import re

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'directus', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'directus_mock.py')

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
            if '200' in responses and '201' not in responses:
                clean_path = path.strip('/')
                path_overrides[clean_path] = 200
            elif '201' in responses:
                clean_path = path.strip('/')
                path_overrides[clean_path] = 201
                
    return path_overrides

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec:
        return

    status_code_map = extract_status_codes(spec)
    print(f"Extracted {len(status_code_map)} specific status code rules.")

    title = spec.get('info', {}).get('title', 'Directus API')
    
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
    code.append("    # Exact match")
    code.append("    if resource_path in PATH_STATUS_CODES:")
    code.append("        return PATH_STATUS_CODES[resource_path]")
    code.append("    # Regex match for dynamic paths")
    code.append("    for path_pattern, code in PATH_STATUS_CODES.items():")
    code.append("        if '{' in path_pattern:")
    # --- FIX: Added closing parenthesis ')' ---
    code.append("            regex = path_pattern.replace('{', '(?P<').replace('}', '>[^/]+)')")
    code.append("            # Escape forward slashes for regex safety")
    code.append("            regex = '^' + regex + '$'")
    # ------------------------------------------
    code.append("            if re.fullmatch(regex, resource_path):")
    code.append("                return code")
    code.append("    # Default to 201")
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
    code.append("            if key in ['limit', 'offset', 'sort', 'search', 'filter', 'fields', 'meta']: continue")
    code.append("            if key in item and str(item[key]) != str(value):")
    code.append("                match = False")
    code.append("                break")
    code.append("        if match:")
    code.append("            filtered_results.append(item)")
    code.append("    return filtered_results")
    code.append("")
    
    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    resource_key = resource_path.strip('/')")
    code.append("    parts = resource_key.split('/')")
    code.append("    item_id = None")
    code.append("    ")
    code.append("    potential_id = parts[-1]")
    code.append("    non_id_endings = ['promote', 'accept', 'invite', 'enable', 'disable', 'refresh', 'login', 'logout', 'generate', 'import', 'export', 'diff']")
    code.append("    if len(parts) > 1 and potential_id not in non_id_endings:")
    code.append("        item_id = potential_id")
    code.append("        resource_key = '/'.join(parts[:-1])")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    code.append("    if request.method == 'GET':")
    code.append("        if item_id is not None:")
    code.append("            item = mock_retrieve(resource_key, item_id)")
    code.append("            if item: return jsonify({'data': item})")
    code.append("            return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404")
    code.append("        else:")
    code.append("            data = mock_list(resource_key, request.args)")
    code.append("            return jsonify({'data': data})")
    code.append("")

    code.append("    elif request.method == 'POST':")
    code.append("        success_code = get_success_code(resource_path.strip('/'))")
    code.append("")
    code.append("        new_item = request.json")
    code.append("        if not new_item: new_item = {}")
    code.append("        ")
    code.append("        if 'id' in new_item:")
    code.append("            target_id = str(new_item['id'])")
    code.append("        else:")
    code.append("            target_id = str(random.randint(1000, 9999))")
    code.append("            new_item['id'] = int(target_id)")
    code.append("")
    code.append("        for item in mock_db[resource_key]:")
    code.append("            if str(item.get('id')) == str(target_id):")
    code.append("                print(f\"DEBUG POST: Duplicate ID {target_id}. Returning 409.\")")
    code.append("                return jsonify({'errors': [{'message': 'Unique constraint violation', 'code': 'RECORD_NOT_UNIQUE'}]}), 409")
    code.append("")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        print(f\"DEBUG POST: Added to '{resource_key}'. Returning {success_code}.\")")
    code.append("        return jsonify({'data': new_item}), success_code")
    code.append("")

    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        if item_id is None:")
    code.append("            return jsonify({'data': []}), 200")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            existing_item.update(request.json)")
    code.append("            return jsonify({'data': existing_item})")
    code.append("        return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404")
    code.append("")

    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("             initial_len = len(mock_db[resource_key])")
    code.append("             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("             if len(mock_db[resource_key]) < initial_len:")
    code.append("                 return '', 204")
    code.append("             return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404")
    code.append("        else:")
    code.append("            return jsonify({'errors': [{'message': 'Method not allowed', 'code': 'METHOD_NOT_ALLOWED'}]}), 405")
    code.append("")
    code.append("    return jsonify({'errors': [{'message': 'Not implemented'}]}), 501")
    code.append("")
    
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Directus Mock Server (RAM Only) running on http://127.0.0.1:8000')")
    code.append("    app.run(debug=False, port=8000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    
    print(f"Successfully generated RAM-only mock server at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)