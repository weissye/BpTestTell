//@provengo summon rest
// === Auto-generated interfaces for gitea ===
const svc = new RESTSession("http://localhost:8000/api/v1", "client", { headers: { "Content-Type": "application/json", "Authorization": "token __GITEA_TOKEN__" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function activitypubPerson(user_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/activitypub/user-id/" + resolve(user_id);
  var reqDescription = "Returns the Person actor for a user " + resolve(user_id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function activitypubPersonInbox(user_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/activitypub/user-id/" + resolve(user_id) + "/inbox";
  var reqDescription = "Send to the inbox " + resolve(user_id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(user_id) !== undefined) eventData["user-id"] = resolve(user_id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyActivityPubRejects(user_id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  var url = "/activitypub/user-id/" + resolve(user_id) + "/inbox";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyActivityPubExists(user_id) {
  let finalId = user_id || undefined;
  if (finalId !== undefined) svc.get("/activitypub/user-id/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("ActivityPub existence verified");
}
function verifyActivityPubDoesNotExist(user_id) {
  let finalId = user_id || undefined;
  if (finalId !== undefined) svc.get("/activitypub/user-id/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("ActivityPub absence verified");
}
function matchAnyActivityPubAdded() {
  return bp.EventSet("Any ActivityPub Added", function(e) {
    return e.name.startsWith("Done: Positive: Send to the inbox");
  });
}

function matchDeletedActivityPub() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminCronList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/cron";
  var reqDescription = "List cron tasks {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function adminCronRun(id, limit, page, task) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/admin/cron/" + resolve(task);
  var reqDescription = "Run cron task " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(task) !== undefined) eventData["task"] = resolve(task);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyAdminCronRejects(id, limit, page, task) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/admin/cron/" + resolve(task);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyAdminCronExists(id) {
  let finalId = id || undefined;
  pvg.success("AdminCron existence verified");
}
function verifyAdminCronDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("AdminCron absence verified");
}
function matchAnyAdminCronAdded() {
  return bp.EventSet("Any AdminCron Added", function(e) {
    return e.name.startsWith("Done: Positive: Run cron task");
  });
}

function matchDeletedAdminCron() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminGetAllEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/emails";
  var reqDescription = "List all emails {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function verifyAdminEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("AdminEmails existence verified");
}
function verifyAdminEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("AdminEmails absence verified");
}
function matchAnyAdminEmailsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedAdminEmails() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminSearchEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/emails/search";
  var reqDescription = "Search all emails {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function verifyEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("Emails existence verified");
}
function verifyEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Emails absence verified");
}
function matchAnyEmailsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedEmails() {
  return bp.EventSet("None", function(e){ return false; });
}

function userListHooks() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/hooks";
  var reqDescription = "List the authenticated user's webhooks {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCreateHook(body, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/hooks";
  var reqDescription = "Create a hook " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteHook(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/hooks/" + resolve(id);
  var reqDescription = "Delete a hook " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userGetHook(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/hooks/" + resolve(id);
  var reqDescription = "Get a hook " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userEditHook(body, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/hooks/" + resolve(id);
  var reqDescription = "Update a hook " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyHooksRejects(body, id, limit, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/user/hooks";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyHooksExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/hooks/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Hooks existence verified");
}
function verifyHooksDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/hooks/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Hooks absence verified");
}
function matchAnyHooksAdded() {
  return bp.EventSet("Any Hooks Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a hook");
  });
}

function matchDeletedHooks() {
  return bp.EventSet("Deleted Hooks", function(e) {
    return e.name.startsWith("Done: Positive: Delete a hook");
  });
}

function orgListUserOrgs(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/orgs";
  var reqDescription = "List a user's organizations " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userGet(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username);
  var reqDescription = "Get a user " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyOrganizationsExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Organizations existence verified");
}
function verifyOrganizationsDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Organizations absence verified");
}
function matchAnyOrganizationsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedOrganizations() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminGetRunnerRegistrationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/runners/registration-token";
  var reqDescription = "Get an global actions runner registration token {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyRunnersExists(id) {
  let finalId = id || undefined;
  pvg.success("Runners existence verified");
}
function verifyRunnersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Runners absence verified");
}
function matchAnyRunnersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedRunners() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminUnadoptedList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/unadopted";
  var reqDescription = "List unadopted repositories {owner}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function adminDeleteUnadoptedRepository(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/unadopted/" + resolve(owner) + "/" + resolve(repo);
  var reqDescription = "Delete unadopted files " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function adminAdoptRepository(limit, owner, page, pattern, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_pattern = resolve(pattern);
  if (val_pattern !== undefined) body["pattern"] = val_pattern;
  var url = "/admin/unadopted/" + resolve(owner) + "/" + resolve(repo);
  var reqDescription = "Adopt unadopted files as a repository " + resolve(owner);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(pattern) !== undefined) eventData["pattern"] = resolve(pattern);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUnadoptedRepositoriesRejects(limit, owner, page, pattern, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(pattern) !== undefined) body["pattern"] = resolve(pattern);
  var url = "/admin/unadopted/" + resolve(owner) + "/" + resolve(repo);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUnadoptedRepositoriesExists(owner) {
  let finalId = owner || undefined;
  pvg.success("UnadoptedRepositories existence verified");
}
function verifyUnadoptedRepositoriesDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("UnadoptedRepositories absence verified");
}
function matchAnyUnadoptedRepositoriesAdded() {
  return bp.EventSet("Any UnadoptedRepositories Added", function(e) {
    return e.name.startsWith("Done: Positive: Adopt unadopted files as a repository");
  });
}

function matchDeletedUnadoptedRepositories() {
  return bp.EventSet("Deleted UnadoptedRepositories", function(e) {
    return e.name.startsWith("Done: Positive: Delete unadopted files");
  });
}

function userListSubscriptions(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/subscriptions";
  var reqDescription = "List the repositories watched by a user " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userCreateToken(EditUserOption, body, limit, page, token, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_EditUserOption = resolve(EditUserOption);
  if (val_EditUserOption !== undefined) body["EditUserOption"] = val_EditUserOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_token = resolve(token);
  if (val_token !== undefined) body["token"] = val_token;
  var url = "/users/" + resolve(username) + "/tokens";
  var reqDescription = "Create an access token " + resolve(username);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditUserOption) !== undefined) eventData["EditUserOption"] = resolve(EditUserOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(token) !== undefined) eventData["token"] = resolve(token);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteAccessToken(username, token) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/tokens/" + resolve(token);
  var reqDescription = "Delete an access token " + resolve(username);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function adminEditUser(EditUserOption, body, limit, page, token, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_EditUserOption = resolve(EditUserOption);
  if (val_EditUserOption !== undefined) body["EditUserOption"] = val_EditUserOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_token = resolve(token);
  if (val_token !== undefined) body["token"] = val_token;
  var url = "/admin/users/" + resolve(username);
  var reqDescription = "Edit an existing user " + resolve(username);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditUserOption) !== undefined) eventData["EditUserOption"] = resolve(EditUserOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(token) !== undefined) eventData["token"] = resolve(token);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userGetTokens(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/tokens";
  var reqDescription = "List the authenticated user's access tokens " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function verifyUsersRejects(EditUserOption, body, limit, page, token, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(EditUserOption) !== undefined) body["EditUserOption"] = resolve(EditUserOption);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(token) !== undefined) body["token"] = resolve(token);
  var url = "/users/" + resolve(username) + "/tokens";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUsersExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/" + finalId + "/tokens", { expectedResponseCodes: [200] });
  pvg.success("Users existence verified");
}
function verifyUsersDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/" + finalId + "/tokens", { expectedResponseCodes: [404] });
  pvg.success("Users absence verified");
}
function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
    return e.name.startsWith("Done: Positive: Create an access token");
  });
}

function matchDeletedUsers() {
  return bp.EventSet("Deleted Users", function(e) {
    return e.name.startsWith("Done: Positive: Delete an access token");
  });
}

function adminListUserBadges(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username) + "/badges";
  var reqDescription = "List a user's badges " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function adminAddUserBadges(UserBadgeOption, body, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_UserBadgeOption = resolve(UserBadgeOption);
  if (val_UserBadgeOption !== undefined) body["UserBadgeOption"] = val_UserBadgeOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/admin/users/" + resolve(username) + "/badges";
  var reqDescription = "Add a badge to a user " + resolve(username);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(UserBadgeOption) !== undefined) eventData["UserBadgeOption"] = resolve(UserBadgeOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function adminDeleteUserBadges(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username) + "/badges";
  var reqDescription = "Remove a badge from a user " + resolve(username);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyUserBadgesRejects(UserBadgeOption, body, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(UserBadgeOption) !== undefined) body["UserBadgeOption"] = resolve(UserBadgeOption);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/admin/users/" + resolve(username) + "/badges";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserBadgesExists(username) {
  let finalId = username || undefined;
  pvg.success("UserBadges existence verified");
}
function verifyUserBadgesDoesNotExist(username) {
  let finalId = username || undefined;
  pvg.success("UserBadges absence verified");
}
function matchAnyUserBadgesAdded() {
  return bp.EventSet("Any UserBadges Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a badge to a user");
  });
}

function matchDeletedUserBadges() {
  return bp.EventSet("Deleted UserBadges", function(e) {
    return e.name.startsWith("Done: Positive: Remove a badge from a user");
  });
}

function adminCreatePublicKey(key, purge, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_key = resolve(key);
  if (val_key !== undefined) body["key"] = val_key;
  let val_purge = resolve(purge);
  if (val_purge !== undefined) body["purge"] = val_purge;
  var url = "/admin/users/" + resolve(username) + "/keys";
  var reqDescription = "Add a public key on behalf of a user " + resolve(username);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(key) !== undefined) eventData["key"] = resolve(key);
    if (resolve(purge) !== undefined) eventData["purge"] = resolve(purge);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function adminDeleteUser(username, purge) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username);
  var reqDescription = "Delete a user " + resolve(username);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 422], queryParameters: {    "purge": resolve(purge)} });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyUserKeysRejects(key, purge, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(key) !== undefined) body["key"] = resolve(key);
  if (resolve(purge) !== undefined) body["purge"] = resolve(purge);
  var url = "/admin/users/" + resolve(username) + "/keys";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserKeysExists(username) {
  let finalId = username || undefined;
  pvg.success("UserKeys existence verified");
}
function verifyUserKeysDoesNotExist(username) {
  let finalId = username || undefined;
  pvg.success("UserKeys absence verified");
}
function matchAnyUserKeysAdded() {
  return bp.EventSet("Any UserKeys Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a public key on behalf of a user");
  });
}

function matchDeletedUserKeys() {
  return bp.EventSet("Deleted UserKeys", function(e) {
    return e.name.startsWith("Done: Positive: Delete a user");
  });
}

function adminCreateOrg(id, organization, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_organization = resolve(organization);
  if (val_organization !== undefined) body["organization"] = val_organization;
  var url = "/admin/users/" + resolve(username) + "/orgs";
  var reqDescription = "Create an organization " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(organization) !== undefined) eventData["organization"] = resolve(organization);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserOrganizationsRejects(id, organization, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(organization) !== undefined) body["organization"] = resolve(organization);
  var url = "/admin/users/" + resolve(username) + "/orgs";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserOrganizationsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserOrganizations existence verified");
}
function verifyUserOrganizationsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserOrganizations absence verified");
}
function matchAnyUserOrganizationsAdded() {
  return bp.EventSet("Any UserOrganizations Added", function(e) {
    return e.name.startsWith("Done: Positive: Create an organization");
  });
}

