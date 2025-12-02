//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: repository ----

function repoGetByID(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repositories/" + id;
  var description = "Get repository by id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Delete repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function editRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Edit repository " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 422],
    parameters: {
      description: description,
      id: String(id)
      , filepath: String(filepath)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getRepositoryLanguages(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/languages";
  var description = "Get languages and number of bytes of code written for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getRepositoryLicenses(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/licenses";
  var description = "Get licenses for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getRepositoryRawFileOrLFS(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/media/" + filepath;
  var description = "Get file " + filepath + " or LFS object from repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function mergeRepositoryUpstream(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/merge-upstream";
  var description = "Merge a branch from upstream into repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 404],
    parameters: {
      description: description,
      id: String(id)
      , filepath: String(filepath)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function syncRepositoryMirror(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/mirror-sync";
  var description = "Sync mirrored repository " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , filepath: String(filepath)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function isNewPinAllowed(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/new_pin_allowed";
  var description = "Check if new issue pins are allowed in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function adminCreateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Create repository for user " + username;
  var body = {
    "id": String(id),
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 403, 404, 409, 422],
    parameters: {
      description: description,
      id: String(id)
      , filepath: String(filepath)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function generateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + template_owner + "/" + template_repo + "/generate";
  var description = "Create a repository from template repo " + template_repo + " owned by " + template_owner;
  var body = {
    "id": String(id),
    "template_owner": String(template_owner),
    "template_repo": String(template_repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 409, 422],
    parameters: {
      description: description,
      id: String(id)
      , filepath: String(filepath)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function tryToAddExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  generateRepo(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username);
}

function verifyRepositoryExists(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Verify Repository with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Repository exists");
          }
        }
      }
      return pvg.fail("Expected Repository to exist but it does not");
    }
  });
}

function verifyRepositoryDoesNotExist(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Verify Repository with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Repository to not exist but it does");
          }
        }
      }
      return pvg.success("Repository does not exist");
    }
  });
}

function tryToDeleteANonExistingRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Verify we cannot delete non-existing Repository";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var expectedDesc = "Create repository for user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyRepositoryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ repository\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ repository\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryAddedEvent(keyVal) {
  return bp.EventSet("AddRepository:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRepositoryAdded() {
  return bp.EventSet("matchAnyRepositoryAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create repository") > -1;
  });
}

function waitForRepositoryAdded(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var expectedDesc = "Create repository for user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRepository(filepath, id, name, org, owner, ref, repo, template_owner, template_repo, username) {
  var expectedDesc = "Delete repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository secret ----

function createOrUpdateRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , secretname: String(secretname)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingRepositorySecret(owner, repo, secretname) {
  deleteRepoSecret(owner, repo, secretname);
}

function verifyRepositorySecretExists(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Verify RepositorySecret with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositorySecret exists");
          }
        }
      }
      return pvg.fail("Expected RepositorySecret to exist but it does not");
    }
  });
}

function verifyRepositorySecretDoesNotExist(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Verify RepositorySecret with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositorySecret to not exist but it does");
          }
        }
      }
      return pvg.success("RepositorySecret does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositorySecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Verify we cannot delete non-existing RepositorySecret";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositorySecret(owner, repo, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyRepositorySecretAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ or\ update\ secret\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ or\ update\ secret\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["secretname", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositorySecretAddedEvent(keyVal) {
  return bp.EventSet("AddRepositorySecret:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositorySecretAdded() {
  return bp.EventSet("matchAnyRepositorySecretAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create repository secret") > -1;
  });
}

function waitForRepositorySecretAdded(owner, repo, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRepositorySecret(owner, repo, secretname) {
  var expectedDesc = "Delete secret " + secretname + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositorySecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositorySecretDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ secret\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ secret\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["secretname", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository variable ----

function createRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "variablename": String(variablename),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Get variable " + variablename + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function updateRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Update variable " + variablename + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "variablename": String(variablename),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Delete variable " + variablename + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 201, 204, 400, 404]
  });
}

function tryToAddExistingRepositoryVariable(owner, repo, variablename) {
  deleteRepoVariable(owner, repo, variablename);
}

function verifyRepositoryVariableExists(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify RepositoryVariable with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryVariable exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryVariable to exist but it does not");
    }
  });
}

function verifyRepositoryVariableDoesNotExist(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify RepositoryVariable with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryVariable to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryVariable does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify we cannot delete non-existing RepositoryVariable";
  svc.delete(url, {
    expectedResponseCodes: [200, 201, 204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryVariable(owner, repo, variablename) {
  var expectedDesc = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyRepositoryVariableAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ variable\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ variable\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["variablename", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryVariableAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryVariable:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryVariableAdded() {
  return bp.EventSet("matchAnyRepositoryVariableAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create repository variable") > -1;
  });
}

function waitForRepositoryVariableAdded(owner, repo, variablename) {
  var expectedDesc = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRepositoryVariable(owner, repo, variablename) {
  var expectedDesc = "Delete variable " + variablename + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryVariableDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ variable\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ variable\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["variablename", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository migration ----

function migrateRepository() {
  var url = "/repos/migrate";
  var description = "Migrate a remote git repository";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 409, 422],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingRepositoryMigrate() {
  migrateRepository();
}

function verifyRepositoryMigrateExists() {
  var url = "/repos/migrate";
  var description = "Verify RepositoryMigrate exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RepositoryMigrate exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryMigrate to exist but it does not");
    }
  });
}

function verifyRepositoryMigrateDoesNotExist() {
  var url = "/repos/migrate";
  var description = "Verify RepositoryMigrate does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RepositoryMigrate to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryMigrate does not exist");
    }
  });
}

function matchAddedRepositoryMigrate() {
  var expectedDesc = "Migrate a remote git repository";
  return matchSuccess(expectedDesc);
}

function waitForAnyRepositoryMigrateAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Migrate\ a\ remote\ git\ repository$/));
  var m = ev.data.parameters.description.match(/^Migrate\ a\ remote\ git\ repository$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryMigrateAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryMigrate:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRepositoryMigrateAdded() {
  return bp.EventSet("matchAnyRepositoryMigrateAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create repository migration") > -1;
  });
}

function waitForRepositoryMigrateAdded() {
  var expectedDesc = "Migrate a remote git repository";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: branch protection ----

function createBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Create branch protection " + name + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Get branch protection " + name + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function editBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Edit branch protection " + name + " in repo " + repo + " owned by " + owner;
  var body = {
    "name": String(name),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Delete branch protection " + name + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingBranchProtection(name, owner, repo) {
  deleteBranchProtection(name, owner, repo);
}

function verifyBranchProtectionExists(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Verify BranchProtection with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("BranchProtection exists");
          }
        }
      }
      return pvg.fail("Expected BranchProtection to exist but it does not");
    }
  });
}

function verifyBranchProtectionDoesNotExist(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Verify BranchProtection with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected BranchProtection to not exist but it does");
          }
        }
      }
      return pvg.success("BranchProtection does not exist");
    }
  });
}

function tryToDeleteANonExistingBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Verify we cannot delete non-existing BranchProtection";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedBranchProtection(name, owner, repo) {
  var expectedDesc = "Create branch protection " + name + " in repo " + repo + " owned by " + owner;
  return matchSuccess(expectedDesc);
}

function waitForAnyBranchProtectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ branch\ protection\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ branch\ protection\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBranchProtectionAddedEvent(keyVal) {
  return bp.EventSet("AddBranchProtection:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyBranchProtectionAdded() {
  return bp.EventSet("matchAnyBranchProtectionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create branch protection") > -1;
  });
}

function waitForBranchProtectionAdded(name, owner, repo) {
  var expectedDesc = "Create branch protection " + name + " in repo " + repo + " owned by " + owner;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBranchProtection(name, owner, repo) {
  var expectedDesc = "Delete branch protection " + name + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedBranchProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBranchProtectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ branch\ protection\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ branch\ protection\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: branch ----

function createBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Create branch in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 409, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , branch: String(branch)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Get branch " + branch + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update branch " + branch + " in repo " + repo + " owned by " + owner;
  var body = {
    "branch": String(branch),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , branch: String(branch)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete branch " + branch + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 423]
  });
}

function tryToAddExistingBranch(branch, owner, repo) {
  deleteBranch(branch, owner, repo);
}

function verifyBranchExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify Branch with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Branch exists");
          }
        }
      }
      return pvg.fail("Expected Branch to exist but it does not");
    }
  });
}

function verifyBranchDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify Branch with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Branch to not exist but it does");
          }
        }
      }
      return pvg.success("Branch does not exist");
    }
  });
}

function tryToDeleteANonExistingBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify we cannot delete non-existing Branch";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 423],
    parameters: { description: description }
  });
}

function matchAddedBranch(branch, owner, repo) {
  var expectedDesc = "Create branch in repo " + repo + " owned by " + owner;
  return matchSuccess(expectedDesc);
}

function waitForAnyBranchAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ branch\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ branch\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBranchAddedEvent(keyVal) {
  return bp.EventSet("AddBranch:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyBranchAdded() {
  return bp.EventSet("matchAnyBranchAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create branch") > -1;
  });
}

function waitForBranchAdded(branch, owner, repo) {
  var expectedDesc = "Create branch in repo " + repo + " owned by " + owner;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBranch(branch, owner, repo) {
  var expectedDesc = "Delete branch " + branch + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedBranch", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBranchDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ branch\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ branch\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["branch", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: collaborator ----

function addCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Add or update collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  var body = {
    "collaborator": String(collaborator),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , collaborator: String(collaborator)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function checkCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Check collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function deleteCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Delete collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function tryToAddExistingCollaborator(collaborator, owner, repo) {
  deleteCollaborator(collaborator, owner, repo);
}

function verifyCollaboratorExists(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify Collaborator with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Collaborator exists");
          }
        }
      }
      return pvg.fail("Expected Collaborator to exist but it does not");
    }
  });
}

function verifyCollaboratorDoesNotExist(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify Collaborator with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Collaborator to not exist but it does");
          }
        }
      }
      return pvg.success("Collaborator does not exist");
    }
  });
}

function tryToDeleteANonExistingCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify we cannot delete non-existing Collaborator";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedCollaborator(collaborator, owner, repo) {
  var expectedDesc = "Add or update collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  return matchSuccess(expectedDesc);
}

function waitForAnyCollaboratorAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ or\ update\ collaborator\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ or\ update\ collaborator\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collaborator", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCollaboratorAddedEvent(keyVal) {
  return bp.EventSet("AddCollaborator:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyCollaboratorAdded() {
  return bp.EventSet("matchAnyCollaboratorAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create collaborator") > -1;
  });
}

function waitForCollaboratorAdded(collaborator, owner, repo) {
  var expectedDesc = "Add or update collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedCollaborator(collaborator, owner, repo) {
  var expectedDesc = "Delete collaborator " + collaborator + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedCollaborator", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyCollaboratorDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ collaborator\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ collaborator\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["collaborator", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository avatar ----

function updateRepoAvatar(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/avatar";
  var description = "Update avatar for repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteRepoAvatar(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/avatar";
  var description = "Delete avatar for repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToDeleteANonExistingRepositoryAvatar(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/avatar";
  var description = "Verify we cannot delete non-existing RepositoryAvatar";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchDeletedRepositoryAvatar(owner, repo) {
  var expectedDesc = "Delete avatar for repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedRepositoryAvatar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryAvatarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ avatar\ for\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ avatar\ for\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository collaborator permission ----

function getRepositoryCollaboratorPermission(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator + "/permission";
  var description = "Get repository permissions for collaborator " + collaborator + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function verifyRepositoryCollaboratorPermissionExists(collaborator, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryCollaboratorPermission with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryCollaboratorPermission exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryCollaboratorPermission to exist but it does not");
    }
  });
}

function verifyRepositoryCollaboratorPermissionDoesNotExist(collaborator, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryCollaboratorPermission with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryCollaboratorPermission to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryCollaboratorPermission does not exist");
    }
  });
}

// ---- Entity: commit ----

function getAllCommits(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits";
  var description = "Get all commits from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404, 409]
  });
}

function getCommitCombinedStatus(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/status";
  var description = "Get combined status of commit " + ref + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function listCommitStatuses(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + ref + "/statuses";
  var description = "Get statuses of commit " + ref + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function getCommitPullRequest(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos/" + owner + "/" + repo + "/commits/" + sha + "/pull";
  var description = "Get merged pull request of commit " + sha + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoGetSingleCommit(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha;
  var description = "Get commit " + sha + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404, 422]
  });
}

function verifyCommitExists(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos";
  var description = "Verify Commit with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Commit exists");
          }
        }
      }
      return pvg.fail("Expected Commit to exist but it does not");
    }
  });
}

function verifyCommitDoesNotExist(basehead, files, owner, ref, repo, sha, stat, verification) {
  var url = "/repos";
  var description = "Verify Commit with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Commit to not exist but it does");
          }
        }
      }
      return pvg.success("Commit does not exist");
    }
  });
}

// ---- Entity: commit comparison ----

function getCommitComparison(basehead, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/compare/" + basehead;
  var description = "Get commit comparison " + basehead + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyCommitComparisonExists(basehead, owner, repo) {
  var url = "/repos";
  var description = "Verify CommitComparison with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("CommitComparison exists");
          }
        }
      }
      return pvg.fail("Expected CommitComparison to exist but it does not");
    }
  });
}

function verifyCommitComparisonDoesNotExist(basehead, owner, repo) {
  var url = "/repos";
  var description = "Verify CommitComparison with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected CommitComparison to not exist but it does");
          }
        }
      }
      return pvg.success("CommitComparison does not exist");
    }
  });
}

// ---- Entity: repository content ----

function getRootContents(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents";
  var description = "Get root directory contents of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function changeFiles(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents";
  var description = "Modify multiple files in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , filepath: String(filepath)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getContent(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Get content metadata of " + filepath + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createFile(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Create file " + filepath + " in repository " + owner + "/" + repo;
  var body = {
    "filepath": String(filepath),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , filepath: String(filepath)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function updateFile(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Update file " + filepath + " in repository " + owner + "/" + repo;
  var body = {
    "filepath": String(filepath),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , filepath: String(filepath)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteFile(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Delete file " + filepath + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 404, 423]
  });
}

function verifyRepositoryContentExists(filepath, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryContent with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryContent exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryContent to exist but it does not");
    }
  });
}

function verifyRepositoryContentDoesNotExist(filepath, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryContent with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryContent to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryContent does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryContent(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Verify we cannot delete non-existing RepositoryContent";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 403, 404, 423],
    parameters: { description: description }
  });
}

function matchDeletedRepositoryContent(filepath, owner, repo) {
  var expectedDesc = "Delete file " + filepath + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryContent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryContentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ file\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ file\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["filepath", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: diff patch ----

function applyDiffPatch(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/diffpatch";
  var description = "Apply diff patch to repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 423],
    parameters: {
      description: description,
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: editorconfig ----

function getEditorConfig(filepath, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/editorconfig/" + filepath;
  var description = "Get EditorConfig definitions for file " + filepath + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyEditorConfigExists(filepath, owner, repo) {
  var url = "/repos";
  var description = "Verify EditorConfig with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("EditorConfig exists");
          }
        }
      }
      return pvg.fail("Expected EditorConfig to exist but it does not");
    }
  });
}

function verifyEditorConfigDoesNotExist(filepath, owner, repo) {
  var url = "/repos";
  var description = "Verify EditorConfig with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected EditorConfig to not exist but it does");
          }
        }
      }
      return pvg.success("EditorConfig does not exist");
    }
  });
}

// ---- Entity: fork ----

function listForks(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "List forks of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createFork(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Fork repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 403, 404, 409, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingFork(limit, owner, page, repo) {
  createFork(limit, owner, page, repo);
}

function verifyForkExists(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Verify Fork with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Fork exists");
          }
        }
      }
      return pvg.fail("Expected Fork to exist but it does not");
    }
  });
}

function verifyForkDoesNotExist(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/forks";
  var description = "Verify Fork with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Fork to not exist but it does");
          }
        }
      }
      return pvg.success("Fork does not exist");
    }
  });
}

function matchAddedFork(limit, owner, page, repo) {
  var expectedDesc = "Fork repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyForkAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Fork\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Fork\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getForkAddedEvent(keyVal) {
  return bp.EventSet("AddFork:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyForkAdded() {
  return bp.EventSet("matchAnyForkAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create fork") > -1;
  });
}

function waitForForkAdded(limit, owner, page, repo) {
  var expectedDesc = "Fork repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: blob ----

function GetBlob(owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/blobs/" + sha;
  var description = "Get blob " + sha + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function verifyBlobExists(owner, repo, sha) {
  var url = "/repos";
  var description = "Verify Blob with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Blob exists");
          }
        }
      }
      return pvg.fail("Expected Blob to exist but it does not");
    }
  });
}

function verifyBlobDoesNotExist(owner, repo, sha) {
  var url = "/repos";
  var description = "Verify Blob with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Blob to not exist but it does");
          }
        }
      }
      return pvg.success("Blob does not exist");
    }
  });
}

// ---- Entity: commitDiffOrPatch ----

function repoDownloadCommitDiffOrPatch(diffType, owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/commits/" + sha + "." + diffType;
  var description = "Get commit " + sha + " " + diffType + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyCommitDiffOrPatchExists(diffType, owner, repo, sha) {
  var url = "/repos";
  var description = "Verify CommitDiffOrPatch with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("CommitDiffOrPatch exists");
          }
        }
      }
      return pvg.fail("Expected CommitDiffOrPatch to exist but it does not");
    }
  });
}

