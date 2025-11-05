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
function addApp(installation_id, delivery_id) {
  svc.post("/app", {
      body: JSON.stringify({ installation_id: installation_id, delivery_id: delivery_id }),
      parameters: { description: "Add a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
    });
}

// DELETE
function deleteApp(installation_id, delivery_id) {
  svc.delete("/app/" + installation_id + "/"+ delivery_id, {
    parameters: { description: "Delete a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(installation_id, delivery_id) {
  svc.delete("/app/" + installation_id + "/"+ delivery_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(installation_id, delivery_id) {
  svc.post("/app", {
      body: JSON.stringify({ installation_id: installation_id, delivery_id: delivery_id }),
      parameters: { description: "Add a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
  });
}

// UPDATE
function updateApp(installation_id, delivery_id) {
  svc.put("/app/" + installation_id + "/"+ delivery_id, {
      body: JSON.stringify({ installation_id: installation_id, delivery_id: delivery_id }),
      parameters: { description: "Update a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
    });
}

// GET one
function getApp(installation_id, delivery_id) {
  svc.get("/app/" + installation_id + "/"+ delivery_id, {
    parameters: { description: "Get a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id }
  });
}

// LIST all
function listApp() {
  svc.get("/app", {
    parameters: { description: "List app" }
  });
}

// Verify exists (by list)
function verifyAppExists(installation_id, delivery_id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].installation_id === installation_id && app[i].delivery_id === delivery_id) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(installation_id, delivery_id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].installation_id === installation_id && app[i].delivery_id === delivery_id) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(installation_id, delivery_id) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id;
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(installation_id, delivery_id) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp() {
  return bp.EventSet("any-update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app");
  });
}
function matchUpdateApp(installation_id, delivery_id) {
  return bp.EventSet("update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id;
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/);
    return { installation_id: parseInt(m[1]), delivery_id: parseInt(m[2]) };
}
function waitForAppAdded(installation_id, delivery_id) {
  waitFor(matchAddApp(installation_id, delivery_id));
}
function waitForAppDeleted(installation_id, delivery_id) {
  waitFor(matchDeleteApp(installation_id, delivery_id));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/);
    return { installation_id: parseInt(m[1]), delivery_id: parseInt(m[2]) };
}
function waitForAppUpdated(installation_id, delivery_id) {
  waitFor(matchUpdateApp(installation_id, delivery_id));
}
function waitForAnyAppUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app\ with\ installation_id\ (.+) and delivery_id\ (.+)$/);
    return { installation_id: parseInt(m[1]), delivery_id: parseInt(m[2]) };
}

// Verify updated (presence-by-list)
function verifyAppUpdated(installation_id, delivery_id) {
  svc.get("/app", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].installation_id === installation_id && app[i].delivery_id === delivery_id) {
          return pvg.success("App updated (present)");
        }
      }
      return pvg.fail("Expected a app to be present after update, but it is not");
    },
    parameters: { description: "Verify app with " + "installation_id " + installation_id + " and " + "delivery_id " + delivery_id + " exists" }
  });
}


/** === App_manifest Operations === */

// CREATE
function addApp_manifest(code) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Add a app_manifest with " + "code " + code }
    });
}

// DELETE
function deleteApp_manifest(code) {
  svc.delete("/app_manifests/" + code, {
    parameters: { description: "Delete a app_manifest with " + "code " + code }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp_manifest(code) {
  svc.delete("/app_manifests/" + code, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app_manifest with " + "code " + code }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp_manifest(code) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Add a app_manifest with " + "code " + code }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app_manifest with " + "code " + code }
  });
}

// UPDATE
function updateApp_manifest(code) {
  svc.put("/app_manifests/" + code, {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Update a app_manifest with " + "code " + code }
    });
}

// GET one
function getApp_manifest(code) {
  svc.get("/app_manifests/" + code, {
    parameters: { description: "Get a app_manifest with " + "code " + code }
  });
}

// LIST all
function listApp_manifests() {
  svc.get("/app_manifests", {
    parameters: { description: "List app_manifests" }
  });
}

// Verify exists (by list)
function verifyApp_manifestExists(code) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].code === code) {
          return pvg.success("App_manifest exists");
        }
      }
      return pvg.fail("Expected a app_manifest to exist but it does not");
    },
    parameters: { description: "Verify app_manifest with " + "code " + code + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApp_manifestDoesNotExist(code) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].code === code) {
          return pvg.fail("Expected a app_manifest to not exist but it does");
        }
      }
      return pvg.success("App_manifest does not exist");
    },
    parameters: { description: "Verify app_manifest with " + "code " + code + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp_manifest() {
  return bp.EventSet("any-add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app_manifest");
  });
}
function matchAddApp_manifest(code) {
  return bp.EventSet("add-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app_manifest with " + "code " + code;
  });
}
function matchAnyDeleteApp_manifest() {
  return bp.EventSet("any-del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app_manifest");
  });
}
function matchDeleteApp_manifest(code) {
  return bp.EventSet("del-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app_manifest with " + "code " + code;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp_manifest() {
  return bp.EventSet("any-update-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app_manifest");
  });
}
function matchUpdateApp_manifest(code) {
  return bp.EventSet("update-app_manifest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app_manifest with " + "code " + code;
  });
}

// Wait helpers
function waitForAnyApp_manifestAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app_manifest\ with\ code\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app_manifest\ with\ code\ (.+)$/);
    return { code: parseInt(m[1]) };
}
function waitForApp_manifestAdded(code) {
  waitFor(matchAddApp_manifest(code));
}
function waitForApp_manifestDeleted(code) {
  waitFor(matchDeleteApp_manifest(code));
}
function waitForAnyApp_manifestDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app_manifest\ with\ code\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app_manifest\ with\ code\ (.+)$/);
    return { code: parseInt(m[1]) };
}
function waitForApp_manifestUpdated(code) {
  waitFor(matchUpdateApp_manifest(code));
}
function waitForAnyApp_manifestUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app_manifest\ with\ code\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app_manifest\ with\ code\ (.+)$/);
    return { code: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyApp_manifestUpdated(code) {
  svc.get("/app_manifests", {
    callback: function (response) {
      app_manifest = JSON.parse(response.body);
      for (let i = 0; i < app_manifest.length; i++) {
        if (app_manifest[i].code === code) {
          return pvg.success("App_manifest updated (present)");
        }
      }
      return pvg.fail("Expected a app_manifest to be present after update, but it is not");
    },
    parameters: { description: "Verify app_manifest with " + "code " + code + " exists" }
  });
}


/** === Application Operations === */

// CREATE
function addApplication(client_id) {
  svc.post("/applications", {
      body: JSON.stringify({ client_id: client_id }),
      parameters: { description: "Add a application with " + "client_id " + client_id }
    });
}

// DELETE
function deleteApplication(client_id) {
  svc.delete("/applications/" + client_id, {
    parameters: { description: "Delete a application with " + "client_id " + client_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApplication(client_id) {
  svc.delete("/applications/" + client_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a application with " + "client_id " + client_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApplication(client_id) {
  svc.post("/applications", {
      body: JSON.stringify({ client_id: client_id }),
      parameters: { description: "Add a application with " + "client_id " + client_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a application with " + "client_id " + client_id }
  });
}

// UPDATE
function updateApplication(client_id) {
  svc.put("/applications/" + client_id, {
      body: JSON.stringify({ client_id: client_id }),
      parameters: { description: "Update a application with " + "client_id " + client_id }
    });
}

// GET one
function getApplication(client_id) {
  svc.get("/applications/" + client_id, {
    parameters: { description: "Get a application with " + "client_id " + client_id }
  });
}

// LIST all
function listApplications() {
  svc.get("/applications", {
    parameters: { description: "List applications" }
  });
}

// Verify exists (by list)
function verifyApplicationExists(client_id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].client_id === client_id) {
          return pvg.success("Application exists");
        }
      }
      return pvg.fail("Expected a application to exist but it does not");
    },
    parameters: { description: "Verify application with " + "client_id " + client_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApplicationDoesNotExist(client_id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].client_id === client_id) {
          return pvg.fail("Expected a application to not exist but it does");
        }
      }
      return pvg.success("Application does not exist");
    },
    parameters: { description: "Verify application with " + "client_id " + client_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApplication() {
  return bp.EventSet("any-add-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a application");
  });
}
function matchAddApplication(client_id) {
  return bp.EventSet("add-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a application with " + "client_id " + client_id;
  });
}
function matchAnyDeleteApplication() {
  return bp.EventSet("any-del-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a application");
  });
}
function matchDeleteApplication(client_id) {
  return bp.EventSet("del-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a application with " + "client_id " + client_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApplication() {
  return bp.EventSet("any-update-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a application");
  });
}
function matchUpdateApplication(client_id) {
  return bp.EventSet("update-application", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a application with " + "client_id " + client_id;
  });
}

// Wait helpers
function waitForAnyApplicationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ application\ with\ client_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ application\ with\ client_id\ (.+)$/);
    return { client_id: parseInt(m[1]) };
}
function waitForApplicationAdded(client_id) {
  waitFor(matchAddApplication(client_id));
}
function waitForApplicationDeleted(client_id) {
  waitFor(matchDeleteApplication(client_id));
}
function waitForAnyApplicationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ application\ with\ client_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ application\ with\ client_id\ (.+)$/);
    return { client_id: parseInt(m[1]) };
}
function waitForApplicationUpdated(client_id) {
  waitFor(matchUpdateApplication(client_id));
}
function waitForAnyApplicationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ application\ with\ client_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ application\ with\ client_id\ (.+)$/);
    return { client_id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyApplicationUpdated(client_id) {
  svc.get("/applications", {
    callback: function (response) {
      application = JSON.parse(response.body);
      for (let i = 0; i < application.length; i++) {
        if (application[i].client_id === client_id) {
          return pvg.success("Application updated (present)");
        }
      }
      return pvg.fail("Expected a application to be present after update, but it is not");
    },
    parameters: { description: "Verify application with " + "client_id " + client_id + " exists" }
  });
}


/** === App Operations === */

// CREATE
function addApp(app_slug) {
  svc.post("/apps", {
      body: JSON.stringify({ app_slug: app_slug }),
      parameters: { description: "Add a app with " + "app_slug " + app_slug }
    });
}

// DELETE
function deleteApp(app_slug) {
  svc.delete("/apps/" + app_slug, {
    parameters: { description: "Delete a app with " + "app_slug " + app_slug }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(app_slug) {
  svc.delete("/apps/" + app_slug, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with " + "app_slug " + app_slug }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(app_slug) {
  svc.post("/apps", {
      body: JSON.stringify({ app_slug: app_slug }),
      parameters: { description: "Add a app with " + "app_slug " + app_slug }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with " + "app_slug " + app_slug }
  });
}

// UPDATE
function updateApp(app_slug) {
  svc.put("/apps/" + app_slug, {
      body: JSON.stringify({ app_slug: app_slug }),
      parameters: { description: "Update a app with " + "app_slug " + app_slug }
    });
}

// GET one
function getApp(app_slug) {
  svc.get("/apps/" + app_slug, {
    parameters: { description: "Get a app with " + "app_slug " + app_slug }
  });
}

// LIST all
function listApps() {
  svc.get("/apps", {
    parameters: { description: "List apps" }
  });
}

// Verify exists (by list)
function verifyAppExists(app_slug) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].app_slug === app_slug) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with " + "app_slug " + app_slug + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(app_slug) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].app_slug === app_slug) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with " + "app_slug " + app_slug + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(app_slug) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with " + "app_slug " + app_slug;
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(app_slug) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with " + "app_slug " + app_slug;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApp() {
  return bp.EventSet("any-update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a app");
  });
}
function matchUpdateApp(app_slug) {
  return bp.EventSet("update-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a app with " + "app_slug " + app_slug;
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ app_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ app_slug\ (.+)$/);
    return { app_slug: m[1] };
}
function waitForAppAdded(app_slug) {
  waitFor(matchAddApp(app_slug));
}
function waitForAppDeleted(app_slug) {
  waitFor(matchDeleteApp(app_slug));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ app_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ app_slug\ (.+)$/);
    return { app_slug: m[1] };
}
function waitForAppUpdated(app_slug) {
  waitFor(matchUpdateApp(app_slug));
}
function waitForAnyAppUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ app\ with\ app_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ app\ with\ app_slug\ (.+)$/);
    return { app_slug: m[1] };
}

// Verify updated (presence-by-list)
function verifyAppUpdated(app_slug) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].app_slug === app_slug) {
          return pvg.success("App updated (present)");
        }
      }
      return pvg.fail("Expected a app to be present after update, but it is not");
    },
    parameters: { description: "Verify app with " + "app_slug " + app_slug + " exists" }
  });
}


/** === Assignment Operations === */

// CREATE
function addAssignment(assignment_id) {
  svc.post("/assignments", {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Add a assignment with " + "assignment_id " + assignment_id }
    });
}