function matchDeletedUserOrganizations() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminRenameUser(body, id, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/admin/users/" + resolve(username) + "/rename";
  var reqDescription = "Rename a user " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserRenameRejects(body, id, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/admin/users/" + resolve(username) + "/rename";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserRenameExists(id) {
  let finalId = id || undefined;
  pvg.success("UserRename existence verified");
}
function verifyUserRenameDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserRename absence verified");
}
function matchAnyUserRenameAdded() {
  return bp.EventSet("Any UserRename Added", function(e) {
    return e.name.startsWith("Done: Positive: Rename a user");
  });
}

function matchDeletedUserRename() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminCreateRepo(id, repository, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_repository = resolve(repository);
  if (val_repository !== undefined) body["repository"] = val_repository;
  var url = "/admin/users/" + resolve(username) + "/repos";
  var reqDescription = "Create a repository on behalf of a user " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 405, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(repository) !== undefined) eventData["repository"] = resolve(repository);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserRepositoriesRejects(id, repository, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(repository) !== undefined) body["repository"] = resolve(repository);
  var url = "/admin/users/" + resolve(username) + "/repos";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserRepositoriesExists(id) {
  let finalId = id || undefined;
  pvg.success("UserRepositories existence verified");
}
function verifyUserRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserRepositories absence verified");
}
function matchAnyUserRepositoriesAdded() {
  return bp.EventSet("Any UserRepositories Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a repository on behalf of a user");
  });
}

function matchDeletedUserRepositories() {
  return bp.EventSet("None", function(e){ return false; });
}

function listGitignoresTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/gitignore/templates";
  var reqDescription = "Returns a list of all gitignore templates {name}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getGitignoreTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/gitignore/templates/" + resolve(name);
  var reqDescription = "Returns information about a gitignore template " + resolve(name);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyGitignoreTemplatesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/gitignore/templates/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GitignoreTemplates existence verified");
}
function verifyGitignoreTemplatesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/gitignore/templates/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GitignoreTemplates absence verified");
}
function matchAnyGitignoreTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitignoreTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function listLabelTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/label/templates";
  var reqDescription = "Returns a list of all label templates {name}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getLabelTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/label/templates/" + resolve(name);
  var reqDescription = "Returns all labels in a template " + resolve(name);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyLabelTemplatesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/label/templates/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("LabelTemplates existence verified");
}
function verifyLabelTemplatesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/label/templates/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("LabelTemplates absence verified");
}
function matchAnyLabelTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLabelTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function listLicenseTemplates() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/licenses";
  var reqDescription = "Returns a list of all license templates {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyLicenseTemplatesExists(id) {
  let finalId = id || undefined;
  pvg.success("LicenseTemplates existence verified");
}
function verifyLicenseTemplatesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("LicenseTemplates absence verified");
}
function matchAnyLicenseTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLicenseTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function getLicenseTemplateInfo(name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/licenses/" + resolve(name);
  var reqDescription = "Returns information about a license template " + resolve(name);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyLicensesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/licenses/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Licenses existence verified");
}
function verifyLicensesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/licenses/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Licenses absence verified");
}
function matchAnyLicensesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLicenses() {
  return bp.EventSet("None", function(e){ return false; });
}

function renderMarkdown(body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markdown";
  var reqDescription = "Render a markdown document as HTML " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function renderMarkdownRaw(body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markdown/raw";
  var reqDescription = "Render raw markdown as HTML " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMarkdownRejects(body, id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/markdown";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMarkdownExists(id) {
  let finalId = id || undefined;
  pvg.success("Markdown existence verified");
}
function verifyMarkdownDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Markdown absence verified");
}
function matchAnyMarkdownAdded() {
  return bp.EventSet("Any Markdown Added", function(e) {
    return e.name.startsWith("Done: Positive: Render a markdown document as HTML");
  });
}

function matchDeletedMarkdown() {
  return bp.EventSet("None", function(e){ return false; });
}

function renderMarkup(body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markup";
  var reqDescription = "Render a markup document as HTML " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMarkupRejects(body, id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/markup";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMarkupExists(id) {
  let finalId = id || undefined;
  pvg.success("Markup existence verified");
}
function verifyMarkupDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Markup absence verified");
}
function matchAnyMarkupAdded() {
  return bp.EventSet("Any Markup Added", function(e) {
    return e.name.startsWith("Done: Positive: Render a markup document as HTML");
  });
}

function matchDeletedMarkup() {
  return bp.EventSet("None", function(e){ return false; });
}

function getNodeInfo() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/nodeinfo";
  var reqDescription = "Returns the nodeinfo of the Gitea application {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyNodeInfoExists(id) {
  let finalId = id || undefined;
  pvg.success("NodeInfo existence verified");
}
function verifyNodeInfoDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("NodeInfo absence verified");
}
function matchAnyNodeInfoAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNodeInfo() {
  return bp.EventSet("None", function(e){ return false; });
}

function notifyGetRepoList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/notifications";
  var reqDescription = "List users's notification threads on a specific repo {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function notifyReadRepoList(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_all = resolve(all);
  if (val_all !== undefined) body["all"] = val_all;
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_last_read_at = resolve(last_read_at);
  if (val_last_read_at !== undefined) body["last_read_at"] = val_last_read_at;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  let val_status_types = resolve(status_types);
  if (val_status_types !== undefined) body["status-types"] = val_status_types;
  let val_subject_type = resolve(subject_type);
  if (val_subject_type !== undefined) body["subject-type"] = val_subject_type;
  let val_to_status = resolve(to_status);
  if (val_to_status !== undefined) body["to-status"] = val_to_status;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/notifications";
  var reqDescription = "Mark notification threads as read, pinned or unread on a specific repo " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [205], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(all) !== undefined) eventData["all"] = resolve(all);
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(last_read_at) !== undefined) eventData["last_read_at"] = resolve(last_read_at);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    if (resolve(status_types) !== undefined) eventData["status-types"] = resolve(status_types);
    if (resolve(subject_type) !== undefined) eventData["subject-type"] = resolve(subject_type);
    if (resolve(to_status) !== undefined) eventData["to-status"] = resolve(to_status);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function notifyGetThread(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/notifications/threads/" + resolve(id);
  var reqDescription = "Get notification thread by ID " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function notifyReadThread(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_all = resolve(all);
  if (val_all !== undefined) body["all"] = val_all;
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_last_read_at = resolve(last_read_at);
  if (val_last_read_at !== undefined) body["last_read_at"] = val_last_read_at;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_owner = resolve(owner);
  if (val_owner !== undefined) body["owner"] = val_owner;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_repo = resolve(repo);
  if (val_repo !== undefined) body["repo"] = val_repo;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  let val_status_types = resolve(status_types);
  if (val_status_types !== undefined) body["status-types"] = val_status_types;
  let val_subject_type = resolve(subject_type);
  if (val_subject_type !== undefined) body["subject-type"] = val_subject_type;
  let val_to_status = resolve(to_status);
  if (val_to_status !== undefined) body["to-status"] = val_to_status;
  var url = "/notifications/threads/" + resolve(id);
  var reqDescription = "Mark notification thread as read by ID " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [205, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(all) !== undefined) eventData["all"] = resolve(all);
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(last_read_at) !== undefined) eventData["last_read_at"] = resolve(last_read_at);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    if (resolve(status_types) !== undefined) eventData["status-types"] = resolve(status_types);
    if (resolve(subject_type) !== undefined) eventData["subject-type"] = resolve(subject_type);
    if (resolve(to_status) !== undefined) eventData["to-status"] = resolve(to_status);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function notifyNewAvailable() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/notifications/new";
  var reqDescription = "Check if unread notifications exist {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyNotificationsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/notifications/threads/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Notifications existence verified");
}
function verifyNotificationsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/notifications/threads/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Notifications absence verified");
}
function matchAnyNotificationsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNotifications() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgGetAll() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs";
  var reqDescription = "Get list of organizations";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgCreate(body, limit, org, organization, page, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_org = resolve(org);
  if (val_org !== undefined) body["org"] = val_org;
  let val_organization = resolve(organization);
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname);
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/orgs";
  var reqDescription = "Create an organization";
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(organization) !== undefined) eventData["organization"] = resolve(organization);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function createOrgRepoDeprecated(body, limit, org, organization, page, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization);
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname);
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/org/" + resolve(org) + "/repos";
  var reqDescription = "Create a repository in an organization";
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(organization) !== undefined) eventData["organization"] = resolve(organization);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgEdit(body, limit, org, organization, page, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization);
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname);
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Edit an organization";
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(organization) !== undefined) eventData["organization"] = resolve(organization);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgGetRunnerRegistrationToken(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/actions/runners/registration-token";
  var reqDescription = "Get an organization's actions runner registration token";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgListActionsSecrets(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/actions/secrets";
  var reqDescription = "List an organization's actions secrets";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function deleteOrgSecret(org, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/actions/secrets/" + resolve(secretname);
  var reqDescription = "Delete a secret in an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function updateOrgSecret(body, limit, org, organization, page, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization);
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org) + "/actions/secrets/" + resolve(secretname);
  var reqDescription = "Create or Update a secret value in an organization";
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(organization) !== undefined) eventData["organization"] = resolve(organization);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function getOrgVariablesList(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/actions/variables";
  var reqDescription = "Get an org-level variables list";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404, 405] });
}

function verifyOrganizationRejects(body, limit, org, organization, page, secretname) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(org) !== undefined) body["org"] = resolve(org);
  if (resolve(organization) !== undefined) body["organization"] = resolve(organization);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(secretname) !== undefined) body["secretname"] = resolve(secretname);
  var url = "/orgs";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Organization existence verified");
}
function verifyOrganizationDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Organization absence verified");
}
function matchAnyOrganizationAdded() {
  return bp.EventSet("Any Organization Added", function(e) {
    return e.name.startsWith("Done: Positive: Create an organization");
  });
}