function verifyCommitDiffOrPatchDoesNotExist(diffType, owner, repo, sha) {
  var url = "/repos";
  var description = "Verify CommitDiffOrPatch with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected CommitDiffOrPatch to not exist but it does");
          }
        }
      }
      return pvg.success("CommitDiffOrPatch does not exist");
    }
  });
}

// ---- Entity: note ----

function repoGetNote(files, owner, repo, sha, verification) {
  var url = "/repos/" + owner + "/" + repo + "/git/notes/" + sha;
  var description = "Get note for commit " + sha + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404, 422]
  });
}

function verifyNoteExists(files, owner, repo, sha, verification) {
  var url = "/repos";
  var description = "Verify Note with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Note exists");
          }
        }
      }
      return pvg.fail("Expected Note to exist but it does not");
    }
  });
}

function verifyNoteDoesNotExist(files, owner, repo, sha, verification) {
  var url = "/repos";
  var description = "Verify Note with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Note to not exist but it does");
          }
        }
      }
      return pvg.success("Note does not exist");
    }
  });
}

// ---- Entity: gitRef ----

function repoListAllGitRefs(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs";
  var description = "List all git refs for repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyGitRefExists(owner, repo) {
  var url = "/repos";
  var description = "Verify GitRef with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("GitRef exists");
          }
        }
      }
      return pvg.fail("Expected GitRef to exist but it does not");
    }
  });
}

function verifyGitRefDoesNotExist(owner, repo) {
  var url = "/repos";
  var description = "Verify GitRef with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected GitRef to not exist but it does");
          }
        }
      }
      return pvg.success("GitRef does not exist");
    }
  });
}

// ---- Entity: gitRefDetail ----

function repoListGitRefs(owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/git/refs/" + ref;
  var description = "Get git ref " + ref + " for repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyGitRefDetailExists(owner, ref, repo) {
  var url = "/repos";
  var description = "Verify GitRefDetail with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("GitRefDetail exists");
          }
        }
      }
      return pvg.fail("Expected GitRefDetail to exist but it does not");
    }
  });
}

function verifyGitRefDetailDoesNotExist(owner, ref, repo) {
  var url = "/repos";
  var description = "Verify GitRefDetail with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected GitRefDetail to not exist but it does");
          }
        }
      }
      return pvg.success("GitRefDetail does not exist");
    }
  });
}

// ---- Entity: annotatedTag ----

function GetAnnotatedTag(owner, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/tags/" + sha;
  var description = "Get annotated tag " + sha + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function verifyAnnotatedTagExists(owner, repo, sha) {
  var url = "/repos";
  var description = "Verify AnnotatedTag with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("AnnotatedTag exists");
          }
        }
      }
      return pvg.fail("Expected AnnotatedTag to exist but it does not");
    }
  });
}

function verifyAnnotatedTagDoesNotExist(owner, repo, sha) {
  var url = "/repos";
  var description = "Verify AnnotatedTag with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected AnnotatedTag to not exist but it does");
          }
        }
      }
      return pvg.success("AnnotatedTag does not exist");
    }
  });
}

// ---- Entity: tree ----

function GetTree(owner, page, per_page, recursive, repo, sha) {
  var url = "/repos/" + owner + "/" + repo + "/git/trees/" + sha;
  var description = "Get tree " + sha + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function verifyTreeExists(owner, page, per_page, recursive, repo, sha) {
  var url = "/repos";
  var description = "Verify Tree with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Tree exists");
          }
        }
      }
      return pvg.fail("Expected Tree to exist but it does not");
    }
  });
}

function verifyTreeDoesNotExist(owner, page, per_page, recursive, repo, sha) {
  var url = "/repos";
  var description = "Verify Tree with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Tree to not exist but it does");
          }
        }
      }
      return pvg.success("Tree does not exist");
    }
  });
}

// ---- Entity: hook ----

function getHook(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks/" + id;
  var description = "Get hook with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function createHook(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks";
  var description = "Create hook";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
      , owner: String(owner)
      , repo: String(repo)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function deleteHook(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks/" + id;
  var description = "Delete hook with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateHook(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks/" + id;
  var description = "Update hook with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
      , owner: String(owner)
      , repo: String(repo)
      , type: String(type)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function listHooks(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks";
  var description = "List system's webhooks";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingHook(id, limit, org, owner, page, repo, type) {
  listHooks(id, limit, org, owner, page, repo, type);
}

function verifyHookExists(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks";
  var description = "Verify Hook with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Hook exists");
          }
        }
      }
      return pvg.fail("Expected Hook to exist but it does not");
    }
  });
}

function verifyHookDoesNotExist(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks";
  var description = "Verify Hook with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Hook to not exist but it does");
          }
        }
      }
      return pvg.success("Hook does not exist");
    }
  });
}

function tryToDeleteANonExistingHook(id, limit, org, owner, page, repo, type) {
  var url = "/admin/hooks/" + id;
  var description = "Verify we cannot delete non-existing Hook";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedHook(id, limit, org, owner, page, repo, type) {
  var expectedDesc = "Create hook";
  return matchSuccess(expectedDesc);
}

function waitForAnyHookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ hook$/));
  var m = ev.data.parameters.description.match(/^Create\ hook$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getHookAddedEvent(keyVal) {
  return bp.EventSet("AddHook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyHookAdded() {
  return bp.EventSet("matchAnyHookAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create hook") > -1;
  });
}

function waitForHookAdded(id, limit, org, owner, page, repo, type) {
  var expectedDesc = "Create hook";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedHook(id, limit, org, owner, page, repo, type) {
  var expectedDesc = "Delete hook with id " + id;
  return bp.EventSet("matchDeletedHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyHookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ hook\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ hook\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: git hook ----

function repoGetGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Get git hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoDeleteGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Delete git hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function repoEditGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Edit git hook " + id + " in repository " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoListGitHooks(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git";
  var description = "List git hooks in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyGitHookExists(id, owner, repo) {
  var url = "/repos";
  var description = "Verify GitHook with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("GitHook exists");
          }
        }
      }
      return pvg.fail("Expected GitHook to exist but it does not");
    }
  });
}

function verifyGitHookDoesNotExist(id, owner, repo) {
  var url = "/repos";
  var description = "Verify GitHook with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected GitHook to not exist but it does");
          }
        }
      }
      return pvg.success("GitHook does not exist");
    }
  });
}

function tryToDeleteANonExistingGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Verify we cannot delete non-existing GitHook";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchDeletedGitHook(id, owner, repo) {
  var expectedDesc = "Delete git hook " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedGitHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGitHookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ git\ hook\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ git\ hook\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hook test ----

function repoTestHook(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id + "/tests";
  var description = "Test hook " + id + " in repository " + owner + "/" + repo + " with ref " + ref;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "ref": String(ref),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404],
    parameters: {
      description: description,
      , id: String(id)
      , owner: String(owner)
      , ref: String(ref)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingHookTest(id, owner, ref, repo) {
  repoTestHook(id, owner, ref, repo);
}

function verifyHookTestExists(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id + "/tests";
  var description = "Verify HookTest exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("HookTest exists");
          }
        }
      }
      return pvg.fail("Expected HookTest to exist but it does not");
    }
  });
}

function verifyHookTestDoesNotExist(id, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id + "/tests";
  var description = "Verify HookTest does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected HookTest to not exist but it does");
          }
        }
      }
      return pvg.success("HookTest does not exist");
    }
  });
}

function matchAddedHookTest(id, owner, ref, repo) {
  var expectedDesc = "Test hook " + id + " in repository " + owner + "/" + repo + " with ref " + ref;
  return matchSuccess(expectedDesc);
}

function waitForAnyHookTestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Test\ hook\ (.+)\ in\ repository\ (.+)/(.+)\ with\ ref\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Test\ hook\ (.+)\ in\ repository\ (.+)/(.+)\ with\ ref\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo", "ref"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getHookTestAddedEvent(keyVal) {
  return bp.EventSet("AddHookTest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyHookTestAdded() {
  return bp.EventSet("matchAnyHookTestAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create hook test") > -1;
  });
}

function waitForHookTestAdded(id, owner, ref, repo) {
  var expectedDesc = "Test hook " + id + " in repository " + owner + "/" + repo + " with ref " + ref;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: key ----

function repoCreateKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Add key to repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoGetKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Get key " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoDeleteKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Delete key " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function repoListKeys(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "List keys in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingKey(id, owner, repo) {
  repoListKeys(id, owner, repo);
}

function verifyKeyExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Verify Key with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Key exists");
          }
        }
      }
      return pvg.fail("Expected Key to exist but it does not");
    }
  });
}

function verifyKeyDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Verify Key with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Key to not exist but it does");
          }
        }
      }
      return pvg.success("Key does not exist");
    }
  });
}

function tryToDeleteANonExistingKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Verify we cannot delete non-existing Key";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedKey(id, owner, repo) {
  var expectedDesc = "Add key to repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ key\ to\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ key\ to\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getKeyAddedEvent(keyVal) {
  return bp.EventSet("AddKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyKeyAdded() {
  return bp.EventSet("matchAnyKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create key") > -1;
  });
}

function waitForKeyAdded(id, owner, repo) {
  var expectedDesc = "Add key to repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedKey(id, owner, repo) {
  var expectedDesc = "Delete key " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ key\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ key\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: pull request ----

function listPullRequests(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "List pull requests for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404, 500]
  });
}

function createPullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Create pull request in repo " + owner + "/" + repo + " with title {title} and head " + head;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 409, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , diffType: String(diffType)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function listPinnedPullRequests(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/pinned";
  var description = "List pinned pull requests for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getPullRequestByBaseHead(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + base + "/" + head;
  var description = "Get pull request by base " + base + " and head " + head + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getPullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Get pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoUpdatePullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/update";
  var description = "Merge PR " + index + " baseBranch into headBranch in repository " + owner + "/" + repo + " with style " + style;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
    "style": String(style),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 409, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , diffType: String(diffType)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getPullRequestDiffOrPatch(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "." + diffType;
  var description = "Get pull request " + index + " " + diffType + " for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getPullRequestCommits(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/commits";
  var description = "Get commits for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function getPullRequestFiles(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/files";
  var description = "Get changed files for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function checkPullRequestMerged(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Check if pull request " + index + " in repo " + owner + "/" + repo + " is merged";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function mergePullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Merge pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 405, 409, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , diffType: String(diffType)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function cancelScheduledAutoMerge(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Cancel scheduled auto merge for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 423]
  });
}

function tryToAddExistingPullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  cancelScheduledAutoMerge(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace);
}

function verifyPullRequestExists(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Verify PullRequest with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PullRequest exists");
          }
        }
      }
      return pvg.fail("Expected PullRequest to exist but it does not");
    }
  });
}

function verifyPullRequestDoesNotExist(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Verify PullRequest with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PullRequest to not exist but it does");
          }
        }
      }
      return pvg.success("PullRequest does not exist");
    }
  });
}

function matchAddedPullRequest(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var expectedDesc = "Create pull request in repo " + owner + "/" + repo + " with title {title} and head " + head;
  return matchSuccess(expectedDesc);
}

function waitForAnyPullRequestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ pull\ request\ in\ repo\ (.+)/(.+)\ with\ title\ (.+)\ and\ head\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ pull\ request\ in\ repo\ (.+)/(.+)\ with\ title\ (.+)\ and\ head\ (.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo", "title", "head"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPullRequestAddedEvent(keyVal) {
  return bp.EventSet("AddPullRequest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyPullRequestAdded() {
  return bp.EventSet("matchAnyPullRequestAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create pull request") > -1;
  });
}

function waitForPullRequestAdded(base, binary, diffType, files, head, index, labels, limit, milestone, owner, page, poster, repo, skip-to, sort, state, style, verification, whitespace) {
  var expectedDesc = "Create pull request in repo " + owner + "/" + repo + " with title {title} and head " + head;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: pull review request ----

function createPullReviewRequests(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Create review requests for pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deletePullReviewRequests(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Cancel review requests for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 422]
  });
}

function tryToAddExistingPullReviewRequest(index, owner, repo) {
  deletePullReviewRequests(index, owner, repo);
}

function verifyPullReviewRequestExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Verify PullReviewRequest with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PullReviewRequest exists");
          }
        }
      }
      return pvg.fail("Expected PullReviewRequest to exist but it does not");
    }
  });
}

function verifyPullReviewRequestDoesNotExist(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Verify PullReviewRequest with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PullReviewRequest to not exist but it does");
          }
        }
      }
      return pvg.success("PullReviewRequest does not exist");
    }
  });
}

function tryToDeleteANonExistingPullReviewRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/requested_reviewers";
  var description = "Verify we cannot delete non-existing PullReviewRequest";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedPullReviewRequest(index, owner, repo) {
  var expectedDesc = "Create review requests for pull request " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyPullReviewRequestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ review\ requests\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ review\ requests\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPullReviewRequestAddedEvent(keyVal) {
  return bp.EventSet("AddPullReviewRequest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyPullReviewRequestAdded() {
  return bp.EventSet("matchAnyPullReviewRequestAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create pull review request") > -1;
  });
}

function waitForPullReviewRequestAdded(index, owner, repo) {
  var expectedDesc = "Create review requests for pull request " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPullReviewRequest(index, owner, repo) {
  var expectedDesc = "Cancel review requests for pull request " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedPullReviewRequest", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPullReviewRequestDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Cancel\ review\ requests\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Cancel\ review\ requests\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: pull review ----

function listPullReviews(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "List all reviews for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createPullReview(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Create a review for pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getPullReview(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Get review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function submitPullReview(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Submit review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deletePullReview(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Delete review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingPullReview(id, index, limit, owner, page, repo) {
  deletePullReview(id, index, limit, owner, page, repo);
}

function verifyPullReviewExists(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Verify PullReview with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PullReview exists");
          }
        }
      }
      return pvg.fail("Expected PullReview to exist but it does not");
    }
  });
}

function verifyPullReviewDoesNotExist(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Verify PullReview with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PullReview to not exist but it does");
          }
        }
      }
      return pvg.success("PullReview does not exist");
    }
  });
}

function tryToDeleteANonExistingPullReview(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Verify we cannot delete non-existing PullReview";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedPullReview(id, index, limit, owner, page, repo) {
  var expectedDesc = "Create a review for pull request " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyPullReviewAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ review\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ review\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPullReviewAddedEvent(keyVal) {
  return bp.EventSet("AddPullReview:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyPullReviewAdded() {
  return bp.EventSet("matchAnyPullReviewAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create pull review") > -1;
  });
}

function waitForPullReviewAdded(id, index, limit, owner, page, repo) {
  var expectedDesc = "Create a review for pull request " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPullReview(id, index, limit, owner, page, repo) {
  var expectedDesc = "Delete review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedPullReview", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPullReviewDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ review\ (.+)\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ review\ (.+)\ for\ pull\ request\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: pull review comment ----

function getPullReviewComments(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/comments";
  var description = "Get comments for review " + id + " on pull request " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

// ---- Entity: pull review dismissal ----

function dismissPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var description = "Dismiss review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 422],
    parameters: {
      description: description,
      , id: String(id)
      , index: String(index)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function unDismissPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals";
  var description = "Cancel dismissal of review " + id + " for pull request " + index + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404, 422],
    parameters: {
      description: description,
      , id: String(id)
      , index: String(index)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

// ---- Entity: push mirror ----

function repoAddPushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Add push mirror " + name + " to repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoGetPushMirrorByRemoteName(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Get push mirror " + name + " of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 404]
  });
}

function repoDeletePushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Delete push mirror " + name + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingPushMirror(name, owner, repo) {
  repoDeletePushMirror(name, owner, repo);
}

function verifyPushMirrorExists(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Verify PushMirror with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PushMirror exists");
          }
        }
      }
      return pvg.fail("Expected PushMirror to exist but it does not");
    }
  });
}

function verifyPushMirrorDoesNotExist(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Verify PushMirror with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PushMirror to not exist but it does");
          }
        }
      }
      return pvg.success("PushMirror does not exist");
    }
  });
}

function tryToDeleteANonExistingPushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Verify we cannot delete non-existing PushMirror";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPushMirror(name, owner, repo) {
  var expectedDesc = "Add push mirror " + name + " to repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyPushMirrorAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ push\ mirror\ (.+)\ to\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ push\ mirror\ (.+)\ to\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["name", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPushMirrorAddedEvent(keyVal) {
  return bp.EventSet("AddPushMirror:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyPushMirrorAdded() {
  return bp.EventSet("matchAnyPushMirrorAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create push mirror") > -1;
  });
}

function waitForPushMirrorAdded(name, owner, repo) {
  var expectedDesc = "Add push mirror " + name + " to repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPushMirror(name, owner, repo) {
  var expectedDesc = "Delete push mirror " + name + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedPushMirror", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPushMirrorDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ push\ mirror\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ push\ mirror\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["name", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: release ----

function repoCreateRelease(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create release in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 409, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
      , tag: String(tag)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoGetRelease(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Get release " + id + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoEditRelease(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Update release " + id + " in repository " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
      , tag: String(tag)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoDeleteRelease(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Delete release " + id + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function repoGetReleaseByTag(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag;
  var description = "Get release by tag " + tag + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoDeleteReleaseByTag(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/tags/" + tag;
  var description = "Delete release by tag " + tag + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function tryToAddExistingRelease(id, owner, repo, tag) {
  repoDeleteReleaseByTag(id, owner, repo, tag);
}

function verifyReleaseExists(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Verify Release with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Release exists");
          }
        }
      }
      return pvg.fail("Expected Release to exist but it does not");
    }
  });
}