// DELETE
function deleteAssignment(assignment_id) {
  svc.delete("/assignments/" + assignment_id, {
    parameters: { description: "Delete a assignment with " + "assignment_id " + assignment_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingAssignment(assignment_id) {
  svc.delete("/assignments/" + assignment_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a assignment with " + "assignment_id " + assignment_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingAssignment(assignment_id) {
  svc.post("/assignments", {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Add a assignment with " + "assignment_id " + assignment_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a assignment with " + "assignment_id " + assignment_id }
  });
}

// UPDATE
function updateAssignment(assignment_id) {
  svc.put("/assignments/" + assignment_id, {
      body: JSON.stringify({ assignment_id: assignment_id }),
      parameters: { description: "Update a assignment with " + "assignment_id " + assignment_id }
    });
}

// GET one
function getAssignment(assignment_id) {
  svc.get("/assignments/" + assignment_id, {
    parameters: { description: "Get a assignment with " + "assignment_id " + assignment_id }
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
    parameters: { description: "Verify assignment with " + "assignment_id " + assignment_id + " exists" }
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
    parameters: { description: "Verify assignment with " + "assignment_id " + assignment_id + " does not exist" }
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
    return e.data.parameters.description === "Add a assignment with " + "assignment_id " + assignment_id;
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
    return e.data.parameters.description === "Delete a assignment with " + "assignment_id " + assignment_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateAssignment() {
  return bp.EventSet("any-update-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a assignment");
  });
}
function matchUpdateAssignment(assignment_id) {
  return bp.EventSet("update-assignment", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a assignment with " + "assignment_id " + assignment_id;
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
function waitForAssignmentUpdated(assignment_id) {
  waitFor(matchUpdateAssignment(assignment_id));
}
function waitForAnyAssignmentUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ assignment\ with\ assignment_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ assignment\ with\ assignment_id\ (.+)$/);
    return { assignment_id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyAssignmentUpdated(assignment_id) {
  svc.get("/assignments", {
    callback: function (response) {
      assignment = JSON.parse(response.body);
      for (let i = 0; i < assignment.length; i++) {
        if (assignment[i].assignment_id === assignment_id) {
          return pvg.success("Assignment updated (present)");
        }
      }
      return pvg.fail("Expected a assignment to be present after update, but it is not");
    },
    parameters: { description: "Verify assignment with " + "assignment_id " + assignment_id + " exists" }
  });
}


/** === Classroom Operations === */

// CREATE
function addClassroom(classroom_id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Add a classroom with " + "classroom_id " + classroom_id }
    });
}

// DELETE
function deleteClassroom(classroom_id) {
  svc.delete("/classrooms/" + classroom_id, {
    parameters: { description: "Delete a classroom with " + "classroom_id " + classroom_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingClassroom(classroom_id) {
  svc.delete("/classrooms/" + classroom_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a classroom with " + "classroom_id " + classroom_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingClassroom(classroom_id) {
  svc.post("/classrooms", {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Add a classroom with " + "classroom_id " + classroom_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a classroom with " + "classroom_id " + classroom_id }
  });
}

// UPDATE
function updateClassroom(classroom_id) {
  svc.put("/classrooms/" + classroom_id, {
      body: JSON.stringify({ classroom_id: classroom_id }),
      parameters: { description: "Update a classroom with " + "classroom_id " + classroom_id }
    });
}

// GET one
function getClassroom(classroom_id) {
  svc.get("/classrooms/" + classroom_id, {
    parameters: { description: "Get a classroom with " + "classroom_id " + classroom_id }
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
    parameters: { description: "Verify classroom with " + "classroom_id " + classroom_id + " exists" }
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
    parameters: { description: "Verify classroom with " + "classroom_id " + classroom_id + " does not exist" }
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
    return e.data.parameters.description === "Add a classroom with " + "classroom_id " + classroom_id;
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
    return e.data.parameters.description === "Delete a classroom with " + "classroom_id " + classroom_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateClassroom() {
  return bp.EventSet("any-update-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a classroom");
  });
}
function matchUpdateClassroom(classroom_id) {
  return bp.EventSet("update-classroom", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a classroom with " + "classroom_id " + classroom_id;
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
function waitForClassroomUpdated(classroom_id) {
  waitFor(matchUpdateClassroom(classroom_id));
}
function waitForAnyClassroomUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ classroom\ with\ classroom_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ classroom\ with\ classroom_id\ (.+)$/);
    return { classroom_id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyClassroomUpdated(classroom_id) {
  svc.get("/classrooms", {
    callback: function (response) {
      classroom = JSON.parse(response.body);
      for (let i = 0; i < classroom.length; i++) {
        if (classroom[i].classroom_id === classroom_id) {
          return pvg.success("Classroom updated (present)");
        }
      }
      return pvg.fail("Expected a classroom to be present after update, but it is not");
    },
    parameters: { description: "Verify classroom with " + "classroom_id " + classroom_id + " exists" }
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
function addEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise, configuration_id: configuration_id, enterprise-team: enterprise-team, username: username, team_slug: team_slug }),
      parameters: { description: "Add a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
    });
}

// DELETE
function deleteEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.delete("/enterprises/" + enterprise + "/"+ configuration_id + "/"+ enterprise-team + "/"+ username + "/"+ team_slug, {
    parameters: { description: "Delete a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.delete("/enterprises/" + enterprise + "/"+ configuration_id + "/"+ enterprise-team + "/"+ username + "/"+ team_slug, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.post("/enterprises", {
      body: JSON.stringify({ enterprise: enterprise, configuration_id: configuration_id, enterprise-team: enterprise-team, username: username, team_slug: team_slug }),
      parameters: { description: "Add a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
  });
}

// UPDATE
function updateEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.put("/enterprises/" + enterprise + "/"+ configuration_id + "/"+ enterprise-team + "/"+ username + "/"+ team_slug, {
      body: JSON.stringify({ enterprise: enterprise, configuration_id: configuration_id, enterprise-team: enterprise-team, username: username, team_slug: team_slug }),
      parameters: { description: "Update a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
    });
}

// GET one
function getEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.get("/enterprises/" + enterprise + "/"+ configuration_id + "/"+ enterprise-team + "/"+ username + "/"+ team_slug, {
    parameters: { description: "Get a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug }
  });
}

// LIST all
function listEnterprises() {
  svc.get("/enterprises", {
    parameters: { description: "List enterprises" }
  });
}

// Verify exists (by list)
function verifyEnterpriseExists(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise && enterprise[i].configuration_id === configuration_id && enterprise[i].enterprise-team === enterprise-team && enterprise[i].username === username && enterprise[i].team_slug === team_slug) {
          return pvg.success("Enterprise exists");
        }
      }
      return pvg.fail("Expected a enterprise to exist but it does not");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEnterpriseDoesNotExist(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise && enterprise[i].configuration_id === configuration_id && enterprise[i].enterprise-team === enterprise-team && enterprise[i].username === username && enterprise[i].team_slug === team_slug) {
          return pvg.fail("Expected a enterprise to not exist but it does");
        }
      }
      return pvg.success("Enterprise does not exist");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEnterprise() {
  return bp.EventSet("any-add-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a enterprise");
  });
}
function matchAddEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  return bp.EventSet("add-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug;
  });
}
function matchAnyDeleteEnterprise() {
  return bp.EventSet("any-del-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a enterprise");
  });
}
function matchDeleteEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  return bp.EventSet("del-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateEnterprise() {
  return bp.EventSet("any-update-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a enterprise");
  });
}
function matchUpdateEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug) {
  return bp.EventSet("update-enterprise", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug;
  });
}

// Wait helpers
function waitForAnyEnterpriseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/);
    return { enterprise: m[1], configuration_id: parseInt(m[2]), enterprise-team: m[3], username: m[4], team_slug: m[5] };
}
function waitForEnterpriseAdded(enterprise, configuration_id, enterprise-team, username, team_slug) {
  waitFor(matchAddEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug));
}
function waitForEnterpriseDeleted(enterprise, configuration_id, enterprise-team, username, team_slug) {
  waitFor(matchDeleteEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug));
}
function waitForAnyEnterpriseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/);
    return { enterprise: m[1], configuration_id: parseInt(m[2]), enterprise-team: m[3], username: m[4], team_slug: m[5] };
}
function waitForEnterpriseUpdated(enterprise, configuration_id, enterprise-team, username, team_slug) {
  waitFor(matchUpdateEnterprise(enterprise, configuration_id, enterprise-team, username, team_slug));
}
function waitForAnyEnterpriseUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ enterprise\ with\ enterprise\ (.+) and configuration_id\ (.+) and enterprise\-team\ (.+) and username\ (.+) and team_slug\ (.+)$/);
    return { enterprise: m[1], configuration_id: parseInt(m[2]), enterprise-team: m[3], username: m[4], team_slug: m[5] };
}

// Verify updated (presence-by-list)
function verifyEnterpriseUpdated(enterprise, configuration_id, enterprise-team, username, team_slug) {
  svc.get("/enterprises", {
    callback: function (response) {
      enterprise = JSON.parse(response.body);
      for (let i = 0; i < enterprise.length; i++) {
        if (enterprise[i].enterprise === enterprise && enterprise[i].configuration_id === configuration_id && enterprise[i].enterprise-team === enterprise-team && enterprise[i].username === username && enterprise[i].team_slug === team_slug) {
          return pvg.success("Enterprise updated (present)");
        }
      }
      return pvg.fail("Expected a enterprise to be present after update, but it is not");
    },
    parameters: { description: "Verify enterprise with " + "enterprise " + enterprise + " and " + "configuration_id " + configuration_id + " and " + "enterprise-team " + enterprise-team + " and " + "username " + username + " and " + "team_slug " + team_slug + " exists" }
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


/** === Issue Operations === */

// CREATE
function addIssue(id) {
  svc.post("/issues", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a issue with " + "id " + id }
    });
}

// DELETE
function deleteIssue(id) {
  svc.delete("/issues/" + id, {
    parameters: { description: "Delete a issue with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingIssue(id) {
  svc.delete("/issues/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a issue with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingIssue(id) {
  svc.post("/issues", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a issue with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a issue with " + "id " + id }
  });
}

// UPDATE
function updateIssue(id) {
  svc.put("/issues/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a issue with " + "id " + id }
    });
}

// GET one
function getIssue(id) {
  svc.get("/issues/" + id, {
    parameters: { description: "Get a issue with " + "id " + id }
  });
}

// LIST all
function listIssues() {
  svc.get("/issues", {
    parameters: { description: "List issues" }
  });
}

// Verify exists (by list)
function verifyIssueExists(id) {
  svc.get("/issues", {
    callback: function (response) {
      issue = JSON.parse(response.body);
      for (let i = 0; i < issue.length; i++) {
        if (issue[i].id === id) {
          return pvg.success("Issue exists");
        }
      }
      return pvg.fail("Expected a issue to exist but it does not");
    },
    parameters: { description: "Verify issue with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyIssueDoesNotExist(id) {
  svc.get("/issues", {
    callback: function (response) {
      issue = JSON.parse(response.body);
      for (let i = 0; i < issue.length; i++) {
        if (issue[i].id === id) {
          return pvg.fail("Expected a issue to not exist but it does");
        }
      }
      return pvg.success("Issue does not exist");
    },
    parameters: { description: "Verify issue with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddIssue() {
  return bp.EventSet("any-add-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a issue");
  });
}
function matchAddIssue(id) {
  return bp.EventSet("add-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a issue with " + "id " + id;
  });
}
function matchAnyDeleteIssue() {
  return bp.EventSet("any-del-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a issue");
  });
}
function matchDeleteIssue(id) {
  return bp.EventSet("del-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a issue with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateIssue() {
  return bp.EventSet("any-update-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a issue");
  });
}
function matchUpdateIssue(id) {
  return bp.EventSet("update-issue", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a issue with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyIssueAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ issue\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ issue\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForIssueAdded(id) {
  waitFor(matchAddIssue(id));
}
function waitForIssueDeleted(id) {
  waitFor(matchDeleteIssue(id));
}
function waitForAnyIssueDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ issue\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ issue\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForIssueUpdated(id) {
  waitFor(matchUpdateIssue(id));
}
function waitForAnyIssueUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ issue\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ issue\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyIssueUpdated(id) {
  svc.get("/issues", {
    callback: function (response) {
      issue = JSON.parse(response.body);
      for (let i = 0; i < issue.length; i++) {
        if (issue[i].id === id) {
          return pvg.success("Issue updated (present)");
        }
      }
      return pvg.fail("Expected a issue to be present after update, but it is not");
    },
    parameters: { description: "Verify issue with " + "id " + id + " exists" }
  });
}


/** === License Operations === */

// CREATE
function addLicense(license) {
  svc.post("/licenses", {
      body: JSON.stringify({ license: license }),
      parameters: { description: "Add a license with " + "license " + license }
    });
}

// DELETE
function deleteLicense(license) {
  svc.delete("/licenses/" + license, {
    parameters: { description: "Delete a license with " + "license " + license }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingLicense(license) {
  svc.delete("/licenses/" + license, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a license with " + "license " + license }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingLicense(license) {
  svc.post("/licenses", {
      body: JSON.stringify({ license: license }),
      parameters: { description: "Add a license with " + "license " + license }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a license with " + "license " + license }
  });
}

// UPDATE
function updateLicense(license) {
  svc.put("/licenses/" + license, {
      body: JSON.stringify({ license: license }),
      parameters: { description: "Update a license with " + "license " + license }
    });
}

// GET one
function getLicense(license) {
  svc.get("/licenses/" + license, {
    parameters: { description: "Get a license with " + "license " + license }
  });
}

// LIST all
function listLicenses() {
  svc.get("/licenses", {
    parameters: { description: "List licenses" }
  });
}

// Verify exists (by list)
function verifyLicenseExists(license) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].license === license) {
          return pvg.success("License exists");
        }
      }
      return pvg.fail("Expected a license to exist but it does not");
    },
    parameters: { description: "Verify license with " + "license " + license + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyLicenseDoesNotExist(license) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].license === license) {
          return pvg.fail("Expected a license to not exist but it does");
        }
      }
      return pvg.success("License does not exist");
    },
    parameters: { description: "Verify license with " + "license " + license + " does not exist" }
  });
}

// Match helpers
function matchAnyAddLicense() {
  return bp.EventSet("any-add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a license");
  });
}
function matchAddLicense(license) {
  return bp.EventSet("add-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a license with " + "license " + license;
  });
}
function matchAnyDeleteLicense() {
  return bp.EventSet("any-del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a license");
  });
}
function matchDeleteLicense(license) {
  return bp.EventSet("del-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a license with " + "license " + license;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateLicense() {
  return bp.EventSet("any-update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a license");
  });
}
function matchUpdateLicense(license) {
  return bp.EventSet("update-license", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a license with " + "license " + license;
  });
}

// Wait helpers
function waitForAnyLicenseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ license\ with\ license\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ license\ with\ license\ (.+)$/);
    return { license: m[1] };
}
function waitForLicenseAdded(license) {
  waitFor(matchAddLicense(license));
}
function waitForLicenseDeleted(license) {
  waitFor(matchDeleteLicense(license));
}
function waitForAnyLicenseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ license\ with\ license\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ license\ with\ license\ (.+)$/);
    return { license: m[1] };
}
function waitForLicenseUpdated(license) {
  waitFor(matchUpdateLicense(license));
}
function waitForAnyLicenseUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ license\ with\ license\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ license\ with\ license\ (.+)$/);
    return { license: m[1] };
}

// Verify updated (presence-by-list)
function verifyLicenseUpdated(license) {
  svc.get("/licenses", {
    callback: function (response) {
      license = JSON.parse(response.body);
      for (let i = 0; i < license.length; i++) {
        if (license[i].license === license) {
          return pvg.success("License updated (present)");
        }
      }
      return pvg.fail("Expected a license to be present after update, but it is not");
    },
    parameters: { description: "Verify license with " + "license " + license + " exists" }
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
function addMarketplace_listing(account_id, plan_id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ account_id: account_id, plan_id: plan_id }),
      parameters: { description: "Add a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
    });
}

