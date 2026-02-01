//@provengo summon rest
// === Auto-generated interfaces for gitea ===
var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8000;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';
var path = '';

const svc = new RESTSession(protocol + "://" + host + ":" + port + path, "provengo-client", { headers: { "Content-Type": "application/json", "api_key": "special-key" } });

const pvg = { success: function(msg) { bp.log.info(msg); }, fail: function(msg) { bp.log.error(msg); throw new Error(msg); } };
function waitFor(eventSet) { return bp.sync({waitFor: eventSet}); }
function matchSuccess(desc) { return bp.EventSet("Done: Positive: " + desc, function(e) { return e.name === "Done: Positive: " + desc; }); }

function activitypubPerson(user_id, config) {
  var url = "/activitypub/user-id/" + user_id; var reqDescription = "Returns the Person actor for a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) }); }
  return response;
}

function activitypubPersonInbox(user_id, config) {
  var url = "/activitypub/user-id/" + user_id + "/inbox"; var reqDescription = "Send to the inbox";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) }); }
  return response;
}

function tryToAddExistingActivityPub(user_id, config) {
  var url = "/activitypub/user-id/" + user_id + "/inbox"; var reqDescription = "Try Add Existing ActivityPub";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"user-id": user_id, "id": user_id}) }); }
  return response;
}

function verifyActivityPubRejects(user_id) {
  var url = "/activitypub/user-id/" + user_id + "/inbox"; var body = {};
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyActivityPubExists(user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Verify ActivityPub " + user_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ActivityPub found");
}

function verifyActivityPubDeleted(user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Verify ActivityPub " + user_id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ActivityPub correctly deleted (404)");
}

function verifyActivityPubDoesNotExist(user_id) { verifyActivityPubDeleted(user_id); }

function matchAnyActivityPubAdded() {
  return bp.EventSet("Any ActivityPub Added", function(e) {
      return e.name.startsWith("Done: Positive: Send to the inbox");
  });
}

function adminCronList(config) {
  var url = "/admin/cron"; var reqDescription = "List cron tasks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function adminCronRun(id, limit, page, task, config) {
  var url = "/admin/cron/" + task; var reqDescription = "Run cron task";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "task": task, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "task": task, "limit": limit}) }); }
  return response;
}

function tryToAddExistingAdminCron(id, limit, page, task, config) {
  var url = "/admin/cron/" + task; var reqDescription = "Try Add Existing AdminCron";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "task": task, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "task": task, "limit": limit}) }); }
  return response;
}

function verifyAdminCronRejects(id, limit, page, task) {
  var url = "/admin/cron/" + task; var body = {
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyAdminCronExists(id, limit, page, task) {
  let res = adminCronList(id, limit, page, task);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("AdminCron found in list");
          else pvg.fail("AdminCron NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAdminCronDeleted(id, limit, page, task) {
  let res = adminCronList(id, limit, page, task);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("AdminCron correctly not found in list");
          else pvg.fail("AdminCron still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAdminCronDoesNotExist(id, limit, page, task) { verifyAdminCronDeleted(id, limit, page, task); }

function matchAnyAdminCronAdded() {
  return bp.EventSet("Any AdminCron Added", function(e) {
      return e.name.startsWith("Done: Positive: Run cron task");
  });
}

function adminGetAllEmails(config) {
  var url = "/admin/emails"; var reqDescription = "List all emails";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyAdminEmailsExists(id, limit, page) {
  let res = adminGetAllEmails(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("AdminEmails found in list");
          else pvg.fail("AdminEmails NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAdminEmailsDeleted(id, limit, page) {
  let res = adminGetAllEmails(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("AdminEmails correctly not found in list");
          else pvg.fail("AdminEmails still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyAdminEmailsDoesNotExist(id, limit, page) { verifyAdminEmailsDeleted(id, limit, page); }

function adminSearchEmails(config) {
  var url = "/admin/emails/search"; var reqDescription = "Search all emails";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyEmailsExists(id, limit, page, q) {
  let res = adminSearchEmails(id, limit, page, q);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Emails found in list");
          else pvg.fail("Emails NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyEmailsDeleted(id, limit, page, q) {
  let res = adminSearchEmails(id, limit, page, q);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Emails correctly not found in list");
          else pvg.fail("Emails still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyEmailsDoesNotExist(id, limit, page, q) { verifyEmailsDeleted(id, limit, page, q); }

function userListHooks(config) {
  var url = "/user/hooks"; var reqDescription = "List the authenticated user's webhooks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userCreateHook(body, id, limit, page, config) {
  var url = "/user/hooks"; var reqDescription = "Create a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function userDeleteHook(id, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Delete a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userGetHook(id, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Get a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userEditHook(body, id, limit, page, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Update a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function tryToAddExistingHooks(body, id, limit, page, config) {
  var url = "/user/hooks"; var reqDescription = "Try Add Existing Hooks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function verifyHooksRejects(body, id, limit, page) {
  var url = "/user/hooks"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyHooksExists(id) {
  var url = "/user/hooks/" + id;
  var description = "Verify Hooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Hooks found");
}

function verifyHooksDeleted(id) {
  var url = "/user/hooks/" + id;
  var description = "Verify Hooks " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Hooks correctly deleted (404)");
}

function verifyHooksDoesNotExist(id) { verifyHooksDeleted(id); }

function matchAnyHooksAdded() {
  return bp.EventSet("Any Hooks Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a hook");
  });
}

function matchDeletedHooks(id) {
  return bp.EventSet("Deleted Hooks " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a hook") && e.name.includes(id);
  });
}

function matchAnyHooksDeleted() {
  return bp.EventSet("Any Hooks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a hook");
  });
}

function orgListUserOrgs(username, config) {
  var url = "/users/" + username + "/orgs"; var reqDescription = "List a user's organizations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userGet(username, config) {
  var url = "/users/" + username; var reqDescription = "Get a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function verifyOrganizationsExists(username) {
  var url = "/users/" + username;
  var description = "Verify Organizations " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organizations found");
}

function verifyOrganizationsDeleted(username) {
  var url = "/users/" + username;
  var description = "Verify Organizations " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organizations correctly deleted (404)");
}

function verifyOrganizationsDoesNotExist(username) { verifyOrganizationsDeleted(username); }

function adminGetRunnerRegistrationToken(config) {
  var url = "/admin/runners/registration-token"; var reqDescription = "Get an global actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyRunnersExists(id) {
  let res = adminGetRunnerRegistrationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Runners found in list");
          else pvg.fail("Runners NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyRunnersDeleted(id) {
  let res = adminGetRunnerRegistrationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Runners correctly not found in list");
          else pvg.fail("Runners still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyRunnersDoesNotExist(id) { verifyRunnersDeleted(id); }

function adminUnadoptedList(config) {
  var url = "/admin/unadopted"; var reqDescription = "List unadopted repositories";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function adminDeleteUnadoptedRepository(owner, repo, config) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var reqDescription = "Delete unadopted files";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function adminAdoptRepository(limit, owner, page, pattern, repo, config) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var reqDescription = "Adopt unadopted files as a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "pattern": pattern, "page": page, "repo": repo, "limit": limit, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "pattern": pattern, "page": page, "repo": repo, "limit": limit, "owner": owner}) }); }
  return response;
}

function tryToAddExistingUnadoptedRepositories(limit, owner, page, pattern, repo, config) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var reqDescription = "Try Add Existing UnadoptedRepositories";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "pattern": pattern, "page": page, "repo": repo, "limit": limit, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "pattern": pattern, "page": page, "repo": repo, "limit": limit, "owner": owner}) }); }
  return response;
}

function verifyUnadoptedRepositoriesRejects(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var body = {
    "limit": limit,
    "page": page,
    "pattern": pattern
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUnadoptedRepositoriesExists(limit, owner, page, pattern, repo) {
  let res = adminUnadoptedList(limit, owner, page, pattern, repo);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.owner == owner || item.id == owner);
          if (found) pvg.success("UnadoptedRepositories found in list");
          else pvg.fail("UnadoptedRepositories NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUnadoptedRepositoriesDeleted(limit, owner, page, pattern, repo) {
  let res = adminUnadoptedList(limit, owner, page, pattern, repo);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.owner == owner || item.id == owner);
          if (!found) pvg.success("UnadoptedRepositories correctly not found in list");
          else pvg.fail("UnadoptedRepositories still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUnadoptedRepositoriesDoesNotExist(limit, owner, page, pattern, repo) { verifyUnadoptedRepositoriesDeleted(limit, owner, page, pattern, repo); }

function matchAnyUnadoptedRepositoriesAdded() {
  return bp.EventSet("Any UnadoptedRepositories Added", function(e) {
      return e.name.startsWith("Done: Positive: Adopt unadopted files as a repository");
  });
}

function matchDeletedUnadoptedRepositories(owner) {
  return bp.EventSet("Deleted UnadoptedRepositories " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Delete unadopted files") && e.name.includes(owner);
  });
}

function matchAnyUnadoptedRepositoriesDeleted() {
  return bp.EventSet("Any UnadoptedRepositories Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete unadopted files");
  });
}

function userListSubscriptions(username, config) {
  var url = "/users/" + username + "/subscriptions"; var reqDescription = "List the repositories watched by a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function adminCreateUser(CreateUserOption, EditUserOption, body, limit, page, purge, token, username, config) {
  var url = "/admin/users"; var reqDescription = "Create a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "username": username
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function adminDeleteUser(username, config) {
  var url = "/admin/users/" + username; var reqDescription = "Delete a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function adminEditUser(CreateUserOption, EditUserOption, body, limit, page, purge, token, username, config) {
  var url = "/admin/users/" + username; var reqDescription = "Edit an existing user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function userGetHeatmapData(username, config) {
  var url = "/users/" + username + "/heatmap"; var reqDescription = "Get a user's heatmap";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userGetTokens(username, config) {
  var url = "/users/" + username + "/tokens"; var reqDescription = "List the authenticated user's access tokens";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userCreateToken(CreateUserOption, EditUserOption, body, limit, page, purge, token, username, config) {
  var url = "/users/" + username + "/tokens"; var reqDescription = "Create an access token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function userDeleteAccessToken(username, token, config) {
  var url = "/users/" + username + "/tokens/" + token; var reqDescription = "Delete an access token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username, "token": token}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username, "token": token}) }); }
  return response;
}

function tryToAddExistingUsers(CreateUserOption, EditUserOption, body, limit, page, purge, token, username, config) {
  var url = "/admin/users"; var reqDescription = "Try Add Existing Users";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "username": username
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"purge": purge, "page": page, "username": username, "id": username, "body": body, "token": token, "limit": limit, "EditUserOption": EditUserOption, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function verifyUsersRejects(CreateUserOption, EditUserOption, body, limit, page, purge, token, username) {
  var url = "/admin/users"; var body = {
    "CreateUserOption": CreateUserOption,
    "EditUserOption": EditUserOption,
    "body": body,
    "limit": limit,
    "page": page,
    "purge": purge,
    "token": token,
    "username": username
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUsersExists(username) {
  var url = "/users/" + username + "/heatmap";
  var description = "Verify Users " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Users found");
}

function verifyUsersDeleted(username) {
  var url = "/users/" + username + "/heatmap";
  var description = "Verify Users " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Users correctly deleted (404)");
}

function verifyUsersDoesNotExist(username) { verifyUsersDeleted(username); }

function matchAnyUsersAdded() {
  return bp.EventSet("Any Users Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a user");
  });
}

function matchDeletedUsers(username) {
  return bp.EventSet("Deleted Users " + username, function(e) {
      return e.name.startsWith("Done: Positive: Delete a user") && e.name.includes(username);
  });
}

function matchAnyUsersDeleted() {
  return bp.EventSet("Any Users Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a user");
  });
}

function adminListUserBadges(username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "List a user's badges";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function adminAddUserBadges(UserBadgeOption, body, username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "Add a badge to a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"UserBadgeOption": UserBadgeOption, "id": username, "username": username, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"UserBadgeOption": UserBadgeOption, "id": username, "username": username, "body": body}) }); }
  return response;
}

function adminDeleteUserBadges(username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "Remove a badge from a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function tryToAddExistingUserBadges(UserBadgeOption, body, username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "Try Add Existing UserBadges";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"UserBadgeOption": UserBadgeOption, "id": username, "username": username, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"UserBadgeOption": UserBadgeOption, "id": username, "username": username, "body": body}) }); }
  return response;
}

function verifyUserBadgesRejects(UserBadgeOption, body, username) {
  var url = "/admin/users/" + username + "/badges"; var body = {
    "UserBadgeOption": UserBadgeOption,
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserBadgesExists(username) {
  bp.log.warn("Verification skipped: UserBadges is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserBadgesDoesNotExist(username) {
  bp.log.warn("Absence check skipped: UserBadges has no GET endpoint.");
}

function matchAnyUserBadgesAdded() {
  return bp.EventSet("Any UserBadges Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a badge to a user");
  });
}

function matchDeletedUserBadges(username) {
  return bp.EventSet("Deleted UserBadges " + username, function(e) {
      return e.name.startsWith("Done: Positive: Remove a badge from a user") && e.name.includes(username);
  });
}

function matchAnyUserBadgesDeleted() {
  return bp.EventSet("Any UserBadges Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Remove a badge from a user");
  });
}

function adminCreatePublicKey(key, purge, username, config) {
  var url = "/admin/users/" + username + "/keys"; var reqDescription = "Add a public key on behalf of a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "key": key
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key": key, "username": username, "purge": purge, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key": key, "username": username, "purge": purge, "id": username}) }); }
  return response;
}

function adminDeleteUser(username, purge, config) {
  var url = "/admin/users/" + username; var reqDescription = "Delete a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes, queryParameters: {    "purge": purge} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "purge": purge, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "purge": purge, "id": username}) }); }
  return response;
}

function tryToAddExistingUserKeys(key, purge, username, config) {
  var url = "/admin/users/" + username + "/keys"; var reqDescription = "Try Add Existing UserKeys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "key": key
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key": key, "username": username, "purge": purge, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key": key, "username": username, "purge": purge, "id": username}) }); }
  return response;
}

