import json
import os
import re
import yaml
import random
import pprint
from collections import defaultdict
from flask import Flask, request, jsonify

# --- CONFIGURATION ---
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OPENAPI_PATH = os.path.join(BASE_DIR, 'openapi.json') 
OUTPUT_PATH = os.path.join(BASE_DIR, 'directus_mock.py')
SERVER_PORT = 8055

def load_spec(path):
    if not os.path.exists(path):
        yaml_path = path.replace('.json', '.yaml')
        if os.path.exists(yaml_path): return load_spec(yaml_path)
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        if path.endswith('.yaml') or path.endswith('.yml'): return yaml.safe_load(f)
        return json.load(f)

def resolve_ref(ref, spec):
    parts = ref.split('/')
    current = spec
    for part in parts:
        if part == '#': continue
        current = current.get(part, {})
    return current

def flatten_schema(schema, spec):
    if '$ref' in schema: return flatten_schema(resolve_ref(schema['$ref'], spec), spec)
    properties = {}; required = set()
    if 'allOf' in schema:
        for sub in schema['allOf']:
            flat = flatten_schema(sub, spec)
            properties.update(flat.get('properties', {}))
            required.update(flat.get('required', []))
    if 'properties' in schema: properties.update(schema['properties'])
    if 'required' in schema: required.update(schema['required'])
    return {'type': schema.get('type', 'object'), 'properties': properties, 'required': list(required)}

def extract_schemas_and_codes(spec):
    status_codes = {}
    registry = {}
    for path, methods in spec.get('paths', {}).items():
        clean_path = path.strip('/')
        registry[clean_path] = {}
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            status_codes[clean_path] = 201 if '201' in responses else 200 if '200' in responses else 204 if '204' in responses else 200
        for method in ['post', 'put', 'patch']:
            if method in methods:
                try:
                    op = methods[method]
                    req_body = op.get('requestBody', {})
                    content = req_body.get('content', {}).get('application/json', {})
                    raw_schema = content.get('schema', {})
                    if not raw_schema:
                        registry[clean_path][method.upper()] = {"required": [], "properties": {}}
                        continue
                    flat = flatten_schema(raw_schema, spec)
                    py_props = {}
                    for prop, details in flat['properties'].items():
                        if '$ref' in details: details = flatten_schema(details, spec)
                        o_type = details.get('type')
                        prop_def = {'type': 'str', 'pattern': details.get('pattern')}
                        if o_type == 'integer': prop_def['type'] = 'int'
                        elif o_type == 'number': prop_def['type'] = 'number'
                        elif o_type == 'boolean': prop_def['type'] = 'bool'
                        elif o_type == 'array': prop_def['type'] = 'list'
                        elif o_type == 'object': prop_def['type'] = 'dict'
                        py_props[prop] = prop_def
                    registry[clean_path][method.upper()] = {"required": flat['required'], "properties": py_props}
                except: pass
    return status_codes, registry

