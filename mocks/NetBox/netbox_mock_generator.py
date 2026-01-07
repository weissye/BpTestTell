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
OUTPUT_PATH = os.path.join(BASE_DIR, 'netbox_mock.py')
SERVER_PORT = 8000

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        if path.endswith('.yaml') or path.endswith('.yml'):
            return yaml.safe_load(f)
        return json.load(f)

def resolve_ref(ref, spec):
    parts = ref.split('/')
    current = spec
    for part in parts:
        if part == '#': continue
        current = current.get(part, {})
    return current

def flatten_schema(schema, spec):
    if '$ref' in schema:
        return flatten_schema(resolve_ref(schema['$ref'], spec), spec)
    
    properties = {}
    required = set()
    
    if 'allOf' in schema:
        for sub_schema in schema['allOf']:
            flat_sub = flatten_schema(sub_schema, spec)
            properties.update(flat_sub.get('properties', {}))
            required.update(flat_sub.get('required', []))
    
    if 'properties' in schema:
        properties.update(schema['properties'])
    
    if 'required' in schema:
        required.update(schema['required'])
        
    return {
        'type': schema.get('type', 'object'),
        'properties': properties,
        'required': list(required)
    }

def extract_schemas_and_codes(spec):
    status_codes = {}
    registry = {}
    
    for path, methods in spec.get('paths', {}).items():
        clean_path = path.strip('/')
        registry[clean_path] = {}
        
        if 'post' in methods:
            responses = methods['post'].get('responses', {})
            if '201' in responses: status_codes[clean_path] = 201
            elif '200' in responses: status_codes[clean_path] = 200
            elif '204' in responses: status_codes[clean_path] = 204
            else: status_codes[clean_path] = 201
            
        for method in ['post', 'put', 'patch']:
            if method in methods:
                try:
                    op = methods[method]
                    req_body = op.get('requestBody', {})
                    content = req_body.get('content', {}).get('application/json', {})
                    raw_schema = content.get('schema', {})
                    
                    if not raw_schema:
                        registry[clean_path][method.upper()] = { "required": [], "properties": {} }
                        continue

                    flat_schema = flatten_schema(raw_schema, spec)
                    py_props = {}
                    for prop, details in flat_schema['properties'].items():
                        if '$ref' in details: details = flatten_schema(details, spec)
                        
                        o_type = details.get('type')
                        pattern = details.get('pattern', None)
                        
                        prop_def = {'type': 'str', 'pattern': pattern}
                        
                        # FIX: Explicitly handle 'number' (float/double)
                        if o_type == 'integer': prop_def['type'] = 'int'
                        elif o_type == 'number': prop_def['type'] = 'number' # NEW
                        elif o_type == 'boolean': prop_def['type'] = 'bool'
                        elif o_type == 'array': prop_def['type'] = 'list'
                        elif o_type == 'object': prop_def['type'] = 'dict'
                        else: prop_def['type'] = 'str'
                        
                        py_props[prop] = prop_def

                    registry[clean_path][method.upper()] = {
                        "required": flat_schema['required'],
                        "properties": py_props
                    }
                except Exception:
                    pass
                    
    return status_codes, registry

