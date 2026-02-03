from flask import Flask, request, jsonify
from collections import defaultdict
import random
import re

app = Flask(__name__)
mock_db = defaultdict(list)

SPEC_CODES = {
    "activitypub/user-id/{user-id}": {
        "GET": 200
    },
    "activitypub/user-id/{user-id}/inbox": {
        "POST": 204
    },
    "admin/cron": {
        "GET": 200
    },
    "admin/cron/{task}": {
        "POST": 204
    },
    "admin/emails": {
        "GET": 200
    },
    "admin/emails/search": {
        "GET": 200
    },
    "admin/hooks": {
        "GET": 200,
        "POST": 201
    },
    "admin/hooks/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "admin/orgs": {
        "GET": 200
    },
    "admin/runners/registration-token": {
        "GET": 200
    },
    "admin/unadopted": {
        "GET": 200
    },
    "admin/unadopted/{owner}/{repo}": {
        "POST": 204,
        "DELETE": 204
    },
    "admin/users": {
        "GET": 200,
        "POST": 201
    },
    "admin/users/{username}": {
        "DELETE": 204,
        "PATCH": 200
    },
    "admin/users/{username}/badges": {
        "GET": 200,
        "POST": 204,
        "DELETE": 204
    },
    "admin/users/{username}/keys": {
        "POST": 201
    },
    "admin/users/{username}/keys/{id}": {
        "DELETE": 204
    },
    "admin/users/{username}/orgs": {
        "POST": 201
    },
    "admin/users/{username}/rename": {
        "POST": 204
    },
    "admin/users/{username}/repos": {
        "POST": 201
    },
    "gitignore/templates": {
        "GET": 200
    },
    "gitignore/templates/{name}": {
        "GET": 200
    },
    "label/templates": {
        "GET": 200
    },
    "label/templates/{name}": {
        "GET": 200
    },
    "licenses": {
        "GET": 200
    },
    "licenses/{name}": {
        "GET": 200
    },
    "markdown": {
        "POST": 200
    },
    "markdown/raw": {
        "POST": 200
    },
    "markup": {
        "POST": 200
    },
    "nodeinfo": {
        "GET": 200
    },
    "notifications": {
        "GET": 200,
        "PUT": 200
    },
    "notifications/new": {
        "GET": 200
    },
    "notifications/threads/{id}": {
        "GET": 200,
        "PATCH": 200
    },
    "org/{org}/repos": {
        "POST": 201
    },
    "orgs": {
        "GET": 200,
        "POST": 201
    },
    "orgs/{org}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "orgs/{org}/actions/runners/registration-token": {
        "GET": 200
    },
    "orgs/{org}/actions/secrets": {
        "GET": 200
    },
    "orgs/{org}/actions/secrets/{secretname}": {
        "PUT": 204,
        "DELETE": 204
    },
    "orgs/{org}/actions/variables": {
        "GET": 200
    },
    "orgs/{org}/actions/variables/{variablename}": {
        "GET": 200,
        "PUT": 204,
        "POST": 204,
        "DELETE": 204
    },
    "orgs/{org}/activities/feeds": {
        "GET": 200
    },
    "orgs/{org}/avatar": {
        "POST": 204,
        "DELETE": 204
    },
    "orgs/{org}/blocks": {
        "GET": 200
    },
    "orgs/{org}/blocks/{username}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "orgs/{org}/hooks": {
        "GET": 200,
        "POST": 201
    },
    "orgs/{org}/hooks/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "orgs/{org}/labels": {
        "GET": 200,
        "POST": 201
    },
    "orgs/{org}/labels/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "orgs/{org}/members": {
        "GET": 200
    },
    "orgs/{org}/members/{username}": {
        "GET": 204,
        "DELETE": 204
    },
    "orgs/{org}/public_members": {
        "GET": 200
    },
    "orgs/{org}/public_members/{username}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "orgs/{org}/repos": {
        "GET": 200,
        "POST": 201
    },
    "orgs/{org}/teams": {
        "GET": 200,
        "POST": 201
    },
    "orgs/{org}/teams/search": {
        "GET": 200
    },
    "packages/{owner}": {
        "GET": 200
    },
    "packages/{owner}/{type}/{name}/{version}": {
        "GET": 200,
        "DELETE": 204
    },
    "packages/{owner}/{type}/{name}/{version}/files": {
        "GET": 200
    },
    "repos/issues/search": {
        "GET": 200
    },
    "repos/migrate": {
        "POST": 201
    },
    "repos/search": {
        "GET": 200
    },
    "repos/{owner}/{repo}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/actions/runners/registration-token": {
        "GET": 200
    },
    "repos/{owner}/{repo}/actions/secrets": {
        "GET": 200
    },
    "repos/{owner}/{repo}/actions/secrets/{secretname}": {
        "PUT": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/actions/tasks": {
        "GET": 200
    },
    "repos/{owner}/{repo}/actions/variables": {
        "GET": 200
    },
    "repos/{owner}/{repo}/actions/variables/{variablename}": {
        "GET": 200,
        "PUT": 204,
        "POST": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/activities/feeds": {
        "GET": 200
    },
    "repos/{owner}/{repo}/archive/{archive}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/assignees": {
        "GET": 200
    },
    "repos/{owner}/{repo}/avatar": {
        "POST": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/branch_protections": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/branch_protections/priority": {
        "POST": 204
    },
    "repos/{owner}/{repo}/branch_protections/{name}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/branches": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/branches/{branch}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 204
    },
    "repos/{owner}/{repo}/collaborators": {
        "GET": 200
    },
    "repos/{owner}/{repo}/collaborators/{collaborator}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/collaborators/{collaborator}/permission": {
        "GET": 200
    },
    "repos/{owner}/{repo}/commits": {
        "GET": 200
    },
    "repos/{owner}/{repo}/commits/{ref}/status": {
        "GET": 200
    },
    "repos/{owner}/{repo}/commits/{ref}/statuses": {
        "GET": 200
    },
    "repos/{owner}/{repo}/commits/{sha}/pull": {
        "GET": 200
    },
    "repos/{owner}/{repo}/compare/{basehead}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/contents": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/contents/{filepath}": {
        "GET": 200,
        "PUT": 200,
        "POST": 201,
        "DELETE": 200
    },
    "repos/{owner}/{repo}/diffpatch": {
        "POST": 200
    },
    "repos/{owner}/{repo}/editorconfig/{filepath}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/forks": {
        "GET": 200,
        "POST": 202
    },
    "repos/{owner}/{repo}/git/blobs/{sha}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/commits/{sha}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/commits/{sha}.{diffType}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/notes/{sha}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/refs": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/refs/{ref}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/tags/{sha}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/git/trees/{sha}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/hooks": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/hooks/git": {
        "GET": 200
    },
    "repos/{owner}/{repo}/hooks/git/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/hooks/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/hooks/{id}/tests": {
        "POST": 204
    },
    "repos/{owner}/{repo}/issue_config": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issue_config/validate": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issue_templates": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/comments": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues/comments/{id}": {
        "GET": 204,
        "DELETE": 204,
        "PATCH": 204
    },
    "repos/{owner}/{repo}/issues/comments/{id}/assets": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 201
    },
    "repos/{owner}/{repo}/issues/comments/{id}/reactions": {
        "GET": 200,
        "POST": 201,
        "DELETE": 200
    },
    "repos/{owner}/{repo}/issues/pinned": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues/{index}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 201
    },
    "repos/{owner}/{repo}/issues/{index}/assets": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 201
    },
    "repos/{owner}/{repo}/issues/{index}/blocks": {
        "GET": 200,
        "POST": 201,
        "DELETE": 200
    },
    "repos/{owner}/{repo}/issues/{index}/comments": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/{index}/comments/{id}": {
        "DELETE": 204,
        "PATCH": 204
    },
    "repos/{owner}/{repo}/issues/{index}/deadline": {
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/{index}/dependencies": {
        "GET": 200,
        "POST": 201,
        "DELETE": 200
    },
    "repos/{owner}/{repo}/issues/{index}/labels": {
        "GET": 200,
        "PUT": 200,
        "POST": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/issues/{index}/labels/{id}": {
        "DELETE": 204
    },
    "repos/{owner}/{repo}/issues/{index}/pin": {
        "POST": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/issues/{index}/pin/{position}": {
        "PATCH": 204
    },
    "repos/{owner}/{repo}/issues/{index}/reactions": {
        "GET": 200,
        "POST": 201,
        "DELETE": 200
    },
    "repos/{owner}/{repo}/issues/{index}/stopwatch/delete": {
        "DELETE": 204
    },
    "repos/{owner}/{repo}/issues/{index}/stopwatch/start": {
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/{index}/stopwatch/stop": {
        "POST": 201
    },
    "repos/{owner}/{repo}/issues/{index}/subscriptions": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues/{index}/subscriptions/check": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues/{index}/subscriptions/{user}": {
        "PUT": 201,
        "DELETE": 201
    },
    "repos/{owner}/{repo}/issues/{index}/timeline": {
        "GET": 200
    },
    "repos/{owner}/{repo}/issues/{index}/times": {
        "GET": 200,
        "POST": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/issues/{index}/times/{id}": {
        "DELETE": 204
    },
    "repos/{owner}/{repo}/keys": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/keys/{id}": {
        "GET": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/labels": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/labels/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/languages": {
        "GET": 200
    },
    "repos/{owner}/{repo}/licenses": {
        "GET": 200
    },
    "repos/{owner}/{repo}/media/{filepath}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/merge-upstream": {
        "POST": 200
    },
    "repos/{owner}/{repo}/milestones": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/milestones/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/mirror-sync": {
        "POST": 200
    },
    "repos/{owner}/{repo}/new_pin_allowed": {
        "GET": 200
    },
    "repos/{owner}/{repo}/notifications": {
        "GET": 200,
        "PUT": 200
    },
    "repos/{owner}/{repo}/pulls": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/pulls/pinned": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{base}/{head}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{index}": {
        "GET": 200,
        "PATCH": 201
    },
    "repos/{owner}/{repo}/pulls/{index}.{diffType}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/commits": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/files": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/merge": {
        "GET": 204,
        "POST": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/pulls/{index}/requested_reviewers": {
        "POST": 201,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/pulls/{index}/reviews": {
        "GET": 200,
        "POST": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}": {
        "GET": 200,
        "POST": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments": {
        "GET": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals": {
        "POST": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals": {
        "POST": 200
    },
    "repos/{owner}/{repo}/pulls/{index}/update": {
        "POST": 200
    },
    "repos/{owner}/{repo}/push_mirrors": {
        "GET": 200,
        "POST": 200
    },
    "repos/{owner}/{repo}/push_mirrors-sync": {
        "POST": 200
    },
    "repos/{owner}/{repo}/push_mirrors/{name}": {
        "GET": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/raw/{filepath}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/releases": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/releases/latest": {
        "GET": 200
    },
    "repos/{owner}/{repo}/releases/tags/{tag}": {
        "GET": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/releases/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/releases/{id}/assets": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 201
    },
    "repos/{owner}/{repo}/reviewers": {
        "GET": 200
    },
    "repos/{owner}/{repo}/signing-key.gpg": {
        "GET": 200
    },
    "repos/{owner}/{repo}/stargazers": {
        "GET": 200
    },
    "repos/{owner}/{repo}/statuses/{sha}": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/subscribers": {
        "GET": 200
    },
    "repos/{owner}/{repo}/subscription": {
        "GET": 200,
        "PUT": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/tag_protections": {
        "GET": 200,
        "POST": 201
    },
    "repos/{owner}/{repo}/tag_protections/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/tags": {
        "GET": 200,
        "POST": 200
    },
    "repos/{owner}/{repo}/tags/{tag}": {
        "GET": 200,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/teams": {
        "GET": 200
    },
    "repos/{owner}/{repo}/teams/{team}": {
        "GET": 200,
        "PUT": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/times": {
        "GET": 200
    },
    "repos/{owner}/{repo}/times/{user}": {
        "GET": 200
    },
    "repos/{owner}/{repo}/topics": {
        "GET": 200,
        "PUT": 204
    },
    "repos/{owner}/{repo}/topics/{topic}": {
        "PUT": 204,
        "DELETE": 204
    },
    "repos/{owner}/{repo}/transfer": {
        "POST": 202
    },
    "repos/{owner}/{repo}/transfer/accept": {
        "POST": 202
    },
    "repos/{owner}/{repo}/transfer/reject": {
        "POST": 200
    },
    "repos/{owner}/{repo}/wiki/new": {
        "POST": 201
    },
    "repos/{owner}/{repo}/wiki/page/{pageName}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "repos/{owner}/{repo}/wiki/pages": {
        "GET": 200
    },
    "repos/{owner}/{repo}/wiki/revisions/{pageName}": {
        "GET": 200
    },
    "repos/{template_owner}/{template_repo}/generate": {
        "POST": 201
    },
    "repositories/{id}": {
        "GET": 200
    },
    "settings/api": {
        "GET": 200
    },
    "settings/attachment": {
        "GET": 200
    },
    "settings/repository": {
        "GET": 200
    },
    "settings/ui": {
        "GET": 200
    },
    "signing-key.gpg": {
        "GET": 200
    },
    "teams/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "teams/{id}/activities/feeds": {
        "GET": 200
    },
    "teams/{id}/members": {
        "GET": 200
    },
    "teams/{id}/members/{username}": {
        "GET": 200,
        "PUT": 204,
        "DELETE": 204
    },
    "teams/{id}/repos": {
        "GET": 200
    },
    "teams/{id}/repos/{org}/{repo}": {
        "GET": 200,
        "PUT": 204,
        "DELETE": 204
    },
    "topics/search": {
        "GET": 200
    },
    "user": {
        "GET": 200
    },
    "user/actions/runners/registration-token": {
        "GET": 200
    },
    "user/actions/secrets/{secretname}": {
        "PUT": 204,
        "DELETE": 204
    },
    "user/actions/variables": {
        "GET": 200
    },
    "user/actions/variables/{variablename}": {
        "GET": 200,
        "PUT": 204,
        "POST": 204,
        "DELETE": 204
    },
    "user/applications/oauth2": {
        "GET": 200,
        "POST": 201
    },
    "user/applications/oauth2/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "user/avatar": {
        "POST": 204,
        "DELETE": 204
    },
    "user/blocks": {
        "GET": 200
    },
    "user/blocks/{username}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "user/emails": {
        "GET": 200,
        "POST": 201,
        "DELETE": 204
    },
    "user/followers": {
        "GET": 200
    },
    "user/following": {
        "GET": 200
    },
    "user/following/{username}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "user/gpg_key_token": {
        "GET": 200
    },
    "user/gpg_key_verify": {
        "POST": 201
    },
    "user/gpg_keys": {
        "GET": 200,
        "POST": 201
    },
    "user/gpg_keys/{id}": {
        "GET": 200,
        "DELETE": 204
    },
    "user/hooks": {
        "GET": 200,
        "POST": 201
    },
    "user/hooks/{id}": {
        "GET": 200,
        "DELETE": 204,
        "PATCH": 200
    },
    "user/keys": {
        "GET": 200,
        "POST": 201
    },
    "user/keys/{id}": {
        "GET": 200,
        "DELETE": 204
    },
    "user/orgs": {
        "GET": 200
    },
    "user/repos": {
        "GET": 200,
        "POST": 201
    },
    "user/settings": {
        "GET": 200,
        "PATCH": 200
    },
    "user/starred": {
        "GET": 200
    },
    "user/starred/{owner}/{repo}": {
        "GET": 204,
        "PUT": 204,
        "DELETE": 204
    },
    "user/stopwatches": {
        "GET": 200
    },
    "user/subscriptions": {
        "GET": 200
    },
    "user/teams": {
        "GET": 200
    },
    "user/times": {
        "GET": 200
    },
    "users/search": {
        "GET": 200
    },
    "users/{username}": {
        "GET": 200
    },
    "users/{username}/activities/feeds": {
        "GET": 200
    },
    "users/{username}/followers": {
        "GET": 200
    },
    "users/{username}/following": {
        "GET": 200
    },
    "users/{username}/following/{target}": {
        "GET": 204
    },
    "users/{username}/gpg_keys": {
        "GET": 200
    },
    "users/{username}/heatmap": {
        "GET": 200
    },
    "users/{username}/keys": {
        "GET": 200
    },
    "users/{username}/orgs": {
        "GET": 200
    },
    "users/{username}/orgs/{org}/permissions": {
        "GET": 200
    },
    "users/{username}/repos": {
        "GET": 200
    },
    "users/{username}/starred": {
        "GET": 200
    },
    "users/{username}/subscriptions": {
        "GET": 200
    },
    "users/{username}/tokens": {
        "GET": 200,
        "POST": 201
    },
    "users/{username}/tokens/{token}": {
        "DELETE": 204
    },
    "version": {
        "GET": 200
    }
}