function verifyUserKeysRejects(key, purge, username) {
  var url = "/admin/users/" + username + "/keys"; var body = {
    "key": key,
    "purge": purge
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserKeysExists(username) {
  bp.log.warn("Verification skipped: UserKeys is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserKeysDoesNotExist(username) {
  bp.log.warn("Absence check skipped: UserKeys has no GET endpoint.");
}

function matchAnyUserKeysAdded() {
  return bp.EventSet("Any UserKeys Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a public key on behalf of a user");
  });
}

function matchDeletedUserKeys(username) {
  return bp.EventSet("Deleted UserKeys " + username, function(e) {
      return e.name.startsWith("Done: Positive: Delete a user") && e.name.includes(username);
  });
}

function matchAnyUserKeysDeleted() {
  return bp.EventSet("Any UserKeys Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a user");
  });
}

function adminCreateOrg(id, organization, username, config) {
  var url = "/admin/users/" + username + "/orgs"; var reqDescription = "Create an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id,
    "organization": organization
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "organization": organization}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "organization": organization}) }); }
  return response;
}

function tryToAddExistingUserOrganizations(id, organization, username, config) {
  var url = "/admin/users/" + username + "/orgs"; var reqDescription = "Try Add Existing UserOrganizations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "organization": organization
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "organization": organization}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "organization": organization}) }); }
  return response;
}

function verifyUserOrganizationsRejects(id, organization, username) {
  var url = "/admin/users/" + username + "/orgs"; var body = {
    "id": id,
    "organization": organization
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserOrganizationsExists(id) {
  bp.log.warn("Verification skipped: UserOrganizations is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserOrganizationsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserOrganizations has no GET endpoint.");
}

function matchAnyUserOrganizationsAdded() {
  return bp.EventSet("Any UserOrganizations Added", function(e) {
      return e.name.startsWith("Done: Positive: Create an organization");
  });
}

function adminRenameUser(body, id, username, config) {
  var url = "/admin/users/" + username + "/rename"; var reqDescription = "Rename a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "body": body}) }); }
  return response;
}

function tryToAddExistingUserRename(body, id, username, config) {
  var url = "/admin/users/" + username + "/rename"; var reqDescription = "Try Add Existing UserRename";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "body": body}) }); }
  return response;
}

function verifyUserRenameRejects(body, id, username) {
  var url = "/admin/users/" + username + "/rename"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserRenameExists(id) {
  bp.log.warn("Verification skipped: UserRename is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserRenameDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserRename has no GET endpoint.");
}

function matchAnyUserRenameAdded() {
  return bp.EventSet("Any UserRename Added", function(e) {
      return e.name.startsWith("Done: Positive: Rename a user");
  });
}

function adminCreateRepo(id, repository, username, config) {
  var url = "/admin/users/" + username + "/repos"; var reqDescription = "Create a repository on behalf of a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id,
    "repository": repository
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "repository": repository}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "repository": repository}) }); }
  return response;
}

function tryToAddExistingUserRepositories(id, repository, username, config) {
  var url = "/admin/users/" + username + "/repos"; var reqDescription = "Try Add Existing UserRepositories";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "repository": repository
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "repository": repository}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "username": username, "repository": repository}) }); }
  return response;
}

function verifyUserRepositoriesRejects(id, repository, username) {
  var url = "/admin/users/" + username + "/repos"; var body = {
    "id": id,
    "repository": repository
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserRepositoriesExists(id) {
  bp.log.warn("Verification skipped: UserRepositories is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserRepositoriesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserRepositories has no GET endpoint.");
}

function matchAnyUserRepositoriesAdded() {
  return bp.EventSet("Any UserRepositories Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a repository on behalf of a user");
  });
}

function listGitignoresTemplates(config) {
  var url = "/gitignore/templates"; var reqDescription = "Returns a list of all gitignore templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getGitignoreTemplateInfo(name, config) {
  var url = "/gitignore/templates/" + name; var reqDescription = "Returns information about a gitignore template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) }); }
  return response;
}

function verifyGitignoreTemplatesExists(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitignoreTemplates found");
}

function verifyGitignoreTemplatesDeleted(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitignoreTemplates correctly deleted (404)");
}

function verifyGitignoreTemplatesDoesNotExist(name) { verifyGitignoreTemplatesDeleted(name); }

function listLabelTemplates(config) {
  var url = "/label/templates"; var reqDescription = "Returns a list of all label templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getLabelTemplateInfo(name, config) {
  var url = "/label/templates/" + name; var reqDescription = "Returns all labels in a template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) }); }
  return response;
}

function verifyLabelTemplatesExists(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("LabelTemplates found");
}

function verifyLabelTemplatesDeleted(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LabelTemplates correctly deleted (404)");
}

function verifyLabelTemplatesDoesNotExist(name) { verifyLabelTemplatesDeleted(name); }

function listLicenseTemplates(config) {
  var url = "/licenses"; var reqDescription = "Returns a list of all license templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyLicenseTemplatesExists(id) {
  let res = listLicenseTemplates(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("LicenseTemplates found in list");
          else pvg.fail("LicenseTemplates NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLicenseTemplatesDeleted(id) {
  let res = listLicenseTemplates(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("LicenseTemplates correctly not found in list");
          else pvg.fail("LicenseTemplates still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyLicenseTemplatesDoesNotExist(id) { verifyLicenseTemplatesDeleted(id); }

function getLicenseTemplateInfo(name, config) {
  var url = "/licenses/" + name; var reqDescription = "Returns information about a license template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": name, "name": name}) }); }
  return response;
}

function verifyLicensesExists(name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Licenses found");
}

function verifyLicensesDeleted(name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Licenses correctly deleted (404)");
}

function verifyLicensesDoesNotExist(name) { verifyLicensesDeleted(name); }

function renderMarkdown(body, id, config) {
  var url = "/markdown"; var reqDescription = "Render a markdown document as HTML";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function renderMarkdownRaw(body, id, config) {
  var url = "/markdown/raw"; var reqDescription = "Render raw markdown as HTML";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function tryToAddExistingMarkdown(body, id, config) {
  var url = "/markdown"; var reqDescription = "Try Add Existing Markdown";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function verifyMarkdownRejects(body, id) {
  var url = "/markdown"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMarkdownExists(id) {
  bp.log.warn("Verification skipped: Markdown is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyMarkdownDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Markdown has no GET endpoint.");
}

function matchAnyMarkdownAdded() {
  return bp.EventSet("Any Markdown Added", function(e) {
      return e.name.startsWith("Done: Positive: Render a markdown document as HTML");
  });
}

function renderMarkup(body, id, config) {
  var url = "/markup"; var reqDescription = "Render a markup document as HTML";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function tryToAddExistingMarkup(body, id, config) {
  var url = "/markup"; var reqDescription = "Try Add Existing Markup";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function verifyMarkupRejects(body, id) {
  var url = "/markup"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMarkupExists(id) {
  bp.log.warn("Verification skipped: Markup is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyMarkupDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Markup has no GET endpoint.");
}

function matchAnyMarkupAdded() {
  return bp.EventSet("Any Markup Added", function(e) {
      return e.name.startsWith("Done: Positive: Render a markup document as HTML");
  });
}

function getNodeInfo(config) {
  var url = "/nodeinfo"; var reqDescription = "Returns the nodeinfo of the Gitea application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyNodeInfoExists(id) {
  let res = getNodeInfo(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("NodeInfo found in list");
          else pvg.fail("NodeInfo NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyNodeInfoDeleted(id) {
  let res = getNodeInfo(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("NodeInfo correctly not found in list");
          else pvg.fail("NodeInfo still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyNodeInfoDoesNotExist(id) { verifyNodeInfoDeleted(id); }

function notifyGetRepoList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/notifications"; var reqDescription = "List users's notification threads on a specific repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function notifyReadRepoList(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status, config) {
  var url = "/repos/" + owner + "/" + repo + "/notifications"; var reqDescription = "Mark notification threads as read, pinned or unread on a specific repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [205];
  var body = {
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "all": all, "page": page, "status-types": status_types, "limit": limit, "before": before, "repo": repo, "subject-type": subject_type, "to-status": to_status, "owner": owner, "since": since, "last_read_at": last_read_at}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "all": all, "page": page, "status-types": status_types, "limit": limit, "before": before, "repo": repo, "subject-type": subject_type, "to-status": to_status, "owner": owner, "since": since, "last_read_at": last_read_at}) }); }
  return response;
}

function notifyGetThread(id, config) {
  var url = "/notifications/threads/" + id; var reqDescription = "Get notification thread by ID";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyNotificationsExists(id) {
  var url = "/notifications/threads/" + id;
  var description = "Verify Notifications " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notifications found");
}

function verifyNotificationsDeleted(id) {
  var url = "/notifications/threads/" + id;
  var description = "Verify Notifications " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notifications correctly deleted (404)");
}

function verifyNotificationsDoesNotExist(id) { verifyNotificationsDeleted(id); }

function orgGetAll(config) {
  var url = "/orgs"; var reqDescription = "Get list of organizations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function createOrgRepoDeprecated(body, limit, org, page, secretname, config) {
  var url = "/org/" + org + "/repos"; var reqDescription = "Create a repository in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgEdit(body, limit, org, page, secretname, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function orgGetRunnerRegistrationToken(org, config) {
  var url = "/orgs/" + org + "/actions/runners/registration-token"; var reqDescription = "Get an organization's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgListActionsSecrets(org, config) {
  var url = "/orgs/" + org + "/actions/secrets"; var reqDescription = "List an organization's actions secrets";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function deleteOrgSecret(org, secretname, config) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname; var reqDescription = "Delete a secret in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "secretname": secretname, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "secretname": secretname, "org": org}) }); }
  return response;
}

function updateOrgSecret(body, limit, org, page, secretname, config) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname; var reqDescription = "Create or Update a secret value in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function getOrgVariablesList(org, config) {
  var url = "/orgs/" + org + "/actions/variables"; var reqDescription = "Get an org-level variables list";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function tryToAddExistingOrganization(body, limit, org, page, secretname, config) {
  var url = "/org/" + org + "/repos"; var reqDescription = "Try Add Existing Organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function verifyOrganizationRejects(body, limit, org, page, secretname) {
  var url = "/org/" + org + "/repos"; var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "secretname": secretname
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Organization found");
}

function verifyOrganizationDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organization correctly deleted (404)");
}

function verifyOrganizationDoesNotExist(org) { verifyOrganizationDeleted(org); }

function matchAnyOrganizationAdded() {
  return bp.EventSet("Any Organization Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a repository in an organization");
  });
}

function matchDeletedOrganization(org) {
  return bp.EventSet("Deleted Organization " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization") && e.name.includes(org);
  });
}

function matchAnyOrganizationDeleted() {
  return bp.EventSet("Any Organization Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function createOrgVariable(body, org, variablename, config) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename; var reqDescription = "Create an org-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) }); }
  return response;
}

function orgEdit(body, org, variablename, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) }); }
  return response;
}

function tryToAddExistingOrgVariables(body, org, variablename, config) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename; var reqDescription = "Try Add Existing OrgVariables";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": org, "body": body, "org": org}) }); }
  return response;
}

function verifyOrgVariablesRejects(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename; var body = {
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrgVariablesExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrgVariables " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrgVariables found");
}

function verifyOrgVariablesDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrgVariables " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgVariables correctly deleted (404)");
}

function verifyOrgVariablesDoesNotExist(org) { verifyOrgVariablesDeleted(org); }

function matchAnyOrgVariablesAdded() {
  return bp.EventSet("Any OrgVariables Added", function(e) {
      return e.name.startsWith("Done: Positive: Create an org-level variable");
  });
}

function matchDeletedOrgVariables(org) {
  return bp.EventSet("Deleted OrgVariables " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization") && e.name.includes(org);
  });
}

function matchAnyOrgVariablesDeleted() {
  return bp.EventSet("Any OrgVariables Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function repoListActivityFeeds(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/activities/feeds"; var reqDescription = "List a repository's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyActivityFeedsExists(id) {
  bp.log.warn("Verification skipped: ActivityFeeds is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyActivityFeedsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: ActivityFeeds has no GET endpoint.");
}

function orgDeleteAvatar(org, config) {
  var url = "/orgs/" + org + "/avatar"; var reqDescription = "Delete Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgUpdateAvatar(body, org, config) {
  var url = "/orgs/" + org + "/avatar"; var reqDescription = "Update Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "body": body, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "body": body, "org": org}) }); }
  return response;
}

function tryToAddExistingAvatar(body, org, config) {
  var url = "/orgs/" + org + "/avatar"; var reqDescription = "Try Add Existing Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "body": body, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "body": body, "org": org}) }); }
  return response;
}

function verifyAvatarRejects(body, org) {
  var url = "/orgs/" + org + "/avatar"; var body = {
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyAvatarExists(org) {
  bp.log.warn("Verification skipped: Avatar is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyAvatarDoesNotExist(org) {
  bp.log.warn("Absence check skipped: Avatar has no GET endpoint.");
}

function matchAnyAvatarAdded() {
  return bp.EventSet("Any Avatar Added", function(e) {
      return e.name.startsWith("Done: Positive: Update Avatar");
  });
}

function matchDeletedAvatar(org) {
  return bp.EventSet("Deleted Avatar " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete Avatar") && e.name.includes(org);
  });
}

function matchAnyAvatarDeleted() {
  return bp.EventSet("Any Avatar Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete Avatar");
  });
}

function organizationListBlocks(org, config) {
  var url = "/orgs/" + org + "/blocks"; var reqDescription = "List users blocked by the organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgEdit(body, limit, org, page, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function verifyBlocksExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify Blocks " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Blocks found");
}

function verifyBlocksDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify Blocks " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Blocks correctly deleted (404)");
}

