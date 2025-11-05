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
function addActivitypub(id) {
  svc.post("/activitypub", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a activitypub with " + "id " + id }
    });
}

// DELETE
function deleteActivitypub(id) {
  svc.delete("/activitypub/" + id, {
    parameters: { description: "Delete a activitypub with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingActivitypub(id) {
  svc.delete("/activitypub/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a activitypub with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingActivitypub(id) {
  svc.post("/activitypub", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a activitypub with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a activitypub with " + "id " + id }
  });
}

// UPDATE
function updateActivitypub(id) {
  svc.put("/activitypub/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a activitypub with " + "id " + id }
    });
}

// GET one
function getActivitypub(id) {
  svc.get("/activitypub/" + id, {
    parameters: { description: "Get a activitypub with " + "id " + id }
  });
}

// LIST all
function listActivitypub() {
  svc.get("/activitypub", {
    parameters: { description: "List activitypub" }
  });
}

// Verify exists (by list)
function verifyActivitypubExists(id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].id === id) {
          return pvg.success("Activitypub exists");
        }
      }
      return pvg.fail("Expected a activitypub to exist but it does not");
    },
    parameters: { description: "Verify activitypub with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyActivitypubDoesNotExist(id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].id === id) {
          return pvg.fail("Expected a activitypub to not exist but it does");
        }
      }
      return pvg.success("Activitypub does not exist");
    },
    parameters: { description: "Verify activitypub with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddActivitypub() {
  return bp.EventSet("any-add-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a activitypub");
  });
}
function matchAddActivitypub(id) {
  return bp.EventSet("add-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a activitypub with " + "id " + id;
  });
}
function matchAnyDeleteActivitypub() {
  return bp.EventSet("any-del-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a activitypub");
  });
}
function matchDeleteActivitypub(id) {
  return bp.EventSet("del-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a activitypub with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateActivitypub() {
  return bp.EventSet("any-update-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a activitypub");
  });
}
function matchUpdateActivitypub(id) {
  return bp.EventSet("update-activitypub", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a activitypub with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyActivitypubAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ activitypub\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ activitypub\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForActivitypubAdded(id) {
  waitFor(matchAddActivitypub(id));
}
function waitForActivitypubDeleted(id) {
  waitFor(matchDeleteActivitypub(id));
}
function waitForAnyActivitypubDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ activitypub\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ activitypub\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForActivitypubUpdated(id) {
  waitFor(matchUpdateActivitypub(id));
}
function waitForAnyActivitypubUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ activitypub\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ activitypub\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyActivitypubUpdated(id) {
  svc.get("/activitypub", {
    callback: function (response) {
      activitypub = JSON.parse(response.body);
      for (let i = 0; i < activitypub.length; i++) {
        if (activitypub[i].id === id) {
          return pvg.success("Activitypub updated (present)");
        }
      }
      return pvg.fail("Expected a activitypub to be present after update, but it is not");
    },
    parameters: { description: "Verify activitypub with " + "id " + id + " exists" }
  });
}


/** === Admin Operations === */

// CREATE
function addAdmin(id) {
  svc.post("/admin", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a admin with " + "id " + id }
    });
}

// DELETE
function deleteAdmin(id) {
  svc.delete("/admin/" + id, {
    parameters: { description: "Delete a admin with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAdmin(id) {
  svc.delete("/admin/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a admin with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAdmin(id) {
  svc.post("/admin", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a admin with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a admin with " + "id " + id }
  });
}

// UPDATE
function updateAdmin(id) {
  svc.put("/admin/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a admin with " + "id " + id }
    });
}

// GET one
function getAdmin(id) {
  svc.get("/admin/" + id, {
    parameters: { description: "Get a admin with " + "id " + id }
  });
}

// LIST all
function listAdmin() {
  svc.get("/admin", {
    parameters: { description: "List admin" }
  });
}

// Verify exists (by list)
function verifyAdminExists(id) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].id === id) {
          return pvg.success("Admin exists");
        }
      }
      return pvg.fail("Expected a admin to exist but it does not");
    },
    parameters: { description: "Verify admin with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAdminDoesNotExist(id) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].id === id) {
          return pvg.fail("Expected a admin to not exist but it does");
        }
      }
      return pvg.success("Admin does not exist");
    },
    parameters: { description: "Verify admin with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAdmin() {
  return bp.EventSet("any-add-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a admin");
  });
}
function matchAddAdmin(id) {
  return bp.EventSet("add-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a admin with " + "id " + id;
  });
}
function matchAnyDeleteAdmin() {
  return bp.EventSet("any-del-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a admin");
  });
}
function matchDeleteAdmin(id) {
  return bp.EventSet("del-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a admin with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAdmin() {
  return bp.EventSet("any-update-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a admin");
  });
}
function matchUpdateAdmin(id) {
  return bp.EventSet("update-admin", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a admin with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyAdminAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ admin\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ admin\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAdminAdded(id) {
  waitFor(matchAddAdmin(id));
}
function waitForAdminDeleted(id) {
  waitFor(matchDeleteAdmin(id));
}
function waitForAnyAdminDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ admin\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ admin\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAdminUpdated(id) {
  waitFor(matchUpdateAdmin(id));
}
function waitForAnyAdminUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ admin\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ admin\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAdminUpdated(id) {
  svc.get("/admin", {
    callback: function (response) {
      admin = JSON.parse(response.body);
      for (let i = 0; i < admin.length; i++) {
        if (admin[i].id === id) {
          return pvg.success("Admin updated (present)");
        }
      }
      return pvg.fail("Expected a admin to be present after update, but it is not");
    },
    parameters: { description: "Verify admin with " + "id " + id + " exists" }
  });
}


/** === Gitignore Operations === */

// CREATE
function addGitignore(id) {
  svc.post("/gitignore", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a gitignore with " + "id " + id }
    });
}

// DELETE
function deleteGitignore(id) {
  svc.delete("/gitignore/" + id, {
    parameters: { description: "Delete a gitignore with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGitignore(id) {
  svc.delete("/gitignore/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gitignore with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGitignore(id) {
  svc.post("/gitignore", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a gitignore with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gitignore with " + "id " + id }
  });
}

// UPDATE
function updateGitignore(id) {
  svc.put("/gitignore/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a gitignore with " + "id " + id }
    });
}

// GET one
function getGitignore(id) {
  svc.get("/gitignore/" + id, {
    parameters: { description: "Get a gitignore with " + "id " + id }
  });
}

// LIST all
function listGitignore() {
  svc.get("/gitignore", {
    parameters: { description: "List gitignore" }
  });
}

// Verify exists (by list)
function verifyGitignoreExists(id) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].id === id) {
          return pvg.success("Gitignore exists");
        }
      }
      return pvg.fail("Expected a gitignore to exist but it does not");
    },
    parameters: { description: "Verify gitignore with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGitignoreDoesNotExist(id) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].id === id) {
          return pvg.fail("Expected a gitignore to not exist but it does");
        }
      }
      return pvg.success("Gitignore does not exist");
    },
    parameters: { description: "Verify gitignore with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGitignore() {
  return bp.EventSet("any-add-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a gitignore");
  });
}
function matchAddGitignore(id) {
  return bp.EventSet("add-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a gitignore with " + "id " + id;
  });
}
function matchAnyDeleteGitignore() {
  return bp.EventSet("any-del-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a gitignore");
  });
}
function matchDeleteGitignore(id) {
  return bp.EventSet("del-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a gitignore with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateGitignore() {
  return bp.EventSet("any-update-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a gitignore");
  });
}
function matchUpdateGitignore(id) {
  return bp.EventSet("update-gitignore", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a gitignore with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyGitignoreAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ gitignore\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ gitignore\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForGitignoreAdded(id) {
  waitFor(matchAddGitignore(id));
}
function waitForGitignoreDeleted(id) {
  waitFor(matchDeleteGitignore(id));
}
function waitForAnyGitignoreDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ gitignore\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ gitignore\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForGitignoreUpdated(id) {
  waitFor(matchUpdateGitignore(id));
}
function waitForAnyGitignoreUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ gitignore\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ gitignore\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyGitignoreUpdated(id) {
  svc.get("/gitignore", {
    callback: function (response) {
      gitignore = JSON.parse(response.body);
      for (let i = 0; i < gitignore.length; i++) {
        if (gitignore[i].id === id) {
          return pvg.success("Gitignore updated (present)");
        }
      }
      return pvg.fail("Expected a gitignore to be present after update, but it is not");
    },
    parameters: { description: "Verify gitignore with " + "id " + id + " exists" }
  });
}


/** === Label Operations === */

// CREATE
function addLabel(id) {
  svc.post("/label", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with " + "id " + id }
    });
}

// DELETE
function deleteLabel(id) {
  svc.delete("/label/" + id, {
    parameters: { description: "Delete a label with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLabel(id) {
  svc.delete("/label/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a label with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLabel(id) {
  svc.post("/label", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a label with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a label with " + "id " + id }
  });
}

// UPDATE
function updateLabel(id) {
  svc.put("/label/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a label with " + "id " + id }
    });
}

// GET one
function getLabel(id) {
  svc.get("/label/" + id, {
    parameters: { description: "Get a label with " + "id " + id }
  });
}

// LIST all
function listLabel() {
  svc.get("/label", {
    parameters: { description: "List label" }
  });
}

// Verify exists (by list)
function verifyLabelExists(id) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.success("Label exists");
        }
      }
      return pvg.fail("Expected a label to exist but it does not");
    },
    parameters: { description: "Verify label with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLabelDoesNotExist(id) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.fail("Expected a label to not exist but it does");
        }
      }
      return pvg.success("Label does not exist");
    },
    parameters: { description: "Verify label with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLabel() {
  return bp.EventSet("any-add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a label");
  });
}
function matchAddLabel(id) {
  return bp.EventSet("add-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a label with " + "id " + id;
  });
}
function matchAnyDeleteLabel() {
  return bp.EventSet("any-del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a label");
  });
}
function matchDeleteLabel(id) {
  return bp.EventSet("del-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a label with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLabel() {
  return bp.EventSet("any-update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a label");
  });
}
function matchUpdateLabel(id) {
  return bp.EventSet("update-label", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a label with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyLabelAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLabelAdded(id) {
  waitFor(matchAddLabel(id));
}
function waitForLabelDeleted(id) {
  waitFor(matchDeleteLabel(id));
}
function waitForAnyLabelDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLabelUpdated(id) {
  waitFor(matchUpdateLabel(id));
}
function waitForAnyLabelUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ label\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ label\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyLabelUpdated(id) {
  svc.get("/label", {
    callback: function (response) {
      label = JSON.parse(response.body);
      for (let i = 0; i < label.length; i++) {
        if (label[i].id === id) {
          return pvg.success("Label updated (present)");
        }
      }
      return pvg.fail("Expected a label to be present after update, but it is not");
    },
    parameters: { description: "Verify label with " + "id " + id + " exists" }
  });
}


/** === License Operations === */

// CREATE
function addLicense(id) {
  svc.post("/licenses", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a license with " + "id " + id }
    });
}

// DELETE
function deleteLicense(id) {
  svc.delete("/licenses/" + id, {
    parameters: { description: "Delete a license with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLicense(id) {
  svc.delete("/licenses/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a license with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLicense(id) {
  svc.post("/licenses", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a license with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a license with " + "id " + id }
  });
}

// UPDATE
function updateLicense(id) {
  svc.put("/licenses/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a license with " + "id " + id }
    });
}

// GET one
function getLicense(id) {
  svc.get("/licenses/" + id, {
    parameters: { description: "Get a license with " + "id " + id }
  });
}

// LIST all
function listLicenses() {
  svc.get("/licenses", {
    parameters: { description: "List licenses" }
  });
}

// Verify exists (by list)
function verifyLicenseExists(id) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].id === id) {
          return pvg.success("License exists");
        }
      }
      return pvg.fail("Expected a license to exist but it does not");
    },
    parameters: { description: "Verify license with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLicenseDoesNotExist(id) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].id === id) {
          return pvg.fail("Expected a license to not exist but it does");
        }
      }
      return pvg.success("License does not exist");
    },
    parameters: { description: "Verify license with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLicense() {
  return bp.EventSet("any-add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a license");
  });
}
function matchAddLicense(id) {
  return bp.EventSet("add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a license with " + "id " + id;
  });
}
function matchAnyDeleteLicense() {
  return bp.EventSet("any-del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a license");
  });
}
function matchDeleteLicense(id) {
  return bp.EventSet("del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a license with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLicense() {
  return bp.EventSet("any-update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a license");
  });
}
function matchUpdateLicense(id) {
  return bp.EventSet("update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a license with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyLicenseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ license\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ license\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLicenseAdded(id) {
  waitFor(matchAddLicense(id));
}
function waitForLicenseDeleted(id) {
  waitFor(matchDeleteLicense(id));
}
function waitForAnyLicenseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ license\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ license\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForLicenseUpdated(id) {
  waitFor(matchUpdateLicense(id));
}
function waitForAnyLicenseUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ license\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ license\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyLicenseUpdated(id) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].id === id) {
          return pvg.success("License updated (present)");
        }
      }
      return pvg.fail("Expected a license to be present after update, but it is not");
    },
    parameters: { description: "Verify license with " + "id " + id + " exists" }
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
  svc.post("/orgs", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with " + "org " + org }
    });
}