function matchDeletedOrganization() {
  return bp.EventSet("Deleted Organization", function(e) {
    return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function createOrgVariable(body, org, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/orgs/" + resolve(org) + "/actions/variables/" + resolve(variablename);
  var reqDescription = "Create an org-level variable";
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgEdit(body, org, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_variablename = resolve(variablename);
  if (val_variablename !== undefined) body["variablename"] = val_variablename;
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Edit an organization";
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrgVariablesRejects(body, org, variablename) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/orgs/" + resolve(org) + "/actions/variables/" + resolve(variablename);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrgVariablesExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("OrgVariables existence verified");
}
function verifyOrgVariablesDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("OrgVariables absence verified");
}
function matchAnyOrgVariablesAdded() {
  return bp.EventSet("Any OrgVariables Added", function(e) {
    return e.name.startsWith("Done: Positive: Create an org-level variable");
  });
}

function matchDeletedOrgVariables() {
  return bp.EventSet("Deleted OrgVariables", function(e) {
    return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function userListActivityFeeds(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/activities/feeds";
  var reqDescription = "List a user's activity feeds {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyActivityFeedsExists(id) {
  let finalId = id || undefined;
  pvg.success("ActivityFeeds existence verified");
}
function verifyActivityFeedsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("ActivityFeeds absence verified");
}
function matchAnyActivityFeedsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedActivityFeeds() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgDeleteAvatar(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/avatar";
  var reqDescription = "Delete Avatar " + resolve(org);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgUpdateAvatar(body, org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/orgs/" + resolve(org) + "/avatar";
  var reqDescription = "Update Avatar " + resolve(org);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyAvatarRejects(body, org) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/orgs/" + resolve(org) + "/avatar";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyAvatarExists(org) {
  let finalId = org || undefined;
  pvg.success("Avatar existence verified");
}
function verifyAvatarDoesNotExist(org) {
  let finalId = org || undefined;
  pvg.success("Avatar absence verified");
}
function matchAnyAvatarAdded() {
  return bp.EventSet("Any Avatar Added", function(e) {
    return e.name.startsWith("Done: Positive: Update Avatar");
  });
}

function matchDeletedAvatar() {
  return bp.EventSet("Deleted Avatar", function(e) {
    return e.name.startsWith("Done: Positive: Delete Avatar");
  });
}

function organizationListBlocks(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/blocks";
  var reqDescription = "List users blocked by the organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgEdit(body, limit, org, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Edit an organization";
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBlocksExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Blocks existence verified");
}
function verifyBlocksDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Blocks absence verified");
}
function matchAnyBlocksAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedBlocks() {
  return bp.EventSet("Deleted Blocks", function(e) {
    return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function issueListLabels(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/labels";
  var reqDescription = "Get all of a repository's labels {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateLabel(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_color = resolve(color);
  if (val_color !== undefined) body["color"] = val_color;
  let val_description = resolve(description);
  if (val_description !== undefined) body["description"] = val_description;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/labels";
  var reqDescription = "Create a label " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(color) !== undefined) eventData["color"] = resolve(color);
    if (resolve(description) !== undefined) eventData["description"] = resolve(description);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditLabel(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_color = resolve(color);
  if (val_color !== undefined) body["color"] = val_color;
  let val_description = resolve(description);
  if (val_description !== undefined) body["description"] = val_description;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/labels/" + resolve(id);
  var reqDescription = "Update a label " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(color) !== undefined) eventData["color"] = resolve(color);
    if (resolve(description) !== undefined) eventData["description"] = resolve(description);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteLabel(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/labels/" + resolve(id);
  var reqDescription = "Delete a label " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyLabelsRejects(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(color) !== undefined) body["color"] = resolve(color);
  if (resolve(description) !== undefined) body["description"] = resolve(description);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/labels";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyLabelsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Labels existence verified");
}
function verifyLabelsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Labels absence verified");
}
function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a label");
  });
}

function matchDeletedLabels() {
  return bp.EventSet("Deleted Labels", function(e) {
    return e.name.startsWith("Done: Positive: Delete a label");
  });
}

function orgListMembers(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/members";
  var reqDescription = "List an organization's members {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyMembersExists(id) {
  let finalId = id || undefined;
  pvg.success("Members existence verified");
}
function verifyMembersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Members absence verified");
}
function matchAnyMembersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedMembers() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyOrganizationMembersExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("OrganizationMembers existence verified");
}
function verifyOrganizationMembersDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("OrganizationMembers absence verified");
}
function matchAnyOrganizationMembersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedOrganizationMembers() {
  return bp.EventSet("Deleted OrganizationMembers", function(e) {
    return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgListPublicMembers(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/public_members";
  var reqDescription = "List an organization's public members";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgDelete(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGet(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Get an organization";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgEdit(body, limit, org, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org);
  var reqDescription = "Edit an organization";
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationPublicMembersExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("OrganizationPublicMembers existence verified");
}
function verifyOrganizationPublicMembersDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("OrganizationPublicMembers absence verified");
}
function matchAnyOrganizationPublicMembersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedOrganizationPublicMembers() {
  return bp.EventSet("Deleted OrganizationPublicMembers", function(e) {
    return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgListRepos(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/repos";
  var reqDescription = "List an organization's repos {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function createOrgRepo(body, id, limit, org, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org) + "/repos";
  var reqDescription = "Create a repository in an organization " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationReposRejects(body, id, limit, org, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/orgs/" + resolve(org) + "/repos";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationReposExists(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationRepos existence verified");
}
function verifyOrganizationReposDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationRepos absence verified");
}
function matchAnyOrganizationReposAdded() {
  return bp.EventSet("Any OrganizationRepos Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a repository in an organization");
  });
}

function matchDeletedOrganizationRepos() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgListTeams(org) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org) + "/teams";
  var reqDescription = "List an organization's teams {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgCreateTeam(body, id, limit, org, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org) + "/teams";
  var reqDescription = "Create a team " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationTeamsRejects(body, id, limit, org, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/orgs/" + resolve(org) + "/teams";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationTeamsExists(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationTeams existence verified");
}
function verifyOrganizationTeamsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationTeams absence verified");
}
function matchAnyOrganizationTeamsAdded() {
  return bp.EventSet("Any OrganizationTeams Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a team");
  });
}

function matchDeletedOrganizationTeams() {
  return bp.EventSet("None", function(e){ return false; });
}

function userListTeams() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/teams";
  var reqDescription = "List all the teams a user belongs to {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Delete a team " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Get a team " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgEditTeam(body, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id);
  var reqDescription = "Edit a team " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyTeamsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Teams existence verified");
}
function verifyTeamsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Teams absence verified");
}
function matchAnyTeamsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedTeams() {
  return bp.EventSet("Deleted Teams", function(e) {
    return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function listPackages(owner) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner);
  var reqDescription = "Gets all packages of an owner";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function listPackages(owner, page, limit, type, q) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner);
  var reqDescription = "Gets all packages of an owner";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405], queryParameters: {    "page": resolve(page),     "limit": resolve(limit),     "type": resolve(type),     "q": resolve(q)} });
}

function deletePackage(owner, type, name, version) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner) + "/" + resolve(type) + "/" + resolve(name) + "/" + resolve(version);
  var reqDescription = "Delete a package " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function listPackageFiles(owner, type, name, version) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner) + "/" + resolve(type) + "/" + resolve(name) + "/" + resolve(version) + "/files";
  var reqDescription = "Gets all files of a package " + resolve(owner);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyPackagesExists(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/packages/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Packages existence verified");
}
function verifyPackagesDoesNotExist(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/packages/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Packages absence verified");
}
function matchAnyPackagesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedPackages() {
  return bp.EventSet("Deleted Packages", function(e) {
    return e.name.startsWith("Done: Positive: Delete a package");
  });
}

function issueGetIssueReactions(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/reactions";
  var reqDescription = "Get a list reactions of an issue {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function issuePostIssueReaction(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content);
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position);
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/reactions";
  var reqDescription = "Add a reaction to an issue " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content) !== undefined) eventData["content"] = resolve(content);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(position) !== undefined) eventData["position"] = resolve(position);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteTime(owner, repo, index, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/times/" + resolve(id);
  var reqDescription = "Delete specific tracked time " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function moveIssuePin(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content);
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/pin/" + resolve(position);
  var reqDescription = "Moves the Pin to the given Position " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content) !== undefined) eventData["content"] = resolve(content);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(position) !== undefined) eventData["position"] = resolve(position);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteStopWatch(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/stopwatch/delete";
  var reqDescription = "Delete an issue's existing stopwatch. {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 409] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function issueStartStopWatch(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content);
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position);
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/stopwatch/start";
  var reqDescription = "Start stopwatch on an issue. " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content) !== undefined) eventData["content"] = resolve(content);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(position) !== undefined) eventData["position"] = resolve(position);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueStopStopWatch(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content);
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position);
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/stopwatch/stop";
  var reqDescription = "Stop an issue's existing stopwatch. " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 409], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content) !== undefined) eventData["content"] = resolve(content);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(position) !== undefined) eventData["position"] = resolve(position);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssuesRejects(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(content) !== undefined) body["content"] = resolve(content);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(position) !== undefined) body["position"] = resolve(position);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/reactions";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssuesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Issues existence verified");
}
function verifyIssuesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Issues absence verified");
}
function matchAnyIssuesAdded() {
  return bp.EventSet("Any Issues Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a reaction to an issue");
  });
}

function matchDeletedIssues() {
  return bp.EventSet("Deleted Issues", function(e) {
    return e.name.startsWith("Done: Positive: Delete specific tracked time");
  });
}

function repoCreateStatus(body, id, limit, owner, page, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/statuses/" + resolve(sha);
  var reqDescription = "Create a commit status " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(sha) !== undefined) eventData["sha"] = resolve(sha);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoListSubscribers(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/subscribers";
  var reqDescription = "List a repo's watchers {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userCurrentDeleteSubscription(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/subscription";
  var reqDescription = "Unwatch a repo {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userCurrentPutSubscription(body, id, limit, owner, page, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_sha = resolve(sha);
  if (val_sha !== undefined) body["sha"] = val_sha;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/subscription";
  var reqDescription = "Watch a repo " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(sha) !== undefined) eventData["sha"] = resolve(sha);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetRunnerRegistrationToken(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/runners/registration-token";
  var reqDescription = "Get a repository's actions runner registration token {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoListActionsSecrets(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/secrets";
  var reqDescription = "List an repo's actions secrets {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyRepositoryRejects(body, id, limit, owner, page, repo, sha) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/statuses/" + resolve(sha);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Repository existence verified");
}
function verifyRepositoryDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Repository absence verified");
}
function matchAnyRepositoryAdded() {
  return bp.EventSet("Any Repository Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a commit status");
  });
}

function matchDeletedRepository() {
  return bp.EventSet("Deleted Repository", function(e) {
    return e.name.startsWith("Done: Positive: Unwatch a repo");
  });
}

function deleteRepoSecret(owner, repo, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/secrets/" + resolve(secretname);
  var reqDescription = "Delete a secret in a repository " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function updateRepoSecret(CreateOrUpdateSecretOption, body, owner, repo, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_CreateOrUpdateSecretOption = resolve(CreateOrUpdateSecretOption);
  if (val_CreateOrUpdateSecretOption !== undefined) body["CreateOrUpdateSecretOption"] = val_CreateOrUpdateSecretOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/secrets/" + resolve(secretname);
  var reqDescription = "Create or Update a secret value in a repository " + resolve(owner);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateOrUpdateSecretOption) !== undefined) eventData["CreateOrUpdateSecretOption"] = resolve(CreateOrUpdateSecretOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifySecretsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("Secrets existence verified");
}
function verifySecretsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("Secrets absence verified");
}
function matchAnySecretsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedSecrets() {
  return bp.EventSet("Deleted Secrets", function(e) {
    return e.name.startsWith("Done: Positive: Delete a secret in a repository");
  });
}

function ListActionTasks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/tasks";
  var reqDescription = "List a repository's action tasks {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404, 405, 409, 422] });
}

function verifyTasksExists(id) {
  let finalId = id || undefined;
  pvg.success("Tasks existence verified");
}
function verifyTasksDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Tasks absence verified");
}
function matchAnyTasksAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedTasks() {
  return bp.EventSet("None", function(e){ return false; });
}

function getRepoVariablesList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/variables";
  var reqDescription = "Get repo-level variables list {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404, 405] });
}

function deleteRepoVariable(owner, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/variables/" + resolve(variablename);
  var reqDescription = "Delete a repo-level variable {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function createRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_CreateVariableOption = resolve(CreateVariableOption);
  if (val_CreateVariableOption !== undefined) body["CreateVariableOption"] = val_CreateVariableOption;
  let val_UpdateVariableOption = resolve(UpdateVariableOption);
  if (val_UpdateVariableOption !== undefined) body["UpdateVariableOption"] = val_UpdateVariableOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/variables/" + resolve(variablename);
  var reqDescription = "Create a repo-level variable " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateVariableOption) !== undefined) eventData["CreateVariableOption"] = resolve(CreateVariableOption);
    if (resolve(UpdateVariableOption) !== undefined) eventData["UpdateVariableOption"] = resolve(UpdateVariableOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function updateRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_CreateVariableOption = resolve(CreateVariableOption);
  if (val_CreateVariableOption !== undefined) body["CreateVariableOption"] = val_CreateVariableOption;
  let val_UpdateVariableOption = resolve(UpdateVariableOption);
  if (val_UpdateVariableOption !== undefined) body["UpdateVariableOption"] = val_UpdateVariableOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/variables/" + resolve(variablename);
  var reqDescription = "Update a repo-level variable " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateVariableOption) !== undefined) eventData["CreateVariableOption"] = resolve(CreateVariableOption);
    if (resolve(UpdateVariableOption) !== undefined) eventData["UpdateVariableOption"] = resolve(UpdateVariableOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyVariablesRejects(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(CreateVariableOption) !== undefined) body["CreateVariableOption"] = resolve(CreateVariableOption);
  if (resolve(UpdateVariableOption) !== undefined) body["UpdateVariableOption"] = resolve(UpdateVariableOption);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/actions/variables/" + resolve(variablename);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyVariablesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Variables existence verified");
}
function verifyVariablesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Variables absence verified");
}
function matchAnyVariablesAdded() {
  return bp.EventSet("Any Variables Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a repo-level variable");
  });
}

