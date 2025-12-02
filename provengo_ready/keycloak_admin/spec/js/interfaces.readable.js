//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;
var protocol = (typeof protocol !== 'undefined') ? protocol : 'http';

const svc = new RESTSession(protocol + "://" + host + ":" + port, "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && typeof e.data.parameters.description === "string" && re.test(e.data.parameters.description));
  });
}

function matchesDescription(str) {
  return bp.EventSet("Match description", function (e) {
    return !!(e && e.data && e.data.parameters && e.data.parameters.description === str);
  });
}

function waitFor(eventSet) {
  return bp.sync({waitFor: eventSet});
}

// ---- Entity: realm ----

function getRealm(realm) {
  var url = "/" + realm;
  var description = "Get realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function createRealm(realm) {
  var url = "/";
  var description = "Create realm";
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
}

function updateRealm(realm) {
  var url = "/" + realm;
  var description = "Update realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
}

function deleteRealm(realm) {
  var url = "/" + realm;
  var description = "Delete realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRealm(realm) {
  var url = "/";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another Realm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRealmExists(realm) {
  var url = "/";
  var description = "Verify Realm exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Realm exists");
          }
        }
      }
      return pvg.fail("Expected Realm to exist but it does not");
    }
  });
}

function verifyRealmDoesNotExist(realm) {
  var url = "/";
  var description = "Verify Realm does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Realm to not exist but it does");
          }
        }
      }
      return pvg.success("Realm does not exist");
    }
  });
}

function tryToDeleteANonExistingRealm(realm) {
  var url = "/" + realm;
  var description = "Verify we cannot delete non-existing Realm";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRealm(realm) {
  var expectedDesc = "Create realm";
  return bp.EventSet("matchAddedRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ realm$/));
  var m = ev.data.parameters.description.match(/^Create\ realm$/);
  var captures = m.slice(1);
  var names = [];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRealmAddedEvent(keyVal) {
  return bp.EventSet("AddRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRealmAdded() {
  return bp.EventSet("matchAnyRealmAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create realm") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForRealmAdded(realm) {
  var expectedDesc = "Create realm";
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRealm(realm) {
  var expectedDesc = "Delete realm " + realm;
  return bp.EventSet("matchDeletedRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: localization ----

function getLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Get localization for realm " + realm + ", locale " + locale + ", key " + key;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function addLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Add localization for realm " + realm + ", locale " + locale;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , key: String(key)
      , locale: String(locale)
    }
  });
}

function updateLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Update localization for realm " + realm + ", locale " + locale + ", key " + key;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , key: String(key)
      , locale: String(locale)
    }
  });
}

function deleteLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Delete localization for realm " + realm + ", locale " + locale + ", key " + key;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another Localization...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLocalizationExists(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Verify Localization exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Localization exists");
          }
        }
      }
      return pvg.fail("Expected Localization to exist but it does not");
    }
  });
}

function verifyLocalizationDoesNotExist(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Verify Localization does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Localization to not exist but it does");
          }
        }
      }
      return pvg.success("Localization does not exist");
    }
  });
}

function tryToDeleteANonExistingLocalization(key, locale, realm) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Verify we cannot delete non-existing Localization";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedLocalization(key, locale, realm) {
  var expectedDesc = "Add localization for realm " + realm + ", locale " + locale;
  return bp.EventSet("matchAddedLocalization", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLocalizationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ localization\ for\ realm\ (.+),\ locale\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ localization\ for\ realm\ (.+),\ locale\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "locale"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getLocalizationAddedEvent(keyVal) {
  return bp.EventSet("AddLocalization:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyLocalizationAdded() {
  return bp.EventSet("matchAnyLocalizationAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create localization") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForLocalizationAdded(key, locale, realm) {
  var expectedDesc = "Add localization for realm " + realm + ", locale " + locale;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedLocalization(key, locale, realm) {
  var expectedDesc = "Delete localization for realm " + realm + ", locale " + locale + ", key " + key;
  return bp.EventSet("matchDeletedLocalization", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyLocalizationDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ localization\ for\ realm\ (.+),\ locale\ (.+),\ key\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ localization\ for\ realm\ (.+),\ locale\ (.+),\ key\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "locale", "key"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: defaultDefaultClientScope ----

function updateDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Update default default client scope " + clientScopeId + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , clientScopeId: String(clientScopeId)
    }
  });
}

function deleteDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Delete default default client scope " + clientScopeId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultDefaultClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedDefaultDefaultClientScope(clientScopeId, realm) {
  var expectedDesc = "Delete default default client scope " + clientScopeId + " in realm " + realm;
  return bp.EventSet("matchDeletedDefaultDefaultClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultDefaultClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ default\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ default\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["clientScopeId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: defaultGroup ----

function updateDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Update default group " + groupId + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , groupId: String(groupId)
    }
  });
}

function deleteDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Delete default group " + groupId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Verify we cannot delete non-existing DefaultGroup";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedDefaultGroup(groupId, realm) {
  var expectedDesc = "Delete default group " + groupId + " in realm " + realm;
  return bp.EventSet("matchDeletedDefaultGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["groupId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: defaultOptionalClientScope ----

function updateDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Update default optional client scope " + clientScopeId + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , clientScopeId: String(clientScopeId)
    }
  });
}

function deleteDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Delete default optional client scope " + clientScopeId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultOptionalClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedDefaultOptionalClientScope(clientScopeId, realm) {
  var expectedDesc = "Delete default optional client scope " + clientScopeId + " in realm " + realm;
  return bp.EventSet("matchDeletedDefaultOptionalClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultOptionalClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ optional\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ optional\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["clientScopeId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: clientPolicies ----

function getClientPolicies(realm) {
  var url = "/" + realm + "/client-policies/policies";
  var description = "Get client policies in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateClientPolicies(realm) {
  var url = "/" + realm + "/client-policies/policies";
  var description = "Update client policies in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
}

// ---- Entity: clientProfiles ----

function getClientProfiles(realm) {
  var url = "/" + realm + "/client-policies/profiles";
  var description = "Get client profiles in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateClientProfiles(realm) {
  var url = "/" + realm + "/client-policies/profiles";
  var description = "Update client profiles in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
}

// ---- Entity: usersManagementPermissions ----

function getUsersManagementPermissions(realm) {
  var url = "/" + realm + "/users-management-permissions";
  var description = "Get users management permissions in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateUsersManagementPermissions(realm) {
  var url = "/" + realm + "/users-management-permissions";
  var description = "Update users management permissions in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
}

// ---- Entity: session ----

function deleteSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Delete session " + session + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Verify we cannot delete non-existing Session";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedSession(realm, session) {
  var expectedDesc = "Delete session " + session + " in realm " + realm;
  return bp.EventSet("matchDeletedSession", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnySessionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ session\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ session\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["session", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authentication config ----

function postAuthenticationConfig(id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Create authentication config in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getAuthenticationConfig(id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Get authentication config " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function putAuthenticationConfig(id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Update authentication config " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteConfig(id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Delete authentication config " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingAuthenticationConfig(id, realm) {
  var url = "/" + realm + "/authentication/config";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another AuthenticationConfig...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthenticationConfigExists(id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Verify AuthenticationConfig exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("AuthenticationConfig exists");
          }
        }
      }
      return pvg.fail("Expected AuthenticationConfig to exist but it does not");
    }
  });
}

function verifyAuthenticationConfigDoesNotExist(id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Verify AuthenticationConfig does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected AuthenticationConfig to not exist but it does");
          }
        }
      }
      return pvg.success("AuthenticationConfig does not exist");
    }
  });
}