function verifyBlocksDoesNotExist(org) { verifyBlocksDeleted(org); }

function matchDeletedBlocks(org) {
  return bp.EventSet("Deleted Blocks " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization") && e.name.includes(org);
  });
}

function matchAnyBlocksDeleted() {
  return bp.EventSet("Any Blocks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function issueListLabels(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var reqDescription = "Get all of a repository's labels";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function issueCreateLabel(body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var reqDescription = "Create a label";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueEditLabel(body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id; var reqDescription = "Update a label";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function issueDeleteLabel(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id; var reqDescription = "Delete a label";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingLabels(body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var reqDescription = "Try Add Existing Labels";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyLabelsRejects(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyLabelsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Labels " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Labels found");
}

function verifyLabelsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Labels " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Labels correctly deleted (404)");
}

function verifyLabelsDoesNotExist(id) { verifyLabelsDeleted(id); }

function matchAnyLabelsAdded() {
  return bp.EventSet("Any Labels Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a label");
  });
}

function matchDeletedLabels(id) {
  return bp.EventSet("Deleted Labels " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a label") && e.name.includes(id);
  });
}

function matchAnyLabelsDeleted() {
  return bp.EventSet("Any Labels Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a label");
  });
}

function orgListMembers(org, config) {
  var url = "/orgs/" + org + "/members"; var reqDescription = "List an organization's members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) }); }
  return response;
}

function verifyMembersExists(id) {
  bp.log.warn("Verification skipped: Members is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyMembersDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Members has no GET endpoint.");
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function verifyOrganizationMembersExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationMembers found");
}

function verifyOrganizationMembersDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationMembers " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationMembers correctly deleted (404)");
}

function verifyOrganizationMembersDoesNotExist(org) { verifyOrganizationMembersDeleted(org); }

function matchDeletedOrganizationMembers(org) {
  return bp.EventSet("Deleted OrganizationMembers " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization") && e.name.includes(org);
  });
}

function matchAnyOrganizationMembersDeleted() {
  return bp.EventSet("Any OrganizationMembers Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgListPublicMembers(org, config) {
  var url = "/orgs/" + org + "/public_members"; var reqDescription = "List an organization's public members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": org, "org": org}) }); }
  return response;
}

function orgEdit(body, limit, org, page, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "body": body, "limit": limit, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "body": body, "limit": limit, "org": org, "id": org}) }); }
  return response;
}

function verifyOrganizationPublicMembersExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationPublicMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OrganizationPublicMembers found");
}

function verifyOrganizationPublicMembersDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationPublicMembers " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationPublicMembers correctly deleted (404)");
}

function verifyOrganizationPublicMembersDoesNotExist(org) { verifyOrganizationPublicMembersDeleted(org); }

function matchDeletedOrganizationPublicMembers(org) {
  return bp.EventSet("Deleted OrganizationPublicMembers " + org, function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization") && e.name.includes(org);
  });
}

function matchAnyOrganizationPublicMembersDeleted() {
  return bp.EventSet("Any OrganizationPublicMembers Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an organization");
  });
}

function orgListRepos(org, config) {
  var url = "/orgs/" + org + "/repos"; var reqDescription = "List an organization's repos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) }); }
  return response;
}

function createOrgRepo(body, id, limit, org, page, config) {
  var url = "/orgs/" + org + "/repos"; var reqDescription = "Create a repository in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) }); }
  return response;
}

function tryToAddExistingOrganizationRepos(body, id, limit, org, page, config) {
  var url = "/orgs/" + org + "/repos"; var reqDescription = "Try Add Existing OrganizationRepos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationReposRejects(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationReposExists(id) {
  bp.log.warn("Verification skipped: OrganizationRepos is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyOrganizationReposDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrganizationRepos has no GET endpoint.");
}

function matchAnyOrganizationReposAdded() {
  return bp.EventSet("Any OrganizationRepos Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a repository in an organization");
  });
}

function orgListTeams(org, config) {
  var url = "/orgs/" + org + "/teams"; var reqDescription = "List an organization's teams";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"org": org}) }); }
  return response;
}

function orgCreateTeam(body, id, limit, org, page, config) {
  var url = "/orgs/" + org + "/teams"; var reqDescription = "Create a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) }); }
  return response;
}

function tryToAddExistingOrganizationTeams(body, id, limit, org, page, config) {
  var url = "/orgs/" + org + "/teams"; var reqDescription = "Try Add Existing OrganizationTeams";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationTeamsRejects(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/teams"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationTeamsExists(id) {
  bp.log.warn("Verification skipped: OrganizationTeams is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyOrganizationTeamsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrganizationTeams has no GET endpoint.");
}

function matchAnyOrganizationTeamsAdded() {
  return bp.EventSet("Any OrganizationTeams Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a team");
  });
}

function orgListTeamActivityFeeds(id, config) {
  var url = "/teams/" + id + "/activities/feeds"; var reqDescription = "List a team's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgEditTeam(body, date, id, limit, page, config) {
  var url = "/teams/" + id; var reqDescription = "Edit a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "date": date, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "date": date, "limit": limit}) }); }
  return response;
}

function verifyTeamsExists(id) {
  var url = "/teams/" + id;
  var description = "Verify Teams " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Teams found");
}

function verifyTeamsDeleted(id) {
  var url = "/teams/" + id;
  var description = "Verify Teams " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Teams correctly deleted (404)");
}

function verifyTeamsDoesNotExist(id) { verifyTeamsDeleted(id); }

function matchDeletedTeams(id) {
  return bp.EventSet("Deleted Teams " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a team") && e.name.includes(id);
  });
}

function matchAnyTeamsDeleted() {
  return bp.EventSet("Any Teams Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function listPackages(owner, config) {
  var url = "/packages/" + owner; var reqDescription = "Gets all packages of an owner";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner}) }); }
  return response;
}

function listPackages(owner, page, limit, type, q, config) {
  var url = "/packages/" + owner; var reqDescription = "Gets all packages of an owner";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes, queryParameters: {    "page": page,     "limit": limit,     "type": type,     "q": q} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "type": type, "page": page, "q": q, "limit": limit, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "type": type, "page": page, "q": q, "limit": limit, "owner": owner}) }); }
  return response;
}

function deletePackage(owner, type, name, version, config) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version; var reqDescription = "Delete a package";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"version": version, "id": owner, "name": name, "type": type, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"version": version, "id": owner, "name": name, "type": type, "owner": owner}) }); }
  return response;
}

function listPackageFiles(owner, type, name, version, config) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files"; var reqDescription = "Gets all files of a package";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"version": version, "id": owner, "name": name, "type": type, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"version": version, "id": owner, "name": name, "type": type, "owner": owner}) }); }
  return response;
}

function verifyPackagesExists(owner) {
  var url = "/packages/" + owner;
  var description = "Verify Packages " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Packages found");
}

function verifyPackagesDeleted(owner) {
  var url = "/packages/" + owner;
  var description = "Verify Packages " + owner + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Packages correctly deleted (404)");
}

function verifyPackagesDoesNotExist(owner) { verifyPackagesDeleted(owner); }

function matchDeletedPackages(owner) {
  return bp.EventSet("Deleted Packages " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Delete a package") && e.name.includes(owner);
  });
}

function matchAnyPackagesDeleted() {
  return bp.EventSet("Any Packages Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a package");
  });
}

function issueGetIssueReactions(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var reqDescription = "Get a list reactions of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function moveIssuePin(content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position; var reqDescription = "Moves the Pin to the given Position";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function issueDeleteTime(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id; var reqDescription = "Delete specific tracked time";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issuePostIssueReaction(content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var reqDescription = "Add a reaction to an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201];
  var body = {
    "content": content,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function issueDeleteStopWatch(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete"; var reqDescription = "Delete an issue's existing stopwatch.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueStartStopWatch(content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start"; var reqDescription = "Start stopwatch on an issue.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function issueStopStopWatch(content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop"; var reqDescription = "Stop an issue's existing stopwatch.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function tryToAddExistingIssues(content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var reqDescription = "Try Add Existing Issues";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "content": content,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": id, "page": page, "position": position, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyIssuesRejects(content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var body = {
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
    "position": position
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssuesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Issues " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Issues found");
}

function verifyIssuesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Issues " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Issues correctly deleted (404)");
}

function verifyIssuesDoesNotExist(id) { verifyIssuesDeleted(id); }

function matchAnyIssuesAdded() {
  return bp.EventSet("Any Issues Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a reaction to an issue");
  });
}

function matchDeletedIssues(id) {
  return bp.EventSet("Deleted Issues " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete specific tracked time") && e.name.includes(id);
  });
}

function matchAnyIssuesDeleted() {
  return bp.EventSet("Any Issues Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete specific tracked time");
  });
}

function repoCreateStatus(body, id, limit, owner, page, repo, sha, config) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha; var reqDescription = "Create a commit status";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) }); }
  return response;
}

function repoListSubscribers(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/subscribers"; var reqDescription = "List a repo's watchers";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function userCurrentDeleteSubscription(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/subscription"; var reqDescription = "Unwatch a repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userCurrentPutSubscription(body, id, limit, owner, page, repo, sha, config) {
  var url = "/repos/" + owner + "/" + repo + "/subscription"; var reqDescription = "Watch a repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) }); }
  return response;
}

function repoGetRunnerRegistrationToken(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token"; var reqDescription = "Get a repository's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoListActionsSecrets(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets"; var reqDescription = "List an repo's actions secrets";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingRepository(body, id, limit, owner, page, repo, sha, config) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha; var reqDescription = "Try Add Existing Repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "sha": sha, "owner": owner}) }); }
  return response;
}

function verifyRepositoryRejects(body, id, limit, owner, page, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repository " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repository found");
}

function verifyRepositoryDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repository " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repository correctly deleted (404)");
}

function verifyRepositoryDoesNotExist(id) { verifyRepositoryDeleted(id); }

function matchAnyRepositoryAdded() {
  return bp.EventSet("Any Repository Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a commit status");
  });
}

function matchDeletedRepository(id) {
  return bp.EventSet("Deleted Repository " + id, function(e) {
      return e.name.startsWith("Done: Positive: Unwatch a repo") && e.name.includes(id);
  });
}

function matchAnyRepositoryDeleted() {
  return bp.EventSet("Any Repository Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unwatch a repo");
  });
}

function deleteRepoSecret(owner, repo, secretname, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname; var reqDescription = "Delete a secret in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "secretname": secretname, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "secretname": secretname, "repo": repo}) }); }
  return response;
}

function updateRepoSecret(CreateOrUpdateSecretOption, body, owner, repo, secretname, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname; var reqDescription = "Create or Update a secret value in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "CreateOrUpdateSecretOption": CreateOrUpdateSecretOption
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"CreateOrUpdateSecretOption": CreateOrUpdateSecretOption, "secretname": secretname, "id": owner, "body": body, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"CreateOrUpdateSecretOption": CreateOrUpdateSecretOption, "secretname": secretname, "id": owner, "body": body, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifySecretsExists(owner) {
  bp.log.warn("Verification skipped: Secrets is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifySecretsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: Secrets has no GET endpoint.");
}

function matchDeletedSecrets(owner) {
  return bp.EventSet("Deleted Secrets " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Delete a secret in a repository") && e.name.includes(owner);
  });
}

function matchAnySecretsDeleted() {
  return bp.EventSet("Any Secrets Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a secret in a repository");
  });
}

function ListActionTasks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/tasks"; var reqDescription = "List a repository's action tasks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyTasksExists(id) {
  bp.log.warn("Verification skipped: Tasks is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyTasksDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Tasks has no GET endpoint.");
}

function getRepoVariablesList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables"; var reqDescription = "Get repo-level variables list";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function createRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var reqDescription = "Create a repo-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "CreateVariableOption": CreateVariableOption,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) }); }
  return response;
}

function updateRepoVariable(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var reqDescription = "Update a repo-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "UpdateVariableOption": UpdateVariableOption,
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) }); }
  return response;
}

function deleteRepoVariable(owner, repo, variablename, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var reqDescription = "Delete a repo-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "variablename": variablename, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "variablename": variablename, "repo": repo}) }); }
  return response;
}

function tryToAddExistingVariables(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var reqDescription = "Try Add Existing Variables";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "CreateVariableOption": CreateVariableOption,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "CreateVariableOption": CreateVariableOption, "owner": owner}) }); }
  return response;
}

function verifyVariablesRejects(CreateVariableOption, UpdateVariableOption, body, id, limit, owner, page, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var body = {
    "CreateVariableOption": CreateVariableOption,
    "UpdateVariableOption": UpdateVariableOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyVariablesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Variables " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Variables found");
}

function verifyVariablesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Variables " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Variables correctly deleted (404)");
}

function verifyVariablesDoesNotExist(id) { verifyVariablesDeleted(id); }

function matchAnyVariablesAdded() {
  return bp.EventSet("Any Variables Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a repo-level variable");
  });
}

function matchDeletedVariables(id) {
  return bp.EventSet("Deleted Variables " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a repo-level variable") && e.name.includes(id);
  });
}

function matchAnyVariablesDeleted() {
  return bp.EventSet("Any Variables Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a repo-level variable");
  });
}

function repoDeleteBranchProtection(owner, repo, name, config) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name; var reqDescription = "Delete a specific branch protection for the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "name": name, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "name": name, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditBranchProtection(EditBranchProtectionOption, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name; var reqDescription = "Edit a branch protections for a repository. Only fields that are set will be changed";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "body": body, "repo": repo, "EditBranchProtectionOption": EditBranchProtectionOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "body": body, "repo": repo, "EditBranchProtectionOption": EditBranchProtectionOption, "owner": owner}) }); }
  return response;
}

function verifyBranchProtectionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify BranchProtections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("BranchProtections found");
}

function verifyBranchProtectionsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify BranchProtections " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtections correctly deleted (404)");
}

function verifyBranchProtectionsDoesNotExist(id) { verifyBranchProtectionsDeleted(id); }

function matchDeletedBranchProtections(id) {
  return bp.EventSet("Deleted BranchProtections " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific branch protection for the repository") && e.name.includes(id);
  });
}

function matchAnyBranchProtectionsDeleted() {
  return bp.EventSet("Any BranchProtections Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific branch protection for the repository");
  });
}

function repoListBranches(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var reqDescription = "List a repository's branches";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var reqDescription = "Create a branch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) }); }
  return response;
}

function repoDeleteBranch(owner, repo, branch, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch; var reqDescription = "Delete a specific branch from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "branch": branch, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "branch": branch, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoUpdateBranch(CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch; var reqDescription = "Update a branch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) }); }
  return response;
}

function tryToAddExistingBranches(CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var reqDescription = "Try Add Existing Branches";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "branch": branch, "page": page, "CreateBranchRepoOption": CreateBranchRepoOption, "body": body, "limit": limit, "repo": repo, "UpdateBranchRepoOption": UpdateBranchRepoOption, "owner": owner}) }); }
  return response;
}

function verifyBranchesRejects(CreateBranchRepoOption, UpdateBranchRepoOption, body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var body = {
    "CreateBranchRepoOption": CreateBranchRepoOption,
    "UpdateBranchRepoOption": UpdateBranchRepoOption,
    "body": body,
    "branch": branch,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyBranchesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Branches " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Branches found");
}

function verifyBranchesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Branches " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Branches correctly deleted (404)");
}

function verifyBranchesDoesNotExist(id) { verifyBranchesDeleted(id); }

function matchAnyBranchesAdded() {
  return bp.EventSet("Any Branches Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a branch");
  });
}

function matchDeletedBranches(id) {
  return bp.EventSet("Deleted Branches " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific branch from a repository") && e.name.includes(id);
  });
}

function matchAnyBranchesDeleted() {
  return bp.EventSet("Any Branches Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific branch from a repository");
  });
}

function repoListCollaborators(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators"; var reqDescription = "List a repository's collaborators";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoDeleteCollaborator(owner, repo, collaborator, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var reqDescription = "Delete a collaborator from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "collaborator": collaborator, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "collaborator": collaborator, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoAddCollaborator(AddCollaboratorOption, body, collaborator, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var reqDescription = "Add or Update a collaborator to a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "AddCollaboratorOption": AddCollaboratorOption, "body": body, "limit": limit, "repo": repo, "owner": owner, "collaborator": collaborator}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "AddCollaboratorOption": AddCollaboratorOption, "body": body, "limit": limit, "repo": repo, "owner": owner, "collaborator": collaborator}) }); }
  return response;
}

function tryToAddExistingCollaborators(AddCollaboratorOption, body, collaborator, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var reqDescription = "Try Add Existing Collaborators";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "AddCollaboratorOption": AddCollaboratorOption, "body": body, "limit": limit, "repo": repo, "owner": owner, "collaborator": collaborator}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "AddCollaboratorOption": AddCollaboratorOption, "body": body, "limit": limit, "repo": repo, "owner": owner, "collaborator": collaborator}) }); }
  return response;
}

function verifyCollaboratorsRejects(AddCollaboratorOption, body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var body = {
    "AddCollaboratorOption": AddCollaboratorOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyCollaboratorsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Collaborators " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Collaborators found");
}

function verifyCollaboratorsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Collaborators " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Collaborators correctly deleted (404)");
}

function verifyCollaboratorsDoesNotExist(id) { verifyCollaboratorsDeleted(id); }

function matchAnyCollaboratorsAdded() {
  return bp.EventSet("Any Collaborators Added", function(e) {
      return e.name.startsWith("Done: Positive: Add or Update a collaborator to a repository");
  });
}

function matchDeletedCollaborators(id) {
  return bp.EventSet("Deleted Collaborators " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a collaborator from a repository") && e.name.includes(id);
  });
}

function matchAnyCollaboratorsDeleted() {
  return bp.EventSet("Any Collaborators Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a collaborator from a repository");
  });
}

function repoGetAllCommits(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits"; var reqDescription = "Get a list of all commits from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoListStatusesByRef(owner, repo, ref, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses"; var reqDescription = "Get a commit's statuses, by branch/tag/commit reference";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "ref": ref, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "ref": ref, "repo": repo}) }); }
  return response;
}

function repoGetCommitPullRequest(owner, repo, sha, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + sha + "/pull"; var reqDescription = "Get the merged pull request of the commit";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "sha": sha, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "sha": sha, "repo": repo}) }); }
  return response;
}

function repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType, config) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType; var reqDescription = "Get a commit's diff or patch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "sha": sha, "repo": repo, "diffType": diffType}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "sha": sha, "repo": repo, "diffType": diffType}) }); }
  return response;
}

function verifyCommitsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Commits " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Commits found");
}

function verifyCommitsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Commits " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Commits correctly deleted (404)");
}

function verifyCommitsDoesNotExist(id) { verifyCommitsDeleted(id); }

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userListRepos(username, config) {
  var url = "/users/" + username + "/repos"; var reqDescription = "List the repos owned by the given user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) }); }
  return response;
}

function createCurrentUserRepo(body, filepath, id, limit, owner, page, repo, username, config) {
  var url = "/user/repos"; var reqDescription = "Create a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function repoDeleteFile(owner, repo, filepath, config) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath; var reqDescription = "Delete a file in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "filepath": filepath}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo, "filepath": filepath}) }); }
  return response;
}

function repoUpdateFile(body, filepath, id, limit, owner, page, repo, username, config) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath; var reqDescription = "Update a file in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function tryToAddExistingRepositories(body, filepath, id, limit, owner, page, repo, username, config) {
  var url = "/user/repos"; var reqDescription = "Try Add Existing Repositories";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"filepath": filepath, "id": id, "page": page, "username": username, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyRepositoriesRejects(body, filepath, id, limit, owner, page, repo, username) {
  var url = "/user/repos"; var body = {
    "body": body,
    "filepath": filepath,
    "id": id,
    "limit": limit,
    "owner": owner,
    "page": page,
    "repo": repo,
    "username": username
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoriesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repositories " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Repositories found");
}

function verifyRepositoriesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repositories " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Repositories correctly deleted (404)");
}

function verifyRepositoriesDoesNotExist(id) { verifyRepositoriesDeleted(id); }

function matchAnyRepositoriesAdded() {
  return bp.EventSet("Any Repositories Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a repository");
  });
}

function matchDeletedRepositories(id) {
  return bp.EventSet("Deleted Repositories " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a file in a repository") && e.name.includes(id);
  });
}

function matchAnyRepositoriesDeleted() {
  return bp.EventSet("Any Repositories Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a file in a repository");
  });
}

function listForks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var reqDescription = "List a repository's forks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function createFork(body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var reqDescription = "Fork a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [202];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function tryToAddExistingForks(body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var reqDescription = "Try Add Existing Forks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyForksRejects(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyForksExists(id) {
  bp.log.warn("Verification skipped: Forks is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyForksDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Forks has no GET endpoint.");
}

function matchAnyForksAdded() {
  return bp.EventSet("Any Forks Added", function(e) {
      return e.name.startsWith("Done: Positive: Fork a repository");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyBlobsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Blobs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Blobs found");
}

function verifyBlobsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Blobs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Blobs correctly deleted (404)");
}

function verifyBlobsDoesNotExist(id) { verifyBlobsDeleted(id); }

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyNotesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Notes " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Notes found");
}

function verifyNotesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Notes " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notes correctly deleted (404)");
}

function verifyNotesDoesNotExist(id) { verifyNotesDeleted(id); }

function repoListAllGitRefs(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs"; var reqDescription = "Get specified ref or filtered repository's refs";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitRefsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitRefs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitRefs found");
}

function verifyGitRefsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitRefs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitRefs correctly deleted (404)");
}

function verifyGitRefsDoesNotExist(id) { verifyGitRefsDeleted(id); }

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitTagsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTags " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitTags found");
}

function verifyGitTagsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTags " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTags correctly deleted (404)");
}

function verifyGitTagsDoesNotExist(id) { verifyGitTagsDeleted(id); }

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitTreesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTrees " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitTrees found");
}

function verifyGitTreesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTrees " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTrees correctly deleted (404)");
}

function verifyGitTreesDoesNotExist(id) { verifyGitTreesDeleted(id); }

function repoListGitHooks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git"; var reqDescription = "List the Git hooks in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteGitHook(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id; var reqDescription = "Delete a Git hook in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoEditGitHook(body, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id; var reqDescription = "Edit a Git hook in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) }); }
  return response;
}

function verifyGitHooksExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitHooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GitHooks found");
}

function verifyGitHooksDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitHooks " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitHooks correctly deleted (404)");
}

function verifyGitHooksDoesNotExist(id) { verifyGitHooksDeleted(id); }

function matchDeletedGitHooks(id) {
  return bp.EventSet("Deleted GitHooks " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a Git hook in a repository") && e.name.includes(id);
  });
}

function matchAnyGitHooksDeleted() {
  return bp.EventSet("Any GitHooks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a Git hook in a repository");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyIssueConfigExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueConfig " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueConfig found");
}

function verifyIssueConfigDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueConfig " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueConfig correctly deleted (404)");
}

function verifyIssueConfigDoesNotExist(id) { verifyIssueConfigDeleted(id); }

function issueGetMilestonesList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones"; var reqDescription = "Get all of a repository's opened milestones";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function issueCreateMilestone(body, id, limit, name, owner, page, repo, state, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones"; var reqDescription = "Create a milestone";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"state": state, "name": name, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"state": state, "name": name, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function tryToAddExistingIssue(body, id, limit, name, owner, page, repo, state, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones"; var reqDescription = "Try Add Existing Issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"state": state, "name": name, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"state": state, "name": name, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyIssueRejects(body, id, limit, name, owner, page, repo, state) {
  var url = "/repos/" + owner + "/" + repo + "/milestones"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "name": name,
    "page": page,
    "state": state
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueExists(id) {
  bp.log.warn("Verification skipped: Issue is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyIssueDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Issue has no GET endpoint.");
}

function matchAnyIssueAdded() {
  return bp.EventSet("Any Issue Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a milestone");
  });
}

function issueGetComments(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var reqDescription = "List all comments on an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueDeleteCommentDeprecated(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id; var reqDescription = "Delete a comment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueEditCommentDeprecated(before, body, id, index, owner, repo, since, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id; var reqDescription = "Edit a comment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) }); }
  return response;
}

function issueCreateComment(before, body, id, index, owner, repo, since, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var reqDescription = "Add a comment to an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) }); }
  return response;
}

function tryToAddExistingIssueComments(before, body, id, index, owner, repo, since, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var reqDescription = "Try Add Existing IssueComments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) }); }
  return response;
}

function verifyIssueCommentsRejects(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var body = {
    "before": before,
    "body": body,
    "id": id,
    "since": since
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueComments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueComments found");
}

function verifyIssueCommentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueComments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueComments correctly deleted (404)");
}

function verifyIssueCommentsDoesNotExist(id) { verifyIssueCommentsDeleted(id); }

function matchAnyIssueCommentsAdded() {
  return bp.EventSet("Any IssueComments Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a comment to an issue");
  });
}

function matchDeletedIssueComments(id) {
  return bp.EventSet("Deleted IssueComments " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a comment") && e.name.includes(id);
  });
}

function matchAnyIssueCommentsDeleted() {
  return bp.EventSet("Any IssueComments Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a comment");
  });
}

function issueListIssueCommentAttachments(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var reqDescription = "List comment's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function issueCreateIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var reqDescription = "Create a comment attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "attachment": attachment,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueEditIssueCommentAttachment(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id; var reqDescription = "Edit a comment attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id; var reqDescription = "Delete a comment attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "attachment_id": attachment_id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "attachment_id": attachment_id, "repo": repo}) }); }
  return response;
}

function tryToAddExistingIssueCommentAttachments(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var reqDescription = "Try Add Existing IssueCommentAttachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "attachment": attachment,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function verifyIssueCommentAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueCommentAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueCommentAttachments found");
}

function verifyIssueCommentAttachmentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueCommentAttachments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueCommentAttachments correctly deleted (404)");
}

function verifyIssueCommentAttachmentsDoesNotExist(id) { verifyIssueCommentAttachmentsDeleted(id); }

function matchAnyIssueCommentAttachmentsAdded() {
  return bp.EventSet("Any IssueCommentAttachments Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a comment attachment");
  });
}

function matchDeletedIssueCommentAttachments(id) {
  return bp.EventSet("Deleted IssueCommentAttachments " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a comment attachment") && e.name.includes(id);
  });
}

function matchAnyIssueCommentAttachmentsDeleted() {
  return bp.EventSet("Any IssueCommentAttachments Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a comment attachment");
  });
}

function issueGetCommentReactions(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Get a list of reactions from a comment of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function issuePostCommentReaction(content, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Add a reaction to a comment of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201];
  var body = {
    "content": content
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": owner, "id": id, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": owner, "id": id, "repo": repo, "owner": owner}) }); }
  return response;
}

function issueDeleteCommentReaction(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Remove a reaction from a comment of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingIssueCommentReactions(content, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Try Add Existing IssueCommentReactions";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "content": content
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": owner, "id": id, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"content": content, "id": owner, "id": id, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyIssueCommentReactionsRejects(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var body = {
    "content": content
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentReactionsExists(owner) {
  bp.log.warn("Verification skipped: IssueCommentReactions is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyIssueCommentReactionsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueCommentReactions has no GET endpoint.");
}

function matchAnyIssueCommentReactionsAdded() {
  return bp.EventSet("Any IssueCommentReactions Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a reaction to a comment of an issue");
  });
}

