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
function activitypubPerson(id, user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Returns the Person actor for a user " + user_id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function activitypubPersonInbox(id, user_id) {
  var url = "/activitypub/user-id/" + user_id + "/inbox";
  var description = "Send to the inbox " + user_id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "user-id": user_id}) });
}

function tryToAddExistingActivityPub(id, user_id) {
  var url = "/activitypub/user-id/" + user_id + "/inbox";
  var description = "Try Add Existing ActivityPub " + user_id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyActivityPubExists(id, user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Verify ActivityPub " + user_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActivityPub found");
}

function verifyActivityPubDoesNotExist(id, user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Verify ActivityPub " + user_id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActivityPub not found");
}

function waitForActivityPubAdded(id, user_id) {
  waitFor(matchSuccess("Send to the inbox"));
}

function matchAnyActivityPubAdded() {
  return bp.EventSet("Any ActivityPub Added", function(e) {
      return e.name.startsWith("Done: Send to the inbox");
  });
}

function adminCronList(id, limit, page, task) {
  var url = "/admin/cron";
  var description = "List cron tasks " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function adminCronRun(id, limit, page, task) {
  var url = "/admin/cron/" + task;
  var description = "Run cron task " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "page": page, "task": task}) });
}

// verifyAdminCronExists skipped: No GET /{id} operation detected.
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
  var description = "List all emails " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// verifyAdminEmailsExists skipped: No GET /{id} operation detected.
function matchAnyAdminEmailsAdded() {
  return bp.EventSet("Any AdminEmails Added", function(e) {
      return e.name.startsWith("Done: Create AdminEmails");
  });
}

function adminSearchEmails(id, limit, page, q) {
  var url = "/admin/emails/search";
  var description = "Search all emails " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

// verifyEmailsExists skipped: No GET /{id} operation detected.
function matchAnyEmailsAdded() {
  return bp.EventSet("Any Emails Added", function(e) {
      return e.name.startsWith("Done: Create Emails");
  });
}

function userListHooks(body, id, limit, page) {
  var url = "/user/hooks";
  var description = "List the authenticated user's webhooks " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCreateHook(body, id, limit, page) {
  var url = "/user/hooks";
  var description = "Create a hook " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

function userGetHook(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Get a hook " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userEditHook(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Update a hook " + id;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

function userDeleteHook(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Delete a hook " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function tryToAddExistingHooks(body, id, limit, page) {
  var url = "/user/hooks";
  var description = "Try Add Existing Hooks " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyHooksExists(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Verify Hooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Hooks found");
}

function verifyHooksDoesNotExist(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Verify Hooks " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Hooks not found");
}

function tryToDeleteANonExistingHooks(body, id, limit, page) {
  var url = "/user/hooks/" + id;
  var description = "Verify negative delete for Hooks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedHooks(body, id, limit, page) {
  return bp.EventSet("Delete Hooks", function(e) {
      return e.name === "Done: " + "Delete a hook";
  });
}

function waitForHooksAdded(body, id, limit, page) {
  waitFor(matchSuccess("Create a hook"));
}

function matchAnyHooksAdded() {
  return bp.EventSet("Any Hooks Added", function(e) {
      return e.name.startsWith("Done: Create a hook");
  });
}

function orgListUserOrgs(id, limit, org, page, username) {
  var url = "/users/" + username + "/orgs";
  var description = "List a user's organizations " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgGetUserPermissions(id, limit, org, page, username) {
  var url = "/users/" + username + "/orgs/" + org + "/permissions";
  var description = "Get user permissions in organization " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function verifyOrganizationsExists(id, limit, org, page, username) {
  var url = "/users/" + username + "/orgs/" + org + "/permissions";
  var description = "Verify Organizations " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organizations found");
}

function verifyOrganizationsDoesNotExist(id, limit, org, page, username) {
  var url = "/users/" + username + "/orgs/" + org + "/permissions";
  var description = "Verify Organizations " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organizations not found");
}

function matchAnyOrganizationsAdded() {
  return bp.EventSet("Any Organizations Added", function(e) {
      return e.name.startsWith("Done: Create Organizations");
  });
}

function adminGetRunnerRegistrationToken(id) {
  var url = "/admin/runners/registration-token";
  var description = "Get an global actions runner registration token " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyRunnersExists skipped: No GET /{id} operation detected.
function matchAnyRunnersAdded() {
  return bp.EventSet("Any Runners Added", function(e) {
      return e.name.startsWith("Done: Create Runners");
  });
}

function adminUnadoptedList(id, limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted";
  var description = "List unadopted repositories " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function adminDeleteUnadoptedRepository(id, limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Delete unadopted files " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403] });
}

function adminAdoptRepository(id, limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Adopt unadopted files as a repository " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "owner": owner, "page": page, "pattern": pattern, "repo": repo}) });
}

// verifyUnadoptedRepositoriesExists skipped: No GET /{id} operation detected.
function waitForUnadoptedRepositoriesAdded(id, limit, owner, page, pattern, repo) {
  waitFor(matchSuccess("Adopt unadopted files as a repository"));
}

function matchAnyUnadoptedRepositoriesAdded() {
  return bp.EventSet("Any UnadoptedRepositories Added", function(e) {
      return e.name.startsWith("Done: Adopt unadopted files as a repository");
  });
}

function userListSubscriptions(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/subscriptions";
  var description = "List the repositories watched by a user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCreateToken(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Create an access token " + username;
  var body = {
    "id": String(id),
    "name": String(name),
    "scopes": [String(scopes)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "name": name, "page": page, "scopes": scopes, "token": token, "username": username}) });
}

function userDeleteAccessToken(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Delete an access token " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function adminEditUser(body, id, limit, name, page, scopes, token, username) {
  var url = "/admin/users/" + username;
  var description = "Edit an existing user " + username;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "name": name, "page": page, "scopes": scopes, "token": token, "username": username}) });
}

function userGetTokens(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "List the authenticated user's access tokens " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403] });
}

function tryToAddExistingUsers(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Try Add Existing Users " + username;
  var body = {
    "id": String(id),
    "name": String(name),
    "scopes": [String(scopes)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUsersExists(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify Users " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Users found");
}

function verifyUsersDoesNotExist(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify Users " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Users not found");
}

function tryToDeleteANonExistingUsers(body, id, limit, name, page, scopes, token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Verify negative delete for Users";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUsers(body, id, limit, name, page, scopes, token, username) {
  return bp.EventSet("Delete Users", function(e) {
      return e.name === "Done: " + "Delete an access token";
  });
}

function waitForUsersAdded(body, id, limit, name, page, scopes, token, username) {
  waitFor(matchSuccess("Create an access token"));
}

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Create an access token");
  });
}

function adminListUserBadges(body, id, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "List a user's badges " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function adminAddUserBadges(body, id, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Add a badge to a user " + username;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "username": username}) });
}

function adminDeleteUserBadges(body, id, username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Remove a badge from a user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 422] });
}

// verifyUserBadgesExists skipped: No GET /{id} operation detected.
function waitForUserBadgesAdded(body, id, username) {
  waitFor(matchSuccess("Add a badge to a user"));
}

function matchAnyUserBadgesAdded() {
  return bp.EventSet("Any UserBadges Added", function(e) {
      return e.name.startsWith("Done: Add a badge to a user");
  });
}

function adminCreatePublicKey(id, key, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Add a public key on behalf of a user " + username;
  var body = {
    "id": String(id),
    "key": String(key),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "username": username}) });
}

function adminDeleteUserPublicKey(id, key, username) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Delete a user's public key " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// verifyUserKeysExists skipped: No GET /{id} operation detected.
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
  var description = "Create an organization " + id;
  var body = {
    "id": String(id),
    "organization": String(organization),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "organization": organization, "username": username}) });
}

// verifyUserOrganizationsExists skipped: No GET /{id} operation detected.
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
  var description = "Rename a user " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "username": username}) });
}

// verifyUserRenameExists skipped: No GET /{id} operation detected.
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
  var description = "Create a repository on behalf of a user " + id;
  var body = {
    "id": String(id),
    "repository": String(repository),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "repository": repository, "username": username}) });
}

// verifyUserRepositoriesExists skipped: No GET /{id} operation detected.
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
  var description = "Returns a list of all gitignore templates " + name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getGitignoreTemplateInfo(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Returns information about a gitignore template " + name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyGitignoreTemplatesExists(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitignoreTemplates found");
}

function verifyGitignoreTemplatesDoesNotExist(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitignoreTemplates not found");
}

function matchAnyGitignoreTemplatesAdded() {
  return bp.EventSet("Any GitignoreTemplates Added", function(e) {
      return e.name.startsWith("Done: Create GitignoreTemplates");
  });
}

function listLabelTemplates(name) {
  var url = "/label/templates";
  var description = "Returns a list of all label templates " + name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getLabelTemplateInfo(name) {
  var url = "/label/templates/" + name;
  var description = "Returns all labels in a template " + name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyLabelTemplatesExists(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("LabelTemplates found");
}

function verifyLabelTemplatesDoesNotExist(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LabelTemplates not found");
}

function matchAnyLabelTemplatesAdded() {
  return bp.EventSet("Any LabelTemplates Added", function(e) {
      return e.name.startsWith("Done: Create LabelTemplates");
  });
}

function listLicenseTemplates(id) {
  var url = "/licenses";
  var description = "Returns a list of all license templates " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyLicenseTemplatesExists skipped: No GET /{id} operation detected.
function matchAnyLicenseTemplatesAdded() {
  return bp.EventSet("Any LicenseTemplates Added", function(e) {
      return e.name.startsWith("Done: Create LicenseTemplates");
  });
}

function getLicenseTemplateInfo(id, name) {
  var url = "/licenses/" + name;
  var description = "Returns information about a license template " + name;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyLicensesExists(id, name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Licenses found");
}

function verifyLicensesDoesNotExist(id, name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Licenses not found");
}

function matchAnyLicensesAdded() {
  return bp.EventSet("Any Licenses Added", function(e) {
      return e.name.startsWith("Done: Create Licenses");
  });
}

function renderMarkdown(body, id) {
  var url = "/markdown";
  var description = "Render a markdown document as HTML " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

function renderMarkdownRaw(body, id) {
  var url = "/markdown/raw";
  var description = "Render raw markdown as HTML " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// verifyMarkdownExists skipped: No GET /{id} operation detected.
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
  var description = "Render a markup document as HTML " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// verifyMarkupExists skipped: No GET /{id} operation detected.
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
  var description = "Returns the nodeinfo of the Gitea application " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyNodeInfoExists skipped: No GET /{id} operation detected.
function matchAnyNodeInfoAdded() {
  return bp.EventSet("Any NodeInfo Added", function(e) {
      return e.name.startsWith("Done: Create NodeInfo");
  });
}

function notifyGetRepoList(all, before, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "List users's notification threads on a specific repo " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function notifyReadRepoList(all, before, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark notification threads as read, pinned or unread on a specific repo " + owner;
  var body = {
    "all": String(all),
    "last_read_at": String(last_read_at),
    "status-types": [String(status_types)],
    "to-status": String(to_status),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [205], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"all": all, "before": before, "last_read_at": last_read_at, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since, "status-types": status_types, "subject-type": subject_type, "to-status": to_status}) });
}

function notifyNewAvailable(all, before, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  var url = "/notifications/new";
  var description = "Check if unread notifications exist " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyNotificationsExists skipped: No GET /{id} operation detected.
function matchAnyNotificationsAdded() {
  return bp.EventSet("Any Notifications Added", function(e) {
      return e.name.startsWith("Done: Create Notifications");
  });
}

function orgGetAll(body, id, limit, org, page, secretname) {
  var url = "/orgs";
  var description = "Get list of organizations";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createOrgRepoDeprecated(body, id, limit, org, page, secretname) {
  var url = "/org/" + org + "/repos";
  var description = "Create a repository in an organization";
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "secretname": secretname}) });
}

function orgDelete(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Delete an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Get an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgEdit(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Edit an organization";
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "secretname": secretname}) });
}

