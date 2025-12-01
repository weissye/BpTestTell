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

// ---- Entity: repository ----

function listOrgRepos(org, owner, repo, username) {
  var url = "/orgs/" + org + "/repos";
  var description = "List repositories in organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function adminDeleteUnadoptedRepository(org, owner, repo, username) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Delete unadopted repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function repoEdit(org, owner, repo, username) {
  var url = "/repos/" + owner + "/" + repo;
  var description = "Edit repository " + owner + "/" + repo;
  var body = {
    "org": String(org),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      org: String(org)
      , owner: String(owner)
      , repo: String(repo)
      , username: String(username)
    }
  });
}

function adminCreateRepo(org, owner, repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Create repository for user " + username;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , owner: String(owner)
      , repo: String(repo)
      , username: String(username)
    }
  });
}

function adminAdoptRepository(org, owner, repo, username) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Adopt unadopted repository " + owner + "/" + repo;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      org: String(org)
      , owner: String(owner)
      , repo: String(repo)
      , username: String(username)
    }
  });
}

function tryToAddExistingRepository(org, owner, repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Repository...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryExists(org, owner, repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Verify Repository exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Repository exists");
          }
        }
      }
      return pvg.fail("Expected Repository to exist but it does not");
    }
  });
}

function verifyRepositoryDoesNotExist(org, owner, repo, username) {
  var url = "/admin/users/" + username + "/repos";
  var description = "Verify Repository does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Repository to not exist but it does");
          }
        }
      }
      return pvg.success("Repository does not exist");
    }
  });
}

function tryToDeleteANonExistingRepository(org, owner, repo, username) {
  var url = "/admin/unadopted/" + owner + "/" + repo;
  var description = "Verify we cannot delete non-existing Repository";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepository(org, owner, repo, username) {
  var expectedDesc = "Create repository for user " + username;
  return bp.EventSet("matchAddedRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyRepositoryAdded() {
  return bp.EventSet("matchAnyRepositoryAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForRepositoryAdded(org, owner, repo, username) {
  var expectedDesc = "Create repository for user " + username;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepository(org, owner, repo, username) {
  var expectedDesc = "Delete unadopted repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryDeleted() {
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

// ---- Entity: repository migration ----

function repoMigrate() {
  var url = "/repos/migrate";
  var description = "Migrate a remote git repository";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function tryToAddExistingRepositoryMigrate() {
  var url = "/repos/migrate";
  var body = {
  };
  var description = "Verify that we cannot add another RepositoryMigrate...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
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
  return bp.EventSet("matchAddedRepositoryMigrate", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository migration") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForRepositoryMigrateAdded() {
  var expectedDesc = "Migrate a remote git repository";
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: repository search ----

function repoSearch(archived, exclusive, includeDesc, is_private, limit, mode, order, page, priority_owner_id, private, q, sort, starredBy, team_id, template, topic, uid) {
  var url = "/repos/search";
  var description = "Search for repositories with query " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyRepositorySearchExists(archived, exclusive, includeDesc, is_private, limit, mode, order, page, priority_owner_id, private, q, sort, starredBy, team_id, template, topic, uid) {
  var url = "/repos/search";
  var description = "Verify RepositorySearch exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].priority_owner_id) === String(priority_owner_id)) {
            return pvg.success("RepositorySearch exists");
          }
        }
      }
      return pvg.fail("Expected RepositorySearch to exist but it does not");
    }
  });
}

function verifyRepositorySearchDoesNotExist(archived, exclusive, includeDesc, is_private, limit, mode, order, page, priority_owner_id, private, q, sort, starredBy, team_id, template, topic, uid) {
  var url = "/repos/search";
  var description = "Verify RepositorySearch does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].priority_owner_id) === String(priority_owner_id)) {
            return pvg.fail("Expected RepositorySearch to not exist but it does");
          }
        }
      }
      return pvg.success("RepositorySearch does not exist");
    }
  });
}

// ---- Entity: repository file ----

function repoGetContents(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Get contents of file " + filepath + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Create file " + filepath + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , filepath: String(filepath)
      , repo: String(repo)
    }
  });
}

function repoUpdateFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Update file " + filepath + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , filepath: String(filepath)
      , repo: String(repo)
    }
  });
}

function repoDeleteFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Delete file " + filepath + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryFile...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryFileExists(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Verify RepositoryFile exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryFile exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryFile to exist but it does not");
    }
  });
}

function verifyRepositoryFileDoesNotExist(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Verify RepositoryFile does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryFile to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryFile does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryFile(filepath, owner, ref, repo) {
  var url = "/repos/" + owner + "/" + repo + "/contents/" + filepath;
  var description = "Verify we cannot delete non-existing RepositoryFile";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryFile(filepath, owner, ref, repo) {
  var expectedDesc = "Create file " + filepath + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryFile", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryFileAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ file\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ file\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["filepath", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryFileAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryFile:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryFileAdded() {
  return bp.EventSet("matchAnyRepositoryFileAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository file") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryFileAdded(filepath, owner, ref, repo) {
  var expectedDesc = "Create file " + filepath + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryFile(filepath, owner, ref, repo) {
  var expectedDesc = "Delete file " + filepath + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryFile", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryFileDeleted() {
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

// ---- Entity: repository branch ----

function repoGetBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Get branch " + branch + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Create branch in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , branch: String(branch)
      , repo: String(repo)
    }
  });
}

function repoUpdateBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Update branch " + branch + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , branch: String(branch)
      , repo: String(repo)
    }
  });
}

function repoDeleteBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Delete branch " + branch + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryBranch...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryBranchExists(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify RepositoryBranch exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryBranch exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryBranch to exist but it does not");
    }
  });
}

function verifyRepositoryBranchDoesNotExist(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches";
  var description = "Verify RepositoryBranch does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryBranch to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryBranch does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryBranch(branch, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branches/" + branch;
  var description = "Verify we cannot delete non-existing RepositoryBranch";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryBranch(branch, owner, repo) {
  var expectedDesc = "Create branch in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryBranch", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryBranchAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ branch\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ branch\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryBranchAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryBranch:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryBranchAdded() {
  return bp.EventSet("matchAnyRepositoryBranchAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository branch") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryBranchAdded(branch, owner, repo) {
  var expectedDesc = "Create branch in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryBranch(branch, owner, repo) {
  var expectedDesc = "Delete branch " + branch + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryBranch", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryBranchDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ branch\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ branch\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["branch", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository collaborator ----

function repoCheckCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Check collaborator " + collaborator + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoAddCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Add or update collaborator " + collaborator + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , collaborator: String(collaborator)
      , repo: String(repo)
    }
  });
}

function repoDeleteCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Delete collaborator " + collaborator + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryCollaborator...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryCollaboratorExists(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify RepositoryCollaborator exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryCollaborator exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryCollaborator to exist but it does not");
    }
  });
}

function verifyRepositoryCollaboratorDoesNotExist(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify RepositoryCollaborator does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryCollaborator to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryCollaborator does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryCollaborator(collaborator, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/collaborators/" + collaborator;
  var description = "Verify we cannot delete non-existing RepositoryCollaborator";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryCollaborator(collaborator, owner, repo) {
  var expectedDesc = "Add or update collaborator " + collaborator + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryCollaborator", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryCollaboratorAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ or\ update\ collaborator\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ or\ update\ collaborator\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["collaborator", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryCollaboratorAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryCollaborator:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryCollaboratorAdded() {
  return bp.EventSet("matchAnyRepositoryCollaboratorAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository collaborator") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryCollaboratorAdded(collaborator, owner, repo) {
  var expectedDesc = "Add or update collaborator " + collaborator + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryCollaborator(collaborator, owner, repo) {
  var expectedDesc = "Delete collaborator " + collaborator + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryCollaborator", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryCollaboratorDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ collaborator\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ collaborator\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["collaborator", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository key ----

function repoGetKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Get key " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Add key to repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoDeleteKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Delete key " + id + " from repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryKey...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryKeyExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Verify RepositoryKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryKey exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryKey to exist but it does not");
    }
  });
}

function verifyRepositoryKeyDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys";
  var description = "Verify RepositoryKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryKey to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryKey does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryKey(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/keys/" + id;
  var description = "Verify we cannot delete non-existing RepositoryKey";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryKey(id, owner, repo) {
  var expectedDesc = "Add key to repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryKeyAdded() {
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

function getRepositoryKeyAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryKeyAdded() {
  return bp.EventSet("matchAnyRepositoryKeyAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository key") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryKeyAdded(id, owner, repo) {
  var expectedDesc = "Add key to repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryKey(id, owner, repo) {
  var expectedDesc = "Delete key " + id + " from repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ key\ (.+)\ from\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ key\ (.+)\ from\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository pull request ----

function repoGetPullRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Get pull request " + index + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreatePullRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Create pull request in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function repoEditPullRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index;
  var description = "Update pull request " + index + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function repoCancelScheduledAutoMerge(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Cancel scheduled auto merge for pull request " + index + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryPullRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryPullRequest...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryPullRequestExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Verify RepositoryPullRequest exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryPullRequest exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryPullRequest to exist but it does not");
    }
  });
}

function verifyRepositoryPullRequestDoesNotExist(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls";
  var description = "Verify RepositoryPullRequest does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryPullRequest to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryPullRequest does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryPullRequest(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/merge";
  var description = "Verify we cannot delete non-existing RepositoryPullRequest";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryPullRequest(index, owner, repo) {
  var expectedDesc = "Create pull request in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryPullRequest", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPullRequestAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ pull\ request\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ pull\ request\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryPullRequestAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryPullRequest:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryPullRequestAdded() {
  return bp.EventSet("matchAnyRepositoryPullRequestAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository pull request") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryPullRequestAdded(index, owner, repo) {
  var expectedDesc = "Create pull request in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryPullRequest(index, owner, repo) {
  var expectedDesc = "Cancel scheduled auto merge for pull request " + index + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryPullRequest", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPullRequestDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Cancel\ scheduled\ auto\ merge\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Cancel\ scheduled\ auto\ merge\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository pull request review ----

function repoGetPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Get review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreatePullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Create review for pull request " + index + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function repoDeletePullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Delete review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function repoSubmitPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Submit review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function tryToAddExistingRepositoryPullRequestReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryPullRequestReview...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryPullRequestReviewExists(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Verify RepositoryPullRequestReview exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryPullRequestReview exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryPullRequestReview to exist but it does not");
    }
  });
}

function verifyRepositoryPullRequestReviewDoesNotExist(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews";
  var description = "Verify RepositoryPullRequestReview does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryPullRequestReview to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryPullRequestReview does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryPullRequestReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id;
  var description = "Verify we cannot delete non-existing RepositoryPullRequestReview";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryPullRequestReview(id, index, owner, repo) {
  var expectedDesc = "Create review for pull request " + index + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryPullRequestReview", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPullRequestReviewAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ review\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ review\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryPullRequestReviewAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryPullRequestReview:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryPullRequestReviewAdded() {
  return bp.EventSet("matchAnyRepositoryPullRequestReviewAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository pull request review") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryPullRequestReviewAdded(id, index, owner, repo) {
  var expectedDesc = "Create review for pull request " + index + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryPullRequestReview(id, index, owner, repo) {
  var expectedDesc = "Delete review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryPullRequestReview", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPullRequestReviewDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ review\ (.+)\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ review\ (.+)\ for\ pull\ request\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "index", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository pull request review dismissal ----

function repoDismissPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/dismissals";
  var description = "Dismiss review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "index": String(index),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , id: String(id)
      , index: String(index)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
}

function repoUnDismissPullReview(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/pulls/" + index + "/reviews/" + id + "/undismissals";
  var description = "Cancel dismissal of review " + id + " for pull request " + index + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
    "repo": String(repo),
    "index": String(index),
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , id: String(id)
      , index: String(index)
      , owner: String(owner)
      , repo: String(repo)
    }
  });
}

// ---- Entity: repository wiki page ----

function repoGetWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Get wiki page " + pageName + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Create wiki page in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , pageName: String(pageName)
      , repo: String(repo)
    }
  });
}

function repoEditWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Edit wiki page " + pageName + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , pageName: String(pageName)
      , repo: String(repo)
    }
  });
}

function repoDeleteWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Delete wiki page " + pageName + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryWikiPage...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryWikiPageExists(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Verify RepositoryWikiPage exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryWikiPage exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryWikiPage to exist but it does not");
    }
  });
}

function verifyRepositoryWikiPageDoesNotExist(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/new";
  var description = "Verify RepositoryWikiPage does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryWikiPage to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryWikiPage does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryWikiPage(owner, pageName, repo) {
  var url = "/repos/" + owner + "/" + repo + "/wiki/page/" + pageName;
  var description = "Verify we cannot delete non-existing RepositoryWikiPage";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryWikiPage(owner, pageName, repo) {
  var expectedDesc = "Create wiki page in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryWikiPage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryWikiPageAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ wiki\ page\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ wiki\ page\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryWikiPageAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryWikiPage:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryWikiPageAdded() {
  return bp.EventSet("matchAnyRepositoryWikiPageAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository wiki page") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryWikiPageAdded(owner, pageName, repo) {
  var expectedDesc = "Create wiki page in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryWikiPage(owner, pageName, repo) {
  var expectedDesc = "Delete wiki page " + pageName + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryWikiPage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryWikiPageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ wiki\ page\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ wiki\ page\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["pageName", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository release ----

function repoGetRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Get release " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Create release in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoEditRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Update release " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoDeleteRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Delete release " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryRelease...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryReleaseExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Verify RepositoryRelease exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryRelease exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryRelease to exist but it does not");
    }
  });
}

function verifyRepositoryReleaseDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases";
  var description = "Verify RepositoryRelease does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryRelease to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryRelease does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryRelease(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id;
  var description = "Verify we cannot delete non-existing RepositoryRelease";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryRelease(id, owner, repo) {
  var expectedDesc = "Create release in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryRelease", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryReleaseAdded() {
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

function getRepositoryReleaseAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryRelease:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryReleaseAdded() {
  return bp.EventSet("matchAnyRepositoryReleaseAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository release") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryReleaseAdded(id, owner, repo) {
  var expectedDesc = "Create release in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryRelease(id, owner, repo) {
  var expectedDesc = "Delete release " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryRelease", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryReleaseDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ release\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ release\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository release attachment ----

function repoGetReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Get release attachment " + attachment_id + " for release " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Create release attachment for release " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function repoEditReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Edit release attachment " + attachment_id + " for release " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function repoDeleteReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Delete release attachment " + attachment_id + " for release " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryReleaseAttachment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryReleaseAttachmentExists(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Verify RepositoryReleaseAttachment exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryReleaseAttachment exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryReleaseAttachment to exist but it does not");
    }
  });
}

function verifyRepositoryReleaseAttachmentDoesNotExist(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets";
  var description = "Verify RepositoryReleaseAttachment does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryReleaseAttachment to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryReleaseAttachment does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/releases/" + id + "/assets/" + attachment_id;
  var description = "Verify we cannot delete non-existing RepositoryReleaseAttachment";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create release attachment for release " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryReleaseAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryReleaseAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ release\ attachment\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ release\ attachment\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryReleaseAttachmentAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryReleaseAttachment:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryReleaseAttachmentAdded() {
  return bp.EventSet("matchAnyRepositoryReleaseAttachmentAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository release attachment") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryReleaseAttachmentAdded(attachment, attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create release attachment for release " + id + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryReleaseAttachment(attachment, attachment_id, id, name, owner, repo) {
  var expectedDesc = "Delete release attachment " + attachment_id + " for release " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryReleaseAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryReleaseAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ release\ attachment\ (.+)\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ release\ attachment\ (.+)\ for\ release\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository hook ----

function repoGetHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id;
  var description = "Get hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks";
  var description = "Create hook in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoEditHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id;
  var description = "Edit hook " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoDeleteHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id;
  var description = "Delete hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryHook...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryHookExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks";
  var description = "Verify RepositoryHook exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryHook exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryHook to exist but it does not");
    }
  });
}

function verifyRepositoryHookDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks";
  var description = "Verify RepositoryHook does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryHook to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryHook does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/" + id;
  var description = "Verify we cannot delete non-existing RepositoryHook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryHook(id, owner, repo) {
  var expectedDesc = "Create hook in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryHookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ hook\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ hook\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryHookAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryHook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryHookAdded() {
  return bp.EventSet("matchAnyRepositoryHookAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository hook") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryHookAdded(id, owner, repo) {
  var expectedDesc = "Create hook in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryHook(id, owner, repo) {
  var expectedDesc = "Delete hook " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryHookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ hook\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ hook\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository git hook ----

function repoGetGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Get git hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoEditGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Edit git hook " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoDeleteGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Delete git hook " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function verifyRepositoryGitHookExists(id, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryGitHook exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryGitHook exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryGitHook to exist but it does not");
    }
  });
}