function tryToDeleteANonExistingAuthenticationConfig(id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Verify we cannot delete non-existing AuthenticationConfig";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationConfig(id, realm) {
  var expectedDesc = "Create authentication config in realm " + realm;
  return bp.EventSet("matchAddedAuthenticationConfig", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ authentication\ config\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ authentication\ config\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthenticationConfigAddedEvent(keyVal) {
  return bp.EventSet("AddAuthenticationConfig:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyAuthenticationConfigAdded() {
  return bp.EventSet("matchAnyAuthenticationConfigAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create authentication config") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForAuthenticationConfigAdded(id, realm) {
  var expectedDesc = "Create authentication config in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedAuthenticationConfig(id, realm) {
  var expectedDesc = "Delete authentication config " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedAuthenticationConfig", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationConfigDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ authentication\ config\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ authentication\ config\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authentication execution ----

function postExecutions(executionId, realm) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Create authentication execution in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
    }
  });
}

function getExecution(executionId, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Get authentication execution " + executionId + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteExecution(executionId, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Delete authentication execution " + executionId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingAuthenticationExecution(executionId, realm) {
  var url = "/" + realm + "/authentication/executions";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another AuthenticationExecution...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthenticationExecutionExists(executionId, realm) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Verify AuthenticationExecution exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("AuthenticationExecution exists");
          }
        }
      }
      return pvg.fail("Expected AuthenticationExecution to exist but it does not");
    }
  });
}

function verifyAuthenticationExecutionDoesNotExist(executionId, realm) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Verify AuthenticationExecution does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected AuthenticationExecution to not exist but it does");
          }
        }
      }
      return pvg.success("AuthenticationExecution does not exist");
    }
  });
}

function tryToDeleteANonExistingAuthenticationExecution(executionId, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Verify we cannot delete non-existing AuthenticationExecution";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationExecution(executionId, realm) {
  var expectedDesc = "Create authentication execution in realm " + realm;
  return bp.EventSet("matchAddedAuthenticationExecution", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationExecutionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ authentication\ execution\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ authentication\ execution\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthenticationExecutionAddedEvent(keyVal) {
  return bp.EventSet("AddAuthenticationExecution:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyAuthenticationExecutionAdded() {
  return bp.EventSet("matchAnyAuthenticationExecutionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create authentication execution") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForAuthenticationExecutionAdded(executionId, realm) {
  var expectedDesc = "Create authentication execution in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedAuthenticationExecution(executionId, realm) {
  var expectedDesc = "Delete authentication execution " + executionId + " in realm " + realm;
  return bp.EventSet("matchDeletedAuthenticationExecution", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationExecutionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ authentication\ execution\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ authentication\ execution\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["executionId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: execution config ----

function postExecutionConfig(executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Create execution config for execution " + executionId + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , id: String(id)
    }
  });
}

function getExecutionConfig(executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config/" + id;
  var description = "Get execution config " + id + " for execution " + executionId + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingExecutionConfig(executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ExecutionConfig...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyExecutionConfigExists(executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Verify ExecutionConfig exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ExecutionConfig exists");
          }
        }
      }
      return pvg.fail("Expected ExecutionConfig to exist but it does not");
    }
  });
}

function verifyExecutionConfigDoesNotExist(executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Verify ExecutionConfig does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ExecutionConfig to not exist but it does");
          }
        }
      }
      return pvg.success("ExecutionConfig does not exist");
    }
  });
}

function matchAddedExecutionConfig(executionId, id, realm) {
  var expectedDesc = "Create execution config for execution " + executionId + " in realm " + realm;
  return bp.EventSet("matchAddedExecutionConfig", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyExecutionConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ execution\ config\ for\ execution\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ execution\ config\ for\ execution\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["executionId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getExecutionConfigAddedEvent(keyVal) {
  return bp.EventSet("AddExecutionConfig:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyExecutionConfigAdded() {
  return bp.EventSet("matchAnyExecutionConfigAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create execution config") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForExecutionConfigAdded(executionId, id, realm) {
  var expectedDesc = "Create execution config for execution " + executionId + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: authentication flow ----

function postFlows(id, realm) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Create authentication flow in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getFlow(id, realm) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Get authentication flow " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function putFlow(id, realm) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Update authentication flow " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteFlow(id, realm) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Delete authentication flow " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingAuthenticationFlow(id, realm) {
  var url = "/" + realm + "/authentication/flows";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another AuthenticationFlow...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthenticationFlowExists(id, realm) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Verify AuthenticationFlow exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("AuthenticationFlow exists");
          }
        }
      }
      return pvg.fail("Expected AuthenticationFlow to exist but it does not");
    }
  });
}

function verifyAuthenticationFlowDoesNotExist(id, realm) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Verify AuthenticationFlow does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected AuthenticationFlow to not exist but it does");
          }
        }
      }
      return pvg.success("AuthenticationFlow does not exist");
    }
  });
}

function tryToDeleteANonExistingAuthenticationFlow(id, realm) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Verify we cannot delete non-existing AuthenticationFlow";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationFlow(id, realm) {
  var expectedDesc = "Create authentication flow in realm " + realm;
  return bp.EventSet("matchAddedAuthenticationFlow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationFlowAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ authentication\ flow\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ authentication\ flow\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthenticationFlowAddedEvent(keyVal) {
  return bp.EventSet("AddAuthenticationFlow:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyAuthenticationFlowAdded() {
  return bp.EventSet("matchAnyAuthenticationFlowAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create authentication flow") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForAuthenticationFlowAdded(id, realm) {
  var expectedDesc = "Create authentication flow in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedAuthenticationFlow(id, realm) {
  var expectedDesc = "Delete authentication flow " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedAuthenticationFlow", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationFlowDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ authentication\ flow\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ authentication\ flow\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authentication execution info ----

function putExecutions(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "Update authentication executions info for flow " + flowAlias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , flowAlias: String(flowAlias)
    }
  });
}

// ---- Entity: required action ----

function postRegisterRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var description = "Register required action in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
}

function getRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Get required action " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function putRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Update required action " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
}

function deleteRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Delete required action " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another RequiredAction...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRequiredActionExists(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var description = "Verify RequiredAction exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("RequiredAction exists");
          }
        }
      }
      return pvg.fail("Expected RequiredAction to exist but it does not");
    }
  });
}

function verifyRequiredActionDoesNotExist(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var description = "Verify RequiredAction does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected RequiredAction to not exist but it does");
          }
        }
      }
      return pvg.success("RequiredAction does not exist");
    }
  });
}

function tryToDeleteANonExistingRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Verify we cannot delete non-existing RequiredAction";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRequiredAction(alias, realm) {
  var expectedDesc = "Register required action in realm " + realm;
  return bp.EventSet("matchAddedRequiredAction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRequiredActionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Register\ required\ action\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Register\ required\ action\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRequiredActionAddedEvent(keyVal) {
  return bp.EventSet("AddRequiredAction:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRequiredActionAdded() {
  return bp.EventSet("matchAnyRequiredActionAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create required action") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForRequiredActionAdded(alias, realm) {
  var expectedDesc = "Register required action in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRequiredAction(alias, realm) {
  var expectedDesc = "Delete required action " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedRequiredAction", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRequiredActionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ required\ action\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ required\ action\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client ----

function createClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients";
  var description = "Create client " + clientId + " with id " + id;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , clientId: String(clientId)
      , id: String(id)
    }
  });
}

function getClients(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients";
  var description = "Get clients in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getClientById(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Get client by id " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function updateClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Update client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , clientId: String(clientId)
      , id: String(id)
    }
  });
}

function deleteClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Delete client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another Client...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientExists(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients";
  var description = "Verify Client exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Client exists");
          }
        }
      }
      return pvg.fail("Expected Client to exist but it does not");
    }
  });
}

function verifyClientDoesNotExist(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients";
  var description = "Verify Client does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Client to not exist but it does");
          }
        }
      }
      return pvg.success("Client does not exist");
    }
  });
}

function tryToDeleteANonExistingClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Verify we cannot delete non-existing Client";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var expectedDesc = "Create client " + clientId + " with id " + id;
  return bp.EventSet("matchAddedClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["clientId", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientAddedEvent(keyVal) {
  return bp.EventSet("AddClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientAdded() {
  return bp.EventSet("matchAnyClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientAdded(clientId, first, id, max, q, realm, search, viewableOnly) {
  var expectedDesc = "Create client " + clientId + " with id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClient(clientId, first, id, max, q, realm, search, viewableOnly) {
  var expectedDesc = "Delete client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user ----

function postUsers(id, realm, username) {
  var url = "/" + realm + "/users";
  var description = "Create user with username " + username;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getUserByRealmById(id, realm, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Get user with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function putUser(id, realm, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Update user with id " + id + " and username " + username;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteUserByRealmById(id, realm, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Delete user with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUser(id, realm, username) {
  var url = "/" + realm + "/users";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(id, realm, username) {
  var url = "/" + realm + "/users";
  var description = "Verify User exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("User exists");
          }
        }
      }
      return pvg.fail("Expected User to exist but it does not");
    }
  });
}

function verifyUserDoesNotExist(id, realm, username) {
  var url = "/" + realm + "/users";
  var description = "Verify User does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected User to not exist but it does");
          }
        }
      }
      return pvg.success("User does not exist");
    }
  });
}

function tryToDeleteANonExistingUser(id, realm, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUser(id, realm, username) {
  var expectedDesc = "Create user with username " + username;
  return bp.EventSet("matchAddedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ username\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ username\ (.+)$/);
  var captures = m.slice(1);
  var names = ["username"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserAddedEvent(keyVal) {
  return bp.EventSet("AddUser:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserAdded() {
  return bp.EventSet("matchAnyUserAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForUserAdded(id, realm, username) {
  var expectedDesc = "Create user with username " + username;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUser(id, realm, username) {
  var expectedDesc = "Delete user with id " + id;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user credential ----

function deleteCredential(credentialId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId;
  var description = "Delete credential " + credentialId + " for user " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingUserCredential(credentialId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId;
  var description = "Verify we cannot delete non-existing UserCredential";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedUserCredential(credentialId, id, realm) {
  var expectedDesc = "Delete credential " + credentialId + " for user " + id;
  return bp.EventSet("matchDeletedUserCredential", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserCredentialDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ credential\ (.+)\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ credential\ (.+)\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["credentialId", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user credential label ----

function putUserLabel(credentialId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId + "/userLabel";
  var description = "Update label for credential " + credentialId + " of user " + id;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , credentialId: String(credentialId)
      , id: String(id)
    }
  });
}

// ---- Entity: user consent ----

function deleteConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Delete consent for client " + client + " of user " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToDeleteANonExistingUserConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Verify we cannot delete non-existing UserConsent";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchDeletedUserConsent(client, id, realm) {
  var expectedDesc = "Delete consent for client " + client + " of user " + id;
  return bp.EventSet("matchDeletedUserConsent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserConsentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ consent\ for\ client\ (.+)\ of\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ consent\ for\ client\ (.+)\ of\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user federated identity ----

function postFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Add federated identity " + provider + " for user " + id;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , provider: String(provider)
    }
  });
}

function deleteFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Delete federated identity " + provider + " for user " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another UserFederatedIdentity...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserFederatedIdentityExists(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Verify UserFederatedIdentity exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("UserFederatedIdentity exists");
          }
        }
      }
      return pvg.fail("Expected UserFederatedIdentity to exist but it does not");
    }
  });
}

function verifyUserFederatedIdentityDoesNotExist(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Verify UserFederatedIdentity does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected UserFederatedIdentity to not exist but it does");
          }
        }
      }
      return pvg.success("UserFederatedIdentity does not exist");
    }
  });
}

function tryToDeleteANonExistingUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Verify we cannot delete non-existing UserFederatedIdentity";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserFederatedIdentity(id, provider, realm) {
  var expectedDesc = "Add federated identity " + provider + " for user " + id;
  return bp.EventSet("matchAddedUserFederatedIdentity", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFederatedIdentityAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ federated\ identity\ (.+)\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ federated\ identity\ (.+)\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["provider", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserFederatedIdentityAddedEvent(keyVal) {
  return bp.EventSet("AddUserFederatedIdentity:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserFederatedIdentityAdded() {
  return bp.EventSet("matchAnyUserFederatedIdentityAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user federated identity") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForUserFederatedIdentityAdded(id, provider, realm) {
  var expectedDesc = "Add federated identity " + provider + " for user " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserFederatedIdentity(id, provider, realm) {
  var expectedDesc = "Delete federated identity " + provider + " for user " + id;
  return bp.EventSet("matchDeletedUserFederatedIdentity", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFederatedIdentityDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ federated\ identity\ (.+)\ for\ user\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ federated\ identity\ (.+)\ for\ user\ (.+)$/);
  var captures = m.slice(1);
  var names = ["provider", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user group ----

function putUserGroup(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Add user " + id + " to group " + groupId;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , groupId: String(groupId)
      , id: String(id)
    }
  });
}

function deleteUserGroup(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Remove user " + id + " from group " + groupId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserGroup(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another UserGroup...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserGroupExists(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify UserGroup exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("UserGroup exists");
          }
        }
      }
      return pvg.fail("Expected UserGroup to exist but it does not");
    }
  });
}

function verifyUserGroupDoesNotExist(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify UserGroup does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected UserGroup to not exist but it does");
          }
        }
      }
      return pvg.success("UserGroup does not exist");
    }
  });
}

function tryToDeleteANonExistingUserGroup(groupId, id, realm) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify we cannot delete non-existing UserGroup";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserGroup(groupId, id, realm) {
  var expectedDesc = "Add user " + id + " to group " + groupId;
  return bp.EventSet("matchAddedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ (.+)\ to\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ (.+)\ to\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserGroupAddedEvent(keyVal) {
  return bp.EventSet("AddUserGroup:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserGroupAdded() {
  return bp.EventSet("matchAnyUserGroupAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user group") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForUserGroupAdded(groupId, id, realm) {
  var expectedDesc = "Add user " + id + " to group " + groupId;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserGroup(groupId, id, realm) {
  var expectedDesc = "Remove user " + id + " from group " + groupId;
  return bp.EventSet("matchDeletedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ from\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ from\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user reset password ----

function putResetPassword(id, realm) {
  var url = "/" + realm + "/users/" + id + "/reset-password";
  var description = "Reset password for user " + id;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

// ---- Entity: client scope scope mappings client ----

function postClientScopeScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role " + name + " with id " + id + " to client scope " + id + " for client " + client + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , id: String(id)
    }
  });
}

function deleteClientScopeScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role " + name + " with id " + id + " from client scope " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientScopeScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Get scope mappings for client scope " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeScopeMappingsClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeScopeMappingsClientExists(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeScopeMappingsClient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeScopeMappingsClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeScopeMappingsClient to exist but it does not");
    }
  });
}

function verifyClientScopeScopeMappingsClientDoesNotExist(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeScopeMappingsClient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeScopeMappingsClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeScopeMappingsClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientScopeScopeMappingsClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client scope " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingsClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeScopeMappingsClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeScopeMappingsClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeScopeMappingsClientAdded() {
  return bp.EventSet("matchAnyClientScopeScopeMappingsClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope scope mappings client") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeScopeMappingsClientAdded(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client scope " + id + " for client " + client + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientScopeScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client scope " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingsClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope scope mappings realm ----

function postClientScopeScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Add role " + name + " with id " + id + " to client scope " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteClientScopeScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Delete role " + name + " with id " + id + " from client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientScopeScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Get realm scope mappings for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeScopeMappingsRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeScopeMappingsRealmExists(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeScopeMappingsRealm exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeScopeMappingsRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeScopeMappingsRealm to exist but it does not");
    }
  });
}