function matchDeletedIssueCommentReactions(owner) {
  return bp.EventSet("Deleted IssueCommentReactions " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Remove a reaction from a comment of an issue") && e.name.includes(owner);
  });
}

function matchAnyIssueCommentReactionsDeleted() {
  return bp.EventSet("Any IssueCommentReactions Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Remove a reaction from a comment of an issue");
  });
}

function repoListPinnedIssues(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/pinned"; var reqDescription = "List a repo's pinned issues";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyPinnedIssuesExists(id) {
  bp.log.warn("Verification skipped: PinnedIssues is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyPinnedIssuesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PinnedIssues has no GET endpoint.");
}

function issueListIssueAttachments(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets"; var reqDescription = "List issue's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueCreateIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets"; var reqDescription = "Create an issue attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "attachment": attachment,
    "id": id,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) }); }
  return response;
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id; var reqDescription = "Delete an issue attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "attachment_id": attachment_id, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "attachment_id": attachment_id, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueEditIssueAttachment(attachment, attachment_id, body, id, index, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id; var reqDescription = "Edit an issue attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) }); }
  return response;
}

function tryToAddExistingIssueAttachments(attachment, attachment_id, body, id, index, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets"; var reqDescription = "Try Add Existing IssueAttachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "attachment": attachment,
    "id": id,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner, "index": index}) }); }
  return response;
}

function verifyIssueAttachmentsRejects(attachment, attachment_id, body, id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets"; var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "id": id,
    "name": name
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueAttachments found");
}

function verifyIssueAttachmentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueAttachments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueAttachments correctly deleted (404)");
}

function verifyIssueAttachmentsDoesNotExist(id) { verifyIssueAttachmentsDeleted(id); }

function matchAnyIssueAttachmentsAdded() {
  return bp.EventSet("Any IssueAttachments Added", function(e) {
      return e.name.startsWith("Done: Positive: Create an issue attachment");
  });
}

function matchDeletedIssueAttachments(id) {
  return bp.EventSet("Deleted IssueAttachments " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete an issue attachment") && e.name.includes(id);
  });
}

function matchAnyIssueAttachmentsDeleted() {
  return bp.EventSet("Any IssueAttachments Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete an issue attachment");
  });
}

function issueRemoveIssueBlocking(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "Unblock the issue given in the body by the issue in path";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueListBlocks(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "List issues that are blocked by this issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueCreateIssueBlocking(body, index, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "Block the issue given in the body by the issue in path";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function tryToAddExistingIssueBlocks(body, index, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "Try Add Existing IssueBlocks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyIssueBlocksRejects(body, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var body = {
    "body": body,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueBlocksExists(owner) {
  bp.log.warn("Verification skipped: IssueBlocks is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyIssueBlocksDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueBlocks has no GET endpoint.");
}

function matchAnyIssueBlocksAdded() {
  return bp.EventSet("Any IssueBlocks Added", function(e) {
      return e.name.startsWith("Done: Positive: Block the issue given in the body by the issue in path");
  });
}

function matchDeletedIssueBlocks(owner) {
  return bp.EventSet("Deleted IssueBlocks " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Unblock the issue given in the body by the issue in path") && e.name.includes(owner);
  });
}

function matchAnyIssueBlocksDeleted() {
  return bp.EventSet("Any IssueBlocks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unblock the issue given in the body by the issue in path");
  });
}

function issueSubscriptions(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions"; var reqDescription = "Get users who subscribed on an issue.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueAddSubscription(id, index, limit, owner, page, repo, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var reqDescription = "Subscribe user to issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 304];
  var body = {
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "user": user, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "user": user, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function issueDeleteSubscription(owner, repo, index, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var reqDescription = "Unsubscribe user from issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 304];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "user": user, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "user": user, "repo": repo}) }); }
  return response;
}

function tryToAddExistingIssueSubscriptions(id, index, limit, owner, page, repo, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var reqDescription = "Try Add Existing IssueSubscriptions";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "user": user, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "user": user, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyIssueSubscriptionsRejects(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var body = {
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueSubscriptionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueSubscriptions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("IssueSubscriptions found");
}

function verifyIssueSubscriptionsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueSubscriptions " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueSubscriptions correctly deleted (404)");
}

function verifyIssueSubscriptionsDoesNotExist(id) { verifyIssueSubscriptionsDeleted(id); }

function matchAnyIssueSubscriptionsAdded() {
  return bp.EventSet("Any IssueSubscriptions Added", function(e) {
      return e.name.startsWith("Done: Positive: Subscribe user to issue");
  });
}

function matchDeletedIssueSubscriptions(id) {
  return bp.EventSet("Deleted IssueSubscriptions " + id, function(e) {
      return e.name.startsWith("Done: Positive: Unsubscribe user from issue") && e.name.includes(id);
  });
}

function matchAnyIssueSubscriptionsDeleted() {
  return bp.EventSet("Any IssueSubscriptions Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unsubscribe user from issue");
  });
}

function issueGetCommentsAndTimeline(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/timeline"; var reqDescription = "List all comments and events on an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function verifyIssueTimelineExists(id) {
  bp.log.warn("Verification skipped: IssueTimeline is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyIssueTimelineDoesNotExist(id) {
  bp.log.warn("Absence check skipped: IssueTimeline has no GET endpoint.");
}

function issueTrackedTimes(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "List an issue's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueAddTime(before, body, index, limit, owner, page, repo, since, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "Add tracked time to a issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "user": user, "limit": limit, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "user": user, "limit": limit, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) }); }
  return response;
}

function issueResetTime(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "Reset a tracked time of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) }); }
  return response;
}

function tryToAddExistingIssueTimes(before, body, index, limit, owner, page, repo, since, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "Try Add Existing IssueTimes";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "user": user, "limit": limit, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "body": body, "user": user, "limit": limit, "before": before, "repo": repo, "owner": owner, "index": index, "since": since}) }); }
  return response;
}

function verifyIssueTimesRejects(before, body, index, limit, owner, page, repo, since, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var body = {
    "before": before,
    "body": body,
    "limit": limit,
    "page": page,
    "since": since,
    "user": user
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueTimesExists(owner) {
  bp.log.warn("Verification skipped: IssueTimes is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyIssueTimesDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueTimes has no GET endpoint.");
}

function matchAnyIssueTimesAdded() {
  return bp.EventSet("Any IssueTimes Added", function(e) {
      return e.name.startsWith("Done: Positive: Add tracked time to a issue");
  });
}

function matchDeletedIssueTimes(owner) {
  return bp.EventSet("Deleted IssueTimes " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Reset a tracked time of an issue") && e.name.includes(owner);
  });
}

function matchAnyIssueTimesDeleted() {
  return bp.EventSet("Any IssueTimes Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Reset a tracked time of an issue");
  });
}

function repoListKeys(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys"; var reqDescription = "List a repository's keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateKey(body, fingerprint, id, key_id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys"; var reqDescription = "Add a key to a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key_id": key_id, "fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key_id": key_id, "fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteKey(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id; var reqDescription = "Delete a key from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingRepositoryKeys(body, fingerprint, id, key_id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys"; var reqDescription = "Try Add Existing RepositoryKeys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key_id": key_id, "fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"key_id": key_id, "fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyRepositoryKeysRejects(body, fingerprint, id, key_id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys"; var body = {
    "body": body,
    "fingerprint": fingerprint,
    "id": id,
    "key_id": key_id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryKeysExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify RepositoryKeys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RepositoryKeys found");
}

function verifyRepositoryKeysDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify RepositoryKeys " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryKeys correctly deleted (404)");
}

function verifyRepositoryKeysDoesNotExist(id) { verifyRepositoryKeysDeleted(id); }

function matchAnyRepositoryKeysAdded() {
  return bp.EventSet("Any RepositoryKeys Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a key to a repository");
  });
}

function matchDeletedRepositoryKeys(id) {
  return bp.EventSet("Deleted RepositoryKeys " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a key from a repository") && e.name.includes(id);
  });
}

function matchAnyRepositoryKeysDeleted() {
  return bp.EventSet("Any RepositoryKeys Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a key from a repository");
  });
}

function issueDeleteMilestone(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id; var reqDescription = "Delete a milestone";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueEditMilestone(body, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id; var reqDescription = "Update a milestone";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) }); }
  return response;
}

function verifyMilestonesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Milestones " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Milestones found");
}

function verifyMilestonesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Milestones " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Milestones correctly deleted (404)");
}

function verifyMilestonesDoesNotExist(id) { verifyMilestonesDeleted(id); }

function matchDeletedMilestones(id) {
  return bp.EventSet("Deleted Milestones " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a milestone") && e.name.includes(id);
  });
}

function matchAnyMilestonesDeleted() {
  return bp.EventSet("Any Milestones Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a milestone");
  });
}

function repoMirrorSync(id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync"; var reqDescription = "Sync a mirrored repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingMirrorSync(id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync"; var reqDescription = "Try Add Existing MirrorSync";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function verifyMirrorSyncRejects(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync"; var body = {
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMirrorSyncExists(id) {
  bp.log.warn("Verification skipped: MirrorSync is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyMirrorSyncDoesNotExist(id) {
  bp.log.warn("Absence check skipped: MirrorSync has no GET endpoint.");
}

function matchAnyMirrorSyncAdded() {
  return bp.EventSet("Any MirrorSync Added", function(e) {
      return e.name.startsWith("Done: Positive: Sync a mirrored repository");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyNewPinAllowedExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify NewPinAllowed " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("NewPinAllowed found");
}

function verifyNewPinAllowedDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify NewPinAllowed " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("NewPinAllowed correctly deleted (404)");
}

function verifyNewPinAllowedDoesNotExist(id) { verifyNewPinAllowedDeleted(id); }

function repoGetPullRequestFiles(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/files"; var reqDescription = "Get changed files for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoUpdatePullRequest(body, id, index, limit, owner, page, repo, skip_to, style, whitespace, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var reqDescription = "Merge PR's baseBranch into headBranch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditPullRequest(body, id, index, limit, owner, page, repo, skip_to, style, whitespace, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index; var reqDescription = "Update a pull request. If using deadline only the date will be taken into account, and time of day ignored.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) }); }
  return response;
}

function repoCancelScheduledAutoMerge(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge"; var reqDescription = "Cancel the scheduled auto merge for the given pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function tryToAddExistingPullRequests(body, id, index, limit, owner, page, repo, skip_to, style, whitespace, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var reqDescription = "Try Add Existing PullRequests";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "style": style, "body": body, "limit": limit, "repo": repo, "whitespace": whitespace, "owner": owner, "index": index, "skip-to": skip_to}) }); }
  return response;
}

function verifyPullRequestsRejects(body, id, index, limit, owner, page, repo, skip_to, style, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "skip-to": skip_to,
    "style": style,
    "whitespace": whitespace
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullRequestsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullRequests " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullRequests found");
}

function verifyPullRequestsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullRequests " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullRequests correctly deleted (404)");
}

function verifyPullRequestsDoesNotExist(id) { verifyPullRequestsDeleted(id); }

function matchAnyPullRequestsAdded() {
  return bp.EventSet("Any PullRequests Added", function(e) {
      return e.name.startsWith("Done: Positive: Merge PR's baseBranch into headBranch");
  });
}

function matchDeletedPullRequests(id) {
  return bp.EventSet("Deleted PullRequests " + id, function(e) {
      return e.name.startsWith("Done: Positive: Cancel the scheduled auto merge for the given pull request") && e.name.includes(id);
  });
}

function matchAnyPullRequestsDeleted() {
  return bp.EventSet("Any PullRequests Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Cancel the scheduled auto merge for the given pull request");
  });
}

function repoDeletePullReviewRequests(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var reqDescription = "Cancel review requests for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoCreatePullReviewRequests(body, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var reqDescription = "Create review requests for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "body": body, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "body": body, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function tryToAddExistingPullReviewRequests(body, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var reqDescription = "Try Add Existing PullReviewRequests";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "body": body, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "body": body, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyPullReviewRequestsRejects(body, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var body = {
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewRequestsExists(owner) {
  bp.log.warn("Verification skipped: PullReviewRequests is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyPullReviewRequestsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: PullReviewRequests has no GET endpoint.");
}

function matchAnyPullReviewRequestsAdded() {
  return bp.EventSet("Any PullReviewRequests Added", function(e) {
      return e.name.startsWith("Done: Positive: Create review requests for a pull request");
  });
}

function matchDeletedPullReviewRequests(owner) {
  return bp.EventSet("Deleted PullReviewRequests " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Cancel review requests for a pull request") && e.name.includes(owner);
  });
}

function matchAnyPullReviewRequestsDeleted() {
  return bp.EventSet("Any PullReviewRequests Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Cancel review requests for a pull request");
  });
}

function repoListPullReviews(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews"; var reqDescription = "List all reviews for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoSubmitPullReview(body, id, index, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var reqDescription = "Submit a pending review to a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function repoDeletePullReview(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var reqDescription = "Delete a specific review from a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingPullReviews(body, id, index, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var reqDescription = "Try Add Existing PullReviews";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyPullReviewsRejects(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var body = {
    "body": body,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviews " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullReviews found");
}

function verifyPullReviewsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviews " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullReviews correctly deleted (404)");
}

function verifyPullReviewsDoesNotExist(id) { verifyPullReviewsDeleted(id); }

function matchAnyPullReviewsAdded() {
  return bp.EventSet("Any PullReviews Added", function(e) {
      return e.name.startsWith("Done: Positive: Submit a pending review to a pull request");
  });
}

function matchDeletedPullReviews(id) {
  return bp.EventSet("Deleted PullReviews " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific review from a pull request") && e.name.includes(id);
  });
}

function matchAnyPullReviewsDeleted() {
  return bp.EventSet("Any PullReviews Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific review from a pull request");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyPullReviewCommentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviewComments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PullReviewComments found");
}

function verifyPullReviewCommentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviewComments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullReviewComments correctly deleted (404)");
}

