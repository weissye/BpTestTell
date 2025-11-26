//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("{{AppSubUrl | JSEscape}}/api/v1", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: user ----

function addUser(username) {
  var url = "/admin/users";
  var description = "Add user " + username;
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

function deleteUser(username) {
  var url = "/admin/users/" + username;
  var description = "Delete user " + username;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getUser() {
  var url = "/admin/users";
  var description = "Get users list";
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateUser(username) {
  var url = "/admin/users/" + username;
  var description = "Update user " + username;
  var body = {
    "username": username,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingUser(username) {
  return addUser(username);
}

function verifyUserExists() {
  return getUser();
}

function verifyUserDoesNotExist() {
  return getUser();
}

function tryToDeleteANonExistingUser(username) {
  return deleteUser(username);
}

function matchAddedUser(username) {
  return bp.EventSet("matchAddedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(username);
  });
}

function waitForAnyUserAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add user (.+)/)});
  var m = ev.data.parameters.description.match(/Add user (.+)/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedUser(username) {
  return bp.EventSet("matchDeletedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(username);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete user (.+)/)});
  var m = ev.data.parameters.description.match(/Delete user (.+)/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hook ----

function addWebhook(id) {
  var url = "/admin/hooks";
  var description = "Add hook " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteWebhook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Delete hook " + id;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getWebhook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Get hook " + id;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateWebhook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Update hook " + id;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingWebhook(id) {
  return addWebhook(id);
}

function verifyWebhookExists(id) {
  return getWebhook(id);
}

function verifyWebhookDoesNotExist(id) {
  return getWebhook(id);
}

function tryToDeleteANonExistingWebhook(id) {
  return deleteWebhook(id);
}

function matchAddedWebhook(id) {
  return bp.EventSet("matchAddedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyWebhookAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add hook (.+)/)});
  var m = ev.data.parameters.description.match(/Add hook (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedWebhook(id) {
  return bp.EventSet("matchDeletedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(id);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete hook (.+)/)});
  var m = ev.data.parameters.description.match(/Delete hook (.+)/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: activity ----

function getActivityFeeds(org) {
  var url = "/orgs/" + org + "/activities/feeds";
  var description = "Get activity feeds for org " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyActivityExists(org) {
  return getActivityFeeds(org);
}

function verifyActivityDoesNotExist(org) {
  return getActivityFeeds(org);
}

// ---- Entity: setting ----

// ---- Entity: organization ----

function addOrganization(org) {
  var url = "/orgs";
  var description = "Add organization " + org;
  var body = {
    "org": org,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Delete organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Get organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateOrganization(org) {
  var url = "/orgs/" + org;
  var description = "Update organization " + org;
  var body = {
    "org": org,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingOrganization(org) {
  return addOrganization(org);
}

function verifyOrganizationExists(org) {
  return getOrganization(org);
}

function verifyOrganizationDoesNotExist(org) {
  return getOrganization(org);
}

function tryToDeleteANonExistingOrganization(org) {
  return deleteOrganization(org);
}

function matchAddedOrganization(org) {
  return bp.EventSet("matchAddedOrganization", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(org);
  });
}

function waitForAnyOrganizationAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add organization (.+)/)});
  var m = ev.data.parameters.description.match(/Add organization (.+)/);
  var captures = m.slice(1);
  var names = ["org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedOrganization(org) {
  return bp.EventSet("matchDeletedOrganization", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(org);
  });
}

function waitForAnyOrganizationDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete organization (.+)/)});
  var m = ev.data.parameters.description.match(/Delete organization (.+)/);
  var captures = m.slice(1);
  var names = ["org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository ----

function addRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Add repository " + owner + "/" + repo;
  var body = {
    "owner": owner,
    "repo": repo,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Delete repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Get repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRepository(owner, repo) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Update repository " + owner + "/" + repo;
  var body = {
    "owner": owner,
    "repo": repo,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRepository(owner, repo) {
  return addRepository(owner, repo);
}

function verifyRepositoryExists(owner, repo) {
  return getRepository(owner, repo);
}

function verifyRepositoryDoesNotExist(owner, repo) {
  return getRepository(owner, repo);
}

function tryToDeleteANonExistingRepository(owner, repo) {
  return deleteRepository(owner, repo);
}

function matchAddedRepository(owner, repo) {
  return bp.EventSet("matchAddedRepository", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(owner);
  });
}

function waitForAnyRepositoryAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add repository (.+)/(.+)/)});
  var m = ev.data.parameters.description.match(/Add repository (.+)/(.+)/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedRepository(owner, repo) {
  return bp.EventSet("matchDeletedRepository", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(owner);
  });
}

function waitForAnyRepositoryDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete repository (.+)/(.+)/)});
  var m = ev.data.parameters.description.match(/Delete repository (.+)/(.+)/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: branch ----

function addBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Add branch " + branch + " in repository " + owner + "/" + repo;
  var body = {
    "branch": branch,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete branch " + branch + " in repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Get branch " + branch + " in repository " + owner + "/" + repo;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateBranch(owner, repo, branch) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update branch " + branch + " in repository " + owner + "/" + repo;
  var body = {
    "branch": branch,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingBranch(owner, repo, branch) {
  return addBranch(owner, repo, branch);
}

function verifyBranchExists(owner, repo, branch) {
  return getBranch(owner, repo, branch);
}

function verifyBranchDoesNotExist(owner, repo, branch) {
  return getBranch(owner, repo, branch);
}

function tryToDeleteANonExistingBranch(owner, repo, branch) {
  return deleteBranch(owner, repo, branch);
}

function matchAddedBranch(owner, repo, branch) {
  return bp.EventSet("matchAddedBranch", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(owner);
  });
}

function waitForAnyBranchAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add branch (.+) in repository (.+)/(.+)/)});
  var m = ev.data.parameters.description.match(/Add branch (.+) in repository (.+)/(.+)/);
  var captures = m.slice(1);
  var names = ["owner", "repo", "branch"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedBranch(owner, repo, branch) {
  return bp.EventSet("matchDeletedBranch", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(owner);
  });
}

function waitForAnyBranchDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete branch (.+) in repository (.+)/(.+)/)});
  var m = ev.data.parameters.description.match(/Delete branch (.+) in repository (.+)/(.+)/);
  var captures = m.slice(1);
  var names = ["owner", "repo", "branch"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: label ----

function addLabel(org, id) {
  var url = "/orgs/" + org + "/labels";
  var description = "Add label " + id + " in organization " + org;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Delete label " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Get label " + id + " in organization " + org;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateLabel(org, id) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Update label " + id + " in organization " + org;
  var body = {
    "id": id,
  };
  return svc.request({
    method: "PATCH",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingLabel(org, id) {
  return addLabel(org, id);
}

function verifyLabelExists(org, id) {
  return getLabel(org, id);
}

function verifyLabelDoesNotExist(org, id) {
  return getLabel(org, id);
}

function tryToDeleteANonExistingLabel(org, id) {
  return deleteLabel(org, id);
}

function matchAddedLabel(org, id) {
  return bp.EventSet("matchAddedLabel", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(org);
  });
}

function waitForAnyLabelAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add label (.+) in organization (.+)/)});
  var m = ev.data.parameters.description.match(/Add label (.+) in organization (.+)/);
  var captures = m.slice(1);
  var names = ["org", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedLabel(org, id) {
  return bp.EventSet("matchDeletedLabel", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(org);
  });
}

function waitForAnyLabelDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete label (.+) in organization (.+)/)});
  var m = ev.data.parameters.description.match(/Delete label (.+) in organization (.+)/);
  var captures = m.slice(1);
  var names = ["org", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