function verifyClientScopeScopeMappingsRealmDoesNotExist(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeScopeMappingsRealm does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeScopeMappingsRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeScopeMappingsRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientScopeScopeMappingsRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client scope " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingsRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeScopeMappingsRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeScopeMappingsRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeScopeMappingsRealmAdded() {
  return bp.EventSet("matchAnyClientScopeScopeMappingsRealmAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope scope mappings realm") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeScopeMappingsRealmAdded(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client scope " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientScopeScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client scope " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingsRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template scope mappings client ----

function postClientTemplateScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role " + name + " with id " + id + " to client template " + id + " for client " + client + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , id: String(id)
    }
  });
}

function deleteClientTemplateScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role " + name + " with id " + id + " from client template " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientTemplateScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Get scope mappings for client template " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientTemplateScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientTemplateScopeMappingsClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateScopeMappingsClientExists(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientTemplateScopeMappingsClient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateScopeMappingsClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateScopeMappingsClient to exist but it does not");
    }
  });
}

function verifyClientTemplateScopeMappingsClientDoesNotExist(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientTemplateScopeMappingsClient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateScopeMappingsClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateScopeMappingsClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplateScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientTemplateScopeMappingsClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client template " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchAddedClientTemplateScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingsClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateScopeMappingsClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateScopeMappingsClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateScopeMappingsClientAdded() {
  return bp.EventSet("matchAnyClientTemplateScopeMappingsClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client template scope mappings client") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientTemplateScopeMappingsClientAdded(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client template " + id + " for client " + client + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientTemplateScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client template " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingsClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template scope mappings realm ----

function postClientTemplateScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Add role " + name + " with id " + id + " to client template " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteClientTemplateScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Delete role " + name + " with id " + id + " from client template " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientTemplateScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Get realm scope mappings for client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientTemplateScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientTemplateScopeMappingsRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateScopeMappingsRealmExists(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify ClientTemplateScopeMappingsRealm exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateScopeMappingsRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateScopeMappingsRealm to exist but it does not");
    }
  });
}

function verifyClientTemplateScopeMappingsRealmDoesNotExist(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify ClientTemplateScopeMappingsRealm does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateScopeMappingsRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateScopeMappingsRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplateScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientTemplateScopeMappingsRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client template " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientTemplateScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingsRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateScopeMappingsRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateScopeMappingsRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateScopeMappingsRealmAdded() {
  return bp.EventSet("matchAnyClientTemplateScopeMappingsRealmAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client template scope mappings realm") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientTemplateScopeMappingsRealmAdded(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client template " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientTemplateScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client template " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingsRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mappings client ----

function postClientScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role " + name + " with id " + id + " to client " + id + " for client " + client + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , id: String(id)
    }
  });
}

function deleteClientScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role " + name + " with id " + id + " from client " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Get scope mappings for client " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeMappingsClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeMappingsClientExists(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeMappingsClient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeMappingsClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeMappingsClient to exist but it does not");
    }
  });
}

function verifyClientScopeMappingsClientDoesNotExist(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeMappingsClient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeMappingsClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeMappingsClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeMappingsClient(client, id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientScopeMappingsClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingsClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeMappingsClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeMappingsClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeMappingsClientAdded() {
  return bp.EventSet("matchAnyClientScopeMappingsClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope mappings client") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeMappingsClientAdded(client, id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client " + id + " for client " + client + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientScopeMappingsClient(client, id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeMappingsClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingsClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mappings realm ----

function postClientScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Add role " + name + " with id " + id + " to client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteClientScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Delete role " + name + " with id " + id + " from client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Get realm scope mappings for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeMappingsRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeMappingsRealmExists(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeMappingsRealm exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeMappingsRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeMappingsRealm to exist but it does not");
    }
  });
}

function verifyClientScopeMappingsRealmDoesNotExist(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeMappingsRealm does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeMappingsRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeMappingsRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeMappingsRealm(id, name, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientScopeMappingsRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingsRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ (.+)\ with\ id\ (.+)\ to\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeMappingsRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeMappingsRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeMappingsRealmAdded() {
  return bp.EventSet("matchAnyClientScopeMappingsRealmAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope mappings realm") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeMappingsRealmAdded(id, name, realm) {
  var expectedDesc = "Add role " + name + " with id " + id + " to client " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientScopeMappingsRealm(id, name, realm) {
  var expectedDesc = "Delete role " + name + " with id " + id + " from client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeMappingsRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingsRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ (.+)\ with\ id\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mappings ----

function getClientScopeMappings(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings";
  var description = "Get scope mappings for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client scope scope mappings ----

function getClientScopeScopeMappings(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings";
  var description = "Get scope mappings for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client template scope mappings ----

function getClientTemplateScopeMappings(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings";
  var description = "Get scope mappings for client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client role ----

function postClientRoles(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
}

function deleteClientRole(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Delete client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putClientRole(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Update client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
}

function getClientRole(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Get client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientRole(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientRole...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientRoleExists(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Verify ClientRole exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientRole exists");
          }
        }
      }
      return pvg.fail("Expected ClientRole to exist but it does not");
    }
  });
}

function verifyClientRoleDoesNotExist(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Verify ClientRole does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientRole to not exist but it does");
          }
        }
      }
      return pvg.success("ClientRole does not exist");
    }
  });
}

function tryToDeleteANonExistingClientRole(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Verify we cannot delete non-existing ClientRole";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientRole(id, realm, role-name) {
  var expectedDesc = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  return bp.EventSet("matchAddedClientRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientRoleAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientRoleAddedEvent(keyVal) {
  return bp.EventSet("AddClientRole:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientRoleAdded() {
  return bp.EventSet("matchAnyClientRoleAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client role") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientRoleAdded(id, realm, role-name) {
  var expectedDesc = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientRole(id, realm, role-name) {
  var expectedDesc = "Delete client role " + role-name + " in client " + id + " of realm " + realm;
  return bp.EventSet("matchDeletedClientRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientRoleDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client role composite ----

function postClientRoleComposites(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
}

function deleteClientRoleComposites(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Delete composites from client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getClientRoleComposites(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Get composites of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientRoleComposite(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientRoleComposite...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientRoleCompositeExists(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify ClientRoleComposite exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientRoleComposite exists");
          }
        }
      }
      return pvg.fail("Expected ClientRoleComposite to exist but it does not");
    }
  });
}

function verifyClientRoleCompositeDoesNotExist(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify ClientRoleComposite does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientRoleComposite to not exist but it does");
          }
        }
      }
      return pvg.success("ClientRoleComposite does not exist");
    }
  });
}

function tryToDeleteANonExistingClientRoleComposite(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify we cannot delete non-existing ClientRoleComposite";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientRoleComposite(id, realm, role-name) {
  var expectedDesc = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  return bp.EventSet("matchAddedClientRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientRoleCompositeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ composites\ to\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ composites\ to\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientRoleCompositeAddedEvent(keyVal) {
  return bp.EventSet("AddClientRoleComposite:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientRoleCompositeAdded() {
  return bp.EventSet("matchAnyClientRoleCompositeAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client role composite") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientRoleCompositeAdded(id, realm, role-name) {
  var expectedDesc = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientRoleComposite(id, realm, role-name) {
  var expectedDesc = "Delete composites from client role " + role-name + " in client " + id + " of realm " + realm;
  return bp.EventSet("matchDeletedClientRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientRoleCompositeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ composites\ from\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ composites\ from\ client\ role\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role ----

function postRolesByRealm(realm, role-id) {
  var url = "/" + realm + "/roles";
  var description = "Create role {role-name} in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
}

function deleteRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Delete role with id " + role-id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Update role with id " + role-id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
}

function getRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Get role with id " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRole(realm, role-id) {
  var url = "/" + realm + "/roles";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another Role...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleExists(realm, role-id) {
  var url = "/" + realm + "/roles";
  var description = "Verify Role exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Role exists");
          }
        }
      }
      return pvg.fail("Expected Role to exist but it does not");
    }
  });
}