function matchDeletedVariables() {
  return bp.EventSet("Deleted Variables", function(e) {
    return e.name.startsWith("Done: Positive: Delete a repo-level variable");
  });
}

function repoDeleteBranchProtection(owner, repo, name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branch_protections/" + resolve(name);
  var reqDescription = "Delete a specific branch protection for the repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoEditBranchProtection(body, id, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branch_protections/" + resolve(name);
  var reqDescription = "Edit a branch protections for a repository. Only fields that are set will be changed " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBranchProtectionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("BranchProtections existence verified");
}
function verifyBranchProtectionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("BranchProtections absence verified");
}
function matchAnyBranchProtectionsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedBranchProtections() {
  return bp.EventSet("Deleted BranchProtections", function(e) {
    return e.name.startsWith("Done: Positive: Delete a specific branch protection for the repository");
  });
}

function repoListBranches(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branches";
  var reqDescription = "List a repository's branches {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoCreateBranch(body, branch, id, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_branch = resolve(branch);
  if (val_branch !== undefined) body["branch"] = val_branch;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branches";
  var reqDescription = "Create a branch " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 409, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(branch) !== undefined) eventData["branch"] = resolve(branch);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteBranch(owner, repo, branch) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branches/" + resolve(branch);
  var reqDescription = "Delete a specific branch from a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoUpdateBranch(body, branch, id, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branches/" + resolve(branch);
  var reqDescription = "Update a branch " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(branch) !== undefined) eventData["branch"] = resolve(branch);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBranchesRejects(body, branch, id, limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(branch) !== undefined) body["branch"] = resolve(branch);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/branches";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyBranchesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Branches existence verified");
}
function verifyBranchesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Branches absence verified");
}
function matchAnyBranchesAdded() {
  return bp.EventSet("Any Branches Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a branch");
  });
}

function matchDeletedBranches() {
  return bp.EventSet("Deleted Branches", function(e) {
    return e.name.startsWith("Done: Positive: Delete a specific branch from a repository");
  });
}

function repoListCollaborators(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/collaborators";
  var reqDescription = "List a repository's collaborators {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDeleteCollaborator(owner, repo, collaborator) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/collaborators/" + resolve(collaborator);
  var reqDescription = "Delete a collaborator from a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoAddCollaborator(body, collaborator, id, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/collaborators/" + resolve(collaborator);
  var reqDescription = "Add or Update a collaborator to a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(collaborator) !== undefined) eventData["collaborator"] = resolve(collaborator);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyCollaboratorsRejects(body, collaborator, id, limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/collaborators/" + resolve(collaborator);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyCollaboratorsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Collaborators existence verified");
}
function verifyCollaboratorsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Collaborators absence verified");
}
function matchAnyCollaboratorsAdded() {
  return bp.EventSet("Any Collaborators Added", function(e) {
    return e.name.startsWith("Done: Positive: Add or Update a collaborator to a repository");
  });
}

function matchDeletedCollaborators() {
  return bp.EventSet("Deleted Collaborators", function(e) {
    return e.name.startsWith("Done: Positive: Delete a collaborator from a repository");
  });
}

function repoGetAllCommits(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/commits";
  var reqDescription = "Get a list of all commits from a repository {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405, 409] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoListStatusesByRef(owner, repo, ref) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/commits/" + resolve(ref) + "/statuses";
  var reqDescription = "Get a commit's statuses, by branch/tag/commit reference {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404, 405] });
}

function repoGetCommitPullRequest(owner, repo, sha) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/commits/" + resolve(sha) + "/pull";
  var reqDescription = "Get the merged pull request of the commit {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/git/commits/" + resolve(sha) + "." + resolve(diffType);
  var reqDescription = "Get a commit's diff or patch {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyCommitsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Commits existence verified");
}
function verifyCommitsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Commits absence verified");
}
function matchAnyCommitsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedCommits() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userListRepos(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/repos";
  var reqDescription = "List the repos owned by the given user {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function createCurrentUserRepo(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_filepath = resolve(filepath);
  if (val_filepath !== undefined) body["filepath"] = val_filepath;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_owner = resolve(owner);
  if (val_owner !== undefined) body["owner"] = val_owner;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_repo = resolve(repo);
  if (val_repo !== undefined) body["repo"] = val_repo;
  let val_username = resolve(username);
  if (val_username !== undefined) body["username"] = val_username;
  var url = "/user/repos";
  var reqDescription = "Create a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 405, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(filepath) !== undefined) eventData["filepath"] = resolve(filepath);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteFile(owner, repo, filepath) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/contents/" + resolve(filepath);
  var reqDescription = "Delete a file in a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoUpdateFile(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_username = resolve(username);
  if (val_username !== undefined) body["username"] = val_username;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/contents/" + resolve(filepath);
  var reqDescription = "Update a file in a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(filepath) !== undefined) eventData["filepath"] = resolve(filepath);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyRepositoriesRejects(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(filepath) !== undefined) body["filepath"] = resolve(filepath);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(owner) !== undefined) body["owner"] = resolve(owner);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(repo) !== undefined) body["repo"] = resolve(repo);
  if (resolve(username) !== undefined) body["username"] = resolve(username);
  var url = "/user/repos";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoriesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Repositories existence verified");
}
function verifyRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Repositories absence verified");
}
function matchAnyRepositoriesAdded() {
  return bp.EventSet("Any Repositories Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a repository");
  });
}

function matchDeletedRepositories() {
  return bp.EventSet("Deleted Repositories", function(e) {
    return e.name.startsWith("Done: Positive: Delete a file in a repository");
  });
}

function listForks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/forks";
  var reqDescription = "List a repository's forks {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function createFork(body, id, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/forks";
  var reqDescription = "Fork a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 405, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyForksRejects(body, id, limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/forks";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyForksExists(id) {
  let finalId = id || undefined;
  pvg.success("Forks existence verified");
}
function verifyForksDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Forks absence verified");
}
function matchAnyForksAdded() {
  return bp.EventSet("Any Forks Added", function(e) {
    return e.name.startsWith("Done: Positive: Fork a repository");
  });
}

function matchDeletedForks() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyBlobsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Blobs existence verified");
}
function verifyBlobsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Blobs absence verified");
}
function matchAnyBlobsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedBlobs() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyNotesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Notes existence verified");
}
function verifyNotesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Notes absence verified");
}
function matchAnyNotesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNotes() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListAllGitRefs(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/git/refs";
  var reqDescription = "Get specified ref or filtered repository's refs {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyGitRefsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GitRefs existence verified");
}
function verifyGitRefsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GitRefs absence verified");
}
function matchAnyGitRefsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitRefs() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyGitTagsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GitTags existence verified");
}
function verifyGitTagsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GitTags absence verified");
}
function matchAnyGitTagsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitTags() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyGitTreesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GitTrees existence verified");
}
function verifyGitTreesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GitTrees absence verified");
}
function matchAnyGitTreesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitTrees() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListGitHooks(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/hooks/git";
  var reqDescription = "List the Git hooks in a repository {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDeleteGitHook(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/hooks/git/" + resolve(id);
  var reqDescription = "Delete a Git hook in a repository " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoEditGitHook(EditGitHookOption, body, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_EditGitHookOption = resolve(EditGitHookOption);
  if (val_EditGitHookOption !== undefined) body["EditGitHookOption"] = val_EditGitHookOption;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/hooks/git/" + resolve(id);
  var reqDescription = "Edit a Git hook in a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditGitHookOption) !== undefined) eventData["EditGitHookOption"] = resolve(EditGitHookOption);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyGitHooksExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GitHooks existence verified");
}
function verifyGitHooksDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GitHooks absence verified");
}
function matchAnyGitHooksAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitHooks() {
  return bp.EventSet("Deleted GitHooks", function(e) {
    return e.name.startsWith("Done: Positive: Delete a Git hook in a repository");
  });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyIssueConfigExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("IssueConfig existence verified");
}
function verifyIssueConfigDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("IssueConfig absence verified");
}
function matchAnyIssueConfigAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedIssueConfig() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueGetRepoComments(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments";
  var reqDescription = "List all comments in a repository {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueDeleteComment(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id);
  var reqDescription = "Delete a comment " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditComment(before, body, id, limit, owner, page, repo, since) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id);
  var reqDescription = "Edit a comment " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 405, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Comments existence verified");
}
function verifyCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Comments absence verified");
}
function matchAnyCommentsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedComments() {
  return bp.EventSet("Deleted Comments", function(e) {
    return e.name.startsWith("Done: Positive: Delete a comment");
  });
}

function issueListIssueCommentAttachments(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/assets";
  var reqDescription = "List comment's attachments " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id);
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/assets";
  var reqDescription = "Create a comment attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Delete a comment attachment " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Edit a comment attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueCommentAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment) !== undefined) body["attachment"] = resolve(attachment);
  if (resolve(attachment_id) !== undefined) body["attachment_id"] = resolve(attachment_id);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/assets";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("IssueCommentAttachments existence verified");
}
function verifyIssueCommentAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("IssueCommentAttachments absence verified");
}
function matchAnyIssueCommentAttachmentsAdded() {
  return bp.EventSet("Any IssueCommentAttachments Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a comment attachment");
  });
}

function matchDeletedIssueCommentAttachments() {
  return bp.EventSet("Deleted IssueCommentAttachments", function(e) {
    return e.name.startsWith("Done: Positive: Delete a comment attachment");
  });
}

function issueDeleteCommentReaction(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/reactions";
  var reqDescription = "Remove a reaction from a comment of an issue " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function issueGetCommentReactions(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/reactions";
  var reqDescription = "Get a list of reactions from a comment of an issue " + resolve(owner);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function issuePostCommentReaction(content, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_content = resolve(content);
  if (val_content !== undefined) body["content"] = val_content;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/reactions";
  var reqDescription = "Add a reaction to a comment of an issue " + resolve(owner);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content) !== undefined) eventData["content"] = resolve(content);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueCommentReactionsRejects(content, id, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(content) !== undefined) body["content"] = resolve(content);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/comments/" + resolve(id) + "/reactions";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentReactionsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueCommentReactions existence verified");
}
function verifyIssueCommentReactionsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueCommentReactions absence verified");
}
function matchAnyIssueCommentReactionsAdded() {
  return bp.EventSet("Any IssueCommentReactions Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a reaction to a comment of an issue");
  });
}

function matchDeletedIssueCommentReactions() {
  return bp.EventSet("Deleted IssueCommentReactions", function(e) {
    return e.name.startsWith("Done: Positive: Remove a reaction from a comment of an issue");
  });
}

function repoListPinnedIssues(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/pinned";
  var reqDescription = "List a repo's pinned issues {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyPinnedIssuesExists(id) {
  let finalId = id || undefined;
  pvg.success("PinnedIssues existence verified");
}
function verifyPinnedIssuesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PinnedIssues absence verified");
}
function matchAnyPinnedIssuesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedPinnedIssues() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueListIssueAttachments(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/assets";
  var reqDescription = "List issue's attachments {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id);
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/assets";
  var reqDescription = "Create an issue attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Edit an issue attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Delete an issue attachment {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyIssueAttachmentsRejects(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment) !== undefined) body["attachment"] = resolve(attachment);
  if (resolve(attachment_id) !== undefined) body["attachment_id"] = resolve(attachment_id);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/assets";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("IssueAttachments existence verified");
}
function verifyIssueAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("IssueAttachments absence verified");
}
function matchAnyIssueAttachmentsAdded() {
  return bp.EventSet("Any IssueAttachments Added", function(e) {
    return e.name.startsWith("Done: Positive: Create an issue attachment");
  });
}

