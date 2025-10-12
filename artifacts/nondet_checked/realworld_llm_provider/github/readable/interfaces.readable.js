//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 * This approximates the "Library SUT" interface style.
 */

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
      parameters: { description: "Add a advisorie with ghsa_id " + ghsa_id + "" }
    });
}

// DELETE
function deleteAdvisorie(ghsa_id) {
  svc.delete("/advisories/" + ghsa_id, {
    parameters: { description: "Delete a advisorie with ghsa_id " + ghsa_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAdvisorie(ghsa_id) {
  svc.delete("/advisories/" + ghsa_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a advisorie with ghsa_id " + ghsa_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAdvisorie(ghsa_id) {
  svc.post("/advisories", {
      body: JSON.stringify({ ghsa_id: ghsa_id }),
      parameters: { description: "Add a advisorie with ghsa_id " + ghsa_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a advisorie with ghsa_id " + ghsa_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAdvisorie(ghsa_id) {
  svc.put("/advisories/" + ghsa_id, {
      body: JSON.stringify({ ghsa_id: ghsa_id }),
      parameters: { description: "Update a advisorie" }
    });
}

// GET one
function getAdvisorie(ghsa_id) {
  svc.get("/advisories/" + ghsa_id, {
    parameters: { description: "Get a advisorie" }
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
    parameters: { description: "Verify advisorie with ghsa_id " + ghsa_id + " exists" }
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
    parameters: { description: "Verify advisorie with ghsa_id " + ghsa_id + " does not exist" }
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
    return e.data.parameters.description === "Add a advisorie with ghsa_id " + ghsa_id + "";
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
    return e.data.parameters.description === "Delete a advisorie with ghsa_id " + ghsa_id + "";
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


/** === App Operations === */

// CREATE
function addApp(id) {
  svc.post("/app", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with id " + id + "" }
    });
}

// DELETE
function deleteApp(id) {
  svc.delete("/app/" + id, {
    parameters: { description: "Delete a app with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(id) {
  svc.delete("/app/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(id) {
  svc.post("/app", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp(id) {
  svc.put("/app/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app" }
    });
}

// GET one
function getApp(id) {
  svc.get("/app/" + id, {
    parameters: { description: "Get a app" }
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
    parameters: { description: "Verify app with id " + id + " exists" }
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
    parameters: { description: "Verify app with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a app with id " + id + "";
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
    return e.data.parameters.description === "Delete a app with id " + id + "";
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


/** === App_manifest Operations === */

// CREATE
function addApp_manifest(id) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app_manifest with id " + id + "" }
    });
}

// DELETE
function deleteApp_manifest(id) {
  svc.delete("/app_manifests/" + id, {
    parameters: { description: "Delete a app_manifest with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp_manifest(id) {
  svc.delete("/app_manifests/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app_manifest with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp_manifest(id) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app_manifest with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app_manifest with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp_manifest(id) {
  svc.put("/app_manifests/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app_manifest" }
    });
}

// GET one
function getApp_manifest(id) {
  svc.get("/app_manifests/" + id, {
    parameters: { description: "Get a app_manifest" }
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
    parameters: { description: "Verify app_manifest with id " + id + " exists" }
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
    parameters: { description: "Verify app_manifest with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a app_manifest with id " + id + "";
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
    return e.data.parameters.description === "Delete a app_manifest with id " + id + "";
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


/** === Application Operations === */

// CREATE
function addApplication(id) {
  svc.post("/applications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a application with id " + id + "" }
    });
}

// DELETE
function deleteApplication(id) {
  svc.delete("/applications/" + id, {
    parameters: { description: "Delete a application with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApplication(id) {
  svc.delete("/applications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a application with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApplication(id) {
  svc.post("/applications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a application with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a application with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApplication(id) {
  svc.put("/applications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a application" }
    });
}

// GET one
function getApplication(id) {
  svc.get("/applications/" + id, {
    parameters: { description: "Get a application" }
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
    parameters: { description: "Verify application with id " + id + " exists" }
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
    parameters: { description: "Verify application with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a application with id " + id + "";
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
    return e.data.parameters.description === "Delete a application with id " + id + "";
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


/** === App Operations === */

// CREATE
function addApp(id) {
  svc.post("/apps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with id " + id + "" }
    });
}

// DELETE
function deleteApp(id) {
  svc.delete("/apps/" + id, {
    parameters: { description: "Delete a app with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(id) {
  svc.delete("/apps/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(id) {
  svc.post("/apps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a app with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp(id) {
  svc.put("/apps/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a app" }
    });
}

// GET one
function getApp(id) {
  svc.get("/apps/" + id, {
    parameters: { description: "Get a app" }
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
    parameters: { description: "Verify app with id " + id + " exists" }
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
    parameters: { description: "Verify app with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a app with id " + id + "";
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
    return e.data.parameters.description === "Delete a app with id " + id + "";
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


/** === Assignment Operations === */

// CREATE
function addAssignment(id) {
  svc.post("/assignments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a assignment with id " + id + "" }
    });
}

// DELETE
function deleteAssignment(id) {
  svc.delete("/assignments/" + id, {
    parameters: { description: "Delete a assignment with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAssignment(id) {
  svc.delete("/assignments/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a assignment with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAssignment(id) {
  svc.post("/assignments", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a assignment with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a assignment with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAssignment(id) {
  svc.put("/assignments/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a assignment" }
    });
}

// GET one
function getAssignment(id) {
  svc.get("/assignments/" + id, {
    parameters: { description: "Get a assignment" }
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
    parameters: { description: "Verify assignment with id " + id + " exists" }
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
    parameters: { description: "Verify assignment with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a assignment with id " + id + "";
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
    return e.data.parameters.description === "Delete a assignment with id " + id + "";
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


/** === Classroom Operations === */

// CREATE
function addClassroom(id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a classroom with id " + id + "" }
    });
}

// DELETE
function deleteClassroom(id) {
  svc.delete("/classrooms/" + id, {
    parameters: { description: "Delete a classroom with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingClassroom(id) {
  svc.delete("/classrooms/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a classroom with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingClassroom(id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a classroom with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a classroom with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateClassroom(id) {
  svc.put("/classrooms/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a classroom" }
    });
}

// GET one
function getClassroom(id) {
  svc.get("/classrooms/" + id, {
    parameters: { description: "Get a classroom" }
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
    parameters: { description: "Verify classroom with id " + id + " exists" }
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
    parameters: { description: "Verify classroom with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a classroom with id " + id + "";
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
    return e.data.parameters.description === "Delete a classroom with id " + id + "";
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


/** === Codes_of_conduct Operations === */

// CREATE
function addCodes_of_conduct(key) {
  svc.post("/codes_of_conduct", {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Add a codes_of_conduct with key " + key + "" }
    });
}

// DELETE
function deleteCodes_of_conduct(key) {
  svc.delete("/codes_of_conduct/" + key, {
    parameters: { description: "Delete a codes_of_conduct with key " + key + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCodes_of_conduct(key) {
  svc.delete("/codes_of_conduct/" + key, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a codes_of_conduct with key " + key + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCodes_of_conduct(key) {
  svc.post("/codes_of_conduct", {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Add a codes_of_conduct with key " + key + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a codes_of_conduct with key " + key + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCodes_of_conduct(key) {
  svc.put("/codes_of_conduct/" + key, {
      body: JSON.stringify({ key: key }),
      parameters: { description: "Update a codes_of_conduct" }
    });
}

// GET one
function getCodes_of_conduct(key) {
  svc.get("/codes_of_conduct/" + key, {
    parameters: { description: "Get a codes_of_conduct" }
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
    parameters: { description: "Verify codes_of_conduct with key " + key + " exists" }
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
    parameters: { description: "Verify codes_of_conduct with key " + key + " does not exist" }
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
    return e.data.parameters.description === "Add a codes_of_conduct with key " + key + "";
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
    return e.data.parameters.description === "Delete a codes_of_conduct with key " + key + "";
  });
}

// Wait helpers
function waitForAnyCodes_of_conductAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ codes_of_conduct\ with\ key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ codes_of_conduct\ with\ key\ (.+)$/);
    return { key: (x)=>x(m[1]) };
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
    return { key: (x)=>x(m[1]) };
}


/** === Credential Operations === */

// CREATE
function addCredential(id) {
  svc.post("/credentials", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a credential with id " + id + "" }
    });
}

// DELETE
function deleteCredential(id) {
  svc.delete("/credentials/" + id, {
    parameters: { description: "Delete a credential with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingCredential(id) {
  svc.delete("/credentials/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a credential with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingCredential(id) {
  svc.post("/credentials", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a credential with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a credential with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateCredential(id) {
  svc.put("/credentials/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a credential" }
    });
}

// GET one
function getCredential(id) {
  svc.get("/credentials/" + id, {
    parameters: { description: "Get a credential" }
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
    parameters: { description: "Verify credential with id " + id + " exists" }
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
    parameters: { description: "Verify credential with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a credential with id " + id + "";
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
    return e.data.parameters.description === "Delete a credential with id " + id + "";
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


/** === Emoji Operations === */

// CREATE
function addEmoji(id) {
  svc.post("/emojis", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a emoji with id " + id + "" }
    });
}

// DELETE
function deleteEmoji(id) {
  svc.delete("/emojis/" + id, {
    parameters: { description: "Delete a emoji with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEmoji(id) {
  svc.delete("/emojis/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a emoji with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEmoji(id) {
  svc.post("/emojis", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a emoji with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a emoji with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEmoji(id) {
  svc.put("/emojis/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a emoji" }
    });
}

// GET one
function getEmoji(id) {
  svc.get("/emojis/" + id, {
    parameters: { description: "Get a emoji" }
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
    parameters: { description: "Verify emoji with id " + id + " exists" }
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
    parameters: { description: "Verify emoji with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a emoji with id " + id + "";
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
    return e.data.parameters.description === "Delete a emoji with id " + id + "";
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


/** === Enterprise Operations === */

// CREATE
function addEnterprise(enterprise) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Add a enterprise with enterprise " + enterprise + "" }
    });
}

// DELETE
function deleteEnterprise(enterprise) {
  svc.delete("/enterprises/" + enterprise, {
    parameters: { description: "Delete a enterprise with enterprise " + enterprise + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEnterprise(enterprise) {
  svc.delete("/enterprises/" + enterprise, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a enterprise with enterprise " + enterprise + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEnterprise(enterprise) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Add a enterprise with enterprise " + enterprise + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a enterprise with enterprise " + enterprise + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEnterprise(enterprise) {
  svc.put("/enterprises/" + enterprise, {
      body: JSON.stringify({ enterprise: enterprise }),
      parameters: { description: "Update a enterprise" }
    });
}

// GET one
function getEnterprise(enterprise) {
  svc.get("/enterprises/" + enterprise, {
    parameters: { description: "Get a enterprise" }
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
    parameters: { description: "Verify enterprise with enterprise " + enterprise + " exists" }
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
    parameters: { description: "Verify enterprise with enterprise " + enterprise + " does not exist" }
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
    return e.data.parameters.description === "Add a enterprise with enterprise " + enterprise + "";
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
    return e.data.parameters.description === "Delete a enterprise with enterprise " + enterprise + "";
  });
}

// Wait helpers
function waitForAnyEnterpriseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ enterprise\ with\ enterprise\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ enterprise\ with\ enterprise\ (.+)$/);
    return { enterprise: (x)=>x(m[1]) };
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
    return { enterprise: (x)=>x(m[1]) };
}


/** === Event Operations === */

// CREATE
function addEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with id " + id + "" }
    });
}

// DELETE
function deleteEvent(id) {
  svc.delete("/events/" + id, {
    parameters: { description: "Delete a event with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEvent(id) {
  svc.delete("/events/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a event with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEvent(id) {
  svc.post("/events", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a event with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a event with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEvent(id) {
  svc.put("/events/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a event" }
    });
}

// GET one
function getEvent(id) {
  svc.get("/events/" + id, {
    parameters: { description: "Get a event" }
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
    parameters: { description: "Verify event with id " + id + " exists" }
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
    parameters: { description: "Verify event with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a event with id " + id + "";
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
    return e.data.parameters.description === "Delete a event with id " + id + "";
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


/** === Gist Operations === */

// CREATE
function addGist(gist_id, comment_id, sha) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Add a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "" }
    });
}

// DELETE
function deleteGist(gist_id, comment_id, sha) {
  svc.delete("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    parameters: { description: "Delete a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGist(gist_id, comment_id, sha) {
  svc.delete("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGist(gist_id, comment_id, sha) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Add a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGist(gist_id, comment_id, sha) {
  svc.put("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
      body: JSON.stringify({ gist_id: gist_id, comment_id: comment_id, sha: sha }),
      parameters: { description: "Update a gist" }
    });
}

// GET one
function getGist(gist_id, comment_id, sha) {
  svc.get("/gists/" + gist_id + "/"+ comment_id + "/"+ sha, {
    parameters: { description: "Get a gist" }
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
    parameters: { description: "Verify gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + " exists" }
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
    parameters: { description: "Verify gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + " does not exist" }
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
    return e.data.parameters.description === "Add a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "";
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
    return e.data.parameters.description === "Delete a gist with gist_id " + gist_id + " and comment_id " + comment_id + " and sha " + sha + "";
  });
}

// Wait helpers
function waitForAnyGistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ gist\ with\ gist_id\ (.+) and comment_id\ (.+) and sha\ (.+)$/);
    return { gist_id: parseInt(m[1]), comment_id: parseInt(m[2]), sha: (x)=>x(m[3]) };
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
    return { gist_id: parseInt(m[1]), comment_id: parseInt(m[2]), sha: (x)=>x(m[3]) };
}


/** === Gitignore Operations === */

// CREATE
function addGitignore(id) {
  svc.post("/gitignore", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a gitignore with id " + id + "" }
    });
}

// DELETE
function deleteGitignore(id) {
  svc.delete("/gitignore/" + id, {
    parameters: { description: "Delete a gitignore with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGitignore(id) {
  svc.delete("/gitignore/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gitignore with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGitignore(id) {
  svc.post("/gitignore", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a gitignore with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gitignore with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGitignore(id) {
  svc.put("/gitignore/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a gitignore" }
    });
}

// GET one
function getGitignore(id) {
  svc.get("/gitignore/" + id, {
    parameters: { description: "Get a gitignore" }
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
    parameters: { description: "Verify gitignore with id " + id + " exists" }
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
    parameters: { description: "Verify gitignore with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a gitignore with id " + id + "";
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
    return e.data.parameters.description === "Delete a gitignore with id " + id + "";
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


/** === Installation Operations === */

// CREATE
function addInstallation(id) {
  svc.post("/installation", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a installation with id " + id + "" }
    });
}

// DELETE
function deleteInstallation(id) {
  svc.delete("/installation/" + id, {
    parameters: { description: "Delete a installation with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingInstallation(id) {
  svc.delete("/installation/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a installation with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingInstallation(id) {
  svc.post("/installation", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a installation with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a installation with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateInstallation(id) {
  svc.put("/installation/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a installation" }
    });
}

// GET one
function getInstallation(id) {
  svc.get("/installation/" + id, {
    parameters: { description: "Get a installation" }
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
    parameters: { description: "Verify installation with id " + id + " exists" }
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
    parameters: { description: "Verify installation with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a installation with id " + id + "";
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
    return e.data.parameters.description === "Delete a installation with id " + id + "";
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


/** === License Operations === */

// CREATE
function addLicense(id) {
  svc.post("/licenses", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a license with id " + id + "" }
    });
}

// DELETE
function deleteLicense(id) {
  svc.delete("/licenses/" + id, {
    parameters: { description: "Delete a license with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLicense(id) {
  svc.delete("/licenses/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a license with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLicense(id) {
  svc.post("/licenses", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a license with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a license with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateLicense(id) {
  svc.put("/licenses/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a license" }
    });
}

// GET one
function getLicense(id) {
  svc.get("/licenses/" + id, {
    parameters: { description: "Get a license" }
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
    parameters: { description: "Verify license with id " + id + " exists" }
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
    parameters: { description: "Verify license with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a license with id " + id + "";
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
    return e.data.parameters.description === "Delete a license with id " + id + "";
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


/** === Markdown Operations === */

// CREATE
function addMarkdown(id) {
  svc.post("/markdown", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markdown with id " + id + "" }
    });
}

// DELETE
function deleteMarkdown(id) {
  svc.delete("/markdown/" + id, {
    parameters: { description: "Delete a markdown with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarkdown(id) {
  svc.delete("/markdown/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a markdown with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarkdown(id) {
  svc.post("/markdown", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a markdown with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a markdown with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMarkdown(id) {
  svc.put("/markdown/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a markdown" }
    });
}

// GET one
function getMarkdown(id) {
  svc.get("/markdown/" + id, {
    parameters: { description: "Get a markdown" }
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
    parameters: { description: "Verify markdown with id " + id + " exists" }
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
    parameters: { description: "Verify markdown with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a markdown with id " + id + "";
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
    return e.data.parameters.description === "Delete a markdown with id " + id + "";
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


/** === Marketplace_listing Operations === */

// CREATE
function addMarketplace_listing(id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a marketplace_listing with id " + id + "" }
    });
}

// DELETE
function deleteMarketplace_listing(id) {
  svc.delete("/marketplace_listing/" + id, {
    parameters: { description: "Delete a marketplace_listing with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarketplace_listing(id) {
  svc.delete("/marketplace_listing/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a marketplace_listing with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarketplace_listing(id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a marketplace_listing with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a marketplace_listing with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMarketplace_listing(id) {
  svc.put("/marketplace_listing/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a marketplace_listing" }
    });
}

// GET one
function getMarketplace_listing(id) {
  svc.get("/marketplace_listing/" + id, {
    parameters: { description: "Get a marketplace_listing" }
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
    parameters: { description: "Verify marketplace_listing with id " + id + " exists" }
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
    parameters: { description: "Verify marketplace_listing with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a marketplace_listing with id " + id + "";
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
    return e.data.parameters.description === "Delete a marketplace_listing with id " + id + "";
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


/** === Meta Operations === */

// CREATE
function addMeta(id) {
  svc.post("/meta", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a meta with id " + id + "" }
    });
}

// DELETE
function deleteMeta(id) {
  svc.delete("/meta/" + id, {
    parameters: { description: "Delete a meta with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMeta(id) {
  svc.delete("/meta/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a meta with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMeta(id) {
  svc.post("/meta", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a meta with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a meta with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMeta(id) {
  svc.put("/meta/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a meta" }
    });
}

// GET one
function getMeta(id) {
  svc.get("/meta/" + id, {
    parameters: { description: "Get a meta" }
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
    parameters: { description: "Verify meta with id " + id + " exists" }
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
    parameters: { description: "Verify meta with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a meta with id " + id + "";
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
    return e.data.parameters.description === "Delete a meta with id " + id + "";
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


/** === Notification Operations === */

// CREATE
function addNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with id " + id + "" }
    });
}

// DELETE
function deleteNotification(id) {
  svc.delete("/notifications/" + id, {
    parameters: { description: "Delete a notification with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNotification(id) {
  svc.delete("/notifications/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a notification with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNotification(id) {
  svc.post("/notifications", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a notification with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a notification with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateNotification(id) {
  svc.put("/notifications/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a notification" }
    });
}

// GET one
function getNotification(id) {
  svc.get("/notifications/" + id, {
    parameters: { description: "Get a notification" }
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
    parameters: { description: "Verify notification with id " + id + " exists" }
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
    parameters: { description: "Verify notification with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a notification with id " + id + "";
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
    return e.data.parameters.description === "Delete a notification with id " + id + "";
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


/** === Octocat Operations === */

// CREATE
function addOctocat(id) {
  svc.post("/octocat", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a octocat with id " + id + "" }
    });
}

// DELETE
function deleteOctocat(id) {
  svc.delete("/octocat/" + id, {
    parameters: { description: "Delete a octocat with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOctocat(id) {
  svc.delete("/octocat/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a octocat with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOctocat(id) {
  svc.post("/octocat", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a octocat with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a octocat with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOctocat(id) {
  svc.put("/octocat/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a octocat" }
    });
}

// GET one
function getOctocat(id) {
  svc.get("/octocat/" + id, {
    parameters: { description: "Get a octocat" }
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
    parameters: { description: "Verify octocat with id " + id + " exists" }
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
    parameters: { description: "Verify octocat with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a octocat with id " + id + "";
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
    return e.data.parameters.description === "Delete a octocat with id " + id + "";
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


/** === Organization Operations === */

// CREATE
function addOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with id " + id + "" }
    });
}

// DELETE
function deleteOrganization(id) {
  svc.delete("/organizations/" + id, {
    parameters: { description: "Delete a organization with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrganization(id) {
  svc.delete("/organizations/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a organization with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrganization(id) {
  svc.post("/organizations", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a organization with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a organization with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOrganization(id) {
  svc.put("/organizations/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a organization" }
    });
}

// GET one
function getOrganization(id) {
  svc.get("/organizations/" + id, {
    parameters: { description: "Get a organization" }
  });
}

// LIST all
function listOrganizations() {
  svc.get("/organizations", {
    parameters: { description: "List organizations" }
  });
}

// Verify exists (by list)
function verifyOrganizationExists(id) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].id === id) {
          return pvg.success("Organization exists");
        }
      }
      return pvg.fail("Expected a organization to exist but it does not");
    },
    parameters: { description: "Verify organization with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrganizationDoesNotExist(id) {
  svc.get("/organizations", {
    callback: function (response) {
      organization = JSON.parse(response.body);
      for (let i = 0; i < organization.length; i++) {
        if (organization[i].id === id) {
          return pvg.fail("Expected a organization to not exist but it does");
        }
      }
      return pvg.success("Organization does not exist");
    },
    parameters: { description: "Verify organization with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrganization() {
  return bp.EventSet("any-add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a organization");
  });
}
function matchAddOrganization(id) {
  return bp.EventSet("add-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a organization with id " + id + "";
  });
}
function matchAnyDeleteOrganization() {
  return bp.EventSet("any-del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a organization");
  });
}
function matchDeleteOrganization(id) {
  return bp.EventSet("del-organization", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a organization with id " + id + "";
  });
}

// Wait helpers
function waitForAnyOrganizationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ organization\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ organization\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForOrganizationAdded(id) {
  waitFor(matchAddOrganization(id));
}
function waitForOrganizationDeleted(id) {
  waitFor(matchDeleteOrganization(id));
}
function waitForAnyOrganizationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ organization\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ organization\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Org Operations === */

// CREATE
function addOrg(org) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with org " + org + "" }
    });
}

// DELETE
function deleteOrg(org) {
  svc.delete("/orgs/" + org, {
    parameters: { description: "Delete a org with org " + org + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org) {
  svc.delete("/orgs/" + org, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with org " + org + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Add a org with org " + org + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with org " + org + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOrg(org) {
  svc.put("/orgs/" + org, {
      body: JSON.stringify({ org: org }),
      parameters: { description: "Update a org" }
    });
}

// GET one
function getOrg(org) {
  svc.get("/orgs/" + org, {
    parameters: { description: "Get a org" }
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
    parameters: { description: "Verify org with org " + org + " exists" }
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
    parameters: { description: "Verify org with org " + org + " does not exist" }
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
    return e.data.parameters.description === "Add a org with org " + org + "";
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
    return e.data.parameters.description === "Delete a org with org " + org + "";
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+)$/);
    return { org: (x)=>x(m[1]) };
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
    return { org: (x)=>x(m[1]) };
}


/** === Project Operations === */

// CREATE
function addProject(id) {
  svc.post("/projects", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a project with id " + id + "" }
    });
}

// DELETE
function deleteProject(id) {
  svc.delete("/projects/" + id, {
    parameters: { description: "Delete a project with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingProject(id) {
  svc.delete("/projects/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a project with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingProject(id) {
  svc.post("/projects", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a project with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a project with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateProject(id) {
  svc.put("/projects/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a project" }
    });
}

// GET one
function getProject(id) {
  svc.get("/projects/" + id, {
    parameters: { description: "Get a project" }
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
    parameters: { description: "Verify project with id " + id + " exists" }
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
    parameters: { description: "Verify project with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a project with id " + id + "";
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
    return e.data.parameters.description === "Delete a project with id " + id + "";
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


/** === Rate_limit Operations === */

// CREATE
function addRate_limit(id) {
  svc.post("/rate_limit", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rate_limit with id " + id + "" }
    });
}

// DELETE
function deleteRate_limit(id) {
  svc.delete("/rate_limit/" + id, {
    parameters: { description: "Delete a rate_limit with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRate_limit(id) {
  svc.delete("/rate_limit/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a rate_limit with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRate_limit(id) {
  svc.post("/rate_limit", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a rate_limit with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a rate_limit with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRate_limit(id) {
  svc.put("/rate_limit/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a rate_limit" }
    });
}

// GET one
function getRate_limit(id) {
  svc.get("/rate_limit/" + id, {
    parameters: { description: "Get a rate_limit" }
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
    parameters: { description: "Verify rate_limit with id " + id + " exists" }
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
    parameters: { description: "Verify rate_limit with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a rate_limit with id " + id + "";
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
    return e.data.parameters.description === "Delete a rate_limit with id " + id + "";
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


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "" }
    });
}

// DELETE
function deleteRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
      body: JSON.stringify({ owner: owner, repo: repo, alert_number: alert_number, ghsa_id: ghsa_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id }),
      parameters: { description: "Update a repo" }
    });
}

// GET one
function getRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ alert_number + "/"+ ghsa_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id, {
    parameters: { description: "Get a repo" }
  });
}

// LIST all
function listRepos() {
  svc.get("/repos", {
    parameters: { description: "List repos" }
  });
}

// Verify exists (by list)
function verifyRepoExists(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].alert_number === alert_number && repo[i].ghsa_id === ghsa_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].alert_number === alert_number && repo[i].ghsa_id === ghsa_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "";
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with owner " + owner + " and repo " + repo + " and alert_number " + alert_number + " and ghsa_id " + ghsa_id + " and analysis_id " + analysis_id + " and language " + language + " and codeql_variant_analysis_id " + codeql_variant_analysis_id + " and repo_owner " + repo_owner + " and repo_name " + repo_name + " and sarif_id " + sarif_id + "";
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), alert_number: (x)=>x(m[3]), ghsa_id: parseInt(m[4]), analysis_id: parseInt(m[5]), language: (x)=>x(m[6]), codeql_variant_analysis_id: parseInt(m[7]), repo_owner: (x)=>x(m[8]), repo_name: (x)=>x(m[9]), sarif_id: parseInt(m[10]) };
}
function waitForRepoAdded(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  waitFor(matchAddRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id));
}
function waitForRepoDeleted(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id) {
  waitFor(matchDeleteRepo(owner, repo, alert_number, ghsa_id, analysis_id, language, codeql_variant_analysis_id, repo_owner, repo_name, sarif_id));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and alert_number\ (.+) and ghsa_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), alert_number: (x)=>x(m[3]), ghsa_id: parseInt(m[4]), analysis_id: parseInt(m[5]), language: (x)=>x(m[6]), codeql_variant_analysis_id: parseInt(m[7]), repo_owner: (x)=>x(m[8]), repo_name: (x)=>x(m[9]), sarif_id: parseInt(m[10]) };
}


/** === Root Operations === */

// CREATE
function addRoot(id) {
  svc.post("/root", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a root with id " + id + "" }
    });
}

// DELETE
function deleteRoot(id) {
  svc.delete("/root/" + id, {
    parameters: { description: "Delete a root with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRoot(id) {
  svc.delete("/root/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a root with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRoot(id) {
  svc.post("/root", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a root with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a root with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRoot(id) {
  svc.put("/root/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a root" }
    });
}

// GET one
function getRoot(id) {
  svc.get("/root/" + id, {
    parameters: { description: "Get a root" }
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
    parameters: { description: "Verify root with id " + id + " exists" }
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
    parameters: { description: "Verify root with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a root with id " + id + "";
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
    return e.data.parameters.description === "Delete a root with id " + id + "";
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


/** === Search Operations === */

// CREATE
function addSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with id " + id + "" }
    });
}

// DELETE
function deleteSearch(id) {
  svc.delete("/search/" + id, {
    parameters: { description: "Delete a search with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSearch(id) {
  svc.delete("/search/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a search with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSearch(id) {
  svc.post("/search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a search with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a search with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateSearch(id) {
  svc.put("/search/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a search" }
    });
}

// GET one
function getSearch(id) {
  svc.get("/search/" + id, {
    parameters: { description: "Get a search" }
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
    parameters: { description: "Verify search with id " + id + " exists" }
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
    parameters: { description: "Verify search with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a search with id " + id + "";
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
    return e.data.parameters.description === "Delete a search with id " + id + "";
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


/** === Team Operations === */

// CREATE
function addTeam(id) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a team with id " + id + "" }
    });
}

// DELETE
function deleteTeam(id) {
  svc.delete("/teams/" + id, {
    parameters: { description: "Delete a team with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTeam(id) {
  svc.delete("/teams/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a team with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTeam(id) {
  svc.post("/teams", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a team with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a team with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateTeam(id) {
  svc.put("/teams/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a team" }
    });
}

// GET one
function getTeam(id) {
  svc.get("/teams/" + id, {
    parameters: { description: "Get a team" }
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
    parameters: { description: "Verify team with id " + id + " exists" }
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
    parameters: { description: "Verify team with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a team with id " + id + "";
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
    return e.data.parameters.description === "Delete a team with id " + id + "";
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


/** === User Operations === */

// CREATE
function addUser(codespace_name, secret_name) {
  svc.post("/user", {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name }),
      parameters: { description: "Add a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "" }
    });
}

// DELETE
function deleteUser(codespace_name, secret_name) {
  svc.delete("/user/" + codespace_name + "/"+ secret_name, {
    parameters: { description: "Delete a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(codespace_name, secret_name) {
  svc.delete("/user/" + codespace_name + "/"+ secret_name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(codespace_name, secret_name) {
  svc.post("/user", {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name }),
      parameters: { description: "Add a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(codespace_name, secret_name) {
  svc.put("/user/" + codespace_name + "/"+ secret_name, {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(codespace_name, secret_name) {
  svc.get("/user/" + codespace_name + "/"+ secret_name, {
    parameters: { description: "Get a user" }
  });
}

// LIST all
function listUser() {
  svc.get("/user", {
    parameters: { description: "List user" }
  });
}

// Verify exists (by list)
function verifyUserExists(codespace_name, secret_name) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].codespace_name === codespace_name && user[i].secret_name === secret_name) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with codespace_name " + codespace_name + " and secret_name " + secret_name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(codespace_name, secret_name) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].codespace_name === codespace_name && user[i].secret_name === secret_name) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with codespace_name " + codespace_name + " and secret_name " + secret_name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(codespace_name, secret_name) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "";
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(codespace_name, secret_name) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with codespace_name " + codespace_name + " and secret_name " + secret_name + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+)$/);
    return { codespace_name: (x)=>x(m[1]), secret_name: (x)=>x(m[2]) };
}
function waitForUserAdded(codespace_name, secret_name) {
  waitFor(matchAddUser(codespace_name, secret_name));
}
function waitForUserDeleted(codespace_name, secret_name) {
  waitFor(matchDeleteUser(codespace_name, secret_name));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+)$/);
    return { codespace_name: (x)=>x(m[1]), secret_name: (x)=>x(m[2]) };
}


/** === User Operations === */

// CREATE
function addUser(username) {
  svc.post("/users", {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Add a user with username " + username + "" }
    });
}

// DELETE
function deleteUser(username) {
  svc.delete("/users/" + username, {
    parameters: { description: "Delete a user with username " + username + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(username) {
  svc.delete("/users/" + username, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with username " + username + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(username) {
  svc.post("/users", {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Add a user with username " + username + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with username " + username + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(username) {
  svc.put("/users/" + username, {
      body: JSON.stringify({ username: username }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(username) {
  svc.get("/users/" + username, {
    parameters: { description: "Get a user" }
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
    parameters: { description: "Verify user with username " + username + " exists" }
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
    parameters: { description: "Verify user with username " + username + " does not exist" }
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
    return e.data.parameters.description === "Add a user with username " + username + "";
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
    return e.data.parameters.description === "Delete a user with username " + username + "";
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ username\ (.+)$/);
    return { username: (x)=>x(m[1]) };
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
    return { username: (x)=>x(m[1]) };
}


/** === Version Operations === */

// CREATE
function addVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with id " + id + "" }
    });
}

// DELETE
function deleteVersion(id) {
  svc.delete("/versions/" + id, {
    parameters: { description: "Delete a version with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingVersion(id) {
  svc.delete("/versions/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a version with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingVersion(id) {
  svc.post("/versions", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a version with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a version with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateVersion(id) {
  svc.put("/versions/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a version" }
    });
}

// GET one
function getVersion(id) {
  svc.get("/versions/" + id, {
    parameters: { description: "Get a version" }
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
    parameters: { description: "Verify version with id " + id + " exists" }
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
    parameters: { description: "Verify version with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a version with id " + id + "";
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
    return e.data.parameters.description === "Delete a version with id " + id + "";
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


/** === Zen Operations === */

// CREATE
function addZen(id) {
  svc.post("/zen", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zen with id " + id + "" }
    });
}

// DELETE
function deleteZen(id) {
  svc.delete("/zen/" + id, {
    parameters: { description: "Delete a zen with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingZen(id) {
  svc.delete("/zen/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a zen with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingZen(id) {
  svc.post("/zen", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a zen with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a zen with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateZen(id) {
  svc.put("/zen/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a zen" }
    });
}

// GET one
function getZen(id) {
  svc.get("/zen/" + id, {
    parameters: { description: "Get a zen" }
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
    parameters: { description: "Verify zen with id " + id + " exists" }
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
    parameters: { description: "Verify zen with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a zen with id " + id + "";
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
    return e.data.parameters.description === "Delete a zen with id " + id + "";
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

