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
function addApp(url, content_type) {
  svc.post("/app", {
      body: JSON.stringify({ url: url, content_type: content_type }),
      parameters: { description: "Add a app with url " + url + " and content_type " + content_type + "" }
    });
}

// DELETE
function deleteApp(url, content_type) {
  svc.delete("/app/" + url + "/"+ content_type, {
    parameters: { description: "Delete a app with url " + url + " and content_type " + content_type + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(url, content_type) {
  svc.delete("/app/" + url + "/"+ content_type, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with url " + url + " and content_type " + content_type + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(url, content_type) {
  svc.post("/app", {
      body: JSON.stringify({ url: url, content_type: content_type }),
      parameters: { description: "Add a app with url " + url + " and content_type " + content_type + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with url " + url + " and content_type " + content_type + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp(url, content_type) {
  svc.put("/app/" + url + "/"+ content_type, {
      body: JSON.stringify({ url: url, content_type: content_type }),
      parameters: { description: "Update a app" }
    });
}

// GET one
function getApp(url, content_type) {
  svc.get("/app/" + url + "/"+ content_type, {
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
function verifyAppExists(url, content_type) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].url === url && app[i].content_type === content_type) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with url " + url + " and content_type " + content_type + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(url, content_type) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].url === url && app[i].content_type === content_type) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with url " + url + " and content_type " + content_type + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(url, content_type) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with url " + url + " and content_type " + content_type + "";
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(url, content_type) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with url " + url + " and content_type " + content_type + "";
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ url\ (.+) and content_type\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ url\ (.+) and content_type\ (.+)$/);
    return { url: (x)=>x(m[1]), content_type: (x)=>x(m[2]) };
}
function waitForAppAdded(url, content_type) {
  waitFor(matchAddApp(url, content_type));
}
function waitForAppDeleted(url, content_type) {
  waitFor(matchDeleteApp(url, content_type));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ url\ (.+) and content_type\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ url\ (.+) and content_type\ (.+)$/);
    return { url: (x)=>x(m[1]), content_type: (x)=>x(m[2]) };
}


/** === App_manifest Operations === */

// CREATE
function addApp_manifest(manifest) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ manifest: manifest }),
      parameters: { description: "Add a app_manifest with manifest " + manifest + "" }
    });
}

// DELETE
function deleteApp_manifest(manifest) {
  svc.delete("/app_manifests/" + manifest, {
    parameters: { description: "Delete a app_manifest with manifest " + manifest + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp_manifest(manifest) {
  svc.delete("/app_manifests/" + manifest, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app_manifest with manifest " + manifest + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp_manifest(manifest) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ manifest: manifest }),
      parameters: { description: "Add a app_manifest with manifest " + manifest + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app_manifest with manifest " + manifest + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp_manifest(manifest) {
  svc.put("/app_manifests/" + manifest, {
      body: JSON.stringify({ manifest: manifest }),
      parameters: { description: "Update a app_manifest" }
    });
}

// GET one
function getApp_manifest(manifest) {
  svc.get("/app_manifests/" + manifest, {
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
function verifyApp_manifestExists(manifest) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].manifest === manifest) {
          return pvg.success("App_manifest exists");
        }
      }
      return pvg.fail("Expected a app_manifest to exist but it does not");
    },
    parameters: { description: "Verify app_manifest with manifest " + manifest + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApp_manifestDoesNotExist(manifest) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].manifest === manifest) {
          return pvg.fail("Expected a app_manifest to not exist but it does");
        }
      }
      return pvg.success("App_manifest does not exist");
    },
    parameters: { description: "Verify app_manifest with manifest " + manifest + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp_manifest() {
  return bp.EventSet("any-add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app_manifest");
  });
}
function matchAddApp_manifest(manifest) {
  return bp.EventSet("add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app_manifest with manifest " + manifest + "";
  });
}
function matchAnyDeleteApp_manifest() {
  return bp.EventSet("any-del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app_manifest");
  });
}
function matchDeleteApp_manifest(manifest) {
  return bp.EventSet("del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app_manifest with manifest " + manifest + "";
  });
}

