//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

// CHANGE (1): add default host/port placeholders before RESTSession
var host = (typeof host !== 'undefined') ? host : '192.168.225.39';
var port = (typeof port !== 'undefined') ? port : 5014;

const svc = new RESTSession("http://" + host + ":" + port, "provengo basedclient", {
  headers: { "Content-Type": "application/json" },
});

// Common helpers
function matchesDescription(text) {
  return bp.EventSet("desc-eq", function(e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === text);
  });
}
function matchesDescriptionRegex(rx) {
  return bp.EventSet("desc-rx", function(e) {
    if (!e || !e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return rx.test(e.data.parameters.description);
  });
}

/** === Activitypub Operations === */

// CREATE
function addActivitypub(user-id) {
  svc.post("/activitypub", {
      body: JSON.stringify({ user-id: user-id }),
      parameters: { description: "Add a activitypub with " + "user-id " + user-id }
    });
}

// DELETE
function deleteActivitypub(user-id) {
  svc.delete("/activitypub/" + user-id, {
    parameters: { description: "Delete a activitypub with " + "user-id " + user-id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingActivitypub(user-id) {
  svc.delete("/activitypub/" + user-id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a activitypub with " + "user-id " + user-id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingActivitypub(user-id) {
  svc.post("/activitypub", {
      body: JSON.stringify({ user-id: user-id }),
      parameters: { description: "Add a activitypub with " + "user-id " + user-id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a activitypub with " + "user-id " + user-id }
  });
}

// UPDATE
function updateActivitypub(user-id) {
  svc.put("/activitypub/" + user-id, {
      body: JSON.stringify({ user-id: user-id }),
      parameters: { description: "Update a activitypub with " + "user-id " + user-id }
    });
}

// GET one
function getActivitypub(user-id) {
  svc.get("/activitypub/" + user-id, {
    parameters: { description: "Get a activitypub with " + "user-id " + user-id }
  });
}

// LIST all
function listActivitypub() {
  svc.get("/activitypub", {
    parameters: { description: "List activitypub" }
  });
}

// Verify exists (by list)
function verifyActivitypubExists(user-id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].user-id === user-id) {
          return pvg.success("Activitypub exists");
        }
      }
      return pvg.fail("Expected a activitypub to exist but it does not");
    },
    parameters: { description: "Verify activitypub with " + "user-id " + user-id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyActivitypubDoesNotExist(user-id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].user-id === user-id) {
          return pvg.fail("Expected a activitypub to not exist but it does");
        }
      }
      return pvg.success("Activitypub does not exist");
    },
    parameters: { description: "Verify activitypub with " + "user-id " + user-id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddActivitypub() {
  return bp.EventSet("any-add-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a activitypub");
  });
}
function matchAddActivitypub(user-id) {
  return bp.EventSet("add-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a activitypub with " + "user-id " + user-id;
  });
}
function matchAnyDeleteActivitypub() {
  return bp.EventSet("any-del-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a activitypub");
  });
}
function matchDeleteActivitypub(user-id) {
  return bp.EventSet("del-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a activitypub with " + "user-id " + user-id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateActivitypub() {
  return bp.EventSet("any-update-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a activitypub");
  });
}
function matchUpdateActivitypub(user-id) {
  return bp.EventSet("update-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a activitypub with " + "user-id " + user-id;
  });
}

// Wait helpers
function waitForAnyActivitypubAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ activitypub\ with\ user\-id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ activitypub\ with\ user\-id\ (.+)$/);
    return { user-id: m[1] };
}
function waitForActivitypubAdded(user-id) {
  waitFor(matchAddActivitypub(user-id));
}
function waitForActivitypubDeleted(user-id) {
  waitFor(matchDeleteActivitypub(user-id));
}
function waitForAnyActivitypubDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ activitypub\ with\ user\-id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ activitypub\ with\ user\-id\ (.+)$/);
    return { user-id: m[1] };
}
function waitForActivitypubUpdated(user-id) {
  waitFor(matchUpdateActivitypub(user-id));
}
function waitForAnyActivitypubUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ activitypub\ with\ user\-id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ activitypub\ with\ user\-id\ (.+)$/);
    return { user-id: m[1] };
}

// Verify updated (presence-by-list)
function verifyActivitypubUpdated(user-id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].user-id === user-id) {
          return pvg.success("Activitypub updated (present)");
        }
      }
      return pvg.fail("Expected a activitypub to be present after update, but it is not");
    },
    parameters: { description: "Verify activitypub with " + "user-id " + user-id + " exists" }
  });
}


/** === Admin Operations === */

// CREATE
function addAdmin(username, id, owner, repo, task) {
  svc.post("/admin", {
      body: JSON.stringify({ username: username, id: id, owner: owner, repo: repo, task: task }),
      parameters: { description: "Add a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
    });
}

// DELETE
function deleteAdmin(username, id, owner, repo, task) {
  svc.delete("/admin/" + username + "/"+ id + "/"+ owner + "/"+ repo + "/"+ task, {
    parameters: { description: "Delete a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAdmin(username, id, owner, repo, task) {
  svc.delete("/admin/" + username + "/"+ id + "/"+ owner + "/"+ repo + "/"+ task, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAdmin(username, id, owner, repo, task) {
  svc.post("/admin", {
      body: JSON.stringify({ username: username, id: id, owner: owner, repo: repo, task: task }),
      parameters: { description: "Add a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
  });
}

// UPDATE
function updateAdmin(username, id, owner, repo, task) {
  svc.put("/admin/" + username + "/"+ id + "/"+ owner + "/"+ repo + "/"+ task, {
      body: JSON.stringify({ username: username, id: id, owner: owner, repo: repo, task: task }),
      parameters: { description: "Update a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
    });
}

// GET one
function getAdmin(username, id, owner, repo, task) {
  svc.get("/admin/" + username + "/"+ id + "/"+ owner + "/"+ repo + "/"+ task, {
    parameters: { description: "Get a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task }
  });
}

// LIST all
function listAdmin() {
  svc.get("/admin", {
    parameters: { description: "List admin" }
  });
}

// Verify exists (by list)
function verifyAdminExists(username, id, owner, repo, task) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].username === username && admin[i].id === id && admin[i].owner === owner && admin[i].repo === repo && admin[i].task === task) {
          return pvg.success("Admin exists");
        }
      }
      return pvg.fail("Expected a admin to exist but it does not");
    },
    parameters: { description: "Verify admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAdminDoesNotExist(username, id, owner, repo, task) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].username === username && admin[i].id === id && admin[i].owner === owner && admin[i].repo === repo && admin[i].task === task) {
          return pvg.fail("Expected a admin to not exist but it does");
        }
      }
      return pvg.success("Admin does not exist");
    },
    parameters: { description: "Verify admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAdmin() {
  return bp.EventSet("any-add-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a admin");
  });
}
function matchAddAdmin(username, id, owner, repo, task) {
  return bp.EventSet("add-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task;
  });
}
function matchAnyDeleteAdmin() {
  return bp.EventSet("any-del-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a admin");
  });
}
function matchDeleteAdmin(username, id, owner, repo, task) {
  return bp.EventSet("del-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAdmin() {
  return bp.EventSet("any-update-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a admin");
  });
}
function matchUpdateAdmin(username, id, owner, repo, task) {
  return bp.EventSet("update-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task;
  });
}

// Wait helpers
function waitForAnyAdminAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/);
    return { username: m[1], id: parseInt(m[2]), owner: m[3], repo: m[4], task: m[5] };
}
function waitForAdminAdded(username, id, owner, repo, task) {
  waitFor(matchAddAdmin(username, id, owner, repo, task));
}
function waitForAdminDeleted(username, id, owner, repo, task) {
  waitFor(matchDeleteAdmin(username, id, owner, repo, task));
}
function waitForAnyAdminDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/);
    return { username: m[1], id: parseInt(m[2]), owner: m[3], repo: m[4], task: m[5] };
}
function waitForAdminUpdated(username, id, owner, repo, task) {
  waitFor(matchUpdateAdmin(username, id, owner, repo, task));
}
function waitForAnyAdminUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ admin\ with\ username\ (.+) and id\ (.+) and owner\ (.+) and repo\ (.+) and task\ (.+)$/);
    return { username: m[1], id: parseInt(m[2]), owner: m[3], repo: m[4], task: m[5] };
}

// Verify updated (presence-by-list)
function verifyAdminUpdated(username, id, owner, repo, task) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].username === username && admin[i].id === id && admin[i].owner === owner && admin[i].repo === repo && admin[i].task === task) {
          return pvg.success("Admin updated (present)");
        }
      }
      return pvg.fail("Expected a admin to be present after update, but it is not");
    },
    parameters: { description: "Verify admin with " + "username " + username + " and " + "id " + id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "task " + task + " exists" }
  });
}


/** === Gitignore Operations === */

// CREATE
function addGitignore(name) {
  svc.post("/gitignore", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a gitignore with " + "name " + name }
    });
}

