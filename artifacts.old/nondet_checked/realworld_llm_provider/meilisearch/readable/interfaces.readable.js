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

/** === Dump Operations === */

// CREATE
function addDump(id) {
  svc.post("/dumps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a dump with " + "id " + id }
    });
}

// DELETE
function deleteDump(id) {
  svc.delete("/dumps/" + id, {
    parameters: { description: "Delete a dump with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingDump(id) {
  svc.delete("/dumps/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a dump with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingDump(id) {
  svc.post("/dumps", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a dump with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a dump with " + "id " + id }
  });
}

// UPDATE
function updateDump(id) {
  svc.put("/dumps/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a dump with " + "id " + id }
    });
}

// GET one
function getDump(id) {
  svc.get("/dumps/" + id, {
    parameters: { description: "Get a dump with " + "id " + id }
  });
}

// LIST all
function listDumps() {
  svc.get("/dumps", {
    parameters: { description: "List dumps" }
  });
}

// Verify exists (by list)
function verifyDumpExists(id) {
  svc.get("/dumps", {
    callback: function (response) {
      dump = JSON.parse(response.body);
      for (let i = 0; i < dump.length; i++) {
        if (dump[i].id === id) {
          return pvg.success("Dump exists");
        }
      }
      return pvg.fail("Expected a dump to exist but it does not");
    },
    parameters: { description: "Verify dump with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyDumpDoesNotExist(id) {
  svc.get("/dumps", {
    callback: function (response) {
      dump = JSON.parse(response.body);
      for (let i = 0; i < dump.length; i++) {
        if (dump[i].id === id) {
          return pvg.fail("Expected a dump to not exist but it does");
        }
      }
      return pvg.success("Dump does not exist");
    },
    parameters: { description: "Verify dump with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddDump() {
  return bp.EventSet("any-add-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a dump");
  });
}
function matchAddDump(id) {
  return bp.EventSet("add-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a dump with " + "id " + id;
  });
}
function matchAnyDeleteDump() {
  return bp.EventSet("any-del-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a dump");
  });
}
function matchDeleteDump(id) {
  return bp.EventSet("del-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a dump with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateDump() {
  return bp.EventSet("any-update-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a dump");
  });
}
function matchUpdateDump(id) {
  return bp.EventSet("update-dump", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a dump with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyDumpAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ dump\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ dump\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDumpAdded(id) {
  waitFor(matchAddDump(id));
}
function waitForDumpDeleted(id) {
  waitFor(matchDeleteDump(id));
}
function waitForAnyDumpDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ dump\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ dump\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForDumpUpdated(id) {
  waitFor(matchUpdateDump(id));
}
function waitForAnyDumpUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ dump\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ dump\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyDumpUpdated(id) {
  svc.get("/dumps", {
    callback: function (response) {
      dump = JSON.parse(response.body);
      for (let i = 0; i < dump.length; i++) {
        if (dump[i].id === id) {
          return pvg.success("Dump updated (present)");
        }
      }
      return pvg.fail("Expected a dump to be present after update, but it is not");
    },
    parameters: { description: "Verify dump with " + "id " + id + " exists" }
  });
}


/** === Experimental_feature Operations === */

// CREATE
function addExperimental_feature(id) {
  svc.post("/experimental_features", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a experimental_feature with " + "id " + id }
    });
}

// DELETE
function deleteExperimental_feature(id) {
  svc.delete("/experimental_features/" + id, {
    parameters: { description: "Delete a experimental_feature with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingExperimental_feature(id) {
  svc.delete("/experimental_features/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a experimental_feature with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingExperimental_feature(id) {
  svc.post("/experimental_features", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a experimental_feature with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a experimental_feature with " + "id " + id }
  });
}

// UPDATE
function updateExperimental_feature(id) {
  svc.put("/experimental_features/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a experimental_feature with " + "id " + id }
    });
}

// GET one
function getExperimental_feature(id) {
  svc.get("/experimental_features/" + id, {
    parameters: { description: "Get a experimental_feature with " + "id " + id }
  });
}

// LIST all
function listExperimental_features() {
  svc.get("/experimental_features", {
    parameters: { description: "List experimental_features" }
  });
}

// Verify exists (by list)
function verifyExperimental_featureExists(id) {
  svc.get("/experimental_features", {
    callback: function (response) {
      experimental_feature = JSON.parse(response.body);
      for (let i = 0; i < experimental_feature.length; i++) {
        if (experimental_feature[i].id === id) {
          return pvg.success("Experimental_feature exists");
        }
      }
      return pvg.fail("Expected a experimental_feature to exist but it does not");
    },
    parameters: { description: "Verify experimental_feature with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyExperimental_featureDoesNotExist(id) {
  svc.get("/experimental_features", {
    callback: function (response) {
      experimental_feature = JSON.parse(response.body);
      for (let i = 0; i < experimental_feature.length; i++) {
        if (experimental_feature[i].id === id) {
          return pvg.fail("Expected a experimental_feature to not exist but it does");
        }
      }
      return pvg.success("Experimental_feature does not exist");
    },
    parameters: { description: "Verify experimental_feature with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddExperimental_feature() {
  return bp.EventSet("any-add-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a experimental_feature");
  });
}
function matchAddExperimental_feature(id) {
  return bp.EventSet("add-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a experimental_feature with " + "id " + id;
  });
}
function matchAnyDeleteExperimental_feature() {
  return bp.EventSet("any-del-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a experimental_feature");
  });
}
function matchDeleteExperimental_feature(id) {
  return bp.EventSet("del-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a experimental_feature with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateExperimental_feature() {
  return bp.EventSet("any-update-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a experimental_feature");
  });
}
function matchUpdateExperimental_feature(id) {
  return bp.EventSet("update-experimental_feature", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a experimental_feature with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyExperimental_featureAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ experimental_feature\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ experimental_feature\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForExperimental_featureAdded(id) {
  waitFor(matchAddExperimental_feature(id));
}
function waitForExperimental_featureDeleted(id) {
  waitFor(matchDeleteExperimental_feature(id));
}
function waitForAnyExperimental_featureDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ experimental_feature\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ experimental_feature\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForExperimental_featureUpdated(id) {
  waitFor(matchUpdateExperimental_feature(id));
}
function waitForAnyExperimental_featureUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ experimental_feature\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ experimental_feature\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyExperimental_featureUpdated(id) {
  svc.get("/experimental_features", {
    callback: function (response) {
      experimental_feature = JSON.parse(response.body);
      for (let i = 0; i < experimental_feature.length; i++) {
        if (experimental_feature[i].id === id) {
          return pvg.success("Experimental_feature updated (present)");
        }
      }
      return pvg.fail("Expected a experimental_feature to be present after update, but it is not");
    },
    parameters: { description: "Verify experimental_feature with " + "id " + id + " exists" }
  });
}


/** === Health Operations === */

// CREATE
function addHealth(id) {
  svc.post("/health", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a health with " + "id " + id }
    });
}

// DELETE
function deleteHealth(id) {
  svc.delete("/health/" + id, {
    parameters: { description: "Delete a health with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingHealth(id) {
  svc.delete("/health/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a health with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingHealth(id) {
  svc.post("/health", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a health with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a health with " + "id " + id }
  });
}

// UPDATE
function updateHealth(id) {
  svc.put("/health/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a health with " + "id " + id }
    });
}

// GET one
function getHealth(id) {
  svc.get("/health/" + id, {
    parameters: { description: "Get a health with " + "id " + id }
  });
}

// LIST all
function listHealth() {
  svc.get("/health", {
    parameters: { description: "List health" }
  });
}

// Verify exists (by list)
function verifyHealthExists(id) {
  svc.get("/health", {
    callback: function (response) {
      health = JSON.parse(response.body);
      for (let i = 0; i < health.length; i++) {
        if (health[i].id === id) {
          return pvg.success("Health exists");
        }
      }
      return pvg.fail("Expected a health to exist but it does not");
    },
    parameters: { description: "Verify health with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyHealthDoesNotExist(id) {
  svc.get("/health", {
    callback: function (response) {
      health = JSON.parse(response.body);
      for (let i = 0; i < health.length; i++) {
        if (health[i].id === id) {
          return pvg.fail("Expected a health to not exist but it does");
        }
      }
      return pvg.success("Health does not exist");
    },
    parameters: { description: "Verify health with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddHealth() {
  return bp.EventSet("any-add-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a health");
  });
}
function matchAddHealth(id) {
  return bp.EventSet("add-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a health with " + "id " + id;
  });
}
function matchAnyDeleteHealth() {
  return bp.EventSet("any-del-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a health");
  });
}
function matchDeleteHealth(id) {
  return bp.EventSet("del-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a health with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateHealth() {
  return bp.EventSet("any-update-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a health");
  });
}
function matchUpdateHealth(id) {
  return bp.EventSet("update-health", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a health with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyHealthAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ health\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ health\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForHealthAdded(id) {
  waitFor(matchAddHealth(id));
}
function waitForHealthDeleted(id) {
  waitFor(matchDeleteHealth(id));
}
function waitForAnyHealthDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ health\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ health\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForHealthUpdated(id) {
  waitFor(matchUpdateHealth(id));
}
function waitForAnyHealthUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ health\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ health\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyHealthUpdated(id) {
  svc.get("/health", {
    callback: function (response) {
      health = JSON.parse(response.body);
      for (let i = 0; i < health.length; i++) {
        if (health[i].id === id) {
          return pvg.success("Health updated (present)");
        }
      }
      return pvg.fail("Expected a health to be present after update, but it is not");
    },
    parameters: { description: "Verify health with " + "id " + id + " exists" }
  });
}


/** === Indexe Operations === */

// CREATE
function addIndexe(id) {
  svc.post("/indexes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a indexe with " + "id " + id }
    });
}

// DELETE
function deleteIndexe(id) {
  svc.delete("/indexes/" + id, {
    parameters: { description: "Delete a indexe with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingIndexe(id) {
  svc.delete("/indexes/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a indexe with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingIndexe(id) {
  svc.post("/indexes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a indexe with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a indexe with " + "id " + id }
  });
}

// UPDATE
function updateIndexe(id) {
  svc.put("/indexes/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a indexe with " + "id " + id }
    });
}

// GET one
function getIndexe(id) {
  svc.get("/indexes/" + id, {
    parameters: { description: "Get a indexe with " + "id " + id }
  });
}

// LIST all
function listIndexes() {
  svc.get("/indexes", {
    parameters: { description: "List indexes" }
  });
}

// Verify exists (by list)
function verifyIndexeExists(id) {
  svc.get("/indexes", {
    callback: function (response) {
      indexe = JSON.parse(response.body);
      for (let i = 0; i < indexe.length; i++) {
        if (indexe[i].id === id) {
          return pvg.success("Indexe exists");
        }
      }
      return pvg.fail("Expected a indexe to exist but it does not");
    },
    parameters: { description: "Verify indexe with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyIndexeDoesNotExist(id) {
  svc.get("/indexes", {
    callback: function (response) {
      indexe = JSON.parse(response.body);
      for (let i = 0; i < indexe.length; i++) {
        if (indexe[i].id === id) {
          return pvg.fail("Expected a indexe to not exist but it does");
        }
      }
      return pvg.success("Indexe does not exist");
    },
    parameters: { description: "Verify indexe with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddIndexe() {
  return bp.EventSet("any-add-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a indexe");
  });
}
function matchAddIndexe(id) {
  return bp.EventSet("add-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a indexe with " + "id " + id;
  });
}
function matchAnyDeleteIndexe() {
  return bp.EventSet("any-del-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a indexe");
  });
}
function matchDeleteIndexe(id) {
  return bp.EventSet("del-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a indexe with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateIndexe() {
  return bp.EventSet("any-update-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a indexe");
  });
}
function matchUpdateIndexe(id) {
  return bp.EventSet("update-indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a indexe with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyIndexeAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForIndexeAdded(id) {
  waitFor(matchAddIndexe(id));
}
function waitForIndexeDeleted(id) {
  waitFor(matchDeleteIndexe(id));
}
function waitForAnyIndexeDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForIndexeUpdated(id) {
  waitFor(matchUpdateIndexe(id));
}
function waitForAnyIndexeUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyIndexeUpdated(id) {
  svc.get("/indexes", {
    callback: function (response) {
      indexe = JSON.parse(response.body);
      for (let i = 0; i < indexe.length; i++) {
        if (indexe[i].id === id) {
          return pvg.success("Indexe updated (present)");
        }
      }
      return pvg.fail("Expected a indexe to be present after update, but it is not");
    },
    parameters: { description: "Verify indexe with " + "id " + id + " exists" }
  });
}


/** === Key Operations === */

// CREATE
function addKey(uid_or_key) {
  svc.post("/keys", {
      body: JSON.stringify({ uid_or_key: uid_or_key }),
      parameters: { description: "Add a key with " + "uid_or_key " + uid_or_key }
    });
}

// DELETE
function deleteKey(uid_or_key) {
  svc.delete("/keys/" + uid_or_key, {
    parameters: { description: "Delete a key with " + "uid_or_key " + uid_or_key }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingKey(uid_or_key) {
  svc.delete("/keys/" + uid_or_key, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a key with " + "uid_or_key " + uid_or_key }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingKey(uid_or_key) {
  svc.post("/keys", {
      body: JSON.stringify({ uid_or_key: uid_or_key }),
      parameters: { description: "Add a key with " + "uid_or_key " + uid_or_key }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a key with " + "uid_or_key " + uid_or_key }
  });
}

// UPDATE
function updateKey(uid_or_key) {
  svc.put("/keys/" + uid_or_key, {
      body: JSON.stringify({ uid_or_key: uid_or_key }),
      parameters: { description: "Update a key with " + "uid_or_key " + uid_or_key }
    });
}

// GET one
function getKey(uid_or_key) {
  svc.get("/keys/" + uid_or_key, {
    parameters: { description: "Get a key with " + "uid_or_key " + uid_or_key }
  });
}

// LIST all
function listKeys() {
  svc.get("/keys", {
    parameters: { description: "List keys" }
  });
}

// Verify exists (by list)
function verifyKeyExists(uid_or_key) {
  svc.get("/keys", {
    callback: function (response) {
      key = JSON.parse(response.body);
      for (let i = 0; i < key.length; i++) {
        if (key[i].uid_or_key === uid_or_key) {
          return pvg.success("Key exists");
        }
      }
      return pvg.fail("Expected a key to exist but it does not");
    },
    parameters: { description: "Verify key with " + "uid_or_key " + uid_or_key + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyKeyDoesNotExist(uid_or_key) {
  svc.get("/keys", {
    callback: function (response) {
      key = JSON.parse(response.body);
      for (let i = 0; i < key.length; i++) {
        if (key[i].uid_or_key === uid_or_key) {
          return pvg.fail("Expected a key to not exist but it does");
        }
      }
      return pvg.success("Key does not exist");
    },
    parameters: { description: "Verify key with " + "uid_or_key " + uid_or_key + " does not exist" }
  });
}

// Match helpers
function matchAnyAddKey() {
  return bp.EventSet("any-add-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a key");
  });
}
function matchAddKey(uid_or_key) {
  return bp.EventSet("add-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a key with " + "uid_or_key " + uid_or_key;
  });
}
function matchAnyDeleteKey() {
  return bp.EventSet("any-del-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a key");
  });
}
function matchDeleteKey(uid_or_key) {
  return bp.EventSet("del-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a key with " + "uid_or_key " + uid_or_key;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateKey() {
  return bp.EventSet("any-update-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a key");
  });
}
function matchUpdateKey(uid_or_key) {
  return bp.EventSet("update-key", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a key with " + "uid_or_key " + uid_or_key;
  });
}

// Wait helpers
function waitForAnyKeyAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ key\ with\ uid_or_key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ key\ with\ uid_or_key\ (.+)$/);
    return { uid_or_key: m[1] };
}
function waitForKeyAdded(uid_or_key) {
  waitFor(matchAddKey(uid_or_key));
}
function waitForKeyDeleted(uid_or_key) {
  waitFor(matchDeleteKey(uid_or_key));
}
function waitForAnyKeyDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ key\ with\ uid_or_key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ key\ with\ uid_or_key\ (.+)$/);
    return { uid_or_key: m[1] };
}
function waitForKeyUpdated(uid_or_key) {
  waitFor(matchUpdateKey(uid_or_key));
}
function waitForAnyKeyUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ key\ with\ uid_or_key\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ key\ with\ uid_or_key\ (.+)$/);
    return { uid_or_key: m[1] };
}

// Verify updated (presence-by-list)
function verifyKeyUpdated(uid_or_key) {
  svc.get("/keys", {
    callback: function (response) {
      key = JSON.parse(response.body);
      for (let i = 0; i < key.length; i++) {
        if (key[i].uid_or_key === uid_or_key) {
          return pvg.success("Key updated (present)");
        }
      }
      return pvg.fail("Expected a key to be present after update, but it is not");
    },
    parameters: { description: "Verify key with " + "uid_or_key " + uid_or_key + " exists" }
  });
}


/** === Metric Operations === */

// CREATE
function addMetric(id) {
  svc.post("/metrics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a metric with " + "id " + id }
    });
}

