from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

# Auto-generated Mock for Directus
app = Flask(__name__)
mock_db = defaultdict(list)
TRACED_RESOURCE_KEY = 'flows'

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
    "schema/apply": 204,
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
    # Directus-specific overrides
    if 'auth/password/reset' in resource_path: return 401
    if 'invite/accept' in resource_path: return 200
    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path): return code
    return 200

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
    return None

def mock_list(resource_key, filters):
    items = mock_db[resource_key]
    return items

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_path = resource_path.rstrip('/')
    resource_key = resource_path
    parts = resource_key.split('/')
    item_id = None

    # Prevent misinterpreting the collection name as an ID during POST/List
    if (parts[0] in ['items', 'fields', 'utils']) and len(parts) == 2:
        item_id = None
        resource_key = resource_path
    elif len(parts) > 1:
        last_part = parts[-1]
        if last_part.isdigit() or len(last_part) > 30 or last_part.startswith('id_'):
            item_id = last_part
            resource_key = '/'.join(parts[:-1])
    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify({'data': item})
            return jsonify({'errors': [{'message': 'Not Found'}]}), 404
        else:
            data = mock_list(resource_key, request.args)
            return jsonify({'data': data})

    elif request.method == 'POST':
        success_code = get_success_code(resource_path)
        try: new_item = request.get_json(silent=True) or {}
        except: new_item = {}
        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)
        
        known_actions = ['clear', 'promote', 'diff', 'accept', 'invite', 'enable', 'disable', 'reset', 'generate', 'verify', 'ping', 'logout', 'refresh']
        if any(resource_path.endswith(a) for a in known_actions):
             return jsonify({'data': new_item}), success_code
        
        # Upsert Logic
        existing_idx = next((index for (index, d) in enumerate(mock_db[resource_key]) if str(d.get('id')) == str(new_item.get('id'))), None)
        if existing_idx is not None:
             mock_db[resource_key][existing_idx] = new_item
             return jsonify({'data': new_item}), 200
        
        mock_db[resource_key].append(new_item)
        return jsonify({'data': new_item}), success_code

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None: return jsonify({'data': []}), 200
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            try: existing_item.update(request.get_json(silent=True) or {})
            except: pass
            return jsonify({'data': existing_item})
        return jsonify({'errors': [{'message': 'Not Found'}]}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'errors': [{'message': 'Not Found'}]}), 404
        
        else:
             mock_db[resource_key].clear()
             return '', 204
if __name__ == '__main__':
    app.run(debug=False, port=8000)