// DELETE
function deleteGitignore(name) {
  svc.delete("/gitignore/" + name, {
    parameters: { description: "Delete a gitignore with " + "name " + name }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGitignore(name) {
  svc.delete("/gitignore/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gitignore with " + "name " + name }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGitignore(name) {
  svc.post("/gitignore", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a gitignore with " + "name " + name }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gitignore with " + "name " + name }
  });
}

// UPDATE
function updateGitignore(name) {
  svc.put("/gitignore/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a gitignore with " + "name " + name }
    });
}

// GET one
function getGitignore(name) {
  svc.get("/gitignore/" + name, {
    parameters: { description: "Get a gitignore with " + "name " + name }
  });
}

// LIST all
function listGitignore() {
  svc.get("/gitignore", {
    parameters: { description: "List gitignore" }
  });
}

// Verify exists (by list)
function verifyGitignoreExists(name) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].name === name) {
          return pvg.success("Gitignore exists");
        }
      }
      return pvg.fail("Expected a gitignore to exist but it does not");
    },
    parameters: { description: "Verify gitignore with " + "name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGitignoreDoesNotExist(name) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].name === name) {
          return pvg.fail("Expected a gitignore to not exist but it does");
        }
      }
      return pvg.success("Gitignore does not exist");
    },
    parameters: { description: "Verify gitignore with " + "name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGitignore() {
  return bp.EventSet("any-add-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a gitignore");
  });
}
function matchAddGitignore(name) {
  return bp.EventSet("add-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a gitignore with " + "name " + name;
  });
}
function matchAnyDeleteGitignore() {
  return bp.EventSet("any-del-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a gitignore");
  });
}
function matchDeleteGitignore(name) {
  return bp.EventSet("del-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a gitignore with " + "name " + name;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateGitignore() {
  return bp.EventSet("any-update-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a gitignore");
  });
}
function matchUpdateGitignore(name) {
  return bp.EventSet("update-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a gitignore with " + "name " + name;
  });
}

// Wait helpers
function waitForAnyGitignoreAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ gitignore\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ gitignore\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForGitignoreAdded(name) {
  waitFor(matchAddGitignore(name));
}
function waitForGitignoreDeleted(name) {
  waitFor(matchDeleteGitignore(name));
}
function waitForAnyGitignoreDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ gitignore\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ gitignore\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForGitignoreUpdated(name) {
  waitFor(matchUpdateGitignore(name));
}
function waitForAnyGitignoreUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ gitignore\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ gitignore\ with\ name\ (.+)$/);
    return { name: m[1] };
}

// Verify updated (presence-by-list)
function verifyGitignoreUpdated(name) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].name === name) {
          return pvg.success("Gitignore updated (present)");
        }
      }
      return pvg.fail("Expected a gitignore to be present after update, but it is not");
    },
    parameters: { description: "Verify gitignore with " + "name " + name + " exists" }
  });
}


/** === Label Operations === */

// CREATE
function addLabel(name) {
  svc.post("/label", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a label with " + "name " + name }
    });
}

// DELETE
function deleteLabel(name) {
  svc.delete("/label/" + name, {
    parameters: { description: "Delete a label with " + "name " + name }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLabel(name) {
  svc.delete("/label/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a label with " + "name " + name }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLabel(name) {
  svc.post("/label", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a label with " + "name " + name }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a label with " + "name " + name }
  });
}

// UPDATE
function updateLabel(name) {
  svc.put("/label/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a label with " + "name " + name }
    });
}

// GET one
function getLabel(name) {
  svc.get("/label/" + name, {
    parameters: { description: "Get a label with " + "name " + name }
  });
}

// LIST all
function listLabel() {
  svc.get("/label", {
    parameters: { description: "List label" }
  });
}

// Verify exists (by list)
function verifyLabelExists(name) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].name === name) {
          return pvg.success("Label exists");
        }
      }
      return pvg.fail("Expected a label to exist but it does not");
    },
    parameters: { description: "Verify label with " + "name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLabelDoesNotExist(name) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].name === name) {
          return pvg.fail("Expected a label to not exist but it does");
        }
      }
      return pvg.success("Label does not exist");
    },
    parameters: { description: "Verify label with " + "name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLabel() {
  return bp.EventSet("any-add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a label");
  });
}
function matchAddLabel(name) {
  return bp.EventSet("add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a label with " + "name " + name;
  });
}
function matchAnyDeleteLabel() {
  return bp.EventSet("any-del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a label");
  });
}
function matchDeleteLabel(name) {
  return bp.EventSet("del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a label with " + "name " + name;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLabel() {
  return bp.EventSet("any-update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a label");
  });
}
function matchUpdateLabel(name) {
  return bp.EventSet("update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a label with " + "name " + name;
  });
}

// Wait helpers
function waitForAnyLabelAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ label\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ label\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForLabelAdded(name) {
  waitFor(matchAddLabel(name));
}
function waitForLabelDeleted(name) {
  waitFor(matchDeleteLabel(name));
}
function waitForAnyLabelDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ label\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ label\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForLabelUpdated(name) {
  waitFor(matchUpdateLabel(name));
}
function waitForAnyLabelUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ label\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ label\ with\ name\ (.+)$/);
    return { name: m[1] };
}

// Verify updated (presence-by-list)
function verifyLabelUpdated(name) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].name === name) {
          return pvg.success("Label updated (present)");
        }
      }
      return pvg.fail("Expected a label to be present after update, but it is not");
    },
    parameters: { description: "Verify label with " + "name " + name + " exists" }
  });
}


/** === License Operations === */

// CREATE
function addLicense(name) {
  svc.post("/licenses", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a license with " + "name " + name }
    });
}

// DELETE
function deleteLicense(name) {
  svc.delete("/licenses/" + name, {
    parameters: { description: "Delete a license with " + "name " + name }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLicense(name) {
  svc.delete("/licenses/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a license with " + "name " + name }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLicense(name) {
  svc.post("/licenses", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a license with " + "name " + name }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a license with " + "name " + name }
  });
}

// UPDATE
function updateLicense(name) {
  svc.put("/licenses/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a license with " + "name " + name }
    });
}

// GET one
function getLicense(name) {
  svc.get("/licenses/" + name, {
    parameters: { description: "Get a license with " + "name " + name }
  });
}

// LIST all
function listLicenses() {
  svc.get("/licenses", {
    parameters: { description: "List licenses" }
  });
}

// Verify exists (by list)
function verifyLicenseExists(name) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].name === name) {
          return pvg.success("License exists");
        }
      }
      return pvg.fail("Expected a license to exist but it does not");
    },
    parameters: { description: "Verify license with " + "name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLicenseDoesNotExist(name) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].name === name) {
          return pvg.fail("Expected a license to not exist but it does");
        }
      }
      return pvg.success("License does not exist");
    },
    parameters: { description: "Verify license with " + "name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLicense() {
  return bp.EventSet("any-add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a license");
  });
}
function matchAddLicense(name) {
  return bp.EventSet("add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a license with " + "name " + name;
  });
}
function matchAnyDeleteLicense() {
  return bp.EventSet("any-del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a license");
  });
}
function matchDeleteLicense(name) {
  return bp.EventSet("del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a license with " + "name " + name;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLicense() {
  return bp.EventSet("any-update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a license");
  });
}
function matchUpdateLicense(name) {
  return bp.EventSet("update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a license with " + "name " + name;
  });
}

// Wait helpers
function waitForAnyLicenseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ license\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ license\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForLicenseAdded(name) {
  waitFor(matchAddLicense(name));
}
function waitForLicenseDeleted(name) {
  waitFor(matchDeleteLicense(name));
}
function waitForAnyLicenseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ license\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ license\ with\ name\ (.+)$/);
    return { name: m[1] };
}
function waitForLicenseUpdated(name) {
  waitFor(matchUpdateLicense(name));
}
function waitForAnyLicenseUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ license\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ license\ with\ name\ (.+)$/);
    return { name: m[1] };
}

// Verify updated (presence-by-list)
function verifyLicenseUpdated(name) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].name === name) {
          return pvg.success("License updated (present)");
        }
      }
      return pvg.fail("Expected a license to be present after update, but it is not");
    },
    parameters: { description: "Verify license with " + "name " + name + " exists" }
  });
}


/** === Markdown Operations === */

// CREATE
function addMarkdown(id) {
  svc.post("/markdown", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markdown with " + "id " + id }
    });
}

