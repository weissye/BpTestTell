//@provengo summon rest
// === Auto-generated interfaces.readable.js ===

var host = (typeof host !== 'undefined') ? host : 'localhost';
var port = (typeof port !== 'undefined') ? port : 8080;

const svc = new RESTSession("https://keycloak.example.com/admin/realms", "provengo-client", {
  headers: { "Content-Type": "application/json" },
});

function matchesDescriptionRegex(re) {
  return bp.EventSet("Match description", function (e) {
    return e && e.data && e.data.parameters && typeof e.data.parameters.description === "string"
           && re.test(e.data.parameters.description);
  });
}

// ---- Entity: realm ----

function addRealm() {
  var url = "/";
  var description = "Import a realm";
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRealm(realm) {
  var url = "/" + realm;
  var description = "Delete the realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRealm(realm) {
  var url = "/" + realm;
  var description = "Get the top-level representation of the realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRealm(realm) {
  var url = "/" + realm;
  var description = "Update the top-level information of the realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRealm() {
  return addRealm();
}

function verifyRealmExists(realm) {
  return getRealm(realm);
}

function verifyRealmDoesNotExist(realm) {
  return getRealm(realm);
}

function tryToDeleteANonExistingRealm(realm) {
  return deleteRealm(realm);
}

function matchAddedRealm(realm) {
  return bp.EventSet("matchAddedRealm", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyRealmAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Import a realm/)});
  var m = ev.data.parameters.description.match(/Import a realm/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedRealm(realm) {
  return bp.EventSet("matchDeletedRealm", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyRealmDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete the realm (.+)/)});
  var m = ev.data.parameters.description.match(/Delete the realm (.+)/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: adminevent ----

function getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Get admin events for realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAdminEvents(realm) {
  var url = "/" + realm + "/admin-events";
  var description = "Delete all admin events for realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyAdminEventExists(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes);
}

function verifyAdminEventDoesNotExist(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes);
}

function tryToDeleteANonExistingAdminEvent(realm) {
  return deleteAdminEvents(realm);
}