// DELETE
function deleteOrg(org) {
  svc.delete("/orgs/" + org, {
    parameters: { description: "Delete a org with " + "org " + org }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org) {
  svc.delete("/orgs/" + org, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with " + "org " + org }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with " + "org " + org }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with " + "org " + org }
  });
}

// UPDATE
function updateOrg(org) {
  svc.put("/orgs/" + org, {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Update a org with " + "org " + org }
    });
}

// GET one
function getOrg(org) {
  svc.get("/orgs/" + org, {
    parameters: { description: "Get a org with " + "org " + org }
  });
}

// LIST all
function listOrgs() {
  svc.get("/orgs", {
    parameters: { description: "List orgs" }
  });
}

// Verify exists (by list)
function verifyOrgExists(org) {
  svc.get("/orgs", {
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
  svc.get("/orgs", {
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
  svc.get("/orgs", {
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


/** === Package Operations === */

// CREATE
function addPackage(id) {
  svc.post("/packages", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a package with " + "id " + id }
    });
}

// DELETE
function deletePackage(id) {
  svc.delete("/packages/" + id, {
    parameters: { description: "Delete a package with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPackage(id) {
  svc.delete("/packages/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a package with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPackage(id) {
  svc.post("/packages", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a package with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a package with " + "id " + id }
  });
}

// UPDATE
function updatePackage(id) {
  svc.put("/packages/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a package with " + "id " + id }
    });
}

// GET one
function getPackage(id) {
  svc.get("/packages/" + id, {
    parameters: { description: "Get a package with " + "id " + id }
  });
}

// LIST all
function listPackages() {
  svc.get("/packages", {
    parameters: { description: "List packages" }
  });
}

// Verify exists (by list)
function verifyPackageExists(id) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].id === id) {
          return pvg.success("Package exists");
        }
      }
      return pvg.fail("Expected a package to exist but it does not");
    },
    parameters: { description: "Verify package with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPackageDoesNotExist(id) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].id === id) {
          return pvg.fail("Expected a package to not exist but it does");
        }
      }
      return pvg.success("Package does not exist");
    },
    parameters: { description: "Verify package with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPackage() {
  return bp.EventSet("any-add-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a package");
  });
}
function matchAddPackage(id) {
  return bp.EventSet("add-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a package with " + "id " + id;
  });
}
function matchAnyDeletePackage() {
  return bp.EventSet("any-del-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a package");
  });
}
function matchDeletePackage(id) {
  return bp.EventSet("del-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a package with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdatePackage() {
  return bp.EventSet("any-update-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a package");
  });
}
function matchUpdatePackage(id) {
  return bp.EventSet("update-package", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a package with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyPackageAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ package\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ package\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPackageAdded(id) {
  waitFor(matchAddPackage(id));
}
function waitForPackageDeleted(id) {
  waitFor(matchDeletePackage(id));
}
function waitForAnyPackageDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ package\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ package\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPackageUpdated(id) {
  waitFor(matchUpdatePackage(id));
}
function waitForAnyPackageUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ package\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ package\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyPackageUpdated(id) {
  svc.get("/packages", {
    callback: function (response) {
      package = JSON.parse(response.body);
      for (let i = 0; i < package.length; i++) {
        if (package[i].id === id) {
          return pvg.success("Package updated (present)");
        }
      }
      return pvg.fail("Expected a package to be present after update, but it is not");
    },
    parameters: { description: "Verify package with " + "id " + id + " exists" }
  });
}


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, index, id, user, secretname, branch) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, user: user, secretname: secretname, branch: branch }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
    });
}