// DELETE
function deleteMarkdown(id) {
  svc.delete("/markdown/" + id, {
    parameters: { description: "Delete a markdown with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarkdown(id) {
  svc.delete("/markdown/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a markdown with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarkdown(id) {
  svc.post("/markdown", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markdown with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a markdown with " + "id " + id }
  });
}

// UPDATE
function updateMarkdown(id) {
  svc.put("/markdown/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a markdown with " + "id " + id }
    });
}

// GET one
function getMarkdown(id) {
  svc.get("/markdown/" + id, {
    parameters: { description: "Get a markdown with " + "id " + id }
  });
}

// LIST all
function listMarkdown() {
  svc.get("/markdown", {
    parameters: { description: "List markdown" }
  });
}

// Verify exists (by list)
function verifyMarkdownExists(id) {
  svc.get("/markdown", {
    callback: function (response) {
      markdown = JSON.parse(response.body);
      for (let i = 0; i < markdown.length; i++) {
        if (markdown[i].id === id) {
          return pvg.success("Markdown exists");
        }
      }
      return pvg.fail("Expected a markdown to exist but it does not");
    },
    parameters: { description: "Verify markdown with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMarkdownDoesNotExist(id) {
  svc.get("/markdown", {
    callback: function (response) {
      markdown = JSON.parse(response.body);
      for (let i = 0; i < markdown.length; i++) {
        if (markdown[i].id === id) {
          return pvg.fail("Expected a markdown to not exist but it does");
        }
      }
      return pvg.success("Markdown does not exist");
    },
    parameters: { description: "Verify markdown with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMarkdown() {
  return bp.EventSet("any-add-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a markdown");
  });
}
function matchAddMarkdown(id) {
  return bp.EventSet("add-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a markdown with " + "id " + id;
  });
}
function matchAnyDeleteMarkdown() {
  return bp.EventSet("any-del-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a markdown");
  });
}
function matchDeleteMarkdown(id) {
  return bp.EventSet("del-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a markdown with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMarkdown() {
  return bp.EventSet("any-update-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a markdown");
  });
}
function matchUpdateMarkdown(id) {
  return bp.EventSet("update-markdown", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a markdown with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMarkdownAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ markdown\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ markdown\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarkdownAdded(id) {
  waitFor(matchAddMarkdown(id));
}
function waitForMarkdownDeleted(id) {
  waitFor(matchDeleteMarkdown(id));
}
function waitForAnyMarkdownDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ markdown\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ markdown\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarkdownUpdated(id) {
  waitFor(matchUpdateMarkdown(id));
}
function waitForAnyMarkdownUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ markdown\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ markdown\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMarkdownUpdated(id) {
  svc.get("/markdown", {
    callback: function (response) {
      markdown = JSON.parse(response.body);
      for (let i = 0; i < markdown.length; i++) {
        if (markdown[i].id === id) {
          return pvg.success("Markdown updated (present)");
        }
      }
      return pvg.fail("Expected a markdown to be present after update, but it is not");
    },
    parameters: { description: "Verify markdown with " + "id " + id + " exists" }
  });
}


/** === Markup Operations === */

// CREATE
function addMarkup(id) {
  svc.post("/markup", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markup with " + "id " + id }
    });
}

// DELETE
function deleteMarkup(id) {
  svc.delete("/markup/" + id, {
    parameters: { description: "Delete a markup with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarkup(id) {
  svc.delete("/markup/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a markup with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarkup(id) {
  svc.post("/markup", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markup with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a markup with " + "id " + id }
  });
}

// UPDATE
function updateMarkup(id) {
  svc.put("/markup/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a markup with " + "id " + id }
    });
}

// GET one
function getMarkup(id) {
  svc.get("/markup/" + id, {
    parameters: { description: "Get a markup with " + "id " + id }
  });
}

// LIST all
function listMarkup() {
  svc.get("/markup", {
    parameters: { description: "List markup" }
  });
}

// Verify exists (by list)
function verifyMarkupExists(id) {
  svc.get("/markup", {
    callback: function (response) {
      markup = JSON.parse(response.body);
      for (let i = 0; i < markup.length; i++) {
        if (markup[i].id === id) {
          return pvg.success("Markup exists");
        }
      }
      return pvg.fail("Expected a markup to exist but it does not");
    },
    parameters: { description: "Verify markup with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMarkupDoesNotExist(id) {
  svc.get("/markup", {
    callback: function (response) {
      markup = JSON.parse(response.body);
      for (let i = 0; i < markup.length; i++) {
        if (markup[i].id === id) {
          return pvg.fail("Expected a markup to not exist but it does");
        }
      }
      return pvg.success("Markup does not exist");
    },
    parameters: { description: "Verify markup with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMarkup() {
  return bp.EventSet("any-add-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a markup");
  });
}
function matchAddMarkup(id) {
  return bp.EventSet("add-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a markup with " + "id " + id;
  });
}
function matchAnyDeleteMarkup() {
  return bp.EventSet("any-del-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a markup");
  });
}
function matchDeleteMarkup(id) {
  return bp.EventSet("del-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a markup with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMarkup() {
  return bp.EventSet("any-update-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a markup");
  });
}
function matchUpdateMarkup(id) {
  return bp.EventSet("update-markup", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a markup with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMarkupAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ markup\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ markup\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarkupAdded(id) {
  waitFor(matchAddMarkup(id));
}
function waitForMarkupDeleted(id) {
  waitFor(matchDeleteMarkup(id));
}
function waitForAnyMarkupDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ markup\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ markup\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarkupUpdated(id) {
  waitFor(matchUpdateMarkup(id));
}
function waitForAnyMarkupUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ markup\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ markup\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMarkupUpdated(id) {
  svc.get("/markup", {
    callback: function (response) {
      markup = JSON.parse(response.body);
      for (let i = 0; i < markup.length; i++) {
        if (markup[i].id === id) {
          return pvg.success("Markup updated (present)");
        }
      }
      return pvg.fail("Expected a markup to be present after update, but it is not");
    },
    parameters: { description: "Verify markup with " + "id " + id + " exists" }
  });
}


/** === Nodeinfo Operations === */

// CREATE
function addNodeinfo(id) {
  svc.post("/nodeinfo", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a nodeinfo with " + "id " + id }
    });
}

// DELETE
function deleteNodeinfo(id) {
  svc.delete("/nodeinfo/" + id, {
    parameters: { description: "Delete a nodeinfo with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNodeinfo(id) {
  svc.delete("/nodeinfo/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a nodeinfo with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNodeinfo(id) {
  svc.post("/nodeinfo", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a nodeinfo with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a nodeinfo with " + "id " + id }
  });
}

// UPDATE
function updateNodeinfo(id) {
  svc.put("/nodeinfo/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a nodeinfo with " + "id " + id }
    });
}

// GET one
function getNodeinfo(id) {
  svc.get("/nodeinfo/" + id, {
    parameters: { description: "Get a nodeinfo with " + "id " + id }
  });
}

// LIST all
function listNodeinfo() {
  svc.get("/nodeinfo", {
    parameters: { description: "List nodeinfo" }
  });
}

// Verify exists (by list)
function verifyNodeinfoExists(id) {
  svc.get("/nodeinfo", {
    callback: function (response) {
      nodeinfo = JSON.parse(response.body);
      for (let i = 0; i < nodeinfo.length; i++) {
        if (nodeinfo[i].id === id) {
          return pvg.success("Nodeinfo exists");
        }
      }
      return pvg.fail("Expected a nodeinfo to exist but it does not");
    },
    parameters: { description: "Verify nodeinfo with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNodeinfoDoesNotExist(id) {
  svc.get("/nodeinfo", {
    callback: function (response) {
      nodeinfo = JSON.parse(response.body);
      for (let i = 0; i < nodeinfo.length; i++) {
        if (nodeinfo[i].id === id) {
          return pvg.fail("Expected a nodeinfo to not exist but it does");
        }
      }
      return pvg.success("Nodeinfo does not exist");
    },
    parameters: { description: "Verify nodeinfo with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNodeinfo() {
  return bp.EventSet("any-add-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a nodeinfo");
  });
}
function matchAddNodeinfo(id) {
  return bp.EventSet("add-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a nodeinfo with " + "id " + id;
  });
}
function matchAnyDeleteNodeinfo() {
  return bp.EventSet("any-del-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a nodeinfo");
  });
}
function matchDeleteNodeinfo(id) {
  return bp.EventSet("del-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a nodeinfo with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNodeinfo() {
  return bp.EventSet("any-update-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a nodeinfo");
  });
}
function matchUpdateNodeinfo(id) {
  return bp.EventSet("update-nodeinfo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a nodeinfo with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyNodeinfoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ nodeinfo\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ nodeinfo\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForNodeinfoAdded(id) {
  waitFor(matchAddNodeinfo(id));
}
function waitForNodeinfoDeleted(id) {
  waitFor(matchDeleteNodeinfo(id));
}
function waitForAnyNodeinfoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ nodeinfo\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ nodeinfo\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForNodeinfoUpdated(id) {
  waitFor(matchUpdateNodeinfo(id));
}
function waitForAnyNodeinfoUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ nodeinfo\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ nodeinfo\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyNodeinfoUpdated(id) {
  svc.get("/nodeinfo", {
    callback: function (response) {
      nodeinfo = JSON.parse(response.body);
      for (let i = 0; i < nodeinfo.length; i++) {
        if (nodeinfo[i].id === id) {
          return pvg.success("Nodeinfo updated (present)");
        }
      }
      return pvg.fail("Expected a nodeinfo to be present after update, but it is not");
    },
    parameters: { description: "Verify nodeinfo with " + "id " + id + " exists" }
  });
}


/** === Notification Operations === */

// CREATE
function addNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with " + "id " + id }
    });
}

// DELETE
function deleteNotification(id) {
  svc.delete("/notifications/" + id, {
    parameters: { description: "Delete a notification with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNotification(id) {
  svc.delete("/notifications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a notification with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a notification with " + "id " + id }
  });
}

// UPDATE
function updateNotification(id) {
  svc.put("/notifications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a notification with " + "id " + id }
    });
}

// GET one
function getNotification(id) {
  svc.get("/notifications/" + id, {
    parameters: { description: "Get a notification with " + "id " + id }
  });
}

// LIST all
function listNotifications() {
  svc.get("/notifications", {
    parameters: { description: "List notifications" }
  });
}

// Verify exists (by list)
function verifyNotificationExists(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.success("Notification exists");
        }
      }
      return pvg.fail("Expected a notification to exist but it does not");
    },
    parameters: { description: "Verify notification with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNotificationDoesNotExist(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.fail("Expected a notification to not exist but it does");
        }
      }
      return pvg.success("Notification does not exist");
    },
    parameters: { description: "Verify notification with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNotification() {
  return bp.EventSet("any-add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a notification");
  });
}
function matchAddNotification(id) {
  return bp.EventSet("add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a notification with " + "id " + id;
  });
}
function matchAnyDeleteNotification() {
  return bp.EventSet("any-del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a notification");
  });
}
function matchDeleteNotification(id) {
  return bp.EventSet("del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a notification with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNotification() {
  return bp.EventSet("any-update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a notification");
  });
}
function matchUpdateNotification(id) {
  return bp.EventSet("update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a notification with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyNotificationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForNotificationAdded(id) {
  waitFor(matchAddNotification(id));
}
function waitForNotificationDeleted(id) {
  waitFor(matchDeleteNotification(id));
}
function waitForAnyNotificationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForNotificationUpdated(id) {
  waitFor(matchUpdateNotification(id));
}
function waitForAnyNotificationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ notification\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ notification\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyNotificationUpdated(id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].id === id) {
          return pvg.success("Notification updated (present)");
        }
      }
      return pvg.fail("Expected a notification to be present after update, but it is not");
    },
    parameters: { description: "Verify notification with " + "id " + id + " exists" }
  });
}