function verifyRepositoryGitHookDoesNotExist(id, owner, repo) {
  var url = "/repos";
  var description = "Verify RepositoryGitHook does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryGitHook to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryGitHook does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryGitHook(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/hooks/git/" + id;
  var description = "Verify we cannot delete non-existing RepositoryGitHook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedRepositoryGitHook(id, owner, repo) {
  var expectedDesc = "Delete git hook " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryGitHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryGitHookDeleted() {
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

// ---- Entity: repository branch protection ----

function repoGetBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Get branch protection " + name + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Create branch protection in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function repoEditBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Edit branch protection " + name + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function repoDeleteBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Delete branch protection " + name + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryBranchProtection...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryBranchProtectionExists(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Verify RepositoryBranchProtection exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryBranchProtection exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryBranchProtection to exist but it does not");
    }
  });
}

function verifyRepositoryBranchProtectionDoesNotExist(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections";
  var description = "Verify RepositoryBranchProtection does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryBranchProtection to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryBranchProtection does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryBranchProtection(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/branch_protections/" + name;
  var description = "Verify we cannot delete non-existing RepositoryBranchProtection";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryBranchProtection(name, owner, repo) {
  var expectedDesc = "Create branch protection in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryBranchProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryBranchProtectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ branch\ protection\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ branch\ protection\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryBranchProtectionAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryBranchProtection:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryBranchProtectionAdded() {
  return bp.EventSet("matchAnyRepositoryBranchProtectionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository branch protection") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryBranchProtectionAdded(name, owner, repo) {
  var expectedDesc = "Create branch protection in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryBranchProtection(name, owner, repo) {
  var expectedDesc = "Delete branch protection " + name + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryBranchProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryBranchProtectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ branch\ protection\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ branch\ protection\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["name", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository tag protection ----

function repoGetTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Get tag protection " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Create tag protection in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoEditTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Edit tag protection " + id + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function repoDeleteTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Delete tag protection " + id + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryTagProtection...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryTagProtectionExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Verify RepositoryTagProtection exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryTagProtection exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryTagProtection to exist but it does not");
    }
  });
}

function verifyRepositoryTagProtectionDoesNotExist(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections";
  var description = "Verify RepositoryTagProtection does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryTagProtection to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryTagProtection does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryTagProtection(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/tag_protections/" + id;
  var description = "Verify we cannot delete non-existing RepositoryTagProtection";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryTagProtection(id, owner, repo) {
  var expectedDesc = "Create tag protection in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryTagProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryTagProtectionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ tag\ protection\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ tag\ protection\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryTagProtectionAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryTagProtection:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryTagProtectionAdded() {
  return bp.EventSet("matchAnyRepositoryTagProtectionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository tag protection") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryTagProtectionAdded(id, owner, repo) {
  var expectedDesc = "Create tag protection in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryTagProtection(id, owner, repo) {
  var expectedDesc = "Delete tag protection " + id + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryTagProtection", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryTagProtectionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tag\ protection\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ tag\ protection\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["id", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository tag ----

function repoGetTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Get tag " + tag + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoCreateTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Create tag in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , tag: String(tag)
    }
  });
}

function repoDeleteTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Delete tag " + tag + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryTag...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryTagExists(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Verify RepositoryTag exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryTag exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryTag to exist but it does not");
    }
  });
}

function verifyRepositoryTagDoesNotExist(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags";
  var description = "Verify RepositoryTag does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryTag to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryTag does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryTag(owner, repo, tag) {
  var url = "/repos/" + owner + "/" + repo + "/tags/" + tag;
  var description = "Verify we cannot delete non-existing RepositoryTag";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryTag(owner, repo, tag) {
  var expectedDesc = "Create tag in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryTag", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryTagAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ tag\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ tag\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryTagAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryTag:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryTagAdded() {
  return bp.EventSet("matchAnyRepositoryTagAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository tag") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryTagAdded(owner, repo, tag) {
  var expectedDesc = "Create tag in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryTag(owner, repo, tag) {
  var expectedDesc = "Delete tag " + tag + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryTag", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryTagDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ tag\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ tag\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["tag", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository push mirror ----

function repoGetPushMirrorByRemoteName(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Get push mirror " + name + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function repoAddPushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Add push mirror in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function repoDeletePushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Delete push mirror " + name + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryPushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryPushMirror...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryPushMirrorExists(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Verify RepositoryPushMirror exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("RepositoryPushMirror exists");
          }
        }
      }
      return pvg.fail("Expected RepositoryPushMirror to exist but it does not");
    }
  });
}

function verifyRepositoryPushMirrorDoesNotExist(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors";
  var description = "Verify RepositoryPushMirror does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected RepositoryPushMirror to not exist but it does");
          }
        }
      }
      return pvg.success("RepositoryPushMirror does not exist");
    }
  });
}

function tryToDeleteANonExistingRepositoryPushMirror(name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/push_mirrors/" + name;
  var description = "Verify we cannot delete non-existing RepositoryPushMirror";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryPushMirror(name, owner, repo) {
  var expectedDesc = "Add push mirror in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryPushMirror", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPushMirrorAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ push\ mirror\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ push\ mirror\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRepositoryPushMirrorAddedEvent(keyVal) {
  return bp.EventSet("AddRepositoryPushMirror:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyRepositoryPushMirrorAdded() {
  return bp.EventSet("matchAnyRepositoryPushMirrorAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository push mirror") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryPushMirrorAdded(name, owner, repo) {
  var expectedDesc = "Add push mirror in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRepositoryPushMirror(name, owner, repo) {
  var expectedDesc = "Delete push mirror " + name + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchDeletedRepositoryPushMirror", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRepositoryPushMirrorDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ push\ mirror\ (.+)\ in\ repository\ (.+)/(.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ push\ mirror\ (.+)\ in\ repository\ (.+)/(.+)$/);
  var captures = m.slice(1);
  var names = ["name", "owner", "repo"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: repository variable ----

function getRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Get variable " + variablename + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , variablename: String(variablename)
    }
  });
}

function updateRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Update variable " + variablename + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , variablename: String(variablename)
    }
  });
}

function deleteRepoVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Delete variable " + variablename + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositoryVariable(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositoryVariable...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositoryVariableExists(owner, repo, variablename) {
  var url = "/repos/" + owner + "/" + repo + "/actions/variables/" + variablename;
  var description = "Verify RepositoryVariable exists";
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
  var description = "Verify RepositoryVariable does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositoryVariable(owner, repo, variablename) {
  var expectedDesc = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositoryVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository variable") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositoryVariableAdded(owner, repo, variablename) {
  var expectedDesc = "Create variable " + variablename + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: repository secret ----

function updateRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
      , secretname: String(secretname)
    }
  });
}

function deleteRepoSecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in repository " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRepositorySecret(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another RepositorySecret...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRepositorySecretExists(owner, repo, secretname) {
  var url = "/repos/" + owner + "/" + repo + "/actions/secrets/" + secretname;
  var description = "Verify RepositorySecret exists";
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
  var description = "Verify RepositorySecret does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRepositorySecret(owner, repo, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  return bp.EventSet("matchAddedRepositorySecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create repository secret") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForRepositorySecretAdded(owner, repo, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in repository " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: user secret ----

function updateUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a user secret " + secretname;
  var body = {
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      secretname: String(secretname)
    }
  });
}

function updateUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Create or Update a user secret " + secretname;
  var body = {
    "secretname": String(secretname),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      secretname: String(secretname)
    }
  });
}

function deleteUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Delete user secret " + secretname;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserSecret(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var body = {
    "secretname": String(secretname)
  };
  var description = "Verify that we cannot add another UserSecret...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserSecretExists(secretname) {
  var url = "/user/actions/secrets/" + secretname;
  var description = "Verify UserSecret exists";
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
  var description = "Verify UserSecret does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserSecret(secretname) {
  var expectedDesc = "Create or Update a user secret " + secretname;
  return bp.EventSet("matchAddedUserSecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user secret") > -1 && e.data.parameters.secretname !== undefined);
  });
}

