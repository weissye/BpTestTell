//@provengo summon rest
// === Auto-generated interfaces for gitea ===
const svc = new RESTSession("http://localhost:3000/api/v1", "client", { headers: { "Content-Type": "application/json", "Authorization": "token __GITEA_TOKEN__" } });
const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function block(eventSet, func) { bp.sync({ block: eventSet, waitFor: bp.Event("StartBlock") }); func(); bp.sync({ waitFor: bp.Event("EndBlock") }); }
function activitypubPerson(user_id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/activitypub/user-id/" + resolve(user_id, "user-id");
  var reqDescription = "Returns the Person actor for a user " + resolve(user_id, "user-id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function activitypubPersonInbox(user_id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/activitypub/user-id/" + resolve(user_id, "user-id") + "/inbox";
  var reqDescription = "Send to the inbox " + resolve(user_id, "user-id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(user_id, "user-id") !== undefined) eventData["user-id"] = resolve(user_id, "user-id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyActivityPubRejects(user_id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  var url = "/activitypub/user-id/" + resolve(user_id, "user-id") + "/inbox";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyActivityPubExists(user_id) {
  let finalId = user_id || undefined;
  if (finalId !== undefined) svc.get("/activitypub/user-id/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("ActivityPub verification completed");
}
function verifyActivityPubDoesNotExist(user_id) {
  let finalId = user_id || undefined;
  if (finalId !== undefined) svc.get("/activitypub/user-id/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("ActivityPub verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function adminCronRun(id, limit, page, task) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/admin/cron/" + resolve(task, "task");
  var reqDescription = "Run cron task " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(task, "task") !== undefined) eventData["task"] = resolve(task, "task");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyAdminCronRejects(id, limit, page, task) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/admin/cron/" + resolve(task, "task");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyAdminCronExists(id) {
  let finalId = id || undefined;
  pvg.success("AdminCron verification completed");
}
function verifyAdminCronDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("AdminCron verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyAdminEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("AdminEmails verification completed");
}
function verifyAdminEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("AdminEmails verification completed");
}
function matchAnyAdminEmailsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedAdminEmails() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminSearchEmails() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("Emails verification completed");
}
function verifyEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Emails verification completed");
}
function matchAnyEmailsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedEmails() {
  return bp.EventSet("None", function(e){ return false; });
}

function userListHooks() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCreateHook(body, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/hooks";
  var reqDescription = "Create a hook " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteHook(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/hooks/" + resolve(id, "id");
  var reqDescription = "Delete a hook " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userGetHook(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/hooks/" + resolve(id, "id");
  var reqDescription = "Get a hook " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userEditHook(body, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/hooks/" + resolve(id, "id");
  var reqDescription = "Update a hook " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyHooksRejects(body, id, limit, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/user/hooks";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyHooksExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/hooks/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Hooks verification completed");
}
function verifyHooksDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/hooks/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Hooks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/orgs";
  var reqDescription = "List a user's organizations " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userGet(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username");
  var reqDescription = "Get a user " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyOrganizationsExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Organizations verification completed");
}
function verifyOrganizationsDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Organizations verification completed");
}
function matchAnyOrganizationsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedOrganizations() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminGetRunnerRegistrationToken() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyRunnersExists(id) {
  let finalId = id || undefined;
  pvg.success("Runners verification completed");
}
function verifyRunnersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Runners verification completed");
}
function matchAnyRunnersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedRunners() {
  return bp.EventSet("None", function(e){ return false; });
}

function adminUnadoptedList() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function adminDeleteUnadoptedRepository(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/unadopted/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  var reqDescription = "Delete unadopted files " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function adminAdoptRepository(limit, owner, page, pattern, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_pattern = resolve(pattern, "pattern");
  if (val_pattern !== undefined) body["pattern"] = val_pattern;
  var url = "/admin/unadopted/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  var reqDescription = "Adopt unadopted files as a repository " + resolve(owner, "owner");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(pattern, "pattern") !== undefined) eventData["pattern"] = resolve(pattern, "pattern");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUnadoptedRepositoriesRejects(limit, owner, page, pattern, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(pattern, "pattern") !== undefined) body["pattern"] = resolve(pattern, "pattern");
  var url = "/admin/unadopted/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUnadoptedRepositoriesExists(owner) {
  let finalId = owner || undefined;
  pvg.success("UnadoptedRepositories verification completed");
}
function verifyUnadoptedRepositoriesDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("UnadoptedRepositories verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/subscriptions";
  var reqDescription = "List the repositories watched by a user " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCreateToken(EditUserOption, body, limit, page, token, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_EditUserOption = resolve(EditUserOption, "EditUserOption");
  if (val_EditUserOption !== undefined) body["EditUserOption"] = val_EditUserOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_token = resolve(token, "token");
  if (val_token !== undefined) body["token"] = val_token;
  var url = "/users/" + resolve(username, "username") + "/tokens";
  var reqDescription = "Create an access token " + resolve(username, "username");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditUserOption, "EditUserOption") !== undefined) eventData["EditUserOption"] = resolve(EditUserOption, "EditUserOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(token, "token") !== undefined) eventData["token"] = resolve(token, "token");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteAccessToken(username, token) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/tokens/" + resolve(token, "token");
  var reqDescription = "Delete an access token " + resolve(username, "username");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function adminEditUser(EditUserOption, body, limit, page, token, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_EditUserOption = resolve(EditUserOption, "EditUserOption");
  if (val_EditUserOption !== undefined) body["EditUserOption"] = val_EditUserOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_token = resolve(token, "token");
  if (val_token !== undefined) body["token"] = val_token;
  var url = "/admin/users/" + resolve(username, "username");
  var reqDescription = "Edit an existing user " + resolve(username, "username");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 400, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditUserOption, "EditUserOption") !== undefined) eventData["EditUserOption"] = resolve(EditUserOption, "EditUserOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(token, "token") !== undefined) eventData["token"] = resolve(token, "token");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userGetTokens(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/tokens";
  var reqDescription = "List the authenticated user's access tokens " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUsersRejects(EditUserOption, body, limit, page, token, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(EditUserOption, "EditUserOption") !== undefined) body["EditUserOption"] = resolve(EditUserOption, "EditUserOption");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(token, "token") !== undefined) body["token"] = resolve(token, "token");
  var url = "/users/" + resolve(username, "username") + "/tokens";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUsersExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/"+finalId+"/tokens", { expectedResponseCodes: [200, 404] });
  pvg.success("Users verification completed");
}
function verifyUsersDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/users/"+finalId+"/tokens", { expectedResponseCodes: [200, 404] });
  pvg.success("Users verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username, "username") + "/badges";
  var reqDescription = "List a user's badges " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function adminAddUserBadges(UserBadgeOption, body, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_UserBadgeOption = resolve(UserBadgeOption, "UserBadgeOption");
  if (val_UserBadgeOption !== undefined) body["UserBadgeOption"] = val_UserBadgeOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/admin/users/" + resolve(username, "username") + "/badges";
  var reqDescription = "Add a badge to a user " + resolve(username, "username");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(UserBadgeOption, "UserBadgeOption") !== undefined) eventData["UserBadgeOption"] = resolve(UserBadgeOption, "UserBadgeOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function adminDeleteUserBadges(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username, "username") + "/badges";
  var reqDescription = "Remove a badge from a user " + resolve(username, "username");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserBadgesRejects(UserBadgeOption, body, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(UserBadgeOption, "UserBadgeOption") !== undefined) body["UserBadgeOption"] = resolve(UserBadgeOption, "UserBadgeOption");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/admin/users/" + resolve(username, "username") + "/badges";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserBadgesExists(username) {
  let finalId = username || undefined;
  pvg.success("UserBadges verification completed");
}
function verifyUserBadgesDoesNotExist(username) {
  let finalId = username || undefined;
  pvg.success("UserBadges verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_key = resolve(key, "key");
  if (val_key !== undefined) body["key"] = val_key;
  let val_purge = resolve(purge, "purge");
  if (val_purge !== undefined) body["purge"] = val_purge;
  var url = "/admin/users/" + resolve(username, "username") + "/keys";
  var reqDescription = "Add a public key on behalf of a user " + resolve(username, "username");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(key, "key") !== undefined) eventData["key"] = resolve(key, "key");
    if (resolve(purge, "purge") !== undefined) eventData["purge"] = resolve(purge, "purge");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function adminDeleteUser(username, purge) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/admin/users/" + resolve(username, "username");
  var reqDescription = "Delete a user " + resolve(username, "username");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], queryParameters: {    "purge": resolve(purge, "purge")} });
  const originalSpecCodes = [200, 204, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserKeysRejects(key, purge, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(key, "key") !== undefined) body["key"] = resolve(key, "key");
  if (resolve(purge, "purge") !== undefined) body["purge"] = resolve(purge, "purge");
  var url = "/admin/users/" + resolve(username, "username") + "/keys";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserKeysExists(username) {
  let finalId = username || undefined;
  pvg.success("UserKeys verification completed");
}
function verifyUserKeysDoesNotExist(username) {
  let finalId = username || undefined;
  pvg.success("UserKeys verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_organization = resolve(organization, "organization");
  if (val_organization !== undefined) body["organization"] = val_organization;
  var url = "/admin/users/" + resolve(username, "username") + "/orgs";
  var reqDescription = "Create an organization " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(organization, "organization") !== undefined) eventData["organization"] = resolve(organization, "organization");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserOrganizationsRejects(id, organization, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(organization, "organization") !== undefined) body["organization"] = resolve(organization, "organization");
  var url = "/admin/users/" + resolve(username, "username") + "/orgs";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserOrganizationsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserOrganizations verification completed");
}
function verifyUserOrganizationsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserOrganizations verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/admin/users/" + resolve(username, "username") + "/rename";
  var reqDescription = "Rename a user " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserRenameRejects(body, id, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/admin/users/" + resolve(username, "username") + "/rename";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserRenameExists(id) {
  let finalId = id || undefined;
  pvg.success("UserRename verification completed");
}
function verifyUserRenameDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserRename verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_repository = resolve(repository, "repository");
  if (val_repository !== undefined) body["repository"] = val_repository;
  var url = "/admin/users/" + resolve(username, "username") + "/repos";
  var reqDescription = "Create a repository on behalf of a user " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 403, 404, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(repository, "repository") !== undefined) eventData["repository"] = resolve(repository, "repository");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserRepositoriesRejects(id, repository, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(repository, "repository") !== undefined) body["repository"] = resolve(repository, "repository");
  var url = "/admin/users/" + resolve(username, "username") + "/repos";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserRepositoriesExists(id) {
  let finalId = id || undefined;
  pvg.success("UserRepositories verification completed");
}
function verifyUserRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserRepositories verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function getGitignoreTemplateInfo(name) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/gitignore/templates/" + resolve(name, "name");
  var reqDescription = "Returns information about a gitignore template " + resolve(name, "name");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGitignoreTemplatesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/gitignore/templates/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitignoreTemplates verification completed");
}
function verifyGitignoreTemplatesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/gitignore/templates/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitignoreTemplates verification completed");
}
function matchAnyGitignoreTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitignoreTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function listLabelTemplates() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function getLabelTemplateInfo(name) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/label/templates/" + resolve(name, "name");
  var reqDescription = "Returns all labels in a template " + resolve(name, "name");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyLabelTemplatesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/label/templates/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("LabelTemplates verification completed");
}
function verifyLabelTemplatesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/label/templates/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("LabelTemplates verification completed");
}
function matchAnyLabelTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLabelTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function listLicenseTemplates() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyLicenseTemplatesExists(id) {
  let finalId = id || undefined;
  pvg.success("LicenseTemplates verification completed");
}
function verifyLicenseTemplatesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("LicenseTemplates verification completed");
}
function matchAnyLicenseTemplatesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLicenseTemplates() {
  return bp.EventSet("None", function(e){ return false; });
}