// DELETE
function deleteMetric(id) {
  svc.delete("/metrics/" + id, {
    parameters: { description: "Delete a metric with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMetric(id) {
  svc.delete("/metrics/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a metric with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMetric(id) {
  svc.post("/metrics", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a metric with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a metric with " + "id " + id }
  });
}

// UPDATE
function updateMetric(id) {
  svc.put("/metrics/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a metric with " + "id " + id }
    });
}

// GET one
function getMetric(id) {
  svc.get("/metrics/" + id, {
    parameters: { description: "Get a metric with " + "id " + id }
  });
}

// LIST all
function listMetrics() {
  svc.get("/metrics", {
    parameters: { description: "List metrics" }
  });
}

// Verify exists (by list)
function verifyMetricExists(id) {
  svc.get("/metrics", {
    callback: function (response) {
      metric = JSON.parse(response.body);
      for (let i = 0; i < metric.length; i++) {
        if (metric[i].id === id) {
          return pvg.success("Metric exists");
        }
      }
      return pvg.fail("Expected a metric to exist but it does not");
    },
    parameters: { description: "Verify metric with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMetricDoesNotExist(id) {
  svc.get("/metrics", {
    callback: function (response) {
      metric = JSON.parse(response.body);
      for (let i = 0; i < metric.length; i++) {
        if (metric[i].id === id) {
          return pvg.fail("Expected a metric to not exist but it does");
        }
      }
      return pvg.success("Metric does not exist");
    },
    parameters: { description: "Verify metric with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMetric() {
  return bp.EventSet("any-add-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a metric");
  });
}
function matchAddMetric(id) {
  return bp.EventSet("add-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a metric with " + "id " + id;
  });
}
function matchAnyDeleteMetric() {
  return bp.EventSet("any-del-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a metric");
  });
}
function matchDeleteMetric(id) {
  return bp.EventSet("del-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a metric with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMetric() {
  return bp.EventSet("any-update-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a metric");
  });
}
function matchUpdateMetric(id) {
  return bp.EventSet("update-metric", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a metric with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMetricAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ metric\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ metric\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMetricAdded(id) {
  waitFor(matchAddMetric(id));
}
function waitForMetricDeleted(id) {
  waitFor(matchDeleteMetric(id));
}
function waitForAnyMetricDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ metric\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ metric\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMetricUpdated(id) {
  waitFor(matchUpdateMetric(id));
}
function waitForAnyMetricUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ metric\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ metric\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMetricUpdated(id) {
  svc.get("/metrics", {
    callback: function (response) {
      metric = JSON.parse(response.body);
      for (let i = 0; i < metric.length; i++) {
        if (metric[i].id === id) {
          return pvg.success("Metric updated (present)");
        }
      }
      return pvg.fail("Expected a metric to be present after update, but it is not");
    },
    parameters: { description: "Verify metric with " + "id " + id + " exists" }
  });
}


/** === Multi_search Operations === */

// CREATE
function addMulti_search(id) {
  svc.post("/multi_search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a multi_search with " + "id " + id }
    });
}

// DELETE
function deleteMulti_search(id) {
  svc.delete("/multi_search/" + id, {
    parameters: { description: "Delete a multi_search with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMulti_search(id) {
  svc.delete("/multi_search/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a multi_search with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMulti_search(id) {
  svc.post("/multi_search", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a multi_search with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a multi_search with " + "id " + id }
  });
}

// UPDATE
function updateMulti_search(id) {
  svc.put("/multi_search/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a multi_search with " + "id " + id }
    });
}

// GET one
function getMulti_search(id) {
  svc.get("/multi_search/" + id, {
    parameters: { description: "Get a multi_search with " + "id " + id }
  });
}

// LIST all
function listMulti_search() {
  svc.get("/multi_search", {
    parameters: { description: "List multi_search" }
  });
}

// Verify exists (by list)
function verifyMulti_searchExists(id) {
  svc.get("/multi_search", {
    callback: function (response) {
      multi_search = JSON.parse(response.body);
      for (let i = 0; i < multi_search.length; i++) {
        if (multi_search[i].id === id) {
          return pvg.success("Multi_search exists");
        }
      }
      return pvg.fail("Expected a multi_search to exist but it does not");
    },
    parameters: { description: "Verify multi_search with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMulti_searchDoesNotExist(id) {
  svc.get("/multi_search", {
    callback: function (response) {
      multi_search = JSON.parse(response.body);
      for (let i = 0; i < multi_search.length; i++) {
        if (multi_search[i].id === id) {
          return pvg.fail("Expected a multi_search to not exist but it does");
        }
      }
      return pvg.success("Multi_search does not exist");
    },
    parameters: { description: "Verify multi_search with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMulti_search() {
  return bp.EventSet("any-add-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a multi_search");
  });
}
function matchAddMulti_search(id) {
  return bp.EventSet("add-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a multi_search with " + "id " + id;
  });
}
function matchAnyDeleteMulti_search() {
  return bp.EventSet("any-del-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a multi_search");
  });
}
function matchDeleteMulti_search(id) {
  return bp.EventSet("del-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a multi_search with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMulti_search() {
  return bp.EventSet("any-update-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a multi_search");
  });
}
function matchUpdateMulti_search(id) {
  return bp.EventSet("update-multi_search", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a multi_search with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyMulti_searchAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ multi_search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ multi_search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMulti_searchAdded(id) {
  waitFor(matchAddMulti_search(id));
}
function waitForMulti_searchDeleted(id) {
  waitFor(matchDeleteMulti_search(id));
}
function waitForAnyMulti_searchDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ multi_search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ multi_search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMulti_searchUpdated(id) {
  waitFor(matchUpdateMulti_search(id));
}
function waitForAnyMulti_searchUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ multi_search\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ multi_search\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMulti_searchUpdated(id) {
  svc.get("/multi_search", {
    callback: function (response) {
      multi_search = JSON.parse(response.body);
      for (let i = 0; i < multi_search.length; i++) {
        if (multi_search[i].id === id) {
          return pvg.success("Multi_search updated (present)");
        }
      }
      return pvg.fail("Expected a multi_search to be present after update, but it is not");
    },
    parameters: { description: "Verify multi_search with " + "id " + id + " exists" }
  });
}


/** === Snapshot Operations === */

// CREATE
function addSnapshot(id) {
  svc.post("/snapshots", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a snapshot with " + "id " + id }
    });
}

// DELETE
function deleteSnapshot(id) {
  svc.delete("/snapshots/" + id, {
    parameters: { description: "Delete a snapshot with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSnapshot(id) {
  svc.delete("/snapshots/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a snapshot with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSnapshot(id) {
  svc.post("/snapshots", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a snapshot with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a snapshot with " + "id " + id }
  });
}

// UPDATE
function updateSnapshot(id) {
  svc.put("/snapshots/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a snapshot with " + "id " + id }
    });
}

// GET one
function getSnapshot(id) {
  svc.get("/snapshots/" + id, {
    parameters: { description: "Get a snapshot with " + "id " + id }
  });
}

// LIST all
function listSnapshots() {
  svc.get("/snapshots", {
    parameters: { description: "List snapshots" }
  });
}

// Verify exists (by list)
function verifySnapshotExists(id) {
  svc.get("/snapshots", {
    callback: function (response) {
      snapshot = JSON.parse(response.body);
      for (let i = 0; i < snapshot.length; i++) {
        if (snapshot[i].id === id) {
          return pvg.success("Snapshot exists");
        }
      }
      return pvg.fail("Expected a snapshot to exist but it does not");
    },
    parameters: { description: "Verify snapshot with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySnapshotDoesNotExist(id) {
  svc.get("/snapshots", {
    callback: function (response) {
      snapshot = JSON.parse(response.body);
      for (let i = 0; i < snapshot.length; i++) {
        if (snapshot[i].id === id) {
          return pvg.fail("Expected a snapshot to not exist but it does");
        }
      }
      return pvg.success("Snapshot does not exist");
    },
    parameters: { description: "Verify snapshot with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSnapshot() {
  return bp.EventSet("any-add-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a snapshot");
  });
}
function matchAddSnapshot(id) {
  return bp.EventSet("add-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a snapshot with " + "id " + id;
  });
}
function matchAnyDeleteSnapshot() {
  return bp.EventSet("any-del-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a snapshot");
  });
}
function matchDeleteSnapshot(id) {
  return bp.EventSet("del-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a snapshot with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSnapshot() {
  return bp.EventSet("any-update-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a snapshot");
  });
}
function matchUpdateSnapshot(id) {
  return bp.EventSet("update-snapshot", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a snapshot with " + "id " + id;
  });
}

// Wait helpers
function waitForAnySnapshotAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ snapshot\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ snapshot\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSnapshotAdded(id) {
  waitFor(matchAddSnapshot(id));
}
function waitForSnapshotDeleted(id) {
  waitFor(matchDeleteSnapshot(id));
}
function waitForAnySnapshotDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ snapshot\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ snapshot\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSnapshotUpdated(id) {
  waitFor(matchUpdateSnapshot(id));
}
function waitForAnySnapshotUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ snapshot\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ snapshot\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySnapshotUpdated(id) {
  svc.get("/snapshots", {
    callback: function (response) {
      snapshot = JSON.parse(response.body);
      for (let i = 0; i < snapshot.length; i++) {
        if (snapshot[i].id === id) {
          return pvg.success("Snapshot updated (present)");
        }
      }
      return pvg.fail("Expected a snapshot to be present after update, but it is not");
    },
    parameters: { description: "Verify snapshot with " + "id " + id + " exists" }
  });
}


/** === Stat Operations === */

// CREATE
function addStat(id) {
  svc.post("/stats", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a stat with " + "id " + id }
    });
}

// DELETE
function deleteStat(id) {
  svc.delete("/stats/" + id, {
    parameters: { description: "Delete a stat with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingStat(id) {
  svc.delete("/stats/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a stat with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingStat(id) {
  svc.post("/stats", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a stat with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a stat with " + "id " + id }
  });
}

// UPDATE
function updateStat(id) {
  svc.put("/stats/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a stat with " + "id " + id }
    });
}

// GET one
function getStat(id) {
  svc.get("/stats/" + id, {
    parameters: { description: "Get a stat with " + "id " + id }
  });
}

// LIST all
function listStats() {
  svc.get("/stats", {
    parameters: { description: "List stats" }
  });
}

// Verify exists (by list)
function verifyStatExists(id) {
  svc.get("/stats", {
    callback: function (response) {
      stat = JSON.parse(response.body);
      for (let i = 0; i < stat.length; i++) {
        if (stat[i].id === id) {
          return pvg.success("Stat exists");
        }
      }
      return pvg.fail("Expected a stat to exist but it does not");
    },
    parameters: { description: "Verify stat with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyStatDoesNotExist(id) {
  svc.get("/stats", {
    callback: function (response) {
      stat = JSON.parse(response.body);
      for (let i = 0; i < stat.length; i++) {
        if (stat[i].id === id) {
          return pvg.fail("Expected a stat to not exist but it does");
        }
      }
      return pvg.success("Stat does not exist");
    },
    parameters: { description: "Verify stat with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddStat() {
  return bp.EventSet("any-add-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a stat");
  });
}
function matchAddStat(id) {
  return bp.EventSet("add-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a stat with " + "id " + id;
  });
}
function matchAnyDeleteStat() {
  return bp.EventSet("any-del-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a stat");
  });
}
function matchDeleteStat(id) {
  return bp.EventSet("del-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a stat with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateStat() {
  return bp.EventSet("any-update-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a stat");
  });
}
function matchUpdateStat(id) {
  return bp.EventSet("update-stat", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a stat with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyStatAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ stat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ stat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForStatAdded(id) {
  waitFor(matchAddStat(id));
}
function waitForStatDeleted(id) {
  waitFor(matchDeleteStat(id));
}
function waitForAnyStatDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ stat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ stat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForStatUpdated(id) {
  waitFor(matchUpdateStat(id));
}
function waitForAnyStatUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ stat\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ stat\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyStatUpdated(id) {
  svc.get("/stats", {
    callback: function (response) {
      stat = JSON.parse(response.body);
      for (let i = 0; i < stat.length; i++) {
        if (stat[i].id === id) {
          return pvg.success("Stat updated (present)");
        }
      }
      return pvg.fail("Expected a stat to be present after update, but it is not");
    },
    parameters: { description: "Verify stat with " + "id " + id + " exists" }
  });
}


/** === Swap_indexe Operations === */

// CREATE
function addSwap_indexe(id) {
  svc.post("/swap_indexes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a swap_indexe with " + "id " + id }
    });
}

// DELETE
function deleteSwap_indexe(id) {
  svc.delete("/swap_indexes/" + id, {
    parameters: { description: "Delete a swap_indexe with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingSwap_indexe(id) {
  svc.delete("/swap_indexes/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a swap_indexe with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingSwap_indexe(id) {
  svc.post("/swap_indexes", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a swap_indexe with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a swap_indexe with " + "id " + id }
  });
}

// UPDATE
function updateSwap_indexe(id) {
  svc.put("/swap_indexes/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a swap_indexe with " + "id " + id }
    });
}

// GET one
function getSwap_indexe(id) {
  svc.get("/swap_indexes/" + id, {
    parameters: { description: "Get a swap_indexe with " + "id " + id }
  });
}

// LIST all
function listSwap_indexes() {
  svc.get("/swap_indexes", {
    parameters: { description: "List swap_indexes" }
  });
}

// Verify exists (by list)
function verifySwap_indexeExists(id) {
  svc.get("/swap_indexes", {
    callback: function (response) {
      swap_indexe = JSON.parse(response.body);
      for (let i = 0; i < swap_indexe.length; i++) {
        if (swap_indexe[i].id === id) {
          return pvg.success("Swap_indexe exists");
        }
      }
      return pvg.fail("Expected a swap_indexe to exist but it does not");
    },
    parameters: { description: "Verify swap_indexe with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifySwap_indexeDoesNotExist(id) {
  svc.get("/swap_indexes", {
    callback: function (response) {
      swap_indexe = JSON.parse(response.body);
      for (let i = 0; i < swap_indexe.length; i++) {
        if (swap_indexe[i].id === id) {
          return pvg.fail("Expected a swap_indexe to not exist but it does");
        }
      }
      return pvg.success("Swap_indexe does not exist");
    },
    parameters: { description: "Verify swap_indexe with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddSwap_indexe() {
  return bp.EventSet("any-add-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a swap_indexe");
  });
}
function matchAddSwap_indexe(id) {
  return bp.EventSet("add-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a swap_indexe with " + "id " + id;
  });
}
function matchAnyDeleteSwap_indexe() {
  return bp.EventSet("any-del-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a swap_indexe");
  });
}
function matchDeleteSwap_indexe(id) {
  return bp.EventSet("del-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a swap_indexe with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateSwap_indexe() {
  return bp.EventSet("any-update-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a swap_indexe");
  });
}
function matchUpdateSwap_indexe(id) {
  return bp.EventSet("update-swap_indexe", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a swap_indexe with " + "id " + id;
  });
}

// Wait helpers
function waitForAnySwap_indexeAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ swap_indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ swap_indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSwap_indexeAdded(id) {
  waitFor(matchAddSwap_indexe(id));
}
function waitForSwap_indexeDeleted(id) {
  waitFor(matchDeleteSwap_indexe(id));
}
function waitForAnySwap_indexeDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ swap_indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ swap_indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForSwap_indexeUpdated(id) {
  waitFor(matchUpdateSwap_indexe(id));
}
function waitForAnySwap_indexeUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ swap_indexe\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ swap_indexe\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifySwap_indexeUpdated(id) {
  svc.get("/swap_indexes", {
    callback: function (response) {
      swap_indexe = JSON.parse(response.body);
      for (let i = 0; i < swap_indexe.length; i++) {
        if (swap_indexe[i].id === id) {
          return pvg.success("Swap_indexe updated (present)");
        }
      }
      return pvg.fail("Expected a swap_indexe to be present after update, but it is not");
    },
    parameters: { description: "Verify swap_indexe with " + "id " + id + " exists" }
  });
}


/** === Task Operations === */

// CREATE
function addTask(id) {
  svc.post("/tasks", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a task with " + "id " + id }
    });
}

// DELETE
function deleteTask(id) {
  svc.delete("/tasks/" + id, {
    parameters: { description: "Delete a task with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingTask(id) {
  svc.delete("/tasks/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a task with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingTask(id) {
  svc.post("/tasks", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a task with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a task with " + "id " + id }
  });
}

// UPDATE
function updateTask(id) {
  svc.put("/tasks/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a task with " + "id " + id }
    });
}

// GET one
function getTask(id) {
  svc.get("/tasks/" + id, {
    parameters: { description: "Get a task with " + "id " + id }
  });
}

// LIST all
function listTasks() {
  svc.get("/tasks", {
    parameters: { description: "List tasks" }
  });
}

// Verify exists (by list)
function verifyTaskExists(id) {
  svc.get("/tasks", {
    callback: function (response) {
      task = JSON.parse(response.body);
      for (let i = 0; i < task.length; i++) {
        if (task[i].id === id) {
          return pvg.success("Task exists");
        }
      }
      return pvg.fail("Expected a task to exist but it does not");
    },
    parameters: { description: "Verify task with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyTaskDoesNotExist(id) {
  svc.get("/tasks", {
    callback: function (response) {
      task = JSON.parse(response.body);
      for (let i = 0; i < task.length; i++) {
        if (task[i].id === id) {
          return pvg.fail("Expected a task to not exist but it does");
        }
      }
      return pvg.success("Task does not exist");
    },
    parameters: { description: "Verify task with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddTask() {
  return bp.EventSet("any-add-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a task");
  });
}
function matchAddTask(id) {
  return bp.EventSet("add-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a task with " + "id " + id;
  });
}
function matchAnyDeleteTask() {
  return bp.EventSet("any-del-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a task");
  });
}
function matchDeleteTask(id) {
  return bp.EventSet("del-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a task with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateTask() {
  return bp.EventSet("any-update-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a task");
  });
}
function matchUpdateTask(id) {
  return bp.EventSet("update-task", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a task with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyTaskAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ task\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ task\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTaskAdded(id) {
  waitFor(matchAddTask(id));
}
function waitForTaskDeleted(id) {
  waitFor(matchDeleteTask(id));
}
function waitForAnyTaskDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ task\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ task\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForTaskUpdated(id) {
  waitFor(matchUpdateTask(id));
}
function waitForAnyTaskUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ task\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ task\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyTaskUpdated(id) {
  svc.get("/tasks", {
    callback: function (response) {
      task = JSON.parse(response.body);
      for (let i = 0; i < task.length; i++) {
        if (task[i].id === id) {
          return pvg.success("Task updated (present)");
        }
      }
      return pvg.fail("Expected a task to be present after update, but it is not");
    },
    parameters: { description: "Verify task with " + "id " + id + " exists" }
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

