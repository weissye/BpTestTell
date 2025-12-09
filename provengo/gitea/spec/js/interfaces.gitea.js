//@provengo summon rest
// === Auto-generated interfaces for gitea ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", { headers: { "Content-Type": "application/json" } });
const pvg = {
  success: function(msg) { bp.log.info(msg); },
  fail: function(msg) { bp.log.error(msg); throw new Error(msg); }
};
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: " + desc, function(e) { return e.name === "Done: " + desc; }); }
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function activitypubPerson(user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Returns the Person actor for a user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function activitypubPersonInbox(user_id) {
  var url = "/activitypub/user-id/" + user_id + "/inbox";
  var description = "Send to the inbox";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"user_id": user_id}) });
}

// No verifyActivityPubExists generated: Primary Key "user-id" is not in POST body (Server-Generated ID).
function waitForActivityPubAdded(user_id) {
  waitFor(matchSuccess("Send to the inbox"));
}

function matchAnyActivityPubAdded() {
  return bp.EventSet("Any ActivityPub Added", function(e) {
      return e.name.startsWith("Done: Send to the inbox");
  });
}

function adminCronList(id, limit, page, task) {
  var url = "/admin/cron";
  var description = "List cron tasks";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function adminCronRun(id, limit, page, task) {
  var url = "/admin/cron/" + task;
  var description = "Run cron task";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "page": page, "task": task}) });
}

// No verifyAdminCronExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForAdminCronAdded(id, limit, page, task) {
  waitFor(matchSuccess("Run cron task"));
}

function matchAnyAdminCronAdded() {
  return bp.EventSet("Any AdminCron Added", function(e) {
      return e.name.startsWith("Done: Run cron task");
  });
}

function adminGetAllEmails(id, limit, page) {
  var url = "/admin/emails";
  var description = "List all emails";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// No verifyAdminEmailsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyAdminEmailsAdded() {
  return bp.EventSet("Any AdminEmails Added", function(e) {
      return e.name.startsWith("Done: Create AdminEmails");
  });
}

function adminSearchEmails(id, limit, page, q) {
  var url = "/admin/emails/search";
  var description = "Search all emails";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// No verifyEmailsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyEmailsAdded() {
  return bp.EventSet("Any Emails Added", function(e) {
      return e.name.startsWith("Done: Create Emails");
  });
}

function userListHooks(active, body, config, events, id, limit, page, type) {
  var url = "/user/hooks";
  var description = "List the authenticated user's webhooks";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCreateHook(active, body, config, events, id, limit, page, type) {
  var url = "/user/hooks";
  var description = "Create a hook";
  var body = {
    "type": String(type),
    "config": String(config),
    "events": String(events),
    "active": active,
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "body": body, "config": config, "events": events, "id": id, "limit": limit, "page": page, "type": type}) });
}

function userGetHook(active, body, config, events, id, limit, page, type) {
  var url = "/user/hooks/" + id;
  var description = "Get a hook";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userEditHook(active, body, config, events, id, limit, page, type) {
  var url = "/user/hooks/" + id;
  var description = "Update a hook";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"active": active, "body": body, "config": config, "events": events, "id": id, "limit": limit, "page": page, "type": type}) });
}

function userDeleteHook(active, body, config, events, id, limit, page, type) {
  var url = "/user/hooks/" + id;
  var description = "Delete a hook";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

// No verifyHooksExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForHooksAdded(active, body, config, events, id, limit, page, type) {
  waitFor(matchSuccess("Create a hook"));
}

function matchAnyHooksAdded() {
  return bp.EventSet("Any Hooks Added", function(e) {
      return e.name.startsWith("Done: Create a hook");
  });
}

function orgListUserOrgs(limit, org, page, username) {
  var url = "/users/" + username + "/orgs";
  var description = "List a user's organizations";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgGetUserPermissions(limit, org, page, username) {
  var url = "/users/" + username + "/orgs/" + org + "/permissions";
  var description = "Get user permissions in organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

// No verifyOrganizationsExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function matchAnyOrganizationsAdded() {
  return bp.EventSet("Any Organizations Added", function(e) {
      return e.name.startsWith("Done: Create Organizations");
  });
}

function adminGetRunnerRegistrationToken(id) {
  var url = "/admin/runners/registration-token";
  var description = "Get an global actions runner registration token";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyRunnersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyRunnersAdded() {
  return bp.EventSet("Any Runners Added", function(e) {
      return e.name.startsWith("Done: Create Runners");
  });
}

function adminUnadoptedList(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted";
  var description = "List unadopted repositories";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function adminDeleteUnadoptedRepository(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Delete unadopted files";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function adminAdoptRepository(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Adopt unadopted files as a repository";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "owner": owner, "page": page, "pattern": pattern, "repo": repo}) });
}

// No verifyUnadoptedRepositoriesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForUnadoptedRepositoriesAdded(limit, owner, page, pattern, repo) {
  waitFor(matchSuccess("Adopt unadopted files as a repository"));
}

function matchAnyUnadoptedRepositoriesAdded() {
  return bp.EventSet("Any UnadoptedRepositories Added", function(e) {
      return e.name.startsWith("Done: Adopt unadopted files as a repository");
  });
}

function userListSubscriptions(body, limit, name, page, scope, token, username) {
  var url = "/users/" + username + "/subscriptions";
  var description = "List the repositories watched by a user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCreateToken(body, limit, name, page, scope, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Create an access token";
  var body = {
    "name": String(name),
    "scopes": [String(scope)],
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "name": name, "page": page, "scope": scope, "token": token, "username": username}) });
}

function userDeleteAccessToken(body, limit, name, page, scope, token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Delete an access token";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function adminEditUser(body, limit, name, page, scope, token, username) {
  var url = "/admin/users/" + username;
  var description = "Edit an existing user";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "name": name, "page": page, "scope": scope, "token": token, "username": username}) });
}

function userGetTokens(body, limit, name, page, scope, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "List the authenticated user's access tokens";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// No verifyUsersExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function waitForUsersAdded(body, limit, name, page, scope, token, username) {
  waitFor(matchSuccess("Create an access token"));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create an access token");
  });
}

function adminListUserBadges(body, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "List a user's badges";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function adminAddUserBadges(body, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Add a badge to a user";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "username": username}) });
}

function adminDeleteUserBadges(body, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Remove a badge from a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 422] });
}

// No verifyUserBadgesExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function waitForUserBadgesAdded(body, username) {
  waitFor(matchSuccess("Add a badge to a user"));
}

function matchAnyUserBadgesAdded() {
  return bp.EventSet("Any UserBadges Added", function(e) {
      return e.name.startsWith("Done: Add a badge to a user");
  });
}

function adminCreatePublicKey(id, key, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Add a public key on behalf of a user";
  var body = {
    "key": String(key),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "username": username}) });
}

function adminDeleteUserPublicKey(id, key, username) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Delete a user's public key";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// No verifyUserKeysExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function waitForUserKeysAdded(id, key, username) {
  waitFor(matchSuccess("Add a public key on behalf of a user"));
}

function matchAnyUserKeysAdded() {
  return bp.EventSet("Any UserKeys Added", function(e) {
      return e.name.startsWith("Done: Add a public key on behalf of a user");
  });
}

function adminCreateOrg(id, organization, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Create an organization";
  var body = {
    "organization": String(organization),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "organization": organization, "username": username}) });
}

// No verifyUserOrganizationsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserOrganizationsAdded(id, organization, username) {
  waitFor(matchSuccess("Create an organization"));
}

function matchAnyUserOrganizationsAdded() {
  return bp.EventSet("Any UserOrganizations Added", function(e) {
      return e.name.startsWith("Done: Create an organization");
  });
}

function adminRenameUser(body, id, username) {
  var url = "/admin/users/" + username + "/rename";
  var description = "Rename a user";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "username": username}) });
}

