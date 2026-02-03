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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ActivityPub: " + reqDescription, {"id": user_id, "user-id": user_id}) }); }
  return response;
}

function verifyActivityPubRejects(user_id) {
  var url = "/activitypub/user-id/" + user_id + "/inbox"; var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyActivityPubExists(user_id) {
  var url = "/activitypub/user-id/" + user_id;
  var description = "Verify ActivityPub " + user_id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: ActivityPub: Verify " + user_id, {id: user_id}) });
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
  return bp.EventSet("matchAnyActivityPubAdded", function(e) {
    return e.name.includes("Done: Positive: ActivityPub: ");
  });
}

function adminCronList(config) {
  var url = "/admin/cron"; var reqDescription = "List cron tasks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {"id": id, "limit": limit, "task": task, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {"id": id, "limit": limit, "task": task, "page": page}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {"id": id, "limit": limit, "task": task, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: AdminCron: " + reqDescription, {"id": id, "limit": limit, "task": task, "page": page}) }); }
  return response;
}

function verifyAdminCronRejects(id, limit, page, task) {
  var url = "/admin/cron/" + task; var body = {
    "id": id,
    "limit": limit,
    "page": page
  };
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
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: AdminCron: Verify " + id, {id: id}) });
              pvg.success("AdminCron found in list");
          } else pvg.fail("AdminCron NOT found in list");
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
  return bp.EventSet("matchAnyAdminCronAdded", function(e) {
    return e.name.includes("Done: Positive: AdminCron: ");
  });
}

function adminGetAllEmails(config) {
  var url = "/admin/emails"; var reqDescription = "List all emails";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: AdminEmails: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: AdminEmails: " + reqDescription, {}) }); }
  return response;
}

function verifyAdminEmailsExists(id, limit, page) {
  let res = adminGetAllEmails(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: AdminEmails: Verify " + id, {id: id}) });
              pvg.success("AdminEmails found in list");
          } else pvg.fail("AdminEmails NOT found in list");
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

function matchAnyAdminEmailsAdded() {
  return bp.EventSet("matchAnyAdminEmailsAdded", function(e) {
    return e.name.includes("Done: Positive: AdminEmails: ");
  });
}

function adminSearchEmails(config) {
  var url = "/admin/emails/search"; var reqDescription = "Search all emails";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Emails: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Emails: " + reqDescription, {}) }); }
  return response;
}

function verifyEmailsExists(id, limit, page, q) {
  let res = adminSearchEmails(id, limit, page, q);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: Emails: Verify " + id, {id: id}) });
              pvg.success("Emails found in list");
          } else pvg.fail("Emails NOT found in list");
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

function matchAnyEmailsAdded() {
  return bp.EventSet("matchAnyEmailsAdded", function(e) {
    return e.name.includes("Done: Positive: Emails: ");
  });
}

function userListHooks(config) {
  var url = "/user/hooks"; var reqDescription = "List the authenticated user's webhooks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {}) }); }
  return response;
}

function userCreateHook(EditHookOption, body, id, limit, page, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function userDeleteHook(id, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Delete a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"id": id}) }); }
  return response;
}

function userGetHook(id, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Get a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"id": id}) }); }
  return response;
}

function userEditHook(EditHookOption, body, id, limit, page, config) {
  var url = "/user/hooks/" + id; var reqDescription = "Update a hook";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function tryToAddExistingHooks(EditHookOption, body, id, limit, page, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Hooks: " + reqDescription, {"body": body, "EditHookOption": EditHookOption, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function verifyHooksRejects(EditHookOption, body, id, limit, page) {
  var url = "/user/hooks"; var body = {
    "EditHookOption": EditHookOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyHooksExists(id) {
  var url = "/user/hooks/" + id;
  var description = "Verify Hooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Hooks: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyHooksAdded", function(e) {
    return e.name.includes("Done: Positive: Hooks: ");
  });
}

function matchAnyHooksDeleted() {
  return bp.EventSet("matchAnyHooksDeleted", function(e) {
    return e.name.includes("Done: Positive: Hooks: ") && e.name.includes("Delete");
  });
}

function orgListUserOrgs(username, config) {
  var url = "/users/" + username + "/orgs"; var reqDescription = "List a user's organizations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organizations: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organizations: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function userGet(username, config) {
  var url = "/users/" + username; var reqDescription = "Get a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organizations: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organizations: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function verifyOrganizationsExists(username) {
  var url = "/users/" + username;
  var description = "Verify Organizations " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Organizations: Verify " + username, {id: username}) });
  pvg.success("Organizations found");
}

function verifyOrganizationsDeleted(username) {
  var url = "/users/" + username;
  var description = "Verify Organizations " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Organizations correctly deleted (404)");
}

function verifyOrganizationsDoesNotExist(username) { verifyOrganizationsDeleted(username); }

function matchAnyOrganizationsAdded() {
  return bp.EventSet("matchAnyOrganizationsAdded", function(e) {
    return e.name.includes("Done: Positive: Organizations: ");
  });
}

function adminGetRunnerRegistrationToken(config) {
  var url = "/admin/runners/registration-token"; var reqDescription = "Get an global actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Runners: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Runners: " + reqDescription, {}) }); }
  return response;
}

function verifyRunnersExists(id) {
  let res = adminGetRunnerRegistrationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: Runners: Verify " + id, {id: id}) });
              pvg.success("Runners found in list");
          } else pvg.fail("Runners NOT found in list");
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

function matchAnyRunnersAdded() {
  return bp.EventSet("matchAnyRunnersAdded", function(e) {
    return e.name.includes("Done: Positive: Runners: ");
  });
}

function adminUnadoptedList(config) {
  var url = "/admin/unadopted"; var reqDescription = "List unadopted repositories";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {}) }); }
  return response;
}

function adminDeleteUnadoptedRepository(owner, repo, config) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var reqDescription = "Delete unadopted files";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"repo": repo, "id": owner, "owner": owner, "page": page, "pattern": pattern, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"repo": repo, "id": owner, "owner": owner, "page": page, "pattern": pattern, "limit": limit}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"repo": repo, "id": owner, "owner": owner, "page": page, "pattern": pattern, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: " + reqDescription, {"repo": repo, "id": owner, "owner": owner, "page": page, "pattern": pattern, "limit": limit}) }); }
  return response;
}

function verifyUnadoptedRepositoriesRejects(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo; var body = {
    "limit": limit,
    "page": page,
    "pattern": pattern
  };
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
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UnadoptedRepositories: Verify " + owner, {id: owner}) });
              pvg.success("UnadoptedRepositories found in list");
          } else pvg.fail("UnadoptedRepositories NOT found in list");
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
  return bp.EventSet("matchAnyUnadoptedRepositoriesAdded", function(e) {
    return e.name.includes("Done: Positive: UnadoptedRepositories: ");
  });
}

function matchAnyUnadoptedRepositoriesDeleted() {
  return bp.EventSet("matchAnyUnadoptedRepositoriesDeleted", function(e) {
    return e.name.includes("Done: Positive: UnadoptedRepositories: ") && e.name.includes("Delete");
  });
}

function userListSubscriptions(username, config) {
  var url = "/users/" + username + "/subscriptions"; var reqDescription = "List the repositories watched by a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function adminDeleteUser(username, config) {
  var url = "/admin/users/" + username; var reqDescription = "Delete a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function userGetHeatmapData(username, config) {
  var url = "/users/" + username + "/heatmap"; var reqDescription = "Get a user's heatmap";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function userGetTokens(username, config) {
  var url = "/users/" + username + "/tokens"; var reqDescription = "List the authenticated user's access tokens";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) }); }
  return response;
}

function userDeleteAccessToken(username, token, config) {
  var url = "/users/" + username + "/tokens/" + token; var reqDescription = "Delete an access token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username, "token": token}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"id": username, "username": username, "token": token}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Users: " + reqDescription, {"body": body, "page": page, "purge": purge, "id": username, "limit": limit, "token": token, "EditUserOption": EditUserOption, "username": username, "CreateUserOption": CreateUserOption}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUsersExists(username) {
  var url = "/users/" + username + "/heatmap";
  var description = "Verify Users " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Users: Verify " + username, {id: username}) });
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
  return bp.EventSet("matchAnyUsersAdded", function(e) {
    return e.name.includes("Done: Positive: Users: ");
  });
}

function matchAnyUsersDeleted() {
  return bp.EventSet("matchAnyUsersDeleted", function(e) {
    return e.name.includes("Done: Positive: Users: ") && e.name.includes("Delete");
  });
}

function adminListUserBadges(username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "List a user's badges";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"body": body, "username": username, "id": username, "UserBadgeOption": UserBadgeOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"body": body, "username": username, "id": username, "UserBadgeOption": UserBadgeOption}) }); }
  return response;
}

function adminDeleteUserBadges(username, config) {
  var url = "/admin/users/" + username + "/badges"; var reqDescription = "Remove a badge from a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"body": body, "username": username, "id": username, "UserBadgeOption": UserBadgeOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBadges: " + reqDescription, {"body": body, "username": username, "id": username, "UserBadgeOption": UserBadgeOption}) }); }
  return response;
}

function verifyUserBadgesRejects(UserBadgeOption, body, username) {
  var url = "/admin/users/" + username + "/badges"; var body = {
    "UserBadgeOption": UserBadgeOption,
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserBadgesExists(username) {
  bp.log.warn("Verification skipped: UserBadges is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserBadges: Verify " + username, {id: username}) });
}
function verifyUserBadgesDoesNotExist(username) {
  bp.log.warn("Absence check skipped: UserBadges has no GET endpoint.");
}

function matchAnyUserBadgesAdded() {
  return bp.EventSet("matchAnyUserBadgesAdded", function(e) {
    return e.name.includes("Done: Positive: UserBadges: ");
  });
}

function matchAnyUserBadgesDeleted() {
  return bp.EventSet("matchAnyUserBadgesDeleted", function(e) {
    return e.name.includes("Done: Positive: UserBadges: ") && e.name.includes("Delete");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "key": key, "id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "key": key, "id": username, "username": username}) }); }
  return response;
}

function adminDeleteUser(username, purge, config) {
  var url = "/admin/users/" + username; var reqDescription = "Delete a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes, queryParameters: {    "purge": purge} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "key": key, "id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserKeys: " + reqDescription, {"purge": purge, "key": key, "id": username, "username": username}) }); }
  return response;
}

function verifyUserKeysRejects(key, purge, username) {
  var url = "/admin/users/" + username + "/keys"; var body = {
    "key": key,
    "purge": purge
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserKeysExists(username) {
  bp.log.warn("Verification skipped: UserKeys is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserKeys: Verify " + username, {id: username}) });
}
function verifyUserKeysDoesNotExist(username) {
  bp.log.warn("Absence check skipped: UserKeys has no GET endpoint.");
}

function matchAnyUserKeysAdded() {
  return bp.EventSet("matchAnyUserKeysAdded", function(e) {
    return e.name.includes("Done: Positive: UserKeys: ");
  });
}

function matchAnyUserKeysDeleted() {
  return bp.EventSet("matchAnyUserKeysDeleted", function(e) {
    return e.name.includes("Done: Positive: UserKeys: ") && e.name.includes("Delete");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserOrganizations: " + reqDescription, {"id": id, "username": username, "organization": organization}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserOrganizations: " + reqDescription, {"id": id, "username": username, "organization": organization}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserOrganizations: " + reqDescription, {"id": id, "username": username, "organization": organization}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserOrganizations: " + reqDescription, {"id": id, "username": username, "organization": organization}) }); }
  return response;
}

function verifyUserOrganizationsRejects(id, organization, username) {
  var url = "/admin/users/" + username + "/orgs"; var body = {
    "id": id,
    "organization": organization
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserOrganizationsExists(id) {
  bp.log.warn("Verification skipped: UserOrganizations is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserOrganizations: Verify " + id, {id: id}) });
}
function verifyUserOrganizationsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserOrganizations has no GET endpoint.");
}

function matchAnyUserOrganizationsAdded() {
  return bp.EventSet("matchAnyUserOrganizationsAdded", function(e) {
    return e.name.includes("Done: Positive: UserOrganizations: ");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserRename: " + reqDescription, {"body": body, "id": id, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserRename: " + reqDescription, {"body": body, "id": id, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserRename: " + reqDescription, {"body": body, "id": id, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserRename: " + reqDescription, {"body": body, "id": id, "username": username}) }); }
  return response;
}

function verifyUserRenameRejects(body, id, username) {
  var url = "/admin/users/" + username + "/rename"; var body = {
    "body": body,
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserRenameExists(id) {
  bp.log.warn("Verification skipped: UserRename is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserRename: Verify " + id, {id: id}) });
}
function verifyUserRenameDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserRename has no GET endpoint.");
}

function matchAnyUserRenameAdded() {
  return bp.EventSet("matchAnyUserRenameAdded", function(e) {
    return e.name.includes("Done: Positive: UserRename: ");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserRepositories: " + reqDescription, {"repository": repository, "id": id, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserRepositories: " + reqDescription, {"repository": repository, "id": id, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserRepositories: " + reqDescription, {"repository": repository, "id": id, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserRepositories: " + reqDescription, {"repository": repository, "id": id, "username": username}) }); }
  return response;
}

function verifyUserRepositoriesRejects(id, repository, username) {
  var url = "/admin/users/" + username + "/repos"; var body = {
    "id": id,
    "repository": repository
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserRepositoriesExists(id) {
  bp.log.warn("Verification skipped: UserRepositories is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserRepositories: Verify " + id, {id: id}) });
}
function verifyUserRepositoriesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserRepositories has no GET endpoint.");
}

function matchAnyUserRepositoriesAdded() {
  return bp.EventSet("matchAnyUserRepositoriesAdded", function(e) {
    return e.name.includes("Done: Positive: UserRepositories: ");
  });
}

function listGitignoresTemplates(config) {
  var url = "/gitignore/templates"; var reqDescription = "Returns a list of all gitignore templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitignoreTemplates: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitignoreTemplates: " + reqDescription, {}) }); }
  return response;
}