// DELETE
function deleteMarketplace_listing(account_id, plan_id) {
  svc.delete("/marketplace_listing/" + account_id + "/"+ plan_id, {
    parameters: { description: "Delete a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMarketplace_listing(account_id, plan_id) {
  svc.delete("/marketplace_listing/" + account_id + "/"+ plan_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMarketplace_listing(account_id, plan_id) {
  svc.post("/marketplace_listing", {
      body: JSON.stringify({ account_id: account_id, plan_id: plan_id }),
      parameters: { description: "Add a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
  });
}

// UPDATE
function updateMarketplace_listing(account_id, plan_id) {
  svc.put("/marketplace_listing/" + account_id + "/"+ plan_id, {
      body: JSON.stringify({ account_id: account_id, plan_id: plan_id }),
      parameters: { description: "Update a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
    });
}

// GET one
function getMarketplace_listing(account_id, plan_id) {
  svc.get("/marketplace_listing/" + account_id + "/"+ plan_id, {
    parameters: { description: "Get a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id }
  });
}

// LIST all
function listMarketplace_listing() {
  svc.get("/marketplace_listing", {
    parameters: { description: "List marketplace_listing" }
  });
}

// Verify exists (by list)
function verifyMarketplace_listingExists(account_id, plan_id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].account_id === account_id && marketplace_listing[i].plan_id === plan_id) {
          return pvg.success("Marketplace_listing exists");
        }
      }
      return pvg.fail("Expected a marketplace_listing to exist but it does not");
    },
    parameters: { description: "Verify marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMarketplace_listingDoesNotExist(account_id, plan_id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].account_id === account_id && marketplace_listing[i].plan_id === plan_id) {
          return pvg.fail("Expected a marketplace_listing to not exist but it does");
        }
      }
      return pvg.success("Marketplace_listing does not exist");
    },
    parameters: { description: "Verify marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMarketplace_listing() {
  return bp.EventSet("any-add-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a marketplace_listing");
  });
}
function matchAddMarketplace_listing(account_id, plan_id) {
  return bp.EventSet("add-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id;
  });
}
function matchAnyDeleteMarketplace_listing() {
  return bp.EventSet("any-del-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a marketplace_listing");
  });
}
function matchDeleteMarketplace_listing(account_id, plan_id) {
  return bp.EventSet("del-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMarketplace_listing() {
  return bp.EventSet("any-update-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a marketplace_listing");
  });
}
function matchUpdateMarketplace_listing(account_id, plan_id) {
  return bp.EventSet("update-marketplace_listing", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id;
  });
}

// Wait helpers
function waitForAnyMarketplace_listingAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/);
    return { account_id: parseInt(m[1]), plan_id: parseInt(m[2]) };
}
function waitForMarketplace_listingAdded(account_id, plan_id) {
  waitFor(matchAddMarketplace_listing(account_id, plan_id));
}
function waitForMarketplace_listingDeleted(account_id, plan_id) {
  waitFor(matchDeleteMarketplace_listing(account_id, plan_id));
}
function waitForAnyMarketplace_listingDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/);
    return { account_id: parseInt(m[1]), plan_id: parseInt(m[2]) };
}
function waitForMarketplace_listingUpdated(account_id, plan_id) {
  waitFor(matchUpdateMarketplace_listing(account_id, plan_id));
}
function waitForAnyMarketplace_listingUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ marketplace_listing\ with\ account_id\ (.+) and plan_id\ (.+)$/);
    return { account_id: parseInt(m[1]), plan_id: parseInt(m[2]) };
}

// Verify updated (presence-by-list)
function verifyMarketplace_listingUpdated(account_id, plan_id) {
  svc.get("/marketplace_listing", {
    callback: function (response) {
      marketplace_listing = JSON.parse(response.body);
      for (let i = 0; i < marketplace_listing.length; i++) {
        if (marketplace_listing[i].account_id === account_id && marketplace_listing[i].plan_id === plan_id) {
          return pvg.success("Marketplace_listing updated (present)");
        }
      }
      return pvg.fail("Expected a marketplace_listing to be present after update, but it is not");
    },
    parameters: { description: "Verify marketplace_listing with " + "account_id " + account_id + " and " + "plan_id " + plan_id + " exists" }
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


/** === Network Operations === */

// CREATE
function addNetwork(owner, repo) {
  svc.post("/networks", {
      body: JSON.stringify({ owner: owner, repo: repo }),
      parameters: { description: "Add a network with " + "owner " + owner + " and " + "repo " + repo }
    });
}

// DELETE
function deleteNetwork(owner, repo) {
  svc.delete("/networks/" + owner + "/"+ repo, {
    parameters: { description: "Delete a network with " + "owner " + owner + " and " + "repo " + repo }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNetwork(owner, repo) {
  svc.delete("/networks/" + owner + "/"+ repo, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a network with " + "owner " + owner + " and " + "repo " + repo }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNetwork(owner, repo) {
  svc.post("/networks", {
      body: JSON.stringify({ owner: owner, repo: repo }),
      parameters: { description: "Add a network with " + "owner " + owner + " and " + "repo " + repo }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a network with " + "owner " + owner + " and " + "repo " + repo }
  });
}

// UPDATE
function updateNetwork(owner, repo) {
  svc.put("/networks/" + owner + "/"+ repo, {
      body: JSON.stringify({ owner: owner, repo: repo }),
      parameters: { description: "Update a network with " + "owner " + owner + " and " + "repo " + repo }
    });
}

// GET one
function getNetwork(owner, repo) {
  svc.get("/networks/" + owner + "/"+ repo, {
    parameters: { description: "Get a network with " + "owner " + owner + " and " + "repo " + repo }
  });
}

// LIST all
function listNetworks() {
  svc.get("/networks", {
    parameters: { description: "List networks" }
  });
}

// Verify exists (by list)
function verifyNetworkExists(owner, repo) {
  svc.get("/networks", {
    callback: function (response) {
      network = JSON.parse(response.body);
      for (let i = 0; i < network.length; i++) {
        if (network[i].owner === owner && network[i].repo === repo) {
          return pvg.success("Network exists");
        }
      }
      return pvg.fail("Expected a network to exist but it does not");
    },
    parameters: { description: "Verify network with " + "owner " + owner + " and " + "repo " + repo + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNetworkDoesNotExist(owner, repo) {
  svc.get("/networks", {
    callback: function (response) {
      network = JSON.parse(response.body);
      for (let i = 0; i < network.length; i++) {
        if (network[i].owner === owner && network[i].repo === repo) {
          return pvg.fail("Expected a network to not exist but it does");
        }
      }
      return pvg.success("Network does not exist");
    },
    parameters: { description: "Verify network with " + "owner " + owner + " and " + "repo " + repo + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNetwork() {
  return bp.EventSet("any-add-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a network");
  });
}
function matchAddNetwork(owner, repo) {
  return bp.EventSet("add-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a network with " + "owner " + owner + " and " + "repo " + repo;
  });
}
function matchAnyDeleteNetwork() {
  return bp.EventSet("any-del-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a network");
  });
}
function matchDeleteNetwork(owner, repo) {
  return bp.EventSet("del-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a network with " + "owner " + owner + " and " + "repo " + repo;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNetwork() {
  return bp.EventSet("any-update-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a network");
  });
}
function matchUpdateNetwork(owner, repo) {
  return bp.EventSet("update-network", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a network with " + "owner " + owner + " and " + "repo " + repo;
  });
}

// Wait helpers
function waitForAnyNetworkAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/);
    return { owner: m[1], repo: m[2] };
}
function waitForNetworkAdded(owner, repo) {
  waitFor(matchAddNetwork(owner, repo));
}
function waitForNetworkDeleted(owner, repo) {
  waitFor(matchDeleteNetwork(owner, repo));
}
function waitForAnyNetworkDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/);
    return { owner: m[1], repo: m[2] };
}
function waitForNetworkUpdated(owner, repo) {
  waitFor(matchUpdateNetwork(owner, repo));
}
function waitForAnyNetworkUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ network\ with\ owner\ (.+) and repo\ (.+)$/);
    return { owner: m[1], repo: m[2] };
}

// Verify updated (presence-by-list)
function verifyNetworkUpdated(owner, repo) {
  svc.get("/networks", {
    callback: function (response) {
      network = JSON.parse(response.body);
      for (let i = 0; i < network.length; i++) {
        if (network[i].owner === owner && network[i].repo === repo) {
          return pvg.success("Network updated (present)");
        }
      }
      return pvg.fail("Expected a network to be present after update, but it is not");
    },
    parameters: { description: "Verify network with " + "owner " + owner + " and " + "repo " + repo + " exists" }
  });
}


/** === Notification Operations === */

// CREATE
function addNotification(thread_id) {
  svc.post("/notifications", {
      body: JSON.stringify({ thread_id: thread_id }),
      parameters: { description: "Add a notification with " + "thread_id " + thread_id }
    });
}

// DELETE
function deleteNotification(thread_id) {
  svc.delete("/notifications/" + thread_id, {
    parameters: { description: "Delete a notification with " + "thread_id " + thread_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingNotification(thread_id) {
  svc.delete("/notifications/" + thread_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a notification with " + "thread_id " + thread_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingNotification(thread_id) {
  svc.post("/notifications", {
      body: JSON.stringify({ thread_id: thread_id }),
      parameters: { description: "Add a notification with " + "thread_id " + thread_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a notification with " + "thread_id " + thread_id }
  });
}

// UPDATE
function updateNotification(thread_id) {
  svc.put("/notifications/" + thread_id, {
      body: JSON.stringify({ thread_id: thread_id }),
      parameters: { description: "Update a notification with " + "thread_id " + thread_id }
    });
}

// GET one
function getNotification(thread_id) {
  svc.get("/notifications/" + thread_id, {
    parameters: { description: "Get a notification with " + "thread_id " + thread_id }
  });
}

// LIST all
function listNotifications() {
  svc.get("/notifications", {
    parameters: { description: "List notifications" }
  });
}

// Verify exists (by list)
function verifyNotificationExists(thread_id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].thread_id === thread_id) {
          return pvg.success("Notification exists");
        }
      }
      return pvg.fail("Expected a notification to exist but it does not");
    },
    parameters: { description: "Verify notification with " + "thread_id " + thread_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyNotificationDoesNotExist(thread_id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].thread_id === thread_id) {
          return pvg.fail("Expected a notification to not exist but it does");
        }
      }
      return pvg.success("Notification does not exist");
    },
    parameters: { description: "Verify notification with " + "thread_id " + thread_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddNotification() {
  return bp.EventSet("any-add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a notification");
  });
}
function matchAddNotification(thread_id) {
  return bp.EventSet("add-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a notification with " + "thread_id " + thread_id;
  });
}
function matchAnyDeleteNotification() {
  return bp.EventSet("any-del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a notification");
  });
}
function matchDeleteNotification(thread_id) {
  return bp.EventSet("del-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a notification with " + "thread_id " + thread_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateNotification() {
  return bp.EventSet("any-update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a notification");
  });
}
function matchUpdateNotification(thread_id) {
  return bp.EventSet("update-notification", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a notification with " + "thread_id " + thread_id;
  });
}

// Wait helpers
function waitForAnyNotificationAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ notification\ with\ thread_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ notification\ with\ thread_id\ (.+)$/);
    return { thread_id: parseInt(m[1]) };
}
function waitForNotificationAdded(thread_id) {
  waitFor(matchAddNotification(thread_id));
}
function waitForNotificationDeleted(thread_id) {
  waitFor(matchDeleteNotification(thread_id));
}
function waitForAnyNotificationDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ notification\ with\ thread_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ notification\ with\ thread_id\ (.+)$/);
    return { thread_id: parseInt(m[1]) };
}
function waitForNotificationUpdated(thread_id) {
  waitFor(matchUpdateNotification(thread_id));
}
function waitForAnyNotificationUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ notification\ with\ thread_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ notification\ with\ thread_id\ (.+)$/);
    return { thread_id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyNotificationUpdated(thread_id) {
  svc.get("/notifications", {
    callback: function (response) {
      notification = JSON.parse(response.body);
      for (let i = 0; i < notification.length; i++) {
        if (notification[i].thread_id === thread_id) {
          return pvg.success("Notification updated (present)");
        }
      }
      return pvg.fail("Expected a notification to be present after update, but it is not");
    },
    parameters: { description: "Verify notification with " + "thread_id " + thread_id + " exists" }
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
function addOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, team_slug: team_slug, secret_name: secret_name, username: username, repository_id: repository_id, discussion_number: discussion_number, runner_group_id: runner_group_id, runner_id: runner_id, hook_id: hook_id, name: name, project_number: project_number, role_id: role_id, package_type: package_type, package_name: package_name, configuration_id: configuration_id, comment_number: comment_number, migration_id: migration_id, ruleset_id: ruleset_id, hosted_runner_id: hosted_runner_id, subject_digest: subject_digest, campaign_number: campaign_number, actor_type: actor_type, actor_id: actor_id, user_id: user_id, package_version_id: package_version_id, item_id: item_id, custom_property_name: custom_property_name, network_configuration_id: network_configuration_id, project_id: project_id, owner: owner, repo: repo, delivery_id: delivery_id, invitation_id: invitation_id, issue_type_id: issue_type_id, codespace_name: codespace_name, pat_request_id: pat_request_id, pat_id: pat_id, reaction_id: reaction_id, attestation_id: attestation_id, repo_name: repo_name, field_id: field_id, rule_suite_id: rule_suite_id, version_id: version_id, network_settings_id: network_settings_id, security_product: security_product, enablement: enablement }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
    });
}