function verifyReleaseDoesNotExist(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Verify Release with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Release to not exist but it does");
          }
        }
      }
      return pvg.success("Release does not exist");
    }
  });
}

function tryToDeleteANonExistingRelease(id, owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Verify we cannot delete non-existing Release";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedRelease(id, owner, repo, tag) {
  var expectedDesc = "Create release in repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyReleaseAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ release\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ release\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getReleaseAddedEvent(keyVal) {
  return bp.EventSet("AddRelease:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyReleaseAdded() {
  return bp.EventSet("matchAnyReleaseAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create release") > -1;
  });
}

function waitForReleaseAdded(id, owner, repo, tag) {
  var expectedDesc = "Create release in repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRelease(id, owner, repo, tag) {
  var expectedDesc = "Delete release " + id + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRelease", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyReleaseDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ release\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ release\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: release attachment ----

function repoCreateReleaseAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Create release attachment " + name + " for release " + id + " in repository " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "name": String(name),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getReleaseAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Get release attachment " + attachment_id + " of release " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteReleaseAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Delete release attachment " + attachment_id + " of release " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function editReleaseAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Edit release attachment " + attachment_id + " of release " + id + " in repo " + owner + "/" + repo;
  var body = {
    "attachment_id": String(attachment_id),
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingReleaseAttachment(attachment_id, id, name, owner, repo) {
  editReleaseAttachment(attachment_id, id, name, owner, repo);
}

function verifyReleaseAttachmentExists(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Verify ReleaseAttachment with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("ReleaseAttachment exists");
          }
        }
      }
      return pvg.fail("Expected ReleaseAttachment to exist but it does not");
    }
  });
}

function verifyReleaseAttachmentDoesNotExist(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Verify ReleaseAttachment with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected ReleaseAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("ReleaseAttachment does not exist");
    }
  });
}

function tryToDeleteANonExistingReleaseAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Verify we cannot delete non-existing ReleaseAttachment";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedReleaseAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create release attachment " + name + " for release " + id + " in repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyReleaseAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ release\ attachment\ (.+)\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ release\ attachment\ (.+)\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getReleaseAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddReleaseAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyReleaseAttachmentAdded() {
  return bp.EventSet("matchAnyReleaseAttachmentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create release attachment") > -1;
  });
}

function waitForReleaseAttachmentAdded(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create release attachment " + name + " for release " + id + " in repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedReleaseAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Delete release attachment " + attachment_id + " of release " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedReleaseAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyReleaseAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ release\ attachment\ (.+)\ of\ release\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ release\ attachment\ (.+)\ of\ release\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: reviewer ----

function listReviewers(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/reviewers";
  var description = "List reviewers for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyReviewerExists(owner, repo) {
  var url = "/repos";
  var description = "Verify Reviewer with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Reviewer exists");
          }
        }
      }
      return pvg.fail("Expected Reviewer to exist but it does not");
    }
  });
}

function verifyReviewerDoesNotExist(owner, repo) {
  var url = "/repos";
  var description = "Verify Reviewer with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Reviewer to not exist but it does");
          }
        }
      }
      return pvg.success("Reviewer does not exist");
    }
  });
}

// ---- Entity: signing key ----

function getSigningKey(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/signing-key.gpg";
  var description = "Get signing key for repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifySigningKeyExists(owner, repo) {
  var url = "/repos";
  var description = "Verify SigningKey with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("SigningKey exists");
          }
        }
      }
      return pvg.fail("Expected SigningKey to exist but it does not");
    }
  });
}

function verifySigningKeyDoesNotExist(owner, repo) {
  var url = "/repos";
  var description = "Verify SigningKey with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected SigningKey to not exist but it does");
          }
        }
      }
      return pvg.success("SigningKey does not exist");
    }
  });
}

// ---- Entity: stargazer ----

function listStargazers(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/stargazers";
  var description = "List stargazers for repo " + owner + "/" + repo + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyStargazerExists(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify Stargazer with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Stargazer exists");
          }
        }
      }
      return pvg.fail("Expected Stargazer to exist but it does not");
    }
  });
}

function verifyStargazerDoesNotExist(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify Stargazer with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Stargazer to not exist but it does");
          }
        }
      }
      return pvg.success("Stargazer does not exist");
    }
  });
}

// ---- Entity: commit status ----

function listCommitStatuses(limit, owner, page, repo, sha, sort, state) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "List commit statuses for commit " + sha + " in repo " + owner + "/" + repo + " with sort " + sort + " and state " + state + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function createCommitStatus(limit, owner, page, repo, sha, sort, state) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Create commit status for commit " + sha + " in repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "sha": String(sha),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , sha: String(sha)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingCommitStatus(limit, owner, page, repo, sha, sort, state) {
  createCommitStatus(limit, owner, page, repo, sha, sort, state);
}

function verifyCommitStatusExists(limit, owner, page, repo, sha, sort, state) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Verify CommitStatus with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("CommitStatus exists");
          }
        }
      }
      return pvg.fail("Expected CommitStatus to exist but it does not");
    }
  });
}

function verifyCommitStatusDoesNotExist(limit, owner, page, repo, sha, sort, state) {
  var url = "/repos/" + owner + "/" + repo + "/statuses/" + sha;
  var description = "Verify CommitStatus with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected CommitStatus to not exist but it does");
          }
        }
      }
      return pvg.success("CommitStatus does not exist");
    }
  });
}

function matchAddedCommitStatus(limit, owner, page, repo, sha, sort, state) {
  var expectedDesc = "Create commit status for commit " + sha + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyCommitStatusAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ commit\ status\ for\ commit\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ commit\ status\ for\ commit\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["sha", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getCommitStatusAddedEvent(keyVal) {
  return bp.EventSet("AddCommitStatus:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyCommitStatusAdded() {
  return bp.EventSet("matchAnyCommitStatusAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create commit status") > -1;
  });
}

function waitForCommitStatusAdded(limit, owner, page, repo, sha, sort, state) {
  var expectedDesc = "Create commit status for commit " + sha + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: subscriber ----

function listSubscribers(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/subscribers";
  var description = "List subscribers for repo " + owner + "/" + repo + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifySubscriberExists(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify Subscriber with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Subscriber exists");
          }
        }
      }
      return pvg.fail("Expected Subscriber to exist but it does not");
    }
  });
}

function verifySubscriberDoesNotExist(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify Subscriber with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Subscriber to not exist but it does");
          }
        }
      }
      return pvg.success("Subscriber does not exist");
    }
  });
}

// ---- Entity: subscription ----

function userListSubscriptions(owner, repo, username) {
  var url = "/users/" + username + "/subscriptions";
  var description = "List subscriptions for user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function watchRepo(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Watch repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404],
    parameters: {
      description: description,
      username: String(username)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function unwatchRepo(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Unwatch repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingSubscription(owner, repo, username) {
  unwatchRepo(owner, repo, username);
}

function verifySubscriptionExists(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify Subscription with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("Subscription exists");
          }
        }
      }
      return pvg.fail("Expected Subscription to exist but it does not");
    }
  });
}

function verifySubscriptionDoesNotExist(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify Subscription with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected Subscription to not exist but it does");
          }
        }
      }
      return pvg.success("Subscription does not exist");
    }
  });
}

function tryToDeleteANonExistingSubscription(owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo + "/subscription";
  var description = "Verify we cannot delete non-existing Subscription";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedSubscription(owner, repo, username) {
  var expectedDesc = "Watch repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnySubscriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Watch\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Watch\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getSubscriptionAddedEvent(keyVal) {
  return bp.EventSet("AddSubscription:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnySubscriptionAdded() {
  return bp.EventSet("matchAnySubscriptionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create subscription") > -1;
  });
}

function waitForSubscriptionAdded(owner, repo, username) {
  var expectedDesc = "Watch repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedSubscription(owner, repo, username) {
  var expectedDesc = "Unwatch repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedSubscription", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySubscriptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unwatch\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Unwatch\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: tag protection ----

function getTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Get tag protection " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Delete tag protection " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function editTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Edit tag protection " + id + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function createTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Create tag protection in repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingTagProtection(id, owner, repo) {
  createTagProtection(id, owner, repo);
}

function verifyTagProtectionExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Verify TagProtection with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("TagProtection exists");
          }
        }
      }
      return pvg.fail("Expected TagProtection to exist but it does not");
    }
  });
}

function verifyTagProtectionDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Verify TagProtection with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected TagProtection to not exist but it does");
          }
        }
      }
      return pvg.success("TagProtection does not exist");
    }
  });
}

function tryToDeleteANonExistingTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Verify we cannot delete non-existing TagProtection";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedTagProtection(id, owner, repo) {
  var expectedDesc = "Create tag protection in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyTagProtectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ tag\ protection\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ tag\ protection\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTagProtectionAddedEvent(keyVal) {
  return bp.EventSet("AddTagProtection:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyTagProtectionAdded() {
  return bp.EventSet("matchAnyTagProtectionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create tag protection") > -1;
  });
}

function waitForTagProtectionAdded(id, owner, repo) {
  var expectedDesc = "Create tag protection in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTagProtection(id, owner, repo) {
  var expectedDesc = "Delete tag protection " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedTagProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTagProtectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tag\ protection\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ tag\ protection\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: tag ----

function getTag(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Get the tag " + tag + " of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createTag(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Create tag in repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 405, 409, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , tag: String(tag)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteTag(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Delete the tag " + tag + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 405, 409, 422, 423]
  });
}

function tryToAddExistingTag(limit, owner, page, repo, tag) {
  deleteTag(limit, owner, page, repo, tag);
}

function verifyTagExists(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Verify Tag with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Tag exists");
          }
        }
      }
      return pvg.fail("Expected Tag to exist but it does not");
    }
  });
}

function verifyTagDoesNotExist(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Verify Tag with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Tag to not exist but it does");
          }
        }
      }
      return pvg.success("Tag does not exist");
    }
  });
}

function tryToDeleteANonExistingTag(limit, owner, page, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Verify we cannot delete non-existing Tag";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 405, 409, 422, 423],
    parameters: { description: description }
  });
}

function matchAddedTag(limit, owner, page, repo, tag) {
  var expectedDesc = "Create tag in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyTagAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ tag\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ tag\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTagAddedEvent(keyVal) {
  return bp.EventSet("AddTag:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyTagAdded() {
  return bp.EventSet("matchAnyTagAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create tag") > -1;
  });
}

function waitForTagAdded(limit, owner, page, repo, tag) {
  var expectedDesc = "Create tag in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTag(limit, owner, page, repo, tag) {
  var expectedDesc = "Delete the tag " + tag + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedTag", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTagDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ the\ tag\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ the\ tag\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["tag", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: team ----

function orgGetTeam(id, name, org, owner, repo, team) {
  var url = "/teams/" + id;
  var description = "Get team with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function orgCreateTeam(id, name, org, owner, repo, team) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create team " + name + " in organization " + org;
  var body = {
    "id": String(id),
    "name": String(name),
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function orgDeleteTeam(id, name, org, owner, repo, team) {
  var url = "/teams/" + id;
  var description = "Delete team with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function orgEditTeam(id, name, org, owner, repo, team) {
  var url = "/teams/" + id;
  var description = "Edit team with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      id: String(id)
      , name: String(name)
      , org: String(org)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function tryToAddExistingTeam(id, name, org, owner, repo, team) {
  orgEditTeam(id, name, org, owner, repo, team);
}

function verifyTeamExists(id, name, org, owner, repo, team) {
  var url = "/orgs/" + org + "/teams";
  var description = "Verify Team with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Team exists");
          }
        }
      }
      return pvg.fail("Expected Team to exist but it does not");
    }
  });
}

function verifyTeamDoesNotExist(id, name, org, owner, repo, team) {
  var url = "/orgs/" + org + "/teams";
  var description = "Verify Team with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Team to not exist but it does");
          }
        }
      }
      return pvg.success("Team does not exist");
    }
  });
}

function tryToDeleteANonExistingTeam(id, name, org, owner, repo, team) {
  var url = "/teams/" + id;
  var description = "Verify we cannot delete non-existing Team";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedTeam(id, name, org, owner, repo, team) {
  var expectedDesc = "Create team " + name + " in organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyTeamAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ team\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ team\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTeamAddedEvent(keyVal) {
  return bp.EventSet("AddTeam:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyTeamAdded() {
  return bp.EventSet("matchAnyTeamAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create team") > -1;
  });
}

function waitForTeamAdded(id, name, org, owner, repo, team) {
  var expectedDesc = "Create team " + name + " in organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTeam(id, name, org, owner, repo, team) {
  var expectedDesc = "Delete team with id " + id;
  return bp.EventSet("matchDeletedTeam", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ team\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ team\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: teams ----

function listTeams(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/teams";
  var description = "List teams of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyTeamsExists(owner, repo) {
  var url = "/repos";
  var description = "Verify Teams with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Teams exists");
          }
        }
      }
      return pvg.fail("Expected Teams to exist but it does not");
    }
  });
}

function verifyTeamsDoesNotExist(owner, repo) {
  var url = "/repos";
  var description = "Verify Teams with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Teams to not exist but it does");
          }
        }
      }
      return pvg.success("Teams does not exist");
    }
  });
}

// ---- Entity: tracked time ----

function listTrackedTimes(owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/times";
  var description = "List tracked times for repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 404]
  });
}

function verifyTrackedTimeExists(owner, repo, user) {
  var url = "/repos";
  var description = "Verify TrackedTime with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("TrackedTime exists");
          }
        }
      }
      return pvg.fail("Expected TrackedTime to exist but it does not");
    }
  });
}

function verifyTrackedTimeDoesNotExist(owner, repo, user) {
  var url = "/repos";
  var description = "Verify TrackedTime with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected TrackedTime to not exist but it does");
          }
        }
      }
      return pvg.success("TrackedTime does not exist");
    }
  });
}

// ---- Entity: user tracked time ----

function listUserTrackedTimes(owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/times/" + user;
  var description = "List tracked times for user " + user + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 403, 404]
  });
}

function verifyUserTrackedTimeExists(owner, repo, user) {
  var url = "/repos";
  var description = "Verify UserTrackedTime with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("UserTrackedTime exists");
          }
        }
      }
      return pvg.fail("Expected UserTrackedTime to exist but it does not");
    }
  });
}

function verifyUserTrackedTimeDoesNotExist(owner, repo, user) {
  var url = "/repos";
  var description = "Verify UserTrackedTime with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected UserTrackedTime to not exist but it does");
          }
        }
      }
      return pvg.success("UserTrackedTime does not exist");
    }
  });
}

// ---- Entity: topic ----

function addTopic(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Add topic " + topic + " to repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "topic": String(topic),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , topic: String(topic)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteTopic(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Delete topic " + topic + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function topicSearch(limit, owner, page, q, repo, topic) {
  var url = "/topics/search";
  var description = "Search topics with keyword " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function tryToAddExistingTopic(limit, owner, page, q, repo, topic) {
  topicSearch(limit, owner, page, q, repo, topic);
}

function verifyTopicExists(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Verify Topic with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Topic exists");
          }
        }
      }
      return pvg.fail("Expected Topic to exist but it does not");
    }
  });
}

function verifyTopicDoesNotExist(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Verify Topic with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Topic to not exist but it does");
          }
        }
      }
      return pvg.success("Topic does not exist");
    }
  });
}

function tryToDeleteANonExistingTopic(limit, owner, page, q, repo, topic) {
  var url = "/repos/" + owner + "/" + repo + "/topics/" + topic;
  var description = "Verify we cannot delete non-existing Topic";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedTopic(limit, owner, page, q, repo, topic) {
  var expectedDesc = "Add topic " + topic + " to repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyTopicAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ topic\ (.+)\ to\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ topic\ (.+)\ to\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["topic", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTopicAddedEvent(keyVal) {
  return bp.EventSet("AddTopic:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyTopicAdded() {
  return bp.EventSet("matchAnyTopicAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create topic") > -1;
  });
}

function waitForTopicAdded(limit, owner, page, q, repo, topic) {
  var expectedDesc = "Add topic " + topic + " to repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTopic(limit, owner, page, q, repo, topic) {
  var expectedDesc = "Delete topic " + topic + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedTopic", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTopicDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ topic\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ topic\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["topic", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: topics ----

function listTopics(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "List topics of repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function updateTopics(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/topics";
  var description = "Replace topics of repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404, 422],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function verifyTopicsExists(owner, repo) {
  var url = "/repos";
  var description = "Verify Topics with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Topics exists");
          }
        }
      }
      return pvg.fail("Expected Topics to exist but it does not");
    }
  });
}

function verifyTopicsDoesNotExist(owner, repo) {
  var url = "/repos";
  var description = "Verify Topics with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Topics to not exist but it does");
          }
        }
      }
      return pvg.success("Topics does not exist");
    }
  });
}

// ---- Entity: repository transfer ----

function transferRepo(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Transfer repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 403, 404, 422],
    parameters: {
      description: description,
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function acceptRepoTransfer(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/accept";
  var description = "Accept transfer of repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [202, 403, 404],
    parameters: {
      description: description,
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function rejectRepoTransfer(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer/reject";
  var description = "Reject transfer of repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404],
    parameters: {
      description: description,
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingRepoTransfer(owner, repo) {
  rejectRepoTransfer(owner, repo);
}

function verifyRepoTransferExists(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Verify RepoTransfer exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner) && String(items[i].repo) === String(repo)) {
            return pvg.success("RepoTransfer exists");
          }
        }
      }
      return pvg.fail("Expected RepoTransfer to exist but it does not");
    }
  });
}