function getGitignoreTemplateInfo(name, config) {
  var url = "/gitignore/templates/" + name; var reqDescription = "Returns information about a gitignore template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitignoreTemplates: " + reqDescription, {"name": name, "id": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitignoreTemplates: " + reqDescription, {"name": name, "id": name}) }); }
  return response;
}

function verifyGitignoreTemplatesExists(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GitignoreTemplates: Verify " + name, {id: name}) });
  pvg.success("GitignoreTemplates found");
}

function verifyGitignoreTemplatesDeleted(name) {
  var url = "/gitignore/templates/" + name;
  var description = "Verify GitignoreTemplates " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitignoreTemplates correctly deleted (404)");
}

function verifyGitignoreTemplatesDoesNotExist(name) { verifyGitignoreTemplatesDeleted(name); }

function matchAnyGitignoreTemplatesAdded() {
  return bp.EventSet("matchAnyGitignoreTemplatesAdded", function(e) {
    return e.name.includes("Done: Positive: GitignoreTemplates: ");
  });
}

function listLabelTemplates(config) {
  var url = "/label/templates"; var reqDescription = "Returns a list of all label templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: LabelTemplates: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: LabelTemplates: " + reqDescription, {}) }); }
  return response;
}

function getLabelTemplateInfo(name, config) {
  var url = "/label/templates/" + name; var reqDescription = "Returns all labels in a template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: LabelTemplates: " + reqDescription, {"name": name, "id": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: LabelTemplates: " + reqDescription, {"name": name, "id": name}) }); }
  return response;
}

function verifyLabelTemplatesExists(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: LabelTemplates: Verify " + name, {id: name}) });
  pvg.success("LabelTemplates found");
}

function verifyLabelTemplatesDeleted(name) {
  var url = "/label/templates/" + name;
  var description = "Verify LabelTemplates " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("LabelTemplates correctly deleted (404)");
}

function verifyLabelTemplatesDoesNotExist(name) { verifyLabelTemplatesDeleted(name); }

function matchAnyLabelTemplatesAdded() {
  return bp.EventSet("matchAnyLabelTemplatesAdded", function(e) {
    return e.name.includes("Done: Positive: LabelTemplates: ");
  });
}

function listLicenseTemplates(config) {
  var url = "/licenses"; var reqDescription = "Returns a list of all license templates";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: LicenseTemplates: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: LicenseTemplates: " + reqDescription, {}) }); }
  return response;
}

function verifyLicenseTemplatesExists(id) {
  let res = listLicenseTemplates(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: LicenseTemplates: Verify " + id, {id: id}) });
              pvg.success("LicenseTemplates found in list");
          } else pvg.fail("LicenseTemplates NOT found in list");
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

function matchAnyLicenseTemplatesAdded() {
  return bp.EventSet("matchAnyLicenseTemplatesAdded", function(e) {
    return e.name.includes("Done: Positive: LicenseTemplates: ");
  });
}

function getLicenseTemplateInfo(name, config) {
  var url = "/licenses/" + name; var reqDescription = "Returns information about a license template";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Licenses: " + reqDescription, {"name": name, "id": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Licenses: " + reqDescription, {"name": name, "id": name}) }); }
  return response;
}

function verifyLicensesExists(name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Licenses: Verify " + name, {id: name}) });
  pvg.success("Licenses found");
}

function verifyLicensesDeleted(name) {
  var url = "/licenses/" + name;
  var description = "Verify Licenses " + name + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Licenses correctly deleted (404)");
}

function verifyLicensesDoesNotExist(name) { verifyLicensesDeleted(name); }

function matchAnyLicensesAdded() {
  return bp.EventSet("matchAnyLicensesAdded", function(e) {
    return e.name.includes("Done: Positive: Licenses: ");
  });
}

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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Markdown: " + reqDescription, {"body": body, "id": id}) }); }
  return response;
}

function verifyMarkdownRejects(body, id) {
  var url = "/markdown"; var body = {
    "body": body,
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMarkdownExists(id) {
  bp.log.warn("Verification skipped: Markdown is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Markdown: Verify " + id, {id: id}) });
}
function verifyMarkdownDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Markdown has no GET endpoint.");
}

function matchAnyMarkdownAdded() {
  return bp.EventSet("matchAnyMarkdownAdded", function(e) {
    return e.name.includes("Done: Positive: Markdown: ");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Markup: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Markup: " + reqDescription, {"body": body, "id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Markup: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Markup: " + reqDescription, {"body": body, "id": id}) }); }
  return response;
}

function verifyMarkupRejects(body, id) {
  var url = "/markup"; var body = {
    "body": body,
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMarkupExists(id) {
  bp.log.warn("Verification skipped: Markup is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Markup: Verify " + id, {id: id}) });
}
function verifyMarkupDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Markup has no GET endpoint.");
}

function matchAnyMarkupAdded() {
  return bp.EventSet("matchAnyMarkupAdded", function(e) {
    return e.name.includes("Done: Positive: Markup: ");
  });
}

function getNodeInfo(config) {
  var url = "/nodeinfo"; var reqDescription = "Returns the nodeinfo of the Gitea application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: NodeInfo: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: NodeInfo: " + reqDescription, {}) }); }
  return response;
}

function verifyNodeInfoExists(id) {
  let res = getNodeInfo(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: NodeInfo: Verify " + id, {id: id}) });
              pvg.success("NodeInfo found in list");
          } else pvg.fail("NodeInfo NOT found in list");
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

function matchAnyNodeInfoAdded() {
  return bp.EventSet("matchAnyNodeInfoAdded", function(e) {
    return e.name.includes("Done: Positive: NodeInfo: ");
  });
}

function notifyGetRepoList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/notifications"; var reqDescription = "List users's notification threads on a specific repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"repo": repo, "subject-type": subject_type, "owner": owner, "id": id, "since": since, "page": page, "to-status": to_status, "last_read_at": last_read_at, "limit": limit, "before": before, "status-types": status_types, "all": all}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"repo": repo, "subject-type": subject_type, "owner": owner, "id": id, "since": since, "page": page, "to-status": to_status, "last_read_at": last_read_at, "limit": limit, "before": before, "status-types": status_types, "all": all}) }); }
  return response;
}

function notifyGetThread(id, config) {
  var url = "/notifications/threads/" + id; var reqDescription = "Get notification thread by ID";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"id": id}) }); }
  return response;
}

function notifyReadThread(all, before, id, last_read_at, limit, owner, page, repo, since, status_types, subject_type, to_status, config) {
  var url = "/notifications/threads/" + id; var reqDescription = "Mark notification thread as read by ID";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [205];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"repo": repo, "subject-type": subject_type, "owner": owner, "id": id, "since": since, "page": page, "to-status": to_status, "last_read_at": last_read_at, "limit": limit, "before": before, "status-types": status_types, "all": all}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {"repo": repo, "subject-type": subject_type, "owner": owner, "id": id, "since": since, "page": page, "to-status": to_status, "last_read_at": last_read_at, "limit": limit, "before": before, "status-types": status_types, "all": all}) }); }
  return response;
}

function notifyNewAvailable(config) {
  var url = "/notifications/new"; var reqDescription = "Check if unread notifications exist";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notifications: " + reqDescription, {}) }); }
  return response;
}

function verifyNotificationsExists(id) {
  var url = "/notifications/threads/" + id;
  var description = "Verify Notifications " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Notifications: Verify " + id, {id: id}) });
  pvg.success("Notifications found");
}

function verifyNotificationsDeleted(id) {
  var url = "/notifications/threads/" + id;
  var description = "Verify Notifications " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notifications correctly deleted (404)");
}

function verifyNotificationsDoesNotExist(id) { verifyNotificationsDeleted(id); }

function matchAnyNotificationsAdded() {
  return bp.EventSet("matchAnyNotificationsAdded", function(e) {
    return e.name.includes("Done: Positive: Notifications: ");
  });
}

function orgGetAll(config) {
  var url = "/orgs"; var reqDescription = "Get list of organizations";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {}) }); }
  return response;
}

function orgCreate(body, limit, org, organization, page, secretname, config) {
  var url = "/orgs"; var reqDescription = "Create an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "org": org,
    "organization": organization
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) }); }
  return response;
}

function createOrgRepoDeprecated(body, limit, org, organization, page, secretname, config) {
  var url = "/org/" + org + "/repos"; var reqDescription = "Create a repository in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) }); }
  return response;
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgEdit(body, limit, org, organization, page, secretname, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) }); }
  return response;
}

function orgGetRunnerRegistrationToken(org, config) {
  var url = "/orgs/" + org + "/actions/runners/registration-token"; var reqDescription = "Get an organization's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgListActionsSecrets(org, config) {
  var url = "/orgs/" + org + "/actions/secrets"; var reqDescription = "List an organization's actions secrets";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function deleteOrgSecret(org, secretname, config) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname; var reqDescription = "Delete a secret in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"secretname": secretname, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"secretname": secretname, "org": org, "id": org}) }); }
  return response;
}

function updateOrgSecret(body, limit, org, organization, page, secretname, config) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname; var reqDescription = "Create or Update a secret value in an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201, 204];
  var body = {
    "body": body
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) }); }
  return response;
}

function getOrgVariablesList(org, config) {
  var url = "/orgs/" + org + "/actions/variables"; var reqDescription = "Get an org-level variables list";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function tryToAddExistingOrganization(body, limit, org, organization, page, secretname, config) {
  var url = "/orgs"; var reqDescription = "Try Add Existing Organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "org": org,
    "organization": organization
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Organization: " + reqDescription, {"body": body, "organization": organization, "id": org, "page": page, "secretname": secretname, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationRejects(body, limit, org, organization, page, secretname) {
  var url = "/orgs"; var body = {
    "body": body,
    "limit": limit,
    "org": org,
    "organization": organization,
    "page": page,
    "secretname": secretname
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify Organization " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Organization: Verify " + org, {id: org}) });
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
  return bp.EventSet("matchAnyOrganizationAdded", function(e) {
    return e.name.includes("Done: Positive: Organization: ");
  });
}

function matchAnyOrganizationDeleted() {
  return bp.EventSet("matchAnyOrganizationDeleted", function(e) {
    return e.name.includes("Done: Positive: Organization: ") && e.name.includes("Delete");
  });
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"org": org, "id": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgVariables: " + reqDescription, {"body": body, "org": org, "variablename": variablename, "id": org}) }); }
  return response;
}

function verifyOrgVariablesRejects(body, org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename; var body = {
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrgVariablesExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrgVariables " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: OrgVariables: Verify " + org, {id: org}) });
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
  return bp.EventSet("matchAnyOrgVariablesAdded", function(e) {
    return e.name.includes("Done: Positive: OrgVariables: ");
  });
}

function matchAnyOrgVariablesDeleted() {
  return bp.EventSet("matchAnyOrgVariablesDeleted", function(e) {
    return e.name.includes("Done: Positive: OrgVariables: ") && e.name.includes("Delete");
  });
}

function orgListActivityFeeds(org, config) {
  var url = "/orgs/" + org + "/activities/feeds"; var reqDescription = "List an organization's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgActivityFeeds: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgActivityFeeds: " + reqDescription, {"org": org}) }); }
  return response;
}

function verifyOrgActivityFeedsExists(id) {
  bp.log.warn("Verification skipped: OrgActivityFeeds is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: OrgActivityFeeds: Verify " + id, {id: id}) });
}
function verifyOrgActivityFeedsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrgActivityFeeds has no GET endpoint.");
}

function matchAnyOrgActivityFeedsAdded() {
  return bp.EventSet("matchAnyOrgActivityFeedsAdded", function(e) {
    return e.name.includes("Done: Positive: OrgActivityFeeds: ");
  });
}

function orgDeleteAvatar(org, config) {
  var url = "/orgs/" + org + "/avatar"; var reqDescription = "Delete Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"org": org, "id": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"body": body, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"body": body, "org": org, "id": org}) }); }
  return response;
}

function tryToAddExistingOrgAvatar(body, org, config) {
  var url = "/orgs/" + org + "/avatar"; var reqDescription = "Try Add Existing OrgAvatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"body": body, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: " + reqDescription, {"body": body, "org": org, "id": org}) }); }
  return response;
}

function verifyOrgAvatarRejects(body, org) {
  var url = "/orgs/" + org + "/avatar"; var body = {
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrgAvatarExists(org) {
  bp.log.warn("Verification skipped: OrgAvatar is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: OrgAvatar: Verify " + org, {id: org}) });
}
function verifyOrgAvatarDoesNotExist(org) {
  bp.log.warn("Absence check skipped: OrgAvatar has no GET endpoint.");
}

function matchAnyOrgAvatarAdded() {
  return bp.EventSet("matchAnyOrgAvatarAdded", function(e) {
    return e.name.includes("Done: Positive: OrgAvatar: ");
  });
}

function matchAnyOrgAvatarDeleted() {
  return bp.EventSet("matchAnyOrgAvatarDeleted", function(e) {
    return e.name.includes("Done: Positive: OrgAvatar: ") && e.name.includes("Delete");
  });
}

function organizationListBlocks(org, config) {
  var url = "/orgs/" + org + "/blocks"; var reqDescription = "List users blocked by the organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgBlocks: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgBlocks: " + reqDescription, {"org": org}) }); }
  return response;
}

function verifyOrgBlocksExists(id) {
  bp.log.warn("Verification skipped: OrgBlocks is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: OrgBlocks: Verify " + id, {id: id}) });
}
function verifyOrgBlocksDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrgBlocks has no GET endpoint.");
}

function matchAnyOrgBlocksAdded() {
  return bp.EventSet("matchAnyOrgBlocksAdded", function(e) {
    return e.name.includes("Done: Positive: OrgBlocks: ");
  });
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgEdit(body, org, config) {
  var url = "/orgs/" + org; var reqDescription = "Edit an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {}; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"body": body, "org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: " + reqDescription, {"body": body, "org": org, "id": org}) }); }
  return response;
}

function verifyOrgBlockUserExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrgBlockUser " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: OrgBlockUser: Verify " + org, {id: org}) });
  pvg.success("OrgBlockUser found");
}

function verifyOrgBlockUserDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrgBlockUser " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrgBlockUser correctly deleted (404)");
}

function verifyOrgBlockUserDoesNotExist(org) { verifyOrgBlockUserDeleted(org); }