// No verifyUserRenameExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserRenameAdded(body, id, username) {
  waitFor(matchSuccess("Rename a user"));
}

function matchAnyUserRenameAdded() {
  return bp.EventSet("Any UserRename Added", function(e) {
      return e.name.startsWith("Done: Rename a user");
  });
}

function adminCreateRepo(id, repository, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Create a repository on behalf of a user";
  var body = {
    "repository": String(repository),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "repository": repository, "username": username}) });
}

// No verifyUserRepositoriesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserRepositoriesAdded(id, repository, username) {
  waitFor(matchSuccess("Create a repository on behalf of a user"));
}

function matchAnyUserRepositoriesAdded() {
  return bp.EventSet("Any UserRepositories Added", function(e) {
      return e.name.startsWith("Done: Create a repository on behalf of a user");
  });
}

function listGitignoresTemplates(name) {
  var url = "/gitignore/templates";
  var description = "Returns a list of all gitignore templates";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getGitignoreTemplateInfo(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Returns information about a gitignore template";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyGitignoreTemplatesExists generated: Primary Key "name" is not in POST body (Server-Generated ID).
function matchAnyGitignoreTemplatesAdded() {
  return bp.EventSet("Any GitignoreTemplates Added", function(e) {
      return e.name.startsWith("Done: Create GitignoreTemplates");
  });
}

function listLabelTemplates(name) {
  var url = "/label/templates";
  var description = "Returns a list of all label templates";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getLabelTemplateInfo(name) {
  var url = "/label/templates/" + name;
  var description = "Returns all labels in a template";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyLabelTemplatesExists generated: Primary Key "name" is not in POST body (Server-Generated ID).
function matchAnyLabelTemplatesAdded() {
  return bp.EventSet("Any LabelTemplates Added", function(e) {
      return e.name.startsWith("Done: Create LabelTemplates");
  });
}

function listLicenseTemplates(id) {
  var url = "/licenses";
  var description = "Returns a list of all license templates";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyLicenseTemplatesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyLicenseTemplatesAdded() {
  return bp.EventSet("Any LicenseTemplates Added", function(e) {
      return e.name.startsWith("Done: Create LicenseTemplates");
  });
}

function getLicenseTemplateInfo(name) {
  var url = "/licenses/" + name;
  var description = "Returns information about a license template";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyLicensesExists generated: Primary Key "name" is not in POST body (Server-Generated ID).
function matchAnyLicensesAdded() {
  return bp.EventSet("Any Licenses Added", function(e) {
      return e.name.startsWith("Done: Create Licenses");
  });
}

function renderMarkdown(body, id) {
  var url = "/markdown";
  var description = "Render a markdown document as HTML";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

function renderMarkdownRaw(body, id) {
  var url = "/markdown/raw";
  var description = "Render raw markdown as HTML";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// No verifyMarkdownExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForMarkdownAdded(body, id) {
  waitFor(matchSuccess("Render a markdown document as HTML"));
}

function matchAnyMarkdownAdded() {
  return bp.EventSet("Any Markdown Added", function(e) {
      return e.name.startsWith("Done: Render a markdown document as HTML");
  });
}

function renderMarkup(body, id) {
  var url = "/markup";
  var description = "Render a markup document as HTML";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// No verifyMarkupExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForMarkupAdded(body, id) {
  waitFor(matchSuccess("Render a markup document as HTML"));
}

function matchAnyMarkupAdded() {
  return bp.EventSet("Any Markup Added", function(e) {
      return e.name.startsWith("Done: Render a markup document as HTML");
  });
}

function getNodeInfo(id) {
  var url = "/nodeinfo";
  var description = "Returns the nodeinfo of the Gitea application";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyNodeInfoExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyNodeInfoAdded() {
  return bp.EventSet("Any NodeInfo Added", function(e) {
      return e.name.startsWith("Done: Create NodeInfo");
  });
}

function notifyGetRepoList(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "List users's notification threads on a specific repo";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function notifyReadRepoList(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark notification threads as read, pinned or unread on a specific repo";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [205], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"all": all, "before": before, "id": id, "last_read_at": last_read_at, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since, "status_types": status_types, "subject_type": subject_type, "to_status": to_status}) });
}

function notifyGetThread(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/notifications/threads/" + id;
  var description = "Get notification thread by ID";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function notifyReadThread(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/notifications/threads/" + id;
  var description = "Mark notification thread as read by ID";
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [205, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"all": all, "before": before, "id": id, "last_read_at": last_read_at, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since, "status_types": status_types, "subject_type": subject_type, "to_status": to_status}) });
}

function notifyNewAvailable(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/notifications/new";
  var description = "Check if unread notifications exist";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyNotificationsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: Create Notifications");
  });
}

function orgGetAll(body, limit, org, organization, page, secretname) {
  var url = "/orgs";
  var description = "Get list of organizations";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function orgCreate(body, limit, org, organization, page, secretname) {
  var url = "/orgs";
  var description = "Create an organization";
  var body = {
    "organization": String(organization),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "org": org, "organization": organization, "page": page, "secretname": secretname}) });
}

function createOrgRepoDeprecated(body, limit, org, organization, page, secretname) {
  var url = "/org/" + org + "/repos";
  var description = "Create a repository in an organization";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "org": org, "organization": organization, "page": page, "secretname": secretname}) });
}

function orgDelete(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Delete an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Get an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgEdit(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Edit an organization";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "org": org, "organization": organization, "page": page, "secretname": secretname}) });
}

function orgGetRunnerRegistrationToken(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org + "/actions/runners/registration-token";
  var description = "Get an organization's actions runner registration token";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function orgListActionsSecrets(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets";
  var description = "List an organization's actions secrets";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteOrgSecret(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Delete a secret in an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateOrgSecret(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in an organization";
  var body = {
    "body": String(body),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "org": org, "organization": organization, "page": page, "secretname": secretname}) });
}

function getOrgVariablesList(body, limit, org, organization, page, secretname) {
  var url = "/orgs/" + org + "/actions/variables";
  var description = "Get an org-level variables list";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

// No verifyOrganizationExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function waitForOrganizationAdded(body, limit, org, organization, page, secretname) {
  waitFor(matchSuccess("Create an organization"));
}

function matchAnyOrganizationAdded() {
  return bp.EventSet("Any Organization Added", function(e) {
      return e.name.startsWith("Done: Create an organization");
  });
}

function deleteOrgVariable(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Delete an org-level variable";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getOrgVariable(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Get an org-level variable";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createOrgVariable(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Create an org-level variable";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "org": org, "variablename": variablename}) });
}

function updateOrgVariable(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Update an org-level variable";
  var body = {
    "body": String(body),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "org": org, "variablename": variablename}) });
}

// No verifyOrgVariablesExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function waitForOrgVariablesAdded(body, org, variablename) {
  waitFor(matchSuccess("Create an org-level variable"));
}

function matchAnyOrgVariablesAdded() {
  return bp.EventSet("Any OrgVariables Added", function(e) {
      return e.name.startsWith("Done: Create an org-level variable");
  });
}

function orgListActivityFeeds(date, id, limit, org, page) {
  var url = "/orgs/" + org + "/activities/feeds";
  var description = "List an organization's activity feeds";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyOrgActivityFeedsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyOrgActivityFeedsAdded() {
  return bp.EventSet("Any OrgActivityFeeds Added", function(e) {
      return e.name.startsWith("Done: Create OrgActivityFeeds");
  });
}

function orgDeleteAvatar(body, org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Delete Avatar";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgUpdateAvatar(body, org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Update Avatar";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "org": org}) });
}

// No verifyOrgAvatarExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function waitForOrgAvatarAdded(body, org) {
  waitFor(matchSuccess("Update Avatar"));
}