function waitForUserSecretAdded(secretname) {
  var expectedDesc = "Create or Update a user secret " + secretname;
  waitFor(matchesDescription(expectedDesc));
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
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      variablename: String(variablename)
    }
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
    expectedResponseCodes: [],
    parameters: {
      description: description,
      variablename: String(variablename)
    }
  });
}

function getUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Get user variable " + variablename;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Delete user variable " + variablename;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserVariable(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var body = {
    "variablename": String(variablename)
  };
  var description = "Verify that we cannot add another UserVariable...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserVariableExists(variablename) {
  var url = "/user/actions/variables/" + variablename;
  var description = "Verify UserVariable exists";
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
  var description = "Verify UserVariable does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserVariable(variablename) {
  var expectedDesc = "Create user variable " + variablename;
  return bp.EventSet("matchAddedUserVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user variable") > -1 && e.data.parameters.variablename !== undefined);
  });
}

function waitForUserVariableAdded(variablename) {
  var expectedDesc = "Create user variable " + variablename;
  waitFor(matchesDescription(expectedDesc));
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
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userGetOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Get OAuth2 application " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
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
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userDeleteOAuth2Application(id) {
  var url = "/user/applications/oauth2/" + id;
  var description = "Delete OAuth2 application " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingOAuth2Application(id) {
  var url = "/user/applications/oauth2";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another OAuth2Application...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOAuth2ApplicationExists(id) {
  var url = "/user/applications/oauth2";
  var description = "Verify OAuth2Application exists";
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
  var description = "Verify OAuth2Application does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedOAuth2Application(id) {
  var expectedDesc = "Create OAuth2 application";
  return bp.EventSet("matchAddedOAuth2Application", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create oauth2 application") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForOAuth2ApplicationAdded(id) {
  var expectedDesc = "Create OAuth2 application";
  waitFor(matchesDescription(expectedDesc));
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
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
}

function userDeleteAvatar() {
  var url = "/user/avatar";
  var description = "Delete user avatar";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingUserAvatar() {
  var url = "/user/avatar";
  var description = "Verify we cannot delete non-existing UserAvatar";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
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
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
    }
  });
}

function userCheckUserBlock(username) {
  var url = "/user/blocks/" + username;
  var description = "Check if user " + username + " is blocked";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userUnblockUser(username) {
  var url = "/user/blocks/" + username;
  var description = "Unblock user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserBlock(username) {
  var url = "/user/blocks/" + username;
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another UserBlock...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserBlockExists(username) {
  var url = "/user/blocks/" + username;
  var description = "Verify UserBlock exists";
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
  var description = "Verify UserBlock does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserBlock(username) {
  var expectedDesc = "Block user " + username;
  return bp.EventSet("matchAddedUserBlock", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user block") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserBlockAdded(username) {
  var expectedDesc = "Block user " + username;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: user email ----

function userAddEmail() {
  var url = "/user/emails";
  var description = "Add user email";
  var body = {
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
    }
  });
}

function userDeleteEmail() {
  var url = "/user/emails";
  var description = "Delete user email";
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function userListEmails() {
  var url = "/user/emails";
  var description = "List user emails";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserEmail() {
  var url = "/user/emails";
  var body = {
  };
  var description = "Verify that we cannot add another UserEmail...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserEmailExists() {
  var url = "/user/emails";
  var description = "Verify UserEmail exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UserEmail exists");
          }
        }
      }
      return pvg.fail("Expected UserEmail to exist but it does not");
    }
  });
}

function verifyUserEmailDoesNotExist() {
  var url = "/user/emails";
  var description = "Verify UserEmail does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UserEmail to not exist but it does");
          }
        }
      }
      return pvg.success("UserEmail does not exist");
    }
  });
}

function tryToDeleteANonExistingUserEmail() {
  var url = "/user/emails";
  var description = "Verify we cannot delete non-existing UserEmail";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserEmail() {
  var expectedDesc = "Add user email";
  return bp.EventSet("matchAddedUserEmail", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserEmailAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ email$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ email$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserEmailAddedEvent(keyVal) {
  return bp.EventSet("AddUserEmail:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserEmailAdded() {
  return bp.EventSet("matchAnyUserEmailAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user email") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForUserEmailAdded() {
  var expectedDesc = "Add user email";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserEmail() {
  var expectedDesc = "Delete user email";
  return bp.EventSet("matchDeletedUserEmail", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserEmailDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ email$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ email$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user follower ----

function userListFollowers(username) {
  var url = "/users/" + username + "/followers";
  var description = "List followers of user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyUserFollowerExists(username) {
  var url = "/users";
  var description = "Verify UserFollower exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserFollower exists");
          }
        }
      }
      return pvg.fail("Expected UserFollower to exist but it does not");
    }
  });
}

function verifyUserFollowerDoesNotExist(username) {
  var url = "/users";
  var description = "Verify UserFollower does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserFollower to not exist but it does");
          }
        }
      }
      return pvg.success("UserFollower does not exist");
    }
  });
}

// ---- Entity: user following ----

function userCurrentPutFollow(username) {
  var url = "/user/following/" + username;
  var description = "Follow user " + username;
  var body = {
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
    }
  });
}

function userCurrentCheckFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Check if following user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userCurrentDeleteFollow(username) {
  var url = "/user/following/" + username;
  var description = "Unfollow user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserFollowing(username) {
  var url = "/user/following/" + username;
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another UserFollowing...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserFollowingExists(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowing exists";
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

function verifyUserFollowingDoesNotExist(username) {
  var url = "/user/following/" + username;
  var description = "Verify UserFollowing does not exist";
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

function tryToDeleteANonExistingUserFollowing(username) {
  var url = "/user/following/" + username;
  var description = "Verify we cannot delete non-existing UserFollowing";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserFollowing(username) {
  var expectedDesc = "Follow user " + username;
  return bp.EventSet("matchAddedUserFollowing", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFollowingAdded() {
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

function getUserFollowingAddedEvent(keyVal) {
  return bp.EventSet("AddUserFollowing:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserFollowingAdded() {
  return bp.EventSet("matchAnyUserFollowingAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user following") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserFollowingAdded(username) {
  var expectedDesc = "Follow user " + username;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserFollowing(username) {
  var expectedDesc = "Unfollow user " + username;
  return bp.EventSet("matchDeletedUserFollowing", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFollowingDeleted() {
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

// ---- Entity: user gpg key ----

function userCurrentPostGPGKey(id) {
  var url = "/user/gpg_keys";
  var description = "Create user GPG key";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userCurrentGetGPGKey(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Get user GPG key " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userCurrentDeleteGPGKey(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Delete user GPG key " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserGPGKey(id) {
  var url = "/user/gpg_keys";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another UserGPGKey...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserGPGKeyExists(id) {
  var url = "/user/gpg_keys";
  var description = "Verify UserGPGKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("UserGPGKey exists");
          }
        }
      }
      return pvg.fail("Expected UserGPGKey to exist but it does not");
    }
  });
}

function verifyUserGPGKeyDoesNotExist(id) {
  var url = "/user/gpg_keys";
  var description = "Verify UserGPGKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected UserGPGKey to not exist but it does");
          }
        }
      }
      return pvg.success("UserGPGKey does not exist");
    }
  });
}

function tryToDeleteANonExistingUserGPGKey(id) {
  var url = "/user/gpg_keys/" + id;
  var description = "Verify we cannot delete non-existing UserGPGKey";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserGPGKey(id) {
  var expectedDesc = "Create user GPG key";
  return bp.EventSet("matchAddedUserGPGKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGPGKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ GPG\ key$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ GPG\ key$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserGPGKeyAddedEvent(keyVal) {
  return bp.EventSet("AddUserGPGKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserGPGKeyAdded() {
  return bp.EventSet("matchAnyUserGPGKeyAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user gpg key") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForUserGPGKeyAdded(id) {
  var expectedDesc = "Create user GPG key";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserGPGKey(id) {
  var expectedDesc = "Delete user GPG key " + id;
  return bp.EventSet("matchDeletedUserGPGKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGPGKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ GPG\ key\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ GPG\ key\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user hook ----

function userCreateHook(id) {
  var url = "/user/hooks";
  var description = "Create user hook";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userGetHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Get user hook " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userEditHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Update user hook " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userDeleteHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Delete user hook " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserHook(id) {
  var url = "/user/hooks";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another UserHook...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserHookExists(id) {
  var url = "/user/hooks";
  var description = "Verify UserHook exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("UserHook exists");
          }
        }
      }
      return pvg.fail("Expected UserHook to exist but it does not");
    }
  });
}

function verifyUserHookDoesNotExist(id) {
  var url = "/user/hooks";
  var description = "Verify UserHook does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected UserHook to not exist but it does");
          }
        }
      }
      return pvg.success("UserHook does not exist");
    }
  });
}