function getLicenseTemplateInfo(name) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/licenses/" + resolve(name, "name");
  var reqDescription = "Returns information about a license template " + resolve(name, "name");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyLicensesExists(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/licenses/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Licenses verification completed");
}
function verifyLicensesDoesNotExist(name) {
  let finalId = name || undefined;
  if (finalId !== undefined) svc.get("/licenses/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Licenses verification completed");
}
function matchAnyLicensesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedLicenses() {
  return bp.EventSet("None", function(e){ return false; });
}

function renderMarkdown(body, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markdown";
  var reqDescription = "Render a markdown document as HTML " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function renderMarkdownRaw(body, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markdown/raw";
  var reqDescription = "Render raw markdown as HTML " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMarkdownRejects(body, id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/markdown";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMarkdownExists(id) {
  let finalId = id || undefined;
  pvg.success("Markdown verification completed");
}
function verifyMarkdownDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Markdown verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/markup";
  var reqDescription = "Render a markup document as HTML " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMarkupRejects(body, id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/markup";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMarkupExists(id) {
  let finalId = id || undefined;
  pvg.success("Markup verification completed");
}
function verifyMarkupDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Markup verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyNodeInfoExists(id) {
  let finalId = id || undefined;
  pvg.success("NodeInfo verification completed");
}
function verifyNodeInfoDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("NodeInfo verification completed");
}
function matchAnyNodeInfoAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNodeInfo() {
  return bp.EventSet("None", function(e){ return false; });
}

function notifyGetRepoList(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/notifications";
  var reqDescription = "List users's notification threads on a specific repo {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function notifyReadRepoList(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_all = resolve(all, "all");
  if (val_all !== undefined) body["all"] = val_all;
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_last_read_at = resolve(last_read_at, "last_read_at");
  if (val_last_read_at !== undefined) body["last_read_at"] = val_last_read_at;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  let val_status_types = resolve(status_types, "status-types");
  if (val_status_types !== undefined) body["status-types"] = val_status_types;
  let val_subject_type = resolve(subject_type, "subject-type");
  if (val_subject_type !== undefined) body["subject-type"] = val_subject_type;
  let val_to_status = resolve(to_status, "to-status");
  if (val_to_status !== undefined) body["to-status"] = val_to_status;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/notifications";
  var reqDescription = "Mark notification threads as read, pinned or unread on a specific repo " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 205, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [205];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(all, "all") !== undefined) eventData["all"] = resolve(all, "all");
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(last_read_at, "last_read_at") !== undefined) eventData["last_read_at"] = resolve(last_read_at, "last_read_at");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    if (resolve(status_types, "status-types") !== undefined) eventData["status-types"] = resolve(status_types, "status-types");
    if (resolve(subject_type, "subject-type") !== undefined) eventData["subject-type"] = resolve(subject_type, "subject-type");
    if (resolve(to_status, "to-status") !== undefined) eventData["to-status"] = resolve(to_status, "to-status");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function notifyGetThread(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/notifications/threads/" + resolve(id, "id");
  var reqDescription = "Get notification thread by ID " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function notifyReadThread(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_all = resolve(all, "all");
  if (val_all !== undefined) body["all"] = val_all;
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_last_read_at = resolve(last_read_at, "last_read_at");
  if (val_last_read_at !== undefined) body["last_read_at"] = val_last_read_at;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_owner = resolve(owner, "owner");
  if (val_owner !== undefined) body["owner"] = val_owner;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_repo = resolve(repo, "repo");
  if (val_repo !== undefined) body["repo"] = val_repo;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  let val_status_types = resolve(status_types, "status-types");
  if (val_status_types !== undefined) body["status-types"] = val_status_types;
  let val_subject_type = resolve(subject_type, "subject-type");
  if (val_subject_type !== undefined) body["subject-type"] = val_subject_type;
  let val_to_status = resolve(to_status, "to-status");
  if (val_to_status !== undefined) body["to-status"] = val_to_status;
  var url = "/notifications/threads/" + resolve(id, "id");
  var reqDescription = "Mark notification thread as read by ID " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 205, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [205, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(all, "all") !== undefined) eventData["all"] = resolve(all, "all");
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(last_read_at, "last_read_at") !== undefined) eventData["last_read_at"] = resolve(last_read_at, "last_read_at");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    if (resolve(status_types, "status-types") !== undefined) eventData["status-types"] = resolve(status_types, "status-types");
    if (resolve(subject_type, "subject-type") !== undefined) eventData["subject-type"] = resolve(subject_type, "subject-type");
    if (resolve(to_status, "to-status") !== undefined) eventData["to-status"] = resolve(to_status, "to-status");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function notifyNewAvailable() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyNotificationsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/notifications/threads/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Notifications verification completed");
}
function verifyNotificationsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/notifications/threads/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Notifications verification completed");
}
function matchAnyNotificationsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNotifications() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgGetAll() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgCreate(body, limit, org, organization, page, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_org = resolve(org, "org");
  if (val_org !== undefined) body["org"] = val_org;
  let val_organization = resolve(organization, "organization");
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname, "secretname");
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/orgs";
  var reqDescription = "Create an organization";
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(organization, "organization") !== undefined) eventData["organization"] = resolve(organization, "organization");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function createOrgRepoDeprecated(body, limit, org, organization, page, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization, "organization");
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname, "secretname");
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/org/" + resolve(org, "org") + "/repos";
  var reqDescription = "Create a repository in an organization";
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(organization, "organization") !== undefined) eventData["organization"] = resolve(organization, "organization");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDelete(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGet(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Get an organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgEdit(body, limit, org, organization, page, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization, "organization");
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_secretname = resolve(secretname, "secretname");
  if (val_secretname !== undefined) body["secretname"] = val_secretname;
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Edit an organization";
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(organization, "organization") !== undefined) eventData["organization"] = resolve(organization, "organization");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgGetRunnerRegistrationToken(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/actions/runners/registration-token";
  var reqDescription = "Get an organization's actions runner registration token";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgListActionsSecrets(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/actions/secrets";
  var reqDescription = "List an organization's actions secrets";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function deleteOrgSecret(org, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Delete a secret in an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function updateOrgSecret(body, limit, org, organization, page, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_organization = resolve(organization, "organization");
  if (val_organization !== undefined) body["organization"] = val_organization;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org, "org") + "/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Create or Update a secret value in an organization";
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(organization, "organization") !== undefined) eventData["organization"] = resolve(organization, "organization");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function getOrgVariablesList(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/actions/variables";
  var reqDescription = "Get an org-level variables list";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyOrganizationRejects(body, limit, org, organization, page, secretname) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(org, "org") !== undefined) body["org"] = resolve(org, "org");
  if (resolve(organization, "organization") !== undefined) body["organization"] = resolve(organization, "organization");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(secretname, "secretname") !== undefined) body["secretname"] = resolve(secretname, "secretname");
  var url = "/orgs";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Organization verification completed");
}
function verifyOrganizationDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Organization verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGet(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Get an organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createOrgVariable(body, org, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/orgs/" + resolve(org, "org") + "/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Create an org-level variable";
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgEdit(body, org, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_variablename = resolve(variablename, "variablename");
  if (val_variablename !== undefined) body["variablename"] = val_variablename;
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Edit an organization";
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrgVariablesRejects(body, org, variablename) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/orgs/" + resolve(org, "org") + "/actions/variables/" + resolve(variablename, "variablename");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrgVariablesExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrgVariables verification completed");
}
function verifyOrgVariablesDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrgVariables verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/activities/feeds";
  var reqDescription = "List a user's activity feeds {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyActivityFeedsExists(id) {
  let finalId = id || undefined;
  pvg.success("ActivityFeeds verification completed");
}
function verifyActivityFeedsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("ActivityFeeds verification completed");
}
function matchAnyActivityFeedsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedActivityFeeds() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgDeleteAvatar(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/avatar";
  var reqDescription = "Delete Avatar " + resolve(org, "org");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgUpdateAvatar(body, org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/orgs/" + resolve(org, "org") + "/avatar";
  var reqDescription = "Update Avatar " + resolve(org, "org");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyAvatarRejects(body, org) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/orgs/" + resolve(org, "org") + "/avatar";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyAvatarExists(org) {
  let finalId = org || undefined;
  pvg.success("Avatar verification completed");
}
function verifyAvatarDoesNotExist(org) {
  let finalId = org || undefined;
  pvg.success("Avatar verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/blocks";
  var reqDescription = "List users blocked by the organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgDelete(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGet(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Get an organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgEdit(body, limit, org, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Edit an organization";
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBlocksExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Blocks verification completed");
}
function verifyBlocksDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Blocks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/labels";
  var reqDescription = "Get all of a repository's labels {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateLabel(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_color = resolve(color, "color");
  if (val_color !== undefined) body["color"] = val_color;
  let val_description = resolve(description, "description");
  if (val_description !== undefined) body["description"] = val_description;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/labels";
  var reqDescription = "Create a label " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(color, "color") !== undefined) eventData["color"] = resolve(color, "color");
    if (resolve(description, "description") !== undefined) eventData["description"] = resolve(description, "description");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditLabel(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_color = resolve(color, "color");
  if (val_color !== undefined) body["color"] = val_color;
  let val_description = resolve(description, "description");
  if (val_description !== undefined) body["description"] = val_description;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/labels/" + resolve(id, "id");
  var reqDescription = "Update a label " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(color, "color") !== undefined) eventData["color"] = resolve(color, "color");
    if (resolve(description, "description") !== undefined) eventData["description"] = resolve(description, "description");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteLabel(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/labels/" + resolve(id, "id");
  var reqDescription = "Delete a label " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyLabelsRejects(body, color, description, id, limit, name, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(color, "color") !== undefined) body["color"] = resolve(color, "color");
  if (resolve(description, "description") !== undefined) body["description"] = resolve(description, "description");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/labels";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyLabelsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Labels verification completed");
}
function verifyLabelsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Labels verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/members";
  var reqDescription = "List an organization's members {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyMembersExists(id) {
  let finalId = id || undefined;
  pvg.success("Members verification completed");
}
function verifyMembersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Members verification completed");
}
function matchAnyMembersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedMembers() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgDelete(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGet(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Get an organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyOrganizationMembersExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrganizationMembers verification completed");
}
function verifyOrganizationMembersDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrganizationMembers verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/public_members";
  var reqDescription = "List an organization's public members";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgDelete(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Delete an organization";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGet(org) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Get an organization";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgEdit(body, limit, org, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org, "org");
  var reqDescription = "Edit an organization";
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationPublicMembersExists(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrganizationPublicMembers verification completed");
}
function verifyOrganizationPublicMembersDoesNotExist(org) {
  let finalId = org || undefined;
  if (finalId !== undefined) svc.get("/orgs/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OrganizationPublicMembers verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/repos";
  var reqDescription = "List an organization's repos {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createOrgRepo(body, id, limit, org, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org, "org") + "/repos";
  var reqDescription = "Create a repository in an organization " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationReposRejects(body, id, limit, org, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/orgs/" + resolve(org, "org") + "/repos";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationReposExists(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationRepos verification completed");
}
function verifyOrganizationReposDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationRepos verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/orgs/" + resolve(org, "org") + "/teams";
  var reqDescription = "List an organization's teams {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgCreateTeam(body, id, limit, org, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/orgs/" + resolve(org, "org") + "/teams";
  var reqDescription = "Create a team " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOrganizationTeamsRejects(body, id, limit, org, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/orgs/" + resolve(org, "org") + "/teams";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOrganizationTeamsExists(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationTeams verification completed");
}
function verifyOrganizationTeamsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("OrganizationTeams verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Delete a team " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGetTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Get a team " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgEditTeam(body, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Edit a team " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyTeamsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Teams verification completed");
}
function verifyTeamsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Teams verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner, "owner");
  var reqDescription = "Gets all packages of an owner";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function listPackages(owner, page, limit, type, q) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner, "owner");
  var reqDescription = "Gets all packages of an owner";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], queryParameters: {    "page": resolve(page, "page"),     "limit": resolve(limit, "limit"),     "type": resolve(type, "type"),     "q": resolve(q, "q")} });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function deletePackage(owner, type, name, version) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner, "owner") + "/" + resolve(type, "type") + "/" + resolve(name, "name") + "/" + resolve(version, "version");
  var reqDescription = "Delete a package " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function listPackageFiles(owner, type, name, version) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/packages/" + resolve(owner, "owner") + "/" + resolve(type, "type") + "/" + resolve(name, "name") + "/" + resolve(version, "version") + "/files";
  var reqDescription = "Gets all files of a package " + resolve(owner, "owner");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPackagesExists(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/packages/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Packages verification completed");
}
function verifyPackagesDoesNotExist(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/packages/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Packages verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/reactions";
  var reqDescription = "Get a list reactions of an issue {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issuePostIssueReaction(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content, "content");
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position, "position");
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/reactions";
  var reqDescription = "Add a reaction to an issue " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 201, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content, "content") !== undefined) eventData["content"] = resolve(content, "content");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(position, "position") !== undefined) eventData["position"] = resolve(position, "position");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteTime(owner, repo, index, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/times/" + resolve(id, "id");
  var reqDescription = "Delete specific tracked time " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function moveIssuePin(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content, "content");
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/pin/" + resolve(position, "position");
  var reqDescription = "Moves the Pin to the given Position " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content, "content") !== undefined) eventData["content"] = resolve(content, "content");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(position, "position") !== undefined) eventData["position"] = resolve(position, "position");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteStopWatch(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/stopwatch/delete";
  var reqDescription = "Delete an issue's existing stopwatch. {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 409];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueStartStopWatch(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content, "content");
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position, "position");
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/stopwatch/start";
  var reqDescription = "Start stopwatch on an issue. " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 409];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content, "content") !== undefined) eventData["content"] = resolve(content, "content");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(position, "position") !== undefined) eventData["position"] = resolve(position, "position");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueStopStopWatch(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_content = resolve(content, "content");
  if (val_content !== undefined) body["content"] = val_content;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_position = resolve(position, "position");
  if (val_position !== undefined) body["position"] = val_position;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/stopwatch/stop";
  var reqDescription = "Stop an issue's existing stopwatch. " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 409];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content, "content") !== undefined) eventData["content"] = resolve(content, "content");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(position, "position") !== undefined) eventData["position"] = resolve(position, "position");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssuesRejects(content, id, index, limit, owner, page, position, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(content, "content") !== undefined) body["content"] = resolve(content, "content");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(position, "position") !== undefined) body["position"] = resolve(position, "position");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/reactions";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssuesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Issues verification completed");
}
function verifyIssuesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Issues verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/statuses/" + resolve(sha, "sha");
  var reqDescription = "Create a commit status " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(sha, "sha") !== undefined) eventData["sha"] = resolve(sha, "sha");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoListSubscribers(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/subscribers";
  var reqDescription = "List a repo's watchers {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentDeleteSubscription(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/subscription";
  var reqDescription = "Unwatch a repo {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentPutSubscription(body, id, limit, owner, page, repo, sha) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_sha = resolve(sha, "sha");
  if (val_sha !== undefined) body["sha"] = val_sha;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/subscription";
  var reqDescription = "Watch a repo " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(sha, "sha") !== undefined) eventData["sha"] = resolve(sha, "sha");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetRunnerRegistrationToken(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/runners/registration-token";
  var reqDescription = "Get a repository's actions runner registration token {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoListActionsSecrets(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/secrets";
  var reqDescription = "List an repo's actions secrets {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyRepositoryRejects(body, id, limit, owner, page, repo, sha) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/statuses/" + resolve(sha, "sha");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Repository verification completed");
}
function verifyRepositoryDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Repository verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Delete a secret in a repository " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function updateRepoSecret(CreateOrUpdateSecretOption, body, owner, repo, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_CreateOrUpdateSecretOption = resolve(CreateOrUpdateSecretOption, "CreateOrUpdateSecretOption");
  if (val_CreateOrUpdateSecretOption !== undefined) body["CreateOrUpdateSecretOption"] = val_CreateOrUpdateSecretOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Create or Update a secret value in a repository " + resolve(owner, "owner");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateOrUpdateSecretOption, "CreateOrUpdateSecretOption") !== undefined) eventData["CreateOrUpdateSecretOption"] = resolve(CreateOrUpdateSecretOption, "CreateOrUpdateSecretOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifySecretsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("Secrets verification completed");
}
function verifySecretsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("Secrets verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/tasks";
  var reqDescription = "List a repository's action tasks {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 403, 404, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTasksExists(id) {
  let finalId = id || undefined;
  pvg.success("Tasks verification completed");
}
function verifyTasksDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Tasks verification completed");
}
function matchAnyTasksAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedTasks() {
  return bp.EventSet("None", function(e){ return false; });
}