function orgGetRunnerRegistrationToken(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org + "/actions/runners/registration-token";
  var description = "Get an organization's actions runner registration token";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function orgListActionsSecrets(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets";
  var description = "List an organization's actions secrets";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteOrgSecret(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Delete a secret in an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateOrgSecret(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in an organization";
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "secretname": secretname}) });
}

function getOrgVariablesList(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org + "/actions/variables";
  var description = "Get an org-level variables list";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function tryToAddExistingOrganization(body, id, limit, org, page, secretname) {
  var url = "/org/" + org + "/repos";
  var description = "Try Add Existing Organization " + org;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrganizationExists(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organization found");
}

function verifyOrganizationDoesNotExist(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organization not found");
}

function tryToDeleteANonExistingOrganization(body, id, limit, org, page, secretname) {
  var url = "/orgs/" + org;
  var description = "Verify negative delete for Organization";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganization(body, id, limit, org, page, secretname) {
  return bp.EventSet("Delete Organization", function(e) {
      return e.name === "Done: " + "Delete an organization";
  });
}

function waitForOrganizationAdded(body, id, limit, org, page, secretname) {
  waitFor(matchSuccess("Create a repository in an organization"));
}

function matchAnyOrganizationAdded() {
  return bp.EventSet("Any Organization Added", function(e) {
      return e.name.startsWith("Done: Create a repository in an organization");
  });
}

function deleteOrgVariable(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Delete an org-level variable";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getOrgVariable(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Get an org-level variable";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createOrgVariable(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Create an org-level variable";
  var body = {
    "id": String(id),
    "option": String(option),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "option": option, "org": org, "variablename": variablename}) });
}

function updateOrgVariable(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Update an org-level variable";
  var body = {
    "id": String(id),
    "option": String(option),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "option": option, "org": org, "variablename": variablename}) });
}

function tryToAddExistingOrgVariables(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Try Add Existing OrgVariables " + org;
  var body = {
    "id": String(id),
    "option": String(option),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOrgVariablesExists(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify OrgVariables " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgVariables found");
}

function verifyOrgVariablesDoesNotExist(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify OrgVariables " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgVariables not found");
}

function tryToDeleteANonExistingOrgVariables(id, option, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify negative delete for OrgVariables";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrgVariables(id, option, org, variablename) {
  return bp.EventSet("Delete OrgVariables", function(e) {
      return e.name === "Done: " + "Delete an org-level variable";
  });
}

function waitForOrgVariablesAdded(id, option, org, variablename) {
  waitFor(matchSuccess("Create an org-level variable"));
}

function matchAnyOrgVariablesAdded() {
  return bp.EventSet("Any OrgVariables Added", function(e) {
      return e.name.startsWith("Done: Create an org-level variable");
  });
}

function orgListActivityFeeds(date, id, limit, org, page) {
  var url = "/orgs/" + org + "/activities/feeds";
  var description = "List an organization's activity feeds " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyOrgActivityFeedsExists skipped: No GET /{id} operation detected.
function matchAnyOrgActivityFeedsAdded() {
  return bp.EventSet("Any OrgActivityFeeds Added", function(e) {
      return e.name.startsWith("Done: Create OrgActivityFeeds");
  });
}

function orgDeleteAvatar(avatarOption, id, org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Delete Avatar " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgUpdateAvatar(avatarOption, id, org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Update Avatar " + org;
  var body = {
    "avatarOption": String(avatarOption),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"avatarOption": avatarOption, "id": id, "org": org}) });
}

// verifyOrgAvatarExists skipped: No GET /{id} operation detected.
function waitForOrgAvatarAdded(avatarOption, id, org) {
  waitFor(matchSuccess("Update Avatar"));
}

function matchAnyOrgAvatarAdded() {
  return bp.EventSet("Any OrgAvatar Added", function(e) {
      return e.name.startsWith("Done: Update Avatar");
  });
}

function organizationListBlocks(id, limit, org, page) {
  var url = "/orgs/" + org + "/blocks";
  var description = "List users blocked by the organization " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyOrgBlocksExists skipped: No GET /{id} operation detected.
function matchAnyOrgBlocksAdded() {
  return bp.EventSet("Any OrgBlocks Added", function(e) {
      return e.name.startsWith("Done: Create OrgBlocks");
  });
}

function organizationUnblockUser(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock a user " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function organizationCheckUserBlock(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if a user is blocked by the organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function organizationBlockUser(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block a user " + org;
  var body = {
    "id": String(id),
    "note": String(note),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "note": note, "org": org, "username": username}) });
}

function verifyOrgBlockUserExists(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify OrgBlockUser " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgBlockUser found");
}

function verifyOrgBlockUserDoesNotExist(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify OrgBlockUser " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgBlockUser not found");
}

function tryToDeleteANonExistingOrgBlockUser(id, note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify negative delete for OrgBlockUser";
  svc.delete(url, { expectedResponseCodes: [404, 422], parameters: { description: description } });
}

function matchDeletedOrgBlockUser(id, note, org, username) {
  return bp.EventSet("Delete OrgBlockUser", function(e) {
      return e.name === "Done: " + "Unblock a user";
  });
}

function matchAnyOrgBlockUserAdded() {
  return bp.EventSet("Any OrgBlockUser Added", function(e) {
      return e.name.startsWith("Done: Create OrgBlockUser");
  });
}

function issueListLabels(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Get all of a repository's labels " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Create a label " + owner;
  var body = {
    "color": String(color),
    "description": String(description),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "id": id, "limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function issueGetLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Get a single label " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Update a label " + owner;
  var body = {
    "color": String(color),
    "description": String(description),
    "name": String(name),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"color": color, "description": description, "id": id, "limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function issueDeleteLabel(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Delete a label " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingLabels(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels";
  var description = "Try Add Existing Labels " + owner;
  var body = {
    "color": String(color),
    "description": String(description),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyLabelsExists(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Verify Labels " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Labels found");
}

function verifyLabelsDoesNotExist(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Verify Labels " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Labels not found");
}

function tryToDeleteANonExistingLabels(color, description, id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id;
  var description = "Verify negative delete for Labels";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedLabels(color, description, id, limit, name, owner, page, repo) {
  return bp.EventSet("Delete Labels", function(e) {
      return e.name === "Done: " + "Delete a label";
  });
}

function waitForLabelsAdded(color, description, id, limit, name, owner, page, repo) {
  waitFor(matchSuccess("Create a label"));
}

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: Create a label");
  });
}

function orgListMembers(id, limit, org, page) {
  var url = "/orgs/" + org + "/members";
  var description = "List an organization's members " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyMembersExists skipped: No GET /{id} operation detected.
function matchAnyMembersAdded() {
  return bp.EventSet("Any Members Added", function(e) {
      return e.name.startsWith("Done: Create Members");
  });
}

function orgDeleteMember(id, org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove a member from an organization";
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function orgIsMember(id, org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check if a user is a member of an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 303, 404] });
}

function verifyOrganizationMembersExists(id, org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify OrganizationMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationMembers found");
}

function verifyOrganizationMembersDoesNotExist(id, org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify OrganizationMembers " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationMembers not found");
}

function tryToDeleteANonExistingOrganizationMembers(id, org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify negative delete for OrganizationMembers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizationMembers(id, org, username) {
  return bp.EventSet("Delete OrganizationMembers", function(e) {
      return e.name === "Done: " + "Remove a member from an organization";
  });
}

function matchAnyOrganizationMembersAdded() {
  return bp.EventSet("Any OrganizationMembers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationMembers");
  });
}

function orgListPublicMembers(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members";
  var description = "List an organization's public members";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgConcealMember(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Conceal a user's membership " + org;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function orgIsPublicMember(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check if a user is a public member of an organization";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function orgPublicizeMember(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Publicize a user's membership " + org;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "org": org, "page": page, "username": username}) });
}

function verifyOrganizationPublicMembersExists(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify OrganizationPublicMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationPublicMembers found");
}

function verifyOrganizationPublicMembersDoesNotExist(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify OrganizationPublicMembers " + org + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationPublicMembers not found");
}

function tryToDeleteANonExistingOrganizationPublicMembers(id, limit, org, page, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify negative delete for OrganizationPublicMembers";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOrganizationPublicMembers(id, limit, org, page, username) {
  return bp.EventSet("Delete OrganizationPublicMembers", function(e) {
      return e.name === "Done: " + "Conceal a user's membership";
  });
}

function matchAnyOrganizationPublicMembersAdded() {
  return bp.EventSet("Any OrganizationPublicMembers Added", function(e) {
      return e.name.startsWith("Done: Create OrganizationPublicMembers");
  });
}

function orgListRepos(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos";
  var description = "List an organization's repos " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createOrgRepo(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos";
  var description = "Create a repository in an organization " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page}) });
}