/** === Org Operations === */

// CREATE
function addOrg(org) {
  svc.post("/org", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with " + "org " + org }
    });
}

// DELETE
function deleteOrg(org) {
  svc.delete("/org/" + org, {
    parameters: { description: "Delete a org with " + "org " + org }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org) {
  svc.delete("/org/" + org, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with " + "org " + org }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org) {
  svc.post("/org", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with " + "org " + org }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with " + "org " + org }
  });
}

// UPDATE
function updateOrg(org) {
  svc.put("/org/" + org, {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Update a org with " + "org " + org }
    });
}

// GET one
function getOrg(org) {
  svc.get("/org/" + org, {
    parameters: { description: "Get a org with " + "org " + org }
  });
}

// LIST all
function listOrg() {
  svc.get("/org", {
    parameters: { description: "List org" }
  });
}

// Verify exists (by list)
function verifyOrgExists(org) {
  svc.get("/org", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org) {
          return pvg.success("Org exists");
        }
      }
      return pvg.fail("Expected a org to exist but it does not");
    },
    parameters: { description: "Verify org with " + "org " + org + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrgDoesNotExist(org) {
  svc.get("/org", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org) {
          return pvg.fail("Expected a org to not exist but it does");
        }
      }
      return pvg.success("Org does not exist");
    },
    parameters: { description: "Verify org with " + "org " + org + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrg() {
  return bp.EventSet("any-add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a org");
  });
}
function matchAddOrg(org) {
  return bp.EventSet("add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a org with " + "org " + org;
  });
}
function matchAnyDeleteOrg() {
  return bp.EventSet("any-del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a org");
  });
}
function matchDeleteOrg(org) {
  return bp.EventSet("del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a org with " + "org " + org;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrg() {
  return bp.EventSet("any-update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a org");
  });
}
function matchUpdateOrg(org) {
  return bp.EventSet("update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a org with " + "org " + org;
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+)$/);
    return { org: m[1] };
}
function waitForOrgAdded(org) {
  waitFor(matchAddOrg(org));
}
function waitForOrgDeleted(org) {
  waitFor(matchDeleteOrg(org));
}
function waitForAnyOrgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ org\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ org\ with\ org\ (.+)$/);
    return { org: m[1] };
}
function waitForOrgUpdated(org) {
  waitFor(matchUpdateOrg(org));
}
function waitForAnyOrgUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ org\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ org\ with\ org\ (.+)$/);
    return { org: m[1] };
}

// Verify updated (presence-by-list)
function verifyOrgUpdated(org) {
  svc.get("/org", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org) {
          return pvg.success("Org updated (present)");
        }
      }
      return pvg.fail("Expected a org to be present after update, but it is not");
    },
    parameters: { description: "Verify org with " + "org " + org + " exists" }
  });
}


/** === Org Operations === */

// CREATE
function addOrg(org, username, id, variablename, secretname) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, username: username, id: id, variablename: variablename, secretname: secretname }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
    });
}

// DELETE
function deleteOrg(org, username, id, variablename, secretname) {
  svc.delete("/orgs/" + org + "/"+ username + "/"+ id + "/"+ variablename + "/"+ secretname, {
    parameters: { description: "Delete a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org, username, id, variablename, secretname) {
  svc.delete("/orgs/" + org + "/"+ username + "/"+ id + "/"+ variablename + "/"+ secretname, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org, username, id, variablename, secretname) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, username: username, id: id, variablename: variablename, secretname: secretname }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
  });
}

// UPDATE
function updateOrg(org, username, id, variablename, secretname) {
  svc.put("/orgs/" + org + "/"+ username + "/"+ id + "/"+ variablename + "/"+ secretname, {
      body: JSON.stringify({ org: org, username: username, id: id, variablename: variablename, secretname: secretname }),
      parameters: { description: "Update a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
    });
}

// GET one
function getOrg(org, username, id, variablename, secretname) {
  svc.get("/orgs/" + org + "/"+ username + "/"+ id + "/"+ variablename + "/"+ secretname, {
    parameters: { description: "Get a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname }
  });
}

// LIST all
function listOrgs() {
  svc.get("/orgs", {
    parameters: { description: "List orgs" }
  });
}

// Verify exists (by list)
function verifyOrgExists(org, username, id, variablename, secretname) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].username === username && org[i].id === id && org[i].variablename === variablename && org[i].secretname === secretname) {
          return pvg.success("Org exists");
        }
      }
      return pvg.fail("Expected a org to exist but it does not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrgDoesNotExist(org, username, id, variablename, secretname) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].username === username && org[i].id === id && org[i].variablename === variablename && org[i].secretname === secretname) {
          return pvg.fail("Expected a org to not exist but it does");
        }
      }
      return pvg.success("Org does not exist");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrg() {
  return bp.EventSet("any-add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a org");
  });
}
function matchAddOrg(org, username, id, variablename, secretname) {
  return bp.EventSet("add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname;
  });
}
function matchAnyDeleteOrg() {
  return bp.EventSet("any-del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a org");
  });
}
function matchDeleteOrg(org, username, id, variablename, secretname) {
  return bp.EventSet("del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrg() {
  return bp.EventSet("any-update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a org");
  });
}
function matchUpdateOrg(org, username, id, variablename, secretname) {
  return bp.EventSet("update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname;
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/);
    return { org: m[1], username: m[2], id: parseInt(m[3]), variablename: m[4], secretname: m[5] };
}
function waitForOrgAdded(org, username, id, variablename, secretname) {
  waitFor(matchAddOrg(org, username, id, variablename, secretname));
}
function waitForOrgDeleted(org, username, id, variablename, secretname) {
  waitFor(matchDeleteOrg(org, username, id, variablename, secretname));
}
function waitForAnyOrgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/);
    return { org: m[1], username: m[2], id: parseInt(m[3]), variablename: m[4], secretname: m[5] };
}
function waitForOrgUpdated(org, username, id, variablename, secretname) {
  waitFor(matchUpdateOrg(org, username, id, variablename, secretname));
}
function waitForAnyOrgUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ org\ with\ org\ (.+) and username\ (.+) and id\ (.+) and variablename\ (.+) and secretname\ (.+)$/);
    return { org: m[1], username: m[2], id: parseInt(m[3]), variablename: m[4], secretname: m[5] };
}

// Verify updated (presence-by-list)
function verifyOrgUpdated(org, username, id, variablename, secretname) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].username === username && org[i].id === id && org[i].variablename === variablename && org[i].secretname === secretname) {
          return pvg.success("Org updated (present)");
        }
      }
      return pvg.fail("Expected a org to be present after update, but it is not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "username " + username + " and " + "id " + id + " and " + "variablename " + variablename + " and " + "secretname " + secretname + " exists" }
  });
}


/** === Package Operations === */