// DELETE
function deleteOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.delete("/orgs/" + org + "/"+ team_slug + "/"+ secret_name + "/"+ username + "/"+ repository_id + "/"+ discussion_number + "/"+ runner_group_id + "/"+ runner_id + "/"+ hook_id + "/"+ name + "/"+ project_number + "/"+ role_id + "/"+ package_type + "/"+ package_name + "/"+ configuration_id + "/"+ comment_number + "/"+ migration_id + "/"+ ruleset_id + "/"+ hosted_runner_id + "/"+ subject_digest + "/"+ campaign_number + "/"+ actor_type + "/"+ actor_id + "/"+ user_id + "/"+ package_version_id + "/"+ item_id + "/"+ custom_property_name + "/"+ network_configuration_id + "/"+ project_id + "/"+ owner + "/"+ repo + "/"+ delivery_id + "/"+ invitation_id + "/"+ issue_type_id + "/"+ codespace_name + "/"+ pat_request_id + "/"+ pat_id + "/"+ reaction_id + "/"+ attestation_id + "/"+ repo_name + "/"+ field_id + "/"+ rule_suite_id + "/"+ version_id + "/"+ network_settings_id + "/"+ security_product + "/"+ enablement, {
    parameters: { description: "Delete a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.delete("/orgs/" + org + "/"+ team_slug + "/"+ secret_name + "/"+ username + "/"+ repository_id + "/"+ discussion_number + "/"+ runner_group_id + "/"+ runner_id + "/"+ hook_id + "/"+ name + "/"+ project_number + "/"+ role_id + "/"+ package_type + "/"+ package_name + "/"+ configuration_id + "/"+ comment_number + "/"+ migration_id + "/"+ ruleset_id + "/"+ hosted_runner_id + "/"+ subject_digest + "/"+ campaign_number + "/"+ actor_type + "/"+ actor_id + "/"+ user_id + "/"+ package_version_id + "/"+ item_id + "/"+ custom_property_name + "/"+ network_configuration_id + "/"+ project_id + "/"+ owner + "/"+ repo + "/"+ delivery_id + "/"+ invitation_id + "/"+ issue_type_id + "/"+ codespace_name + "/"+ pat_request_id + "/"+ pat_id + "/"+ reaction_id + "/"+ attestation_id + "/"+ repo_name + "/"+ field_id + "/"+ rule_suite_id + "/"+ version_id + "/"+ network_settings_id + "/"+ security_product + "/"+ enablement, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, team_slug: team_slug, secret_name: secret_name, username: username, repository_id: repository_id, discussion_number: discussion_number, runner_group_id: runner_group_id, runner_id: runner_id, hook_id: hook_id, name: name, project_number: project_number, role_id: role_id, package_type: package_type, package_name: package_name, configuration_id: configuration_id, comment_number: comment_number, migration_id: migration_id, ruleset_id: ruleset_id, hosted_runner_id: hosted_runner_id, subject_digest: subject_digest, campaign_number: campaign_number, actor_type: actor_type, actor_id: actor_id, user_id: user_id, package_version_id: package_version_id, item_id: item_id, custom_property_name: custom_property_name, network_configuration_id: network_configuration_id, project_id: project_id, owner: owner, repo: repo, delivery_id: delivery_id, invitation_id: invitation_id, issue_type_id: issue_type_id, codespace_name: codespace_name, pat_request_id: pat_request_id, pat_id: pat_id, reaction_id: reaction_id, attestation_id: attestation_id, repo_name: repo_name, field_id: field_id, rule_suite_id: rule_suite_id, version_id: version_id, network_settings_id: network_settings_id, security_product: security_product, enablement: enablement }),
      parameters: { description: "Add a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
  });
}

// UPDATE
function updateOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.put("/orgs/" + org + "/"+ team_slug + "/"+ secret_name + "/"+ username + "/"+ repository_id + "/"+ discussion_number + "/"+ runner_group_id + "/"+ runner_id + "/"+ hook_id + "/"+ name + "/"+ project_number + "/"+ role_id + "/"+ package_type + "/"+ package_name + "/"+ configuration_id + "/"+ comment_number + "/"+ migration_id + "/"+ ruleset_id + "/"+ hosted_runner_id + "/"+ subject_digest + "/"+ campaign_number + "/"+ actor_type + "/"+ actor_id + "/"+ user_id + "/"+ package_version_id + "/"+ item_id + "/"+ custom_property_name + "/"+ network_configuration_id + "/"+ project_id + "/"+ owner + "/"+ repo + "/"+ delivery_id + "/"+ invitation_id + "/"+ issue_type_id + "/"+ codespace_name + "/"+ pat_request_id + "/"+ pat_id + "/"+ reaction_id + "/"+ attestation_id + "/"+ repo_name + "/"+ field_id + "/"+ rule_suite_id + "/"+ version_id + "/"+ network_settings_id + "/"+ security_product + "/"+ enablement, {
      body: JSON.stringify({ org: org, team_slug: team_slug, secret_name: secret_name, username: username, repository_id: repository_id, discussion_number: discussion_number, runner_group_id: runner_group_id, runner_id: runner_id, hook_id: hook_id, name: name, project_number: project_number, role_id: role_id, package_type: package_type, package_name: package_name, configuration_id: configuration_id, comment_number: comment_number, migration_id: migration_id, ruleset_id: ruleset_id, hosted_runner_id: hosted_runner_id, subject_digest: subject_digest, campaign_number: campaign_number, actor_type: actor_type, actor_id: actor_id, user_id: user_id, package_version_id: package_version_id, item_id: item_id, custom_property_name: custom_property_name, network_configuration_id: network_configuration_id, project_id: project_id, owner: owner, repo: repo, delivery_id: delivery_id, invitation_id: invitation_id, issue_type_id: issue_type_id, codespace_name: codespace_name, pat_request_id: pat_request_id, pat_id: pat_id, reaction_id: reaction_id, attestation_id: attestation_id, repo_name: repo_name, field_id: field_id, rule_suite_id: rule_suite_id, version_id: version_id, network_settings_id: network_settings_id, security_product: security_product, enablement: enablement }),
      parameters: { description: "Update a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
    });
}

// GET one
function getOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.get("/orgs/" + org + "/"+ team_slug + "/"+ secret_name + "/"+ username + "/"+ repository_id + "/"+ discussion_number + "/"+ runner_group_id + "/"+ runner_id + "/"+ hook_id + "/"+ name + "/"+ project_number + "/"+ role_id + "/"+ package_type + "/"+ package_name + "/"+ configuration_id + "/"+ comment_number + "/"+ migration_id + "/"+ ruleset_id + "/"+ hosted_runner_id + "/"+ subject_digest + "/"+ campaign_number + "/"+ actor_type + "/"+ actor_id + "/"+ user_id + "/"+ package_version_id + "/"+ item_id + "/"+ custom_property_name + "/"+ network_configuration_id + "/"+ project_id + "/"+ owner + "/"+ repo + "/"+ delivery_id + "/"+ invitation_id + "/"+ issue_type_id + "/"+ codespace_name + "/"+ pat_request_id + "/"+ pat_id + "/"+ reaction_id + "/"+ attestation_id + "/"+ repo_name + "/"+ field_id + "/"+ rule_suite_id + "/"+ version_id + "/"+ network_settings_id + "/"+ security_product + "/"+ enablement, {
    parameters: { description: "Get a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement }
  });
}

// LIST all
function listOrgs() {
  svc.get("/orgs", {
    parameters: { description: "List orgs" }
  });
}

// Verify exists (by list)
function verifyOrgExists(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].team_slug === team_slug && org[i].secret_name === secret_name && org[i].username === username && org[i].repository_id === repository_id && org[i].discussion_number === discussion_number && org[i].runner_group_id === runner_group_id && org[i].runner_id === runner_id && org[i].hook_id === hook_id && org[i].name === name && org[i].project_number === project_number && org[i].role_id === role_id && org[i].package_type === package_type && org[i].package_name === package_name && org[i].configuration_id === configuration_id && org[i].comment_number === comment_number && org[i].migration_id === migration_id && org[i].ruleset_id === ruleset_id && org[i].hosted_runner_id === hosted_runner_id && org[i].subject_digest === subject_digest && org[i].campaign_number === campaign_number && org[i].actor_type === actor_type && org[i].actor_id === actor_id && org[i].user_id === user_id && org[i].package_version_id === package_version_id && org[i].item_id === item_id && org[i].custom_property_name === custom_property_name && org[i].network_configuration_id === network_configuration_id && org[i].project_id === project_id && org[i].owner === owner && org[i].repo === repo && org[i].delivery_id === delivery_id && org[i].invitation_id === invitation_id && org[i].issue_type_id === issue_type_id && org[i].codespace_name === codespace_name && org[i].pat_request_id === pat_request_id && org[i].pat_id === pat_id && org[i].reaction_id === reaction_id && org[i].attestation_id === attestation_id && org[i].repo_name === repo_name && org[i].field_id === field_id && org[i].rule_suite_id === rule_suite_id && org[i].version_id === version_id && org[i].network_settings_id === network_settings_id && org[i].security_product === security_product && org[i].enablement === enablement) {
          return pvg.success("Org exists");
        }
      }
      return pvg.fail("Expected a org to exist but it does not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrgDoesNotExist(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].team_slug === team_slug && org[i].secret_name === secret_name && org[i].username === username && org[i].repository_id === repository_id && org[i].discussion_number === discussion_number && org[i].runner_group_id === runner_group_id && org[i].runner_id === runner_id && org[i].hook_id === hook_id && org[i].name === name && org[i].project_number === project_number && org[i].role_id === role_id && org[i].package_type === package_type && org[i].package_name === package_name && org[i].configuration_id === configuration_id && org[i].comment_number === comment_number && org[i].migration_id === migration_id && org[i].ruleset_id === ruleset_id && org[i].hosted_runner_id === hosted_runner_id && org[i].subject_digest === subject_digest && org[i].campaign_number === campaign_number && org[i].actor_type === actor_type && org[i].actor_id === actor_id && org[i].user_id === user_id && org[i].package_version_id === package_version_id && org[i].item_id === item_id && org[i].custom_property_name === custom_property_name && org[i].network_configuration_id === network_configuration_id && org[i].project_id === project_id && org[i].owner === owner && org[i].repo === repo && org[i].delivery_id === delivery_id && org[i].invitation_id === invitation_id && org[i].issue_type_id === issue_type_id && org[i].codespace_name === codespace_name && org[i].pat_request_id === pat_request_id && org[i].pat_id === pat_id && org[i].reaction_id === reaction_id && org[i].attestation_id === attestation_id && org[i].repo_name === repo_name && org[i].field_id === field_id && org[i].rule_suite_id === rule_suite_id && org[i].version_id === version_id && org[i].network_settings_id === network_settings_id && org[i].security_product === security_product && org[i].enablement === enablement) {
          return pvg.fail("Expected a org to not exist but it does");
        }
      }
      return pvg.success("Org does not exist");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrg() {
  return bp.EventSet("any-add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a org");
  });
}
function matchAddOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  return bp.EventSet("add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement;
  });
}
function matchAnyDeleteOrg() {
  return bp.EventSet("any-del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a org");
  });
}
function matchDeleteOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  return bp.EventSet("del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateOrg() {
  return bp.EventSet("any-update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a org");
  });
}
function matchUpdateOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  return bp.EventSet("update-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement;
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/);
    return { org: m[1], team_slug: m[2], secret_name: m[3], username: m[4], repository_id: parseInt(m[5]), discussion_number: m[6], runner_group_id: parseInt(m[7]), runner_id: parseInt(m[8]), hook_id: parseInt(m[9]), name: m[10], project_number: m[11], role_id: parseInt(m[12]), package_type: m[13], package_name: m[14], configuration_id: parseInt(m[15]), comment_number: m[16], migration_id: parseInt(m[17]), ruleset_id: parseInt(m[18]), hosted_runner_id: parseInt(m[19]), subject_digest: m[20], campaign_number: m[21], actor_type: m[22], actor_id: parseInt(m[23]), user_id: parseInt(m[24]), package_version_id: parseInt(m[25]), item_id: parseInt(m[26]), custom_property_name: m[27], network_configuration_id: parseInt(m[28]), project_id: parseInt(m[29]), owner: m[30], repo: m[31], delivery_id: parseInt(m[32]), invitation_id: parseInt(m[33]), issue_type_id: parseInt(m[34]), codespace_name: m[35], pat_request_id: parseInt(m[36]), pat_id: parseInt(m[37]), reaction_id: parseInt(m[38]), attestation_id: parseInt(m[39]), repo_name: m[40], field_id: parseInt(m[41]), rule_suite_id: parseInt(m[42]), version_id: parseInt(m[43]), network_settings_id: parseInt(m[44]), security_product: m[45], enablement: m[46] };
}
function waitForOrgAdded(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  waitFor(matchAddOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement));
}
function waitForOrgDeleted(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  waitFor(matchDeleteOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement));
}
function waitForAnyOrgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/);
    return { org: m[1], team_slug: m[2], secret_name: m[3], username: m[4], repository_id: parseInt(m[5]), discussion_number: m[6], runner_group_id: parseInt(m[7]), runner_id: parseInt(m[8]), hook_id: parseInt(m[9]), name: m[10], project_number: m[11], role_id: parseInt(m[12]), package_type: m[13], package_name: m[14], configuration_id: parseInt(m[15]), comment_number: m[16], migration_id: parseInt(m[17]), ruleset_id: parseInt(m[18]), hosted_runner_id: parseInt(m[19]), subject_digest: m[20], campaign_number: m[21], actor_type: m[22], actor_id: parseInt(m[23]), user_id: parseInt(m[24]), package_version_id: parseInt(m[25]), item_id: parseInt(m[26]), custom_property_name: m[27], network_configuration_id: parseInt(m[28]), project_id: parseInt(m[29]), owner: m[30], repo: m[31], delivery_id: parseInt(m[32]), invitation_id: parseInt(m[33]), issue_type_id: parseInt(m[34]), codespace_name: m[35], pat_request_id: parseInt(m[36]), pat_id: parseInt(m[37]), reaction_id: parseInt(m[38]), attestation_id: parseInt(m[39]), repo_name: m[40], field_id: parseInt(m[41]), rule_suite_id: parseInt(m[42]), version_id: parseInt(m[43]), network_settings_id: parseInt(m[44]), security_product: m[45], enablement: m[46] };
}
function waitForOrgUpdated(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  waitFor(matchUpdateOrg(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement));
}
function waitForAnyOrgUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and secret_name\ (.+) and username\ (.+) and repository_id\ (.+) and discussion_number\ (.+) and runner_group_id\ (.+) and runner_id\ (.+) and hook_id\ (.+) and name\ (.+) and project_number\ (.+) and role_id\ (.+) and package_type\ (.+) and package_name\ (.+) and configuration_id\ (.+) and comment_number\ (.+) and migration_id\ (.+) and ruleset_id\ (.+) and hosted_runner_id\ (.+) and subject_digest\ (.+) and campaign_number\ (.+) and actor_type\ (.+) and actor_id\ (.+) and user_id\ (.+) and package_version_id\ (.+) and item_id\ (.+) and custom_property_name\ (.+) and network_configuration_id\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and issue_type_id\ (.+) and codespace_name\ (.+) and pat_request_id\ (.+) and pat_id\ (.+) and reaction_id\ (.+) and attestation_id\ (.+) and repo_name\ (.+) and field_id\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and network_settings_id\ (.+) and security_product\ (.+) and enablement\ (.+)$/);
    return { org: m[1], team_slug: m[2], secret_name: m[3], username: m[4], repository_id: parseInt(m[5]), discussion_number: m[6], runner_group_id: parseInt(m[7]), runner_id: parseInt(m[8]), hook_id: parseInt(m[9]), name: m[10], project_number: m[11], role_id: parseInt(m[12]), package_type: m[13], package_name: m[14], configuration_id: parseInt(m[15]), comment_number: m[16], migration_id: parseInt(m[17]), ruleset_id: parseInt(m[18]), hosted_runner_id: parseInt(m[19]), subject_digest: m[20], campaign_number: m[21], actor_type: m[22], actor_id: parseInt(m[23]), user_id: parseInt(m[24]), package_version_id: parseInt(m[25]), item_id: parseInt(m[26]), custom_property_name: m[27], network_configuration_id: parseInt(m[28]), project_id: parseInt(m[29]), owner: m[30], repo: m[31], delivery_id: parseInt(m[32]), invitation_id: parseInt(m[33]), issue_type_id: parseInt(m[34]), codespace_name: m[35], pat_request_id: parseInt(m[36]), pat_id: parseInt(m[37]), reaction_id: parseInt(m[38]), attestation_id: parseInt(m[39]), repo_name: m[40], field_id: parseInt(m[41]), rule_suite_id: parseInt(m[42]), version_id: parseInt(m[43]), network_settings_id: parseInt(m[44]), security_product: m[45], enablement: m[46] };
}