// DELETE
function deleteRepo(owner, repo, index, id, user, secretname, branch) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ user + "/"+ secretname + "/"+ branch, {
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, index, id, user, secretname, branch) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ user + "/"+ secretname + "/"+ branch, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, index, id, user, secretname, branch) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, user: user, secretname: secretname, branch: branch }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
  });
}

// UPDATE
function updateRepo(owner, repo, index, id, user, secretname, branch) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ user + "/"+ secretname + "/"+ branch, {
      body: JSON.stringify({ owner: owner, repo: repo, index: index, id: id, user: user, secretname: secretname, branch: branch }),
      parameters: { description: "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
    });
}

// GET one
function getRepo(owner, repo, index, id, user, secretname, branch) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ index + "/"+ id + "/"+ user + "/"+ secretname + "/"+ branch, {
    parameters: { description: "Get a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch }
  });
}

// LIST all
function listRepos() {
  svc.get("/repos", {
    parameters: { description: "List repos" }
  });
}

// Verify exists (by list)
function verifyRepoExists(owner, repo, index, id, user, secretname, branch) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].user === user && repo[i].secretname === secretname && repo[i].branch === branch) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, index, id, user, secretname, branch) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].user === user && repo[i].secretname === secretname && repo[i].branch === branch) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, index, id, user, secretname, branch) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch;
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, index, id, user, secretname, branch) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRepo() {
  return bp.EventSet("any-update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a repo");
  });
}
function matchUpdateRepo(owner, repo, index, id, user, secretname, branch) {
  return bp.EventSet("update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch;
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), user: m[5], secretname: m[6], branch: m[7] };
}
function waitForRepoAdded(owner, repo, index, id, user, secretname, branch) {
  waitFor(matchAddRepo(owner, repo, index, id, user, secretname, branch));
}
function waitForRepoDeleted(owner, repo, index, id, user, secretname, branch) {
  waitFor(matchDeleteRepo(owner, repo, index, id, user, secretname, branch));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), user: m[5], secretname: m[6], branch: m[7] };
}
function waitForRepoUpdated(owner, repo, index, id, user, secretname, branch) {
  waitFor(matchUpdateRepo(owner, repo, index, id, user, secretname, branch));
}
function waitForAnyRepoUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and index\ (.+) and id\ (.+) and user\ (.+) and secretname\ (.+) and branch\ (.+)$/);
    return { owner: m[1], repo: m[2], index: m[3], id: parseInt(m[4]), user: m[5], secretname: m[6], branch: m[7] };
}