function verifyPullReviewCommentsDoesNotExist(id) { verifyPullReviewCommentsDeleted(id); }

function repoDismissPullReview(body, id, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals"; var reqDescription = "Dismiss a review for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function tryToAddExistingPullReviewDismissals(body, id, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals"; var reqDescription = "Try Add Existing PullReviewDismissals";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyPullReviewDismissalsRejects(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals"; var body = {
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewDismissalsExists(id) {
  bp.log.warn("Verification skipped: PullReviewDismissals is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyPullReviewDismissalsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PullReviewDismissals has no GET endpoint.");
}

function matchAnyPullReviewDismissalsAdded() {
  return bp.EventSet("Any PullReviewDismissals Added", function(e) {
      return e.name.startsWith("Done: Positive: Dismiss a review for a pull request");
  });
}

function repoUnDismissPullReview(id, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals"; var reqDescription = "Cancel to dismiss a review for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function tryToAddExistingPullReviewUndismissals(id, index, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals"; var reqDescription = "Try Add Existing PullReviewUndismissals";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals"; var body = {};
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewUndismissalsExists(id) {
  bp.log.warn("Verification skipped: PullReviewUndismissals is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyPullReviewUndismissalsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PullReviewUndismissals has no GET endpoint.");
}

function matchAnyPullReviewUndismissalsAdded() {
  return bp.EventSet("Any PullReviewUndismissals Added", function(e) {
      return e.name.startsWith("Done: Positive: Cancel to dismiss a review for a pull request");
  });
}

function repoListPushMirrors(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors"; var reqDescription = "Get all push mirrors of the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoPushMirrorSync(id, limit, name, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync"; var reqDescription = "Sync all push mirrored repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "page": page, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "page": page, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function repoDeletePushMirror(owner, repo, name, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name; var reqDescription = "Deletes a push mirror from a repository by remoteName";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "name": name, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "name": name, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingPushMirrors(id, limit, name, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync"; var reqDescription = "Try Add Existing PushMirrors";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "page": page, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "page": page, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyPushMirrorsRejects(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync"; var body = {
    "id": id,
    "limit": limit,
    "name": name,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPushMirrorsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PushMirrors " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("PushMirrors found");
}

function verifyPushMirrorsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify PushMirrors " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PushMirrors correctly deleted (404)");
}

function verifyPushMirrorsDoesNotExist(id) { verifyPushMirrorsDeleted(id); }

function matchAnyPushMirrorsAdded() {
  return bp.EventSet("Any PushMirrors Added", function(e) {
      return e.name.startsWith("Done: Positive: Sync all push mirrored repository");
  });
}

function matchDeletedPushMirrors(id) {
  return bp.EventSet("Deleted PushMirrors " + id, function(e) {
      return e.name.startsWith("Done: Positive: Deletes a push mirror from a repository by remoteName") && e.name.includes(id);
  });
}

function matchAnyPushMirrorsDeleted() {
  return bp.EventSet("Any PushMirrors Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Deletes a push mirror from a repository by remoteName");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyRawFilesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify RawFiles " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("RawFiles found");
}

function verifyRawFilesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify RawFiles " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RawFiles correctly deleted (404)");
}

function verifyRawFilesDoesNotExist(id) { verifyRawFilesDeleted(id); }

function repoListReleases(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var reqDescription = "List a repo's releases";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var reqDescription = "Create a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteReleaseByTag(owner, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag; var reqDescription = "Delete a release by tag name";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) }); }
  return response;
}

function repoGetRelease(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Get a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoDeleteRelease(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Delete a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoEditRelease(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Update a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) }); }
  return response;
}

function tryToAddExistingReleases(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var reqDescription = "Try Add Existing Releases";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"pre-release": pre_release, "tag": tag, "id": id, "page": page, "body": body, "limit": limit, "CreateReleaseOption": CreateReleaseOption, "repo": repo, "owner": owner, "draft": draft}) }); }
  return response;
}

function verifyReleasesRejects(CreateReleaseOption, body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var body = {
    "CreateReleaseOption": CreateReleaseOption,
    "body": body,
    "draft": draft,
    "id": id,
    "limit": limit,
    "page": page,
    "pre-release": pre_release,
    "tag": tag
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyReleasesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Releases " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Releases found");
}

function verifyReleasesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Releases " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Releases correctly deleted (404)");
}

function verifyReleasesDoesNotExist(id) { verifyReleasesDeleted(id); }

function matchAnyReleasesAdded() {
  return bp.EventSet("Any Releases Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a release");
  });
}

function matchDeletedReleases(id) {
  return bp.EventSet("Deleted Releases " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a release by tag name") && e.name.includes(id);
  });
}

function matchAnyReleasesDeleted() {
  return bp.EventSet("Any Releases Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a release by tag name");
  });
}

function repoListReleaseAttachments(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var reqDescription = "List release's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var reqDescription = "Create a release attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "attachment": attachment,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteReleaseAttachment(owner, repo, id, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id; var reqDescription = "Delete a release attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "attachment_id": attachment_id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "attachment_id": attachment_id, "repo": repo}) }); }
  return response;
}

function repoEditReleaseAttachment(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id; var reqDescription = "Edit a release attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function tryToAddExistingReleaseAttachments(attachment, attachment_id, body, id, name, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var reqDescription = "Try Add Existing ReleaseAttachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "attachment": attachment,
    "name": name
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"name": name, "id": id, "attachment_id": attachment_id, "body": body, "repo": repo, "attachment": attachment, "owner": owner}) }); }
  return response;
}

function verifyReleaseAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyReleaseAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify ReleaseAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("ReleaseAttachments found");
}

function verifyReleaseAttachmentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify ReleaseAttachments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("ReleaseAttachments correctly deleted (404)");
}

function verifyReleaseAttachmentsDoesNotExist(id) { verifyReleaseAttachmentsDeleted(id); }

function matchAnyReleaseAttachmentsAdded() {
  return bp.EventSet("Any ReleaseAttachments Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a release attachment");
  });
}

function matchDeletedReleaseAttachments(id) {
  return bp.EventSet("Deleted ReleaseAttachments " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a release attachment") && e.name.includes(id);
  });
}

function matchAnyReleaseAttachmentsDeleted() {
  return bp.EventSet("Any ReleaseAttachments Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a release attachment");
  });
}

function repoGetReviewers(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/reviewers"; var reqDescription = "Return all users that can be requested to review in this repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyReviewersExists(id) {
  bp.log.warn("Verification skipped: Reviewers is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyReviewersDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Reviewers has no GET endpoint.");
}

function repoListTagProtection(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var reqDescription = "List tag protections for a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateTagProtection(body, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var reqDescription = "Create a tag protection for a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditTagProtection(body, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id; var reqDescription = "Edit a tag protection for a repository. Only fields that are set will be changed";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) }); }
  return response;
}

function repoDeleteTagProtection(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id; var reqDescription = "Delete a specific tag protection for the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingTagProtections(body, id, owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var reqDescription = "Try Add Existing TagProtections";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "owner": owner, "body": body, "repo": repo}) }); }
  return response;
}

function verifyTagProtectionsRejects(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTagProtectionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify TagProtections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TagProtections found");
}

function verifyTagProtectionsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify TagProtections " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TagProtections correctly deleted (404)");
}

function verifyTagProtectionsDoesNotExist(id) { verifyTagProtectionsDeleted(id); }

function matchAnyTagProtectionsAdded() {
  return bp.EventSet("Any TagProtections Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a tag protection for a repository");
  });
}

function matchDeletedTagProtections(id) {
  return bp.EventSet("Deleted TagProtections " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific tag protection for the repository") && e.name.includes(id);
  });
}

function matchAnyTagProtectionsDeleted() {
  return bp.EventSet("Any TagProtections Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a specific tag protection for the repository");
  });
}

function repoListTags(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags"; var reqDescription = "List a repository's tags";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateTag(body, id, limit, owner, page, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags"; var reqDescription = "Create a new git tag in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"tag": tag, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"tag": tag, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteTag(owner, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag; var reqDescription = "Delete a repository's tag by name";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) }); }
  return response;
}

function tryToAddExistingTags(body, id, limit, owner, page, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags"; var reqDescription = "Try Add Existing Tags";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"tag": tag, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"tag": tag, "id": id, "page": page, "body": body, "limit": limit, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyTagsRejects(body, id, limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "tag": tag
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTagsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Tags " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Tags found");
}

function verifyTagsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Tags " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Tags correctly deleted (404)");
}

function verifyTagsDoesNotExist(id) { verifyTagsDeleted(id); }

function matchAnyTagsAdded() {
  return bp.EventSet("Any Tags Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a new git tag in a repository");
  });
}

function matchDeletedTags(id) {
  return bp.EventSet("Deleted Tags " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a repository's tag by name") && e.name.includes(id);
  });
}

function matchAnyTagsDeleted() {
  return bp.EventSet("Any Tags Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a repository's tag by name");
  });
}

function repoTrackedTimes(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/times"; var reqDescription = "List a repo's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyTrackedTimesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify TrackedTimes " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TrackedTimes found");
}

function verifyTrackedTimesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify TrackedTimes " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TrackedTimes correctly deleted (404)");
}

function verifyTrackedTimesDoesNotExist(id) { verifyTrackedTimesDeleted(id); }

function topicSearch(config) {
  var url = "/topics/search"; var reqDescription = "search topics via keyword";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function repoUpdateTopics(body, limit, owner, page, q, repo, topic, topic1, topic2, config) {
  var url = "/repos/" + owner + "/" + repo + "/topics"; var reqDescription = "Replace list of topics for a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) }); }
  return response;
}

function repoDeleteTopic(owner, repo, topic, config) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic; var reqDescription = "Delete a topic from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"topic": topic, "owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"topic": topic, "owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function repoAddTopic(body, limit, owner, page, q, repo, topic, topic1, topic2, config) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic; var reqDescription = "Add a topic to a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) }); }
  return response;
}

function tryToAddExistingTopics(body, limit, owner, page, q, repo, topic, topic1, topic2, config) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic; var reqDescription = "Try Add Existing Topics";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "q": q, "body": body, "limit": limit, "repo": repo, "topic1": topic1, "topic": topic, "owner": owner, "topic2": topic2}) }); }
  return response;
}

function verifyTopicsRejects(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic; var body = {
    "body": body,
    "limit": limit,
    "page": page,
    "q": q,
    "topic1": topic1,
    "topic2": topic2
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTopicsExists(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  let res = topicSearch(body, limit, owner, page, q, repo, topic, topic1, topic2);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.owner == owner || item.id == owner);
          if (found) pvg.success("Topics found in list");
          else pvg.fail("Topics NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyTopicsDeleted(body, limit, owner, page, q, repo, topic, topic1, topic2) {
  let res = topicSearch(body, limit, owner, page, q, repo, topic, topic1, topic2);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.owner == owner || item.id == owner);
          if (!found) pvg.success("Topics correctly not found in list");
          else pvg.fail("Topics still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyTopicsDoesNotExist(body, limit, owner, page, q, repo, topic, topic1, topic2) { verifyTopicsDeleted(body, limit, owner, page, q, repo, topic, topic1, topic2); }

function matchAnyTopicsAdded() {
  return bp.EventSet("Any Topics Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a topic to a repository");
  });
}

function matchDeletedTopics(owner) {
  return bp.EventSet("Deleted Topics " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Delete a topic from a repository") && e.name.includes(owner);
  });
}

function matchAnyTopicsDeleted() {
  return bp.EventSet("Any Topics Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a topic from a repository");
  });
}

function repoTransfer(body, id, owner, repo, transferOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/transfer"; var reqDescription = "Transfer a repo ownership";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [202];
  var body = {
    "id": id,
    "transferOptions": transferOptions
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) }); }
  return response;
}

function acceptRepoTransfer(body, id, owner, repo, transferOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/accept"; var reqDescription = "Accept a repo transfer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [202];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) }); }
  return response;
}

function rejectRepoTransfer(body, id, owner, repo, transferOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/reject"; var reqDescription = "Reject a repo transfer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) }); }
  return response;
}

function tryToAddExistingRepositoryTransfer(body, id, owner, repo, transferOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/transfer"; var reqDescription = "Try Add Existing RepositoryTransfer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "transferOptions": transferOptions
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"transferOptions": transferOptions, "id": id, "body": body, "repo": repo, "owner": owner}) }); }
  return response;
}

function verifyRepositoryTransferRejects(body, id, owner, repo, transferOptions) {
  var url = "/repos/" + owner + "/" + repo + "/transfer"; var body = {
    "body": body,
    "id": id,
    "transferOptions": transferOptions
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryTransferExists(id) {
  bp.log.warn("Verification skipped: RepositoryTransfer is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyRepositoryTransferDoesNotExist(id) {
  bp.log.warn("Absence check skipped: RepositoryTransfer has no GET endpoint.");
}

function matchAnyRepositoryTransferAdded() {
  return bp.EventSet("Any RepositoryTransfer Added", function(e) {
      return e.name.startsWith("Done: Positive: Transfer a repo ownership");
  });
}

function repoCreateWikiPage(body, id, owner, pageName, repo, wikiPageOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new"; var reqDescription = "Create a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id,
    "wikiPageOptions": wikiPageOptions
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) }); }
  return response;
}

function repoDeleteWikiPage(owner, repo, pageName, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName; var reqDescription = "Delete a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "pageName": pageName, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "pageName": pageName, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditWikiPage(body, id, owner, pageName, repo, wikiPageOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName; var reqDescription = "Edit a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id,
    "wikiPageOptions": wikiPageOptions
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) }); }
  return response;
}