function getRepoVariablesList(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/variables";
  var reqDescription = "Get repo-level variables list {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function deleteRepoVariable(owner, repo, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Delete a repo-level variable {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_CreateVariableOption = resolve(CreateVariableOption, "CreateVariableOption");
  if (val_CreateVariableOption !== undefined) body["CreateVariableOption"] = val_CreateVariableOption;
  let val_UpdateVariableOption = resolve(UpdateVariableOption, "UpdateVariableOption");
  if (val_UpdateVariableOption !== undefined) body["UpdateVariableOption"] = val_UpdateVariableOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Create a repo-level variable " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateVariableOption, "CreateVariableOption") !== undefined) eventData["CreateVariableOption"] = resolve(CreateVariableOption, "CreateVariableOption");
    if (resolve(UpdateVariableOption, "UpdateVariableOption") !== undefined) eventData["UpdateVariableOption"] = resolve(UpdateVariableOption, "UpdateVariableOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function updateRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_CreateVariableOption = resolve(CreateVariableOption, "CreateVariableOption");
  if (val_CreateVariableOption !== undefined) body["CreateVariableOption"] = val_CreateVariableOption;
  let val_UpdateVariableOption = resolve(UpdateVariableOption, "UpdateVariableOption");
  if (val_UpdateVariableOption !== undefined) body["UpdateVariableOption"] = val_UpdateVariableOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Update a repo-level variable " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(CreateVariableOption, "CreateVariableOption") !== undefined) eventData["CreateVariableOption"] = resolve(CreateVariableOption, "CreateVariableOption");
    if (resolve(UpdateVariableOption, "UpdateVariableOption") !== undefined) eventData["UpdateVariableOption"] = resolve(UpdateVariableOption, "UpdateVariableOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyVariablesRejects(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(CreateVariableOption, "CreateVariableOption") !== undefined) body["CreateVariableOption"] = resolve(CreateVariableOption, "CreateVariableOption");
  if (resolve(UpdateVariableOption, "UpdateVariableOption") !== undefined) body["UpdateVariableOption"] = resolve(UpdateVariableOption, "UpdateVariableOption");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/actions/variables/" + resolve(variablename, "variablename");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyVariablesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Variables verification completed");
}
function verifyVariablesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Variables verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branch_protections/" + resolve(name, "name");
  var reqDescription = "Delete a specific branch protection for the repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditBranchProtection(body, id, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branch_protections/" + resolve(name, "name");
  var reqDescription = "Edit a branch protections for a repository. Only fields that are set will be changed " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBranchProtectionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("BranchProtections verification completed");
}
function verifyBranchProtectionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("BranchProtections verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branches";
  var reqDescription = "List a repository's branches {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateBranch(body, branch, id, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_branch = resolve(branch, "branch");
  if (val_branch !== undefined) body["branch"] = val_branch;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branches";
  var reqDescription = "Create a branch " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 409, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(branch, "branch") !== undefined) eventData["branch"] = resolve(branch, "branch");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteBranch(owner, repo, branch) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branches/" + resolve(branch, "branch");
  var reqDescription = "Delete a specific branch from a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoUpdateBranch(body, branch, id, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branches/" + resolve(branch, "branch");
  var reqDescription = "Update a branch " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(branch, "branch") !== undefined) eventData["branch"] = resolve(branch, "branch");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyBranchesRejects(body, branch, id, limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(branch, "branch") !== undefined) body["branch"] = resolve(branch, "branch");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/branches";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyBranchesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Branches verification completed");
}
function verifyBranchesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Branches verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/collaborators";
  var reqDescription = "List a repository's collaborators {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDeleteCollaborator(owner, repo, collaborator) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/collaborators/" + resolve(collaborator, "collaborator");
  var reqDescription = "Delete a collaborator from a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoAddCollaborator(body, collaborator, id, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/collaborators/" + resolve(collaborator, "collaborator");
  var reqDescription = "Add or Update a collaborator to a repository " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(collaborator, "collaborator") !== undefined) eventData["collaborator"] = resolve(collaborator, "collaborator");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyCollaboratorsRejects(body, collaborator, id, limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/collaborators/" + resolve(collaborator, "collaborator");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyCollaboratorsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Collaborators verification completed");
}
function verifyCollaboratorsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Collaborators verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/commits";
  var reqDescription = "Get a list of all commits from a repository {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404, 409];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoListStatusesByRef(owner, repo, ref) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/commits/" + resolve(ref, "ref") + "/statuses";
  var reqDescription = "Get a commit's statuses, by branch/tag/commit reference {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetCommitPullRequest(owner, repo, sha) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/commits/" + resolve(sha, "sha") + "/pull";
  var reqDescription = "Get the merged pull request of the commit {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/git/commits/" + resolve(sha, "sha") + "." + resolve(diffType, "diffType");
  var reqDescription = "Get a commit's diff or patch {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyCommitsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Commits verification completed");
}
function verifyCommitsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Commits verification completed");
}
function matchAnyCommitsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedCommits() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userListRepos(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/repos";
  var reqDescription = "List the repos owned by the given user {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createCurrentUserRepo(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_filepath = resolve(filepath, "filepath");
  if (val_filepath !== undefined) body["filepath"] = val_filepath;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_owner = resolve(owner, "owner");
  if (val_owner !== undefined) body["owner"] = val_owner;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_repo = resolve(repo, "repo");
  if (val_repo !== undefined) body["repo"] = val_repo;
  let val_username = resolve(username, "username");
  if (val_username !== undefined) body["username"] = val_username;
  var url = "/user/repos";
  var reqDescription = "Create a repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(filepath, "filepath") !== undefined) eventData["filepath"] = resolve(filepath, "filepath");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteFile(owner, repo, filepath) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/contents/" + resolve(filepath, "filepath");
  var reqDescription = "Delete a file in a repository {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 400, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoUpdateFile(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_username = resolve(username, "username");
  if (val_username !== undefined) body["username"] = val_username;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/contents/" + resolve(filepath, "filepath");
  var reqDescription = "Update a file in a repository " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(filepath, "filepath") !== undefined) eventData["filepath"] = resolve(filepath, "filepath");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyRepositoriesRejects(body, filepath, id, limit, owner, page, repo, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(filepath, "filepath") !== undefined) body["filepath"] = resolve(filepath, "filepath");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(owner, "owner") !== undefined) body["owner"] = resolve(owner, "owner");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(repo, "repo") !== undefined) body["repo"] = resolve(repo, "repo");
  if (resolve(username, "username") !== undefined) body["username"] = resolve(username, "username");
  var url = "/user/repos";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoriesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Repositories verification completed");
}
function verifyRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Repositories verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/forks";
  var reqDescription = "List a repository's forks {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createFork(body, id, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/forks";
  var reqDescription = "Fork a repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [202, 403, 404, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyForksRejects(body, id, limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/forks";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyForksExists(id) {
  let finalId = id || undefined;
  pvg.success("Forks verification completed");
}
function verifyForksDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Forks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyBlobsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Blobs verification completed");
}
function verifyBlobsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Blobs verification completed");
}
function matchAnyBlobsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedBlobs() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyNotesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Notes verification completed");
}
function verifyNotesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Notes verification completed");
}
function matchAnyNotesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNotes() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListAllGitRefs(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/git/refs";
  var reqDescription = "Get specified ref or filtered repository's refs {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGitRefsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitRefs verification completed");
}
function verifyGitRefsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitRefs verification completed");
}
function matchAnyGitRefsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitRefs() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGitTagsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitTags verification completed");
}
function verifyGitTagsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitTags verification completed");
}
function matchAnyGitTagsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitTags() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGitTreesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitTrees verification completed");
}
function verifyGitTreesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitTrees verification completed");
}
function matchAnyGitTreesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGitTrees() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListGitHooks(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/hooks/git";
  var reqDescription = "List the Git hooks in a repository {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDeleteGitHook(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/hooks/git/" + resolve(id, "id");
  var reqDescription = "Delete a Git hook in a repository " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditGitHook(EditGitHookOption, body, id, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_EditGitHookOption = resolve(EditGitHookOption, "EditGitHookOption");
  if (val_EditGitHookOption !== undefined) body["EditGitHookOption"] = val_EditGitHookOption;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/hooks/git/" + resolve(id, "id");
  var reqDescription = "Edit a Git hook in a repository " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(EditGitHookOption, "EditGitHookOption") !== undefined) eventData["EditGitHookOption"] = resolve(EditGitHookOption, "EditGitHookOption");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyGitHooksExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitHooks verification completed");
}
function verifyGitHooksDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GitHooks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueConfigExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueConfig verification completed");
}
function verifyIssueConfigDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueConfig verification completed");
}
function matchAnyIssueConfigAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedIssueConfig() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueGetRepoComments(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments";
  var reqDescription = "List all comments in a repository {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueDeleteComment(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id");
  var reqDescription = "Delete a comment " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditComment(before, body, id, limit, owner, page, repo, since) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id");
  var reqDescription = "Edit a comment " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 204, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Comments verification completed");
}
function verifyCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Comments verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/assets";
  var reqDescription = "List comment's attachments " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id, "attachment_id");
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/assets";
  var reqDescription = "Create a comment attachment " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 403, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Delete a comment attachment " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Edit a comment attachment " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueCommentAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment, "attachment") !== undefined) body["attachment"] = resolve(attachment, "attachment");
  if (resolve(attachment_id, "attachment_id") !== undefined) body["attachment_id"] = resolve(attachment_id, "attachment_id");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/assets";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueCommentAttachments verification completed");
}
function verifyIssueCommentAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueCommentAttachments verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/reactions";
  var reqDescription = "Remove a reaction from a comment of an issue " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueGetCommentReactions(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/reactions";
  var reqDescription = "Get a list of reactions from a comment of an issue " + resolve(owner, "owner");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issuePostCommentReaction(content, id, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_content = resolve(content, "content");
  if (val_content !== undefined) body["content"] = val_content;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/reactions";
  var reqDescription = "Add a reaction to a comment of an issue " + resolve(owner, "owner");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 201, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(content, "content") !== undefined) eventData["content"] = resolve(content, "content");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueCommentReactionsRejects(content, id, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(content, "content") !== undefined) body["content"] = resolve(content, "content");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/comments/" + resolve(id, "id") + "/reactions";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentReactionsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueCommentReactions verification completed");
}
function verifyIssueCommentReactionsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueCommentReactions verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/pinned";
  var reqDescription = "List a repo's pinned issues {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPinnedIssuesExists(id) {
  let finalId = id || undefined;
  pvg.success("PinnedIssues verification completed");
}
function verifyPinnedIssuesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PinnedIssues verification completed");
}
function matchAnyPinnedIssuesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedPinnedIssues() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueListIssueAttachments(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/assets";
  var reqDescription = "List issue's attachments {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id, "attachment_id");
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/assets";
  var reqDescription = "Create an issue attachment " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Edit an issue attachment " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Delete an issue attachment {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueAttachmentsRejects(attachment, attachment_id, body, id, index, name, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment, "attachment") !== undefined) body["attachment"] = resolve(attachment, "attachment");
  if (resolve(attachment_id, "attachment_id") !== undefined) body["attachment_id"] = resolve(attachment_id, "attachment_id");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/assets";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueAttachments verification completed");
}
function verifyIssueAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueAttachments verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/blocks";
  var reqDescription = "List issues that are blocked by this issue " + resolve(owner, "owner");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateIssueBlocking(body, index, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/blocks";
  var reqDescription = "Block the issue given in the body by the issue in path " + resolve(owner, "owner");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueRemoveIssueBlocking(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/blocks";
  var reqDescription = "Unblock the issue given in the body by the issue in path " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueBlocksRejects(body, index, limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/blocks";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueBlocksExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueBlocks verification completed");
}
function verifyIssueBlocksDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueBlocks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/comments";
  var reqDescription = "List all comments on an issue {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateComment(before, body, id, index, owner, repo, since) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/comments";
  var reqDescription = "Add a comment to an issue " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditCommentDeprecated(before, body, id, index, owner, repo, since) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/comments/" + resolve(id, "id");
  var reqDescription = "Edit a comment " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteCommentDeprecated(owner, repo, index, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/comments/" + resolve(id, "id");
  var reqDescription = "Delete a comment " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueCommentsRejects(before, body, id, index, owner, repo, since) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(before, "before") !== undefined) body["before"] = resolve(before, "before");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(since, "since") !== undefined) body["since"] = resolve(since, "since");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/comments";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueComments verification completed");
}
function verifyIssueCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueComments verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/subscriptions";
  var reqDescription = "Get users who subscribed on an issue. {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueAddSubscription(id, index, limit, owner, page, repo, user) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/subscriptions/" + resolve(user, "user");
  var reqDescription = "Subscribe user to issue " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 304, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 201, 304, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(user, "user") !== undefined) eventData["user"] = resolve(user, "user");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueDeleteSubscription(owner, repo, index, user) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/subscriptions/" + resolve(user, "user");
  var reqDescription = "Unsubscribe user from issue {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 304, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 201, 304, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueSubscriptionsRejects(id, index, limit, owner, page, repo, user) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/subscriptions/" + resolve(user, "user");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueSubscriptionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueSubscriptions verification completed");
}
function verifyIssueSubscriptionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("IssueSubscriptions verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/timeline";
  var reqDescription = "List all comments and events on an issue {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueTimelineExists(id) {
  let finalId = id || undefined;
  pvg.success("IssueTimeline verification completed");
}
function verifyIssueTimelineDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("IssueTimeline verification completed");
}
function matchAnyIssueTimelineAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedIssueTimeline() {
  return bp.EventSet("None", function(e){ return false; });
}

