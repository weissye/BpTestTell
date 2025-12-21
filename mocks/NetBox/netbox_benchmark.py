from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re
import threading
import time

import os

# Auto-generated Mock for NetBox REST API - BENCHMARK VERSION
app = Flask(__name__)
mock_db = defaultdict(list)

# Bug Flags
# Check env var 'ACTIVE_BUG'. If set to a specific key, only that bug is enabled.
# If set to 'ALL' or unset, all are enabled (default behavior).
active_bug_env = os.environ.get('ACTIVE_BUG', 'ALL')

def is_bug_enabled(bug_key):
    return active_bug_env == 'ALL' or active_bug_env == bug_key

BUGS_ENABLED = {
    'A_LOGIC': is_bug_enabled('A_LOGIC'),       # Logic Violation: Creating Device on Retired Site
    'B_LIFECYCLE': is_bug_enabled('B_LIFECYCLE'),   # Use-After-Delete: Accessing deleted resource
    'C_UNIQUENESS': is_bug_enabled('C_UNIQUENESS'),  # Key Uniqueness: Duplicate Slugs allowed
    'D_INTEGRITY': is_bug_enabled('D_INTEGRITY'),   # Data Integrity: Silent Update Failure
    'E_WORKFLOW': is_bug_enabled('E_WORKFLOW'),     # Workflow Bypass: Draft -> Archived (skipping Active)
    'F_CRASH_500': is_bug_enabled('F_CRASH_500'),   # Crash: 500 Error on specific input
    'G_INPUT_VALIDATION': is_bug_enabled('G_INPUT_VALIDATION') # Crash: 500 on bad validation
}

print(f"Benchmark Configuration: Active Bug = {active_bug_env}")
print(f"Enabled Bugs: {[k for k, v in BUGS_ENABLED.items() if v]}")

# Helper to find items
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
        # Heuristic for ID detection
        if last_part.isdigit() or len(last_part) > 20 or last_part.startswith('id_') or last_part.startswith('dev_') or last_part.startswith('site_'):
            item_id = last_part
            resource_key = '/'.join(parts[:-1])
    
    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')

    # --- BUG E: WORKFLOW BYPASS (State Machine) ---
    # Scenario: Valid Flow is Draft -> Active -> Archived.
    # Bug: Allows Draft -> Archived directly.
    if BUGS_ENABLED['E_WORKFLOW'] and resource_key == 'api/dcim/devices' and request.method in ['PUT', 'PATCH']:
        updates = request.get_json(silent=True) or {}
        new_status = updates.get('status')
        if new_status == 'archived':
             existing = mock_retrieve(resource_key, item_id)
             if existing and existing.get('status') == 'draft':
                 print(f"BUG E TRIGGERED: Workflow Bypass (Draft -> Archived) for {item_id}")
                 # Bug: We allow it (normal logic would reject or ignore, here we update)
                 existing['status'] = 'archived'
                 return jsonify(existing), 200
    # ----------------------------------------------

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: 
                if BUGS_ENABLED['B_LIFECYCLE'] and item_id in zombies:
                    print(f"BUG B TRIGGERED: Accessed deleted item {item_id}")
                return jsonify(item)
            return jsonify({'detail': 'Not found.'}), 404
        else:
            return jsonify({'count': len(mock_db[resource_key]), 'results': mock_db[resource_key]})

    elif request.method == 'POST':
        try: new_item = request.get_json(silent=True) or {}
        except: new_item = {}
        if 'id' not in new_item: new_item['id'] = f"id_{random.randint(1000, 9999)}"
        if 'status' not in new_item: new_item['status'] = 'draft' # Default to draft for Bug E
        
        # --- BUG C: UNIQUENESS (Constraint) ---
        # Normal: Check if slug exists. Bug: Ignore check.
        if not BUGS_ENABLED['C_UNIQUENESS']: 
             # Logic for correct behavior (not implemented here to keep it simple, assuming bug is the focus)
             pass 
        else:
             # Check if we are creating a duplicate
             slug = new_item.get('slug')
             if slug and any(x.get('slug') == slug for x in mock_db[resource_key]):
                 print(f"BUG C TRIGGERED: Duplicate slug accepted: {slug}")
        # If bug is enabled, we just allow duplicates.
        # --------------------------------------

        # --- BUG A: LOGIC VIOLATION (State) ---
        if BUGS_ENABLED['A_LOGIC'] and resource_key == 'api/dcim/devices':
            site_id = new_item.get('site', {}).get('id')
            if site_id:
                site = mock_retrieve('api/dcim/sites', site_id)
                if site and site.get('status') == 'retired':
                     print(f"BUG A TRIGGERED: Created device on retired site {site_id}")
                     # Bug: Allow it. 
        # --------------------------------------

        mock_db[resource_key].append(new_item)
        return jsonify(new_item), 201

    elif request.method in ['PUT', 'PATCH']:
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            updates = request.get_json(silent=True) or {}

            # --- BUG D: DATA INTEGRITY (Silent Update Fail) ---
            if BUGS_ENABLED['D_INTEGRITY'] and resource_key == 'api/circuits/circuits' and 'status' in updates:
                 print(f"BUG D TRIGGERED: Ignored status update for {item_id}")
                 updates.pop('status')
            # --------------------------------------------------

            # --- BUG F: CRASH 500 (Magic String) ---
            if BUGS_ENABLED['F_CRASH_500']:
                for v in updates.values():
                    if isinstance(v, str) and "crash_me" in v:
                        print(f"BUG F TRIGGERED: Magic string 'crash_me' found. Crashing...")
                        raise Exception("Simulated 500 Internal Server Error (Magic String)")
            # ---------------------------------------

            # --- BUG G: INPUT VALIDATION (Numeric Crash) ---
            if BUGS_ENABLED['G_INPUT_VALIDATION']:
                # Arbitrary check: if any integer field is -999, crash
                for v in updates.values():
                    if isinstance(v, int) and v == -999:
                        print(f"BUG G TRIGGERED: Invalid integer -999. Crashing...")
                        raise Exception("Simulated 500 Internal Server Error (Validation Crash)")
            # -----------------------------------------------

            try: existing_item.update(updates)
            except: pass
            return jsonify(existing_item)
        return jsonify({'detail': 'Not found.'}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             # Keep track of deleted IDs for Bug B
             if BUGS_ENABLED['B_LIFECYCLE']:
                 zombies.add(item_id)
                 # Bug: Don't delete it! Let it persist as a zombie.
             else:
                 mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'detail': 'Not found.'}), 404
        else:
             mock_db[resource_key].clear()
             return '', 204

zombies = set()

if __name__ == '__main__':
    app.run(debug=False, port=5000)