function matchAnyOrgBlockUserAdded() {
  return bp.EventSet("matchAnyOrgBlockUserAdded", function(e) {
    return e.name.includes("Done: Positive: OrgBlockUser: ");
  });
}

function matchAnyOrgBlockUserDeleted() {
  return bp.EventSet("matchAnyOrgBlockUserDeleted", function(e) {
    return e.name.includes("Done: Positive: OrgBlockUser: ") && e.name.includes("Delete");
  });
}

function issueListLabels(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var reqDescription = "Get all of a repository's labels";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function issueDeleteLabel(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/labels/" + id; var reqDescription = "Delete a label";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Labels: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function verifyLabelsRejects(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/labels"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyLabelsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Labels " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Labels: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyLabelsAdded", function(e) {
    return e.name.includes("Done: Positive: Labels: ");
  });
}

function matchAnyLabelsDeleted() {
  return bp.EventSet("matchAnyLabelsDeleted", function(e) {
    return e.name.includes("Done: Positive: Labels: ") && e.name.includes("Delete");
  });
}

function orgListMembers(org, config) {
  var url = "/orgs/" + org + "/members"; var reqDescription = "List an organization's members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Members: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Members: " + reqDescription, {"org": org}) }); }
  return response;
}

function verifyMembersExists(id) {
  bp.log.warn("Verification skipped: Members is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Members: Verify " + id, {id: id}) });
}
function verifyMembersDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Members has no GET endpoint.");
}

function matchAnyMembersAdded() {
  return bp.EventSet("matchAnyMembersAdded", function(e) {
    return e.name.includes("Done: Positive: Members: ");
  });
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationMembers: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationMembers: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationMembers: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationMembers: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function verifyOrganizationMembersExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: OrganizationMembers: Verify " + org, {id: org}) });
  pvg.success("OrganizationMembers found");
}

function verifyOrganizationMembersDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationMembers " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationMembers correctly deleted (404)");
}

function verifyOrganizationMembersDoesNotExist(org) { verifyOrganizationMembersDeleted(org); }

function matchAnyOrganizationMembersAdded() {
  return bp.EventSet("matchAnyOrganizationMembersAdded", function(e) {
    return e.name.includes("Done: Positive: OrganizationMembers: ");
  });
}

function matchAnyOrganizationMembersDeleted() {
  return bp.EventSet("matchAnyOrganizationMembersDeleted", function(e) {
    return e.name.includes("Done: Positive: OrganizationMembers: ") && e.name.includes("Delete");
  });
}

function orgListPublicMembers(org, config) {
  var url = "/orgs/" + org + "/public_members"; var reqDescription = "List an organization's public members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgDelete(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Delete an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) }); }
  return response;
}

function orgGet(org, config) {
  var url = "/orgs/" + org; var reqDescription = "Get an organization";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"org": org, "id": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"body": body, "id": org, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: " + reqDescription, {"body": body, "id": org, "page": page, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationPublicMembersExists(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationPublicMembers " + org + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: OrganizationPublicMembers: Verify " + org, {id: org}) });
  pvg.success("OrganizationPublicMembers found");
}

function verifyOrganizationPublicMembersDeleted(org) {
  var url = "/orgs/" + org;
  var description = "Verify OrganizationPublicMembers " + org + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("OrganizationPublicMembers correctly deleted (404)");
}

function verifyOrganizationPublicMembersDoesNotExist(org) { verifyOrganizationPublicMembersDeleted(org); }

function matchAnyOrganizationPublicMembersAdded() {
  return bp.EventSet("matchAnyOrganizationPublicMembersAdded", function(e) {
    return e.name.includes("Done: Positive: OrganizationPublicMembers: ");
  });
}

function matchAnyOrganizationPublicMembersDeleted() {
  return bp.EventSet("matchAnyOrganizationPublicMembersDeleted", function(e) {
    return e.name.includes("Done: Positive: OrganizationPublicMembers: ") && e.name.includes("Delete");
  });
}

function orgListRepos(org, config) {
  var url = "/orgs/" + org + "/repos"; var reqDescription = "List an organization's repos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"org": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationReposRejects(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/repos"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationReposExists(id) {
  bp.log.warn("Verification skipped: OrganizationRepos is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: OrganizationRepos: Verify " + id, {id: id}) });
}
function verifyOrganizationReposDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrganizationRepos has no GET endpoint.");
}

function matchAnyOrganizationReposAdded() {
  return bp.EventSet("matchAnyOrganizationReposAdded", function(e) {
    return e.name.includes("Done: Positive: OrganizationRepos: ");
  });
}

function orgListTeams(org, config) {
  var url = "/orgs/" + org + "/teams"; var reqDescription = "List an organization's teams";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"org": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: " + reqDescription, {"body": body, "id": id, "page": page, "limit": limit, "org": org}) }); }
  return response;
}

function verifyOrganizationTeamsRejects(body, id, limit, org, page) {
  var url = "/orgs/" + org + "/teams"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOrganizationTeamsExists(id) {
  bp.log.warn("Verification skipped: OrganizationTeams is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: OrganizationTeams: Verify " + id, {id: id}) });
}
function verifyOrganizationTeamsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: OrganizationTeams has no GET endpoint.");
}

function matchAnyOrganizationTeamsAdded() {
  return bp.EventSet("matchAnyOrganizationTeamsAdded", function(e) {
    return e.name.includes("Done: Positive: OrganizationTeams: ");
  });
}

function orgListTeamActivityFeeds(id, config) {
  var url = "/teams/" + id + "/activities/feeds"; var reqDescription = "List a team's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgEditTeam(EditTeamOption, body, date, id, limit, page, config) {
  var url = "/teams/" + id; var reqDescription = "Edit a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "EditTeamOption": EditTeamOption
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"body": body, "id": id, "EditTeamOption": EditTeamOption, "page": page, "limit": limit, "date": date}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Teams: " + reqDescription, {"body": body, "id": id, "EditTeamOption": EditTeamOption, "page": page, "limit": limit, "date": date}) }); }
  return response;
}

function verifyTeamsExists(id) {
  var url = "/teams/" + id;
  var description = "Verify Teams " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Teams: Verify " + id, {id: id}) });
  pvg.success("Teams found");
}

function verifyTeamsDeleted(id) {
  var url = "/teams/" + id;
  var description = "Verify Teams " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Teams correctly deleted (404)");
}

function verifyTeamsDoesNotExist(id) { verifyTeamsDeleted(id); }

function matchAnyTeamsAdded() {
  return bp.EventSet("matchAnyTeamsAdded", function(e) {
    return e.name.includes("Done: Positive: Teams: ");
  });
}

function matchAnyTeamsDeleted() {
  return bp.EventSet("matchAnyTeamsDeleted", function(e) {
    return e.name.includes("Done: Positive: Teams: ") && e.name.includes("Delete");
  });
}

function listPackages(owner, config) {
  var url = "/packages/" + owner; var reqDescription = "Gets all packages of an owner";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"owner": owner, "id": owner}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"owner": owner, "id": owner}) }); }
  return response;
}

function listPackages(owner, page, limit, type, q, config) {
  var url = "/packages/" + owner; var reqDescription = "Gets all packages of an owner";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes, queryParameters: {    "page": page,     "limit": limit,     "type": type,     "q": q} });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"id": owner, "q": q, "owner": owner, "page": page, "limit": limit, "type": type}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"id": owner, "q": q, "owner": owner, "page": page, "limit": limit, "type": type}) }); }
  return response;
}

function deletePackage(owner, type, name, version, config) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version; var reqDescription = "Delete a package";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"version": version, "id": owner, "owner": owner, "type": type, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"version": version, "id": owner, "owner": owner, "type": type, "name": name}) }); }
  return response;
}

function listPackageFiles(owner, type, name, version, config) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files"; var reqDescription = "Gets all files of a package";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"version": version, "id": owner, "owner": owner, "type": type, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Packages: " + reqDescription, {"version": version, "id": owner, "owner": owner, "type": type, "name": name}) }); }
  return response;
}

function verifyPackagesExists(owner) {
  var url = "/packages/" + owner;
  var description = "Verify Packages " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Packages: Verify " + owner, {id: owner}) });
  pvg.success("Packages found");
}

function verifyPackagesDeleted(owner) {
  var url = "/packages/" + owner;
  var description = "Verify Packages " + owner + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Packages correctly deleted (404)");
}

function verifyPackagesDoesNotExist(owner) { verifyPackagesDeleted(owner); }

function matchAnyPackagesAdded() {
  return bp.EventSet("matchAnyPackagesAdded", function(e) {
    return e.name.includes("Done: Positive: Packages: ");
  });
}

function matchAnyPackagesDeleted() {
  return bp.EventSet("matchAnyPackagesDeleted", function(e) {
    return e.name.includes("Done: Positive: Packages: ") && e.name.includes("Delete");
  });
}

function issueGetIssueReactions(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var reqDescription = "Get a list reactions of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issuePostIssueReaction(body, content, id, index, limit, owner, page, position, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"id": id}) }); }
  return response;
}

function moveIssuePin(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position; var reqDescription = "Moves the Pin to the given Position";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function issueDeleteTime(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id; var reqDescription = "Delete specific tracked time";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) }); }
  return response;
}

function issueClearLabels(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels"; var reqDescription = "Remove all labels from an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueGetLabels(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels"; var reqDescription = "Get an issue's labels";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueAddLabel(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels"; var reqDescription = "Add a label to an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function issueReplaceLabels(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels"; var reqDescription = "Replace an issue's labels";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function issueRemoveLabel(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels/" + id; var reqDescription = "Remove a label from an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) }); }
  return response;
}

function unpinIssue(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin"; var reqDescription = "Unpin an Issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function pinIssue(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin"; var reqDescription = "Pin an Issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function issueDeleteStopWatch(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete"; var reqDescription = "Delete an issue's existing stopwatch.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function issueStartStopWatch(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start"; var reqDescription = "Start stopwatch on an issue.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function issueStopStopWatch(body, content, id, index, limit, owner, page, position, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop"; var reqDescription = "Stop an issue's existing stopwatch.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [201];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function tryToAddExistingIssues(body, content, id, index, limit, owner, page, position, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issues: " + reqDescription, {"body": body, "position": position, "content": content, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function verifyIssuesRejects(body, content, id, index, limit, owner, page, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions"; var body = {
    "body": body,
    "content": content,
    "id": id,
    "limit": limit,
    "page": page,
    "position": position
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssuesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Issues " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Issues: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyIssuesAdded", function(e) {
    return e.name.includes("Done: Positive: Issues: ");
  });
}

function matchAnyIssuesDeleted() {
  return bp.EventSet("matchAnyIssuesDeleted", function(e) {
    return e.name.includes("Done: Positive: Issues: ") && e.name.includes("Delete");
  });
}

function repoMergeUpstream(EditRepoOption, body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream"; var reqDescription = "Merge a branch from upstream";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) }); }
  return response;
}

function repoGetLanguages(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/languages"; var reqDescription = "Get languages and number of bytes of code written";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoDeleteAvatar(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/avatar"; var reqDescription = "Delete avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEdit(EditRepoOption, body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo; var reqDescription = "Edit a repository's properties. Only fields that are set will be changed.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "EditRepoOption": EditRepoOption,
    "id": id
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) }); }
  return response;
}

function repoGetRunnerRegistrationToken(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/runners/registration-token"; var reqDescription = "Get a repository's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoListActionsSecrets(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets"; var reqDescription = "List an repo's actions secrets";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function tryToAddExistingRepository(EditRepoOption, body, id, limit, owner, page, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream"; var reqDescription = "Try Add Existing Repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repository: " + reqDescription, {"body": body, "repo": repo, "EditRepoOption": EditRepoOption, "id": id, "owner": owner, "page": page, "limit": limit}) }); }
  return response;
}

function verifyRepositoryRejects(EditRepoOption, body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream"; var body = {
    "EditRepoOption": EditRepoOption,
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repository " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Repository: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyRepositoryAdded", function(e) {
    return e.name.includes("Done: Positive: Repository: ");
  });
}

function matchAnyRepositoryDeleted() {
  return bp.EventSet("matchAnyRepositoryDeleted", function(e) {
    return e.name.includes("Done: Positive: Repository: ") && e.name.includes("Delete");
  });
}

function deleteRepoSecret(owner, repo, secretname, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname; var reqDescription = "Delete a secret in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Secrets: " + reqDescription, {"owner": owner, "secretname": secretname, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Secrets: " + reqDescription, {"owner": owner, "secretname": secretname, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Secrets: " + reqDescription, {"body": body, "repo": repo, "CreateOrUpdateSecretOption": CreateOrUpdateSecretOption, "id": owner, "owner": owner, "secretname": secretname}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Secrets: " + reqDescription, {"body": body, "repo": repo, "CreateOrUpdateSecretOption": CreateOrUpdateSecretOption, "id": owner, "owner": owner, "secretname": secretname}) }); }
  return response;
}

function verifySecretsExists(owner) {
  bp.log.warn("Verification skipped: Secrets is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Secrets: Verify " + owner, {id: owner}) });
}
function verifySecretsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: Secrets has no GET endpoint.");
}

function matchAnySecretsAdded() {
  return bp.EventSet("matchAnySecretsAdded", function(e) {
    return e.name.includes("Done: Positive: Secrets: ");
  });
}

function matchAnySecretsDeleted() {
  return bp.EventSet("matchAnySecretsDeleted", function(e) {
    return e.name.includes("Done: Positive: Secrets: ") && e.name.includes("Delete");
  });
}

function ListActionTasks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/tasks"; var reqDescription = "List a repository's action tasks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tasks: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tasks: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyTasksExists(id) {
  bp.log.warn("Verification skipped: Tasks is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Tasks: Verify " + id, {id: id}) });
}
function verifyTasksDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Tasks has no GET endpoint.");
}

function matchAnyTasksAdded() {
  return bp.EventSet("matchAnyTasksAdded", function(e) {
    return e.name.includes("Done: Positive: Tasks: ");
  });
}

function getRepoVariablesList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables"; var reqDescription = "Get repo-level variables list";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) }); }
  return response;
}