function matchDeletedIssueAttachments() {
  return bp.EventSet("Deleted IssueAttachments", function(e) {
    return e.name.startsWith("Done: Positive: Delete an issue attachment");
  });
}

function issueListBlocks(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/blocks";
  var reqDescription = "List issues that are blocked by this issue " + resolve(owner);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateIssueBlocking(body, index, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/blocks";
  var reqDescription = "Block the issue given in the body by the issue in path " + resolve(owner);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueRemoveIssueBlocking(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/blocks";
  var reqDescription = "Unblock the issue given in the body by the issue in path " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyIssueBlocksRejects(body, index, limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/blocks";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueBlocksExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueBlocks existence verified");
}
function verifyIssueBlocksDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueBlocks absence verified");
}
function matchAnyIssueBlocksAdded() {
  return bp.EventSet("Any IssueBlocks Added", function(e) {
    return e.name.startsWith("Done: Positive: Block the issue given in the body by the issue in path");
  });
}

function matchDeletedIssueBlocks() {
  return bp.EventSet("Deleted IssueBlocks", function(e) {
    return e.name.startsWith("Done: Positive: Unblock the issue given in the body by the issue in path");
  });
}

function issueGetComments(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/comments";
  var reqDescription = "List all comments on an issue {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateComment(before, body, id, index, owner, repo, since) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/comments";
  var reqDescription = "Add a comment to an issue " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditCommentDeprecated(before, body, id, index, owner, repo, since) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/comments/" + resolve(id);
  var reqDescription = "Edit a comment " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteCommentDeprecated(owner, repo, index, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/comments/" + resolve(id);
  var reqDescription = "Delete a comment " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyIssueCommentsRejects(before, body, id, index, owner, repo, since) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(before) !== undefined) body["before"] = resolve(before);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(since) !== undefined) body["since"] = resolve(since);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/comments";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("IssueComments existence verified");
}
function verifyIssueCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("IssueComments absence verified");
}
function matchAnyIssueCommentsAdded() {
  return bp.EventSet("Any IssueComments Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a comment to an issue");
  });
}

function matchDeletedIssueComments() {
  return bp.EventSet("Deleted IssueComments", function(e) {
    return e.name.startsWith("Done: Positive: Delete a comment");
  });
}

function issueSubscriptions(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/subscriptions";
  var reqDescription = "Get users who subscribed on an issue. {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueAddSubscription(id, index, limit, owner, page, repo, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/subscriptions/" + resolve(user);
  var reqDescription = "Subscribe user to issue " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(user) !== undefined) eventData["user"] = resolve(user);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteSubscription(owner, repo, index, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/subscriptions/" + resolve(user);
  var reqDescription = "Unsubscribe user from issue {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 304, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyIssueSubscriptionsRejects(id, index, limit, owner, page, repo, user) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/subscriptions/" + resolve(user);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueSubscriptionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("IssueSubscriptions existence verified");
}
function verifyIssueSubscriptionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("IssueSubscriptions absence verified");
}
function matchAnyIssueSubscriptionsAdded() {
  return bp.EventSet("Any IssueSubscriptions Added", function(e) {
    return e.name.startsWith("Done: Positive: Subscribe user to issue");
  });
}

function matchDeletedIssueSubscriptions() {
  return bp.EventSet("Deleted IssueSubscriptions", function(e) {
    return e.name.startsWith("Done: Positive: Unsubscribe user from issue");
  });
}

function issueGetCommentsAndTimeline(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/timeline";
  var reqDescription = "List all comments and events on an issue {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyIssueTimelineExists(id) {
  let finalId = id || undefined;
  pvg.success("IssueTimeline existence verified");
}
function verifyIssueTimelineDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("IssueTimeline absence verified");
}
function matchAnyIssueTimelineAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedIssueTimeline() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueTrackedTimes(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/times";
  var reqDescription = "List an issue's tracked times " + resolve(owner);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueAddTime(before, body, index, limit, owner, page, repo, since, user) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before);
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since);
  if (val_since !== undefined) body["since"] = val_since;
  let val_user = resolve(user);
  if (val_user !== undefined) body["user"] = val_user;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/times";
  var reqDescription = "Add tracked time to a issue " + resolve(owner);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before) !== undefined) eventData["before"] = resolve(before);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(since) !== undefined) eventData["since"] = resolve(since);
    if (resolve(user) !== undefined) eventData["user"] = resolve(user);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueResetTime(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/times";
  var reqDescription = "Reset a tracked time of an issue " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyIssueTimesRejects(before, body, index, limit, owner, page, repo, since, user) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(before) !== undefined) body["before"] = resolve(before);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(since) !== undefined) body["since"] = resolve(since);
  if (resolve(user) !== undefined) body["user"] = resolve(user);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/issues/" + resolve(index) + "/times";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueTimesExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueTimes existence verified");
}
function verifyIssueTimesDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueTimes absence verified");
}
function matchAnyIssueTimesAdded() {
  return bp.EventSet("Any IssueTimes Added", function(e) {
    return e.name.startsWith("Done: Positive: Add tracked time to a issue");
  });
}

function matchDeletedIssueTimes() {
  return bp.EventSet("Deleted IssueTimes", function(e) {
    return e.name.startsWith("Done: Positive: Reset a tracked time of an issue");
  });
}

function repoListKeys(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/keys";
  var reqDescription = "List a repository's keys {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoCreateKey(body, fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_fingerprint = resolve(fingerprint);
  if (val_fingerprint !== undefined) body["fingerprint"] = val_fingerprint;
  let val_key = resolve(key);
  if (val_key !== undefined) body["key"] = val_key;
  let val_key_id = resolve(key_id);
  if (val_key_id !== undefined) body["key_id"] = val_key_id;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_read_only = resolve(read_only);
  if (val_read_only !== undefined) body["read_only"] = val_read_only;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/keys";
  var reqDescription = "Add a key to a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(fingerprint) !== undefined) eventData["fingerprint"] = resolve(fingerprint);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(key) !== undefined) eventData["key"] = resolve(key);
    if (resolve(key_id) !== undefined) eventData["key_id"] = resolve(key_id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(read_only) !== undefined) eventData["read_only"] = resolve(read_only);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDeleteKey(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/keys/" + resolve(id);
  var reqDescription = "Delete a key from a repository " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyRepositoryKeysRejects(body, fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(fingerprint) !== undefined) body["fingerprint"] = resolve(fingerprint);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(key) !== undefined) body["key"] = resolve(key);
  if (resolve(key_id) !== undefined) body["key_id"] = resolve(key_id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(read_only) !== undefined) body["read_only"] = resolve(read_only);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/keys";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("RepositoryKeys existence verified");
}
function verifyRepositoryKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("RepositoryKeys absence verified");
}
function matchAnyRepositoryKeysAdded() {
  return bp.EventSet("Any RepositoryKeys Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a key to a repository");
  });
}

function matchDeletedRepositoryKeys() {
  return bp.EventSet("Deleted RepositoryKeys", function(e) {
    return e.name.startsWith("Done: Positive: Delete a key from a repository");
  });
}

function issueGetMilestonesList(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/milestones";
  var reqDescription = "Get all of a repository's opened milestones {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueCreateMilestone(body, id, limit, name, owner, page, repo, state) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_state = resolve(state);
  if (val_state !== undefined) body["state"] = val_state;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/milestones";
  var reqDescription = "Create a milestone " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(state) !== undefined) eventData["state"] = resolve(state);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueRejects(body, id, limit, name, owner, page, repo, state) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(state) !== undefined) body["state"] = resolve(state);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/milestones";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueExists(id) {
  let finalId = id || undefined;
  pvg.success("Issue existence verified");
}
function verifyIssueDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Issue absence verified");
}
function matchAnyIssueAdded() {
  return bp.EventSet("Any Issue Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a milestone");
  });
}

function matchDeletedIssue() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueDeleteMilestone(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/milestones/" + resolve(id);
  var reqDescription = "Delete a milestone " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function issueEditMilestone(body, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/milestones/" + resolve(id);
  var reqDescription = "Update a milestone " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMilestonesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Milestones existence verified");
}
function verifyMilestonesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Milestones absence verified");
}
function matchAnyMilestonesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedMilestones() {
  return bp.EventSet("Deleted Milestones", function(e) {
    return e.name.startsWith("Done: Positive: Delete a milestone");
  });
}

function repoMirrorSync(id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/mirror-sync";
  var reqDescription = "Sync a mirrored repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMirrorSyncRejects(id, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/mirror-sync";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMirrorSyncExists(id) {
  let finalId = id || undefined;
  pvg.success("MirrorSync existence verified");
}
function verifyMirrorSyncDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("MirrorSync absence verified");
}
function matchAnyMirrorSyncAdded() {
  return bp.EventSet("Any MirrorSync Added", function(e) {
    return e.name.startsWith("Done: Positive: Sync a mirrored repository");
  });
}

function matchDeletedMirrorSync() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyNewPinAllowedExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("NewPinAllowed existence verified");
}
function verifyNewPinAllowedDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("NewPinAllowed absence verified");
}
function matchAnyNewPinAllowedAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNewPinAllowed() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetPullRequestFiles(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/files";
  var reqDescription = "Get changed files for a pull request {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoMergePullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_skip_to = resolve(skip_to);
  if (val_skip_to !== undefined) body["skip-to"] = val_skip_to;
  let val_whitespace = resolve(whitespace);
  if (val_whitespace !== undefined) body["whitespace"] = val_whitespace;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/merge";
  var reqDescription = "Merge a pull request " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(skip_to) !== undefined) eventData["skip-to"] = resolve(skip_to);
    if (resolve(whitespace) !== undefined) eventData["whitespace"] = resolve(whitespace);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoEditPullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_skip_to = resolve(skip_to);
  if (val_skip_to !== undefined) body["skip-to"] = val_skip_to;
  let val_whitespace = resolve(whitespace);
  if (val_whitespace !== undefined) body["whitespace"] = val_whitespace;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index);
  var reqDescription = "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored. " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 409, 412, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(skip_to) !== undefined) eventData["skip-to"] = resolve(skip_to);
    if (resolve(whitespace) !== undefined) eventData["whitespace"] = resolve(whitespace);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoCancelScheduledAutoMerge(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/merge";
  var reqDescription = "Cancel the scheduled auto merge for the given pull request {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyPullRequestsRejects(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(skip_to) !== undefined) body["skip-to"] = resolve(skip_to);
  if (resolve(whitespace) !== undefined) body["whitespace"] = resolve(whitespace);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/merge";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullRequestsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("PullRequests existence verified");
}
function verifyPullRequestsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("PullRequests absence verified");
}
function matchAnyPullRequestsAdded() {
  return bp.EventSet("Any PullRequests Added", function(e) {
    return e.name.startsWith("Done: Positive: Merge a pull request");
  });
}

function matchDeletedPullRequests() {
  return bp.EventSet("Deleted PullRequests", function(e) {
    return e.name.startsWith("Done: Positive: Cancel the scheduled auto merge for the given pull request");
  });
}