// CREATE
function addPackage(owner, type, name, version) {
  svc.post("/packages", {
      body: JSON.stringify({ owner: owner, type: type, name: name, version: version }),
      parameters: { description: "Add a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
    });
}

// DELETE
function deletePackage(owner, type, name, version) {
  svc.delete("/packages/" + owner + "/"+ type + "/"+ name + "/"+ version, {
    parameters: { description: "Delete a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPackage(owner, type, name, version) {
  svc.delete("/packages/" + owner + "/"+ type + "/"+ name + "/"+ version, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPackage(owner, type, name, version) {
  svc.post("/packages", {
      body: JSON.stringify({ owner: owner, type: type, name: name, version: version }),
      parameters: { description: "Add a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
  });
}

// UPDATE
function updatePackage(owner, type, name, version) {
  svc.put("/packages/" + owner + "/"+ type + "/"+ name + "/"+ version, {
      body: JSON.stringify({ owner: owner, type: type, name: name, version: version }),
      parameters: { description: "Update a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
    });
}

// GET one
function getPackage(owner, type, name, version) {
  svc.get("/packages/" + owner + "/"+ type + "/"+ name + "/"+ version, {
    parameters: { description: "Get a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version }
  });
}

// LIST all
function listPackages() {
  svc.get("/packages", {
    parameters: { description: "List packages" }
  });
}

// Verify exists (by list)
function verifyPackageExists(owner, type, name, version) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].owner === owner && package[i].type === type && package[i].name === name && package[i].version === version) {
          return pvg.success("Package exists");
        }
      }
      return pvg.fail("Expected a package to exist but it does not");
    },
    parameters: { description: "Verify package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPackageDoesNotExist(owner, type, name, version) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].owner === owner && package[i].type === type && package[i].name === name && package[i].version === version) {
          return pvg.fail("Expected a package to not exist but it does");
        }
      }
      return pvg.success("Package does not exist");
    },
    parameters: { description: "Verify package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPackage() {
  return bp.EventSet("any-add-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a package");
  });
}
function matchAddPackage(owner, type, name, version) {
  return bp.EventSet("add-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version;
  });
}
function matchAnyDeletePackage() {
  return bp.EventSet("any-del-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a package");
  });
}
function matchDeletePackage(owner, type, name, version) {
  return bp.EventSet("del-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdatePackage() {
  return bp.EventSet("any-update-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a package");
  });
}
function matchUpdatePackage(owner, type, name, version) {
  return bp.EventSet("update-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version;
  });
}

// Wait helpers
function waitForAnyPackageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/);
    return { owner: m[1], type: m[2], name: m[3], version: m[4] };
}
function waitForPackageAdded(owner, type, name, version) {
  waitFor(matchAddPackage(owner, type, name, version));
}
function waitForPackageDeleted(owner, type, name, version) {
  waitFor(matchDeletePackage(owner, type, name, version));
}
function waitForAnyPackageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/);
    return { owner: m[1], type: m[2], name: m[3], version: m[4] };
}
function waitForPackageUpdated(owner, type, name, version) {
  waitFor(matchUpdatePackage(owner, type, name, version));
}
function waitForAnyPackageUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ package\ with\ owner\ (.+) and type\ (.+) and name\ (.+) and version\ (.+)$/);
    return { owner: m[1], type: m[2], name: m[3], version: m[4] };
}

// Verify updated (presence-by-list)
function verifyPackageUpdated(owner, type, name, version) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].owner === owner && package[i].type === type && package[i].name === name && package[i].version === version) {
          return pvg.success("Package updated (present)");
        }
      }
      return pvg.fail("Expected a package to be present after update, but it is not");
    },
    parameters: { description: "Verify package with " + "owner " + owner + " and " + "type " + type + " and " + "name " + name + " and " + "version " + version + " exists" }
  });
}


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, sha: sha, attachment_id: attachment_id, filepath: filepath, name: name, variablename: variablename, collaborator: collaborator, tag: tag, pageName: pageName, branch: branch, ref: ref, user: user, team: team, secretname: secretname, diffType: diffType, topic: topic, archive: archive, basehead: basehead, position: position, base: base, head: head, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    });
}

// DELETE
function deleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ sha + "/"+ attachment_id + "/"+ filepath + "/"+ name + "/"+ variablename + "/"+ collaborator + "/"+ tag + "/"+ pageName + "/"+ branch + "/"+ ref + "/"+ user + "/"+ team + "/"+ secretname + "/"+ diffType + "/"+ topic + "/"+ archive + "/"+ basehead + "/"+ position + "/"+ base + "/"+ head + "/"+ template_owner + "/"+ template_repo, {
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ sha + "/"+ attachment_id + "/"+ filepath + "/"+ name + "/"+ variablename + "/"+ collaborator + "/"+ tag + "/"+ pageName + "/"+ branch + "/"+ ref + "/"+ user + "/"+ team + "/"+ secretname + "/"+ diffType + "/"+ topic + "/"+ archive + "/"+ basehead + "/"+ position + "/"+ base + "/"+ head + "/"+ template_owner + "/"+ template_repo, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, sha: sha, attachment_id: attachment_id, filepath: filepath, name: name, variablename: variablename, collaborator: collaborator, tag: tag, pageName: pageName, branch: branch, ref: ref, user: user, team: team, secretname: secretname, diffType: diffType, topic: topic, archive: archive, basehead: basehead, position: position, base: base, head: head, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// UPDATE
function updateRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ sha + "/"+ attachment_id + "/"+ filepath + "/"+ name + "/"+ variablename + "/"+ collaborator + "/"+ tag + "/"+ pageName + "/"+ branch + "/"+ ref + "/"+ user + "/"+ team + "/"+ secretname + "/"+ diffType + "/"+ topic + "/"+ archive + "/"+ basehead + "/"+ position + "/"+ base + "/"+ head + "/"+ template_owner + "/"+ template_repo, {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, sha: sha, attachment_id: attachment_id, filepath: filepath, name: name, variablename: variablename, collaborator: collaborator, tag: tag, pageName: pageName, branch: branch, ref: ref, user: user, team: team, secretname: secretname, diffType: diffType, topic: topic, archive: archive, basehead: basehead, position: position, base: base, head: head, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    });
}

// GET one
function getRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ sha + "/"+ attachment_id + "/"+ filepath + "/"+ name + "/"+ variablename + "/"+ collaborator + "/"+ tag + "/"+ pageName + "/"+ branch + "/"+ ref + "/"+ user + "/"+ team + "/"+ secretname + "/"+ diffType + "/"+ topic + "/"+ archive + "/"+ basehead + "/"+ position + "/"+ base + "/"+ head + "/"+ template_owner + "/"+ template_repo, {
    parameters: { description: "Get a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// LIST all
function listRepos() {
  svc.get("/repos", {
    parameters: { description: "List repos" }
  });
}

// Verify exists (by list)
function verifyRepoExists(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].sha === sha && repo[i].attachment_id === attachment_id && repo[i].filepath === filepath && repo[i].name === name && repo[i].variablename === variablename && repo[i].collaborator === collaborator && repo[i].tag === tag && repo[i].pageName === pageName && repo[i].branch === branch && repo[i].ref === ref && repo[i].user === user && repo[i].team === team && repo[i].secretname === secretname && repo[i].diffType === diffType && repo[i].topic === topic && repo[i].archive === archive && repo[i].basehead === basehead && repo[i].position === position && repo[i].base === base && repo[i].head === head && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].sha === sha && repo[i].attachment_id === attachment_id && repo[i].filepath === filepath && repo[i].name === name && repo[i].variablename === variablename && repo[i].collaborator === collaborator && repo[i].tag === tag && repo[i].pageName === pageName && repo[i].branch === branch && repo[i].ref === ref && repo[i].user === user && repo[i].team === team && repo[i].secretname === secretname && repo[i].diffType === diffType && repo[i].topic === topic && repo[i].archive === archive && repo[i].basehead === basehead && repo[i].position === position && repo[i].base === base && repo[i].head === head && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRepo() {
  return bp.EventSet("any-update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a repo");
  });
}
function matchUpdateRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  return bp.EventSet("update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), sha: m[5], attachment_id: parseInt(m[6]), filepath: m[7], name: m[8], variablename: m[9], collaborator: m[10], tag: m[11], pageName: m[12], branch: m[13], ref: m[14], user: m[15], team: m[16], secretname: m[17], diffType: m[18], topic: m[19], archive: m[20], basehead: m[21], position: m[22], base: m[23], head: m[24], template_owner: m[25], template_repo: m[26] };
}
function waitForRepoAdded(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  waitFor(matchAddRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo));
}
function waitForRepoDeleted(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  waitFor(matchDeleteRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), sha: m[5], attachment_id: parseInt(m[6]), filepath: m[7], name: m[8], variablename: m[9], collaborator: m[10], tag: m[11], pageName: m[12], branch: m[13], ref: m[14], user: m[15], team: m[16], secretname: m[17], diffType: m[18], topic: m[19], archive: m[20], basehead: m[21], position: m[22], base: m[23], head: m[24], template_owner: m[25], template_repo: m[26] };
}
function waitForRepoUpdated(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  waitFor(matchUpdateRepo(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo));
}
function waitForAnyRepoUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and sha\ (.+) and attachment_id\ (.+) and filepath\ (.+) and name\ (.+) and variablename\ (.+) and collaborator\ (.+) and tag\ (.+) and pageName\ (.+) and branch\ (.+) and ref\ (.+) and user\ (.+) and team\ (.+) and secretname\ (.+) and diffType\ (.+) and topic\ (.+) and archive\ (.+) and basehead\ (.+) and position\ (.+) and base\ (.+) and head\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), sha: m[5], attachment_id: parseInt(m[6]), filepath: m[7], name: m[8], variablename: m[9], collaborator: m[10], tag: m[11], pageName: m[12], branch: m[13], ref: m[14], user: m[15], team: m[16], secretname: m[17], diffType: m[18], topic: m[19], archive: m[20], basehead: m[21], position: m[22], base: m[23], head: m[24], template_owner: m[25], template_repo: m[26] };
}

