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
function addApp_manifest(code) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Add a app_manifest with code " + code + "" }
    });
}

// DELETE
function deleteApp_manifest(code) {
  svc.delete("/app_manifests/" + code, {
    parameters: { description: "Delete a app_manifest with code " + code + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp_manifest(code) {
  svc.delete("/app_manifests/" + code, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app_manifest with code " + code + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp_manifest(code) {
  svc.post("/app_manifests", {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Add a app_manifest with code " + code + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app_manifest with code " + code + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp_manifest(code) {
  svc.put("/app_manifests/" + code, {
      body: JSON.stringify({ code: code }),
      parameters: { description: "Update a app_manifest" }
    });
}

// GET one
function getApp_manifest(code) {
  svc.get("/app_manifests/" + code, {
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
    parameters: { description: "Verify app_manifest with code " + code + " exists" }
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
    parameters: { description: "Verify app_manifest with code " + code + " does not exist" }
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
    return e.data.parameters.description === "Add a app_manifest with code " + code + "";
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
    return e.data.parameters.description === "Delete a app_manifest with code " + code + "";
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


/** === Gist Operations === */

// CREATE
function addGist(gist_id) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id }),
      parameters: { description: "Add a gist with gist_id " + gist_id + "" }
    });
}

// DELETE
function deleteGist(gist_id) {
  svc.delete("/gists/" + gist_id, {
    parameters: { description: "Delete a gist with gist_id " + gist_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingGist(gist_id) {
  svc.delete("/gists/" + gist_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a gist with gist_id " + gist_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingGist(gist_id) {
  svc.post("/gists", {
      body: JSON.stringify({ gist_id: gist_id }),
      parameters: { description: "Add a gist with gist_id " + gist_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a gist with gist_id " + gist_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateGist(gist_id) {
  svc.put("/gists/" + gist_id, {
      body: JSON.stringify({ gist_id: gist_id }),
      parameters: { description: "Update a gist" }
    });
}

// GET one
function getGist(gist_id) {
  svc.get("/gists/" + gist_id, {
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
function verifyGistExists(gist_id) {
  svc.get("/gists", {
    callback: function (response) {
      gist = JSON.parse(response.body);
      for (let i = 0; i < gist.length; i++) {
        if (gist[i].gist_id === gist_id) {
          return pvg.success("Gist exists");
        }
      }
      return pvg.fail("Expected a gist to exist but it does not");
    },
    parameters: { description: "Verify gist with gist_id " + gist_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyGistDoesNotExist(gist_id) {
  svc.get("/gists", {
    callback: function (response) {
      gist = JSON.parse(response.body);
      for (let i = 0; i < gist.length; i++) {
        if (gist[i].gist_id === gist_id) {
          return pvg.fail("Expected a gist to not exist but it does");
        }
      }
      return pvg.success("Gist does not exist");
    },
    parameters: { description: "Verify gist with gist_id " + gist_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddGist() {
  return bp.EventSet("any-add-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a gist");
  });
}
function matchAddGist(gist_id) {
  return bp.EventSet("add-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a gist with gist_id " + gist_id + "";
  });
}
function matchAnyDeleteGist() {
  return bp.EventSet("any-del-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a gist");
  });
}
function matchDeleteGist(gist_id) {
  return bp.EventSet("del-gist", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a gist with gist_id " + gist_id + "";
  });
}

// Wait helpers
function waitForAnyGistAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ gist\ with\ gist_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ gist\ with\ gist_id\ (.+)$/);
    return { gist_id: parseInt(m[1]) };
}
function waitForGistAdded(gist_id) {
  waitFor(matchAddGist(gist_id));
}
function waitForGistDeleted(gist_id) {
  waitFor(matchDeleteGist(gist_id));
}
function waitForAnyGistDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ gist\ with\ gist_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ gist\ with\ gist_id\ (.+)$/);
    return { gist_id: parseInt(m[1]) };
}


/** === Org Operations === */

// CREATE
function addOrg(org, team_slug, username) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, team_slug: team_slug, username: username }),
      parameters: { description: "Add a org with org " + org + " and team_slug " + team_slug + " and username " + username + "" }
    });
}

// DELETE
function deleteOrg(org, team_slug, username) {
  svc.delete("/orgs/" + org + "/"+ team_slug + "/"+ username, {
    parameters: { description: "Delete a org with org " + org + " and team_slug " + team_slug + " and username " + username + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingOrg(org, team_slug, username) {
  svc.delete("/orgs/" + org + "/"+ team_slug + "/"+ username, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a org with org " + org + " and team_slug " + team_slug + " and username " + username + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingOrg(org, team_slug, username) {
  svc.post("/orgs", {
      body: JSON.stringify({ org: org, team_slug: team_slug, username: username }),
      parameters: { description: "Add a org with org " + org + " and team_slug " + team_slug + " and username " + username + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a org with org " + org + " and team_slug " + team_slug + " and username " + username + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateOrg(org, team_slug, username) {
  svc.put("/orgs/" + org + "/"+ team_slug + "/"+ username, {
      body: JSON.stringify({ org: org, team_slug: team_slug, username: username }),
      parameters: { description: "Update a org" }
    });
}

// GET one
function getOrg(org, team_slug, username) {
  svc.get("/orgs/" + org + "/"+ team_slug + "/"+ username, {
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
function verifyOrgExists(org, team_slug, username) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].team_slug === team_slug && org[i].username === username) {
          return pvg.success("Org exists");
        }
      }
      return pvg.fail("Expected a org to exist but it does not");
    },
    parameters: { description: "Verify org with org " + org + " and team_slug " + team_slug + " and username " + username + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyOrgDoesNotExist(org, team_slug, username) {
  svc.get("/orgs", {
    callback: function (response) {
      org = JSON.parse(response.body);
      for (let i = 0; i < org.length; i++) {
        if (org[i].org === org && org[i].team_slug === team_slug && org[i].username === username) {
          return pvg.fail("Expected a org to not exist but it does");
        }
      }
      return pvg.success("Org does not exist");
    },
    parameters: { description: "Verify org with org " + org + " and team_slug " + team_slug + " and username " + username + " does not exist" }
  });
}

// Match helpers
function matchAnyAddOrg() {
  return bp.EventSet("any-add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a org");
  });
}
function matchAddOrg(org, team_slug, username) {
  return bp.EventSet("add-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a org with org " + org + " and team_slug " + team_slug + " and username " + username + "";
  });
}
function matchAnyDeleteOrg() {
  return bp.EventSet("any-del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a org");
  });
}
function matchDeleteOrg(org, team_slug, username) {
  return bp.EventSet("del-org", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a org with org " + org + " and team_slug " + team_slug + " and username " + username + "";
  });
}

// Wait helpers
function waitForAnyOrgAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and username\ (.+)$/);
    return { org: (x)=>x(m[1]), team_slug: (x)=>x(m[2]), username: (x)=>x(m[3]) };
}
function waitForOrgAdded(org, team_slug, username) {
  waitFor(matchAddOrg(org, team_slug, username));
}
function waitForOrgDeleted(org, team_slug, username) {
  waitFor(matchDeleteOrg(org, team_slug, username));
}
function waitForAnyOrgDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and username\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ org\ with\ org\ (.+) and team_slug\ (.+) and username\ (.+)$/);
    return { org: (x)=>x(m[1]), team_slug: (x)=>x(m[2]), username: (x)=>x(m[3]) };
}


/** === Repo Operations === */

// CREATE
function addRepo(owner, repo, branch, run_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, run_id: run_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "" }
    });
}

// DELETE
function deleteRepo(owner, repo, branch, run_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ run_id, {
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRepo(owner, repo, branch, run_id) {
  svc.delete("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ run_id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRepo(owner, repo, branch, run_id) {
  svc.post("/repos", {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, run_id: run_id }),
      parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRepo(owner, repo, branch, run_id) {
  svc.put("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ run_id, {
      body: JSON.stringify({ owner: owner, repo: repo, branch: branch, run_id: run_id }),
      parameters: { description: "Update a repo" }
    });
}

// GET one
function getRepo(owner, repo, branch, run_id) {
  svc.get("/repos/" + owner + "/"+ repo + "/"+ branch + "/"+ run_id, {
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
function verifyRepoExists(owner, repo, branch, run_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].branch === branch && repo[i].run_id === run_id) {
          return pvg.success("Repo exists");
        }
      }
      return pvg.fail("Expected a repo to exist but it does not");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRepoDoesNotExist(owner, repo, branch, run_id) {
  svc.get("/repos", {
    callback: function (response) {
      repo = JSON.parse(response.body);
      for (let i = 0; i < repo.length; i++) {
        if (repo[i].owner === owner && repo[i].repo === repo && repo[i].branch === branch && repo[i].run_id === run_id) {
          return pvg.fail("Expected a repo to not exist but it does");
        }
      }
      return pvg.success("Repo does not exist");
    },
    parameters: { description: "Verify repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRepo() {
  return bp.EventSet("any-add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a repo");
  });
}
function matchAddRepo(owner, repo, branch, run_id) {
  return bp.EventSet("add-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "";
  });
}
function matchAnyDeleteRepo() {
  return bp.EventSet("any-del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a repo");
  });
}
function matchDeleteRepo(owner, repo, branch, run_id) {
  return bp.EventSet("del-repo", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a repo with owner " + owner + " and repo " + repo + " and branch " + branch + " and run_id " + run_id + "";
  });
}

// Wait helpers
function waitForAnyRepoAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and run_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and run_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), branch: (x)=>x(m[3]), run_id: parseInt(m[4]) };
}
function waitForRepoAdded(owner, repo, branch, run_id) {
  waitFor(matchAddRepo(owner, repo, branch, run_id));
}
function waitForRepoDeleted(owner, repo, branch, run_id) {
  waitFor(matchDeleteRepo(owner, repo, branch, run_id));
}
function waitForAnyRepoDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and run_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ repo\ with\ owner\ (.+) and repo\ (.+) and branch\ (.+) and run_id\ (.+)$/);
    return { owner: (x)=>x(m[1]), repo: (x)=>x(m[2]), branch: (x)=>x(m[3]), run_id: parseInt(m[4]) };
}


/** === V1 Operations === */

// CREATE
function addV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.post("/v1", {
      body: JSON.stringify({ org: org, owner: owner, repo: repo, username: username, run_id: run_id, branch: branch, package_type: package_type, package_name: package_name }),
      parameters: { description: "Add a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "" }
    });
}

// DELETE
function deleteV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.delete("/v1/" + org + "/"+ owner + "/"+ repo + "/"+ username + "/"+ run_id + "/"+ branch + "/"+ package_type + "/"+ package_name, {
    parameters: { description: "Delete a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.delete("/v1/" + org + "/"+ owner + "/"+ repo + "/"+ username + "/"+ run_id + "/"+ branch + "/"+ package_type + "/"+ package_name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.post("/v1", {
      body: JSON.stringify({ org: org, owner: owner, repo: repo, username: username, run_id: run_id, branch: branch, package_type: package_type, package_name: package_name }),
      parameters: { description: "Add a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.put("/v1/" + org + "/"+ owner + "/"+ repo + "/"+ username + "/"+ run_id + "/"+ branch + "/"+ package_type + "/"+ package_name, {
      body: JSON.stringify({ org: org, owner: owner, repo: repo, username: username, run_id: run_id, branch: branch, package_type: package_type, package_name: package_name }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.get("/v1/" + org + "/"+ owner + "/"+ repo + "/"+ username + "/"+ run_id + "/"+ branch + "/"+ package_type + "/"+ package_name, {
    parameters: { description: "Get a v1" }
  });
}

// LIST all
function listV1() {
  svc.get("/v1", {
    parameters: { description: "List v1" }
  });
}

// Verify exists (by list)
function verifyV1Exists(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].org === org && v1[i].owner === owner && v1[i].repo === repo && v1[i].username === username && v1[i].run_id === run_id && v1[i].branch === branch && v1[i].package_type === package_type && v1[i].package_name === package_name) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(org, owner, repo, username, run_id, branch, package_type, package_name) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].org === org && v1[i].owner === owner && v1[i].repo === repo && v1[i].username === username && v1[i].run_id === run_id && v1[i].branch === branch && v1[i].package_type === package_type && v1[i].package_name === package_name) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(org, owner, repo, username, run_id, branch, package_type, package_name) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with org " + org + " and owner " + owner + " and repo " + repo + " and username " + username + " and run_id " + run_id + " and branch " + branch + " and package_type " + package_type + " and package_name " + package_name + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ org\ (.+) and owner\ (.+) and repo\ (.+) and username\ (.+) and run_id\ (.+) and branch\ (.+) and package_type\ (.+) and package_name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ org\ (.+) and owner\ (.+) and repo\ (.+) and username\ (.+) and run_id\ (.+) and branch\ (.+) and package_type\ (.+) and package_name\ (.+)$/);
    return { org: (x)=>x(m[1]), owner: (x)=>x(m[2]), repo: (x)=>x(m[3]), username: (x)=>x(m[4]), run_id: parseInt(m[5]), branch: (x)=>x(m[6]), package_type: (x)=>x(m[7]), package_name: (x)=>x(m[8]) };
}
function waitForV1Added(org, owner, repo, username, run_id, branch, package_type, package_name) {
  waitFor(matchAddV1(org, owner, repo, username, run_id, branch, package_type, package_name));
}
function waitForV1Deleted(org, owner, repo, username, run_id, branch, package_type, package_name) {
  waitFor(matchDeleteV1(org, owner, repo, username, run_id, branch, package_type, package_name));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ org\ (.+) and owner\ (.+) and repo\ (.+) and username\ (.+) and run_id\ (.+) and branch\ (.+) and package_type\ (.+) and package_name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ org\ (.+) and owner\ (.+) and repo\ (.+) and username\ (.+) and run_id\ (.+) and branch\ (.+) and package_type\ (.+) and package_name\ (.+)$/);
    return { org: (x)=>x(m[1]), owner: (x)=>x(m[2]), repo: (x)=>x(m[3]), username: (x)=>x(m[4]), run_id: parseInt(m[5]), branch: (x)=>x(m[6]), package_type: (x)=>x(m[7]), package_name: (x)=>x(m[8]) };
}

