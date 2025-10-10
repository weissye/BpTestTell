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


/** === Config Operations === */

// CREATE
function addConfig(id) {
  svc.post("/configs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a config with id " + id + "" }
    });
}

// DELETE
function deleteConfig(id) {
  svc.delete("/configs/" + id, {
    parameters: { description: "Delete a config with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingConfig(id) {
  svc.delete("/configs/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a config with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingConfig(id) {
  svc.post("/configs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a config with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a config with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateConfig(id) {
  svc.put("/configs/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a config" }
    });
}

// GET one
function getConfig(id) {
  svc.get("/configs/" + id, {
    parameters: { description: "Get a config" }
  });
}

// LIST all
function listConfigs() {
  svc.get("/configs", {
    parameters: { description: "List configs" }
  });
}

// Verify exists (by list)
function verifyConfigExists(id) {
  svc.get("/configs", {
    callback: function (response) {
      config = JSON.parse(response.body);
      for (let i = 0; i < config.length; i++) {
        if (config[i].id === id) {
          return pvg.success("Config exists");
        }
      }
      return pvg.fail("Expected a config to exist but it does not");
    },
    parameters: { description: "Verify config with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyConfigDoesNotExist(id) {
  svc.get("/configs", {
    callback: function (response) {
      config = JSON.parse(response.body);
      for (let i = 0; i < config.length; i++) {
        if (config[i].id === id) {
          return pvg.fail("Expected a config to not exist but it does");
        }
      }
      return pvg.success("Config does not exist");
    },
    parameters: { description: "Verify config with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddConfig() {
  return bp.EventSet("any-add-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a config");
  });
}
function matchAddConfig(id) {
  return bp.EventSet("add-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a config with id " + id + "";
  });
}
function matchAnyDeleteConfig() {
  return bp.EventSet("any-del-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a config");
  });
}
function matchDeleteConfig(id) {
  return bp.EventSet("del-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a config with id " + id + "";
  });
}

// Wait helpers
function waitForAnyConfigAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ config\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ config\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForConfigAdded(id) {
  waitFor(matchAddConfig(id));
}
function waitForConfigDeleted(id) {
  waitFor(matchDeleteConfig(id));
}
function waitForAnyConfigDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ config\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ config\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Env Operations === */

// CREATE
function addEnv(id) {
  svc.post("/envs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a env with id " + id + "" }
    });
}

// DELETE
function deleteEnv(id) {
  svc.delete("/envs/" + id, {
    parameters: { description: "Delete a env with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEnv(id) {
  svc.delete("/envs/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a env with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEnv(id) {
  svc.post("/envs", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a env with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a env with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEnv(id) {
  svc.put("/envs/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a env" }
    });
}

// GET one
function getEnv(id) {
  svc.get("/envs/" + id, {
    parameters: { description: "Get a env" }
  });
}

// LIST all
function listEnvs() {
  svc.get("/envs", {
    parameters: { description: "List envs" }
  });
}

// Verify exists (by list)
function verifyEnvExists(id) {
  svc.get("/envs", {
    callback: function (response) {
      env = JSON.parse(response.body);
      for (let i = 0; i < env.length; i++) {
        if (env[i].id === id) {
          return pvg.success("Env exists");
        }
      }
      return pvg.fail("Expected a env to exist but it does not");
    },
    parameters: { description: "Verify env with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEnvDoesNotExist(id) {
  svc.get("/envs", {
    callback: function (response) {
      env = JSON.parse(response.body);
      for (let i = 0; i < env.length; i++) {
        if (env[i].id === id) {
          return pvg.fail("Expected a env to not exist but it does");
        }
      }
      return pvg.success("Env does not exist");
    },
    parameters: { description: "Verify env with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEnv() {
  return bp.EventSet("any-add-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a env");
  });
}
function matchAddEnv(id) {
  return bp.EventSet("add-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a env with id " + id + "";
  });
}
function matchAnyDeleteEnv() {
  return bp.EventSet("any-del-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a env");
  });
}
function matchDeleteEnv(id) {
  return bp.EventSet("del-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a env with id " + id + "";
  });
}

// Wait helpers
function waitForAnyEnvAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ env\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ env\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForEnvAdded(id) {
  waitFor(matchAddEnv(id));
}
function waitForEnvDeleted(id) {
  waitFor(matchDeleteEnv(id));
}
function waitForAnyEnvDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ env\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ env\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Policie Operations === */

// CREATE
function addPolicie(id) {
  svc.post("/policies", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a policie with id " + id + "" }
    });
}

// DELETE
function deletePolicie(id) {
  svc.delete("/policies/" + id, {
    parameters: { description: "Delete a policie with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPolicie(id) {
  svc.delete("/policies/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a policie with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPolicie(id) {
  svc.post("/policies", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a policie with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a policie with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePolicie(id) {
  svc.put("/policies/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a policie" }
    });
}

// GET one
function getPolicie(id) {
  svc.get("/policies/" + id, {
    parameters: { description: "Get a policie" }
  });
}

// LIST all
function listPolicies() {
  svc.get("/policies", {
    parameters: { description: "List policies" }
  });
}

// Verify exists (by list)
function verifyPolicieExists(id) {
  svc.get("/policies", {
    callback: function (response) {
      policie = JSON.parse(response.body);
      for (let i = 0; i < policie.length; i++) {
        if (policie[i].id === id) {
          return pvg.success("Policie exists");
        }
      }
      return pvg.fail("Expected a policie to exist but it does not");
    },
    parameters: { description: "Verify policie with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPolicieDoesNotExist(id) {
  svc.get("/policies", {
    callback: function (response) {
      policie = JSON.parse(response.body);
      for (let i = 0; i < policie.length; i++) {
        if (policie[i].id === id) {
          return pvg.fail("Expected a policie to not exist but it does");
        }
      }
      return pvg.success("Policie does not exist");
    },
    parameters: { description: "Verify policie with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPolicie() {
  return bp.EventSet("any-add-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a policie");
  });
}
function matchAddPolicie(id) {
  return bp.EventSet("add-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a policie with id " + id + "";
  });
}
function matchAnyDeletePolicie() {
  return bp.EventSet("any-del-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a policie");
  });
}
function matchDeletePolicie(id) {
  return bp.EventSet("del-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a policie with id " + id + "";
  });
}

// Wait helpers
function waitForAnyPolicieAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ policie\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ policie\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForPolicieAdded(id) {
  waitFor(matchAddPolicie(id));
}
function waitForPolicieDeleted(id) {
  waitFor(matchDeletePolicie(id));
}
function waitForAnyPolicieDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ policie\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ policie\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Release Operations === */

// CREATE
function addRelease(id) {
  svc.post("/releases", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a release with id " + id + "" }
    });
}

// DELETE
function deleteRelease(id) {
  svc.delete("/releases/" + id, {
    parameters: { description: "Delete a release with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRelease(id) {
  svc.delete("/releases/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a release with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRelease(id) {
  svc.post("/releases", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a release with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a release with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRelease(id) {
  svc.put("/releases/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a release" }
    });
}

// GET one
function getRelease(id) {
  svc.get("/releases/" + id, {
    parameters: { description: "Get a release" }
  });
}

// LIST all
function listReleases() {
  svc.get("/releases", {
    parameters: { description: "List releases" }
  });
}

// Verify exists (by list)
function verifyReleaseExists(id) {
  svc.get("/releases", {
    callback: function (response) {
      release = JSON.parse(response.body);
      for (let i = 0; i < release.length; i++) {
        if (release[i].id === id) {
          return pvg.success("Release exists");
        }
      }
      return pvg.fail("Expected a release to exist but it does not");
    },
    parameters: { description: "Verify release with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyReleaseDoesNotExist(id) {
  svc.get("/releases", {
    callback: function (response) {
      release = JSON.parse(response.body);
      for (let i = 0; i < release.length; i++) {
        if (release[i].id === id) {
          return pvg.fail("Expected a release to not exist but it does");
        }
      }
      return pvg.success("Release does not exist");
    },
    parameters: { description: "Verify release with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRelease() {
  return bp.EventSet("any-add-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a release");
  });
}
function matchAddRelease(id) {
  return bp.EventSet("add-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a release with id " + id + "";
  });
}
function matchAnyDeleteRelease() {
  return bp.EventSet("any-del-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a release");
  });
}
function matchDeleteRelease(id) {
  return bp.EventSet("del-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a release with id " + id + "";
  });
}

// Wait helpers
function waitForAnyReleaseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ release\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ release\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForReleaseAdded(id) {
  waitFor(matchAddRelease(id));
}
function waitForReleaseDeleted(id) {
  waitFor(matchDeleteRelease(id));
}
function waitForAnyReleaseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ release\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ release\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === Reset Operations === */

// CREATE
function addReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    });
}

// DELETE
function deleteReset(id) {
  svc.delete("/reset/" + id, {
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingReset(id) {
  svc.delete("/reset/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a reset with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingReset(id) {
  svc.post("/reset", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a reset with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a reset with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateReset(id) {
  svc.put("/reset/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a reset" }
    });
}

// GET one
function getReset(id) {
  svc.get("/reset/" + id, {
    parameters: { description: "Get a reset" }
  });
}

// LIST all
function listReset() {
  svc.get("/reset", {
    parameters: { description: "List reset" }
  });
}

// Verify exists (by list)
function verifyResetExists(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.success("Reset exists");
        }
      }
      return pvg.fail("Expected a reset to exist but it does not");
    },
    parameters: { description: "Verify reset with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyResetDoesNotExist(id) {
  svc.get("/reset", {
    callback: function (response) {
      reset = JSON.parse(response.body);
      for (let i = 0; i < reset.length; i++) {
        if (reset[i].id === id) {
          return pvg.fail("Expected a reset to not exist but it does");
        }
      }
      return pvg.success("Reset does not exist");
    },
    parameters: { description: "Verify reset with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddReset() {
  return bp.EventSet("any-add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a reset");
  });
}
function matchAddReset(id) {
  return bp.EventSet("add-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a reset with id " + id + "";
  });
}
function matchAnyDeleteReset() {
  return bp.EventSet("any-del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a reset");
  });
}
function matchDeleteReset(id) {
  return bp.EventSet("del-reset", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a reset with id " + id + "";
  });
}

// Wait helpers
function waitForAnyResetAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForResetAdded(id) {
  waitFor(matchAddReset(id));
}
function waitForResetDeleted(id) {
  waitFor(matchDeleteReset(id));
}
function waitForAnyResetDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ reset\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ reset\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

