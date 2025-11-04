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

/** === Myrealm Operations === */

// CREATE
function addMyrealm(id) {
  svc.post("/myrealm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a myrealm with " + "id " + id }
    });
}

// DELETE
function deleteMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    parameters: { description: "Delete a myrealm with " + "id " + id }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a myrealm with " + "id " + id }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingMyrealm(id) {
  svc.post("/myrealm", {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Add a myrealm with " + "id " + id }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a myrealm with " + "id " + id }
  });
}

// UPDATE
function updateMyrealm(id) {
  svc.put("/myrealm/" + id, {
      body: JSON.stringify({ id: id }),
      parameters: { description: "Update a myrealm with " + "id " + id }
    });
}

// GET one
function getMyrealm(id) {
  svc.get("/myrealm/" + id, {
    parameters: { description: "Get a myrealm with " + "id " + id }
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
    parameters: { description: "Verify myrealm with " + "id " + id + " exists" }
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
    parameters: { description: "Verify myrealm with " + "id " + id + " does not exist" }
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
    return e.data.parameters.description === "Add a myrealm with " + "id " + id;
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
    return e.data.parameters.description === "Delete a myrealm with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateMyrealm() {
  return bp.EventSet("any-update-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a myrealm");
  });
}
function matchUpdateMyrealm(id) {
  return bp.EventSet("update-myrealm", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a myrealm with " + "id " + id;
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
function waitForMyrealmUpdated(id) {
  waitFor(matchUpdateMyrealm(id));
}
function waitForAnyMyrealmUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ myrealm\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ myrealm\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyMyrealmUpdated(id) {
  svc.get("/myrealm", {
    callback: function (response) {
      myrealm = JSON.parse(response.body);
      for (let i = 0; i < myrealm.length; i++) {
        if (myrealm[i].id === id) {
          return pvg.success("Myrealm updated (present)");
        }
      }
      return pvg.fail("Expected a myrealm to be present after update, but it is not");
    },
    parameters: { description: "Verify myrealm with " + "id " + id + " exists" }
  });
}


/** === V1 Operations === */

// CREATE
function addV1(realm, session) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, session: session }),
      parameters: { description: "Add a v1 with " + "realm " + realm + " and " + "session " + session }
    });
}

// DELETE
function deleteV1(realm, session) {
  svc.delete("/v1/" + realm + "/"+ session, {
    parameters: { description: "Delete a v1 with " + "realm " + realm + " and " + "session " + session }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExistingV1(realm, session) {
  svc.delete("/v1/" + realm + "/"+ session, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a v1 with " + "realm " + realm + " and " + "session " + session }
  });
}

// Negative: add existing (400/409)
function tryToAddExistingV1(realm, session) {
  svc.post("/v1", {
      body: JSON.stringify({ realm: realm, session: session }),
      parameters: { description: "Add a v1 with " + "realm " + realm + " and " + "session " + session }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a v1 with " + "realm " + realm + " and " + "session " + session }
  });
}

// UPDATE
function updateV1(realm, session) {
  svc.put("/v1/" + realm + "/"+ session, {
      body: JSON.stringify({ realm: realm, session: session }),
      parameters: { description: "Update a v1 with " + "realm " + realm + " and " + "session " + session }
    });
}

// GET one
function getV1(realm, session) {
  svc.get("/v1/" + realm + "/"+ session, {
    parameters: { description: "Get a v1 with " + "realm " + realm + " and " + "session " + session }
  });
}

// LIST all
function listV1() {
  svc.get("/v1", {
    parameters: { description: "List v1" }
  });
}

// Verify exists (by list)
function verifyV1Exists(realm, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].session === session) {
          return pvg.success("V1 exists");
        }
      }
      return pvg.fail("Expected a v1 to exist but it does not");
    },
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "session " + session + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyV1DoesNotExist(realm, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].session === session) {
          return pvg.fail("Expected a v1 to not exist but it does");
        }
      }
      return pvg.success("V1 does not exist");
    },
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "session " + session + " does not exist" }
  });
}

// Match helpers
function matchAnyAddV1() {
  return bp.EventSet("any-add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a v1");
  });
}
function matchAddV1(realm, session) {
  return bp.EventSet("add-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a v1 with " + "realm " + realm + " and " + "session " + session;
  });
}
function matchAnyDeleteV1() {
  return bp.EventSet("any-del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a v1");
  });
}
function matchDeleteV1(realm, session) {
  return bp.EventSet("del-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a v1 with " + "realm " + realm + " and " + "session " + session;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateV1() {
  return bp.EventSet("any-update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a v1");
  });
}
function matchUpdateV1(realm, session) {
  return bp.EventSet("update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a v1 with " + "realm " + realm + " and " + "session " + session;
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/);
    return { realm: m[1], session: m[2] };
}
function waitForV1Added(realm, session) {
  waitFor(matchAddV1(realm, session));
}
function waitForV1Deleted(realm, session) {
  waitFor(matchDeleteV1(realm, session));
}
function waitForAnyV1Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/);
    return { realm: m[1], session: m[2] };
}
function waitForV1Updated(realm, session) {
  waitFor(matchUpdateV1(realm, session));
}
function waitForAnyV1Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ v1\ with\ realm\ (.+) and session\ (.+)$/);
    return { realm: m[1], session: m[2] };
}

// Verify updated (presence-by-list)
function verifyV1Updated(realm, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].session === session) {
          return pvg.success("V1 updated (present)");
        }
      }
      return pvg.fail("Expected a v1 to be present after update, but it is not");
    },
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "session " + session + " exists" }
  });
}


