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

/** === Myrealm Operations === */

// CREATE
function addMyrealm(id) {
  svc.post("/myrealm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a myrealm with id " + id + "" }
    });
}

// DELETE
function deleteMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    parameters: { description: "Delete a myrealm with id " + id + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a myrealm with id " + id + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMyrealm(id) {
  svc.post("/myrealm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a myrealm with id " + id + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a myrealm with id " + id + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateMyrealm(id) {
  svc.put("/myrealm/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a myrealm" }
    });
}

// GET one
function getMyrealm(id) {
  svc.get("/myrealm/" + id, {
    parameters: { description: "Get a myrealm" }
  });
}

// LIST all
function listMyrealm() {
  svc.get("/myrealm", {
    parameters: { description: "List myrealm" }
  });
}

// Verify exists (by list)
function verifyMyrealmExists(id) {
  svc.get("/myrealm", {
    callback: function (response) {
      myrealm = JSON.parse(response.body);
      for (let i = 0; i < myrealm.length; i++) {
        if (myrealm[i].id === id) {
          return pvg.success("Myrealm exists");
        }
      }
      return pvg.fail("Expected a myrealm to exist but it does not");
    },
    parameters: { description: "Verify myrealm with id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyMyrealmDoesNotExist(id) {
  svc.get("/myrealm", {
    callback: function (response) {
      myrealm = JSON.parse(response.body);
      for (let i = 0; i < myrealm.length; i++) {
        if (myrealm[i].id === id) {
          return pvg.fail("Expected a myrealm to not exist but it does");
        }
      }
      return pvg.success("Myrealm does not exist");
    },
    parameters: { description: "Verify myrealm with id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddMyrealm() {
  return bp.EventSet("any-add-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a myrealm");
  });
}
function matchAddMyrealm(id) {
  return bp.EventSet("add-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a myrealm with id " + id + "";
  });
}
function matchAnyDeleteMyrealm() {
  return bp.EventSet("any-del-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a myrealm");
  });
}
function matchDeleteMyrealm(id) {
  return bp.EventSet("del-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a myrealm with id " + id + "";
  });
}

// Wait helpers
function waitForAnyMyrealmAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ myrealm\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ myrealm\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForMyrealmAdded(id) {
  waitFor(matchAddMyrealm(id));
}
function waitForMyrealmDeleted(id) {
  waitFor(matchDeleteMyrealm(id));
}
function waitForAnyMyrealmDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ myrealm\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ myrealm\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}


/** === V1 Operations === */

// CREATE
function addV1(realm, userId, session) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, userId: userId, session: session }),
      parameters: { description: "Add a v1 with realm " + realm + " and userId " + userId + " and session " + session + "" }
    });
}

