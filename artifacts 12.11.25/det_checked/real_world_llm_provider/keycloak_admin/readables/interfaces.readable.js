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

/** === Root Operations === */

// CREATE
function addRoot(id) {
  svc.post("/root", { body: JSON.stringify({ id: id }), parameters: { description: "Add a root with " + "id " + id } });
}

// DELETE
function deleteRoot(id) {
  svc.delete("/root/" + id, {
    parameters: { description: "Delete a root with " + "id " + id }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExistingRoot(id) {
  svc.delete("/root/" + id, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a root with " + "id " + id }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExistingRoot(id) {
  svc.post("/root", {
    body: JSON.stringify({ id: id }),
    parameters: { description: "Add a root with " + "id " + id },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function updateRoot(id) {
  svc.put("/root/" + id, { body: JSON.stringify({ id: id }), parameters: { description: "Update a root with " + "id " + id } });
}

// GET one
function getRoot(id) {
  svc.get("/root/" + id, {
    parameters: { description: "Get a root with " + "id " + id }
  });
}

// LIST all
function listRoot() {
  svc.get("/root", {
    parameters: { description: "List root" }
  });
}

// Verify exists (by list)
function verifyRootExists(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.success("Root exists");
        }
      }
      return pvg.fail("Expected a root to exist but it does not");
    },
    parameters: { description: "Verify root with " + "id " + id + " exists" }
  });
}

// Verify NOT exists (by list)
function verifyRootDoesNotExist(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.fail("Expected a root to not exist but it does");
        }
      }
      return pvg.success("Root does not exist");
    },
    parameters: { description: "Verify root with " + "id " + id + " does not exist" }
  });
}

// Match helpers
function matchAnyAddRoot() {
  return bp.EventSet("any-add-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a root");
  });
}
function matchAddRoot(id) {
  return bp.EventSet("add-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a root with " + "id " + id;
  });
}
function matchAnyDeleteRoot() {
  return bp.EventSet("any-del-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a root");
  });
}
function matchDeleteRoot(id) {
  return bp.EventSet("del-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a root with " + "id " + id;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdateRoot() {
  return bp.EventSet("any-update-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a root");
  });
}
function matchUpdateRoot(id) {
  return bp.EventSet("update-root", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a root with " + "id " + id;
  });
}

// Wait helpers
function waitForAnyRootAdded() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRootAdded(id) {
  waitFor(matchAddRoot(id));
}
function waitForRootDeleted(id) {
  waitFor(matchDeleteRoot(id));
}
function waitForAnyRootDeleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}
function waitForRootUpdated(id) {
  waitFor(matchUpdateRoot(id));
}
function waitForAnyRootUpdated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ root\ with\ id\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ root\ with\ id\ (.+)$/);
    return { id: parseInt(m[1]) };
}

// Verify updated (presence-by-list)
function verifyRootUpdated(id) {
  svc.get("/root", {
    callback: function (response) {
      root = JSON.parse(response.body);
      for (let i = 0; i < root.length; i++) {
        if (root[i].id === id) {
          return pvg.success("Root updated (present)");
        }
      }
      return pvg.fail("Expected a root to be present after update, but it is not");
    },
    parameters: { description: "Verify root with " + "id " + id + " exists" }
  });
}


/** === {realm} Operations === */

// CREATE
function add{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.post("/{realm}", { body: JSON.stringify({ realm: realm, id: id, client: client, role-name: role-name, alias: alias, role-id: role-id, id1: id1, id2: id2, clientScopeId: clientScopeId, executionId: executionId, attr: attr, locale: locale, flowAlias: flowAlias, clientUuid: clientUuid, groupId: groupId, credentialId: credentialId, protocol: protocol, key: key, userId: userId, providerId: providerId, roleContainerId: roleContainerId, provider: provider, node: node, path: path, provider_id: provider_id, session: session, newPreviousCredentialId: newPreviousCredentialId }), parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId } });
}

// DELETE
function delete{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ role-name + "/"+ alias + "/"+ role-id + "/"+ id1 + "/"+ id2 + "/"+ clientScopeId + "/"+ executionId + "/"+ attr + "/"+ locale + "/"+ flowAlias + "/"+ clientUuid + "/"+ groupId + "/"+ credentialId + "/"+ protocol + "/"+ key + "/"+ userId + "/"+ providerId + "/"+ roleContainerId + "/"+ provider + "/"+ node + "/"+ path + "/"+ provider_id + "/"+ session + "/"+ newPreviousCredentialId, {
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId }
  });
}