function tryToDeleteANonExistingUserHook(id) {
  var url = "/user/hooks/" + id;
  var description = "Verify we cannot delete non-existing UserHook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserHook(id) {
  var expectedDesc = "Create user hook";
  return bp.EventSet("matchAddedUserHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserHookAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ hook$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ hook$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserHookAddedEvent(keyVal) {
  return bp.EventSet("AddUserHook:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserHookAdded() {
  return bp.EventSet("matchAnyUserHookAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user hook") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForUserHookAdded(id) {
  var expectedDesc = "Create user hook";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserHook(id) {
  var expectedDesc = "Delete user hook " + id;
  return bp.EventSet("matchDeletedUserHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserHookDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ hook\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ hook\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user public key ----

function userCurrentPostKey(id) {
  var url = "/user/keys";
  var description = "Create user public key";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function userCurrentGetKey(id) {
  var url = "/user/keys/" + id;
  var description = "Get user public key " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userCurrentDeleteKey(id) {
  var url = "/user/keys/" + id;
  var description = "Delete user public key " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserKey(id) {
  var url = "/user/keys";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another UserKey...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserKeyExists(id) {
  var url = "/user/keys";
  var description = "Verify UserKey exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("UserKey exists");
          }
        }
      }
      return pvg.fail("Expected UserKey to exist but it does not");
    }
  });
}

function verifyUserKeyDoesNotExist(id) {
  var url = "/user/keys";
  var description = "Verify UserKey does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected UserKey to not exist but it does");
          }
        }
      }
      return pvg.success("UserKey does not exist");
    }
  });
}

function tryToDeleteANonExistingUserKey(id) {
  var url = "/user/keys/" + id;
  var description = "Verify we cannot delete non-existing UserKey";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserKey(id) {
  var expectedDesc = "Create user public key";
  return bp.EventSet("matchAddedUserKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserKeyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ public\ key$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ public\ key$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserKeyAddedEvent(keyVal) {
  return bp.EventSet("AddUserKey:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserKeyAdded() {
  return bp.EventSet("matchAnyUserKeyAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user public key") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForUserKeyAdded(id) {
  var expectedDesc = "Create user public key";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserKey(id) {
  var expectedDesc = "Delete user public key " + id;
  return bp.EventSet("matchDeletedUserKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserKeyDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ public\ key\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ public\ key\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user access token ----

function userCreateToken(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Create access token for user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
      , token: String(token)
    }
  });
}

function userGetTokens(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "List access tokens for user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userDeleteAccessToken(token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Delete access token " + token + " for user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserToken(token, username) {
  var url = "/users/" + username + "/tokens";
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another UserToken...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserTokenExists(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify UserToken exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.success("UserToken exists");
          }
        }
      }
      return pvg.fail("Expected UserToken to exist but it does not");
    }
  });
}

function verifyUserTokenDoesNotExist(token, username) {
  var url = "/users/" + username + "/tokens";
  var description = "Verify UserToken does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].username) === String(username)) {
            return pvg.fail("Expected UserToken to not exist but it does");
          }
        }
      }
      return pvg.success("UserToken does not exist");
    }
  });
}

function tryToDeleteANonExistingUserToken(token, username) {
  var url = "/users/" + username + "/tokens/" + token;
  var description = "Verify we cannot delete non-existing UserToken";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserToken(token, username) {
  var expectedDesc = "Create access token for user " + username;
  return bp.EventSet("matchAddedUserToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserTokenAdded() {
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

function getUserTokenAddedEvent(keyVal) {
  return bp.EventSet("AddUserToken:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.username) === String(keyVal);
  });
}

function matchAnyUserTokenAdded() {
  return bp.EventSet("matchAnyUserTokenAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user access token") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserTokenAdded(token, username) {
  var expectedDesc = "Create access token for user " + username;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserToken(token, username) {
  var expectedDesc = "Delete access token " + token + " for user " + username;
  return bp.EventSet("matchDeletedUserToken", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserTokenDeleted() {
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

// ---- Entity: user settings ----

function getUserSettings() {
  var url = "/user/settings";
  var description = "Get user settings";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUserSettings() {
  var url = "/user/settings";
  var description = "Update user settings";
  var body = {
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
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

// ---- Entity: user starred repo ----

function userCurrentCheckStarring(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Check if user starred repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function userCurrentPutStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Star repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
}

function userCurrentDeleteStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Unstar repo " + owner + "/" + repo;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another UserStar...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserStarExists(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify UserStar exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("UserStar exists");
          }
        }
      }
      return pvg.fail("Expected UserStar to exist but it does not");
    }
  });
}

function verifyUserStarDoesNotExist(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify UserStar does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected UserStar to not exist but it does");
          }
        }
      }
      return pvg.success("UserStar does not exist");
    }
  });
}

