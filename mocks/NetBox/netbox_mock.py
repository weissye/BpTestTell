from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

# Auto-generated Mock for NetBox REST API
app = Flask(__name__)
mock_db = defaultdict(list)

# Map of API paths to their expected POST success code
PATH_STATUS_CODES = {
    "api/circuits/circuit-group-assignments": 201,
    "api/circuits/circuit-groups": 201,
    "api/circuits/circuit-terminations": 201,
    "api/circuits/circuit-types": 201,
    "api/circuits/circuits": 201,
    "api/circuits/provider-accounts": 201,
    "api/circuits/provider-networks": 201,
    "api/circuits/providers": 201,
    "api/circuits/virtual-circuit-terminations": 201,
    "api/circuits/virtual-circuit-types": 201,
    "api/circuits/virtual-circuits": 201,
    "api/core/background-tasks/{id}/delete": 200,
    "api/core/background-tasks/{id}/enqueue": 200,
    "api/core/background-tasks/{id}/requeue": 200,
    "api/core/background-tasks/{id}/stop": 200,
    "api/core/data-sources": 201,
    "api/core/data-sources/{id}/sync": 200,
    "api/dcim/cable-terminations": 201,
    "api/dcim/cables": 201,
    "api/dcim/console-port-templates": 201,
    "api/dcim/console-ports": 201,
    "api/dcim/console-server-port-templates": 201,
    "api/dcim/console-server-ports": 201,
    "api/dcim/device-bay-templates": 201,
    "api/dcim/device-bays": 201,
    "api/dcim/device-roles": 201,
    "api/dcim/device-types": 201,
    "api/dcim/devices": 201,
    "api/dcim/devices/{id}/render-config": 200,
    "api/dcim/front-port-templates": 201,
    "api/dcim/front-ports": 201,
    "api/dcim/interface-templates": 201,
    "api/dcim/interfaces": 201,
    "api/dcim/inventory-item-roles": 201,
    "api/dcim/inventory-item-templates": 201,
    "api/dcim/inventory-items": 201,
    "api/dcim/locations": 201,
    "api/dcim/mac-addresses": 201,
    "api/dcim/manufacturers": 201,
    "api/dcim/module-bay-templates": 201,
    "api/dcim/module-bays": 201,
    "api/dcim/module-type-profiles": 201,
    "api/dcim/module-types": 201,
    "api/dcim/modules": 201,
    "api/dcim/platforms": 201,
    "api/dcim/power-feeds": 201,
    "api/dcim/power-outlet-templates": 201,
    "api/dcim/power-outlets": 201,
    "api/dcim/power-panels": 201,
    "api/dcim/power-port-templates": 201,
    "api/dcim/power-ports": 201,
    "api/dcim/rack-reservations": 201,
    "api/dcim/rack-roles": 201,
    "api/dcim/rack-types": 201,
    "api/dcim/racks": 201,
    "api/dcim/rear-port-templates": 201,
    "api/dcim/rear-ports": 201,
    "api/dcim/regions": 201,
    "api/dcim/site-groups": 201,
    "api/dcim/sites": 201,
    "api/dcim/virtual-chassis": 201,
    "api/dcim/virtual-device-contexts": 201,
    "api/extras/bookmarks": 201,
    "api/extras/config-context-profiles": 201,
    "api/extras/config-context-profiles/{id}/sync": 200,
    "api/extras/config-contexts": 201,
    "api/extras/config-contexts/{id}/sync": 200,
    "api/extras/config-templates": 201,
    "api/extras/config-templates/{id}/render": 200,
    "api/extras/config-templates/{id}/sync": 200,
    "api/extras/custom-field-choice-sets": 201,
    "api/extras/custom-fields": 201,
    "api/extras/custom-links": 201,
    "api/extras/event-rules": 201,
    "api/extras/export-templates": 201,
    "api/extras/export-templates/{id}/sync": 200,
    "api/extras/image-attachments": 201,
    "api/extras/journal-entries": 201,
    "api/extras/notification-groups": 201,
    "api/extras/notifications": 201,
    "api/extras/saved-filters": 201,
    "api/extras/scripts": 201,
    "api/extras/subscriptions": 201,
    "api/extras/table-configs": 201,
    "api/extras/tags": 201,
    "api/extras/webhooks": 201,
    "api/ipam/aggregates": 201,
    "api/ipam/asn-ranges": 201,
    "api/ipam/asn-ranges/{id}/available-asns": 201,
    "api/ipam/asns": 201,
    "api/ipam/fhrp-group-assignments": 201,
    "api/ipam/fhrp-groups": 201,
    "api/ipam/ip-addresses": 201,
    "api/ipam/ip-ranges": 201,
    "api/ipam/ip-ranges/{id}/available-ips": 201,
    "api/ipam/prefixes": 201,
    "api/ipam/prefixes/{id}/available-ips": 201,
    "api/ipam/prefixes/{id}/available-prefixes": 201,
    "api/ipam/rirs": 201,
    "api/ipam/roles": 201,
    "api/ipam/route-targets": 201,
    "api/ipam/service-templates": 201,
    "api/ipam/services": 201,
    "api/ipam/vlan-groups": 201,
    "api/ipam/vlan-groups/{id}/available-vlans": 201,
    "api/ipam/vlan-translation-policies": 201,
    "api/ipam/vlan-translation-rules": 201,
    "api/ipam/vlans": 201,
    "api/ipam/vrfs": 201,
    "api/tenancy/contact-assignments": 201,
    "api/tenancy/contact-groups": 201,
    "api/tenancy/contact-roles": 201,
    "api/tenancy/contacts": 201,
    "api/tenancy/tenant-groups": 201,
    "api/tenancy/tenants": 201,
    "api/users/groups": 201,
    "api/users/permissions": 201,
    "api/users/tokens": 201,
    "api/users/tokens/provision": 201,
    "api/users/users": 201,
    "api/virtualization/cluster-groups": 201,
    "api/virtualization/cluster-types": 201,
    "api/virtualization/clusters": 201,
    "api/virtualization/interfaces": 201,
    "api/virtualization/virtual-disks": 201,
    "api/virtualization/virtual-machines": 201,
    "api/virtualization/virtual-machines/{id}/render-config": 200,
    "api/vpn/ike-policies": 201,
    "api/vpn/ike-proposals": 201,
    "api/vpn/ipsec-policies": 201,
    "api/vpn/ipsec-profiles": 201,
    "api/vpn/ipsec-proposals": 201,
    "api/vpn/l2vpn-terminations": 201,
    "api/vpn/l2vpns": 201,
    "api/vpn/tunnel-groups": 201,
    "api/vpn/tunnel-terminations": 201,
    "api/vpn/tunnels": 201,
    "api/wireless/wireless-lan-groups": 201,
    "api/wireless/wireless-lans": 201,
    "api/wireless/wireless-links": 201
}