function verifyRoleDoesNotExist(realm, role-id) {
  var url = "/" + realm + "/roles";
  var description = "Verify Role does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Role to not exist but it does");
          }
        }
      }
      return pvg.success("Role does not exist");
    }
  });
}

function tryToDeleteANonExistingRole(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Verify we cannot delete non-existing Role";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRole(realm, role-id) {
  var expectedDesc = "Create role {role-name} in realm " + realm;
  return bp.EventSet("matchAddedRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRoleAddedEvent(keyVal) {
  return bp.EventSet("AddRole:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRoleAdded() {
  return bp.EventSet("matchAnyRoleAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create role") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForRoleAdded(realm, role-id) {
  var expectedDesc = "Create role {role-name} in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRole(realm, role-id) {
  var expectedDesc = "Delete role with id " + role-id + " in realm " + realm;
  return bp.EventSet("matchDeletedRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role composite ----

function addRoleComposites(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Add composites to role " + role-id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
}

function deleteRoleComposites(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Delete composites from role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getRoleComposites(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Get composites of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingRoleComposite(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another RoleComposite...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleCompositeExists(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify RoleComposite exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("RoleComposite exists");
          }
        }
      }
      return pvg.fail("Expected RoleComposite to exist but it does not");
    }
  });
}

function verifyRoleCompositeDoesNotExist(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify RoleComposite does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected RoleComposite to not exist but it does");
          }
        }
      }
      return pvg.success("RoleComposite does not exist");
    }
  });
}

function tryToDeleteANonExistingRoleComposite(first, max, realm, role-id, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify we cannot delete non-existing RoleComposite";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedRoleComposite(first, max, realm, role-id, search) {
  var expectedDesc = "Add composites to role " + role-id + " in realm " + realm;
  return bp.EventSet("matchAddedRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleCompositeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ composites\ to\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ composites\ to\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRoleCompositeAddedEvent(keyVal) {
  return bp.EventSet("AddRoleComposite:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRoleCompositeAdded() {
  return bp.EventSet("matchAnyRoleCompositeAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create role composite") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForRoleCompositeAdded(first, max, realm, role-id, search) {
  var expectedDesc = "Add composites to role " + role-id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedRoleComposite(first, max, realm, role-id, search) {
  var expectedDesc = "Delete composites from role " + role-id + " in realm " + realm;
  return bp.EventSet("matchDeletedRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleCompositeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ composites\ from\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ composites\ from\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client role management permission ----

function putClientRoleManagementPermissions(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/management/permissions";
  var description = "Update management permissions for client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
}

function getClientRoleManagementPermissions(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/management/permissions";
  var description = "Get management permissions for client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: role management permission ----

function updateRoleManagementPermissions(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/management/permissions";
  var description = "Update management permissions of role " + role-id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
}

function getRoleManagementPermissions(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/management/permissions";
  var description = "Get management permissions of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client scope protocol mapper ----

function postClientScopeProtocolMappersModels(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/{id}/protocol-mappers/models";
  var description = "Create client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function deleteClientScopeProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putClientScopeProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function getClientScopeProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/{id}/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeProtocolMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeProtocolMapperExists(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/{id}/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapper exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeProtocolMapper exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMapper to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMapperDoesNotExist(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/{id}/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapper does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeProtocolMapper to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMapper does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientScopeProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientScopeProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Create client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeProtocolMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ scope\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ scope\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeProtocolMapperAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMapper:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMapperAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMapperAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope protocol mapper") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeProtocolMapperAdded(id1, id2, realm) {
  var expectedDesc = "Create client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientScopeProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client scope protocol mapper with id " + id2 + " in client scope " + id1 + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ scope\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ scope\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope protocol mapper add model ----

function postClientScopeProtocolMappersAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Add client scope protocol mapper model in client scope " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "consentRequired": String(true),
    "consentText": "consentText_dummy",
    "config": config,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
}

function tryToAddExistingClientScopeProtocolMapperAddModel(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var body = {
  };
  var description = "Verify that we cannot add another ClientScopeProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeProtocolMapperAddModelExists(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientScopeProtocolMapperAddModel exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientScopeProtocolMapperAddModel exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMapperAddModel to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMapperAddModelDoesNotExist(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientScopeProtocolMapperAddModel does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientScopeProtocolMapperAddModel to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMapperAddModel does not exist");
    }
  });
}

function matchAddedClientScopeProtocolMapperAddModel(id, realm) {
  var expectedDesc = "Add client scope protocol mapper model in client scope " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeProtocolMapperAddModel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ client\ scope\ protocol\ mapper\ model\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ client\ scope\ protocol\ mapper\ model\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeProtocolMapperAddModelAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMapperAddModel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMapperAddModelAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMapperAddModelAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope protocol mapper add model") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForClientScopeProtocolMapperAddModelAdded(id, realm) {
  var expectedDesc = "Add client scope protocol mapper model in client scope " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client scope protocol mappers ----

function postClientScopeProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Create client scope protocol mapper in client scope " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getClientScopeProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Get all protocol mappers for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientScopeProtocolMappers(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientScopeProtocolMappers...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeProtocolMappersExists(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMappers exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeProtocolMappers exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMappers to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMappersDoesNotExist(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMappers does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeProtocolMappers to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMappers does not exist");
    }
  });
}

function matchAddedClientScopeProtocolMappers(id, realm) {
  var expectedDesc = "Create client scope protocol mapper in client scope " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientScopeProtocolMappers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeProtocolMappersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ scope\ protocol\ mapper\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ scope\ protocol\ mapper\ in\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeProtocolMappersAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMappers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMappersAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMappersAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client scope protocol mappers") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientScopeProtocolMappersAdded(id, realm) {
  var expectedDesc = "Create client scope protocol mapper in client scope " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client scope protocol mappers protocol ----

function getClientScopeProtocolMappersProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mappers for protocol " + protocol + " in client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client template protocol mapper ----

function postClientTemplateProtocolMappersModels(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/{id}/protocol-mappers/models";
  var description = "Create client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function deleteClientTemplateProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putClientTemplateProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function getClientTemplateProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/{id}/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientTemplateProtocolMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateProtocolMapperExists(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/{id}/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapper exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateProtocolMapper exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMapper to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMapperDoesNotExist(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/{id}/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapper does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateProtocolMapper to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMapper does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientTemplateProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Create client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  return bp.EventSet("matchAddedClientTemplateProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateProtocolMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ template\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ template\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateProtocolMapperAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMapper:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMapperAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMapperAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client template protocol mapper") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientTemplateProtocolMapperAdded(id1, id2, realm) {
  var expectedDesc = "Create client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientTemplateProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client template protocol mapper with id " + id2 + " in client template " + id1 + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ template\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ template\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template protocol mapper add model ----

function postClientTemplateProtocolMappersAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Add client template protocol mapper model in client template " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "consentRequired": String(true),
    "consentText": "consentText_dummy",
    "config": config,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
}

function tryToAddExistingClientTemplateProtocolMapperAddModel(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var body = {
  };
  var description = "Verify that we cannot add another ClientTemplateProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateProtocolMapperAddModelExists(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientTemplateProtocolMapperAddModel exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientTemplateProtocolMapperAddModel exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMapperAddModel to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMapperAddModelDoesNotExist(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientTemplateProtocolMapperAddModel does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientTemplateProtocolMapperAddModel to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMapperAddModel does not exist");
    }
  });
}