function matchAnyOrgAvatarAdded() {
  return bp.EventSet("Any OrgAvatar Added", function(e) {
      return e.name.startsWith("Done: Update Avatar");
  });
}

function organizationListBlocks(id, limit, org, page) {
  var url = "/orgs/" + org + "/blocks";
  var description = "List users blocked by the organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyOrgBlocksExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyOrgBlocksAdded() {
  return bp.EventSet("Any OrgBlocks Added", function(e) {
      return e.name.startsWith("Done: Create OrgBlocks");
  });
}

function organizationUnblockUser(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function organizationCheckUserBlock(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if a user is blocked by the organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function organizationBlockUser(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block a user";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"note": note, "org": org, "username": username}) });
}

// No verifyOrgBlockUserExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function matchAnyOrgBlockUserAdded() {
  return bp.EventSet("Any OrgBlockUser Added", function(e) {
      return e.name.startsWith("Done: Create OrgBlockUser");
  });
}

function issueListLabels(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Get all of a repository's labels";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Create a label";
  var body = {
    "name": String(name),
    "color": String(color),
    "description": String(description),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "id": id, "limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function issueGetLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Get a single label";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Update a label";
  var body = {
    "name": String(name),
    "color": String(color),
    "description": String(description),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "id": id, "limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function issueDeleteLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Delete a label";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

// No verifyLabelsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForLabelsAdded(color, description, id, limit, name, owner, page, repo) {
  waitFor(matchSuccess("Create a label"));
}

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: Create a label");
  });
}

function orgListMembers(limit, org, page, username) {
  var url = "/orgs/" + org + "/members";
  var description = "List an organization's members";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgDeleteMember(limit, org, page, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove a member from an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgIsMember(limit, org, page, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check if a user is a member of an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 303, 404] });
}

// No verifyMembersExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function matchAnyMembersAdded() {
  return bp.EventSet("Any Members Added", function(e) {
      return e.name.startsWith("Done: Create Members");
  });
}

function orgListPublicMembers(limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members";
  var description = "List an organization's public members";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgConcealMember(limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Conceal a user's membership";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function orgIsPublicMember(limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check if a user is a public member of an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function orgPublicizeMember(limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Publicize a user's membership";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "org": org, "page": page, "username": username}) });
}

// No verifyPublicMembersExists generated: Primary Key "org" is not in POST body (Server-Generated ID).
function matchAnyPublicMembersAdded() {
  return bp.EventSet("Any PublicMembers Added", function(e) {
      return e.name.startsWith("Done: Create PublicMembers");
  });
}

function orgListRepos(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos";
  var description = "List an organization's repos";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createOrgRepo(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos";
  var description = "Create a repository in an organization";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page}) });
}

// No verifyReposExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForReposAdded(body, id, limit, org, page) {
  waitFor(matchSuccess("Create a repository in an organization"));
}

function matchAnyReposAdded() {
  return bp.EventSet("Any Repos Added", function(e) {
      return e.name.startsWith("Done: Create a repository in an organization");
  });
}

function orgListTeamRepos(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos";
  var description = "List a team's repos";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgCreateTeam(body, id, limit, org, page, repo) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create a team";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "repo": repo}) });
}

function orgRemoveTeamRepository(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Remove a repository from a team";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function orgListTeamRepo(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "List a particular repo of team";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgAddTeamRepository(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Add a repository to a team";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "repo": repo}) });
}

// No verifyTeamsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForTeamsAdded(body, id, limit, org, page, repo) {
  waitFor(matchSuccess("Create a team"));
}

function matchAnyTeamsAdded() {
  return bp.EventSet("Any Teams Added", function(e) {
      return e.name.startsWith("Done: Create a team");
  });
}

function listPackages(limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner;
  var description = "Gets all packages of an owner";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function getPackage(limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Gets a package";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deletePackage(limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Delete a package";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function listPackageFiles(limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var description = "Gets all files of a package";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyPackagesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyPackagesAdded() {
  return bp.EventSet("Any Packages Added", function(e) {
      return e.name.startsWith("Done: Create Packages");
  });
}

function issueGetIssueReactions(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Get a list reactions of an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function issueGetLabels(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Get an issue's labels";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function moveIssuePin(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position;
  var description = "Moves the Pin to the given Position";
  var body = undefined;
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

function issueDeleteTime(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Delete specific tracked time";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issuePostIssueReaction(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Add a reaction to an issue";
  var body = {
    "content": String(content),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

function issueDeleteStopWatch(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete";
  var description = "Delete an issue's existing stopwatch.";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 409] });
}

function issueStartStopWatch(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start";
  var description = "Start stopwatch on an issue.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

function issueStopStopWatch(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop";
  var description = "Stop an issue's existing stopwatch.";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

// No verifyIssuesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssuesAdded(content, id, index, limit, owner, page, position, repo) {
  waitFor(matchSuccess("Add a reaction to an issue"));
}

function matchAnyIssuesAdded() {
  return bp.EventSet("Any Issues Added", function(e) {
      return e.name.startsWith("Done: Add a reaction to an issue");
  });
}

function repoCreateWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Create a wiki page";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

function repoGetIssueTemplates(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issue_templates";
  var description = "Get available issue templates for a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Get a wiki page";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Edit a wiki page";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

function repoDeleteWikiPage(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Delete a wiki page";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetRunnerRegistrationToken(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token";
  var description = "Get a repository's actions runner registration token";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoListActionsSecrets(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets";
  var description = "List an repo's actions secrets";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetLanguages(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "Get languages and number of bytes of code written";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetLicenses(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/licenses";
  var description = "Get repo licenses";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetRawFileOrLFS(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/media/" + filepath;
  var description = "Get a file or its LFS object from a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoMergeUpstream(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream";
  var description = "Merge a branch from upstream";
  var body = {
    "merge_strategy": String(merge_strategy),
    "head": String(head),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

function repoTransfer(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Transfer a repo ownership";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

function acceptRepoTransfer(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/accept";
  var description = "Accept a repo transfer";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

function rejectRepoTransfer(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/reject";
  var description = "Reject a repo transfer";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "head": head, "limit": limit, "merge_strategy": merge_strategy, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo}) });
}

// No verifyRepositoryExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForRepositoryAdded(body, filepath, head, limit, merge_strategy, owner, page, pageName, ref, repo) {
  waitFor(matchSuccess("Create a wiki page"));
}

function matchAnyRepositoryAdded() {
  return bp.EventSet("Any Repository Added", function(e) {
      return e.name.startsWith("Done: Create a wiki page");
  });
}

function deleteRepoSecret(key, owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Delete a secret in a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateRepoSecret(key, owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in a repository";
  var body = {
    "key": String(key),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "owner": owner, "repo": repo, "secretname": secretname}) });
}

// No verifySecretsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnySecretsAdded() {
  return bp.EventSet("Any Secrets Added", function(e) {
      return e.name.startsWith("Done: Create Secrets");
  });
}

function ListActionTasks(id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/tasks";
  var description = "List a repository's action tasks";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404, 409, 422] });
}

// No verifyTasksExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyTasksAdded() {
  return bp.EventSet("Any Tasks Added", function(e) {
      return e.name.startsWith("Done: Create Tasks");
  });
}

function getRepoVariablesList(key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables";
  var description = "Get repo-level variables list";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function deleteRepoVariable(key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Delete a repo-level variable";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getRepoVariable(key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Get a repo-level variable";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createRepoVariable(key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Create a repo-level variable";
  var body = {
    "key": String(key),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "limit": limit, "owner": owner, "page": page, "repo": repo, "variablename": variablename}) });
}

function updateRepoVariable(key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Update a repo-level variable";
  var body = {
    "key": String(key),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"key": key, "limit": limit, "owner": owner, "page": page, "repo": repo, "variablename": variablename}) });
}

