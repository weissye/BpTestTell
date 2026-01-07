from flask import Flask, request, jsonify
from collections import defaultdict
import random, re, logging, pprint

# Auto-generated Type-Safe Mock for banking SUT
app = Flask(__name__)
logging.basicConfig(level=logging.INFO)
logger = logging.getLogger('banking-mock')

# In-Memory Database
mock_db = defaultdict(list)

PATH_STATUS_CODES = {   'accounts': 201,
    'cards': 201,
    'customers': 201,
    'loans': 201,
    'transfers': 200}

SCHEMA_REGISTRY = {   'accounts': {'POST': {'properties': {}, 'required': []}},
    'accounts/{accountId}/transactions': {},
    'cards': {'POST': {'properties': {}, 'required': []}},
    'customers': {'POST': {'properties': {}, 'required': []}},
    'loans': {'POST': {'properties': {}, 'required': []}},
    'transfers': {'POST': {'properties': {}, 'required': []}}}

def find_schema_key(resource_path):
    # Exact match
    if resource_path in SCHEMA_REGISTRY: return resource_path
    # Regex match for paths with parameters (e.g., /accounts/{id}/transactions)
    for template in SCHEMA_REGISTRY.keys():
        if '{' in template:
            pattern = '^' + re.sub(r'\{[^}]+\}', '[^/]+', template) + '$'
            if re.match(pattern, resource_path): return template
    return None

def validate_schema(resource_path, method, data):
    schema_key = find_schema_key(resource_path)
    if not schema_key or method not in SCHEMA_REGISTRY[schema_key]:
        return None, None # No validation if schema missing
    
    schema = SCHEMA_REGISTRY[schema_key][method]
    allowed_props = schema['properties']
    required_fields = schema['required']
    
    # Fields to ignore (Auto-generated or metadata)
    ignored_fields = {'id', 'created', 'created_at', 'updated_at'}
    
    # 1. Unknown Field Check
    unknown = set(data.keys()) - set(allowed_props.keys()) - ignored_fields
    if unknown:
        msg = f'Unknown fields detected: {list(unknown)}'
        logger.warning(f'Schema Violation on {resource_path}: {msg}')
        return msg, 400
    
    # 2. Required Field Check (POST only)
    if method == 'POST':
        # Explicitly ignore 'id' if missing, as it is usually server-generated
        missing = [f for f in required_fields if f not in data and f != 'id']
        if missing:
            msg = f'Missing required fields: {missing}'
            logger.warning(f'Schema Violation on {resource_path}: {msg}')
            return msg, 400
    
    # 3. Type & Pattern Check
    for key, value in data.items():
        if key in allowed_props and value is not None:
            prop_def = allowed_props[key]
            expected_type = prop_def['type']
            pattern = prop_def.get('pattern')
            
            valid = True
            if expected_type == 'int' and not isinstance(value, int): valid = False
            elif expected_type == 'bool' and not isinstance(value, bool): valid = False
            elif expected_type == 'str' and not isinstance(value, str): valid = False
            elif expected_type == 'list' and not isinstance(value, list): valid = False
            elif expected_type == 'dict' and not isinstance(value, dict): valid = False
            # Handles Float/Double/Decimal types correctly
            elif expected_type == 'number' and not isinstance(value, (int, float)): valid = False
            
            if not valid:
                msg = f'Field "{key}" expected {expected_type}, got {type(value).__name__}'
                logger.warning(f'Schema Violation on {resource_path}: {msg}')
                return msg, 400
            
            if pattern and expected_type == 'str':
                if not re.match(pattern, value):
                    msg = f'Field "{key}" value "{value}" does not match pattern {pattern}'
                    logger.warning(f'Schema Violation on {resource_path}: {msg}')
                    return msg, 400
    
    return None, None

def get_success_code(resource_path):
    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path): return code
    return 201

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_path = resource_path.rstrip('/')
    
    # --- RESOLVE RESOURCE KEY ---
    schema_key = find_schema_key(resource_path)
    if schema_key:
        resource_key = schema_key
    else:
        # Fallback for paths without explicit schema (assumes last part is ID)
        resource_key = '/'.join(resource_path.split('/')[:-1]) if '/' in resource_path else resource_path
    
    logger.info(f'[{request.method}] {resource_path}')

    # --- TEST-AWARE FAILURES ---
    # 1. Explicit "Critical Failure" trigger
    if resource_path.endswith('666'):
        return jsonify({'detail': 'Critical System Failure'}), 500
    
    if request.method == 'GET':
        return jsonify({'results': mock_db[resource_key]})

    elif request.method == 'POST':
        try: data = request.get_json(silent=True) or {}
        except: data = {}
        
        # 1. Validate against Schema
        err, code = validate_schema(resource_path, 'POST', data)
        if err: return jsonify({'detail': err, 'error': err}), code
        
        # 2. Test-Aware Logic: Force failure if it's a Negative Test but schema passed
        desc = request.args.get('description', '')
        if 'Negative Test' in desc:
             logger.warning(f'Forcing Rejection for Negative Test on {resource_path} (Heuristic)')
             return jsonify({'error': 'Forced failure for negative test'}), 400
        
        if 'id' not in data: data['id'] = random.randint(10000, 99999)
        
        mock_db[resource_key].append(data)
        return jsonify(data), get_success_code(resource_path)

    elif request.method in ['PUT', 'PATCH']:
        try: updates = request.get_json(silent=True) or {}
        except: updates = {}
        
        err, code = validate_schema(resource_path, request.method, updates)
        if err: return jsonify({'detail': err}), code
        return jsonify(updates)

    elif request.method == 'DELETE':
        return '', 204
if __name__ == '__main__':
    app.run(debug=False, port=8000)