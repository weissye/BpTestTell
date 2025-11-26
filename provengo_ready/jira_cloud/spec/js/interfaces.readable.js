//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://api.atlassian.com/ex/jira/{cloudid}/rest/api/3", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: user ----

function getUser(accountId) {
  var url = "/user?accountId=" + accountId;
  var description = "Get user " + accountId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserExists(accountId) {
  return getUser(accountId);
}

function verifyUserDoesNotExist(accountId) {
  return getUser(accountId);
}

function matchAddedUser(accountId) {
  return bp.EventSet("matchAddedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountId);
  });
}

function waitForAnyUserAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+)/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedUser(accountId) {
  return bp.EventSet("matchDeletedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(accountId);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete user (.+)/)});
  var m = ev.data.parameters.description.match(/Delete user (.+)/);
  var captures = m.slice(1);
  var names = ["accountId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook ----

function addWebhook(webhookId) {
  var url = "/webhook";
  var description = "Add webhook " + webhookId;
  var body = {
    "webhookId": webhookId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Delete webhook " + webhookId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Get webhook " + webhookId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Update webhook " + webhookId;
  var body = {
    "webhookId": webhookId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(webhookId) {
  return addWebhook(webhookId);
}

function verifyWebhookExists(webhookId) {
  return getWebhook(webhookId);
}

function verifyWebhookDoesNotExist(webhookId) {
  return getWebhook(webhookId);
}

function tryToDeleteANonExistingWebhook(webhookId) {
  return deleteWebhook(webhookId);
}

function matchAddedWebhook(webhookId) {
  return bp.EventSet("matchAddedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhookId);
  });
}

function waitForAnyWebhookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Add webhook (.+)/);
  var captures = m.slice(1);
  var names = ["webhookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedWebhook(webhookId) {
  return bp.EventSet("matchDeletedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhookId);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete webhook (.+)/)});
  var m = ev.data.parameters.description.match(/Delete webhook (.+)/);
  var captures = m.slice(1);
  var names = ["webhookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: project ----

function addProject(projectIdOrKey) {
  var url = "/project";
  var description = "Add project " + projectIdOrKey;
  var body = {
    "key": projectIdOrKey,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteProject(projectIdOrKey) {
  var url = "/project/" + projectIdOrKey;
  var description = "Delete project " + projectIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getProject(projectIdOrKey) {
  var url = "/project/" + projectIdOrKey;
  var description = "Get project " + projectIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateProject(projectIdOrKey) {
  var url = "/project/" + projectIdOrKey;
  var description = "Update project " + projectIdOrKey;
  var body = {
    "key": projectIdOrKey,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingProject(projectIdOrKey) {
  return addProject(projectIdOrKey);
}

function verifyProjectExists(projectIdOrKey) {
  return getProject(projectIdOrKey);
}

function verifyProjectDoesNotExist(projectIdOrKey) {
  return getProject(projectIdOrKey);
}

function tryToDeleteANonExistingProject(projectIdOrKey) {
  return deleteProject(projectIdOrKey);
}

function matchAddedProject(projectIdOrKey) {
  return bp.EventSet("matchAddedProject", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(projectIdOrKey);
  });
}

function waitForAnyProjectAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add project (.+)/)});
  var m = ev.data.parameters.description.match(/Add project (.+)/);
  var captures = m.slice(1);
  var names = ["projectIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedProject(projectIdOrKey) {
  return bp.EventSet("matchDeletedProject", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(projectIdOrKey);
  });
}

function waitForAnyProjectDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete project (.+)/)});
  var m = ev.data.parameters.description.match(/Delete project (.+)/);
  var captures = m.slice(1);
  var names = ["projectIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue ----

function addIssue(issueIdOrKey) {
  var url = "/issue";
  var description = "Add issue " + issueIdOrKey;
  var body = {
    "key": issueIdOrKey,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteIssue(issueIdOrKey) {
  var url = "/issue/" + issueIdOrKey;
  var description = "Delete issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getIssue(issueIdOrKey) {
  var url = "/issue/" + issueIdOrKey;
  var description = "Get issue " + issueIdOrKey;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateIssue(issueIdOrKey) {
  var url = "/issue/" + issueIdOrKey;
  var description = "Update issue " + issueIdOrKey;
  var body = {
    "key": issueIdOrKey,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingIssue(issueIdOrKey) {
  return addIssue(issueIdOrKey);
}

function verifyIssueExists(issueIdOrKey) {
  return getIssue(issueIdOrKey);
}

function verifyIssueDoesNotExist(issueIdOrKey) {
  return getIssue(issueIdOrKey);
}

function tryToDeleteANonExistingIssue(issueIdOrKey) {
  return deleteIssue(issueIdOrKey);
}

function matchAddedIssue(issueIdOrKey) {
  return bp.EventSet("matchAddedIssue", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(issueIdOrKey);
  });
}

function waitForAnyIssueAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add issue (.+)/)});
  var m = ev.data.parameters.description.match(/Add issue (.+)/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedIssue(issueIdOrKey) {
  return bp.EventSet("matchDeletedIssue", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(issueIdOrKey);
  });
}

function waitForAnyIssueDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete issue (.+)/)});
  var m = ev.data.parameters.description.match(/Delete issue (.+)/);
  var captures = m.slice(1);
  var names = ["issueIdOrKey"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhookregistration ----

function addWebhookRegistration(webhookId) {
  var url = "/webhook";
  var description = "Add webhookregistration " + webhookId;
  var body = {
    "webhookId": webhookId,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhookRegistration(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Delete webhookregistration " + webhookId;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhookRegistration(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Get webhookregistration " + webhookId;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhookRegistration(webhookId) {
  var url = "/webhook/" + webhookId;
  var description = "Update webhookregistration " + webhookId;
  var body = {
    "webhookId": webhookId,
  };
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhookRegistration(webhookId) {
  return addWebhookRegistration(webhookId);
}

function verifyWebhookRegistrationExists(webhookId) {
  return getWebhookRegistration(webhookId);
}

function verifyWebhookRegistrationDoesNotExist(webhookId) {
  return getWebhookRegistration(webhookId);
}

function tryToDeleteANonExistingWebhookRegistration(webhookId) {
  return deleteWebhookRegistration(webhookId);
}

function matchAddedWebhookRegistration(webhookId) {
  return bp.EventSet("matchAddedWebhookRegistration", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhookId);
  });
}

function waitForAnyWebhookRegistrationAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add webhookregistration (.+)/)});
  var m = ev.data.parameters.description.match(/Add webhookregistration (.+)/);
  var captures = m.slice(1);
  var names = ["webhookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedWebhookRegistration(webhookId) {
  return bp.EventSet("matchDeletedWebhookRegistration", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(webhookId);
  });
}

function waitForAnyWebhookRegistrationDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete webhookregistration (.+)/)});
  var m = ev.data.parameters.description.match(/Delete webhookregistration (.+)/);
  var captures = m.slice(1);
  var names = ["webhookId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
