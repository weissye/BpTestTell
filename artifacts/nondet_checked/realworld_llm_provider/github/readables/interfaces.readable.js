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

/** === Advisorie Operations === */

// CREATE
function addAdvisorie(ghsa_id) {
  svc.post("/advisories", {
      body: JSON.stringify({ ghsa_id: ghsa_id }),
      parameters: { description: "Add a advisorie with " + "ghsa_id " + ghsa_id }
    });
}

// DELETE
function deleteAdvisorie(ghsa_id) {
  svc.delete("/advisories/" + ghsa_id, {
    parameters: { description: "Delete a advisorie with " + "ghsa_id " + ghsa_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAdvisorie(ghsa_id) {
  svc.delete("/advisories/" + ghsa_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a advisorie with " + "ghsa_id " + ghsa_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAdvisorie(ghsa_id) {
  svc.post("/advisories", {
      body: JSON.stringify({ ghsa_id: ghsa_id }),
      parameters: { description: "Add a advisorie with " + "ghsa_id " + ghsa_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a advisorie with " + "ghsa_id " + ghsa_id }
  });
}

// UPDATE
function updateAdvisorie(ghsa_id) {
  svc.put("/advisories/" + ghsa_id, {
      body: JSON.stringify({ ghsa_id: ghsa_id }),
      parameters: { description: "Update a advisorie with " + "ghsa_id " + ghsa_id }
    });
}

// GET one
function getAdvisorie(ghsa_id) {
  svc.get("/advisories/" + ghsa_id, {
    parameters: { description: "Get a advisorie with " + "ghsa_id " + ghsa_id }
  });
}

// LIST all
function listAdvisories() {
  svc.get("/advisories", {
    parameters: { description: "List advisories" }
  });
}

// Verify exists (by list)
function verifyAdvisorieExists(ghsa_id) {
  svc.get("/advisories", {
    callback: function (response) {
      advisorie = JSON.parse(response.body);
      for (let i = 0; i < advisorie.length; i++) {
        if (advisorie[i].ghsa_id === ghsa_id) {
          return pvg.success("Advisorie exists");
        }
      }
      return pvg.fail("Expected a advisorie to exist but it does not");
    },
    parameters: { description: "Verify advisorie with " + "ghsa_id " + ghsa_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAdvisorieDoesNotExist(ghsa_id) {
  svc.get("/advisories", {
    callback: function (response) {
      advisorie = JSON.parse(response.body);
      for (let i = 0; i < advisorie.length; i++) {
        if (advisorie[i].ghsa_id === ghsa_id) {
          return pvg.fail("Expected a advisorie to not exist but it does");
        }
      }
      return pvg.success("Advisorie does not exist");
    },
    parameters: { description: "Verify advisorie with " + "ghsa_id " + ghsa_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAdvisorie() {
  return bp.EventSet("any-add-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a advisorie");
  });
}
function matchAddAdvisorie(ghsa_id) {
  return bp.EventSet("add-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a advisorie with " + "ghsa_id " + ghsa_id;
  });
}
function matchAnyDeleteAdvisorie() {
  return bp.EventSet("any-del-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a advisorie");
  });
}
function matchDeleteAdvisorie(ghsa_id) {
  return bp.EventSet("del-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a advisorie with " + "ghsa_id " + ghsa_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAdvisorie() {
  return bp.EventSet("any-update-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a advisorie");
  });
}
function matchUpdateAdvisorie(ghsa_id) {
  return bp.EventSet("update-advisorie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a advisorie with " + "ghsa_id " + ghsa_id;
  });
}

// Wait helpers
function waitForAnyAdvisorieAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ advisorie\ with\ ghsa_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ advisorie\ with\ ghsa_id\ (.+)$/);
    return { ghsa_id: parseInt(m[1]) };
}
function waitForAdvisorieAdded(ghsa_id) {
  waitFor(matchAddAdvisorie(ghsa_id));
}
function waitForAdvisorieDeleted(ghsa_id) {
  waitFor(matchDeleteAdvisorie(ghsa_id));
}
function waitForAnyAdvisorieDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ advisorie\ with\ ghsa_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ advisorie\ with\ ghsa_id\ (.+)$/);
    return { ghsa_id: parseInt(m[1]) };
}
function waitForAdvisorieUpdated(ghsa_id) {
  waitFor(matchUpdateAdvisorie(ghsa_id));
}
function waitForAnyAdvisorieUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ advisorie\ with\ ghsa_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ advisorie\ with\ ghsa_id\ (.+)$/);
    return { ghsa_id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAdvisorieUpdated(ghsa_id) {
  svc.get("/advisories", {
    callback: function (response) {
      advisorie = JSON.parse(response.body);
      for (let i = 0; i < advisorie.length; i++) {
        if (advisorie[i].ghsa_id === ghsa_id) {
          return pvg.success("Advisorie updated (present)");
        }
      }
      return pvg.fail("Expected a advisorie to be present after update, but it is not");
    },
    parameters: { description: "Verify advisorie with " + "ghsa_id " + ghsa_id + " exists" }
  });
}


/** === App Operations === */

// CREATE
function addApp(id) {
  svc.post("/app", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with " + "id " + id }
    });
}

// DELETE
function deleteApp(id) {
  svc.delete("/app/" + id, {
    parameters: { description: "Delete a app with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(id) {
  svc.delete("/app/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(id) {
  svc.post("/app", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with " + "id " + id }
  });
}

// UPDATE
function updateApp(id) {
  svc.put("/app/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app with " + "id " + id }
    });
}

// GET one
function getApp(id) {
  svc.get("/app/" + id, {
    parameters: { description: "Get a app with " + "id " + id }
  });
}

// LIST all
function listApp() {
  svc.get("/app", {
    parameters: { description: "List app" }
  });
}

// Verify exists (by list)
function verifyAppExists(id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(id) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with " + "id " + id;
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(id) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp() {
  return bp.EventSet("any-update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app");
  });
}
function matchUpdateApp(id) {
  return bp.EventSet("update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAppAdded(id) {
  waitFor(matchAddApp(id));
}
function waitForAppDeleted(id) {
  waitFor(matchDeleteApp(id));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAppUpdated(id) {
  waitFor(matchUpdateApp(id));
}
function waitForAnyAppUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAppUpdated(id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.success("App updated (present)");
        }
      }
      return pvg.fail("Expected a app to be present after update, but it is not");
    },
    parameters: { description: "Verify app with " + "id " + id + " exists" }
  });
}


/** === App_manifest Operations === */

// CREATE
function addApp_manifest(id) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app_manifest with " + "id " + id }
    });
}

// DELETE
function deleteApp_manifest(id) {
  svc.delete("/app_manifests/" + id, {
    parameters: { description: "Delete a app_manifest with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp_manifest(id) {
  svc.delete("/app_manifests/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app_manifest with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp_manifest(id) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app_manifest with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app_manifest with " + "id " + id }
  });
}

// UPDATE
function updateApp_manifest(id) {
  svc.put("/app_manifests/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app_manifest with " + "id " + id }
    });
}

// GET one
function getApp_manifest(id) {
  svc.get("/app_manifests/" + id, {
    parameters: { description: "Get a app_manifest with " + "id " + id }
  });
}

// LIST all
function listApp_manifests() {
  svc.get("/app_manifests", {
    parameters: { description: "List app_manifests" }
  });
}

// Verify exists (by list)
function verifyApp_manifestExists(id) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].id === id) {
          return pvg.success("App_manifest exists");
        }
      }
      return pvg.fail("Expected a app_manifest to exist but it does not");
    },
    parameters: { description: "Verify app_manifest with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApp_manifestDoesNotExist(id) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].id === id) {
          return pvg.fail("Expected a app_manifest to not exist but it does");
        }
      }
      return pvg.success("App_manifest does not exist");
    },
    parameters: { description: "Verify app_manifest with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp_manifest() {
  return bp.EventSet("any-add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app_manifest");
  });
}
function matchAddApp_manifest(id) {
  return bp.EventSet("add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app_manifest with " + "id " + id;
  });
}
function matchAnyDeleteApp_manifest() {
  return bp.EventSet("any-del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app_manifest");
  });
}
function matchDeleteApp_manifest(id) {
  return bp.EventSet("del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app_manifest with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp_manifest() {
  return bp.EventSet("any-update-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app_manifest");
  });
}
function matchUpdateApp_manifest(id) {
  return bp.EventSet("update-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app_manifest with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyApp_manifestAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app_manifest\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app_manifest\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForApp_manifestAdded(id) {
  waitFor(matchAddApp_manifest(id));
}
function waitForApp_manifestDeleted(id) {
  waitFor(matchDeleteApp_manifest(id));
}
function waitForAnyApp_manifestDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app_manifest\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app_manifest\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForApp_manifestUpdated(id) {
  waitFor(matchUpdateApp_manifest(id));
}
function waitForAnyApp_manifestUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app_manifest\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app_manifest\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyApp_manifestUpdated(id) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].id === id) {
          return pvg.success("App_manifest updated (present)");
        }
      }
      return pvg.fail("Expected a app_manifest to be present after update, but it is not");
    },
    parameters: { description: "Verify app_manifest with " + "id " + id + " exists" }
  });
}


/** === Application Operations === */

// CREATE
function addApplication(id) {
  svc.post("/applications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a application with " + "id " + id }
    });
}

// DELETE
function deleteApplication(id) {
  svc.delete("/applications/" + id, {
    parameters: { description: "Delete a application with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApplication(id) {
  svc.delete("/applications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a application with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApplication(id) {
  svc.post("/applications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a application with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a application with " + "id " + id }
  });
}

// UPDATE
function updateApplication(id) {
  svc.put("/applications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a application with " + "id " + id }
    });
}

// GET one
function getApplication(id) {
  svc.get("/applications/" + id, {
    parameters: { description: "Get a application with " + "id " + id }
  });
}

// LIST all
function listApplications() {
  svc.get("/applications", {
    parameters: { description: "List applications" }
  });
}