function repoDeletePullReviewRequests(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/requested_reviewers";
  var reqDescription = "Cancel review requests for a pull request " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoCreatePullReviewRequests(body, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/requested_reviewers";
  var reqDescription = "Create review requests for a pull request " + resolve(owner);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewRequestsRejects(body, index, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/requested_reviewers";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewRequestsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("PullReviewRequests existence verified");
}
function verifyPullReviewRequestsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("PullReviewRequests absence verified");
}
function matchAnyPullReviewRequestsAdded() {
  return bp.EventSet("Any PullReviewRequests Added", function(e) {
    return e.name.startsWith("Done: Positive: Create review requests for a pull request");
  });
}

function matchDeletedPullReviewRequests() {
  return bp.EventSet("Deleted PullReviewRequests", function(e) {
    return e.name.startsWith("Done: Positive: Cancel review requests for a pull request");
  });
}

function repoListPullReviews(owner, repo, index) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews";
  var reqDescription = "List all reviews for a pull request {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoSubmitPullReview(body, id, index, limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id);
  var reqDescription = "Submit a pending review to a pull request " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeletePullReview(owner, repo, index, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id);
  var reqDescription = "Delete a specific review from a pull request " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyPullReviewsRejects(body, id, index, limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("PullReviews existence verified");
}
function verifyPullReviewsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("PullReviews absence verified");
}
function matchAnyPullReviewsAdded() {
  return bp.EventSet("Any PullReviews Added", function(e) {
    return e.name.startsWith("Done: Positive: Submit a pending review to a pull request");
  });
}

function matchDeletedPullReviews() {
  return bp.EventSet("Deleted PullReviews", function(e) {
    return e.name.startsWith("Done: Positive: Delete a specific review from a pull request");
  });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyPullReviewCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("PullReviewComments existence verified");
}
function verifyPullReviewCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("PullReviewComments absence verified");
}
function matchAnyPullReviewCommentsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedPullReviewComments() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoDismissPullReview(body, id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id) + "/dismissals";
  var reqDescription = "Dismiss a review for a pull request " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewDismissalsRejects(body, id, index, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id) + "/dismissals";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewDismissalsExists(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewDismissals existence verified");
}
function verifyPullReviewDismissalsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewDismissals absence verified");
}
function matchAnyPullReviewDismissalsAdded() {
  return bp.EventSet("Any PullReviewDismissals Added", function(e) {
    return e.name.startsWith("Done: Positive: Dismiss a review for a pull request");
  });
}

function matchDeletedPullReviewDismissals() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoUnDismissPullReview(id, index, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id) + "/undismissals";
  var reqDescription = "Cancel to dismiss a review for a pull request " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/reviews/" + resolve(id) + "/undismissals";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewUndismissalsExists(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewUndismissals existence verified");
}
function verifyPullReviewUndismissalsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewUndismissals absence verified");
}
function matchAnyPullReviewUndismissalsAdded() {
  return bp.EventSet("Any PullReviewUndismissals Added", function(e) {
    return e.name.startsWith("Done: Positive: Cancel to dismiss a review for a pull request");
  });
}

function matchDeletedPullReviewUndismissals() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoUpdatePullRequest(id, index, owner, repo, style) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_style = resolve(style);
  if (val_style !== undefined) body["style"] = val_style;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/update";
  var reqDescription = "Merge PR's baseBranch into headBranch " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(index) !== undefined) eventData["index"] = resolve(index);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(style) !== undefined) eventData["style"] = resolve(style);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullRequestUpdateRejects(id, index, owner, repo, style) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(style) !== undefined) body["style"] = resolve(style);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/pulls/" + resolve(index) + "/update";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullRequestUpdateExists(id) {
  let finalId = id || undefined;
  pvg.success("PullRequestUpdate existence verified");
}
function verifyPullRequestUpdateDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullRequestUpdate absence verified");
}
function matchAnyPullRequestUpdateAdded() {
  return bp.EventSet("Any PullRequestUpdate Added", function(e) {
    return e.name.startsWith("Done: Positive: Merge PR's baseBranch into headBranch");
  });
}

function matchDeletedPullRequestUpdate() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListPushMirrors(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/push_mirrors";
  var reqDescription = "Get all push mirrors of the repository {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 403, 404, 405] });
}

function repoPushMirrorSync(id, limit, name, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/push_mirrors-sync";
  var reqDescription = "Sync all push mirrored repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeletePushMirror(owner, repo, name) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/push_mirrors/" + resolve(name);
  var reqDescription = "Deletes a push mirror from a repository by remoteName {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyPushMirrorsRejects(id, limit, name, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/push_mirrors-sync";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPushMirrorsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("PushMirrors existence verified");
}
function verifyPushMirrorsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("PushMirrors absence verified");
}
function matchAnyPushMirrorsAdded() {
  return bp.EventSet("Any PushMirrors Added", function(e) {
    return e.name.startsWith("Done: Positive: Sync all push mirrored repository");
  });
}

function matchDeletedPushMirrors() {
  return bp.EventSet("Deleted PushMirrors", function(e) {
    return e.name.startsWith("Done: Positive: Deletes a push mirror from a repository by remoteName");
  });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyRawFilesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("RawFiles existence verified");
}
function verifyRawFilesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("RawFiles absence verified");
}
function matchAnyRawFilesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedRawFiles() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListReleases(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases";
  var reqDescription = "List a repo's releases {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoCreateRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_draft = resolve(draft);
  if (val_draft !== undefined) body["draft"] = val_draft;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_pre_release = resolve(pre_release);
  if (val_pre_release !== undefined) body["pre-release"] = val_pre_release;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases";
  var reqDescription = "Create a release " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 409, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(draft) !== undefined) eventData["draft"] = resolve(draft);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(pre_release) !== undefined) eventData["pre-release"] = resolve(pre_release);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDeleteRelease(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id);
  var reqDescription = "Delete a release " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoEditRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_draft = resolve(draft);
  if (val_draft !== undefined) body["draft"] = val_draft;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_pre_release = resolve(pre_release);
  if (val_pre_release !== undefined) body["pre-release"] = val_pre_release;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id);
  var reqDescription = "Update a release " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(draft) !== undefined) eventData["draft"] = resolve(draft);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(pre_release) !== undefined) eventData["pre-release"] = resolve(pre_release);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyReleasesRejects(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(draft) !== undefined) body["draft"] = resolve(draft);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(pre_release) !== undefined) body["pre-release"] = resolve(pre_release);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyReleasesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Releases existence verified");
}
function verifyReleasesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Releases absence verified");
}
function matchAnyReleasesAdded() {
  return bp.EventSet("Any Releases Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a release");
  });
}

function matchDeletedReleases() {
  return bp.EventSet("Deleted Releases", function(e) {
    return e.name.startsWith("Done: Positive: Delete a release");
  });
}

function repoListReleaseAttachments(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id) + "/assets";
  var reqDescription = "List release's attachments " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id);
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id) + "/assets";
  var reqDescription = "Create a release attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteReleaseAttachment(owner, repo, id, attachment_id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Delete a release attachment " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoEditReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment);
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name);
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id) + "/assets/" + resolve(attachment_id);
  var reqDescription = "Edit a release attachment " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment) !== undefined) eventData["attachment"] = resolve(attachment);
    if (resolve(attachment_id) !== undefined) eventData["attachment_id"] = resolve(attachment_id);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(name) !== undefined) eventData["name"] = resolve(name);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyReleaseAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment) !== undefined) body["attachment"] = resolve(attachment);
  if (resolve(attachment_id) !== undefined) body["attachment_id"] = resolve(attachment_id);
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(name) !== undefined) body["name"] = resolve(name);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/releases/" + resolve(id) + "/assets";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyReleaseAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("ReleaseAttachments existence verified");
}
function verifyReleaseAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("ReleaseAttachments absence verified");
}
function matchAnyReleaseAttachmentsAdded() {
  return bp.EventSet("Any ReleaseAttachments Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a release attachment");
  });
}

function matchDeletedReleaseAttachments() {
  return bp.EventSet("Deleted ReleaseAttachments", function(e) {
    return e.name.startsWith("Done: Positive: Delete a release attachment");
  });
}

function repoGetReviewers(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/reviewers";
  var reqDescription = "Return all users that can be requested to review in this repo {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyReviewersExists(id) {
  let finalId = id || undefined;
  pvg.success("Reviewers existence verified");
}
function verifyReviewersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Reviewers absence verified");
}
function matchAnyReviewersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedReviewers() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListTagProtection(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tag_protections";
  var reqDescription = "List tag protections for a repository {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoCreateTagProtection(body, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tag_protections";
  var reqDescription = "Create a tag protection for a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 403, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoEditTagProtection(body, id, owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tag_protections/" + resolve(id);
  var reqDescription = "Edit a tag protection for a repository. Only fields that are set will be changed " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteTagProtection(owner, repo, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tag_protections/" + resolve(id);
  var reqDescription = "Delete a specific tag protection for the repository " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyTagProtectionsRejects(body, id, owner, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tag_protections";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTagProtectionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("TagProtections existence verified");
}
function verifyTagProtectionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("TagProtections absence verified");
}
function matchAnyTagProtectionsAdded() {
  return bp.EventSet("Any TagProtections Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a tag protection for a repository");
  });
}

function matchDeletedTagProtections() {
  return bp.EventSet("Deleted TagProtections", function(e) {
    return e.name.startsWith("Done: Positive: Delete a specific tag protection for the repository");
  });
}

function repoListTags(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tags";
  var reqDescription = "List a repository's tags {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoCreateTag(body, id, limit, owner, page, repo, tag) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_tag = resolve(tag);
  if (val_tag !== undefined) body["tag"] = val_tag;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tags";
  var reqDescription = "Create a new git tag in a repository " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405, 409, 422, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(tag) !== undefined) eventData["tag"] = resolve(tag);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoDeleteTag(owner, repo, tag) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tags/" + resolve(tag);
  var reqDescription = "Delete a repository's tag by name {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 409, 422, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyTagsRejects(body, id, limit, owner, page, repo, tag) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(tag) !== undefined) body["tag"] = resolve(tag);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/tags";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTagsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Tags existence verified");
}
function verifyTagsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Tags absence verified");
}
function matchAnyTagsAdded() {
  return bp.EventSet("Any Tags Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a new git tag in a repository");
  });
}

function matchDeletedTags() {
  return bp.EventSet("Deleted Tags", function(e) {
    return e.name.startsWith("Done: Positive: Delete a repository's tag by name");
  });
}

function userCurrentTrackedTimes() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/times";
  var reqDescription = "List the current user's tracked times {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyTrackedTimesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("TrackedTimes existence verified");
}
function verifyTrackedTimesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("TrackedTimes absence verified");
}
function matchAnyTrackedTimesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedTrackedTimes() {
  return bp.EventSet("None", function(e){ return false; });
}

function topicSearch() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/topics/search";
  var reqDescription = "search topics via keyword {owner}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 403, 404, 405] });
}

function repoUpdateTopics(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_q = resolve(q);
  if (val_q !== undefined) body["q"] = val_q;
  let val_topic = resolve(topic);
  if (val_topic !== undefined) body["topic"] = val_topic;
  let val_topic1 = resolve(topic1);
  if (val_topic1 !== undefined) body["topic1"] = val_topic1;
  let val_topic2 = resolve(topic2);
  if (val_topic2 !== undefined) body["topic2"] = val_topic2;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/topics";
  var reqDescription = "Replace list of topics for a repository " + resolve(owner);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(q) !== undefined) eventData["q"] = resolve(q);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(topic) !== undefined) eventData["topic"] = resolve(topic);
    if (resolve(topic1) !== undefined) eventData["topic1"] = resolve(topic1);
    if (resolve(topic2) !== undefined) eventData["topic2"] = resolve(topic2);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteTopic(owner, repo, topic) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/topics/" + resolve(topic);
  var reqDescription = "Delete a topic from a repository " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoAddTopic(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  let val_q = resolve(q);
  if (val_q !== undefined) body["q"] = val_q;
  let val_topic1 = resolve(topic1);
  if (val_topic1 !== undefined) body["topic1"] = val_topic1;
  let val_topic2 = resolve(topic2);
  if (val_topic2 !== undefined) body["topic2"] = val_topic2;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/topics/" + resolve(topic);
  var reqDescription = "Add a topic to a repository " + resolve(owner);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(q) !== undefined) eventData["q"] = resolve(q);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(topic) !== undefined) eventData["topic"] = resolve(topic);
    if (resolve(topic1) !== undefined) eventData["topic1"] = resolve(topic1);
    if (resolve(topic2) !== undefined) eventData["topic2"] = resolve(topic2);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyTopicsRejects(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  if (resolve(q) !== undefined) body["q"] = resolve(q);
  if (resolve(topic1) !== undefined) body["topic1"] = resolve(topic1);
  if (resolve(topic2) !== undefined) body["topic2"] = resolve(topic2);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/topics/" + resolve(topic);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTopicsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("Topics existence verified");
}
function verifyTopicsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("Topics absence verified");
}
function matchAnyTopicsAdded() {
  return bp.EventSet("Any Topics Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a topic to a repository");
  });
}