// Verify updated (presence-by-list)
function verifyRepoUpdated(owner, repo, index, id, sha, attachment_id, filepath, name, variablename, collaborator, tag, pageName, branch, ref, user, team, secretname, diffType, topic, archive, basehead, position, base, head, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].sha === sha && repo[i].attachment_id === attachment_id && repo[i].filepath === filepath && repo[i].name === name && repo[i].variablename === variablename && repo[i].collaborator === collaborator && repo[i].tag === tag && repo[i].pageName === pageName && repo[i].branch === branch && repo[i].ref === ref && repo[i].user === user && repo[i].team === team && repo[i].secretname === secretname && repo[i].diffType === diffType && repo[i].topic === topic && repo[i].archive === archive && repo[i].basehead === basehead && repo[i].position === position && repo[i].base === base && repo[i].head === head && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.success("Repo updated (present)");
        }
      }
      return pvg.fail("Expected a repo to be present after update, but it is not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "sha " + sha + " and " + "attachment_id " + attachment_id + " and " + "filepath " + filepath + " and " + "name " + name + " and " + "variablename " + variablename + " and " + "collaborator " + collaborator + " and " + "tag " + tag + " and " + "pageName " + pageName + " and " + "branch " + branch + " and " + "ref " + ref + " and " + "user " + user + " and " + "team " + team + " and " + "secretname " + secretname + " and " + "diffType " + diffType + " and " + "topic " + topic + " and " + "archive " + archive + " and " + "basehead " + basehead + " and " + "position " + position + " and " + "base " + base + " and " + "head " + head + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " exists" }
  });
}


/** === Repositorie Operations === */

// CREATE
function addRepositorie(id) {
  svc.post("/repositories", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a repositorie with " + "id " + id }
    });
}

// DELETE
function deleteRepositorie(id) {
  svc.delete("/repositories/" + id, {
    parameters: { description: "Delete a repositorie with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepositorie(id) {
  svc.delete("/repositories/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repositorie with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepositorie(id) {
  svc.post("/repositories", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a repositorie with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repositorie with " + "id " + id }
  });
}

// UPDATE
function updateRepositorie(id) {
  svc.put("/repositories/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a repositorie with " + "id " + id }
    });
}

// GET one
function getRepositorie(id) {
  svc.get("/repositories/" + id, {
    parameters: { description: "Get a repositorie with " + "id " + id }
  });
}

// LIST all
function listRepositories() {
  svc.get("/repositories", {
    parameters: { description: "List repositories" }
  });
}

// Verify exists (by list)
function verifyRepositorieExists(id) {
  svc.get("/repositories", {
    callback: function (response) {
      repositorie = JSON.parse(response.body);
      for (let i = 0; i < repositorie.length; i++) {
        if (repositorie[i].id === id) {
          return pvg.success("Repositorie exists");
        }
      }
      return pvg.fail("Expected a repositorie to exist but it does not");
    },
    parameters: { description: "Verify repositorie with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepositorieDoesNotExist(id) {
  svc.get("/repositories", {
    callback: function (response) {
      repositorie = JSON.parse(response.body);
      for (let i = 0; i < repositorie.length; i++) {
        if (repositorie[i].id === id) {
          return pvg.fail("Expected a repositorie to not exist but it does");
        }
      }
      return pvg.success("Repositorie does not exist");
    },
    parameters: { description: "Verify repositorie with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepositorie() {
  return bp.EventSet("any-add-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repositorie");
  });
}
function matchAddRepositorie(id) {
  return bp.EventSet("add-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repositorie with " + "id " + id;
  });
}
function matchAnyDeleteRepositorie() {
  return bp.EventSet("any-del-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repositorie");
  });
}
function matchDeleteRepositorie(id) {
  return bp.EventSet("del-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repositorie with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRepositorie() {
  return bp.EventSet("any-update-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a repositorie");
  });
}
function matchUpdateRepositorie(id) {
  return bp.EventSet("update-repositorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a repositorie with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyRepositorieAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repositorie\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repositorie\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRepositorieAdded(id) {
  waitFor(matchAddRepositorie(id));
}
function waitForRepositorieDeleted(id) {
  waitFor(matchDeleteRepositorie(id));
}
function waitForAnyRepositorieDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repositorie\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repositorie\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRepositorieUpdated(id) {
  waitFor(matchUpdateRepositorie(id));
}
function waitForAnyRepositorieUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ repositorie\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ repositorie\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRepositorieUpdated(id) {
  svc.get("/repositories", {
    callback: function (response) {
      repositorie = JSON.parse(response.body);
      for (let i = 0; i < repositorie.length; i++) {
        if (repositorie[i].id === id) {
          return pvg.success("Repositorie updated (present)");
        }
      }
      return pvg.fail("Expected a repositorie to be present after update, but it is not");
    },
    parameters: { description: "Verify repositorie with " + "id " + id + " exists" }
  });
}


/** === Setting Operations === */

// CREATE
function addSetting(id) {
  svc.post("/settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a setting with " + "id " + id }
    });
}

// DELETE
function deleteSetting(id) {
  svc.delete("/settings/" + id, {
    parameters: { description: "Delete a setting with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSetting(id) {
  svc.delete("/settings/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a setting with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSetting(id) {
  svc.post("/settings", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a setting with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a setting with " + "id " + id }
  });
}

// UPDATE
function updateSetting(id) {
  svc.put("/settings/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a setting with " + "id " + id }
    });
}

// GET one
function getSetting(id) {
  svc.get("/settings/" + id, {
    parameters: { description: "Get a setting with " + "id " + id }
  });
}

// LIST all
function listSettings() {
  svc.get("/settings", {
    parameters: { description: "List settings" }
  });
}

// Verify exists (by list)
function verifySettingExists(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.success("Setting exists");
        }
      }
      return pvg.fail("Expected a setting to exist but it does not");
    },
    parameters: { description: "Verify setting with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySettingDoesNotExist(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.fail("Expected a setting to not exist but it does");
        }
      }
      return pvg.success("Setting does not exist");
    },
    parameters: { description: "Verify setting with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSetting() {
  return bp.EventSet("any-add-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a setting");
  });
}
function matchAddSetting(id) {
  return bp.EventSet("add-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a setting with " + "id " + id;
  });
}
function matchAnyDeleteSetting() {
  return bp.EventSet("any-del-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a setting");
  });
}
function matchDeleteSetting(id) {
  return bp.EventSet("del-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a setting with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSetting() {
  return bp.EventSet("any-update-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a setting");
  });
}
function matchUpdateSetting(id) {
  return bp.EventSet("update-setting", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a setting with " + "id " + id;
  });
}

// Wait helpers
function waitForAnySettingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSettingAdded(id) {
  waitFor(matchAddSetting(id));
}
function waitForSettingDeleted(id) {
  waitFor(matchDeleteSetting(id));
}
function waitForAnySettingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSettingUpdated(id) {
  waitFor(matchUpdateSetting(id));
}
function waitForAnySettingUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ setting\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ setting\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySettingUpdated(id) {
  svc.get("/settings", {
    callback: function (response) {
      setting = JSON.parse(response.body);
      for (let i = 0; i < setting.length; i++) {
        if (setting[i].id === id) {
          return pvg.success("Setting updated (present)");
        }
      }
      return pvg.fail("Expected a setting to be present after update, but it is not");
    },
    parameters: { description: "Verify setting with " + "id " + id + " exists" }
  });
}


/** === Signing_key.gpg Operations === */

// CREATE
function addSigning_key.gpg(id) {
  svc.post("/signing_key.gpg", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a signing_key.gpg with " + "id " + id }
    });
}