// Verify exists (by list)
function verifyApplicationExists(id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].id === id) {
          return pvg.success("Application exists");
        }
      }
      return pvg.fail("Expected a application to exist but it does not");
    },
    parameters: { description: "Verify application with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApplicationDoesNotExist(id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].id === id) {
          return pvg.fail("Expected a application to not exist but it does");
        }
      }
      return pvg.success("Application does not exist");
    },
    parameters: { description: "Verify application with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApplication() {
  return bp.EventSet("any-add-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a application");
  });
}
function matchAddApplication(id) {
  return bp.EventSet("add-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a application with " + "id " + id;
  });
}
function matchAnyDeleteApplication() {
  return bp.EventSet("any-del-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a application");
  });
}
function matchDeleteApplication(id) {
  return bp.EventSet("del-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a application with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApplication() {
  return bp.EventSet("any-update-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a application");
  });
}
function matchUpdateApplication(id) {
  return bp.EventSet("update-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a application with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyApplicationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ application\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ application\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForApplicationAdded(id) {
  waitFor(matchAddApplication(id));
}
function waitForApplicationDeleted(id) {
  waitFor(matchDeleteApplication(id));
}
function waitForAnyApplicationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ application\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ application\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForApplicationUpdated(id) {
  waitFor(matchUpdateApplication(id));
}
function waitForAnyApplicationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ application\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ application\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyApplicationUpdated(id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].id === id) {
          return pvg.success("Application updated (present)");
        }
      }
      return pvg.fail("Expected a application to be present after update, but it is not");
    },
    parameters: { description: "Verify application with " + "id " + id + " exists" }
  });
}


/** === App Operations === */

// CREATE
function addApp(id) {
  svc.post("/apps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with " + "id " + id }
    });
}

// DELETE
function deleteApp(id) {
  svc.delete("/apps/" + id, {
    parameters: { description: "Delete a app with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(id) {
  svc.delete("/apps/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(id) {
  svc.post("/apps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with " + "id " + id }
  });
}

// UPDATE
function updateApp(id) {
  svc.put("/apps/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app with " + "id " + id }
    });
}

// GET one
function getApp(id) {
  svc.get("/apps/" + id, {
    parameters: { description: "Get a app with " + "id " + id }
  });
}

// LIST all
function listApps() {
  svc.get("/apps", {
    parameters: { description: "List apps" }
  });
}

// Verify exists (by list)
function verifyAppExists(id) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(id) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(id) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with " + "id " + id;
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(id) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp() {
  return bp.EventSet("any-update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app");
  });
}
function matchUpdateApp(id) {
  return bp.EventSet("update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAppAdded(id) {
  waitFor(matchAddApp(id));
}
function waitForAppDeleted(id) {
  waitFor(matchDeleteApp(id));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAppUpdated(id) {
  waitFor(matchUpdateApp(id));
}
function waitForAnyAppUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAppUpdated(id) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].id === id) {
          return pvg.success("App updated (present)");
        }
      }
      return pvg.fail("Expected a app to be present after update, but it is not");
    },
    parameters: { description: "Verify app with " + "id " + id + " exists" }
  });
}


/** === Assignment Operations === */

// CREATE
function addAssignment(id) {
  svc.post("/assignments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a assignment with " + "id " + id }
    });
}

// DELETE
function deleteAssignment(id) {
  svc.delete("/assignments/" + id, {
    parameters: { description: "Delete a assignment with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAssignment(id) {
  svc.delete("/assignments/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a assignment with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAssignment(id) {
  svc.post("/assignments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a assignment with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a assignment with " + "id " + id }
  });
}

// UPDATE
function updateAssignment(id) {
  svc.put("/assignments/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a assignment with " + "id " + id }
    });
}

// GET one
function getAssignment(id) {
  svc.get("/assignments/" + id, {
    parameters: { description: "Get a assignment with " + "id " + id }
  });
}

// LIST all
function listAssignments() {
  svc.get("/assignments", {
    parameters: { description: "List assignments" }
  });
}

// Verify exists (by list)
function verifyAssignmentExists(id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].id === id) {
          return pvg.success("Assignment exists");
        }
      }
      return pvg.fail("Expected a assignment to exist but it does not");
    },
    parameters: { description: "Verify assignment with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAssignmentDoesNotExist(id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].id === id) {
          return pvg.fail("Expected a assignment to not exist but it does");
        }
      }
      return pvg.success("Assignment does not exist");
    },
    parameters: { description: "Verify assignment with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAssignment() {
  return bp.EventSet("any-add-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a assignment");
  });
}
function matchAddAssignment(id) {
  return bp.EventSet("add-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a assignment with " + "id " + id;
  });
}
function matchAnyDeleteAssignment() {
  return bp.EventSet("any-del-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a assignment");
  });
}
function matchDeleteAssignment(id) {
  return bp.EventSet("del-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a assignment with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAssignment() {
  return bp.EventSet("any-update-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a assignment");
  });
}
function matchUpdateAssignment(id) {
  return bp.EventSet("update-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a assignment with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyAssignmentAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ assignment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ assignment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAssignmentAdded(id) {
  waitFor(matchAddAssignment(id));
}
function waitForAssignmentDeleted(id) {
  waitFor(matchDeleteAssignment(id));
}
function waitForAnyAssignmentDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ assignment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ assignment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForAssignmentUpdated(id) {
  waitFor(matchUpdateAssignment(id));
}
function waitForAnyAssignmentUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ assignment\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ assignment\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAssignmentUpdated(id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].id === id) {
          return pvg.success("Assignment updated (present)");
        }
      }
      return pvg.fail("Expected a assignment to be present after update, but it is not");
    },
    parameters: { description: "Verify assignment with " + "id " + id + " exists" }
  });
}


/** === Classroom Operations === */

// CREATE
function addClassroom(id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a classroom with " + "id " + id }
    });
}

// DELETE
function deleteClassroom(id) {
  svc.delete("/classrooms/" + id, {
    parameters: { description: "Delete a classroom with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingClassroom(id) {
  svc.delete("/classrooms/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a classroom with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingClassroom(id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a classroom with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a classroom with " + "id " + id }
  });
}

// UPDATE
function updateClassroom(id) {
  svc.put("/classrooms/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a classroom with " + "id " + id }
    });
}

// GET one
function getClassroom(id) {
  svc.get("/classrooms/" + id, {
    parameters: { description: "Get a classroom with " + "id " + id }
  });
}

// LIST all
function listClassrooms() {
  svc.get("/classrooms", {
    parameters: { description: "List classrooms" }
  });
}

// Verify exists (by list)
function verifyClassroomExists(id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].id === id) {
          return pvg.success("Classroom exists");
        }
      }
      return pvg.fail("Expected a classroom to exist but it does not");
    },
    parameters: { description: "Verify classroom with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyClassroomDoesNotExist(id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].id === id) {
          return pvg.fail("Expected a classroom to not exist but it does");
        }
      }
      return pvg.success("Classroom does not exist");
    },
    parameters: { description: "Verify classroom with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddClassroom() {
  return bp.EventSet("any-add-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a classroom");
  });
}
function matchAddClassroom(id) {
  return bp.EventSet("add-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a classroom with " + "id " + id;
  });
}
function matchAnyDeleteClassroom() {
  return bp.EventSet("any-del-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a classroom");
  });
}
function matchDeleteClassroom(id) {
  return bp.EventSet("del-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a classroom with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateClassroom() {
  return bp.EventSet("any-update-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a classroom");
  });
}
function matchUpdateClassroom(id) {
  return bp.EventSet("update-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a classroom with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyClassroomAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ classroom\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ classroom\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForClassroomAdded(id) {
  waitFor(matchAddClassroom(id));
}
function waitForClassroomDeleted(id) {
  waitFor(matchDeleteClassroom(id));
}
function waitForAnyClassroomDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ classroom\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ classroom\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForClassroomUpdated(id) {
  waitFor(matchUpdateClassroom(id));
}
function waitForAnyClassroomUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ classroom\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ classroom\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyClassroomUpdated(id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].id === id) {
          return pvg.success("Classroom updated (present)");
        }
      }
      return pvg.fail("Expected a classroom to be present after update, but it is not");
    },
    parameters: { description: "Verify classroom with " + "id " + id + " exists" }
  });
}


/** === Codes_of_conduct Operations === */

// CREATE
function addCodes_of_conduct(key) {
  svc.post("/codes_of_conduct", {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Add a codes_of_conduct with " + "key " + key }
    });
}

// DELETE
function deleteCodes_of_conduct(key) {
  svc.delete("/codes_of_conduct/" + key, {
    parameters: { description: "Delete a codes_of_conduct with " + "key " + key }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCodes_of_conduct(key) {
  svc.delete("/codes_of_conduct/" + key, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a codes_of_conduct with " + "key " + key }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCodes_of_conduct(key) {
  svc.post("/codes_of_conduct", {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Add a codes_of_conduct with " + "key " + key }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a codes_of_conduct with " + "key " + key }
  });
}

// UPDATE
function updateCodes_of_conduct(key) {
  svc.put("/codes_of_conduct/" + key, {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Update a codes_of_conduct with " + "key " + key }
    });
}

// GET one
function getCodes_of_conduct(key) {
  svc.get("/codes_of_conduct/" + key, {
    parameters: { description: "Get a codes_of_conduct with " + "key " + key }
  });
}

// LIST all
function listCodes_of_conduct() {
  svc.get("/codes_of_conduct", {
    parameters: { description: "List codes_of_conduct" }
  });
}

// Verify exists (by list)
function verifyCodes_of_conductExists(key) {
  svc.get("/codes_of_conduct", {
    callback: function (response) {
      codes_of_conduct = JSON.parse(response.body);
      for (let i = 0; i < codes_of_conduct.length; i++) {
        if (codes_of_conduct[i].key === key) {
          return pvg.success("Codes_of_conduct exists");
        }
      }
      return pvg.fail("Expected a codes_of_conduct to exist but it does not");
    },
    parameters: { description: "Verify codes_of_conduct with " + "key " + key + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCodes_of_conductDoesNotExist(key) {
  svc.get("/codes_of_conduct", {
    callback: function (response) {
      codes_of_conduct = JSON.parse(response.body);
      for (let i = 0; i < codes_of_conduct.length; i++) {
        if (codes_of_conduct[i].key === key) {
          return pvg.fail("Expected a codes_of_conduct to not exist but it does");
        }
      }
      return pvg.success("Codes_of_conduct does not exist");
    },
    parameters: { description: "Verify codes_of_conduct with " + "key " + key + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCodes_of_conduct() {
  return bp.EventSet("any-add-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a codes_of_conduct");
  });
}
function matchAddCodes_of_conduct(key) {
  return bp.EventSet("add-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a codes_of_conduct with " + "key " + key;
  });
}
function matchAnyDeleteCodes_of_conduct() {
  return bp.EventSet("any-del-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a codes_of_conduct");
  });
}
function matchDeleteCodes_of_conduct(key) {
  return bp.EventSet("del-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a codes_of_conduct with " + "key " + key;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateCodes_of_conduct() {
  return bp.EventSet("any-update-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a codes_of_conduct");
  });
}
function matchUpdateCodes_of_conduct(key) {
  return bp.EventSet("update-codes_of_conduct", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a codes_of_conduct with " + "key " + key;
  });
}

// Wait helpers
function waitForAnyCodes_of_conductAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ codes_of_conduct\ with\ key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ codes_of_conduct\ with\ key\ (.+)$/);
    return { key: m[1] };
}
function waitForCodes_of_conductAdded(key) {
  waitFor(matchAddCodes_of_conduct(key));
}
function waitForCodes_of_conductDeleted(key) {
  waitFor(matchDeleteCodes_of_conduct(key));
}
function waitForAnyCodes_of_conductDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ codes_of_conduct\ with\ key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ codes_of_conduct\ with\ key\ (.+)$/);
    return { key: m[1] };
}
function waitForCodes_of_conductUpdated(key) {
  waitFor(matchUpdateCodes_of_conduct(key));
}
function waitForAnyCodes_of_conductUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ codes_of_conduct\ with\ key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ codes_of_conduct\ with\ key\ (.+)$/);
    return { key: m[1] };
}