// Wait helpers
function waitForAnyApp_manifestAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app_manifest\ with\ manifest\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app_manifest\ with\ manifest\ (.+)$/);
    return { manifest: (x)=>x(m[1]) };
}
function waitForApp_manifestAdded(manifest) {
  waitFor(matchAddApp_manifest(manifest));
}
function waitForApp_manifestDeleted(manifest) {
  waitFor(matchDeleteApp_manifest(manifest));
}
function waitForAnyApp_manifestDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app_manifest\ with\ manifest\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app_manifest\ with\ manifest\ (.+)$/);
    return { manifest: (x)=>x(m[1]) };
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
function addAssignment(assignment_id) {
  svc.post("/assignments", {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Add a assignment with assignment_id " + assignment_id + "" }
    });
}

// DELETE
function deleteAssignment(assignment_id) {
  svc.delete("/assignments/" + assignment_id, {
    parameters: { description: "Delete a assignment with assignment_id " + assignment_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAssignment(assignment_id) {
  svc.delete("/assignments/" + assignment_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a assignment with assignment_id " + assignment_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAssignment(assignment_id) {
  svc.post("/assignments", {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Add a assignment with assignment_id " + assignment_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a assignment with assignment_id " + assignment_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateAssignment(assignment_id) {
  svc.put("/assignments/" + assignment_id, {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Update a assignment" }
    });
}

// GET one
function getAssignment(assignment_id) {
  svc.get("/assignments/" + assignment_id, {
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
function verifyAssignmentExists(assignment_id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].assignment_id === assignment_id) {
          return pvg.success("Assignment exists");
        }
      }
      return pvg.fail("Expected a assignment to exist but it does not");
    },
    parameters: { description: "Verify assignment with assignment_id " + assignment_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAssignmentDoesNotExist(assignment_id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].assignment_id === assignment_id) {
          return pvg.fail("Expected a assignment to not exist but it does");
        }
      }
      return pvg.success("Assignment does not exist");
    },
    parameters: { description: "Verify assignment with assignment_id " + assignment_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddAssignment() {
  return bp.EventSet("any-add-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a assignment");
  });
}
function matchAddAssignment(assignment_id) {
  return bp.EventSet("add-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a assignment with assignment_id " + assignment_id + "";
  });
}
function matchAnyDeleteAssignment() {
  return bp.EventSet("any-del-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a assignment");
  });
}
function matchDeleteAssignment(assignment_id) {
  return bp.EventSet("del-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a assignment with assignment_id " + assignment_id + "";
  });
}

// Wait helpers
function waitForAnyAssignmentAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ assignment\ with\ assignment_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ assignment\ with\ assignment_id\ (.+)$/);
    return { assignment_id: parseInt(m[1]) };
}
function waitForAssignmentAdded(assignment_id) {
  waitFor(matchAddAssignment(assignment_id));
}
function waitForAssignmentDeleted(assignment_id) {
  waitFor(matchDeleteAssignment(assignment_id));
}
function waitForAnyAssignmentDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ assignment\ with\ assignment_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ assignment\ with\ assignment_id\ (.+)$/);
    return { assignment_id: parseInt(m[1]) };
}


/** === Classroom Operations === */

// CREATE
function addClassroom(classroom_id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Add a classroom with classroom_id " + classroom_id + "" }
    });
}