function matchAddedClientTemplateProtocolMapperAddModel(id, realm) {
  var expectedDesc = "Add client template protocol mapper model in client template " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientTemplateProtocolMapperAddModel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ client\ template\ protocol\ mapper\ model\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ client\ template\ protocol\ mapper\ model\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateProtocolMapperAddModelAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMapperAddModel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMapperAddModelAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMapperAddModelAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client template protocol mapper add model") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForClientTemplateProtocolMapperAddModelAdded(id, realm) {
  var expectedDesc = "Add client template protocol mapper model in client template " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client template protocol mappers ----

function postClientTemplateProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Create client template protocol mapper in client template " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getClientTemplateProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Get all protocol mappers for client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientTemplateProtocolMappers(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientTemplateProtocolMappers...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateProtocolMappersExists(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMappers exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateProtocolMappers exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMappers to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMappersDoesNotExist(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMappers does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateProtocolMappers to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMappers does not exist");
    }
  });
}

function matchAddedClientTemplateProtocolMappers(id, realm) {
  var expectedDesc = "Create client template protocol mapper in client template " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientTemplateProtocolMappers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateProtocolMappersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ template\ protocol\ mapper\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ template\ protocol\ mapper\ in\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateProtocolMappersAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMappers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMappersAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMappersAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client template protocol mappers") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientTemplateProtocolMappersAdded(id, realm) {
  var expectedDesc = "Create client template protocol mapper in client template " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client template protocol mappers protocol ----

function getClientTemplateProtocolMappersProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mappers for protocol " + protocol + " in client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: client protocol mapper ----

function postClientProtocolMappersModels(id1, id2, realm) {
  var url = "/" + realm + "/clients/{id}/protocol-mappers/models";
  var description = "Create client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function deleteClientProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putClientProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
}

function getClientProtocolMappersModel(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/{id}/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientProtocolMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientProtocolMapperExists(id1, id2, realm) {
  var url = "/" + realm + "/clients/{id}/protocol-mappers/models";
  var description = "Verify ClientProtocolMapper exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientProtocolMapper exists");
          }
        }
      }
      return pvg.fail("Expected ClientProtocolMapper to exist but it does not");
    }
  });
}

function verifyClientProtocolMapperDoesNotExist(id1, id2, realm) {
  var url = "/" + realm + "/clients/{id}/protocol-mappers/models";
  var description = "Verify ClientProtocolMapper does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientProtocolMapper to not exist but it does");
          }
        }
      }
      return pvg.success("ClientProtocolMapper does not exist");
    }
  });
}

function tryToDeleteANonExistingClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Create client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  return bp.EventSet("matchAddedClientProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientProtocolMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientProtocolMapperAddedEvent(keyVal) {
  return bp.EventSet("AddClientProtocolMapper:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientProtocolMapperAdded() {
  return bp.EventSet("matchAnyClientProtocolMapperAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client protocol mapper") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientProtocolMapperAdded(id1, id2, realm) {
  var expectedDesc = "Create client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client protocol mapper with id " + id2 + " in client " + id1 + " in realm " + realm;
  return bp.EventSet("matchDeletedClientProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ protocol\ mapper\ with\ id\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client protocol mapper add model ----

function postClientProtocolMappersAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Add client protocol mapper model in client " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "consentRequired": String(true),
    "consentText": "consentText_dummy",
    "config": config,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
}

function tryToAddExistingClientProtocolMapperAddModel(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var body = {
  };
  var description = "Verify that we cannot add another ClientProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientProtocolMapperAddModelExists(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientProtocolMapperAddModel exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientProtocolMapperAddModel exists");
          }
        }
      }
      return pvg.fail("Expected ClientProtocolMapperAddModel to exist but it does not");
    }
  });
}

function verifyClientProtocolMapperAddModelDoesNotExist(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientProtocolMapperAddModel does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientProtocolMapperAddModel to not exist but it does");
          }
        }
      }
      return pvg.success("ClientProtocolMapperAddModel does not exist");
    }
  });
}

function matchAddedClientProtocolMapperAddModel(id, realm) {
  var expectedDesc = "Add client protocol mapper model in client " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientProtocolMapperAddModel", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ client\ protocol\ mapper\ model\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ client\ protocol\ mapper\ model\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientProtocolMapperAddModelAddedEvent(keyVal) {
  return bp.EventSet("AddClientProtocolMapperAddModel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientProtocolMapperAddModelAdded() {
  return bp.EventSet("matchAnyClientProtocolMapperAddModelAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client protocol mapper add model") > -1 && e.data.parameters.None !== undefined);
  });
}

function waitForClientProtocolMapperAddModelAdded(id, realm) {
  var expectedDesc = "Add client protocol mapper model in client " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client protocol mappers ----

function postClientProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Create client protocol mapper in client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getClientProtocolMappersModels(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Get all protocol mappers for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientProtocolMappers(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientProtocolMappers...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientProtocolMappersExists(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Verify ClientProtocolMappers exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientProtocolMappers exists");
          }
        }
      }
      return pvg.fail("Expected ClientProtocolMappers to exist but it does not");
    }
  });
}

function verifyClientProtocolMappersDoesNotExist(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Verify ClientProtocolMappers does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientProtocolMappers to not exist but it does");
          }
        }
      }
      return pvg.success("ClientProtocolMappers does not exist");
    }
  });
}

function matchAddedClientProtocolMappers(id, realm) {
  var expectedDesc = "Create client protocol mapper in client " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientProtocolMappers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientProtocolMappersAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ protocol\ mapper\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ protocol\ mapper\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientProtocolMappersAddedEvent(keyVal) {
  return bp.EventSet("AddClientProtocolMappers:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientProtocolMappersAdded() {
  return bp.EventSet("matchAnyClientProtocolMappersAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client protocol mappers") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientProtocolMappersAdded(id, realm) {
  var expectedDesc = "Create client protocol mapper in client " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: client protocol mappers protocol ----

function getClientProtocolMappersProtocol(id, protocol, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mappers for protocol " + protocol + " in client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: identityProvider ----

function postInstances(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Create identityProvider with alias " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
}

function deleteInstance(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Delete identityProvider with alias " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putInstance(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Update identityProvider with alias " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
}

function getInstance(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Get identityProvider with alias " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIdentityProvider(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another IdentityProvider...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIdentityProviderExists(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Verify IdentityProvider exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("IdentityProvider exists");
          }
        }
      }
      return pvg.fail("Expected IdentityProvider to exist but it does not");
    }
  });
}

function verifyIdentityProviderDoesNotExist(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Verify IdentityProvider does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected IdentityProvider to not exist but it does");
          }
        }
      }
      return pvg.success("IdentityProvider does not exist");
    }
  });
}