// No verifyVariablesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForVariablesAdded(key, limit, owner, page, repo, variablename) {
  waitFor(matchSuccess("Create a repo-level variable"));
}

function matchAnyVariablesAdded() {
  return bp.EventSet("Any Variables Added", function(e) {
      return e.name.startsWith("Done: Create a repo-level variable");
  });
}

function repoListActivityFeeds(date, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/activities/feeds";
  var description = "List a repository's activity feeds";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyActivityFeedsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyActivityFeedsAdded() {
  return bp.EventSet("Any ActivityFeeds Added", function(e) {
      return e.name.startsWith("Done: Create ActivityFeeds");
  });
}

function repoDeleteBranchProtection(EditBranchProtectionOption, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Delete a specific branch protection for the repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetBranchProtection(EditBranchProtectionOption, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Get a specific branch protection for the repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditBranchProtection(EditBranchProtectionOption, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Edit a branch protections for a repository. Only fields that are set will be changed";
  var body = {
    "body": String(EditBranchProtectionOption),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"EditBranchProtectionOption": EditBranchProtectionOption, "name": name, "owner": owner, "repo": repo}) });
}

// No verifyBranchProtectionsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyBranchProtectionsAdded() {
  return bp.EventSet("Any BranchProtections Added", function(e) {
      return e.name.startsWith("Done: Create BranchProtections");
  });
}