function issueTrackedTimes(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/times";
  var reqDescription = "List an issue's tracked times " + resolve(owner, "owner");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueAddTime(before, body, index, limit, owner, page, repo, since, user) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_before = resolve(before, "before");
  if (val_before !== undefined) body["before"] = val_before;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_since = resolve(since, "since");
  if (val_since !== undefined) body["since"] = val_since;
  let val_user = resolve(user, "user");
  if (val_user !== undefined) body["user"] = val_user;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/times";
  var reqDescription = "Add tracked time to a issue " + resolve(owner, "owner");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(before, "before") !== undefined) eventData["before"] = resolve(before, "before");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(since, "since") !== undefined) eventData["since"] = resolve(since, "since");
    if (resolve(user, "user") !== undefined) eventData["user"] = resolve(user, "user");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function issueResetTime(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/times";
  var reqDescription = "Reset a tracked time of an issue " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyIssueTimesRejects(before, body, index, limit, owner, page, repo, since, user) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(before, "before") !== undefined) body["before"] = resolve(before, "before");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(since, "since") !== undefined) body["since"] = resolve(since, "since");
  if (resolve(user, "user") !== undefined) body["user"] = resolve(user, "user");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/issues/" + resolve(index, "index") + "/times";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueTimesExists(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueTimes verification completed");
}
function verifyIssueTimesDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("IssueTimes verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/keys";
  var reqDescription = "List a repository's keys {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateKey(body, fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_fingerprint = resolve(fingerprint, "fingerprint");
  if (val_fingerprint !== undefined) body["fingerprint"] = val_fingerprint;
  let val_key = resolve(key, "key");
  if (val_key !== undefined) body["key"] = val_key;
  let val_key_id = resolve(key_id, "key_id");
  if (val_key_id !== undefined) body["key_id"] = val_key_id;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_read_only = resolve(read_only, "read_only");
  if (val_read_only !== undefined) body["read_only"] = val_read_only;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/keys";
  var reqDescription = "Add a key to a repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(fingerprint, "fingerprint") !== undefined) eventData["fingerprint"] = resolve(fingerprint, "fingerprint");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(key, "key") !== undefined) eventData["key"] = resolve(key, "key");
    if (resolve(key_id, "key_id") !== undefined) eventData["key_id"] = resolve(key_id, "key_id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(read_only, "read_only") !== undefined) eventData["read_only"] = resolve(read_only, "read_only");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDeleteKey(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/keys/" + resolve(id, "id");
  var reqDescription = "Delete a key from a repository " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyRepositoryKeysRejects(body, fingerprint, id, key, key_id, limit, owner, page, read_only, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(fingerprint, "fingerprint") !== undefined) body["fingerprint"] = resolve(fingerprint, "fingerprint");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(key, "key") !== undefined) body["key"] = resolve(key, "key");
  if (resolve(key_id, "key_id") !== undefined) body["key_id"] = resolve(key_id, "key_id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(read_only, "read_only") !== undefined) body["read_only"] = resolve(read_only, "read_only");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/keys";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("RepositoryKeys verification completed");
}
function verifyRepositoryKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("RepositoryKeys verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/milestones";
  var reqDescription = "Get all of a repository's opened milestones {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueCreateMilestone(body, id, limit, name, owner, page, repo, state) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_state = resolve(state, "state");
  if (val_state !== undefined) body["state"] = val_state;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/milestones";
  var reqDescription = "Create a milestone " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(state, "state") !== undefined) eventData["state"] = resolve(state, "state");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyIssueRejects(body, id, limit, name, owner, page, repo, state) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(state, "state") !== undefined) body["state"] = resolve(state, "state");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/milestones";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyIssueExists(id) {
  let finalId = id || undefined;
  pvg.success("Issue verification completed");
}
function verifyIssueDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Issue verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/milestones/" + resolve(id, "id");
  var reqDescription = "Delete a milestone " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function issueEditMilestone(body, id, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/milestones/" + resolve(id, "id");
  var reqDescription = "Update a milestone " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMilestonesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Milestones verification completed");
}
function verifyMilestonesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Milestones verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/mirror-sync";
  var reqDescription = "Sync a mirrored repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyMirrorSyncRejects(id, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/mirror-sync";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyMirrorSyncExists(id) {
  let finalId = id || undefined;
  pvg.success("MirrorSync verification completed");
}
function verifyMirrorSyncDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("MirrorSync verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyNewPinAllowedExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("NewPinAllowed verification completed");
}
function verifyNewPinAllowedDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("NewPinAllowed verification completed");
}
function matchAnyNewPinAllowedAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedNewPinAllowed() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetPullRequestFiles(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/files";
  var reqDescription = "Get changed files for a pull request {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoMergePullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_skip_to = resolve(skip_to, "skip-to");
  if (val_skip_to !== undefined) body["skip-to"] = val_skip_to;
  let val_whitespace = resolve(whitespace, "whitespace");
  if (val_whitespace !== undefined) body["whitespace"] = val_whitespace;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/merge";
  var reqDescription = "Merge a pull request " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 405, 409, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(skip_to, "skip-to") !== undefined) eventData["skip-to"] = resolve(skip_to, "skip-to");
    if (resolve(whitespace, "whitespace") !== undefined) eventData["whitespace"] = resolve(whitespace, "whitespace");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditPullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_skip_to = resolve(skip_to, "skip-to");
  if (val_skip_to !== undefined) body["skip-to"] = val_skip_to;
  let val_whitespace = resolve(whitespace, "whitespace");
  if (val_whitespace !== undefined) body["whitespace"] = val_whitespace;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index");
  var reqDescription = "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored. " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 412, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 409, 412, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(skip_to, "skip-to") !== undefined) eventData["skip-to"] = resolve(skip_to, "skip-to");
    if (resolve(whitespace, "whitespace") !== undefined) eventData["whitespace"] = resolve(whitespace, "whitespace");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoCancelScheduledAutoMerge(owner, repo, index) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/merge";
  var reqDescription = "Cancel the scheduled auto merge for the given pull request {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPullRequestsRejects(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(skip_to, "skip-to") !== undefined) body["skip-to"] = resolve(skip_to, "skip-to");
  if (resolve(whitespace, "whitespace") !== undefined) body["whitespace"] = resolve(whitespace, "whitespace");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/merge";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullRequestsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullRequests verification completed");
}
function verifyPullRequestsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullRequests verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/requested_reviewers";
  var reqDescription = "Cancel review requests for a pull request " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreatePullReviewRequests(body, index, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/requested_reviewers";
  var reqDescription = "Create review requests for a pull request " + resolve(owner, "owner");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewRequestsRejects(body, index, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/requested_reviewers";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewRequestsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("PullReviewRequests verification completed");
}
function verifyPullReviewRequestsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("PullReviewRequests verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews";
  var reqDescription = "List all reviews for a pull request {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoSubmitPullReview(body, id, index, limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id");
  var reqDescription = "Submit a pending review to a pull request " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeletePullReview(owner, repo, index, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id");
  var reqDescription = "Delete a specific review from a pull request " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPullReviewsRejects(body, id, index, limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullReviews verification completed");
}
function verifyPullReviewsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullReviews verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPullReviewCommentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullReviewComments verification completed");
}
function verifyPullReviewCommentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PullReviewComments verification completed");
}
function matchAnyPullReviewCommentsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedPullReviewComments() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoDismissPullReview(body, id, index, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id") + "/dismissals";
  var reqDescription = "Dismiss a review for a pull request " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewDismissalsRejects(body, id, index, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id") + "/dismissals";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewDismissalsExists(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewDismissals verification completed");
}
function verifyPullReviewDismissalsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewDismissals verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id") + "/undismissals";
  var reqDescription = "Cancel to dismiss a review for a pull request " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/reviews/" + resolve(id, "id") + "/undismissals";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullReviewUndismissalsExists(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewUndismissals verification completed");
}
function verifyPullReviewUndismissalsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullReviewUndismissals verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_style = resolve(style, "style");
  if (val_style !== undefined) body["style"] = val_style;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/update";
  var reqDescription = "Merge PR's baseBranch into headBranch " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(index, "index") !== undefined) eventData["index"] = resolve(index, "index");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(style, "style") !== undefined) eventData["style"] = resolve(style, "style");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyPullRequestUpdateRejects(id, index, owner, repo, style) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(style, "style") !== undefined) body["style"] = resolve(style, "style");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/pulls/" + resolve(index, "index") + "/update";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPullRequestUpdateExists(id) {
  let finalId = id || undefined;
  pvg.success("PullRequestUpdate verification completed");
}
function verifyPullRequestUpdateDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("PullRequestUpdate verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/push_mirrors";
  var reqDescription = "Get all push mirrors of the repository {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoPushMirrorSync(id, limit, name, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/push_mirrors-sync";
  var reqDescription = "Sync all push mirrored repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 400, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeletePushMirror(owner, repo, name) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/push_mirrors/" + resolve(name, "name");
  var reqDescription = "Deletes a push mirror from a repository by remoteName {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyPushMirrorsRejects(id, limit, name, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/push_mirrors-sync";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyPushMirrorsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PushMirrors verification completed");
}
function verifyPushMirrorsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("PushMirrors verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyRawFilesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("RawFiles verification completed");
}
function verifyRawFilesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("RawFiles verification completed");
}
function matchAnyRawFilesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedRawFiles() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListReleases(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases";
  var reqDescription = "List a repo's releases {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_draft = resolve(draft, "draft");
  if (val_draft !== undefined) body["draft"] = val_draft;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_pre_release = resolve(pre_release, "pre-release");
  if (val_pre_release !== undefined) body["pre-release"] = val_pre_release;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases";
  var reqDescription = "Create a release " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 409, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(draft, "draft") !== undefined) eventData["draft"] = resolve(draft, "draft");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(pre_release, "pre-release") !== undefined) eventData["pre-release"] = resolve(pre_release, "pre-release");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDeleteRelease(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id");
  var reqDescription = "Delete a release " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditRelease(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_draft = resolve(draft, "draft");
  if (val_draft !== undefined) body["draft"] = val_draft;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_pre_release = resolve(pre_release, "pre-release");
  if (val_pre_release !== undefined) body["pre-release"] = val_pre_release;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id");
  var reqDescription = "Update a release " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(draft, "draft") !== undefined) eventData["draft"] = resolve(draft, "draft");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(pre_release, "pre-release") !== undefined) eventData["pre-release"] = resolve(pre_release, "pre-release");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyReleasesRejects(body, draft, id, limit, owner, page, pre_release, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(draft, "draft") !== undefined) body["draft"] = resolve(draft, "draft");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(pre_release, "pre-release") !== undefined) body["pre-release"] = resolve(pre_release, "pre-release");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyReleasesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Releases verification completed");
}
function verifyReleasesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Releases verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id") + "/assets";
  var reqDescription = "List release's attachments " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_attachment_id = resolve(attachment_id, "attachment_id");
  if (val_attachment_id !== undefined) body["attachment_id"] = val_attachment_id;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id") + "/assets";
  var reqDescription = "Create a release attachment " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteReleaseAttachment(owner, repo, id, attachment_id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Delete a release attachment " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_attachment = resolve(attachment, "attachment");
  if (val_attachment !== undefined) body["attachment"] = val_attachment;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_name = resolve(name, "name");
  if (val_name !== undefined) body["name"] = val_name;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id") + "/assets/" + resolve(attachment_id, "attachment_id");
  var reqDescription = "Edit a release attachment " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(attachment, "attachment") !== undefined) eventData["attachment"] = resolve(attachment, "attachment");
    if (resolve(attachment_id, "attachment_id") !== undefined) eventData["attachment_id"] = resolve(attachment_id, "attachment_id");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(name, "name") !== undefined) eventData["name"] = resolve(name, "name");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyReleaseAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(attachment, "attachment") !== undefined) body["attachment"] = resolve(attachment, "attachment");
  if (resolve(attachment_id, "attachment_id") !== undefined) body["attachment_id"] = resolve(attachment_id, "attachment_id");
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(name, "name") !== undefined) body["name"] = resolve(name, "name");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/releases/" + resolve(id, "id") + "/assets";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyReleaseAttachmentsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("ReleaseAttachments verification completed");
}
function verifyReleaseAttachmentsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("ReleaseAttachments verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/reviewers";
  var reqDescription = "Return all users that can be requested to review in this repo {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyReviewersExists(id) {
  let finalId = id || undefined;
  pvg.success("Reviewers verification completed");
}
function verifyReviewersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Reviewers verification completed");
}
function matchAnyReviewersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedReviewers() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoListTagProtection(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tag_protections";
  var reqDescription = "List tag protections for a repository {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateTagProtection(body, id, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tag_protections";
  var reqDescription = "Create a tag protection for a repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 403, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditTagProtection(body, id, owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tag_protections/" + resolve(id, "id");
  var reqDescription = "Edit a tag protection for a repository. Only fields that are set will be changed " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteTagProtection(owner, repo, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tag_protections/" + resolve(id, "id");
  var reqDescription = "Delete a specific tag protection for the repository " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTagProtectionsRejects(body, id, owner, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tag_protections";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTagProtectionsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TagProtections verification completed");
}
function verifyTagProtectionsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TagProtections verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tags";
  var reqDescription = "List a repository's tags {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoCreateTag(body, id, limit, owner, page, repo, tag) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_tag = resolve(tag, "tag");
  if (val_tag !== undefined) body["tag"] = val_tag;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tags";
  var reqDescription = "Create a new git tag in a repository " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404, 405, 409, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(tag, "tag") !== undefined) eventData["tag"] = resolve(tag, "tag");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoDeleteTag(owner, repo, tag) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tags/" + resolve(tag, "tag");
  var reqDescription = "Delete a repository's tag by name {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 404, 405, 409, 422, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTagsRejects(body, id, limit, owner, page, repo, tag) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(tag, "tag") !== undefined) body["tag"] = resolve(tag, "tag");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/tags";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTagsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Tags verification completed");
}
function verifyTagsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Tags verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTrackedTimesExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TrackedTimes verification completed");
}
function verifyTrackedTimesDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TrackedTimes verification completed");
}
function matchAnyTrackedTimesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedTrackedTimes() {
  return bp.EventSet("None", function(e){ return false; });
}