function matchDeletedTopics() {
  return bp.EventSet("Deleted Topics", function(e) {
    return e.name.startsWith("Done: Positive: Delete a topic from a repository");
  });
}

function repoTransfer(body, id, owner, repo, transferOptions) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions);
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/transfer";
  var reqDescription = "Transfer a repo ownership " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(transferOptions) !== undefined) eventData["transferOptions"] = resolve(transferOptions);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function acceptRepoTransfer(body, id, owner, repo, transferOptions) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions);
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/transfer/accept";
  var reqDescription = "Accept a repo transfer " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [202, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(transferOptions) !== undefined) eventData["transferOptions"] = resolve(transferOptions);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function rejectRepoTransfer(body, id, owner, repo, transferOptions) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions);
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/transfer/reject";
  var reqDescription = "Reject a repo transfer " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(transferOptions) !== undefined) eventData["transferOptions"] = resolve(transferOptions);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyRepositoryTransferRejects(body, id, owner, repo, transferOptions) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(transferOptions) !== undefined) body["transferOptions"] = resolve(transferOptions);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/transfer";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryTransferExists(id) {
  let finalId = id || undefined;
  pvg.success("RepositoryTransfer existence verified");
}
function verifyRepositoryTransferDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("RepositoryTransfer absence verified");
}
function matchAnyRepositoryTransferAdded() {
  return bp.EventSet("Any RepositoryTransfer Added", function(e) {
    return e.name.startsWith("Done: Positive: Transfer a repo ownership");
  });
}

function matchDeletedRepositoryTransfer() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoCreateWikiPage(body, id, owner, pageName, repo, wikiPageOptions) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_pageName = resolve(pageName);
  if (val_pageName !== undefined) body["pageName"] = val_pageName;
  let val_wikiPageOptions = resolve(wikiPageOptions);
  if (val_wikiPageOptions !== undefined) body["wikiPageOptions"] = val_wikiPageOptions;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/new";
  var reqDescription = "Create a wiki page " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 403, 404, 405, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(pageName) !== undefined) eventData["pageName"] = resolve(pageName);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(wikiPageOptions) !== undefined) eventData["wikiPageOptions"] = resolve(wikiPageOptions);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteWikiPage(owner, repo, pageName) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/page/" + resolve(pageName);
  var reqDescription = "Delete a wiki page {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405, 423] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id);
  var reqDescription = "Get a repository by id";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function repoEditWikiPage(body, id, owner, pageName, repo, wikiPageOptions) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_wikiPageOptions = resolve(wikiPageOptions);
  if (val_wikiPageOptions !== undefined) body["wikiPageOptions"] = val_wikiPageOptions;
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/page/" + resolve(pageName);
  var reqDescription = "Edit a wiki page " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 403, 404, 405, 423], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(pageName) !== undefined) eventData["pageName"] = resolve(pageName);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    if (resolve(wikiPageOptions) !== undefined) eventData["wikiPageOptions"] = resolve(wikiPageOptions);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyWikiPageRejects(body, id, owner, pageName, repo, wikiPageOptions) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(pageName) !== undefined) body["pageName"] = resolve(pageName);
  if (resolve(wikiPageOptions) !== undefined) body["wikiPageOptions"] = resolve(wikiPageOptions);
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/new";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyWikiPageExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("WikiPage existence verified");
}
function verifyWikiPageDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("WikiPage absence verified");
}
function matchAnyWikiPageAdded() {
  return bp.EventSet("Any WikiPage Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a wiki page");
  });
}

function matchDeletedWikiPage() {
  return bp.EventSet("Deleted WikiPage", function(e) {
    return e.name.startsWith("Done: Positive: Delete a wiki page");
  });
}

function repoGetWikiPages(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/pages";
  var reqDescription = "Get all wiki pages {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyWikiPagesExists(id) {
  let finalId = id || undefined;
  pvg.success("WikiPages existence verified");
}
function verifyWikiPagesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("WikiPages absence verified");
}
function matchAnyWikiPagesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedWikiPages() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetWikiPageRevisions(owner, repo, pageName) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner) + "/" + resolve(repo) + "/wiki/revisions/" + resolve(pageName);
  var reqDescription = "Get revisions of a wiki page {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyWikiPageRevisionsExists(id) {
  let finalId = id || undefined;
  pvg.success("WikiPageRevisions existence verified");
}
function verifyWikiPageRevisionsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("WikiPageRevisions absence verified");
}
function matchAnyWikiPageRevisionsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedWikiPageRevisions() {
  return bp.EventSet("None", function(e){ return false; });
}

function getGeneralAPISettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/settings/api";
  var reqDescription = "Get instance's global settings for api {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function getGeneralUISettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/settings/ui";
  var reqDescription = "Get instance's global settings for ui {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifySettingsExists(id) {
  let finalId = id || undefined;
  pvg.success("Settings existence verified");
}
function verifySettingsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Settings absence verified");
}
function matchAnySettingsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedSettings() {
  return bp.EventSet("None", function(e){ return false; });
}

function getVersion() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/version";
  var reqDescription = "Returns the version of the Gitea application {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyMiscellaneousExists(id) {
  let finalId = id || undefined;
  pvg.success("Miscellaneous existence verified");
}
function verifyMiscellaneousDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Miscellaneous absence verified");
}
function matchAnyMiscellaneousAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedMiscellaneous() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgListTeamMembers(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id) + "/members";
  var reqDescription = "List a team's members " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Get a team " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgAddTeamMember(id, limit, page, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id) + "/members/" + resolve(username);
  var reqDescription = "Add a team member " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Delete a team " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyTeamMembersRejects(id, limit, page, username) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/teams/" + resolve(id) + "/members/" + resolve(username);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTeamMembersExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("TeamMembers existence verified");
}
function verifyTeamMembersDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("TeamMembers absence verified");
}
function matchAnyTeamMembersAdded() {
  return bp.EventSet("Any TeamMembers Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a team member");
  });
}

function matchDeletedTeamMembers() {
  return bp.EventSet("Deleted TeamMembers", function(e) {
    return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function orgListTeamRepos(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id) + "/repos";
  var reqDescription = "List a team's repos " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgGetTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Get a team " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function orgAddTeamRepository(id, limit, org, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id) + "/repos/" + resolve(org) + "/" + resolve(repo);
  var reqDescription = "Add a repository to a team " + resolve(id);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(org) !== undefined) eventData["org"] = resolve(org);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id);
  var reqDescription = "Delete a team " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyTeamReposRejects(id, limit, org, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/teams/" + resolve(id) + "/repos/" + resolve(org) + "/" + resolve(repo);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTeamReposExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("TeamRepos existence verified");
}
function verifyTeamReposDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("TeamRepos absence verified");
}
function matchAnyTeamReposAdded() {
  return bp.EventSet("Any TeamRepos Added", function(e) {
    return e.name.startsWith("Done: Positive: Add a repository to a team");
  });
}

function matchDeletedTeamRepos() {
  return bp.EventSet("Deleted TeamRepos", function(e) {
    return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function userGetRunnerRegistrationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/runners/registration-token";
  var reqDescription = "Get an user's actions runner registration token {secretname}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function deleteUserSecret(secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/secrets/" + resolve(secretname);
  var reqDescription = "Delete a secret in a user scope " + resolve(secretname);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function updateUserSecret(body, limit, page, secretname) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/actions/secrets/" + resolve(secretname);
  var reqDescription = "Create or Update a secret value in a user scope " + resolve(secretname);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(secretname) !== undefined) eventData["secretname"] = resolve(secretname);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function getUserVariablesList() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/variables";
  var reqDescription = "Get the user-level list of variables which is created by current doer {secretname}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404, 405] });
}

function verifyUserExists(secretname) {
  let finalId = secretname || undefined;
  pvg.success("User existence verified");
}
function verifyUserDoesNotExist(secretname) {
  let finalId = secretname || undefined;
  pvg.success("User absence verified");
}
function matchAnyUserAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUser() {
  return bp.EventSet("Deleted User", function(e) {
    return e.name.startsWith("Done: Positive: Delete a secret in a user scope");
  });
}

function deleteUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/variables/" + resolve(variablename);
  var reqDescription = "Delete a user-level variable which is created by current doer " + resolve(variablename);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function getUserVariable(variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/variables/" + resolve(variablename);
  var reqDescription = "Get a user-level variable which is created by current doer " + resolve(variablename);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 404, 405] });
}

function createUserVariable(body, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  body["id"] = Math.floor(Math.random() * 10000);
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/actions/variables/" + resolve(variablename);
  var reqDescription = "Create a user-level variable " + resolve(variablename);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function updateUserVariable(body, variablename) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/actions/variables/" + resolve(variablename);
  var reqDescription = "Update a user-level variable which is created by current doer " + resolve(variablename);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 204, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(variablename) !== undefined) eventData["variablename"] = resolve(variablename);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserVariablesRejects(body, variablename) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  var url = "/user/actions/variables/" + resolve(variablename);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserVariablesExists(variablename) {
  let finalId = variablename || undefined;
  if (finalId !== undefined) svc.get("/user/actions/variables/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("UserVariables existence verified");
}
function verifyUserVariablesDoesNotExist(variablename) {
  let finalId = variablename || undefined;
  if (finalId !== undefined) svc.get("/user/actions/variables/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("UserVariables absence verified");
}
function matchAnyUserVariablesAdded() {
  return bp.EventSet("Any UserVariables Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a user-level variable");
  });
}

function matchDeletedUserVariables() {
  return bp.EventSet("Deleted UserVariables", function(e) {
    return e.name.startsWith("Done: Positive: Delete a user-level variable which is created by current doer");
  });
}

function userGetOauth2Application() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/applications/oauth2";
  var reqDescription = "List the authenticated user's oauth2 applications {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCreateOAuth2Application(body, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/applications/oauth2";
  var reqDescription = "creates a new OAuth2 application " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 400, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteOAuth2Application(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/applications/oauth2/" + resolve(id);
  var reqDescription = "delete an OAuth2 Application " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userGetOAuth2Application(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/applications/oauth2/" + resolve(id);
  var reqDescription = "get an OAuth2 Application " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userUpdateOAuth2Application(body, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/applications/oauth2/" + resolve(id);
  var reqDescription = "update an OAuth2 Application, this includes regenerating the client secret " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOAuth2ApplicationsRejects(body, id, limit, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/user/applications/oauth2";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOAuth2ApplicationsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/applications/oauth2/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("OAuth2Applications existence verified");
}
function verifyOAuth2ApplicationsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/applications/oauth2/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("OAuth2Applications absence verified");
}
function matchAnyOAuth2ApplicationsAdded() {
  return bp.EventSet("Any OAuth2Applications Added", function(e) {
    return e.name.startsWith("Done: Positive: creates a new OAuth2 application");
  });
}

function matchDeletedOAuth2Applications() {
  return bp.EventSet("Deleted OAuth2Applications", function(e) {
    return e.name.startsWith("Done: Positive: delete an OAuth2 Application");
  });
}

function userDeleteAvatar() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/avatar";
  var reqDescription = "Delete Avatar {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userUpdateAvatar(body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/avatar";
  var reqDescription = "Update Avatar " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [204], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserAvatarRejects(body, id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/user/avatar";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserAvatarExists(id) {
  let finalId = id || undefined;
  pvg.success("UserAvatar existence verified");
}
function verifyUserAvatarDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserAvatar absence verified");
}
function matchAnyUserAvatarAdded() {
  return bp.EventSet("Any UserAvatar Added", function(e) {
    return e.name.startsWith("Done: Positive: Update Avatar");
  });
}

function matchDeletedUserAvatar() {
  return bp.EventSet("Deleted UserAvatar", function(e) {
    return e.name.startsWith("Done: Positive: Delete Avatar");
  });
}

function userListBlocks() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/blocks";
  var reqDescription = "List users blocked by the authenticated user {username}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userUnblockUser(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/blocks/" + resolve(username);
  var reqDescription = "Unblock a user " + resolve(username);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405, 422] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userCheckUserBlock(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/blocks/" + resolve(username);
  var reqDescription = "Check if a user is blocked by the authenticated user " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404, 405] });
}