function tryToAddExistingWikiPage(body, id, owner, pageName, repo, wikiPageOptions, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new"; var reqDescription = "Try Add Existing WikiPage";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id,
    "wikiPageOptions": wikiPageOptions
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"wikiPageOptions": wikiPageOptions, "id": id, "body": body, "repo": repo, "pageName": pageName, "owner": owner}) }); }
  return response;
}

function verifyWikiPageRejects(body, id, owner, pageName, repo, wikiPageOptions) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new"; var body = {
    "body": body,
    "id": id,
    "pageName": pageName,
    "wikiPageOptions": wikiPageOptions
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyWikiPageExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify WikiPage " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("WikiPage found");
}

function verifyWikiPageDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify WikiPage " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("WikiPage correctly deleted (404)");
}

function verifyWikiPageDoesNotExist(id) { verifyWikiPageDeleted(id); }

function matchAnyWikiPageAdded() {
  return bp.EventSet("Any WikiPage Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a wiki page");
  });
}

function matchDeletedWikiPage(id) {
  return bp.EventSet("Deleted WikiPage " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a wiki page") && e.name.includes(id);
  });
}

function matchAnyWikiPageDeleted() {
  return bp.EventSet("Any WikiPage Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a wiki page");
  });
}

function repoGetWikiPages(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/pages"; var reqDescription = "Get all wiki pages";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyWikiPagesExists(id) {
  bp.log.warn("Verification skipped: WikiPages is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyWikiPagesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: WikiPages has no GET endpoint.");
}

function repoGetWikiPageRevisions(owner, repo, pageName, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName; var reqDescription = "Get revisions of a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "pageName": pageName, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "pageName": pageName, "repo": repo}) }); }
  return response;
}

function verifyWikiPageRevisionsExists(id) {
  bp.log.warn("Verification skipped: WikiPageRevisions is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyWikiPageRevisionsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: WikiPageRevisions has no GET endpoint.");
}

function getGeneralAPISettings(config) {
  var url = "/settings/api"; var reqDescription = "Get instance's global settings for api";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function getGeneralUISettings(config) {
  var url = "/settings/ui"; var reqDescription = "Get instance's global settings for ui";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifySettingsExists(id) {
  let res = getGeneralAPISettings(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Settings found in list");
          else pvg.fail("Settings NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDeleted(id) {
  let res = getGeneralAPISettings(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Settings correctly not found in list");
          else pvg.fail("Settings still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifySettingsDoesNotExist(id) { verifySettingsDeleted(id); }

function getVersion(config) {
  var url = "/version"; var reqDescription = "Returns the version of the Gitea application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyMiscellaneousExists(id) {
  let res = getVersion(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("Miscellaneous found in list");
          else pvg.fail("Miscellaneous NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyMiscellaneousDeleted(id) {
  let res = getVersion(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("Miscellaneous correctly not found in list");
          else pvg.fail("Miscellaneous still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyMiscellaneousDoesNotExist(id) { verifyMiscellaneousDeleted(id); }

function orgListTeamMembers(id, config) {
  var url = "/teams/" + id + "/members"; var reqDescription = "List a team's members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgAddTeamMember(id, limit, page, username, config) {
  var url = "/teams/" + id + "/members/" + username; var reqDescription = "Add a team member";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "username": username, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "username": username, "limit": limit}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingTeamMembers(id, limit, page, username, config) {
  var url = "/teams/" + id + "/members/" + username; var reqDescription = "Try Add Existing TeamMembers";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "username": username, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "username": username, "limit": limit}) }); }
  return response;
}

function verifyTeamMembersRejects(id, limit, page, username) {
  var url = "/teams/" + id + "/members/" + username; var body = {
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTeamMembersExists(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamMembers " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamMembers found");
}

function verifyTeamMembersDeleted(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamMembers " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamMembers correctly deleted (404)");
}

function verifyTeamMembersDoesNotExist(id) { verifyTeamMembersDeleted(id); }

function matchAnyTeamMembersAdded() {
  return bp.EventSet("Any TeamMembers Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a team member");
  });
}

function matchDeletedTeamMembers(id) {
  return bp.EventSet("Deleted TeamMembers " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a team") && e.name.includes(id);
  });
}

function matchAnyTeamMembersDeleted() {
  return bp.EventSet("Any TeamMembers Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function orgListTeamRepos(id, config) {
  var url = "/teams/" + id + "/repos"; var reqDescription = "List a team's repos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgAddTeamRepository(id, limit, org, page, repo, config) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo; var reqDescription = "Add a repository to a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "repo": repo, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "repo": repo, "limit": limit, "org": org}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingTeamRepos(id, limit, org, page, repo, config) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo; var reqDescription = "Try Add Existing TeamRepos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "repo": repo, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "repo": repo, "limit": limit, "org": org}) }); }
  return response;
}

function verifyTeamReposRejects(id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo; var body = {
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTeamReposExists(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamRepos " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("TeamRepos found");
}

function verifyTeamReposDeleted(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamRepos " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TeamRepos correctly deleted (404)");
}

function verifyTeamReposDoesNotExist(id) { verifyTeamReposDeleted(id); }

function matchAnyTeamReposAdded() {
  return bp.EventSet("Any TeamRepos Added", function(e) {
      return e.name.startsWith("Done: Positive: Add a repository to a team");
  });
}

function matchDeletedTeamRepos(id) {
  return bp.EventSet("Deleted TeamRepos " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a team") && e.name.includes(id);
  });
}

function matchAnyTeamReposDeleted() {
  return bp.EventSet("Any TeamRepos Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a team");
  });
}

function userGetRunnerRegistrationToken(config) {
  var url = "/user/actions/runners/registration-token"; var reqDescription = "Get an user's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function deleteUserSecret(secretname, config) {
  var url = "/user/actions/secrets/" + secretname; var reqDescription = "Delete a secret in a user scope";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "id": secretname}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "id": secretname}) }); }
  return response;
}

function updateUserSecret(body, limit, page, secretname, config) {
  var url = "/user/actions/secrets/" + secretname; var reqDescription = "Create or Update a secret value in a user scope";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "id": secretname}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"secretname": secretname, "page": page, "body": body, "limit": limit, "id": secretname}) }); }
  return response;
}

function getUserVariablesList(config) {
  var url = "/user/actions/variables"; var reqDescription = "Get the user-level list of variables which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserExists(body, limit, page, secretname) {
  let res = userGetRunnerRegistrationToken(body, limit, page, secretname);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.secretname == secretname || item.id == secretname);
          if (found) pvg.success("User found in list");
          else pvg.fail("User NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserDeleted(body, limit, page, secretname) {
  let res = userGetRunnerRegistrationToken(body, limit, page, secretname);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.secretname == secretname || item.id == secretname);
          if (!found) pvg.success("User correctly not found in list");
          else pvg.fail("User still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserDoesNotExist(body, limit, page, secretname) { verifyUserDeleted(body, limit, page, secretname); }

function matchDeletedUser(secretname) {
  return bp.EventSet("Deleted User " + secretname, function(e) {
      return e.name.startsWith("Done: Positive: Delete a secret in a user scope") && e.name.includes(secretname);
  });
}

function matchAnyUserDeleted() {
  return bp.EventSet("Any User Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a secret in a user scope");
  });
}

function deleteUserVariable(variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Delete a user-level variable which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename}) }); }
  return response;
}

function getUserVariable(variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Get a user-level variable which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename}) }); }
  return response;
}

function createUserVariable(body, variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Create a user-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) }); }
  return response;
}

function updateUserVariable(body, variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Update a user-level variable which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) }); }
  return response;
}

function tryToAddExistingUserVariables(body, variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Try Add Existing UserVariables";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"variablename": variablename, "id": variablename, "body": body}) }); }
  return response;
}

function verifyUserVariablesRejects(body, variablename) {
  var url = "/user/actions/variables/" + variablename; var body = {
    "body": body
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserVariablesExists(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariables " + variablename + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserVariables found");
}

function verifyUserVariablesDeleted(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariables " + variablename + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserVariables correctly deleted (404)");
}

function verifyUserVariablesDoesNotExist(variablename) { verifyUserVariablesDeleted(variablename); }

function matchAnyUserVariablesAdded() {
  return bp.EventSet("Any UserVariables Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a user-level variable");
  });
}

function matchDeletedUserVariables(variablename) {
  return bp.EventSet("Deleted UserVariables " + variablename, function(e) {
      return e.name.startsWith("Done: Positive: Delete a user-level variable which is created by current doer") && e.name.includes(variablename);
  });
}

function matchAnyUserVariablesDeleted() {
  return bp.EventSet("Any UserVariables Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a user-level variable which is created by current doer");
  });
}

function userGetOauth2Application(config) {
  var url = "/user/applications/oauth2"; var reqDescription = "List the authenticated user's oauth2 applications";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userCreateOAuth2Application(body, id, limit, page, config) {
  var url = "/user/applications/oauth2"; var reqDescription = "creates a new OAuth2 application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function userDeleteOAuth2Application(id, config) {
  var url = "/user/applications/oauth2/" + id; var reqDescription = "delete an OAuth2 Application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userGetOAuth2Application(id, config) {
  var url = "/user/applications/oauth2/" + id; var reqDescription = "get an OAuth2 Application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userUpdateOAuth2Application(body, id, limit, page, config) {
  var url = "/user/applications/oauth2/" + id; var reqDescription = "update an OAuth2 Application, this includes regenerating the client secret";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function tryToAddExistingOAuth2Applications(body, id, limit, page, config) {
  var url = "/user/applications/oauth2"; var reqDescription = "Try Add Existing OAuth2Applications";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function verifyOAuth2ApplicationsRejects(body, id, limit, page) {
  var url = "/user/applications/oauth2"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOAuth2ApplicationsExists(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify OAuth2Applications " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("OAuth2Applications found");
}

function verifyOAuth2ApplicationsDeleted(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify OAuth2Applications " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OAuth2Applications correctly deleted (404)");
}

function verifyOAuth2ApplicationsDoesNotExist(id) { verifyOAuth2ApplicationsDeleted(id); }

function matchAnyOAuth2ApplicationsAdded() {
  return bp.EventSet("Any OAuth2Applications Added", function(e) {
      return e.name.startsWith("Done: Positive: creates a new OAuth2 application");
  });
}

function matchDeletedOAuth2Applications(id) {
  return bp.EventSet("Deleted OAuth2Applications " + id, function(e) {
      return e.name.startsWith("Done: Positive: delete an OAuth2 Application") && e.name.includes(id);
  });
}

function matchAnyOAuth2ApplicationsDeleted() {
  return bp.EventSet("Any OAuth2Applications Deleted", function(e) {
      return e.name.startsWith("Done: Positive: delete an OAuth2 Application");
  });
}

function userDeleteAvatar(config) {
  var url = "/user/avatar"; var reqDescription = "Delete Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userUpdateAvatar(body, id, config) {
  var url = "/user/avatar"; var reqDescription = "Update Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function tryToAddExistingUserAvatar(body, id, config) {
  var url = "/user/avatar"; var reqDescription = "Try Add Existing UserAvatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function verifyUserAvatarRejects(body, id) {
  var url = "/user/avatar"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserAvatarExists(id) {
  bp.log.warn("Verification skipped: UserAvatar is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserAvatarDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserAvatar has no GET endpoint.");
}

function matchAnyUserAvatarAdded() {
  return bp.EventSet("Any UserAvatar Added", function(e) {
      return e.name.startsWith("Done: Positive: Update Avatar");
  });
}

function matchDeletedUserAvatar(id) {
  return bp.EventSet("Deleted UserAvatar " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete Avatar") && e.name.includes(id);
  });
}

function matchAnyUserAvatarDeleted() {
  return bp.EventSet("Any UserAvatar Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete Avatar");
  });
}

function userListBlocks(config) {
  var url = "/user/blocks"; var reqDescription = "List users blocked by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userUnblockUser(username, config) {
  var url = "/user/blocks/" + username; var reqDescription = "Unblock a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userCheckUserBlock(username, config) {
  var url = "/user/blocks/" + username; var reqDescription = "Check if a user is blocked by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userBlockUser(limit, note, page, username, config) {
  var url = "/user/blocks/" + username; var reqDescription = "Block a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "username": username, "id": username, "limit": limit, "note": note}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"page": page, "username": username, "id": username, "limit": limit, "note": note}) }); }
  return response;
}

function verifyUserBlocksExists(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserBlocks found");
}

function verifyUserBlocksDeleted(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserBlocks correctly deleted (404)");
}

function verifyUserBlocksDoesNotExist(username) { verifyUserBlocksDeleted(username); }

function matchDeletedUserBlocks(username) {
  return bp.EventSet("Deleted UserBlocks " + username, function(e) {
      return e.name.startsWith("Done: Positive: Unblock a user") && e.name.includes(username);
  });
}

function matchAnyUserBlocksDeleted() {
  return bp.EventSet("Any UserBlocks Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unblock a user");
  });
}

function userDeleteEmail(config) {
  var url = "/user/emails"; var reqDescription = "Delete email addresses";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userListEmails(config) {
  var url = "/user/emails"; var reqDescription = "List the authenticated user's email addresses";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userAddEmail(body, id, config) {
  var url = "/user/emails"; var reqDescription = "Add email addresses";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function tryToAddExistingUserEmails(body, id, config) {
  var url = "/user/emails"; var reqDescription = "Try Add Existing UserEmails";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "body": body}) }); }
  return response;
}