def get_success_code(resource_path):
    # Common NetBox action verbs always return 200
    if resource_path.endswith('/sync') or resource_path.endswith('/provision'):
        return 200
    if resource_path in PATH_STATUS_CODES:
        return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path):
                return code
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
            if key in ['limit', 'offset', 'ordering', 'q', 'description']: continue
            # Basic string comparison for filters
            if key in item and str(item[key]) != str(value):
                match = False
                break
        if match:
            filtered_results.append(item)
    return filtered_results

@app.route('/api/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_path = resource_path.rstrip('/')
    resource_key = resource_path
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
            return jsonify({'count': len(data), 'next': None, 'previous': None, 'results': data})

    elif request.method == 'POST':
        success_code = get_success_code(resource_path)
        new_item = request.json or {}
        
        # 1. ID Generation
        if 'id' in new_item:
            target_id = str(new_item['id'])
        else:
            target_id = str(random.randint(1000, 9999))
            new_item['id'] = int(target_id)

        # 2. Strict Duplicate Detection
        unique_fields = ['name', 'slug', 'key', 'label', 'serial', 'asset_tag', 'device_role', 'cable', 'circuit']
        
        for item in mock_db[resource_key]:
            # A. Check ID Collision
            if str(item.get('id')) == target_id:
                print(f"DEBUG POST: Duplicate ID {target_id}. Returning 409.")
                return jsonify({'detail': 'ID already exists.'}), 409
            
            # B. Check Unique Field Collision
            for field in unique_fields:
                if field in new_item and field in item:
                    if str(new_item[field]) == str(item[field]):
                        print(f"DEBUG POST: Duplicate {field} '{new_item[field]}'. Returning 409.")
                        return jsonify({'detail': f'{field} already exists.'}), 409
            
            # C. Check Full Payload Exact Match (Deep Equality)
            is_exact_match = True
            for k, v in new_item.items():
                if k == 'id': continue
                if k not in item or str(item[k]) != str(v):
                    is_exact_match = False
                    break
            if is_exact_match:
                print(f"DEBUG POST: Payload Exact Match. Returning 409.")
                return jsonify({'detail': 'Duplicate entry detected.'}), 409

        mock_db[resource_key].append(new_item)
        print(f"DEBUG POST: Added to '{resource_key}'. ID: {new_item.get('id')}")
        return jsonify(new_item), success_code

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None:
            return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            existing_item.update(request.json or {})
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
            return jsonify({'detail': 'Method not allowed'}), 405

if __name__ == '__main__':
    print('🚀 Netbox Mock Server (RAM Only) running on http://127.0.0.1:5000')
    app.run(debug=False, port=5000)