function deleteRepoVariable(owner, repo, variablename, config) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename; var reqDescription = "Delete a repo-level variable";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"owner": owner, "variablename": variablename, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"owner": owner, "variablename": variablename, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Variables: " + reqDescription, {"body": body, "repo": repo, "UpdateVariableOption": UpdateVariableOption, "owner": owner, "id": id, "page": page, "limit": limit, "variablename": variablename, "CreateVariableOption": CreateVariableOption}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyVariablesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Variables " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Variables: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyVariablesAdded", function(e) {
    return e.name.includes("Done: Positive: Variables: ");
  });
}

function matchAnyVariablesDeleted() {
  return bp.EventSet("matchAnyVariablesDeleted", function(e) {
    return e.name.includes("Done: Positive: Variables: ") && e.name.includes("Delete");
  });
}

function repoListActivityFeeds(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/activities/feeds"; var reqDescription = "List a repository's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ActivityFeeds: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ActivityFeeds: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyActivityFeedsExists(id) {
  bp.log.warn("Verification skipped: ActivityFeeds is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: ActivityFeeds: Verify " + id, {id: id}) });
}
function verifyActivityFeedsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: ActivityFeeds has no GET endpoint.");
}

function matchAnyActivityFeedsAdded() {
  return bp.EventSet("matchAnyActivityFeedsAdded", function(e) {
    return e.name.includes("Done: Positive: ActivityFeeds: ");
  });
}

function repoDeleteBranchProtection(owner, repo, name, config) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name; var reqDescription = "Delete a specific branch protection for the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"owner": owner, "repo": repo, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"owner": owner, "repo": repo, "name": name}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditBranchProtection(body, id, name, owner, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: BranchProtections: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "name": name}) }); }
  return response;
}

function verifyBranchProtectionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify BranchProtections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: BranchProtections: Verify " + id, {id: id}) });
  pvg.success("BranchProtections found");
}

function verifyBranchProtectionsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify BranchProtections " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("BranchProtections correctly deleted (404)");
}

function verifyBranchProtectionsDoesNotExist(id) { verifyBranchProtectionsDeleted(id); }

function matchAnyBranchProtectionsAdded() {
  return bp.EventSet("matchAnyBranchProtectionsAdded", function(e) {
    return e.name.includes("Done: Positive: BranchProtections: ");
  });
}

function matchAnyBranchProtectionsDeleted() {
  return bp.EventSet("matchAnyBranchProtectionsDeleted", function(e) {
    return e.name.includes("Done: Positive: BranchProtections: ") && e.name.includes("Delete");
  });
}

function repoListBranches(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var reqDescription = "List a repository's branches";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateBranch(body, branch, id, limit, owner, page, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) }); }
  return response;
}

function repoDeleteBranch(owner, repo, branch, config) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch; var reqDescription = "Delete a specific branch from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"owner": owner, "branch": branch, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"owner": owner, "branch": branch, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoUpdateBranch(body, branch, id, limit, owner, page, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) }); }
  return response;
}

function tryToAddExistingBranches(body, branch, id, limit, owner, page, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Branches: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "branch": branch}) }); }
  return response;
}

function verifyBranchesRejects(body, branch, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches"; var body = {
    "body": body,
    "branch": branch,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyBranchesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Branches " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Branches: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyBranchesAdded", function(e) {
    return e.name.includes("Done: Positive: Branches: ");
  });
}

function matchAnyBranchesDeleted() {
  return bp.EventSet("matchAnyBranchesDeleted", function(e) {
    return e.name.includes("Done: Positive: Branches: ") && e.name.includes("Delete");
  });
}

function repoListCollaborators(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators"; var reqDescription = "List a repository's collaborators";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoDeleteCollaborator(owner, repo, collaborator, config) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var reqDescription = "Delete a collaborator from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"owner": owner, "collaborator": collaborator, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"owner": owner, "collaborator": collaborator, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoAddCollaborator(body, collaborator, id, limit, owner, page, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "collaborator": collaborator, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "collaborator": collaborator, "page": page, "limit": limit}) }); }
  return response;
}

function tryToAddExistingCollaborators(body, collaborator, id, limit, owner, page, repo, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "collaborator": collaborator, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Collaborators: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "collaborator": collaborator, "page": page, "limit": limit}) }); }
  return response;
}

function verifyCollaboratorsRejects(body, collaborator, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyCollaboratorsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Collaborators " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Collaborators: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyCollaboratorsAdded", function(e) {
    return e.name.includes("Done: Positive: Collaborators: ");
  });
}

function matchAnyCollaboratorsDeleted() {
  return bp.EventSet("matchAnyCollaboratorsDeleted", function(e) {
    return e.name.includes("Done: Positive: Collaborators: ") && e.name.includes("Delete");
  });
}

function repoGetAllCommits(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits"; var reqDescription = "Get a list of all commits from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoListStatusesByRef(owner, repo, ref, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses"; var reqDescription = "Get a commit's statuses, by branch/tag/commit reference";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "ref": ref, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "ref": ref, "repo": repo}) }); }
  return response;
}

function repoGetCommitPullRequest(owner, repo, sha, config) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + sha + "/pull"; var reqDescription = "Get the merged pull request of the commit";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo, "sha": sha}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo, "sha": sha}) }); }
  return response;
}

function repoDownloadCommitDiffOrPatch(owner, repo, sha, diffType, config) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType; var reqDescription = "Get a commit's diff or patch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo, "diffType": diffType, "sha": sha}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Commits: " + reqDescription, {"owner": owner, "repo": repo, "diffType": diffType, "sha": sha}) }); }
  return response;
}

function verifyCommitsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Commits " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Commits: Verify " + id, {id: id}) });
  pvg.success("Commits found");
}

function verifyCommitsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Commits " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Commits correctly deleted (404)");
}

function verifyCommitsDoesNotExist(id) { verifyCommitsDeleted(id); }

function matchAnyCommitsAdded() {
  return bp.EventSet("matchAnyCommitsAdded", function(e) {
    return e.name.includes("Done: Positive: Commits: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"id": id}) }); }
  return response;
}

function userListRepos(username, config) {
  var url = "/users/" + username + "/repos"; var reqDescription = "List the repos owned by the given user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"username": username}) }); }
  return response;
}

function createCurrentUserRepo(CreateRepoOption, body, id, limit, owner, page, repo, username, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) }); }
  return response;
}

function userCurrentDeleteSubscription(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/subscription"; var reqDescription = "Unwatch a repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function userCurrentPutSubscription(CreateRepoOption, body, id, limit, owner, page, repo, username, config) {
  var url = "/repos/" + owner + "/" + repo + "/subscription"; var reqDescription = "Watch a repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ PUT " + url + " Body: " + JSON.stringify(body));
  let response = svc.put(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) }); }
  return response;
}

function userListStarred(username, config) {
  var url = "/users/" + username + "/starred"; var reqDescription = "The repos that the given user has starred";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"username": username}) }); }
  return response;
}

function tryToAddExistingRepositories(CreateRepoOption, body, id, limit, owner, page, repo, username, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Repositories: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "username": username, "page": page, "limit": limit, "CreateRepoOption": CreateRepoOption}) }); }
  return response;
}

function verifyRepositoriesRejects(CreateRepoOption, body, id, limit, owner, page, repo, username) {
  var url = "/user/repos"; var body = {
    "CreateRepoOption": CreateRepoOption,
    "body": body,
    "id": id,
    "limit": limit,
    "owner": owner,
    "page": page,
    "repo": repo,
    "username": username
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoriesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Repositories " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Repositories: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyRepositoriesAdded", function(e) {
    return e.name.includes("Done: Positive: Repositories: ");
  });
}

function matchAnyRepositoriesDeleted() {
  return bp.EventSet("matchAnyRepositoriesDeleted", function(e) {
    return e.name.includes("Done: Positive: Repositories: ") && e.name.includes("Delete");
  });
}

function listForks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var reqDescription = "List a repository's forks";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Forks: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function verifyForksRejects(body, id, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyForksExists(id) {
  bp.log.warn("Verification skipped: Forks is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Forks: Verify " + id, {id: id}) });
}
function verifyForksDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Forks has no GET endpoint.");
}

function matchAnyForksAdded() {
  return bp.EventSet("matchAnyForksAdded", function(e) {
    return e.name.includes("Done: Positive: Forks: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Blobs: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Blobs: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyBlobsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Blobs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Blobs: Verify " + id, {id: id}) });
  pvg.success("Blobs found");
}

function verifyBlobsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Blobs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Blobs correctly deleted (404)");
}

function verifyBlobsDoesNotExist(id) { verifyBlobsDeleted(id); }

function matchAnyBlobsAdded() {
  return bp.EventSet("matchAnyBlobsAdded", function(e) {
    return e.name.includes("Done: Positive: Blobs: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Notes: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Notes: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyNotesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Notes " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Notes: Verify " + id, {id: id}) });
  pvg.success("Notes found");
}

function verifyNotesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Notes " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Notes correctly deleted (404)");
}

function verifyNotesDoesNotExist(id) { verifyNotesDeleted(id); }

function matchAnyNotesAdded() {
  return bp.EventSet("matchAnyNotesAdded", function(e) {
    return e.name.includes("Done: Positive: Notes: ");
  });
}

function repoListAllGitRefs(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs"; var reqDescription = "Get specified ref or filtered repository's refs";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitRefs: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitRefs: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitRefs: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitRefs: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitRefsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitRefs " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GitRefs: Verify " + id, {id: id}) });
  pvg.success("GitRefs found");
}

function verifyGitRefsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitRefs " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitRefs correctly deleted (404)");
}

function verifyGitRefsDoesNotExist(id) { verifyGitRefsDeleted(id); }

function matchAnyGitRefsAdded() {
  return bp.EventSet("matchAnyGitRefsAdded", function(e) {
    return e.name.includes("Done: Positive: GitRefs: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitTags: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitTags: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitTagsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTags " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GitTags: Verify " + id, {id: id}) });
  pvg.success("GitTags found");
}

function verifyGitTagsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTags " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTags correctly deleted (404)");
}

function verifyGitTagsDoesNotExist(id) { verifyGitTagsDeleted(id); }

function matchAnyGitTagsAdded() {
  return bp.EventSet("matchAnyGitTagsAdded", function(e) {
    return e.name.includes("Done: Positive: GitTags: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitTrees: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitTrees: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGitTreesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTrees " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GitTrees: Verify " + id, {id: id}) });
  pvg.success("GitTrees found");
}

function verifyGitTreesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitTrees " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitTrees correctly deleted (404)");
}

function verifyGitTreesDoesNotExist(id) { verifyGitTreesDeleted(id); }

function matchAnyGitTreesAdded() {
  return bp.EventSet("matchAnyGitTreesAdded", function(e) {
    return e.name.includes("Done: Positive: GitTrees: ");
  });
}

function repoListGitHooks(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git"; var reqDescription = "List the Git hooks in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteGitHook(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id; var reqDescription = "Delete a Git hook in a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GitHooks: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function verifyGitHooksExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitHooks " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GitHooks: Verify " + id, {id: id}) });
  pvg.success("GitHooks found");
}

function verifyGitHooksDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify GitHooks " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("GitHooks correctly deleted (404)");
}

function verifyGitHooksDoesNotExist(id) { verifyGitHooksDeleted(id); }

function matchAnyGitHooksAdded() {
  return bp.EventSet("matchAnyGitHooksAdded", function(e) {
    return e.name.includes("Done: Positive: GitHooks: ");
  });
}

function matchAnyGitHooksDeleted() {
  return bp.EventSet("matchAnyGitHooksDeleted", function(e) {
    return e.name.includes("Done: Positive: GitHooks: ") && e.name.includes("Delete");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueConfig: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueConfig: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyIssueConfigExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueConfig " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: IssueConfig: Verify " + id, {id: id}) });
  pvg.success("IssueConfig found");
}

function verifyIssueConfigDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueConfig " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("IssueConfig correctly deleted (404)");
}

function verifyIssueConfigDoesNotExist(id) { verifyIssueConfigDeleted(id); }

function matchAnyIssueConfigAdded() {
  return bp.EventSet("matchAnyIssueConfigAdded", function(e) {
    return e.name.includes("Done: Positive: IssueConfig: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueConfig: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueConfig: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyRepositoryIssueConfigExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify RepositoryIssueConfig " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueConfig: Verify " + id, {id: id}) });
  pvg.success("RepositoryIssueConfig found");
}

function verifyRepositoryIssueConfigDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify RepositoryIssueConfig " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RepositoryIssueConfig correctly deleted (404)");
}

function verifyRepositoryIssueConfigDoesNotExist(id) { verifyRepositoryIssueConfigDeleted(id); }

function matchAnyRepositoryIssueConfigAdded() {
  return bp.EventSet("matchAnyRepositoryIssueConfigAdded", function(e) {
    return e.name.includes("Done: Positive: RepositoryIssueConfig: ");
  });
}

function repoGetIssueTemplates(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issue_templates"; var reqDescription = "Get available issue templates for a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueTemplates: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueTemplates: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyRepositoryIssueTemplatesExists(id) {
  bp.log.warn("Verification skipped: RepositoryIssueTemplates is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: RepositoryIssueTemplates: Verify " + id, {id: id}) });
}
function verifyRepositoryIssueTemplatesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: RepositoryIssueTemplates has no GET endpoint.");
}

function matchAnyRepositoryIssueTemplatesAdded() {
  return bp.EventSet("matchAnyRepositoryIssueTemplatesAdded", function(e) {
    return e.name.includes("Done: Positive: RepositoryIssueTemplates: ");
  });
}

function issueGetComments(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var reqDescription = "List all comments on an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"id": id}) }); }
  return response;
}

function issueDeleteCommentDeprecated(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id; var reqDescription = "Delete a comment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueComments: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "since": since, "index": index, "before": before}) }); }
  return response;
}

function verifyIssueCommentsRejects(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments"; var body = {
    "before": before,
    "body": body,
    "id": id,
    "since": since
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueComments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: IssueComments: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyIssueCommentsAdded", function(e) {
    return e.name.includes("Done: Positive: IssueComments: ");
  });
}

