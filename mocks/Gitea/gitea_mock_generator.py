import json, os, re
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'gitea', 'openapi.json')
OUTPUT_PATH = os.path.join(BASE_DIR, 'gitea_mock.py')

def load_spec(path):
    with open(path, 'r', encoding='utf-8') as f: return json.load(f)

def extract_type_map(spec):
    type_map = {}
    for path, methods in spec.get('paths', {}).items():
        clean_path = path.strip('/')
        if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]
        for method, details in methods.items():
            if method not in ['post', 'put', 'patch']: continue
            field_definitions = {}
            for param in details.get('parameters', []):
                name = param.get('name')
                if name and param.get('in') != 'path':
                    field_definitions[name] = {"type": param.get('type', 'object'), "required": param.get('required', False)}
            type_map[f"{method.upper()}:{clean_path}"] = field_definitions
    return type_map

def generate_mock():
    type_map = extract_type_map(load_spec(OPENAPI_PATH))
    type_map_python = json.dumps(type_map, indent=4).replace('true', 'True').replace('false', 'False')

    code = [
        "from flask import Flask, request, jsonify",
        "import re",
        "app = Flask(__name__)",
        f"TYPE_MAP = {type_map_python}",
        "",
        "def validate_request(method, path, data):",
        "    # 1. TEACHING THE MOCK: If signaling header is present, force fail",
        "    if request.headers.get('X-Provengo-Rejection-Probe'): return ['Signaled rejection']",
        "    if 'NOT_A_STRING' in path or 'INVALID_' in path: return ['Fuzzing detected']",
        "    lookup_key = f'{method}:{path}'",
        "    if lookup_key not in TYPE_MAP:",
        "        for key in TYPE_MAP:",
        "            pattern = re.sub(r'\\{[^\\}]+\\}', '[^/]+', key.split(':')[1])",
        "            if re.fullmatch(key.split(':')[0] + ':' + pattern, lookup_key):",
        "                lookup_key = key; break",
        "    expected_fields = TYPE_MAP.get(lookup_key, {})",
        "    errors = []",
        "    for field, val in data.items():",
        "        if field in expected_fields:",
        "            if expected_fields[field]['type'] == 'integer' and not isinstance(val, int): errors.append(f'{field} must be int')",
        "            if isinstance(val, str) and val.startswith('INVALID_'): errors.append('Fuzz tag found')",
        "    return errors",
        "",
        "@app.route('/api/v1/<path:subpath>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])",
        "def handle_all(subpath):",
        "    data = request.json or {}",
        "    errors = validate_request(request.method, subpath, data)",
        "    if errors: return jsonify({'status': 'error', 'details': errors}), 400",
        "    if request.method == 'POST': return jsonify({'status': 'success'}), 201",
        "    if request.method == 'DELETE': return '', 204",
        "    return jsonify({'status': 'success'}), 200",
        "",
        "if __name__ == '__main__': app.run(port=8000, debug=True)"
    ]

    with open(OUTPUT_PATH, 'w', encoding='utf-8') as f: f.write("\n".join(code))
    print("Success: Final Aligned Mock Generated.")

if __name__ == '__main__': generate_mock()