// Negative: delete non-existing (codes from spec/defaults)
function tryToDeleteANonExisting{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.delete("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ role-name + "/"+ alias + "/"+ role-id + "/"+ id1 + "/"+ id2 + "/"+ clientScopeId + "/"+ executionId + "/"+ attr + "/"+ locale + "/"+ flowAlias + "/"+ clientUuid + "/"+ groupId + "/"+ credentialId + "/"+ protocol + "/"+ key + "/"+ userId + "/"+ providerId + "/"+ roleContainerId + "/"+ provider + "/"+ node + "/"+ path + "/"+ provider_id + "/"+ session + "/"+ newPreviousCredentialId, {
    expectedResponseCodes: [200, 404, 401],
    parameters: { description: "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId }
  });
}

// Negative: add existing (codes from spec/defaults)
function tryToAddExisting{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.post("/{realm}", {
    body: JSON.stringify({ realm: realm, id: id, client: client, role-name: role-name, alias: alias, role-id: role-id, id1: id1, id2: id2, clientScopeId: clientScopeId, executionId: executionId, attr: attr, locale: locale, flowAlias: flowAlias, clientUuid: clientUuid, groupId: groupId, credentialId: credentialId, protocol: protocol, key: key, userId: userId, providerId: providerId, roleContainerId: roleContainerId, provider: provider, node: node, path: path, provider_id: provider_id, session: session, newPreviousCredentialId: newPreviousCredentialId }),
    parameters: { description: "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId },
    expectedResponseCodes: [409, 400]
  });
}

// UPDATE
function update{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.put("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ role-name + "/"+ alias + "/"+ role-id + "/"+ id1 + "/"+ id2 + "/"+ clientScopeId + "/"+ executionId + "/"+ attr + "/"+ locale + "/"+ flowAlias + "/"+ clientUuid + "/"+ groupId + "/"+ credentialId + "/"+ protocol + "/"+ key + "/"+ userId + "/"+ providerId + "/"+ roleContainerId + "/"+ provider + "/"+ node + "/"+ path + "/"+ provider_id + "/"+ session + "/"+ newPreviousCredentialId, { body: JSON.stringify({ realm: realm, id: id, client: client, role-name: role-name, alias: alias, role-id: role-id, id1: id1, id2: id2, clientScopeId: clientScopeId, executionId: executionId, attr: attr, locale: locale, flowAlias: flowAlias, clientUuid: clientUuid, groupId: groupId, credentialId: credentialId, protocol: protocol, key: key, userId: userId, providerId: providerId, roleContainerId: roleContainerId, provider: provider, node: node, path: path, provider_id: provider_id, session: session, newPreviousCredentialId: newPreviousCredentialId }), parameters: { description: "Update a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId } });
}

// GET one
function get{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.get("/{realm}/" + realm + "/"+ id + "/"+ client + "/"+ role-name + "/"+ alias + "/"+ role-id + "/"+ id1 + "/"+ id2 + "/"+ clientScopeId + "/"+ executionId + "/"+ attr + "/"+ locale + "/"+ flowAlias + "/"+ clientUuid + "/"+ groupId + "/"+ credentialId + "/"+ protocol + "/"+ key + "/"+ userId + "/"+ providerId + "/"+ roleContainerId + "/"+ provider + "/"+ node + "/"+ path + "/"+ provider_id + "/"+ session + "/"+ newPreviousCredentialId, {
    parameters: { description: "Get a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId }
  });
}

// LIST all
function list{realm}() {
  svc.get("/{realm}", {
    parameters: { description: "List {realm}" }
  });
}

// Verify exists (by list)
function verify{realm}Exists(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].client === client && {realm}[i].role-name === role-name && {realm}[i].alias === alias && {realm}[i].role-id === role-id && {realm}[i].id1 === id1 && {realm}[i].id2 === id2 && {realm}[i].clientScopeId === clientScopeId && {realm}[i].executionId === executionId && {realm}[i].attr === attr && {realm}[i].locale === locale && {realm}[i].flowAlias === flowAlias && {realm}[i].clientUuid === clientUuid && {realm}[i].groupId === groupId && {realm}[i].credentialId === credentialId && {realm}[i].protocol === protocol && {realm}[i].key === key && {realm}[i].userId === userId && {realm}[i].providerId === providerId && {realm}[i].roleContainerId === roleContainerId && {realm}[i].provider === provider && {realm}[i].node === node && {realm}[i].path === path && {realm}[i].provider_id === provider_id && {realm}[i].session === session && {realm}[i].newPreviousCredentialId === newPreviousCredentialId) {
          return pvg.success("{realm} exists");
        }
      }
      return pvg.fail("Expected a {realm} to exist but it does not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId + " exists" }
  });
}