function verifyRepoTransferDoesNotExist(owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/transfer";
  var description = "Verify RepoTransfer does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner) && String(items[i].repo) === String(repo)) {
            return pvg.fail("Expected RepoTransfer to not exist but it does");
          }
        }
      }
      return pvg.success("RepoTransfer does not exist");
    }
  });
}

function matchAddedRepoTransfer(owner, repo) {
  var expectedDesc = "Transfer repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyRepoTransferAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Transfer\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Transfer\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepoTransferAddedEvent(keyVal) {
  return bp.EventSet("AddRepoTransfer:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyRepoTransferAdded() {
  return bp.EventSet("matchAnyRepoTransferAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create repository transfer") > -1;
  });
}

function waitForRepoTransferAdded(owner, repo) {
  var expectedDesc = "Transfer repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: wiki page ----

function repoCreateWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Create a wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 403, 404, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , pageName: String(pageName)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function repoGetWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Get wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function repoDeleteWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Delete wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 423]
  });
}

function repoEditWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Edit wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
    "pageName": String(pageName),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 404, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , pageName: String(pageName)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingWikiPage(owner, pageName, repo) {
  repoEditWikiPage(owner, pageName, repo);
}

function verifyWikiPageExists(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Verify WikiPage with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("WikiPage exists");
          }
        }
      }
      return pvg.fail("Expected WikiPage to exist but it does not");
    }
  });
}

function verifyWikiPageDoesNotExist(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Verify WikiPage with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected WikiPage to not exist but it does");
          }
        }
      }
      return pvg.success("WikiPage does not exist");
    }
  });
}

function tryToDeleteANonExistingWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Verify we cannot delete non-existing WikiPage";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 423],
    parameters: { description: description }
  });
}

function matchAddedWikiPage(owner, pageName, repo) {
  var expectedDesc = "Create a wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  return matchSuccess(expectedDesc);
}

function waitForAnyWikiPageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ wiki\ page\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ wiki\ page\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pageName", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getWikiPageAddedEvent(keyVal) {
  return bp.EventSet("AddWikiPage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyWikiPageAdded() {
  return bp.EventSet("matchAnyWikiPageAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create wiki page") > -1;
  });
}

function waitForWikiPageAdded(owner, pageName, repo) {
  var expectedDesc = "Create a wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedWikiPage(owner, pageName, repo) {
  var expectedDesc = "Delete wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedWikiPage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyWikiPageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ wiki\ page\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ wiki\ page\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["pageName", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: wiki pages ----

function repoGetWikiPages(limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/pages";
  var description = "Get all wiki pages in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyWikiPagesExists(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify WikiPages with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("WikiPages exists");
          }
        }
      }
      return pvg.fail("Expected WikiPages to exist but it does not");
    }
  });
}

function verifyWikiPagesDoesNotExist(limit, owner, page, repo) {
  var url = "/repos";
  var description = "Verify WikiPages with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected WikiPages to not exist but it does");
          }
        }
      }
      return pvg.success("WikiPages does not exist");
    }
  });
}

// ---- Entity: wiki page revisions ----

function repoGetWikiPageRevisions(owner, page, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/revisions/" + pageName;
  var description = "Get revisions of wiki page " + pageName + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyWikiPageRevisionsExists(owner, page, pageName, repo) {
  var url = "/repos";
  var description = "Verify WikiPageRevisions with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("WikiPageRevisions exists");
          }
        }
      }
      return pvg.fail("Expected WikiPageRevisions to exist but it does not");
    }
  });
}

function verifyWikiPageRevisionsDoesNotExist(owner, page, pageName, repo) {
  var url = "/repos";
  var description = "Verify WikiPageRevisions with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected WikiPageRevisions to not exist but it does");
          }
        }
      }
      return pvg.success("WikiPageRevisions does not exist");
    }
  });
}

// ---- Entity: user secret ----

function updateUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a user secret " + secretname;
  var body = {
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      secretname: String(secretname)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { secretname: String(secretname) }) });
}

function updateUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a user secret " + secretname;
  var body = {
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      secretname: String(secretname)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { secretname: String(secretname) }) });
}

function deleteUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Delete user secret " + secretname;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingUserSecret(secretname) {
  deleteUserSecret(secretname);
}

function verifyUserSecretExists(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Verify UserSecret with secretname " + secretname + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].secretname) === String(secretname)) {
            return pvg.success("UserSecret exists");
          }
        }
      }
      return pvg.fail("Expected UserSecret to exist but it does not");
    }
  });
}

function verifyUserSecretDoesNotExist(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Verify UserSecret with secretname " + secretname + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].secretname) === String(secretname)) {
            return pvg.fail("Expected UserSecret to not exist but it does");
          }
        }
      }
      return pvg.success("UserSecret does not exist");
    }
  });
}

function tryToDeleteANonExistingUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Verify we cannot delete non-existing UserSecret";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserSecret(secretname) {
  var expectedDesc = "Create or Update a user secret " + secretname;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserSecretAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ or\ Update\ a\ user\ secret\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ or\ Update\ a\ user\ secret\ (.+)$/);
  var captures = m.slice(1);
  var names = ["secretname"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserSecretAddedEvent(keyVal) {
  return bp.EventSet("AddUserSecret:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.secretname) === String(keyVal);
  });
}

function matchAnyUserSecretAdded() {
  return bp.EventSet("matchAnyUserSecretAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.secretname !== undefined && e.name.indexOf("Create user secret") > -1;
  });
}

function waitForUserSecretAdded(secretname) {
  var expectedDesc = "Create or Update a user secret " + secretname;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserSecret(secretname) {
  var expectedDesc = "Delete user secret " + secretname;
  return bp.EventSet("matchDeletedUserSecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserSecretDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ secret\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ secret\ (.+)$/);
  var captures = m.slice(1);
  var names = ["secretname"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user variable ----

function createUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Create user variable " + variablename;
  var body = {
    "variablename": String(variablename),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { variablename: String(variablename) }) });
}

function getUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Get user variable " + variablename;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function updateUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Update user variable " + variablename;
  var body = {
    "variablename": String(variablename),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { variablename: String(variablename) }) });
}

function deleteUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Delete user variable " + variablename;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [201, 204, 400, 404]
  });
}

function tryToAddExistingUserVariable(variablename) {
  deleteUserVariable(variablename);
}

function verifyUserVariableExists(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariable with variablename " + variablename + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].variablename) === String(variablename)) {
            return pvg.success("UserVariable exists");
          }
        }
      }
      return pvg.fail("Expected UserVariable to exist but it does not");
    }
  });
}

function verifyUserVariableDoesNotExist(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariable with variablename " + variablename + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].variablename) === String(variablename)) {
            return pvg.fail("Expected UserVariable to not exist but it does");
          }
        }
      }
      return pvg.success("UserVariable does not exist");
    }
  });
}

function tryToDeleteANonExistingUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify we cannot delete non-existing UserVariable";
  svc.delete(url, {
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserVariable(variablename) {
  var expectedDesc = "Create user variable " + variablename;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserVariableAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ variable\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ variable\ (.+)$/);
  var captures = m.slice(1);
  var names = ["variablename"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserVariableAddedEvent(keyVal) {
  return bp.EventSet("AddUserVariable:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.variablename) === String(keyVal);
  });
}

function matchAnyUserVariableAdded() {
  return bp.EventSet("matchAnyUserVariableAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.variablename !== undefined && e.name.indexOf("Create user variable") > -1;
  });
}

function waitForUserVariableAdded(variablename) {
  var expectedDesc = "Create user variable " + variablename;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserVariable(variablename) {
  var expectedDesc = "Delete user variable " + variablename;
  return bp.EventSet("matchDeletedUserVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserVariableDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ variable\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ variable\ (.+)$/);
  var captures = m.slice(1);
  var names = ["variablename"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: oauth2 application ----

function userCreateOAuth2Application(id) {
  var url = "/user/applications/oauth2";
  var description = "Create OAuth2 application";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function userGetOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Get OAuth2 application " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function userUpdateOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Update OAuth2 application " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function userDeleteOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Delete OAuth2 application " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingOAuth2Application(id) {
  userDeleteOAuth2Application(id);
}

function verifyOAuth2ApplicationExists(id) {
  var url = "/user/applications/oauth2";
  var description = "Verify OAuth2Application with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("OAuth2Application exists");
          }
        }
      }
      return pvg.fail("Expected OAuth2Application to exist but it does not");
    }
  });
}

function verifyOAuth2ApplicationDoesNotExist(id) {
  var url = "/user/applications/oauth2";
  var description = "Verify OAuth2Application with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected OAuth2Application to not exist but it does");
          }
        }
      }
      return pvg.success("OAuth2Application does not exist");
    }
  });
}

function tryToDeleteANonExistingOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Verify we cannot delete non-existing OAuth2Application";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedOAuth2Application(id) {
  var expectedDesc = "Create OAuth2 application";
  return matchSuccess(expectedDesc);
}

function waitForAnyOAuth2ApplicationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ OAuth2\ application$/));
  var m = ev.data.parameters.description.match(/^Create\ OAuth2\ application$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOAuth2ApplicationAddedEvent(keyVal) {
  return bp.EventSet("AddOAuth2Application:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyOAuth2ApplicationAdded() {
  return bp.EventSet("matchAnyOAuth2ApplicationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create oauth2 application") > -1;
  });
}

function waitForOAuth2ApplicationAdded(id) {
  var expectedDesc = "Create OAuth2 application";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOAuth2Application(id) {
  var expectedDesc = "Delete OAuth2 application " + id;
  return bp.EventSet("matchDeletedOAuth2Application", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOAuth2ApplicationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ OAuth2\ application\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ OAuth2\ application\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user avatar ----

function userUpdateAvatar() {
  var url = "/user/avatar";
  var description = "Update user avatar";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function userDeleteAvatar() {
  var url = "/user/avatar";
  var description = "Delete user avatar";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingUserAvatar() {
  var url = "/user/avatar";
  var description = "Verify we cannot delete non-existing UserAvatar";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedUserAvatar() {
  var expectedDesc = "Delete user avatar";
  return bp.EventSet("matchDeletedUserAvatar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAvatarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ avatar$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ avatar$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user block ----

function userBlockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Block user " + username;
  var body = {
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404, 422],
    parameters: {
      description: description,
      username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function userCheckUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Check if user " + username + " is blocked";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function userUnblockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function tryToAddExistingUserBlock(username) {
  userUnblockUser(username);
}

function verifyUserBlockExists(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlock with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserBlock exists");
          }
        }
      }
      return pvg.fail("Expected UserBlock to exist but it does not");
    }
  });
}

function verifyUserBlockDoesNotExist(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlock with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserBlock to not exist but it does");
          }
        }
      }
      return pvg.success("UserBlock does not exist");
    }
  });
}

function tryToDeleteANonExistingUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify we cannot delete non-existing UserBlock";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedUserBlock(username) {
  var expectedDesc = "Block user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserBlockAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Block\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Block\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserBlockAddedEvent(keyVal) {
  return bp.EventSet("AddUserBlock:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserBlockAdded() {
  return bp.EventSet("matchAnyUserBlockAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create user block") > -1;
  });
}

function waitForUserBlockAdded(username) {
  var expectedDesc = "Block user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserBlock(username) {
  var expectedDesc = "Unblock user " + username;
  return bp.EventSet("matchDeletedUserBlock", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserBlockDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unblock\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Unblock\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: email ----

function userAddEmail(limit, page, q) {
  var url = "/user/emails";
  var description = "Add email addresses";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 422],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function userDeleteEmail(limit, page, q) {
  var url = "/user/emails";
  var description = "Delete email addresses";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function listEmails(limit, page, q) {
  var url = "/admin/emails";
  var description = "List all emails";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function searchEmails(limit, page, q) {
  var url = "/admin/emails/search";
  var description = "Search all emails with keyword " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function tryToAddExistingEmail(limit, page, q) {
  searchEmails(limit, page, q);
}

function verifyEmailExists(limit, page, q) {
  var url = "/user/emails";
  var description = "Verify Email exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].q) === String(q)) {
            return pvg.success("Email exists");
          }
        }
      }
      return pvg.fail("Expected Email to exist but it does not");
    }
  });
}

function verifyEmailDoesNotExist(limit, page, q) {
  var url = "/user/emails";
  var description = "Verify Email does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].q) === String(q)) {
            return pvg.fail("Expected Email to not exist but it does");
          }
        }
      }
      return pvg.success("Email does not exist");
    }
  });
}

function tryToDeleteANonExistingEmail(limit, page, q) {
  var url = "/user/emails";
  var description = "Verify we cannot delete non-existing Email";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedEmail(limit, page, q) {
  var expectedDesc = "Add email addresses";
  return matchSuccess(expectedDesc);
}

function waitForAnyEmailAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ email\ addresses$/));
  var m = ev.data.parameters.description.match(/^Add\ email\ addresses$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getEmailAddedEvent(keyVal) {
  return bp.EventSet("AddEmail:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyEmailAdded() {
  return bp.EventSet("matchAnyEmailAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create email") > -1;
  });
}

function waitForEmailAdded(limit, page, q) {
  var expectedDesc = "Add email addresses";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedEmail(limit, page, q) {
  var expectedDesc = "Delete email addresses";
  return bp.EventSet("matchDeletedEmail", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEmailDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ email\ addresses$/));
  var m = ev.data.parameters.description.match(/^Delete\ email\ addresses$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: follower ----

function userCurrentListFollowers(limit, page) {
  var url = "/user/followers";
  var description = "List the authenticated user's followers page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyFollowerExists(limit, page) {
  var url = "/user/followers";
  var description = "Verify Follower exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page)) {
            return pvg.success("Follower exists");
          }
        }
      }
      return pvg.fail("Expected Follower to exist but it does not");
    }
  });
}

function verifyFollowerDoesNotExist(limit, page) {
  var url = "/user/followers";
  var description = "Verify Follower does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page)) {
            return pvg.fail("Expected Follower to not exist but it does");
          }
        }
      }
      return pvg.success("Follower does not exist");
    }
  });
}

// ---- Entity: following ----

function userCurrentListFollowing(limit, page) {
  var url = "/user/following";
  var description = "List the users that the authenticated user is following page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyFollowingExists(limit, page) {
  var url = "/user/following";
  var description = "Verify Following exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page)) {
            return pvg.success("Following exists");
          }
        }
      }
      return pvg.fail("Expected Following to exist but it does not");
    }
  });
}

function verifyFollowingDoesNotExist(limit, page) {
  var url = "/user/following";
  var description = "Verify Following does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page)) {
            return pvg.fail("Expected Following to not exist but it does");
          }
        }
      }
      return pvg.success("Following does not exist");
    }
  });
}

// ---- Entity: following user ----

function userCurrentCheckFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Check whether user " + username + " is followed by the authenticated user";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function userCurrentPutFollow(username) {
  var url = "/user/following/" + username;
  var description = "Follow user " + username;
  var body = {
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function userCurrentDeleteFollow(username) {
  var url = "/user/following/" + username;
  var description = "Unfollow user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingFollowingUser(username) {
  userCurrentDeleteFollow(username);
}

function verifyFollowingUserExists(username) {
  var url = "/user/following/" + username;
  var description = "Verify FollowingUser with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("FollowingUser exists");
          }
        }
      }
      return pvg.fail("Expected FollowingUser to exist but it does not");
    }
  });
}

function verifyFollowingUserDoesNotExist(username) {
  var url = "/user/following/" + username;
  var description = "Verify FollowingUser with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected FollowingUser to not exist but it does");
          }
        }
      }
      return pvg.success("FollowingUser does not exist");
    }
  });
}

function tryToDeleteANonExistingFollowingUser(username) {
  var url = "/user/following/" + username;
  var description = "Verify we cannot delete non-existing FollowingUser";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedFollowingUser(username) {
  var expectedDesc = "Follow user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyFollowingUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Follow\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Follow\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getFollowingUserAddedEvent(keyVal) {
  return bp.EventSet("AddFollowingUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyFollowingUserAdded() {
  return bp.EventSet("matchAnyFollowingUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create following user") > -1;
  });
}

function waitForFollowingUserAdded(username) {
  var expectedDesc = "Follow user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedFollowingUser(username) {
  var expectedDesc = "Unfollow user " + username;
  return bp.EventSet("matchDeletedFollowingUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyFollowingUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unfollow\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Unfollow\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: gpg key ----

function userCurrentPostGPGKey(id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "Create a GPG key";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function userCurrentGetGPGKey(id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Get GPG key with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function userCurrentDeleteGPGKey(id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Remove GPG key with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function userCurrentListGPGKeys(id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "List the authenticated user's GPG keys page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingGPGKey(id, limit, page) {
  userCurrentListGPGKeys(id, limit, page);
}

function verifyGPGKeyExists(id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "Verify GPGKey with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("GPGKey exists");
          }
        }
      }
      return pvg.fail("Expected GPGKey to exist but it does not");
    }
  });
}

function verifyGPGKeyDoesNotExist(id, limit, page) {
  var url = "/user/gpg_keys";
  var description = "Verify GPGKey with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected GPGKey to not exist but it does");
          }
        }
      }
      return pvg.success("GPGKey does not exist");
    }
  });
}

function tryToDeleteANonExistingGPGKey(id, limit, page) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify we cannot delete non-existing GPGKey";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedGPGKey(id, limit, page) {
  var expectedDesc = "Create a GPG key";
  return matchSuccess(expectedDesc);
}

function waitForAnyGPGKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ a\ GPG\ key$/));
  var m = ev.data.parameters.description.match(/^Create\ a\ GPG\ key$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGPGKeyAddedEvent(keyVal) {
  return bp.EventSet("AddGPGKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyGPGKeyAdded() {
  return bp.EventSet("matchAnyGPGKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create gpg key") > -1;
  });
}

function waitForGPGKeyAdded(id, limit, page) {
  var expectedDesc = "Create a GPG key";
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGPGKey(id, limit, page) {
  var expectedDesc = "Remove GPG key with id " + id;
  return bp.EventSet("matchDeletedGPGKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGPGKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ GPG\ key\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ GPG\ key\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: public key ----

function createPublicKey(fingerprint, id) {
  var url = "/user/keys";
  var description = "Create public key with fingerprint " + fingerprint;
  var body = {
    "fingerprint": String(fingerprint),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 422],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function getPublicKey(fingerprint, id) {
  var url = "/user/keys/" + id;
  var description = "Get public key with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deletePublicKey(fingerprint, id) {
  var url = "/user/keys/" + id;
  var description = "Delete public key with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingPublicKey(fingerprint, id) {
  deletePublicKey(fingerprint, id);
}

function verifyPublicKeyExists(fingerprint, id) {
  var url = "/user/keys";
  var description = "Verify PublicKey with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("PublicKey exists");
          }
        }
      }
      return pvg.fail("Expected PublicKey to exist but it does not");
    }
  });
}

function verifyPublicKeyDoesNotExist(fingerprint, id) {
  var url = "/user/keys";
  var description = "Verify PublicKey with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected PublicKey to not exist but it does");
          }
        }
      }
      return pvg.success("PublicKey does not exist");
    }
  });
}

function tryToDeleteANonExistingPublicKey(fingerprint, id) {
  var url = "/user/keys/" + id;
  var description = "Verify we cannot delete non-existing PublicKey";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedPublicKey(fingerprint, id) {
  var expectedDesc = "Create public key with fingerprint " + fingerprint;
  return matchSuccess(expectedDesc);
}

function waitForAnyPublicKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ public\ key\ with\ fingerprint\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ public\ key\ with\ fingerprint\ (.+)$/);
  var captures = m.slice(1);
  var names = ["fingerprint"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPublicKeyAddedEvent(keyVal) {
  return bp.EventSet("AddPublicKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyPublicKeyAdded() {
  return bp.EventSet("matchAnyPublicKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create public key") > -1;
  });
}

function waitForPublicKeyAdded(fingerprint, id) {
  var expectedDesc = "Create public key with fingerprint " + fingerprint;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPublicKey(fingerprint, id) {
  var expectedDesc = "Delete public key with id " + id;
  return bp.EventSet("matchDeletedPublicKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPublicKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ public\ key\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ public\ key\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user settings ----

function getUserSettings() {
  var url = "/user/settings";
  var description = "Get user settings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserSettings() {
  var url = "/user/settings";
  var description = "Update user settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyUserSettingsExists() {
  var url = "/user/settings";
  var description = "Verify UserSettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UserSettings exists");
          }
        }
      }
      return pvg.fail("Expected UserSettings to exist but it does not");
    }
  });
}

function verifyUserSettingsDoesNotExist() {
  var url = "/user/settings";
  var description = "Verify UserSettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UserSettings to not exist but it does");
          }
        }
      }
      return pvg.success("UserSettings does not exist");
    }
  });
}

// ---- Entity: starred repo ----

function checkStarredRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Check if repo " + owner + "/" + repo + " is starred";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function starRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function unstarRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingStarredRepo(owner, repo) {
  unstarRepo(owner, repo);
}

function verifyStarredRepoExists(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify StarredRepo with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("StarredRepo exists");
          }
        }
      }
      return pvg.fail("Expected StarredRepo to exist but it does not");
    }
  });
}

function verifyStarredRepoDoesNotExist(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify StarredRepo with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected StarredRepo to not exist but it does");
          }
        }
      }
      return pvg.success("StarredRepo does not exist");
    }
  });
}

function tryToDeleteANonExistingStarredRepo(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify we cannot delete non-existing StarredRepo";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedStarredRepo(owner, repo) {
  var expectedDesc = "Star repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyStarredRepoAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Star\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Star\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getStarredRepoAddedEvent(keyVal) {
  return bp.EventSet("AddStarredRepo:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyStarredRepoAdded() {
  return bp.EventSet("matchAnyStarredRepoAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create starred repo") > -1;
  });
}

function waitForStarredRepoAdded(owner, repo) {
  var expectedDesc = "Star repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedStarredRepo(owner, repo) {
  var expectedDesc = "Unstar repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedStarredRepo", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyStarredRepoDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unstar\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Unstar\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user ----

function adminSearchUsers(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users";
  var description = "Search users";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function adminCreateUser(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users";
  var description = "Create user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 403, 422],
    parameters: {
      description: description,
      username: String(username)
      , source_id: String(source_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function adminDeleteUser(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users/" + username;
  var description = "Delete user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 422]
  });
}

function adminEditUser(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users/" + username;
  var description = "Edit user " + username;
  var body = {
    "username": String(username),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 422],
    parameters: {
      description: description,
      username: String(username)
      , source_id: String(source_id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function tryToAddExistingUser(limit, login_name, page, purge, source_id, username) {
  adminEditUser(limit, login_name, page, purge, source_id, username);
}

function verifyUserExists(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users";
  var description = "Verify User with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users";
  var description = "Verify User with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(limit, login_name, page, purge, source_id, username) {
  var url = "/admin/users/" + username;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedUser(limit, login_name, page, purge, source_id, username) {
  var expectedDesc = "Create user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAddedEvent(keyVal) {
  return bp.EventSet("AddUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(limit, login_name, page, purge, source_id, username) {
  var expectedDesc = "Create user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(limit, login_name, page, purge, source_id, username) {
  var expectedDesc = "Delete user " + username;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: userFollowers ----

function listUserFollowers(limit, page, username) {
  var url = "/users/" + username + "/followers";
  var description = "List followers of user " + username + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserFollowersExists(limit, page, username) {
  var url = "/users";
  var description = "Verify UserFollowers with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserFollowers exists");
          }
        }
      }
      return pvg.fail("Expected UserFollowers to exist but it does not");
    }
  });
}

function verifyUserFollowersDoesNotExist(limit, page, username) {
  var url = "/users";
  var description = "Verify UserFollowers with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserFollowers to not exist but it does");
          }
        }
      }
      return pvg.success("UserFollowers does not exist");
    }
  });
}

// ---- Entity: userFollowing ----

function listUserFollowing(limit, page, username) {
  var url = "/users/" + username + "/following";
  var description = "List users followed by " + username + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserFollowingExists(limit, page, username) {
  var url = "/users";
  var description = "Verify UserFollowing with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserFollowing exists");
          }
        }
      }
      return pvg.fail("Expected UserFollowing to exist but it does not");
    }
  });
}

function verifyUserFollowingDoesNotExist(limit, page, username) {
  var url = "/users";
  var description = "Verify UserFollowing with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserFollowing to not exist but it does");
          }
        }
      }
      return pvg.success("UserFollowing does not exist");
    }
  });
}

// ---- Entity: userFollowingCheck ----

function checkUserFollowing(target, username) {
  var url = "/users/" + username + "/following/" + target;
  var description = "Check if user " + username + " is following " + target;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function verifyUserFollowingCheckExists(target, username) {
  var url = "/users";
  var description = "Verify UserFollowingCheck with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserFollowingCheck exists");
          }
        }
      }
      return pvg.fail("Expected UserFollowingCheck to exist but it does not");
    }
  });
}

function verifyUserFollowingCheckDoesNotExist(target, username) {
  var url = "/users";
  var description = "Verify UserFollowingCheck with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserFollowingCheck to not exist but it does");
          }
        }
      }
      return pvg.success("UserFollowingCheck does not exist");
    }
  });
}

// ---- Entity: userGPGKeys ----

function listUserGPGKeys(limit, page, username) {
  var url = "/users/" + username + "/gpg_keys";
  var description = "List GPG keys of user " + username + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserGPGKeysExists(limit, page, username) {
  var url = "/users";
  var description = "Verify UserGPGKeys with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserGPGKeys exists");
          }
        }
      }
      return pvg.fail("Expected UserGPGKeys to exist but it does not");
    }
  });
}

function verifyUserGPGKeysDoesNotExist(limit, page, username) {
  var url = "/users";
  var description = "Verify UserGPGKeys with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserGPGKeys to not exist but it does");
          }
        }
      }
      return pvg.success("UserGPGKeys does not exist");
    }
  });
}

// ---- Entity: userHeatmap ----

function getUserHeatmap(username) {
  var url = "/users/" + username + "/heatmap";
  var description = "Get heatmap data for user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserHeatmapExists(username) {
  var url = "/users";
  var description = "Verify UserHeatmap with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserHeatmap exists");
          }
        }
      }
      return pvg.fail("Expected UserHeatmap to exist but it does not");
    }
  });
}

function verifyUserHeatmapDoesNotExist(username) {
  var url = "/users";
  var description = "Verify UserHeatmap with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserHeatmap to not exist but it does");
          }
        }
      }
      return pvg.success("UserHeatmap does not exist");
    }
  });
}

// ---- Entity: userKeys ----

function listUserKeys(fingerprint, limit, page, username) {
  var url = "/users/" + username + "/keys";
  var description = "List public keys of user " + username + " with fingerprint " + fingerprint + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserKeysExists(fingerprint, limit, page, username) {
  var url = "/users";
  var description = "Verify UserKeys with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserKeys exists");
          }
        }
      }
      return pvg.fail("Expected UserKeys to exist but it does not");
    }
  });
}

function verifyUserKeysDoesNotExist(fingerprint, limit, page, username) {
  var url = "/users";
  var description = "Verify UserKeys with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserKeys to not exist but it does");
          }
        }
      }
      return pvg.success("UserKeys does not exist");
    }
  });
}

// ---- Entity: userRepos ----

function listUserRepos(limit, page, username) {
  var url = "/users/" + username + "/repos";
  var description = "List repos owned by user " + username + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserReposExists(limit, page, username) {
  var url = "/users";
  var description = "Verify UserRepos with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserRepos exists");
          }
        }
      }
      return pvg.fail("Expected UserRepos to exist but it does not");
    }
  });
}

function verifyUserReposDoesNotExist(limit, page, username) {
  var url = "/users";
  var description = "Verify UserRepos with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserRepos to not exist but it does");
          }
        }
      }
      return pvg.success("UserRepos does not exist");
    }
  });
}

// ---- Entity: userActivitiesFeeds ----

function listUserActivityFeeds(date, limit, only-performed-by, page, username) {
  var url = "/users/" + username + "/activities/feeds";
  var description = "List activity feeds for user " + username + " filtered by only-performed-by=" + only-performed-by + " date=" + date + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyUserActivitiesFeedsExists(date, limit, only-performed-by, page, username) {
  var url = "/users";
  var description = "Verify UserActivitiesFeeds with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserActivitiesFeeds exists");
          }
        }
      }
      return pvg.fail("Expected UserActivitiesFeeds to exist but it does not");
    }
  });
}

function verifyUserActivitiesFeedsDoesNotExist(date, limit, only-performed-by, page, username) {
  var url = "/users";
  var description = "Verify UserActivitiesFeeds with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserActivitiesFeeds to not exist but it does");
          }
        }
      }
      return pvg.success("UserActivitiesFeeds does not exist");
    }
  });
}

// ---- Entity: userSearch ----

function searchUsers(limit, page, q, uid) {
  var url = "/users/search";
  var description = "Search users with query " + q + " uid " + uid + " page " + page + " limit " + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyUserSearchExists(limit, page, q, uid) {
  var url = "/users/search";
  var description = "Verify UserSearch exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].uid) === String(uid)) {
            return pvg.success("UserSearch exists");
          }
        }
      }
      return pvg.fail("Expected UserSearch to exist but it does not");
    }
  });
}

function verifyUserSearchDoesNotExist(limit, page, q, uid) {
  var url = "/users/search";
  var description = "Verify UserSearch does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].uid) === String(uid)) {
            return pvg.fail("Expected UserSearch to not exist but it does");
          }
        }
      }
      return pvg.success("UserSearch does not exist");
    }
  });
}

// ---- Entity: access token ----

function userCreateToken(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Create access token for user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 403],
    parameters: {
      description: description,
      username: String(username)
      , token: String(token)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function userDeleteAccessToken(token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Delete access token " + token + " for user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 422]
  });
}

function userGetTokens(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Get access tokens for user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function tryToAddExistingAccessToken(token, username) {
  userGetTokens(token, username);
}

function verifyAccessTokenExists(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify AccessToken with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("AccessToken exists");
          }
        }
      }
      return pvg.fail("Expected AccessToken to exist but it does not");
    }
  });
}

function verifyAccessTokenDoesNotExist(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify AccessToken with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected AccessToken to not exist but it does");
          }
        }
      }
      return pvg.success("AccessToken does not exist");
    }
  });
}

function tryToDeleteANonExistingAccessToken(token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Verify we cannot delete non-existing AccessToken";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedAccessToken(token, username) {
  var expectedDesc = "Create access token for user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyAccessTokenAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ access\ token\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ access\ token\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAccessTokenAddedEvent(keyVal) {
  return bp.EventSet("AddAccessToken:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyAccessTokenAdded() {
  return bp.EventSet("matchAnyAccessTokenAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create access token") > -1;
  });
}

function waitForAccessTokenAdded(token, username) {
  var expectedDesc = "Create access token for user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAccessToken(token, username) {
  var expectedDesc = "Delete access token " + token + " for user " + username;
  return bp.EventSet("matchDeletedAccessToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAccessTokenDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ access\ token\ (.+)\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ access\ token\ (.+)\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["token", "username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: starred repository ----

function userListStarred(username) {
  var url = "/users/" + username + "/starred";
  var description = "List starred repositories for user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyStarredRepositoryExists(username) {
  var url = "/users";
  var description = "Verify StarredRepository with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("StarredRepository exists");
          }
        }
      }
      return pvg.fail("Expected StarredRepository to exist but it does not");
    }
  });
}

function verifyStarredRepositoryDoesNotExist(username) {
  var url = "/users";
  var description = "Verify StarredRepository with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected StarredRepository to not exist but it does");
          }
        }
      }
      return pvg.success("StarredRepository does not exist");
    }
  });
}

// ---- Entity: issue ----

function createIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create issue in repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 412, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Delete issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function editIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Edit issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 412],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Get issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingIssue(index, owner, repo) {
  getIssue(index, owner, repo);
}

function verifyIssueExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Verify Issue with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Issue exists");
          }
        }
      }
      return pvg.fail("Expected Issue to exist but it does not");
    }
  });
}

function verifyIssueDoesNotExist(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Verify Issue with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Issue to not exist but it does");
          }
        }
      }
      return pvg.success("Issue does not exist");
    }
  });
}

function tryToDeleteANonExistingIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Verify we cannot delete non-existing Issue";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssue(index, owner, repo) {
  var expectedDesc = "Create issue in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueAddedEvent(keyVal) {
  return bp.EventSet("AddIssue:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueAdded() {
  return bp.EventSet("matchAnyIssueAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue") > -1;
  });
}

function waitForIssueAdded(index, owner, repo) {
  var expectedDesc = "Create issue in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssue(index, owner, repo) {
  var expectedDesc = "Delete issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment ----

function getIssueComments(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "List comments on issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Delete comment " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function editComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Edit comment " + id + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 204, 403, 404, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function createIssueComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Add comment to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "body": String(body),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingIssueComment(before, body, id, index, owner, repo, since) {
  createIssueComment(before, body, id, index, owner, repo, since);
}

function verifyIssueCommentExists(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Verify IssueComment with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueComment exists");
          }
        }
      }
      return pvg.fail("Expected IssueComment to exist but it does not");
    }
  });
}

function verifyIssueCommentDoesNotExist(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Verify IssueComment with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueComment to not exist but it does");
          }
        }
      }
      return pvg.success("IssueComment does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueComment(before, body, id, index, owner, repo, since) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Verify we cannot delete non-existing IssueComment";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueComment(before, body, id, index, owner, repo, since) {
  var expectedDesc = "Add comment to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ comment\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ comment\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueCommentAddedEvent(keyVal) {
  return bp.EventSet("AddIssueComment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueCommentAdded() {
  return bp.EventSet("matchAnyIssueCommentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue comment") > -1;
  });
}

function waitForIssueCommentAdded(before, body, id, index, owner, repo, since) {
  var expectedDesc = "Add comment to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueComment(before, body, id, index, owner, repo, since) {
  var expectedDesc = "Delete comment " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment attachment ----

function createIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Create attachment for comment " + id + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "name": String(name),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 403, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " for comment " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " for comment " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 423]
  });
}

function editIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " for comment " + id + " in repo " + owner + "/" + repo;
  var body = {
    "attachment_id": String(attachment_id),
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  editIssueCommentAttachment(attachment_id, id, name, owner, repo);
}

function verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Verify IssueCommentAttachment with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueCommentAttachment exists");
          }
        }
      }
      return pvg.fail("Expected IssueCommentAttachment to exist but it does not");
    }
  });
}