// Verify updated (presence-by-list)
function verifyRepoUpdated(owner, repo, index, id, user, secretname, branch) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].index === index && repo[i].id === id && repo[i].user === user && repo[i].secretname === secretname && repo[i].branch === branch) {
          return pvg.success("Repo updated (present)");
        }
      }
      return pvg.fail("Expected a repo to be present after update, but it is not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "index " + index + " and " + "id " + id + " and " + "user " + user + " and " + "secretname " + secretname + " and " + "branch " + branch + " exists" }
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


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/user", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with " + "id " + id }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/user/" + id, {
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/user/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/user", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "id " + id }
  });
}

// UPDATE
function updateUser(id) {
  svc.put("/user/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user with " + "id " + id }
    });
}

// GET one
function getUser(id) {
  svc.get("/user/" + id, {
    parameters: { description: "Get a user with " + "id " + id }
  });
}

// LIST all
function listUser() {
  svc.get("/user", {
    parameters: { description: "List user" }
  });
}

// Verify exists (by list)
function verifyUserExists(id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "id " + id;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserAdded(id) {
  waitFor(matchAddUser(id));
}
function waitForUserDeleted(id) {
  waitFor(matchDeleteUser(id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserUpdated(id) {
  waitFor(matchUpdateUser(id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "id " + id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with " + "id " + id }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/users/" + id, {
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/users/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "id " + id }
  });
}

// UPDATE
function updateUser(id) {
  svc.put("/users/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user with " + "id " + id }
    });
}

// GET one
function getUser(id) {
  svc.get("/users/" + id, {
    parameters: { description: "Get a user with " + "id " + id }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "id " + id;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserAdded(id) {
  waitFor(matchAddUser(id));
}
function waitForUserDeleted(id) {
  waitFor(matchDeleteUser(id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForUserUpdated(id) {
  waitFor(matchUpdateUser(id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].id === id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "id " + id + " exists" }
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

