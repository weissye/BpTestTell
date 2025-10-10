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
function addApp(name, version) {
  svc.post("/apps", {
      body: JSON.stringify({ name: name, version: version }),
      parameters: { description: "Add a app with name " + name + " and version " + version + "" }
    });
}

// DELETE
function deleteApp(name, version) {
  svc.delete("/apps/" + name + "/"+ version, {
    parameters: { description: "Delete a app with name " + name + " and version " + version + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApp(name, version) {
  svc.delete("/apps/" + name + "/"+ version, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a app with name " + name + " and version " + version + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApp(name, version) {
  svc.post("/apps", {
      body: JSON.stringify({ name: name, version: version }),
      parameters: { description: "Add a app with name " + name + " and version " + version + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a app with name " + name + " and version " + version + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateApp(name, version) {
  svc.put("/apps/" + name + "/"+ version, {
      body: JSON.stringify({ name: name, version: version }),
      parameters: { description: "Update a app" }
    });
}

// GET one
function getApp(name, version) {
  svc.get("/apps/" + name + "/"+ version, {
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
function verifyAppExists(name, version) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].name === name && app[i].version === version) {
          return pvg.success("App exists");
        }
      }
      return pvg.fail("Expected a app to exist but it does not");
    },
    parameters: { description: "Verify app with name " + name + " and version " + version + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyAppDoesNotExist(name, version) {
  svc.get("/apps", {
    callback: function (response) {
      app = JSON.parse(response.body);
      for (let i = 0; i < app.length; i++) {
        if (app[i].name === name && app[i].version === version) {
          return pvg.fail("Expected a app to not exist but it does");
        }
      }
      return pvg.success("App does not exist");
    },
    parameters: { description: "Verify app with name " + name + " and version " + version + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApp() {
  return bp.EventSet("any-add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a app");
  });
}
function matchAddApp(name, version) {
  return bp.EventSet("add-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a app with name " + name + " and version " + version + "";
  });
}
function matchAnyDeleteApp() {
  return bp.EventSet("any-del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a app");
  });
}
function matchDeleteApp(name, version) {
  return bp.EventSet("del-app", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a app with name " + name + " and version " + version + "";
  });
}

// Wait helpers
function waitForAnyAppAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ app\ with\ name\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ app\ with\ name\ (.+) and version\ (.+)$/);
    return { name: (x)=>x(m[1]), version: (x)=>x(m[2]) };
}
function waitForAppAdded(name, version) {
  waitFor(matchAddApp(name, version));
}
function waitForAppDeleted(name, version) {
  waitFor(matchDeleteApp(name, version));
}
function waitForAnyAppDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ app\ with\ name\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ app\ with\ name\ (.+) and version\ (.+)$/);
    return { name: (x)=>x(m[1]), version: (x)=>x(m[2]) };
}


/** === Config Operations === */

// CREATE
function addConfig(key, value) {
  svc.post("/configs", {
      body: JSON.stringify({ key: key, value: value }),
      parameters: { description: "Add a config with key " + key + " and value " + value + "" }
    });
}

// DELETE
function deleteConfig(key, value) {
  svc.delete("/configs/" + key + "/"+ value, {
    parameters: { description: "Delete a config with key " + key + " and value " + value + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingConfig(key, value) {
  svc.delete("/configs/" + key + "/"+ value, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a config with key " + key + " and value " + value + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingConfig(key, value) {
  svc.post("/configs", {
      body: JSON.stringify({ key: key, value: value }),
      parameters: { description: "Add a config with key " + key + " and value " + value + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a config with key " + key + " and value " + value + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateConfig(key, value) {
  svc.put("/configs/" + key + "/"+ value, {
      body: JSON.stringify({ key: key, value: value }),
      parameters: { description: "Update a config" }
    });
}

// GET one
function getConfig(key, value) {
  svc.get("/configs/" + key + "/"+ value, {
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
function verifyConfigExists(key, value) {
  svc.get("/configs", {
    callback: function (response) {
      config = JSON.parse(response.body);
      for (let i = 0; i < config.length; i++) {
        if (config[i].key === key && config[i].value === value) {
          return pvg.success("Config exists");
        }
      }
      return pvg.fail("Expected a config to exist but it does not");
    },
    parameters: { description: "Verify config with key " + key + " and value " + value + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyConfigDoesNotExist(key, value) {
  svc.get("/configs", {
    callback: function (response) {
      config = JSON.parse(response.body);
      for (let i = 0; i < config.length; i++) {
        if (config[i].key === key && config[i].value === value) {
          return pvg.fail("Expected a config to not exist but it does");
        }
      }
      return pvg.success("Config does not exist");
    },
    parameters: { description: "Verify config with key " + key + " and value " + value + " does not exist" }
  });
}

// Match helpers
function matchAnyAddConfig() {
  return bp.EventSet("any-add-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a config");
  });
}
function matchAddConfig(key, value) {
  return bp.EventSet("add-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a config with key " + key + " and value " + value + "";
  });
}
function matchAnyDeleteConfig() {
  return bp.EventSet("any-del-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a config");
  });
}
function matchDeleteConfig(key, value) {
  return bp.EventSet("del-config", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a config with key " + key + " and value " + value + "";
  });
}

// Wait helpers
function waitForAnyConfigAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ config\ with\ key\ (.+) and value\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ config\ with\ key\ (.+) and value\ (.+)$/);
    return { key: (x)=>x(m[1]), value: (x)=>x(m[2]) };
}
function waitForConfigAdded(key, value) {
  waitFor(matchAddConfig(key, value));
}
function waitForConfigDeleted(key, value) {
  waitFor(matchDeleteConfig(key, value));
}
function waitForAnyConfigDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ config\ with\ key\ (.+) and value\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ config\ with\ key\ (.+) and value\ (.+)$/);
    return { key: (x)=>x(m[1]), value: (x)=>x(m[2]) };
}


/** === Env Operations === */

// CREATE
function addEnv(name) {
  svc.post("/envs", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a env with name " + name + "" }
    });
}

// DELETE
function deleteEnv(name) {
  svc.delete("/envs/" + name, {
    parameters: { description: "Delete a env with name " + name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingEnv(name) {
  svc.delete("/envs/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a env with name " + name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingEnv(name) {
  svc.post("/envs", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a env with name " + name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a env with name " + name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateEnv(name) {
  svc.put("/envs/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a env" }
    });
}

// GET one
function getEnv(name) {
  svc.get("/envs/" + name, {
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
function verifyEnvExists(name) {
  svc.get("/envs", {
    callback: function (response) {
      env = JSON.parse(response.body);
      for (let i = 0; i < env.length; i++) {
        if (env[i].name === name) {
          return pvg.success("Env exists");
        }
      }
      return pvg.fail("Expected a env to exist but it does not");
    },
    parameters: { description: "Verify env with name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyEnvDoesNotExist(name) {
  svc.get("/envs", {
    callback: function (response) {
      env = JSON.parse(response.body);
      for (let i = 0; i < env.length; i++) {
        if (env[i].name === name) {
          return pvg.fail("Expected a env to not exist but it does");
        }
      }
      return pvg.success("Env does not exist");
    },
    parameters: { description: "Verify env with name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddEnv() {
  return bp.EventSet("any-add-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a env");
  });
}
function matchAddEnv(name) {
  return bp.EventSet("add-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a env with name " + name + "";
  });
}
function matchAnyDeleteEnv() {
  return bp.EventSet("any-del-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a env");
  });
}
function matchDeleteEnv(name) {
  return bp.EventSet("del-env", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a env with name " + name + "";
  });
}

// Wait helpers
function waitForAnyEnvAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ env\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ env\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}
function waitForEnvAdded(name) {
  waitFor(matchAddEnv(name));
}
function waitForEnvDeleted(name) {
  waitFor(matchDeleteEnv(name));
}
function waitForAnyEnvDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ env\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ env\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}


/** === Policie Operations === */

// CREATE
function addPolicie(name) {
  svc.post("/policies", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a policie with name " + name + "" }
    });
}

// DELETE
function deletePolicie(name) {
  svc.delete("/policies/" + name, {
    parameters: { description: "Delete a policie with name " + name + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingPolicie(name) {
  svc.delete("/policies/" + name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a policie with name " + name + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingPolicie(name) {
  svc.post("/policies", {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Add a policie with name " + name + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a policie with name " + name + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updatePolicie(name) {
  svc.put("/policies/" + name, {
      body: JSON.stringify({ name: name }),
      parameters: { description: "Update a policie" }
    });
}

// GET one
function getPolicie(name) {
  svc.get("/policies/" + name, {
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
function verifyPolicieExists(name) {
  svc.get("/policies", {
    callback: function (response) {
      policie = JSON.parse(response.body);
      for (let i = 0; i < policie.length; i++) {
        if (policie[i].name === name) {
          return pvg.success("Policie exists");
        }
      }
      return pvg.fail("Expected a policie to exist but it does not");
    },
    parameters: { description: "Verify policie with name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyPolicieDoesNotExist(name) {
  svc.get("/policies", {
    callback: function (response) {
      policie = JSON.parse(response.body);
      for (let i = 0; i < policie.length; i++) {
        if (policie[i].name === name) {
          return pvg.fail("Expected a policie to not exist but it does");
        }
      }
      return pvg.success("Policie does not exist");
    },
    parameters: { description: "Verify policie with name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddPolicie() {
  return bp.EventSet("any-add-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a policie");
  });
}
function matchAddPolicie(name) {
  return bp.EventSet("add-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a policie with name " + name + "";
  });
}
function matchAnyDeletePolicie() {
  return bp.EventSet("any-del-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a policie");
  });
}
function matchDeletePolicie(name) {
  return bp.EventSet("del-policie", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a policie with name " + name + "";
  });
}

// Wait helpers
function waitForAnyPolicieAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ policie\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ policie\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}
function waitForPolicieAdded(name) {
  waitFor(matchAddPolicie(name));
}
function waitForPolicieDeleted(name) {
  waitFor(matchDeletePolicie(name));
}
function waitForAnyPolicieDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ policie\ with\ name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ policie\ with\ name\ (.+)$/);
    return { name: (x)=>x(m[1]) };
}


/** === Release Operations === */

// CREATE
function addRelease(appId, version) {
  svc.post("/releases", {
      body: JSON.stringify({ appId: appId, version: version }),
      parameters: { description: "Add a release with appId " + appId + " and version " + version + "" }
    });
}

// DELETE
function deleteRelease(appId, version) {
  svc.delete("/releases/" + appId + "/"+ version, {
    parameters: { description: "Delete a release with appId " + appId + " and version " + version + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRelease(appId, version) {
  svc.delete("/releases/" + appId + "/"+ version, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a release with appId " + appId + " and version " + version + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRelease(appId, version) {
  svc.post("/releases", {
      body: JSON.stringify({ appId: appId, version: version }),
      parameters: { description: "Add a release with appId " + appId + " and version " + version + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a release with appId " + appId + " and version " + version + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRelease(appId, version) {
  svc.put("/releases/" + appId + "/"+ version, {
      body: JSON.stringify({ appId: appId, version: version }),
      parameters: { description: "Update a release" }
    });
}

// GET one
function getRelease(appId, version) {
  svc.get("/releases/" + appId + "/"+ version, {
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
function verifyReleaseExists(appId, version) {
  svc.get("/releases", {
    callback: function (response) {
      release = JSON.parse(response.body);
      for (let i = 0; i < release.length; i++) {
        if (release[i].appId === appId && release[i].version === version) {
          return pvg.success("Release exists");
        }
      }
      return pvg.fail("Expected a release to exist but it does not");
    },
    parameters: { description: "Verify release with appId " + appId + " and version " + version + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyReleaseDoesNotExist(appId, version) {
  svc.get("/releases", {
    callback: function (response) {
      release = JSON.parse(response.body);
      for (let i = 0; i < release.length; i++) {
        if (release[i].appId === appId && release[i].version === version) {
          return pvg.fail("Expected a release to not exist but it does");
        }
      }
      return pvg.success("Release does not exist");
    },
    parameters: { description: "Verify release with appId " + appId + " and version " + version + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRelease() {
  return bp.EventSet("any-add-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a release");
  });
}
function matchAddRelease(appId, version) {
  return bp.EventSet("add-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a release with appId " + appId + " and version " + version + "";
  });
}
function matchAnyDeleteRelease() {
  return bp.EventSet("any-del-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a release");
  });
}
function matchDeleteRelease(appId, version) {
  return bp.EventSet("del-release", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a release with appId " + appId + " and version " + version + "";
  });
}

// Wait helpers
function waitForAnyReleaseAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ release\ with\ appId\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ release\ with\ appId\ (.+) and version\ (.+)$/);
    return { appId: (x)=>x(m[1]), version: (x)=>x(m[2]) };
}
function waitForReleaseAdded(appId, version) {
  waitFor(matchAddRelease(appId, version));
}
function waitForReleaseDeleted(appId, version) {
  waitFor(matchDeleteRelease(appId, version));
}
function waitForAnyReleaseDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ release\ with\ appId\ (.+) and version\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ release\ with\ appId\ (.+) and version\ (.+)$/);
    return { appId: (x)=>x(m[1]), version: (x)=>x(m[2]) };
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

