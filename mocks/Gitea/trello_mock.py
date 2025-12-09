from flask import Flask, request, jsonify
from collections import defaultdict
import random
import string
import re

# Auto-generated Mock for Trello
app = Flask(__name__)
mock_db = defaultdict(list)

# Map of API paths to their expected POST success code
PATH_STATUS_CODES = {
    "boards": 200,
    "boards/{idBoard}/calendarKey/generate": 200,
    "boards/{idBoard}/checklists": 200,
    "boards/{idBoard}/emailKey/generate": 200,
    "boards/{idBoard}/labels": 200,
    "boards/{idBoard}/lists": 200,
    "boards/{idBoard}/markAsViewed": 200,
    "boards/{idBoard}/powerUps": 200,
    "cards": 200,
    "cards/{idCard}/actions/comments": 200,
    "cards/{idCard}/attachments": 200,
    "cards/{idCard}/checklist/{idChecklist}/checkItem": 200,
    "cards/{idCard}/checklist/{idChecklist}/checkItem/{idCheckItem}/convertToCard": 200,
    "cards/{idCard}/checklists": 200,
    "cards/{idCard}/idLabels": 200,
    "cards/{idCard}/idMembers": 200,
    "cards/{idCard}/labels": 200,
    "cards/{idCard}/markAssociatedNotificationsRead": 200,
    "cards/{idCard}/membersVoted": 200,
    "cards/{idCard}/stickers": 200,
    "checklists": 200,
    "checklists/{idChecklist}/checkItems": 200,
    "labels": 200,
    "lists": 200,
    "lists/{idList}/archiveAllCards": 200,
    "lists/{idList}/cards": 200,
    "lists/{idList}/moveAllCards": 200,
    "members/{idMember}/avatar": 200,
    "members/{idMember}/boardBackgrounds": 200,
    "members/{idMember}/boardStars": 200,
    "members/{idMember}/customBoardBackgrounds": 200,
    "members/{idMember}/customEmoji": 200,
    "members/{idMember}/customStickers": 200,
    "members/{idMember}/oneTimeMessagesDismissed": 200,
    "members/{idMember}/savedSearches": 200,
    "notifications/all/read": 200,
    "organizations": 200,
    "organizations/{idOrg}/logo": 200,
    "sessions": 200,
    "tokens/{token}/webhooks": 200,
    "webhooks": 200
}

def get_success_code(resource_path):
    if resource_path in PATH_STATUS_CODES:
        return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            # Safe Regex replacement (avoids group name issues)
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path):
                return code
    return 200 # Default to 200 for Trello

def generate_trello_id():
    # Trello IDs are 24-char hex strings (MongoDB style)
    return ''.join(random.choices('0123456789abcdef', k=24))

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
    return None

def mock_list(resource_key, filters):
    items = mock_db[resource_key]
    filtered = []
    for item in items:
        match = True
        for k, v in filters.items():
            if k in ['key', 'token', 'limit', 'fields']: continue
            if k in item and str(item[k]) != str(v): match = False
        if match: filtered.append(item)
    return filtered

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    # Normalize path: strip leading '1/' if present
    clean_path = resource_path.strip('/')
    if clean_path.startswith('1/'):
        clean_path = clean_path[2:]
    
    resource_key = clean_path
    parts = clean_path.split('/')
    item_id = None
    
    # Heuristic: IDs are 24-char hex strings
    potential_id = parts[-1]
    is_id = len(potential_id) == 24 and all(c in '0123456789abcdef' for c in potential_id)
    
    if len(parts) > 1 and is_id:
        item_id = potential_id
        resource_key = '/'.join(parts[:-1])

    print(f'[{request.method}] Path: {resource_path} | Clean: {clean_path} | Key: {resource_key} | ID: {item_id}')

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify(item)
            return jsonify({'message': 'Not Found', 'error': 'ERROR'}), 404
        else:
            data = mock_list(resource_key, request.args)
            return jsonify(data)

    elif request.method == 'POST':
        success_code = get_success_code(clean_path)
        new_item = request.json or {}
        if not new_item: # Trello often sends query params as body for POST
             new_item = request.args.to_dict()
        
        if 'id' not in new_item:
            new_item['id'] = generate_trello_id()

        mock_db[resource_key].append(new_item)
        print(f"DEBUG POST: Added to '{resource_key}'. ID: {new_item.get('id')}")
        return jsonify(new_item), success_code

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None: return '', 405
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            existing_item.update(request.json or request.args.to_dict())
            return jsonify(existing_item)
        return jsonify({'message': 'Not Found'}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return jsonify({'_value': None}), 200
             return jsonify({'message': 'Not Found'}), 404
        return '', 405

if __name__ == '__main__':
    print('🚀 Trello Mock Server (RAM Only) running on http://127.0.0.1:3000')
    app.run(debug=False, port=3000)