// Verify updated (presence-by-list)
function verifyCodes_of_conductUpdated(key) {
  svc.get("/codes_of_conduct", {
    callback: function (response) {
      codes_of_conduct = JSON.parse(response.body);
      for (let i = 0; i < codes_of_conduct.length; i++) {
        if (codes_of_conduct[i].key === key) {
          return pvg.success("Codes_of_conduct updated (present)");
        }
      }
      return pvg.fail("Expected a codes_of_conduct to be present after update, but it is not");
    },
    parameters: { description: "Verify codes_of_conduct with " + "key " + key + " exists" }
  });
}


/** === Credential Operations === */

// CREATE
function addCredential(id) {
  svc.post("/credentials", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a credential with " + "id " + id }
    });
}

// DELETE
function deleteCredential(id) {
  svc.delete("/credentials/" + id, {
    parameters: { description: "Delete a credential with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCredential(id) {
  svc.delete("/credentials/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a credential with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCredential(id) {
  svc.post("/credentials", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a credential with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a credential with " + "id " + id }
  });
}

// UPDATE
function updateCredential(id) {
  svc.put("/credentials/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a credential with " + "id " + id }
    });
}

// GET one
function getCredential(id) {
  svc.get("/credentials/" + id, {
    parameters: { description: "Get a credential with " + "id " + id }
  });
}

// LIST all
function listCredentials() {
  svc.get("/credentials", {
    parameters: { description: "List credentials" }
  });
}

// Verify exists (by list)
function verifyCredentialExists(id) {
  svc.get("/credentials", {
    callback: function (response) {
      credential = JSON.parse(response.body);
      for (let i = 0; i < credential.length; i++) {
        if (credential[i].id === id) {
          return pvg.success("Credential exists");
        }
      }
      return pvg.fail("Expected a credential to exist but it does not");
    },
    parameters: { description: "Verify credential with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyCredentialDoesNotExist(id) {
  svc.get("/credentials", {
    callback: function (response) {
      credential = JSON.parse(response.body);
      for (let i = 0; i < credential.length; i++) {
        if (credential[i].id === id) {
          return pvg.fail("Expected a credential to not exist but it does");
        }
      }
      return pvg.success("Credential does not exist");
    },
    parameters: { description: "Verify credential with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddCredential() {
  return bp.EventSet("any-add-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a credential");
  });
}
function matchAddCredential(id) {
  return bp.EventSet("add-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a credential with " + "id " + id;
  });
}
function matchAnyDeleteCredential() {
  return bp.EventSet("any-del-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a credential");
  });
}
function matchDeleteCredential(id) {
  return bp.EventSet("del-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a credential with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateCredential() {
  return bp.EventSet("any-update-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a credential");
  });
}
function matchUpdateCredential(id) {
  return bp.EventSet("update-credential", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a credential with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyCredentialAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ credential\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ credential\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCredentialAdded(id) {
  waitFor(matchAddCredential(id));
}
function waitForCredentialDeleted(id) {
  waitFor(matchDeleteCredential(id));
}
function waitForAnyCredentialDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ credential\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ credential\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForCredentialUpdated(id) {
  waitFor(matchUpdateCredential(id));
}
function waitForAnyCredentialUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ credential\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ credential\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyCredentialUpdated(id) {
  svc.get("/credentials", {
    callback: function (response) {
      credential = JSON.parse(response.body);
      for (let i = 0; i < credential.length; i++) {
        if (credential[i].id === id) {
          return pvg.success("Credential updated (present)");
        }
      }
      return pvg.fail("Expected a credential to be present after update, but it is not");
    },
    parameters: { description: "Verify credential with " + "id " + id + " exists" }
  });
}


/** === Emoji Operations === */

// CREATE
function addEmoji(id) {
  svc.post("/emojis", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a emoji with " + "id " + id }
    });
}

// DELETE
function deleteEmoji(id) {
  svc.delete("/emojis/" + id, {
    parameters: { description: "Delete a emoji with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEmoji(id) {
  svc.delete("/emojis/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a emoji with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEmoji(id) {
  svc.post("/emojis", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a emoji with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a emoji with " + "id " + id }
  });
}

// UPDATE
function updateEmoji(id) {
  svc.put("/emojis/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a emoji with " + "id " + id }
    });
}

// GET one
function getEmoji(id) {
  svc.get("/emojis/" + id, {
    parameters: { description: "Get a emoji with " + "id " + id }
  });
}

// LIST all
function listEmojis() {
  svc.get("/emojis", {
    parameters: { description: "List emojis" }
  });
}

// Verify exists (by list)
function verifyEmojiExists(id) {
  svc.get("/emojis", {
    callback: function (response) {
      emoji = JSON.parse(response.body);
      for (let i = 0; i < emoji.length; i++) {
        if (emoji[i].id === id) {
          return pvg.success("Emoji exists");
        }
      }
      return pvg.fail("Expected a emoji to exist but it does not");
    },
    parameters: { description: "Verify emoji with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEmojiDoesNotExist(id) {
  svc.get("/emojis", {
    callback: function (response) {
      emoji = JSON.parse(response.body);
      for (let i = 0; i < emoji.length; i++) {
        if (emoji[i].id === id) {
          return pvg.fail("Expected a emoji to not exist but it does");
        }
      }
      return pvg.success("Emoji does not exist");
    },
    parameters: { description: "Verify emoji with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEmoji() {
  return bp.EventSet("any-add-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a emoji");
  });
}
function matchAddEmoji(id) {
  return bp.EventSet("add-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a emoji with " + "id " + id;
  });
}
function matchAnyDeleteEmoji() {
  return bp.EventSet("any-del-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a emoji");
  });
}
function matchDeleteEmoji(id) {
  return bp.EventSet("del-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a emoji with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateEmoji() {
  return bp.EventSet("any-update-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a emoji");
  });
}
function matchUpdateEmoji(id) {
  return bp.EventSet("update-emoji", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a emoji with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyEmojiAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ emoji\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ emoji\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEmojiAdded(id) {
  waitFor(matchAddEmoji(id));
}
function waitForEmojiDeleted(id) {
  waitFor(matchDeleteEmoji(id));
}
function waitForAnyEmojiDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ emoji\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ emoji\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEmojiUpdated(id) {
  waitFor(matchUpdateEmoji(id));
}
function waitForAnyEmojiUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ emoji\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ emoji\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyEmojiUpdated(id) {
  svc.get("/emojis", {
    callback: function (response) {
      emoji = JSON.parse(response.body);
      for (let i = 0; i < emoji.length; i++) {
        if (emoji[i].id === id) {
          return pvg.success("Emoji updated (present)");
        }
      }
      return pvg.fail("Expected a emoji to be present after update, but it is not");
    },
    parameters: { description: "Verify emoji with " + "id " + id + " exists" }
  });
}


/** === Enterprise Operations === */

// CREATE
function addEnterprise(enterprise) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Add a enterprise with " + "enterprise " + enterprise }
    });
}

// DELETE
function deleteEnterprise(enterprise) {
  svc.delete("/enterprises/" + enterprise, {
    parameters: { description: "Delete a enterprise with " + "enterprise " + enterprise }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEnterprise(enterprise) {
  svc.delete("/enterprises/" + enterprise, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a enterprise with " + "enterprise " + enterprise }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEnterprise(enterprise) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Add a enterprise with " + "enterprise " + enterprise }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a enterprise with " + "enterprise " + enterprise }
  });
}

// UPDATE
function updateEnterprise(enterprise) {
  svc.put("/enterprises/" + enterprise, {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Update a enterprise with " + "enterprise " + enterprise }
    });
}

// GET one
function getEnterprise(enterprise) {
  svc.get("/enterprises/" + enterprise, {
    parameters: { description: "Get a enterprise with " + "enterprise " + enterprise }
  });
}

// LIST all
function listEnterprises() {
  svc.get("/enterprises", {
    parameters: { description: "List enterprises" }
  });
}

// Verify exists (by list)
function verifyEnterpriseExists(enterprise) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise) {
          return pvg.success("Enterprise exists");
        }
      }
      return pvg.fail("Expected a enterprise to exist but it does not");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEnterpriseDoesNotExist(enterprise) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise) {
          return pvg.fail("Expected a enterprise to not exist but it does");
        }
      }
      return pvg.success("Enterprise does not exist");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEnterprise() {
  return bp.EventSet("any-add-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a enterprise");
  });
}
function matchAddEnterprise(enterprise) {
  return bp.EventSet("add-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a enterprise with " + "enterprise " + enterprise;
  });
}
function matchAnyDeleteEnterprise() {
  return bp.EventSet("any-del-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a enterprise");
  });
}
function matchDeleteEnterprise(enterprise) {
  return bp.EventSet("del-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a enterprise with " + "enterprise " + enterprise;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateEnterprise() {
  return bp.EventSet("any-update-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a enterprise");
  });
}
function matchUpdateEnterprise(enterprise) {
  return bp.EventSet("update-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a enterprise with " + "enterprise " + enterprise;
  });
}

// Wait helpers
function waitForAnyEnterpriseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ enterprise\ with\ enterprise\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ enterprise\ with\ enterprise\ (.+)$/);
    return { enterprise: m[1] };
}
function waitForEnterpriseAdded(enterprise) {
  waitFor(matchAddEnterprise(enterprise));
}
function waitForEnterpriseDeleted(enterprise) {
  waitFor(matchDeleteEnterprise(enterprise));
}
function waitForAnyEnterpriseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ enterprise\ with\ enterprise\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ enterprise\ with\ enterprise\ (.+)$/);
    return { enterprise: m[1] };
}
function waitForEnterpriseUpdated(enterprise) {
  waitFor(matchUpdateEnterprise(enterprise));
}
function waitForAnyEnterpriseUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ enterprise\ with\ enterprise\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ enterprise\ with\ enterprise\ (.+)$/);
    return { enterprise: m[1] };
}