function matchAnyIssueCommentsDeleted() {
  return bp.EventSet("matchAnyIssueCommentsDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueComments: ") && e.name.includes("Delete");
  });
}

function issueListIssueCommentAttachments(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var reqDescription = "List comment's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function issueDeleteIssueCommentAttachment(owner, repo, id, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id; var reqDescription = "Delete a comment attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"owner": owner, "id": id, "attachment_id": attachment_id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"owner": owner, "id": id, "attachment_id": attachment_id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function verifyIssueCommentAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets"; var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueCommentAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: IssueCommentAttachments: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyIssueCommentAttachmentsAdded", function(e) {
    return e.name.includes("Done: Positive: IssueCommentAttachments: ");
  });
}

function matchAnyIssueCommentAttachmentsDeleted() {
  return bp.EventSet("matchAnyIssueCommentAttachmentsDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueCommentAttachments: ") && e.name.includes("Delete");
  });
}

function issueGetCommentReactions(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Get a list of reactions from a comment of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"owner": owner, "id": id, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"owner": owner, "id": id, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"id": owner, "repo": repo, "content": content, "owner": owner, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"id": owner, "repo": repo, "content": content, "owner": owner, "id": id}) }); }
  return response;
}

function issueDeleteCommentReaction(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var reqDescription = "Remove a reaction from a comment of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"owner": owner, "id": id, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"owner": owner, "id": id, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"id": owner, "repo": repo, "content": content, "owner": owner, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: " + reqDescription, {"id": owner, "repo": repo, "content": content, "owner": owner, "id": id}) }); }
  return response;
}

function verifyIssueCommentReactionsRejects(content, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions"; var body = {
    "content": content
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueCommentReactionsExists(owner) {
  bp.log.warn("Verification skipped: IssueCommentReactions is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: IssueCommentReactions: Verify " + owner, {id: owner}) });
}
function verifyIssueCommentReactionsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueCommentReactions has no GET endpoint.");
}

function matchAnyIssueCommentReactionsAdded() {
  return bp.EventSet("matchAnyIssueCommentReactionsAdded", function(e) {
    return e.name.includes("Done: Positive: IssueCommentReactions: ");
  });
}

function matchAnyIssueCommentReactionsDeleted() {
  return bp.EventSet("matchAnyIssueCommentReactionsDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueCommentReactions: ") && e.name.includes("Delete");
  });
}

function repoListPinnedIssues(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/pinned"; var reqDescription = "List a repo's pinned issues";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PinnedIssues: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PinnedIssues: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyPinnedIssuesExists(id) {
  bp.log.warn("Verification skipped: PinnedIssues is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: PinnedIssues: Verify " + id, {id: id}) });
}
function verifyPinnedIssuesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PinnedIssues has no GET endpoint.");
}

function matchAnyPinnedIssuesAdded() {
  return bp.EventSet("matchAnyPinnedIssuesAdded", function(e) {
    return e.name.includes("Done: Positive: PinnedIssues: ");
  });
}

function issueListIssueAttachments(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets"; var reqDescription = "List issue's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function issueDeleteIssueAttachment(owner, repo, index, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id; var reqDescription = "Delete an issue attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"owner": owner, "index": index, "attachment_id": attachment_id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"owner": owner, "index": index, "attachment_id": attachment_id, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "index": index, "attachment_id": attachment_id, "name": name}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: IssueAttachments: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyIssueAttachmentsAdded", function(e) {
    return e.name.includes("Done: Positive: IssueAttachments: ");
  });
}

function matchAnyIssueAttachmentsDeleted() {
  return bp.EventSet("matchAnyIssueAttachmentsDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueAttachments: ") && e.name.includes("Delete");
  });
}

function issueRemoveIssueBlocking(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "Unblock the issue given in the body by the issue in path";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) }); }
  return response;
}

function issueListBlocks(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var reqDescription = "List issues that are blocked by this issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "page": page, "index": index, "limit": limit}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function verifyIssueBlocksRejects(body, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks"; var body = {
    "body": body,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueBlocksExists(owner) {
  bp.log.warn("Verification skipped: IssueBlocks is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: IssueBlocks: Verify " + owner, {id: owner}) });
}
function verifyIssueBlocksDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueBlocks has no GET endpoint.");
}

function matchAnyIssueBlocksAdded() {
  return bp.EventSet("matchAnyIssueBlocksAdded", function(e) {
    return e.name.includes("Done: Positive: IssueBlocks: ");
  });
}

function matchAnyIssueBlocksDeleted() {
  return bp.EventSet("matchAnyIssueBlocksDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueBlocks: ") && e.name.includes("Delete");
  });
}

function issueSubscriptions(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions"; var reqDescription = "Get users who subscribed on an issue.";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "user": user}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "user": user}) }); }
  return response;
}

function issueDeleteSubscription(owner, repo, index, user, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var reqDescription = "Unsubscribe user from issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 304];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"owner": owner, "index": index, "user": user, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"owner": owner, "index": index, "user": user, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "user": user}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "user": user}) }); }
  return response;
}

function verifyIssueSubscriptionsRejects(id, index, limit, owner, page, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user; var body = {
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueSubscriptionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify IssueSubscriptions " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: IssueSubscriptions: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyIssueSubscriptionsAdded", function(e) {
    return e.name.includes("Done: Positive: IssueSubscriptions: ");
  });
}

function matchAnyIssueSubscriptionsDeleted() {
  return bp.EventSet("matchAnyIssueSubscriptionsDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueSubscriptions: ") && e.name.includes("Delete");
  });
}

function issueGetCommentsAndTimeline(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/timeline"; var reqDescription = "List all comments and events on an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueTimeline: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueTimeline: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function verifyIssueTimelineExists(id) {
  bp.log.warn("Verification skipped: IssueTimeline is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: IssueTimeline: Verify " + id, {id: id}) });
}
function verifyIssueTimelineDoesNotExist(id) {
  bp.log.warn("Absence check skipped: IssueTimeline has no GET endpoint.");
}

function matchAnyIssueTimelineAdded() {
  return bp.EventSet("matchAnyIssueTimelineAdded", function(e) {
    return e.name.includes("Done: Positive: IssueTimeline: ");
  });
}

function issueTrackedTimes(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "List an issue's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "since": since, "page": page, "index": index, "limit": limit, "before": before, "user": user}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "since": since, "page": page, "index": index, "limit": limit, "before": before, "user": user}) }); }
  return response;
}

function issueResetTime(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times"; var reqDescription = "Reset a tracked time of an issue";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "since": since, "page": page, "index": index, "limit": limit, "before": before, "user": user}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: IssueTimes: " + reqDescription, {"body": body, "repo": repo, "id": owner, "owner": owner, "since": since, "page": page, "index": index, "limit": limit, "before": before, "user": user}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueTimesExists(owner) {
  bp.log.warn("Verification skipped: IssueTimes is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: IssueTimes: Verify " + owner, {id: owner}) });
}
function verifyIssueTimesDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: IssueTimes has no GET endpoint.");
}

function matchAnyIssueTimesAdded() {
  return bp.EventSet("matchAnyIssueTimesAdded", function(e) {
    return e.name.includes("Done: Positive: IssueTimes: ");
  });
}

function matchAnyIssueTimesDeleted() {
  return bp.EventSet("matchAnyIssueTimesDeleted", function(e) {
    return e.name.includes("Done: Positive: IssueTimes: ") && e.name.includes("Delete");
  });
}

function repoListKeys(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys"; var reqDescription = "List a repository's keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"body": body, "repo": repo, "key_id": key_id, "id": id, "owner": owner, "page": page, "fingerprint": fingerprint, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"body": body, "repo": repo, "key_id": key_id, "id": id, "owner": owner, "page": page, "fingerprint": fingerprint, "limit": limit}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteKey(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id; var reqDescription = "Delete a key from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"body": body, "repo": repo, "key_id": key_id, "id": id, "owner": owner, "page": page, "fingerprint": fingerprint, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: " + reqDescription, {"body": body, "repo": repo, "key_id": key_id, "id": id, "owner": owner, "page": page, "fingerprint": fingerprint, "limit": limit}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryKeysExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify RepositoryKeys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: RepositoryKeys: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyRepositoryKeysAdded", function(e) {
    return e.name.includes("Done: Positive: RepositoryKeys: ");
  });
}

function matchAnyRepositoryKeysDeleted() {
  return bp.EventSet("matchAnyRepositoryKeysDeleted", function(e) {
    return e.name.includes("Done: Positive: RepositoryKeys: ") && e.name.includes("Delete");
  });
}

function issueGetMilestonesList(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones"; var reqDescription = "Get all of a repository's opened milestones";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name, "state": state}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name, "state": state}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name, "state": state}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Issue: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name, "state": state}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyIssueExists(id) {
  bp.log.warn("Verification skipped: Issue is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Issue: Verify " + id, {id: id}) });
}
function verifyIssueDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Issue has no GET endpoint.");
}

function matchAnyIssueAdded() {
  return bp.EventSet("matchAnyIssueAdded", function(e) {
    return e.name.includes("Done: Positive: Issue: ");
  });
}

function issueDeleteMilestone(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id; var reqDescription = "Delete a milestone";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Milestones: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function verifyMilestonesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Milestones " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Milestones: Verify " + id, {id: id}) });
  pvg.success("Milestones found");
}

function verifyMilestonesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify Milestones " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("Milestones correctly deleted (404)");
}

function verifyMilestonesDoesNotExist(id) { verifyMilestonesDeleted(id); }

function matchAnyMilestonesAdded() {
  return bp.EventSet("matchAnyMilestonesAdded", function(e) {
    return e.name.includes("Done: Positive: Milestones: ");
  });
}

function matchAnyMilestonesDeleted() {
  return bp.EventSet("matchAnyMilestonesDeleted", function(e) {
    return e.name.includes("Done: Positive: Milestones: ") && e.name.includes("Delete");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: MirrorSync: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: MirrorSync: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: MirrorSync: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: MirrorSync: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
  return response;
}

function verifyMirrorSyncRejects(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync"; var body = {
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyMirrorSyncExists(id) {
  bp.log.warn("Verification skipped: MirrorSync is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: MirrorSync: Verify " + id, {id: id}) });
}
function verifyMirrorSyncDoesNotExist(id) {
  bp.log.warn("Absence check skipped: MirrorSync has no GET endpoint.");
}

function matchAnyMirrorSyncAdded() {
  return bp.EventSet("matchAnyMirrorSyncAdded", function(e) {
    return e.name.includes("Done: Positive: MirrorSync: ");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: NewPinAllowed: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: NewPinAllowed: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyNewPinAllowedExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify NewPinAllowed " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: NewPinAllowed: Verify " + id, {id: id}) });
  pvg.success("NewPinAllowed found");
}

function verifyNewPinAllowedDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify NewPinAllowed " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("NewPinAllowed correctly deleted (404)");
}

function verifyNewPinAllowedDoesNotExist(id) { verifyNewPinAllowedDeleted(id); }

function matchAnyNewPinAllowedAdded() {
  return bp.EventSet("matchAnyNewPinAllowedAdded", function(e) {
    return e.name.includes("Done: Positive: NewPinAllowed: ");
  });
}

function repoGetPullRequestFiles(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/files"; var reqDescription = "Get changed files for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function repoMergePullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge"; var reqDescription = "Merge a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoEditPullRequest(body, id, index, limit, owner, page, repo, skip_to, whitespace, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) }); }
  return response;
}

function repoCancelScheduledAutoMerge(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge"; var reqDescription = "Cancel the scheduled auto merge for the given pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
  return response;
}

function tryToAddExistingPullRequests(body, id, index, limit, owner, page, repo, skip_to, whitespace, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge"; var reqDescription = "Try Add Existing PullRequests";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "body": body,
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequests: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit, "whitespace": whitespace, "skip-to": skip_to}) }); }
  return response;
}

function verifyPullRequestsRejects(body, id, index, limit, owner, page, repo, skip_to, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page,
    "skip-to": skip_to,
    "whitespace": whitespace
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullRequestsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullRequests " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: PullRequests: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyPullRequestsAdded", function(e) {
    return e.name.includes("Done: Positive: PullRequests: ");
  });
}

function matchAnyPullRequestsDeleted() {
  return bp.EventSet("matchAnyPullRequestsDeleted", function(e) {
    return e.name.includes("Done: Positive: PullRequests: ") && e.name.includes("Delete");
  });
}

function repoDeletePullReviewRequests(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var reqDescription = "Cancel review requests for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"owner": owner, "index": index, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"body": body, "id": owner, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"body": body, "id": owner, "repo": repo, "owner": owner, "index": index}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"body": body, "id": owner, "repo": repo, "owner": owner, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: " + reqDescription, {"body": body, "id": owner, "repo": repo, "owner": owner, "index": index}) }); }
  return response;
}

function verifyPullReviewRequestsRejects(body, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers"; var body = {
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewRequestsExists(owner) {
  bp.log.warn("Verification skipped: PullReviewRequests is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: PullReviewRequests: Verify " + owner, {id: owner}) });
}
function verifyPullReviewRequestsDoesNotExist(owner) {
  bp.log.warn("Absence check skipped: PullReviewRequests has no GET endpoint.");
}

function matchAnyPullReviewRequestsAdded() {
  return bp.EventSet("matchAnyPullReviewRequestsAdded", function(e) {
    return e.name.includes("Done: Positive: PullReviewRequests: ");
  });
}

function matchAnyPullReviewRequestsDeleted() {
  return bp.EventSet("matchAnyPullReviewRequestsDeleted", function(e) {
    return e.name.includes("Done: Positive: PullReviewRequests: ") && e.name.includes("Delete");
  });
}

function repoListPullReviews(owner, repo, index, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews"; var reqDescription = "List all reviews for a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"owner": owner, "index": index, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function repoDeletePullReview(owner, repo, index, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var reqDescription = "Delete a specific review from a pull request";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"owner": owner, "index": index, "id": id, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviews: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "page": page, "index": index, "limit": limit}) }); }
  return response;
}