function verifyIssueCommentAttachmentDoesNotExist(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Verify IssueCommentAttachment with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueCommentAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("IssueCommentAttachment does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Verify we cannot delete non-existing IssueCommentAttachment";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 423],
    parameters: { description: description }
  });
}

function matchAddedIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create attachment for comment " + id + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueCommentAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ attachment\ for\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ attachment\ for\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueCommentAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddIssueCommentAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueCommentAttachmentAdded() {
  return bp.EventSet("matchAnyIssueCommentAttachmentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue comment attachment") > -1;
  });
}

function waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create attachment for comment " + id + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Delete attachment " + attachment_id + " for comment " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueCommentAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ (.+)\ for\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ (.+)\ for\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment reaction ----

function postCommentReaction(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Add reaction to comment " + id + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteCommentReaction(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Remove reaction from comment " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function getCommentReactions(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Get reactions for comment " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function tryToAddExistingIssueCommentReaction(id, owner, repo) {
  getCommentReactions(id, owner, repo);
}

function verifyIssueCommentReactionExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Verify IssueCommentReaction with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueCommentReaction exists");
          }
        }
      }
      return pvg.fail("Expected IssueCommentReaction to exist but it does not");
    }
  });
}

function verifyIssueCommentReactionDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Verify IssueCommentReaction with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueCommentReaction to not exist but it does");
          }
        }
      }
      return pvg.success("IssueCommentReaction does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueCommentReaction(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/reactions";
  var description = "Verify we cannot delete non-existing IssueCommentReaction";
  svc.delete(url, {
    expectedResponseCodes: [200, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueCommentReaction(id, owner, repo) {
  var expectedDesc = "Add reaction to comment " + id + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueCommentReactionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ reaction\ to\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ reaction\ to\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueCommentReactionAddedEvent(keyVal) {
  return bp.EventSet("AddIssueCommentReaction:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueCommentReactionAdded() {
  return bp.EventSet("matchAnyIssueCommentReactionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue comment reaction") > -1;
  });
}

function waitForIssueCommentReactionAdded(id, owner, repo) {
  var expectedDesc = "Add reaction to comment " + id + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueCommentReaction(id, owner, repo) {
  var expectedDesc = "Remove reaction from comment " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueCommentReaction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentReactionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ reaction\ from\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ reaction\ from\ comment\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue attachment ----

function createIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Create attachment for issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "name": String(name),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 400, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , index: String(index)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " for issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " for issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 423]
  });
}

function editIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " for issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "attachment_id": String(attachment_id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , index: String(index)
      , name: String(name)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo) {
  editIssueAttachment(attachment_id, index, name, owner, repo);
}

function verifyIssueAttachmentExists(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Verify IssueAttachment with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueAttachment exists");
          }
        }
      }
      return pvg.fail("Expected IssueAttachment to exist but it does not");
    }
  });
}

function verifyIssueAttachmentDoesNotExist(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Verify IssueAttachment with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("IssueAttachment does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Verify we cannot delete non-existing IssueAttachment";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 423],
    parameters: { description: description }
  });
}

function matchAddedIssueAttachment(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Create attachment for issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ attachment\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ attachment\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddIssueAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueAttachmentAdded() {
  return bp.EventSet("matchAnyIssueAttachmentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue attachment") > -1;
  });
}

function waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Create attachment for issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueAttachment(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Delete attachment " + attachment_id + " for issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ (.+)\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ (.+)\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue block ----

function listIssueBlocks(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "List issues blocked by issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createIssueBlock(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Block an issue by issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function removeIssueBlock(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Unblock an issue by issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingIssueBlock(id, index, limit, owner, page, repo) {
  removeIssueBlock(id, index, limit, owner, page, repo);
}

function verifyIssueBlockExists(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Verify IssueBlock with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueBlock exists");
          }
        }
      }
      return pvg.fail("Expected IssueBlock to exist but it does not");
    }
  });
}

function verifyIssueBlockDoesNotExist(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Verify IssueBlock with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueBlock to not exist but it does");
          }
        }
      }
      return pvg.success("IssueBlock does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueBlock(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/blocks";
  var description = "Verify we cannot delete non-existing IssueBlock";
  svc.delete(url, {
    expectedResponseCodes: [200, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueBlock(id, index, limit, owner, page, repo) {
  var expectedDesc = "Block an issue by issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueBlockAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Block\ an\ issue\ by\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Block\ an\ issue\ by\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueBlockAddedEvent(keyVal) {
  return bp.EventSet("AddIssueBlock:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueBlockAdded() {
  return bp.EventSet("matchAnyIssueBlockAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue block") > -1;
  });
}

function waitForIssueBlockAdded(id, index, limit, owner, page, repo) {
  var expectedDesc = "Block an issue by issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueBlock(id, index, limit, owner, page, repo) {
  var expectedDesc = "Unblock an issue by issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueBlock", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueBlockDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unblock\ an\ issue\ by\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Unblock\ an\ issue\ by\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment item ----

function deleteIssueComment(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Delete comment " + id + " on issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function editIssueComment(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Edit comment " + id + " on issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "body": String(body),
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 204, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToDeleteANonExistingIssueCommentItem(body, id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments/" + id;
  var description = "Verify we cannot delete non-existing IssueCommentItem";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedIssueCommentItem(body, id, index, owner, repo) {
  var expectedDesc = "Delete comment " + id + " on issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueCommentItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ comment\ (.+)\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ comment\ (.+)\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue deadline ----

function editIssueDeadline(deadline, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/deadline";
  var description = "Set deadline for issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "deadline": String(deadline),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404],
    parameters: {
      description: description,
      , index: String(index)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingIssueDeadline(deadline, index, owner, repo) {
  editIssueDeadline(deadline, index, owner, repo);
}

function verifyIssueDeadlineExists(deadline, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/deadline";
  var description = "Verify IssueDeadline exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].deadline) === String(deadline) && String(items[i].index) === String(index) && String(items[i].owner) === String(owner) && String(items[i].repo) === String(repo)) {
            return pvg.success("IssueDeadline exists");
          }
        }
      }
      return pvg.fail("Expected IssueDeadline to exist but it does not");
    }
  });
}

function verifyIssueDeadlineDoesNotExist(deadline, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/deadline";
  var description = "Verify IssueDeadline does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].deadline) === String(deadline) && String(items[i].index) === String(index) && String(items[i].owner) === String(owner) && String(items[i].repo) === String(repo)) {
            return pvg.fail("Expected IssueDeadline to not exist but it does");
          }
        }
      }
      return pvg.success("IssueDeadline does not exist");
    }
  });
}

function matchAddedIssueDeadline(deadline, index, owner, repo) {
  var expectedDesc = "Set deadline for issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueDeadlineAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Set\ deadline\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Set\ deadline\ for\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueDeadlineAddedEvent(keyVal) {
  return bp.EventSet("AddIssueDeadline:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyIssueDeadlineAdded() {
  return bp.EventSet("matchAnyIssueDeadlineAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create issue deadline") > -1;
  });
}

function waitForIssueDeadlineAdded(deadline, index, owner, repo) {
  var expectedDesc = "Set deadline for issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: issue dependency ----

function listIssueDependencies(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "List dependencies of issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createIssueDependency(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Add dependency to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 423],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function removeIssueDependency(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Remove dependency from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404, 423]
  });
}

function tryToAddExistingIssueDependency(id, index, limit, owner, page, repo) {
  removeIssueDependency(id, index, limit, owner, page, repo);
}

function verifyIssueDependencyExists(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Verify IssueDependency with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueDependency exists");
          }
        }
      }
      return pvg.fail("Expected IssueDependency to exist but it does not");
    }
  });
}

function verifyIssueDependencyDoesNotExist(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Verify IssueDependency with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueDependency to not exist but it does");
          }
        }
      }
      return pvg.success("IssueDependency does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueDependency(id, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/dependencies";
  var description = "Verify we cannot delete non-existing IssueDependency";
  svc.delete(url, {
    expectedResponseCodes: [200, 404, 423],
    parameters: { description: description }
  });
}

function matchAddedIssueDependency(id, index, limit, owner, page, repo) {
  var expectedDesc = "Add dependency to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueDependencyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ dependency\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ dependency\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueDependencyAddedEvent(keyVal) {
  return bp.EventSet("AddIssueDependency:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueDependencyAdded() {
  return bp.EventSet("matchAnyIssueDependencyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue dependency") > -1;
  });
}

function waitForIssueDependencyAdded(id, index, limit, owner, page, repo) {
  var expectedDesc = "Add dependency to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueDependency(id, index, limit, owner, page, repo) {
  var expectedDesc = "Remove dependency from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueDependency", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueDependencyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ dependency\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ dependency\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue label ----

function getIssueLabels(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Get labels of issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function replaceIssueLabels(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Replace labels of issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "labels": String(labels),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function addIssueLabel(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Add label to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "labels": String(labels),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function clearIssueLabels(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Remove all labels from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingIssueLabel(index, labels, owner, repo) {
  clearIssueLabels(index, labels, owner, repo);
}

function verifyIssueLabelExists(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Verify IssueLabel with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueLabel exists");
          }
        }
      }
      return pvg.fail("Expected IssueLabel to exist but it does not");
    }
  });
}

function verifyIssueLabelDoesNotExist(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Verify IssueLabel with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueLabel to not exist but it does");
          }
        }
      }
      return pvg.success("IssueLabel does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueLabel(index, labels, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels";
  var description = "Verify we cannot delete non-existing IssueLabel";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueLabel(index, labels, owner, repo) {
  var expectedDesc = "Add label to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueLabelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ label\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ label\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueLabelAddedEvent(keyVal) {
  return bp.EventSet("AddIssueLabel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueLabelAdded() {
  return bp.EventSet("matchAnyIssueLabelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue label") > -1;
  });
}

function waitForIssueLabelAdded(index, labels, owner, repo) {
  var expectedDesc = "Add label to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueLabel(index, labels, owner, repo) {
  var expectedDesc = "Remove all labels from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueLabelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ all\ labels\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ all\ labels\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue label item ----

function removeIssueLabel(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels/" + id;
  var description = "Remove label " + id + " from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 422]
  });
}

function tryToDeleteANonExistingIssueLabelItem(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/labels/" + id;
  var description = "Verify we cannot delete non-existing IssueLabelItem";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 422],
    parameters: { description: description }
  });
}

function matchDeletedIssueLabelItem(id, index, owner, repo) {
  var expectedDesc = "Remove label " + id + " from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueLabelItem", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueLabelItemDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ label\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ label\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue pin ----

function pinIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin";
  var description = "Pin issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function unpinIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin";
  var description = "Unpin issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingIssuePin(index, owner, repo) {
  unpinIssue(index, owner, repo);
}

function verifyIssuePinExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin";
  var description = "Verify IssuePin with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssuePin exists");
          }
        }
      }
      return pvg.fail("Expected IssuePin to exist but it does not");
    }
  });
}

function verifyIssuePinDoesNotExist(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin";
  var description = "Verify IssuePin with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssuePin to not exist but it does");
          }
        }
      }
      return pvg.success("IssuePin does not exist");
    }
  });
}

function tryToDeleteANonExistingIssuePin(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin";
  var description = "Verify we cannot delete non-existing IssuePin";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssuePin(index, owner, repo) {
  var expectedDesc = "Pin issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssuePinAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Pin\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Pin\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssuePinAddedEvent(keyVal) {
  return bp.EventSet("AddIssuePin:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssuePinAdded() {
  return bp.EventSet("matchAnyIssuePinAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue pin") > -1;
  });
}

function waitForIssuePinAdded(index, owner, repo) {
  var expectedDesc = "Pin issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssuePin(index, owner, repo) {
  var expectedDesc = "Unpin issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssuePin", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssuePinDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unpin\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Unpin\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue pin position ----

function moveIssuePin(index, owner, position, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/pin/" + position;
  var description = "Move pin of issue " + index + " in repo " + owner + "/" + repo + " to position " + position;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "position": String(position),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , position: String(position)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

// ---- Entity: issue reaction ----

function getIssueReactions(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Get reactions of issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function addIssueReaction(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Add reaction to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "content": String(content),
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function removeIssueReaction(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Remove reaction from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function tryToAddExistingIssueReaction(content, index, limit, owner, page, repo) {
  removeIssueReaction(content, index, limit, owner, page, repo);
}

function verifyIssueReactionExists(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Verify IssueReaction with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueReaction exists");
          }
        }
      }
      return pvg.fail("Expected IssueReaction to exist but it does not");
    }
  });
}

function verifyIssueReactionDoesNotExist(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Verify IssueReaction with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueReaction to not exist but it does");
          }
        }
      }
      return pvg.success("IssueReaction does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueReaction(content, index, limit, owner, page, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/reactions";
  var description = "Verify we cannot delete non-existing IssueReaction";
  svc.delete(url, {
    expectedResponseCodes: [200, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueReaction(content, index, limit, owner, page, repo) {
  var expectedDesc = "Add reaction to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueReactionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ reaction\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ reaction\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueReactionAddedEvent(keyVal) {
  return bp.EventSet("AddIssueReaction:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueReactionAdded() {
  return bp.EventSet("matchAnyIssueReactionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue reaction") > -1;
  });
}

function waitForIssueReactionAdded(content, index, limit, owner, page, repo) {
  var expectedDesc = "Add reaction to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueReaction(content, index, limit, owner, page, repo) {
  var expectedDesc = "Remove reaction from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueReaction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueReactionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ reaction\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ reaction\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue stopwatch ----

function issueStartStopWatch(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start";
  var description = "Start stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function issueStopStopWatch(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/stop";
  var description = "Stop stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 404, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function issueDeleteStopWatch(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete";
  var description = "Delete stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404, 409]
  });
}

function tryToAddExistingIssueStopwatch(index, owner, repo) {
  issueDeleteStopWatch(index, owner, repo);
}

function verifyIssueStopwatchExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start";
  var description = "Verify IssueStopwatch with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueStopwatch exists");
          }
        }
      }
      return pvg.fail("Expected IssueStopwatch to exist but it does not");
    }
  });
}

function verifyIssueStopwatchDoesNotExist(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/start";
  var description = "Verify IssueStopwatch with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueStopwatch to not exist but it does");
          }
        }
      }
      return pvg.success("IssueStopwatch does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueStopwatch(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/stopwatch/delete";
  var description = "Verify we cannot delete non-existing IssueStopwatch";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404, 409],
    parameters: { description: description }
  });
}

function matchAddedIssueStopwatch(index, owner, repo) {
  var expectedDesc = "Start stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueStopwatchAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Start\ stopwatch\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Start\ stopwatch\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueStopwatchAddedEvent(keyVal) {
  return bp.EventSet("AddIssueStopwatch:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueStopwatchAdded() {
  return bp.EventSet("matchAnyIssueStopwatchAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue stopwatch") > -1;
  });
}

function waitForIssueStopwatchAdded(index, owner, repo) {
  var expectedDesc = "Start stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueStopwatch(index, owner, repo) {
  var expectedDesc = "Delete stopwatch on issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueStopwatch", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueStopwatchDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ stopwatch\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ stopwatch\ on\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue subscription ----

function issueSubscriptions(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions";
  var description = "Get users subscribed on issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function issueCheckSubscription(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/check";
  var description = "Check subscription status for issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function issueAddSubscription(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Subscribe user " + user + " to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
    "user": String(user),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 304, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
      , user: String(user)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function issueDeleteSubscription(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Unsubscribe user " + user + " from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 201, 304, 404]
  });
}

function tryToAddExistingIssueSubscription(index, owner, repo, user) {
  issueDeleteSubscription(index, owner, repo, user);
}

function verifyIssueSubscriptionExists(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Verify IssueSubscription with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueSubscription exists");
          }
        }
      }
      return pvg.fail("Expected IssueSubscription to exist but it does not");
    }
  });
}

function verifyIssueSubscriptionDoesNotExist(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Verify IssueSubscription with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueSubscription to not exist but it does");
          }
        }
      }
      return pvg.success("IssueSubscription does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueSubscription(index, owner, repo, user) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/subscriptions/" + user;
  var description = "Verify we cannot delete non-existing IssueSubscription";
  svc.delete(url, {
    expectedResponseCodes: [200, 201, 304, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueSubscription(index, owner, repo, user) {
  var expectedDesc = "Subscribe user " + user + " to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueSubscriptionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Subscribe\ user\ (.+)\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Subscribe\ user\ (.+)\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["user", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueSubscriptionAddedEvent(keyVal) {
  return bp.EventSet("AddIssueSubscription:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueSubscriptionAdded() {
  return bp.EventSet("matchAnyIssueSubscriptionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue subscription") > -1;
  });
}

function waitForIssueSubscriptionAdded(index, owner, repo, user) {
  var expectedDesc = "Subscribe user " + user + " to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueSubscription(index, owner, repo, user) {
  var expectedDesc = "Unsubscribe user " + user + " from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueSubscription", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueSubscriptionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unsubscribe\ user\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Unsubscribe\ user\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["user", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue timeline ----

function issueGetCommentsAndTimeline(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/timeline";
  var description = "List all comments and events on issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyIssueTimelineExists(index, owner, repo) {
  var url = "/repos";
  var description = "Verify IssueTimeline with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueTimeline exists");
          }
        }
      }
      return pvg.fail("Expected IssueTimeline to exist but it does not");
    }
  });
}