/** === {realm} Operations === */

// CREATE
function add{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, id: id, alias: alias, client: client, role-id: role-id, executionId: executionId, flowAlias: flowAlias, providerId: providerId, provider_id: provider_id, clientUuid: clientUuid }),
      parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
    });
}

// DELETE
function delete{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ alias + "/"+ client + "/"+ role-id + "/"+ executionId + "/"+ flowAlias + "/"+ providerId + "/"+ provider_id + "/"+ clientUuid, {
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
  });
}

// Negative: delete non-existing (404/401)
function tryToDeleteANonExisting{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ alias + "/"+ client + "/"+ role-id + "/"+ executionId + "/"+ flowAlias + "/"+ providerId + "/"+ provider_id + "/"+ clientUuid, {
    expectedResponseCodes: [404, 401],
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
  });
}

// Negative: add existing (400/409)
function tryToAddExisting{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.post("/{realm}", {
      body: JSON.stringify({ realm: realm, id: id, alias: alias, client: client, role-id: role-id, executionId: executionId, flowAlias: flowAlias, providerId: providerId, provider_id: provider_id, clientUuid: clientUuid }),
      parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
    , 
    expectedResponseCodes: [400, 409],
    parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
  });
}

// UPDATE
function update{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.put("/{realm}/" + realm + "/"+ id + "/"+ alias + "/"+ client + "/"+ role-id + "/"+ executionId + "/"+ flowAlias + "/"+ providerId + "/"+ provider_id + "/"+ clientUuid, {
      body: JSON.stringify({ realm: realm, id: id, alias: alias, client: client, role-id: role-id, executionId: executionId, flowAlias: flowAlias, providerId: providerId, provider_id: provider_id, clientUuid: clientUuid }),
      parameters: { description: "Update a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
    });
}

// GET one
function get{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.get("/{realm}/" + realm + "/"+ id + "/"+ alias + "/"+ client + "/"+ role-id + "/"+ executionId + "/"+ flowAlias + "/"+ providerId + "/"+ provider_id + "/"+ clientUuid, {
    parameters: { description: "Get a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid }
  });
}

// LIST all
function list{realm}() {
  svc.get("/{realm}", {
    parameters: { description: "List {realm}" }
  });
}

// Verify exists (by list)
function verify{realm}Exists(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].alias === alias && {realm}[i].client === client && {realm}[i].role-id === role-id && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].providerId === providerId && {realm}[i].provider_id === provider_id && {realm}[i].clientUuid === clientUuid) {
          return pvg.success("{realm} exists");
        }
      }
      return pvg.fail("Expected a {realm} to exist but it does not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid + " exists" }
  });
}

// Verify NOT exists (by list)
function verify{realm}DoesNotExist(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].alias === alias && {realm}[i].client === client && {realm}[i].role-id === role-id && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].providerId === providerId && {realm}[i].provider_id === provider_id && {realm}[i].clientUuid === clientUuid) {
          return pvg.fail("Expected a {realm} to not exist but it does");
        }
      }
      return pvg.success("{realm} does not exist");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd{realm}() {
  return bp.EventSet("any-add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {realm}");
  });
}
function matchAdd{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  return bp.EventSet("add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid;
  });
}
function matchAnyDelete{realm}() {
  return bp.EventSet("any-del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {realm}");
  });
}
function matchDelete{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  return bp.EventSet("del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate{realm}() {
  return bp.EventSet("any-update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a {realm}");
  });
}
function matchUpdate{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  return bp.EventSet("update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid;
  });
}

// Wait helpers
function waitForAny{realm}Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), alias: m[3], client: m[4], role-id: m[5], executionId: m[6], flowAlias: m[7], providerId: m[8], provider_id: parseInt(m[9]), clientUuid: m[10] };
}
function waitFor{realm}Added(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  waitFor(matchAdd{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid));
}
function waitFor{realm}Deleted(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  waitFor(matchDelete{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid));
}
function waitForAny{realm}Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), alias: m[3], client: m[4], role-id: m[5], executionId: m[6], flowAlias: m[7], providerId: m[8], provider_id: parseInt(m[9]), clientUuid: m[10] };
}
function waitFor{realm}Updated(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  waitFor(matchUpdate{realm}(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid));
}
function waitForAny{realm}Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and alias\ (.+) and client\ (.+) and role\-id\ (.+) and executionId\ (.+) and flowAlias\ (.+) and providerId\ (.+) and provider_id\ (.+) and clientUuid\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), alias: m[3], client: m[4], role-id: m[5], executionId: m[6], flowAlias: m[7], providerId: m[8], provider_id: parseInt(m[9]), clientUuid: m[10] };
}

// Verify updated (presence-by-list)
function verify{realm}Updated(realm, id, alias, client, role-id, executionId, flowAlias, providerId, provider_id, clientUuid) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].alias === alias && {realm}[i].client === client && {realm}[i].role-id === role-id && {realm}[i].executionId === executionId && {realm}[i].flowAlias === flowAlias && {realm}[i].providerId === providerId && {realm}[i].provider_id === provider_id && {realm}[i].clientUuid === clientUuid) {
          return pvg.success("{realm} updated (present)");
        }
      }
      return pvg.fail("Expected a {realm} to be present after update, but it is not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "alias " + alias + " and " + "client " + client + " and " + "role-id " + role-id + " and " + "executionId " + executionId + " and " + "flowAlias " + flowAlias + " and " + "providerId " + providerId + " and " + "provider_id " + provider_id + " and " + "clientUuid " + clientUuid + " exists" }
  });
}

