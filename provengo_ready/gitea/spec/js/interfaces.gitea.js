//@provengo summon rest
const svc = new RESTSession("http://localhost:8000/api/v1/", "client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };

function activitypubPerson(user_id) {
  var url = "activitypub/user-id/" + user_id;
  var reqDescription = "Returns the Person actor for a user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function activitypubPersonInbox(user_id) {
  var url = "activitypub/user-id/" + user_id + "/inbox";
  var reqDescription = "Send to the inbox";
  var body = {
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id}) }); }
  return res;
}

function verifyActivityPubRejects(user_id) {
  var bodyStr = "{";
  bodyStr += '"user-id":' + JSON.stringify(user_id);
  bodyStr += "}";
  svc.post("activitypub/user-id/" + user_id + "/inbox", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyActivityPubExists(user_id) { pvg.success("ActivityPub verified"); }
function matchAnyActivityPubAdded() { return bp.EventSet("Added ActivityPub", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedActivityPub() { return bp.EventSet("Deleted ActivityPub", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCronList() {
  var url = "admin/cron";
  var reqDescription = "List cron tasks";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function adminCronRun(task, id, limit, page) {
  var url = "admin/cron/" + task;
  var reqDescription = "Run cron task";
  var body = {
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"task": task, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyAdminCronRejects(id, limit, page, task) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "task":' + JSON.stringify(task);
  bodyStr += "}";
  svc.post("admin/cron/" + task, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyAdminCronExists(id) { pvg.success("AdminCron verified"); }
function matchAnyAdminCronAdded() { return bp.EventSet("Added AdminCron", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAdminCron() { return bp.EventSet("Deleted AdminCron", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminGetAllEmails() {
  var url = "admin/emails";
  var reqDescription = "List all emails";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function verifyAdminEmailsExists(id) { pvg.success("AdminEmails verified"); }
function matchAnyAdminEmailsAdded() { return bp.EventSet("Added AdminEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAdminEmails() { return bp.EventSet("Deleted AdminEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminSearchEmails() {
  var url = "admin/emails/search";
  var reqDescription = "Search all emails";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function verifyEmailsExists(id) { pvg.success("Emails verified"); }
function matchAnyEmailsAdded() { return bp.EventSet("Added Emails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedEmails() { return bp.EventSet("Deleted Emails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListHooks() {
  var url = "user/hooks";
  var reqDescription = "List the authenticated user's webhooks";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCreateHook(body, id, limit, page) {
  var url = "user/hooks";
  var reqDescription = "Create a hook";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function userDeleteHook(id) {
  var url = "user/hooks/" + id;
  var reqDescription = "Delete a hook";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
}

function userGetHook(id) {
  var url = "user/hooks/" + id;
  var reqDescription = "Get a hook";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userEditHook(id, body, limit, page) {
  var url = "user/hooks/" + id;
  var reqDescription = "Update a hook";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function verifyHooksRejects(body, id, limit, page) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("user/hooks", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyHooksExists(id) { pvg.success("Hooks verified"); }
function matchAnyHooksAdded() { return bp.EventSet("Added Hooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedHooks() { return bp.EventSet("Deleted Hooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListUserOrgs(username) {
  var url = "users/" + username + "/orgs";
  var reqDescription = "List a user's organizations";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userGet(username) {
  var url = "users/" + username;
  var reqDescription = "Get a user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyOrganizationsExists(username) { pvg.success("Organizations verified"); }
function matchAnyOrganizationsAdded() { return bp.EventSet("Added Organizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizations() { return bp.EventSet("Deleted Organizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminGetRunnerRegistrationToken() {
  var url = "admin/runners/registration-token";
  var reqDescription = "Get an global actions runner registration token";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyRunnersExists(id) { pvg.success("Runners verified"); }
function matchAnyRunnersAdded() { return bp.EventSet("Added Runners", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRunners() { return bp.EventSet("Deleted Runners", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminUnadoptedList() {
  var url = "admin/unadopted";
  var reqDescription = "List unadopted repositories";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function adminDeleteUnadoptedRepository(owner, repo) {
  var url = "admin/unadopted/" + owner + "/" + repo;
  var reqDescription = "Delete unadopted files";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403] });
}

function adminAdoptRepository(owner, repo, limit, page, pattern) {
  var url = "admin/unadopted/" + owner + "/" + repo;
  var reqDescription = "Adopt unadopted files as a repository";
  var body = {
    "limit": limit,
    "page": page,
    "pattern": pattern,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "limit": limit, "page": page, "pattern": pattern}) }); }
  return res;
}

function verifyUnadoptedRepositoriesRejects(limit, owner, page, pattern, repo) {
  var bodyStr = "{";
  bodyStr += '"limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "pattern":' + JSON.stringify(pattern);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("admin/unadopted/" + owner + "/" + repo, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUnadoptedRepositoriesExists(owner) { pvg.success("UnadoptedRepositories verified"); }
function matchAnyUnadoptedRepositoriesAdded() { return bp.EventSet("Added UnadoptedRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUnadoptedRepositories() { return bp.EventSet("Deleted UnadoptedRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListSubscriptions(username) {
  var url = "users/" + username + "/subscriptions";
  var reqDescription = "List the repositories watched by a user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function adminCreateUser(CreateAccessTokenOption, body, limit, page, purge, token, username) {
  var url = "admin/users";
  var reqDescription = "Create a user";
  var body = {
    "CreateAccessTokenOption": CreateAccessTokenOption,
    "body": body,
    "limit": limit,
    "page": page,
    "purge": purge,
    "token": token,
    "username": username,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"CreateAccessTokenOption": CreateAccessTokenOption, "body": body, "limit": limit, "page": page, "purge": purge, "token": token, "username": username}) }); }
  return res;
}

function adminDeleteUser(username) {
  var url = "admin/users/" + username;
  var reqDescription = "Delete a user";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function adminEditUser(username, CreateAccessTokenOption, body, limit, page, purge, token) {
  var url = "admin/users/" + username;
  var reqDescription = "Edit an existing user";
  var body = {
    "CreateAccessTokenOption": CreateAccessTokenOption,
    "body": body,
    "limit": limit,
    "page": page,
    "purge": purge,
    "token": token,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "CreateAccessTokenOption": CreateAccessTokenOption, "body": body, "limit": limit, "page": page, "purge": purge, "token": token}) }); }
  return res;
}

function userGetHeatmapData(username) {
  var url = "users/" + username + "/heatmap";
  var reqDescription = "Get a user's heatmap";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userGetTokens(username) {
  var url = "users/" + username + "/tokens";
  var reqDescription = "List the authenticated user's access tokens";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403] });
}

function userCreateToken(username, CreateAccessTokenOption, body, limit, page, purge, token) {
  var url = "users/" + username + "/tokens";
  var reqDescription = "Create an access token";
  var body = {
    "CreateAccessTokenOption": CreateAccessTokenOption,
    "body": body,
    "limit": limit,
    "page": page,
    "purge": purge,
    "token": token,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "CreateAccessTokenOption": CreateAccessTokenOption, "body": body, "limit": limit, "page": page, "purge": purge, "token": token}) }); }
  return res;
}

function userDeleteAccessToken(username, token) {
  var url = "users/" + username + "/tokens/" + token;
  var reqDescription = "Delete an access token";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function verifyUsersRejects(CreateAccessTokenOption, body, limit, page, purge, token, username) {
  var bodyStr = "{";
  bodyStr += '"CreateAccessTokenOption":' + JSON.stringify(CreateAccessTokenOption);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "purge":' + JSON.stringify(purge);
  bodyStr += ', "token":' + JSON.stringify(token);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUsersExists(username) { pvg.success("Users verified"); }
function matchAnyUsersAdded() { return bp.EventSet("Added Users", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUsers() { return bp.EventSet("Deleted Users", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminListUserBadges(username) {
  var url = "admin/users/" + username + "/badges";
  var reqDescription = "List a user's badges";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function adminAddUserBadges(username, body) {
  var url = "admin/users/" + username + "/badges";
  var reqDescription = "Add a badge to a user";
  var body = {
    "body": body,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "body": body}) }); }
  return res;
}

function adminDeleteUserBadges(username) {
  var url = "admin/users/" + username + "/badges";
  var reqDescription = "Remove a badge from a user";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 422] });
}

function verifyUserBadgesRejects(body, username) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users/" + username + "/badges", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserBadgesExists(username) { pvg.success("UserBadges verified"); }
function matchAnyUserBadgesAdded() { return bp.EventSet("Added UserBadges", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserBadges() { return bp.EventSet("Deleted UserBadges", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreatePublicKey(username, key, purge) {
  var url = "admin/users/" + username + "/keys";
  var reqDescription = "Add a public key on behalf of a user";
  var body = {
    "key": key,
    "purge": purge,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "key": key, "purge": purge}) }); }
  return res;
}

function adminDeleteUser(username, purge) {
  var url = "admin/users/" + username;
  var reqDescription = "Delete a user";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 422], queryParameters: {"purge": purge} });
}

function verifyUserKeysRejects(key, purge, username) {
  var bodyStr = "{";
  bodyStr += '"key":' + JSON.stringify(key);
  bodyStr += ', "purge":' + JSON.stringify(purge);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users/" + username + "/keys", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserKeysExists(username) { pvg.success("UserKeys verified"); }
function matchAnyUserKeysAdded() { return bp.EventSet("Added UserKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserKeys() { return bp.EventSet("Deleted UserKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreateOrg(username, id, organization) {
  var url = "admin/users/" + username + "/orgs";
  var reqDescription = "Create an organization";
  var body = {
    "id": id,
    "organization": organization,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": id, "organization": organization}) }); }
  return res;
}

function verifyUserOrganizationsRejects(id, organization, username) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "organization":' + JSON.stringify(organization);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users/" + username + "/orgs", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserOrganizationsExists(id) { pvg.success("UserOrganizations verified"); }
function matchAnyUserOrganizationsAdded() { return bp.EventSet("Added UserOrganizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserOrganizations() { return bp.EventSet("Deleted UserOrganizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminRenameUser(username, body, id) {
  var url = "admin/users/" + username + "/rename";
  var reqDescription = "Rename a user";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "body": body, "id": id}) }); }
  return res;
}

function verifyUserRenameRejects(body, id, username) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users/" + username + "/rename", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserRenameExists(id) { pvg.success("UserRename verified"); }
function matchAnyUserRenameAdded() { return bp.EventSet("Added UserRename", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserRename() { return bp.EventSet("Deleted UserRename", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreateRepo(username, id, repository) {
  var url = "admin/users/" + username + "/repos";
  var reqDescription = "Create a repository on behalf of a user";
  var body = {
    "id": id,
    "repository": repository,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": id, "repository": repository}) }); }
  return res;
}

function verifyUserRepositoriesRejects(id, repository, username) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "repository":' + JSON.stringify(repository);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("admin/users/" + username + "/repos", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserRepositoriesExists(id) { pvg.success("UserRepositories verified"); }
function matchAnyUserRepositoriesAdded() { return bp.EventSet("Added UserRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserRepositories() { return bp.EventSet("Deleted UserRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listGitignoresTemplates() {
  var url = "gitignore/templates";
  var reqDescription = "Returns a list of all gitignore templates";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getGitignoreTemplateInfo(name) {
  var url = "gitignore/templates/" + name;
  var reqDescription = "Returns information about a gitignore template";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyGitignoreTemplatesExists(name) { pvg.success("GitignoreTemplates verified"); }
function matchAnyGitignoreTemplatesAdded() { return bp.EventSet("Added GitignoreTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitignoreTemplates() { return bp.EventSet("Deleted GitignoreTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listLabelTemplates() {
  var url = "label/templates";
  var reqDescription = "Returns a list of all label templates";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getLabelTemplateInfo(name) {
  var url = "label/templates/" + name;
  var reqDescription = "Returns all labels in a template";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyLabelTemplatesExists(name) { pvg.success("LabelTemplates verified"); }
function matchAnyLabelTemplatesAdded() { return bp.EventSet("Added LabelTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLabelTemplates() { return bp.EventSet("Deleted LabelTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listLicenseTemplates() {
  var url = "licenses";
  var reqDescription = "Returns a list of all license templates";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyLicenseTemplatesExists(id) { pvg.success("LicenseTemplates verified"); }
function matchAnyLicenseTemplatesAdded() { return bp.EventSet("Added LicenseTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLicenseTemplates() { return bp.EventSet("Deleted LicenseTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getLicenseTemplateInfo(name) {
  var url = "licenses/" + name;
  var reqDescription = "Returns information about a license template";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyLicensesExists(name) { pvg.success("Licenses verified"); }
function matchAnyLicensesAdded() { return bp.EventSet("Added Licenses", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLicenses() { return bp.EventSet("Deleted Licenses", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function renderMarkdown(body, id) {
  var url = "markdown";
  var reqDescription = "Render a markdown document as HTML";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id}) }); }
  return res;
}

function renderMarkdownRaw(body, id) {
  var url = "markdown/raw";
  var reqDescription = "Render raw markdown as HTML";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id}) }); }
  return res;
}

function verifyMarkdownRejects(body, id) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += "}";
  svc.post("markdown", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMarkdownExists(id) { pvg.success("Markdown verified"); }
function matchAnyMarkdownAdded() { return bp.EventSet("Added Markdown", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMarkdown() { return bp.EventSet("Deleted Markdown", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function renderMarkup(body, id) {
  var url = "markup";
  var reqDescription = "Render a markup document as HTML";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id}) }); }
  return res;
}

function verifyMarkupRejects(body, id) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += "}";
  svc.post("markup", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMarkupExists(id) { pvg.success("Markup verified"); }
function matchAnyMarkupAdded() { return bp.EventSet("Added Markup", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMarkup() { return bp.EventSet("Deleted Markup", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getNodeInfo() {
  var url = "nodeinfo";
  var reqDescription = "Returns the nodeinfo of the Gitea application";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyNodeInfoExists(id) { pvg.success("NodeInfo verified"); }
function matchAnyNodeInfoAdded() { return bp.EventSet("Added NodeInfo", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNodeInfo() { return bp.EventSet("Deleted NodeInfo", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function notifyGetRepoList(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/notifications";
  var reqDescription = "List users's notification threads on a specific repo";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function notifyReadRepoList(owner, repo, all, before, id, last_read_at, limit, page, since, status_types, subject_type, to_status) {
  var url = "repos/" + owner + "/" + repo + "/notifications";
  var reqDescription = "Mark notification threads as read, pinned or unread on a specific repo";
  var body = {
    "all": all,
    "before": before,
    "id": id,
    "last_read_at": last_read_at,
    "limit": limit,
    "page": page,
    "since": since,
    "status-types": status_types,
    "subject-type": subject_type,
    "to-status": to_status,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 205], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "all": all, "before": before, "id": id, "last_read_at": last_read_at, "limit": limit, "page": page, "since": since, "status-types": status_types, "subject-type": subject_type, "to-status": to_status}) }); }
  return res;
}

function notifyGetThread(id) {
  var url = "notifications/threads/" + id;
  var reqDescription = "Get notification thread by ID";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404] });
}

function verifyNotificationsExists(id) { pvg.success("Notifications verified"); }
function matchAnyNotificationsAdded() { return bp.EventSet("Added Notifications", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNotifications() { return bp.EventSet("Deleted Notifications", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgGetAll() {
  var url = "orgs";
  var reqDescription = "Get list of organizations";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function createOrgRepoDeprecated(org, body, limit, page, secretname) {
  var url = "org/" + org + "/repos";
  var reqDescription = "Create a repository in an organization";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "secretname": secretname,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "limit": limit, "page": page, "secretname": secretname}) }); }
  return res;
}

function orgDelete(org) {
  var url = "orgs/" + org;
  var reqDescription = "Delete an organization";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  var url = "orgs/" + org;
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgEdit(org, body, limit, page, secretname) {
  var url = "orgs/" + org;
  var reqDescription = "Edit an organization";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "secretname": secretname,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "limit": limit, "page": page, "secretname": secretname}) }); }
  return res;
}

function orgGetRunnerRegistrationToken(org) {
  var url = "orgs/" + org + "/actions/runners/registration-token";
  var reqDescription = "Get an organization's actions runner registration token";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgListActionsSecrets(org) {
  var url = "orgs/" + org + "/actions/secrets";
  var reqDescription = "List an organization's actions secrets";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function deleteOrgSecret(org, secretname) {
  var url = "orgs/" + org + "/actions/secrets/" + secretname;
  var reqDescription = "Delete a secret in an organization";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateOrgSecret(org, secretname, body, limit, page) {
  var url = "orgs/" + org + "/actions/secrets/" + secretname;
  var reqDescription = "Create or Update a secret value in an organization";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "secretname": secretname, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function getOrgVariablesList(org) {
  var url = "orgs/" + org + "/actions/variables";
  var reqDescription = "Get an org-level variables list";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
}

function verifyOrganizationRejects(body, limit, org, page, secretname) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "org":' + JSON.stringify(org);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "secretname":' + JSON.stringify(secretname);
  bodyStr += "}";
  svc.post("org/" + org + "/repos", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationExists(org) { pvg.success("Organization verified"); }
function matchAnyOrganizationAdded() { return bp.EventSet("Added Organization", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganization() { return bp.EventSet("Deleted Organization", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteRepoVariable(owner, repo, variablename) {
  var url = "repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var reqDescription = "Delete a repo-level variable";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function createRepoVariable(owner, repo, variablename, CreateVariableOption, UpdateVariableOption, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var reqDescription = "Create a repo-level variable";
  var body = {
    "CreateVariableOption": CreateVariableOption,
    "UpdateVariableOption": UpdateVariableOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "variablename": variablename, "CreateVariableOption": CreateVariableOption, "UpdateVariableOption": UpdateVariableOption, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function updateRepoVariable(owner, repo, variablename, CreateVariableOption, UpdateVariableOption, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var reqDescription = "Update a repo-level variable";
  var body = {
    "CreateVariableOption": CreateVariableOption,
    "UpdateVariableOption": UpdateVariableOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "variablename": variablename, "CreateVariableOption": CreateVariableOption, "UpdateVariableOption": UpdateVariableOption, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function getRepoVariablesList(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/actions/variables";
  var reqDescription = "Get repo-level variables list";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
}

function verifyVariablesRejects(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  var bodyStr = "{";
  bodyStr += '"CreateVariableOption":' + JSON.stringify(CreateVariableOption);
  bodyStr += ', "UpdateVariableOption":' + JSON.stringify(UpdateVariableOption);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "variablename":' + JSON.stringify(variablename);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/actions/variables/" + variablename, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyVariablesExists(id) { pvg.success("Variables verified"); }
function matchAnyVariablesAdded() { return bp.EventSet("Added Variables", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedVariables() { return bp.EventSet("Deleted Variables", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListActivityFeeds(username) {
  var url = "users/" + username + "/activities/feeds";
  var reqDescription = "List a user's activity feeds";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyActivityFeedsExists(id) { pvg.success("ActivityFeeds verified"); }
function matchAnyActivityFeedsAdded() { return bp.EventSet("Added ActivityFeeds", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedActivityFeeds() { return bp.EventSet("Deleted ActivityFeeds", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgDeleteAvatar(org) {
  var url = "orgs/" + org + "/avatar";
  var reqDescription = "Delete Avatar";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgUpdateAvatar(org, body) {
  var url = "orgs/" + org + "/avatar";
  var reqDescription = "Update Avatar";
  var body = {
    "body": body,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body}) }); }
  return res;
}

function verifyAvatarRejects(body, org) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "org":' + JSON.stringify(org);
  bodyStr += "}";
  svc.post("orgs/" + org + "/avatar", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyAvatarExists(org) { pvg.success("Avatar verified"); }
function matchAnyAvatarAdded() { return bp.EventSet("Added Avatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAvatar() { return bp.EventSet("Deleted Avatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function organizationListBlocks(org) {
  var url = "orgs/" + org + "/blocks";
  var reqDescription = "List users blocked by the organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgDelete(org) {
  var url = "orgs/" + org;
  var reqDescription = "Delete an organization";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  var url = "orgs/" + org;
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgEdit(org, body, limit, page) {
  var url = "orgs/" + org;
  var reqDescription = "Edit an organization";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function verifyBlocksExists(org) { pvg.success("Blocks verified"); }
function matchAnyBlocksAdded() { return bp.EventSet("Added Blocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBlocks() { return bp.EventSet("Deleted Blocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListLabels(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/labels";
  var reqDescription = "Get all of a repository's labels";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateLabel(owner, repo, body, color, description, id, limit, name, page) {
  var url = "repos/" + owner + "/" + repo + "/labels";
  var reqDescription = "Create a label";
  var body = {
    "body": body,
    "color": color,
    "description": description,
    "id": id,
    "limit": limit,
    "name": name,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "color": color, "description": description, "id": id, "limit": limit, "name": name, "page": page}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditLabel(owner, repo, id, body, color, description, limit, name, page) {
  var url = "repos/" + owner + "/" + repo + "/labels/" + id;
  var reqDescription = "Update a label";
  var body = {
    "body": body,
    "color": color,
    "description": description,
    "limit": limit,
    "name": name,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "body": body, "color": color, "description": description, "limit": limit, "name": name, "page": page}) }); }
  return res;
}

function issueDeleteLabel(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/labels/" + id;
  var reqDescription = "Delete a label";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function verifyLabelsRejects(body, color, description, id, limit, name, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "color":' + JSON.stringify(color);
  bodyStr += ', "description":' + JSON.stringify(description);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/labels", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyLabelsExists(id) { pvg.success("Labels verified"); }
function matchAnyLabelsAdded() { return bp.EventSet("Added Labels", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLabels() { return bp.EventSet("Deleted Labels", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListMembers(org) {
  var url = "orgs/" + org + "/members";
  var reqDescription = "List an organization's members";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyMembersExists(id) { pvg.success("Members verified"); }
function matchAnyMembersAdded() { return bp.EventSet("Added Members", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMembers() { return bp.EventSet("Deleted Members", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgDelete(org) {
  var url = "orgs/" + org;
  var reqDescription = "Delete an organization";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  var url = "orgs/" + org;
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyOrganizationMembersExists(org) { pvg.success("OrganizationMembers verified"); }
function matchAnyOrganizationMembersAdded() { return bp.EventSet("Added OrganizationMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationMembers() { return bp.EventSet("Deleted OrganizationMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListPublicMembers(org) {
  var url = "orgs/" + org + "/public_members";
  var reqDescription = "List an organization's public members";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgDelete(org) {
  var url = "orgs/" + org;
  var reqDescription = "Delete an organization";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  var url = "orgs/" + org;
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgEdit(org, body, limit, page) {
  var url = "orgs/" + org;
  var reqDescription = "Edit an organization";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function verifyOrganizationPublicMembersExists(org) { pvg.success("OrganizationPublicMembers verified"); }
function matchAnyOrganizationPublicMembersAdded() { return bp.EventSet("Added OrganizationPublicMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationPublicMembers() { return bp.EventSet("Deleted OrganizationPublicMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListRepos(org) {
  var url = "orgs/" + org + "/repos";
  var reqDescription = "List an organization's repos";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function createOrgRepo(org, body, id, limit, page) {
  var url = "orgs/" + org + "/repos";
  var reqDescription = "Create a repository in an organization";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyOrganizationReposRejects(body, id, limit, org, page) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "org":' + JSON.stringify(org);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("orgs/" + org + "/repos", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationReposExists(id) { pvg.success("OrganizationRepos verified"); }
function matchAnyOrganizationReposAdded() { return bp.EventSet("Added OrganizationRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationRepos() { return bp.EventSet("Deleted OrganizationRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeams(org) {
  var url = "orgs/" + org + "/teams";
  var reqDescription = "List an organization's teams";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgCreateTeam(org, body, id, limit, page) {
  var url = "orgs/" + org + "/teams";
  var reqDescription = "Create a team";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyOrganizationTeamsRejects(body, id, limit, org, page) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "org":' + JSON.stringify(org);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("orgs/" + org + "/teams", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationTeamsExists(id) { pvg.success("OrganizationTeams verified"); }
function matchAnyOrganizationTeamsAdded() { return bp.EventSet("Added OrganizationTeams", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationTeams() { return bp.EventSet("Deleted OrganizationTeams", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListTeams() {
  var url = "user/teams";
  var reqDescription = "List all the teams a user belongs to";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgDeleteTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Delete a team";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function orgGetTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Get a team";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgEditTeam(id, body, limit, page) {
  var url = "teams/" + id;
  var reqDescription = "Edit a team";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function verifyTeamsExists(id) { pvg.success("Teams verified"); }
function matchAnyTeamsAdded() { return bp.EventSet("Added Teams", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeams() { return bp.EventSet("Deleted Teams", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listPackages(owner) {
  var url = "packages/" + owner;
  var reqDescription = "Gets all packages of an owner";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function listPackages(owner, page, limit, type, q) {
  var url = "packages/" + owner;
  var reqDescription = "Gets all packages of an owner";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404], queryParameters: {"page": page, "limit": limit, "type": type, "q": q} });
}

function deletePackage(owner, type, name, version) {
  var url = "packages/" + owner + "/" + type + "/" + name + "/" + version;
  var reqDescription = "Delete a package";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function listPackageFiles(owner, type, name, version) {
  var url = "packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var reqDescription = "Gets all files of a package";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyPackagesExists(owner) { pvg.success("Packages verified"); }
function matchAnyPackagesAdded() { return bp.EventSet("Added Packages", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPackages() { return bp.EventSet("Deleted Packages", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetIssueReactions(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var reqDescription = "Get a list reactions of an issue";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function moveIssuePin(owner, repo, index, position, content, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position;
  var reqDescription = "Moves the Pin to the given Position";
  var body = {
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "position": position, "content": content, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function issueDeleteTime(owner, repo, index, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var reqDescription = "Delete specific tracked time";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issuePostIssueReaction(owner, repo, index, content, id, limit, page, position) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var reqDescription = "Add a reaction to an issue";
  var body = {
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
    "position": position,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "content": content, "id": id, "limit": limit, "page": page, "position": position}) }); }
  return res;
}

function issueDeleteStopWatch(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete";
  var reqDescription = "Delete an issue's existing stopwatch.";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 409] });
}

function issueStartStopWatch(owner, repo, index, content, id, limit, page, position) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start";
  var reqDescription = "Start stopwatch on an issue.";
  var body = {
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
    "position": position,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "content": content, "id": id, "limit": limit, "page": page, "position": position}) }); }
  return res;
}

function issueStopStopWatch(owner, repo, index, content, id, limit, page, position) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop";
  var reqDescription = "Stop an issue's existing stopwatch.";
  var body = {
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
    "position": position,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "content": content, "id": id, "limit": limit, "page": page, "position": position}) }); }
  return res;
}

function verifyIssuesRejects(content, id, index, limit, owner, page, position, repo) {
  var bodyStr = "{";
  bodyStr += '"content":' + JSON.stringify(content);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "position":' + JSON.stringify(position);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/reactions", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssuesExists(id) { pvg.success("Issues verified"); }
function matchAnyIssuesAdded() { return bp.EventSet("Added Issues", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssues() { return bp.EventSet("Deleted Issues", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoCreateStatus(owner, repo, sha, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/statuses/" + sha;
  var reqDescription = "Create a commit status";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "sha": sha, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function repoListSubscribers(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/subscribers";
  var reqDescription = "List a repo's watchers";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userCurrentDeleteSubscription(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/subscription";
  var reqDescription = "Unwatch a repo";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userCurrentPutSubscription(owner, repo, body, id, limit, page, sha) {
  var url = "repos/" + owner + "/" + repo + "/subscription";
  var reqDescription = "Watch a repo";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "sha": sha,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "limit": limit, "page": page, "sha": sha}) }); }
  return res;
}

function repoGetRunnerRegistrationToken(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/actions/runners/registration-token";
  var reqDescription = "Get a repository's actions runner registration token";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoListActionsSecrets(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/actions/secrets";
  var reqDescription = "List an repo's actions secrets";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyRepositoryRejects(body, id, limit, owner, page, repo, sha) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "sha":' + JSON.stringify(sha);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/statuses/" + sha, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoryExists(id) { pvg.success("Repository verified"); }
function matchAnyRepositoryAdded() { return bp.EventSet("Added Repository", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepository() { return bp.EventSet("Deleted Repository", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteRepoSecret(owner, repo, secretname) {
  var url = "repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var reqDescription = "Delete a secret in a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateRepoSecret(owner, repo, secretname, CreateOrUpdateSecretOption, body) {
  var url = "repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var reqDescription = "Create or Update a secret value in a repository";
  var body = {
    "CreateOrUpdateSecretOption": CreateOrUpdateSecretOption,
    "body": body,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "secretname": secretname, "CreateOrUpdateSecretOption": CreateOrUpdateSecretOption, "body": body}) }); }
  return res;
}

function verifySecretsExists(owner) { pvg.success("Secrets verified"); }
function matchAnySecretsAdded() { return bp.EventSet("Added Secrets", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedSecrets() { return bp.EventSet("Deleted Secrets", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function ListActionTasks(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/actions/tasks";
  var reqDescription = "List a repository's action tasks";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404, 409, 422] });
}

function verifyTasksExists(id) { pvg.success("Tasks verified"); }
function matchAnyTasksAdded() { return bp.EventSet("Added Tasks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTasks() { return bp.EventSet("Deleted Tasks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDeleteBranchProtection(owner, repo, name) {
  var url = "repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var reqDescription = "Delete a specific branch protection for the repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditBranchProtection(owner, repo, name, EditBranchProtectionOption, body, id) {
  var url = "repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var reqDescription = "Edit a branch protections for a repository. Only fields that are set will be changed";
  var body = {
    "EditBranchProtectionOption": EditBranchProtectionOption,
    "body": body,
    "id": id,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "name": name, "EditBranchProtectionOption": EditBranchProtectionOption, "body": body, "id": id}) }); }
  return res;
}

function verifyBranchProtectionsExists(id) { pvg.success("BranchProtections verified"); }
function matchAnyBranchProtectionsAdded() { return bp.EventSet("Added BranchProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBranchProtections() { return bp.EventSet("Deleted BranchProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListBranches(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/branches";
  var reqDescription = "List a repository's branches";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoCreateBranch(owner, repo, CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/branches";
  var reqDescription = "Create a branch";
  var body = {
    "CreateBranchRepoOption": CreateBranchRepoOption,
    "UpdateBranchRepoOption": UpdateBranchRepoOption,
    "body": body,
    "branch": branch,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "CreateBranchRepoOption": CreateBranchRepoOption, "UpdateBranchRepoOption": UpdateBranchRepoOption, "body": body, "branch": branch, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function repoDeleteBranch(owner, repo, branch) {
  var url = "repos/" + owner + "/" + repo + "/branches/" + branch;
  var reqDescription = "Delete a specific branch from a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoUpdateBranch(owner, repo, branch, CreateBranchRepoOption, UpdateBranchRepoOption, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/branches/" + branch;
  var reqDescription = "Update a branch";
  var body = {
    "CreateBranchRepoOption": CreateBranchRepoOption,
    "UpdateBranchRepoOption": UpdateBranchRepoOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "branch": branch, "CreateBranchRepoOption": CreateBranchRepoOption, "UpdateBranchRepoOption": UpdateBranchRepoOption, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyBranchesRejects(CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"CreateBranchRepoOption":' + JSON.stringify(CreateBranchRepoOption);
  bodyStr += ', "UpdateBranchRepoOption":' + JSON.stringify(UpdateBranchRepoOption);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "branch":' + JSON.stringify(branch);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/branches", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyBranchesExists(id) { pvg.success("Branches verified"); }
function matchAnyBranchesAdded() { return bp.EventSet("Added Branches", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBranches() { return bp.EventSet("Deleted Branches", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListCollaborators(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/collaborators";
  var reqDescription = "List a repository's collaborators";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoDeleteCollaborator(owner, repo, collaborator) {
  var url = "repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var reqDescription = "Delete a collaborator from a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoAddCollaborator(owner, repo, collaborator, AddCollaboratorOption, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var reqDescription = "Add or Update a collaborator to a repository";
  var body = {
    "AddCollaboratorOption": AddCollaboratorOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "collaborator": collaborator, "AddCollaboratorOption": AddCollaboratorOption, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyCollaboratorsRejects(AddCollaboratorOption, body, collaborator, id, limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"AddCollaboratorOption":' + JSON.stringify(AddCollaboratorOption);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "collaborator":' + JSON.stringify(collaborator);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/collaborators/" + collaborator, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyCollaboratorsExists(id) { pvg.success("Collaborators verified"); }
function matchAnyCollaboratorsAdded() { return bp.EventSet("Added Collaborators", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedCollaborators() { return bp.EventSet("Deleted Collaborators", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetAllCommits(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/commits";
  var reqDescription = "Get a list of all commits from a repository";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 409] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoListStatusesByRef(owner, repo, ref) {
  var url = "repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses";
  var reqDescription = "Get a commit's statuses, by branch/tag/commit reference";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
}

function repoGetCommitPullRequest(owner, repo, sha) {
  var url = "repos/" + owner + "/" + repo + "/commits/" + sha + "/pull";
  var reqDescription = "Get the merged pull request of the commit";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType) {
  var url = "repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType;
  var reqDescription = "Get a commit's diff or patch";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyCommitsExists(id) { pvg.success("Commits verified"); }
function matchAnyCommitsAdded() { return bp.EventSet("Added Commits", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedCommits() { return bp.EventSet("Deleted Commits", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userListRepos(username) {
  var url = "users/" + username + "/repos";
  var reqDescription = "List the repos owned by the given user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function createCurrentUserRepo(body, filepath, id, limit, owner, page, repo, username) {
  var url = "user/repos";
  var reqDescription = "Create a repository";
  var body = {
    "body": body,
    "filepath": filepath,
    "id": id,
    "limit": limit,
    "owner": owner,
    "page": page,
    "repo": repo,
    "username": username,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "filepath": filepath, "id": id, "limit": limit, "owner": owner, "page": page, "repo": repo, "username": username}) }); }
  return res;
}

function repoDeleteFile(owner, repo, filepath) {
  var url = "repos/" + owner + "/" + repo + "/contents/" + filepath;
  var reqDescription = "Delete a file in a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404, 423] });
}

function repoUpdateFile(owner, repo, filepath, body, id, limit, page, username) {
  var url = "repos/" + owner + "/" + repo + "/contents/" + filepath;
  var reqDescription = "Update a file in a repository";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "username": username,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "filepath": filepath, "body": body, "id": id, "limit": limit, "page": page, "username": username}) }); }
  return res;
}

function userListStarred(username) {
  var url = "users/" + username + "/starred";
  var reqDescription = "The repos that the given user has starred";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyRepositoriesRejects(body, filepath, id, limit, owner, page, repo, username) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "filepath":' + JSON.stringify(filepath);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("user/repos", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoriesExists(id) { pvg.success("Repositories verified"); }
function matchAnyRepositoriesAdded() { return bp.EventSet("Added Repositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepositories() { return bp.EventSet("Deleted Repositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listForks(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/forks";
  var reqDescription = "List a repository's forks";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function createFork(owner, repo, body, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/forks";
  var reqDescription = "Fork a repository";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 403, 404, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyForksRejects(body, id, limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/forks", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyForksExists(id) { pvg.success("Forks verified"); }
function matchAnyForksAdded() { return bp.EventSet("Added Forks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedForks() { return bp.EventSet("Deleted Forks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyBlobsExists(id) { pvg.success("Blobs verified"); }
function matchAnyBlobsAdded() { return bp.EventSet("Added Blobs", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBlobs() { return bp.EventSet("Deleted Blobs", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyNotesExists(id) { pvg.success("Notes verified"); }
function matchAnyNotesAdded() { return bp.EventSet("Added Notes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNotes() { return bp.EventSet("Deleted Notes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListAllGitRefs(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/git/refs";
  var reqDescription = "Get specified ref or filtered repository's refs";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyGitRefsExists(id) { pvg.success("GitRefs verified"); }
function matchAnyGitRefsAdded() { return bp.EventSet("Added GitRefs", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitRefs() { return bp.EventSet("Deleted GitRefs", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyGitTagsExists(id) { pvg.success("GitTags verified"); }
function matchAnyGitTagsAdded() { return bp.EventSet("Added GitTags", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitTags() { return bp.EventSet("Deleted GitTags", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyGitTreesExists(id) { pvg.success("GitTrees verified"); }
function matchAnyGitTreesAdded() { return bp.EventSet("Added GitTrees", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitTrees() { return bp.EventSet("Deleted GitTrees", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListGitHooks(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/hooks/git";
  var reqDescription = "List the Git hooks in a repository";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoDeleteGitHook(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var reqDescription = "Delete a Git hook in a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function repoEditGitHook(owner, repo, id, body) {
  var url = "repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var reqDescription = "Edit a Git hook in a repository";
  var body = {
    "body": body,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "body": body}) }); }
  return res;
}

function verifyGitHooksExists(id) { pvg.success("GitHooks verified"); }
function matchAnyGitHooksAdded() { return bp.EventSet("Added GitHooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitHooks() { return bp.EventSet("Deleted GitHooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyIssueConfigExists(id) { pvg.success("IssueConfig verified"); }
function matchAnyIssueConfigAdded() { return bp.EventSet("Added IssueConfig", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueConfig() { return bp.EventSet("Deleted IssueConfig", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetMilestonesList(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/milestones";
  var reqDescription = "Get all of a repository's opened milestones";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateMilestone(owner, repo, body, id, limit, name, page, state) {
  var url = "repos/" + owner + "/" + repo + "/milestones";
  var reqDescription = "Create a milestone";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "name": name,
    "page": page,
    "state": state,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "limit": limit, "name": name, "page": page, "state": state}) }); }
  return res;
}

function verifyIssueRejects(body, id, limit, name, owner, page, repo, state) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "state":' + JSON.stringify(state);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/milestones", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueExists(id) { pvg.success("Issue verified"); }
function matchAnyIssueAdded() { return bp.EventSet("Added Issue", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssue() { return bp.EventSet("Deleted Issue", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetRepoComments(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments";
  var reqDescription = "List all comments in a repository";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueDeleteComment(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var reqDescription = "Delete a comment";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditComment(owner, repo, id, before, body, limit, page, since) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var reqDescription = "Edit a comment";
  var body = {
    "before": before,
    "body": body,
    "limit": limit,
    "page": page,
    "since": since,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "before": before, "body": body, "limit": limit, "page": page, "since": since}) }); }
  return res;
}

function verifyCommentExists(id) { pvg.success("Comment verified"); }
function matchAnyCommentAdded() { return bp.EventSet("Added Comment", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedComment() { return bp.EventSet("Deleted Comment", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListIssueCommentAttachments(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var reqDescription = "List comment's attachments";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueCommentAttachment(owner, repo, id, attachment, attachment_id, body, name) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var reqDescription = "Create a comment attachment";
  var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "attachment": attachment, "attachment_id": attachment_id, "body": body, "name": name}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditIssueCommentAttachment(owner, repo, id, attachment_id, attachment, body, name) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var reqDescription = "Edit a comment attachment";
  var body = {
    "attachment": attachment,
    "body": body,
    "name": name,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "attachment_id": attachment_id, "attachment": attachment, "body": body, "name": name}) }); }
  return res;
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var reqDescription = "Delete a comment attachment";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 423] });
}

function verifyIssueCommentAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"attachment":' + JSON.stringify(attachment);
  bodyStr += ', "attachment_id":' + JSON.stringify(attachment_id);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentAttachmentsExists(id) { pvg.success("IssueCommentAttachments verified"); }
function matchAnyIssueCommentAttachmentsAdded() { return bp.EventSet("Added IssueCommentAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueCommentAttachments() { return bp.EventSet("Deleted IssueCommentAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetCommentReactions(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var reqDescription = "Get a list of reactions from a comment of an issue";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404] });
}

function issuePostCommentReaction(owner, repo, id, content) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var reqDescription = "Add a reaction to a comment of an issue";
  var body = {
    "content": content,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "content": content}) }); }
  return res;
}

function issueDeleteCommentReaction(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var reqDescription = "Remove a reaction from a comment of an issue";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404] });
}

function verifyIssueCommentReactionsRejects(content, id, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"content":' + JSON.stringify(content);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentReactionsExists(owner) { pvg.success("IssueCommentReactions verified"); }
function matchAnyIssueCommentReactionsAdded() { return bp.EventSet("Added IssueCommentReactions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueCommentReactions() { return bp.EventSet("Deleted IssueCommentReactions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPinnedIssues(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/issues/pinned";
  var reqDescription = "List a repo's pinned issues";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyPinnedIssuesExists(id) { pvg.success("PinnedIssues verified"); }
function matchAnyPinnedIssuesAdded() { return bp.EventSet("Added PinnedIssues", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPinnedIssues() { return bp.EventSet("Deleted PinnedIssues", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListIssueAttachments(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var reqDescription = "List issue's attachments";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueAttachment(owner, repo, index, attachment, attachment_id, body, id, name) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var reqDescription = "Create an issue attachment";
  var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "id": id,
    "name": name,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "attachment": attachment, "attachment_id": attachment_id, "body": body, "id": id, "name": name}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditIssueAttachment(owner, repo, index, attachment_id, attachment, body, id, name) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var reqDescription = "Edit an issue attachment";
  var body = {
    "attachment": attachment,
    "body": body,
    "id": id,
    "name": name,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "attachment_id": attachment_id, "attachment": attachment, "body": body, "id": id, "name": name}) }); }
  return res;
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var reqDescription = "Delete an issue attachment";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 423] });
}

function verifyIssueAttachmentsRejects(attachment, attachment_id, body, id, index, name, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"attachment":' + JSON.stringify(attachment);
  bodyStr += ', "attachment_id":' + JSON.stringify(attachment_id);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/assets", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueAttachmentsExists(id) { pvg.success("IssueAttachments verified"); }
function matchAnyIssueAttachmentsAdded() { return bp.EventSet("Added IssueAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueAttachments() { return bp.EventSet("Deleted IssueAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListBlocks(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var reqDescription = "List issues that are blocked by this issue";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateIssueBlocking(owner, repo, index, body, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var reqDescription = "Block the issue given in the body by the issue in path";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function issueRemoveIssueBlocking(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var reqDescription = "Unblock the issue given in the body by the issue in path";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyIssueBlocksRejects(body, index, limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/blocks", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueBlocksExists(owner) { pvg.success("IssueBlocks verified"); }
function matchAnyIssueBlocksAdded() { return bp.EventSet("Added IssueBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueBlocks() { return bp.EventSet("Deleted IssueBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetComments(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var reqDescription = "List all comments on an issue";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueCreateComment(owner, repo, index, before, body, id, since) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var reqDescription = "Add a comment to an issue";
  var body = {
    "before": before,
    "body": body,
    "id": id,
    "since": since,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "before": before, "body": body, "id": id, "since": since}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditCommentDeprecated(owner, repo, index, id, before, body, since) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var reqDescription = "Edit a comment";
  var body = {
    "before": before,
    "body": body,
    "since": since,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "id": id, "before": before, "body": body, "since": since}) }); }
  return res;
}

function issueDeleteCommentDeprecated(owner, repo, index, id) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var reqDescription = "Delete a comment";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyIssueCommentsRejects(before, body, id, index, owner, repo, since) {
  var bodyStr = "{";
  bodyStr += '"before":' + JSON.stringify(before);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "since":' + JSON.stringify(since);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/comments", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentsExists(id) { pvg.success("IssueComments verified"); }
function matchAnyIssueCommentsAdded() { return bp.EventSet("Added IssueComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueComments() { return bp.EventSet("Deleted IssueComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueSubscriptions(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions";
  var reqDescription = "Get users who subscribed on an issue.";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueDeleteSubscription(owner, repo, index, user) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var reqDescription = "Unsubscribe user from issue";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 304, 404] });
}

function issueAddSubscription(owner, repo, index, user, id, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var reqDescription = "Subscribe user to issue";
  var body = {
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "user": user, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function verifyIssueSubscriptionsRejects(id, index, limit, owner, page, repo, user) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "user":' + JSON.stringify(user);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueSubscriptionsExists(id) { pvg.success("IssueSubscriptions verified"); }
function matchAnyIssueSubscriptionsAdded() { return bp.EventSet("Added IssueSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueSubscriptions() { return bp.EventSet("Deleted IssueSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetCommentsAndTimeline(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/timeline";
  var reqDescription = "List all comments and events on an issue";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyIssueTimelineExists(id) { pvg.success("IssueTimeline verified"); }
function matchAnyIssueTimelineAdded() { return bp.EventSet("Added IssueTimeline", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueTimeline() { return bp.EventSet("Deleted IssueTimeline", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueResetTime(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var reqDescription = "Reset a tracked time of an issue";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issueTrackedTimes(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var reqDescription = "List an issue's tracked times";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueAddTime(owner, repo, index, before, body, limit, page, since, user) {
  var url = "repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var reqDescription = "Add tracked time to a issue";
  var body = {
    "before": before,
    "body": body,
    "limit": limit,
    "page": page,
    "since": since,
    "user": user,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "before": before, "body": body, "limit": limit, "page": page, "since": since, "user": user}) }); }
  return res;
}

function verifyIssueTimesRejects(before, body, index, limit, owner, page, repo, since, user) {
  var bodyStr = "{";
  bodyStr += '"before":' + JSON.stringify(before);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "since":' + JSON.stringify(since);
  bodyStr += ', "user":' + JSON.stringify(user);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/issues/" + index + "/times", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueTimesExists(owner) { pvg.success("IssueTimes verified"); }
function matchAnyIssueTimesAdded() { return bp.EventSet("Added IssueTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueTimes() { return bp.EventSet("Deleted IssueTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListKeys() {
  var url = "user/keys";
  var reqDescription = "List the authenticated user's public keys";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentPostKey(body, fingerprint, id, limit, page) {
  var url = "user/keys";
  var reqDescription = "Create a public key";
  var body = {
    "body": body,
    "fingerprint": fingerprint,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "fingerprint": fingerprint, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function userCurrentGetKey(id) {
  var url = "user/keys/" + id;
  var reqDescription = "Get a public key";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userCurrentDeleteKey(id) {
  var url = "user/keys/" + id;
  var reqDescription = "Delete a public key";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyKeysRejects(body, fingerprint, id, limit, page) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "fingerprint":' + JSON.stringify(fingerprint);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("user/keys", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyKeysExists(id) { pvg.success("Keys verified"); }
function matchAnyKeysAdded() { return bp.EventSet("Added Keys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedKeys() { return bp.EventSet("Deleted Keys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueDeleteMilestone(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/milestones/" + id;
  var reqDescription = "Delete a milestone";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function issueEditMilestone(owner, repo, id, body) {
  var url = "repos/" + owner + "/" + repo + "/milestones/" + id;
  var reqDescription = "Update a milestone";
  var body = {
    "body": body,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "body": body}) }); }
  return res;
}

function verifyMilestonesExists(id) { pvg.success("Milestones verified"); }
function matchAnyMilestonesAdded() { return bp.EventSet("Added Milestones", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMilestones() { return bp.EventSet("Deleted Milestones", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoMirrorSync(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/mirror-sync";
  var reqDescription = "Sync a mirrored repository";
  var body = {
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id}) }); }
  return res;
}

function verifyMirrorSyncRejects(id, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/mirror-sync", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMirrorSyncExists(id) { pvg.success("MirrorSync verified"); }
function matchAnyMirrorSyncAdded() { return bp.EventSet("Added MirrorSync", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMirrorSync() { return bp.EventSet("Deleted MirrorSync", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyNewPinAllowedExists(id) { pvg.success("NewPinAllowed verified"); }
function matchAnyNewPinAllowedAdded() { return bp.EventSet("Added NewPinAllowed", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNewPinAllowed() { return bp.EventSet("Deleted NewPinAllowed", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetPullRequestFiles(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/files";
  var reqDescription = "Get changed files for a pull request";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoUpdatePullRequest(owner, repo, index, body, id, limit, page, skip_to, style, whitespace) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var reqDescription = "Merge PR's baseBranch into headBranch";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "skip-to": skip_to,
    "style": style,
    "whitespace": whitespace,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "body": body, "id": id, "limit": limit, "page": page, "skip-to": skip_to, "style": style, "whitespace": whitespace}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditPullRequest(owner, repo, index, body, id, limit, page, skip_to, style, whitespace) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index;
  var reqDescription = "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "skip-to": skip_to,
    "style": style,
    "whitespace": whitespace,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409, 412, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "body": body, "id": id, "limit": limit, "page": page, "skip-to": skip_to, "style": style, "whitespace": whitespace}) }); }
  return res;
}

function repoCancelScheduledAutoMerge(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var reqDescription = "Cancel the scheduled auto merge for the given pull request";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function verifyPullRequestsRejects(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "skip-to":' + JSON.stringify(skip_to);
  bodyStr += ', "style":' + JSON.stringify(style);
  bodyStr += ', "whitespace":' + JSON.stringify(whitespace);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/pulls/" + index + "/update", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullRequestsExists(id) { pvg.success("PullRequests verified"); }
function matchAnyPullRequestsAdded() { return bp.EventSet("Added PullRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullRequests() { return bp.EventSet("Deleted PullRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDeletePullReviewRequests(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var reqDescription = "Cancel review requests for a pull request";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function repoCreatePullReviewRequests(owner, repo, index, body) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var reqDescription = "Create review requests for a pull request";
  var body = {
    "body": body,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "body": body}) }); }
  return res;
}

function verifyPullReviewRequestsRejects(body, index, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewRequestsExists(owner) { pvg.success("PullReviewRequests verified"); }
function matchAnyPullReviewRequestsAdded() { return bp.EventSet("Added PullReviewRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewRequests() { return bp.EventSet("Deleted PullReviewRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPullReviews(owner, repo, index) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var reqDescription = "List all reviews for a pull request";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoSubmitPullReview(owner, repo, index, id, body, limit, page) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var reqDescription = "Submit a pending review to a pull request";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "id": id, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function repoDeletePullReview(owner, repo, index, id) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var reqDescription = "Delete a specific review from a pull request";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyPullReviewsRejects(body, id, index, limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewsExists(id) { pvg.success("PullReviews verified"); }
function matchAnyPullReviewsAdded() { return bp.EventSet("Added PullReviews", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviews() { return bp.EventSet("Deleted PullReviews", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyPullReviewCommentsExists(id) { pvg.success("PullReviewComments verified"); }
function matchAnyPullReviewCommentsAdded() { return bp.EventSet("Added PullReviewComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewComments() { return bp.EventSet("Deleted PullReviewComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDismissPullReview(owner, repo, index, id, body) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var reqDescription = "Dismiss a review for a pull request";
  var body = {
    "body": body,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "id": id, "body": body}) }); }
  return res;
}

function verifyPullReviewDismissalsRejects(body, id, index, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewDismissalsExists(id) { pvg.success("PullReviewDismissals verified"); }
function matchAnyPullReviewDismissalsAdded() { return bp.EventSet("Added PullReviewDismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewDismissals() { return bp.EventSet("Deleted PullReviewDismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoUnDismissPullReview(owner, repo, index, id) {
  var url = "repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals";
  var reqDescription = "Cancel to dismiss a review for a pull request";
  var body = {
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "index": index, "id": id}) }); }
  return res;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "index":' + JSON.stringify(index);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewUndismissalsExists(id) { pvg.success("PullReviewUndismissals verified"); }
function matchAnyPullReviewUndismissalsAdded() { return bp.EventSet("Added PullReviewUndismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewUndismissals() { return bp.EventSet("Deleted PullReviewUndismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPushMirrors(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/push_mirrors";
  var reqDescription = "Get all push mirrors of the repository";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404] });
}

function repoPushMirrorSync(owner, repo, id, limit, name, page) {
  var url = "repos/" + owner + "/" + repo + "/push_mirrors-sync";
  var reqDescription = "Sync all push mirrored repository";
  var body = {
    "id": id,
    "limit": limit,
    "name": name,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "limit": limit, "name": name, "page": page}) }); }
  return res;
}

function repoDeletePushMirror(owner, repo, name) {
  var url = "repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var reqDescription = "Deletes a push mirror from a repository by remoteName";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyPushMirrorsRejects(id, limit, name, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/push_mirrors-sync", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPushMirrorsExists(id) { pvg.success("PushMirrors verified"); }
function matchAnyPushMirrorsAdded() { return bp.EventSet("Added PushMirrors", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPushMirrors() { return bp.EventSet("Deleted PushMirrors", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyRawFilesExists(id) { pvg.success("RawFiles verified"); }
function matchAnyRawFilesAdded() { return bp.EventSet("Added RawFiles", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRawFiles() { return bp.EventSet("Deleted RawFiles", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListReleases(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/releases";
  var reqDescription = "List a repo's releases";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoCreateRelease(owner, repo, body, draft, id, limit, page, pre_release, tag) {
  var url = "repos/" + owner + "/" + repo + "/releases";
  var reqDescription = "Create a release";
  var body = {
    "body": body,
    "draft": draft,
    "id": id,
    "limit": limit,
    "page": page,
    "pre-release": pre_release,
    "tag": tag,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "draft": draft, "id": id, "limit": limit, "page": page, "pre-release": pre_release, "tag": tag}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoDeleteReleaseByTag(owner, repo, tag) {
  var url = "repos/" + owner + "/" + repo + "/releases/tags/" + tag;
  var reqDescription = "Delete a release by tag name";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoDeleteRelease(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id;
  var reqDescription = "Delete a release";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetRelease(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id;
  var reqDescription = "Get a release";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditRelease(owner, repo, id, body, draft, limit, page, pre_release, tag) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id;
  var reqDescription = "Update a release";
  var body = {
    "body": body,
    "draft": draft,
    "limit": limit,
    "page": page,
    "pre-release": pre_release,
    "tag": tag,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "body": body, "draft": draft, "limit": limit, "page": page, "pre-release": pre_release, "tag": tag}) }); }
  return res;
}

function verifyReleasesRejects(body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "draft":' + JSON.stringify(draft);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "pre-release":' + JSON.stringify(pre_release);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "tag":' + JSON.stringify(tag);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/releases", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyReleasesExists(id) { pvg.success("Releases verified"); }
function matchAnyReleasesAdded() { return bp.EventSet("Added Releases", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReleases() { return bp.EventSet("Deleted Releases", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListReleaseAttachments(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var reqDescription = "List release's attachments";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoCreateReleaseAttachment(owner, repo, id, attachment, attachment_id, body, name) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var reqDescription = "Create a release attachment";
  var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "attachment": attachment, "attachment_id": attachment_id, "body": body, "name": name}) }); }
  return res;
}

function repoDeleteReleaseAttachment(owner, repo, id, attachment_id) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var reqDescription = "Delete a release attachment";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditReleaseAttachment(owner, repo, id, attachment_id, attachment, body, name) {
  var url = "repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var reqDescription = "Edit a release attachment";
  var body = {
    "attachment": attachment,
    "body": body,
    "name": name,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "attachment_id": attachment_id, "attachment": attachment, "body": body, "name": name}) }); }
  return res;
}

function verifyReleaseAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"attachment":' + JSON.stringify(attachment);
  bodyStr += ', "attachment_id":' + JSON.stringify(attachment_id);
  bodyStr += ', "body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "name":' + JSON.stringify(name);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/releases/" + id + "/assets", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyReleaseAttachmentsExists(id) { pvg.success("ReleaseAttachments verified"); }
function matchAnyReleaseAttachmentsAdded() { return bp.EventSet("Added ReleaseAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReleaseAttachments() { return bp.EventSet("Deleted ReleaseAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetReviewers(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/reviewers";
  var reqDescription = "Return all users that can be requested to review in this repo";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyReviewersExists(id) { pvg.success("Reviewers verified"); }
function matchAnyReviewersAdded() { return bp.EventSet("Added Reviewers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReviewers() { return bp.EventSet("Deleted Reviewers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListTagProtection(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/tag_protections";
  var reqDescription = "List tag protections for a repository";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoCreateTagProtection(owner, repo, body, id) {
  var url = "repos/" + owner + "/" + repo + "/tag_protections";
  var reqDescription = "Create a tag protection for a repository";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditTagProtection(owner, repo, id, body) {
  var url = "repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var reqDescription = "Edit a tag protection for a repository. Only fields that are set will be changed";
  var body = {
    "body": body,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "id": id, "body": body}) }); }
  return res;
}

function repoDeleteTagProtection(owner, repo, id) {
  var url = "repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var reqDescription = "Delete a specific tag protection for the repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function verifyTagProtectionsRejects(body, id, owner, repo) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/tag_protections", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTagProtectionsExists(id) { pvg.success("TagProtections verified"); }
function matchAnyTagProtectionsAdded() { return bp.EventSet("Added TagProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTagProtections() { return bp.EventSet("Deleted TagProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListTags(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/tags";
  var reqDescription = "List a repository's tags";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoCreateTag(owner, repo, body, id, limit, page, tag) {
  var url = "repos/" + owner + "/" + repo + "/tags";
  var reqDescription = "Create a new git tag in a repository";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "tag": tag,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "limit": limit, "page": page, "tag": tag}) }); }
  return res;
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoDeleteTag(owner, repo, tag) {
  var url = "repos/" + owner + "/" + repo + "/tags/" + tag;
  var reqDescription = "Delete a repository's tag by name";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 409, 422, 423] });
}

function verifyTagsRejects(body, id, limit, owner, page, repo, tag) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "tag":' + JSON.stringify(tag);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/tags", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTagsExists(id) { pvg.success("Tags verified"); }
function matchAnyTagsAdded() { return bp.EventSet("Added Tags", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTags() { return bp.EventSet("Deleted Tags", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentTrackedTimes() {
  var url = "user/times";
  var reqDescription = "List the current user's tracked times";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyTrackedTimesExists(id) { pvg.success("TrackedTimes verified"); }
function matchAnyTrackedTimesAdded() { return bp.EventSet("Added TrackedTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTrackedTimes() { return bp.EventSet("Deleted TrackedTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function topicSearch() {
  var url = "topics/search";
  var reqDescription = "search topics via keyword";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404] });
}

function repoUpdateTopics(owner, repo, body, limit, page, q, topic, topic1, topic2) {
  var url = "repos/" + owner + "/" + repo + "/topics";
  var reqDescription = "Replace list of topics for a repository";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "q": q,
    "topic": topic,
    "topic1": topic1,
    "topic2": topic2,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "limit": limit, "page": page, "q": q, "topic": topic, "topic1": topic1, "topic2": topic2}) }); }
  return res;
}

function repoDeleteTopic(owner, repo, topic) {
  var url = "repos/" + owner + "/" + repo + "/topics/" + topic;
  var reqDescription = "Delete a topic from a repository";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 422] });
}

function repoAddTopic(owner, repo, topic, body, limit, page, q, topic1, topic2) {
  var url = "repos/" + owner + "/" + repo + "/topics/" + topic;
  var reqDescription = "Add a topic to a repository";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "q": q,
    "topic1": topic1,
    "topic2": topic2,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "topic": topic, "body": body, "limit": limit, "page": page, "q": q, "topic1": topic1, "topic2": topic2}) }); }
  return res;
}

function verifyTopicsRejects(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "q":' + JSON.stringify(q);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "topic":' + JSON.stringify(topic);
  bodyStr += ', "topic1":' + JSON.stringify(topic1);
  bodyStr += ', "topic2":' + JSON.stringify(topic2);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/topics/" + topic, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTopicsExists(owner) { pvg.success("Topics verified"); }
function matchAnyTopicsAdded() { return bp.EventSet("Added Topics", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTopics() { return bp.EventSet("Deleted Topics", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoTransfer(owner, repo, body, id, transferOptions) {
  var url = "repos/" + owner + "/" + repo + "/transfer";
  var reqDescription = "Transfer a repo ownership";
  var body = {
    "body": body,
    "id": id,
    "transferOptions": transferOptions,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 403, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "transferOptions": transferOptions}) }); }
  return res;
}

function acceptRepoTransfer(owner, repo, body, id, transferOptions) {
  var url = "repos/" + owner + "/" + repo + "/transfer/accept";
  var reqDescription = "Accept a repo transfer";
  var body = {
    "body": body,
    "id": id,
    "transferOptions": transferOptions,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "transferOptions": transferOptions}) }); }
  return res;
}

function rejectRepoTransfer(owner, repo, body, id, transferOptions) {
  var url = "repos/" + owner + "/" + repo + "/transfer/reject";
  var reqDescription = "Reject a repo transfer";
  var body = {
    "body": body,
    "id": id,
    "transferOptions": transferOptions,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "transferOptions": transferOptions}) }); }
  return res;
}

function verifyRepositoryTransferRejects(body, id, owner, repo, transferOptions) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "transferOptions":' + JSON.stringify(transferOptions);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/transfer", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoryTransferExists(id) { pvg.success("RepositoryTransfer verified"); }
function matchAnyRepositoryTransferAdded() { return bp.EventSet("Added RepositoryTransfer", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepositoryTransfer() { return bp.EventSet("Deleted RepositoryTransfer", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoCreateWikiPage(owner, repo, body, id, pageName, wikiPageOptions) {
  var url = "repos/" + owner + "/" + repo + "/wiki/new";
  var reqDescription = "Create a wiki page";
  var body = {
    "body": body,
    "id": id,
    "pageName": pageName,
    "wikiPageOptions": wikiPageOptions,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "body": body, "id": id, "pageName": pageName, "wikiPageOptions": wikiPageOptions}) }); }
  return res;
}

function repoDeleteWikiPage(owner, repo, pageName) {
  var url = "repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var reqDescription = "Delete a wiki page";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetByID(id) {
  var url = "repositories/" + id;
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function repoEditWikiPage(owner, repo, pageName, body, id, wikiPageOptions) {
  var url = "repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var reqDescription = "Edit a wiki page";
  var body = {
    "body": body,
    "id": id,
    "wikiPageOptions": wikiPageOptions,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "pageName": pageName, "body": body, "id": id, "wikiPageOptions": wikiPageOptions}) }); }
  return res;
}

function verifyWikiPageRejects(body, id, owner, pageName, repo, wikiPageOptions) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "pageName":' + JSON.stringify(pageName);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += ', "wikiPageOptions":' + JSON.stringify(wikiPageOptions);
  bodyStr += "}";
  svc.post("repos/" + owner + "/" + repo + "/wiki/new", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyWikiPageExists(id) { pvg.success("WikiPage verified"); }
function matchAnyWikiPageAdded() { return bp.EventSet("Added WikiPage", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPage() { return bp.EventSet("Deleted WikiPage", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetWikiPages(owner, repo) {
  var url = "repos/" + owner + "/" + repo + "/wiki/pages";
  var reqDescription = "Get all wiki pages";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyWikiPagesExists(id) { pvg.success("WikiPages verified"); }
function matchAnyWikiPagesAdded() { return bp.EventSet("Added WikiPages", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPages() { return bp.EventSet("Deleted WikiPages", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetWikiPageRevisions(owner, repo, pageName) {
  var url = "repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName;
  var reqDescription = "Get revisions of a wiki page";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyWikiPageRevisionsExists(id) { pvg.success("WikiPageRevisions verified"); }
function matchAnyWikiPageRevisionsAdded() { return bp.EventSet("Added WikiPageRevisions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPageRevisions() { return bp.EventSet("Deleted WikiPageRevisions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getGeneralAPISettings() {
  var url = "settings/api";
  var reqDescription = "Get instance's global settings for api";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getGeneralUISettings() {
  var url = "settings/ui";
  var reqDescription = "Get instance's global settings for ui";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifySettingsExists(id) { pvg.success("Settings verified"); }
function matchAnySettingsAdded() { return bp.EventSet("Added Settings", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedSettings() { return bp.EventSet("Deleted Settings", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getVersion() {
  var url = "version";
  var reqDescription = "Returns the version of the Gitea application";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyMiscellaneousExists(id) { pvg.success("Miscellaneous verified"); }
function matchAnyMiscellaneousAdded() { return bp.EventSet("Added Miscellaneous", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMiscellaneous() { return bp.EventSet("Deleted Miscellaneous", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeamMembers(id) {
  var url = "teams/" + id + "/members";
  var reqDescription = "List a team's members";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgGetTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Get a team";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgAddTeamMember(id, username, limit, page) {
  var url = "teams/" + id + "/members/" + username;
  var reqDescription = "Add a team member";
  var body = {
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "limit": limit, "page": page}) }); }
  return res;
}

function orgDeleteTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Delete a team";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function verifyTeamMembersRejects(id, limit, page, username) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "username":' + JSON.stringify(username);
  bodyStr += "}";
  svc.post("teams/" + id + "/members/" + username, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTeamMembersExists(id) { pvg.success("TeamMembers verified"); }
function matchAnyTeamMembersAdded() { return bp.EventSet("Added TeamMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeamMembers() { return bp.EventSet("Deleted TeamMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeamRepos(id) {
  var url = "teams/" + id + "/repos";
  var reqDescription = "List a team's repos";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgGetTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Get a team";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function orgAddTeamRepository(id, org, repo, limit, page) {
  var url = "teams/" + id + "/repos/" + org + "/" + repo;
  var reqDescription = "Add a repository to a team";
  var body = {
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "org": org, "repo": repo, "limit": limit, "page": page}) }); }
  return res;
}

function orgDeleteTeam(id) {
  var url = "teams/" + id;
  var reqDescription = "Delete a team";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function verifyTeamReposRejects(id, limit, org, page, repo) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "org":' + JSON.stringify(org);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("teams/" + id + "/repos/" + org + "/" + repo, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTeamReposExists(id) { pvg.success("TeamRepos verified"); }
function matchAnyTeamReposAdded() { return bp.EventSet("Added TeamRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeamRepos() { return bp.EventSet("Deleted TeamRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetCurrent() {
  var url = "user";
  var reqDescription = "Get the authenticated user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userGetRunnerRegistrationToken() {
  var url = "user/actions/runners/registration-token";
  var reqDescription = "Get an user's actions runner registration token";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function deleteUserSecret(secretname) {
  var url = "user/actions/secrets/" + secretname;
  var reqDescription = "Delete a secret in a user scope";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404] });
}

function updateUserSecret(secretname, body, limit, page) {
  var url = "user/actions/secrets/" + secretname;
  var reqDescription = "Create or Update a secret value in a user scope";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function getUserVariablesList() {
  var url = "user/actions/variables";
  var reqDescription = "Get the user-level list of variables which is created by current doer";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
}

function verifyUserExists(secretname) { pvg.success("User verified"); }
function matchAnyUserAdded() { return bp.EventSet("Added User", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUser() { return bp.EventSet("Deleted User", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteUserVariable(variablename) {
  var url = "user/actions/variables/" + variablename;
  var reqDescription = "Delete a user-level variable which is created by current doer";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getUserVariable(variablename) {
  var url = "user/actions/variables/" + variablename;
  var reqDescription = "Get a user-level variable which is created by current doer";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404] });
}

function createUserVariable(variablename, body) {
  var url = "user/actions/variables/" + variablename;
  var reqDescription = "Create a user-level variable";
  var body = {
    "body": body,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "body": body}) }); }
  return res;
}

function updateUserVariable(variablename, body) {
  var url = "user/actions/variables/" + variablename;
  var reqDescription = "Update a user-level variable which is created by current doer";
  var body = {
    "body": body,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "body": body}) }); }
  return res;
}

function verifyUserVariablesRejects(body, variablename) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "variablename":' + JSON.stringify(variablename);
  bodyStr += "}";
  svc.post("user/actions/variables/" + variablename, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserVariablesExists(variablename) { pvg.success("UserVariables verified"); }
function matchAnyUserVariablesAdded() { return bp.EventSet("Added UserVariables", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserVariables() { return bp.EventSet("Deleted UserVariables", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetOauth2Application() {
  var url = "user/applications/oauth2";
  var reqDescription = "List the authenticated user's oauth2 applications";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCreateOAuth2Application(body, id, limit, page) {
  var url = "user/applications/oauth2";
  var reqDescription = "creates a new OAuth2 application";
  var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function userDeleteOAuth2Application(id) {
  var url = "user/applications/oauth2/" + id;
  var reqDescription = "delete an OAuth2 Application";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function userGetOAuth2Application(id) {
  var url = "user/applications/oauth2/" + id;
  var reqDescription = "get an OAuth2 Application";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userUpdateOAuth2Application(id, body, limit, page) {
  var url = "user/applications/oauth2/" + id;
  var reqDescription = "update an OAuth2 Application, this includes regenerating the client secret";
  var body = {
    "body": body,
    "limit": limit,
    "page": page,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "limit": limit, "page": page}) }); }
  return res;
}

function verifyOAuth2ApplicationsRejects(body, id, limit, page) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("user/applications/oauth2", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOAuth2ApplicationsExists(id) { pvg.success("OAuth2Applications verified"); }
function matchAnyOAuth2ApplicationsAdded() { return bp.EventSet("Added OAuth2Applications", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOAuth2Applications() { return bp.EventSet("Deleted OAuth2Applications", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userDeleteAvatar() {
  var url = "user/avatar";
  var reqDescription = "Delete Avatar";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
}

function userUpdateAvatar(body, id) {
  var url = "user/avatar";
  var reqDescription = "Update Avatar";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id}) }); }
  return res;
}

function verifyUserAvatarRejects(body, id) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += "}";
  svc.post("user/avatar", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserAvatarExists(id) { pvg.success("UserAvatar verified"); }
function matchAnyUserAvatarAdded() { return bp.EventSet("Added UserAvatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserAvatar() { return bp.EventSet("Deleted UserAvatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListBlocks() {
  var url = "user/blocks";
  var reqDescription = "List users blocked by the authenticated user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userUnblockUser(username) {
  var url = "user/blocks/" + username;
  var reqDescription = "Unblock a user";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 422] });
}

function userCheckUserBlock(username) {
  var url = "user/blocks/" + username;
  var reqDescription = "Check if a user is blocked by the authenticated user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404] });
}

function userBlockUser(username, limit, note, page) {
  var url = "user/blocks/" + username;
  var reqDescription = "Block a user";
  var body = {
    "limit": limit,
    "note": note,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "limit": limit, "note": note, "page": page}) }); }
  return res;
}

function verifyUserBlocksExists(username) { pvg.success("UserBlocks verified"); }
function matchAnyUserBlocksAdded() { return bp.EventSet("Added UserBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserBlocks() { return bp.EventSet("Deleted UserBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userDeleteEmail() {
  var url = "user/emails";
  var reqDescription = "Delete email addresses";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function userListEmails() {
  var url = "user/emails";
  var reqDescription = "List the authenticated user's email addresses";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userAddEmail(body, id) {
  var url = "user/emails";
  var reqDescription = "Add email addresses";
  var body = {
    "body": body,
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"body": body, "id": id}) }); }
  return res;
}

function verifyUserEmailsRejects(body, id) {
  var bodyStr = "{";
  bodyStr += '"body":' + JSON.stringify(body);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += "}";
  svc.post("user/emails", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserEmailsExists(id) { pvg.success("UserEmails verified"); }
function matchAnyUserEmailsAdded() { return bp.EventSet("Added UserEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserEmails() { return bp.EventSet("Deleted UserEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListFollowers() {
  var url = "user/followers";
  var reqDescription = "List the authenticated user's followers";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserFollowersExists(id) { pvg.success("UserFollowers verified"); }
function matchAnyUserFollowersAdded() { return bp.EventSet("Added UserFollowers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowers() { return bp.EventSet("Deleted UserFollowers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListFollowing() {
  var url = "user/following";
  var reqDescription = "List the users that the authenticated user is following";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserFollowingExists(id) { pvg.success("UserFollowing verified"); }
function matchAnyUserFollowingAdded() { return bp.EventSet("Added UserFollowing", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowing() { return bp.EventSet("Deleted UserFollowing", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentDeleteFollow(username) {
  var url = "user/following/" + username;
  var reqDescription = "Unfollow a user";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckFollowing(username) {
  var url = "user/following/" + username;
  var reqDescription = "Check whether a user is followed by the authenticated user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutFollow(username) {
  var url = "user/following/" + username;
  var reqDescription = "Follow a user";
  var body = {
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) }); }
  return res;
}

function verifyUserFollowingSpecificExists(username) { pvg.success("UserFollowingSpecific verified"); }
function matchAnyUserFollowingSpecificAdded() { return bp.EventSet("Added UserFollowingSpecific", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowingSpecific() { return bp.EventSet("Deleted UserFollowingSpecific", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentGetGPGKey(id) {
  var url = "user/gpg_keys/" + id;
  var reqDescription = "Get a GPG key";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function userCurrentListGPGKeys() {
  var url = "user/gpg_keys";
  var reqDescription = "List the authenticated user's GPG keys";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentPostGPGKey(Form, id, limit, page) {
  var url = "user/gpg_keys";
  var reqDescription = "Create a GPG key";
  var body = {
    "Form": Form,
    "id": id,
    "limit": limit,
    "page": page,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"Form": Form, "id": id, "limit": limit, "page": page}) }); }
  return res;
}

function userCurrentDeleteGPGKey(id) {
  var url = "user/gpg_keys/" + id;
  var reqDescription = "Remove a GPG key";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyGPGKeysRejects(Form, id, limit, page) {
  var bodyStr = "{";
  bodyStr += '"Form":' + JSON.stringify(Form);
  bodyStr += ', "id":' + JSON.stringify(id);
  bodyStr += ', "limit":' + JSON.stringify(limit);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += "}";
  svc.post("user/gpg_keys", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyGPGKeysExists(id) { pvg.success("GPGKeys verified"); }
function matchAnyGPGKeysAdded() { return bp.EventSet("Added GPGKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeys() { return bp.EventSet("Deleted GPGKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getVerificationToken() {
  var url = "user/gpg_key_token";
  var reqDescription = "Get a Token to verify";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404] });
}

function verifyGPGKeyTokenExists(id) { pvg.success("GPGKeyToken verified"); }
function matchAnyGPGKeyTokenAdded() { return bp.EventSet("Added GPGKeyToken", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeyToken() { return bp.EventSet("Deleted GPGKeyToken", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userVerifyGPGKey(id) {
  var url = "user/gpg_key_verify";
  var reqDescription = "Verify a GPG key";
  var body = {
    "id": id,
  };
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return res;
}

function verifyGPGKeyVerificationRejects(id) {
  var bodyStr = "{";
  bodyStr += '"id":' + JSON.stringify(id);
  bodyStr += "}";
  svc.post("user/gpg_key_verify", { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyGPGKeyVerificationExists(id) { pvg.success("GPGKeyVerification verified"); }
function matchAnyGPGKeyVerificationAdded() { return bp.EventSet("Added GPGKeyVerification", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeyVerification() { return bp.EventSet("Deleted GPGKeyVerification", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getUserSettings() {
  var url = "user/settings";
  var reqDescription = "Get user settings";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updateUserSettings(UserSettingsOptions, body, id) {
  var url = "user/settings";
  var reqDescription = "Update user settings";
  var body = {
    "UserSettingsOptions": UserSettingsOptions,
    "body": body,
    "id": id,
  };
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"UserSettingsOptions": UserSettingsOptions, "body": body, "id": id}) }); }
  return res;
}

function verifyUserSettingsExists(id) { pvg.success("UserSettings verified"); }
function matchAnyUserSettingsAdded() { return bp.EventSet("Added UserSettings", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserSettings() { return bp.EventSet("Deleted UserSettings", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListStarred() {
  var url = "user/starred";
  var reqDescription = "The repos that the authenticated user has starred";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentDeleteStar(owner, repo) {
  var url = "user/starred/" + owner + "/" + repo;
  var reqDescription = "Unstar the given repo";
  return svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckStarring(owner, repo) {
  var url = "user/starred/" + owner + "/" + repo;
  var reqDescription = "Whether the authenticated is starring the repo";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404] });
}

function userCurrentPutStar(owner, repo, limit, page) {
  var url = "user/starred/" + owner + "/" + repo;
  var reqDescription = "Star the given repo";
  var body = {
    "limit": limit,
    "page": page,
  };
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) { bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "limit": limit, "page": page}) }); }
  return res;
}

function verifyUserStarredRejects(limit, owner, page, repo) {
  var bodyStr = "{";
  bodyStr += '"limit":' + JSON.stringify(limit);
  bodyStr += ', "owner":' + JSON.stringify(owner);
  bodyStr += ', "page":' + JSON.stringify(page);
  bodyStr += ', "repo":' + JSON.stringify(repo);
  bodyStr += "}";
  svc.post("user/starred/" + owner + "/" + repo, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserStarredExists(owner) { pvg.success("UserStarred verified"); }
function matchAnyUserStarredAdded() { return bp.EventSet("Added UserStarred", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserStarred() { return bp.EventSet("Deleted UserStarred", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetStopWatches() {
  var url = "user/stopwatches";
  var reqDescription = "Get list of all existing stopwatches";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserStopwatchesExists(id) { pvg.success("UserStopwatches verified"); }
function matchAnyUserStopwatchesAdded() { return bp.EventSet("Added UserStopwatches", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserStopwatches() { return bp.EventSet("Deleted UserStopwatches", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListSubscriptions() {
  var url = "user/subscriptions";
  var reqDescription = "List repositories watched by the authenticated user";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserSubscriptionsExists(id) { pvg.success("UserSubscriptions verified"); }
function matchAnyUserSubscriptionsAdded() { return bp.EventSet("Added UserSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserSubscriptions() { return bp.EventSet("Deleted UserSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