// Verify updated (presence-by-list)
function verifyEnterpriseUpdated(enterprise) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise) {
          return pvg.success("Enterprise updated (present)");
        }
      }
      return pvg.fail("Expected a enterprise to be present after update, but it is not");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " exists" }
  });
}


/** === Event Operations === */

// CREATE
function addEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with " + "id " + id }
    });
}

// DELETE
function deleteEvent(id) {
  svc.delete("/events/" + id, {
    parameters: { description: "Delete a event with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEvent(id) {
  svc.delete("/events/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a event with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a event with " + "id " + id }
  });
}

// UPDATE
function updateEvent(id) {
  svc.put("/events/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a event with " + "id " + id }
    });
}

// GET one
function getEvent(id) {
  svc.get("/events/" + id, {
    parameters: { description: "Get a event with " + "id " + id }
  });
}

// LIST all
function listEvents() {
  svc.get("/events", {
    parameters: { description: "List events" }
  });
}

// Verify exists (by list)
function verifyEventExists(id) {
  svc.get("/events", {
    callback: function (response) {
      event = JSON.parse(response.body);
      for (let i = 0; i < event.length; i++) {
        if (event[i].id === id) {
          return pvg.success("Event exists");
        }
      }
      return pvg.fail("Expected a event to exist but it does not");
    },
    parameters: { description: "Verify event with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEventDoesNotExist(id) {
  svc.get("/events", {
    callback: function (response) {
      event = JSON.parse(response.body);
      for (let i = 0; i < event.length; i++) {
        if (event[i].id === id) {
          return pvg.fail("Expected a event to not exist but it does");
        }
      }
      return pvg.success("Event does not exist");
    },
    parameters: { description: "Verify event with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEvent() {
  return bp.EventSet("any-add-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a event");
  });
}
function matchAddEvent(id) {
  return bp.EventSet("add-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a event with " + "id " + id;
  });
}
function matchAnyDeleteEvent() {
  return bp.EventSet("any-del-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a event");
  });
}
function matchDeleteEvent(id) {
  return bp.EventSet("del-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a event with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateEvent() {
  return bp.EventSet("any-update-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a event");
  });
}
function matchUpdateEvent(id) {
  return bp.EventSet("update-event", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a event with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyEventAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ event\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ event\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEventAdded(id) {
  waitFor(matchAddEvent(id));
}
function waitForEventDeleted(id) {
  waitFor(matchDeleteEvent(id));
}
function waitForAnyEventDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ event\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ event\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEventUpdated(id) {
  waitFor(matchUpdateEvent(id));
}
function waitForAnyEventUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ event\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ event\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyEventUpdated(id) {
  svc.get("/events", {
    callback: function (response) {
      event = JSON.parse(response.body);
      for (let i = 0; i < event.length; i++) {
        if (event[i].id === id) {
          return pvg.success("Event updated (present)");
        }
      }
      return pvg.fail("Expected a event to be present after update, but it is not");
    },
    parameters: { description: "Verify event with " + "id " + id + " exists" }
  });
}


/** === Feed Operations === */

// CREATE
function addFeed(id) {
  svc.post("/feeds", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a feed with " + "id " + id }
    });
}

// DELETE
function deleteFeed(id) {
  svc.delete("/feeds/" + id, {
    parameters: { description: "Delete a feed with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingFeed(id) {
  svc.delete("/feeds/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a feed with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingFeed(id) {
  svc.post("/feeds", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a feed with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a feed with " + "id " + id }
  });
}

// UPDATE
function updateFeed(id) {
  svc.put("/feeds/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a feed with " + "id " + id }
    });
}

// GET one
function getFeed(id) {
  svc.get("/feeds/" + id, {
    parameters: { description: "Get a feed with " + "id " + id }
  });
}

// LIST all
function listFeeds() {
  svc.get("/feeds", {
    parameters: { description: "List feeds" }
  });
}

// Verify exists (by list)
function verifyFeedExists(id) {
  svc.get("/feeds", {
    callback: function (response) {
      feed = JSON.parse(response.body);
      for (let i = 0; i < feed.length; i++) {
        if (feed[i].id === id) {
          return pvg.success("Feed exists");
        }
      }
      return pvg.fail("Expected a feed to exist but it does not");
    },
    parameters: { description: "Verify feed with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyFeedDoesNotExist(id) {
  svc.get("/feeds", {
    callback: function (response) {
      feed = JSON.parse(response.body);
      for (let i = 0; i < feed.length; i++) {
        if (feed[i].id === id) {
          return pvg.fail("Expected a feed to not exist but it does");
        }
      }
      return pvg.success("Feed does not exist");
    },
    parameters: { description: "Verify feed with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddFeed() {
  return bp.EventSet("any-add-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a feed");
  });
}
function matchAddFeed(id) {
  return bp.EventSet("add-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a feed with " + "id " + id;
  });
}
function matchAnyDeleteFeed() {
  return bp.EventSet("any-del-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a feed");
  });
}
function matchDeleteFeed(id) {
  return bp.EventSet("del-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a feed with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateFeed() {
  return bp.EventSet("any-update-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a feed");
  });
}
function matchUpdateFeed(id) {
  return bp.EventSet("update-feed", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a feed with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyFeedAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ feed\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ feed\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFeedAdded(id) {
  waitFor(matchAddFeed(id));
}
function waitForFeedDeleted(id) {
  waitFor(matchDeleteFeed(id));
}
function waitForAnyFeedDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ feed\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ feed\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForFeedUpdated(id) {
  waitFor(matchUpdateFeed(id));
}
function waitForAnyFeedUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ feed\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ feed\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyFeedUpdated(id) {
  svc.get("/feeds", {
    callback: function (response) {
      feed = JSON.parse(response.body);
      for (let i = 0; i < feed.length; i++) {
        if (feed[i].id === id) {
          return pvg.success("Feed updated (present)");
        }
      }
      return pvg.fail("Expected a feed to be present after update, but it is not");
    },
    parameters: { description: "Verify feed with " + "id " + id + " exists" }
  });
}


/** === Gist Operations === */

// CREATE
function addGist(gist_id, comment_id, sha) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Add a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
    });
}

// DELETE
function deleteGist(gist_id, comment_id, sha) {
  svc.delete("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    parameters: { description: "Delete a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGist(gist_id, comment_id, sha) {
  svc.delete("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGist(gist_id, comment_id, sha) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Add a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
  });
}

// UPDATE
function updateGist(gist_id, comment_id, sha) {
  svc.put("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Update a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
    });
}

// GET one
function getGist(gist_id, comment_id, sha) {
  svc.get("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    parameters: { description: "Get a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha }
  });
}

// LIST all
function listGists() {
  svc.get("/gists", {
    parameters: { description: "List gists" }
  });
}

// Verify exists (by list)
function verifyGistExists(gist_id, comment_id, sha) {
  svc.get("/gists", {
    callback: function (response) {
      gist = JSON.parse(response.body);
      for (let i = 0; i < gist.length; i++) {
        if (gist[i].gist_id === gist_id && gist[i].comment_id === comment_id && gist[i].sha === sha) {
          return pvg.success("Gist exists");
        }
      }
      return pvg.fail("Expected a gist to exist but it does not");
    },
    parameters: { description: "Verify gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGistDoesNotExist(gist_id, comment_id, sha) {
  svc.get("/gists", {
    callback: function (response) {
      gist = JSON.parse(response.body);
      for (let i = 0; i < gist.length; i++) {
        if (gist[i].gist_id === gist_id && gist[i].comment_id === comment_id && gist[i].sha === sha) {
          return pvg.fail("Expected a gist to not exist but it does");
        }
      }
      return pvg.success("Gist does not exist");
    },
    parameters: { description: "Verify gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGist() {
  return bp.EventSet("any-add-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a gist");
  });
}
function matchAddGist(gist_id, comment_id, sha) {
  return bp.EventSet("add-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha;
  });
}
function matchAnyDeleteGist() {
  return bp.EventSet("any-del-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a gist");
  });
}
function matchDeleteGist(gist_id, comment_id, sha) {
  return bp.EventSet("del-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateGist() {
  return bp.EventSet("any-update-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a gist");
  });
}
function matchUpdateGist(gist_id, comment_id, sha) {
  return bp.EventSet("update-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha;
  });
}

// Wait helpers
function waitForAnyGistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/);
    return { gist_id: parseInt(m[1]), comment_id: parseInt(m[2]), sha: m[3] };
}
function waitForGistAdded(gist_id, comment_id, sha) {
  waitFor(matchAddGist(gist_id, comment_id, sha));
}
function waitForGistDeleted(gist_id, comment_id, sha) {
  waitFor(matchDeleteGist(gist_id, comment_id, sha));
}
function waitForAnyGistDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/);
    return { gist_id: parseInt(m[1]), comment_id: parseInt(m[2]), sha: m[3] };
}
function waitForGistUpdated(gist_id, comment_id, sha) {
  waitFor(matchUpdateGist(gist_id, comment_id, sha));
}
function waitForAnyGistUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/);
    return { gist_id: parseInt(m[1]), comment_id: parseInt(m[2]), sha: m[3] };
}