// Verify updated (presence-by-list)
function verifyOrgUpdated(org, team_slug, secret_name, username, repository_id, discussion_number, runner_group_id, runner_id, hook_id, name, project_number, role_id, package_type, package_name, configuration_id, comment_number, migration_id, ruleset_id, hosted_runner_id, subject_digest, campaign_number, actor_type, actor_id, user_id, package_version_id, item_id, custom_property_name, network_configuration_id, project_id, owner, repo, delivery_id, invitation_id, issue_type_id, codespace_name, pat_request_id, pat_id, reaction_id, attestation_id, repo_name, field_id, rule_suite_id, version_id, network_settings_id, security_product, enablement) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].team_slug === team_slug && org[i].secret_name === secret_name && org[i].username === username && org[i].repository_id === repository_id && org[i].discussion_number === discussion_number && org[i].runner_group_id === runner_group_id && org[i].runner_id === runner_id && org[i].hook_id === hook_id && org[i].name === name && org[i].project_number === project_number && org[i].role_id === role_id && org[i].package_type === package_type && org[i].package_name === package_name && org[i].configuration_id === configuration_id && org[i].comment_number === comment_number && org[i].migration_id === migration_id && org[i].ruleset_id === ruleset_id && org[i].hosted_runner_id === hosted_runner_id && org[i].subject_digest === subject_digest && org[i].campaign_number === campaign_number && org[i].actor_type === actor_type && org[i].actor_id === actor_id && org[i].user_id === user_id && org[i].package_version_id === package_version_id && org[i].item_id === item_id && org[i].custom_property_name === custom_property_name && org[i].network_configuration_id === network_configuration_id && org[i].project_id === project_id && org[i].owner === owner && org[i].repo === repo && org[i].delivery_id === delivery_id && org[i].invitation_id === invitation_id && org[i].issue_type_id === issue_type_id && org[i].codespace_name === codespace_name && org[i].pat_request_id === pat_request_id && org[i].pat_id === pat_id && org[i].reaction_id === reaction_id && org[i].attestation_id === attestation_id && org[i].repo_name === repo_name && org[i].field_id === field_id && org[i].rule_suite_id === rule_suite_id && org[i].version_id === version_id && org[i].network_settings_id === network_settings_id && org[i].security_product === security_product && org[i].enablement === enablement) {
          return pvg.success("Org updated (present)");
        }
      }
      return pvg.fail("Expected a org to be present after update, but it is not");
    },
    parameters: { description: "Verify org with " + "org " + org + " and " + "team_slug " + team_slug + " and " + "secret_name " + secret_name + " and " + "username " + username + " and " + "repository_id " + repository_id + " and " + "discussion_number " + discussion_number + " and " + "runner_group_id " + runner_group_id + " and " + "runner_id " + runner_id + " and " + "hook_id " + hook_id + " and " + "name " + name + " and " + "project_number " + project_number + " and " + "role_id " + role_id + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "configuration_id " + configuration_id + " and " + "comment_number " + comment_number + " and " + "migration_id " + migration_id + " and " + "ruleset_id " + ruleset_id + " and " + "hosted_runner_id " + hosted_runner_id + " and " + "subject_digest " + subject_digest + " and " + "campaign_number " + campaign_number + " and " + "actor_type " + actor_type + " and " + "actor_id " + actor_id + " and " + "user_id " + user_id + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "custom_property_name " + custom_property_name + " and " + "network_configuration_id " + network_configuration_id + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "issue_type_id " + issue_type_id + " and " + "codespace_name " + codespace_name + " and " + "pat_request_id " + pat_request_id + " and " + "pat_id " + pat_id + " and " + "reaction_id " + reaction_id + " and " + "attestation_id " + attestation_id + " and " + "repo_name " + repo_name + " and " + "field_id " + field_id + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "network_settings_id " + network_settings_id + " and " + "security_product " + security_product + " and " + "enablement " + enablement + " exists" }
  });
}


/** === Project Operations === */

// CREATE
function addProject(project_id, column_id, username) {
  svc.post("/projects", {
      body: JSON.stringify({ project_id: project_id, column_id: column_id, username: username }),
      parameters: { description: "Add a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
    });
}

// DELETE
function deleteProject(project_id, column_id, username) {
  svc.delete("/projects/" + project_id + "/"+ column_id + "/"+ username, {
    parameters: { description: "Delete a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingProject(project_id, column_id, username) {
  svc.delete("/projects/" + project_id + "/"+ column_id + "/"+ username, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingProject(project_id, column_id, username) {
  svc.post("/projects", {
      body: JSON.stringify({ project_id: project_id, column_id: column_id, username: username }),
      parameters: { description: "Add a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
  });
}

// UPDATE
function updateProject(project_id, column_id, username) {
  svc.put("/projects/" + project_id + "/"+ column_id + "/"+ username, {
      body: JSON.stringify({ project_id: project_id, column_id: column_id, username: username }),
      parameters: { description: "Update a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
    });
}

// GET one
function getProject(project_id, column_id, username) {
  svc.get("/projects/" + project_id + "/"+ column_id + "/"+ username, {
    parameters: { description: "Get a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username }
  });
}

// LIST all
function listProjects() {
  svc.get("/projects", {
    parameters: { description: "List projects" }
  });
}

// Verify exists (by list)
function verifyProjectExists(project_id, column_id, username) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].project_id === project_id && project[i].column_id === column_id && project[i].username === username) {
          return pvg.success("Project exists");
        }
      }
      return pvg.fail("Expected a project to exist but it does not");
    },
    parameters: { description: "Verify project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyProjectDoesNotExist(project_id, column_id, username) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].project_id === project_id && project[i].column_id === column_id && project[i].username === username) {
          return pvg.fail("Expected a project to not exist but it does");
        }
      }
      return pvg.success("Project does not exist");
    },
    parameters: { description: "Verify project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username + " does not exist" }
  });
}

// Match helpers
function matchAnyAddProject() {
  return bp.EventSet("any-add-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a project");
  });
}
function matchAddProject(project_id, column_id, username) {
  return bp.EventSet("add-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username;
  });
}
function matchAnyDeleteProject() {
  return bp.EventSet("any-del-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a project");
  });
}
function matchDeleteProject(project_id, column_id, username) {
  return bp.EventSet("del-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateProject() {
  return bp.EventSet("any-update-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a project");
  });
}
function matchUpdateProject(project_id, column_id, username) {
  return bp.EventSet("update-project", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username;
  });
}

// Wait helpers
function waitForAnyProjectAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/);
    return { project_id: parseInt(m[1]), column_id: parseInt(m[2]), username: m[3] };
}
function waitForProjectAdded(project_id, column_id, username) {
  waitFor(matchAddProject(project_id, column_id, username));
}
function waitForProjectDeleted(project_id, column_id, username) {
  waitFor(matchDeleteProject(project_id, column_id, username));
}
function waitForAnyProjectDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/);
    return { project_id: parseInt(m[1]), column_id: parseInt(m[2]), username: m[3] };
}
function waitForProjectUpdated(project_id, column_id, username) {
  waitFor(matchUpdateProject(project_id, column_id, username));
}
function waitForAnyProjectUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ project\ with\ project_id\ (.+) and column_id\ (.+) and username\ (.+)$/);
    return { project_id: parseInt(m[1]), column_id: parseInt(m[2]), username: m[3] };
}

// Verify updated (presence-by-list)
function verifyProjectUpdated(project_id, column_id, username) {
  svc.get("/projects", {
    callback: function (response) {
      project = JSON.parse(response.body);
      for (let i = 0; i < project.length; i++) {
        if (project[i].project_id === project_id && project[i].column_id === column_id && project[i].username === username) {
          return pvg.success("Project updated (present)");
        }
      }
      return pvg.fail("Expected a project to be present after update, but it is not");
    },
    parameters: { description: "Verify project with " + "project_id " + project_id + " and " + "column_id " + column_id + " and " + "username " + username + " exists" }
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
function addRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, issue_number: issue_number, environment_name: environment_name, pull_number: pull_number, run_id: run_id, comment_id: comment_id, secret_name: secret_name, name: name, alert_number: alert_number, ref: ref, hook_id: hook_id, release_id: release_id, runner_id: runner_id, workflow_id: workflow_id, review_id: review_id, reaction_id: reaction_id, commit_sha: commit_sha, deployment_id: deployment_id, ruleset_id: ruleset_id, check_run_id: check_run_id, username: username, milestone_number: milestone_number, ghsa_id: ghsa_id, artifact_id: artifact_id, job_id: job_id, attempt_number: attempt_number, check_suite_id: check_suite_id, path: path, branch_policy_id: branch_policy_id, asset_id: asset_id, assignee: assignee, autolink_id: autolink_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, basehead: basehead, protection_rule_id: protection_rule_id, delivery_id: delivery_id, invitation_id: invitation_id, key_id: key_id, pages_deployment_id: pages_deployment_id, archive_format: archive_format, cache_id: cache_id, subject_digest: subject_digest, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id, status_id: status_id, file_sha: file_sha, tag_sha: tag_sha, tree_sha: tree_sha, author_id: author_id, event_id: event_id, issue_id: issue_id, build_id: build_id, dir: dir, tag: tag, rule_suite_id: rule_suite_id, version_id: version_id, sha: sha, tag_protection_id: tag_protection_id, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    });
}

// DELETE
function deleteRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ issue_number + "/"+ environment_name + "/"+ pull_number + "/"+ run_id + "/"+ comment_id + "/"+ secret_name + "/"+ name + "/"+ alert_number + "/"+ ref + "/"+ hook_id + "/"+ release_id + "/"+ runner_id + "/"+ workflow_id + "/"+ review_id + "/"+ reaction_id + "/"+ commit_sha + "/"+ deployment_id + "/"+ ruleset_id + "/"+ check_run_id + "/"+ username + "/"+ milestone_number + "/"+ ghsa_id + "/"+ artifact_id + "/"+ job_id + "/"+ attempt_number + "/"+ check_suite_id + "/"+ path + "/"+ branch_policy_id + "/"+ asset_id + "/"+ assignee + "/"+ autolink_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ basehead + "/"+ protection_rule_id + "/"+ delivery_id + "/"+ invitation_id + "/"+ key_id + "/"+ pages_deployment_id + "/"+ archive_format + "/"+ cache_id + "/"+ subject_digest + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id + "/"+ status_id + "/"+ file_sha + "/"+ tag_sha + "/"+ tree_sha + "/"+ author_id + "/"+ event_id + "/"+ issue_id + "/"+ build_id + "/"+ dir + "/"+ tag + "/"+ rule_suite_id + "/"+ version_id + "/"+ sha + "/"+ tag_protection_id + "/"+ template_owner + "/"+ template_repo, {
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ issue_number + "/"+ environment_name + "/"+ pull_number + "/"+ run_id + "/"+ comment_id + "/"+ secret_name + "/"+ name + "/"+ alert_number + "/"+ ref + "/"+ hook_id + "/"+ release_id + "/"+ runner_id + "/"+ workflow_id + "/"+ review_id + "/"+ reaction_id + "/"+ commit_sha + "/"+ deployment_id + "/"+ ruleset_id + "/"+ check_run_id + "/"+ username + "/"+ milestone_number + "/"+ ghsa_id + "/"+ artifact_id + "/"+ job_id + "/"+ attempt_number + "/"+ check_suite_id + "/"+ path + "/"+ branch_policy_id + "/"+ asset_id + "/"+ assignee + "/"+ autolink_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ basehead + "/"+ protection_rule_id + "/"+ delivery_id + "/"+ invitation_id + "/"+ key_id + "/"+ pages_deployment_id + "/"+ archive_format + "/"+ cache_id + "/"+ subject_digest + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id + "/"+ status_id + "/"+ file_sha + "/"+ tag_sha + "/"+ tree_sha + "/"+ author_id + "/"+ event_id + "/"+ issue_id + "/"+ build_id + "/"+ dir + "/"+ tag + "/"+ rule_suite_id + "/"+ version_id + "/"+ sha + "/"+ tag_protection_id + "/"+ template_owner + "/"+ template_repo, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, issue_number: issue_number, environment_name: environment_name, pull_number: pull_number, run_id: run_id, comment_id: comment_id, secret_name: secret_name, name: name, alert_number: alert_number, ref: ref, hook_id: hook_id, release_id: release_id, runner_id: runner_id, workflow_id: workflow_id, review_id: review_id, reaction_id: reaction_id, commit_sha: commit_sha, deployment_id: deployment_id, ruleset_id: ruleset_id, check_run_id: check_run_id, username: username, milestone_number: milestone_number, ghsa_id: ghsa_id, artifact_id: artifact_id, job_id: job_id, attempt_number: attempt_number, check_suite_id: check_suite_id, path: path, branch_policy_id: branch_policy_id, asset_id: asset_id, assignee: assignee, autolink_id: autolink_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, basehead: basehead, protection_rule_id: protection_rule_id, delivery_id: delivery_id, invitation_id: invitation_id, key_id: key_id, pages_deployment_id: pages_deployment_id, archive_format: archive_format, cache_id: cache_id, subject_digest: subject_digest, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id, status_id: status_id, file_sha: file_sha, tag_sha: tag_sha, tree_sha: tree_sha, author_id: author_id, event_id: event_id, issue_id: issue_id, build_id: build_id, dir: dir, tag: tag, rule_suite_id: rule_suite_id, version_id: version_id, sha: sha, tag_protection_id: tag_protection_id, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// UPDATE
function updateRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ issue_number + "/"+ environment_name + "/"+ pull_number + "/"+ run_id + "/"+ comment_id + "/"+ secret_name + "/"+ name + "/"+ alert_number + "/"+ ref + "/"+ hook_id + "/"+ release_id + "/"+ runner_id + "/"+ workflow_id + "/"+ review_id + "/"+ reaction_id + "/"+ commit_sha + "/"+ deployment_id + "/"+ ruleset_id + "/"+ check_run_id + "/"+ username + "/"+ milestone_number + "/"+ ghsa_id + "/"+ artifact_id + "/"+ job_id + "/"+ attempt_number + "/"+ check_suite_id + "/"+ path + "/"+ branch_policy_id + "/"+ asset_id + "/"+ assignee + "/"+ autolink_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ basehead + "/"+ protection_rule_id + "/"+ delivery_id + "/"+ invitation_id + "/"+ key_id + "/"+ pages_deployment_id + "/"+ archive_format + "/"+ cache_id + "/"+ subject_digest + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id + "/"+ status_id + "/"+ file_sha + "/"+ tag_sha + "/"+ tree_sha + "/"+ author_id + "/"+ event_id + "/"+ issue_id + "/"+ build_id + "/"+ dir + "/"+ tag + "/"+ rule_suite_id + "/"+ version_id + "/"+ sha + "/"+ tag_protection_id + "/"+ template_owner + "/"+ template_repo, {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, issue_number: issue_number, environment_name: environment_name, pull_number: pull_number, run_id: run_id, comment_id: comment_id, secret_name: secret_name, name: name, alert_number: alert_number, ref: ref, hook_id: hook_id, release_id: release_id, runner_id: runner_id, workflow_id: workflow_id, review_id: review_id, reaction_id: reaction_id, commit_sha: commit_sha, deployment_id: deployment_id, ruleset_id: ruleset_id, check_run_id: check_run_id, username: username, milestone_number: milestone_number, ghsa_id: ghsa_id, artifact_id: artifact_id, job_id: job_id, attempt_number: attempt_number, check_suite_id: check_suite_id, path: path, branch_policy_id: branch_policy_id, asset_id: asset_id, assignee: assignee, autolink_id: autolink_id, analysis_id: analysis_id, language: language, codeql_variant_analysis_id: codeql_variant_analysis_id, basehead: basehead, protection_rule_id: protection_rule_id, delivery_id: delivery_id, invitation_id: invitation_id, key_id: key_id, pages_deployment_id: pages_deployment_id, archive_format: archive_format, cache_id: cache_id, subject_digest: subject_digest, repo_owner: repo_owner, repo_name: repo_name, sarif_id: sarif_id, status_id: status_id, file_sha: file_sha, tag_sha: tag_sha, tree_sha: tree_sha, author_id: author_id, event_id: event_id, issue_id: issue_id, build_id: build_id, dir: dir, tag: tag, rule_suite_id: rule_suite_id, version_id: version_id, sha: sha, tag_protection_id: tag_protection_id, template_owner: template_owner, template_repo: template_repo }),
      parameters: { description: "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
    });
}

