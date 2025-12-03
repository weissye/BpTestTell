from flask import Flask, request, jsonify, make_response
import uuid
import datetime

app = Flask(__name__)
# Disable strict slashes to avoid 308 redirects for missing trailing slashes
app.url_map.strict_slashes = False

# In-memory database to store state
# Structure: { 'resource_key': { 'id': {data} } }
db = {}

def get_resource_key(path):
    # Simple heuristic to group resources
    # e.g. /api/circuits/circuit-group-assignments/ -> api_circuits_circuit_group_assignments
    parts = path.strip('/').split('/')
    # Remove ID placeholders
    parts = [p for p in parts if not p.startswith('<')]
    return '_'.join(parts)

# Generic CRUD helpers
def mock_list(key, args):
    if key not in db: db[key] = {}
    return {'count': len(db[key]), 'next': None, 'previous': None, 'results': list(db[key].values())}

def mock_create(key, data):
    if key not in db: db[key] = {}
    if 'id' not in data:
        data['id'] = len(db[key]) + 1
    data['created'] = datetime.datetime.now().isoformat()
    data['last_updated'] = datetime.datetime.now().isoformat()
    db[key][str(data['id'])] = data
    return data

def mock_retrieve(key, id):
    if key not in db: return None
    return db[key].get(str(id))

def mock_update(key, id, data):
    if key not in db: return None
    if str(id) not in db[key]: return None
    db[key][str(id)].update(data)
    db[key][str(id)]['last_updated'] = datetime.datetime.now().isoformat()
    return db[key][str(id)]

def mock_delete(key, id):
    if key not in db: return False
    if str(id) in db[key]:
        del db[key][str(id)]
        return True
    return False

