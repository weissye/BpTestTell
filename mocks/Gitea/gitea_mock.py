from flask import Flask, request, jsonify
import re
app = Flask(__name__)
TYPE_MAP = {
    "POST:activitypub/user-id/{user-id}/inbox": {},
    "POST:admin/cron/{task}": {},
    "POST:admin/hooks": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PATCH:admin/hooks/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:admin/unadopted/{owner}/{repo}": {},
    "POST:admin/users": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:admin/users/{username}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:admin/users/{username}/badges": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:admin/users/{username}/keys": {
        "key": {
            "type": "object",
            "required": False
        }
    },
    "POST:admin/users/{username}/orgs": {
        "organization": {
            "type": "object",
            "required": True
        }
    },
    "POST:admin/users/{username}/rename": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:admin/users/{username}/repos": {
        "repository": {
            "type": "object",
            "required": True
        }
    },
    "POST:markdown": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:markdown/raw": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:markup": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:notifications": {
        "last_read_at": {
            "type": "string",
            "required": False
        },
        "all": {
            "type": "string",
            "required": False
        },
        "status-types": {
            "type": "array",
            "required": False
        },
        "to-status": {
            "type": "string",
            "required": False
        }
    },
    "PATCH:notifications/threads/{id}": {
        "to-status": {
            "type": "string",
            "required": False
        }
    },
    "POST:org/{org}/repos": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:orgs": {
        "organization": {
            "type": "object",
            "required": True
        }
    },
    "PATCH:orgs/{org}": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PUT:orgs/{org}/actions/secrets/{secretname}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:orgs/{org}/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:orgs/{org}/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:orgs/{org}/avatar": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:orgs/{org}/blocks/{username}": {
        "note": {
            "type": "string",
            "required": False
        }
    },
    "POST:orgs/{org}/hooks": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PATCH:orgs/{org}/hooks/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:orgs/{org}/labels": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:orgs/{org}/labels/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:orgs/{org}/public_members/{username}": {},
    "POST:orgs/{org}/repos": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:orgs/{org}/teams": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/migrate": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/actions/secrets/{secretname}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/avatar": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/branch_protections": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/branch_protections/priority": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/branch_protections/{name}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/branches": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/branches/{branch}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/collaborators/{collaborator}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/contents": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PUT:repos/{owner}/{repo}/contents/{filepath}": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/contents/{filepath}": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/diffpatch": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/forks": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/hooks": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/hooks/git/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/hooks/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/hooks/{id}/tests": {
        "ref": {
            "type": "string",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/issues/comments/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/comments/{id}/assets": {
        "name": {
            "type": "string",
            "required": False
        },
        "attachment": {
            "type": "file",
            "required": True
        }
    },
    "PATCH:repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/comments/{id}/reactions": {
        "content": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/issues/{index}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/assets": {
        "name": {
            "type": "string",
            "required": False
        },
        "attachment": {
            "type": "file",
            "required": True
        }
    },
    "PATCH:repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/blocks": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/comments": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/issues/{index}/comments/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/deadline": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/dependencies": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/issues/{index}/labels": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/labels": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/pin": {},
    "PATCH:repos/{owner}/{repo}/issues/{index}/pin/{position}": {},
    "POST:repos/{owner}/{repo}/issues/{index}/reactions": {
        "content": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/issues/{index}/stopwatch/start": {},
    "POST:repos/{owner}/{repo}/issues/{index}/stopwatch/stop": {},
    "PUT:repos/{owner}/{repo}/issues/{index}/subscriptions/{user}": {},
    "POST:repos/{owner}/{repo}/issues/{index}/times": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/keys": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/labels": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/labels/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/merge-upstream": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/milestones": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/milestones/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/mirror-sync": {},
    "PUT:repos/{owner}/{repo}/notifications": {
        "all": {
            "type": "string",
            "required": False
        },
        "status-types": {
            "type": "array",
            "required": False
        },
        "to-status": {
            "type": "string",
            "required": False
        },
        "last_read_at": {
            "type": "string",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/pulls": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/pulls/{index}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/merge": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/requested_reviewers": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/reviews": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/reviews/{id}": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals": {},
    "POST:repos/{owner}/{repo}/pulls/{index}/update": {
        "style": {
            "type": "string",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/push_mirrors": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/push_mirrors-sync": {},
    "POST:repos/{owner}/{repo}/releases": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/releases/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/releases/{id}/assets": {
        "name": {
            "type": "string",
            "required": False
        },
        "attachment": {
            "type": "file",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/statuses/{sha}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/subscription": {},
    "POST:repos/{owner}/{repo}/tag_protections": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/tag_protections/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{owner}/{repo}/tags": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/teams/{team}": {},
    "PUT:repos/{owner}/{repo}/topics": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:repos/{owner}/{repo}/topics/{topic}": {},
    "POST:repos/{owner}/{repo}/transfer": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:repos/{owner}/{repo}/transfer/accept": {},
    "POST:repos/{owner}/{repo}/transfer/reject": {},
    "POST:repos/{owner}/{repo}/wiki/new": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:repos/{owner}/{repo}/wiki/page/{pageName}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:repos/{template_owner}/{template_repo}/generate": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:teams/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:teams/{id}/members/{username}": {},
    "PUT:teams/{id}/repos/{org}/{repo}": {},
    "PUT:user/actions/secrets/{secretname}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:user/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:user/actions/variables/{variablename}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:user/applications/oauth2": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PATCH:user/applications/oauth2/{id}": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "POST:user/avatar": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:user/blocks/{username}": {
        "note": {
            "type": "string",
            "required": False
        }
    },
    "POST:user/emails": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:user/following/{username}": {},
    "POST:user/gpg_key_verify": {},
    "POST:user/gpg_keys": {
        "Form": {
            "type": "object",
            "required": False
        }
    },
    "POST:user/hooks": {
        "body": {
            "type": "object",
            "required": True
        }
    },
    "PATCH:user/hooks/{id}": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:user/keys": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "POST:user/repos": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PATCH:user/settings": {
        "body": {
            "type": "object",
            "required": False
        }
    },
    "PUT:user/starred/{owner}/{repo}": {},
    "POST:users/{username}/tokens": {
        "body": {
            "type": "object",
            "required": False
        }
    }
}

def validate_request(method, path, data):
    # 1. TEACHING THE MOCK: If signaling header is present, force fail
    if request.headers.get('X-Provengo-Rejection-Probe'): return ['Signaled rejection']
    if 'NOT_A_STRING' in path or 'INVALID_' in path: return ['Fuzzing detected']
    lookup_key = f'{method}:{path}'
    if lookup_key not in TYPE_MAP:
        for key in TYPE_MAP:
            pattern = re.sub(r'\{[^\}]+\}', '[^/]+', key.split(':')[1])
            if re.fullmatch(key.split(':')[0] + ':' + pattern, lookup_key):
                lookup_key = key; break
    expected_fields = TYPE_MAP.get(lookup_key, {})
    errors = []
    for field, val in data.items():
        if field in expected_fields:
            if expected_fields[field]['type'] == 'integer' and not isinstance(val, int): errors.append(f'{field} must be int')
            if isinstance(val, str) and val.startswith('INVALID_'): errors.append('Fuzz tag found')
    return errors

@app.route('/api/v1/<path:subpath>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_all(subpath):
    data = request.json or {}
    errors = validate_request(request.method, subpath, data)
    if errors: return jsonify({'status': 'error', 'details': errors}), 400
    if request.method == 'POST': return jsonify({'status': 'success'}), 201
    if request.method == 'DELETE': return '', 204
    return jsonify({'status': 'success'}), 200

if __name__ == '__main__': app.run(port=8000, debug=True)