function tryToDeleteANonExistingUserStar(owner, repo) {
  var url = "/user/starred/" + owner + "/" + repo;
  var description = "Verify we cannot delete non-existing UserStar";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserStar(owner, repo) {
  var expectedDesc = "Star repo " + owner + "/" + repo;
  return bp.EventSet("matchAddedUserStar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserStarAdded() {
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

function getUserStarAddedEvent(keyVal) {
  return bp.EventSet("AddUserStar:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.owner) === String(keyVal);
  });
}

function matchAnyUserStarAdded() {
  return bp.EventSet("matchAnyUserStarAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user starred repo") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForUserStarAdded(owner, repo) {
  var expectedDesc = "Star repo " + owner + "/" + repo;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserStar(owner, repo) {
  var expectedDesc = "Unstar repo " + owner + "/" + repo;
  return bp.EventSet("matchDeletedUserStar", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserStarDeleted() {
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

// ---- Entity: issue ----

function createIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Create issue in repo " + repo + " owned by " + owner + " with index " + index;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function deleteIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Delete issue " + index + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Edit issue " + index + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function getIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index;
  var description = "Get issue " + index + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIssue(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another Issue...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIssueExists(index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues";
  var description = "Verify Issue exists";
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
  var description = "Verify Issue does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIssue(index, owner, repo) {
  var expectedDesc = "Create issue in repo " + repo + " owned by " + owner + " with index " + index;
  return bp.EventSet("matchAddedIssue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ issue\ in\ repo\ (.+)\ owned\ by\ (.+)\ with\ index\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ issue\ in\ repo\ (.+)\ owned\ by\ (.+)\ with\ index\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "owner", "index"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create issue") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForIssueAdded(index, owner, repo) {
  var expectedDesc = "Create issue in repo " + repo + " owned by " + owner + " with index " + index;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIssue(index, owner, repo) {
  var expectedDesc = "Delete issue " + index + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedIssue", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["index", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment ----

function createComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Add comment " + id + " to issue in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function deleteComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Delete comment " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Edit comment " + id + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , index: String(index)
      , repo: String(repo)
    }
  });
}

function getComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Get comment " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIssueComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another IssueComment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIssueCommentExists(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Verify IssueComment exists";
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

function verifyIssueCommentDoesNotExist(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/comments";
  var description = "Verify IssueComment does not exist";
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

function tryToDeleteANonExistingIssueComment(id, index, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id;
  var description = "Verify we cannot delete non-existing IssueComment";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueComment(id, index, owner, repo) {
  var expectedDesc = "Add comment " + id + " to issue in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchAddedIssueComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ comment\ (.+)\ to\ issue\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ comment\ (.+)\ to\ issue\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "repo", "owner"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create issue comment") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForIssueCommentAdded(id, index, owner, repo) {
  var expectedDesc = "Add comment " + id + " to issue in repo " + repo + " owned by " + owner;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIssueComment(id, index, owner, repo) {
  var expectedDesc = "Delete comment " + id + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedIssueComment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue comment attachment ----

function createIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Create attachment for comment " + id + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function deleteIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " for comment " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " for comment " + id + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , id: String(id)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function getIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " for comment " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another IssueCommentAttachment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIssueCommentAttachmentExists(attachment_id, id, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/comments/" + id + "/assets";
  var description = "Verify IssueCommentAttachment exists";
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
  var description = "Verify IssueCommentAttachment does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create attachment for comment " + id + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchAddedIssueCommentAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ attachment\ for\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ attachment\ for\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "repo", "owner"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create issue comment attachment") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForIssueCommentAttachmentAdded(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Create attachment for comment " + id + " in repo " + repo + " owned by " + owner;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIssueCommentAttachment(attachment_id, id, name, owner, repo) {
  var expectedDesc = "Delete attachment " + attachment_id + " for comment " + id + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedIssueCommentAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueCommentAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ (.+)\ for\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ (.+)\ for\ comment\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "id", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: issue attachment ----

function createIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Create attachment for issue " + index + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , index: String(index)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function deleteIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Delete attachment " + attachment_id + " for issue " + index + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Edit attachment " + attachment_id + " for issue " + index + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , attachment_id: String(attachment_id)
      , index: String(index)
      , name: String(name)
      , repo: String(repo)
    }
  });
}

function getIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets/" + attachment_id;
  var description = "Get attachment " + attachment_id + " for issue " + index + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIssueAttachment(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another IssueAttachment...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIssueAttachmentExists(attachment_id, index, name, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/issues/" + index + "/assets";
  var description = "Verify IssueAttachment exists";
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
  var description = "Verify IssueAttachment does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIssueAttachment(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Create attachment for issue " + index + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchAddedIssueAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueAttachmentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ attachment\ for\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ attachment\ for\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["index", "repo", "owner"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create issue attachment") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForIssueAttachmentAdded(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Create attachment for issue " + index + " in repo " + repo + " owned by " + owner;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIssueAttachment(attachment_id, index, name, owner, repo) {
  var expectedDesc = "Delete attachment " + attachment_id + " for issue " + index + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedIssueAttachment", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIssueAttachmentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ attachment\ (.+)\ for\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ attachment\ (.+)\ for\ issue\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["attachment_id", "index", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: label ----

function createLabel(id, org) {
  var url = "/orgs/" + org + "/labels";
  var description = "Create label in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , id: String(id)
    }
  });
}

function deleteLabel(id, org) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Delete label " + id + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editLabel(id, org) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Edit label " + id + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      org: String(org)
      , id: String(id)
    }
  });
}

function getLabel(id, org) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Get label " + id + " in organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingLabel(id, org) {
  var url = "/orgs/" + org + "/labels";
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Label...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLabelExists(id, org) {
  var url = "/orgs/" + org + "/labels";
  var description = "Verify Label exists";
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

function verifyLabelDoesNotExist(id, org) {
  var url = "/orgs/" + org + "/labels";
  var description = "Verify Label does not exist";
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

function tryToDeleteANonExistingLabel(id, org) {
  var url = "/orgs/" + org + "/labels/" + id;
  var description = "Verify we cannot delete non-existing Label";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedLabel(id, org) {
  var expectedDesc = "Create label in organization " + org;
  return bp.EventSet("matchAddedLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLabelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ label\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ label\ in\ organization\ (.+)$/);
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create label") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForLabelAdded(id, org) {
  var expectedDesc = "Create label in organization " + org;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedLabel(id, org) {
  var expectedDesc = "Delete label " + id + " in organization " + org;
  return bp.EventSet("matchDeletedLabel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLabelDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ label\ (.+)\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ label\ (.+)\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: milestone ----

function createMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Create milestone in repo " + repo + " owned by " + owner + " with id " + id;
  var body = {
    "owner": String(owner),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function deleteMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Delete milestone " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function editMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Edit milestone " + id + " in repo " + repo + " owned by " + owner;
  var body = {
    "owner": String(owner),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , id: String(id)
      , repo: String(repo)
    }
  });
}

function getMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones/" + id;
  var description = "Get milestone " + id + " in repo " + repo + " owned by " + owner;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingMilestone(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var body = {
    "owner": String(owner)
  };
  var description = "Verify that we cannot add another Milestone...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyMilestoneExists(id, owner, repo) {
  var url = "/repos/" + owner + "/" + repo + "/milestones";
  var description = "Verify Milestone exists";
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
  var description = "Verify Milestone does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedMilestone(id, owner, repo) {
  var expectedDesc = "Create milestone in repo " + repo + " owned by " + owner + " with id " + id;
  return bp.EventSet("matchAddedMilestone", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMilestoneAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ milestone\ in\ repo\ (.+)\ owned\ by\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ milestone\ in\ repo\ (.+)\ owned\ by\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["repo", "owner", "id"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create milestone") > -1 && e.data.parameters.owner !== undefined);
  });
}

function waitForMilestoneAdded(id, owner, repo) {
  var expectedDesc = "Create milestone in repo " + repo + " owned by " + owner + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedMilestone(id, owner, repo) {
  var expectedDesc = "Delete milestone " + id + " in repo " + repo + " owned by " + owner;
  return bp.EventSet("matchDeletedMilestone", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMilestoneDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ milestone\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ milestone\ (.+)\ in\ repo\ (.+)\ owned\ by\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "repo", "owner"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: organization ----

function adminCreateOrg(org, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Create organization for user " + username;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
}

function getOrganization(org, username) {
  var url = "/orgs/" + org;
  var description = "Get organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function editOrganization(org, username) {
  var url = "/orgs/" + org;
  var description = "Edit organization " + org;
  var body = {
    "org": String(org),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
}

function deleteOrganization(org, username) {
  var url = "/orgs/" + org;
  var description = "Delete organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingOrganization(org, username) {
  var url = "/admin/users/" + username + "/orgs";
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Organization...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyOrganizationExists(org, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Verify Organization exists";
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

function verifyOrganizationDoesNotExist(org, username) {
  var url = "/admin/users/" + username + "/orgs";
  var description = "Verify Organization does not exist";
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

function tryToDeleteANonExistingOrganization(org, username) {
  var url = "/orgs/" + org;
  var description = "Verify we cannot delete non-existing Organization";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedOrganization(org, username) {
  var expectedDesc = "Create organization for user " + username;
  return bp.EventSet("matchAddedOrganization", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create organization") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForOrganizationAdded(org, username) {
  var expectedDesc = "Create organization for user " + username;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedOrganization(org, username) {
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

// ---- Entity: team ----

function createTeam(id, org) {
  var url = "/orgs/" + org + "/teams";
  var description = "Create team in organization " + org;
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
    }
  });
}

function getTeam(id, org) {
  var url = "/teams/" + id;
  var description = "Get team " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function editTeam(id, org) {
  var url = "/teams/" + id;
  var description = "Edit team " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
    }
  });
}

function deleteTeam(id, org) {
  var url = "/teams/" + id;
  var description = "Delete team " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingTeam(id, org) {
  var url = "/orgs/" + org + "/teams";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Team...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTeamExists(id, org) {
  var url = "/orgs/" + org + "/teams";
  var description = "Verify Team exists";
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

function verifyTeamDoesNotExist(id, org) {
  var url = "/orgs/" + org + "/teams";
  var description = "Verify Team does not exist";
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

function tryToDeleteANonExistingTeam(id, org) {
  var url = "/teams/" + id;
  var description = "Verify we cannot delete non-existing Team";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedTeam(id, org) {
  var expectedDesc = "Create team in organization " + org;
  return bp.EventSet("matchAddedTeam", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ team\ in\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ team\ in\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["org"];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create team") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForTeamAdded(id, org) {
  var expectedDesc = "Create team in organization " + org;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedTeam(id, org) {
  var expectedDesc = "Delete team " + id;
  return bp.EventSet("matchDeletedTeam", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ team\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: hook ----

function adminCreateHook(id) {
  var url = "/admin/hooks";
  var description = "Create hook";
  var body = {
    "id": String(id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function adminGetHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Get hook with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function adminEditHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Update hook with id " + id;
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function adminDeleteHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Delete hook with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingHook(id) {
  var url = "/admin/hooks";
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another Hook...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyHookExists(id) {
  var url = "/admin/hooks";
  var description = "Verify Hook exists";
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

function verifyHookDoesNotExist(id) {
  var url = "/admin/hooks";
  var description = "Verify Hook does not exist";
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

function tryToDeleteANonExistingHook(id) {
  var url = "/admin/hooks/" + id;
  var description = "Verify we cannot delete non-existing Hook";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedHook(id) {
  var expectedDesc = "Create hook";
  return bp.EventSet("matchAddedHook", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create hook") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForHookAdded(id) {
  var expectedDesc = "Create hook";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedHook(id) {
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

// ---- Entity: secret ----

function updateOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Create or update secret " + secretname + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , secretname: String(secretname)
    }
  });
}

function deleteOrgSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Delete secret " + secretname + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Secret...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifySecretExists(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify Secret exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Secret exists");
          }
        }
      }
      return pvg.fail("Expected Secret to exist but it does not");
    }
  });
}

function verifySecretDoesNotExist(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify Secret does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Secret to not exist but it does");
          }
        }
      }
      return pvg.success("Secret does not exist");
    }
  });
}

function tryToDeleteANonExistingSecret(org, secretname) {
  var url = "/orgs/" + org + "/actions/secrets/" + secretname;
  var description = "Verify we cannot delete non-existing Secret";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedSecret(org, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in organization " + org;
  return bp.EventSet("matchAddedSecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySecretAdded() {
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

function getSecretAddedEvent(keyVal) {
  return bp.EventSet("AddSecret:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnySecretAdded() {
  return bp.EventSet("matchAnySecretAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create secret") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForSecretAdded(org, secretname) {
  var expectedDesc = "Create or update secret " + secretname + " in organization " + org;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedSecret(org, secretname) {
  var expectedDesc = "Delete secret " + secretname + " in organization " + org;
  return bp.EventSet("matchDeletedSecret", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySecretDeleted() {
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

// ---- Entity: variable ----

function createOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Create variable " + variablename + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , variablename: String(variablename)
    }
  });
}

function getOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Get variable " + variablename + " in organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Update variable " + variablename + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      org: String(org)
      , variablename: String(variablename)
    }
  });
}

function deleteOrgVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Delete variable " + variablename + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Variable...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyVariableExists(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify Variable exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.success("Variable exists");
          }
        }
      }
      return pvg.fail("Expected Variable to exist but it does not");
    }
  });
}

function verifyVariableDoesNotExist(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify Variable does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].org) === String(org)) {
            return pvg.fail("Expected Variable to not exist but it does");
          }
        }
      }
      return pvg.success("Variable does not exist");
    }
  });
}

function tryToDeleteANonExistingVariable(org, variablename) {
  var url = "/orgs/" + org + "/actions/variables/" + variablename;
  var description = "Verify we cannot delete non-existing Variable";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedVariable(org, variablename) {
  var expectedDesc = "Create variable " + variablename + " in organization " + org;
  return bp.EventSet("matchAddedVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyVariableAdded() {
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

function getVariableAddedEvent(keyVal) {
  return bp.EventSet("AddVariable:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.org) === String(keyVal);
  });
}

function matchAnyVariableAdded() {
  return bp.EventSet("matchAnyVariableAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create variable") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForVariableAdded(org, variablename) {
  var expectedDesc = "Create variable " + variablename + " in organization " + org;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedVariable(org, variablename) {
  var expectedDesc = "Delete variable " + variablename + " in organization " + org;
  return bp.EventSet("matchDeletedVariable", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyVariableDeleted() {
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

// ---- Entity: member ----

function orgIsMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Check if user " + username + " is member of organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function orgDeleteMember(org, username) {
  var url = "/orgs/" + org + "/members/" + username;
  var description = "Remove user " + username + " from organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function verifyMemberExists(org, username) {
  var url = "/orgs";
  var description = "Verify Member exists";
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
  var description = "Verify Member does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedMember(org, username) {
  var expectedDesc = "Remove user " + username + " from organization " + org;
  return bp.EventSet("matchDeletedMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ from\ organization\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ from\ organization\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username", "org"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: public member ----

function orgIsPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Check if user " + username + " is public member of organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function orgPublicizeMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Publicize membership of user " + username + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
}

function orgConcealMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Conceal membership of user " + username + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingPublicMember(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another PublicMember...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPublicMemberExists(org, username) {
  var url = "/orgs/" + org + "/public_members/" + username;
  var description = "Verify PublicMember exists";
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
  var description = "Verify PublicMember does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedPublicMember(org, username) {
  var expectedDesc = "Publicize membership of user " + username + " in organization " + org;
  return bp.EventSet("matchAddedPublicMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create public member") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForPublicMemberAdded(org, username) {
  var expectedDesc = "Publicize membership of user " + username + " in organization " + org;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: block ----

function organizationCheckUserBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Check if user " + username + " is blocked by organization " + org;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function organizationBlockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Block user " + username + " in organization " + org;
  var body = {
    "org": String(org),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      org: String(org)
      , username: String(username)
    }
  });
}

function organizationUnblockUser(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Unblock user " + username + " in organization " + org;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var body = {
    "org": String(org)
  };
  var description = "Verify that we cannot add another Block...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyBlockExists(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block exists";
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

function verifyBlockDoesNotExist(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify Block does not exist";
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

function tryToDeleteANonExistingBlock(org, username) {
  var url = "/orgs/" + org + "/blocks/" + username;
  var description = "Verify we cannot delete non-existing Block";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedBlock(org, username) {
  var expectedDesc = "Block user " + username + " in organization " + org;
  return bp.EventSet("matchAddedBlock", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create block") > -1 && e.data.parameters.org !== undefined);
  });
}

function waitForBlockAdded(org, username) {
  var expectedDesc = "Block user " + username + " in organization " + org;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedBlock(org, username) {
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

// ---- Entity: team member ----

function orgAddTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Add user " + username + " to team " + id;
  var body = {
    "id": String(id),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , username: String(username)
    }
  });
}

function orgListTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Get user " + username + " in team " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function orgRemoveTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Remove user " + username + " from team " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingTeamMember(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another TeamMember...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTeamMemberExists(id, username) {
  var url = "/teams/" + id + "/members/" + username;
  var description = "Verify TeamMember exists";
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
  var description = "Verify TeamMember does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedTeamMember(id, username) {
  var expectedDesc = "Add user " + username + " to team " + id;
  return bp.EventSet("matchAddedTeamMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamMemberAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ (.+)\ to\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ (.+)\ to\ team\ (.+)$/);
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create team member") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForTeamMemberAdded(id, username) {
  var expectedDesc = "Add user " + username + " to team " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedTeamMember(id, username) {
  var expectedDesc = "Remove user " + username + " from team " + id;
  return bp.EventSet("matchDeletedTeamMember", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyTeamMemberDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ from\ team\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ from\ team\ (.+)$/);
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
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      id: String(id)
      , org: String(org)
      , repo: String(repo)
    }
  });
}

function orgListTeamRepo(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Get repository " + repo + " from organization " + org + " in team " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function orgRemoveTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Remove repository " + repo + " from organization " + org + " from team " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingTeamRepository(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var body = {
    "id": String(id)
  };
  var description = "Verify that we cannot add another TeamRepository...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyTeamRepositoryExists(id, org, repo) {
  var url = "/teams/" + id + "/repos/" + org + "/" + repo;
  var description = "Verify TeamRepository exists";
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
  var description = "Verify TeamRepository does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedTeamRepository(id, org, repo) {
  var expectedDesc = "Add repository " + repo + " from organization " + org + " to team " + id;
  return bp.EventSet("matchAddedTeamRepository", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create team repository") > -1 && e.data.parameters.id !== undefined);
  });
}

function waitForTeamRepositoryAdded(id, org, repo) {
  var expectedDesc = "Add repository " + repo + " from organization " + org + " to team " + id;
  waitFor(matchesDescription(expectedDesc));
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

// ---- Entity: user ----

function adminCreateUser(username) {
  var url = "/admin/users";
  var description = "Create user";
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
    }
  });
}

function adminEditUser(username) {
  var url = "/admin/users/" + username;
  var description = "Edit user " + username;
  var body = {
    "username": String(username),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      username: String(username)
    }
  });
}

function adminDeleteUser(username) {
  var url = "/admin/users/" + username;
  var description = "Delete user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUser(username) {
  var url = "/admin/users";
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(username) {
  var url = "/admin/users";
  var description = "Verify User exists";
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

function verifyUserDoesNotExist(username) {
  var url = "/admin/users";
  var description = "Verify User does not exist";
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

function tryToDeleteANonExistingUser(username) {
  var url = "/admin/users/" + username;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(username) {
  var expectedDesc = "Create user";
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user$/));
  var m = ev.data.parameters.description.match(/^Create\ user$/);
  var captures = m.slice(1);
  var names = [];
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserAdded(username) {
  var expectedDesc = "Create user";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUser(username) {
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

// ---- Entity: user badge ----

function adminAddUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Add badge to user " + username;
  var body = {
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
    }
  });
}

function adminDeleteUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Remove badge from user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function adminListUserBadges(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "List badges of user " + username;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserBadge(username) {
  var url = "/admin/users/" + username + "/badges";
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another UserBadge...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserBadgeExists(username) {
  var url = "/admin/users/" + username + "/badges";
  var description = "Verify UserBadge exists";
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
  var description = "Verify UserBadge does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserBadge(username) {
  var expectedDesc = "Add badge to user " + username;
  return bp.EventSet("matchAddedUserBadge", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user badge") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserBadgeAdded(username) {
  var expectedDesc = "Add badge to user " + username;
  waitFor(matchesDescription(expectedDesc));
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
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      username: String(username)
      , id: String(id)
    }
  });
}

function adminDeleteUserPublicKey(id, username) {
  var url = "/admin/users/" + username + "/keys/" + id;
  var description = "Delete public key " + id + " for user " + username;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserPublicKey(id, username) {
  var url = "/admin/users/" + username + "/keys";
  var body = {
    "username": String(username)
  };
  var description = "Verify that we cannot add another UserPublicKey...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserPublicKeyExists(id, username) {
  var url = "/admin/users/" + username + "/keys";
  var description = "Verify UserPublicKey exists";
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
  var description = "Verify UserPublicKey does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserPublicKey(id, username) {
  var expectedDesc = "Add public key for user " + username;
  return bp.EventSet("matchAddedUserPublicKey", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user public key") > -1 && e.data.parameters.username !== undefined);
  });
}

function waitForUserPublicKeyAdded(id, username) {
  var expectedDesc = "Add public key for user " + username;
  waitFor(matchesDescription(expectedDesc));
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
    expectedResponseCodes: [],
    parameters: {
      description: description,
      , username: String(username)
    }
  });
}

// ---- Entity: notification ----

function getNotification(id, to-status) {
  var url = "/notifications/threads/" + id;
  var description = "Get notification thread by ID " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateNotification(id, to-status) {
  var url = "/notifications/threads/" + id;
  var description = "Mark notification thread " + id + " as read";
  var body = {
    "id": String(id),
  };
  svc.patch(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      id: String(id)
    }
  });
}

function verifyNotificationExists(id, to-status) {
  var url = "/notifications/threads";
  var description = "Verify Notification exists";
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
  var description = "Verify Notification does not exist";
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
  var description = "List users's notification threads";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateNotificationList(all, before, last_read_at, limit, page, since, status-types, subject-type, to-status) {
  var url = "/notifications";
  var description = "Mark notification threads as read, pinned or unread";
  var body = {
    "last_read_at": String(last_read_at),
    "all": String(all),
    "status-types": String(status-types),
    "to-status": String(to-status),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
    }
  });
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
    parameters: { description: description }
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
  var description = "List users's notification threads on repo " + owner + "/" + repo;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateRepoNotificationList(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos/" + owner + "/" + repo + "/notifications";
  var description = "Mark notification threads as read, pinned or unread on repo " + owner + "/" + repo;
  var body = {
    "owner": String(owner),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      owner: String(owner)
      , repo: String(repo)
    }
  });
}

function verifyRepoNotificationListExists(all, before, last_read_at, limit, owner, page, repo, since, status-types, subject-type, to-status) {
  var url = "/repos";
  var description = "Verify RepoNotificationList exists";
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
  var description = "Verify RepoNotificationList does not exist";
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

// ---- Entity: api settings ----

function getGeneralAPISettings() {
  var url = "/settings/api";
  var description = "Get instance's global settings for api";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyAPISettingsExists() {
  var url = "/settings/api";
  var description = "Verify APISettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("APISettings exists");
          }
        }
      }
      return pvg.fail("Expected APISettings to exist but it does not");
    }
  });
}