// DELETE
function deleteClassroom(classroom_id) {
  svc.delete("/classrooms/" + classroom_id, {
    parameters: { description: "Delete a classroom with classroom_id " + classroom_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingClassroom(classroom_id) {
  svc.delete("/classrooms/" + classroom_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a classroom with classroom_id " + classroom_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingClassroom(classroom_id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Add a classroom with classroom_id " + classroom_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a classroom with classroom_id " + classroom_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateClassroom(classroom_id) {
  svc.put("/classrooms/" + classroom_id, {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Update a classroom" }
    });
}

// GET one
function getClassroom(classroom_id) {
  svc.get("/classrooms/" + classroom_id, {
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
function verifyClassroomExists(classroom_id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].classroom_id === classroom_id) {
          return pvg.success("Classroom exists");
        }
      }
      return pvg.fail("Expected a classroom to exist but it does not");
    },
    parameters: { description: "Verify classroom with classroom_id " + classroom_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyClassroomDoesNotExist(classroom_id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].classroom_id === classroom_id) {
          return pvg.fail("Expected a classroom to not exist but it does");
        }
      }
      return pvg.success("Classroom does not exist");
    },
    parameters: { description: "Verify classroom with classroom_id " + classroom_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddClassroom() {
  return bp.EventSet("any-add-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a classroom");
  });
}
function matchAddClassroom(classroom_id) {
  return bp.EventSet("add-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a classroom with classroom_id " + classroom_id + "";
  });
}
function matchAnyDeleteClassroom() {
  return bp.EventSet("any-del-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a classroom");
  });
}
function matchDeleteClassroom(classroom_id) {
  return bp.EventSet("del-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a classroom with classroom_id " + classroom_id + "";
  });
}

// Wait helpers
function waitForAnyClassroomAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ classroom\ with\ classroom_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ classroom\ with\ classroom_id\ (.+)$/);
    return { classroom_id: parseInt(m[1]) };
}
function waitForClassroomAdded(classroom_id) {
  waitFor(matchAddClassroom(classroom_id));
}
function waitForClassroomDeleted(classroom_id) {
  waitFor(matchDeleteClassroom(classroom_id));
}
function waitForAnyClassroomDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ classroom\ with\ classroom_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ classroom\ with\ classroom_id\ (.+)$/);
    return { classroom_id: parseInt(m[1]) };
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


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, ghsa_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, ghsa_id: ghsa_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "" }
    });
}

// DELETE
function deleteRepo(owner, repo, ghsa_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ ghsa_id, {
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, ghsa_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ ghsa_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, ghsa_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, ghsa_id: ghsa_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepo(owner, repo, ghsa_id) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ ghsa_id, {
      body: JSON.stringify({ owner: owner, repo: repo, ghsa_id: ghsa_id }),
      parameters: { description: "Update a repo" }
    });
}

// GET one
function getRepo(owner, repo, ghsa_id) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ ghsa_id, {
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
function verifyRepoExists(owner, repo, ghsa_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].ghsa_id === ghsa_id) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, ghsa_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].ghsa_id === ghsa_id) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, ghsa_id) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "";
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, ghsa_id) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with owner " + owner + " and repo " + repo + " and ghsa_id " + ghsa_id + "";
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and ghsa_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and ghsa_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), ghsa_id: parseInt(m[3]) };
}
function waitForRepoAdded(owner, repo, ghsa_id) {
  waitFor(matchAddRepo(owner, repo, ghsa_id));
}
function waitForRepoDeleted(owner, repo, ghsa_id) {
  waitFor(matchDeleteRepo(owner, repo, ghsa_id));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and ghsa_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and ghsa_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), ghsa_id: parseInt(m[3]) };
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


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/user", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/user/" + id, {
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/user/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/user", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(id) {
  svc.put("/user/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(id) {
  svc.get("/user/" + id, {
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
    parameters: { description: "Verify user with id " + id + " exists" }
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
    parameters: { description: "Verify user with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a user with id " + id + "";
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
    return e.data.parameters.description === "Delete a user with id " + id + "";
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


/** === User Operations === */

// CREATE
function addUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    });
}

// DELETE
function deleteUser(id) {
  svc.delete("/users/" + id, {
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(id) {
  svc.delete("/users/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(id) {
  svc.post("/users", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a user with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateUser(id) {
  svc.put("/users/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a user" }
    });
}

// GET one
function getUser(id) {
  svc.get("/users/" + id, {
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
    parameters: { description: "Verify user with id " + id + " exists" }
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
    parameters: { description: "Verify user with id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a user with id " + id + "";
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
    return e.data.parameters.description === "Delete a user with id " + id + "";
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