// Verify NOT exists (by list)
function verify{realm}DoesNotExist(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].client === client && {realm}[i].role-name === role-name && {realm}[i].alias === alias && {realm}[i].role-id === role-id && {realm}[i].id1 === id1 && {realm}[i].id2 === id2 && {realm}[i].clientScopeId === clientScopeId && {realm}[i].executionId === executionId && {realm}[i].attr === attr && {realm}[i].locale === locale && {realm}[i].flowAlias === flowAlias && {realm}[i].clientUuid === clientUuid && {realm}[i].groupId === groupId && {realm}[i].credentialId === credentialId && {realm}[i].protocol === protocol && {realm}[i].key === key && {realm}[i].userId === userId && {realm}[i].providerId === providerId && {realm}[i].roleContainerId === roleContainerId && {realm}[i].provider === provider && {realm}[i].node === node && {realm}[i].path === path && {realm}[i].provider_id === provider_id && {realm}[i].session === session && {realm}[i].newPreviousCredentialId === newPreviousCredentialId) {
          return pvg.fail("Expected a {realm} to not exist but it does");
        }
      }
      return pvg.success("{realm} does not exist");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId + " does not exist" }
  });
}

// Match helpers
function matchAnyAdd{realm}() {
  return bp.EventSet("any-add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Add a {realm}");
  });
}
function matchAdd{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  return bp.EventSet("add-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Add a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId;
  });
}
function matchAnyDelete{realm}() {
  return bp.EventSet("any-del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Delete a {realm}");
  });
}
function matchDelete{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  return bp.EventSet("del-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Delete a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId;
  });
}

// UPDATE passive helpers (matchers, waits, verify)
function matchAnyUpdate{realm}() {
  return bp.EventSet("any-update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description.startsWith("Update a {realm}");
  });
}
function matchUpdate{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  return bp.EventSet("update-{realm}", function (e) {
    if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
    return e.data.parameters.description === "Update a {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId;
  });
}

