from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

# Auto-generated Mock for Gitea API
app = Flask(__name__)
mock_db = defaultdict(list)

# Map of API paths to their expected POST success code
PATH_STATUS_CODES = {
    "activitypub/user-id/{user-id}/inbox": 204,
    "admin/cron/{task}": 204,
    "admin/hooks": 201,
    "admin/unadopted/{owner}/{repo}": 204,
    "admin/users": 201,
    "admin/users/{username}/badges": 204,
    "admin/users/{username}/keys": 201,
    "admin/users/{username}/orgs": 201,
    "admin/users/{username}/rename": 204,
    "admin/users/{username}/repos": 201,
    "markdown": 200,
    "markdown/raw": 200,
    "markup": 200,
    "org/{org}/repos": 201,
    "orgs": 201,
    "orgs/{org}/actions/variables/{variablename}": 201,
    "orgs/{org}/avatar": 204,
    "orgs/{org}/hooks": 201,
    "orgs/{org}/labels": 201,
    "orgs/{org}/repos": 201,
    "orgs/{org}/teams": 201,
    "repos/migrate": 201,
    "repos/{owner}/{repo}/actions/variables/{variablename}": 201,
    "repos/{owner}/{repo}/avatar": 204,
    "repos/{owner}/{repo}/branch_protections": 201,
    "repos/{owner}/{repo}/branch_protections/priority": 204,
    "repos/{owner}/{repo}/branches": 201,
    "repos/{owner}/{repo}/contents": 201,
    "repos/{owner}/{repo}/contents/{filepath}": 201,
    "repos/{owner}/{repo}/diffpatch": 200,
    "repos/{owner}/{repo}/hooks": 201,
    "repos/{owner}/{repo}/hooks/{id}/tests": 204,
    "repos/{owner}/{repo}/issues": 201,
    "repos/{owner}/{repo}/issues/comments/{id}/assets": 201,
    "repos/{owner}/{repo}/issues/comments/{id}/reactions": 201,
    "repos/{owner}/{repo}/issues/{index}/assets": 201,
    "repos/{owner}/{repo}/issues/{index}/blocks": 201,
    "repos/{owner}/{repo}/issues/{index}/comments": 201,
    "repos/{owner}/{repo}/issues/{index}/deadline": 201,
    "repos/{owner}/{repo}/issues/{index}/dependencies": 201,
    "repos/{owner}/{repo}/issues/{index}/labels": 200,
    "repos/{owner}/{repo}/issues/{index}/pin": 204,
    "repos/{owner}/{repo}/issues/{index}/reactions": 201,
    "repos/{owner}/{repo}/issues/{index}/stopwatch/start": 201,
    "repos/{owner}/{repo}/issues/{index}/stopwatch/stop": 201,
    "repos/{owner}/{repo}/issues/{index}/times": 200,
    "repos/{owner}/{repo}/keys": 201,
    "repos/{owner}/{repo}/labels": 201,
    "repos/{owner}/{repo}/merge-upstream": 200,
    "repos/{owner}/{repo}/milestones": 201,
    "repos/{owner}/{repo}/mirror-sync": 200,
    "repos/{owner}/{repo}/pulls": 201,
    "repos/{owner}/{repo}/pulls/{index}/merge": 200,
    "repos/{owner}/{repo}/pulls/{index}/requested_reviewers": 201,
    "repos/{owner}/{repo}/pulls/{index}/reviews": 200,
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}": 200,
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals": 200,
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals": 200,
    "repos/{owner}/{repo}/pulls/{index}/update": 200,
    "repos/{owner}/{repo}/push_mirrors": 200,
    "repos/{owner}/{repo}/push_mirrors-sync": 200,
    "repos/{owner}/{repo}/releases": 201,
    "repos/{owner}/{repo}/releases/{id}/assets": 201,
    "repos/{owner}/{repo}/statuses/{sha}": 201,
    "repos/{owner}/{repo}/tag_protections": 201,
    "repos/{owner}/{repo}/tags": 200,
    "repos/{owner}/{repo}/transfer/reject": 200,
    "repos/{owner}/{repo}/wiki/new": 201,
    "repos/{template_owner}/{template_repo}/generate": 201,
    "user/actions/variables/{variablename}": 201,
    "user/applications/oauth2": 201,
    "user/avatar": 204,
    "user/emails": 201,
    "user/gpg_key_verify": 201,
    "user/gpg_keys": 201,
    "user/hooks": 201,
    "user/keys": 201,
    "user/repos": 201,
    "users/{username}/tokens": 201
}