@app.route('/api/circuits/circuit-group-assignments/', methods=['GET'])
def circuits_circuit_group_assignments_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/circuit-group-assignments/', methods=['POST'])
def circuits_circuit_group_assignments_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/circuit-group-assignments/', methods=['PUT'])
def circuits_circuit_group_assignments_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/', methods=['PATCH'])
def circuits_circuit_group_assignments_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/', methods=['DELETE'])
def circuits_circuit_group_assignments_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/<id>/', methods=['GET'])
def circuits_circuit_group_assignments_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/<id>/', methods=['PUT'])
def circuits_circuit_group_assignments_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/<id>/', methods=['PATCH'])
def circuits_circuit_group_assignments_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-group-assignments/<id>/', methods=['DELETE'])
def circuits_circuit_group_assignments_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-group-assignments/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/', methods=['GET'])
def circuits_circuit_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/circuit-groups/', methods=['POST'])
def circuits_circuit_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/circuit-groups/', methods=['PUT'])
def circuits_circuit_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/', methods=['PATCH'])
def circuits_circuit_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/', methods=['DELETE'])
def circuits_circuit_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/<id>/', methods=['GET'])
def circuits_circuit_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/<id>/', methods=['PUT'])
def circuits_circuit_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/<id>/', methods=['PATCH'])
def circuits_circuit_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-groups/<id>/', methods=['DELETE'])
def circuits_circuit_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/', methods=['GET'])
def circuits_circuit_terminations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/circuit-terminations/', methods=['POST'])
def circuits_circuit_terminations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/circuit-terminations/', methods=['PUT'])
def circuits_circuit_terminations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/', methods=['PATCH'])
def circuits_circuit_terminations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/', methods=['DELETE'])
def circuits_circuit_terminations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/<id>/', methods=['GET'])
def circuits_circuit_terminations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/<id>/', methods=['PUT'])
def circuits_circuit_terminations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/<id>/', methods=['PATCH'])
def circuits_circuit_terminations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/<id>/', methods=['DELETE'])
def circuits_circuit_terminations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-terminations/<id>/paths/', methods=['GET'])
def circuits_circuit_terminations_paths_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-terminations/<id>/paths/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/', methods=['GET'])
def circuits_circuit_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/circuit-types/', methods=['POST'])
def circuits_circuit_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/circuit-types/', methods=['PUT'])
def circuits_circuit_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/', methods=['PATCH'])
def circuits_circuit_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/', methods=['DELETE'])
def circuits_circuit_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/<id>/', methods=['GET'])
def circuits_circuit_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/<id>/', methods=['PUT'])
def circuits_circuit_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/<id>/', methods=['PATCH'])
def circuits_circuit_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuit-types/<id>/', methods=['DELETE'])
def circuits_circuit_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuit-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/', methods=['GET'])
def circuits_circuits_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/circuits/', methods=['POST'])
def circuits_circuits_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/circuits/', methods=['PUT'])
def circuits_circuits_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/', methods=['PATCH'])
def circuits_circuits_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/', methods=['DELETE'])
def circuits_circuits_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/<id>/', methods=['GET'])
def circuits_circuits_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/<id>/', methods=['PUT'])
def circuits_circuits_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/<id>/', methods=['PATCH'])
def circuits_circuits_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/circuits/<id>/', methods=['DELETE'])
def circuits_circuits_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/circuits/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/', methods=['GET'])
def circuits_provider_accounts_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/provider-accounts/', methods=['POST'])
def circuits_provider_accounts_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/provider-accounts/', methods=['PUT'])
def circuits_provider_accounts_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/', methods=['PATCH'])
def circuits_provider_accounts_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/', methods=['DELETE'])
def circuits_provider_accounts_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/<id>/', methods=['GET'])
def circuits_provider_accounts_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/<id>/', methods=['PUT'])
def circuits_provider_accounts_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/<id>/', methods=['PATCH'])
def circuits_provider_accounts_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-accounts/<id>/', methods=['DELETE'])
def circuits_provider_accounts_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-accounts/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/', methods=['GET'])
def circuits_provider_networks_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/provider-networks/', methods=['POST'])
def circuits_provider_networks_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/provider-networks/', methods=['PUT'])
def circuits_provider_networks_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/', methods=['PATCH'])
def circuits_provider_networks_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/', methods=['DELETE'])
def circuits_provider_networks_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/<id>/', methods=['GET'])
def circuits_provider_networks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/<id>/', methods=['PUT'])
def circuits_provider_networks_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/<id>/', methods=['PATCH'])
def circuits_provider_networks_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/provider-networks/<id>/', methods=['DELETE'])
def circuits_provider_networks_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/provider-networks/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/', methods=['GET'])
def circuits_providers_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/providers/', methods=['POST'])
def circuits_providers_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/providers/', methods=['PUT'])
def circuits_providers_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/', methods=['PATCH'])
def circuits_providers_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/', methods=['DELETE'])
def circuits_providers_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/<id>/', methods=['GET'])
def circuits_providers_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/<id>/', methods=['PUT'])
def circuits_providers_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/<id>/', methods=['PATCH'])
def circuits_providers_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/providers/<id>/', methods=['DELETE'])
def circuits_providers_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/providers/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/', methods=['GET'])
def circuits_virtual_circuit_terminations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/virtual-circuit-terminations/', methods=['POST'])
def circuits_virtual_circuit_terminations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/virtual-circuit-terminations/', methods=['PUT'])
def circuits_virtual_circuit_terminations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/', methods=['PATCH'])
def circuits_virtual_circuit_terminations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/', methods=['DELETE'])
def circuits_virtual_circuit_terminations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/<id>/', methods=['GET'])
def circuits_virtual_circuit_terminations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/<id>/', methods=['PUT'])
def circuits_virtual_circuit_terminations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/<id>/', methods=['PATCH'])
def circuits_virtual_circuit_terminations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/<id>/', methods=['DELETE'])
def circuits_virtual_circuit_terminations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-terminations/<id>/paths/', methods=['GET'])
def circuits_virtual_circuit_terminations_paths_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-terminations/<id>/paths/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/', methods=['GET'])
def circuits_virtual_circuit_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/virtual-circuit-types/', methods=['POST'])
def circuits_virtual_circuit_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/virtual-circuit-types/', methods=['PUT'])
def circuits_virtual_circuit_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/', methods=['PATCH'])
def circuits_virtual_circuit_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/', methods=['DELETE'])
def circuits_virtual_circuit_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/<id>/', methods=['GET'])
def circuits_virtual_circuit_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/<id>/', methods=['PUT'])
def circuits_virtual_circuit_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/<id>/', methods=['PATCH'])
def circuits_virtual_circuit_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuit-types/<id>/', methods=['DELETE'])
def circuits_virtual_circuit_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuit-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/', methods=['GET'])
def circuits_virtual_circuits_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/circuits/virtual-circuits/', methods=['POST'])
def circuits_virtual_circuits_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/circuits/virtual-circuits/', methods=['PUT'])
def circuits_virtual_circuits_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/', methods=['PATCH'])
def circuits_virtual_circuits_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/', methods=['DELETE'])
def circuits_virtual_circuits_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/<id>/', methods=['GET'])
def circuits_virtual_circuits_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/<id>/', methods=['PUT'])
def circuits_virtual_circuits_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/<id>/', methods=['PATCH'])
def circuits_virtual_circuits_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/circuits/virtual-circuits/<id>/', methods=['DELETE'])
def circuits_virtual_circuits_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/circuits/virtual-circuits/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/background-queues/', methods=['GET'])
def core_background_queues_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-queues/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/background-queues/<name>/', methods=['GET'])
def core_background_queues_retrieve_by_name(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-queues/<name>/')
    item = mock_retrieve(resource_key, kwargs.get('name'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/background-tasks/', methods=['GET'])
def core_background_tasks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/background-tasks/<id>/', methods=['GET'])
def core_background_tasks_retrieve_by_id(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/background-tasks/<id>/delete/', methods=['POST'])
def core_background_tasks_delete_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/<id>/delete/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/background-tasks/<id>/enqueue/', methods=['POST'])
def core_background_tasks_enqueue_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/<id>/enqueue/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/background-tasks/<id>/requeue/', methods=['POST'])
def core_background_tasks_requeue_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/<id>/requeue/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/background-tasks/<id>/stop/', methods=['POST'])
def core_background_tasks_stop_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-tasks/<id>/stop/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/background-workers/', methods=['GET'])
def core_background_workers_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-workers/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/background-workers/<name>/', methods=['GET'])
def core_background_workers_retrieve_by_name(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/background-workers/<name>/')
    item = mock_retrieve(resource_key, kwargs.get('name'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-files/', methods=['GET'])
def core_data_files_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-files/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/data-files/<id>/', methods=['GET'])
def core_data_files_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-files/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/', methods=['GET'])
def core_data_sources_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/data-sources/', methods=['POST'])
def core_data_sources_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/data-sources/', methods=['PUT'])
def core_data_sources_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/', methods=['PATCH'])
def core_data_sources_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/', methods=['DELETE'])
def core_data_sources_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/<id>/', methods=['GET'])
def core_data_sources_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/<id>/', methods=['PUT'])
def core_data_sources_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/<id>/', methods=['PATCH'])
def core_data_sources_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/<id>/', methods=['DELETE'])
def core_data_sources_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/data-sources/<id>/sync/', methods=['POST'])
def core_data_sources_sync_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/data-sources/<id>/sync/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/core/jobs/', methods=['GET'])
def core_jobs_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/jobs/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/jobs/<id>/', methods=['GET'])
def core_jobs_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/jobs/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/object-changes/', methods=['GET'])
def core_object_changes_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/object-changes/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/object-changes/<id>/', methods=['GET'])
def core_object_changes_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/object-changes/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/core/object-types/', methods=['GET'])
def core_object_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/object-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/core/object-types/<id>/', methods=['GET'])
def core_object_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/core/object-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/', methods=['GET'])
def dcim_cable_terminations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/cable-terminations/', methods=['POST'])
def dcim_cable_terminations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/cable-terminations/', methods=['PUT'])
def dcim_cable_terminations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/', methods=['PATCH'])
def dcim_cable_terminations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/', methods=['DELETE'])
def dcim_cable_terminations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/<id>/', methods=['GET'])
def dcim_cable_terminations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/<id>/', methods=['PUT'])
def dcim_cable_terminations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/<id>/', methods=['PATCH'])
def dcim_cable_terminations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cable-terminations/<id>/', methods=['DELETE'])
def dcim_cable_terminations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cable-terminations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/', methods=['GET'])
def dcim_cables_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/cables/', methods=['POST'])
def dcim_cables_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/cables/', methods=['PUT'])
def dcim_cables_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/', methods=['PATCH'])
def dcim_cables_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/', methods=['DELETE'])
def dcim_cables_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/<id>/', methods=['GET'])
def dcim_cables_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/<id>/', methods=['PUT'])
def dcim_cables_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/<id>/', methods=['PATCH'])
def dcim_cables_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/cables/<id>/', methods=['DELETE'])
def dcim_cables_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/cables/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/connected-device/', methods=['GET'])
def dcim_connected_device_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/connected-device/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/console-port-templates/', methods=['GET'])
def dcim_console_port_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/console-port-templates/', methods=['POST'])
def dcim_console_port_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/console-port-templates/', methods=['PUT'])
def dcim_console_port_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/', methods=['PATCH'])
def dcim_console_port_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/', methods=['DELETE'])
def dcim_console_port_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/<id>/', methods=['GET'])
def dcim_console_port_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/<id>/', methods=['PUT'])
def dcim_console_port_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/<id>/', methods=['PATCH'])
def dcim_console_port_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-port-templates/<id>/', methods=['DELETE'])
def dcim_console_port_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-port-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/', methods=['GET'])
def dcim_console_ports_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/console-ports/', methods=['POST'])
def dcim_console_ports_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/console-ports/', methods=['PUT'])
def dcim_console_ports_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/', methods=['PATCH'])
def dcim_console_ports_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/', methods=['DELETE'])
def dcim_console_ports_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/<id>/', methods=['GET'])
def dcim_console_ports_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/<id>/', methods=['PUT'])
def dcim_console_ports_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/<id>/', methods=['PATCH'])
def dcim_console_ports_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/<id>/', methods=['DELETE'])
def dcim_console_ports_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-ports/<id>/trace/', methods=['GET'])
def dcim_console_ports_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-ports/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/', methods=['GET'])
def dcim_console_server_port_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/console-server-port-templates/', methods=['POST'])
def dcim_console_server_port_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/console-server-port-templates/', methods=['PUT'])
def dcim_console_server_port_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/', methods=['PATCH'])
def dcim_console_server_port_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/', methods=['DELETE'])
def dcim_console_server_port_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/<id>/', methods=['GET'])
def dcim_console_server_port_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/<id>/', methods=['PUT'])
def dcim_console_server_port_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/<id>/', methods=['PATCH'])
def dcim_console_server_port_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-port-templates/<id>/', methods=['DELETE'])
def dcim_console_server_port_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-port-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/', methods=['GET'])
def dcim_console_server_ports_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/console-server-ports/', methods=['POST'])
def dcim_console_server_ports_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/console-server-ports/', methods=['PUT'])
def dcim_console_server_ports_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/', methods=['PATCH'])
def dcim_console_server_ports_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/', methods=['DELETE'])
def dcim_console_server_ports_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/<id>/', methods=['GET'])
def dcim_console_server_ports_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/<id>/', methods=['PUT'])
def dcim_console_server_ports_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/<id>/', methods=['PATCH'])
def dcim_console_server_ports_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/<id>/', methods=['DELETE'])
def dcim_console_server_ports_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/console-server-ports/<id>/trace/', methods=['GET'])
def dcim_console_server_ports_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/console-server-ports/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/', methods=['GET'])
def dcim_device_bay_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/device-bay-templates/', methods=['POST'])
def dcim_device_bay_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/device-bay-templates/', methods=['PUT'])
def dcim_device_bay_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/', methods=['PATCH'])
def dcim_device_bay_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/', methods=['DELETE'])
def dcim_device_bay_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/<id>/', methods=['GET'])
def dcim_device_bay_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/<id>/', methods=['PUT'])
def dcim_device_bay_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/<id>/', methods=['PATCH'])
def dcim_device_bay_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bay-templates/<id>/', methods=['DELETE'])
def dcim_device_bay_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bay-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/', methods=['GET'])
def dcim_device_bays_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/device-bays/', methods=['POST'])
def dcim_device_bays_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/device-bays/', methods=['PUT'])
def dcim_device_bays_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/', methods=['PATCH'])
def dcim_device_bays_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/', methods=['DELETE'])
def dcim_device_bays_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/<id>/', methods=['GET'])
def dcim_device_bays_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/<id>/', methods=['PUT'])
def dcim_device_bays_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/<id>/', methods=['PATCH'])
def dcim_device_bays_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-bays/<id>/', methods=['DELETE'])
def dcim_device_bays_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-bays/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/', methods=['GET'])
def dcim_device_roles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/device-roles/', methods=['POST'])
def dcim_device_roles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/device-roles/', methods=['PUT'])
def dcim_device_roles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/', methods=['PATCH'])
def dcim_device_roles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/', methods=['DELETE'])
def dcim_device_roles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/<id>/', methods=['GET'])
def dcim_device_roles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/<id>/', methods=['PUT'])
def dcim_device_roles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/<id>/', methods=['PATCH'])
def dcim_device_roles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-roles/<id>/', methods=['DELETE'])
def dcim_device_roles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-roles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/', methods=['GET'])
def dcim_device_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/device-types/', methods=['POST'])
def dcim_device_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/device-types/', methods=['PUT'])
def dcim_device_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/', methods=['PATCH'])
def dcim_device_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/', methods=['DELETE'])
def dcim_device_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/<id>/', methods=['GET'])
def dcim_device_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/<id>/', methods=['PUT'])
def dcim_device_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/<id>/', methods=['PATCH'])
def dcim_device_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/device-types/<id>/', methods=['DELETE'])
def dcim_device_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/device-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/', methods=['GET'])
def dcim_devices_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/devices/', methods=['POST'])
def dcim_devices_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/devices/', methods=['PUT'])
def dcim_devices_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/', methods=['PATCH'])
def dcim_devices_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/', methods=['DELETE'])
def dcim_devices_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/<id>/', methods=['GET'])
def dcim_devices_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/<id>/', methods=['PUT'])
def dcim_devices_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/<id>/', methods=['PATCH'])
def dcim_devices_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/<id>/', methods=['DELETE'])
def dcim_devices_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/devices/<id>/render-config/', methods=['POST'])
def dcim_devices_render_config_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/devices/<id>/render-config/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/front-port-templates/', methods=['GET'])
def dcim_front_port_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/front-port-templates/', methods=['POST'])
def dcim_front_port_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/front-port-templates/', methods=['PUT'])
def dcim_front_port_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/', methods=['PATCH'])
def dcim_front_port_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/', methods=['DELETE'])
def dcim_front_port_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/<id>/', methods=['GET'])
def dcim_front_port_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/<id>/', methods=['PUT'])
def dcim_front_port_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/<id>/', methods=['PATCH'])
def dcim_front_port_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-port-templates/<id>/', methods=['DELETE'])
def dcim_front_port_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-port-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/', methods=['GET'])
def dcim_front_ports_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/front-ports/', methods=['POST'])
def dcim_front_ports_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/front-ports/', methods=['PUT'])
def dcim_front_ports_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/', methods=['PATCH'])
def dcim_front_ports_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/', methods=['DELETE'])
def dcim_front_ports_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/<id>/', methods=['GET'])
def dcim_front_ports_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/<id>/', methods=['PUT'])
def dcim_front_ports_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/<id>/', methods=['PATCH'])
def dcim_front_ports_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/<id>/', methods=['DELETE'])
def dcim_front_ports_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/front-ports/<id>/paths/', methods=['GET'])
def dcim_front_ports_paths_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/front-ports/<id>/paths/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/', methods=['GET'])
def dcim_interface_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/interface-templates/', methods=['POST'])
def dcim_interface_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/interface-templates/', methods=['PUT'])
def dcim_interface_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/', methods=['PATCH'])
def dcim_interface_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/', methods=['DELETE'])
def dcim_interface_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/<id>/', methods=['GET'])
def dcim_interface_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/<id>/', methods=['PUT'])
def dcim_interface_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/<id>/', methods=['PATCH'])
def dcim_interface_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interface-templates/<id>/', methods=['DELETE'])
def dcim_interface_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interface-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/', methods=['GET'])
def dcim_interfaces_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/interfaces/', methods=['POST'])
def dcim_interfaces_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/interfaces/', methods=['PUT'])
def dcim_interfaces_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/', methods=['PATCH'])
def dcim_interfaces_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/', methods=['DELETE'])
def dcim_interfaces_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/<id>/', methods=['GET'])
def dcim_interfaces_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/<id>/', methods=['PUT'])
def dcim_interfaces_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/<id>/', methods=['PATCH'])
def dcim_interfaces_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/<id>/', methods=['DELETE'])
def dcim_interfaces_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/interfaces/<id>/trace/', methods=['GET'])
def dcim_interfaces_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/interfaces/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/', methods=['GET'])
def dcim_inventory_item_roles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/inventory-item-roles/', methods=['POST'])
def dcim_inventory_item_roles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/inventory-item-roles/', methods=['PUT'])
def dcim_inventory_item_roles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/', methods=['PATCH'])
def dcim_inventory_item_roles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/', methods=['DELETE'])
def dcim_inventory_item_roles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/<id>/', methods=['GET'])
def dcim_inventory_item_roles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/<id>/', methods=['PUT'])
def dcim_inventory_item_roles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/<id>/', methods=['PATCH'])
def dcim_inventory_item_roles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-roles/<id>/', methods=['DELETE'])
def dcim_inventory_item_roles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-roles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/', methods=['GET'])
def dcim_inventory_item_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/inventory-item-templates/', methods=['POST'])
def dcim_inventory_item_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/inventory-item-templates/', methods=['PUT'])
def dcim_inventory_item_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/', methods=['PATCH'])
def dcim_inventory_item_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/', methods=['DELETE'])
def dcim_inventory_item_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/<id>/', methods=['GET'])
def dcim_inventory_item_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/<id>/', methods=['PUT'])
def dcim_inventory_item_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/<id>/', methods=['PATCH'])
def dcim_inventory_item_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-item-templates/<id>/', methods=['DELETE'])
def dcim_inventory_item_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-item-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/', methods=['GET'])
def dcim_inventory_items_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/inventory-items/', methods=['POST'])
def dcim_inventory_items_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/inventory-items/', methods=['PUT'])
def dcim_inventory_items_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/', methods=['PATCH'])
def dcim_inventory_items_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/', methods=['DELETE'])
def dcim_inventory_items_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/<id>/', methods=['GET'])
def dcim_inventory_items_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/<id>/', methods=['PUT'])
def dcim_inventory_items_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/<id>/', methods=['PATCH'])
def dcim_inventory_items_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/inventory-items/<id>/', methods=['DELETE'])
def dcim_inventory_items_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/inventory-items/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/', methods=['GET'])
def dcim_locations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/locations/', methods=['POST'])
def dcim_locations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/locations/', methods=['PUT'])
def dcim_locations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/', methods=['PATCH'])
def dcim_locations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/', methods=['DELETE'])
def dcim_locations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/<id>/', methods=['GET'])
def dcim_locations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/<id>/', methods=['PUT'])
def dcim_locations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/<id>/', methods=['PATCH'])
def dcim_locations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/locations/<id>/', methods=['DELETE'])
def dcim_locations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/locations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/', methods=['GET'])
def dcim_mac_addresses_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/mac-addresses/', methods=['POST'])
def dcim_mac_addresses_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/mac-addresses/', methods=['PUT'])
def dcim_mac_addresses_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/', methods=['PATCH'])
def dcim_mac_addresses_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/', methods=['DELETE'])
def dcim_mac_addresses_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/<id>/', methods=['GET'])
def dcim_mac_addresses_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/<id>/', methods=['PUT'])
def dcim_mac_addresses_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/<id>/', methods=['PATCH'])
def dcim_mac_addresses_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/mac-addresses/<id>/', methods=['DELETE'])
def dcim_mac_addresses_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/mac-addresses/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/', methods=['GET'])
def dcim_manufacturers_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/manufacturers/', methods=['POST'])
def dcim_manufacturers_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/manufacturers/', methods=['PUT'])
def dcim_manufacturers_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/', methods=['PATCH'])
def dcim_manufacturers_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/', methods=['DELETE'])
def dcim_manufacturers_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/<id>/', methods=['GET'])
def dcim_manufacturers_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/<id>/', methods=['PUT'])
def dcim_manufacturers_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/<id>/', methods=['PATCH'])
def dcim_manufacturers_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/manufacturers/<id>/', methods=['DELETE'])
def dcim_manufacturers_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/manufacturers/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/', methods=['GET'])
def dcim_module_bay_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/module-bay-templates/', methods=['POST'])
def dcim_module_bay_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/module-bay-templates/', methods=['PUT'])
def dcim_module_bay_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/', methods=['PATCH'])
def dcim_module_bay_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/', methods=['DELETE'])
def dcim_module_bay_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/<id>/', methods=['GET'])
def dcim_module_bay_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/<id>/', methods=['PUT'])
def dcim_module_bay_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/<id>/', methods=['PATCH'])
def dcim_module_bay_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bay-templates/<id>/', methods=['DELETE'])
def dcim_module_bay_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bay-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/', methods=['GET'])
def dcim_module_bays_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/module-bays/', methods=['POST'])
def dcim_module_bays_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/module-bays/', methods=['PUT'])
def dcim_module_bays_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/', methods=['PATCH'])
def dcim_module_bays_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/', methods=['DELETE'])
def dcim_module_bays_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/<id>/', methods=['GET'])
def dcim_module_bays_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/<id>/', methods=['PUT'])
def dcim_module_bays_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/<id>/', methods=['PATCH'])
def dcim_module_bays_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-bays/<id>/', methods=['DELETE'])
def dcim_module_bays_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-bays/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/', methods=['GET'])
def dcim_module_type_profiles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/module-type-profiles/', methods=['POST'])
def dcim_module_type_profiles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/module-type-profiles/', methods=['PUT'])
def dcim_module_type_profiles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/', methods=['PATCH'])
def dcim_module_type_profiles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/', methods=['DELETE'])
def dcim_module_type_profiles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/<id>/', methods=['GET'])
def dcim_module_type_profiles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/<id>/', methods=['PUT'])
def dcim_module_type_profiles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/<id>/', methods=['PATCH'])
def dcim_module_type_profiles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-type-profiles/<id>/', methods=['DELETE'])
def dcim_module_type_profiles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-type-profiles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/', methods=['GET'])
def dcim_module_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/module-types/', methods=['POST'])
def dcim_module_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/module-types/', methods=['PUT'])
def dcim_module_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/', methods=['PATCH'])
def dcim_module_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/', methods=['DELETE'])
def dcim_module_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/<id>/', methods=['GET'])
def dcim_module_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/<id>/', methods=['PUT'])
def dcim_module_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/<id>/', methods=['PATCH'])
def dcim_module_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/module-types/<id>/', methods=['DELETE'])
def dcim_module_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/module-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/', methods=['GET'])
def dcim_modules_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/modules/', methods=['POST'])
def dcim_modules_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/modules/', methods=['PUT'])
def dcim_modules_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/', methods=['PATCH'])
def dcim_modules_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/', methods=['DELETE'])
def dcim_modules_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/<id>/', methods=['GET'])
def dcim_modules_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/<id>/', methods=['PUT'])
def dcim_modules_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/<id>/', methods=['PATCH'])
def dcim_modules_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/modules/<id>/', methods=['DELETE'])
def dcim_modules_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/modules/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/', methods=['GET'])
def dcim_platforms_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/platforms/', methods=['POST'])
def dcim_platforms_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/platforms/', methods=['PUT'])
def dcim_platforms_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/', methods=['PATCH'])
def dcim_platforms_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/', methods=['DELETE'])
def dcim_platforms_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/<id>/', methods=['GET'])
def dcim_platforms_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/<id>/', methods=['PUT'])
def dcim_platforms_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/<id>/', methods=['PATCH'])
def dcim_platforms_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/platforms/<id>/', methods=['DELETE'])
def dcim_platforms_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/platforms/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/', methods=['GET'])
def dcim_power_feeds_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-feeds/', methods=['POST'])
def dcim_power_feeds_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-feeds/', methods=['PUT'])
def dcim_power_feeds_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/', methods=['PATCH'])
def dcim_power_feeds_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/', methods=['DELETE'])
def dcim_power_feeds_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/<id>/', methods=['GET'])
def dcim_power_feeds_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/<id>/', methods=['PUT'])
def dcim_power_feeds_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/<id>/', methods=['PATCH'])
def dcim_power_feeds_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/<id>/', methods=['DELETE'])
def dcim_power_feeds_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-feeds/<id>/trace/', methods=['GET'])
def dcim_power_feeds_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-feeds/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/', methods=['GET'])
def dcim_power_outlet_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-outlet-templates/', methods=['POST'])
def dcim_power_outlet_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-outlet-templates/', methods=['PUT'])
def dcim_power_outlet_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/', methods=['PATCH'])
def dcim_power_outlet_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/', methods=['DELETE'])
def dcim_power_outlet_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/<id>/', methods=['GET'])
def dcim_power_outlet_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/<id>/', methods=['PUT'])
def dcim_power_outlet_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/<id>/', methods=['PATCH'])
def dcim_power_outlet_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlet-templates/<id>/', methods=['DELETE'])
def dcim_power_outlet_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlet-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/', methods=['GET'])
def dcim_power_outlets_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-outlets/', methods=['POST'])
def dcim_power_outlets_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-outlets/', methods=['PUT'])
def dcim_power_outlets_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/', methods=['PATCH'])
def dcim_power_outlets_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/', methods=['DELETE'])
def dcim_power_outlets_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/<id>/', methods=['GET'])
def dcim_power_outlets_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/<id>/', methods=['PUT'])
def dcim_power_outlets_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/<id>/', methods=['PATCH'])
def dcim_power_outlets_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/<id>/', methods=['DELETE'])
def dcim_power_outlets_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-outlets/<id>/trace/', methods=['GET'])
def dcim_power_outlets_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-outlets/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/', methods=['GET'])
def dcim_power_panels_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-panels/', methods=['POST'])
def dcim_power_panels_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-panels/', methods=['PUT'])
def dcim_power_panels_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/', methods=['PATCH'])
def dcim_power_panels_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/', methods=['DELETE'])
def dcim_power_panels_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/<id>/', methods=['GET'])
def dcim_power_panels_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/<id>/', methods=['PUT'])
def dcim_power_panels_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/<id>/', methods=['PATCH'])
def dcim_power_panels_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-panels/<id>/', methods=['DELETE'])
def dcim_power_panels_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-panels/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/', methods=['GET'])
def dcim_power_port_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-port-templates/', methods=['POST'])
def dcim_power_port_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-port-templates/', methods=['PUT'])
def dcim_power_port_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/', methods=['PATCH'])
def dcim_power_port_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/', methods=['DELETE'])
def dcim_power_port_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/<id>/', methods=['GET'])
def dcim_power_port_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/<id>/', methods=['PUT'])
def dcim_power_port_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/<id>/', methods=['PATCH'])
def dcim_power_port_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-port-templates/<id>/', methods=['DELETE'])
def dcim_power_port_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-port-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/', methods=['GET'])
def dcim_power_ports_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/power-ports/', methods=['POST'])
def dcim_power_ports_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/power-ports/', methods=['PUT'])
def dcim_power_ports_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/', methods=['PATCH'])
def dcim_power_ports_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/', methods=['DELETE'])
def dcim_power_ports_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/<id>/', methods=['GET'])
def dcim_power_ports_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/<id>/', methods=['PUT'])
def dcim_power_ports_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/<id>/', methods=['PATCH'])
def dcim_power_ports_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/<id>/', methods=['DELETE'])
def dcim_power_ports_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/power-ports/<id>/trace/', methods=['GET'])
def dcim_power_ports_trace_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/power-ports/<id>/trace/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/', methods=['GET'])
def dcim_rack_reservations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/rack-reservations/', methods=['POST'])
def dcim_rack_reservations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/rack-reservations/', methods=['PUT'])
def dcim_rack_reservations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/', methods=['PATCH'])
def dcim_rack_reservations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/', methods=['DELETE'])
def dcim_rack_reservations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/<id>/', methods=['GET'])
def dcim_rack_reservations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/<id>/', methods=['PUT'])
def dcim_rack_reservations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/<id>/', methods=['PATCH'])
def dcim_rack_reservations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-reservations/<id>/', methods=['DELETE'])
def dcim_rack_reservations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-reservations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/', methods=['GET'])
def dcim_rack_roles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/rack-roles/', methods=['POST'])
def dcim_rack_roles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/rack-roles/', methods=['PUT'])
def dcim_rack_roles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/', methods=['PATCH'])
def dcim_rack_roles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/', methods=['DELETE'])
def dcim_rack_roles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/<id>/', methods=['GET'])
def dcim_rack_roles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/<id>/', methods=['PUT'])
def dcim_rack_roles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/<id>/', methods=['PATCH'])
def dcim_rack_roles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-roles/<id>/', methods=['DELETE'])
def dcim_rack_roles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-roles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/', methods=['GET'])
def dcim_rack_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/rack-types/', methods=['POST'])
def dcim_rack_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/rack-types/', methods=['PUT'])
def dcim_rack_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/', methods=['PATCH'])
def dcim_rack_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/', methods=['DELETE'])
def dcim_rack_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/<id>/', methods=['GET'])
def dcim_rack_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/<id>/', methods=['PUT'])
def dcim_rack_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/<id>/', methods=['PATCH'])
def dcim_rack_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rack-types/<id>/', methods=['DELETE'])
def dcim_rack_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rack-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/', methods=['GET'])
def dcim_racks_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/racks/', methods=['POST'])
def dcim_racks_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/racks/', methods=['PUT'])
def dcim_racks_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/', methods=['PATCH'])
def dcim_racks_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/', methods=['DELETE'])
def dcim_racks_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/<id>/', methods=['GET'])
def dcim_racks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/<id>/', methods=['PUT'])
def dcim_racks_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/<id>/', methods=['PATCH'])
def dcim_racks_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/<id>/', methods=['DELETE'])
def dcim_racks_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/racks/<id>/elevation/', methods=['GET'])
def dcim_racks_elevation_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/racks/<id>/elevation/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/', methods=['GET'])
def dcim_rear_port_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/rear-port-templates/', methods=['POST'])
def dcim_rear_port_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/rear-port-templates/', methods=['PUT'])
def dcim_rear_port_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/', methods=['PATCH'])
def dcim_rear_port_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/', methods=['DELETE'])
def dcim_rear_port_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/<id>/', methods=['GET'])
def dcim_rear_port_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/<id>/', methods=['PUT'])
def dcim_rear_port_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/<id>/', methods=['PATCH'])
def dcim_rear_port_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-port-templates/<id>/', methods=['DELETE'])
def dcim_rear_port_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-port-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/', methods=['GET'])
def dcim_rear_ports_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/rear-ports/', methods=['POST'])
def dcim_rear_ports_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/rear-ports/', methods=['PUT'])
def dcim_rear_ports_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/', methods=['PATCH'])
def dcim_rear_ports_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/', methods=['DELETE'])
def dcim_rear_ports_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/<id>/', methods=['GET'])
def dcim_rear_ports_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/<id>/', methods=['PUT'])
def dcim_rear_ports_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/<id>/', methods=['PATCH'])
def dcim_rear_ports_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/<id>/', methods=['DELETE'])
def dcim_rear_ports_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/rear-ports/<id>/paths/', methods=['GET'])
def dcim_rear_ports_paths_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/rear-ports/<id>/paths/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/', methods=['GET'])
def dcim_regions_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/regions/', methods=['POST'])
def dcim_regions_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/regions/', methods=['PUT'])
def dcim_regions_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/', methods=['PATCH'])
def dcim_regions_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/', methods=['DELETE'])
def dcim_regions_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/<id>/', methods=['GET'])
def dcim_regions_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/<id>/', methods=['PUT'])
def dcim_regions_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/<id>/', methods=['PATCH'])
def dcim_regions_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/regions/<id>/', methods=['DELETE'])
def dcim_regions_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/regions/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/', methods=['GET'])
def dcim_site_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/site-groups/', methods=['POST'])
def dcim_site_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/site-groups/', methods=['PUT'])
def dcim_site_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/', methods=['PATCH'])
def dcim_site_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/', methods=['DELETE'])
def dcim_site_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/<id>/', methods=['GET'])
def dcim_site_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/<id>/', methods=['PUT'])
def dcim_site_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/<id>/', methods=['PATCH'])
def dcim_site_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/site-groups/<id>/', methods=['DELETE'])
def dcim_site_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/site-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/', methods=['GET'])
def dcim_sites_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/sites/', methods=['POST'])
def dcim_sites_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/sites/', methods=['PUT'])
def dcim_sites_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/', methods=['PATCH'])
def dcim_sites_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/', methods=['DELETE'])
def dcim_sites_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/<id>/', methods=['GET'])
def dcim_sites_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/<id>/', methods=['PUT'])
def dcim_sites_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/<id>/', methods=['PATCH'])
def dcim_sites_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/sites/<id>/', methods=['DELETE'])
def dcim_sites_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/sites/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/', methods=['GET'])
def dcim_virtual_chassis_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/virtual-chassis/', methods=['POST'])
def dcim_virtual_chassis_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/virtual-chassis/', methods=['PUT'])
def dcim_virtual_chassis_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/', methods=['PATCH'])
def dcim_virtual_chassis_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/', methods=['DELETE'])
def dcim_virtual_chassis_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/<id>/', methods=['GET'])
def dcim_virtual_chassis_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/<id>/', methods=['PUT'])
def dcim_virtual_chassis_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/<id>/', methods=['PATCH'])
def dcim_virtual_chassis_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-chassis/<id>/', methods=['DELETE'])
def dcim_virtual_chassis_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-chassis/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/', methods=['GET'])
def dcim_virtual_device_contexts_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/dcim/virtual-device-contexts/', methods=['POST'])
def dcim_virtual_device_contexts_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/dcim/virtual-device-contexts/', methods=['PUT'])
def dcim_virtual_device_contexts_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/', methods=['PATCH'])
def dcim_virtual_device_contexts_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/', methods=['DELETE'])
def dcim_virtual_device_contexts_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/<id>/', methods=['GET'])
def dcim_virtual_device_contexts_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/<id>/', methods=['PUT'])
def dcim_virtual_device_contexts_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/<id>/', methods=['PATCH'])
def dcim_virtual_device_contexts_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/dcim/virtual-device-contexts/<id>/', methods=['DELETE'])
def dcim_virtual_device_contexts_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/dcim/virtual-device-contexts/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/', methods=['GET'])
def extras_bookmarks_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/bookmarks/', methods=['POST'])
def extras_bookmarks_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/bookmarks/', methods=['PUT'])
def extras_bookmarks_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/', methods=['PATCH'])
def extras_bookmarks_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/', methods=['DELETE'])
def extras_bookmarks_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/<id>/', methods=['GET'])
def extras_bookmarks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/<id>/', methods=['PUT'])
def extras_bookmarks_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/<id>/', methods=['PATCH'])
def extras_bookmarks_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/bookmarks/<id>/', methods=['DELETE'])
def extras_bookmarks_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/bookmarks/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/', methods=['GET'])
def extras_config_context_profiles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/config-context-profiles/', methods=['POST'])
def extras_config_context_profiles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-context-profiles/', methods=['PUT'])
def extras_config_context_profiles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/', methods=['PATCH'])
def extras_config_context_profiles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/', methods=['DELETE'])
def extras_config_context_profiles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/<id>/', methods=['GET'])
def extras_config_context_profiles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/<id>/', methods=['PUT'])
def extras_config_context_profiles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/<id>/', methods=['PATCH'])
def extras_config_context_profiles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/<id>/', methods=['DELETE'])
def extras_config_context_profiles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-context-profiles/<id>/sync/', methods=['POST'])
def extras_config_context_profiles_sync_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-context-profiles/<id>/sync/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-contexts/', methods=['GET'])
def extras_config_contexts_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/config-contexts/', methods=['POST'])
def extras_config_contexts_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-contexts/', methods=['PUT'])
def extras_config_contexts_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/', methods=['PATCH'])
def extras_config_contexts_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/', methods=['DELETE'])
def extras_config_contexts_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/<id>/', methods=['GET'])
def extras_config_contexts_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/<id>/', methods=['PUT'])
def extras_config_contexts_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/<id>/', methods=['PATCH'])
def extras_config_contexts_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/<id>/', methods=['DELETE'])
def extras_config_contexts_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-contexts/<id>/sync/', methods=['POST'])
def extras_config_contexts_sync_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-contexts/<id>/sync/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-templates/', methods=['GET'])
def extras_config_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/config-templates/', methods=['POST'])
def extras_config_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-templates/', methods=['PUT'])
def extras_config_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/', methods=['PATCH'])
def extras_config_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/', methods=['DELETE'])
def extras_config_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/<id>/', methods=['GET'])
def extras_config_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/<id>/', methods=['PUT'])
def extras_config_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/<id>/', methods=['PATCH'])
def extras_config_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/<id>/', methods=['DELETE'])
def extras_config_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/config-templates/<id>/render/', methods=['POST'])
def extras_config_templates_render_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/render/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/config-templates/<id>/sync/', methods=['POST'])
def extras_config_templates_sync_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/config-templates/<id>/sync/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/custom-field-choice-sets/', methods=['GET'])
def extras_custom_field_choice_sets_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/custom-field-choice-sets/', methods=['POST'])
def extras_custom_field_choice_sets_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/custom-field-choice-sets/', methods=['PUT'])
def extras_custom_field_choice_sets_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/', methods=['PATCH'])
def extras_custom_field_choice_sets_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/', methods=['DELETE'])
def extras_custom_field_choice_sets_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/<id>/', methods=['GET'])
def extras_custom_field_choice_sets_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/<id>/', methods=['PUT'])
def extras_custom_field_choice_sets_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/<id>/', methods=['PATCH'])
def extras_custom_field_choice_sets_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/<id>/', methods=['DELETE'])
def extras_custom_field_choice_sets_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-field-choice-sets/<id>/choices/', methods=['GET'])
def extras_custom_field_choice_sets_choices_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-field-choice-sets/<id>/choices/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/', methods=['GET'])
def extras_custom_fields_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/custom-fields/', methods=['POST'])
def extras_custom_fields_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/custom-fields/', methods=['PUT'])
def extras_custom_fields_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/', methods=['PATCH'])
def extras_custom_fields_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/', methods=['DELETE'])
def extras_custom_fields_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/<id>/', methods=['GET'])
def extras_custom_fields_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/<id>/', methods=['PUT'])
def extras_custom_fields_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/<id>/', methods=['PATCH'])
def extras_custom_fields_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-fields/<id>/', methods=['DELETE'])
def extras_custom_fields_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-fields/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/', methods=['GET'])
def extras_custom_links_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/custom-links/', methods=['POST'])
def extras_custom_links_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/custom-links/', methods=['PUT'])
def extras_custom_links_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/', methods=['PATCH'])
def extras_custom_links_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/', methods=['DELETE'])
def extras_custom_links_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/<id>/', methods=['GET'])
def extras_custom_links_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/<id>/', methods=['PUT'])
def extras_custom_links_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/<id>/', methods=['PATCH'])
def extras_custom_links_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/custom-links/<id>/', methods=['DELETE'])
def extras_custom_links_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/custom-links/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/dashboard/', methods=['GET'])
def extras_dashboard_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/dashboard/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/dashboard/', methods=['PUT'])
def extras_dashboard_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/dashboard/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/dashboard/', methods=['PATCH'])
def extras_dashboard_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/dashboard/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/dashboard/', methods=['DELETE'])
def extras_dashboard_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/dashboard/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/', methods=['GET'])
def extras_event_rules_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/event-rules/', methods=['POST'])
def extras_event_rules_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/event-rules/', methods=['PUT'])
def extras_event_rules_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/', methods=['PATCH'])
def extras_event_rules_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/', methods=['DELETE'])
def extras_event_rules_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/<id>/', methods=['GET'])
def extras_event_rules_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/<id>/', methods=['PUT'])
def extras_event_rules_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/<id>/', methods=['PATCH'])
def extras_event_rules_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/event-rules/<id>/', methods=['DELETE'])
def extras_event_rules_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/event-rules/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/', methods=['GET'])
def extras_export_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/export-templates/', methods=['POST'])
def extras_export_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/export-templates/', methods=['PUT'])
def extras_export_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/', methods=['PATCH'])
def extras_export_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/', methods=['DELETE'])
def extras_export_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/<id>/', methods=['GET'])
def extras_export_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/<id>/', methods=['PUT'])
def extras_export_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/<id>/', methods=['PATCH'])
def extras_export_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/<id>/', methods=['DELETE'])
def extras_export_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/export-templates/<id>/sync/', methods=['POST'])
def extras_export_templates_sync_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/export-templates/<id>/sync/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/image-attachments/', methods=['GET'])
def extras_image_attachments_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/image-attachments/', methods=['POST'])
def extras_image_attachments_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/image-attachments/', methods=['PUT'])
def extras_image_attachments_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/', methods=['PATCH'])
def extras_image_attachments_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/', methods=['DELETE'])
def extras_image_attachments_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/<id>/', methods=['GET'])
def extras_image_attachments_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/<id>/', methods=['PUT'])
def extras_image_attachments_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/<id>/', methods=['PATCH'])
def extras_image_attachments_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/image-attachments/<id>/', methods=['DELETE'])
def extras_image_attachments_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/image-attachments/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/', methods=['GET'])
def extras_journal_entries_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/journal-entries/', methods=['POST'])
def extras_journal_entries_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/journal-entries/', methods=['PUT'])
def extras_journal_entries_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/', methods=['PATCH'])
def extras_journal_entries_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/', methods=['DELETE'])
def extras_journal_entries_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/<id>/', methods=['GET'])
def extras_journal_entries_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/<id>/', methods=['PUT'])
def extras_journal_entries_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/<id>/', methods=['PATCH'])
def extras_journal_entries_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/journal-entries/<id>/', methods=['DELETE'])
def extras_journal_entries_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/journal-entries/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/', methods=['GET'])
def extras_notification_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/notification-groups/', methods=['POST'])
def extras_notification_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/notification-groups/', methods=['PUT'])
def extras_notification_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/', methods=['PATCH'])
def extras_notification_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/', methods=['DELETE'])
def extras_notification_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/<id>/', methods=['GET'])
def extras_notification_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/<id>/', methods=['PUT'])
def extras_notification_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/<id>/', methods=['PATCH'])
def extras_notification_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notification-groups/<id>/', methods=['DELETE'])
def extras_notification_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notification-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/', methods=['GET'])
def extras_notifications_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/notifications/', methods=['POST'])
def extras_notifications_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/notifications/', methods=['PUT'])
def extras_notifications_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/', methods=['PATCH'])
def extras_notifications_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/', methods=['DELETE'])
def extras_notifications_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/<id>/', methods=['GET'])
def extras_notifications_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/<id>/', methods=['PUT'])
def extras_notifications_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/<id>/', methods=['PATCH'])
def extras_notifications_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/notifications/<id>/', methods=['DELETE'])
def extras_notifications_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/notifications/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/object-types/', methods=['GET'])
def extras_object_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/object-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/object-types/<id>/', methods=['GET'])
def extras_object_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/object-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/', methods=['GET'])
def extras_saved_filters_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/saved-filters/', methods=['POST'])
def extras_saved_filters_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/saved-filters/', methods=['PUT'])
def extras_saved_filters_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/', methods=['PATCH'])
def extras_saved_filters_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/', methods=['DELETE'])
def extras_saved_filters_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/<id>/', methods=['GET'])
def extras_saved_filters_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/<id>/', methods=['PUT'])
def extras_saved_filters_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/<id>/', methods=['PATCH'])
def extras_saved_filters_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/saved-filters/<id>/', methods=['DELETE'])
def extras_saved_filters_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/saved-filters/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/scripts/', methods=['GET'])
def extras_scripts_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/scripts/', methods=['POST'])
def extras_scripts_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/scripts/<id>/', methods=['GET'])
def extras_scripts_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/scripts/<id>/', methods=['PUT'])
def extras_scripts_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/scripts/<id>/', methods=['PATCH'])
def extras_scripts_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/scripts/<id>/', methods=['DELETE'])
def extras_scripts_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/scripts/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/', methods=['GET'])
def extras_subscriptions_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/subscriptions/', methods=['POST'])
def extras_subscriptions_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/subscriptions/', methods=['PUT'])
def extras_subscriptions_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/', methods=['PATCH'])
def extras_subscriptions_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/', methods=['DELETE'])
def extras_subscriptions_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/<id>/', methods=['GET'])
def extras_subscriptions_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/<id>/', methods=['PUT'])
def extras_subscriptions_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/<id>/', methods=['PATCH'])
def extras_subscriptions_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/subscriptions/<id>/', methods=['DELETE'])
def extras_subscriptions_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/subscriptions/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/', methods=['GET'])
def extras_table_configs_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/table-configs/', methods=['POST'])
def extras_table_configs_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/table-configs/', methods=['PUT'])
def extras_table_configs_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/', methods=['PATCH'])
def extras_table_configs_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/', methods=['DELETE'])
def extras_table_configs_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/<id>/', methods=['GET'])
def extras_table_configs_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/<id>/', methods=['PUT'])
def extras_table_configs_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/<id>/', methods=['PATCH'])
def extras_table_configs_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/table-configs/<id>/', methods=['DELETE'])
def extras_table_configs_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/table-configs/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tagged-objects/', methods=['GET'])
def extras_tagged_objects_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tagged-objects/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/tagged-objects/<id>/', methods=['GET'])
def extras_tagged_objects_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tagged-objects/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/', methods=['GET'])
def extras_tags_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/tags/', methods=['POST'])
def extras_tags_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/tags/', methods=['PUT'])
def extras_tags_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/', methods=['PATCH'])
def extras_tags_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/', methods=['DELETE'])
def extras_tags_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/<id>/', methods=['GET'])
def extras_tags_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/<id>/', methods=['PUT'])
def extras_tags_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/<id>/', methods=['PATCH'])
def extras_tags_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/tags/<id>/', methods=['DELETE'])
def extras_tags_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/tags/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/', methods=['GET'])
def extras_webhooks_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/extras/webhooks/', methods=['POST'])
def extras_webhooks_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/extras/webhooks/', methods=['PUT'])
def extras_webhooks_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/', methods=['PATCH'])
def extras_webhooks_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/', methods=['DELETE'])
def extras_webhooks_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/<id>/', methods=['GET'])
def extras_webhooks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/<id>/', methods=['PUT'])
def extras_webhooks_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/<id>/', methods=['PATCH'])
def extras_webhooks_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/extras/webhooks/<id>/', methods=['DELETE'])
def extras_webhooks_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/extras/webhooks/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/', methods=['GET'])
def ipam_aggregates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/aggregates/', methods=['POST'])
def ipam_aggregates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/aggregates/', methods=['PUT'])
def ipam_aggregates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/', methods=['PATCH'])
def ipam_aggregates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/', methods=['DELETE'])
def ipam_aggregates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/<id>/', methods=['GET'])
def ipam_aggregates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/<id>/', methods=['PUT'])
def ipam_aggregates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/<id>/', methods=['PATCH'])
def ipam_aggregates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/aggregates/<id>/', methods=['DELETE'])
def ipam_aggregates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/aggregates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/', methods=['GET'])
def ipam_asn_ranges_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/asn-ranges/', methods=['POST'])
def ipam_asn_ranges_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/asn-ranges/', methods=['PUT'])
def ipam_asn_ranges_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/', methods=['PATCH'])
def ipam_asn_ranges_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/', methods=['DELETE'])
def ipam_asn_ranges_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/', methods=['GET'])
def ipam_asn_ranges_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/', methods=['PUT'])
def ipam_asn_ranges_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/', methods=['PATCH'])
def ipam_asn_ranges_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/', methods=['DELETE'])
def ipam_asn_ranges_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/available-asns/', methods=['GET'])
def ipam_asn_ranges_available_asns_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/available-asns/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asn-ranges/<id>/available-asns/', methods=['POST'])
def ipam_asn_ranges_available_asns_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asn-ranges/<id>/available-asns/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/asns/', methods=['GET'])
def ipam_asns_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/asns/', methods=['POST'])
def ipam_asns_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/asns/', methods=['PUT'])
def ipam_asns_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/', methods=['PATCH'])
def ipam_asns_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/', methods=['DELETE'])
def ipam_asns_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/<id>/', methods=['GET'])
def ipam_asns_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/<id>/', methods=['PUT'])
def ipam_asns_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/<id>/', methods=['PATCH'])
def ipam_asns_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/asns/<id>/', methods=['DELETE'])
def ipam_asns_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/asns/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/', methods=['GET'])
def ipam_fhrp_group_assignments_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/fhrp-group-assignments/', methods=['POST'])
def ipam_fhrp_group_assignments_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/fhrp-group-assignments/', methods=['PUT'])
def ipam_fhrp_group_assignments_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/', methods=['PATCH'])
def ipam_fhrp_group_assignments_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/', methods=['DELETE'])
def ipam_fhrp_group_assignments_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/<id>/', methods=['GET'])
def ipam_fhrp_group_assignments_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/<id>/', methods=['PUT'])
def ipam_fhrp_group_assignments_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/<id>/', methods=['PATCH'])
def ipam_fhrp_group_assignments_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-group-assignments/<id>/', methods=['DELETE'])
def ipam_fhrp_group_assignments_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-group-assignments/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/', methods=['GET'])
def ipam_fhrp_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/fhrp-groups/', methods=['POST'])
def ipam_fhrp_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/fhrp-groups/', methods=['PUT'])
def ipam_fhrp_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/', methods=['PATCH'])
def ipam_fhrp_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/', methods=['DELETE'])
def ipam_fhrp_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/<id>/', methods=['GET'])
def ipam_fhrp_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/<id>/', methods=['PUT'])
def ipam_fhrp_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/<id>/', methods=['PATCH'])
def ipam_fhrp_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/fhrp-groups/<id>/', methods=['DELETE'])
def ipam_fhrp_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/fhrp-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/', methods=['GET'])
def ipam_ip_addresses_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/ip-addresses/', methods=['POST'])
def ipam_ip_addresses_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/ip-addresses/', methods=['PUT'])
def ipam_ip_addresses_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/', methods=['PATCH'])
def ipam_ip_addresses_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/', methods=['DELETE'])
def ipam_ip_addresses_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/<id>/', methods=['GET'])
def ipam_ip_addresses_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/<id>/', methods=['PUT'])
def ipam_ip_addresses_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/<id>/', methods=['PATCH'])
def ipam_ip_addresses_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-addresses/<id>/', methods=['DELETE'])
def ipam_ip_addresses_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-addresses/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/', methods=['GET'])
def ipam_ip_ranges_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/ip-ranges/', methods=['POST'])
def ipam_ip_ranges_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/ip-ranges/', methods=['PUT'])
def ipam_ip_ranges_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/', methods=['PATCH'])
def ipam_ip_ranges_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/', methods=['DELETE'])
def ipam_ip_ranges_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/', methods=['GET'])
def ipam_ip_ranges_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/', methods=['PUT'])
def ipam_ip_ranges_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/', methods=['PATCH'])
def ipam_ip_ranges_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/', methods=['DELETE'])
def ipam_ip_ranges_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/available-ips/', methods=['GET'])
def ipam_ip_ranges_available_ips_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/available-ips/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/ip-ranges/<id>/available-ips/', methods=['POST'])
def ipam_ip_ranges_available_ips_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/ip-ranges/<id>/available-ips/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/prefixes/', methods=['GET'])
def ipam_prefixes_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/prefixes/', methods=['POST'])
def ipam_prefixes_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/prefixes/', methods=['PUT'])
def ipam_prefixes_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/', methods=['PATCH'])
def ipam_prefixes_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/', methods=['DELETE'])
def ipam_prefixes_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/', methods=['GET'])
def ipam_prefixes_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/', methods=['PUT'])
def ipam_prefixes_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/', methods=['PATCH'])
def ipam_prefixes_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/', methods=['DELETE'])
def ipam_prefixes_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/available-ips/', methods=['GET'])
def ipam_prefixes_available_ips_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/available-ips/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/available-ips/', methods=['POST'])
def ipam_prefixes_available_ips_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/available-ips/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/prefixes/<id>/available-prefixes/', methods=['GET'])
def ipam_prefixes_available_prefixes_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/available-prefixes/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/prefixes/<id>/available-prefixes/', methods=['POST'])
def ipam_prefixes_available_prefixes_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/prefixes/<id>/available-prefixes/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/rirs/', methods=['GET'])
def ipam_rirs_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/rirs/', methods=['POST'])
def ipam_rirs_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/rirs/', methods=['PUT'])
def ipam_rirs_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/', methods=['PATCH'])
def ipam_rirs_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/', methods=['DELETE'])
def ipam_rirs_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/<id>/', methods=['GET'])
def ipam_rirs_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/<id>/', methods=['PUT'])
def ipam_rirs_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/<id>/', methods=['PATCH'])
def ipam_rirs_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/rirs/<id>/', methods=['DELETE'])
def ipam_rirs_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/rirs/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/', methods=['GET'])
def ipam_roles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/roles/', methods=['POST'])
def ipam_roles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/roles/', methods=['PUT'])
def ipam_roles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/', methods=['PATCH'])
def ipam_roles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/', methods=['DELETE'])
def ipam_roles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/<id>/', methods=['GET'])
def ipam_roles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/<id>/', methods=['PUT'])
def ipam_roles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/<id>/', methods=['PATCH'])
def ipam_roles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/roles/<id>/', methods=['DELETE'])
def ipam_roles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/roles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/', methods=['GET'])
def ipam_route_targets_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/route-targets/', methods=['POST'])
def ipam_route_targets_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/route-targets/', methods=['PUT'])
def ipam_route_targets_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/', methods=['PATCH'])
def ipam_route_targets_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/', methods=['DELETE'])
def ipam_route_targets_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/<id>/', methods=['GET'])
def ipam_route_targets_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/<id>/', methods=['PUT'])
def ipam_route_targets_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/<id>/', methods=['PATCH'])
def ipam_route_targets_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/route-targets/<id>/', methods=['DELETE'])
def ipam_route_targets_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/route-targets/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/', methods=['GET'])
def ipam_service_templates_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/service-templates/', methods=['POST'])
def ipam_service_templates_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/service-templates/', methods=['PUT'])
def ipam_service_templates_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/', methods=['PATCH'])
def ipam_service_templates_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/', methods=['DELETE'])
def ipam_service_templates_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/<id>/', methods=['GET'])
def ipam_service_templates_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/<id>/', methods=['PUT'])
def ipam_service_templates_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/<id>/', methods=['PATCH'])
def ipam_service_templates_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/service-templates/<id>/', methods=['DELETE'])
def ipam_service_templates_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/service-templates/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/', methods=['GET'])
def ipam_services_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/services/', methods=['POST'])
def ipam_services_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/services/', methods=['PUT'])
def ipam_services_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/', methods=['PATCH'])
def ipam_services_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/', methods=['DELETE'])
def ipam_services_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/<id>/', methods=['GET'])
def ipam_services_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/<id>/', methods=['PUT'])
def ipam_services_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/<id>/', methods=['PATCH'])
def ipam_services_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/services/<id>/', methods=['DELETE'])
def ipam_services_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/services/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/', methods=['GET'])
def ipam_vlan_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/vlan-groups/', methods=['POST'])
def ipam_vlan_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vlan-groups/', methods=['PUT'])
def ipam_vlan_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/', methods=['PATCH'])
def ipam_vlan_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/', methods=['DELETE'])
def ipam_vlan_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/', methods=['GET'])
def ipam_vlan_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/', methods=['PUT'])
def ipam_vlan_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/', methods=['PATCH'])
def ipam_vlan_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/', methods=['DELETE'])
def ipam_vlan_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/available-vlans/', methods=['GET'])
def ipam_vlan_groups_available_vlans_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/available-vlans/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-groups/<id>/available-vlans/', methods=['POST'])
def ipam_vlan_groups_available_vlans_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-groups/<id>/available-vlans/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vlan-translation-policies/', methods=['GET'])
def ipam_vlan_translation_policies_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/vlan-translation-policies/', methods=['POST'])
def ipam_vlan_translation_policies_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vlan-translation-policies/', methods=['PUT'])
def ipam_vlan_translation_policies_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/', methods=['PATCH'])
def ipam_vlan_translation_policies_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/', methods=['DELETE'])
def ipam_vlan_translation_policies_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/<id>/', methods=['GET'])
def ipam_vlan_translation_policies_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/<id>/', methods=['PUT'])
def ipam_vlan_translation_policies_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/<id>/', methods=['PATCH'])
def ipam_vlan_translation_policies_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-policies/<id>/', methods=['DELETE'])
def ipam_vlan_translation_policies_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-policies/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/', methods=['GET'])
def ipam_vlan_translation_rules_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/vlan-translation-rules/', methods=['POST'])
def ipam_vlan_translation_rules_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vlan-translation-rules/', methods=['PUT'])
def ipam_vlan_translation_rules_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/', methods=['PATCH'])
def ipam_vlan_translation_rules_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/', methods=['DELETE'])
def ipam_vlan_translation_rules_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/<id>/', methods=['GET'])
def ipam_vlan_translation_rules_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/<id>/', methods=['PUT'])
def ipam_vlan_translation_rules_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/<id>/', methods=['PATCH'])
def ipam_vlan_translation_rules_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlan-translation-rules/<id>/', methods=['DELETE'])
def ipam_vlan_translation_rules_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlan-translation-rules/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/', methods=['GET'])
def ipam_vlans_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/vlans/', methods=['POST'])
def ipam_vlans_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vlans/', methods=['PUT'])
def ipam_vlans_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/', methods=['PATCH'])
def ipam_vlans_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/', methods=['DELETE'])
def ipam_vlans_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/<id>/', methods=['GET'])
def ipam_vlans_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/<id>/', methods=['PUT'])
def ipam_vlans_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/<id>/', methods=['PATCH'])
def ipam_vlans_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vlans/<id>/', methods=['DELETE'])
def ipam_vlans_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vlans/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/', methods=['GET'])
def ipam_vrfs_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/ipam/vrfs/', methods=['POST'])
def ipam_vrfs_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/ipam/vrfs/', methods=['PUT'])
def ipam_vrfs_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/', methods=['PATCH'])
def ipam_vrfs_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/', methods=['DELETE'])
def ipam_vrfs_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/<id>/', methods=['GET'])
def ipam_vrfs_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/<id>/', methods=['PUT'])
def ipam_vrfs_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/<id>/', methods=['PATCH'])
def ipam_vrfs_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/ipam/vrfs/<id>/', methods=['DELETE'])
def ipam_vrfs_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/ipam/vrfs/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/schema/', methods=['GET'])
def schema_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/schema/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/status/', methods=['GET'])
def status_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/status/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/contact-assignments/', methods=['GET'])
def tenancy_contact_assignments_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/contact-assignments/', methods=['POST'])
def tenancy_contact_assignments_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/contact-assignments/', methods=['PUT'])
def tenancy_contact_assignments_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/', methods=['PATCH'])
def tenancy_contact_assignments_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/', methods=['DELETE'])
def tenancy_contact_assignments_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/<id>/', methods=['GET'])
def tenancy_contact_assignments_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/<id>/', methods=['PUT'])
def tenancy_contact_assignments_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/<id>/', methods=['PATCH'])
def tenancy_contact_assignments_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-assignments/<id>/', methods=['DELETE'])
def tenancy_contact_assignments_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-assignments/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/', methods=['GET'])
def tenancy_contact_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/contact-groups/', methods=['POST'])
def tenancy_contact_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/contact-groups/', methods=['PUT'])
def tenancy_contact_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/', methods=['PATCH'])
def tenancy_contact_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/', methods=['DELETE'])
def tenancy_contact_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/<id>/', methods=['GET'])
def tenancy_contact_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/<id>/', methods=['PUT'])
def tenancy_contact_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/<id>/', methods=['PATCH'])
def tenancy_contact_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-groups/<id>/', methods=['DELETE'])
def tenancy_contact_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/', methods=['GET'])
def tenancy_contact_roles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/contact-roles/', methods=['POST'])
def tenancy_contact_roles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/contact-roles/', methods=['PUT'])
def tenancy_contact_roles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/', methods=['PATCH'])
def tenancy_contact_roles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/', methods=['DELETE'])
def tenancy_contact_roles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/<id>/', methods=['GET'])
def tenancy_contact_roles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/<id>/', methods=['PUT'])
def tenancy_contact_roles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/<id>/', methods=['PATCH'])
def tenancy_contact_roles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contact-roles/<id>/', methods=['DELETE'])
def tenancy_contact_roles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contact-roles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/', methods=['GET'])
def tenancy_contacts_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/contacts/', methods=['POST'])
def tenancy_contacts_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/contacts/', methods=['PUT'])
def tenancy_contacts_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/', methods=['PATCH'])
def tenancy_contacts_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/', methods=['DELETE'])
def tenancy_contacts_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/<id>/', methods=['GET'])
def tenancy_contacts_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/<id>/', methods=['PUT'])
def tenancy_contacts_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/<id>/', methods=['PATCH'])
def tenancy_contacts_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/contacts/<id>/', methods=['DELETE'])
def tenancy_contacts_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/contacts/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/', methods=['GET'])
def tenancy_tenant_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/tenant-groups/', methods=['POST'])
def tenancy_tenant_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/tenant-groups/', methods=['PUT'])
def tenancy_tenant_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/', methods=['PATCH'])
def tenancy_tenant_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/', methods=['DELETE'])
def tenancy_tenant_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/<id>/', methods=['GET'])
def tenancy_tenant_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/<id>/', methods=['PUT'])
def tenancy_tenant_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/<id>/', methods=['PATCH'])
def tenancy_tenant_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenant-groups/<id>/', methods=['DELETE'])
def tenancy_tenant_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenant-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/', methods=['GET'])
def tenancy_tenants_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/tenancy/tenants/', methods=['POST'])
def tenancy_tenants_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/tenancy/tenants/', methods=['PUT'])
def tenancy_tenants_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/', methods=['PATCH'])
def tenancy_tenants_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/', methods=['DELETE'])
def tenancy_tenants_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/<id>/', methods=['GET'])
def tenancy_tenants_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/<id>/', methods=['PUT'])
def tenancy_tenants_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/<id>/', methods=['PATCH'])
def tenancy_tenants_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/tenancy/tenants/<id>/', methods=['DELETE'])
def tenancy_tenants_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/tenancy/tenants/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/config/', methods=['GET'])
def users_config_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/config/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/users/groups/', methods=['GET'])
def users_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/users/groups/', methods=['POST'])
def users_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/users/groups/', methods=['PUT'])
def users_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/', methods=['PATCH'])
def users_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/', methods=['DELETE'])
def users_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/<id>/', methods=['GET'])
def users_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/<id>/', methods=['PUT'])
def users_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/<id>/', methods=['PATCH'])
def users_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/groups/<id>/', methods=['DELETE'])
def users_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/', methods=['GET'])
def users_permissions_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/users/permissions/', methods=['POST'])
def users_permissions_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/users/permissions/', methods=['PUT'])
def users_permissions_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/', methods=['PATCH'])
def users_permissions_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/', methods=['DELETE'])
def users_permissions_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/<id>/', methods=['GET'])
def users_permissions_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/<id>/', methods=['PUT'])
def users_permissions_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/<id>/', methods=['PATCH'])
def users_permissions_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/permissions/<id>/', methods=['DELETE'])
def users_permissions_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/permissions/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/', methods=['GET'])
def users_tokens_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/users/tokens/', methods=['POST'])
def users_tokens_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/users/tokens/', methods=['PUT'])
def users_tokens_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/', methods=['PATCH'])
def users_tokens_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/', methods=['DELETE'])
def users_tokens_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/<id>/', methods=['GET'])
def users_tokens_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/<id>/', methods=['PUT'])
def users_tokens_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/<id>/', methods=['PATCH'])
def users_tokens_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/<id>/', methods=['DELETE'])
def users_tokens_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/tokens/provision/', methods=['POST'])
def users_tokens_provision_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/tokens/provision/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/users/users/', methods=['GET'])
def users_users_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/users/users/', methods=['POST'])
def users_users_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/users/users/', methods=['PUT'])
def users_users_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/', methods=['PATCH'])
def users_users_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/', methods=['DELETE'])
def users_users_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/<id>/', methods=['GET'])
def users_users_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/<id>/', methods=['PUT'])
def users_users_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/<id>/', methods=['PATCH'])
def users_users_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/users/users/<id>/', methods=['DELETE'])
def users_users_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/users/users/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/', methods=['GET'])
def virtualization_cluster_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/cluster-groups/', methods=['POST'])
def virtualization_cluster_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/cluster-groups/', methods=['PUT'])
def virtualization_cluster_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/', methods=['PATCH'])
def virtualization_cluster_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/', methods=['DELETE'])
def virtualization_cluster_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/<id>/', methods=['GET'])
def virtualization_cluster_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/<id>/', methods=['PUT'])
def virtualization_cluster_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/<id>/', methods=['PATCH'])
def virtualization_cluster_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-groups/<id>/', methods=['DELETE'])
def virtualization_cluster_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/', methods=['GET'])
def virtualization_cluster_types_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/cluster-types/', methods=['POST'])
def virtualization_cluster_types_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/cluster-types/', methods=['PUT'])
def virtualization_cluster_types_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/', methods=['PATCH'])
def virtualization_cluster_types_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/', methods=['DELETE'])
def virtualization_cluster_types_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/<id>/', methods=['GET'])
def virtualization_cluster_types_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/<id>/', methods=['PUT'])
def virtualization_cluster_types_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/<id>/', methods=['PATCH'])
def virtualization_cluster_types_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/cluster-types/<id>/', methods=['DELETE'])
def virtualization_cluster_types_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/cluster-types/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/', methods=['GET'])
def virtualization_clusters_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/clusters/', methods=['POST'])
def virtualization_clusters_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/clusters/', methods=['PUT'])
def virtualization_clusters_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/', methods=['PATCH'])
def virtualization_clusters_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/', methods=['DELETE'])
def virtualization_clusters_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/<id>/', methods=['GET'])
def virtualization_clusters_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/<id>/', methods=['PUT'])
def virtualization_clusters_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/<id>/', methods=['PATCH'])
def virtualization_clusters_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/clusters/<id>/', methods=['DELETE'])
def virtualization_clusters_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/clusters/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/', methods=['GET'])
def virtualization_interfaces_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/interfaces/', methods=['POST'])
def virtualization_interfaces_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/interfaces/', methods=['PUT'])
def virtualization_interfaces_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/', methods=['PATCH'])
def virtualization_interfaces_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/', methods=['DELETE'])
def virtualization_interfaces_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/<id>/', methods=['GET'])
def virtualization_interfaces_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/<id>/', methods=['PUT'])
def virtualization_interfaces_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/<id>/', methods=['PATCH'])
def virtualization_interfaces_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/interfaces/<id>/', methods=['DELETE'])
def virtualization_interfaces_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/interfaces/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/', methods=['GET'])
def virtualization_virtual_disks_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/virtual-disks/', methods=['POST'])
def virtualization_virtual_disks_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/virtual-disks/', methods=['PUT'])
def virtualization_virtual_disks_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/', methods=['PATCH'])
def virtualization_virtual_disks_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/', methods=['DELETE'])
def virtualization_virtual_disks_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/<id>/', methods=['GET'])
def virtualization_virtual_disks_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/<id>/', methods=['PUT'])
def virtualization_virtual_disks_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/<id>/', methods=['PATCH'])
def virtualization_virtual_disks_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-disks/<id>/', methods=['DELETE'])
def virtualization_virtual_disks_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-disks/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/', methods=['GET'])
def virtualization_virtual_machines_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/virtualization/virtual-machines/', methods=['POST'])
def virtualization_virtual_machines_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/virtualization/virtual-machines/', methods=['PUT'])
def virtualization_virtual_machines_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/', methods=['PATCH'])
def virtualization_virtual_machines_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/', methods=['DELETE'])
def virtualization_virtual_machines_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/<id>/', methods=['GET'])
def virtualization_virtual_machines_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/<id>/', methods=['PUT'])
def virtualization_virtual_machines_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/<id>/', methods=['PATCH'])
def virtualization_virtual_machines_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/<id>/', methods=['DELETE'])
def virtualization_virtual_machines_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/virtualization/virtual-machines/<id>/render-config/', methods=['POST'])
def virtualization_virtual_machines_render_config_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/virtualization/virtual-machines/<id>/render-config/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ike-policies/', methods=['GET'])
def vpn_ike_policies_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/ike-policies/', methods=['POST'])
def vpn_ike_policies_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ike-policies/', methods=['PUT'])
def vpn_ike_policies_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/', methods=['PATCH'])
def vpn_ike_policies_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/', methods=['DELETE'])
def vpn_ike_policies_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/<id>/', methods=['GET'])
def vpn_ike_policies_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/<id>/', methods=['PUT'])
def vpn_ike_policies_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/<id>/', methods=['PATCH'])
def vpn_ike_policies_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-policies/<id>/', methods=['DELETE'])
def vpn_ike_policies_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-policies/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/', methods=['GET'])
def vpn_ike_proposals_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/ike-proposals/', methods=['POST'])
def vpn_ike_proposals_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ike-proposals/', methods=['PUT'])
def vpn_ike_proposals_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/', methods=['PATCH'])
def vpn_ike_proposals_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/', methods=['DELETE'])
def vpn_ike_proposals_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/<id>/', methods=['GET'])
def vpn_ike_proposals_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/<id>/', methods=['PUT'])
def vpn_ike_proposals_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/<id>/', methods=['PATCH'])
def vpn_ike_proposals_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ike-proposals/<id>/', methods=['DELETE'])
def vpn_ike_proposals_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ike-proposals/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/', methods=['GET'])
def vpn_ipsec_policies_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/ipsec-policies/', methods=['POST'])
def vpn_ipsec_policies_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ipsec-policies/', methods=['PUT'])
def vpn_ipsec_policies_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/', methods=['PATCH'])
def vpn_ipsec_policies_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/', methods=['DELETE'])
def vpn_ipsec_policies_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/<id>/', methods=['GET'])
def vpn_ipsec_policies_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/<id>/', methods=['PUT'])
def vpn_ipsec_policies_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/<id>/', methods=['PATCH'])
def vpn_ipsec_policies_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-policies/<id>/', methods=['DELETE'])
def vpn_ipsec_policies_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-policies/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/', methods=['GET'])
def vpn_ipsec_profiles_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/ipsec-profiles/', methods=['POST'])
def vpn_ipsec_profiles_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ipsec-profiles/', methods=['PUT'])
def vpn_ipsec_profiles_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/', methods=['PATCH'])
def vpn_ipsec_profiles_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/', methods=['DELETE'])
def vpn_ipsec_profiles_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/<id>/', methods=['GET'])
def vpn_ipsec_profiles_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/<id>/', methods=['PUT'])
def vpn_ipsec_profiles_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/<id>/', methods=['PATCH'])
def vpn_ipsec_profiles_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-profiles/<id>/', methods=['DELETE'])
def vpn_ipsec_profiles_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-profiles/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/', methods=['GET'])
def vpn_ipsec_proposals_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/ipsec-proposals/', methods=['POST'])
def vpn_ipsec_proposals_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/ipsec-proposals/', methods=['PUT'])
def vpn_ipsec_proposals_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/', methods=['PATCH'])
def vpn_ipsec_proposals_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/', methods=['DELETE'])
def vpn_ipsec_proposals_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/<id>/', methods=['GET'])
def vpn_ipsec_proposals_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/<id>/', methods=['PUT'])
def vpn_ipsec_proposals_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/<id>/', methods=['PATCH'])
def vpn_ipsec_proposals_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/ipsec-proposals/<id>/', methods=['DELETE'])
def vpn_ipsec_proposals_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/ipsec-proposals/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/', methods=['GET'])
def vpn_l2vpn_terminations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/l2vpn-terminations/', methods=['POST'])
def vpn_l2vpn_terminations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/l2vpn-terminations/', methods=['PUT'])
def vpn_l2vpn_terminations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/', methods=['PATCH'])
def vpn_l2vpn_terminations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/', methods=['DELETE'])
def vpn_l2vpn_terminations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/<id>/', methods=['GET'])
def vpn_l2vpn_terminations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/<id>/', methods=['PUT'])
def vpn_l2vpn_terminations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/<id>/', methods=['PATCH'])
def vpn_l2vpn_terminations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpn-terminations/<id>/', methods=['DELETE'])
def vpn_l2vpn_terminations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpn-terminations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/', methods=['GET'])
def vpn_l2vpns_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/l2vpns/', methods=['POST'])
def vpn_l2vpns_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/l2vpns/', methods=['PUT'])
def vpn_l2vpns_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/', methods=['PATCH'])
def vpn_l2vpns_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/', methods=['DELETE'])
def vpn_l2vpns_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/<id>/', methods=['GET'])
def vpn_l2vpns_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/<id>/', methods=['PUT'])
def vpn_l2vpns_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/<id>/', methods=['PATCH'])
def vpn_l2vpns_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/l2vpns/<id>/', methods=['DELETE'])
def vpn_l2vpns_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/l2vpns/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/', methods=['GET'])
def vpn_tunnel_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/tunnel-groups/', methods=['POST'])
def vpn_tunnel_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/tunnel-groups/', methods=['PUT'])
def vpn_tunnel_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/', methods=['PATCH'])
def vpn_tunnel_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/', methods=['DELETE'])
def vpn_tunnel_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/<id>/', methods=['GET'])
def vpn_tunnel_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/<id>/', methods=['PUT'])
def vpn_tunnel_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/<id>/', methods=['PATCH'])
def vpn_tunnel_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-groups/<id>/', methods=['DELETE'])
def vpn_tunnel_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/', methods=['GET'])
def vpn_tunnel_terminations_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/tunnel-terminations/', methods=['POST'])
def vpn_tunnel_terminations_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/tunnel-terminations/', methods=['PUT'])
def vpn_tunnel_terminations_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/', methods=['PATCH'])
def vpn_tunnel_terminations_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/', methods=['DELETE'])
def vpn_tunnel_terminations_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/<id>/', methods=['GET'])
def vpn_tunnel_terminations_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/<id>/', methods=['PUT'])
def vpn_tunnel_terminations_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/<id>/', methods=['PATCH'])
def vpn_tunnel_terminations_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnel-terminations/<id>/', methods=['DELETE'])
def vpn_tunnel_terminations_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnel-terminations/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/', methods=['GET'])
def vpn_tunnels_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/vpn/tunnels/', methods=['POST'])
def vpn_tunnels_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/vpn/tunnels/', methods=['PUT'])
def vpn_tunnels_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/', methods=['PATCH'])
def vpn_tunnels_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/', methods=['DELETE'])
def vpn_tunnels_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/<id>/', methods=['GET'])
def vpn_tunnels_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/<id>/', methods=['PUT'])
def vpn_tunnels_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/<id>/', methods=['PATCH'])
def vpn_tunnels_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/vpn/tunnels/<id>/', methods=['DELETE'])
def vpn_tunnels_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/vpn/tunnels/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/', methods=['GET'])
def wireless_wireless_lan_groups_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/wireless/wireless-lan-groups/', methods=['POST'])
def wireless_wireless_lan_groups_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/wireless/wireless-lan-groups/', methods=['PUT'])
def wireless_wireless_lan_groups_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/', methods=['PATCH'])
def wireless_wireless_lan_groups_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/', methods=['DELETE'])
def wireless_wireless_lan_groups_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/<id>/', methods=['GET'])
def wireless_wireless_lan_groups_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/<id>/', methods=['PUT'])
def wireless_wireless_lan_groups_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/<id>/', methods=['PATCH'])
def wireless_wireless_lan_groups_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lan-groups/<id>/', methods=['DELETE'])
def wireless_wireless_lan_groups_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lan-groups/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/', methods=['GET'])
def wireless_wireless_lans_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/wireless/wireless-lans/', methods=['POST'])
def wireless_wireless_lans_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/wireless/wireless-lans/', methods=['PUT'])
def wireless_wireless_lans_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/', methods=['PATCH'])
def wireless_wireless_lans_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/', methods=['DELETE'])
def wireless_wireless_lans_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/<id>/', methods=['GET'])
def wireless_wireless_lans_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/<id>/', methods=['PUT'])
def wireless_wireless_lans_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/<id>/', methods=['PATCH'])
def wireless_wireless_lans_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-lans/<id>/', methods=['DELETE'])
def wireless_wireless_lans_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-lans/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/', methods=['GET'])
def wireless_wireless_links_list(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/')
    return jsonify(mock_list(resource_key, request.args))

@app.route('/api/wireless/wireless-links/', methods=['POST'])
def wireless_wireless_links_create(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/')
    data = request.get_json(silent=True) or {}
    created = mock_create(resource_key, data)
    return jsonify(created), 201

@app.route('/api/wireless/wireless-links/', methods=['PUT'])
def wireless_wireless_links_bulk_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/', methods=['PATCH'])
def wireless_wireless_links_bulk_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/', methods=['DELETE'])
def wireless_wireless_links_bulk_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/<id>/', methods=['GET'])
def wireless_wireless_links_retrieve(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/<id>/')
    item = mock_retrieve(resource_key, kwargs.get('id'))
    if item:
        return jsonify(item)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/<id>/', methods=['PUT'])
def wireless_wireless_links_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/<id>/', methods=['PATCH'])
def wireless_wireless_links_partial_update(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/<id>/')
    data = request.get_json(silent=True) or {}
    updated = mock_update(resource_key, kwargs.get('id'), data)
    if updated:
        return jsonify(updated)
    return jsonify({'detail': 'Not found.'}), 404

@app.route('/api/wireless/wireless-links/<id>/', methods=['DELETE'])
def wireless_wireless_links_destroy(**kwargs):
    # Operation: No summary
    resource_key = get_resource_key('/api/wireless/wireless-links/<id>/')
    success = mock_delete(resource_key, kwargs.get('id'))
    if success:
        return '', 204
    return jsonify({'detail': 'Not found.'}), 404

if __name__ == '__main__':
    app.run(debug=True, port=5000)