// Verify updated (presence-by-list)
function verifyGistUpdated(gist_id, comment_id, sha) {
  svc.get("/gists", {
    callback: function (response) {
      gist = JSON.parse(response.body);
      for (let i = 0; i < gist.length; i++) {
        if (gist[i].gist_id === gist_id && gist[i].comment_id === comment_id && gist[i].sha === sha) {
          return pvg.success("Gist updated (present)");
        }
      }
      return pvg.fail("Expected a gist to be present after update, but it is not");
    },
    parameters: { description: "Verify gist with " + "gist_id " + gist_id + " and " + "comment_id " + comment_id + " and " + "sha " + sha + " exists" }
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


/** === Installation Operations === */

// CREATE
function addInstallation(id) {
  svc.post("/installation", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a installation with " + "id " + id }
    });
}

// DELETE
function deleteInstallation(id) {
  svc.delete("/installation/" + id, {
    parameters: { description: "Delete a installation with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingInstallation(id) {
  svc.delete("/installation/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a installation with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingInstallation(id) {
  svc.post("/installation", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a installation with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a installation with " + "id " + id }
  });
}

// UPDATE
function updateInstallation(id) {
  svc.put("/installation/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a installation with " + "id " + id }
    });
}

// GET one
function getInstallation(id) {
  svc.get("/installation/" + id, {
    parameters: { description: "Get a installation with " + "id " + id }
  });
}

// LIST all
function listInstallation() {
  svc.get("/installation", {
    parameters: { description: "List installation" }
  });
}

// Verify exists (by list)
function verifyInstallationExists(id) {
  svc.get("/installation", {
    callback: function (response) {
      installation = JSON.parse(response.body);
      for (let i = 0; i < installation.length; i++) {
        if (installation[i].id === id) {
          return pvg.success("Installation exists");
        }
      }
      return pvg.fail("Expected a installation to exist but it does not");
    },
    parameters: { description: "Verify installation with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyInstallationDoesNotExist(id) {
  svc.get("/installation", {
    callback: function (response) {
      installation = JSON.parse(response.body);
      for (let i = 0; i < installation.length; i++) {
        if (installation[i].id === id) {
          return pvg.fail("Expected a installation to not exist but it does");
        }
      }
      return pvg.success("Installation does not exist");
    },
    parameters: { description: "Verify installation with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddInstallation() {
  return bp.EventSet("any-add-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a installation");
  });
}
function matchAddInstallation(id) {
  return bp.EventSet("add-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a installation with " + "id " + id;
  });
}
function matchAnyDeleteInstallation() {
  return bp.EventSet("any-del-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a installation");
  });
}
function matchDeleteInstallation(id) {
  return bp.EventSet("del-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a installation with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateInstallation() {
  return bp.EventSet("any-update-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a installation");
  });
}
function matchUpdateInstallation(id) {
  return bp.EventSet("update-installation", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a installation with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyInstallationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ installation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ installation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForInstallationAdded(id) {
  waitFor(matchAddInstallation(id));
}
function waitForInstallationDeleted(id) {
  waitFor(matchDeleteInstallation(id));
}
function waitForAnyInstallationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ installation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ installation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForInstallationUpdated(id) {
  waitFor(matchUpdateInstallation(id));
}
function waitForAnyInstallationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ installation\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ installation\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyInstallationUpdated(id) {
  svc.get("/installation", {
    callback: function (response) {
      installation = JSON.parse(response.body);
      for (let i = 0; i < installation.length; i++) {
        if (installation[i].id === id) {
          return pvg.success("Installation updated (present)");
        }
      }
      return pvg.fail("Expected a installation to be present after update, but it is not");
    },
    parameters: { description: "Verify installation with " + "id " + id + " exists" }
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


/** === Marketplace_listing Operations === */

// CREATE
function addMarketplace_listing(id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a marketplace_listing with " + "id " + id }
    });
}

// DELETE
function deleteMarketplace_listing(id) {
  svc.delete("/marketplace_listing/" + id, {
    parameters: { description: "Delete a marketplace_listing with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarketplace_listing(id) {
  svc.delete("/marketplace_listing/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a marketplace_listing with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarketplace_listing(id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a marketplace_listing with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a marketplace_listing with " + "id " + id }
  });
}

// UPDATE
function updateMarketplace_listing(id) {
  svc.put("/marketplace_listing/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a marketplace_listing with " + "id " + id }
    });
}

// GET one
function getMarketplace_listing(id) {
  svc.get("/marketplace_listing/" + id, {
    parameters: { description: "Get a marketplace_listing with " + "id " + id }
  });
}

// LIST all
function listMarketplace_listing() {
  svc.get("/marketplace_listing", {
    parameters: { description: "List marketplace_listing" }
  });
}

// Verify exists (by list)
function verifyMarketplace_listingExists(id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].id === id) {
          return pvg.success("Marketplace_listing exists");
        }
      }
      return pvg.fail("Expected a marketplace_listing to exist but it does not");
    },
    parameters: { description: "Verify marketplace_listing with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMarketplace_listingDoesNotExist(id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].id === id) {
          return pvg.fail("Expected a marketplace_listing to not exist but it does");
        }
      }
      return pvg.success("Marketplace_listing does not exist");
    },
    parameters: { description: "Verify marketplace_listing with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMarketplace_listing() {
  return bp.EventSet("any-add-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a marketplace_listing");
  });
}
function matchAddMarketplace_listing(id) {
  return bp.EventSet("add-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a marketplace_listing with " + "id " + id;
  });
}
function matchAnyDeleteMarketplace_listing() {
  return bp.EventSet("any-del-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a marketplace_listing");
  });
}
function matchDeleteMarketplace_listing(id) {
  return bp.EventSet("del-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a marketplace_listing with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMarketplace_listing() {
  return bp.EventSet("any-update-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a marketplace_listing");
  });
}
function matchUpdateMarketplace_listing(id) {
  return bp.EventSet("update-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a marketplace_listing with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMarketplace_listingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ marketplace_listing\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ marketplace_listing\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarketplace_listingAdded(id) {
  waitFor(matchAddMarketplace_listing(id));
}
function waitForMarketplace_listingDeleted(id) {
  waitFor(matchDeleteMarketplace_listing(id));
}
function waitForAnyMarketplace_listingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ marketplace_listing\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ marketplace_listing\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMarketplace_listingUpdated(id) {
  waitFor(matchUpdateMarketplace_listing(id));
}
function waitForAnyMarketplace_listingUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ marketplace_listing\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ marketplace_listing\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMarketplace_listingUpdated(id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].id === id) {
          return pvg.success("Marketplace_listing updated (present)");
        }
      }
      return pvg.fail("Expected a marketplace_listing to be present after update, but it is not");
    },
    parameters: { description: "Verify marketplace_listing with " + "id " + id + " exists" }
  });
}


/** === Meta Operations === */

// CREATE
function addMeta(id) {
  svc.post("/meta", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a meta with " + "id " + id }
    });
}

// DELETE
function deleteMeta(id) {
  svc.delete("/meta/" + id, {
    parameters: { description: "Delete a meta with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMeta(id) {
  svc.delete("/meta/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a meta with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMeta(id) {
  svc.post("/meta", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a meta with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a meta with " + "id " + id }
  });
}

// UPDATE
function updateMeta(id) {
  svc.put("/meta/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a meta with " + "id " + id }
    });
}

// GET one
function getMeta(id) {
  svc.get("/meta/" + id, {
    parameters: { description: "Get a meta with " + "id " + id }
  });
}

// LIST all
function listMeta() {
  svc.get("/meta", {
    parameters: { description: "List meta" }
  });
}

// Verify exists (by list)
function verifyMetaExists(id) {
  svc.get("/meta", {
    callback: function (response) {
      meta = JSON.parse(response.body);
      for (let i = 0; i < meta.length; i++) {
        if (meta[i].id === id) {
          return pvg.success("Meta exists");
        }
      }
      return pvg.fail("Expected a meta to exist but it does not");
    },
    parameters: { description: "Verify meta with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMetaDoesNotExist(id) {
  svc.get("/meta", {
    callback: function (response) {
      meta = JSON.parse(response.body);
      for (let i = 0; i < meta.length; i++) {
        if (meta[i].id === id) {
          return pvg.fail("Expected a meta to not exist but it does");
        }
      }
      return pvg.success("Meta does not exist");
    },
    parameters: { description: "Verify meta with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMeta() {
  return bp.EventSet("any-add-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a meta");
  });
}
function matchAddMeta(id) {
  return bp.EventSet("add-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a meta with " + "id " + id;
  });
}
function matchAnyDeleteMeta() {
  return bp.EventSet("any-del-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a meta");
  });
}
function matchDeleteMeta(id) {
  return bp.EventSet("del-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a meta with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMeta() {
  return bp.EventSet("any-update-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a meta");
  });
}
function matchUpdateMeta(id) {
  return bp.EventSet("update-meta", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a meta with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMetaAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ meta\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ meta\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMetaAdded(id) {
  waitFor(matchAddMeta(id));
}
function waitForMetaDeleted(id) {
  waitFor(matchDeleteMeta(id));
}
function waitForAnyMetaDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ meta\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ meta\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMetaUpdated(id) {
  waitFor(matchUpdateMeta(id));
}
function waitForAnyMetaUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ meta\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ meta\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMetaUpdated(id) {
  svc.get("/meta", {
    callback: function (response) {
      meta = JSON.parse(response.body);
      for (let i = 0; i < meta.length; i++) {
        if (meta[i].id === id) {
          return pvg.success("Meta updated (present)");
        }
      }
      return pvg.fail("Expected a meta to be present after update, but it is not");
    },
    parameters: { description: "Verify meta with " + "id " + id + " exists" }
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


/** === Octocat Operations === */

// CREATE
function addOctocat(id) {
  svc.post("/octocat", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a octocat with " + "id " + id }
    });
}

// DELETE
function deleteOctocat(id) {
  svc.delete("/octocat/" + id, {
    parameters: { description: "Delete a octocat with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOctocat(id) {
  svc.delete("/octocat/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a octocat with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOctocat(id) {
  svc.post("/octocat", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a octocat with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a octocat with " + "id " + id }
  });
}

// UPDATE
function updateOctocat(id) {
  svc.put("/octocat/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a octocat with " + "id " + id }
    });
}

// GET one
function getOctocat(id) {
  svc.get("/octocat/" + id, {
    parameters: { description: "Get a octocat with " + "id " + id }
  });
}

// LIST all
function listOctocat() {
  svc.get("/octocat", {
    parameters: { description: "List octocat" }
  });
}

// Verify exists (by list)
function verifyOctocatExists(id) {
  svc.get("/octocat", {
    callback: function (response) {
      octocat = JSON.parse(response.body);
      for (let i = 0; i < octocat.length; i++) {
        if (octocat[i].id === id) {
          return pvg.success("Octocat exists");
        }
      }
      return pvg.fail("Expected a octocat to exist but it does not");
    },
    parameters: { description: "Verify octocat with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOctocatDoesNotExist(id) {
  svc.get("/octocat", {
    callback: function (response) {
      octocat = JSON.parse(response.body);
      for (let i = 0; i < octocat.length; i++) {
        if (octocat[i].id === id) {
          return pvg.fail("Expected a octocat to not exist but it does");
        }
      }
      return pvg.success("Octocat does not exist");
    },
    parameters: { description: "Verify octocat with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOctocat() {
  return bp.EventSet("any-add-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a octocat");
  });
}
function matchAddOctocat(id) {
  return bp.EventSet("add-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a octocat with " + "id " + id;
  });
}
function matchAnyDeleteOctocat() {
  return bp.EventSet("any-del-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a octocat");
  });
}
function matchDeleteOctocat(id) {
  return bp.EventSet("del-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a octocat with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOctocat() {
  return bp.EventSet("any-update-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a octocat");
  });
}
function matchUpdateOctocat(id) {
  return bp.EventSet("update-octocat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a octocat with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyOctocatAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ octocat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ octocat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOctocatAdded(id) {
  waitFor(matchAddOctocat(id));
}
function waitForOctocatDeleted(id) {
  waitFor(matchDeleteOctocat(id));
}
function waitForAnyOctocatDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ octocat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ octocat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOctocatUpdated(id) {
  waitFor(matchUpdateOctocat(id));
}
function waitForAnyOctocatUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ octocat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ octocat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyOctocatUpdated(id) {
  svc.get("/octocat", {
    callback: function (response) {
      octocat = JSON.parse(response.body);
      for (let i = 0; i < octocat.length; i++) {
        if (octocat[i].id === id) {
          return pvg.success("Octocat updated (present)");
        }
      }
      return pvg.fail("Expected a octocat to be present after update, but it is not");
    },
    parameters: { description: "Verify octocat with " + "id " + id + " exists" }
  });
}


/** === Organization Operations === */

// CREATE
function addOrganization(org) {
  svc.post("/organizations", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a organization with " + "org " + org }
    });
}

// DELETE
function deleteOrganization(org) {
  svc.delete("/organizations/" + org, {
    parameters: { description: "Delete a organization with " + "org " + org }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrganization(org) {
  svc.delete("/organizations/" + org, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a organization with " + "org " + org }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrganization(org) {
  svc.post("/organizations", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a organization with " + "org " + org }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a organization with " + "org " + org }
  });
}

// UPDATE
function updateOrganization(org) {
  svc.put("/organizations/" + org, {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Update a organization with " + "org " + org }
    });
}

// GET one
function getOrganization(org) {
  svc.get("/organizations/" + org, {
    parameters: { description: "Get a organization with " + "org " + org }
  });
}

// LIST all
function listOrganizations() {
  svc.get("/organizations", {
    parameters: { description: "List organizations" }
  });
}

// Verify exists (by list)
function verifyOrganizationExists(org) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].org === org) {
          return pvg.success("Organization exists");
        }
      }
      return pvg.fail("Expected a organization to exist but it does not");
    },
    parameters: { description: "Verify organization with " + "org " + org + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrganizationDoesNotExist(org) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].org === org) {
          return pvg.fail("Expected a organization to not exist but it does");
        }
      }
      return pvg.success("Organization does not exist");
    },
    parameters: { description: "Verify organization with " + "org " + org + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrganization() {
  return bp.EventSet("any-add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a organization");
  });
}
function matchAddOrganization(org) {
  return bp.EventSet("add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a organization with " + "org " + org;
  });
}
function matchAnyDeleteOrganization() {
  return bp.EventSet("any-del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a organization");
  });
}
function matchDeleteOrganization(org) {
  return bp.EventSet("del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a organization with " + "org " + org;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrganization() {
  return bp.EventSet("any-update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a organization");
  });
}
function matchUpdateOrganization(org) {
  return bp.EventSet("update-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a organization with " + "org " + org;
  });
}

