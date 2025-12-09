from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

# Auto-generated Mock for Directus
app = Flask(__name__)
mock_db = defaultdict(list)

# Map of API paths to their expected POST success code
PATH_STATUS_CODES = {
    "auth/login": 200,
    "auth/refresh": 200,
    "auth/logout": 200,
    "items/{collection}": 200,
    "presets": 200,
    "collections": 200,
    "comments": 200,
    "fields/{collection}": 200,
    "files": 200,
    "flows": 200,
    "folders": 200,
    "operations": 200,
    "permissions": 200,
    "relations": 200,
    "roles": 200,
    "schema/diff": 200,
    "users": 200,
    "users/invite": 200,
    "users/invite/accept": 200,
    "users/me/tfa/enable": 200,
    "users/me/tfa/disable": 200,
    "utils/hash/generate": 200,
    "utils/hash/verify": 200,
    "utils/sort/{collection}": 200,
    "utils/import/{collection}": 200,
    "utils/export/{collection}": 200,
    "utils/cache/clear": 200,
    "versions": 200,
    "versions/{id}/save": 200,
    "versions/{id}/promote": 200,
    "webhooks": 200
}

def get_success_code(resource_path):
    # Exact match
    if resource_path in PATH_STATUS_CODES:
        return PATH_STATUS_CODES[resource_path]
    # Regex match for dynamic paths
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = path_pattern.replace('{', '(?P<').replace('}', '>[^/]+)')
            # Escape forward slashes for regex safety
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path):
                return code
    # Default to 201
    return 201

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id):
            return item
    return None

def mock_list(resource_key, filters):
    items = mock_db[resource_key]
    filtered_results = []
    for item in items:
        match = True
        for key, value in filters.items():
            if key in ['limit', 'offset', 'sort', 'search', 'filter', 'fields', 'meta']: continue
            if key in item and str(item[key]) != str(value):
                match = False
                break
        if match:
            filtered_results.append(item)
    return filtered_results

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_key = resource_path.strip('/')
    parts = resource_key.split('/')
    item_id = None
    
    potential_id = parts[-1]
    non_id_endings = ['promote', 'accept', 'invite', 'enable', 'disable', 'refresh', 'login', 'logout', 'generate', 'import', 'export', 'diff']
    if len(parts) > 1 and potential_id not in non_id_endings:
        item_id = potential_id
        resource_key = '/'.join(parts[:-1])

    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify({'data': item})
            return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404
        else:
            data = mock_list(resource_key, request.args)
            return jsonify({'data': data})

    elif request.method == 'POST':
        success_code = get_success_code(resource_path.strip('/'))

        new_item = request.json
        if not new_item: new_item = {}
        
        if 'id' in new_item:
            target_id = str(new_item['id'])
        else:
            target_id = str(random.randint(1000, 9999))
            new_item['id'] = int(target_id)

        for item in mock_db[resource_key]:
            if str(item.get('id')) == str(target_id):
                print(f"DEBUG POST: Duplicate ID {target_id}. Returning 409.")
                return jsonify({'errors': [{'message': 'Unique constraint violation', 'code': 'RECORD_NOT_UNIQUE'}]}), 409

        mock_db[resource_key].append(new_item)
        print(f"DEBUG POST: Added to '{resource_key}'. Returning {success_code}.")
        return jsonify({'data': new_item}), success_code

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None:
            return jsonify({'data': []}), 200
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            existing_item.update(request.json)
            return jsonify({'data': existing_item})
        return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'errors': [{'message': 'Not found', 'code': 'NOT_FOUND'}]}), 404
        else:
            return jsonify({'errors': [{'message': 'Method not allowed', 'code': 'METHOD_NOT_ALLOWED'}]}), 405

    return jsonify({'errors': [{'message': 'Not implemented'}]}), 501

if __name__ == '__main__':
    print('🚀 Directus Mock Server (RAM Only) running on http://127.0.0.1:8000')
    app.run(debug=False, port=8000)