function verifyPullReviewsRejects(body, id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id; var body = {
    "body": body,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviews " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: PullReviews: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyPullReviewsAdded", function(e) {
    return e.name.includes("Done: Positive: PullReviews: ");
  });
}

function matchAnyPullReviewsDeleted() {
  return bp.EventSet("matchAnyPullReviewsDeleted", function(e) {
    return e.name.includes("Done: Positive: PullReviews: ") && e.name.includes("Delete");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewComments: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewComments: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyPullReviewCommentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviewComments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: PullReviewComments: Verify " + id, {id: id}) });
  pvg.success("PullReviewComments found");
}

function verifyPullReviewCommentsDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify PullReviewComments " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("PullReviewComments correctly deleted (404)");
}

function verifyPullReviewCommentsDoesNotExist(id) { verifyPullReviewCommentsDeleted(id); }

function matchAnyPullReviewCommentsAdded() {
  return bp.EventSet("matchAnyPullReviewCommentsAdded", function(e) {
    return e.name.includes("Done: Positive: PullReviewComments: ");
  });
}

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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewDismissals: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewDismissals: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "index": index}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewDismissals: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewDismissals: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "index": index}) }); }
  return response;
}

function verifyPullReviewDismissalsRejects(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals"; var body = {
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewDismissalsExists(id) {
  bp.log.warn("Verification skipped: PullReviewDismissals is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: PullReviewDismissals: Verify " + id, {id: id}) });
}
function verifyPullReviewDismissalsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PullReviewDismissals has no GET endpoint.");
}

function matchAnyPullReviewDismissalsAdded() {
  return bp.EventSet("matchAnyPullReviewDismissalsAdded", function(e) {
    return e.name.includes("Done: Positive: PullReviewDismissals: ");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewUndismissals: " + reqDescription, {"index": index, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewUndismissals: " + reqDescription, {"index": index, "id": id, "owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullReviewUndismissals: " + reqDescription, {"index": index, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullReviewUndismissals: " + reqDescription, {"index": index, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function verifyPullReviewUndismissalsRejects(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals"; var body = {};
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullReviewUndismissalsExists(id) {
  bp.log.warn("Verification skipped: PullReviewUndismissals is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: PullReviewUndismissals: Verify " + id, {id: id}) });
}
function verifyPullReviewUndismissalsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PullReviewUndismissals has no GET endpoint.");
}

function matchAnyPullReviewUndismissalsAdded() {
  return bp.EventSet("matchAnyPullReviewUndismissalsAdded", function(e) {
    return e.name.includes("Done: Positive: PullReviewUndismissals: ");
  });
}

function repoUpdatePullRequest(id, index, owner, repo, style, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var reqDescription = "Merge PR's baseBranch into headBranch";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequestUpdate: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "style": style, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequestUpdate: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "style": style, "index": index}) }); }
  return response;
}

function tryToAddExistingPullRequestUpdate(id, index, owner, repo, style, config) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var reqDescription = "Try Add Existing PullRequestUpdate";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [400, 409];
  var body = {
    "id": id
  }; bp.log.info("REQ POST " + url + " Body: " + JSON.stringify(body));
  let response = svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PullRequestUpdate: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "style": style, "index": index}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PullRequestUpdate: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "style": style, "index": index}) }); }
  return response;
}

function verifyPullRequestUpdateRejects(id, index, owner, repo, style) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update"; var body = {
    "id": id,
    "style": style
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPullRequestUpdateExists(id) {
  bp.log.warn("Verification skipped: PullRequestUpdate is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: PullRequestUpdate: Verify " + id, {id: id}) });
}
function verifyPullRequestUpdateDoesNotExist(id) {
  bp.log.warn("Absence check skipped: PullRequestUpdate has no GET endpoint.");
}

function matchAnyPullRequestUpdateAdded() {
  return bp.EventSet("matchAnyPullRequestUpdateAdded", function(e) {
    return e.name.includes("Done: Positive: PullRequestUpdate: ");
  });
}

function repoListPushMirrors(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors"; var reqDescription = "Get all push mirrors of the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name}) }); }
  return response;
}

function repoDeletePushMirror(owner, repo, name, config) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name; var reqDescription = "Deletes a push mirror from a repository by remoteName";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"owner": owner, "repo": repo, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"owner": owner, "repo": repo, "name": name}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: PushMirrors: " + reqDescription, {"repo": repo, "owner": owner, "id": id, "page": page, "limit": limit, "name": name}) }); }
  return response;
}

function verifyPushMirrorsRejects(id, limit, name, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors-sync"; var body = {
    "id": id,
    "limit": limit,
    "name": name,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyPushMirrorsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify PushMirrors " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: PushMirrors: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyPushMirrorsAdded", function(e) {
    return e.name.includes("Done: Positive: PushMirrors: ");
  });
}

function matchAnyPushMirrorsDeleted() {
  return bp.EventSet("matchAnyPushMirrorsDeleted", function(e) {
    return e.name.includes("Done: Positive: PushMirrors: ") && e.name.includes("Delete");
  });
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RawFiles: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RawFiles: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyRawFilesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify RawFiles " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: RawFiles: Verify " + id, {id: id}) });
  pvg.success("RawFiles found");
}

function verifyRawFilesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify RawFiles " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("RawFiles correctly deleted (404)");
}

function verifyRawFilesDoesNotExist(id) { verifyRawFilesDeleted(id); }

function matchAnyRawFilesAdded() {
  return bp.EventSet("matchAnyRawFilesAdded", function(e) {
    return e.name.includes("Done: Positive: RawFiles: ");
  });
}

function repoListReleases(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var reqDescription = "List a repo's releases";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoCreateRelease(body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteReleaseByTag(owner, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag; var reqDescription = "Delete a release by tag name";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) }); }
  return response;
}

function repoDeleteRelease(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Delete a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
  return response;
}

function repoGetRelease(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Get a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
  return response;
}

function repoEditRelease(body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id; var reqDescription = "Update a release";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  var body = {
    "body": body
  }; bp.log.info("REQ PATCH " + url + " Body: " + JSON.stringify(body));
  let response = svc.patch(url, { body: JSON.stringify(body), expectedResponseCodes: finalCodes, parameters: { description: reqDescription } });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function tryToAddExistingReleases(body, draft, id, limit, owner, page, pre_release, repo, tag, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Releases: " + reqDescription, {"body": body, "tag": tag, "draft": draft, "pre-release": pre_release, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function verifyReleasesRejects(body, draft, id, limit, owner, page, pre_release, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases"; var body = {
    "body": body,
    "draft": draft,
    "id": id,
    "limit": limit,
    "page": page,
    "pre-release": pre_release,
    "tag": tag
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyReleasesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Releases " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Releases: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyReleasesAdded", function(e) {
    return e.name.includes("Done: Positive: Releases: ");
  });
}

function matchAnyReleasesDeleted() {
  return bp.EventSet("matchAnyReleasesDeleted", function(e) {
    return e.name.includes("Done: Positive: Releases: ") && e.name.includes("Delete");
  });
}

function repoListReleaseAttachments(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var reqDescription = "List release's attachments";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function repoDeleteReleaseAttachment(owner, repo, id, attachment_id, config) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id; var reqDescription = "Delete a release attachment";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"owner": owner, "id": id, "attachment_id": attachment_id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"owner": owner, "id": id, "attachment_id": attachment_id, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: " + reqDescription, {"body": body, "attachment": attachment, "repo": repo, "owner": owner, "id": id, "attachment_id": attachment_id, "name": name}) }); }
  return response;
}

function verifyReleaseAttachmentsRejects(attachment, attachment_id, body, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets"; var body = {
    "attachment": attachment,
    "attachment_id": attachment_id,
    "body": body,
    "name": name
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyReleaseAttachmentsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify ReleaseAttachments " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: ReleaseAttachments: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyReleaseAttachmentsAdded", function(e) {
    return e.name.includes("Done: Positive: ReleaseAttachments: ");
  });
}

function matchAnyReleaseAttachmentsDeleted() {
  return bp.EventSet("matchAnyReleaseAttachmentsDeleted", function(e) {
    return e.name.includes("Done: Positive: ReleaseAttachments: ") && e.name.includes("Delete");
  });
}

function repoGetReviewers(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/reviewers"; var reqDescription = "Return all users that can be requested to review in this repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Reviewers: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Reviewers: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyReviewersExists(id) {
  bp.log.warn("Verification skipped: Reviewers is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: Reviewers: Verify " + id, {id: id}) });
}
function verifyReviewersDoesNotExist(id) {
  bp.log.warn("Absence check skipped: Reviewers has no GET endpoint.");
}

function matchAnyReviewersAdded() {
  return bp.EventSet("matchAnyReviewersAdded", function(e) {
    return e.name.includes("Done: Positive: Reviewers: ");
  });
}

function repoListTagProtection(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var reqDescription = "List tag protections for a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function repoDeleteTagProtection(owner, repo, id, config) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id; var reqDescription = "Delete a specific tag protection for the repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"owner": owner, "id": id, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TagProtections: " + reqDescription, {"body": body, "id": id, "owner": owner, "repo": repo}) }); }
  return response;
}

function verifyTagProtectionsRejects(body, id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections"; var body = {
    "body": body,
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTagProtectionsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify TagProtections " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: TagProtections: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyTagProtectionsAdded", function(e) {
    return e.name.includes("Done: Positive: TagProtections: ");
  });
}

function matchAnyTagProtectionsDeleted() {
  return bp.EventSet("matchAnyTagProtectionsDeleted", function(e) {
    return e.name.includes("Done: Positive: TagProtections: ") && e.name.includes("Delete");
  });
}

function repoListTags(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags"; var reqDescription = "List a repository's tags";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"owner": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"body": body, "tag": tag, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"body": body, "tag": tag, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"id": id}) }); }
  return response;
}

function repoDeleteTag(owner, repo, tag, config) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag; var reqDescription = "Delete a repository's tag by name";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"owner": owner, "tag": tag, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"body": body, "tag": tag, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Tags: " + reqDescription, {"body": body, "tag": tag, "repo": repo, "owner": owner, "id": id, "page": page, "limit": limit}) }); }
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
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTagsExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify Tags " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Tags: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyTagsAdded", function(e) {
    return e.name.includes("Done: Positive: Tags: ");
  });
}

function matchAnyTagsDeleted() {
  return bp.EventSet("matchAnyTagsDeleted", function(e) {
    return e.name.includes("Done: Positive: Tags: ") && e.name.includes("Delete");
  });
}

function repoTrackedTimes(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/times"; var reqDescription = "List a repo's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TrackedTimes: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TrackedTimes: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TrackedTimes: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TrackedTimes: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyTrackedTimesExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify TrackedTimes " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: TrackedTimes: Verify " + id, {id: id}) });
  pvg.success("TrackedTimes found");
}

function verifyTrackedTimesDeleted(id) {
  var url = "/repositories/" + id;
  var description = "Verify TrackedTimes " + id + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("TrackedTimes correctly deleted (404)");
}

function verifyTrackedTimesDoesNotExist(id) { verifyTrackedTimesDeleted(id); }

function matchAnyTrackedTimesAdded() {
  return bp.EventSet("matchAnyTrackedTimesAdded", function(e) {
    return e.name.includes("Done: Positive: TrackedTimes: ");
  });
}

function topicSearch(config) {
  var url = "/topics/search"; var reqDescription = "search topics via keyword";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) }); }
  return response;
}

function repoDeleteTopic(owner, repo, topic, config) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic; var reqDescription = "Delete a topic from a repository";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"owner": owner, "id": owner, "repo": repo, "topic": topic}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"owner": owner, "id": owner, "repo": repo, "topic": topic}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Topics: " + reqDescription, {"body": body, "topic2": topic2, "repo": repo, "q": q, "id": owner, "owner": owner, "page": page, "limit": limit, "topic": topic, "topic1": topic1}) }); }
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
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: Topics: Verify " + owner, {id: owner}) });
              pvg.success("Topics found in list");
          } else pvg.fail("Topics NOT found in list");
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
  return bp.EventSet("matchAnyTopicsAdded", function(e) {
    return e.name.includes("Done: Positive: Topics: ");
  });
}

function matchAnyTopicsDeleted() {
  return bp.EventSet("matchAnyTopicsDeleted", function(e) {
    return e.name.includes("Done: Positive: Topics: ") && e.name.includes("Delete");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "transferOptions": transferOptions}) }); }
  return response;
}

function verifyRepositoryTransferRejects(body, id, owner, repo, transferOptions) {
  var url = "/repos/" + owner + "/" + repo + "/transfer"; var body = {
    "body": body,
    "id": id,
    "transferOptions": transferOptions
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyRepositoryTransferExists(id) {
  bp.log.warn("Verification skipped: RepositoryTransfer is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: RepositoryTransfer: Verify " + id, {id: id}) });
}
function verifyRepositoryTransferDoesNotExist(id) {
  bp.log.warn("Absence check skipped: RepositoryTransfer has no GET endpoint.");
}

function matchAnyRepositoryTransferAdded() {
  return bp.EventSet("matchAnyRepositoryTransferAdded", function(e) {
    return e.name.includes("Done: Positive: RepositoryTransfer: ");
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) }); }
  return response;
}

function repoDeleteWikiPage(owner, repo, pageName, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName; var reqDescription = "Delete a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"owner": owner, "repo": repo, "pageName": pageName}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"owner": owner, "repo": repo, "pageName": pageName}) }); }
  return response;
}

function repoGetByID(id, config) {
  var url = "/repositories/" + id; var reqDescription = "Get a repository by id";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPage: " + reqDescription, {"body": body, "repo": repo, "owner": owner, "id": id, "wikiPageOptions": wikiPageOptions, "pageName": pageName}) }); }
  return response;
}

function verifyWikiPageRejects(body, id, owner, pageName, repo, wikiPageOptions) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new"; var body = {
    "body": body,
    "id": id,
    "pageName": pageName,
    "wikiPageOptions": wikiPageOptions
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyWikiPageExists(id) {
  var url = "/repositories/" + id;
  var description = "Verify WikiPage " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: WikiPage: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyWikiPageAdded", function(e) {
    return e.name.includes("Done: Positive: WikiPage: ");
  });
}