// verifyOrganizationReposExists skipped: No GET /{id} operation detected.
function waitForOrganizationReposAdded(body, id, limit, org, page) {
  waitFor(matchSuccess("Create a repository in an organization"));
}

function matchAnyOrganizationReposAdded() {
  return bp.EventSet("Any OrganizationRepos Added", function(e) {
      return e.name.startsWith("Done: Create a repository in an organization");
  });
}

function orgListTeams(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/teams";
  var description = "List an organization's teams " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgCreateTeam(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create a team " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page}) });
}

// verifyOrganizationTeamsExists skipped: No GET /{id} operation detected.
function waitForOrganizationTeamsAdded(body, id, limit, org, page) {
  waitFor(matchSuccess("Create a team"));
}

function matchAnyOrganizationTeamsAdded() {
  return bp.EventSet("Any OrganizationTeams Added", function(e) {
      return e.name.startsWith("Done: Create a team");
  });
}

function orgListTeamRepos(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos";
  var description = "List a team's repos " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgRemoveTeamRepository(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Remove a repository from a team " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function orgListTeamRepo(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "List a particular repo of team " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function orgEditTeam(body, id, limit, org, page, repo) {
  var url = "/teams/" + id;
  var description = "Edit a team " + id;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "repo": repo}) });
}

function orgAddTeamRepository(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Add a repository to a team " + id;
  var body = {};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "org": org, "page": page, "repo": repo}) });
}

function tryToAddExistingTeams(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Try Add Existing Teams " + id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTeamsExists(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify Teams " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Teams found");
}

function verifyTeamsDoesNotExist(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify Teams " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Teams not found");
}

function tryToDeleteANonExistingTeams(body, id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify negative delete for Teams";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTeams(body, id, limit, org, page, repo) {
  return bp.EventSet("Delete Teams", function(e) {
      return e.name === "Done: " + "Remove a repository from a team";
  });
}

function waitForTeamsAdded(body, id, limit, org, page, repo) {
  waitFor(matchSuccess("Add a repository to a team"));
}

function matchAnyTeamsAdded() {
  return bp.EventSet("Any Teams Added", function(e) {
      return e.name.startsWith("Done: Add a repository to a team");
  });
}

function listPackages(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner;
  var description = "Gets all packages of an owner";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deletePackage(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Delete a package " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function getPackage(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Gets a package " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function listPackageFiles(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var description = "Gets all files of a package " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyPackagesExists(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Verify Packages " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Packages found");
}

function verifyPackagesDoesNotExist(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Verify Packages " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Packages not found");
}

function tryToDeleteANonExistingPackages(id, limit, name, owner, page, q, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Verify negative delete for Packages";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPackages(id, limit, name, owner, page, q, type, version) {
  return bp.EventSet("Delete Packages", function(e) {
      return e.name === "Done: " + "Delete a package";
  });
}

function matchAnyPackagesAdded() {
  return bp.EventSet("Any Packages Added", function(e) {
      return e.name.startsWith("Done: Create Packages");
  });
}

function issueGetIssueReactions(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Get a list reactions of an issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function issueGetLabels(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Get an issue's labels " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueDeleteTime(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Delete specific tracked time " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function moveIssuePin(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position;
  var description = "Moves the Pin to the given Position " + owner;
  var body = {
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

function issueStopStopWatch(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop";
  var description = "Stop an issue's existing stopwatch. " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "index": index, "limit": limit, "owner": owner, "page": page, "position": position, "repo": repo}) });
}

function tryToAddExistingIssues(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop";
  var description = "Try Add Existing Issues " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssuesExists(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Verify Issues " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Issues found");
}

function verifyIssuesDoesNotExist(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Verify Issues " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Issues not found");
}

function tryToDeleteANonExistingIssues(id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Verify negative delete for Issues";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssues(id, index, limit, owner, page, position, repo) {
  return bp.EventSet("Delete Issues", function(e) {
      return e.name === "Done: " + "Delete specific tracked time";
  });
}

function waitForIssuesAdded(id, index, limit, owner, page, position, repo) {
  waitFor(matchSuccess("Stop an issue's existing stopwatch."));
}

function matchAnyIssuesAdded() {
  return bp.EventSet("Any Issues Added", function(e) {
      return e.name.startsWith("Done: Stop an issue's existing stopwatch.");
  });
}