// GET one
function getRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ issue_number + "/"+ environment_name + "/"+ pull_number + "/"+ run_id + "/"+ comment_id + "/"+ secret_name + "/"+ name + "/"+ alert_number + "/"+ ref + "/"+ hook_id + "/"+ release_id + "/"+ runner_id + "/"+ workflow_id + "/"+ review_id + "/"+ reaction_id + "/"+ commit_sha + "/"+ deployment_id + "/"+ ruleset_id + "/"+ check_run_id + "/"+ username + "/"+ milestone_number + "/"+ ghsa_id + "/"+ artifact_id + "/"+ job_id + "/"+ attempt_number + "/"+ check_suite_id + "/"+ path + "/"+ branch_policy_id + "/"+ asset_id + "/"+ assignee + "/"+ autolink_id + "/"+ analysis_id + "/"+ language + "/"+ codeql_variant_analysis_id + "/"+ basehead + "/"+ protection_rule_id + "/"+ delivery_id + "/"+ invitation_id + "/"+ key_id + "/"+ pages_deployment_id + "/"+ archive_format + "/"+ cache_id + "/"+ subject_digest + "/"+ repo_owner + "/"+ repo_name + "/"+ sarif_id + "/"+ status_id + "/"+ file_sha + "/"+ tag_sha + "/"+ tree_sha + "/"+ author_id + "/"+ event_id + "/"+ issue_id + "/"+ build_id + "/"+ dir + "/"+ tag + "/"+ rule_suite_id + "/"+ version_id + "/"+ sha + "/"+ tag_protection_id + "/"+ template_owner + "/"+ template_repo, {
    parameters: { description: "Get a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo }
  });
}

// LIST all
function listRepos() {
  svc.get("/repos", {
    parameters: { description: "List repos" }
  });
}

// Verify exists (by list)
function verifyRepoExists(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].branch === branch && repo[i].issue_number === issue_number && repo[i].environment_name === environment_name && repo[i].pull_number === pull_number && repo[i].run_id === run_id && repo[i].comment_id === comment_id && repo[i].secret_name === secret_name && repo[i].name === name && repo[i].alert_number === alert_number && repo[i].ref === ref && repo[i].hook_id === hook_id && repo[i].release_id === release_id && repo[i].runner_id === runner_id && repo[i].workflow_id === workflow_id && repo[i].review_id === review_id && repo[i].reaction_id === reaction_id && repo[i].commit_sha === commit_sha && repo[i].deployment_id === deployment_id && repo[i].ruleset_id === ruleset_id && repo[i].check_run_id === check_run_id && repo[i].username === username && repo[i].milestone_number === milestone_number && repo[i].ghsa_id === ghsa_id && repo[i].artifact_id === artifact_id && repo[i].job_id === job_id && repo[i].attempt_number === attempt_number && repo[i].check_suite_id === check_suite_id && repo[i].path === path && repo[i].branch_policy_id === branch_policy_id && repo[i].asset_id === asset_id && repo[i].assignee === assignee && repo[i].autolink_id === autolink_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].basehead === basehead && repo[i].protection_rule_id === protection_rule_id && repo[i].delivery_id === delivery_id && repo[i].invitation_id === invitation_id && repo[i].key_id === key_id && repo[i].pages_deployment_id === pages_deployment_id && repo[i].archive_format === archive_format && repo[i].cache_id === cache_id && repo[i].subject_digest === subject_digest && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id && repo[i].status_id === status_id && repo[i].file_sha === file_sha && repo[i].tag_sha === tag_sha && repo[i].tree_sha === tree_sha && repo[i].author_id === author_id && repo[i].event_id === event_id && repo[i].issue_id === issue_id && repo[i].build_id === build_id && repo[i].dir === dir && repo[i].tag === tag && repo[i].rule_suite_id === rule_suite_id && repo[i].version_id === version_id && repo[i].sha === sha && repo[i].tag_protection_id === tag_protection_id && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].branch === branch && repo[i].issue_number === issue_number && repo[i].environment_name === environment_name && repo[i].pull_number === pull_number && repo[i].run_id === run_id && repo[i].comment_id === comment_id && repo[i].secret_name === secret_name && repo[i].name === name && repo[i].alert_number === alert_number && repo[i].ref === ref && repo[i].hook_id === hook_id && repo[i].release_id === release_id && repo[i].runner_id === runner_id && repo[i].workflow_id === workflow_id && repo[i].review_id === review_id && repo[i].reaction_id === reaction_id && repo[i].commit_sha === commit_sha && repo[i].deployment_id === deployment_id && repo[i].ruleset_id === ruleset_id && repo[i].check_run_id === check_run_id && repo[i].username === username && repo[i].milestone_number === milestone_number && repo[i].ghsa_id === ghsa_id && repo[i].artifact_id === artifact_id && repo[i].job_id === job_id && repo[i].attempt_number === attempt_number && repo[i].check_suite_id === check_suite_id && repo[i].path === path && repo[i].branch_policy_id === branch_policy_id && repo[i].asset_id === asset_id && repo[i].assignee === assignee && repo[i].autolink_id === autolink_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].basehead === basehead && repo[i].protection_rule_id === protection_rule_id && repo[i].delivery_id === delivery_id && repo[i].invitation_id === invitation_id && repo[i].key_id === key_id && repo[i].pages_deployment_id === pages_deployment_id && repo[i].archive_format === archive_format && repo[i].cache_id === cache_id && repo[i].subject_digest === subject_digest && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id && repo[i].status_id === status_id && repo[i].file_sha === file_sha && repo[i].tag_sha === tag_sha && repo[i].tree_sha === tree_sha && repo[i].author_id === author_id && repo[i].event_id === event_id && repo[i].issue_id === issue_id && repo[i].build_id === build_id && repo[i].dir === dir && repo[i].tag === tag && repo[i].rule_suite_id === rule_suite_id && repo[i].version_id === version_id && repo[i].sha === sha && repo[i].tag_protection_id === tag_protection_id && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRepo() {
  return bp.EventSet("any-update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a repo");
  });
}
function matchUpdateRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  return bp.EventSet("update-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo;
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], branch: m[3], issue_number: m[4], environment_name: m[5], pull_number: m[6], run_id: parseInt(m[7]), comment_id: parseInt(m[8]), secret_name: m[9], name: m[10], alert_number: m[11], ref: m[12], hook_id: parseInt(m[13]), release_id: parseInt(m[14]), runner_id: parseInt(m[15]), workflow_id: parseInt(m[16]), review_id: parseInt(m[17]), reaction_id: parseInt(m[18]), commit_sha: m[19], deployment_id: parseInt(m[20]), ruleset_id: parseInt(m[21]), check_run_id: parseInt(m[22]), username: m[23], milestone_number: m[24], ghsa_id: parseInt(m[25]), artifact_id: parseInt(m[26]), job_id: parseInt(m[27]), attempt_number: m[28], check_suite_id: parseInt(m[29]), path: m[30], branch_policy_id: parseInt(m[31]), asset_id: parseInt(m[32]), assignee: m[33], autolink_id: parseInt(m[34]), analysis_id: parseInt(m[35]), language: m[36], codeql_variant_analysis_id: parseInt(m[37]), basehead: m[38], protection_rule_id: parseInt(m[39]), delivery_id: parseInt(m[40]), invitation_id: parseInt(m[41]), key_id: parseInt(m[42]), pages_deployment_id: parseInt(m[43]), archive_format: m[44], cache_id: parseInt(m[45]), subject_digest: m[46], repo_owner: m[47], repo_name: m[48], sarif_id: parseInt(m[49]), status_id: parseInt(m[50]), file_sha: m[51], tag_sha: m[52], tree_sha: m[53], author_id: parseInt(m[54]), event_id: parseInt(m[55]), issue_id: parseInt(m[56]), build_id: parseInt(m[57]), dir: m[58], tag: m[59], rule_suite_id: parseInt(m[60]), version_id: parseInt(m[61]), sha: m[62], tag_protection_id: parseInt(m[63]), template_owner: m[64], template_repo: m[65] };
}
function waitForRepoAdded(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  waitFor(matchAddRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo));
}
function waitForRepoDeleted(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  waitFor(matchDeleteRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], branch: m[3], issue_number: m[4], environment_name: m[5], pull_number: m[6], run_id: parseInt(m[7]), comment_id: parseInt(m[8]), secret_name: m[9], name: m[10], alert_number: m[11], ref: m[12], hook_id: parseInt(m[13]), release_id: parseInt(m[14]), runner_id: parseInt(m[15]), workflow_id: parseInt(m[16]), review_id: parseInt(m[17]), reaction_id: parseInt(m[18]), commit_sha: m[19], deployment_id: parseInt(m[20]), ruleset_id: parseInt(m[21]), check_run_id: parseInt(m[22]), username: m[23], milestone_number: m[24], ghsa_id: parseInt(m[25]), artifact_id: parseInt(m[26]), job_id: parseInt(m[27]), attempt_number: m[28], check_suite_id: parseInt(m[29]), path: m[30], branch_policy_id: parseInt(m[31]), asset_id: parseInt(m[32]), assignee: m[33], autolink_id: parseInt(m[34]), analysis_id: parseInt(m[35]), language: m[36], codeql_variant_analysis_id: parseInt(m[37]), basehead: m[38], protection_rule_id: parseInt(m[39]), delivery_id: parseInt(m[40]), invitation_id: parseInt(m[41]), key_id: parseInt(m[42]), pages_deployment_id: parseInt(m[43]), archive_format: m[44], cache_id: parseInt(m[45]), subject_digest: m[46], repo_owner: m[47], repo_name: m[48], sarif_id: parseInt(m[49]), status_id: parseInt(m[50]), file_sha: m[51], tag_sha: m[52], tree_sha: m[53], author_id: parseInt(m[54]), event_id: parseInt(m[55]), issue_id: parseInt(m[56]), build_id: parseInt(m[57]), dir: m[58], tag: m[59], rule_suite_id: parseInt(m[60]), version_id: parseInt(m[61]), sha: m[62], tag_protection_id: parseInt(m[63]), template_owner: m[64], template_repo: m[65] };
}
function waitForRepoUpdated(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  waitFor(matchUpdateRepo(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo));
}
function waitForAnyRepoUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and issue_number\ (.+) and environment_name\ (.+) and pull_number\ (.+) and run_id\ (.+) and comment_id\ (.+) and secret_name\ (.+) and name\ (.+) and alert_number\ (.+) and ref\ (.+) and hook_id\ (.+) and release_id\ (.+) and runner_id\ (.+) and workflow_id\ (.+) and review_id\ (.+) and reaction_id\ (.+) and commit_sha\ (.+) and deployment_id\ (.+) and ruleset_id\ (.+) and check_run_id\ (.+) and username\ (.+) and milestone_number\ (.+) and ghsa_id\ (.+) and artifact_id\ (.+) and job_id\ (.+) and attempt_number\ (.+) and check_suite_id\ (.+) and path\ (.+) and branch_policy_id\ (.+) and asset_id\ (.+) and assignee\ (.+) and autolink_id\ (.+) and analysis_id\ (.+) and language\ (.+) and codeql_variant_analysis_id\ (.+) and basehead\ (.+) and protection_rule_id\ (.+) and delivery_id\ (.+) and invitation_id\ (.+) and key_id\ (.+) and pages_deployment_id\ (.+) and archive_format\ (.+) and cache_id\ (.+) and subject_digest\ (.+) and repo_owner\ (.+) and repo_name\ (.+) and sarif_id\ (.+) and status_id\ (.+) and file_sha\ (.+) and tag_sha\ (.+) and tree_sha\ (.+) and author_id\ (.+) and event_id\ (.+) and issue_id\ (.+) and build_id\ (.+) and dir\ (.+) and tag\ (.+) and rule_suite_id\ (.+) and version_id\ (.+) and sha\ (.+) and tag_protection_id\ (.+) and template_owner\ (.+) and template_repo\ (.+)$/);
    return { owner: m[1], repo: m[2], branch: m[3], issue_number: m[4], environment_name: m[5], pull_number: m[6], run_id: parseInt(m[7]), comment_id: parseInt(m[8]), secret_name: m[9], name: m[10], alert_number: m[11], ref: m[12], hook_id: parseInt(m[13]), release_id: parseInt(m[14]), runner_id: parseInt(m[15]), workflow_id: parseInt(m[16]), review_id: parseInt(m[17]), reaction_id: parseInt(m[18]), commit_sha: m[19], deployment_id: parseInt(m[20]), ruleset_id: parseInt(m[21]), check_run_id: parseInt(m[22]), username: m[23], milestone_number: m[24], ghsa_id: parseInt(m[25]), artifact_id: parseInt(m[26]), job_id: parseInt(m[27]), attempt_number: m[28], check_suite_id: parseInt(m[29]), path: m[30], branch_policy_id: parseInt(m[31]), asset_id: parseInt(m[32]), assignee: m[33], autolink_id: parseInt(m[34]), analysis_id: parseInt(m[35]), language: m[36], codeql_variant_analysis_id: parseInt(m[37]), basehead: m[38], protection_rule_id: parseInt(m[39]), delivery_id: parseInt(m[40]), invitation_id: parseInt(m[41]), key_id: parseInt(m[42]), pages_deployment_id: parseInt(m[43]), archive_format: m[44], cache_id: parseInt(m[45]), subject_digest: m[46], repo_owner: m[47], repo_name: m[48], sarif_id: parseInt(m[49]), status_id: parseInt(m[50]), file_sha: m[51], tag_sha: m[52], tree_sha: m[53], author_id: parseInt(m[54]), event_id: parseInt(m[55]), issue_id: parseInt(m[56]), build_id: parseInt(m[57]), dir: m[58], tag: m[59], rule_suite_id: parseInt(m[60]), version_id: parseInt(m[61]), sha: m[62], tag_protection_id: parseInt(m[63]), template_owner: m[64], template_repo: m[65] };
}

