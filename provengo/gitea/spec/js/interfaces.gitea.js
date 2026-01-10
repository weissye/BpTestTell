//@provengo summon rest
const svc = new RESTSession("http://localhost:8000/api/v1/", "client", { headers: { "Content-Type": "application/json" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };

function activitypubPerson(user_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "activitypub/user-id/{user-id}";
  url = url.replace("{user-id}", resolve(user_id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function activitypubPersonInbox(user_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "activitypub/user-id/{user-id}/inbox";
  url = url.replace("{user-id}", resolve(user_id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"user-id": resolve(user_id)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyActivityPubRejects(user_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "activitypub/user-id/{user-id}/inbox";
  url = url.replace("{user-id}", resolve(user_id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"user-id":' + (JSON.stringify(resolve(user_id)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyActivityPubExists() { pvg.success("ActivityPub verified"); }
function matchAnyActivityPubAdded() { return bp.EventSet("Added ActivityPub", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedActivityPub() { return bp.EventSet("Deleted ActivityPub", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCronList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/cron";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403] });
}

function adminCronRun(task) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/cron/{task}";
  url = url.replace("{task}", resolve(task));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"task": resolve(task)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyAdminCronRejects(task) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/cron/{task}";
  url = url.replace("{task}", resolve(task));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"task":' + (JSON.stringify(resolve(task)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyAdminCronExists() { pvg.success("AdminCron verified"); }
function matchAnyAdminCronAdded() { return bp.EventSet("Added AdminCron", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAdminCron() { return bp.EventSet("Deleted AdminCron", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminGetAllEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/emails";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403] });
}

function verifyAdminEmailsExists() { pvg.success("AdminEmails verified"); }
function matchAnyAdminEmailsAdded() { return bp.EventSet("Added AdminEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAdminEmails() { return bp.EventSet("Deleted AdminEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminSearchEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/emails/search";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403] });
}

function verifyEmailsExists() { pvg.success("Emails verified"); }
function matchAnyEmailsAdded() { return bp.EventSet("Added Emails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedEmails() { return bp.EventSet("Deleted Emails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListHooks() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userCreateHook() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userDeleteHook(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204] });
}

function userGetHook(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userEditHook(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyHooksRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/hooks";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyHooksExists() { pvg.success("Hooks verified"); }
function matchAnyHooksAdded() { return bp.EventSet("Added Hooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedHooks() { return bp.EventSet("Deleted Hooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListUserOrgs(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/orgs";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userGet(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyOrganizationsExists() { pvg.success("Organizations verified"); }
function matchAnyOrganizationsAdded() { return bp.EventSet("Added Organizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizations() { return bp.EventSet("Deleted Organizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminGetRunnerRegistrationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/runners/registration-token";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyRunnersExists() { pvg.success("Runners verified"); }
function matchAnyRunnersAdded() { return bp.EventSet("Added Runners", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRunners() { return bp.EventSet("Deleted Runners", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminUnadoptedList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/unadopted";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403] });
}

function adminDeleteUnadoptedRepository(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/unadopted/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403] });
}

function adminAdoptRepository(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/unadopted/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUnadoptedRepositoriesRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/unadopted/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUnadoptedRepositoriesExists() { pvg.success("UnadoptedRepositories verified"); }
function matchAnyUnadoptedRepositoriesAdded() { return bp.EventSet("Added UnadoptedRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUnadoptedRepositories() { return bp.EventSet("Deleted UnadoptedRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListSubscriptions(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/subscriptions";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function adminCreateUser() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function adminDeleteUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function adminEditUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userGetHeatmapData(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/heatmap";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userGetTokens(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/tokens";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403] });
}

function userCreateToken(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/tokens";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userDeleteAccessToken(token, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/tokens/{token}";
  url = url.replace("{username}", resolve(username));
  url = url.replace("{token}", resolve(token));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function verifyUsersRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUsersExists() { pvg.success("Users verified"); }
function matchAnyUsersAdded() { return bp.EventSet("Added Users", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUsers() { return bp.EventSet("Deleted Users", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminListUserBadges(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/badges";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function adminAddUserBadges(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/badges";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function adminDeleteUserBadges(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/badges";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 422] });
}

function verifyUserBadgesRejects(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/badges";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserBadgesExists() { pvg.success("UserBadges verified"); }
function matchAnyUserBadgesAdded() { return bp.EventSet("Added UserBadges", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserBadges() { return bp.EventSet("Deleted UserBadges", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreatePublicKey(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/keys";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function adminDeleteUser(purge, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function verifyUserKeysRejects(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/keys";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserKeysExists() { pvg.success("UserKeys verified"); }
function matchAnyUserKeysAdded() { return bp.EventSet("Added UserKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserKeys() { return bp.EventSet("Deleted UserKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreateOrg(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/orgs";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserOrganizationsRejects(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/orgs";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserOrganizationsExists() { pvg.success("UserOrganizations verified"); }
function matchAnyUserOrganizationsAdded() { return bp.EventSet("Added UserOrganizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserOrganizations() { return bp.EventSet("Deleted UserOrganizations", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminRenameUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/rename";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserRenameRejects(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/rename";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserRenameExists() { pvg.success("UserRename verified"); }
function matchAnyUserRenameAdded() { return bp.EventSet("Added UserRename", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserRename() { return bp.EventSet("Deleted UserRename", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function adminCreateRepo(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/repos";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 409, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserRepositoriesRejects(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "admin/users/{username}/repos";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserRepositoriesExists() { pvg.success("UserRepositories verified"); }
function matchAnyUserRepositoriesAdded() { return bp.EventSet("Added UserRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserRepositories() { return bp.EventSet("Deleted UserRepositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listGitignoresTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "gitignore/templates";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function getGitignoreTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "gitignore/templates/{name}";
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyGitignoreTemplatesExists() { pvg.success("GitignoreTemplates verified"); }
function matchAnyGitignoreTemplatesAdded() { return bp.EventSet("Added GitignoreTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitignoreTemplates() { return bp.EventSet("Deleted GitignoreTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listLabelTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "label/templates";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function getLabelTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "label/templates/{name}";
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyLabelTemplatesExists() { pvg.success("LabelTemplates verified"); }
function matchAnyLabelTemplatesAdded() { return bp.EventSet("Added LabelTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLabelTemplates() { return bp.EventSet("Deleted LabelTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listLicenseTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "licenses";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyLicenseTemplatesExists() { pvg.success("LicenseTemplates verified"); }
function matchAnyLicenseTemplatesAdded() { return bp.EventSet("Added LicenseTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLicenseTemplates() { return bp.EventSet("Deleted LicenseTemplates", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getLicenseTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "licenses/{name}";
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyLicensesExists() { pvg.success("Licenses verified"); }
function matchAnyLicensesAdded() { return bp.EventSet("Added Licenses", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLicenses() { return bp.EventSet("Deleted Licenses", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function renderMarkdown() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "markdown";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function renderMarkdownRaw() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "markdown/raw";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyMarkdownRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "markdown";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMarkdownExists() { pvg.success("Markdown verified"); }
function matchAnyMarkdownAdded() { return bp.EventSet("Added Markdown", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMarkdown() { return bp.EventSet("Deleted Markdown", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function renderMarkup() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "markup";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyMarkupRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "markup";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMarkupExists() { pvg.success("Markup verified"); }
function matchAnyMarkupAdded() { return bp.EventSet("Added Markup", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMarkup() { return bp.EventSet("Deleted Markup", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getNodeInfo() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "nodeinfo";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyNodeInfoExists() { pvg.success("NodeInfo verified"); }
function matchAnyNodeInfoAdded() { return bp.EventSet("Added NodeInfo", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNodeInfo() { return bp.EventSet("Deleted NodeInfo", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function notifyGetRepoList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/notifications";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function notifyReadRepoList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/notifications";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 205] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function notifyGetThread(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "notifications/threads/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403, 404] });
}

function verifyNotificationsExists() { pvg.success("Notifications verified"); }
function matchAnyNotificationsAdded() { return bp.EventSet("Added Notifications", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNotifications() { return bp.EventSet("Deleted Notifications", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgGetAll() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function createOrgRepoDeprecated(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "org/{org}/repos";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgEdit(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function orgGetRunnerRegistrationToken(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/actions/runners/registration-token";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function orgListActionsSecrets(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/actions/secrets";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function deleteOrgSecret(org, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/actions/secrets/{secretname}";
  url = url.replace("{org}", resolve(org));
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 404] });
}

function updateOrgSecret(org, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/actions/secrets/{secretname}";
  url = url.replace("{org}", resolve(org));
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org), "secretname": resolve(secretname)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function getOrgVariablesList(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/actions/variables";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 404] });
}

function verifyOrganizationRejects(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "org/{org}/repos";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"org":' + (JSON.stringify(resolve(org)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationExists() { pvg.success("Organization verified"); }
function matchAnyOrganizationAdded() { return bp.EventSet("Added Organization", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganization() { return bp.EventSet("Deleted Organization", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteRepoVariable(owner, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/variables/{variablename}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function createRepoVariable(owner, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/variables/{variablename}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo), "variablename": resolve(variablename)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function updateRepoVariable(owner, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/variables/{variablename}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo), "variablename": resolve(variablename)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function getRepoVariablesList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/variables";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 404] });
}

function verifyVariablesRejects(owner, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/variables/{variablename}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += ', "variablename":' + (JSON.stringify(resolve(variablename)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyVariablesExists() { pvg.success("Variables verified"); }
function matchAnyVariablesAdded() { return bp.EventSet("Added Variables", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedVariables() { return bp.EventSet("Deleted Variables", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListActivityFeeds(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/activities/feeds";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyActivityFeedsExists() { pvg.success("ActivityFeeds verified"); }
function matchAnyActivityFeedsAdded() { return bp.EventSet("Added ActivityFeeds", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedActivityFeeds() { return bp.EventSet("Deleted ActivityFeeds", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgDeleteAvatar(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/avatar";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgUpdateAvatar(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/avatar";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyAvatarRejects(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/avatar";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"org":' + (JSON.stringify(resolve(org)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyAvatarExists() { pvg.success("Avatar verified"); }
function matchAnyAvatarAdded() { return bp.EventSet("Added Avatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedAvatar() { return bp.EventSet("Deleted Avatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function organizationListBlocks(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/blocks";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgEdit(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyBlocksExists() { pvg.success("Blocks verified"); }
function matchAnyBlocksAdded() { return bp.EventSet("Added Blocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBlocks() { return bp.EventSet("Deleted Blocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListLabels(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/labels";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateLabel(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/labels";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditLabel(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/labels/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteLabel(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/labels/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function verifyLabelsRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/labels";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyLabelsExists() { pvg.success("Labels verified"); }
function matchAnyLabelsAdded() { return bp.EventSet("Added Labels", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedLabels() { return bp.EventSet("Deleted Labels", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListMembers(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/members";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyMembersExists() { pvg.success("Members verified"); }
function matchAnyMembersAdded() { return bp.EventSet("Added Members", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMembers() { return bp.EventSet("Deleted Members", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyOrganizationMembersExists() { pvg.success("OrganizationMembers verified"); }
function matchAnyOrganizationMembersAdded() { return bp.EventSet("Added OrganizationMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationMembers() { return bp.EventSet("Deleted OrganizationMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListPublicMembers(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/public_members";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgEdit(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyOrganizationPublicMembersExists() { pvg.success("OrganizationPublicMembers verified"); }
function matchAnyOrganizationPublicMembersAdded() { return bp.EventSet("Added OrganizationPublicMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationPublicMembers() { return bp.EventSet("Deleted OrganizationPublicMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListRepos(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/repos";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function createOrgRepo(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/repos";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyOrganizationReposRejects(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/repos";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"org":' + (JSON.stringify(resolve(org)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationReposExists() { pvg.success("OrganizationRepos verified"); }
function matchAnyOrganizationReposAdded() { return bp.EventSet("Added OrganizationRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationRepos() { return bp.EventSet("Deleted OrganizationRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeams(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/teams";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgCreateTeam(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/teams";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"org": resolve(org)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyOrganizationTeamsRejects(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "orgs/{org}/teams";
  url = url.replace("{org}", resolve(org));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"org":' + (JSON.stringify(resolve(org)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOrganizationTeamsExists() { pvg.success("OrganizationTeams verified"); }
function matchAnyOrganizationTeamsAdded() { return bp.EventSet("Added OrganizationTeams", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOrganizationTeams() { return bp.EventSet("Deleted OrganizationTeams", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListTeams() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/teams";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgEditTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyTeamsExists() { pvg.success("Teams verified"); }
function matchAnyTeamsAdded() { return bp.EventSet("Added Teams", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeams() { return bp.EventSet("Deleted Teams", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listPackages(owner) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "packages/{owner}";
  url = url.replace("{owner}", resolve(owner));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function listPackages(limit, owner, page, q, type) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "packages/{owner}";
  url = url.replace("{owner}", resolve(owner));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function deletePackage(name, owner, type, version) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "packages/{owner}/{type}/{name}/{version}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{type}", resolve(type));
  url = url.replace("{name}", resolve(name));
  url = url.replace("{version}", resolve(version));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function listPackageFiles(name, owner, type, version) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "packages/{owner}/{type}/{name}/{version}/files";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{type}", resolve(type));
  url = url.replace("{name}", resolve(name));
  url = url.replace("{version}", resolve(version));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyPackagesExists() { pvg.success("Packages verified"); }
function matchAnyPackagesAdded() { return bp.EventSet("Added Packages", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPackages() { return bp.EventSet("Deleted Packages", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetIssueReactions(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function moveIssuePin(index, owner, position, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/pin/{position}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{position}", resolve(position));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "position": resolve(position), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteTime(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/times/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issuePostIssueReaction(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteStopWatch(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/stopwatch/delete";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 409] });
}

function issueStartStopWatch(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/stopwatch/start";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueStopStopWatch(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/stopwatch/stop";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyIssuesRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssuesExists() { pvg.success("Issues verified"); }
function matchAnyIssuesAdded() { return bp.EventSet("Added Issues", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssues() { return bp.EventSet("Deleted Issues", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoCreateStatus(owner, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/statuses/{sha}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{sha}", resolve(sha));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo), "sha": resolve(sha)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoListSubscribers(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/subscribers";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userCurrentDeleteSubscription(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/subscription";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userCurrentPutSubscription(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/subscription";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetRunnerRegistrationToken(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/runners/registration-token";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function repoListActionsSecrets(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/secrets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyRepositoryRejects(owner, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/statuses/{sha}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{sha}", resolve(sha));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += ', "sha":' + (JSON.stringify(resolve(sha)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoryExists() { pvg.success("Repository verified"); }
function matchAnyRepositoryAdded() { return bp.EventSet("Added Repository", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepository() { return bp.EventSet("Deleted Repository", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteRepoSecret(owner, repo, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/secrets/{secretname}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 404] });
}

function updateRepoSecret(owner, repo, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/secrets/{secretname}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo), "secretname": resolve(secretname)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifySecretsExists() { pvg.success("Secrets verified"); }
function matchAnySecretsAdded() { return bp.EventSet("Added Secrets", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedSecrets() { return bp.EventSet("Deleted Secrets", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function ListActionTasks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/actions/tasks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 403, 404, 409, 422] });
}

function verifyTasksExists() { pvg.success("Tasks verified"); }
function matchAnyTasksAdded() { return bp.EventSet("Added Tasks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTasks() { return bp.EventSet("Deleted Tasks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDeleteBranchProtection(name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branch_protections/{name}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditBranchProtection(name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branch_protections/{name}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"name": resolve(name), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyBranchProtectionsExists() { pvg.success("BranchProtections verified"); }
function matchAnyBranchProtectionsAdded() { return bp.EventSet("Added BranchProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBranchProtections() { return bp.EventSet("Deleted BranchProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListBranches(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branches";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function repoCreateBranch(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branches";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteBranch(branch, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branches/{branch}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{branch}", resolve(branch));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoUpdateBranch(branch, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branches/{branch}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{branch}", resolve(branch));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"branch": resolve(branch), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyBranchesRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/branches";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyBranchesExists() { pvg.success("Branches verified"); }
function matchAnyBranchesAdded() { return bp.EventSet("Added Branches", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBranches() { return bp.EventSet("Deleted Branches", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListCollaborators(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/collaborators";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoDeleteCollaborator(collaborator, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/collaborators/{collaborator}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{collaborator}", resolve(collaborator));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoAddCollaborator(collaborator, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/collaborators/{collaborator}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{collaborator}", resolve(collaborator));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"collaborator": resolve(collaborator), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyCollaboratorsRejects(collaborator, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/collaborators/{collaborator}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{collaborator}", resolve(collaborator));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"collaborator":' + (JSON.stringify(resolve(collaborator)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyCollaboratorsExists() { pvg.success("Collaborators verified"); }
function matchAnyCollaboratorsAdded() { return bp.EventSet("Added Collaborators", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedCollaborators() { return bp.EventSet("Deleted Collaborators", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetAllCommits(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/commits";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404, 409] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoListStatusesByRef(owner, ref, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/commits/{ref}/statuses";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{ref}", resolve(ref));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 404] });
}

function repoGetCommitPullRequest(owner, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/commits/{sha}/pull";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{sha}", resolve(sha));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoDownloadCommitDiffOrPatch(diffType, owner, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/git/commits/{sha}.{diffType}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{sha}", resolve(sha));
  url = url.replace("{diffType}", resolve(diffType));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyCommitsExists() { pvg.success("Commits verified"); }
function matchAnyCommitsAdded() { return bp.EventSet("Added Commits", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedCommits() { return bp.EventSet("Deleted Commits", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userListRepos(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/repos";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function createCurrentUserRepo() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/repos";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 409, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteFile(filepath, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/contents/{filepath}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{filepath}", resolve(filepath));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 403, 404, 423] });
}

function repoUpdateFile(filepath, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/contents/{filepath}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{filepath}", resolve(filepath));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"filepath": resolve(filepath), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userListStarred(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "users/{username}/starred";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyRepositoriesRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/repos";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoriesExists() { pvg.success("Repositories verified"); }
function matchAnyRepositoriesAdded() { return bp.EventSet("Added Repositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepositories() { return bp.EventSet("Deleted Repositories", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function listForks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/forks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function createFork(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/forks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 202, 403, 404, 409, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyForksRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/forks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyForksExists() { pvg.success("Forks verified"); }
function matchAnyForksAdded() { return bp.EventSet("Added Forks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedForks() { return bp.EventSet("Deleted Forks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyBlobsExists() { pvg.success("Blobs verified"); }
function matchAnyBlobsAdded() { return bp.EventSet("Added Blobs", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedBlobs() { return bp.EventSet("Deleted Blobs", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyNotesExists() { pvg.success("Notes verified"); }
function matchAnyNotesAdded() { return bp.EventSet("Added Notes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNotes() { return bp.EventSet("Deleted Notes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListAllGitRefs(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/git/refs";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyGitRefsExists() { pvg.success("GitRefs verified"); }
function matchAnyGitRefsAdded() { return bp.EventSet("Added GitRefs", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitRefs() { return bp.EventSet("Deleted GitRefs", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyGitTagsExists() { pvg.success("GitTags verified"); }
function matchAnyGitTagsAdded() { return bp.EventSet("Added GitTags", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitTags() { return bp.EventSet("Deleted GitTags", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyGitTreesExists() { pvg.success("GitTrees verified"); }
function matchAnyGitTreesAdded() { return bp.EventSet("Added GitTrees", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitTrees() { return bp.EventSet("Deleted GitTrees", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListGitHooks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/hooks/git";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoDeleteGitHook(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/hooks/git/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function repoEditGitHook(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/hooks/git/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyGitHooksExists() { pvg.success("GitHooks verified"); }
function matchAnyGitHooksAdded() { return bp.EventSet("Added GitHooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGitHooks() { return bp.EventSet("Deleted GitHooks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyIssueConfigExists() { pvg.success("IssueConfig verified"); }
function matchAnyIssueConfigAdded() { return bp.EventSet("Added IssueConfig", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueConfig() { return bp.EventSet("Deleted IssueConfig", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetMilestonesList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/milestones";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateMilestone(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/milestones";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyIssueRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/milestones";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueExists() { pvg.success("Issue verified"); }
function matchAnyIssueAdded() { return bp.EventSet("Added Issue", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssue() { return bp.EventSet("Deleted Issue", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetRepoComments(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueDeleteComment(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditComment(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyCommentExists() { pvg.success("Comment verified"); }
function matchAnyCommentAdded() { return bp.EventSet("Added Comment", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedComment() { return bp.EventSet("Deleted Comment", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListIssueCommentAttachments(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateIssueCommentAttachment(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditIssueCommentAttachment(attachment_id, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"attachment_id": resolve(attachment_id), "id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteIssueCommentAttachment(attachment_id, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 423] });
}

function verifyIssueCommentAttachmentsRejects(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentAttachmentsExists() { pvg.success("IssueCommentAttachments verified"); }
function matchAnyIssueCommentAttachmentsAdded() { return bp.EventSet("Added IssueCommentAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueCommentAttachments() { return bp.EventSet("Deleted IssueCommentAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetCommentReactions(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403, 404] });
}

function issuePostCommentReaction(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteCommentReaction(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyIssueCommentReactionsRejects(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/comments/{id}/reactions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentReactionsExists() { pvg.success("IssueCommentReactions verified"); }
function matchAnyIssueCommentReactionsAdded() { return bp.EventSet("Added IssueCommentReactions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueCommentReactions() { return bp.EventSet("Deleted IssueCommentReactions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPinnedIssues(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/pinned";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyPinnedIssuesExists() { pvg.success("PinnedIssues verified"); }
function matchAnyPinnedIssuesAdded() { return bp.EventSet("Added PinnedIssues", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPinnedIssues() { return bp.EventSet("Deleted PinnedIssues", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListIssueAttachments(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateIssueAttachment(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditIssueAttachment(attachment_id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"attachment_id": resolve(attachment_id), "index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteIssueAttachment(attachment_id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 423] });
}

function verifyIssueAttachmentsRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueAttachmentsExists() { pvg.success("IssueAttachments verified"); }
function matchAnyIssueAttachmentsAdded() { return bp.EventSet("Added IssueAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueAttachments() { return bp.EventSet("Deleted IssueAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueListBlocks(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/blocks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateIssueBlocking(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/blocks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueRemoveIssueBlocking(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/blocks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function verifyIssueBlocksRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/blocks";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueBlocksExists() { pvg.success("IssueBlocks verified"); }
function matchAnyIssueBlocksAdded() { return bp.EventSet("Added IssueBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueBlocks() { return bp.EventSet("Deleted IssueBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetComments(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/comments";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueCreateComment(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/comments";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditCommentDeprecated(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/comments/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function issueDeleteCommentDeprecated(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/comments/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyIssueCommentsRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/comments";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueCommentsExists() { pvg.success("IssueComments verified"); }
function matchAnyIssueCommentsAdded() { return bp.EventSet("Added IssueComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueComments() { return bp.EventSet("Deleted IssueComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueSubscriptions(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/subscriptions";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueDeleteSubscription(index, owner, repo, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/subscriptions/{user}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{user}", resolve(user));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 201, 204, 304, 404] });
}

function issueAddSubscription(index, owner, repo, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/subscriptions/{user}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{user}", resolve(user));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo), "user": resolve(user)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyIssueSubscriptionsRejects(index, owner, repo, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/subscriptions/{user}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{user}", resolve(user));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += ', "user":' + (JSON.stringify(resolve(user)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueSubscriptionsExists() { pvg.success("IssueSubscriptions verified"); }
function matchAnyIssueSubscriptionsAdded() { return bp.EventSet("Added IssueSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueSubscriptions() { return bp.EventSet("Deleted IssueSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueGetCommentsAndTimeline(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/timeline";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyIssueTimelineExists() { pvg.success("IssueTimeline verified"); }
function matchAnyIssueTimelineAdded() { return bp.EventSet("Added IssueTimeline", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueTimeline() { return bp.EventSet("Deleted IssueTimeline", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueResetTime(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/times";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 403, 404] });
}

function issueTrackedTimes(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/times";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueAddTime(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/times";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyIssueTimesRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/issues/{index}/times";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyIssueTimesExists() { pvg.success("IssueTimes verified"); }
function matchAnyIssueTimesAdded() { return bp.EventSet("Added IssueTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedIssueTimes() { return bp.EventSet("Deleted IssueTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListKeys() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/keys";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userCurrentPostKey() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/keys";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userCurrentGetKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/keys/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userCurrentDeleteKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/keys/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyKeysRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/keys";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyKeysExists() { pvg.success("Keys verified"); }
function matchAnyKeysAdded() { return bp.EventSet("Added Keys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedKeys() { return bp.EventSet("Deleted Keys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function issueDeleteMilestone(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/milestones/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function issueEditMilestone(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/milestones/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyMilestonesExists() { pvg.success("Milestones verified"); }
function matchAnyMilestonesAdded() { return bp.EventSet("Added Milestones", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMilestones() { return bp.EventSet("Deleted Milestones", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoMirrorSync(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/mirror-sync";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyMirrorSyncRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/mirror-sync";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyMirrorSyncExists() { pvg.success("MirrorSync verified"); }
function matchAnyMirrorSyncAdded() { return bp.EventSet("Added MirrorSync", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMirrorSync() { return bp.EventSet("Deleted MirrorSync", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyNewPinAllowedExists() { pvg.success("NewPinAllowed verified"); }
function matchAnyNewPinAllowedAdded() { return bp.EventSet("Added NewPinAllowed", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedNewPinAllowed() { return bp.EventSet("Deleted NewPinAllowed", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetPullRequestFiles(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/files";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoUpdatePullRequest(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/update";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditPullRequest(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 409, 412, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoCancelScheduledAutoMerge(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/merge";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function verifyPullRequestsRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/update";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullRequestsExists() { pvg.success("PullRequests verified"); }
function matchAnyPullRequestsAdded() { return bp.EventSet("Added PullRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullRequests() { return bp.EventSet("Deleted PullRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDeletePullReviewRequests(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/requested_reviewers";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 422] });
}

function repoCreatePullReviewRequests(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/requested_reviewers";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyPullReviewRequestsRejects(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/requested_reviewers";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewRequestsExists() { pvg.success("PullReviewRequests verified"); }
function matchAnyPullReviewRequestsAdded() { return bp.EventSet("Added PullReviewRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewRequests() { return bp.EventSet("Deleted PullReviewRequests", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPullReviews(index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoSubmitPullReview(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeletePullReview(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyPullReviewsRejects(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewsExists() { pvg.success("PullReviews verified"); }
function matchAnyPullReviewsAdded() { return bp.EventSet("Added PullReviews", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviews() { return bp.EventSet("Deleted PullReviews", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyPullReviewCommentsExists() { pvg.success("PullReviewComments verified"); }
function matchAnyPullReviewCommentsAdded() { return bp.EventSet("Added PullReviewComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewComments() { return bp.EventSet("Deleted PullReviewComments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoDismissPullReview(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyPullReviewDismissalsRejects(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/dismissals";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewDismissalsExists() { pvg.success("PullReviewDismissals verified"); }
function matchAnyPullReviewDismissalsAdded() { return bp.EventSet("Added PullReviewDismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewDismissals() { return bp.EventSet("Deleted PullReviewDismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoUnDismissPullReview(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "index": resolve(index), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/pulls/{index}/reviews/{id}/undismissals";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{index}", resolve(index));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "index":' + (JSON.stringify(resolve(index)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPullReviewUndismissalsExists() { pvg.success("PullReviewUndismissals verified"); }
function matchAnyPullReviewUndismissalsAdded() { return bp.EventSet("Added PullReviewUndismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPullReviewUndismissals() { return bp.EventSet("Deleted PullReviewUndismissals", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListPushMirrors(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/push_mirrors";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 403, 404] });
}

function repoPushMirrorSync(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/push_mirrors-sync";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeletePushMirror(name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/push_mirrors/{name}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{name}", resolve(name));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyPushMirrorsRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/push_mirrors-sync";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyPushMirrorsExists() { pvg.success("PushMirrors verified"); }
function matchAnyPushMirrorsAdded() { return bp.EventSet("Added PushMirrors", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedPushMirrors() { return bp.EventSet("Deleted PushMirrors", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyRawFilesExists() { pvg.success("RawFiles verified"); }
function matchAnyRawFilesAdded() { return bp.EventSet("Added RawFiles", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRawFiles() { return bp.EventSet("Deleted RawFiles", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListReleases(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoCreateRelease(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 409, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoDeleteReleaseByTag(owner, repo, tag) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/tags/{tag}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{tag}", resolve(tag));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 422] });
}

function repoDeleteRelease(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 422] });
}

function repoGetRelease(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditRelease(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyReleasesRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyReleasesExists() { pvg.success("Releases verified"); }
function matchAnyReleasesAdded() { return bp.EventSet("Added Releases", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReleases() { return bp.EventSet("Deleted Releases", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListReleaseAttachments(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoCreateReleaseAttachment(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteReleaseAttachment(attachment_id, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditReleaseAttachment(attachment_id, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}/assets/{attachment_id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  url = url.replace("{attachment_id}", resolve(attachment_id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"attachment_id": resolve(attachment_id), "id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyReleaseAttachmentsRejects(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/releases/{id}/assets";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyReleaseAttachmentsExists() { pvg.success("ReleaseAttachments verified"); }
function matchAnyReleaseAttachmentsAdded() { return bp.EventSet("Added ReleaseAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReleaseAttachments() { return bp.EventSet("Deleted ReleaseAttachments", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetReviewers(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/reviewers";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyReviewersExists() { pvg.success("Reviewers verified"); }
function matchAnyReviewersAdded() { return bp.EventSet("Added Reviewers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedReviewers() { return bp.EventSet("Deleted Reviewers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListTagProtection(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tag_protections";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function repoCreateTagProtection(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tag_protections";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditTagProtection(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tag_protections/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteTagProtection(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tag_protections/{id}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function verifyTagProtectionsRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tag_protections";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTagProtectionsExists() { pvg.success("TagProtections verified"); }
function matchAnyTagProtectionsAdded() { return bp.EventSet("Added TagProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTagProtections() { return bp.EventSet("Deleted TagProtections", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoListTags(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tags";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoCreateTag(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tags";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 405, 409, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoDeleteTag(owner, repo, tag) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tags/{tag}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{tag}", resolve(tag));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 405, 409, 422, 423] });
}

function verifyTagsRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/tags";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTagsExists() { pvg.success("Tags verified"); }
function matchAnyTagsAdded() { return bp.EventSet("Added Tags", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTags() { return bp.EventSet("Deleted Tags", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentTrackedTimes() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/times";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyTrackedTimesExists() { pvg.success("TrackedTimes verified"); }
function matchAnyTrackedTimesAdded() { return bp.EventSet("Added TrackedTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTrackedTimes() { return bp.EventSet("Deleted TrackedTimes", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function topicSearch() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "topics/search";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 403, 404] });
}

function repoUpdateTopics(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/topics";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteTopic(owner, repo, topic) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/topics/{topic}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{topic}", resolve(topic));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 422] });
}

function repoAddTopic(owner, repo, topic) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/topics/{topic}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{topic}", resolve(topic));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo), "topic": resolve(topic)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyTopicsRejects(owner, repo, topic) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/topics/{topic}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{topic}", resolve(topic));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += ', "topic":' + (JSON.stringify(resolve(topic)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTopicsExists() { pvg.success("Topics verified"); }
function matchAnyTopicsAdded() { return bp.EventSet("Added Topics", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTopics() { return bp.EventSet("Deleted Topics", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoTransfer(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/transfer";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 202, 403, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function acceptRepoTransfer(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/transfer/accept";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 202, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function rejectRepoTransfer(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/transfer/reject";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyRepositoryTransferRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/transfer";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyRepositoryTransferExists() { pvg.success("RepositoryTransfer verified"); }
function matchAnyRepositoryTransferAdded() { return bp.EventSet("Added RepositoryTransfer", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedRepositoryTransfer() { return bp.EventSet("Deleted RepositoryTransfer", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoCreateWikiPage(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/new";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 403, 404, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function repoDeleteWikiPage(owner, pageName, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/page/{pageName}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{pageName}", resolve(pageName));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404, 423] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repositories/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function repoEditWikiPage(owner, pageName, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/page/{pageName}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{pageName}", resolve(pageName));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 423] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "pageName": resolve(pageName), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyWikiPageRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/new";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyWikiPageExists() { pvg.success("WikiPage verified"); }
function matchAnyWikiPageAdded() { return bp.EventSet("Added WikiPage", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPage() { return bp.EventSet("Deleted WikiPage", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetWikiPages(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/pages";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyWikiPagesExists() { pvg.success("WikiPages verified"); }
function matchAnyWikiPagesAdded() { return bp.EventSet("Added WikiPages", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPages() { return bp.EventSet("Deleted WikiPages", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function repoGetWikiPageRevisions(owner, pageName, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "repos/{owner}/{repo}/wiki/revisions/{pageName}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  url = url.replace("{pageName}", resolve(pageName));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyWikiPageRevisionsExists() { pvg.success("WikiPageRevisions verified"); }
function matchAnyWikiPageRevisionsAdded() { return bp.EventSet("Added WikiPageRevisions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedWikiPageRevisions() { return bp.EventSet("Deleted WikiPageRevisions", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getGeneralAPISettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "settings/api";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function getGeneralUISettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "settings/ui";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifySettingsExists() { pvg.success("Settings verified"); }
function matchAnySettingsAdded() { return bp.EventSet("Added Settings", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedSettings() { return bp.EventSet("Deleted Settings", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getVersion() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "version";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyMiscellaneousExists() { pvg.success("Miscellaneous verified"); }
function matchAnyMiscellaneousAdded() { return bp.EventSet("Added Miscellaneous", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedMiscellaneous() { return bp.EventSet("Deleted Miscellaneous", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeamMembers(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/members";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgAddTeamMember(id, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/members/{username}";
  url = url.replace("{id}", resolve(id));
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function verifyTeamMembersRejects(id, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/members/{username}";
  url = url.replace("{id}", resolve(id));
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "username":' + (JSON.stringify(resolve(username)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTeamMembersExists() { pvg.success("TeamMembers verified"); }
function matchAnyTeamMembersAdded() { return bp.EventSet("Added TeamMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeamMembers() { return bp.EventSet("Deleted TeamMembers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function orgListTeamRepos(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/repos";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function orgAddTeamRepository(id, org, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/repos/{org}/{repo}";
  url = url.replace("{id}", resolve(id));
  url = url.replace("{org}", resolve(org));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id), "org": resolve(org), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function verifyTeamReposRejects(id, org, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "teams/{id}/repos/{org}/{repo}";
  url = url.replace("{id}", resolve(id));
  url = url.replace("{org}", resolve(org));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"id":' + (JSON.stringify(resolve(id)) || "null");
  bodyStr += ', "org":' + (JSON.stringify(resolve(org)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyTeamReposExists() { pvg.success("TeamRepos verified"); }
function matchAnyTeamReposAdded() { return bp.EventSet("Added TeamRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedTeamRepos() { return bp.EventSet("Deleted TeamRepos", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetCurrent() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userGetRunnerRegistrationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/runners/registration-token";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function deleteUserSecret(secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/secrets/{secretname}";
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 400, 404] });
}

function updateUserSecret(secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/secrets/{secretname}";
  url = url.replace("{secretname}", resolve(secretname));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"secretname": resolve(secretname)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function getUserVariablesList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 404] });
}

function verifyUserExists() { pvg.success("User verified"); }
function matchAnyUserAdded() { return bp.EventSet("Added User", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUser() { return bp.EventSet("Deleted User", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function deleteUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables/{variablename}";
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 201, 204, 400, 404] });
}

function getUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables/{variablename}";
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 400, 404] });
}

function createUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables/{variablename}";
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"variablename": resolve(variablename)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function updateUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables/{variablename}";
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"variablename": resolve(variablename)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserVariablesRejects(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/actions/variables/{variablename}";
  url = url.replace("{variablename}", resolve(variablename));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"variablename":' + (JSON.stringify(resolve(variablename)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserVariablesExists() { pvg.success("UserVariables verified"); }
function matchAnyUserVariablesAdded() { return bp.EventSet("Added UserVariables", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserVariables() { return bp.EventSet("Deleted UserVariables", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetOauth2Application() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userCreateOAuth2Application() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userDeleteOAuth2Application(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function userGetOAuth2Application(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userUpdateOAuth2Application(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"id": resolve(id)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyOAuth2ApplicationsRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/applications/oauth2";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyOAuth2ApplicationsExists() { pvg.success("OAuth2Applications verified"); }
function matchAnyOAuth2ApplicationsAdded() { return bp.EventSet("Added OAuth2Applications", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedOAuth2Applications() { return bp.EventSet("Deleted OAuth2Applications", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userDeleteAvatar() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/avatar";
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204] });
}

function userUpdateAvatar() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/avatar";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserAvatarRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/avatar";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserAvatarExists() { pvg.success("UserAvatar verified"); }
function matchAnyUserAvatarAdded() { return bp.EventSet("Added UserAvatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserAvatar() { return bp.EventSet("Deleted UserAvatar", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userListBlocks() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/blocks";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userUnblockUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/blocks/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404, 422] });
}

function userCheckUserBlock(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/blocks/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [204, 404] });
}

function userBlockUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/blocks/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserBlocksExists() { pvg.success("UserBlocks verified"); }
function matchAnyUserBlocksAdded() { return bp.EventSet("Added UserBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserBlocks() { return bp.EventSet("Deleted UserBlocks", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userDeleteEmail() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/emails";
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function userListEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/emails";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userAddEmail() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/emails";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserEmailsRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/emails";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserEmailsExists() { pvg.success("UserEmails verified"); }
function matchAnyUserEmailsAdded() { return bp.EventSet("Added UserEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserEmails() { return bp.EventSet("Deleted UserEmails", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListFollowers() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/followers";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyUserFollowersExists() { pvg.success("UserFollowers verified"); }
function matchAnyUserFollowersAdded() { return bp.EventSet("Added UserFollowers", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowers() { return bp.EventSet("Deleted UserFollowers", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListFollowing() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/following";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyUserFollowingExists() { pvg.success("UserFollowing verified"); }
function matchAnyUserFollowingAdded() { return bp.EventSet("Added UserFollowing", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowing() { return bp.EventSet("Deleted UserFollowing", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentDeleteFollow(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/following/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckFollowing(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/following/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [204, 404] });
}

function userCurrentPutFollow(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/following/{username}";
  url = url.replace("{username}", resolve(username));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"username": resolve(username)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserFollowingSpecificExists() { pvg.success("UserFollowingSpecific verified"); }
function matchAnyUserFollowingSpecificAdded() { return bp.EventSet("Added UserFollowingSpecific", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserFollowingSpecific() { return bp.EventSet("Deleted UserFollowingSpecific", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentGetGPGKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_keys/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function userCurrentListGPGKeys() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_keys";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userCurrentPostGPGKey() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_keys";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function userCurrentDeleteGPGKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_keys/{id}";
  url = url.replace("{id}", resolve(id));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 403, 404] });
}

function verifyGPGKeysRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_keys";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyGPGKeysExists() { pvg.success("GPGKeys verified"); }
function matchAnyGPGKeysAdded() { return bp.EventSet("Added GPGKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeys() { return bp.EventSet("Deleted GPGKeys", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getVerificationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_key_token";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200, 404] });
}

function verifyGPGKeyTokenExists() { pvg.success("GPGKeyToken verified"); }
function matchAnyGPGKeyTokenAdded() { return bp.EventSet("Added GPGKeyToken", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeyToken() { return bp.EventSet("Deleted GPGKeyToken", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userVerifyGPGKey() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_key_verify";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 404, 422] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyGPGKeyVerificationRejects() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/gpg_key_verify";
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyGPGKeyVerificationExists() { pvg.success("GPGKeyVerification verified"); }
function matchAnyGPGKeyVerificationAdded() { return bp.EventSet("Added GPGKeyVerification", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedGPGKeyVerification() { return bp.EventSet("Deleted GPGKeyVerification", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function getUserSettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/settings";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function updateUserSettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/settings";
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserSettingsExists() { pvg.success("UserSettings verified"); }
function matchAnyUserSettingsAdded() { return bp.EventSet("Added UserSettings", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserSettings() { return bp.EventSet("Deleted UserSettings", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListStarred() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/starred";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function userCurrentDeleteStar(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/starred/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.delete(url, { expectedResponseCodes: [200, 204, 404] });
}

function userCurrentCheckStarring(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/starred/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [204, 404] });
}

function userCurrentPutStar(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/starred/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST CALL: " + url);
  var body = {};
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 403, 404] });
  if (res.status >= 200 && res.status < 300) {
    // CRITICAL: Merge server-returned data so Receiver stories get the new ID
    let eventData = Object.assign({}, {"owner": resolve(owner), "repo": resolve(repo)}, res.data || {});
    bp.sync({ request: bp.Event("Done: Positive: " + url, eventData) });
  }
  return res;
}

function verifyUserStarredRejects(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/starred/{owner}/{repo}";
  url = url.replace("{owner}", resolve(owner));
  url = url.replace("{repo}", resolve(repo));
  bp.log.info("REST REJECT CALL: " + url);
  var bodyStr = "{";
  bodyStr += '"owner":' + (JSON.stringify(resolve(owner)) || "null");
  bodyStr += ', "repo":' + (JSON.stringify(resolve(repo)) || "null");
  bodyStr += "}";
  svc.post(url, { body: bodyStr, headers: { "Content-Type": "application/json", "X-Provengo-Rejection-Probe": "true" }, expectedResponseCodes: [400, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified") });
}

function verifyUserStarredExists() { pvg.success("UserStarred verified"); }
function matchAnyUserStarredAdded() { return bp.EventSet("Added UserStarred", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserStarred() { return bp.EventSet("Deleted UserStarred", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userGetStopWatches() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/stopwatches";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyUserStopwatchesExists() { pvg.success("UserStopwatches verified"); }
function matchAnyUserStopwatchesAdded() { return bp.EventSet("Added UserStopwatches", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserStopwatches() { return bp.EventSet("Deleted UserStopwatches", function(e) { return e.name.startsWith("Done: Positive:"); }); }

function userCurrentListSubscriptions() {
  const resolve = (v) => {
    if (v === undefined || v === null) return "undefined";
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || "undefined";
      return (typeof res === "object") ? "undefined" : res;
    }
    return v;
  };
  var url = "user/subscriptions";
  bp.log.info("REST CALL: " + url);
  return svc.get(url, { expectedResponseCodes: [200] });
}

function verifyUserSubscriptionsExists() { pvg.success("UserSubscriptions verified"); }
function matchAnyUserSubscriptionsAdded() { return bp.EventSet("Added UserSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
function matchDeletedUserSubscriptions() { return bp.EventSet("Deleted UserSubscriptions", function(e) { return e.name.startsWith("Done: Positive:"); }); }
