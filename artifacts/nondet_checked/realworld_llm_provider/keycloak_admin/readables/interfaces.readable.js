//@provengo summon rest

/**
 * Auto-generated interfaces & lifecycle (readable)
 * From GOLD only – full CRUD + verifications + match/wait helpers.
 */

var host = (typeof host !== 'undefined') ? host : '192.168.225.53';
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
  svc.post("/myrealm", { body: JSON.stringify({ id: id }), parameters: { description: "Add a myrealm with " + "id " + id } });
}

// DELETE
function deleteMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    parameters: { description: "Delete a myrealm with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingMyrealm(id) {
  svc.delete("/myrealm/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a myrealm with " + "id " + id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingMyrealm(id) {
  svc.post("/myrealm", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a myrealm with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateMyrealm(id) {
  svc.put("/myrealm/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a myrealm with " + "id " + id } });
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
function addV1(realm, userId, session) {
  svc.post("/v1", { body: JSON.stringify({ realm: realm, userId: userId, session: session }), parameters: { description: "Add a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session } });
}

// DELETE
function deleteV1(realm, userId, session) {
  svc.delete("/v1/" + realm + "/"+ userId + "/"+ session, {
    parameters: { description: "Delete a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingV1(realm, userId, session) {
  svc.delete("/v1/" + realm + "/"+ userId + "/"+ session, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingV1(realm, userId, session) {
  svc.post("/v1", {
    body: JSON.stringify({ realm: realm, userId: userId, session: session }),
    parameters: { description: "Add a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateV1(realm, userId, session) {
  svc.put("/v1/" + realm + "/"+ userId + "/"+ session, { body: JSON.stringify({ realm: realm, userId: userId, session: session }), parameters: { description: "Update a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session } });
}

// GET one
function getV1(realm, userId, session) {
  svc.get("/v1/" + realm + "/"+ userId + "/"+ session, {
    parameters: { description: "Get a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session }
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
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session + " exists" }
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
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session + " does not exist" }
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
    return e.data.parameters.description === "Add a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session;
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
    return e.data.parameters.description === "Delete a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateV1() {
  return bp.EventSet("any-update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a v1");
  });
}
function matchUpdateV1(realm, userId, session) {
  return bp.EventSet("update-v1", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session;
  });
}

// Wait helpers
function waitForAnyV1Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/);
    return { realm: m[1], userId: m[2], session: m[3] };
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
    return { realm: m[1], userId: m[2], session: m[3] };
}
function waitForV1Updated(realm, userId, session) {
  waitFor(matchUpdateV1(realm, userId, session));
}
function waitForAnyV1Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ v1\ with\ realm\ (.+) and userId\ (.+) and session\ (.+)$/);
    return { realm: m[1], userId: m[2], session: m[3] };
}

// Verify updated (presence-by-list)
function verifyV1Updated(realm, userId, session) {
  svc.get("/v1", {
    callback: function (response) {
      v1 = JSON.parse(response.body);
      for (let i = 0; i < v1.length; i++) {
        if (v1[i].realm === realm && v1[i].userId === userId && v1[i].session === session) {
          return pvg.success("V1 updated (present)");
        }
      }
      return pvg.fail("Expected a v1 to be present after update, but it is not");
    },
    parameters: { description: "Verify v1 with " + "realm " + realm + " and " + "userId " + userId + " and " + "session " + session + " exists" }
  });
}


/** === {realm} Operations === */

// CREATE
function add{realm}(realm, alias, id, provider_id) {
  svc.post("/{realm}", { body: JSON.stringify({ realm: realm, alias: alias, id: id, provider_id: provider_id }), parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id } });
}

// DELETE
function delete{realm}(realm, alias, id, provider_id) {
  svc.delete("/{realm}/" + realm + "/"+ alias + "/"+ id + "/"+ provider_id, {
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExisting{realm}(realm, alias, id, provider_id) {
  svc.delete("/{realm}/" + realm + "/"+ alias + "/"+ id + "/"+ provider_id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExisting{realm}(realm, alias, id, provider_id) {
  svc.post("/{realm}", {
    body: JSON.stringify({ realm: realm, alias: alias, id: id, provider_id: provider_id }),
    parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function update{realm}(realm, alias, id, provider_id) {
  svc.put("/{realm}/" + realm + "/"+ alias + "/"+ id + "/"+ provider_id, { body: JSON.stringify({ realm: realm, alias: alias, id: id, provider_id: provider_id }), parameters: { description: "Update a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id } });
}

// GET one
function get{realm}(realm, alias, id, provider_id) {
  svc.get("/{realm}/" + realm + "/"+ alias + "/"+ id + "/"+ provider_id, {
    parameters: { description: "Get a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id }
  });
}

// LIST all
function list{realm}() {
  svc.get("/{realm}", {
    parameters: { description: "List {realm}" }
  });
}

// Verify exists (by list)
function verify{realm}Exists(realm, alias, id, provider_id) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].alias === alias && {realm}[i].id === id && {realm}[i].provider_id === provider_id) {
          return pvg.success("{realm} exists");
        }
      }
      return pvg.fail("Expected a {realm} to exist but it does not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id + " exists" }
  });
}

// Verify NOT exists (by list)
function verify{realm}DoesNotExist(realm, alias, id, provider_id) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].alias === alias && {realm}[i].id === id && {realm}[i].provider_id === provider_id) {
          return pvg.fail("Expected a {realm} to not exist but it does");
        }
      }
      return pvg.success("{realm} does not exist");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd{realm}() {
  return bp.EventSet("any-add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {realm}");
  });
}
function matchAdd{realm}(realm, alias, id, provider_id) {
  return bp.EventSet("add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id;
  });
}
function matchAnyDelete{realm}() {
  return bp.EventSet("any-del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {realm}");
  });
}
function matchDelete{realm}(realm, alias, id, provider_id) {
  return bp.EventSet("del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate{realm}() {
  return bp.EventSet("any-update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a {realm}");
  });
}
function matchUpdate{realm}(realm, alias, id, provider_id) {
  return bp.EventSet("update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id;
  });
}

// Wait helpers
function waitForAny{realm}Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/);
    return { realm: m[1], alias: m[2], id: parseInt(m[3]), provider_id: parseInt(m[4]) };
}
function waitFor{realm}Added(realm, alias, id, provider_id) {
  waitFor(matchAdd{realm}(realm, alias, id, provider_id));
}
function waitFor{realm}Deleted(realm, alias, id, provider_id) {
  waitFor(matchDelete{realm}(realm, alias, id, provider_id));
}
function waitForAny{realm}Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/);
    return { realm: m[1], alias: m[2], id: parseInt(m[3]), provider_id: parseInt(m[4]) };
}
function waitFor{realm}Updated(realm, alias, id, provider_id) {
  waitFor(matchUpdate{realm}(realm, alias, id, provider_id));
}
function waitForAny{realm}Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and alias\ (.+) and id\ (.+) and provider_id\ (.+)$/);
    return { realm: m[1], alias: m[2], id: parseInt(m[3]), provider_id: parseInt(m[4]) };
}

// Verify updated (presence-by-list)
function verify{realm}Updated(realm, alias, id, provider_id) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].alias === alias && {realm}[i].id === id && {realm}[i].provider_id === provider_id) {
          return pvg.success("{realm} updated (present)");
        }
      }
      return pvg.fail("Expected a {realm} to be present after update, but it is not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "alias " + alias + " and " + "id " + id + " and " + "provider_id " + provider_id + " exists" }
  });
}