function tryToDeleteANonExistingIdentityProvider(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Verify we cannot delete non-existing IdentityProvider";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIdentityProvider(alias, realm) {
  var expectedDesc = "Create identityProvider with alias " + alias + " in realm " + realm;
  return bp.EventSet("matchAddedIdentityProvider", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ identityProvider\ with\ alias\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ identityProvider\ with\ alias\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIdentityProviderAddedEvent(keyVal) {
  return bp.EventSet("AddIdentityProvider:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyIdentityProviderAdded() {
  return bp.EventSet("matchAnyIdentityProviderAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create identityProvider") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForIdentityProviderAdded(alias, realm) {
  var expectedDesc = "Create identityProvider with alias " + alias + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIdentityProvider(alias, realm) {
  var expectedDesc = "Delete identityProvider with alias " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProvider", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ identityProvider\ with\ alias\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ identityProvider\ with\ alias\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: identityProviderMapper ----

function postMappers(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Create identityProviderMapper with name " + name + " and id " + id + " for identityProvider " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
}

function deleteMapper(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Delete identityProviderMapper with id " + id + " for identityProvider " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function putMapper(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Update identityProviderMapper with id " + id + " for identityProvider " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
}

function getMapper(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Get identityProviderMapper with id " + id + " for identityProvider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingIdentityProviderMapper(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another IdentityProviderMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIdentityProviderMapperExists(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Verify IdentityProviderMapper exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("IdentityProviderMapper exists");
          }
        }
      }
      return pvg.fail("Expected IdentityProviderMapper to exist but it does not");
    }
  });
}

function verifyIdentityProviderMapperDoesNotExist(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Verify IdentityProviderMapper does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected IdentityProviderMapper to not exist but it does");
          }
        }
      }
      return pvg.success("IdentityProviderMapper does not exist");
    }
  });
}

function tryToDeleteANonExistingIdentityProviderMapper(alias, id, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Verify we cannot delete non-existing IdentityProviderMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedIdentityProviderMapper(alias, id, name, realm) {
  var expectedDesc = "Create identityProviderMapper with name " + name + " and id " + id + " for identityProvider " + alias + " in realm " + realm;
  return bp.EventSet("matchAddedIdentityProviderMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ identityProviderMapper\ with\ name\ (.+)\ and\ id\ (.+)\ for\ identityProvider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ identityProviderMapper\ with\ name\ (.+)\ and\ id\ (.+)\ for\ identityProvider\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getIdentityProviderMapperAddedEvent(keyVal) {
  return bp.EventSet("AddIdentityProviderMapper:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyIdentityProviderMapperAdded() {
  return bp.EventSet("matchAnyIdentityProviderMapperAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create identityProviderMapper") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForIdentityProviderMapperAdded(alias, id, name, realm) {
  var expectedDesc = "Create identityProviderMapper with name " + name + " and id " + id + " for identityProvider " + alias + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedIdentityProviderMapper(alias, id, name, realm) {
  var expectedDesc = "Delete identityProviderMapper with id " + id + " for identityProvider " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProviderMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ identityProviderMapper\ with\ id\ (.+)\ for\ identityProvider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ identityProviderMapper\ with\ id\ (.+)\ for\ identityProvider\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: identityProviderManagementPermission ----

function putInstanceManagementPermissions(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/management/permissions";
  var description = "Update management permissions for identityProvider " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
}

function getInstanceManagementPermissions(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/management/permissions";
  var description = "Get management permissions for identityProvider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: group role mapping ----

function getGroupRoleMappings(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings";
  var description = "Get role mappings for group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function postGroupRoleMappingsRealm(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Add role mapping " + name + " with id " + id + " to group " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteGroupRoleMappingsRealm(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Delete role mapping " + name + " with id " + id + " from group " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getGroupRoleMappingsRealmAvailable(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm/available";
  var description = "Get available role mappings for group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getGroupRoleMappingsRealmComposite(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm/composite";
  var description = "Get composite role mappings for group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGroupRoleMapping(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another GroupRoleMapping...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupRoleMappingExists(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify GroupRoleMapping exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("GroupRoleMapping exists");
          }
        }
      }
      return pvg.fail("Expected GroupRoleMapping to exist but it does not");
    }
  });
}

function verifyGroupRoleMappingDoesNotExist(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify GroupRoleMapping does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected GroupRoleMapping to not exist but it does");
          }
        }
      }
      return pvg.success("GroupRoleMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingGroupRoleMapping(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify we cannot delete non-existing GroupRoleMapping";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGroupRoleMapping(briefRepresentation, id, name, realm) {
  var expectedDesc = "Add role mapping " + name + " with id " + id + " to group " + id + " in realm " + realm;
  return bp.EventSet("matchAddedGroupRoleMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ (.+)\ with\ id\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ (.+)\ with\ id\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupRoleMappingAddedEvent(keyVal) {
  return bp.EventSet("AddGroupRoleMapping:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyGroupRoleMappingAdded() {
  return bp.EventSet("matchAnyGroupRoleMappingAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create group role mapping") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForGroupRoleMappingAdded(briefRepresentation, id, name, realm) {
  var expectedDesc = "Add role mapping " + name + " with id " + id + " to group " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedGroupRoleMapping(briefRepresentation, id, name, realm) {
  var expectedDesc = "Delete role mapping " + name + " with id " + id + " from group " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedGroupRoleMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ (.+)\ with\ id\ (.+)\ from\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ (.+)\ with\ id\ (.+)\ from\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user role mapping ----

function getUserRoleMappings(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings";
  var description = "Get role mappings for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function postUserRoleMappingsRealm(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Add role mapping " + name + " with id " + id + " to user " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteUserRoleMappingsRealm(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Delete role mapping " + name + " with id " + id + " from user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getUserRoleMappingsRealmAvailable(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm/available";
  var description = "Get available role mappings for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function getUserRoleMappingsRealmComposite(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm/composite";
  var description = "Get composite role mappings for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserRoleMapping(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another UserRoleMapping...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserRoleMappingExists(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify UserRoleMapping exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("UserRoleMapping exists");
          }
        }
      }
      return pvg.fail("Expected UserRoleMapping to exist but it does not");
    }
  });
}

function verifyUserRoleMappingDoesNotExist(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify UserRoleMapping does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected UserRoleMapping to not exist but it does");
          }
        }
      }
      return pvg.success("UserRoleMapping does not exist");
    }
  });
}

function tryToDeleteANonExistingUserRoleMapping(briefRepresentation, id, name, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify we cannot delete non-existing UserRoleMapping";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserRoleMapping(briefRepresentation, id, name, realm) {
  var expectedDesc = "Add role mapping " + name + " with id " + id + " to user " + id + " in realm " + realm;
  return bp.EventSet("matchAddedUserRoleMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ (.+)\ with\ id\ (.+)\ to\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ (.+)\ with\ id\ (.+)\ to\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserRoleMappingAddedEvent(keyVal) {
  return bp.EventSet("AddUserRoleMapping:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserRoleMappingAdded() {
  return bp.EventSet("matchAnyUserRoleMappingAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create user role mapping") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForUserRoleMappingAdded(briefRepresentation, id, name, realm) {
  var expectedDesc = "Add role mapping " + name + " with id " + id + " to user " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserRoleMapping(briefRepresentation, id, name, realm) {
  var expectedDesc = "Delete role mapping " + name + " with id " + id + " from user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUserRoleMapping", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ (.+)\ with\ id\ (.+)\ from\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ (.+)\ with\ id\ (.+)\ from\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client certificate ----

function getCertificate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr;
  var description = "Get client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function postUpload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var description = "Upload client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
}

function postUploadCertificate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload-certificate";
  var description = "Upload certificate for client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
}

function postGenerate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/generate";
  var description = "Generate client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
}

function postGenerateAndDownload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/generate-and-download";
  var description = "Generate and download client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
}

function postDownload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/download";
  var description = "Download client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
}

function tryToAddExistingClientCertificate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientCertificate...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientCertificateExists(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var description = "Verify ClientCertificate exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientCertificate exists");
          }
        }
      }
      return pvg.fail("Expected ClientCertificate to exist but it does not");
    }
  });
}

function verifyClientCertificateDoesNotExist(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var description = "Verify ClientCertificate does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientCertificate to not exist but it does");
          }
        }
      }
      return pvg.success("ClientCertificate does not exist");
    }
  });
}