// Wait helpers
function waitForAnyOrganizationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ organization\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ organization\ with\ org\ (.+)$/);
    return { org: m[1] };
}
function waitForOrganizationAdded(org) {
  waitFor(matchAddOrganization(org));
}
function waitForOrganizationDeleted(org) {
  waitFor(matchDeleteOrganization(org));
}
function waitForAnyOrganizationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ organization\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ organization\ with\ org\ (.+)$/);
    return { org: m[1] };
}
function waitForOrganizationUpdated(org) {
  waitFor(matchUpdateOrganization(org));
}
function waitForAnyOrganizationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ organization\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ organization\ with\ org\ (.+)$/);
    return { org: m[1] };
}

// Verify updated (presence-by-list)
function verifyOrganizationUpdated(org) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].org === org) {
          return pvg.success("Organization updated (present)");
        }
      }
      return pvg.fail("Expected a organization to be present after update, but it is not");
    },
    parameters: { description: "Verify organization with " + "org " + org + " exists" }
  });
}


/** === Org Operations === */

// CREATE
function addOrg(org, secret_name, repository_id) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, secret_name: secret_name, repository_id: repository_id }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
    });
}

// DELETE
function deleteOrg(org, secret_name, repository_id) {
  svc.delete("/orgs/" + org + "/"+ secret_name + "/"+ repository_id, {
    parameters: { description: "Delete a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org, secret_name, repository_id) {
  svc.delete("/orgs/" + org + "/"+ secret_name + "/"+ repository_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org, secret_name, repository_id) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, secret_name: secret_name, repository_id: repository_id }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
  });
}

// UPDATE
function updateOrg(org, secret_name, repository_id) {
  svc.put("/orgs/" + org + "/"+ secret_name + "/"+ repository_id, {
      body: JSON.stringify({ org: org, secret_name: secret_name, repository_id: repository_id }),
      parameters: { description: "Update a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
    });
}

// GET one
function getOrg(org, secret_name, repository_id) {
  svc.get("/orgs/" + org + "/"+ secret_name + "/"+ repository_id, {
    parameters: { description: "Get a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id }
  });
}

// LIST all
function listOrgs() {
  svc.get("/orgs", {
    parameters: { description: "List orgs" }
  });
}

// Verify exists (by list)
function verifyOrgExists(org, secret_name, repository_id) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].secret_name === secret_name && org[i].repository_id === repository_id) {
          return pvg.success("Org exists");
        }
      }
      return pvg.fail("Expected a org to exist but it does not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrgDoesNotExist(org, secret_name, repository_id) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].secret_name === secret_name && org[i].repository_id === repository_id) {
          return pvg.fail("Expected a org to not exist but it does");
        }
      }
      return pvg.success("Org does not exist");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrg() {
  return bp.EventSet("any-add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a org");
  });
}
function matchAddOrg(org, secret_name, repository_id) {
  return bp.EventSet("add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id;
  });
}
function matchAnyDeleteOrg() {
  return bp.EventSet("any-del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a org");
  });
}
function matchDeleteOrg(org, secret_name, repository_id) {
  return bp.EventSet("del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrg() {
  return bp.EventSet("any-update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a org");
  });
}
function matchUpdateOrg(org, secret_name, repository_id) {
  return bp.EventSet("update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id;
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/);
    return { org: m[1], secret_name: m[2], repository_id: parseInt(m[3]) };
}
function waitForOrgAdded(org, secret_name, repository_id) {
  waitFor(matchAddOrg(org, secret_name, repository_id));
}
function waitForOrgDeleted(org, secret_name, repository_id) {
  waitFor(matchDeleteOrg(org, secret_name, repository_id));
}
function waitForAnyOrgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/);
    return { org: m[1], secret_name: m[2], repository_id: parseInt(m[3]) };
}
function waitForOrgUpdated(org, secret_name, repository_id) {
  waitFor(matchUpdateOrg(org, secret_name, repository_id));
}
function waitForAnyOrgUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ org\ with\ org\ (.+) and secret_name\ (.+) and repository_id\ (.+)$/);
    return { org: m[1], secret_name: m[2], repository_id: parseInt(m[3]) };
}

// Verify updated (presence-by-list)
function verifyOrgUpdated(org, secret_name, repository_id) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].secret_name === secret_name && org[i].repository_id === repository_id) {
          return pvg.success("Org updated (present)");
        }
      }
      return pvg.fail("Expected a org to be present after update, but it is not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "secret_name " + secret_name + " and " + "repository_id " + repository_id + " exists" }
  });
}


/** === Project Operations === */

// CREATE
function addProject(id) {
  svc.post("/projects", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a project with " + "id " + id }
    });
}

// DELETE
function deleteProject(id) {
  svc.delete("/projects/" + id, {
    parameters: { description: "Delete a project with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingProject(id) {
  svc.delete("/projects/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a project with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingProject(id) {
  svc.post("/projects", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a project with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a project with " + "id " + id }
  });
}

// UPDATE
function updateProject(id) {
  svc.put("/projects/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a project with " + "id " + id }
    });
}

// GET one
function getProject(id) {
  svc.get("/projects/" + id, {
    parameters: { description: "Get a project with " + "id " + id }
  });
}

// LIST all
function listProjects() {
  svc.get("/projects", {
    parameters: { description: "List projects" }
  });
}

// Verify exists (by list)
function verifyProjectExists(id) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].id === id) {
          return pvg.success("Project exists");
        }
      }
      return pvg.fail("Expected a project to exist but it does not");
    },
    parameters: { description: "Verify project with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyProjectDoesNotExist(id) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].id === id) {
          return pvg.fail("Expected a project to not exist but it does");
        }
      }
      return pvg.success("Project does not exist");
    },
    parameters: { description: "Verify project with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddProject() {
  return bp.EventSet("any-add-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a project");
  });
}
function matchAddProject(id) {
  return bp.EventSet("add-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a project with " + "id " + id;
  });
}
function matchAnyDeleteProject() {
  return bp.EventSet("any-del-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a project");
  });
}
function matchDeleteProject(id) {
  return bp.EventSet("del-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a project with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateProject() {
  return bp.EventSet("any-update-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a project");
  });
}
function matchUpdateProject(id) {
  return bp.EventSet("update-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a project with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyProjectAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ project\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ project\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForProjectAdded(id) {
  waitFor(matchAddProject(id));
}
function waitForProjectDeleted(id) {
  waitFor(matchDeleteProject(id));
}
function waitForAnyProjectDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ project\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ project\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForProjectUpdated(id) {
  waitFor(matchUpdateProject(id));
}
function waitForAnyProjectUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ project\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ project\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyProjectUpdated(id) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].id === id) {
          return pvg.success("Project updated (present)");
        }
      }
      return pvg.fail("Expected a project to be present after update, but it is not");
    },
    parameters: { description: "Verify project with " + "id " + id + " exists" }
  });
}


/** === Rate_limit Operations === */

// CREATE
function addRate_limit(id) {
  svc.post("/rate_limit", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rate_limit with " + "id " + id }
    });
}