function repoTransfer(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Transfer a repo ownership";
  var body = {
    "id": String(id),
    "new_owner": String(new_owner),
    "team_ids": [String(team_ids)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoListStargazers(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/stargazers";
  var description = "List a repo's stargazers " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteAvatar(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/avatar";
  var description = "Delete avatar " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function repoSigningKey(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/signing-key.gpg";
  var description = "Get signing-key.gpg for given repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoEdit(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Edit a repository's properties. Only fields that are set will be changed. " + owner;
  var body = {
    "editOptions": String(editOptions),
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoGetRunnerRegistrationToken(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token";
  var description = "Get a repository's actions runner registration token " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoListActionsSecrets(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets";
  var description = "List an repo's actions secrets " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetLanguages(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "Get languages and number of bytes of code written " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetLicenses(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/licenses";
  var description = "Get repo licenses " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetRawFileOrLFS(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/media/" + filepath;
  var description = "Get a file or it's LFS object from a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoMergeUpstream(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream";
  var description = "Merge a branch from upstream " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoListStatuses(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Get a commit's statuses " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function repoCreateStatus(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Create a commit status " + owner;
  var body = {
    "context": String(context),
    "description": String(description),
    "id": String(id),
    "state": String(state),
    "target_url": String(target_url),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoListSubscribers(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/subscribers";
  var description = "List a repo's watchers " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentDeleteSubscription(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Unwatch a repo " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckSubscription(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Check if the current user is watching a repo " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentPutSubscription(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Watch a repo " + owner;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function acceptRepoTransfer(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/accept";
  var description = "Accept a repo transfer " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function rejectRepoTransfer(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/reject";
  var description = "Reject a repo transfer " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoCreateWikiPage(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Create a wiki page " + owner;
  var body = {
    "content": String(content),
    "id": String(id),
    "title": String(title),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function repoDeleteWikiPage(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Delete a wiki page " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetWikiPage(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Get a wiki page " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditWikiPage(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Edit a wiki page " + owner;
  var body = {
    "content": String(content),
    "id": String(id),
    "title": String(title),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "content": content, "context": context, "description": description, "editOptions": editOptions, "filepath": filepath, "id": id, "limit": limit, "new_owner": new_owner, "owner": owner, "page": page, "pageName": pageName, "ref": ref, "repo": repo, "sha": sha, "sort": sort, "state": state, "target_url": target_url, "team_ids": team_ids, "title": title}) });
}

function tryToAddExistingRepository(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Try Add Existing Repository " + owner;
  var body = {
    "id": String(id),
    "new_owner": String(new_owner),
    "team_ids": [String(team_ids)],
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryExists(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/signing-key.gpg";
  var description = "Verify Repository " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repository found");
}

function verifyRepositoryDoesNotExist(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/signing-key.gpg";
  var description = "Verify Repository " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repository not found");
}

function tryToDeleteANonExistingRepository(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  var url = "/repos/" + owner + "/" + repo + "/avatar";
  var description = "Verify negative delete for Repository";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepository(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  return bp.EventSet("Delete Repository", function(e) {
      return e.name === "Done: " + "Delete avatar";
  });
}

function waitForRepositoryAdded(body, content, context, description, editOptions, filepath, id, limit, new_owner, owner, page, pageName, ref, repo, sha, sort, state, target_url, team_ids, title) {
  waitFor(matchSuccess("Transfer a repo ownership"));
}

function matchAnyRepositoryAdded() {
  return bp.EventSet("Any Repository Added", function(e) {
      return e.name.startsWith("Done: Transfer a repo ownership");
  });
}

function deleteRepoSecret(id, key, owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Delete a secret in a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateRepoSecret(id, key, owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in a repository " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "owner": owner, "repo": repo, "secretname": secretname}) });
}

// verifySecretsExists skipped: No GET /{id} operation detected.
function matchAnySecretsAdded() {
  return bp.EventSet("Any Secrets Added", function(e) {
      return e.name.startsWith("Done: Create Secrets");
  });
}

function ListActionTasks(id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/actions/tasks";
  var description = "List a repository's action tasks " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404, 409, 422] });
}

// verifyTasksExists skipped: No GET /{id} operation detected.
function matchAnyTasksAdded() {
  return bp.EventSet("Any Tasks Added", function(e) {
      return e.name.startsWith("Done: Create Tasks");
  });
}

function getRepoVariablesList(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables";
  var description = "Get repo-level variables list " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function deleteRepoVariable(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Delete a repo-level variable " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getRepoVariable(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Get a repo-level variable " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createRepoVariable(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Create a repo-level variable " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "limit": limit, "owner": owner, "page": page, "repo": repo, "variablename": variablename}) });
}

function updateRepoVariable(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Update a repo-level variable " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "key": key, "limit": limit, "owner": owner, "page": page, "repo": repo, "variablename": variablename}) });
}

function tryToAddExistingVariables(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Try Add Existing Variables " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyVariablesExists(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify Variables " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Variables found");
}

function verifyVariablesDoesNotExist(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify Variables " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Variables not found");
}

function tryToDeleteANonExistingVariables(id, key, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify negative delete for Variables";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedVariables(id, key, limit, owner, page, repo, variablename) {
  return bp.EventSet("Delete Variables", function(e) {
      return e.name === "Done: " + "Delete a repo-level variable";
  });
}

function waitForVariablesAdded(id, key, limit, owner, page, repo, variablename) {
  waitFor(matchSuccess("Create a repo-level variable"));
}

function matchAnyVariablesAdded() {
  return bp.EventSet("Any Variables Added", function(e) {
      return e.name.startsWith("Done: Create a repo-level variable");
  });
}

function repoListActivityFeeds(date, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/activities/feeds";
  var description = "List a repository's activity feeds " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyActivityFeedsExists skipped: No GET /{id} operation detected.
function matchAnyActivityFeedsAdded() {
  return bp.EventSet("Any ActivityFeeds Added", function(e) {
      return e.name.startsWith("Done: Create ActivityFeeds");
  });
}

function repoDeleteBranchProtection(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Delete a specific branch protection for the repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetBranchProtection(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Get a specific branch protection for the repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditBranchProtection(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Edit a branch protections for a repository. Only fields that are set will be changed " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function verifyBranchProtectionsExists(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Verify BranchProtections " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtections found");
}

function verifyBranchProtectionsDoesNotExist(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Verify BranchProtections " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtections not found");
}

function tryToDeleteANonExistingBranchProtections(body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Verify negative delete for BranchProtections";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranchProtections(body, id, name, owner, repo) {
  return bp.EventSet("Delete BranchProtections", function(e) {
      return e.name === "Done: " + "Delete a specific branch protection for the repository";
  });
}

function matchAnyBranchProtectionsAdded() {
  return bp.EventSet("Any BranchProtections Added", function(e) {
      return e.name.startsWith("Done: Create BranchProtections");
  });
}

function repoListBranches(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "List a repository's branches " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoCreateBranch(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Create a branch " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "branch": branch, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeleteBranch(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete a specific branch from a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetBranch(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Retrieve a specific branch from a repository, including its effective branch protection " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoUpdateBranch(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update a branch " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "branch": branch, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function tryToAddExistingBranches(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Try Add Existing Branches " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyBranchesExists(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify Branches " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Branches found");
}

function verifyBranchesDoesNotExist(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify Branches " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Branches not found");
}

function tryToDeleteANonExistingBranches(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify negative delete for Branches";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedBranches(body, branch, id, limit, owner, page, repo) {
  return bp.EventSet("Delete Branches", function(e) {
      return e.name === "Done: " + "Delete a specific branch from a repository";
  });
}

function waitForBranchesAdded(body, branch, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Create a branch"));
}

function matchAnyBranchesAdded() {
  return bp.EventSet("Any Branches Added", function(e) {
      return e.name.startsWith("Done: Create a branch");
  });
}

function repoListCollaborators(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators";
  var description = "List a repository's collaborators " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteCollaborator(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Delete a collaborator from a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetRepoPermissions(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator + "/permission";
  var description = "Get repository permissions for a user " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function repoAddCollaborator(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Add or Update a collaborator to a repository " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "collaborator": collaborator, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function tryToAddExistingCollaborators(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Try Add Existing Collaborators " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyCollaboratorsExists(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator + "/permission";
  var description = "Verify Collaborators " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Collaborators found");
}

function verifyCollaboratorsDoesNotExist(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator + "/permission";
  var description = "Verify Collaborators " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Collaborators not found");
}

function tryToDeleteANonExistingCollaborators(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify negative delete for Collaborators";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedCollaborators(body, collaborator, id, limit, owner, page, repo) {
  return bp.EventSet("Delete Collaborators", function(e) {
      return e.name === "Done: " + "Delete a collaborator from a repository";
  });
}

function waitForCollaboratorsAdded(body, collaborator, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Add or Update a collaborator to a repository"));
}

function matchAnyCollaboratorsAdded() {
  return bp.EventSet("Any Collaborators Added", function(e) {
      return e.name.startsWith("Done: Add or Update a collaborator to a repository");
  });
}

function repoGetAllCommits(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits";
  var description = "Get a list of all commits from a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 409] });
}

function repoGetSingleCommit(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha;
  var description = "Get a single commit from a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function repoListStatusesByRef(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses";
  var description = "Get a commit's statuses, by branch/tag/commit reference " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function repoGetCommitPullRequest(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + sha + "/pull";
  var description = "Get the merged pull request of the commit " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDownloadCommitDiffOrPatch(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType;
  var description = "Get a commit's diff or patch " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyCommitsExists(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha;
  var description = "Verify Commits " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Commits found");
}

function verifyCommitsDoesNotExist(diffType, files, id, limit, not, owner, page, path, ref, repo, sha, sort, stat, state, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha;
  var description = "Verify Commits " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Commits not found");
}

function matchAnyCommitsAdded() {
  return bp.EventSet("Any Commits Added", function(e) {
      return e.name.startsWith("Done: Create Commits");
  });
}

function repoGetByID(body, filepath, id, limit, owner, page, repo) {
  var url = "/repositories/" + id;
  var description = "Get a repository by id";
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentListRepos(body, filepath, id, limit, owner, page, repo) {
  var url = "/user/repos";
  var description = "List the repos that the authenticated user owns " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function createCurrentUserRepo(body, filepath, id, limit, owner, page, repo) {
  var url = "/user/repos";
  var description = "Create a repository " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeleteFile(body, filepath, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Delete a file in a repository " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404, 423] });
}

function repoUpdateFile(body, filepath, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Update a file in a repository " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "filepath": filepath, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function tryToAddExistingRepositories(body, filepath, id, limit, owner, page, repo) {
  var url = "/user/repos";
  var description = "Try Add Existing Repositories " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoriesExists(body, filepath, id, limit, owner, page, repo) {
  var url = "/repositories/" + id;
  var description = "Verify Repositories " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repositories found");
}

function verifyRepositoriesDoesNotExist(body, filepath, id, limit, owner, page, repo) {
  var url = "/repositories/" + id;
  var description = "Verify Repositories " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repositories not found");
}

function tryToDeleteANonExistingRepositories(body, filepath, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Verify negative delete for Repositories";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepositories(body, filepath, id, limit, owner, page, repo) {
  return bp.EventSet("Delete Repositories", function(e) {
      return e.name === "Done: " + "Delete a file in a repository";
  });
}

function waitForRepositoriesAdded(body, filepath, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Create a repository"));
}

function matchAnyRepositoriesAdded() {
  return bp.EventSet("Any Repositories Added", function(e) {
      return e.name.startsWith("Done: Create a repository");
  });
}

function listForks(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "List a repository's forks " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function createFork(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Fork a repository " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

// verifyForksExists skipped: No GET /{id} operation detected.
function waitForForksAdded(body, id, limit, owner, page, repo) {
  waitFor(matchSuccess("Fork a repository"));
}

function matchAnyForksAdded() {
  return bp.EventSet("Any Forks Added", function(e) {
      return e.name.startsWith("Done: Fork a repository");
  });
}

function GetBlob(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + sha;
  var description = "Gets the blob of a repository. " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function verifyBlobsExists(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + sha;
  var description = "Verify Blobs " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Blobs found");
}

function verifyBlobsDoesNotExist(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + sha;
  var description = "Verify Blobs " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Blobs not found");
}

function matchAnyBlobsAdded() {
  return bp.EventSet("Any Blobs Added", function(e) {
      return e.name.startsWith("Done: Create Blobs");
  });
}

function repoGetNote(files, id, owner, repo, sha, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/notes/" + sha;
  var description = "Get a note corresponding to a single commit from a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404, 422] });
}

function verifyNotesExists(files, id, owner, repo, sha, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/notes/" + sha;
  var description = "Verify Notes " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notes found");
}

function verifyNotesDoesNotExist(files, id, owner, repo, sha, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/notes/" + sha;
  var description = "Verify Notes " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notes not found");
}

function matchAnyNotesAdded() {
  return bp.EventSet("Any Notes Added", function(e) {
      return e.name.startsWith("Done: Create Notes");
  });
}

function repoListAllGitRefs(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "Get specified ref or filtered repository's refs " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoListGitRefs(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Get specified ref or filtered repository's refs " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyGitRefsExists(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Verify GitRefs " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitRefs found");
}

function verifyGitRefsDoesNotExist(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Verify GitRefs " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitRefs not found");
}

function matchAnyGitRefsAdded() {
  return bp.EventSet("Any GitRefs Added", function(e) {
      return e.name.startsWith("Done: Create GitRefs");
  });
}

function GetAnnotatedTag(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + sha;
  var description = "Gets the tag object of an annotated tag (not lightweight tags) " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function verifyGitTagsExists(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + sha;
  var description = "Verify GitTags " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitTags found");
}

function verifyGitTagsDoesNotExist(id, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + sha;
  var description = "Verify GitTags " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTags not found");
}

function matchAnyGitTagsAdded() {
  return bp.EventSet("Any GitTags Added", function(e) {
      return e.name.startsWith("Done: Create GitTags");
  });
}

function GetTree(id, owner, page, per_page, recursive, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + sha;
  var description = "Gets the tree of a repository. " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function verifyGitTreesExists(id, owner, page, per_page, recursive, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + sha;
  var description = "Verify GitTrees " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitTrees found");
}

function verifyGitTreesDoesNotExist(id, owner, page, per_page, recursive, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + sha;
  var description = "Verify GitTrees " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTrees not found");
}

function matchAnyGitTreesAdded() {
  return bp.EventSet("Any GitTrees Added", function(e) {
      return e.name.startsWith("Done: Create GitTrees");
  });
}

function repoListGitHooks(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git";
  var description = "List the Git hooks in a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoGetGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Get a Git hook " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Edit a Git hook in a repository " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoDeleteGitHook(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Delete a Git hook in a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function verifyGitHooksExists(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Verify GitHooks " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitHooks found");
}

function verifyGitHooksDoesNotExist(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Verify GitHooks " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitHooks not found");
}

function tryToDeleteANonExistingGitHooks(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Verify negative delete for GitHooks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGitHooks(body, id, owner, repo) {
  return bp.EventSet("Delete GitHooks", function(e) {
      return e.name === "Done: " + "Delete a Git hook in a repository";
  });
}

function matchAnyGitHooksAdded() {
  return bp.EventSet("Any GitHooks Added", function(e) {
      return e.name.startsWith("Done: Create GitHooks");
  });
}

function repoGetIssueConfig(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issue_config";
  var description = "Returns the issue config for a repo " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyIssueConfigExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issue_config";
  var description = "Verify IssueConfig " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueConfig found");
}

function verifyIssueConfigDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issue_config";
  var description = "Verify IssueConfig " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueConfig not found");
}

function matchAnyIssueConfigAdded() {
  return bp.EventSet("Any IssueConfig Added", function(e) {
      return e.name.startsWith("Done: Create IssueConfig");
  });
}

function issueListIssues(assigned_by, before, body, created_by, id, labels, limit, mentioned_by, milestones, name, owner, page, q, repo, since, state, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "List a repository's issues " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssue(assigned_by, before, body, created_by, id, labels, limit, mentioned_by, milestones, name, owner, page, q, repo, since, state, type) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create an issue. If using deadline only the date will be taken into account, and time of day ignored. " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 412, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assigned_by": assigned_by, "before": before, "body": body, "created_by": created_by, "id": id, "labels": labels, "limit": limit, "mentioned_by": mentioned_by, "milestones": milestones, "name": name, "owner": owner, "page": page, "q": q, "repo": repo, "since": since, "state": state, "type": type}) });
}

function issueGetMilestonesList(assigned_by, before, body, created_by, id, labels, limit, mentioned_by, milestones, name, owner, page, q, repo, since, state, type) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Get all of a repository's opened milestones " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateMilestone(assigned_by, before, body, created_by, id, labels, limit, mentioned_by, milestones, name, owner, page, q, repo, since, state, type) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create a milestone " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"assigned_by": assigned_by, "before": before, "body": body, "created_by": created_by, "id": id, "labels": labels, "limit": limit, "mentioned_by": mentioned_by, "milestones": milestones, "name": name, "owner": owner, "page": page, "q": q, "repo": repo, "since": since, "state": state, "type": type}) });
}

// verifyIssueExists skipped: No GET /{id} operation detected.
function waitForIssueAdded(assigned_by, before, body, created_by, id, labels, limit, mentioned_by, milestones, name, owner, page, q, repo, since, state, type) {
  waitFor(matchSuccess("Create an issue. If using deadline only the date will be taken into account, and time of day ignored."));
}

function matchAnyIssueAdded() {
  return bp.EventSet("Any Issue Added", function(e) {
      return e.name.startsWith("Done: Create an issue. If using deadline only the date will be taken into account, and time of day ignored.");
  });
}

function issueGetRepoComments(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments";
  var description = "List all comments in a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueGetComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Get a comment " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function issueDeleteComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Delete a comment " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function issueEditComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Edit a comment " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since}) });
}

function verifyCommentExists(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Verify Comment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Comment found");
}

function verifyCommentDoesNotExist(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Verify Comment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Comment not found");
}

function tryToDeleteANonExistingComment(before, body, id, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Verify negative delete for Comment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedComment(before, body, id, limit, owner, page, repo, since) {
  return bp.EventSet("Delete Comment", function(e) {
      return e.name === "Done: " + "Delete a comment";
  });
}

function matchAnyCommentAdded() {
  return bp.EventSet("Any Comment Added", function(e) {
      return e.name.startsWith("Done: Create Comment");
  });
}

function issueListIssueCommentAttachments(attachment, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "List comment's attachments " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueCommentAttachment(attachment, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Create a comment attachment " + id;
  var body = {
    "attachment": String(attachment),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 409, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

// verifyIssueCommentAttachmentsExists skipped: No GET /{id} operation detected.
function waitForIssueCommentAttachmentsAdded(attachment, id, name, owner, repo) {
  waitFor(matchSuccess("Create a comment attachment"));
}

function matchAnyIssueCommentAttachmentsAdded() {
  return bp.EventSet("Any IssueCommentAttachments Added", function(e) {
      return e.name.startsWith("Done: Create a comment attachment");
  });
}

function issueGetIssueCommentAttachment(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Get a comment attachment " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueDeleteIssueCommentAttachment(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Delete a comment attachment " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 423] });
}

function issueEditIssueCommentAttachment(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Edit a comment attachment " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment_id": attachment_id, "body": body, "id": id, "owner": owner, "repo": repo}) });
}

function verifyIssueCommentAttachmentExists(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Verify IssueCommentAttachment " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueCommentAttachment found");
}

function verifyIssueCommentAttachmentDoesNotExist(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Verify IssueCommentAttachment " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueCommentAttachment not found");
}

function tryToDeleteANonExistingIssueCommentAttachment(attachment_id, body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Verify negative delete for IssueCommentAttachment";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueCommentAttachment(attachment_id, body, id, owner, repo) {
  return bp.EventSet("Delete IssueCommentAttachment", function(e) {
      return e.name === "Done: " + "Delete a comment attachment";
  });
}

function matchAnyIssueCommentAttachmentAdded() {
  return bp.EventSet("Any IssueCommentAttachment Added", function(e) {
      return e.name.startsWith("Done: Create IssueCommentAttachment");
  });
}

function issueGetCommentReactions(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Get a list of reactions from a comment of an issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function issuePostCommentReaction(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Add a reaction to a comment of an issue " + owner;
  var body = {
    "content": String(content),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"content": content, "id": id, "owner": owner, "repo": repo}) });
}

function issueDeleteCommentReaction(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Remove a reaction from a comment of an issue " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

// verifyIssueCommentReactionsExists skipped: No GET /{id} operation detected.
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
  var description = "List a repo's pinned issues " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyPinnedIssuesExists skipped: No GET /{id} operation detected.
function matchAnyPinnedIssuesAdded() {
  return bp.EventSet("Any PinnedIssues Added", function(e) {
      return e.name.startsWith("Done: Create PinnedIssues");
  });
}

function issueListIssueAttachments(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "List issue's attachments " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Create an issue attachment " + owner;
  var body = {
    "attachment": String(attachment),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 409, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "index": index, "name": name, "owner": owner, "repo": repo}) });
}

function issueGetIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Get an issue attachment " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Edit an issue attachment " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "index": index, "name": name, "owner": owner, "repo": repo}) });
}

function issueDeleteIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Delete an issue attachment " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 423] });
}

function tryToAddExistingIssueAttachments(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Try Add Existing IssueAttachments " + owner;
  var body = {
    "attachment": String(attachment),
    "id": String(id),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueAttachmentsExists(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Verify IssueAttachments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueAttachments found");
}

function verifyIssueAttachmentsDoesNotExist(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Verify IssueAttachments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueAttachments not found");
}

function tryToDeleteANonExistingIssueAttachments(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Verify negative delete for IssueAttachments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueAttachments(attachment, attachment_id, body, id, index, name, owner, repo) {
  return bp.EventSet("Delete IssueAttachments", function(e) {
      return e.name === "Done: " + "Delete an issue attachment";
  });
}

function waitForIssueAttachmentsAdded(attachment, attachment_id, body, id, index, name, owner, repo) {
  waitFor(matchSuccess("Create an issue attachment"));
}

function matchAnyIssueAttachmentsAdded() {
  return bp.EventSet("Any IssueAttachments Added", function(e) {
      return e.name.startsWith("Done: Create an issue attachment");
  });
}

function issueListBlocks(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "List issues that are blocked by this issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueBlocking(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Block the issue given in the body by the issue in path " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function issueRemoveIssueBlocking(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Unblock the issue given in the body by the issue in path " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

// verifyIssueBlocksExists skipped: No GET /{id} operation detected.
function waitForIssueBlocksAdded(body, id, index, limit, owner, page, repo) {
  waitFor(matchSuccess("Block the issue given in the body by the issue in path"));
}

function matchAnyIssueBlocksAdded() {
  return bp.EventSet("Any IssueBlocks Added", function(e) {
      return e.name.startsWith("Done: Block the issue given in the body by the issue in path");
  });
}

function issueGetComments(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "List all comments on an issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCreateComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Add a comment to an issue " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "index": index, "owner": owner, "repo": repo, "since": since}) });
}

function issueGetComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Get a specific comment on an issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [] });
}

function issueEditCommentDeprecated(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Edit a comment " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "index": index, "owner": owner, "repo": repo, "since": since}) });
}

function issueDeleteCommentDeprecated(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Delete a comment " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function tryToAddExistingIssueComments(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Try Add Existing IssueComments " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyIssueCommentsExists(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Verify IssueComments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueComments found");
}

function verifyIssueCommentsDoesNotExist(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Verify IssueComments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueComments not found");
}

function tryToDeleteANonExistingIssueComments(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Verify negative delete for IssueComments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueComments(before, body, id, index, owner, repo, since) {
  return bp.EventSet("Delete IssueComments", function(e) {
      return e.name === "Done: " + "Delete a comment";
  });
}

function waitForIssueCommentsAdded(before, body, id, index, owner, repo, since) {
  waitFor(matchSuccess("Add a comment to an issue"));
}

function matchAnyIssueCommentsAdded() {
  return bp.EventSet("Any IssueComments Added", function(e) {
      return e.name.startsWith("Done: Add a comment to an issue");
  });
}

function issueSubscriptions(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions";
  var description = "Get users who subscribed on an issue. " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueCheckSubscription(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Check if user is subscribed to an issue " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueDeleteSubscription(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Unsubscribe user from issue " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 304, 404] });
}

function issueAddSubscription(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Subscribe user to issue " + owner;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "user": user}) });
}

function verifyIssueSubscriptionsExists(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Verify IssueSubscriptions " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueSubscriptions found");
}

function verifyIssueSubscriptionsDoesNotExist(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Verify IssueSubscriptions " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueSubscriptions not found");
}

function tryToDeleteANonExistingIssueSubscriptions(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Verify negative delete for IssueSubscriptions";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedIssueSubscriptions(id, index, limit, owner, page, repo, user) {
  return bp.EventSet("Delete IssueSubscriptions", function(e) {
      return e.name === "Done: " + "Unsubscribe user from issue";
  });
}

function matchAnyIssueSubscriptionsAdded() {
  return bp.EventSet("Any IssueSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Create IssueSubscriptions");
  });
}

function issueGetCommentsAndTimeline(before, id, index, limit, owner, page, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/timeline";
  var description = "List all comments and events on an issue " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyIssueTimelineExists skipped: No GET /{id} operation detected.
function matchAnyIssueTimelineAdded() {
  return bp.EventSet("Any IssueTimeline Added", function(e) {
      return e.name.startsWith("Done: Create IssueTimeline");
  });
}

function issueResetTime(before, body, id, index, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Reset a tracked time of an issue " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issueTrackedTimes(before, body, id, index, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "List an issue's tracked times " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueAddTime(before, body, id, index, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Add tracked time to a issue " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"before": before, "body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "since": since, "user": user}) });
}

// verifyIssueTimesExists skipped: No GET /{id} operation detected.
function waitForIssueTimesAdded(before, body, id, index, limit, owner, page, repo, since, user) {
  waitFor(matchSuccess("Add tracked time to a issue"));
}

function matchAnyIssueTimesAdded() {
  return bp.EventSet("Any IssueTimes Added", function(e) {
      return e.name.startsWith("Done: Add tracked time to a issue");
  });
}

function repoListKeys(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "List a repository's keys " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Add a key to a repository " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
    "read_only": read_only,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"fingerprint": fingerprint, "id": id, "key": key, "key_id": key_id, "limit": limit, "owner": owner, "page": page, "read_only": read_only, "repo": repo}) });
}

function repoDeleteKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Delete a key from a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetKey(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Get a repository's key by id " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingRepositoryKeys(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Try Add Existing RepositoryKeys " + owner;
  var body = {
    "id": String(id),
    "key": String(key),
    "read_only": read_only,
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyRepositoryKeysExists(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Verify RepositoryKeys " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryKeys found");
}

function verifyRepositoryKeysDoesNotExist(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Verify RepositoryKeys " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryKeys not found");
}

function tryToDeleteANonExistingRepositoryKeys(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Verify negative delete for RepositoryKeys";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedRepositoryKeys(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  return bp.EventSet("Delete RepositoryKeys", function(e) {
      return e.name === "Done: " + "Delete a key from a repository";
  });
}

function waitForRepositoryKeysAdded(fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  waitFor(matchSuccess("Add a key to a repository"));
}

function matchAnyRepositoryKeysAdded() {
  return bp.EventSet("Any RepositoryKeys Added", function(e) {
      return e.name.startsWith("Done: Add a key to a repository");
  });
}

function issueDeleteMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Delete a milestone " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function issueGetMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Get a milestone " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function issueEditMilestone(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Update a milestone " + owner;
  var body = {
    "description": String(description),
    "due_on": String(due_on),
    "state": String(state),
    "title": String(title),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"description": description, "due_on": due_on, "id": id, "owner": owner, "repo": repo, "state": state, "title": title}) });
}