function verifyIssueTimelineDoesNotExist(index, owner, repo) {
  var url = "/repos";
  var description = "Verify IssueTimeline with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueTimeline to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTimeline does not exist");
    }
  });
}

// ---- Entity: issue tracked time ----

function issueTrackedTimes(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "List tracked times for issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function issueAddTime(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Add tracked time to issue " + index + " in repo " + owner + "/" + repo;
  var body = {
    "index": String(index),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 400, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function issueResetTime(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Reset tracked time of issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 403, 404]
  });
}

function tryToAddExistingIssueTrackedTime(id, index, owner, repo) {
  issueResetTime(id, index, owner, repo);
}

function verifyIssueTrackedTimeExists(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Verify IssueTrackedTime with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("IssueTrackedTime exists");
          }
        }
      }
      return pvg.fail("Expected IssueTrackedTime to exist but it does not");
    }
  });
}

function verifyIssueTrackedTimeDoesNotExist(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Verify IssueTrackedTime with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected IssueTrackedTime to not exist but it does");
          }
        }
      }
      return pvg.success("IssueTrackedTime does not exist");
    }
  });
}

function tryToDeleteANonExistingIssueTrackedTime(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times";
  var description = "Verify we cannot delete non-existing IssueTrackedTime";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueTrackedTime(id, index, owner, repo) {
  var expectedDesc = "Add tracked time to issue " + index + " in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyIssueTrackedTimeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ tracked\ time\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ tracked\ time\ to\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIssueTrackedTimeAddedEvent(keyVal) {
  return bp.EventSet("AddIssueTrackedTime:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyIssueTrackedTimeAdded() {
  return bp.EventSet("matchAnyIssueTrackedTimeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create issue tracked time") > -1;
  });
}

function waitForIssueTrackedTimeAdded(id, index, owner, repo) {
  var expectedDesc = "Add tracked time to issue " + index + " in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIssueTrackedTime(id, index, owner, repo) {
  var expectedDesc = "Reset tracked time of issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueTrackedTime", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTrackedTimeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Reset\ tracked\ time\ of\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Reset\ tracked\ time\ of\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue tracked time entry ----

function issueDeleteTime(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Delete tracked time " + id + " from issue " + index + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 403, 404]
  });
}

function tryToDeleteANonExistingIssueTrackedTimeEntry(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/times/" + id;
  var description = "Verify we cannot delete non-existing IssueTrackedTimeEntry";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 403, 404],
    parameters: { description: description }
  });
}

function matchDeletedIssueTrackedTimeEntry(id, index, owner, repo) {
  var expectedDesc = "Delete tracked time " + id + " from issue " + index + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedIssueTrackedTimeEntry", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueTrackedTimeEntryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tracked\ time\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ tracked\ time\ (.+)\ from\ issue\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: label ----

function getLabel(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Get label " + id + " for organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createLabel(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels";
  var description = "Create label for organization " + org;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404, 422],
    parameters: {
      description: description,
      org: String(org)
      , id: String(id)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function deleteLabel(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Delete label " + id + " for organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function editLabel(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Update label " + id + " for organization " + org;
  var body = {
    "id": String(id),
    "org": String(org),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404, 422],
    parameters: {
      description: description,
      org: String(org)
      , id: String(id)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function tryToAddExistingLabel(id, org, owner, repo) {
  editLabel(id, org, owner, repo);
}

function verifyLabelExists(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels";
  var description = "Verify Label with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Label exists");
          }
        }
      }
      return pvg.fail("Expected Label to exist but it does not");
    }
  });
}

function verifyLabelDoesNotExist(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels";
  var description = "Verify Label with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Label to not exist but it does");
          }
        }
      }
      return pvg.success("Label does not exist");
    }
  });
}

function tryToDeleteANonExistingLabel(id, org, owner, repo) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Verify we cannot delete non-existing Label";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedLabel(id, org, owner, repo) {
  var expectedDesc = "Create label for organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyLabelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ label\ for\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ label\ for\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLabelAddedEvent(keyVal) {
  return bp.EventSet("AddLabel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyLabelAdded() {
  return bp.EventSet("matchAnyLabelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create label") > -1;
  });
}

function waitForLabelAdded(id, org, owner, repo) {
  var expectedDesc = "Create label for organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedLabel(id, org, owner, repo) {
  var expectedDesc = "Delete label " + id + " for organization " + org;
  return bp.EventSet("matchDeletedLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLabelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ label\ (.+)\ for\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ label\ (.+)\ for\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: milestone ----

function getMilestonesList(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Get all opened milestones in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function createMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create milestone in repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function getMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Get milestone " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deleteMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Delete milestone " + id + " in repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function editMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Update milestone " + id + " in repo " + owner + "/" + repo;
  var body = {
    "id": String(id),
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function tryToAddExistingMilestone(id, owner, repo) {
  editMilestone(id, owner, repo);
}

function verifyMilestoneExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Verify Milestone with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Milestone exists");
          }
        }
      }
      return pvg.fail("Expected Milestone to exist but it does not");
    }
  });
}

function verifyMilestoneDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Verify Milestone with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Milestone to not exist but it does");
          }
        }
      }
      return pvg.success("Milestone does not exist");
    }
  });
}

function tryToDeleteANonExistingMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Verify we cannot delete non-existing Milestone";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedMilestone(id, owner, repo) {
  var expectedDesc = "Create milestone in repo " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyMilestoneAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ milestone\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ milestone\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getMilestoneAddedEvent(keyVal) {
  return bp.EventSet("AddMilestone:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyMilestoneAdded() {
  return bp.EventSet("matchAnyMilestoneAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create milestone") > -1;
  });
}

function waitForMilestoneAdded(id, owner, repo) {
  var expectedDesc = "Create milestone in repo " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedMilestone(id, owner, repo) {
  var expectedDesc = "Delete milestone " + id + " in repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedMilestone", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMilestoneDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ milestone\ (.+)\ in\ repo\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ milestone\ (.+)\ in\ repo\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization ----

function adminCreateOrg(limit, org, page, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Create organization for user " + username;
  var body = {
    "org": String(org),
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 422],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function listOrganizations(limit, org, page, username) {
  var url = "/admin/orgs";
  var description = "List all organizations";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function editOrganization(limit, org, page, username) {
  var url = "/orgs/" + org;
  var description = "Edit organization " + org;
  var body = {
    "org": String(org),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 404],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function deleteOrganization(limit, org, page, username) {
  var url = "/orgs/" + org;
  var description = "Delete organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function orgGetUserPermissions(limit, org, page, username) {
  var url = "/users/" + username + "/orgs/" + org + "/permissions";
  var description = "Get permissions of user " + username + " in organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function tryToAddExistingOrganization(limit, org, page, username) {
  orgGetUserPermissions(limit, org, page, username);
}

function verifyOrganizationExists(limit, org, page, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Verify Organization with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Organization exists");
          }
        }
      }
      return pvg.fail("Expected Organization to exist but it does not");
    }
  });
}

function verifyOrganizationDoesNotExist(limit, org, page, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Verify Organization with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Organization to not exist but it does");
          }
        }
      }
      return pvg.success("Organization does not exist");
    }
  });
}

function tryToDeleteANonExistingOrganization(limit, org, page, username) {
  var url = "/orgs/" + org;
  var description = "Verify we cannot delete non-existing Organization";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedOrganization(limit, org, page, username) {
  var expectedDesc = "Create organization for user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrganizationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ organization\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ organization\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrganizationAddedEvent(keyVal) {
  return bp.EventSet("AddOrganization:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyOrganizationAdded() {
  return bp.EventSet("matchAnyOrganizationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create organization") > -1;
  });
}

function waitForOrganizationAdded(limit, org, page, username) {
  var expectedDesc = "Create organization for user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrganization(limit, org, page, username) {
  var expectedDesc = "Delete organization " + org;
  return bp.EventSet("matchDeletedOrganization", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrganizationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization secret ----

function updateOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Create or update secret " + secretname + " in organization " + org;
  var body = {
    "org": String(org),
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      org: String(org)
      , secretname: String(secretname)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function deleteOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 400, 404]
  });
}

function tryToAddExistingOrgSecret(org, secretname) {
  deleteOrgSecret(org, secretname);
}

function verifyOrgSecretExists(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify OrgSecret with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("OrgSecret exists");
          }
        }
      }
      return pvg.fail("Expected OrgSecret to exist but it does not");
    }
  });
}

function verifyOrgSecretDoesNotExist(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify OrgSecret with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected OrgSecret to not exist but it does");
          }
        }
      }
      return pvg.success("OrgSecret does not exist");
    }
  });
}

function tryToDeleteANonExistingOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify we cannot delete non-existing OrgSecret";
  svc.delete(url, {
    expectedResponseCodes: [204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedOrgSecret(org, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrgSecretAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ or\ update\ secret\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ or\ update\ secret\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["secretname", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrgSecretAddedEvent(keyVal) {
  return bp.EventSet("AddOrgSecret:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyOrgSecretAdded() {
  return bp.EventSet("matchAnyOrgSecretAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create organization secret") > -1;
  });
}

function waitForOrgSecretAdded(org, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrgSecret(org, secretname) {
  var expectedDesc = "Delete secret " + secretname + " in organization " + org;
  return bp.EventSet("matchDeletedOrgSecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrgSecretDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ secret\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ secret\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["secretname", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization variable ----

function createOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Create variable " + variablename + " in organization " + org;
  var body = {
    "org": String(org),
    "variablename": String(variablename),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      org: String(org)
      , variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function getOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Get variable " + variablename + " in organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 400, 404]
  });
}

function updateOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Update variable " + variablename + " in organization " + org;
  var body = {
    "org": String(org),
    "variablename": String(variablename),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 204, 400, 404],
    parameters: {
      description: description,
      org: String(org)
      , variablename: String(variablename)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function deleteOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Delete variable " + variablename + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 201, 204, 400, 404]
  });
}

function tryToAddExistingOrgVariable(org, variablename) {
  deleteOrgVariable(org, variablename);
}

function verifyOrgVariableExists(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify OrgVariable with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("OrgVariable exists");
          }
        }
      }
      return pvg.fail("Expected OrgVariable to exist but it does not");
    }
  });
}

function verifyOrgVariableDoesNotExist(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify OrgVariable with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected OrgVariable to not exist but it does");
          }
        }
      }
      return pvg.success("OrgVariable does not exist");
    }
  });
}

function tryToDeleteANonExistingOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify we cannot delete non-existing OrgVariable";
  svc.delete(url, {
    expectedResponseCodes: [200, 201, 204, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedOrgVariable(org, variablename) {
  var expectedDesc = "Create variable " + variablename + " in organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyOrgVariableAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ variable\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ variable\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["variablename", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getOrgVariableAddedEvent(keyVal) {
  return bp.EventSet("AddOrgVariable:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyOrgVariableAdded() {
  return bp.EventSet("matchAnyOrgVariableAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create organization variable") > -1;
  });
}

function waitForOrgVariableAdded(org, variablename) {
  var expectedDesc = "Create variable " + variablename + " in organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedOrgVariable(org, variablename) {
  var expectedDesc = "Delete variable " + variablename + " in organization " + org;
  return bp.EventSet("matchDeletedOrgVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrgVariableDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ variable\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ variable\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["variablename", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization avatar ----

function orgUpdateAvatar(org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Update avatar for organization " + org;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404],
    parameters: {
      description: description,
      org: String(org)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function orgDeleteAvatar(org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Delete avatar for organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToDeleteANonExistingOrgAvatar(org) {
  var url = "/orgs/" + org + "/avatar";
  var description = "Verify we cannot delete non-existing OrgAvatar";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchDeletedOrgAvatar(org) {
  var expectedDesc = "Delete avatar for organization " + org;
  return bp.EventSet("matchDeletedOrgAvatar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOrgAvatarDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ avatar\ for\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ avatar\ for\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: block ----

function getBlock(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if user " + username + " is blocked by organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function blockUser(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block user " + username + " in organization " + org;
  var body = {
    "note": String(note),
    "org": String(org),
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404, 422],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function unblockUser(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock user " + username + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404, 422]
  });
}

function tryToAddExistingBlock(note, org, username) {
  unblockUser(note, org, username);
}

function verifyBlockExists(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Block exists");
          }
        }
      }
      return pvg.fail("Expected Block to exist but it does not");
    }
  });
}

function verifyBlockDoesNotExist(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Block to not exist but it does");
          }
        }
      }
      return pvg.success("Block does not exist");
    }
  });
}

function tryToDeleteANonExistingBlock(note, org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify we cannot delete non-existing Block";
  svc.delete(url, {
    expectedResponseCodes: [204, 404, 422],
    parameters: { description: description }
  });
}

function matchAddedBlock(note, org, username) {
  var expectedDesc = "Block user " + username + " in organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyBlockAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Block\ user\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Block\ user\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getBlockAddedEvent(keyVal) {
  return bp.EventSet("AddBlock:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyBlockAdded() {
  return bp.EventSet("matchAnyBlockAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create block") > -1;
  });
}

function waitForBlockAdded(note, org, username) {
  var expectedDesc = "Block user " + username + " in organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedBlock(note, org, username) {
  var expectedDesc = "Unblock user " + username + " in organization " + org;
  return bp.EventSet("matchDeletedBlock", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBlockDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Unblock\ user\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Unblock\ user\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: member ----

function getMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check if user " + username + " is a member of organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 303, 404]
  });
}

function deleteMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove member " + username + " from organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function verifyMemberExists(org, username) {
  var url = "/orgs";
  var description = "Verify Member with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Member exists");
          }
        }
      }
      return pvg.fail("Expected Member to exist but it does not");
    }
  });
}

function verifyMemberDoesNotExist(org, username) {
  var url = "/orgs";
  var description = "Verify Member with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Member to not exist but it does");
          }
        }
      }
      return pvg.success("Member does not exist");
    }
  });
}

function tryToDeleteANonExistingMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Verify we cannot delete non-existing Member";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchDeletedMember(org, username) {
  var expectedDesc = "Remove member " + username + " from organization " + org;
  return bp.EventSet("matchDeletedMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ member\ (.+)\ from\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ member\ (.+)\ from\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: public member ----

function getPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check if user " + username + " is a public member of organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function publicizeMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Publicize membership of user " + username + " in organization " + org;
  var body = {
    "org": String(org),
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { org: String(org) }) });
}

function concealMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Conceal membership of user " + username + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingPublicMember(org, username) {
  concealMember(org, username);
}

function verifyPublicMemberExists(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify PublicMember with org " + org + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("PublicMember exists");
          }
        }
      }
      return pvg.fail("Expected PublicMember to exist but it does not");
    }
  });
}

function verifyPublicMemberDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify PublicMember with org " + org + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected PublicMember to not exist but it does");
          }
        }
      }
      return pvg.success("PublicMember does not exist");
    }
  });
}

function tryToDeleteANonExistingPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify we cannot delete non-existing PublicMember";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedPublicMember(org, username) {
  var expectedDesc = "Publicize membership of user " + username + " in organization " + org;
  return matchSuccess(expectedDesc);
}

function waitForAnyPublicMemberAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Publicize\ membership\ of\ user\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Publicize\ membership\ of\ user\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPublicMemberAddedEvent(keyVal) {
  return bp.EventSet("AddPublicMember:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyPublicMemberAdded() {
  return bp.EventSet("matchAnyPublicMemberAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.org !== undefined && e.name.indexOf("Create public member") > -1;
  });
}

function waitForPublicMemberAdded(org, username) {
  var expectedDesc = "Publicize membership of user " + username + " in organization " + org;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedPublicMember(org, username) {
  var expectedDesc = "Conceal membership of user " + username + " in organization " + org;
  return bp.EventSet("matchDeletedPublicMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPublicMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Conceal\ membership\ of\ user\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Conceal\ membership\ of\ user\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: team member ----

function orgAddTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Add member " + username + " to team " + id;
  var body = {
    "id": String(id),
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function orgListTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Get member " + username + " of team " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function orgRemoveTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Remove member " + username + " from team " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function tryToAddExistingTeamMember(id, username) {
  orgRemoveTeamMember(id, username);
}

function verifyTeamMemberExists(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Verify TeamMember with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("TeamMember exists");
          }
        }
      }
      return pvg.fail("Expected TeamMember to exist but it does not");
    }
  });
}

function verifyTeamMemberDoesNotExist(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Verify TeamMember with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected TeamMember to not exist but it does");
          }
        }
      }
      return pvg.success("TeamMember does not exist");
    }
  });
}

function tryToDeleteANonExistingTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Verify we cannot delete non-existing TeamMember";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchAddedTeamMember(id, username) {
  var expectedDesc = "Add member " + username + " to team " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyTeamMemberAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ member\ (.+)\ to\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ member\ (.+)\ to\ team\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTeamMemberAddedEvent(keyVal) {
  return bp.EventSet("AddTeamMember:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyTeamMemberAdded() {
  return bp.EventSet("matchAnyTeamMemberAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create team member") > -1;
  });
}

function waitForTeamMemberAdded(id, username) {
  var expectedDesc = "Add member " + username + " to team " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTeamMember(id, username) {
  var expectedDesc = "Remove member " + username + " from team " + id;
  return bp.EventSet("matchDeletedTeamMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ member\ (.+)\ from\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ member\ (.+)\ from\ team\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: team repository ----

function orgAddTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Add repository " + repo + " from organization " + org + " to team " + id;
  var body = {
    "id": String(id),
    "org": String(org),
    "repo": String(repo),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function orgListTeamRepo(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Get repository " + repo + " from organization " + org + " in team " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function orgRemoveTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Remove repository " + repo + " from organization " + org + " from team " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingTeamRepository(id, org, repo) {
  orgRemoveTeamRepository(id, org, repo);
}

function verifyTeamRepositoryExists(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify TeamRepository with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("TeamRepository exists");
          }
        }
      }
      return pvg.fail("Expected TeamRepository to exist but it does not");
    }
  });
}

