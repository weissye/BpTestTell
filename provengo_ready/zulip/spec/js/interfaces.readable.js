//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://{subdomain}.zulipchat.com/api/v1", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: apikey ----

function fetchApiKey(username, password) {
  var url = "/fetch_api_key";
  var description = "Fetch an API key for user " + username;
  var body = {
    "username": username,
    "password": password,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingApiKey(username, password) {
  return fetchApiKey(username, password);
}

function matchAddedApiKey(username, password) {
  return bp.EventSet("matchAddedApiKey", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(username);
  });
}

function waitForAnyApiKeyAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Fetch an API key for user (.+)/)});
  var m = ev.data.parameters.description.match(/Fetch an API key for user (.+)/);
  var captures = m.slice(1);
  var names = ["username", "password"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: devapikey ----

function devFetchApiKey(username) {
  var url = "/dev_fetch_api_key";
  var description = "Fetch a development API key for user " + username;
  var body = {
    "username": username,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingDevApiKey(username) {
  return devFetchApiKey(username);
}

function matchAddedDevApiKey(username) {
  return bp.EventSet("matchAddedDevApiKey", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(username);
  });
}

function waitForAnyDevApiKeyAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Fetch a development API key for user (.+)/)});
  var m = ev.data.parameters.description.match(/Fetch a development API key for user (.+)/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: events ----

function getEvents(queue_id, last_event_id, dont_block) {
  var url = "/events";
  var description = "Get events from queue " + queue_id + " after event " + last_event_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyEventsExists(queue_id, last_event_id, dont_block) {
  return getEvents(queue_id, last_event_id, dont_block);
}

function verifyEventsDoesNotExist(queue_id, last_event_id, dont_block) {
  return getEvents(queue_id, last_event_id, dont_block);
}

// ---- Entity: users ----

function getUser(user_id) {
  var url = "/users/" + user_id;
  var description = "Get user " + user_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUser(user_id) {
  var url = "/users/" + user_id;
  var description = "Update user " + user_id;
  var body = {
    "user_id": user_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUsersExists(user_id) {
  return getUser(user_id);
}

function verifyUsersDoesNotExist(user_id) {
  return getUser(user_id);
}

function matchAddedUsers(user_id) {
  return bp.EventSet("matchAddedUsers", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(user_id);
  });
}

function waitForAnyUsersAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+)/);
  var captures = m.slice(1);
  var names = ["user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedUsers(user_id) {
  return bp.EventSet("matchDeletedUsers", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(user_id);
  });
}

function waitForAnyUsersDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete user (.+)/)});
  var m = ev.data.parameters.description.match(/Delete user (.+)/);
  var captures = m.slice(1);
  var names = ["user_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhooks ----

function addWebhook(webhook_id) {
  var url = "/webhooks";
  var description = "Add webhook " + webhook_id;
  var body = {
    "webhook_id": webhook_id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(webhook_id) {
  var url = "/webhooks/" + webhook_id;
  var description = "Delete webhook " + webhook_id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(webhook_id) {
  var url = "/webhooks/" + webhook_id;
  var description = "Get webhook " + webhook_id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(webhook_id) {
  var url = "/webhooks/" + webhook_id;
  var description = "Update webhook " + webhook_id;
  var body = {
    "webhook_id": webhook_id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhooks(webhook_id) {
  return addWebhook(webhook_id);
}

function verifyWebhooksExists(webhook_id) {
  return getWebhook(webhook_id);
}

function verifyWebhooksDoesNotExist(webhook_id) {
  return getWebhook(webhook_id);
}

function tryToDeleteANonExistingWebhooks(webhook_id) {
  return deleteWebhook(webhook_id);
}

function matchAddedWebhooks(webhook_id) {
  return bp.EventSet("matchAddedWebhooks", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhook_id);
  });
}

function waitForAnyWebhooksAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Add webhook (.+)/);
  var captures = m.slice(1);
  var names = ["webhook_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedWebhooks(webhook_id) {
  return bp.EventSet("matchDeletedWebhooks", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhook_id);
  });
}

function waitForAnyWebhooksDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Delete webhook (.+)/);
  var captures = m.slice(1);
  var names = ["webhook_id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: settings ----

function getSettings() {
  var url = "/settings";
  var description = "Get settings";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateSettings() {
  var url = "/settings";
  var description = "Update settings";
  var body = undefined;
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifySettingsExists() {
  return getSettings();
}

function verifySettingsDoesNotExist() {
  return getSettings();
}

// ---- Entity: activity ----

function getActivity() {
  var url = "/activity";
  var description = "Get activity";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyActivityExists() {
  return getActivity();
}

function verifyActivityDoesNotExist() {
  return getActivity();
}
