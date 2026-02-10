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
ALIASES = {
    "activitypub/user-id/{user-id}": "activitypub",
    "activitypub/user-id/{user-id}/inbox": "inbox",
    "admin/cron": "cron",
    "admin/cron/{task}": "admin",
    "admin/emails": "emails",
    "admin/emails/search": "search",
    "admin/hooks": "hooks",
    "admin/hooks/{id}": "admin",
    "admin/orgs": "orgs",
    "admin/runners/registration-token": "registration-token",
    "admin/unadopted": "unadopted",
    "admin/unadopted/{owner}/{repo}": "admin",
    "admin/users": "users",
    "admin/users/{username}": "users",
    "admin/users/{username}/badges": "users",
    "admin/users/{username}/keys": "users",
    "admin/users/{username}/keys/{id}": "users",
    "admin/users/{username}/orgs": "users",
    "admin/users/{username}/rename": "users",
    "admin/users/{username}/repos": "repos",
    "gitignore/templates": "templates",
    "gitignore/templates/{name}": "gitignore",
    "label/templates": "templates",
    "label/templates/{name}": "label",
    "licenses": "licenses",
    "licenses/{name}": "licenses",
    "markdown": "markdown",
    "markdown/raw": "raw",
    "markup": "markup",
    "nodeinfo": "nodeinfo",
    "notifications": "notifications",
    "notifications/new": "new",
    "notifications/threads/{id}": "notifications",
    "org/{org}/repos": "repos",
    "orgs": "orgs",
    "orgs/{org}": "orgs",
    "orgs/{org}/actions/runners/registration-token": "orgs",
    "orgs/{org}/actions/secrets": "orgs",
    "orgs/{org}/actions/secrets/{secretname}": "orgs",
    "orgs/{org}/actions/variables": "orgs",
    "orgs/{org}/actions/variables/{variablename}": "orgs",
    "orgs/{org}/activities/feeds": "orgs",
    "orgs/{org}/avatar": "orgs",
    "orgs/{org}/blocks": "orgs",
    "orgs/{org}/blocks/{username}": "orgs",
    "orgs/{org}/hooks": "orgs",
    "orgs/{org}/hooks/{id}": "orgs",
    "orgs/{org}/labels": "orgs",
    "orgs/{org}/labels/{id}": "orgs",
    "orgs/{org}/members": "orgs",
    "orgs/{org}/members/{username}": "orgs",
    "orgs/{org}/public_members": "orgs",
    "orgs/{org}/public_members/{username}": "orgs",
    "orgs/{org}/repos": "repos",
    "orgs/{org}/teams": "orgs",
    "orgs/{org}/teams/search": "orgs",
    "packages/{owner}": "packages",
    "packages/{owner}/{type}/{name}/{version}": "packages",
    "packages/{owner}/{type}/{name}/{version}/files": "files",
    "repos/issues/search": "repos",
    "repos/migrate": "repos",
    "repos/search": "repos",
    "repos/{owner}/{repo}": "repos",
    "repos/{owner}/{repo}/actions/runners/registration-token": "repos",
    "repos/{owner}/{repo}/actions/secrets": "repos",
    "repos/{owner}/{repo}/actions/secrets/{secretname}": "repos",
    "repos/{owner}/{repo}/actions/tasks": "repos",
    "repos/{owner}/{repo}/actions/variables": "repos",
    "repos/{owner}/{repo}/actions/variables/{variablename}": "repos",
    "repos/{owner}/{repo}/activities/feeds": "repos",
    "repos/{owner}/{repo}/archive/{archive}": "repos",
    "repos/{owner}/{repo}/assignees": "repos",
    "repos/{owner}/{repo}/avatar": "repos",
    "repos/{owner}/{repo}/branch_protections": "repos",
    "repos/{owner}/{repo}/branch_protections/priority": "repos",
    "repos/{owner}/{repo}/branch_protections/{name}": "repos",
    "repos/{owner}/{repo}/branches": "repos",
    "repos/{owner}/{repo}/branches/{branch}": "repos",
    "repos/{owner}/{repo}/collaborators": "repos",
    "repos/{owner}/{repo}/collaborators/{collaborator}": "repos",
    "repos/{owner}/{repo}/collaborators/{collaborator}/permission": "repos",
    "repos/{owner}/{repo}/commits": "repos",
    "repos/{owner}/{repo}/commits/{ref}/status": "repos",
    "repos/{owner}/{repo}/commits/{ref}/statuses": "repos",
    "repos/{owner}/{repo}/commits/{sha}/pull": "repos",
    "repos/{owner}/{repo}/compare/{basehead}": "repos",
    "repos/{owner}/{repo}/contents": "repos",
    "repos/{owner}/{repo}/contents/{filepath}": "repos",
    "repos/{owner}/{repo}/diffpatch": "repos",
    "repos/{owner}/{repo}/editorconfig/{filepath}": "repos",
    "repos/{owner}/{repo}/forks": "repos",
    "repos/{owner}/{repo}/git/blobs/{sha}": "repos",
    "repos/{owner}/{repo}/git/commits/{sha}": "repos",
    "repos/{owner}/{repo}/git/commits/{sha}.{diffType}": "repos",
    "repos/{owner}/{repo}/git/notes/{sha}": "repos",
    "repos/{owner}/{repo}/git/refs": "repos",
    "repos/{owner}/{repo}/git/refs/{ref}": "repos",
    "repos/{owner}/{repo}/git/tags/{sha}": "repos",
    "repos/{owner}/{repo}/git/trees/{sha}": "repos",
    "repos/{owner}/{repo}/hooks": "repos",
    "repos/{owner}/{repo}/hooks/git": "repos",
    "repos/{owner}/{repo}/hooks/git/{id}": "repos",
    "repos/{owner}/{repo}/hooks/{id}": "repos",
    "repos/{owner}/{repo}/hooks/{id}/tests": "repos",
    "repos/{owner}/{repo}/issue_config": "repos",
    "repos/{owner}/{repo}/issue_config/validate": "repos",
    "repos/{owner}/{repo}/issue_templates": "repos",
    "repos/{owner}/{repo}/issues": "repos",
    "repos/{owner}/{repo}/issues/comments": "repos",
    "repos/{owner}/{repo}/issues/comments/{id}": "repos",
    "repos/{owner}/{repo}/issues/comments/{id}/assets": "repos",
    "repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}": "repos",
    "repos/{owner}/{repo}/issues/comments/{id}/reactions": "repos",
    "repos/{owner}/{repo}/issues/pinned": "repos",
    "repos/{owner}/{repo}/issues/{index}": "repos",
    "repos/{owner}/{repo}/issues/{index}/assets": "repos",
    "repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}": "repos",
    "repos/{owner}/{repo}/issues/{index}/blocks": "repos",
    "repos/{owner}/{repo}/issues/{index}/comments": "repos",
    "repos/{owner}/{repo}/issues/{index}/comments/{id}": "repos",
    "repos/{owner}/{repo}/issues/{index}/deadline": "repos",
    "repos/{owner}/{repo}/issues/{index}/dependencies": "repos",
    "repos/{owner}/{repo}/issues/{index}/labels": "repos",
    "repos/{owner}/{repo}/issues/{index}/labels/{id}": "repos",
    "repos/{owner}/{repo}/issues/{index}/pin": "repos",
    "repos/{owner}/{repo}/issues/{index}/pin/{position}": "repos",
    "repos/{owner}/{repo}/issues/{index}/reactions": "repos",
    "repos/{owner}/{repo}/issues/{index}/stopwatch/delete": "repos",
    "repos/{owner}/{repo}/issues/{index}/stopwatch/start": "repos",
    "repos/{owner}/{repo}/issues/{index}/stopwatch/stop": "repos",
    "repos/{owner}/{repo}/issues/{index}/subscriptions": "repos",
    "repos/{owner}/{repo}/issues/{index}/subscriptions/check": "repos",
    "repos/{owner}/{repo}/issues/{index}/subscriptions/{user}": "repos",
    "repos/{owner}/{repo}/issues/{index}/timeline": "repos",
    "repos/{owner}/{repo}/issues/{index}/times": "repos",
    "repos/{owner}/{repo}/issues/{index}/times/{id}": "repos",
    "repos/{owner}/{repo}/keys": "repos",
    "repos/{owner}/{repo}/keys/{id}": "repos",
    "repos/{owner}/{repo}/labels": "repos",
    "repos/{owner}/{repo}/labels/{id}": "repos",
    "repos/{owner}/{repo}/languages": "repos",
    "repos/{owner}/{repo}/licenses": "repos",
    "repos/{owner}/{repo}/media/{filepath}": "repos",
    "repos/{owner}/{repo}/merge-upstream": "repos",
    "repos/{owner}/{repo}/milestones": "repos",
    "repos/{owner}/{repo}/milestones/{id}": "repos",
    "repos/{owner}/{repo}/mirror-sync": "repos",
    "repos/{owner}/{repo}/new_pin_allowed": "repos",
    "repos/{owner}/{repo}/notifications": "repos",
    "repos/{owner}/{repo}/pulls": "repos",
    "repos/{owner}/{repo}/pulls/pinned": "repos",
    "repos/{owner}/{repo}/pulls/{base}/{head}": "repos",
    "repos/{owner}/{repo}/pulls/{index}": "repos",
    "repos/{owner}/{repo}/pulls/{index}.{diffType}": "repos",
    "repos/{owner}/{repo}/pulls/{index}/commits": "repos",
    "repos/{owner}/{repo}/pulls/{index}/files": "repos",
    "repos/{owner}/{repo}/pulls/{index}/merge": "repos",
    "repos/{owner}/{repo}/pulls/{index}/requested_reviewers": "repos",
    "repos/{owner}/{repo}/pulls/{index}/reviews": "repos",
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}": "repos",
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/comments": "repos",
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals": "repos",
    "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals": "repos",
    "repos/{owner}/{repo}/pulls/{index}/update": "repos",
    "repos/{owner}/{repo}/push_mirrors": "repos",
    "repos/{owner}/{repo}/push_mirrors-sync": "repos",
    "repos/{owner}/{repo}/push_mirrors/{name}": "repos",
    "repos/{owner}/{repo}/raw/{filepath}": "repos",
    "repos/{owner}/{repo}/releases": "repos",
    "repos/{owner}/{repo}/releases/latest": "repos",
    "repos/{owner}/{repo}/releases/tags/{tag}": "repos",
    "repos/{owner}/{repo}/releases/{id}": "repos",
    "repos/{owner}/{repo}/releases/{id}/assets": "repos",
    "repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}": "repos",
    "repos/{owner}/{repo}/reviewers": "repos",
    "repos/{owner}/{repo}/signing-key.gpg": "repos",
    "repos/{owner}/{repo}/stargazers": "repos",
    "repos/{owner}/{repo}/statuses/{sha}": "repos",
    "repos/{owner}/{repo}/subscribers": "repos",
    "repos/{owner}/{repo}/subscription": "repos",
    "repos/{owner}/{repo}/tag_protections": "repos",
    "repos/{owner}/{repo}/tag_protections/{id}": "repos",
    "repos/{owner}/{repo}/tags": "repos",
    "repos/{owner}/{repo}/tags/{tag}": "repos",
    "repos/{owner}/{repo}/teams": "repos",
    "repos/{owner}/{repo}/teams/{team}": "repos",
    "repos/{owner}/{repo}/times": "repos",
    "repos/{owner}/{repo}/times/{user}": "repos",
    "repos/{owner}/{repo}/topics": "repos",
    "repos/{owner}/{repo}/topics/{topic}": "repos",
    "repos/{owner}/{repo}/transfer": "repos",
    "repos/{owner}/{repo}/transfer/accept": "repos",
    "repos/{owner}/{repo}/transfer/reject": "repos",
    "repos/{owner}/{repo}/wiki/new": "repos",
    "repos/{owner}/{repo}/wiki/page/{pageName}": "repos",
    "repos/{owner}/{repo}/wiki/pages": "repos",
    "repos/{owner}/{repo}/wiki/revisions/{pageName}": "repos",
    "repos/{template_owner}/{template_repo}/generate": "repos",
    "repositories/{id}": "repositories",
    "settings/api": "api",
    "settings/attachment": "attachment",
    "settings/repository": "repository",
    "settings/ui": "ui",
    "signing-key.gpg": "signing-key.gpg",
    "teams/{id}": "teams",
    "teams/{id}/activities/feeds": "feeds",
    "teams/{id}/members": "members",
    "teams/{id}/members/{username}": "teams",
    "teams/{id}/repos": "repos",
    "teams/{id}/repos/{org}/{repo}": "repos",
    "topics/search": "search",
    "user": "users",
    "user/actions/runners/registration-token": "users",
    "user/actions/secrets/{secretname}": "users",
    "user/actions/variables": "users",
    "user/actions/variables/{variablename}": "users",
    "user/applications/oauth2": "users",
    "user/applications/oauth2/{id}": "users",
    "user/avatar": "users",
    "user/blocks": "users",
    "user/blocks/{username}": "users",
    "user/emails": "users",
    "user/followers": "users",
    "user/following": "users",
    "user/following/{username}": "users",
    "user/gpg_key_token": "users",
    "user/gpg_key_verify": "users",
    "user/gpg_keys": "users",
    "user/gpg_keys/{id}": "users",
    "user/hooks": "users",
    "user/hooks/{id}": "users",
    "user/keys": "users",
    "user/keys/{id}": "users",
    "user/orgs": "users",
    "user/repos": "repos",
    "user/settings": "users",
    "user/starred": "users",
    "user/starred/{owner}/{repo}": "users",
    "user/stopwatches": "users",
    "user/subscriptions": "users",
    "user/teams": "users",
    "user/times": "users",
    "users/search": "users",
    "users/{username}": "users",
    "users/{username}/activities/feeds": "users",
    "users/{username}/followers": "users",
    "users/{username}/following": "users",
    "users/{username}/following/{target}": "users",
    "users/{username}/gpg_keys": "users",
    "users/{username}/heatmap": "users",
    "users/{username}/keys": "users",
    "users/{username}/orgs": "users",
    "users/{username}/orgs/{org}/permissions": "users",
    "users/{username}/repos": "repos",
    "users/{username}/starred": "users",
    "users/{username}/subscriptions": "users",
    "users/{username}/tokens": "users",
    "users/{username}/tokens/{token}": "users",
    "version": "version"
}

