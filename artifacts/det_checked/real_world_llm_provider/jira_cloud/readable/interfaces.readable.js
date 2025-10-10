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

/** === Rest Operations === */

// CREATE
function addRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.post("/rest", {
      body: JSON.stringify({ issueIdOrKey: issueIdOrKey, projectIdOrKey: projectIdOrKey, propertyKey: propertyKey, fieldId: fieldId }),
      parameters: { description: "Add a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "" }
    });
}

// DELETE
function deleteRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.delete("/rest/" + issueIdOrKey + "/"+ projectIdOrKey + "/"+ propertyKey + "/"+ fieldId, {
    parameters: { description: "Delete a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.delete("/rest/" + issueIdOrKey + "/"+ projectIdOrKey + "/"+ propertyKey + "/"+ fieldId, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.post("/rest", {
      body: JSON.stringify({ issueIdOrKey: issueIdOrKey, projectIdOrKey: projectIdOrKey, propertyKey: propertyKey, fieldId: fieldId }),
      parameters: { description: "Add a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.put("/rest/" + issueIdOrKey + "/"+ projectIdOrKey + "/"+ propertyKey + "/"+ fieldId, {
      body: JSON.stringify({ issueIdOrKey: issueIdOrKey, projectIdOrKey: projectIdOrKey, propertyKey: propertyKey, fieldId: fieldId }),
      parameters: { description: "Update a rest" }
    });
}

// GET one
function getRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.get("/rest/" + issueIdOrKey + "/"+ projectIdOrKey + "/"+ propertyKey + "/"+ fieldId, {
    parameters: { description: "Get a rest" }
  });
}

// LIST all
function listRest() {
  svc.get("/rest", {
    parameters: { description: "List rest" }
  });
}

// Verify exists (by list)
function verifyRestExists(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.get("/rest", {
    callback: function (response) {
      rest = JSON.parse(response.body);
      for (let i = 0; i < rest.length; i++) {
        if (rest[i].issueIdOrKey === issueIdOrKey && rest[i].projectIdOrKey === projectIdOrKey && rest[i].propertyKey === propertyKey && rest[i].fieldId === fieldId) {
          return pvg.success("Rest exists");
        }
      }
      return pvg.fail("Expected a rest to exist but it does not");
    },
    parameters: { description: "Verify rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRestDoesNotExist(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  svc.get("/rest", {
    callback: function (response) {
      rest = JSON.parse(response.body);
      for (let i = 0; i < rest.length; i++) {
        if (rest[i].issueIdOrKey === issueIdOrKey && rest[i].projectIdOrKey === projectIdOrKey && rest[i].propertyKey === propertyKey && rest[i].fieldId === fieldId) {
          return pvg.fail("Expected a rest to not exist but it does");
        }
      }
      return pvg.success("Rest does not exist");
    },
    parameters: { description: "Verify rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRest() {
  return bp.EventSet("any-add-rest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a rest");
  });
}
function matchAddRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  return bp.EventSet("add-rest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "";
  });
}
function matchAnyDeleteRest() {
  return bp.EventSet("any-del-rest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a rest");
  });
}
function matchDeleteRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  return bp.EventSet("del-rest", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a rest with issueIdOrKey " + issueIdOrKey + " and projectIdOrKey " + projectIdOrKey + " and propertyKey " + propertyKey + " and fieldId " + fieldId + "";
  });
}

// Wait helpers
function waitForAnyRestAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ rest\ with\ issueIdOrKey\ (.+) and projectIdOrKey\ (.+) and propertyKey\ (.+) and fieldId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ rest\ with\ issueIdOrKey\ (.+) and projectIdOrKey\ (.+) and propertyKey\ (.+) and fieldId\ (.+)$/);
    return { issueIdOrKey: (x)=>x(m[1]), projectIdOrKey: (x)=>x(m[2]), propertyKey: (x)=>x(m[3]), fieldId: (x)=>x(m[4]) };
}
function waitForRestAdded(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  waitFor(matchAddRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId));
}
function waitForRestDeleted(issueIdOrKey, projectIdOrKey, propertyKey, fieldId) {
  waitFor(matchDeleteRest(issueIdOrKey, projectIdOrKey, propertyKey, fieldId));
}
function waitForAnyRestDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ rest\ with\ issueIdOrKey\ (.+) and projectIdOrKey\ (.+) and propertyKey\ (.+) and fieldId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ rest\ with\ issueIdOrKey\ (.+) and projectIdOrKey\ (.+) and propertyKey\ (.+) and fieldId\ (.+)$/);
    return { issueIdOrKey: (x)=>x(m[1]), projectIdOrKey: (x)=>x(m[2]), propertyKey: (x)=>x(m[3]), fieldId: (x)=>x(m[4]) };
}

