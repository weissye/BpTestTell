import json
import re
import os

# Configuration paths
BASE_DIR = os.path.dirname(os.path.abspath(__file__))
# Path to the OpenAPI spec
OPENAPI_PATH = os.path.join(BASE_DIR, '..', '..', 'packs', 'real_world', 'netbox', 'openapi.json')
# Output file
OUTPUT_PATH = os.path.join(BASE_DIR, 'netbox_mock.py')

def load_spec(path):
    if not os.path.exists(path):
        print(f"[ERROR] Spec file not found at: {path}")
        return {}
    with open(path, 'r', encoding='utf-8') as f:
        return json.load(f)

def generate_mock(spec_path, output_path):
    print(f"Loading spec from {spec_path}...")
    spec = load_spec(spec_path)
    if not spec:
        return

    title = spec.get('info', {}).get('title', 'Netbox API')
    
    code = []
    code.append("from flask import Flask, request, jsonify")
    code.append("from collections import defaultdict")
    code.append("import random")
    code.append("")
    code.append(f"# Auto-generated Mock for {title}")
    code.append("# STORAGE: PURE RAM (Resets on Restart)")
    code.append("app = Flask(__name__)")
    code.append("")
    code.append("# In-memory database")
    code.append("mock_db = defaultdict(list)")
    code.append("")
    
    # --- HELPER FUNCTIONS ---
    code.append("def mock_retrieve(resource_key, item_id):")
    code.append("    for item in mock_db[resource_key]:")
    code.append("        if str(item.get('id')) == str(item_id):")
    code.append("            return item")
    code.append("    return None")
    code.append("")
    code.append("def mock_list(resource_key, filters):")
    code.append("    items = mock_db[resource_key]")
    code.append("    filtered_results = []")
    code.append("    for item in items:")
    code.append("        match = True")
    code.append("        for key, value in filters.items():")
    code.append("            if key in ['limit', 'offset']: continue")
    code.append("            if key in item and str(item[key]) != str(value):")
    code.append("                match = False")
    code.append("                break")
    code.append("        if match:")
    code.append("            filtered_results.append(item)")
    code.append("    return filtered_results")
    code.append("")
    
    # --- MAIN ROUTE HANDLER ---
    code.append("@app.route('/api/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])")
    code.append("def handle_request(resource_path):")
    code.append("    resource_key = resource_path.strip('/')")
    code.append("    parts = resource_key.split('/')")
    code.append("    item_id = None")
    code.append("    if len(parts) > 0 and parts[-1].isdigit():")
    code.append("        item_id = int(parts[-1])")
    code.append("        resource_key = '/'.join(parts[:-1])")
    code.append("")
    code.append("    print(f'[{request.method}] Path: {resource_path} | Key: {resource_key} | ID: {item_id}')")
    code.append("")
    
    # GET
    code.append("    if request.method == 'GET':")
    code.append("        if item_id is not None:")
    code.append("            item = mock_retrieve(resource_key, item_id)")
    code.append("            if item: return jsonify(item)")
    code.append("            return jsonify({'detail': 'Not found.'}), 404")
    code.append("        else:")
    code.append("            data = mock_list(resource_key, request.args)")
    code.append("            ids = [d.get('id') for d in data]")
    code.append("            print(f\"DEBUG GET {resource_key}: Returning {len(data)} items. IDs: {ids}\")")
    code.append("            return jsonify(data)")
    code.append("")

    # POST (Create)
    code.append("    elif request.method == 'POST':")
    code.append("        new_item = request.json")
    code.append("        if not new_item: new_item = {}")
    code.append("        ")
    code.append("        if 'id' in new_item:")
    code.append("            target_id = str(new_item['id'])")
    code.append("        elif request.args.get('id'):")
    code.append("            target_id = request.args.get('id')")
    code.append("            new_item['id'] = int(target_id) if target_id.isdigit() else target_id")
    code.append("        else:")
    code.append("            target_id = str(random.randint(1000, 9999))")
    code.append("            new_item['id'] = int(target_id)")
    code.append("")
    code.append("        for item in mock_db[resource_key]:")
    code.append("            if str(item.get('id')) == str(target_id):")
    code.append("                print(f\"DEBUG POST: Duplicate ID {target_id}. Returning 409.\")")
    code.append("                return jsonify({'detail': 'Exists'}), 409")
    code.append("")
    code.append("        mock_db[resource_key].append(new_item)")
    code.append("        print(f\"DEBUG POST: Added to '{resource_key}'. ID: {new_item.get('id')}\")")
    code.append("        return jsonify(new_item), 201")
    code.append("")

    # PUT/PATCH (Update)
    code.append("    elif request.method in ['PUT', 'PATCH']:")
    code.append("        if item_id is None:")
    code.append("            # FIX: Allow Bulk Updates (defined in OpenAPI)")
    code.append("            print(f\"DEBUG {request.method}: Bulk update on {resource_key}. returning 200.\")")
    code.append("            return jsonify([{'id': 0, 'status': 'bulk updated'}]), 200")
    code.append("        ")
    code.append("        existing_item = mock_retrieve(resource_key, item_id)")
    code.append("        if existing_item:")
    code.append("            existing_item.update(request.json)")
    code.append("            return jsonify(existing_item)")
    code.append("        return jsonify({'detail': 'Not found.'}), 404")
    code.append("")

    # DELETE (Remove)
    code.append("    elif request.method == 'DELETE':")
    code.append("        if item_id is not None:")
    code.append("             initial_len = len(mock_db[resource_key])")
    code.append("             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]")
    code.append("             if len(mock_db[resource_key]) < initial_len:")
    code.append("                 return '', 204")
    code.append("             return jsonify({'detail': 'Not found.'}), 404")
    code.append("        else:")
    code.append("            # Bulk Delete (Optional support)")
    code.append("            return jsonify({'detail': 'Bulk delete not implemented in simple mock'}), 405")
    code.append("")
    code.append("    return jsonify({'detail': 'Not implemented'}), 501")
    code.append("")
    
    code.append("if __name__ == '__main__':")
    code.append("    print('🚀 Netbox Mock Server (RAM Only) running on http://127.0.0.1:5000')")
    code.append("    app.run(debug=False, port=5000)")

    with open(output_path, 'w', encoding='utf-8') as f:
        f.write("\n".join(code))
    
    print(f"Successfully generated RAM-only mock server at: {output_path}")

if __name__ == '__main__':
    generate_mock(OPENAPI_PATH, OUTPUT_PATH)