function verifyAPISettingsDoesNotExist() {
  var url = "/settings/api";
  var description = "Verify APISettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected APISettings to not exist but it does");
          }
        }
      }
      return pvg.success("APISettings does not exist");
    }
  });
}

// ---- Entity: attachment settings ----

function getGeneralAttachmentSettings() {
  var url = "/settings/attachment";
  var description = "Get instance's global settings for Attachment";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyAttachmentSettingsExists() {
  var url = "/settings/attachment";
  var description = "Verify AttachmentSettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("AttachmentSettings exists");
          }
        }
      }
      return pvg.fail("Expected AttachmentSettings to exist but it does not");
    }
  });
}

function verifyAttachmentSettingsDoesNotExist() {
  var url = "/settings/attachment";
  var description = "Verify AttachmentSettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected AttachmentSettings to not exist but it does");
          }
        }
      }
      return pvg.success("AttachmentSettings does not exist");
    }
  });
}

// ---- Entity: repository settings ----

function getGeneralRepositorySettings() {
  var url = "/settings/repository";
  var description = "Get instance's global settings for repositories";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyRepositorySettingsExists() {
  var url = "/settings/repository";
  var description = "Verify RepositorySettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("RepositorySettings exists");
          }
        }
      }
      return pvg.fail("Expected RepositorySettings to exist but it does not");
    }
  });
}

