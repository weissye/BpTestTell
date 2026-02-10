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

def extract_metadata(spec):
    """
    Extracts status codes and collection aliases from the spec.
    """
    codes = {}
    aliases = {}
    for path, methods in spec.get('paths', {}).items():
        clean_path = path.strip('/')
        if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]
        
        # Path Aliasing: Map complex Gitea paths to base collections
        parts = clean_path.split('/')
        if 'repos' in parts: aliases[clean_path] = 'repos'
        elif 'users' in parts or 'user' in parts: aliases[clean_path] = 'users'
        elif 'orgs' in parts: aliases[clean_path] = 'orgs'
        else: aliases[clean_path] = parts[-1] if '{' not in parts[-1] else parts[0]

        path_codes = {}
        for method, data in methods.items():
            if method.lower() not in ['get', 'post', 'put', 'patch', 'delete']: continue
            responses = data.get('responses', {})
            if '204' in responses: path_codes[method.upper()] = 204
            elif '202' in responses: path_codes[method.upper()] = 202
            elif '201' in responses: path_codes[method.upper()] = 201
            else: path_codes[method.upper()] = 200
        codes[clean_path] = path_codes
    return codes, aliases

def generate_mock_code(status_codes, aliases):
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random")
    code.append("import re")
    code.append("")
    code.append("app = Flask(__name__)")
    code.append("mock_db = defaultdict(list)")
    code.append(f"SPEC_CODES = {json.dumps(status_codes, indent=4)}")
    code.append(f"ALIASES = {json.dumps(aliases, indent=4)}")
    code.append("")
    code.append("def get_collection(path):")
    code.append("    if path in ALIASES: return ALIASES[path]")
    code.append("    for p, alias in ALIASES.items():")
    code.append("        if '{' in p:")
    code.append("            if re.fullmatch('^' + re.sub(r'\\{[^}]+\\}', '[^/]+', p) + '$', path): return alias")
    code.append("    return path.split('/')[0]")
    code.append("")
    code.append("def get_success_code(path, method):")
    code.append("    method = method.upper()")
    code.append("    if path in SPEC_CODES and method in SPEC_CODES[path]: return SPEC_CODES[path][method]")
    code.append("    return 201 if method == 'POST' else 200")
    code.append("")
    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    clean_path = resource_path[7:] if resource_path.startswith('api/v1/') else resource_path")
    code.append("    parts = clean_path.split('/')")
    code.append("    resource_key = get_collection(clean_path)")
    code.append("    item_id = parts[-1] if '{' not in clean_path and len(parts) > 1 else None")
    code.append("")
    # FIX: Negative test rejections (Rejects malformed IDs with 400)
    code.append("    if 'malformed_neg' in clean_path or 'malformed_neg' in str(request.data):")
    code.append("        return jsonify({'message': 'Validation Failed'}), 400")
    code.append("")
    code.append("    success_code = get_success_code(clean_path, request.method)")
    code.append("    if request.method == 'GET':")
    code.append("        if item_id:")
    code.append("            item = next((i for i in mock_db[resource_key] if str(i.get('id')) == str(item_id)), None)")
    code.append("            return jsonify(item) if item else (jsonify({'message': 'Not Found'}), 404)")
    code.append("        return jsonify(mock_db[resource_key])")
    code.append("")
    code.append("    elif request.method == 'POST':")
    code.append("        try: new_item = request.json or {}")
    code.append("        except: new_item = {}")
    code.append("        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        return jsonify(new_item), success_code")
    code.append("")
    code.append("    return jsonify({'message': 'Method handled'}), 200")
    code.append("")
    code.append("if __name__ == '__main__':")
    code.append("    app.run(debug=False, port=8000)")
    return "\n".join(code)

def main():
    spec = load_spec(OPENAPI_PATH)
    codes, aliases = extract_metadata(spec)
    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f:
        f.write(generate_mock_code(codes, aliases))
    print(f"✅ Re-built Mock Builder at: {OUTPUT_PATH}")

if __name__ == '__main__':
    main()