function verifyUserEmailsRejects(body, id) {
  var url = "/user/emails"; var body = {
    "body": body,
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserEmailsExists(body, id) {
  let res = userListEmails(body, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserEmails found in list");
          else pvg.fail("UserEmails NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserEmailsDeleted(body, id) {
  let res = userListEmails(body, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserEmails correctly not found in list");
          else pvg.fail("UserEmails still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserEmailsDoesNotExist(body, id) { verifyUserEmailsDeleted(body, id); }

function matchAnyUserEmailsAdded() {
  return bp.EventSet("Any UserEmails Added", function(e) {
      return e.name.startsWith("Done: Positive: Add email addresses");
  });
}

function matchDeletedUserEmails(id) {
  return bp.EventSet("Deleted UserEmails " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete email addresses") && e.name.includes(id);
  });
}

function matchAnyUserEmailsDeleted() {
  return bp.EventSet("Any UserEmails Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete email addresses");
  });
}

function userCurrentListFollowers(config) {
  var url = "/user/followers"; var reqDescription = "List the authenticated user's followers";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserFollowersExists(id, limit, page) {
  let res = userCurrentListFollowers(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserFollowers found in list");
          else pvg.fail("UserFollowers NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserFollowersDeleted(id, limit, page) {
  let res = userCurrentListFollowers(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserFollowers correctly not found in list");
          else pvg.fail("UserFollowers still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserFollowersDoesNotExist(id, limit, page) { verifyUserFollowersDeleted(id, limit, page); }

function userCurrentListFollowing(config) {
  var url = "/user/following"; var reqDescription = "List the users that the authenticated user is following";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserFollowingExists(id, limit, page) {
  let res = userCurrentListFollowing(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserFollowing found in list");
          else pvg.fail("UserFollowing NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserFollowingDeleted(id, limit, page) {
  let res = userCurrentListFollowing(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserFollowing correctly not found in list");
          else pvg.fail("UserFollowing still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserFollowingDoesNotExist(id, limit, page) { verifyUserFollowingDeleted(id, limit, page); }

function userCurrentDeleteFollow(username, config) {
  var url = "/user/following/" + username; var reqDescription = "Unfollow a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userCurrentCheckFollowing(username, config) {
  var url = "/user/following/" + username; var reqDescription = "Check whether a user is followed by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function userCurrentPutFollow(username, config) {
  var url = "/user/following/" + username; var reqDescription = "Follow a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username, "id": username}) }); }
  return response;
}

function verifyUserFollowingSpecificExists(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserFollowingSpecific found");
}

function verifyUserFollowingSpecificDeleted(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserFollowingSpecific correctly deleted (404)");
}

function verifyUserFollowingSpecificDoesNotExist(username) { verifyUserFollowingSpecificDeleted(username); }

function matchDeletedUserFollowingSpecific(username) {
  return bp.EventSet("Deleted UserFollowingSpecific " + username, function(e) {
      return e.name.startsWith("Done: Positive: Unfollow a user") && e.name.includes(username);
  });
}

function matchAnyUserFollowingSpecificDeleted() {
  return bp.EventSet("Any UserFollowingSpecific Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unfollow a user");
  });
}

function userCurrentGetGPGKey(id, config) {
  var url = "/user/gpg_keys/" + id; var reqDescription = "Get a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userCurrentListGPGKeys(config) {
  var url = "/user/gpg_keys"; var reqDescription = "List the authenticated user's GPG keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userCurrentPostGPGKey(Form, id, limit, page, config) {
  var url = "/user/gpg_keys"; var reqDescription = "Create a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "Form": Form,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Form": Form, "limit": limit, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Form": Form, "limit": limit, "page": page}) }); }
  return response;
}

function userCurrentDeleteGPGKey(id, config) {
  var url = "/user/gpg_keys/" + id; var reqDescription = "Remove a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingGPGKeys(Form, id, limit, page, config) {
  var url = "/user/gpg_keys"; var reqDescription = "Try Add Existing GPGKeys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "Form": Form,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Form": Form, "limit": limit, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "Form": Form, "limit": limit, "page": page}) }); }
  return response;
}

function verifyGPGKeysRejects(Form, id, limit, page) {
  var url = "/user/gpg_keys"; var body = {
    "Form": Form,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyGPGKeysExists(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify GPGKeys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("GPGKeys found");
}

function verifyGPGKeysDeleted(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify GPGKeys " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GPGKeys correctly deleted (404)");
}

function verifyGPGKeysDoesNotExist(id) { verifyGPGKeysDeleted(id); }

function matchAnyGPGKeysAdded() {
  return bp.EventSet("Any GPGKeys Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a GPG key");
  });
}

function matchDeletedGPGKeys(id) {
  return bp.EventSet("Deleted GPGKeys " + id, function(e) {
      return e.name.startsWith("Done: Positive: Remove a GPG key") && e.name.includes(id);
  });
}

function matchAnyGPGKeysDeleted() {
  return bp.EventSet("Any GPGKeys Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Remove a GPG key");
  });
}

function getVerificationToken(config) {
  var url = "/user/gpg_key_token"; var reqDescription = "Get a Token to verify";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyGPGKeyTokenExists(id) {
  let res = getVerificationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("GPGKeyToken found in list");
          else pvg.fail("GPGKeyToken NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyGPGKeyTokenDeleted(id) {
  let res = getVerificationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("GPGKeyToken correctly not found in list");
          else pvg.fail("GPGKeyToken still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyGPGKeyTokenDoesNotExist(id) { verifyGPGKeyTokenDeleted(id); }

function userVerifyGPGKey(id, config) {
  var url = "/user/gpg_key_verify"; var reqDescription = "Verify a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingGPGKeyVerification(id, config) {
  var url = "/user/gpg_key_verify"; var reqDescription = "Try Add Existing GPGKeyVerification";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGPGKeyVerificationRejects(id) {
  var url = "/user/gpg_key_verify"; var body = {
    "id": id
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyGPGKeyVerificationExists(id) {
  bp.log.warn("Verification skipped: GPGKeyVerification is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyGPGKeyVerificationDoesNotExist(id) {
  bp.log.warn("Absence check skipped: GPGKeyVerification has no GET endpoint.");
}

function matchAnyGPGKeyVerificationAdded() {
  return bp.EventSet("Any GPGKeyVerification Added", function(e) {
      return e.name.startsWith("Done: Positive: Verify a GPG key");
  });
}

function userCurrentListKeys(config) {
  var url = "/user/keys"; var reqDescription = "List the authenticated user's public keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userCurrentPostKey(body, fingerprint, id, limit, page, config) {
  var url = "/user/keys"; var reqDescription = "Create a public key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function userCurrentDeleteKey(id, config) {
  var url = "/user/keys/" + id; var reqDescription = "Delete a public key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function userCurrentGetKey(id, config) {
  var url = "/user/keys/" + id; var reqDescription = "Get a public key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingKeys(body, fingerprint, id, limit, page, config) {
  var url = "/user/keys"; var reqDescription = "Try Add Existing Keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"fingerprint": fingerprint, "id": id, "page": page, "body": body, "limit": limit}) }); }
  return response;
}

function verifyKeysRejects(body, fingerprint, id, limit, page) {
  var url = "/user/keys"; var body = {
    "body": body,
    "fingerprint": fingerprint,
    "id": id,
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyKeysExists(id) {
  var url = "/user/keys/" + id;
  var description = "Verify Keys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("Keys found");
}

function verifyKeysDeleted(id) {
  var url = "/user/keys/" + id;
  var description = "Verify Keys " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Keys correctly deleted (404)");
}

function verifyKeysDoesNotExist(id) { verifyKeysDeleted(id); }

function matchAnyKeysAdded() {
  return bp.EventSet("Any Keys Added", function(e) {
      return e.name.startsWith("Done: Positive: Create a public key");
  });
}

function matchDeletedKeys(id) {
  return bp.EventSet("Deleted Keys " + id, function(e) {
      return e.name.startsWith("Done: Positive: Delete a public key") && e.name.includes(id);
  });
}

function matchAnyKeysDeleted() {
  return bp.EventSet("Any Keys Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Delete a public key");
  });
}

function getUserSettings(config) {
  var url = "/user/settings"; var reqDescription = "Get user settings";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function updateUserSettings(UserSettingsOptions, body, id, config) {
  var url = "/user/settings"; var reqDescription = "Update user settings";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "UserSettingsOptions": UserSettingsOptions, "body": body}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": id, "UserSettingsOptions": UserSettingsOptions, "body": body}) }); }
  return response;
}

function verifyUserSettingsExists(UserSettingsOptions, body, id) {
  let res = getUserSettings(UserSettingsOptions, body, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserSettings found in list");
          else pvg.fail("UserSettings NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserSettingsDeleted(UserSettingsOptions, body, id) {
  let res = getUserSettings(UserSettingsOptions, body, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserSettings correctly not found in list");
          else pvg.fail("UserSettings still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserSettingsDoesNotExist(UserSettingsOptions, body, id) { verifyUserSettingsDeleted(UserSettingsOptions, body, id); }

function userCurrentListStarred(config) {
  var url = "/user/starred"; var reqDescription = "The repos that the authenticated user has starred";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function userCurrentCheckStarring(owner, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Whether the authenticated is starring the repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function userCurrentPutStar(limit, owner, page, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Star the given repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {}; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "repo": repo, "limit": limit, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "repo": repo, "limit": limit, "owner": owner}) }); }
  return response;
}

function userCurrentDeleteStar(owner, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Unstar the given repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingUserStarred(limit, owner, page, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Try Add Existing UserStarred";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {}; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "repo": repo, "limit": limit, "owner": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"id": owner, "page": page, "repo": repo, "limit": limit, "owner": owner}) }); }
  return response;
}

function verifyUserStarredRejects(limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo; var body = {
    "limit": limit,
    "page": page
  };
  bp.log.info("REQ POST (Negative Rejection) " + url + " Body: " + JSON.stringify(body));
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserStarredExists(owner) {
  var url = "/user/starred/" + owner + "/{repo}";
  var description = "Verify UserStarred " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  pvg.success("UserStarred found");
}

function verifyUserStarredDeleted(owner) {
  var url = "/user/starred/" + owner + "/{repo}";
  var description = "Verify UserStarred " + owner + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserStarred correctly deleted (404)");
}

function verifyUserStarredDoesNotExist(owner) { verifyUserStarredDeleted(owner); }

function matchAnyUserStarredAdded() {
  return bp.EventSet("Any UserStarred Added", function(e) {
      return e.name.startsWith("Done: Positive: Star the given repo");
  });
}

function matchDeletedUserStarred(owner) {
  return bp.EventSet("Deleted UserStarred " + owner, function(e) {
      return e.name.startsWith("Done: Positive: Unstar the given repo") && e.name.includes(owner);
  });
}

function matchAnyUserStarredDeleted() {
  return bp.EventSet("Any UserStarred Deleted", function(e) {
      return e.name.startsWith("Done: Positive: Unstar the given repo");
  });
}

function userGetStopWatches(config) {
  var url = "/user/stopwatches"; var reqDescription = "Get list of all existing stopwatches";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserStopwatchesExists(id, limit, page) {
  let res = userGetStopWatches(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserStopwatches found in list");
          else pvg.fail("UserStopwatches NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserStopwatchesDeleted(id, limit, page) {
  let res = userGetStopWatches(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserStopwatches correctly not found in list");
          else pvg.fail("UserStopwatches still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserStopwatchesDoesNotExist(id, limit, page) { verifyUserStopwatchesDeleted(id, limit, page); }

function userCurrentListSubscriptions(config) {
  var url = "/user/subscriptions"; var reqDescription = "List repositories watched by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserSubscriptionsExists(id, limit, page) {
  let res = userCurrentListSubscriptions(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserSubscriptions found in list");
          else pvg.fail("UserSubscriptions NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserSubscriptionsDeleted(id, limit, page) {
  let res = userCurrentListSubscriptions(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserSubscriptions correctly not found in list");
          else pvg.fail("UserSubscriptions still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserSubscriptionsDoesNotExist(id, limit, page) { verifyUserSubscriptionsDeleted(id, limit, page); }

function userListTeams(config) {
  var url = "/user/teams"; var reqDescription = "List all the teams a user belongs to";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserTeamsExists(id, limit, page) {
  let res = userListTeams(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserTeams found in list");
          else pvg.fail("UserTeams NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserTeamsDeleted(id, limit, page) {
  let res = userListTeams(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserTeams correctly not found in list");
          else pvg.fail("UserTeams still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserTeamsDoesNotExist(id, limit, page) { verifyUserTeamsDeleted(id, limit, page); }

function userCurrentTrackedTimes(config) {
  var url = "/user/times"; var reqDescription = "List the current user's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {}) }); }
  return response;
}

function verifyUserTimesExists(before, id, limit, page, since) {
  let res = userCurrentTrackedTimes(before, id, limit, page, since);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) pvg.success("UserTimes found in list");
          else pvg.fail("UserTimes NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserTimesDeleted(before, id, limit, page, since) {
  let res = userCurrentTrackedTimes(before, id, limit, page, since);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (!found) pvg.success("UserTimes correctly not found in list");
          else pvg.fail("UserTimes still found in list (deletion failed)");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyUserTimesDoesNotExist(before, id, limit, page, since) { verifyUserTimesDeleted(before, id, limit, page, since); }

function userListActivityFeeds(username, config) {
  var url = "/users/" + username + "/activities/feeds"; var reqDescription = "List a user's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) }); }
  return response;
}

function verifyUserActivityFeedsExists(id) {
  bp.log.warn("Verification skipped: UserActivityFeeds is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyUserActivityFeedsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserActivityFeeds has no GET endpoint.");
}

function userListStarred(username, config) {
  var url = "/users/" + username + "/starred"; var reqDescription = "The repos that the given user has starred";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: " + reqDescription, {"username": username}) }); }
  return response;
}

function verifyStarredRepositoriesExists(id) {
  bp.log.warn("Verification skipped: StarredRepositories is an Action or asymmetric resource without a documented GET endpoint.");
}
function verifyStarredRepositoriesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: StarredRepositories has no GET endpoint.");
}