def get_success_code(resource_path):
    if resource_path in PATH_STATUS_CODES:
        return PATH_STATUS_CODES[resource_path]
    for path_pattern, code in PATH_STATUS_CODES.items():
        if '{' in path_pattern:
            # Safe Regex replacement
            regex = re.sub(r'\{[^}]+\}', '[^/]+', path_pattern)
            regex = '^' + regex + '$'
            if re.fullmatch(regex, resource_path):
                return code
    return 201

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
        if item.get('username') == str(item_id): return item
        if item.get('name') == str(item_id): return item
    return None

def mock_list(resource_key, filters):
    items = mock_db[resource_key]
    return items

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    clean_path = resource_path.strip('/')
    if clean_path.startswith('api/v1/'):
        clean_path = clean_path[7:]
    
    resource_key = clean_path
    parts = clean_path.split('/')
    item_id = None
    
    non_id_endings = [
        'repos', 'issues', 'pulls', 'commits', 'branches', 'tags', 
        'keys', 'tokens', 'collaborators', 'hooks', 'labels', 'milestones',
        'merge', 'fork', 'mirror', 'test', 'raw', 'import', 'render',
        'oauth2', 'access_tokens', 'emails', 'gpg_keys', 'public_keys',
        'assets', 'times', 'reactions', 'blocks', 'reviews', 'activities'
    ]
    
    potential_id = parts[-1]
    if len(parts) > 1 and potential_id not in non_id_endings:
        item_id = potential_id
        resource_key = '/'.join(parts[:-1])

    print(f'[{request.method}] Path: {resource_path} | Clean: {clean_path} | Key: {resource_key} | ID: {item_id}')

    if request.method == 'GET':
        if item_id is not None:
            item = mock_retrieve(resource_key, item_id)
            if item: return jsonify(item)
            return jsonify({'message': 'Not Found'}), 404
        else:
            data = mock_list(resource_key, request.args)
            return jsonify(data)

    elif request.method == 'POST':
        success_code = get_success_code(clean_path)

        # Explicit override for Admin Adoption endpoints (Logic simulation)
        if 'admin/unadopted' in clean_path:
             return '', 204

        new_item = request.json or {}
        if 'id' not in new_item:
            new_item['id'] = random.randint(1000, 9999)

        for item in mock_db[resource_key]:
            if str(item.get('id')) == str(new_item['id']):
                return jsonify({'message': 'ID exists'}), 409

        mock_db[resource_key].append(new_item)
        print(f"DEBUG POST: Added to '{resource_key}'. Returning {success_code}")
        if success_code == 204: return '', 204
        return jsonify(new_item), success_code

    elif request.method in ['PUT', 'PATCH']:
        if item_id is None: return '', 405
        existing_item = mock_retrieve(resource_key, item_id)
        if existing_item:
            existing_item.update(request.json or {})
            return jsonify(existing_item)
        return jsonify({'message': 'Not Found'}), 404

    elif request.method == 'DELETE':
        if item_id is not None:
             initial_len = len(mock_db[resource_key])
             mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
             if len(mock_db[resource_key]) < initial_len:
                 return '', 204
             return jsonify({'message': 'Not Found'}), 404
        return '', 405

if __name__ == '__main__':
    print('🚀 Gitea Mock Server (RAM Only) running on http://127.0.0.1:8000')
    app.run(debug=False, port=8000)