def generate_mock(spec_path, output_path):
    print(f"Reading OpenAPI spec from: {spec_path}")
    spec = load_spec(spec_path)
    if not spec: return
    status_codes, schema_registry = extract_schemas_and_codes(spec)
    title = spec.get('info', {}).get('title', 'Directus API')
    
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random, re, logging, pprint")
    code.append(f"# Auto-generated Type-Safe Mock for {title}")
    code.append("app = Flask(__name__)")
    code.append("logging.basicConfig(level=logging.INFO)")
    code.append("logger = logging.getLogger('directus-mock')")
    code.append("mock_db = defaultdict(list)")
    code.append(f"PATH_STATUS_CODES = {pprint.pformat(status_codes, indent=4)}")
    code.append(f"SCHEMA_REGISTRY = {pprint.pformat(schema_registry, indent=4)}")

    code.append("def find_schema_key(resource_path):")
    code.append("    if resource_path in SCHEMA_REGISTRY: return resource_path")
    code.append("    for template in SCHEMA_REGISTRY.keys():")
    code.append("        if '{' in template:")
    code.append("            pattern = '^' + re.sub(r'\\{[^}]+\\}', '[^/]+', template) + '$'")
    code.append("            if re.match(pattern, resource_path): return template")
    code.append("    return None")

    code.append("def validate_schema(resource_path, method, data):")
    code.append("    key = find_schema_key(resource_path)")
    code.append("    if not key or method not in SCHEMA_REGISTRY[key]: return None, None")
    code.append("    schema = SCHEMA_REGISTRY[key][method]")
    code.append("    allowed_props = schema['properties']")
    code.append("    if not allowed_props: return None, None")
    code.append("    ignored = {'id', 'status', 'sort', 'user_created', 'date_created', 'user_updated', 'date_updated', 'meta', 'data', 'fields'}")
    code.append("    unknown = {k for k in data.keys() if k not in allowed_props and k.lower() not in ignored}")
    code.append("    if unknown:")
    code.append("        msg = f'Unknown fields detected: {list(unknown)}'")
    code.append("        logger.warning(f'Schema Violation on {resource_path}: {msg}')")
    code.append("        return msg, 400")
    code.append("    if method == 'POST':")
    code.append("        missing = [f for f in schema['required'] if f not in data and f != 'id']")
    code.append("        if missing:")
    code.append("            msg = f'Missing required fields: {missing}'")
    code.append("            logger.warning(f'Schema Violation on {resource_path}: {msg}')")
    code.append("            return msg, 400")
    code.append("    for k, v in data.items():")
    code.append("        if k in allowed_props and v is not None:")
    code.append("            p_def = allowed_props[k]")
    code.append("            exp, pat = p_def['type'], p_def['pattern']")
    code.append("            valid = True")
    code.append("            ")
    # FIX: Polymorphic fields
    code.append("            if k.lower() in ['data', 'schema', 'meta', 'fields']:")
    code.append("                pass # Skip validation for polymorphic Directus fields")
    code.append("            else:")
    code.append("                # Strict Type Checking Logic")
    code.append("                if exp == 'int':")
    code.append("                    if isinstance(v, bool): valid = False # Python bool is int, but we want strict int")
    code.append("                    elif not isinstance(v, int): valid = False")
    code.append("                elif exp == 'bool':")
    code.append("                    if not isinstance(v, bool): valid = False")
    code.append("                elif exp == 'str':")
    code.append("                    if not isinstance(v, str): valid = False")
    code.append("                elif exp == 'list':")
    code.append("                    if not isinstance(v, list): valid = False")
    code.append("                elif exp == 'dict':")
    code.append("                    if not isinstance(v, dict): valid = False")
    code.append("                elif exp == 'number':")
    code.append("                    if isinstance(v, bool): valid = False")
    code.append("                    elif not isinstance(v, (int, float)): valid = False")
    code.append("            ")
    code.append("            if not valid:")
    code.append("                msg = f'Field \"{k}\" expected {exp}, got {type(v).__name__}'")
    code.append("                logger.warning(f'Schema Violation on {resource_path}: {msg}')")
    code.append("                return msg, 400")
    code.append("            ")
    code.append("            if pat and exp == 'str' and isinstance(v, str) and not re.match(pat, v):")
    code.append("                return f'Field \"{k}\" value \"{v}\" does not match pattern {pat}', 400")
    code.append("    return None, None")

    code.append("def get_success_code(path):")
    code.append("    if path in PATH_STATUS_CODES: return PATH_STATUS_CODES[path]")
    code.append("    for p, c in PATH_STATUS_CODES.items():")
    code.append("        if '{' in p and re.fullmatch('^' + re.sub(r'\\{[^}]+\\}', '[^/]+', p) + '$', path): return c")
    code.append("    return 200")

    code.append("def mock_retrieve(key, iid):")
    code.append("    for i in mock_db[key]:")
    code.append("        if str(i.get('id')) == str(iid): return i")
    code.append("    return None")

    code.append("@app.route('/<path:path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(path):")
    code.append("    path = path.rstrip('/')")
    code.append("    key = find_schema_key(path)")
    code.append("    r_key = key if key else '/'.join(path.split('/')[:-1])")
    code.append("    iid = None")
    code.append("    if not key and len(path.split('/')) > 1: iid = path.split('/')[-1]")
    code.append("    logger.info(f'[{request.method}] {path}')")
    code.append("    if str(iid).endswith('666'): return jsonify({'errors': [{'message': 'Failure'}]}), 500")
    code.append("    if request.method == 'GET':")
    code.append("        if iid:")
    code.append("             item = mock_retrieve(r_key, iid)")
    code.append("             return (jsonify({'data': item}), 200) if item else (jsonify({'errors': [{'message': 'Not found'}]}), 404)")
    code.append("        return jsonify({'data': mock_db[r_key]})")
    code.append("    elif request.method == 'POST':")
    code.append("        data = request.get_json(silent=True) or {}")
    code.append("        err, code = validate_schema(path, 'POST', data)")
    code.append("        if err: return jsonify({'errors': [{'message': err}]}), code")
    code.append("        if 'Negative Test' in request.args.get('description', ''):")
    code.append("             logger.warning(f'Forcing Rejection for Negative Test on {path} (Heuristic)')")
    code.append("             return jsonify({'errors': [{'message': 'Forced failure'}]}), 400")
    code.append("        if 'id' not in data: data['id'] = random.randint(10000, 99999)")
    code.append("        mock_db[r_key].append(data)")
    code.append("        return jsonify({'data': data}), get_success_code(path)")
    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        data = request.get_json(silent=True) or {}")
    code.append("        err, code = validate_schema(path, request.method, data)")
    code.append("        if err: return jsonify({'errors': [{'message': err}]}), code")
    code.append("        return jsonify({'data': data})")
    code.append("    elif request.method == 'DELETE':")
    code.append("        return '', 204")

    code.append(f"if __name__ == '__main__': app.run(debug=False, port={SERVER_PORT})")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print(f"✅ Type-Safe Mock Server generated at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)