function matchAddedClientCertificate(attr, id, realm) {
  var expectedDesc = "Upload client certificate " + attr + " for client " + id + " in realm " + realm;
  return bp.EventSet("matchAddedClientCertificate", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientCertificateAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Upload\ client\ certificate\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Upload\ client\ certificate\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["attr", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientCertificateAddedEvent(keyVal) {
  return bp.EventSet("AddClientCertificate:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientCertificateAdded() {
  return bp.EventSet("matchAnyClientCertificateAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create client certificate") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientCertificateAdded(attr, id, realm) {
  var expectedDesc = "Upload client certificate " + attr + " for client " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

// ---- Entity: group ----

function createGroup(id, name, realm) {
  var url = "/" + realm + "/groups";
  var description = "Create group " + name + " with id " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function deleteGroup(id, name, realm) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Delete group with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function updateGroup(id, name, realm) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Update group " + name + " with id " + id + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getGroup(id, name, realm) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Get group with id " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGroup(id, name, realm) {
  var url = "/" + realm + "/groups";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another Group...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupExists(id, name, realm) {
  var url = "/" + realm + "/groups";
  var description = "Verify Group exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Group exists");
          }
        }
      }
      return pvg.fail("Expected Group to exist but it does not");
    }
  });
}

function verifyGroupDoesNotExist(id, name, realm) {
  var url = "/" + realm + "/groups";
  var description = "Verify Group does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Group to not exist but it does");
          }
        }
      }
      return pvg.success("Group does not exist");
    }
  });
}

function tryToDeleteANonExistingGroup(id, name, realm) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Verify we cannot delete non-existing Group";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGroup(id, name, realm) {
  var expectedDesc = "Create group " + name + " with id " + id + " in realm " + realm;
  return bp.EventSet("matchAddedGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ group\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ group\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupAddedEvent(keyVal) {
  return bp.EventSet("AddGroup:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyGroupAdded() {
  return bp.EventSet("matchAnyGroupAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create group") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForGroupAdded(id, name, realm) {
  var expectedDesc = "Create group " + name + " with id " + id + " in realm " + realm;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedGroup(id, name, realm) {
  var expectedDesc = "Delete group with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ group\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ group\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: groupRoleMappingClient ----

function postGroupRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Add role mapping to group " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , id: String(id)
    }
  });
}

function deleteGroupRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Delete role mapping from group " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getGroupRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Get role mappings for group " + id + " in realm " + realm + " for client " + client;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingGroupRoleMappingClient(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another GroupRoleMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupRoleMappingClientExists(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify GroupRoleMappingClient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("GroupRoleMappingClient exists");
          }
        }
      }
      return pvg.fail("Expected GroupRoleMappingClient to exist but it does not");
    }
  });
}

function verifyGroupRoleMappingClientDoesNotExist(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify GroupRoleMappingClient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected GroupRoleMappingClient to not exist but it does");
          }
        }
      }
      return pvg.success("GroupRoleMappingClient does not exist");
    }
  });
}

function tryToDeleteANonExistingGroupRoleMappingClient(client, id, realm) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing GroupRoleMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedGroupRoleMappingClient(client, id, realm) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  return bp.EventSet("matchAddedGroupRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupRoleMappingClientAddedEvent(keyVal) {
  return bp.EventSet("AddGroupRoleMappingClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyGroupRoleMappingClientAdded() {
  return bp.EventSet("matchAnyGroupRoleMappingClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create groupRoleMappingClient") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForGroupRoleMappingClientAdded(client, id, realm) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedGroupRoleMappingClient(client, id, realm) {
  var expectedDesc = "Delete role mapping from group " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  return bp.EventSet("matchDeletedGroupRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: userRoleMappingClient ----

function postUserRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Add role mapping to user " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , id: String(id)
    }
  });
}

function deleteUserRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Delete role mapping from user " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function getUserRoleMappingsClient(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Get role mappings for user " + id + " in realm " + realm + " for client " + client;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingUserRoleMappingClient(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another UserRoleMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserRoleMappingClientExists(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify UserRoleMappingClient exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("UserRoleMappingClient exists");
          }
        }
      }
      return pvg.fail("Expected UserRoleMappingClient to exist but it does not");
    }
  });
}

function verifyUserRoleMappingClientDoesNotExist(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify UserRoleMappingClient does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected UserRoleMappingClient to not exist but it does");
          }
        }
      }
      return pvg.success("UserRoleMappingClient does not exist");
    }
  });
}

function tryToDeleteANonExistingUserRoleMappingClient(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing UserRoleMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedUserRoleMappingClient(client, id, realm) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  return bp.EventSet("matchAddedUserRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserRoleMappingClientAddedEvent(keyVal) {
  return bp.EventSet("AddUserRoleMappingClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserRoleMappingClientAdded() {
  return bp.EventSet("matchAnyUserRoleMappingClientAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create userRoleMappingClient") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForUserRoleMappingClientAdded(client, id, realm) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedUserRoleMappingClient(client, id, realm) {
  var expectedDesc = "Delete role mapping from user " + id + " in realm " + realm + " for client " + client + " with role id " + id;
  return bp.EventSet("matchDeletedUserRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ for\ client\ (.+)\ with\ role\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role composite client ----

function getRoleCompositesClient(clientUuid, realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites/clients/" + clientUuid;
  var description = "Get client composites of role " + role-id + " for client " + clientUuid + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: role composite realm ----

function getRoleCompositesRealm(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites/realm";
  var description = "Get realm composites of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

// ---- Entity: clientInitialAccess ----

function postClientsInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Create clientInitialAccess with expiration " + expiration + " and count " + count;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200, 201, 204, 409],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
}

function getClientsInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Get clientInitialAccess list in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description }
  });
}

function deleteClientsInitialAcces(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access/" + id;
  var description = "Delete clientInitialAccess with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description }
  });
}

function tryToAddExistingClientInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var body = {
    "realm": String(realm)
  };
  var description = "Verify that we cannot add another ClientInitialAccess...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientInitialAccessExists(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Verify ClientInitialAccess exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientInitialAccess exists");
          }
        }
      }
      return pvg.fail("Expected ClientInitialAccess to exist but it does not");
    }
  });
}

function verifyClientInitialAccessDoesNotExist(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Verify ClientInitialAccess does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientInitialAccess to not exist but it does");
          }
        }
      }
      return pvg.success("ClientInitialAccess does not exist");
    }
  });
}

function tryToDeleteANonExistingClientInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access/" + id;
  var description = "Verify we cannot delete non-existing ClientInitialAccess";
  svc.delete(url, {
    expectedResponseCodes: [200, 400, 404],
    parameters: { description: description }
  });
}

function matchAddedClientInitialAccess(count, expiration, id, realm) {
  var expectedDesc = "Create clientInitialAccess with expiration " + expiration + " and count " + count;
  return bp.EventSet("matchAddedClientInitialAccess", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientInitialAccessAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ clientInitialAccess\ with\ expiration\ (.+)\ and\ count\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ clientInitialAccess\ with\ expiration\ (.+)\ and\ count\ (.+)$/);
  var captures = m.slice(1);
  var names = ["expiration", "count"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientInitialAccessAddedEvent(keyVal) {
  return bp.EventSet("AddClientInitialAccess:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientInitialAccessAdded() {
  return bp.EventSet("matchAnyClientInitialAccessAdded", function(e) {
    return !!(e.data && e.data.parameters && e.data.parameters.description && e.data.parameters.description.indexOf("Create clientInitialAccess") > -1 && e.data.parameters.realm !== undefined);
  });
}

function waitForClientInitialAccessAdded(count, expiration, id, realm) {
  var expectedDesc = "Create clientInitialAccess with expiration " + expiration + " and count " + count;
  waitFor(matchesDescription(expectedDesc));
}

function matchDeletedClientInitialAccess(count, expiration, id, realm) {
  var expectedDesc = "Delete clientInitialAccess with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientInitialAccess", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientInitialAccessDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ clientInitialAccess\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ clientInitialAccess\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
