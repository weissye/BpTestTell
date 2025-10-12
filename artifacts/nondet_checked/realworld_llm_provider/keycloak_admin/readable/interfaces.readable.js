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
function addV1(realm, id, id1, id2, protocol) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, id: id, id1: id1, id2: id2, protocol: protocol }),
      parameters: { description: "Add a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "" }
    });
}

// DELETE
function deleteV1(realm, id, id1, id2, protocol) {
  svc.delete("/v1/" + realm + "/"+ id + "/"+ id1 + "/"+ id2 + "/"+ protocol, {
    parameters: { description: "Delete a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(realm, id, id1, id2, protocol) {
  svc.delete("/v1/" + realm + "/"+ id + "/"+ id1 + "/"+ id2 + "/"+ protocol, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(realm, id, id1, id2, protocol) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, id: id, id1: id1, id2: id2, protocol: protocol }),
      parameters: { description: "Add a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function updateV1(realm, id, id1, id2, protocol) {
  svc.put("/v1/" + realm + "/"+ id + "/"+ id1 + "/"+ id2 + "/"+ protocol, {
      body: JSON.stringify({ realm: realm, id: id, id1: id1, id2: id2, protocol: protocol }),
      parameters: { description: "Update a v1" }
    });
}

// GET one
function getV1(realm, id, id1, id2, protocol) {
  svc.get("/v1/" + realm + "/"+ id + "/"+ id1 + "/"+ id2 + "/"+ protocol, {
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
function verifyV1Exists(realm, id, id1, id2, protocol) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].id === id && v1[i].id1 === id1 && v1[i].id2 === id2 && v1[i].protocol === protocol) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(realm, id, id1, id2, protocol) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].id === id && v1[i].id1 === id1 && v1[i].id2 === id2 && v1[i].protocol === protocol) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(realm, id, id1, id2, protocol) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "";
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(realm, id, id1, id2, protocol) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with realm " + realm + " and id " + id + " and id1 " + id1 + " and id2 " + id2 + " and protocol " + protocol + "";
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ realm\ (.+) and id\ (.+) and id1\ (.+) and id2\ (.+) and protocol\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ realm\ (.+) and id\ (.+) and id1\ (.+) and id2\ (.+) and protocol\ (.+)$/);
    return { realm: (x)=>x(m[1]), id: parseInt(m[2]), id1: (x)=>x(m[3]), id2: (x)=>x(m[4]), protocol: (x)=>x(m[5]) };
}
function waitForV1Added(realm, id, id1, id2, protocol) {
  waitFor(matchAddV1(realm, id, id1, id2, protocol));
}
function waitForV1Deleted(realm, id, id1, id2, protocol) {
  waitFor(matchDeleteV1(realm, id, id1, id2, protocol));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ realm\ (.+) and id\ (.+) and id1\ (.+) and id2\ (.+) and protocol\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ realm\ (.+) and id\ (.+) and id1\ (.+) and id2\ (.+) and protocol\ (.+)$/);
    return { realm: (x)=>x(m[1]), id: parseInt(m[2]), id1: (x)=>x(m[3]), id2: (x)=>x(m[4]), protocol: (x)=>x(m[5]) };
}


/** === {realm} Operations === */

// CREATE
function add{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, id: id, client: client, executionId: executionId, flowAlias: flowAlias, alias: alias, clientScopeId: clientScopeId, providerId: providerId, roleContainerId: roleContainerId, node: node }),
      parameters: { description: "Add a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "" }
    });
}

// DELETE
function delete{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ clientScopeId + "/"+ providerId + "/"+ roleContainerId + "/"+ node, {
    parameters: { description: "Delete a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "" }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExisting{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ clientScopeId + "/"+ providerId + "/"+ roleContainerId + "/"+ node, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "" }
  });
}

// Negative: add existing (400/409)
function tryToAddExisting{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, id: id, client: client, executionId: executionId, flowAlias: flowAlias, alias: alias, clientScopeId: clientScopeId, providerId: providerId, roleContainerId: roleContainerId, node: node }),
      parameters: { description: "Add a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "" }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "" }
  });
}

// UPDATE (if your SUT supports it; path heuristic)
function update{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.put("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ clientScopeId + "/"+ providerId + "/"+ roleContainerId + "/"+ node, {
      body: JSON.stringify({ realm: realm, id: id, client: client, executionId: executionId, flowAlias: flowAlias, alias: alias, clientScopeId: clientScopeId, providerId: providerId, roleContainerId: roleContainerId, node: node }),
      parameters: { description: "Update a {realm}" }
    });
}

// GET one
function get{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.get("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ executionId + "/"+ flowAlias + "/"+ alias + "/"+ clientScopeId + "/"+ providerId + "/"+ roleContainerId + "/"+ node, {
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
function verify{realm}Exists(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].client === client && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].alias === alias && {realm}[i].clientScopeId === clientScopeId && {realm}[i].providerId === providerId && {realm}[i].roleContainerId === roleContainerId && {realm}[i].node === node) {
          return pvg.success("{realm} exists");
        }
      }
      return pvg.fail("Expected a {realm} to exist but it does not");
    },
    parameters: { description: "Verify {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + " exists" }
  });
}

// Verify NOT exists (by list)
function verify{realm}DoesNotExist(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].client === client && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].alias === alias && {realm}[i].clientScopeId === clientScopeId && {realm}[i].providerId === providerId && {realm}[i].roleContainerId === roleContainerId && {realm}[i].node === node) {
          return pvg.fail("Expected a {realm} to not exist but it does");
        }
      }
      return pvg.success("{realm} does not exist");
    },
    parameters: { description: "Verify {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd{realm}() {
  return bp.EventSet("any-add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {realm}");
  });
}
function matchAdd{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  return bp.EventSet("add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "";
  });
}
function matchAnyDelete{realm}() {
  return bp.EventSet("any-del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {realm}");
  });
}
function matchDelete{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  return bp.EventSet("del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a {realm} with realm " + realm + " and id " + id + " and client " + client + " and executionId " + executionId + " and flowAlias " + flowAlias + " and alias " + alias + " and clientScopeId " + clientScopeId + " and providerId " + providerId + " and roleContainerId " + roleContainerId + " and node " + node + "";
  });
}

// Wait helpers
function waitForAny{realm}Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and clientScopeId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and node\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and clientScopeId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and node\ (.+)$/);
    return { realm: (x)=>x(m[1]), id: parseInt(m[2]), client: (x)=>x(m[3]), executionId: (x)=>x(m[4]), flowAlias: (x)=>x(m[5]), alias: (x)=>x(m[6]), clientScopeId: (x)=>x(m[7]), providerId: (x)=>x(m[8]), roleContainerId: (x)=>x(m[9]), node: (x)=>x(m[10]) };
}
function waitFor{realm}Added(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  waitFor(matchAdd{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node));
}
function waitFor{realm}Deleted(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node) {
  waitFor(matchDelete{realm}(realm, id, client, executionId, flowAlias, alias, clientScopeId, providerId, roleContainerId, node));
}
function waitForAny{realm}Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and clientScopeId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and node\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and executionId\ (.+) and flowAlias\ (.+) and alias\ (.+) and clientScopeId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and node\ (.+)$/);
    return { realm: (x)=>x(m[1]), id: parseInt(m[2]), client: (x)=>x(m[3]), executionId: (x)=>x(m[4]), flowAlias: (x)=>x(m[5]), alias: (x)=>x(m[6]), clientScopeId: (x)=>x(m[7]), providerId: (x)=>x(m[8]), roleContainerId: (x)=>x(m[9]), node: (x)=>x(m[10]) };
}