// DELETE
function deleteV1(realm, userId, session) {
  svc.delete("/v1/" + realm + "/"+ userId + "/"+ session, {
    parameters: { description: "Delete a v1 with realm " + realm + " and userId " + userId + " and session " + session + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(realm, userId, session) {
  svc.delete("/v1/" + realm + "/"+ userId + "/"+ session, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with realm " + realm + " and userId " + userId + " and session " + session + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(realm, userId, session) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, userId: userId, session: session }),
      parameters: { description: "Add a v1 with realm " + realm + " and userId " + userId + " and session " + session + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with realm " + realm + " and userId " + userId + " and session " + session + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(realm, userId, session) {
  svc.put("/v1/" + realm + "/"+ userId + "/"+ session, {
      body: JSON.stringify({ realm: realm, userId: userId, session: session }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(realm, userId, session) {
  svc.get("/v1/" + realm + "/"+ userId + "/"+ session, {
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
function verifyV1Exists(realm, userId, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].userId === userId && v1[i].session === session) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with realm " + realm + " and userId " + userId + " and session " + session + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(realm, userId, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].userId === userId && v1[i].session === session) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with realm " + realm + " and userId " + userId + " and session " + session + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(realm, userId, session) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with realm " + realm + " and userId " + userId + " and session " + session + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(realm, userId, session) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with realm " + realm + " and userId " + userId + " and session " + session + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/);
    return { realm: (x)=>x(m[1]), userId: (x)=>x(m[2]), session: (x)=>x(m[3]) };
}
function waitForV1Added(realm, userId, session) {
  waitFor(matchAddV1(realm, userId, session));
}
function waitForV1Deleted(realm, userId, session) {
  waitFor(matchDeleteV1(realm, userId, session));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/);
    return { realm: (x)=>x(m[1]), userId: (x)=>x(m[2]), session: (x)=>x(m[3]) };
}


/** === {realm} Operations === */

// CREATE
function add{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, role-id: role-id, id: id, executionId: executionId, flowAlias: flowAlias, alias: alias, providerId: providerId, clientUuid: clientUuid }),
      parameters: { description: "Add a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "" }
    });
}

// DELETE
function delete{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.delete("/{realm}/" + realm + "/"+ role-id + "/"+ id + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ providerId + "/"+ clientUuid, {
    parameters: { description: "Delete a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExisting{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.delete("/{realm}/" + realm + "/"+ role-id + "/"+ id + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ providerId + "/"+ clientUuid, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExisting{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, role-id: role-id, id: id, executionId: executionId, flowAlias: flowAlias, alias: alias, providerId: providerId, clientUuid: clientUuid }),
      parameters: { description: "Add a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function update{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.put("/{realm}/" + realm + "/"+ role-id + "/"+ id + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ providerId + "/"+ clientUuid, {
      body: JSON.stringify({ realm: realm, role-id: role-id, id: id, executionId: executionId, flowAlias: flowAlias, alias: alias, providerId: providerId, clientUuid: clientUuid }),
      parameters: { description: "Update a {realm}" }
    });
}

// GET one
function get{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.get("/{realm}/" + realm + "/"+ role-id + "/"+ id + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ providerId + "/"+ clientUuid, {
    parameters: { description: "Get a {realm}" }
  });
}

// LIST all
function list{realm}() {
  svc.get("/{realm}", {
    parameters: { description: "List {realm}" }
  });
}

// Verify exists (by list)
function verify{realm}Exists(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].role-id === role-id && {realm}[i].id === id && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].alias === alias && {realm}[i].providerId === providerId && {realm}[i].clientUuid === clientUuid) {
          return pvg.success("{realm} exists");
        }
      }
      return pvg.fail("Expected a {realm} to exist but it does not");
    },
    parameters: { description: "Verify {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify{realm}DoesNotExist(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].role-id === role-id && {realm}[i].id === id && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].alias === alias && {realm}[i].providerId === providerId && {realm}[i].clientUuid === clientUuid) {
          return pvg.fail("Expected a {realm} to not exist but it does");
        }
      }
      return pvg.success("{realm} does not exist");
    },
    parameters: { description: "Verify {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd{realm}() {
  return bp.EventSet("any-add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {realm}");
  });
}
function matchAdd{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  return bp.EventSet("add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "";
  });
}
function matchAnyDelete{realm}() {
  return bp.EventSet("any-del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {realm}");
  });
}
function matchDelete{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  return bp.EventSet("del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a {realm} with realm " + realm + " and role-id " + role-id + " and id " + id + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and providerId " + providerId + " and clientUuid " + clientUuid + "";
  });
}

// Wait helpers
function waitForAny{realm}Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and role\-id\ (.+) and id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and providerId\ (.+) and clientUuid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and role\-id\ (.+) and id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and providerId\ (.+) and clientUuid\ (.+)$/);
    return { realm: (x)=>x(m[1]), role-id: (x)=>x(m[2]), id: parseInt(m[3]), executionId: (x)=>x(m[4]), flowAlias: (x)=>x(m[5]), alias: (x)=>x(m[6]), providerId: (x)=>x(m[7]), clientUuid: (x)=>x(m[8]) };
}
function waitFor{realm}Added(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  waitFor(matchAdd{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid));
}
function waitFor{realm}Deleted(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid) {
  waitFor(matchDelete{realm}(realm, role-id, id, executionId, flowAlias, alias, providerId, clientUuid));
}
function waitForAny{realm}Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and role\-id\ (.+) and id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and providerId\ (.+) and clientUuid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and role\-id\ (.+) and id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and providerId\ (.+) and clientUuid\ (.+)$/);
    return { realm: (x)=>x(m[1]), role-id: (x)=>x(m[2]), id: parseInt(m[3]), executionId: (x)=>x(m[4]), flowAlias: (x)=>x(m[5]), alias: (x)=>x(m[6]), providerId: (x)=>x(m[7]), clientUuid: (x)=>x(m[8]) };
}