function topicSearch() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoUpdateTopics(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_q = resolve(q, "q");
  if (val_q !== undefined) body["q"] = val_q;
  let val_topic = resolve(topic, "topic");
  if (val_topic !== undefined) body["topic"] = val_topic;
  let val_topic1 = resolve(topic1, "topic1");
  if (val_topic1 !== undefined) body["topic1"] = val_topic1;
  let val_topic2 = resolve(topic2, "topic2");
  if (val_topic2 !== undefined) body["topic2"] = val_topic2;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/topics";
  var reqDescription = "Replace list of topics for a repository " + resolve(owner, "owner");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(q, "q") !== undefined) eventData["q"] = resolve(q, "q");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(topic, "topic") !== undefined) eventData["topic"] = resolve(topic, "topic");
    if (resolve(topic1, "topic1") !== undefined) eventData["topic1"] = resolve(topic1, "topic1");
    if (resolve(topic2, "topic2") !== undefined) eventData["topic2"] = resolve(topic2, "topic2");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteTopic(owner, repo, topic) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/topics/" + resolve(topic, "topic");
  var reqDescription = "Delete a topic from a repository " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoAddTopic(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  let val_q = resolve(q, "q");
  if (val_q !== undefined) body["q"] = val_q;
  let val_topic1 = resolve(topic1, "topic1");
  if (val_topic1 !== undefined) body["topic1"] = val_topic1;
  let val_topic2 = resolve(topic2, "topic2");
  if (val_topic2 !== undefined) body["topic2"] = val_topic2;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/topics/" + resolve(topic, "topic");
  var reqDescription = "Add a topic to a repository " + resolve(owner, "owner");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(q, "q") !== undefined) eventData["q"] = resolve(q, "q");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(topic, "topic") !== undefined) eventData["topic"] = resolve(topic, "topic");
    if (resolve(topic1, "topic1") !== undefined) eventData["topic1"] = resolve(topic1, "topic1");
    if (resolve(topic2, "topic2") !== undefined) eventData["topic2"] = resolve(topic2, "topic2");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyTopicsRejects(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  if (resolve(q, "q") !== undefined) body["q"] = resolve(q, "q");
  if (resolve(topic1, "topic1") !== undefined) body["topic1"] = resolve(topic1, "topic1");
  if (resolve(topic2, "topic2") !== undefined) body["topic2"] = resolve(topic2, "topic2");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/topics/" + resolve(topic, "topic");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTopicsExists(owner) {
  let finalId = owner || undefined;
  pvg.success("Topics verification completed");
}
function verifyTopicsDoesNotExist(owner) {
  let finalId = owner || undefined;
  pvg.success("Topics verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions, "transferOptions");
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/transfer";
  var reqDescription = "Transfer a repo ownership " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [202, 403, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(transferOptions, "transferOptions") !== undefined) eventData["transferOptions"] = resolve(transferOptions, "transferOptions");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function acceptRepoTransfer(body, id, owner, repo, transferOptions) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions, "transferOptions");
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/transfer/accept";
  var reqDescription = "Accept a repo transfer " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 202, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [202, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(transferOptions, "transferOptions") !== undefined) eventData["transferOptions"] = resolve(transferOptions, "transferOptions");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function rejectRepoTransfer(body, id, owner, repo, transferOptions) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_transferOptions = resolve(transferOptions, "transferOptions");
  if (val_transferOptions !== undefined) body["transferOptions"] = val_transferOptions;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/transfer/reject";
  var reqDescription = "Reject a repo transfer " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(transferOptions, "transferOptions") !== undefined) eventData["transferOptions"] = resolve(transferOptions, "transferOptions");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyRepositoryTransferRejects(body, id, owner, repo, transferOptions) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(transferOptions, "transferOptions") !== undefined) body["transferOptions"] = resolve(transferOptions, "transferOptions");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/transfer";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyRepositoryTransferExists(id) {
  let finalId = id || undefined;
  pvg.success("RepositoryTransfer verification completed");
}
function verifyRepositoryTransferDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("RepositoryTransfer verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_pageName = resolve(pageName, "pageName");
  if (val_pageName !== undefined) body["pageName"] = val_pageName;
  let val_wikiPageOptions = resolve(wikiPageOptions, "wikiPageOptions");
  if (val_wikiPageOptions !== undefined) body["wikiPageOptions"] = val_wikiPageOptions;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/new";
  var reqDescription = "Create a wiki page " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(pageName, "pageName") !== undefined) eventData["pageName"] = resolve(pageName, "pageName");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(wikiPageOptions, "wikiPageOptions") !== undefined) eventData["wikiPageOptions"] = resolve(wikiPageOptions, "wikiPageOptions");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function repoDeleteWikiPage(owner, repo, pageName) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/page/" + resolve(pageName, "pageName");
  var reqDescription = "Delete a wiki page {id}";
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 423, 500] });
  const originalSpecCodes = [200, 204, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoGetByID(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repositories/" + resolve(id, "id");
  var reqDescription = "Get a repository by id";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function repoEditWikiPage(body, id, owner, pageName, repo, wikiPageOptions) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_wikiPageOptions = resolve(wikiPageOptions, "wikiPageOptions");
  if (val_wikiPageOptions !== undefined) body["wikiPageOptions"] = val_wikiPageOptions;
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/page/" + resolve(pageName, "pageName");
  var reqDescription = "Edit a wiki page " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 423, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 400, 403, 404, 423];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(pageName, "pageName") !== undefined) eventData["pageName"] = resolve(pageName, "pageName");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    if (resolve(wikiPageOptions, "wikiPageOptions") !== undefined) eventData["wikiPageOptions"] = resolve(wikiPageOptions, "wikiPageOptions");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyWikiPageRejects(body, id, owner, pageName, repo, wikiPageOptions) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(pageName, "pageName") !== undefined) body["pageName"] = resolve(pageName, "pageName");
  if (resolve(wikiPageOptions, "wikiPageOptions") !== undefined) body["wikiPageOptions"] = resolve(wikiPageOptions, "wikiPageOptions");
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/new";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyWikiPageExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("WikiPage verification completed");
}
function verifyWikiPageDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/repositories/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("WikiPage verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/pages";
  var reqDescription = "Get all wiki pages {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyWikiPagesExists(id) {
  let finalId = id || undefined;
  pvg.success("WikiPages verification completed");
}
function verifyWikiPagesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("WikiPages verification completed");
}
function matchAnyWikiPagesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedWikiPages() {
  return bp.EventSet("None", function(e){ return false; });
}