function matchAnyWikiPageDeleted() {
  return bp.EventSet("matchAnyWikiPageDeleted", function(e) {
    return e.name.includes("Done: Positive: WikiPage: ") && e.name.includes("Delete");
  });
}

function repoGetWikiPages(owner, repo, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/pages"; var reqDescription = "Get all wiki pages";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPages: " + reqDescription, {"owner": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPages: " + reqDescription, {"owner": owner, "repo": repo}) }); }
  return response;
}

function verifyWikiPagesExists(id) {
  bp.log.warn("Verification skipped: WikiPages is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: WikiPages: Verify " + id, {id: id}) });
}
function verifyWikiPagesDoesNotExist(id) {
  bp.log.warn("Absence check skipped: WikiPages has no GET endpoint.");
}

function matchAnyWikiPagesAdded() {
  return bp.EventSet("matchAnyWikiPagesAdded", function(e) {
    return e.name.includes("Done: Positive: WikiPages: ");
  });
}

function repoGetWikiPageRevisions(owner, repo, pageName, config) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName; var reqDescription = "Get revisions of a wiki page";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: WikiPageRevisions: " + reqDescription, {"owner": owner, "repo": repo, "pageName": pageName}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: WikiPageRevisions: " + reqDescription, {"owner": owner, "repo": repo, "pageName": pageName}) }); }
  return response;
}

function verifyWikiPageRevisionsExists(id) {
  bp.log.warn("Verification skipped: WikiPageRevisions is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: WikiPageRevisions: Verify " + id, {id: id}) });
}
function verifyWikiPageRevisionsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: WikiPageRevisions has no GET endpoint.");
}

function matchAnyWikiPageRevisionsAdded() {
  return bp.EventSet("matchAnyWikiPageRevisionsAdded", function(e) {
    return e.name.includes("Done: Positive: WikiPageRevisions: ");
  });
}

function getGeneralAPISettings(config) {
  var url = "/settings/api"; var reqDescription = "Get instance's global settings for api";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Settings: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Settings: " + reqDescription, {}) }); }
  return response;
}

function getGeneralUISettings(config) {
  var url = "/settings/ui"; var reqDescription = "Get instance's global settings for ui";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Settings: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Settings: " + reqDescription, {}) }); }
  return response;
}

function verifySettingsExists(id) {
  let res = getGeneralAPISettings(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: Settings: Verify " + id, {id: id}) });
              pvg.success("Settings found in list");
          } else pvg.fail("Settings NOT found in list");
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

function matchAnySettingsAdded() {
  return bp.EventSet("matchAnySettingsAdded", function(e) {
    return e.name.includes("Done: Positive: Settings: ");
  });
}

function getSigningKey(config) {
  var url = "/signing-key.gpg"; var reqDescription = "Get default signing-key.gpg";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Miscellaneous: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Miscellaneous: " + reqDescription, {}) }); }
  return response;
}

function getVersion(config) {
  var url = "/version"; var reqDescription = "Returns the version of the Gitea application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Miscellaneous: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Miscellaneous: " + reqDescription, {}) }); }
  return response;
}

function verifyMiscellaneousExists(id) {
  let res = getSigningKey(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: Miscellaneous: Verify " + id, {id: id}) });
              pvg.success("Miscellaneous found in list");
          } else pvg.fail("Miscellaneous NOT found in list");
      }
  } catch (err) { bp.log.warn("Failed to parse list response: " + err); }
}

function verifyMiscellaneousDeleted(id) {
  let res = getSigningKey(id);
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

function matchAnyMiscellaneousAdded() {
  return bp.EventSet("matchAnyMiscellaneousAdded", function(e) {
    return e.name.includes("Done: Positive: Miscellaneous: ");
  });
}

function orgListTeamMembers(id, config) {
  var url = "/teams/" + id + "/members"; var reqDescription = "List a team's members";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id, "limit": limit, "username": username, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id, "limit": limit, "username": username, "page": page}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id, "limit": limit, "username": username, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamMembers: " + reqDescription, {"id": id, "limit": limit, "username": username, "page": page}) }); }
  return response;
}

function verifyTeamMembersRejects(id, limit, page, username) {
  var url = "/teams/" + id + "/members/" + username; var body = {
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTeamMembersExists(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamMembers " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: TeamMembers: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyTeamMembersAdded", function(e) {
    return e.name.includes("Done: Positive: TeamMembers: ");
  });
}

function matchAnyTeamMembersDeleted() {
  return bp.EventSet("matchAnyTeamMembersDeleted", function(e) {
    return e.name.includes("Done: Positive: TeamMembers: ") && e.name.includes("Delete");
  });
}

function orgListTeamRepos(id, config) {
  var url = "/teams/" + id + "/repos"; var reqDescription = "List a team's repos";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) }); }
  return response;
}

function orgGetTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Get a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"repo": repo, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"repo": repo, "id": id, "page": page, "limit": limit, "org": org}) }); }
  return response;
}

function orgDeleteTeam(id, config) {
  var url = "/teams/" + id; var reqDescription = "Delete a team";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"repo": repo, "id": id, "page": page, "limit": limit, "org": org}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: TeamRepos: " + reqDescription, {"repo": repo, "id": id, "page": page, "limit": limit, "org": org}) }); }
  return response;
}

function verifyTeamReposRejects(id, limit, org, page, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo; var body = {
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyTeamReposExists(id) {
  var url = "/teams/" + id;
  var description = "Verify TeamRepos " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: TeamRepos: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyTeamReposAdded", function(e) {
    return e.name.includes("Done: Positive: TeamRepos: ");
  });
}

function matchAnyTeamReposDeleted() {
  return bp.EventSet("matchAnyTeamReposDeleted", function(e) {
    return e.name.includes("Done: Positive: TeamRepos: ") && e.name.includes("Delete");
  });
}

function userGetRunnerRegistrationToken(config) {
  var url = "/user/actions/runners/registration-token"; var reqDescription = "Get an user's actions runner registration token";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {}) }); }
  return response;
}

function deleteUserSecret(secretname, config) {
  var url = "/user/actions/secrets/" + secretname; var reqDescription = "Delete a secret in a user scope";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {"secretname": secretname, "id": secretname}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {"secretname": secretname, "id": secretname}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {"body": body, "page": page, "secretname": secretname, "limit": limit, "id": secretname}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {"body": body, "page": page, "secretname": secretname, "limit": limit, "id": secretname}) }); }
  return response;
}

function getUserVariablesList(config) {
  var url = "/user/actions/variables"; var reqDescription = "Get the user-level list of variables which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: User: " + reqDescription, {}) }); }
  return response;
}

function verifyUserExists(body, limit, page, secretname) {
  let res = userGetRunnerRegistrationToken(body, limit, page, secretname);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.secretname == secretname || item.id == secretname);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: User: Verify " + secretname, {id: secretname}) });
              pvg.success("User found in list");
          } else pvg.fail("User NOT found in list");
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

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return e.name.includes("Done: Positive: User: ");
  });
}

function matchAnyUserDeleted() {
  return bp.EventSet("matchAnyUserDeleted", function(e) {
    return e.name.includes("Done: Positive: User: ") && e.name.includes("Delete");
  });
}

function deleteUserVariable(variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Delete a user-level variable which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 201, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"id": variablename, "variablename": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"id": variablename, "variablename": variablename}) }); }
  return response;
}

function getUserVariable(variablename, config) {
  var url = "/user/actions/variables/" + variablename; var reqDescription = "Get a user-level variable which is created by current doer";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"id": variablename, "variablename": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"id": variablename, "variablename": variablename}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserVariables: " + reqDescription, {"body": body, "variablename": variablename, "id": variablename}) }); }
  return response;
}

function verifyUserVariablesRejects(body, variablename) {
  var url = "/user/actions/variables/" + variablename; var body = {
    "body": body
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserVariablesExists(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariables " + variablename + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: UserVariables: Verify " + variablename, {id: variablename}) });
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
  return bp.EventSet("matchAnyUserVariablesAdded", function(e) {
    return e.name.includes("Done: Positive: UserVariables: ");
  });
}

function matchAnyUserVariablesDeleted() {
  return bp.EventSet("matchAnyUserVariablesDeleted", function(e) {
    return e.name.includes("Done: Positive: UserVariables: ") && e.name.includes("Delete");
  });
}

function userGetOauth2Application(config) {
  var url = "/user/applications/oauth2"; var reqDescription = "List the authenticated user's oauth2 applications";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) }); }
  return response;
}

function userDeleteOAuth2Application(id, config) {
  var url = "/user/applications/oauth2/" + id; var reqDescription = "delete an OAuth2 Application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"id": id}) }); }
  return response;
}

function userGetOAuth2Application(id, config) {
  var url = "/user/applications/oauth2/" + id; var reqDescription = "get an OAuth2 Application";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: " + reqDescription, {"body": body, "id": id, "limit": limit, "page": page}) }); }
  return response;
}

function verifyOAuth2ApplicationsRejects(body, id, limit, page) {
  var url = "/user/applications/oauth2"; var body = {
    "body": body,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyOAuth2ApplicationsExists(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify OAuth2Applications " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: OAuth2Applications: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyOAuth2ApplicationsAdded", function(e) {
    return e.name.includes("Done: Positive: OAuth2Applications: ");
  });
}

function matchAnyOAuth2ApplicationsDeleted() {
  return bp.EventSet("matchAnyOAuth2ApplicationsDeleted", function(e) {
    return e.name.includes("Done: Positive: OAuth2Applications: ") && e.name.includes("Delete");
  });
}

function userDeleteAvatar(config) {
  var url = "/user/avatar"; var reqDescription = "Delete Avatar";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {"body": body, "id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserAvatar: " + reqDescription, {"body": body, "id": id}) }); }
  return response;
}

function verifyUserAvatarRejects(body, id) {
  var url = "/user/avatar"; var body = {
    "body": body,
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserAvatarExists(id) {
  bp.log.warn("Verification skipped: UserAvatar is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserAvatar: Verify " + id, {id: id}) });
}
function verifyUserAvatarDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserAvatar has no GET endpoint.");
}

function matchAnyUserAvatarAdded() {
  return bp.EventSet("matchAnyUserAvatarAdded", function(e) {
    return e.name.includes("Done: Positive: UserAvatar: ");
  });
}

function matchAnyUserAvatarDeleted() {
  return bp.EventSet("matchAnyUserAvatarDeleted", function(e) {
    return e.name.includes("Done: Positive: UserAvatar: ") && e.name.includes("Delete");
  });
}

function userListBlocks(config) {
  var url = "/user/blocks"; var reqDescription = "List users blocked by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {}) }); }
  return response;
}

function userUnblockUser(username, config) {
  var url = "/user/blocks/" + username; var reqDescription = "Unblock a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function userCheckUserBlock(username, config) {
  var url = "/user/blocks/" + username; var reqDescription = "Check if a user is blocked by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"page": page, "id": username, "note": note, "limit": limit, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserBlocks: " + reqDescription, {"page": page, "id": username, "note": note, "limit": limit, "username": username}) }); }
  return response;
}

function verifyUserBlocksExists(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: UserBlocks: Verify " + username, {id: username}) });
  pvg.success("UserBlocks found");
}

function verifyUserBlocksDeleted(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlocks " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserBlocks correctly deleted (404)");
}

function verifyUserBlocksDoesNotExist(username) { verifyUserBlocksDeleted(username); }

function matchAnyUserBlocksAdded() {
  return bp.EventSet("matchAnyUserBlocksAdded", function(e) {
    return e.name.includes("Done: Positive: UserBlocks: ");
  });
}

function matchAnyUserBlocksDeleted() {
  return bp.EventSet("matchAnyUserBlocksDeleted", function(e) {
    return e.name.includes("Done: Positive: UserBlocks: ") && e.name.includes("Delete");
  });
}

function userDeleteEmail(config) {
  var url = "/user/emails"; var reqDescription = "Delete email addresses";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {}) }); }
  return response;
}

function userListEmails(config) {
  var url = "/user/emails"; var reqDescription = "List the authenticated user's email addresses";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {"body": body, "id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {"body": body, "id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserEmails: " + reqDescription, {"body": body, "id": id}) }); }
  return response;
}

function verifyUserEmailsRejects(body, id) {
  var url = "/user/emails"; var body = {
    "body": body,
    "id": id
  };
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
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserEmails: Verify " + id, {id: id}) });
              pvg.success("UserEmails found in list");
          } else pvg.fail("UserEmails NOT found in list");
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
  return bp.EventSet("matchAnyUserEmailsAdded", function(e) {
    return e.name.includes("Done: Positive: UserEmails: ");
  });
}

function matchAnyUserEmailsDeleted() {
  return bp.EventSet("matchAnyUserEmailsDeleted", function(e) {
    return e.name.includes("Done: Positive: UserEmails: ") && e.name.includes("Delete");
  });
}

function userCurrentListFollowers(config) {
  var url = "/user/followers"; var reqDescription = "List the authenticated user's followers";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserFollowers: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserFollowers: " + reqDescription, {}) }); }
  return response;
}

function verifyUserFollowersExists(id, limit, page) {
  let res = userCurrentListFollowers(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserFollowers: Verify " + id, {id: id}) });
              pvg.success("UserFollowers found in list");
          } else pvg.fail("UserFollowers NOT found in list");
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

function matchAnyUserFollowersAdded() {
  return bp.EventSet("matchAnyUserFollowersAdded", function(e) {
    return e.name.includes("Done: Positive: UserFollowers: ");
  });
}

function userCurrentListFollowing(config) {
  var url = "/user/following"; var reqDescription = "List the users that the authenticated user is following";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserFollowing: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserFollowing: " + reqDescription, {}) }); }
  return response;
}

function verifyUserFollowingExists(id, limit, page) {
  let res = userCurrentListFollowing(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserFollowing: Verify " + id, {id: id}) });
              pvg.success("UserFollowing found in list");
          } else pvg.fail("UserFollowing NOT found in list");
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

function matchAnyUserFollowingAdded() {
  return bp.EventSet("matchAnyUserFollowingAdded", function(e) {
    return e.name.includes("Done: Positive: UserFollowing: ");
  });
}

function userCurrentDeleteFollow(username, config) {
  var url = "/user/following/" + username; var reqDescription = "Unfollow a user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function userCurrentCheckFollowing(username, config) {
  var url = "/user/following/" + username; var reqDescription = "Check whether a user is followed by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: " + reqDescription, {"id": username, "username": username}) }); }
  return response;
}