function repoListBranches(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "List a repository's branches";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoCreateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Create a branch";
  var body = {
    "body": String(CreateBranchRepoOption),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"CreateBranchRepoOption": CreateBranchRepoOption, "UpdateBranchRepoOption": UpdateBranchRepoOption, "branch": branch, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeleteBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete a specific branch from a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Retrieve a specific branch from a repository, including its effective branch protection";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoUpdateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update a branch";
  var body = {
    "body": String(UpdateBranchRepoOption),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"CreateBranchRepoOption": CreateBranchRepoOption, "UpdateBranchRepoOption": UpdateBranchRepoOption, "branch": branch, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyBranchesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForBranchesAdded(CreateBranchRepoOption, UpdateBranchRepoOption, branch, limit, owner, page, repo) {
  waitFor(matchSuccess("Create a branch"));
}

function matchAnyBranchesAdded() {
  return bp.EventSet("Any Branches Added", function(e) {
      return e.name.startsWith("Done: Create a branch");
  });
}

function repoListCollaborators(AddCollaboratorOption, collaborator, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators";
  var description = "List a repository's collaborators";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteCollaborator(AddCollaboratorOption, collaborator, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Delete a collaborator from a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetRepoPermissions(AddCollaboratorOption, collaborator, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator + "/permission";
  var description = "Get repository permissions for a user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function repoAddCollaborator(AddCollaboratorOption, collaborator, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Add or Update a collaborator to a repository";
  var body = {
    "body": String(AddCollaboratorOption),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"AddCollaboratorOption": AddCollaboratorOption, "collaborator": collaborator, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyCollaboratorsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForCollaboratorsAdded(AddCollaboratorOption, collaborator, limit, owner, page, repo) {
  waitFor(matchSuccess("Add or Update a collaborator to a repository"));
}

function matchAnyCollaboratorsAdded() {
  return bp.EventSet("Any Collaborators Added", function(e) {
      return e.name.startsWith("Done: Add or Update a collaborator to a repository");
  });
}

function repoGetAllCommits(diffType, files, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits";
  var description = "Get a list of all commits from a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409] });
}

function repoGetSingleCommit(diffType, files, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha;
  var description = "Get a single commit from a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function repoListStatusesByRef(diffType, files, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses";
  var description = "Get a commit's statuses, by branch/tag/commit reference";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function repoGetCommitPullRequest(diffType, files, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + sha + "/pull";
  var description = "Get the merged pull request of the commit";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDownloadCommitDiffOrPatch(diffType, files, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType;
  var description = "Get a commit's diff or patch";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyCommitsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyCommitsAdded() {
  return bp.EventSet("Any Commits Added", function(e) {
      return e.name.startsWith("Done: Create Commits");
  });
}

function repoGetByID(body, id, limit, owner, page, repo) {
  var url = "/repositories/" + id;
  var description = "Get a repository by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentListRepos(body, id, limit, owner, page, repo) {
  var url = "/user/repos";
  var description = "List the repos that the authenticated user owns";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCurrentUserRepo(body, id, limit, owner, page, repo) {
  var url = "/user/repos";
  var description = "Create a repository";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function userCurrentDeleteSubscription(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Unwatch a repo";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentPutSubscription(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Watch a repo";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyRepositoriesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForRepositoriesAdded(body, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Create a repository"));
}

function matchAnyRepositoriesAdded() {
  return bp.EventSet("Any Repositories Added", function(e) {
      return e.name.startsWith("Done: Create a repository");
  });
}

function listForks(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "List a repository's forks";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createFork(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Fork a repository";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyForksExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForForksAdded(body, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Fork a repository"));
}

function matchAnyForksAdded() {
  return bp.EventSet("Any Forks Added", function(e) {
      return e.name.startsWith("Done: Fork a repository");
  });
}

function GetBlob(owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + sha;
  var description = "Gets the blob of a repository.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

// No verifyBlobsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyBlobsAdded() {
  return bp.EventSet("Any Blobs Added", function(e) {
      return e.name.startsWith("Done: Create Blobs");
  });
}

function repoGetNote(files, owner, repo, sha, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/notes/" + sha;
  var description = "Get a note corresponding to a single commit from a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

// No verifyNotesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyNotesAdded() {
  return bp.EventSet("Any Notes Added", function(e) {
      return e.name.startsWith("Done: Create Notes");
  });
}

function repoListAllGitRefs(owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "Get specified ref or filtered repository's refs";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoListGitRefs(owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Get specified ref or filtered repository's refs";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyGitRefsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyGitRefsAdded() {
  return bp.EventSet("Any GitRefs Added", function(e) {
      return e.name.startsWith("Done: Create GitRefs");
  });
}

function GetAnnotatedTag(owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + sha;
  var description = "Gets the tag object of an annotated tag (not lightweight tags)";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

// No verifyGitTagsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyGitTagsAdded() {
  return bp.EventSet("Any GitTags Added", function(e) {
      return e.name.startsWith("Done: Create GitTags");
  });
}

function GetTree(owner, page, per_page, recursive, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + sha;
  var description = "Gets the tree of a repository.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

// No verifyGitTreesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyGitTreesAdded() {
  return bp.EventSet("Any GitTrees Added", function(e) {
      return e.name.startsWith("Done: Create GitTrees");
  });
}

function repoListGitHooks(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git";
  var description = "List the Git hooks in a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Get a Git hook";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Edit a Git hook in a repository";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoDeleteGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Delete a Git hook in a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

// No verifyGitHooksExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyGitHooksAdded() {
  return bp.EventSet("Any GitHooks Added", function(e) {
      return e.name.startsWith("Done: Create GitHooks");
  });
}

function repoTestHook(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id + "/tests";
  var description = "Test a push webhook";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "ref": ref, "repo": repo}) });
}

// No verifyHookTestsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForHookTestsAdded(id, owner, ref, repo) {
  waitFor(matchSuccess("Test a push webhook"));
}

function matchAnyHookTestsAdded() {
  return bp.EventSet("Any HookTests Added", function(e) {
      return e.name.startsWith("Done: Test a push webhook");
  });
}

function repoGetIssueConfig(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issue_config";
  var description = "Returns the issue config for a repo";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyIssueConfigExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyIssueConfigAdded() {
  return bp.EventSet("Any IssueConfig Added", function(e) {
      return e.name.startsWith("Done: Create IssueConfig");
  });
}

function issueListIssues(assigned_by, assignee, assignees, before, body, created_by, description, due_on, id, labels, limit, mentioned_by, milestone, milestones, name, owner, page, q, repo, since, state, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "List a repository's issues";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssue(assigned_by, assignee, assignees, before, body, created_by, description, due_on, id, labels, limit, mentioned_by, milestone, milestones, name, owner, page, q, repo, since, state, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create an issue. If using deadline only the date will be taken into account, and time of day ignored.";
  var body = {
    "title": String(title),
    "body": String(body),
    "assignee": String(assignee),
    "milestone": Number(milestone),
    "labels": String(labels),
    "assignees": String(assignees),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 412, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assigned_by": assigned_by, "assignee": assignee, "assignees": assignees, "before": before, "body": body, "created_by": created_by, "description": description, "due_on": due_on, "id": id, "labels": labels, "limit": limit, "mentioned_by": mentioned_by, "milestone": milestone, "milestones": milestones, "name": name, "owner": owner, "page": page, "q": q, "repo": repo, "since": since, "state": state, "title": title, "type": type}) });
}

function issueGetMilestonesList(assigned_by, assignee, assignees, before, body, created_by, description, due_on, id, labels, limit, mentioned_by, milestone, milestones, name, owner, page, q, repo, since, state, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Get all of a repository's opened milestones";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateMilestone(assigned_by, assignee, assignees, before, body, created_by, description, due_on, id, labels, limit, mentioned_by, milestone, milestones, name, owner, page, q, repo, since, state, title, type) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create a milestone";
  var body = {
    "title": String(title),
    "description": String(description),
    "due_on": String(due_on),
    "state": String(state),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assigned_by": assigned_by, "assignee": assignee, "assignees": assignees, "before": before, "body": body, "created_by": created_by, "description": description, "due_on": due_on, "id": id, "labels": labels, "limit": limit, "mentioned_by": mentioned_by, "milestone": milestone, "milestones": milestones, "name": name, "owner": owner, "page": page, "q": q, "repo": repo, "since": since, "state": state, "title": title, "type": type}) });
}

// No verifyIssueExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForIssueAdded(assigned_by, assignee, assignees, before, body, created_by, description, due_on, id, labels, limit, mentioned_by, milestone, milestones, name, owner, page, q, repo, since, state, title, type) {
  waitFor(matchSuccess("Create an issue. If using deadline only the date will be taken into account, and time of day ignored."));
}

function matchAnyIssueAdded() {
  return bp.EventSet("Any Issue Added", function(e) {
      return e.name.startsWith("Done: Create an issue. If using deadline only the date will be taken into account, and time of day ignored.");
  });
}

function issueGetRepoComments(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments";
  var description = "List all comments in a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueGetComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Get a comment";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function issueEditComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Edit a comment";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since}) });
}

function issueDeleteComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Delete a comment";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// No verifyCommentExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyCommentAdded() {
  return bp.EventSet("Any Comment Added", function(e) {
      return e.name.startsWith("Done: Create Comment");
  });
}

function issueListIssueCommentAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "List comment's attachments";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Create a comment attachment";
  var body = {
    "name": String(name),
    "attachment": String(attachment),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function issueGetIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Get a comment attachment";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Edit a comment attachment";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function issueDeleteIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Delete a comment attachment";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 423] });
}

// No verifyIssueCommentAttachmentsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueCommentAttachmentsAdded(attachment, attachment_id, body, id, name, owner, repo) {
  waitFor(matchSuccess("Create a comment attachment"));
}

function matchAnyIssueCommentAttachmentsAdded() {
  return bp.EventSet("Any IssueCommentAttachments Added", function(e) {
      return e.name.startsWith("Done: Create a comment attachment");
  });
}

function issueGetCommentReactions(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Get a list of reactions from a comment of an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function issuePostCommentReaction(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Add a reaction to a comment of an issue";
  var body = {
    "content": String(content),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "owner": owner, "repo": repo}) });
}

function issueDeleteCommentReaction(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Remove a reaction from a comment of an issue";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

// No verifyIssueCommentReactionsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueCommentReactionsAdded(content, id, owner, repo) {
  waitFor(matchSuccess("Add a reaction to a comment of an issue"));
}

function matchAnyIssueCommentReactionsAdded() {
  return bp.EventSet("Any IssueCommentReactions Added", function(e) {
      return e.name.startsWith("Done: Add a reaction to a comment of an issue");
  });
}

function repoListPinnedIssues(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/pinned";
  var description = "List a repo's pinned issues";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyPinnedIssuesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyPinnedIssuesAdded() {
  return bp.EventSet("Any PinnedIssues Added", function(e) {
      return e.name.startsWith("Done: Create PinnedIssues");
  });
}

function issueListIssueAttachments(attachment, attachment_id, body, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "List issue's attachments";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueAttachment(attachment, attachment_id, body, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Create an issue attachment";
  var body = {
    "name": String(name),
    "attachment": String(attachment),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "index": index, "name": name, "owner": owner, "repo": repo}) });
}

function issueGetIssueAttachment(attachment, attachment_id, body, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Get an issue attachment";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditIssueAttachment(attachment, attachment_id, body, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Edit an issue attachment";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "index": index, "name": name, "owner": owner, "repo": repo}) });
}

function issueDeleteIssueAttachment(attachment, attachment_id, body, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Delete an issue attachment";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 423] });
}

// No verifyIssueAttachmentsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueAttachmentsAdded(attachment, attachment_id, body, index, name, owner, repo) {
  waitFor(matchSuccess("Create an issue attachment"));
}

function matchAnyIssueAttachmentsAdded() {
  return bp.EventSet("Any IssueAttachments Added", function(e) {
      return e.name.startsWith("Done: Create an issue attachment");
  });
}

function issueListBlocks(body, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "List issues that are blocked by this issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueBlocking(body, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Block the issue given in the body by the issue in path";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function issueRemoveIssueBlocking(body, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Unblock the issue given in the body by the issue in path";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyIssueBlocksExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueBlocksAdded(body, index, limit, owner, page, repo) {
  waitFor(matchSuccess("Block the issue given in the body by the issue in path"));
}

function matchAnyIssueBlocksAdded() {
  return bp.EventSet("Any IssueBlocks Added", function(e) {
      return e.name.startsWith("Done: Block the issue given in the body by the issue in path");
  });
}

function issueGetComments(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "List all comments on an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Add a comment to an issue";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "index": index, "owner": owner, "repo": repo, "since": since}) });
}

function issueGetComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Get a specific comment on an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [] });
}

function issueEditCommentDeprecated(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Edit a comment";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "index": index, "owner": owner, "repo": repo, "since": since}) });
}

function issueDeleteCommentDeprecated(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Delete a comment";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// No verifyIssueCommentsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueCommentsAdded(before, body, id, index, owner, repo, since) {
  waitFor(matchSuccess("Add a comment to an issue"));
}

function matchAnyIssueCommentsAdded() {
  return bp.EventSet("Any IssueComments Added", function(e) {
      return e.name.startsWith("Done: Add a comment to an issue");
  });
}

function issueSubscriptions(index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions";
  var description = "Get users who subscribed on an issue.";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCheckSubscription(index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Check if user is subscribed to an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueDeleteSubscription(index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Unsubscribe user from issue";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 304, 404] });
}

function issueAddSubscription(index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Subscribe user to issue";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "user": user}) });
}

// No verifyIssueSubscriptionsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyIssueSubscriptionsAdded() {
  return bp.EventSet("Any IssueSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Create IssueSubscriptions");
  });
}