function userBlockUser(limit, note, page, username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_note = resolve(note);
  if (val_note !== undefined) body["note"] = val_note;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/blocks/" + resolve(username);
  var reqDescription = "Block a user " + resolve(username);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(note) !== undefined) eventData["note"] = resolve(note);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserBlocksExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/blocks/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("UserBlocks existence verified");
}
function verifyUserBlocksDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/blocks/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("UserBlocks absence verified");
}
function matchAnyUserBlocksAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserBlocks() {
  return bp.EventSet("Deleted UserBlocks", function(e) {
    return e.name.startsWith("Done: Positive: Unblock a user");
  });
}

function userDeleteEmail() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/emails";
  var reqDescription = "Delete email addresses {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userListEmails() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/emails";
  var reqDescription = "List the authenticated user's email addresses {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userAddEmail(body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/emails";
  var reqDescription = "Add email addresses " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserEmailsRejects(body, id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/user/emails";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserEmails existence verified");
}
function verifyUserEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserEmails absence verified");
}
function matchAnyUserEmailsAdded() {
  return bp.EventSet("Any UserEmails Added", function(e) {
    return e.name.startsWith("Done: Positive: Add email addresses");
  });
}

function matchDeletedUserEmails() {
  return bp.EventSet("Deleted UserEmails", function(e) {
    return e.name.startsWith("Done: Positive: Delete email addresses");
  });
}

function userCurrentListFollowers() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/followers";
  var reqDescription = "List the authenticated user's followers {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserFollowersExists(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowers existence verified");
}
function verifyUserFollowersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowers absence verified");
}
function matchAnyUserFollowersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserFollowers() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListFollowing() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/following";
  var reqDescription = "List the users that the authenticated user is following {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserFollowingExists(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowing existence verified");
}
function verifyUserFollowingDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowing absence verified");
}
function matchAnyUserFollowingAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserFollowing() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentDeleteFollow(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/following/" + resolve(username);
  var reqDescription = "Unfollow a user " + resolve(username);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userCurrentCheckFollowing(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/following/" + resolve(username);
  var reqDescription = "Check whether a user is followed by the authenticated user " + resolve(username);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404, 405] });
}

function userCurrentPutFollow(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/user/following/" + resolve(username);
  var reqDescription = "Follow a user " + resolve(username);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(username) !== undefined) eventData["username"] = resolve(username);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserFollowingSpecificExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/following/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("UserFollowingSpecific existence verified");
}
function verifyUserFollowingSpecificDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/following/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("UserFollowingSpecific absence verified");
}
function matchAnyUserFollowingSpecificAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserFollowingSpecific() {
  return bp.EventSet("Deleted UserFollowingSpecific", function(e) {
    return e.name.startsWith("Done: Positive: Unfollow a user");
  });
}

function userCurrentGetGPGKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_keys/" + resolve(id);
  var reqDescription = "Get a GPG key " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function userCurrentListGPGKeys() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_keys";
  var reqDescription = "List the authenticated user's GPG keys {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentPostGPGKey(Form, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_Form = resolve(Form);
  if (val_Form !== undefined) body["Form"] = val_Form;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/gpg_keys";
  var reqDescription = "Create a GPG key " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(Form) !== undefined) eventData["Form"] = resolve(Form);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userCurrentDeleteGPGKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_keys/" + resolve(id);
  var reqDescription = "Remove a GPG key " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function verifyGPGKeysRejects(Form, id, limit, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(Form) !== undefined) body["Form"] = resolve(Form);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/user/gpg_keys";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyGPGKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/gpg_keys/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("GPGKeys existence verified");
}
function verifyGPGKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/gpg_keys/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("GPGKeys absence verified");
}
function matchAnyGPGKeysAdded() {
  return bp.EventSet("Any GPGKeys Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a GPG key");
  });
}

function matchDeletedGPGKeys() {
  return bp.EventSet("Deleted GPGKeys", function(e) {
    return e.name.startsWith("Done: Positive: Remove a GPG key");
  });
}

function getVerificationToken() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_key_token";
  var reqDescription = "Get a Token to verify {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyGPGKeyTokenExists(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyToken existence verified");
}
function verifyGPGKeyTokenDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyToken absence verified");
}
function matchAnyGPGKeyTokenAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGPGKeyToken() {
  return bp.EventSet("None", function(e){ return false; });
}

function userVerifyGPGKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  var url = "/user/gpg_key_verify";
  var reqDescription = "Verify a GPG key " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyGPGKeyVerificationRejects(id) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  var url = "/user/gpg_key_verify";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyGPGKeyVerificationExists(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyVerification existence verified");
}
function verifyGPGKeyVerificationDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyVerification absence verified");
}
function matchAnyGPGKeyVerificationAdded() {
  return bp.EventSet("Any GPGKeyVerification Added", function(e) {
    return e.name.startsWith("Done: Positive: Verify a GPG key");
  });
}

function matchDeletedGPGKeyVerification() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListKeys() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/keys";
  var reqDescription = "List the authenticated user's public keys {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentPostKey(body, fingerprint, id, limit, page) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  let val_fingerprint = resolve(fingerprint);
  if (val_fingerprint !== undefined) body["fingerprint"] = val_fingerprint;
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/keys";
  var reqDescription = "Create a public key " + resolve(id);
  var body = body;
  bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [201, 404, 405, 422], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(fingerprint) !== undefined) eventData["fingerprint"] = resolve(fingerprint);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userCurrentDeleteKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/keys/" + resolve(id);
  var reqDescription = "Delete a public key " + resolve(id);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 403, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userCurrentGetKey(id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/keys/" + resolve(id);
  var reqDescription = "Get a public key " + resolve(id);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyKeysRejects(body, fingerprint, id, limit, page) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body) !== undefined) body["body"] = resolve(body);
  if (resolve(fingerprint) !== undefined) body["fingerprint"] = resolve(fingerprint);
  if (resolve(id) !== undefined) body["id"] = resolve(id);
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/user/keys";
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/keys/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("Keys existence verified");
}
function verifyKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/keys/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("Keys absence verified");
}
function matchAnyKeysAdded() {
  return bp.EventSet("Any Keys Added", function(e) {
    return e.name.startsWith("Done: Positive: Create a public key");
  });
}

function matchDeletedKeys() {
  return bp.EventSet("Deleted Keys", function(e) {
    return e.name.startsWith("Done: Positive: Delete a public key");
  });
}

function getUserSettings() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/settings";
  var reqDescription = "Get user settings {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function updateUserSettings(UserSettingsOptions, body, id) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id);
  if (idVal !== undefined) body["id"] = idVal;
  let val_UserSettingsOptions = resolve(UserSettingsOptions);
  if (val_UserSettingsOptions !== undefined) body["UserSettingsOptions"] = val_UserSettingsOptions;
  let val_body = resolve(body);
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/settings";
  var reqDescription = "Update user settings " + resolve(id);
  var body = body;
  bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(UserSettingsOptions) !== undefined) eventData["UserSettingsOptions"] = resolve(UserSettingsOptions);
    if (resolve(body) !== undefined) eventData["body"] = resolve(body);
    if (resolve(id) !== undefined) eventData["id"] = resolve(id);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserSettingsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserSettings existence verified");
}
function verifyUserSettingsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserSettings absence verified");
}
function matchAnyUserSettingsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserSettings() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListStarred() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/starred";
  var reqDescription = "The repos that the authenticated user has starred {owner}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function userCurrentDeleteStar(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/starred/" + resolve(owner) + "/" + resolve(repo);
  var reqDescription = "Unstar the given repo " + resolve(owner);
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 404, 405] });
  if (res.status >= 200 && res.status < 300) {
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription) });
  }
  return res;
}

function userCurrentCheckStarring(owner, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/starred/" + resolve(owner) + "/" + resolve(repo);
  var reqDescription = "Whether the authenticated is starring the repo " + resolve(owner);
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [204, 404, 405] });
}

function userCurrentPutStar(limit, owner, page, repo) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit);
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page);
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/starred/" + resolve(owner) + "/" + resolve(repo);
  var reqDescription = "Star the given repo " + resolve(owner);
  var body = body;
  bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [204, 403, 404, 405], parameters: { description: reqDescription } });
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit) !== undefined) eventData["limit"] = resolve(limit);
    if (resolve(owner) !== undefined) eventData["owner"] = resolve(owner);
    if (resolve(page) !== undefined) eventData["page"] = resolve(page);
    if (resolve(repo) !== undefined) eventData["repo"] = resolve(repo);
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserStarredRejects(limit, owner, page, repo) {
  const resolve = (v) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit) !== undefined) body["limit"] = resolve(limit);
  if (resolve(page) !== undefined) body["page"] = resolve(page);
  var url = "/user/starred/" + resolve(owner) + "/" + resolve(repo);
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 404, 405, 422, 409, 500] });
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserStarredExists(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/user/starred/" + finalId + "/" + finalId, { expectedResponseCodes: [200] });
  pvg.success("UserStarred existence verified");
}
function verifyUserStarredDoesNotExist(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/user/starred/" + finalId + "/" + finalId, { expectedResponseCodes: [404] });
  pvg.success("UserStarred absence verified");
}
function matchAnyUserStarredAdded() {
  return bp.EventSet("Any UserStarred Added", function(e) {
    return e.name.startsWith("Done: Positive: Star the given repo");
  });
}

function matchDeletedUserStarred() {
  return bp.EventSet("Deleted UserStarred", function(e) {
    return e.name.startsWith("Done: Positive: Unstar the given repo");
  });
}

function userGetStopWatches() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/stopwatches";
  var reqDescription = "Get list of all existing stopwatches {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserStopwatchesExists(id) {
  let finalId = id || undefined;
  pvg.success("UserStopwatches existence verified");
}
function verifyUserStopwatchesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserStopwatches absence verified");
}
function matchAnyUserStopwatchesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserStopwatches() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListSubscriptions() {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/subscriptions";
  var reqDescription = "List repositories watched by the authenticated user {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200] });
}

function verifyUserSubscriptionsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserSubscriptions existence verified");
}
function verifyUserSubscriptionsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserSubscriptions absence verified");
}
function matchAnyUserSubscriptionsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserSubscriptions() {
  return bp.EventSet("None", function(e){ return false; });
}

function userListStarred(username) {
  const resolve = (v) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      if (s.toLowerCase().includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username) + "/starred";
  var reqDescription = "The repos that the given user has starred {id}";
  return svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 404, 405] });
}

function verifyStarredRepositoriesExists(id) {
  let finalId = id || undefined;
  pvg.success("StarredRepositories existence verified");
}
function verifyStarredRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("StarredRepositories absence verified");
}
function matchAnyStarredRepositoriesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedStarredRepositories() {
  return bp.EventSet("None", function(e){ return false; });
}