def get_collection(path):
    if path in ALIASES: return ALIASES[path]
    for p, alias in ALIASES.items():
        if '{' in p:
            if re.fullmatch('^' + re.sub(r'\{[^}]+\}', '[^/]+', p) + '$', path): return alias
    return path.split('/')[0]

def get_success_code(path, method):
    method = method.upper()
    if path in SPEC_CODES and method in SPEC_CODES[path]: return SPEC_CODES[path][method]
    return 201 if method == 'POST' else 200

@app.route('/<path:resource_path>', methods=['GET', 'POST', 'PUT', 'PATCH', 'DELETE'])
def handle_request(resource_path):
    clean_path = resource_path[7:] if resource_path.startswith('api/v1/') else resource_path
    parts = clean_path.split('/')
    resource_key = get_collection(clean_path)
    item_id = parts[-1] if '{' not in clean_path and len(parts) > 1 else None

    if 'malformed_neg' in clean_path or 'malformed_neg' in str(request.data):
        return jsonify({'message': 'Validation Failed'}), 400

    success_code = get_success_code(clean_path, request.method)
    if request.method == 'GET':
        if item_id:
            item = next((i for i in mock_db[resource_key] if str(i.get('id')) == str(item_id)), None)
            return jsonify(item) if item else (jsonify({'message': 'Not Found'}), 404)
        return jsonify(mock_db[resource_key])

    elif request.method == 'POST':
        try: new_item = request.json or {}
        except: new_item = {}
        if 'id' not in new_item: new_item['id'] = random.randint(1000, 9999)
        mock_db[resource_key].append(new_item)
        return jsonify(new_item), success_code

    return jsonify({'message': 'Method handled'}), 200

if __name__ == '__main__':
    app.run(debug=False, port=8000)