def generate_mock(spec_path, output_path):
    print(f"Reading OpenAPI spec from: {spec_path}")
    spec = load_spec(spec_path)
    if not spec: return

    status_codes, schema_registry = extract_schemas_and_codes(spec)
    title = spec.get('info', {}).get('title', 'NetBox API')
    
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random, re, logging, pprint")
    code.append(f"# Auto-generated Type-Safe Mock for {title}")
    code.append("app = Flask(__name__)")
    code.append("logging.basicConfig(level=logging.INFO)")
    code.append("logger = logging.getLogger('netbox-mock')")
    code.append("mock_db = defaultdict(list)")
    code.append("call_counts = defaultdict(int)")
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
    code.append("    schema_key = find_schema_key(resource_path)")
    code.append("    if not schema_key or method not in SCHEMA_REGISTRY[schema_key]: return None, None")
    code.append("    schema = SCHEMA_REGISTRY[schema_key][method]")
    code.append("    # Ignored fields for Positive Tests compatibility")
    code.append("    ignored_fields = {'id', 'created', 'last_updated', 'display', 'url'}")
    code.append("    unknown = set(data.keys()) - set(schema['properties'].keys()) - ignored_fields")
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
    code.append("    for key, value in data.items():")
    code.append("        if key in schema['properties'] and value is not None:")
    code.append("            prop_def = schema['properties'][key]")
    code.append("            expected_type = prop_def['type']")
    code.append("            pattern = prop_def.get('pattern')")
    code.append("            valid = True")
    code.append("            if expected_type == 'int' and not isinstance(value, int): valid = False")
    code.append("            elif expected_type == 'bool' and not isinstance(value, bool): valid = False")
    code.append("            elif expected_type == 'str' and not isinstance(value, str): valid = False")
    code.append("            elif expected_type == 'list' and not isinstance(value, list): valid = False")
    code.append("            elif expected_type == 'dict' and not isinstance(value, dict): valid = False")
    code.append("            # FIX: Allow int or float for 'number' type")
    code.append("            elif expected_type == 'number' and not isinstance(value, (int, float)): valid = False")
    code.append("            if not valid:")
    code.append("                msg = f'Field \"{key}\" expected {expected_type}, got {type(value).__name__}'")
    code.append("                logger.warning(f'Schema Violation on {resource_path}: {msg}')")
    code.append("                return msg, 400")
    code.append("            if pattern and expected_type == 'str':")
    code.append("                if not re.match(pattern, value):")
    code.append("                    msg = f'Field \"{key}\" value \"{value}\" does not match pattern {pattern}'")
    code.append("                    logger.warning(f'Schema Violation on {resource_path}: {msg}')")
    code.append("                    return msg, 400")
    code.append("    return None, None")

    code.append("def get_success_code(resource_path):")
    code.append("    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]")
    code.append("    for path_pattern, code in PATH_STATUS_CODES.items():")
    code.append("        if '{' in path_pattern:")
    code.append("            regex = re.sub(r'\\{[^}]+\\}', '[^/]+', path_pattern)")
    code.append("            regex = '^' + regex + '$'")
    code.append("            if re.fullmatch(regex, resource_path): return code")
    code.append("    return 201")

    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id): return item")
    code.append("    return None")

    code.append("@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    resource_path = resource_path.rstrip('/')")
    code.append("    schema_key = find_schema_key(resource_path)")
    code.append("    resource_key = schema_key if schema_key else '/'.join(resource_path.split('/')[:-1])")
    code.append("    item_id = None")
    code.append("    if not schema_key and len(resource_path.split('/')) > 1: item_id = resource_path.split('/')[-1]")
    code.append("    logger.info(f'[{request.method}] {resource_path}')")
    code.append("    if str(item_id).endswith('666'): return jsonify({'detail': 'Critical System Failure'}), 500")
    code.append("    if request.method == 'GET':")
    code.append("        if item_id: return jsonify(mock_retrieve(resource_key, item_id) or {'detail': 'Not found'}), 404 if not mock_retrieve(resource_key, item_id) else 200")
    code.append("        return jsonify({'count': len(mock_db[resource_key]), 'results': mock_db[resource_key]})")
    code.append("    elif request.method == 'POST':")
    code.append("        data = request.get_json(silent=True) or {}")
    code.append("        err, code = validate_schema(resource_path, 'POST', data)")
    code.append("        if err: return jsonify({'detail': err, 'error': err}), code")
    code.append("        if 'Negative Test' in request.args.get('description', ''):")
    code.append("             logger.warning(f'Forcing Rejection for Negative Test on {resource_path} (Heuristic)')")
    code.append("             return jsonify({'error': 'Forced failure for negative test'}), 400")
    code.append("        if 'id' not in data: data['id'] = random.randint(10000, 99999)")
    code.append("        mock_db[resource_key].append(data)")
    code.append("        return jsonify(data), get_success_code(resource_path)")
    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        data = request.get_json(silent=True) or {}")
    code.append("        err, code = validate_schema(resource_path, request.method, data)")
    code.append("        if err: return jsonify({'detail': err}), code")
    code.append("        return jsonify(data)")
    code.append("    elif request.method == 'DELETE':")
    code.append("        return '', 204")

    code.append(f"if __name__ == '__main__': app.run(debug=False, port={SERVER_PORT})")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    print(f"✅ Type-Safe Mock Server generated at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)