function verifyUserFollowingSpecificExists(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: UserFollowingSpecific: Verify " + username, {id: username}) });
  pvg.success("UserFollowingSpecific found");
}

function verifyUserFollowingSpecificDeleted(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowingSpecific " + username + " deleted";
  svc.get(url, { expectedResponseCodes: [404], parameters: { description: description } });
  pvg.success("UserFollowingSpecific correctly deleted (404)");
}

function verifyUserFollowingSpecificDoesNotExist(username) { verifyUserFollowingSpecificDeleted(username); }

function matchAnyUserFollowingSpecificAdded() {
  return bp.EventSet("matchAnyUserFollowingSpecificAdded", function(e) {
    return e.name.includes("Done: Positive: UserFollowingSpecific: ");
  });
}

function matchAnyUserFollowingSpecificDeleted() {
  return bp.EventSet("matchAnyUserFollowingSpecificDeleted", function(e) {
    return e.name.includes("Done: Positive: UserFollowingSpecific: ") && e.name.includes("Delete");
  });
}

function userCurrentGetGPGKey(id, config) {
  var url = "/user/gpg_keys/" + id; var reqDescription = "Get a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id}) }); }
  return response;
}

function userCurrentListGPGKeys(config) {
  var url = "/user/gpg_keys"; var reqDescription = "List the authenticated user's GPG keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id, "limit": limit, "Form": Form, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id, "limit": limit, "Form": Form, "page": page}) }); }
  return response;
}

function userCurrentDeleteGPGKey(id, config) {
  var url = "/user/gpg_keys/" + id; var reqDescription = "Remove a GPG key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id, "limit": limit, "Form": Form, "page": page}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeys: " + reqDescription, {"id": id, "limit": limit, "Form": Form, "page": page}) }); }
  return response;
}

function verifyGPGKeysRejects(Form, id, limit, page) {
  var url = "/user/gpg_keys"; var body = {
    "Form": Form,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyGPGKeysExists(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify GPGKeys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: GPGKeys: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyGPGKeysAdded", function(e) {
    return e.name.includes("Done: Positive: GPGKeys: ");
  });
}

function matchAnyGPGKeysDeleted() {
  return bp.EventSet("matchAnyGPGKeysDeleted", function(e) {
    return e.name.includes("Done: Positive: GPGKeys: ") && e.name.includes("Delete");
  });
}

function getVerificationToken(config) {
  var url = "/user/gpg_key_token"; var reqDescription = "Get a Token to verify";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeyToken: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeyToken: " + reqDescription, {}) }); }
  return response;
}

function verifyGPGKeyTokenExists(id) {
  let res = getVerificationToken(id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: GPGKeyToken: Verify " + id, {id: id}) });
              pvg.success("GPGKeyToken found in list");
          } else pvg.fail("GPGKeyToken NOT found in list");
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

function matchAnyGPGKeyTokenAdded() {
  return bp.EventSet("matchAnyGPGKeyTokenAdded", function(e) {
    return e.name.includes("Done: Positive: GPGKeyToken: ");
  });
}

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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeyVerification: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeyVerification: " + reqDescription, {"id": id}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: GPGKeyVerification: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: GPGKeyVerification: " + reqDescription, {"id": id}) }); }
  return response;
}

function verifyGPGKeyVerificationRejects(id) {
  var url = "/user/gpg_key_verify"; var body = {
    "id": id
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyGPGKeyVerificationExists(id) {
  bp.log.warn("Verification skipped: GPGKeyVerification is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: GPGKeyVerification: Verify " + id, {id: id}) });
}
function verifyGPGKeyVerificationDoesNotExist(id) {
  bp.log.warn("Absence check skipped: GPGKeyVerification has no GET endpoint.");
}

function matchAnyGPGKeyVerificationAdded() {
  return bp.EventSet("matchAnyGPGKeyVerificationAdded", function(e) {
    return e.name.includes("Done: Positive: GPGKeyVerification: ");
  });
}

function userCurrentListKeys(config) {
  var url = "/user/keys"; var reqDescription = "List the authenticated user's public keys";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {}) }); }
  return response;
}

function userCurrentPostKey(CreateKeyOption, body, fingerprint, id, limit, page, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"body": body, "id": id, "page": page, "fingerprint": fingerprint, "limit": limit, "CreateKeyOption": CreateKeyOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"body": body, "id": id, "page": page, "fingerprint": fingerprint, "limit": limit, "CreateKeyOption": CreateKeyOption}) }); }
  return response;
}

function userCurrentGetKey(id, config) {
  var url = "/user/keys/" + id; var reqDescription = "Get a public key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"id": id}) }); }
  return response;
}

function userCurrentDeleteKey(id, config) {
  var url = "/user/keys/" + id; var reqDescription = "Delete a public key";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"id": id}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"id": id}) }); }
  return response;
}

function tryToAddExistingKeys(CreateKeyOption, body, fingerprint, id, limit, page, config) {
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"body": body, "id": id, "page": page, "fingerprint": fingerprint, "limit": limit, "CreateKeyOption": CreateKeyOption}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: Keys: " + reqDescription, {"body": body, "id": id, "page": page, "fingerprint": fingerprint, "limit": limit, "CreateKeyOption": CreateKeyOption}) }); }
  return response;
}

function verifyKeysRejects(CreateKeyOption, body, fingerprint, id, limit, page) {
  var url = "/user/keys"; var body = {
    "CreateKeyOption": CreateKeyOption,
    "body": body,
    "fingerprint": fingerprint,
    "id": id,
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyKeysExists(id) {
  var url = "/user/keys/" + id;
  var description = "Verify Keys " + id + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: Keys: Verify " + id, {id: id}) });
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
  return bp.EventSet("matchAnyKeysAdded", function(e) {
    return e.name.includes("Done: Positive: Keys: ");
  });
}

function matchAnyKeysDeleted() {
  return bp.EventSet("matchAnyKeysDeleted", function(e) {
    return e.name.includes("Done: Positive: Keys: ") && e.name.includes("Delete");
  });
}

function getUserSettings(config) {
  var url = "/user/settings"; var reqDescription = "Get user settings";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserSettings: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserSettings: " + reqDescription, {}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserSettings: " + reqDescription, {"body": body, "id": id, "UserSettingsOptions": UserSettingsOptions}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserSettings: " + reqDescription, {"body": body, "id": id, "UserSettingsOptions": UserSettingsOptions}) }); }
  return response;
}

function verifyUserSettingsExists(UserSettingsOptions, body, id) {
  let res = getUserSettings(UserSettingsOptions, body, id);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserSettings: Verify " + id, {id: id}) });
              pvg.success("UserSettings found in list");
          } else pvg.fail("UserSettings NOT found in list");
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

function matchAnyUserSettingsAdded() {
  return bp.EventSet("matchAnyUserSettingsAdded", function(e) {
    return e.name.includes("Done: Positive: UserSettings: ");
  });
}

function userCurrentListStarred(config) {
  var url = "/user/starred"; var reqDescription = "The repos that the authenticated user has starred";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {}) }); }
  return response;
}

function userCurrentDeleteStar(owner, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Unstar the given repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200, 204];
  let response = svc.delete(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
  return response;
}

function userCurrentCheckStarring(owner, repo, config) {
  var url = "/user/starred/" + owner + "/" + repo; var reqDescription = "Whether the authenticated is starring the repo";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [204];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"owner": owner, "id": owner, "repo": repo}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"id": owner, "repo": repo, "owner": owner, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"id": owner, "repo": repo, "owner": owner, "page": page, "limit": limit}) }); }
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
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"id": owner, "repo": repo, "owner": owner, "page": page, "limit": limit}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStarred: " + reqDescription, {"id": owner, "repo": repo, "owner": owner, "page": page, "limit": limit}) }); }
  return response;
}

function verifyUserStarredRejects(limit, owner, page, repo) {
  var url = "/user/starred/" + owner + "/" + repo; var body = {
    "limit": limit,
    "page": page
  };
  svc.post(url, { body: JSON.stringify(body), expectedResponseCodes: [400, 422, 409, 500], parameters: { description: "Verify rejection" } });
  bp.sync({ request: bp.Event("Done: Negative: " + url) });
}

function verifyUserStarredExists(owner) {
  var url = "/user/starred/" + owner + "/{repo}";
  var description = "Verify UserStarred " + owner + " exists";
  svc.get(url, { expectedResponseCodes: [200], parameters: { description: description } });
  bp.sync({ request: bp.Event("Done: Positive: UserStarred: Verify " + owner, {id: owner}) });
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
  return bp.EventSet("matchAnyUserStarredAdded", function(e) {
    return e.name.includes("Done: Positive: UserStarred: ");
  });
}

function matchAnyUserStarredDeleted() {
  return bp.EventSet("matchAnyUserStarredDeleted", function(e) {
    return e.name.includes("Done: Positive: UserStarred: ") && e.name.includes("Delete");
  });
}

function userGetStopWatches(config) {
  var url = "/user/stopwatches"; var reqDescription = "Get list of all existing stopwatches";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserStopwatches: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserStopwatches: " + reqDescription, {}) }); }
  return response;
}

function verifyUserStopwatchesExists(id, limit, page) {
  let res = userGetStopWatches(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserStopwatches: Verify " + id, {id: id}) });
              pvg.success("UserStopwatches found in list");
          } else pvg.fail("UserStopwatches NOT found in list");
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

function matchAnyUserStopwatchesAdded() {
  return bp.EventSet("matchAnyUserStopwatchesAdded", function(e) {
    return e.name.includes("Done: Positive: UserStopwatches: ");
  });
}

function userCurrentListSubscriptions(config) {
  var url = "/user/subscriptions"; var reqDescription = "List repositories watched by the authenticated user";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserSubscriptions: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserSubscriptions: " + reqDescription, {}) }); }
  return response;
}

function verifyUserSubscriptionsExists(id, limit, page) {
  let res = userCurrentListSubscriptions(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserSubscriptions: Verify " + id, {id: id}) });
              pvg.success("UserSubscriptions found in list");
          } else pvg.fail("UserSubscriptions NOT found in list");
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

function matchAnyUserSubscriptionsAdded() {
  return bp.EventSet("matchAnyUserSubscriptionsAdded", function(e) {
    return e.name.includes("Done: Positive: UserSubscriptions: ");
  });
}

function userListTeams(config) {
  var url = "/user/teams"; var reqDescription = "List all the teams a user belongs to";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserTeams: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserTeams: " + reqDescription, {}) }); }
  return response;
}

function verifyUserTeamsExists(id, limit, page) {
  let res = userListTeams(id, limit, page);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserTeams: Verify " + id, {id: id}) });
              pvg.success("UserTeams found in list");
          } else pvg.fail("UserTeams NOT found in list");
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

function matchAnyUserTeamsAdded() {
  return bp.EventSet("matchAnyUserTeamsAdded", function(e) {
    return e.name.includes("Done: Positive: UserTeams: ");
  });
}

function userCurrentTrackedTimes(config) {
  var url = "/user/times"; var reqDescription = "List the current user's tracked times";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserTimes: " + reqDescription, {}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserTimes: " + reqDescription, {}) }); }
  return response;
}

function verifyUserTimesExists(before, id, limit, page, since) {
  let res = userCurrentTrackedTimes(before, id, limit, page, since);
  try {
      let listData = (typeof res === "string") ? JSON.parse(res) : res;
      if (!Array.isArray(listData) && listData.data) listData = listData.data;
      if (Array.isArray(listData)) {
          let found = listData.find(item => item.id == id || item.id == id);
          if (found) {
              bp.sync({ request: bp.Event("Done: Positive: UserTimes: Verify " + id, {id: id}) });
              pvg.success("UserTimes found in list");
          } else pvg.fail("UserTimes NOT found in list");
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

function matchAnyUserTimesAdded() {
  return bp.EventSet("matchAnyUserTimesAdded", function(e) {
    return e.name.includes("Done: Positive: UserTimes: ");
  });
}

function userListActivityFeeds(username, config) {
  var url = "/users/" + username + "/activities/feeds"; var reqDescription = "List a user's activity feeds";
  reqDescription = reqDescription.replace(/\{[^\}]+\}/g, "context");
  let finalCodes = (config && config.expectedResponseCodes) ? config.expectedResponseCodes : [200];
  let response = svc.get(url, { parameters: { description: reqDescription }, expectedResponseCodes: finalCodes });
  let code = (response && (response.status !== undefined)) ? response.status : (response ? response.statusCode : undefined);
  if (code !== undefined) { if (code === 500) bp.log.info("SUT_500_ERROR for: " + reqDescription);
    if (finalCodes.includes(code)) { if (code >= 200 && code < 300) bp.sync({ request: bp.Event("Done: Positive: UserActivityFeeds: " + reqDescription, {"username": username}) });
      else bp.sync({ request: bp.Event("Done: Negative: Expected Failure: " + reqDescription, {status: code}) }); }
    else pvg.fail("Unexpected Response Code " + code + " for: " + reqDescription);
  } else { bp.log.warn("Response status missing."); bp.sync({ request: bp.Event("Done: Positive: UserActivityFeeds: " + reqDescription, {"username": username}) }); }
  return response;
}

function verifyUserActivityFeedsExists(id) {
  bp.log.warn("Verification skipped: UserActivityFeeds is an Action without a GET endpoint.");
  bp.sync({ request: bp.Event("Done: Positive: UserActivityFeeds: Verify " + id, {id: id}) });
}
function verifyUserActivityFeedsDoesNotExist(id) {
  bp.log.warn("Absence check skipped: UserActivityFeeds has no GET endpoint.");
}

function matchAnyUserActivityFeedsAdded() {
  return bp.EventSet("matchAnyUserActivityFeedsAdded", function(e) {
    return e.name.includes("Done: Positive: UserActivityFeeds: ");
  });
}