function matchDeletedAdminEvent(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return bp.EventSet("matchDeletedAdminEvent", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAdminEventDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete all admin events(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete all admin events(.+)?/);
  var captures = m.slice(1);
  var names = ["realm", "authClient", "authIpAddress", "authRealm", "authUser", "dateFrom", "dateTo", "first", "max", "operationTypes", "resourcePath", "resourceTypes"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: bruteforceuser ----

function getBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Get status of brute force user " + userId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Clear any user login failures for user " + userId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyBruteForceUserExists(realm, userId) {
  return getBruteForceUser(realm, userId);
}

function verifyBruteForceUserDoesNotExist(realm, userId) {
  return getBruteForceUser(realm, userId);
}

function tryToDeleteANonExistingBruteForceUser(realm, userId) {
  return deleteBruteForceUser(realm, userId);
}

function matchDeletedBruteForceUser(realm, userId) {
  return bp.EventSet("matchDeletedBruteForceUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyBruteForceUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Clear any user login failures for user (.+)/)});
  var m = ev.data.parameters.description.match(/Clear any user login failures for user (.+)/);
  var captures = m.slice(1);
  var names = ["realm", "userId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: bruteforceusers ----

function deleteBruteForceUsers(realm) {
  var url = "/" + realm + "/attack-detection/brute-force/users";
  var description = "Clear any user login failures for all users in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToDeleteANonExistingBruteForceUsers(realm) {
  return deleteBruteForceUsers(realm);
}

function matchDeletedBruteForceUsers(realm) {
  return bp.EventSet("matchDeletedBruteForceUsers", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyBruteForceUsersDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Clear any user login failures for all users(.+)?/)});
  var m = ev.data.parameters.description.match(/Clear any user login failures for all users(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authenticatorconfig ----

function addAuthenticatorConfig(realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Create new authenticator configuration in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAuthenticatorConfig(realm, id) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Delete authenticator configuration " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAuthenticatorConfig(realm, id) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Get authenticator configuration " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAuthenticatorConfig(realm, id) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Update authenticator configuration " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAuthenticatorConfig(realm) {
  return addAuthenticatorConfig(realm);
}

function verifyAuthenticatorConfigExists(realm, id) {
  return getAuthenticatorConfig(realm, id);
}

function verifyAuthenticatorConfigDoesNotExist(realm, id) {
  return getAuthenticatorConfig(realm, id);
}

function tryToDeleteANonExistingAuthenticatorConfig(realm, id) {
  return deleteAuthenticatorConfig(realm, id);
}

function matchAddedAuthenticatorConfig(realm) {
  return bp.EventSet("matchAddedAuthenticatorConfig", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticatorConfigAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create new authenticator configuration(.+)?/)});
  var m = ev.data.parameters.description.match(/Create new authenticator configuration(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedAuthenticatorConfig(realm) {
  return bp.EventSet("matchDeletedAuthenticatorConfig", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticatorConfigDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete authenticator configuration(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete authenticator configuration(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authenticationexecution ----

function addAuthenticationExecution(realm) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Add new authentication execution in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAuthenticationExecution(realm, executionId) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Delete authentication execution " + executionId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAuthenticationExecution(realm, executionId) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Get authentication execution " + executionId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAuthenticationExecutionConfig(realm, executionId) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Update execution " + executionId + " with new configuration in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAuthenticationExecution(realm) {
  return addAuthenticationExecution(realm);
}

function verifyAuthenticationExecutionExists(realm, executionId) {
  return getAuthenticationExecution(realm, executionId);
}

function verifyAuthenticationExecutionDoesNotExist(realm, executionId) {
  return getAuthenticationExecution(realm, executionId);
}

function tryToDeleteANonExistingAuthenticationExecution(realm, executionId) {
  return deleteAuthenticationExecution(realm, executionId);
}

function matchAddedAuthenticationExecution(realm) {
  return bp.EventSet("matchAddedAuthenticationExecution", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticationExecutionAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Add new authentication execution(.+)?/)});
  var m = ev.data.parameters.description.match(/Add new authentication execution(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedAuthenticationExecution(realm) {
  return bp.EventSet("matchDeletedAuthenticationExecution", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticationExecutionDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete authentication execution(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete authentication execution(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: authenticationflow ----

function addAuthenticationFlow(realm) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Create a new authentication flow in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function copyAuthenticationFlow(realm, flowAlias) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/copy";
  var description = "Copy existing authentication flow " + flowAlias + " under a new name in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addAuthenticationExecutionToFlow(realm, flowAlias) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/execution";
  var description = "Add new authentication execution to flow " + flowAlias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function addFlowWithExecutionToFlow(realm, flowAlias) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/flow";
  var description = "Add new flow with new execution to existing flow " + flowAlias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAuthenticationFlow(realm, id) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Delete authentication flow " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAuthenticationFlow(realm, id) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Get authentication flow " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getAuthenticationExecutionsForFlow(realm, flowAlias) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "Get authentication executions for flow " + flowAlias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAuthenticationFlow(realm, id) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Update authentication flow " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateAuthenticationExecutionsOfFlow(realm, flowAlias) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "Update authentication executions of flow " + flowAlias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingAuthenticationFlow(realm) {
  return addAuthenticationFlow(realm);
}

function verifyAuthenticationFlowExists(realm, id) {
  return getAuthenticationFlow(realm, id);
}

function verifyAuthenticationFlowDoesNotExist(realm, id) {
  return getAuthenticationFlow(realm, id);
}

function tryToDeleteANonExistingAuthenticationFlow(realm, id) {
  return deleteAuthenticationFlow(realm, id);
}

function matchAddedAuthenticationFlow(realm) {
  return bp.EventSet("matchAddedAuthenticationFlow", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticationFlowAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a new authentication flow(.+)?/)});
  var m = ev.data.parameters.description.match(/Create a new authentication flow(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedAuthenticationFlow(realm) {
  return bp.EventSet("matchDeletedAuthenticationFlow", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyAuthenticationFlowDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete authentication flow(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete authentication flow(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: requiredaction ----

function addRequiredAction(realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var description = "Register a new required action in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteRequiredAction(realm, alias) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Delete required action " + alias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRequiredAction(realm, alias) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Get required action " + alias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getRequiredActions(realm) {
  var url = "/" + realm + "/authentication/required-actions";
  var description = "Get required actions in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateRequiredAction(realm, alias) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Update required action " + alias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function lowerRequiredActionPriority(realm, alias) {
  var url = "/" + realm + "/authentication/required-actions/" + alias + "/lower-priority";
  var description = "Lower required action’s priority " + alias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function raiseRequiredActionPriority(realm, alias) {
  var url = "/" + realm + "/authentication/required-actions/" + alias + "/raise-priority";
  var description = "Raise required action’s priority " + alias + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingRequiredAction(realm) {
  return addRequiredAction(realm);
}

function verifyRequiredActionExists(realm, alias) {
  return getRequiredAction(realm, alias);
}

function verifyRequiredActionDoesNotExist(realm, alias) {
  return getRequiredAction(realm, alias);
}

function tryToDeleteANonExistingRequiredAction(realm, alias) {
  return deleteRequiredAction(realm, alias);
}

function matchAddedRequiredAction(realm) {
  return bp.EventSet("matchAddedRequiredAction", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyRequiredActionAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Register a new required action(.+)?/)});
  var m = ev.data.parameters.description.match(/Register a new required action(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedRequiredAction(realm) {
  return bp.EventSet("matchDeletedRequiredAction", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyRequiredActionDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete required action(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete required action(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client ----

function addClient(realm) {
  var url = "/" + realm + "/clients";
  var description = "Create a new client in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "POST",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteClient(realm, id) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Delete the client " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function getClient(realm, id) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Get representation of the client " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function updateClient(realm, id) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Update the client " + id + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "PUT",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function tryToAddExistingClient(realm) {
  return addClient(realm);
}

function verifyClientExists(realm, id) {
  return getClient(realm, id);
}

function verifyClientDoesNotExist(realm, id) {
  return getClient(realm, id);
}

function tryToDeleteANonExistingClient(realm, id) {
  return deleteClient(realm, id);
}

function matchAddedClient(realm) {
  return bp.EventSet("matchAddedClient", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyClientAdded() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Create a new client(.+)?/)});
  var m = ev.data.parameters.description.match(/Create a new client(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function matchDeletedClient(realm) {
  return bp.EventSet("matchDeletedClient", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyClientDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete the client(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete the client(.+)?/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user ----

function getBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Get status of a username in brute force detection for user " + userId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Clear any user login failures for the user " + userId + " in realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyUserExists(realm, userId) {
  return getBruteForceUser(realm, userId);
}

function verifyUserDoesNotExist(realm, userId) {
  return getBruteForceUser(realm, userId);
}

function tryToDeleteANonExistingUser(realm, userId) {
  return deleteBruteForceUser(realm, userId);
}

function matchDeletedUser(realm, userId) {
  return bp.EventSet("matchDeletedUser", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyUserDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Clear any user login failures for the user (.+)/)});
  var m = ev.data.parameters.description.match(/Clear any user login failures for the user (.+)/);
  var captures = m.slice(1);
  var names = ["realm", "userId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: webhook ----

function getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Get admin events for realm " + realm;
  var body = undefined;
  return svc.request({
    method: "GET",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function deleteAdminEvents(realm) {
  var url = "/" + realm + "/admin-events";
  var description = "Delete all admin events for realm " + realm;
  var body = undefined;
  return svc.request({
    method: "DELETE",
    url: url,
    parameters: { description: description },
    body: body
  });
}

function verifyWebhookExists(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes);
}

function verifyWebhookDoesNotExist(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return getAdminEvents(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes);
}

function tryToDeleteANonExistingWebhook(realm) {
  return deleteAdminEvents(realm);
}

function matchDeletedWebhook(realm, authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, resourcePath, resourceTypes) {
  return bp.EventSet("matchDeletedWebhook", function(e) {
      if (!e.data || !e.data.parameters || !e.data.parameters.description) return false;
      return e.data.parameters.description.includes(realm);
  });
}

function waitForAnyWebhookDeleted() {
  var ev = bp.sync({waitFor: matchesDescriptionRegex(/Delete all admin events(.+)?/)});
  var m = ev.data.parameters.description.match(/Delete all admin events(.+)?/);
  var captures = m.slice(1);
  var names = ["realm", "authClient", "authIpAddress", "authRealm", "authUser", "dateFrom", "dateTo", "first", "max", "operationTypes", "resourcePath", "resourceTypes"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}
