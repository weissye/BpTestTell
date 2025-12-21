from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

# Auto-generated Mock for NetBox REST API
app = Flask(__name__)
mock_db = defaultdict(list)
call_counts = defaultdict(int)

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
    if resource_path in PATH_STATUS_CODES: return PATH_STATUS_CODES[resource_path]
    # Regex matching for paths with IDs
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path): return code
    return 201

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
    return None

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    resource_path = resource_path.rstrip('/')
    resource_key = resource_path
    parts = resource_key.split('/')
    item_id = None
    if len(parts) > 1:
        last_part = parts[-1]
        if last_part.isdigit() or len(last_part) > 30 or last_part.startswith('id_'):
            item_id = last_part
            resource_key = '/'.join(parts[:-1])
    
    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')

    # --- INJECTED BUG 2: Resource Crash (Fuzzing Target) ---
    # Accessing any resource with ID ending in '666' crashes the server
    if item_id and str(item_id).endswith('666'):
        print("Simulating crash bug: ID ends with 666")
        return jsonify({'detail': 'Critical System Failure: Unhandled Exception'}), 500
    # -------------------------------------------------------
    
    # Simulate Bug: Error every 3rd call to 'api/dcim/sites'
    #if resource_path == 'api/dcim/sites':
    call_counts[resource_path] += 1
    if call_counts[resource_path] % 3 == 0:
        print("Simulating specific bug: Internal Server Error")
        return jsonify({'detail': 'Simulated specific bug: Internal Server Error'}), 503

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify(item)
            return jsonify({'detail': 'Not found.'}), 404
        else:
            return jsonify({'count': len(mock_db[resource_key]), 'results': mock_db[resource_key]})

    elif request.method == 'POST':
        success_code = get_success_code(resource_path)
        try: new_item = request.get_json(silent=True) or {}
        except: new_item = {}
        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)
        
        # Test Friendly Logic: Upsert if ID exists, otherwise Append
        existing_idx = next((index for (index, d) in enumerate(mock_db[resource_key]) if str(d.get('id')) == str(new_item.get('id'))), None)
        if existing_idx is not None:
             mock_db[resource_key][existing_idx] = new_item
             return jsonify(new_item), 200
        
        # --- INJECTED BUG 1: Logic Violation (State Transition) ---
        # Requirement: Cannot create a Device if the associated Site is 'retired'.
        # Implementation: We intentionally IGNORE this check, allowing the creation.
        # Provengo should catch this by knowing the site is retired and expecting a failure.
        if resource_key == 'api/dcim/devices':
            site_id = new_item.get('site', {}).get('id')
            if site_id:
                site = mock_retrieve('api/dcim/sites', site_id)
                if site and site.get('status') == 'retired':
                    print(f"BUG TRIGGERED: Created device {new_item.get('id')} on retired site {site_id}")
                    # Correct behavior would be: return jsonify({'detail': 'Site is retired'}), 400
                    # We proceed to allow it (The Bug).
        # ----------------------------------------------------------

        mock_db[resource_key].append(new_item)
        return jsonify(new_item), success_code

    elif request.method in ['PUT', 'PATCH']:
        # --- FIX: Allow Bulk Update (item_id is None) ---
        if item_id is None:
             # Determine bulk update logic or just return success
             return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200
        # -----------------------------------------------
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            updates = request.get_json(silent=True) or {}
            
            # --- INJECTED BUG 3: Data Inconsistency (Silent Failure) ---
            # Implementation: If updating 'api/circuits/circuits', ignore 'status' field updates.
            # Return 200 OK with the *old* object (or object with other updates), fooling simple checks.
            if resource_key == 'api/circuits/circuits' and 'status' in updates:
                print(f"BUG TRIGGERED: Ignored status update for circuit {item_id}")
                updates.pop('status') # Drop the status change silently
            # -----------------------------------------------------------

            try: existing_item.update(updates)
            except: pass
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
             # Batch delete allowed
             mock_db[resource_key].clear()
             return '', 204
if __name__ == '__main__':
    app.run(debug=False, port=5000)