function issueGetCommentsAndTimeline(before, id, index, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/timeline";
  var description = "List all comments and events on an issue";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyIssueTimelineExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyIssueTimelineAdded() {
  return bp.EventSet("Any IssueTimeline Added", function(e) {
      return e.name.startsWith("Done: Create IssueTimeline");
  });
}

function issueResetTime(before, index, limit, owner, page, repo, since, time, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Reset a tracked time of an issue";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issueTrackedTimes(before, index, limit, owner, page, repo, since, time, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "List an issue's tracked times";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueAddTime(before, index, limit, owner, page, repo, since, time, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Add tracked time to a issue";
  var body = {
    "time": String(time),
    "user": String(user),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since, "time": time, "user": user}) });
}

// No verifyIssueTimesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForIssueTimesAdded(before, index, limit, owner, page, repo, since, time, user) {
  waitFor(matchSuccess("Add tracked time to a issue"));
}

function matchAnyIssueTimesAdded() {
  return bp.EventSet("Any IssueTimes Added", function(e) {
      return e.name.startsWith("Done: Add tracked time to a issue");
  });
}

function repoListKeys(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "List a repository's keys";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Add a key to a repository";
  var body = {
    "title": String(title),
    "key": String(key),
    "read_only": read_only,
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fingerprint": fingerprint, "id": id, "key": key, "key_id": key_id, "limit": limit, "owner": owner, "page": page, "read_only": read_only, "repo": repo, "title": title}) });
}

function repoGetKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Get a repository's key by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Delete a key from a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// No verifyRepositoryKeysExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForRepositoryKeysAdded(fingerprint, id, key, key_id, limit, owner, page, read_only, repo, title) {
  waitFor(matchSuccess("Add a key to a repository"));
}

function matchAnyRepositoryKeysAdded() {
  return bp.EventSet("Any RepositoryKeys Added", function(e) {
      return e.name.startsWith("Done: Add a key to a repository");
  });
}

function issueDeleteMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Delete a milestone";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function issueGetMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Get a milestone";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Update a milestone";
  var body = {
    "title": String(title),
    "state": String(state),
    "description": String(description),
    "due_on": String(due_on),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "due_on": due_on, "id": id, "owner": owner, "repo": repo, "state": state, "title": title}) });
}

// No verifyMilestonesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyMilestonesAdded() {
  return bp.EventSet("Any Milestones Added", function(e) {
      return e.name.startsWith("Done: Create Milestones");
  });
}

function repoMirrorSync(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync";
  var description = "Sync a mirrored repository";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo}) });
}

// No verifyMirrorSyncExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForMirrorSyncAdded(id, owner, repo) {
  waitFor(matchSuccess("Sync a mirrored repository"));
}

function matchAnyMirrorSyncAdded() {
  return bp.EventSet("Any MirrorSync Added", function(e) {
      return e.name.startsWith("Done: Sync a mirrored repository");
  });
}

function repoNewPinAllowed(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/new_pin_allowed";
  var description = "Returns if new Issue Pins are allowed";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyNewPinAllowedExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyNewPinAllowedAdded() {
  return bp.EventSet("Any NewPinAllowed Added", function(e) {
      return e.name.startsWith("Done: Create NewPinAllowed");
  });
}

function repoGetPullRequestFiles(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/files";
  var description = "Get changed files for a pull request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoMergePullRequest(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Merge a pull request";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "skip_to": skip_to, "style": style, "whitespace": whitespace}) });
}

function repoPullRequestIsMerged(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Check if a pull request has been merged";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function repoUpdatePullRequest(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var description = "Merge PR's baseBranch into headBranch";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "skip_to": skip_to, "style": style, "whitespace": whitespace}) });
}

function repoCancelScheduledAutoMerge(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Cancel the scheduled auto merge for the given pull request";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

// No verifyPullRequestsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForPullRequestsAdded(body, index, limit, owner, page, repo, skip_to, style, whitespace) {
  waitFor(matchSuccess("Merge a pull request"));
}

function matchAnyPullRequestsAdded() {
  return bp.EventSet("Any PullRequests Added", function(e) {
      return e.name.startsWith("Done: Merge a pull request");
  });
}

function repoDeletePullReviewRequests(body, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Cancel review requests for a pull request";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function repoCreatePullReviewRequests(body, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Create review requests for a pull request";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "index": index, "owner": owner, "repo": repo}) });
}

// No verifyPullReviewRequestsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForPullReviewRequestsAdded(body, index, owner, repo) {
  waitFor(matchSuccess("Create review requests for a pull request"));
}

function matchAnyPullReviewRequestsAdded() {
  return bp.EventSet("Any PullReviewRequests Added", function(e) {
      return e.name.startsWith("Done: Create review requests for a pull request");
  });
}

function repoListPullReviews(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "List all reviews for a pull request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreatePullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Create a review to a pull request";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeletePullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Delete a specific review from a pull request";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetPullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Get a specific review for a pull request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoSubmitPullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Submit a pending review to a pull request";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyPullReviewsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForPullReviewsAdded(body, id, index, limit, owner, page, repo) {
  waitFor(matchSuccess("Create a review to a pull request"));
}

function matchAnyPullReviewsAdded() {
  return bp.EventSet("Any PullReviews Added", function(e) {
      return e.name.startsWith("Done: Create a review to a pull request");
  });
}

function repoGetPullReviewComments(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/comments";
  var description = "Get a specific review for a pull request";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyPullReviewCommentsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyPullReviewCommentsAdded() {
  return bp.EventSet("Any PullReviewComments Added", function(e) {
      return e.name.startsWith("Done: Create PullReviewComments");
  });
}

function repoDismissPullReview(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var description = "Dismiss a review for a pull request";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "owner": owner, "repo": repo}) });
}

// No verifyPullReviewDismissalsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForPullReviewDismissalsAdded(body, id, index, owner, repo) {
  waitFor(matchSuccess("Dismiss a review for a pull request"));
}

function matchAnyPullReviewDismissalsAdded() {
  return bp.EventSet("Any PullReviewDismissals Added", function(e) {
      return e.name.startsWith("Done: Dismiss a review for a pull request");
  });
}

function repoUnDismissPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals";
  var description = "Cancel to dismiss a review for a pull request";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "index": index, "owner": owner, "repo": repo}) });
}

// No verifyPullReviewUndismissalsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForPullReviewUndismissalsAdded(id, index, owner, repo) {
  waitFor(matchSuccess("Cancel to dismiss a review for a pull request"));
}

function matchAnyPullReviewUndismissalsAdded() {
  return bp.EventSet("Any PullReviewUndismissals Added", function(e) {
      return e.name.startsWith("Done: Cancel to dismiss a review for a pull request");
  });
}

function repoListPushMirrors(limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Get all push mirrors of the repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function repoPushMirrorSync(limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync";
  var description = "Sync all push mirrored repository";
  var body = undefined;
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeletePushMirror(limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Deletes a push mirror from a repository by remoteName";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function repoGetPushMirrorByRemoteName(limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Get push mirror of the repository by remoteName";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

// No verifyPushMirrorsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForPushMirrorsAdded(limit, name, owner, page, repo) {
  waitFor(matchSuccess("Sync all push mirrored repository"));
}

function matchAnyPushMirrorsAdded() {
  return bp.EventSet("Any PushMirrors Added", function(e) {
      return e.name.startsWith("Done: Sync all push mirrored repository");
  });
}

function repoGetRawFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/raw/" + filepath;
  var description = "Get a file from a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyRawFilesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyRawFilesAdded() {
  return bp.EventSet("Any RawFiles Added", function(e) {
      return e.name.startsWith("Done: Create RawFiles");
  });
}

function repoListReleases(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "List a repo's releases";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create a release";
  var body = {
    "body": String(CreateReleaseOption),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"CreateReleaseOption": CreateReleaseOption, "body": body, "draft": draft, "id": id, "limit": limit, "owner": owner, "page": page, "pre_release": pre_release, "repo": repo, "tag": tag}) });
}