def get_success_code(path, method):
    method = method.upper()
    if path.startswith('api/v1/'): path = path[7:]
    # Exact match check
    if path in SPEC_CODES and method in SPEC_CODES[path]: return SPEC_CODES[path][method]
    # Regex match check for paths with {id}
    for pattern, methods in SPEC_CODES.items():
        if '{' in pattern:
            regex = '^' + re.sub(r'\{[^}]+\}', '[^/]+', pattern) + '$'
            if re.fullmatch(regex, path) and method in methods: return methods[method]
    return 204 if method == 'DELETE' else (201 if method == 'POST' else 200)

def mock_retrieve(resource_key, item_id):
    for item in mock_db[resource_key]:
        if str(item.get('id')) == str(item_id): return item
    return None

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    clean_path = resource_path
    if clean_path.startswith('api/v1/'): clean_path = clean_path[7:]
    parts = clean_path.split('/')
    
    if request.method == 'POST' or clean_path in SPEC_CODES:
        resource_key, item_id = clean_path, None
    elif len(parts) > 1:
        resource_key, item_id = '/'.join(parts[:-1]), parts[-1]
    else:
        resource_key, item_id = clean_path, None

    print(f'[{request.method}] Path: {clean_path} | Key: {resource_key} | ID: {item_id}')
    success_code = get_success_code(clean_path, request.method)

    if request.method == 'GET':
        item = mock_retrieve(resource_key, item_id)
        if item: return jsonify(item)
        if resource_key in mock_db and item_id is None: return jsonify(mock_db[resource_key])
        if clean_path in SPEC_CODES: return jsonify([])
        return jsonify({'message': 'Not Found'}), 404

    elif request.method == 'POST':
        if 'admin/unadopted' in clean_path: return '', 204
        try: new_item = request.json or {}
        except: new_item = {}
        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)
        mock_db[resource_key].append(new_item)
        return jsonify(new_item), success_code

    elif request.method in ['PUT', 'PATCH']:
        existing_item = mock_retrieve(resource_key, item_id)
        try: payload = request.json or {}
        except: payload = {}
        if existing_item:
            existing_item.update(payload)
            return jsonify(existing_item), success_code
        # Idempotent creation for relationship PUTs
        payload['id'] = item_id
        mock_db[resource_key].append(payload)
        return jsonify(payload), success_code

    elif request.method == 'DELETE':
        if item_id is not None:
            mock_db[resource_key] = [i for i in mock_db[resource_key] if str(i.get('id')) != str(item_id)]
            return '', success_code
        return '', 405

if __name__ == '__main__':
    print('🚀 Gitea Mock Server (Fidelity Fix) running on http://127.0.0.1:8000')
    app.run(debug=False, port=8000)