// DELETE
function deleteSigning_key.gpg(id) {
  svc.delete("/signing_key.gpg/" + id, {
    parameters: { description: "Delete a signing_key.gpg with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSigning_key.gpg(id) {
  svc.delete("/signing_key.gpg/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a signing_key.gpg with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSigning_key.gpg(id) {
  svc.post("/signing_key.gpg", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a signing_key.gpg with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a signing_key.gpg with " + "id " + id }
  });
}

// UPDATE
function updateSigning_key.gpg(id) {
  svc.put("/signing_key.gpg/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a signing_key.gpg with " + "id " + id }
    });
}

// GET one
function getSigning_key.gpg(id) {
  svc.get("/signing_key.gpg/" + id, {
    parameters: { description: "Get a signing_key.gpg with " + "id " + id }
  });
}

// LIST all
function listSigning_key.gpg() {
  svc.get("/signing_key.gpg", {
    parameters: { description: "List signing_key.gpg" }
  });
}

// Verify exists (by list)
function verifySigning_key.gpgExists(id) {
  svc.get("/signing_key.gpg", {
    callback: function (response) {
      signing_key.gpg = JSON.parse(response.body);
      for (let i = 0; i < signing_key.gpg.length; i++) {
        if (signing_key.gpg[i].id === id) {
          return pvg.success("Signing_key.gpg exists");
        }
      }
      return pvg.fail("Expected a signing_key.gpg to exist but it does not");
    },
    parameters: { description: "Verify signing_key.gpg with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySigning_key.gpgDoesNotExist(id) {
  svc.get("/signing_key.gpg", {
    callback: function (response) {
      signing_key.gpg = JSON.parse(response.body);
      for (let i = 0; i < signing_key.gpg.length; i++) {
        if (signing_key.gpg[i].id === id) {
          return pvg.fail("Expected a signing_key.gpg to not exist but it does");
        }
      }
      return pvg.success("Signing_key.gpg does not exist");
    },
    parameters: { description: "Verify signing_key.gpg with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSigning_key.gpg() {
  return bp.EventSet("any-add-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a signing_key.gpg");
  });
}
function matchAddSigning_key.gpg(id) {
  return bp.EventSet("add-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a signing_key.gpg with " + "id " + id;
  });
}
function matchAnyDeleteSigning_key.gpg() {
  return bp.EventSet("any-del-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a signing_key.gpg");
  });
}
function matchDeleteSigning_key.gpg(id) {
  return bp.EventSet("del-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a signing_key.gpg with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSigning_key.gpg() {
  return bp.EventSet("any-update-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a signing_key.gpg");
  });
}
function matchUpdateSigning_key.gpg(id) {
  return bp.EventSet("update-signing_key.gpg", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a signing_key.gpg with " + "id " + id;
  });
}

// Wait helpers
function waitForAnySigning_key.gpgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ signing_key\.gpg\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ signing_key\.gpg\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSigning_key.gpgAdded(id) {
  waitFor(matchAddSigning_key.gpg(id));
}
function waitForSigning_key.gpgDeleted(id) {
  waitFor(matchDeleteSigning_key.gpg(id));
}
function waitForAnySigning_key.gpgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ signing_key\.gpg\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ signing_key\.gpg\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSigning_key.gpgUpdated(id) {
  waitFor(matchUpdateSigning_key.gpg(id));
}
function waitForAnySigning_key.gpgUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ signing_key\.gpg\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ signing_key\.gpg\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySigning_key.gpgUpdated(id) {
  svc.get("/signing_key.gpg", {
    callback: function (response) {
      signing_key.gpg = JSON.parse(response.body);
      for (let i = 0; i < signing_key.gpg.length; i++) {
        if (signing_key.gpg[i].id === id) {
          return pvg.success("Signing_key.gpg updated (present)");
        }
      }
      return pvg.fail("Expected a signing_key.gpg to be present after update, but it is not");
    },
    parameters: { description: "Verify signing_key.gpg with " + "id " + id + " exists" }
  });
}


/** === Team Operations === */

// CREATE
function addTeam(id, username, org, repo) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id, username: username, org: org, repo: repo }),
      parameters: { description: "Add a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
    });
}

// DELETE
function deleteTeam(id, username, org, repo) {
  svc.delete("/teams/" + id + "/"+ username + "/"+ org + "/"+ repo, {
    parameters: { description: "Delete a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTeam(id, username, org, repo) {
  svc.delete("/teams/" + id + "/"+ username + "/"+ org + "/"+ repo, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTeam(id, username, org, repo) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id, username: username, org: org, repo: repo }),
      parameters: { description: "Add a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
  });
}

// UPDATE
function updateTeam(id, username, org, repo) {
  svc.put("/teams/" + id + "/"+ username + "/"+ org + "/"+ repo, {
      body: JSON.stringify({ id: id, username: username, org: org, repo: repo }),
      parameters: { description: "Update a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
    });
}

// GET one
function getTeam(id, username, org, repo) {
  svc.get("/teams/" + id + "/"+ username + "/"+ org + "/"+ repo, {
    parameters: { description: "Get a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo }
  });
}

// LIST all
function listTeams() {
  svc.get("/teams", {
    parameters: { description: "List teams" }
  });
}

// Verify exists (by list)
function verifyTeamExists(id, username, org, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id && team[i].username === username && team[i].org === org && team[i].repo === repo) {
          return pvg.success("Team exists");
        }
      }
      return pvg.fail("Expected a team to exist but it does not");
    },
    parameters: { description: "Verify team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTeamDoesNotExist(id, username, org, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id && team[i].username === username && team[i].org === org && team[i].repo === repo) {
          return pvg.fail("Expected a team to not exist but it does");
        }
      }
      return pvg.success("Team does not exist");
    },
    parameters: { description: "Verify team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTeam() {
  return bp.EventSet("any-add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a team");
  });
}
function matchAddTeam(id, username, org, repo) {
  return bp.EventSet("add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo;
  });
}
function matchAnyDeleteTeam() {
  return bp.EventSet("any-del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a team");
  });
}
function matchDeleteTeam(id, username, org, repo) {
  return bp.EventSet("del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateTeam() {
  return bp.EventSet("any-update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a team");
  });
}
function matchUpdateTeam(id, username, org, repo) {
  return bp.EventSet("update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo;
  });
}

// Wait helpers
function waitForAnyTeamAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], org: m[3], repo: m[4] };
}
function waitForTeamAdded(id, username, org, repo) {
  waitFor(matchAddTeam(id, username, org, repo));
}
function waitForTeamDeleted(id, username, org, repo) {
  waitFor(matchDeleteTeam(id, username, org, repo));
}
function waitForAnyTeamDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], org: m[3], repo: m[4] };
}
function waitForTeamUpdated(id, username, org, repo) {
  waitFor(matchUpdateTeam(id, username, org, repo));
}
function waitForAnyTeamUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ team\ with\ id\ (.+) and username\ (.+) and org\ (.+) and repo\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], org: m[3], repo: m[4] };
}

// Verify updated (presence-by-list)
function verifyTeamUpdated(id, username, org, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id && team[i].username === username && team[i].org === org && team[i].repo === repo) {
          return pvg.success("Team updated (present)");
        }
      }
      return pvg.fail("Expected a team to be present after update, but it is not");
    },
    parameters: { description: "Verify team with " + "id " + id + " and " + "username " + username + " and " + "org " + org + " and " + "repo " + repo + " exists" }
  });
}


/** === Topic Operations === */

// CREATE
function addTopic(id) {
  svc.post("/topics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a topic with " + "id " + id }
    });
}

// DELETE
function deleteTopic(id) {
  svc.delete("/topics/" + id, {
    parameters: { description: "Delete a topic with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTopic(id) {
  svc.delete("/topics/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a topic with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTopic(id) {
  svc.post("/topics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a topic with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a topic with " + "id " + id }
  });
}

// UPDATE
function updateTopic(id) {
  svc.put("/topics/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a topic with " + "id " + id }
    });
}

// GET one
function getTopic(id) {
  svc.get("/topics/" + id, {
    parameters: { description: "Get a topic with " + "id " + id }
  });
}

// LIST all
function listTopics() {
  svc.get("/topics", {
    parameters: { description: "List topics" }
  });
}