function verifyMilestonesExists(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Verify Milestones " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Milestones found");
}

function verifyMilestonesDoesNotExist(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Verify Milestones " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Milestones not found");
}

function tryToDeleteANonExistingMilestones(description, due_on, id, owner, repo, state, title) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Verify negative delete for Milestones";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedMilestones(description, due_on, id, owner, repo, state, title) {
  return bp.EventSet("Delete Milestones", function(e) {
      return e.name === "Done: " + "Delete a milestone";
  });
}

function matchAnyMilestonesAdded() {
  return bp.EventSet("Any Milestones Added", function(e) {
      return e.name.startsWith("Done: Create Milestones");
  });
}

function repoMirrorSync(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync";
  var description = "Sync a mirrored repository " + id;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "owner": owner, "repo": repo}) });
}

// verifyMirrorSyncExists skipped: No GET /{id} operation detected.
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
  var description = "Returns if new Issue Pins are allowed " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyNewPinAllowedExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/new_pin_allowed";
  var description = "Verify NewPinAllowed " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("NewPinAllowed found");
}

function verifyNewPinAllowedDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/new_pin_allowed";
  var description = "Verify NewPinAllowed " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("NewPinAllowed not found");
}

function matchAnyNewPinAllowedAdded() {
  return bp.EventSet("Any NewPinAllowed Added", function(e) {
      return e.name.startsWith("Done: Create NewPinAllowed");
  });
}

