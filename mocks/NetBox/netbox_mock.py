from flask import Flask, request, jsonify
from collections import defaultdict
import random

# Auto-generated Mock for NetBox REST API
# STORAGE: PURE RAM (Resets on Restart)
app = Flask(__name__)

# In-memory database
mock_db = defaultdict(list)

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
            if key in ['limit', 'offset']: continue
            if key in item and str(item[key]) != str(value):
                match = False
                break
        if match:
            filtered_results.append(item)
    return filtered_results

@app.route('/api/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_key = resource_path.strip('/')
    parts = resource_key.split('/')
    item_id = None
    if len(parts) > 0 and parts[-1].isdigit():
        item_id = int(parts[-1])
        resource_key = '/'.join(parts[:-1])

    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify(item)
            return jsonify({'detail': 'Not found.'}), 404
        else:
            data = mock_list(resource_key, request.args)
            ids = [d.get('id') for d in data]
            print(f"DEBUG GET {resource_key}: Returning {len(data)} items. IDs: {ids}")
            return jsonify(data)

    elif request.method == 'POST':
        new_item = request.json
        if not new_item: new_item = {}
        
        if 'id' in new_item:
            target_id = str(new_item['id'])
        elif request.args.get('id'):
            target_id = request.args.get('id')
            new_item['id'] = int(target_id) if target_id.isdigit() else target_id
        else:
            target_id = str(random.randint(1000, 9999))
            new_item['id'] = int(target_id)

        for item in mock_db[resource_key]:
            if str(item.get('id')) == str(target_id):
                print(f"DEBUG POST: Duplicate ID {target_id}. Returning 409.")
                return jsonify({'detail': 'Exists'}), 409

        mock_db[resource_key].append(new_item)
        print(f"DEBUG POST: Added to '{resource_key}'. ID: {new_item.get('id')}")
        return jsonify(new_item), 201

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None:
            # FIX: Allow Bulk Updates (defined in OpenAPI)
            print(f"DEBUG {request.method}: Bulk update on {resource_key}. returning 200.")
            return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200
        
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            existing_item.update(request.json)
            return jsonify(existing_item)
        return jsonify({'detail': 'Not found.'}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'detail': 'Not found.'}), 404
        else:
            # Bulk Delete (Optional support)
            return jsonify({'detail': 'Bulk delete not implemented in simple mock'}), 405

    return jsonify({'detail': 'Not implemented'}), 501

if __name__ == '__main__':
    print('🚀 Netbox Mock Server (RAM Only) running on http://127.0.0.1:5000')
    app.run(debug=False, port=5000)