function verifyTeamRepositoryDoesNotExist(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify TeamRepository with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected TeamRepository to not exist but it does");
          }
        }
      }
      return pvg.success("TeamRepository does not exist");
    }
  });
}

function tryToDeleteANonExistingTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify we cannot delete non-existing TeamRepository";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedTeamRepository(id, org, repo) {
  var expectedDesc = "Add repository " + repo + " from organization " + org + " to team " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyTeamRepositoryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ repository\ (.+)\ from\ organization\ (.+)\ to\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ repository\ (.+)\ from\ organization\ (.+)\ to\ team\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "org", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getTeamRepositoryAddedEvent(keyVal) {
  return bp.EventSet("AddTeamRepository:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyTeamRepositoryAdded() {
  return bp.EventSet("matchAnyTeamRepositoryAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.id !== undefined && e.name.indexOf("Create team repository") > -1;
  });
}

function waitForTeamRepositoryAdded(id, org, repo) {
  var expectedDesc = "Add repository " + repo + " from organization " + org + " to team " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedTeamRepository(id, org, repo) {
  var expectedDesc = "Remove repository " + repo + " from organization " + org + " from team " + id;
  return bp.EventSet("matchDeletedTeamRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamRepositoryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ repository\ (.+)\ from\ organization\ (.+)\ from\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ repository\ (.+)\ from\ organization\ (.+)\ from\ team\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "org", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: cron task ----

function listCronTasks(limit, page, task) {
  var url = "/admin/cron";
  var description = "List cron tasks";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function runCronTask(limit, page, task) {
  var url = "/admin/cron/" + task;
  var description = "Run cron task " + task;
  var body = {
    "task": String(task),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 404],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyCronTaskExists(limit, page, task) {
  var url = "/admin/cron";
  var description = "Verify CronTask exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].task) === String(task)) {
            return pvg.success("CronTask exists");
          }
        }
      }
      return pvg.fail("Expected CronTask to exist but it does not");
    }
  });
}

function verifyCronTaskDoesNotExist(limit, page, task) {
  var url = "/admin/cron";
  var description = "Verify CronTask does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].task) === String(task)) {
            return pvg.fail("Expected CronTask to not exist but it does");
          }
        }
      }
      return pvg.success("CronTask does not exist");
    }
  });
}

// ---- Entity: runner registration token ----

function getRunnerRegistrationToken() {
  var url = "/admin/runners/registration-token";
  var description = "Get an global actions runner registration token";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyRunnerRegistrationTokenExists() {
  var url = "/admin/runners/registration-token";
  var description = "Verify RunnerRegistrationToken exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RunnerRegistrationToken exists");
          }
        }
      }
      return pvg.fail("Expected RunnerRegistrationToken to exist but it does not");
    }
  });
}

function verifyRunnerRegistrationTokenDoesNotExist() {
  var url = "/admin/runners/registration-token";
  var description = "Verify RunnerRegistrationToken does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RunnerRegistrationToken to not exist but it does");
          }
        }
      }
      return pvg.success("RunnerRegistrationToken does not exist");
    }
  });
}

// ---- Entity: unadopted repository ----

function listUnadoptedRepositories(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted";
  var description = "List unadopted repositories";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403]
  });
}

function adoptUnadoptedRepository(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Adopt unadopted repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 404],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function deleteUnadoptedRepository(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Delete unadopted repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403]
  });
}

function tryToAddExistingUnadoptedRepository(limit, owner, page, pattern, repo) {
  deleteUnadoptedRepository(limit, owner, page, pattern, repo);
}

function verifyUnadoptedRepositoryExists(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Verify UnadoptedRepository with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("UnadoptedRepository exists");
          }
        }
      }
      return pvg.fail("Expected UnadoptedRepository to exist but it does not");
    }
  });
}

function verifyUnadoptedRepositoryDoesNotExist(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Verify UnadoptedRepository with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected UnadoptedRepository to not exist but it does");
          }
        }
      }
      return pvg.success("UnadoptedRepository does not exist");
    }
  });
}

function tryToDeleteANonExistingUnadoptedRepository(limit, owner, page, pattern, repo) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Verify we cannot delete non-existing UnadoptedRepository";
  svc.delete(url, {
    expectedResponseCodes: [204, 403],
    parameters: { description: description }
  });
}

function matchAddedUnadoptedRepository(limit, owner, page, pattern, repo) {
  var expectedDesc = "Adopt unadopted repository " + owner + "/" + repo;
  return matchSuccess(expectedDesc);
}

function waitForAnyUnadoptedRepositoryAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Adopt\ unadopted\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Adopt\ unadopted\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUnadoptedRepositoryAddedEvent(keyVal) {
  return bp.EventSet("AddUnadoptedRepository:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyUnadoptedRepositoryAdded() {
  return bp.EventSet("matchAnyUnadoptedRepositoryAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.owner !== undefined && e.name.indexOf("Create unadopted repository") > -1;
  });
}

function waitForUnadoptedRepositoryAdded(limit, owner, page, pattern, repo) {
  var expectedDesc = "Adopt unadopted repository " + owner + "/" + repo;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUnadoptedRepository(limit, owner, page, pattern, repo) {
  var expectedDesc = "Delete unadopted repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedUnadoptedRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUnadoptedRepositoryDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ unadopted\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ unadopted\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user badge ----

function adminAddUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Add badge to user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403],
    parameters: {
      description: description,
      username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function adminDeleteUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Remove badge from user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 422]
  });
}

function adminListUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "List badges of user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function tryToAddExistingUserBadge(username) {
  adminListUserBadges(username);
}

function verifyUserBadgeExists(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Verify UserBadge with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserBadge exists");
          }
        }
      }
      return pvg.fail("Expected UserBadge to exist but it does not");
    }
  });
}

function verifyUserBadgeDoesNotExist(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Verify UserBadge with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserBadge to not exist but it does");
          }
        }
      }
      return pvg.success("UserBadge does not exist");
    }
  });
}

function tryToDeleteANonExistingUserBadge(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Verify we cannot delete non-existing UserBadge";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 422],
    parameters: { description: description }
  });
}

function matchAddedUserBadge(username) {
  var expectedDesc = "Add badge to user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserBadgeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ badge\ to\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ badge\ to\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserBadgeAddedEvent(keyVal) {
  return bp.EventSet("AddUserBadge:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserBadgeAdded() {
  return bp.EventSet("matchAnyUserBadgeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create user badge") > -1;
  });
}

function waitForUserBadgeAdded(username) {
  var expectedDesc = "Add badge to user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserBadge(username) {
  var expectedDesc = "Remove badge from user " + username;
  return bp.EventSet("matchDeletedUserBadge", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserBadgeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ badge\ from\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ badge\ from\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user public key ----

function adminCreatePublicKey(id, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Add public key for user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201, 403, 422],
    parameters: {
      description: description,
      username: String(username)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

function adminDeleteUserPublicKey(id, username) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Delete public key " + id + " for user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 403, 404]
  });
}

function tryToAddExistingUserPublicKey(id, username) {
  adminDeleteUserPublicKey(id, username);
}

function verifyUserPublicKeyExists(id, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Verify UserPublicKey with username " + username + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserPublicKey exists");
          }
        }
      }
      return pvg.fail("Expected UserPublicKey to exist but it does not");
    }
  });
}

function verifyUserPublicKeyDoesNotExist(id, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Verify UserPublicKey with username " + username + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserPublicKey to not exist but it does");
          }
        }
      }
      return pvg.success("UserPublicKey does not exist");
    }
  });
}

function tryToDeleteANonExistingUserPublicKey(id, username) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Verify we cannot delete non-existing UserPublicKey";
  svc.delete(url, {
    expectedResponseCodes: [204, 403, 404],
    parameters: { description: description }
  });
}

function matchAddedUserPublicKey(id, username) {
  var expectedDesc = "Add public key for user " + username;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserPublicKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ public\ key\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ public\ key\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserPublicKeyAddedEvent(keyVal) {
  return bp.EventSet("AddUserPublicKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserPublicKeyAdded() {
  return bp.EventSet("matchAnyUserPublicKeyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.username !== undefined && e.name.indexOf("Create user public key") > -1;
  });
}

function waitForUserPublicKeyAdded(id, username) {
  var expectedDesc = "Add public key for user " + username;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserPublicKey(id, username) {
  var expectedDesc = "Delete public key " + id + " for user " + username;
  return bp.EventSet("matchDeletedUserPublicKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserPublicKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ public\ key\ (.+)\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ public\ key\ (.+)\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user rename ----

function adminRenameUser(username) {
  var url = "/admin/users/" + username + "/rename";
  var description = "Rename user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204, 403, 422],
    parameters: {
      description: description,
      username: String(username)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { username: String(username) }) });
}

// ---- Entity: notification ----

function getNotification(id, to-status) {
  var url = "/notifications/threads/" + id;
  var description = "Get notification thread by ID " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 403, 404]
  });
}

function updateNotification(id, to-status) {
  var url = "/notifications/threads/" + id;
  var description = "Mark notification thread " + id + " as read";
  var body = {
    "id": String(id),
    "to-status": String(to-status),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [205, 403, 404],
    parameters: {
      description: description,
      id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { id: String(id) }) });
}

function verifyNotificationExists(id, to-status) {
  var url = "/notifications/threads";
  var description = "Verify Notification with id " + id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("Notification exists");
          }
        }
      }
      return pvg.fail("Expected Notification to exist but it does not");
    }
  });
}

function verifyNotificationDoesNotExist(id, to-status) {
  var url = "/notifications/threads";
  var description = "Verify Notification with id " + id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected Notification to not exist but it does");
          }
        }
      }
      return pvg.success("Notification does not exist");
    }
  });
}

// ---- Entity: notification list ----

function getNotificationList(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status) {
  var url = "/notifications";
  var description = "List users's notification threads with filters all=" + all + ", status-types=" + status-types + ", subject-type=" + subject-type + ", since=" + since + ", before=" + before + ", page=" + page + ", limit=" + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateNotificationList(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status) {
  var url = "/notifications";
  var description = "Mark notification threads as read, pinned or unread with all=" + all + ", status-types=" + status-types + ", to-status=" + to-status + ", last_read_at=" + last_read_at;
  var body = {
    "all": String(all),
    "last_read_at": String(last_read_at),
    "status-types": String(status-types),
    "to-status": String(to-status),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [205],
    parameters: {
      description: description,
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function verifyNotificationListExists(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status) {
  var url = "/notifications";
  var description = "Verify NotificationList exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].all) === String(all) && String(items[i].before) === String(before) && String(items[i].last_read_at) === String(last_read_at) && String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].since) === String(since) && String(items[i].status-types) === String(status-types) && String(items[i].subject-type) === String(subject-type) && String(items[i].to-status) === String(to-status)) {
            return pvg.success("NotificationList exists");
          }
        }
      }
      return pvg.fail("Expected NotificationList to exist but it does not");
    }
  });
}

function verifyNotificationListDoesNotExist(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status) {
  var url = "/notifications";
  var description = "Verify NotificationList does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].all) === String(all) && String(items[i].before) === String(before) && String(items[i].last_read_at) === String(last_read_at) && String(items[i].limit) === String(limit) && String(items[i].page) === String(page) && String(items[i].since) === String(since) && String(items[i].status-types) === String(status-types) && String(items[i].subject-type) === String(subject-type) && String(items[i].to-status) === String(to-status)) {
            return pvg.fail("Expected NotificationList to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationList does not exist");
    }
  });
}

// ---- Entity: notification new ----

function checkNewNotifications() {
  var url = "/notifications/new";
  var description = "Check if unread notifications exist";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function verifyNotificationNewExists() {
  var url = "/notifications/new";
  var description = "Verify NotificationNew exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("NotificationNew exists");
          }
        }
      }
      return pvg.fail("Expected NotificationNew to exist but it does not");
    }
  });
}

function verifyNotificationNewDoesNotExist() {
  var url = "/notifications/new";
  var description = "Verify NotificationNew does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected NotificationNew to not exist but it does");
          }
        }
      }
      return pvg.success("NotificationNew does not exist");
    }
  });
}

// ---- Entity: repo notification list ----

function getRepoNotificationList(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "List users's notification threads on repo " + owner + "/" + repo + " with filters all=" + all + ", status-types=" + status-types + ", subject-type=" + subject-type + ", since=" + since + ", before=" + before + ", page=" + page + ", limit=" + limit;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateRepoNotificationList(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark notification threads as read, pinned or unread on repo " + owner + "/" + repo + " with all=" + all + ", status-types=" + status-types + ", to-status=" + to-status + ", last_read_at=" + last_read_at;
  var body = {
    "all": String(all),
    "last_read_at": String(last_read_at),
    "owner": String(owner),
    "repo": String(repo),
    "status-types": String(status-types),
    "to-status": String(to-status),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [205],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { owner: String(owner) }) });
}

function verifyRepoNotificationListExists(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos";
  var description = "Verify RepoNotificationList with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepoNotificationList exists");
          }
        }
      }
      return pvg.fail("Expected RepoNotificationList to exist but it does not");
    }
  });
}

function verifyRepoNotificationListDoesNotExist(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos";
  var description = "Verify RepoNotificationList with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepoNotificationList to not exist but it does");
          }
        }
      }
      return pvg.success("RepoNotificationList does not exist");
    }
  });
}

// ---- Entity: package ----

function getPackage(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Get package " + name + " version " + version + " of type " + type + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function deletePackage(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Delete package " + name + " version " + version + " of type " + type + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204, 404]
  });
}

function verifyPackageExists(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify Package with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("Package exists");
          }
        }
      }
      return pvg.fail("Expected Package to exist but it does not");
    }
  });
}

function verifyPackageDoesNotExist(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify Package with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected Package to not exist but it does");
          }
        }
      }
      return pvg.success("Package does not exist");
    }
  });
}

function tryToDeleteANonExistingPackage(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Verify we cannot delete non-existing Package";
  svc.delete(url, {
    expectedResponseCodes: [204, 404],
    parameters: { description: description }
  });
}

function matchDeletedPackage(name, owner, type, version) {
  var expectedDesc = "Delete package " + name + " version " + version + " of type " + type + " owned by " + owner;
  return bp.EventSet("matchDeletedPackage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPackageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ package\ (.+)\ version\ (.+)\ of\ type\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ package\ (.+)\ version\ (.+)\ of\ type\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "version", "type", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: package list ----

function listPackages(limit, owner, page, q, type) {
  var url = "/packages/" + owner;
  var description = "List packages owned by " + owner + " filtered by type " + type + " and query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyPackageListExists(limit, owner, page, q, type) {
  var url = "/packages";
  var description = "Verify PackageList with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PackageList exists");
          }
        }
      }
      return pvg.fail("Expected PackageList to exist but it does not");
    }
  });
}

function verifyPackageListDoesNotExist(limit, owner, page, q, type) {
  var url = "/packages";
  var description = "Verify PackageList with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PackageList to not exist but it does");
          }
        }
      }
      return pvg.success("PackageList does not exist");
    }
  });
}

// ---- Entity: package file list ----

function listPackageFiles(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var description = "List files of package " + name + " version " + version + " of type " + type + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 404]
  });
}

function verifyPackageFileListExists(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify PackageFileList with owner " + owner + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PackageFileList exists");
          }
        }
      }
      return pvg.fail("Expected PackageFileList to exist but it does not");
    }
  });
}

function verifyPackageFileListDoesNotExist(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify PackageFileList with owner " + owner + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PackageFileList to not exist but it does");
          }
        }
      }
      return pvg.success("PackageFileList does not exist");
    }
  });
}

// ---- Entity: person ----

function getPerson(user-id) {
  var url = "/activitypub/user-id/" + user-id;
  var description = "Get person actor for user " + user-id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function sendToInbox(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Send to inbox of user " + user-id;
  var body = {
    "user-id": String(user-id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      user-id: String(user-id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { user-id: String(user-id) }) });
}

function tryToAddExistingPerson(user-id) {
  sendToInbox(user-id);
}

function verifyPersonExists(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Verify Person with user-id " + user-id + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user-id) === String(user-id)) {
            return pvg.success("Person exists");
          }
        }
      }
      return pvg.fail("Expected Person to exist but it does not");
    }
  });
}

function verifyPersonDoesNotExist(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Verify Person with user-id " + user-id + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].user-id) === String(user-id)) {
            return pvg.fail("Expected Person to not exist but it does");
          }
        }
      }
      return pvg.success("Person does not exist");
    }
  });
}

function matchAddedPerson(user-id) {
  var expectedDesc = "Send to inbox of user " + user-id;
  return matchSuccess(expectedDesc);
}

function waitForAnyPersonAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ to\ inbox\ of\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ to\ inbox\ of\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["user-id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getPersonAddedEvent(keyVal) {
  return bp.EventSet("AddPerson:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.user-id) === String(keyVal);
  });
}

function matchAnyPersonAdded() {
  return bp.EventSet("matchAnyPersonAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.user-id !== undefined && e.name.indexOf("Create person") > -1;
  });
}

function waitForPersonAdded(user-id) {
  var expectedDesc = "Send to inbox of user " + user-id;
  waitFor(matchSuccess(expectedDesc));
}
