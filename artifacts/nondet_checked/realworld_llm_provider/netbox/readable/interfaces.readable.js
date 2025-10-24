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

/** === Api Operations === */

// CREATE
function addApi(id, name) {
  svc.post("/api", {
      body: JSON.stringify({ id: id, name: name }),
      parameters: { description: "Add a api with " + "id " + id + " and " + "name " + name }
    });
}

// DELETE
function deleteApi(id, name) {
  svc.delete("/api/" + id + "/"+ name, {
    parameters: { description: "Delete a api with " + "id " + id + " and " + "name " + name }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingApi(id, name) {
  svc.delete("/api/" + id + "/"+ name, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a api with " + "id " + id + " and " + "name " + name }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingApi(id, name) {
  svc.post("/api", {
      body: JSON.stringify({ id: id, name: name }),
      parameters: { description: "Add a api with " + "id " + id + " and " + "name " + name }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a api with " + "id " + id + " and " + "name " + name }
  });
}

// UPDATE
function updateApi(id, name) {
  svc.put("/api/" + id + "/"+ name, {
      body: JSON.stringify({ id: id, name: name }),
      parameters: { description: "Update a api with " + "id " + id + " and " + "name " + name }
    });
}

// GET one
function getApi(id, name) {
  svc.get("/api/" + id + "/"+ name, {
    parameters: { description: "Get a api with " + "id " + id + " and " + "name " + name }
  });
}

// LIST all
function listApi() {
  svc.get("/api", {
    parameters: { description: "List api" }
  });
}

// Verify exists (by list)
function verifyApiExists(id, name) {
  svc.get("/api", {
    callback: function (response) {
      api = JSON.parse(response.body);
      for (let i = 0; i < api.length; i++) {
        if (api[i].id === id && api[i].name === name) {
          return pvg.success("Api exists");
        }
      }
      return pvg.fail("Expected a api to exist but it does not");
    },
    parameters: { description: "Verify api with " + "id " + id + " and " + "name " + name + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyApiDoesNotExist(id, name) {
  svc.get("/api", {
    callback: function (response) {
      api = JSON.parse(response.body);
      for (let i = 0; i < api.length; i++) {
        if (api[i].id === id && api[i].name === name) {
          return pvg.fail("Expected a api to not exist but it does");
        }
      }
      return pvg.success("Api does not exist");
    },
    parameters: { description: "Verify api with " + "id " + id + " and " + "name " + name + " does not exist" }
  });
}

// Match helpers
function matchAnyAddApi() {
  return bp.EventSet("any-add-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a api");
  });
}
function matchAddApi(id, name) {
  return bp.EventSet("add-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a api with " + "id " + id + " and " + "name " + name;
  });
}
function matchAnyDeleteApi() {
  return bp.EventSet("any-del-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a api");
  });
}
function matchDeleteApi(id, name) {
  return bp.EventSet("del-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a api with " + "id " + id + " and " + "name " + name;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateApi() {
  return bp.EventSet("any-update-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a api");
  });
}
function matchUpdateApi(id, name) {
  return bp.EventSet("update-api", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a api with " + "id " + id + " and " + "name " + name;
  });
}

// Wait helpers
function waitForAnyApiAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ api\ with\ id\ (.+) and name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ api\ with\ id\ (.+) and name\ (.+)$/);
    return { id: parseInt(m[1]), name: m[2] };
}
function waitForApiAdded(id, name) {
  waitFor(matchAddApi(id, name));
}
function waitForApiDeleted(id, name) {
  waitFor(matchDeleteApi(id, name));
}
function waitForAnyApiDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ api\ with\ id\ (.+) and name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ api\ with\ id\ (.+) and name\ (.+)$/);
    return { id: parseInt(m[1]), name: m[2] };
}
function waitForApiUpdated(id, name) {
  waitFor(matchUpdateApi(id, name));
}
function waitForAnyApiUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ api\ with\ id\ (.+) and name\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ api\ with\ id\ (.+) and name\ (.+)$/);
    return { id: parseInt(m[1]), name: m[2] };
}

// Verify updated (presence-by-list)
function verifyApiUpdated(id, name) {
  svc.get("/api", {
    callback: function (response) {
      api = JSON.parse(response.body);
      for (let i = 0; i < api.length; i++) {
        if (api[i].id === id && api[i].name === name) {
          return pvg.success("Api updated (present)");
        }
      }
      return pvg.fail("Expected a api to be present after update, but it is not");
    },
    parameters: { description: "Verify api with " + "id " + id + " and " + "name " + name + " exists" }
  });
}