function verifyRepositorySettingsDoesNotExist() {
  var url = "/settings/repository";
  var description = "Verify RepositorySettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected RepositorySettings to not exist but it does");
          }
        }
      }
      return pvg.success("RepositorySettings does not exist");
    }
  });
}

// ---- Entity: ui settings ----

function getGeneralUISettings() {
  var url = "/settings/ui";
  var description = "Get instance's global settings for ui";
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyUISettingsExists() {
  var url = "/settings/ui";
  var description = "Verify UISettings exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.success("UISettings exists");
          }
        }
      }
      return pvg.fail("Expected UISettings to exist but it does not");
    }
  });
}

function verifyUISettingsDoesNotExist() {
  var url = "/settings/ui";
  var description = "Verify UISettings does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (true) {
            return pvg.fail("Expected UISettings to not exist but it does");
          }
        }
      }
      return pvg.success("UISettings does not exist");
    }
  });
}

// ---- Entity: package ----

function getPackage(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Get package " + name + " of type " + type + " owned by " + owner + " with version " + version;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deletePackage(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version;
  var description = "Delete package " + name + " of type " + type + " owned by " + owner + " with version " + version;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function verifyPackageExists(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify Package exists";
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
  var description = "Verify Package does not exist";
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
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedPackage(name, owner, type, version) {
  var expectedDesc = "Delete package " + name + " of type " + type + " owned by " + owner + " with version " + version;
  return bp.EventSet("matchDeletedPackage", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPackageDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ package\ (.+)\ of\ type\ (.+)\ owned\ by\ (.+)\ with\ version\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ package\ (.+)\ of\ type\ (.+)\ owned\ by\ (.+)\ with\ version\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "type", "owner", "version"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: package list ----

function listPackages(limit, owner, page, q, type) {
  var url = "/packages/" + owner;
  var description = "List packages of owner " + owner + " filtered by type " + type + " and name " + q;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyPackageListExists(limit, owner, page, q, type) {
  var url = "/packages";
  var description = "Verify PackageList exists";
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
  var description = "Verify PackageList does not exist";
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

// ---- Entity: package files ----

function listPackageFiles(name, owner, type, version) {
  var url = "/packages/" + owner + "/" + type + "/" + name + "/" + version + "/files";
  var description = "List files of package " + name + " of type " + type + " owned by " + owner + " with version " + version;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function verifyPackageFilesExists(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify PackageFiles exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.success("PackageFiles exists");
          }
        }
      }
      return pvg.fail("Expected PackageFiles to exist but it does not");
    }
  });
}

function verifyPackageFilesDoesNotExist(name, owner, type, version) {
  var url = "/packages";
  var description = "Verify PackageFiles does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].owner) === String(owner)) {
            return pvg.fail("Expected PackageFiles to not exist but it does");
          }
        }
      }
      return pvg.success("PackageFiles does not exist");
    }
  });
}

// ---- Entity: person ----

function activitypubPerson(user-id) {
  var url = "/activitypub/user-id/" + user-id;
  var description = "Returns the Person actor for user " + user-id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function activitypubPersonInbox(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Send to the inbox of user " + user-id;
  var body = {
    "user-id": String(user-id),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      user-id: String(user-id)
    }
  });
}

function tryToAddExistingPerson(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var body = {
    "user-id": String(user-id)
  };
  var description = "Verify that we cannot add another Person...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyPersonExists(user-id) {
  var url = "/activitypub/user-id/" + user-id + "/inbox";
  var description = "Verify Person exists";
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
  var description = "Verify Person does not exist";
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
  var expectedDesc = "Send to the inbox of user " + user-id;
  return bp.EventSet("matchAddedPerson", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyPersonAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Send\ to\ the\ inbox\ of\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Send\ to\ the\ inbox\ of\ user\ (.+)$/);
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
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create person") > -1 && e.data.parameters.user-id !== undefined);
  });
}

function waitForPersonAdded(user-id) {
  var expectedDesc = "Send to the inbox of user " + user-id;
  waitFor(matchesDescription(expectedDesc));
}