function repoGetPullRequestFiles(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/files";
  var description = "Get changed files for a pull request " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoUpdatePullRequest(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var description = "Merge PR's baseBranch into headBranch " + owner;
  var body = {
    "id": String(id),
    "style": String(style),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "skip-to": skip_to, "style": style, "whitespace": whitespace}) });
}

function repoPullRequestIsMerged(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Check if a pull request has been merged " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function repoEditPullRequest(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored. " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 412, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo, "skip-to": skip_to, "style": style, "whitespace": whitespace}) });
}

function repoCancelScheduledAutoMerge(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Cancel the scheduled auto merge for the given pull request " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function tryToAddExistingPullRequests(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var description = "Try Add Existing PullRequests " + owner;
  var body = {
    "id": String(id),
    "style": String(style),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullRequestsExists(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Verify PullRequests " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequests found");
}

function verifyPullRequestsDoesNotExist(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Verify PullRequests " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequests not found");
}

function tryToDeleteANonExistingPullRequests(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Verify negative delete for PullRequests";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullRequests(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  return bp.EventSet("Delete PullRequests", function(e) {
      return e.name === "Done: " + "Cancel the scheduled auto merge for the given pull request";
  });
}

function waitForPullRequestsAdded(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  waitFor(matchSuccess("Merge PR's baseBranch into headBranch"));
}

function matchAnyPullRequestsAdded() {
  return bp.EventSet("Any PullRequests Added", function(e) {
      return e.name.startsWith("Done: Merge PR's baseBranch into headBranch");
  });
}

function repoDeletePullReviewRequests(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Cancel review requests for a pull request " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function repoCreatePullReviewRequests(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Create review requests for a pull request " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "owner": owner, "repo": repo}) });
}

// verifyPullReviewRequestsExists skipped: No GET /{id} operation detected.
function waitForPullReviewRequestsAdded(body, id, index, owner, repo) {
  waitFor(matchSuccess("Create review requests for a pull request"));
}

function matchAnyPullReviewRequestsAdded() {
  return bp.EventSet("Any PullReviewRequests Added", function(e) {
      return e.name.startsWith("Done: Create review requests for a pull request");
  });
}

function repoListPullReviews(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "List all reviews for a pull request " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreatePullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Create a review to a pull request " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeletePullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Delete a specific review from a pull request " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetPullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Get a specific review for a pull request " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoSubmitPullReview(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Submit a pending review to a pull request " + owner;
  var body = {
    "body": String(body),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function tryToAddExistingPullReviews(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Try Add Existing PullReviews " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPullReviewsExists(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Verify PullReviews " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullReviews found");
}

function verifyPullReviewsDoesNotExist(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Verify PullReviews " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullReviews not found");
}

function tryToDeleteANonExistingPullReviews(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Verify negative delete for PullReviews";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPullReviews(body, id, index, limit, owner, page, repo) {
  return bp.EventSet("Delete PullReviews", function(e) {
      return e.name === "Done: " + "Delete a specific review from a pull request";
  });
}

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
  var description = "Get a specific review for a pull request " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyPullReviewCommentsExists(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/comments";
  var description = "Verify PullReviewComments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullReviewComments found");
}

function verifyPullReviewCommentsDoesNotExist(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/comments";
  var description = "Verify PullReviewComments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullReviewComments not found");
}

function matchAnyPullReviewCommentsAdded() {
  return bp.EventSet("Any PullReviewComments Added", function(e) {
      return e.name.startsWith("Done: Create PullReviewComments");
  });
}

function repoDismissPullReview(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var description = "Dismiss a review for a pull request " + id;
  var body = {
    "body": String(body),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "index": index, "owner": owner, "repo": repo}) });
}

// verifyPullReviewDismissalsExists skipped: No GET /{id} operation detected.
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
  var description = "Cancel to dismiss a review for a pull request " + id;
  var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "index": index, "owner": owner, "repo": repo}) });
}

// verifyPullReviewUndismissalsExists skipped: No GET /{id} operation detected.
function waitForPullReviewUndismissalsAdded(id, index, owner, repo) {
  waitFor(matchSuccess("Cancel to dismiss a review for a pull request"));
}

function matchAnyPullReviewUndismissalsAdded() {
  return bp.EventSet("Any PullReviewUndismissals Added", function(e) {
      return e.name.startsWith("Done: Cancel to dismiss a review for a pull request");
  });
}

function repoListPushMirrors(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Get all push mirrors of the repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function repoPushMirrorSync(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync";
  var description = "Sync all push mirrored repository " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "name": name, "owner": owner, "page": page, "repo": repo}) });
}

function repoDeletePushMirror(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "deletes a push mirror from a repository by remoteName " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function repoGetPushMirrorByRemoteName(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Get push mirror of the repository by remoteName " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function tryToAddExistingPushMirrors(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync";
  var description = "Try Add Existing PushMirrors " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyPushMirrorsExists(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Verify PushMirrors " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PushMirrors found");
}

function verifyPushMirrorsDoesNotExist(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Verify PushMirrors " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PushMirrors not found");
}

function tryToDeleteANonExistingPushMirrors(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Verify negative delete for PushMirrors";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedPushMirrors(id, limit, name, owner, page, repo) {
  return bp.EventSet("Delete PushMirrors", function(e) {
      return e.name === "Done: " + "deletes a push mirror from a repository by remoteName";
  });
}

function waitForPushMirrorsAdded(id, limit, name, owner, page, repo) {
  waitFor(matchSuccess("Sync all push mirrored repository"));
}

function matchAnyPushMirrorsAdded() {
  return bp.EventSet("Any PushMirrors Added", function(e) {
      return e.name.startsWith("Done: Sync all push mirrored repository");
  });
}

function repoGetRawFile(filepath, id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/raw/" + filepath;
  var description = "Get a file from a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyRawFilesExists(filepath, id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/raw/" + filepath;
  var description = "Verify RawFiles " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RawFiles found");
}

function verifyRawFilesDoesNotExist(filepath, id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/raw/" + filepath;
  var description = "Verify RawFiles " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RawFiles not found");
}

function matchAnyRawFilesAdded() {
  return bp.EventSet("Any RawFiles Added", function(e) {
      return e.name.startsWith("Done: Create RawFiles");
  });
}

function repoListReleases(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "List a repo's releases " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create a release " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "draft": draft, "id": id, "limit": limit, "owner": owner, "page": page, "pre-release": pre_release, "repo": repo}) });
}

function repoGetRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Get a release " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Delete a release " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoEditRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Update a release " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "draft": draft, "id": id, "limit": limit, "owner": owner, "page": page, "pre-release": pre_release, "repo": repo}) });
}

function tryToAddExistingReleases(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Try Add Existing Releases " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReleasesExists(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Verify Releases " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Releases found");
}

function verifyReleasesDoesNotExist(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Verify Releases " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Releases not found");
}

function tryToDeleteANonExistingReleases(body, draft, id, limit, owner, page, pre_release, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Verify negative delete for Releases";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedReleases(body, draft, id, limit, owner, page, pre_release, repo) {
  return bp.EventSet("Delete Releases", function(e) {
      return e.name === "Done: " + "Delete a release";
  });
}

function waitForReleasesAdded(body, draft, id, limit, owner, page, pre_release, repo) {
  waitFor(matchSuccess("Create a release"));
}

function matchAnyReleasesAdded() {
  return bp.EventSet("Any Releases Added", function(e) {
      return e.name.startsWith("Done: Create a release");
  });
}

function repoListReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "List release's attachments " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Create a release attachment " + owner;
  var body = {
    "attachment": String(attachment),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function repoDeleteReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Delete a release attachment " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Get a release attachment " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Edit a release attachment " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name, "owner": owner, "repo": repo}) });
}

function tryToAddExistingReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Try Add Existing ReleaseAttachments " + owner;
  var body = {
    "attachment": String(attachment),
    "name": String(name),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyReleaseAttachmentsExists(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Verify ReleaseAttachments " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ReleaseAttachments found");
}

function verifyReleaseAttachmentsDoesNotExist(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Verify ReleaseAttachments " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ReleaseAttachments not found");
}

function tryToDeleteANonExistingReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Verify negative delete for ReleaseAttachments";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo) {
  return bp.EventSet("Delete ReleaseAttachments", function(e) {
      return e.name === "Done: " + "Delete a release attachment";
  });
}

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
  var description = "Return all users that can be requested to review in this repo " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyReviewersExists skipped: No GET /{id} operation detected.
function matchAnyReviewersAdded() {
  return bp.EventSet("Any Reviewers Added", function(e) {
      return e.name.startsWith("Done: Create Reviewers");
  });
}

function repoListTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "List tag protections for a repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function repoCreateTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Create a tag protections for a repository " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 409, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoGetTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Get a specific tag protection for the repository " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoEditTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Edit a tag protections for a repository. Only fields that are set will be changed " + owner;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "owner": owner, "repo": repo}) });
}

function repoDeleteTagProtection(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Delete a specific tag protection for the repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingTagProtections(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Try Add Existing TagProtections " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTagProtectionsExists(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Verify TagProtections " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TagProtections found");
}

function verifyTagProtectionsDoesNotExist(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Verify TagProtections " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TagProtections not found");
}

function tryToDeleteANonExistingTagProtections(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Verify negative delete for TagProtections";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTagProtections(body, id, owner, repo) {
  return bp.EventSet("Delete TagProtections", function(e) {
      return e.name === "Done: " + "Delete a specific tag protection for the repository";
  });
}

function waitForTagProtectionsAdded(body, id, owner, repo) {
  waitFor(matchSuccess("Create a tag protections for a repository"));
}

function matchAnyTagProtectionsAdded() {
  return bp.EventSet("Any TagProtections Added", function(e) {
      return e.name.startsWith("Done: Create a tag protections for a repository");
  });
}

function repoListTags(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "List a repository's tags " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoCreateTag(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Create a new git tag in a repository " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 422, 423], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo, "tag": tag}) });
}

function repoGetTag(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Get the tag of a repository by tag name " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function repoDeleteTag(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Delete a repository's tag by name " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 405, 409, 422, 423] });
}

function tryToAddExistingTags(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Try Add Existing Tags " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyTagsExists(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Verify Tags " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tags found");
}

function verifyTagsDoesNotExist(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Verify Tags " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tags not found");
}

function tryToDeleteANonExistingTags(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Verify negative delete for Tags";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedTags(body, id, limit, owner, page, repo, tag) {
  return bp.EventSet("Delete Tags", function(e) {
      return e.name === "Done: " + "Delete a repository's tag by name";
  });
}

function waitForTagsAdded(body, id, limit, owner, page, repo, tag) {
  waitFor(matchSuccess("Create a new git tag in a repository"));
}

function matchAnyTagsAdded() {
  return bp.EventSet("Any Tags Added", function(e) {
      return e.name.startsWith("Done: Create a new git tag in a repository");
  });
}

function repoTrackedTimes(before, id, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times";
  var description = "List a repo's tracked times " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function userTrackedTimes(before, id, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times/" + user;
  var description = "List a user's tracked times in a repo " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 403, 404] });
}

function verifyTrackedTimesExists(before, id, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times/" + user;
  var description = "Verify TrackedTimes " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TrackedTimes found");
}

function verifyTrackedTimesDoesNotExist(before, id, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/times/" + user;
  var description = "Verify TrackedTimes " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TrackedTimes not found");
}

function matchAnyTrackedTimesAdded() {
  return bp.EventSet("Any TrackedTimes Added", function(e) {
      return e.name.startsWith("Done: Create TrackedTimes");
  });
}

function topicSearch(body, id, limit, owner, page, q, repo, topic) {
  var url = "/topics/search";
  var description = "search topics via keyword " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 403, 404] });
}

function repoUpdateTopics(body, id, limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "Replace list of topics for a repository " + owner;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "q": q, "repo": repo, "topic": topic}) });
}

function repoDeleteTopic(body, id, limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Delete a topic from a repository " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoAddTopic(body, id, limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Add a topic to a repository " + owner;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "owner": owner, "page": page, "q": q, "repo": repo, "topic": topic}) });
}

// verifyTopicsExists skipped: No GET /{id} operation detected.
function waitForTopicsAdded(body, id, limit, owner, page, q, repo, topic) {
  waitFor(matchSuccess("Add a topic to a repository"));
}

function matchAnyTopicsAdded() {
  return bp.EventSet("Any Topics Added", function(e) {
      return e.name.startsWith("Done: Add a topic to a repository");
  });
}

function repoGetWikiPages(id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/pages";
  var description = "Get all wiki pages " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyWikiPagesExists skipped: No GET /{id} operation detected.
function matchAnyWikiPagesAdded() {
  return bp.EventSet("Any WikiPages Added", function(e) {
      return e.name.startsWith("Done: Create WikiPages");
  });
}

function repoGetWikiPageRevisions(id, owner, page, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName;
  var description = "Get revisions of a wiki page " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyWikiPageRevisionsExists skipped: No GET /{id} operation detected.
function matchAnyWikiPageRevisionsAdded() {
  return bp.EventSet("Any WikiPageRevisions Added", function(e) {
      return e.name.startsWith("Done: Create WikiPageRevisions");
  });
}

function getGeneralAPISettings(id) {
  var url = "/settings/api";
  var description = "Get instance's global settings for api " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function getGeneralUISettings(id) {
  var url = "/settings/ui";
  var description = "Get instance's global settings for ui " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifySettingsExists skipped: No GET /{id} operation detected.
function matchAnySettingsAdded() {
  return bp.EventSet("Any Settings Added", function(e) {
      return e.name.startsWith("Done: Create Settings");
  });
}

function getVersion(id) {
  var url = "/version";
  var description = "Returns the version of the Gitea application " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyMiscellaneousExists skipped: No GET /{id} operation detected.
function matchAnyMiscellaneousAdded() {
  return bp.EventSet("Any Miscellaneous Added", function(e) {
      return e.name.startsWith("Done: Create Miscellaneous");
  });
}

function userGet(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/users/" + username;
  var description = "Get a user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function deleteUserSecret(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Delete a secret in a user scope " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateUserSecret(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a secret value in a user scope " + username;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "date": date, "id": id, "limit": limit, "only-performed-by": only_performed_by, "page": page, "secretname": secretname, "username": username}) });
}

function userListActivityFeeds(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/users/" + username + "/activities/feeds";
  var description = "List a user's activity feeds " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function verifyUserExists(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/users/" + username;
  var description = "Verify User " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("User found");
}

function verifyUserDoesNotExist(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/users/" + username;
  var description = "Verify User " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("User not found");
}

function tryToDeleteANonExistingUser(body, date, id, limit, only_performed_by, page, secretname, username) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Verify negative delete for User";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUser(body, date, id, limit, only_performed_by, page, secretname, username) {
  return bp.EventSet("Delete User", function(e) {
      return e.name === "Done: " + "Delete a secret in a user scope";
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("Any User Added", function(e) {
      return e.name.startsWith("Done: Create User");
  });
}

function deleteUserVariable(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Delete a user-level variable which is created by current doer " + variablename;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getUserVariable(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Get a user-level variable which is created by current doer " + variablename;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 400, 404] });
}

function createUserVariable(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Create a user-level variable " + variablename;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "variablename": variablename}) });
}

function updateUserVariable(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Update a user-level variable which is created by current doer " + variablename;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "variablename": variablename}) });
}

function tryToAddExistingUserVariables(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Try Add Existing UserVariables " + variablename;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUserVariablesExists(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariables " + variablename + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserVariables found");
}

function verifyUserVariablesDoesNotExist(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariables " + variablename + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserVariables not found");
}

function tryToDeleteANonExistingUserVariables(body, id, variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify negative delete for UserVariables";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserVariables(body, id, variablename) {
  return bp.EventSet("Delete UserVariables", function(e) {
      return e.name === "Done: " + "Delete a user-level variable which is created by current doer";
  });
}

function waitForUserVariablesAdded(body, id, variablename) {
  waitFor(matchSuccess("Create a user-level variable"));
}

function matchAnyUserVariablesAdded() {
  return bp.EventSet("Any UserVariables Added", function(e) {
      return e.name.startsWith("Done: Create a user-level variable");
  });
}

function userGetOauth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2";
  var description = "List the authenticated user's oauth2 applications " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCreateOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2";
  var description = "creates a new OAuth2 application " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

function userDeleteOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "delete an OAuth2 Application " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userGetOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "get an OAuth2 Application " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userUpdateOAuth2Application(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "update an OAuth2 Application, this includes regenerating the client secret " + id;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id, "limit": limit, "page": page}) });
}

function tryToAddExistingOAuth2Applications(body, id, limit, page) {
  var url = "/user/applications/oauth2";
  var description = "Try Add Existing OAuth2Applications " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyOAuth2ApplicationsExists(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify OAuth2Applications " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OAuth2Applications found");
}

function verifyOAuth2ApplicationsDoesNotExist(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify OAuth2Applications " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OAuth2Applications not found");
}

function tryToDeleteANonExistingOAuth2Applications(body, id, limit, page) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify negative delete for OAuth2Applications";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedOAuth2Applications(body, id, limit, page) {
  return bp.EventSet("Delete OAuth2Applications", function(e) {
      return e.name === "Done: " + "delete an OAuth2 Application";
  });
}

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
  var description = "Delete Avatar " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204] });
}

function userUpdateAvatar(body, id) {
  var url = "/user/avatar";
  var description = "Update Avatar " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 409], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// verifyUserAvatarExists skipped: No GET /{id} operation detected.
function waitForUserAvatarAdded(body, id) {
  waitFor(matchSuccess("Update Avatar"));
}