// Wait helpers
function waitForAny{realm}Added() {
  let e = waitFor(matchesDescriptionRegex(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Add\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), client: m[3], role-name: m[4], alias: m[5], role-id: m[6], id1: m[7], id2: m[8], clientScopeId: m[9], executionId: m[10], attr: m[11], locale: m[12], flowAlias: m[13], clientUuid: m[14], groupId: m[15], credentialId: m[16], protocol: m[17], key: m[18], userId: m[19], providerId: m[20], roleContainerId: m[21], provider: m[22], node: m[23], path: m[24], provider_id: parseInt(m[25]), session: m[26], newPreviousCredentialId: m[27] };
}
function waitFor{realm}Added(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  waitFor(matchAdd{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId));
}
function waitFor{realm}Deleted(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  waitFor(matchDelete{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId));
}
function waitForAny{realm}Deleted() {
  let e = waitFor(matchesDescriptionRegex(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Delete\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), client: m[3], role-name: m[4], alias: m[5], role-id: m[6], id1: m[7], id2: m[8], clientScopeId: m[9], executionId: m[10], attr: m[11], locale: m[12], flowAlias: m[13], clientUuid: m[14], groupId: m[15], credentialId: m[16], protocol: m[17], key: m[18], userId: m[19], providerId: m[20], roleContainerId: m[21], provider: m[22], node: m[23], path: m[24], provider_id: parseInt(m[25]), session: m[26], newPreviousCredentialId: m[27] };
}
function waitFor{realm}Updated(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  waitFor(matchUpdate{realm}(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId));
}
function waitForAny{realm}Updated() {
  let e = waitFor(matchesDescriptionRegex(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/));
    let m = e.data.parameters.description.match(/^Update\ a\ \{realm\}\ with\ realm\ (.+) and id\ (.+) and client\ (.+) and role\-name\ (.+) and alias\ (.+) and role\-id\ (.+) and id1\ (.+) and id2\ (.+) and clientScopeId\ (.+) and executionId\ (.+) and attr\ (.+) and locale\ (.+) and flowAlias\ (.+) and clientUuid\ (.+) and groupId\ (.+) and credentialId\ (.+) and protocol\ (.+) and key\ (.+) and userId\ (.+) and providerId\ (.+) and roleContainerId\ (.+) and provider\ (.+) and node\ (.+) and path\ (.+) and provider_id\ (.+) and session\ (.+) and newPreviousCredentialId\ (.+)$/);
    return { realm: m[1], id: parseInt(m[2]), client: m[3], role-name: m[4], alias: m[5], role-id: m[6], id1: m[7], id2: m[8], clientScopeId: m[9], executionId: m[10], attr: m[11], locale: m[12], flowAlias: m[13], clientUuid: m[14], groupId: m[15], credentialId: m[16], protocol: m[17], key: m[18], userId: m[19], providerId: m[20], roleContainerId: m[21], provider: m[22], node: m[23], path: m[24], provider_id: parseInt(m[25]), session: m[26], newPreviousCredentialId: m[27] };
}

// Verify updated (presence-by-list)
function verify{realm}Updated(realm, id, client, role-name, alias, role-id, id1, id2, clientScopeId, executionId, attr, locale, flowAlias, clientUuid, groupId, credentialId, protocol, key, userId, providerId, roleContainerId, provider, node, path, provider_id, session, newPreviousCredentialId) {
  svc.get("/{realm}", {
    callback: function (response) {
      {realm} = JSON.parse(response.body);
      for (let i = 0; i < {realm}.length; i++) {
        if ({realm}[i].realm === realm && {realm}[i].id === id && {realm}[i].client === client && {realm}[i].role-name === role-name && {realm}[i].alias === alias && {realm}[i].role-id === role-id && {realm}[i].id1 === id1 && {realm}[i].id2 === id2 && {realm}[i].clientScopeId === clientScopeId && {realm}[i].executionId === executionId && {realm}[i].attr === attr && {realm}[i].locale === locale && {realm}[i].flowAlias === flowAlias && {realm}[i].clientUuid === clientUuid && {realm}[i].groupId === groupId && {realm}[i].credentialId === credentialId && {realm}[i].protocol === protocol && {realm}[i].key === key && {realm}[i].userId === userId && {realm}[i].providerId === providerId && {realm}[i].roleContainerId === roleContainerId && {realm}[i].provider === provider && {realm}[i].node === node && {realm}[i].path === path && {realm}[i].provider_id === provider_id && {realm}[i].session === session && {realm}[i].newPreviousCredentialId === newPreviousCredentialId) {
          return pvg.success("{realm} updated (present)");
        }
      }
      return pvg.fail("Expected a {realm} to be present after update, but it is not");
    },
    parameters: { description: "Verify {realm} with " + "realm " + realm + " and " + "id " + id + " and " + "client " + client + " and " + "role-name " + role-name + " and " + "alias " + alias + " and " + "role-id " + role-id + " and " + "id1 " + id1 + " and " + "id2 " + id2 + " and " + "clientScopeId " + clientScopeId + " and " + "executionId " + executionId + " and " + "attr " + attr + " and " + "locale " + locale + " and " + "flowAlias " + flowAlias + " and " + "clientUuid " + clientUuid + " and " + "groupId " + groupId + " and " + "credentialId " + credentialId + " and " + "protocol " + protocol + " and " + "key " + key + " and " + "userId " + userId + " and " + "providerId " + providerId + " and " + "roleContainerId " + roleContainerId + " and " + "provider " + provider + " and " + "node " + node + " and " + "path " + path + " and " + "provider_id " + provider_id + " and " + "session " + session + " and " + "newPreviousCredentialId " + newPreviousCredentialId + " exists" }
  });
}