function repoGetReleaseByTag(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag;
  var description = "Get a release by tag name";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteReleaseByTag(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag;
  var description = "Delete a release by tag name";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoDeleteRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Delete a release";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Get a release";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Update a release";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"CreateReleaseOption": CreateReleaseOption, "body": body, "draft": draft, "id": id, "limit": limit, "owner": owner, "page": page, "pre_release": pre_release, "repo": repo, "tag": tag}) });
}

// No verifyReleasesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForReleasesAdded(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  waitFor(matchSuccess("Create a release"));
}

function matchAnyReleasesAdded() {
  return bp.EventSet("Any Releases Added", function(e) {
      return e.name.startsWith("Done: Create a release");
  });
}

function repoListReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "List release's attachments";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Create a release attachment";
  var body = {
    "name": String(name),
    "attachment": String(attachment),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function repoDeleteReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Delete a release attachment";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Get a release attachment";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Edit a release attachment";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

// No verifyReleaseAttachmentsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForReleaseAttachmentsAdded(attachment, attachment_id, body, id, name, owner, repo) {
  waitFor(matchSuccess("Create a release attachment"));
}

function matchAnyReleaseAttachmentsAdded() {
  return bp.EventSet("Any ReleaseAttachments Added", function(e) {
      return e.name.startsWith("Done: Create a release attachment");
  });
}

function repoGetReviewers(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/reviewers";
  var description = "Return all users that can be requested to review in this repo";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyReviewersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyReviewersAdded() {
  return bp.EventSet("Any Reviewers Added", function(e) {
      return e.name.startsWith("Done: Create Reviewers");
  });
}

function repoListTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "List tag protections for a repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoCreateTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Create a tag protection for a repository";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoGetTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Get a specific tag protection for the repository";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Edit a tag protection for a repository. Only fields that are set will be changed";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoDeleteTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Delete a specific tag protection for the repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

// No verifyTagProtectionsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForTagProtectionsAdded(body, id, owner, repo) {
  waitFor(matchSuccess("Create a tag protection for a repository"));
}

function matchAnyTagProtectionsAdded() {
  return bp.EventSet("Any TagProtections Added", function(e) {
      return e.name.startsWith("Done: Create a tag protection for a repository");
  });
}

function repoListTags(body, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "List a repository's tags";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateTag(body, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Create a new git tag in a repository";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "limit": limit, "owner": owner, "page": page, "repo": repo, "tag": tag}) });
}

function repoGetTag(body, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Get the tag of a repository by tag name";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteTag(body, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Delete a repository's tag by name";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 405, 409, 422, 423] });
}

// No verifyTagsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForTagsAdded(body, limit, owner, page, repo, tag) {
  waitFor(matchSuccess("Create a new git tag in a repository"));
}

function matchAnyTagsAdded() {
  return bp.EventSet("Any Tags Added", function(e) {
      return e.name.startsWith("Done: Create a new git tag in a repository");
  });
}

function repoTrackedTimes(before, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times";
  var description = "List a repo's tracked times";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function userTrackedTimes(before, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times/" + user;
  var description = "List a user's tracked times in a repo";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

// No verifyTrackedTimesExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function matchAnyTrackedTimesAdded() {
  return bp.EventSet("Any TrackedTimes Added", function(e) {
      return e.name.startsWith("Done: Create TrackedTimes");
  });
}

function topicSearch(limit, owner, page, q, repo, topic) {
  var url = "/topics/search";
  var description = "search topics via keyword";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function repoUpdateTopics(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "Replace list of topics for a repository";
  var body = {
    "topics": [String(topic)],
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "owner": owner, "page": page, "q": q, "repo": repo, "topic": topic}) });
}

function repoDeleteTopic(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Delete a topic from a repository";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoAddTopic(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Add a topic to a repository";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "owner": owner, "page": page, "q": q, "repo": repo, "topic": topic}) });
}

// No verifyTopicsExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForTopicsAdded(limit, owner, page, q, repo, topic) {
  waitFor(matchSuccess("Add a topic to a repository"));
}

function matchAnyTopicsAdded() {
  return bp.EventSet("Any Topics Added", function(e) {
      return e.name.startsWith("Done: Add a topic to a repository");
  });
}

function repoGetWikiPages(id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/pages";
  var description = "Get all wiki pages";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyWikiPagesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyWikiPagesAdded() {
  return bp.EventSet("Any WikiPages Added", function(e) {
      return e.name.startsWith("Done: Create WikiPages");
  });
}

function repoGetWikiPageRevisions(id, owner, page, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName;
  var description = "Get revisions of a wiki page";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyWikiPageRevisionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyWikiPageRevisionsAdded() {
  return bp.EventSet("Any WikiPageRevisions Added", function(e) {
      return e.name.startsWith("Done: Create WikiPageRevisions");
  });
}

function getGeneralAPISettings(id) {
  var url = "/settings/api";
  var description = "Get instance's global settings for api";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getGeneralUISettings(id) {
  var url = "/settings/ui";
  var description = "Get instance's global settings for ui";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifySettingsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnySettingsAdded() {
  return bp.EventSet("Any Settings Added", function(e) {
      return e.name.startsWith("Done: Create Settings");
  });
}

function getVersion(id) {
  var url = "/version";
  var description = "Returns the version of the Gitea application";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyMiscellaneousExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyMiscellaneousAdded() {
  return bp.EventSet("Any Miscellaneous Added", function(e) {
      return e.name.startsWith("Done: Create Miscellaneous");
  });
}

function userGet(date, limit, only_performed_by, page, secretValue, secretname, username) {
  var url = "/users/" + username;
  var description = "Get a user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteUserSecret(date, limit, only_performed_by, page, secretValue, secretname, username) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Delete a secret in a user scope";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateUserSecret(date, limit, only_performed_by, page, secretValue, secretname, username) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in a user scope";
  var body = {
    "secretValue": String(secretValue),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"date": date, "limit": limit, "only_performed_by": only_performed_by, "page": page, "secretValue": secretValue, "secretname": secretname, "username": username}) });
}

function userListActivityFeeds(date, limit, only_performed_by, page, secretValue, secretname, username) {
  var url = "/users/" + username + "/activities/feeds";
  var description = "List a user's activity feeds";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyUserExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function matchAnyUserAdded() {
  return bp.EventSet("Any User Added", function(e) {
      return e.name.startsWith("Done: Create User");
  });
}

function deleteUserVariable(body, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Delete a user-level variable which is created by current doer";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getUserVariable(body, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Get a user-level variable which is created by current doer";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createUserVariable(body, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Create a user-level variable";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "variablename": variablename}) });
}

function updateUserVariable(body, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Update a user-level variable which is created by current doer";
  var body = {
    "body": String(body),
  };
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "variablename": variablename}) });
}

// No verifyUserVariablesExists generated: Primary Key "variablename" is not in POST body (Server-Generated ID).
function waitForUserVariablesAdded(body, variablename) {
  waitFor(matchSuccess("Create a user-level variable"));
}

function matchAnyUserVariablesAdded() {
  return bp.EventSet("Any UserVariables Added", function(e) {
      return e.name.startsWith("Done: Create a user-level variable");
  });
}

function userGetOauth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2";
  var description = "List the authenticated user's oauth2 applications";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCreateOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2";
  var description = "creates a new OAuth2 application";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

function userDeleteOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "delete an OAuth2 Application";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userGetOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "get an OAuth2 Application";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userUpdateOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "update an OAuth2 Application, this includes regenerating the client secret";
  var body = {
    "body": String(body),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

// No verifyOAuth2ApplicationsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForOAuth2ApplicationsAdded(body, id, limit, page) {
  waitFor(matchSuccess("creates a new OAuth2 application"));
}