// Verify updated (presence-by-list)
function verifyRepoUpdated(owner, repo, branch, issue_number, environment_name, pull_number, run_id, comment_id, secret_name, name, alert_number, ref, hook_id, release_id, runner_id, workflow_id, review_id, reaction_id, commit_sha, deployment_id, ruleset_id, check_run_id, username, milestone_number, ghsa_id, artifact_id, job_id, attempt_number, check_suite_id, path, branch_policy_id, asset_id, assignee, autolink_id, analysis_id, language, codeql_variant_analysis_id, basehead, protection_rule_id, delivery_id, invitation_id, key_id, pages_deployment_id, archive_format, cache_id, subject_digest, repo_owner, repo_name, sarif_id, status_id, file_sha, tag_sha, tree_sha, author_id, event_id, issue_id, build_id, dir, tag, rule_suite_id, version_id, sha, tag_protection_id, template_owner, template_repo) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].branch === branch && repo[i].issue_number === issue_number && repo[i].environment_name === environment_name && repo[i].pull_number === pull_number && repo[i].run_id === run_id && repo[i].comment_id === comment_id && repo[i].secret_name === secret_name && repo[i].name === name && repo[i].alert_number === alert_number && repo[i].ref === ref && repo[i].hook_id === hook_id && repo[i].release_id === release_id && repo[i].runner_id === runner_id && repo[i].workflow_id === workflow_id && repo[i].review_id === review_id && repo[i].reaction_id === reaction_id && repo[i].commit_sha === commit_sha && repo[i].deployment_id === deployment_id && repo[i].ruleset_id === ruleset_id && repo[i].check_run_id === check_run_id && repo[i].username === username && repo[i].milestone_number === milestone_number && repo[i].ghsa_id === ghsa_id && repo[i].artifact_id === artifact_id && repo[i].job_id === job_id && repo[i].attempt_number === attempt_number && repo[i].check_suite_id === check_suite_id && repo[i].path === path && repo[i].branch_policy_id === branch_policy_id && repo[i].asset_id === asset_id && repo[i].assignee === assignee && repo[i].autolink_id === autolink_id && repo[i].analysis_id === analysis_id && repo[i].language === language && repo[i].codeql_variant_analysis_id === codeql_variant_analysis_id && repo[i].basehead === basehead && repo[i].protection_rule_id === protection_rule_id && repo[i].delivery_id === delivery_id && repo[i].invitation_id === invitation_id && repo[i].key_id === key_id && repo[i].pages_deployment_id === pages_deployment_id && repo[i].archive_format === archive_format && repo[i].cache_id === cache_id && repo[i].subject_digest === subject_digest && repo[i].repo_owner === repo_owner && repo[i].repo_name === repo_name && repo[i].sarif_id === sarif_id && repo[i].status_id === status_id && repo[i].file_sha === file_sha && repo[i].tag_sha === tag_sha && repo[i].tree_sha === tree_sha && repo[i].author_id === author_id && repo[i].event_id === event_id && repo[i].issue_id === issue_id && repo[i].build_id === build_id && repo[i].dir === dir && repo[i].tag === tag && repo[i].rule_suite_id === rule_suite_id && repo[i].version_id === version_id && repo[i].sha === sha && repo[i].tag_protection_id === tag_protection_id && repo[i].template_owner === template_owner && repo[i].template_repo === template_repo) {
          return pvg.success("Repo updated (present)");
        }
      }
      return pvg.fail("Expected a repo to be present after update, but it is not");
    },
    parameters: { description: "Verify repo with " + "owner " + owner + " and " + "repo " + repo + " and " + "branch " + branch + " and " + "issue_number " + issue_number + " and " + "environment_name " + environment_name + " and " + "pull_number " + pull_number + " and " + "run_id " + run_id + " and " + "comment_id " + comment_id + " and " + "secret_name " + secret_name + " and " + "name " + name + " and " + "alert_number " + alert_number + " and " + "ref " + ref + " and " + "hook_id " + hook_id + " and " + "release_id " + release_id + " and " + "runner_id " + runner_id + " and " + "workflow_id " + workflow_id + " and " + "review_id " + review_id + " and " + "reaction_id " + reaction_id + " and " + "commit_sha " + commit_sha + " and " + "deployment_id " + deployment_id + " and " + "ruleset_id " + ruleset_id + " and " + "check_run_id " + check_run_id + " and " + "username " + username + " and " + "milestone_number " + milestone_number + " and " + "ghsa_id " + ghsa_id + " and " + "artifact_id " + artifact_id + " and " + "job_id " + job_id + " and " + "attempt_number " + attempt_number + " and " + "check_suite_id " + check_suite_id + " and " + "path " + path + " and " + "branch_policy_id " + branch_policy_id + " and " + "asset_id " + asset_id + " and " + "assignee " + assignee + " and " + "autolink_id " + autolink_id + " and " + "analysis_id " + analysis_id + " and " + "language " + language + " and " + "codeql_variant_analysis_id " + codeql_variant_analysis_id + " and " + "basehead " + basehead + " and " + "protection_rule_id " + protection_rule_id + " and " + "delivery_id " + delivery_id + " and " + "invitation_id " + invitation_id + " and " + "key_id " + key_id + " and " + "pages_deployment_id " + pages_deployment_id + " and " + "archive_format " + archive_format + " and " + "cache_id " + cache_id + " and " + "subject_digest " + subject_digest + " and " + "repo_owner " + repo_owner + " and " + "repo_name " + repo_name + " and " + "sarif_id " + sarif_id + " and " + "status_id " + status_id + " and " + "file_sha " + file_sha + " and " + "tag_sha " + tag_sha + " and " + "tree_sha " + tree_sha + " and " + "author_id " + author_id + " and " + "event_id " + event_id + " and " + "issue_id " + issue_id + " and " + "build_id " + build_id + " and " + "dir " + dir + " and " + "tag " + tag + " and " + "rule_suite_id " + rule_suite_id + " and " + "version_id " + version_id + " and " + "sha " + sha + " and " + "tag_protection_id " + tag_protection_id + " and " + "template_owner " + template_owner + " and " + "template_repo " + template_repo + " exists" }
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
function addTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.post("/teams", {
      body: JSON.stringify({ team_id: team_id, discussion_number: discussion_number, username: username, comment_number: comment_number, project_id: project_id, owner: owner, repo: repo }),
      parameters: { description: "Add a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
    });
}

// DELETE
function deleteTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.delete("/teams/" + team_id + "/"+ discussion_number + "/"+ username + "/"+ comment_number + "/"+ project_id + "/"+ owner + "/"+ repo, {
    parameters: { description: "Delete a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.delete("/teams/" + team_id + "/"+ discussion_number + "/"+ username + "/"+ comment_number + "/"+ project_id + "/"+ owner + "/"+ repo, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.post("/teams", {
      body: JSON.stringify({ team_id: team_id, discussion_number: discussion_number, username: username, comment_number: comment_number, project_id: project_id, owner: owner, repo: repo }),
      parameters: { description: "Add a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
  });
}

// UPDATE
function updateTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.put("/teams/" + team_id + "/"+ discussion_number + "/"+ username + "/"+ comment_number + "/"+ project_id + "/"+ owner + "/"+ repo, {
      body: JSON.stringify({ team_id: team_id, discussion_number: discussion_number, username: username, comment_number: comment_number, project_id: project_id, owner: owner, repo: repo }),
      parameters: { description: "Update a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
    });
}

// GET one
function getTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.get("/teams/" + team_id + "/"+ discussion_number + "/"+ username + "/"+ comment_number + "/"+ project_id + "/"+ owner + "/"+ repo, {
    parameters: { description: "Get a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo }
  });
}

// LIST all
function listTeams() {
  svc.get("/teams", {
    parameters: { description: "List teams" }
  });
}

// Verify exists (by list)
function verifyTeamExists(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].team_id === team_id && team[i].discussion_number === discussion_number && team[i].username === username && team[i].comment_number === comment_number && team[i].project_id === project_id && team[i].owner === owner && team[i].repo === repo) {
          return pvg.success("Team exists");
        }
      }
      return pvg.fail("Expected a team to exist but it does not");
    },
    parameters: { description: "Verify team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTeamDoesNotExist(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].team_id === team_id && team[i].discussion_number === discussion_number && team[i].username === username && team[i].comment_number === comment_number && team[i].project_id === project_id && team[i].owner === owner && team[i].repo === repo) {
          return pvg.fail("Expected a team to not exist but it does");
        }
      }
      return pvg.success("Team does not exist");
    },
    parameters: { description: "Verify team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTeam() {
  return bp.EventSet("any-add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a team");
  });
}
function matchAddTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  return bp.EventSet("add-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo;
  });
}
function matchAnyDeleteTeam() {
  return bp.EventSet("any-del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a team");
  });
}
function matchDeleteTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  return bp.EventSet("del-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateTeam() {
  return bp.EventSet("any-update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a team");
  });
}
function matchUpdateTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  return bp.EventSet("update-team", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo;
  });
}

// Wait helpers
function waitForAnyTeamAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/);
    return { team_id: parseInt(m[1]), discussion_number: m[2], username: m[3], comment_number: m[4], project_id: parseInt(m[5]), owner: m[6], repo: m[7] };
}
function waitForTeamAdded(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  waitFor(matchAddTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo));
}
function waitForTeamDeleted(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  waitFor(matchDeleteTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo));
}
function waitForAnyTeamDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/);
    return { team_id: parseInt(m[1]), discussion_number: m[2], username: m[3], comment_number: m[4], project_id: parseInt(m[5]), owner: m[6], repo: m[7] };
}
function waitForTeamUpdated(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  waitFor(matchUpdateTeam(team_id, discussion_number, username, comment_number, project_id, owner, repo));
}
function waitForAnyTeamUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ team\ with\ team_id\ (.+) and discussion_number\ (.+) and username\ (.+) and comment_number\ (.+) and project_id\ (.+) and owner\ (.+) and repo\ (.+)$/);
    return { team_id: parseInt(m[1]), discussion_number: m[2], username: m[3], comment_number: m[4], project_id: parseInt(m[5]), owner: m[6], repo: m[7] };
}