// Verify exists (by list)
function verifyTopicExists(id) {
  svc.get("/topics", {
    callback: function (response) {
      topic = JSON.parse(response.body);
      for (let i = 0; i < topic.length; i++) {
        if (topic[i].id === id) {
          return pvg.success("Topic exists");
        }
      }
      return pvg.fail("Expected a topic to exist but it does not");
    },
    parameters: { description: "Verify topic with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTopicDoesNotExist(id) {
  svc.get("/topics", {
    callback: function (response) {
      topic = JSON.parse(response.body);
      for (let i = 0; i < topic.length; i++) {
        if (topic[i].id === id) {
          return pvg.fail("Expected a topic to not exist but it does");
        }
      }
      return pvg.success("Topic does not exist");
    },
    parameters: { description: "Verify topic with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTopic() {
  return bp.EventSet("any-add-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a topic");
  });
}
function matchAddTopic(id) {
  return bp.EventSet("add-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a topic with " + "id " + id;
  });
}
function matchAnyDeleteTopic() {
  return bp.EventSet("any-del-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a topic");
  });
}
function matchDeleteTopic(id) {
  return bp.EventSet("del-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a topic with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateTopic() {
  return bp.EventSet("any-update-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a topic");
  });
}
function matchUpdateTopic(id) {
  return bp.EventSet("update-topic", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a topic with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyTopicAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ topic\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ topic\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTopicAdded(id) {
  waitFor(matchAddTopic(id));
}
function waitForTopicDeleted(id) {
  waitFor(matchDeleteTopic(id));
}
function waitForAnyTopicDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ topic\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ topic\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTopicUpdated(id) {
  waitFor(matchUpdateTopic(id));
}
function waitForAnyTopicUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ topic\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ topic\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyTopicUpdated(id) {
  svc.get("/topics", {
    callback: function (response) {
      topic = JSON.parse(response.body);
      for (let i = 0; i < topic.length; i++) {
        if (topic[i].id === id) {
          return pvg.success("Topic updated (present)");
        }
      }
      return pvg.fail("Expected a topic to be present after update, but it is not");
    },
    parameters: { description: "Verify topic with " + "id " + id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(id, username, variablename, owner, repo, secretname) {
  svc.post("/user", {
      body: JSON.stringify({ id: id, username: username, variablename: variablename, owner: owner, repo: repo, secretname: secretname }),
      parameters: { description: "Add a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
    });
}

// DELETE
function deleteUser(id, username, variablename, owner, repo, secretname) {
  svc.delete("/user/" + id + "/"+ username + "/"+ variablename + "/"+ owner + "/"+ repo + "/"+ secretname, {
    parameters: { description: "Delete a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id, username, variablename, owner, repo, secretname) {
  svc.delete("/user/" + id + "/"+ username + "/"+ variablename + "/"+ owner + "/"+ repo + "/"+ secretname, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id, username, variablename, owner, repo, secretname) {
  svc.post("/user", {
      body: JSON.stringify({ id: id, username: username, variablename: variablename, owner: owner, repo: repo, secretname: secretname }),
      parameters: { description: "Add a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
  });
}

// UPDATE
function updateUser(id, username, variablename, owner, repo, secretname) {
  svc.put("/user/" + id + "/"+ username + "/"+ variablename + "/"+ owner + "/"+ repo + "/"+ secretname, {
      body: JSON.stringify({ id: id, username: username, variablename: variablename, owner: owner, repo: repo, secretname: secretname }),
      parameters: { description: "Update a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
    });
}

// GET one
function getUser(id, username, variablename, owner, repo, secretname) {
  svc.get("/user/" + id + "/"+ username + "/"+ variablename + "/"+ owner + "/"+ repo + "/"+ secretname, {
    parameters: { description: "Get a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname }
  });
}

// LIST all
function listUser() {
  svc.get("/user", {
    parameters: { description: "List user" }
  });
}

// Verify exists (by list)
function verifyUserExists(id, username, variablename, owner, repo, secretname) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id && user[i].username === username && user[i].variablename === variablename && user[i].owner === owner && user[i].repo === repo && user[i].secretname === secretname) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(id, username, variablename, owner, repo, secretname) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id && user[i].username === username && user[i].variablename === variablename && user[i].owner === owner && user[i].repo === repo && user[i].secretname === secretname) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(id, username, variablename, owner, repo, secretname) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(id, username, variablename, owner, repo, secretname) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(id, username, variablename, owner, repo, secretname) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], variablename: m[3], owner: m[4], repo: m[5], secretname: m[6] };
}
function waitForUserAdded(id, username, variablename, owner, repo, secretname) {
  waitFor(matchAddUser(id, username, variablename, owner, repo, secretname));
}
function waitForUserDeleted(id, username, variablename, owner, repo, secretname) {
  waitFor(matchDeleteUser(id, username, variablename, owner, repo, secretname));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], variablename: m[3], owner: m[4], repo: m[5], secretname: m[6] };
}
function waitForUserUpdated(id, username, variablename, owner, repo, secretname) {
  waitFor(matchUpdateUser(id, username, variablename, owner, repo, secretname));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ id\ (.+) and username\ (.+) and variablename\ (.+) and owner\ (.+) and repo\ (.+) and secretname\ (.+)$/);
    return { id: parseInt(m[1]), username: m[2], variablename: m[3], owner: m[4], repo: m[5], secretname: m[6] };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(id, username, variablename, owner, repo, secretname) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id && user[i].username === username && user[i].variablename === variablename && user[i].owner === owner && user[i].repo === repo && user[i].secretname === secretname) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "id " + id + " and " + "username " + username + " and " + "variablename " + variablename + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "secretname " + secretname + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(username, target, org, token) {
  svc.post("/users", {
      body: JSON.stringify({ username: username, target: target, org: org, token: token }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
    });
}

// DELETE
function deleteUser(username, target, org, token) {
  svc.delete("/users/" + username + "/"+ target + "/"+ org + "/"+ token, {
    parameters: { description: "Delete a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(username, target, org, token) {
  svc.delete("/users/" + username + "/"+ target + "/"+ org + "/"+ token, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(username, target, org, token) {
  svc.post("/users", {
      body: JSON.stringify({ username: username, target: target, org: org, token: token }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
  });
}

// UPDATE
function updateUser(username, target, org, token) {
  svc.put("/users/" + username + "/"+ target + "/"+ org + "/"+ token, {
      body: JSON.stringify({ username: username, target: target, org: org, token: token }),
      parameters: { description: "Update a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
    });
}

// GET one
function getUser(username, target, org, token) {
  svc.get("/users/" + username + "/"+ target + "/"+ org + "/"+ token, {
    parameters: { description: "Get a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(username, target, org, token) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].target === target && user[i].org === org && user[i].token === token) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(username, target, org, token) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].target === target && user[i].org === org && user[i].token === token) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(username, target, org, token) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(username, target, org, token) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(username, target, org, token) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/);
    return { username: m[1], target: m[2], org: m[3], token: m[4] };
}
function waitForUserAdded(username, target, org, token) {
  waitFor(matchAddUser(username, target, org, token));
}
function waitForUserDeleted(username, target, org, token) {
  waitFor(matchDeleteUser(username, target, org, token));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/);
    return { username: m[1], target: m[2], org: m[3], token: m[4] };
}
function waitForUserUpdated(username, target, org, token) {
  waitFor(matchUpdateUser(username, target, org, token));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ username\ (.+) and target\ (.+) and org\ (.+) and token\ (.+)$/);
    return { username: m[1], target: m[2], org: m[3], token: m[4] };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(username, target, org, token) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].target === target && user[i].org === org && user[i].token === token) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "target " + target + " and " + "org " + org + " and " + "token " + token + " exists" }
  });
}


/** === Version Operations === */

// CREATE
function addVersion(id) {
  svc.post("/version", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with " + "id " + id }
    });
}

// DELETE
function deleteVersion(id) {
  svc.delete("/version/" + id, {
    parameters: { description: "Delete a version with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingVersion(id) {
  svc.delete("/version/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a version with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingVersion(id) {
  svc.post("/version", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a version with " + "id " + id }
  });
}

// UPDATE
function updateVersion(id) {
  svc.put("/version/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a version with " + "id " + id }
    });
}

// GET one
function getVersion(id) {
  svc.get("/version/" + id, {
    parameters: { description: "Get a version with " + "id " + id }
  });
}

// LIST all
function listVersion() {
  svc.get("/version", {
    parameters: { description: "List version" }
  });
}

// Verify exists (by list)
function verifyVersionExists(id) {
  svc.get("/version", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.success("Version exists");
        }
      }
      return pvg.fail("Expected a version to exist but it does not");
    },
    parameters: { description: "Verify version with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyVersionDoesNotExist(id) {
  svc.get("/version", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.fail("Expected a version to not exist but it does");
        }
      }
      return pvg.success("Version does not exist");
    },
    parameters: { description: "Verify version with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddVersion() {
  return bp.EventSet("any-add-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a version");
  });
}
function matchAddVersion(id) {
  return bp.EventSet("add-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a version with " + "id " + id;
  });
}
function matchAnyDeleteVersion() {
  return bp.EventSet("any-del-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a version");
  });
}
function matchDeleteVersion(id) {
  return bp.EventSet("del-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a version with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateVersion() {
  return bp.EventSet("any-update-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a version");
  });
}
function matchUpdateVersion(id) {
  return bp.EventSet("update-version", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a version with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyVersionAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForVersionAdded(id) {
  waitFor(matchAddVersion(id));
}
function waitForVersionDeleted(id) {
  waitFor(matchDeleteVersion(id));
}
function waitForAnyVersionDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForVersionUpdated(id) {
  waitFor(matchUpdateVersion(id));
}
function waitForAnyVersionUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ version\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ version\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyVersionUpdated(id) {
  svc.get("/version", {
    callback: function (response) {
      version = JSON.parse(response.body);
      for (let i = 0; i < version.length; i++) {
        if (version[i].id === id) {
          return pvg.success("Version updated (present)");
        }
      }
      return pvg.fail("Expected a version to be present after update, but it is not");
    },
    parameters: { description: "Verify version with " + "id " + id + " exists" }
  });
}