function matchAnyOAuth2ApplicationsAdded() {
  return bp.EventSet("Any OAuth2Applications Added", function(e) {
      return e.name.startsWith("Done: creates a new OAuth2 application");
  });
}

function userDeleteAvatar(body, id) {
  var url = "/user/avatar";
  var description = "Delete Avatar";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function userUpdateAvatar(body, id) {
  var url = "/user/avatar";
  var description = "Update Avatar";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// No verifyUserAvatarExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserAvatarAdded(body, id) {
  waitFor(matchSuccess("Update Avatar"));
}

function matchAnyUserAvatarAdded() {
  return bp.EventSet("Any UserAvatar Added", function(e) {
      return e.name.startsWith("Done: Update Avatar");
  });
}

function userListBlocks(limit, note, page, username) {
  var url = "/user/blocks";
  var description = "List users blocked by the authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userUnblockUser(limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function userCheckUserBlock(limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Check if a user is blocked by the authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userBlockUser(limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Block a user";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "note": note, "page": page, "username": username}) });
}

// No verifyUserBlocksExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function matchAnyUserBlocksAdded() {
  return bp.EventSet("Any UserBlocks Added", function(e) {
      return e.name.startsWith("Done: Create UserBlocks");
  });
}

function userDeleteEmail(email, id) {
  var url = "/user/emails";
  var description = "Delete email addresses";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userListEmails(email, id) {
  var url = "/user/emails";
  var description = "List the authenticated user's email addresses";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userAddEmail(email, id) {
  var url = "/user/emails";
  var description = "Add email addresses";
  var body = {
    "email": String(email),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"email": email, "id": id}) });
}

// No verifyUserEmailsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForUserEmailsAdded(email, id) {
  waitFor(matchSuccess("Add email addresses"));
}

function matchAnyUserEmailsAdded() {
  return bp.EventSet("Any UserEmails Added", function(e) {
      return e.name.startsWith("Done: Add email addresses");
  });
}

function userCurrentListFollowers(id, limit, page) {
  var url = "/user/followers";
  var description = "List the authenticated user's followers";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUserFollowersExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUserFollowersAdded() {
  return bp.EventSet("Any UserFollowers Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowers");
  });
}

function userCurrentListFollowing(id, limit, page) {
  var url = "/user/following";
  var description = "List the users that the authenticated user is following";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUserFollowingExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUserFollowingAdded() {
  return bp.EventSet("Any UserFollowing Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowing");
  });
}

function userCurrentDeleteFollow(username) {
  var url = "/user/following/" + username;
  var description = "Unfollow a user";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Check whether a user is followed by the authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutFollow(username) {
  var url = "/user/following/" + username;
  var description = "Follow a user";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"username": username}) });
}

// No verifyUserFollowingSpecificExists generated: Primary Key "username" is not in POST body (Server-Generated ID).
function matchAnyUserFollowingSpecificAdded() {
  return bp.EventSet("Any UserFollowingSpecific Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowingSpecific");
  });
}

function userCurrentGetGPGKey(id, key, limit, page, read_only) {
  var url = "/user/gpg_keys/" + id;
  var description = "Get a GPG key";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentListGPGKeys(id, key, limit, page, read_only) {
  var url = "/user/gpg_keys";
  var description = "List the authenticated user's GPG keys";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentPostGPGKey(id, key, limit, page, read_only) {
  var url = "/user/gpg_keys";
  var description = "Create a GPG key";
  var body = {
    "key": String(key),
    "read_only": read_only,
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "limit": limit, "page": page, "read_only": read_only}) });
}

function userCurrentDeleteGPGKey(id, key, limit, page, read_only) {
  var url = "/user/gpg_keys/" + id;
  var description = "Remove a GPG key";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// No verifyGPGKeysExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForGPGKeysAdded(id, key, limit, page, read_only) {
  waitFor(matchSuccess("Create a GPG key"));
}

function matchAnyGPGKeysAdded() {
  return bp.EventSet("Any GPGKeys Added", function(e) {
      return e.name.startsWith("Done: Create a GPG key");
  });
}

function getVerificationToken(id) {
  var url = "/user/gpg_key_token";
  var description = "Get a Token to verify";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyGPGKeyTokenExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyGPGKeyTokenAdded() {
  return bp.EventSet("Any GPGKeyToken Added", function(e) {
      return e.name.startsWith("Done: Create GPGKeyToken");
  });
}

function userVerifyGPGKey(id, key_id, token) {
  var url = "/user/gpg_key_verify";
  var description = "Verify a GPG key";
  var body = {
    "key_id": String(key_id),
    "token": String(token),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key_id": key_id, "token": token}) });
}

// No verifyGPGKeyVerificationExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForGPGKeyVerificationAdded(id, key_id, token) {
  waitFor(matchSuccess("Verify a GPG key"));
}

function matchAnyGPGKeyVerificationAdded() {
  return bp.EventSet("Any GPGKeyVerification Added", function(e) {
      return e.name.startsWith("Done: Verify a GPG key");
  });
}

function userCurrentListKeys(body, fingerprint, id, limit, page) {
  var url = "/user/keys";
  var description = "List the authenticated user's public keys";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentPostKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys";
  var description = "Create a public key";
  var body = {
    "body": String(body),
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "fingerprint": fingerprint, "id": id, "limit": limit, "page": page}) });
}

function userCurrentDeleteKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Delete a public key";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function userCurrentGetKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Get a public key";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// No verifyKeysExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function waitForKeysAdded(body, fingerprint, id, limit, page) {
  waitFor(matchSuccess("Create a public key"));
}

function matchAnyKeysAdded() {
  return bp.EventSet("Any Keys Added", function(e) {
      return e.name.startsWith("Done: Create a public key");
  });
}

function getUserSettings(UserSettingsOptions, id) {
  var url = "/user/settings";
  var description = "Get user settings";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateUserSettings(UserSettingsOptions, id) {
  var url = "/user/settings";
  var description = "Update user settings";
  var body = {
    "body": String(UserSettingsOptions),
  };
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"UserSettingsOptions": UserSettingsOptions, "id": id}) });
}

// No verifyUserSettingsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUserSettingsAdded() {
  return bp.EventSet("Any UserSettings Added", function(e) {
      return e.name.startsWith("Done: Create UserSettings");
  });
}

function userCurrentListStarred(limit, owner, page, repo) {
  var url = "/user/starred";
  var description = "The repos that the authenticated user has starred";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentDeleteStar(limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar the given repo";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckStarring(limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Whether the authenticated is starring the repo";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutStar(limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star the given repo";
  var body = undefined;
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// No verifyUserStarredExists generated: Primary Key "owner" is not in POST body (Server-Generated ID).
function waitForUserStarredAdded(limit, owner, page, repo) {
  waitFor(matchSuccess("Star the given repo"));
}

function matchAnyUserStarredAdded() {
  return bp.EventSet("Any UserStarred Added", function(e) {
      return e.name.startsWith("Done: Star the given repo");
  });
}

function userGetStopWatches(id, limit, page) {
  var url = "/user/stopwatches";
  var description = "Get list of all existing stopwatches";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUserStopwatchesExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUserStopwatchesAdded() {
  return bp.EventSet("Any UserStopwatches Added", function(e) {
      return e.name.startsWith("Done: Create UserStopwatches");
  });
}

function userCurrentListSubscriptions(id, limit, page) {
  var url = "/user/subscriptions";
  var description = "List repositories watched by the authenticated user";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// No verifyUserSubscriptionsExists generated: Primary Key "id" is not in POST body (Server-Generated ID).
function matchAnyUserSubscriptionsAdded() {
  return bp.EventSet("Any UserSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Create UserSubscriptions");
  });
}