// DELETE
function deleteRate_limit(id) {
  svc.delete("/rate_limit/" + id, {
    parameters: { description: "Delete a rate_limit with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRate_limit(id) {
  svc.delete("/rate_limit/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a rate_limit with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRate_limit(id) {
  svc.post("/rate_limit", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rate_limit with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a rate_limit with " + "id " + id }
  });
}

// UPDATE
function updateRate_limit(id) {
  svc.put("/rate_limit/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a rate_limit with " + "id " + id }
    });
}

// GET one
function getRate_limit(id) {
  svc.get("/rate_limit/" + id, {
    parameters: { description: "Get a rate_limit with " + "id " + id }
  });
}

// LIST all
function listRate_limit() {
  svc.get("/rate_limit", {
    parameters: { description: "List rate_limit" }
  });
}

// Verify exists (by list)
function verifyRate_limitExists(id) {
  svc.get("/rate_limit", {
    callback: function (response) {
      rate_limit = JSON.parse(response.body);
      for (let i = 0; i < rate_limit.length; i++) {
        if (rate_limit[i].id === id) {
          return pvg.success("Rate_limit exists");
        }
      }
      return pvg.fail("Expected a rate_limit to exist but it does not");
    },
    parameters: { description: "Verify rate_limit with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRate_limitDoesNotExist(id) {
  svc.get("/rate_limit", {
    callback: function (response) {
      rate_limit = JSON.parse(response.body);
      for (let i = 0; i < rate_limit.length; i++) {
        if (rate_limit[i].id === id) {
          return pvg.fail("Expected a rate_limit to not exist but it does");
        }
      }
      return pvg.success("Rate_limit does not exist");
    },
    parameters: { description: "Verify rate_limit with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRate_limit() {
  return bp.EventSet("any-add-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a rate_limit");
  });
}
function matchAddRate_limit(id) {
  return bp.EventSet("add-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a rate_limit with " + "id " + id;
  });
}
function matchAnyDeleteRate_limit() {
  return bp.EventSet("any-del-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a rate_limit");
  });
}
function matchDeleteRate_limit(id) {
  return bp.EventSet("del-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a rate_limit with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRate_limit() {
  return bp.EventSet("any-update-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a rate_limit");
  });
}
function matchUpdateRate_limit(id) {
  return bp.EventSet("update-rate_limit", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a rate_limit with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyRate_limitAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ rate_limit\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ rate_limit\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRate_limitAdded(id) {
  waitFor(matchAddRate_limit(id));
}
function waitForRate_limitDeleted(id) {
  waitFor(matchDeleteRate_limit(id));
}
function waitForAnyRate_limitDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ rate_limit\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ rate_limit\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRate_limitUpdated(id) {
  waitFor(matchUpdateRate_limit(id));
}
function waitForAnyRate_limitUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ rate_limit\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ rate_limit\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRate_limitUpdated(id) {
  svc.get("/rate_limit", {
    callback: function (response) {
      rate_limit = JSON.parse(response.body);
      for (let i = 0; i < rate_limit.length; i++) {
        if (rate_limit[i].id === id) {
          return pvg.success("Rate_limit updated (present)");
        }
      }
      return pvg.fail("Expected a rate_limit to be present after update, but it is not");
    },
    parameters: { description: "Verify rate_limit with " + "id " + id + " exists" }
  });
}


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, secret_name: secret_name, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, run_id: run_id, name: name, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
    });
}

// DELETE
function deleteRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ secret_name + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ run_id + "/"+ name + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ secret_name + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ run_id + "/"+ name + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, secret_name: secret_name, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, run_id: run_id, name: name, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
  });
}

// UPDATE
function updateRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ secret_name + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ run_id + "/"+ name + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, secret_name: secret_name, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, run_id: run_id, name: name, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
    });
}

// GET one
function getRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ secret_name + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ run_id + "/"+ name + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    parameters: { description: "Get a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id }
  });
}

// LIST all
function listRepos() {
  svc.get("/repos", {
    parameters: { description: "List repos" }
  });
}

// Verify exists (by list)
function verifyRepoExists(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].alert_number === alert_number && repo[i].secret_name === secret_name && repo[i].ghsa_id === ghsa_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].run_id === run_id && repo[i].name === name && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].alert_number === alert_number && repo[i].secret_name === secret_name && repo[i].ghsa_id === ghsa_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].run_id === run_id && repo[i].name === name && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id;
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRepo() {
  return bp.EventSet("any-update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a repo");
  });
}
function matchUpdateRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  return bp.EventSet("update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id;
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/);
    return { owner: m[1], repo: m[2], alert_number: m[3], secret_name: m[4], ghsa_id: parseInt(m[5]), analysis_id: parseInt(m[6]), language: m[7], codeql_variant_analysis_id: parseInt(m[8]), run_id: parseInt(m[9]), name: m[10], repo_owner: m[11], repo_name: m[12], sarif_id: parseInt(m[13]) };
}
function waitForRepoAdded(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  waitFor(matchAddRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id));
}
function waitForRepoDeleted(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  waitFor(matchDeleteRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/);
    return { owner: m[1], repo: m[2], alert_number: m[3], secret_name: m[4], ghsa_id: parseInt(m[5]), analysis_id: parseInt(m[6]), language: m[7], codeql_variant_analysis_id: parseInt(m[8]), run_id: parseInt(m[9]), name: m[10], repo_owner: m[11], repo_name: m[12], sarif_id: parseInt(m[13]) };
}
function waitForRepoUpdated(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  waitFor(matchUpdateRepo(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id));
}
function waitForAnyRepoUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and secret_name\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and run_id\ (.+) and name\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/);
    return { owner: m[1], repo: m[2], alert_number: m[3], secret_name: m[4], ghsa_id: parseInt(m[5]), analysis_id: parseInt(m[6]), language: m[7], codeql_variant_analysis_id: parseInt(m[8]), run_id: parseInt(m[9]), name: m[10], repo_owner: m[11], repo_name: m[12], sarif_id: parseInt(m[13]) };
}

// Verify updated (presence-by-list)
function verifyRepoUpdated(owner, repo, alert_number, secret_name, ghsa_id, analysis_id, language, codeql_variant_analysis_id, run_id, name, repo_owner, repo_name, sarif_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].alert_number === alert_number && repo[i].secret_name === secret_name && repo[i].ghsa_id === ghsa_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].run_id === run_id && repo[i].name === name && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id) {
          return pvg.success("Repo updated (present)");
        }
      }
      return pvg.fail("Expected a repo to be present after update, but it is not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "alert_number " + alert_number + " and " + "secret_name " + secret_name + " and " + "ghsa_id " + ghsa_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "run_id " + run_id + " and " + "name " + name + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " exists" }
  });
}


/** === Root Operations === */

// CREATE
function addRoot(id) {
  svc.post("/root", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a root with " + "id " + id }
    });
}

// DELETE
function deleteRoot(id) {
  svc.delete("/root/" + id, {
    parameters: { description: "Delete a root with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRoot(id) {
  svc.delete("/root/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a root with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRoot(id) {
  svc.post("/root", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a root with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a root with " + "id " + id }
  });
}

// UPDATE
function updateRoot(id) {
  svc.put("/root/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a root with " + "id " + id }
    });
}

// GET one
function getRoot(id) {
  svc.get("/root/" + id, {
    parameters: { description: "Get a root with " + "id " + id }
  });
}

// LIST all
function listRoot() {
  svc.get("/root", {
    parameters: { description: "List root" }
  });
}

// Verify exists (by list)
function verifyRootExists(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.success("Root exists");
        }
      }
      return pvg.fail("Expected a root to exist but it does not");
    },
    parameters: { description: "Verify root with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRootDoesNotExist(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.fail("Expected a root to not exist but it does");
        }
      }
      return pvg.success("Root does not exist");
    },
    parameters: { description: "Verify root with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRoot() {
  return bp.EventSet("any-add-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a root");
  });
}
function matchAddRoot(id) {
  return bp.EventSet("add-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a root with " + "id " + id;
  });
}
function matchAnyDeleteRoot() {
  return bp.EventSet("any-del-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a root");
  });
}
function matchDeleteRoot(id) {
  return bp.EventSet("del-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a root with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRoot() {
  return bp.EventSet("any-update-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a root");
  });
}
function matchUpdateRoot(id) {
  return bp.EventSet("update-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a root with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyRootAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRootAdded(id) {
  waitFor(matchAddRoot(id));
}
function waitForRootDeleted(id) {
  waitFor(matchDeleteRoot(id));
}
function waitForAnyRootDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRootUpdated(id) {
  waitFor(matchUpdateRoot(id));
}
function waitForAnyRootUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRootUpdated(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.success("Root updated (present)");
        }
      }
      return pvg.fail("Expected a root to be present after update, but it is not");
    },
    parameters: { description: "Verify root with " + "id " + id + " exists" }
  });
}


/** === Search Operations === */

// CREATE
function addSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with " + "id " + id }
    });
}

// DELETE
function deleteSearch(id) {
  svc.delete("/search/" + id, {
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSearch(id) {
  svc.delete("/search/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a search with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a search with " + "id " + id }
  });
}

// UPDATE
function updateSearch(id) {
  svc.put("/search/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a search with " + "id " + id }
    });
}

// GET one
function getSearch(id) {
  svc.get("/search/" + id, {
    parameters: { description: "Get a search with " + "id " + id }
  });
}

// LIST all
function listSearch() {
  svc.get("/search", {
    parameters: { description: "List search" }
  });
}

// Verify exists (by list)
function verifySearchExists(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.success("Search exists");
        }
      }
      return pvg.fail("Expected a search to exist but it does not");
    },
    parameters: { description: "Verify search with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySearchDoesNotExist(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.fail("Expected a search to not exist but it does");
        }
      }
      return pvg.success("Search does not exist");
    },
    parameters: { description: "Verify search with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSearch() {
  return bp.EventSet("any-add-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a search");
  });
}
function matchAddSearch(id) {
  return bp.EventSet("add-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a search with " + "id " + id;
  });
}
function matchAnyDeleteSearch() {
  return bp.EventSet("any-del-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a search");
  });
}
function matchDeleteSearch(id) {
  return bp.EventSet("del-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a search with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSearch() {
  return bp.EventSet("any-update-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a search");
  });
}
function matchUpdateSearch(id) {
  return bp.EventSet("update-search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a search with " + "id " + id;
  });
}

// Wait helpers
function waitForAnySearchAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSearchAdded(id) {
  waitFor(matchAddSearch(id));
}
function waitForSearchDeleted(id) {
  waitFor(matchDeleteSearch(id));
}
function waitForAnySearchDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSearchUpdated(id) {
  waitFor(matchUpdateSearch(id));
}
function waitForAnySearchUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySearchUpdated(id) {
  svc.get("/search", {
    callback: function (response) {
      search = JSON.parse(response.body);
      for (let i = 0; i < search.length; i++) {
        if (search[i].id === id) {
          return pvg.success("Search updated (present)");
        }
      }
      return pvg.fail("Expected a search to be present after update, but it is not");
    },
    parameters: { description: "Verify search with " + "id " + id + " exists" }
  });
}