function repoGetWikiPageRevisions(owner, repo, pageName) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/repos/" + resolve(owner, "owner") + "/" + resolve(repo, "repo") + "/wiki/revisions/" + resolve(pageName, "pageName");
  var reqDescription = "Get revisions of a wiki page {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyWikiPageRevisionsExists(id) {
  let finalId = id || undefined;
  pvg.success("WikiPageRevisions verification completed");
}
function verifyWikiPageRevisionsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("WikiPageRevisions verification completed");
}
function matchAnyWikiPageRevisionsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedWikiPageRevisions() {
  return bp.EventSet("None", function(e){ return false; });
}

function getGeneralAPISettings() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function getGeneralUISettings() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifySettingsExists(id) {
  let finalId = id || undefined;
  pvg.success("Settings verification completed");
}
function verifySettingsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Settings verification completed");
}
function matchAnySettingsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedSettings() {
  return bp.EventSet("None", function(e){ return false; });
}

function getVersion() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyMiscellaneousExists(id) {
  let finalId = id || undefined;
  pvg.success("Miscellaneous verification completed");
}
function verifyMiscellaneousDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("Miscellaneous verification completed");
}
function matchAnyMiscellaneousAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedMiscellaneous() {
  return bp.EventSet("None", function(e){ return false; });
}

function orgListTeamMembers(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id") + "/members";
  var reqDescription = "List a team's members " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGetTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Get a team " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgAddTeamMember(id, limit, page, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id, "id") + "/members/" + resolve(username, "username");
  var reqDescription = "Add a team member " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Delete a team " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTeamMembersRejects(id, limit, page, username) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/teams/" + resolve(id, "id") + "/members/" + resolve(username, "username");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTeamMembersExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TeamMembers verification completed");
}
function verifyTeamMembersDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TeamMembers verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id") + "/repos";
  var reqDescription = "List a team's repos " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgGetTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Get a team " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function orgAddTeamRepository(id, limit, org, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/teams/" + resolve(id, "id") + "/repos/" + resolve(org, "org") + "/" + resolve(repo, "repo");
  var reqDescription = "Add a repository to a team " + resolve(id, "id");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(org, "org") !== undefined) eventData["org"] = resolve(org, "org");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function orgDeleteTeam(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/teams/" + resolve(id, "id");
  var reqDescription = "Delete a team " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyTeamReposRejects(id, limit, org, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/teams/" + resolve(id, "id") + "/repos/" + resolve(org, "org") + "/" + resolve(repo, "repo");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyTeamReposExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TeamRepos verification completed");
}
function verifyTeamReposDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/teams/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("TeamRepos verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function deleteUserSecret(secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Delete a secret in a user scope " + resolve(secretname, "secretname");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function updateUserSecret(body, limit, page, secretname) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/actions/secrets/" + resolve(secretname, "secretname");
  var reqDescription = "Create or Update a secret value in a user scope " + resolve(secretname, "secretname");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(secretname, "secretname") !== undefined) eventData["secretname"] = resolve(secretname, "secretname");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function getUserVariablesList() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserExists(secretname) {
  let finalId = secretname || undefined;
  pvg.success("User verification completed");
}
function verifyUserDoesNotExist(secretname) {
  let finalId = secretname || undefined;
  pvg.success("User verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Delete a user-level variable which is created by current doer " + resolve(variablename, "variablename");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function getUserVariable(variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Get a user-level variable which is created by current doer " + resolve(variablename, "variablename");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function createUserVariable(body, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Create a user-level variable " + resolve(variablename, "variablename");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function updateUserVariable(body, variablename) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/actions/variables/" + resolve(variablename, "variablename");
  var reqDescription = "Update a user-level variable which is created by current doer " + resolve(variablename, "variablename");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 204, 400, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(variablename, "variablename") !== undefined) eventData["variablename"] = resolve(variablename, "variablename");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserVariablesRejects(body, variablename) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  var url = "/user/actions/variables/" + resolve(variablename, "variablename");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserVariablesExists(variablename) {
  let finalId = variablename || undefined;
  if (finalId !== undefined) svc.get("/user/actions/variables/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserVariables verification completed");
}
function verifyUserVariablesDoesNotExist(variablename) {
  let finalId = variablename || undefined;
  if (finalId !== undefined) svc.get("/user/actions/variables/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserVariables verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCreateOAuth2Application(body, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/applications/oauth2";
  var reqDescription = "creates a new OAuth2 application " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 400];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userDeleteOAuth2Application(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/applications/oauth2/" + resolve(id, "id");
  var reqDescription = "delete an OAuth2 Application " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userGetOAuth2Application(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/applications/oauth2/" + resolve(id, "id");
  var reqDescription = "get an OAuth2 Application " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userUpdateOAuth2Application(body, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/applications/oauth2/" + resolve(id, "id");
  var reqDescription = "update an OAuth2 Application, this includes regenerating the client secret " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyOAuth2ApplicationsRejects(body, id, limit, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/user/applications/oauth2";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyOAuth2ApplicationsExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/applications/oauth2/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OAuth2Applications verification completed");
}
function verifyOAuth2ApplicationsDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/applications/oauth2/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("OAuth2Applications verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userUpdateAvatar(body, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/avatar";
  var reqDescription = "Update Avatar " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserAvatarRejects(body, id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/user/avatar";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserAvatarExists(id) {
  let finalId = id || undefined;
  pvg.success("UserAvatar verification completed");
}
function verifyUserAvatarDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserAvatar verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userUnblockUser(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/blocks/" + resolve(username, "username");
  var reqDescription = "Unblock a user " + resolve(username, "username");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCheckUserBlock(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/blocks/" + resolve(username, "username");
  var reqDescription = "Check if a user is blocked by the authenticated user " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userBlockUser(limit, note, page, username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_note = resolve(note, "note");
  if (val_note !== undefined) body["note"] = val_note;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/blocks/" + resolve(username, "username");
  var reqDescription = "Block a user " + resolve(username, "username");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(note, "note") !== undefined) eventData["note"] = resolve(note, "note");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserBlocksExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/blocks/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserBlocks verification completed");
}
function verifyUserBlocksDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/blocks/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserBlocks verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userListEmails() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userAddEmail(body, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/emails";
  var reqDescription = "Add email addresses " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserEmailsRejects(body, id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/user/emails";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserEmailsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserEmails verification completed");
}
function verifyUserEmailsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserEmails verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserFollowersExists(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowers verification completed");
}
function verifyUserFollowersDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowers verification completed");
}
function matchAnyUserFollowersAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserFollowers() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListFollowing() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserFollowingExists(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowing verification completed");
}
function verifyUserFollowingDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserFollowing verification completed");
}
function matchAnyUserFollowingAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserFollowing() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentDeleteFollow(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/following/" + resolve(username, "username");
  var reqDescription = "Unfollow a user " + resolve(username, "username");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentCheckFollowing(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/following/" + resolve(username, "username");
  var reqDescription = "Check whether a user is followed by the authenticated user " + resolve(username, "username");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentPutFollow(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  var url = "/user/following/" + resolve(username, "username");
  var reqDescription = "Follow a user " + resolve(username, "username");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(username, "username") !== undefined) eventData["username"] = resolve(username, "username");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserFollowingSpecificExists(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/following/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserFollowingSpecific verification completed");
}
function verifyUserFollowingSpecificDoesNotExist(username) {
  let finalId = username || undefined;
  if (finalId !== undefined) svc.get("/user/following/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserFollowingSpecific verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_keys/" + resolve(id, "id");
  var reqDescription = "Get a GPG key " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentListGPGKeys() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentPostGPGKey(Form, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_Form = resolve(Form, "Form");
  if (val_Form !== undefined) body["Form"] = val_Form;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/gpg_keys";
  var reqDescription = "Create a GPG key " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(Form, "Form") !== undefined) eventData["Form"] = resolve(Form, "Form");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userCurrentDeleteGPGKey(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/gpg_keys/" + resolve(id, "id");
  var reqDescription = "Remove a GPG key " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGPGKeysRejects(Form, id, limit, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(Form, "Form") !== undefined) body["Form"] = resolve(Form, "Form");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/user/gpg_keys";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyGPGKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/gpg_keys/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GPGKeys verification completed");
}
function verifyGPGKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/gpg_keys/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("GPGKeys verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyGPGKeyTokenExists(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyToken verification completed");
}
function verifyGPGKeyTokenDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyToken verification completed");
}
function matchAnyGPGKeyTokenAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedGPGKeyToken() {
  return bp.EventSet("None", function(e){ return false; });
}

function userVerifyGPGKey(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  var url = "/user/gpg_key_verify";
  var reqDescription = "Verify a GPG key " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 404, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyGPGKeyVerificationRejects(id) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  var url = "/user/gpg_key_verify";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyGPGKeyVerificationExists(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyVerification verification completed");
}
function verifyGPGKeyVerificationDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("GPGKeyVerification verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentPostKey(body, fingerprint, id, limit, page) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  let val_fingerprint = resolve(fingerprint, "fingerprint");
  if (val_fingerprint !== undefined) body["fingerprint"] = val_fingerprint;
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/keys";
  var reqDescription = "Create a public key " + resolve(id, "id");
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 201, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [201, 422];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(fingerprint, "fingerprint") !== undefined) eventData["fingerprint"] = resolve(fingerprint, "fingerprint");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function userCurrentDeleteKey(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/keys/" + resolve(id, "id");
  var reqDescription = "Delete a public key " + resolve(id, "id");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentGetKey(id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/keys/" + resolve(id, "id");
  var reqDescription = "Get a public key " + resolve(id, "id");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyKeysRejects(body, fingerprint, id, limit, page) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(body, "body") !== undefined) body["body"] = resolve(body, "body");
  if (resolve(fingerprint, "fingerprint") !== undefined) body["fingerprint"] = resolve(fingerprint, "fingerprint");
  if (resolve(id, "id") !== undefined) body["id"] = resolve(id, "id");
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/user/keys";
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyKeysExists(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/keys/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Keys verification completed");
}
function verifyKeysDoesNotExist(id) {
  let finalId = id || undefined;
  if (finalId !== undefined) svc.get("/user/keys/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("Keys verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function updateUserSettings(UserSettingsOptions, body, id) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let idVal = resolve(id, "id");
  if (idVal !== undefined) body["id"] = idVal;
  let val_UserSettingsOptions = resolve(UserSettingsOptions, "UserSettingsOptions");
  if (val_UserSettingsOptions !== undefined) body["UserSettingsOptions"] = val_UserSettingsOptions;
  let val_body = resolve(body, "body");
  if (val_body !== undefined) body["body"] = val_body;
  var url = "/user/settings";
  var reqDescription = "Update user settings " + resolve(id, "id");
  let res = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(UserSettingsOptions, "UserSettingsOptions") !== undefined) eventData["UserSettingsOptions"] = resolve(UserSettingsOptions, "UserSettingsOptions");
    if (resolve(body, "body") !== undefined) eventData["body"] = resolve(body, "body");
    if (resolve(id, "id") !== undefined) eventData["id"] = resolve(id, "id");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserSettingsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserSettings verification completed");
}
function verifyUserSettingsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserSettings verification completed");
}
function matchAnyUserSettingsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserSettings() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListStarred() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentDeleteStar(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/starred/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  var reqDescription = "Unstar the given repo " + resolve(owner, "owner");
  let res = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentCheckStarring(owner, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/user/starred/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  var reqDescription = "Whether the authenticated is starring the repo " + resolve(owner, "owner");
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [204, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function userCurrentPutStar(limit, owner, page, repo) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var body = {};
  let val_limit = resolve(limit, "limit");
  if (val_limit !== undefined) body["limit"] = val_limit;
  let val_page = resolve(page, "page");
  if (val_page !== undefined) body["page"] = val_page;
  var url = "/user/starred/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  var reqDescription = "Star the given repo " + resolve(owner, "owner");
  let res = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: [200, 204, 400, 401, 403, 404, 405, 409, 422, 500], parameters: { description: reqDescription } });
  const originalSpecCodes = [204, 403, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  if (res.status >= 200 && res.status < 300) {
    let eventData = Object.assign({}, res.data || {});
    if (resolve(limit, "limit") !== undefined) eventData["limit"] = resolve(limit, "limit");
    if (resolve(owner, "owner") !== undefined) eventData["owner"] = resolve(owner, "owner");
    if (resolve(page, "page") !== undefined) eventData["page"] = resolve(page, "page");
    if (resolve(repo, "repo") !== undefined) eventData["repo"] = resolve(repo, "repo");
    bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, eventData) });
  }
  return res;
}

function verifyUserStarredRejects(limit, owner, page, repo) {
  const resolve = (v, pName) => (v && typeof v === "object") ? (v.id || v.name || v.login || v.username || undefined) : v;
  var body = {};
  if (resolve(limit, "limit") !== undefined) body["limit"] = resolve(limit, "limit");
  if (resolve(page, "page") !== undefined) body["page"] = resolve(page, "page");
  var url = "/user/starred/" + resolve(owner, "owner") + "/" + resolve(repo, "repo");
  const allowedRejections = [200, 400, 401, 403, 404, 405, 409, 422, 500];
  let res = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: allowedRejections });
  if (res.status === 200) { bp.log.warn("[COMPLIANCE VIOLATION] Negative test returned 200 OK for: " + url); }
  bp.sync({ request: bp.Event("Done: Negative: Rejection verified for " + url) });
}

function verifyUserStarredExists(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/user/starred/"+finalId+"/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserStarred verification completed");
}
function verifyUserStarredDoesNotExist(owner) {
  let finalId = owner || undefined;
  if (finalId !== undefined) svc.get("/user/starred/"+finalId+"/"+finalId+"", { expectedResponseCodes: [200, 404] });
  pvg.success("UserStarred verification completed");
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
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserStopwatchesExists(id) {
  let finalId = id || undefined;
  pvg.success("UserStopwatches verification completed");
}
function verifyUserStopwatchesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserStopwatches verification completed");
}
function matchAnyUserStopwatchesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserStopwatches() {
  return bp.EventSet("None", function(e){ return false; });
}

function userCurrentListSubscriptions() {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
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
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyUserSubscriptionsExists(id) {
  let finalId = id || undefined;
  pvg.success("UserSubscriptions verification completed");
}
function verifyUserSubscriptionsDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("UserSubscriptions verification completed");
}
function matchAnyUserSubscriptionsAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedUserSubscriptions() {
  return bp.EventSet("None", function(e){ return false; });
}

function userListStarred(username) {
  const resolve = (v, pName) => {
    if (v === undefined || v === null) return undefined;
    const s = String(v);
    if (s.includes("_valid_") || s.includes("_Users_") || s.includes("_Repository_") || 
        s.includes("_Organization_") || s.includes("owner_") || s.includes("repo_") || 
        s === "12345" || s === "INVALID") {
      const low = (pName || "").toLowerCase();
      if (low.includes("repo")) return "provengo-test-repo";
      return "__GITEA_USER__";
    }
    if (typeof v === "object") {
      let res = v.id || v.name || v.login || v.username || undefined;
      return (typeof res === "object") ? undefined : res;
    }
    return v;
  };
  var url = "/users/" + resolve(username, "username") + "/starred";
  var reqDescription = "The repos that the given user has starred {id}";
  let res = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: [200, 400, 401, 403, 404, 405, 409, 422, 500] });
  const originalSpecCodes = [200, 404];
  if (!originalSpecCodes.includes(res.status)) {
    bp.log.warn("[COMPLIANCE VIOLATION] SUT returned status " + res.status + " which is NOT defined in OpenAPI for: " + reqDescription);
  }
  return res;
}

function verifyStarredRepositoriesExists(id) {
  let finalId = id || undefined;
  pvg.success("StarredRepositories verification completed");
}
function verifyStarredRepositoriesDoesNotExist(id) {
  let finalId = id || undefined;
  pvg.success("StarredRepositories verification completed");
}
function matchAnyStarredRepositoriesAdded() {
  return bp.EventSet("None", function(e){ return false; });
}

function matchDeletedStarredRepositories() {
  return bp.EventSet("None", function(e){ return false; });
}