// Verify updated (presence-by-list)
function verifyTeamUpdated(team_id, discussion_number, username, comment_number, project_id, owner, repo) {
  svc.get("/teams", {
    callback: function (response) {
      team = JSON.parse(response.body);
      for (let i = 0; i < team.length; i++) {
        if (team[i].team_id === team_id && team[i].discussion_number === discussion_number && team[i].username === username && team[i].comment_number === comment_number && team[i].project_id === project_id && team[i].owner === owner && team[i].repo === repo) {
          return pvg.success("Team updated (present)");
        }
      }
      return pvg.fail("Expected a team to be present after update, but it is not");
    },
    parameters: { description: "Verify team with " + "team_id " + team_id + " and " + "discussion_number " + discussion_number + " and " + "username " + username + " and " + "comment_number " + comment_number + " and " + "project_id " + project_id + " and " + "owner " + owner + " and " + "repo " + repo + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.post("/user", {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name, package_type: package_type, package_name: package_name, username: username, migration_id: migration_id, repository_id: repository_id, installation_id: installation_id, package_version_id: package_version_id, owner: owner, repo: repo, gpg_key_id: gpg_key_id, key_id: key_id, org: org, invitation_id: invitation_id, ssh_signing_key_id: ssh_signing_key_id, export_id: export_id, repo_name: repo_name, account_id: account_id }),
      parameters: { description: "Add a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
    });
}

// DELETE
function deleteUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.delete("/user/" + codespace_name + "/"+ secret_name + "/"+ package_type + "/"+ package_name + "/"+ username + "/"+ migration_id + "/"+ repository_id + "/"+ installation_id + "/"+ package_version_id + "/"+ owner + "/"+ repo + "/"+ gpg_key_id + "/"+ key_id + "/"+ org + "/"+ invitation_id + "/"+ ssh_signing_key_id + "/"+ export_id + "/"+ repo_name + "/"+ account_id, {
    parameters: { description: "Delete a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.delete("/user/" + codespace_name + "/"+ secret_name + "/"+ package_type + "/"+ package_name + "/"+ username + "/"+ migration_id + "/"+ repository_id + "/"+ installation_id + "/"+ package_version_id + "/"+ owner + "/"+ repo + "/"+ gpg_key_id + "/"+ key_id + "/"+ org + "/"+ invitation_id + "/"+ ssh_signing_key_id + "/"+ export_id + "/"+ repo_name + "/"+ account_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.post("/user", {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name, package_type: package_type, package_name: package_name, username: username, migration_id: migration_id, repository_id: repository_id, installation_id: installation_id, package_version_id: package_version_id, owner: owner, repo: repo, gpg_key_id: gpg_key_id, key_id: key_id, org: org, invitation_id: invitation_id, ssh_signing_key_id: ssh_signing_key_id, export_id: export_id, repo_name: repo_name, account_id: account_id }),
      parameters: { description: "Add a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
  });
}

// UPDATE
function updateUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.put("/user/" + codespace_name + "/"+ secret_name + "/"+ package_type + "/"+ package_name + "/"+ username + "/"+ migration_id + "/"+ repository_id + "/"+ installation_id + "/"+ package_version_id + "/"+ owner + "/"+ repo + "/"+ gpg_key_id + "/"+ key_id + "/"+ org + "/"+ invitation_id + "/"+ ssh_signing_key_id + "/"+ export_id + "/"+ repo_name + "/"+ account_id, {
      body: JSON.stringify({ codespace_name: codespace_name, secret_name: secret_name, package_type: package_type, package_name: package_name, username: username, migration_id: migration_id, repository_id: repository_id, installation_id: installation_id, package_version_id: package_version_id, owner: owner, repo: repo, gpg_key_id: gpg_key_id, key_id: key_id, org: org, invitation_id: invitation_id, ssh_signing_key_id: ssh_signing_key_id, export_id: export_id, repo_name: repo_name, account_id: account_id }),
      parameters: { description: "Update a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
    });
}

// GET one
function getUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.get("/user/" + codespace_name + "/"+ secret_name + "/"+ package_type + "/"+ package_name + "/"+ username + "/"+ migration_id + "/"+ repository_id + "/"+ installation_id + "/"+ package_version_id + "/"+ owner + "/"+ repo + "/"+ gpg_key_id + "/"+ key_id + "/"+ org + "/"+ invitation_id + "/"+ ssh_signing_key_id + "/"+ export_id + "/"+ repo_name + "/"+ account_id, {
    parameters: { description: "Get a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id }
  });
}

// LIST all
function listUser() {
  svc.get("/user", {
    parameters: { description: "List user" }
  });
}

// Verify exists (by list)
function verifyUserExists(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].codespace_name === codespace_name && user[i].secret_name === secret_name && user[i].package_type === package_type && user[i].package_name === package_name && user[i].username === username && user[i].migration_id === migration_id && user[i].repository_id === repository_id && user[i].installation_id === installation_id && user[i].package_version_id === package_version_id && user[i].owner === owner && user[i].repo === repo && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].org === org && user[i].invitation_id === invitation_id && user[i].ssh_signing_key_id === ssh_signing_key_id && user[i].export_id === export_id && user[i].repo_name === repo_name && user[i].account_id === account_id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].codespace_name === codespace_name && user[i].secret_name === secret_name && user[i].package_type === package_type && user[i].package_name === package_name && user[i].username === username && user[i].migration_id === migration_id && user[i].repository_id === repository_id && user[i].installation_id === installation_id && user[i].package_version_id === package_version_id && user[i].owner === owner && user[i].repo === repo && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].org === org && user[i].invitation_id === invitation_id && user[i].ssh_signing_key_id === ssh_signing_key_id && user[i].export_id === export_id && user[i].repo_name === repo_name && user[i].account_id === account_id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/);
    return { codespace_name: m[1], secret_name: m[2], package_type: m[3], package_name: m[4], username: m[5], migration_id: parseInt(m[6]), repository_id: parseInt(m[7]), installation_id: parseInt(m[8]), package_version_id: parseInt(m[9]), owner: m[10], repo: m[11], gpg_key_id: parseInt(m[12]), key_id: parseInt(m[13]), org: m[14], invitation_id: parseInt(m[15]), ssh_signing_key_id: parseInt(m[16]), export_id: parseInt(m[17]), repo_name: m[18], account_id: parseInt(m[19]) };
}
function waitForUserAdded(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  waitFor(matchAddUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id));
}
function waitForUserDeleted(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  waitFor(matchDeleteUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/);
    return { codespace_name: m[1], secret_name: m[2], package_type: m[3], package_name: m[4], username: m[5], migration_id: parseInt(m[6]), repository_id: parseInt(m[7]), installation_id: parseInt(m[8]), package_version_id: parseInt(m[9]), owner: m[10], repo: m[11], gpg_key_id: parseInt(m[12]), key_id: parseInt(m[13]), org: m[14], invitation_id: parseInt(m[15]), ssh_signing_key_id: parseInt(m[16]), export_id: parseInt(m[17]), repo_name: m[18], account_id: parseInt(m[19]) };
}
function waitForUserUpdated(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  waitFor(matchUpdateUser(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ codespace_name\ (.+) and secret_name\ (.+) and package_type\ (.+) and package_name\ (.+) and username\ (.+) and migration_id\ (.+) and repository_id\ (.+) and installation_id\ (.+) and package_version_id\ (.+) and owner\ (.+) and repo\ (.+) and gpg_key_id\ (.+) and key_id\ (.+) and org\ (.+) and invitation_id\ (.+) and ssh_signing_key_id\ (.+) and export_id\ (.+) and repo_name\ (.+) and account_id\ (.+)$/);
    return { codespace_name: m[1], secret_name: m[2], package_type: m[3], package_name: m[4], username: m[5], migration_id: parseInt(m[6]), repository_id: parseInt(m[7]), installation_id: parseInt(m[8]), package_version_id: parseInt(m[9]), owner: m[10], repo: m[11], gpg_key_id: parseInt(m[12]), key_id: parseInt(m[13]), org: m[14], invitation_id: parseInt(m[15]), ssh_signing_key_id: parseInt(m[16]), export_id: parseInt(m[17]), repo_name: m[18], account_id: parseInt(m[19]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(codespace_name, secret_name, package_type, package_name, username, migration_id, repository_id, installation_id, package_version_id, owner, repo, gpg_key_id, key_id, org, invitation_id, ssh_signing_key_id, export_id, repo_name, account_id) {
  svc.get("/user", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].codespace_name === codespace_name && user[i].secret_name === secret_name && user[i].package_type === package_type && user[i].package_name === package_name && user[i].username === username && user[i].migration_id === migration_id && user[i].repository_id === repository_id && user[i].installation_id === installation_id && user[i].package_version_id === package_version_id && user[i].owner === owner && user[i].repo === repo && user[i].gpg_key_id === gpg_key_id && user[i].key_id === key_id && user[i].org === org && user[i].invitation_id === invitation_id && user[i].ssh_signing_key_id === ssh_signing_key_id && user[i].export_id === export_id && user[i].repo_name === repo_name && user[i].account_id === account_id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "codespace_name " + codespace_name + " and " + "secret_name " + secret_name + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "username " + username + " and " + "migration_id " + migration_id + " and " + "repository_id " + repository_id + " and " + "installation_id " + installation_id + " and " + "package_version_id " + package_version_id + " and " + "owner " + owner + " and " + "repo " + repo + " and " + "gpg_key_id " + gpg_key_id + " and " + "key_id " + key_id + " and " + "org " + org + " and " + "invitation_id " + invitation_id + " and " + "ssh_signing_key_id " + ssh_signing_key_id + " and " + "export_id " + export_id + " and " + "repo_name " + repo_name + " and " + "account_id " + account_id + " exists" }
  });
}


/** === User Operations === */

// CREATE
function addUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.post("/users", {
      body: JSON.stringify({ username: username, project_number: project_number, package_type: package_type, package_name: package_name, package_version_id: package_version_id, item_id: item_id, subject_digest: subject_digest, attestation_id: attestation_id, org: org, target_user: target_user, field_id: field_id }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
    });
}

// DELETE
function deleteUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.delete("/users/" + username + "/"+ project_number + "/"+ package_type + "/"+ package_name + "/"+ package_version_id + "/"+ item_id + "/"+ subject_digest + "/"+ attestation_id + "/"+ org + "/"+ target_user + "/"+ field_id, {
    parameters: { description: "Delete a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.delete("/users/" + username + "/"+ project_number + "/"+ package_type + "/"+ package_name + "/"+ package_version_id + "/"+ item_id + "/"+ subject_digest + "/"+ attestation_id + "/"+ org + "/"+ target_user + "/"+ field_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.post("/users", {
      body: JSON.stringify({ username: username, project_number: project_number, package_type: package_type, package_name: package_name, package_version_id: package_version_id, item_id: item_id, subject_digest: subject_digest, attestation_id: attestation_id, org: org, target_user: target_user, field_id: field_id }),
      parameters: { description: "Add a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
  });
}

// UPDATE
function updateUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.put("/users/" + username + "/"+ project_number + "/"+ package_type + "/"+ package_name + "/"+ package_version_id + "/"+ item_id + "/"+ subject_digest + "/"+ attestation_id + "/"+ org + "/"+ target_user + "/"+ field_id, {
      body: JSON.stringify({ username: username, project_number: project_number, package_type: package_type, package_name: package_name, package_version_id: package_version_id, item_id: item_id, subject_digest: subject_digest, attestation_id: attestation_id, org: org, target_user: target_user, field_id: field_id }),
      parameters: { description: "Update a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
    });
}

// GET one
function getUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.get("/users/" + username + "/"+ project_number + "/"+ package_type + "/"+ package_name + "/"+ package_version_id + "/"+ item_id + "/"+ subject_digest + "/"+ attestation_id + "/"+ org + "/"+ target_user + "/"+ field_id, {
    parameters: { description: "Get a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id }
  });
}

// LIST all
function listUsers() {
  svc.get("/users", {
    parameters: { description: "List users" }
  });
}

// Verify exists (by list)
function verifyUserExists(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].project_number === project_number && user[i].package_type === package_type && user[i].package_name === package_name && user[i].package_version_id === package_version_id && user[i].item_id === item_id && user[i].subject_digest === subject_digest && user[i].attestation_id === attestation_id && user[i].org === org && user[i].target_user === target_user && user[i].field_id === field_id) {
          return pvg.success("User exists");
        }
      }
      return pvg.fail("Expected a user to exist but it does not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyUserDoesNotExist(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].project_number === project_number && user[i].package_type === package_type && user[i].package_name === package_name && user[i].package_version_id === package_version_id && user[i].item_id === item_id && user[i].subject_digest === subject_digest && user[i].attestation_id === attestation_id && user[i].org === org && user[i].target_user === target_user && user[i].field_id === field_id) {
          return pvg.fail("Expected a user to not exist but it does");
        }
      }
      return pvg.success("User does not exist");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddUser() {
  return bp.EventSet("any-add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a user");
  });
}
function matchAddUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  return bp.EventSet("add-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id;
  });
}
function matchAnyDeleteUser() {
  return bp.EventSet("any-del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a user");
  });
}
function matchDeleteUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  return bp.EventSet("del-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateUser() {
  return bp.EventSet("any-update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a user");
  });
}
function matchUpdateUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  return bp.EventSet("update-user", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id;
  });
}

// Wait helpers
function waitForAnyUserAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/);
    return { username: m[1], project_number: m[2], package_type: m[3], package_name: m[4], package_version_id: parseInt(m[5]), item_id: parseInt(m[6]), subject_digest: m[7], attestation_id: parseInt(m[8]), org: m[9], target_user: m[10], field_id: parseInt(m[11]) };
}
function waitForUserAdded(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  waitFor(matchAddUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id));
}
function waitForUserDeleted(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  waitFor(matchDeleteUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id));
}
function waitForAnyUserDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/);
    return { username: m[1], project_number: m[2], package_type: m[3], package_name: m[4], package_version_id: parseInt(m[5]), item_id: parseInt(m[6]), subject_digest: m[7], attestation_id: parseInt(m[8]), org: m[9], target_user: m[10], field_id: parseInt(m[11]) };
}
function waitForUserUpdated(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  waitFor(matchUpdateUser(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id));
}
function waitForAnyUserUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ user\ with\ username\ (.+) and project_number\ (.+) and package_type\ (.+) and package_name\ (.+) and package_version_id\ (.+) and item_id\ (.+) and subject_digest\ (.+) and attestation_id\ (.+) and org\ (.+) and target_user\ (.+) and field_id\ (.+)$/);
    return { username: m[1], project_number: m[2], package_type: m[3], package_name: m[4], package_version_id: parseInt(m[5]), item_id: parseInt(m[6]), subject_digest: m[7], attestation_id: parseInt(m[8]), org: m[9], target_user: m[10], field_id: parseInt(m[11]) };
}

// Verify updated (presence-by-list)
function verifyUserUpdated(username, project_number, package_type, package_name, package_version_id, item_id, subject_digest, attestation_id, org, target_user, field_id) {
  svc.get("/users", {
    callback: function (response) {
      user = JSON.parse(response.body);
      for (let i = 0; i < user.length; i++) {
        if (user[i].username === username && user[i].project_number === project_number && user[i].package_type === package_type && user[i].package_name === package_name && user[i].package_version_id === package_version_id && user[i].item_id === item_id && user[i].subject_digest === subject_digest && user[i].attestation_id === attestation_id && user[i].org === org && user[i].target_user === target_user && user[i].field_id === field_id) {
          return pvg.success("User updated (present)");
        }
      }
      return pvg.fail("Expected a user to be present after update, but it is not");
    },
    parameters: { description: "Verify user with " + "username " + username + " and " + "project_number " + project_number + " and " + "package_type " + package_type + " and " + "package_name " + package_name + " and " + "package_version_id " + package_version_id + " and " + "item_id " + item_id + " and " + "subject_digest " + subject_digest + " and " + "attestation_id " + attestation_id + " and " + "org " + org + " and " + "target_user " + target_user + " and " + "field_id " + field_id + " exists" }
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