/** === Team Operations === */

// CREATE
function addTeam(id) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a team with " + "id " + id }
    });
}

// DELETE
function deleteTeam(id) {
  svc.delete("/teams/" + id, {
    parameters: { description: "Delete a team with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTeam(id) {
  svc.delete("/teams/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a team with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTeam(id) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a team with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a team with " + "id " + id }
  });
}

// UPDATE
function updateTeam(id) {
  svc.put("/teams/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a team with " + "id " + id }
    });
}

// GET one
function getTeam(id) {
  svc.get("/teams/" + id, {
    parameters: { description: "Get a team with " + "id " + id }
  });
}

// LIST all
function listTeams() {
  svc.get("/teams", {
    parameters: { description: "List teams" }
  });
}

// Verify exists (by list)
function verifyTeamExists(id) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id) {
          return pvg.success("Team exists");
        }
      }
      return pvg.fail("Expected a team to exist but it does not");
    },
    parameters: { description: "Verify team with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTeamDoesNotExist(id) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id) {
          return pvg.fail("Expected a team to not exist but it does");
        }
      }
      return pvg.success("Team does not exist");
    },
    parameters: { description: "Verify team with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTeam() {
  return bp.EventSet("any-add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a team");
  });
}
function matchAddTeam(id) {
  return bp.EventSet("add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a team with " + "id " + id;
  });
}
function matchAnyDeleteTeam() {
  return bp.EventSet("any-del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a team");
  });
}
function matchDeleteTeam(id) {
  return bp.EventSet("del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a team with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateTeam() {
  return bp.EventSet("any-update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a team");
  });
}
function matchUpdateTeam(id) {
  return bp.EventSet("update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a team with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyTeamAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ team\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ team\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTeamAdded(id) {
  waitFor(matchAddTeam(id));
}
function waitForTeamDeleted(id) {
  waitFor(matchDeleteTeam(id));
}
function waitForAnyTeamDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ team\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ team\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTeamUpdated(id) {
  waitFor(matchUpdateTeam(id));
}
function waitForAnyTeamUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ team\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ team\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyTeamUpdated(id) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].id === id) {
          return pvg.success("Team updated (present)");
        }
      }
      return pvg.fail("Expected a team to be present after update, but it is not");
    },
    parameters: { description: "Verify team with " + "id " + id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.post("/user", {
      body: JSON.stringify({ username: username, codespace_name: codespace_name, gpg_key_id: gpg_key_id, key_id: key_id, secret_name: secret_name, account_id: account_id }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
    });
}

// DELETE
function deleteUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.delete("/user/" + username + "/"+ codespace_name + "/"+ gpg_key_id + "/"+ key_id + "/"+ secret_name + "/"+ account_id, {
    parameters: { description: "Delete a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.delete("/user/" + username + "/"+ codespace_name + "/"+ gpg_key_id + "/"+ key_id + "/"+ secret_name + "/"+ account_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.post("/user", {
      body: JSON.stringify({ username: username, codespace_name: codespace_name, gpg_key_id: gpg_key_id, key_id: key_id, secret_name: secret_name, account_id: account_id }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
  });
}

// UPDATE
function updateUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.put("/user/" + username + "/"+ codespace_name + "/"+ gpg_key_id + "/"+ key_id + "/"+ secret_name + "/"+ account_id, {
      body: JSON.stringify({ username: username, codespace_name: codespace_name, gpg_key_id: gpg_key_id, key_id: key_id, secret_name: secret_name, account_id: account_id }),
      parameters: { description: "Update a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
    });
}

// GET one
function getUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.get("/user/" + username + "/"+ codespace_name + "/"+ gpg_key_id + "/"+ key_id + "/"+ secret_name + "/"+ account_id, {
    parameters: { description: "Get a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id }
  });
}

// LIST all
function listUser() {
  svc.get("/user", {
    parameters: { description: "List user" }
  });
}

// Verify exists (by list)
function verifyUserExists(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].codespace_name === codespace_name && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].secret_name === secret_name && user[i].account_id === account_id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].codespace_name === codespace_name && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].secret_name === secret_name && user[i].account_id === account_id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/);
    return { username: m[1], codespace_name: m[2], gpg_key_id: parseInt(m[3]), key_id: parseInt(m[4]), secret_name: m[5], account_id: parseInt(m[6]) };
}
function waitForUserAdded(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  waitFor(matchAddUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id));
}
function waitForUserDeleted(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  waitFor(matchDeleteUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/);
    return { username: m[1], codespace_name: m[2], gpg_key_id: parseInt(m[3]), key_id: parseInt(m[4]), secret_name: m[5], account_id: parseInt(m[6]) };
}
function waitForUserUpdated(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  waitFor(matchUpdateUser(username, codespace_name, gpg_key_id, key_id, secret_name, account_id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ username\ (.+) and codespace_name\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and secret_name\ (.+) and account_id\ (.+)$/);
    return { username: m[1], codespace_name: m[2], gpg_key_id: parseInt(m[3]), key_id: parseInt(m[4]), secret_name: m[5], account_id: parseInt(m[6]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(username, codespace_name, gpg_key_id, key_id, secret_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].codespace_name === codespace_name && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].secret_name === secret_name && user[i].account_id === account_id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "codespace_name " + codespace_name + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "secret_name " + secret_name + " and " + "account_id " + account_id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(username) {
  svc.post("/users", {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Add a user with " + "username " + username }
    });
}

// DELETE
function deleteUser(username) {
  svc.delete("/users/" + username, {
    parameters: { description: "Delete a user with " + "username " + username }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(username) {
  svc.delete("/users/" + username, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "username " + username }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(username) {
  svc.post("/users", {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Add a user with " + "username " + username }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "username " + username }
  });
}

// UPDATE
function updateUser(username) {
  svc.put("/users/" + username, {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Update a user with " + "username " + username }
    });
}

// GET one
function getUser(username) {
  svc.get("/users/" + username, {
    parameters: { description: "Get a user with " + "username " + username }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(username) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "username " + username + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(username) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "username " + username + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(username) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "username " + username;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(username) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "username " + username;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(username) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "username " + username;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ username\ (.+)$/);
    return { username: m[1] };
}
function waitForUserAdded(username) {
  waitFor(matchAddUser(username));
}
function waitForUserDeleted(username) {
  waitFor(matchDeleteUser(username));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ username\ (.+)$/);
    return { username: m[1] };
}
function waitForUserUpdated(username) {
  waitFor(matchUpdateUser(username));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ username\ (.+)$/);
    return { username: m[1] };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(username) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "username " + username + " exists" }
  });
}


/** === Version Operations === */

// CREATE
function addVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with " + "id " + id }
    });
}

// DELETE
function deleteVersion(id) {
  svc.delete("/versions/" + id, {
    parameters: { description: "Delete a version with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingVersion(id) {
  svc.delete("/versions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a version with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a version with " + "id " + id }
  });
}

// UPDATE
function updateVersion(id) {
  svc.put("/versions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a version with " + "id " + id }
    });
}

// GET one
function getVersion(id) {
  svc.get("/versions/" + id, {
    parameters: { description: "Get a version with " + "id " + id }
  });
}

// LIST all
function listVersions() {
  svc.get("/versions", {
    parameters: { description: "List versions" }
  });
}

// Verify exists (by list)
function verifyVersionExists(id) {
  svc.get("/versions", {
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
  svc.get("/versions", {
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
  svc.get("/versions", {
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


/** === Zen Operations === */

// CREATE
function addZen(id) {
  svc.post("/zen", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zen with " + "id " + id }
    });
}

// DELETE
function deleteZen(id) {
  svc.delete("/zen/" + id, {
    parameters: { description: "Delete a zen with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingZen(id) {
  svc.delete("/zen/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a zen with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingZen(id) {
  svc.post("/zen", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zen with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a zen with " + "id " + id }
  });
}

// UPDATE
function updateZen(id) {
  svc.put("/zen/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a zen with " + "id " + id }
    });
}

// GET one
function getZen(id) {
  svc.get("/zen/" + id, {
    parameters: { description: "Get a zen with " + "id " + id }
  });
}

// LIST all
function listZen() {
  svc.get("/zen", {
    parameters: { description: "List zen" }
  });
}

// Verify exists (by list)
function verifyZenExists(id) {
  svc.get("/zen", {
    callback: function (response) {
      zen = JSON.parse(response.body);
      for (let i = 0; i < zen.length; i++) {
        if (zen[i].id === id) {
          return pvg.success("Zen exists");
        }
      }
      return pvg.fail("Expected a zen to exist but it does not");
    },
    parameters: { description: "Verify zen with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyZenDoesNotExist(id) {
  svc.get("/zen", {
    callback: function (response) {
      zen = JSON.parse(response.body);
      for (let i = 0; i < zen.length; i++) {
        if (zen[i].id === id) {
          return pvg.fail("Expected a zen to not exist but it does");
        }
      }
      return pvg.success("Zen does not exist");
    },
    parameters: { description: "Verify zen with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddZen() {
  return bp.EventSet("any-add-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a zen");
  });
}
function matchAddZen(id) {
  return bp.EventSet("add-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a zen with " + "id " + id;
  });
}
function matchAnyDeleteZen() {
  return bp.EventSet("any-del-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a zen");
  });
}
function matchDeleteZen(id) {
  return bp.EventSet("del-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a zen with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateZen() {
  return bp.EventSet("any-update-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a zen");
  });
}
function matchUpdateZen(id) {
  return bp.EventSet("update-zen", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a zen with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyZenAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ zen\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ zen\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForZenAdded(id) {
  waitFor(matchAddZen(id));
}
function waitForZenDeleted(id) {
  waitFor(matchDeleteZen(id));
}
function waitForAnyZenDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ zen\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ zen\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForZenUpdated(id) {
  waitFor(matchUpdateZen(id));
}
function waitForAnyZenUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ zen\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ zen\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyZenUpdated(id) {
  svc.get("/zen", {
    callback: function (response) {
      zen = JSON.parse(response.body);
      for (let i = 0; i < zen.length; i++) {
        if (zen[i].id === id) {
          return pvg.success("Zen updated (present)");
        }
      }
      return pvg.fail("Expected a zen to be present after update, but it is not");
    },
    parameters: { description: "Verify zen with " + "id " + id + " exists" }
  });
}