function matchAnyUserAvatarAdded() {
  return bp.EventSet("Any UserAvatar Added", function(e) {
      return e.name.startsWith("Done: Update Avatar");
  });
}

function userListBlocks(id, limit, note, page, username) {
  var url = "/user/blocks";
  var description = "List users blocked by the authenticated user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userUnblockUser(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock a user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404, 422] });
}

function userCheckUserBlock(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Check if a user is blocked by the authenticated user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userBlockUser(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Block a user " + username;
  var body = {
    "id": String(id),
    "note": String(note),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "note": note, "page": page, "username": username}) });
}

function verifyUserBlocksExists(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserBlocks found");
}

function verifyUserBlocksDoesNotExist(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserBlocks not found");
}

function tryToDeleteANonExistingUserBlocks(id, limit, note, page, username) {
  var url = "/user/blocks/" + username;
  var description = "Verify negative delete for UserBlocks";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserBlocks(id, limit, note, page, username) {
  return bp.EventSet("Delete UserBlocks", function(e) {
      return e.name === "Done: " + "Unblock a user";
  });
}

function matchAnyUserBlocksAdded() {
  return bp.EventSet("Any UserBlocks Added", function(e) {
      return e.name.startsWith("Done: Create UserBlocks");
  });
}

function userDeleteEmail(body, id) {
  var url = "/user/emails";
  var description = "Delete email addresses " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userListEmails(body, id) {
  var url = "/user/emails";
  var description = "List the authenticated user's email addresses " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userAddEmail(body, id) {
  var url = "/user/emails";
  var description = "Add email addresses " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// verifyUserEmailsExists skipped: No GET /{id} operation detected.
function waitForUserEmailsAdded(body, id) {
  waitFor(matchSuccess("Add email addresses"));
}

function matchAnyUserEmailsAdded() {
  return bp.EventSet("Any UserEmails Added", function(e) {
      return e.name.startsWith("Done: Add email addresses");
  });
}

function userCurrentListFollowers(id, limit, page) {
  var url = "/user/followers";
  var description = "List the authenticated user's followers " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyUserFollowersExists skipped: No GET /{id} operation detected.
function matchAnyUserFollowersAdded() {
  return bp.EventSet("Any UserFollowers Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowers");
  });
}

function userCurrentListFollowing(id, limit, page) {
  var url = "/user/following";
  var description = "List the users that the authenticated user is following " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyUserFollowingExists skipped: No GET /{id} operation detected.
function matchAnyUserFollowingAdded() {
  return bp.EventSet("Any UserFollowing Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowing");
  });
}

function userCurrentDeleteFollow(id, username) {
  var url = "/user/following/" + username;
  var description = "Unfollow a user " + username;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckFollowing(id, username) {
  var url = "/user/following/" + username;
  var description = "Check whether a user is followed by the authenticated user " + username;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutFollow(id, username) {
  var url = "/user/following/" + username;
  var description = "Follow a user " + username;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "username": username}) });
}

function verifyUserFollowingSpecificExists(id, username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserFollowingSpecific found");
}

function verifyUserFollowingSpecificDoesNotExist(id, username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserFollowingSpecific not found");
}

function tryToDeleteANonExistingUserFollowingSpecific(id, username) {
  var url = "/user/following/" + username;
  var description = "Verify negative delete for UserFollowingSpecific";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserFollowingSpecific(id, username) {
  return bp.EventSet("Delete UserFollowingSpecific", function(e) {
      return e.name === "Done: " + "Unfollow a user";
  });
}

function matchAnyUserFollowingSpecificAdded() {
  return bp.EventSet("Any UserFollowingSpecific Added", function(e) {
      return e.name.startsWith("Done: Create UserFollowingSpecific");
  });
}

function userCurrentGetGPGKey(Form, id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Get a GPG key " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function userCurrentListGPGKeys(Form, id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "List the authenticated user's GPG keys " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentPostGPGKey(Form, id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "Create a GPG key " + id;
  var body = {
    "Form": String(Form),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Form": Form, "id": id, "limit": limit, "page": page}) });
}

function userCurrentDeleteGPGKey(Form, id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Remove a GPG key " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function tryToAddExistingGPGKeys(Form, id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "Try Add Existing GPGKeys " + id;
  var body = {
    "Form": String(Form),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyGPGKeysExists(Form, id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify GPGKeys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GPGKeys found");
}

function verifyGPGKeysDoesNotExist(Form, id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify GPGKeys " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GPGKeys not found");
}

function tryToDeleteANonExistingGPGKeys(Form, id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify negative delete for GPGKeys";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedGPGKeys(Form, id, limit, page) {
  return bp.EventSet("Delete GPGKeys", function(e) {
      return e.name === "Done: " + "Remove a GPG key";
  });
}

function waitForGPGKeysAdded(Form, id, limit, page) {
  waitFor(matchSuccess("Create a GPG key"));
}

function matchAnyGPGKeysAdded() {
  return bp.EventSet("Any GPGKeys Added", function(e) {
      return e.name.startsWith("Done: Create a GPG key");
  });
}

function getVerificationToken(id) {
  var url = "/user/gpg_key_token";
  var description = "Get a Token to verify " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

// verifyGPGKeyTokenExists skipped: No GET /{id} operation detected.
function matchAnyGPGKeyTokenAdded() {
  return bp.EventSet("Any GPGKeyToken Added", function(e) {
      return e.name.startsWith("Done: Create GPGKeyToken");
  });
}

function userVerifyGPGKey(Form, id) {
  var url = "/user/gpg_key_verify";
  var description = "Verify a GPG key " + id;
  var body = {
    "Form": String(Form),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"Form": Form, "id": id}) });
}

// verifyGPGKeyVerifyExists skipped: No GET /{id} operation detected.
function waitForGPGKeyVerifyAdded(Form, id) {
  waitFor(matchSuccess("Verify a GPG key"));
}

function matchAnyGPGKeyVerifyAdded() {
  return bp.EventSet("Any GPGKeyVerify Added", function(e) {
      return e.name.startsWith("Done: Verify a GPG key");
  });
}

function userCurrentListKeys(body, fingerprint, id, limit, page) {
  var url = "/user/keys";
  var description = "List the authenticated user's public keys " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentPostKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys";
  var description = "Create a public key " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 409, 422], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "fingerprint": fingerprint, "id": id, "limit": limit, "page": page}) });
}

function userCurrentDeleteKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Delete a public key " + id;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 403, 404] });
}

function userCurrentGetKey(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Get a public key " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200, 404] });
}

function tryToAddExistingKeys(body, fingerprint, id, limit, page) {
  var url = "/user/keys";
  var description = "Try Add Existing Keys " + id;
  var body = {
    "body": String(body),
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyKeysExists(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Verify Keys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Keys found");
}

function verifyKeysDoesNotExist(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Verify Keys " + id + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Keys not found");
}

function tryToDeleteANonExistingKeys(body, fingerprint, id, limit, page) {
  var url = "/user/keys/" + id;
  var description = "Verify negative delete for Keys";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedKeys(body, fingerprint, id, limit, page) {
  return bp.EventSet("Delete Keys", function(e) {
      return e.name === "Done: " + "Delete a public key";
  });
}

function waitForKeysAdded(body, fingerprint, id, limit, page) {
  waitFor(matchSuccess("Create a public key"));
}

function matchAnyKeysAdded() {
  return bp.EventSet("Any Keys Added", function(e) {
      return e.name.startsWith("Done: Create a public key");
  });
}

function getUserSettings(body, id) {
  var url = "/user/settings";
  var description = "Get user settings " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function updateUserSettings(body, id) {
  var url = "/user/settings";
  var description = "Update user settings " + id;
  var body = {
    "body": String(body),
};
  svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"body": body, "id": id}) });
}

// verifyUserSettingsExists skipped: No GET /{id} operation detected.
function matchAnyUserSettingsAdded() {
  return bp.EventSet("Any UserSettings Added", function(e) {
      return e.name.startsWith("Done: Create UserSettings");
  });
}

function userCurrentListStarred(id, limit, owner, page, repo) {
  var url = "/user/starred";
  var description = "The repos that the authenticated user has starred " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

function userCurrentCheckStarring(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Whether the authenticated is starring the repo " + owner;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutStar(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star the given repo " + owner;
  var body = {
    "id": String(id),
};
  svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: " + description, {"id": id, "limit": limit, "owner": owner, "page": page, "repo": repo}) });
}

function userCurrentDeleteStar(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar the given repo " + owner;
  svc.delete(url, { parameters: { description: description }, expectedResponseCodes: [200, 204, 404] });
}

function tryToAddExistingUserStarred(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Try Add Existing UserStarred " + owner;
  var body = {
    "id": String(id),
};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 409], parameters: { description: description } });
}

function verifyUserStarredExists(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify UserStarred " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserStarred found");
}

function verifyUserStarredDoesNotExist(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify UserStarred " + owner + " does not exist";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserStarred not found");
}

function tryToDeleteANonExistingUserStarred(id, limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify negative delete for UserStarred";
  svc.delete(url, { expectedResponseCodes: [404], parameters: { description: description } });
}

function matchDeletedUserStarred(id, limit, owner, page, repo) {
  return bp.EventSet("Delete UserStarred", function(e) {
      return e.name === "Done: " + "Unstar the given repo";
  });
}

function waitForUserStarredAdded(id, limit, owner, page, repo) {
  waitFor(matchSuccess("Star the given repo"));
}

function matchAnyUserStarredAdded() {
  return bp.EventSet("Any UserStarred Added", function(e) {
      return e.name.startsWith("Done: Star the given repo");
  });
}

function userGetStopWatches(id, limit, page) {
  var url = "/user/stopwatches";
  var description = "Get list of all existing stopwatches " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyUserStopwatchesExists skipped: No GET /{id} operation detected.
function matchAnyUserStopwatchesAdded() {
  return bp.EventSet("Any UserStopwatches Added", function(e) {
      return e.name.startsWith("Done: Create UserStopwatches");
  });
}

function userCurrentListSubscriptions(id, limit, page) {
  var url = "/user/subscriptions";
  var description = "List repositories watched by the authenticated user " + id;
  svc.get(url, { parameters: { description: description }, expectedResponseCodes: [200] });
}

// verifyUserSubscriptionsExists skipped: No GET /{id} operation detected.
function matchAnyUserSubscriptionsAdded() {
  return bp.EventSet("Any UserSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Create UserSubscriptions");
  });
}
