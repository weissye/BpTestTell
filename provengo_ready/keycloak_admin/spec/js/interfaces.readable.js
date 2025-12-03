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

function matchSuccess(desc) {
  return bp.EventSet("Success Event", function(e) {
    return e.name === "Done: " + desc;
  });
}

// ---- Entity: realm ----

function getRealm(realm) {
  var url = "/" + realm;
  var description = "Get realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateRealm(realm) {
  var url = "/" + realm;
  var description = "Update realm " + realm;
  var body = {
    "accessCodeLifespan": 1,
    "accessCodeLifespanLogin": 1,
    "accessCodeLifespanUserAction": 1,
    "accessTokenLifespan": 1,
    "accessTokenLifespanForImplicitFlow": 1,
    "accountTheme": "accountTheme_dummy",
    "actionTokenGeneratedByAdminLifespan": 1,
    "actionTokenGeneratedByUserLifespan": 1,
    "adminEventsDetailsEnabled": true,
    "adminEventsEnabled": true,
    "adminTheme": "adminTheme_dummy",
    "applicationScopeMappings": {},
    "applications": [],
    "attributes": {},
    "authenticationFlows": [],
    "authenticatorConfig": [],
    "browserFlow": "browserFlow_dummy",
    "browserSecurityHeaders": {},
    "bruteForceProtected": true,
    "certificate": "certificate_dummy",
    "clientAuthenticationFlow": "clientAuthenticationFlow_dummy",
    "clientOfflineSessionIdleTimeout": 1,
    "clientOfflineSessionMaxLifespan": 1,
    "clientPolicies": [],
    "clientProfiles": [],
    "clientScopeMappings": {},
    "clientScopes": [],
    "clientSessionIdleTimeout": 1,
    "clientSessionMaxLifespan": 1,
    "clientTemplates": [],
    "clients": [],
    "codeSecret": "codeSecret_dummy",
    "components": {},
    "defaultDefaultClientScopes": [],
    "defaultGroups": [],
    "defaultLocale": "defaultLocale_dummy",
    "defaultOptionalClientScopes": [],
    "defaultRole": "defaultRole_dummy",
    "defaultRoles": [],
    "defaultSignatureAlgorithm": "defaultSignatureAlgorithm_dummy",
    "directGrantFlow": "directGrantFlow_dummy",
    "displayName": "displayName_dummy",
    "displayNameHtml": "displayNameHtml_dummy",
    "dockerAuthenticationFlow": "dockerAuthenticationFlow_dummy",
    "duplicateEmailsAllowed": true,
    "editUsernameAllowed": true,
    "emailTheme": "emailTheme_dummy",
    "enabled": true,
    "enabledEventTypes": [],
    "eventsEnabled": true,
    "eventsExpiration": 1,
    "eventsListeners": [],
    "failureFactor": 1,
    "federatedUsers": [],
    "groups": [],
    "id": "id_dummy",
    "identityProviderMappers": [],
    "identityProviders": [],
    "internationalizationEnabled": true,
    "keycloakVersion": "keycloakVersion_dummy",
    "loginTheme": "loginTheme_dummy",
    "loginWithEmailAllowed": true,
    "maxDeltaTimeSeconds": 1,
    "maxFailureWaitSeconds": 1,
    "minimumQuickLoginWaitSeconds": 1,
    "notBefore": 1,
    "oAuth2DeviceCodeLifespan": 1,
    "oAuth2DevicePollingInterval": 1,
    "oauth2DeviceCodeLifespan": 1,
    "oauth2DevicePollingInterval": 1,
    "oauthClients": [],
    "offlineSessionIdleTimeout": 1,
    "offlineSessionMaxLifespan": 1,
    "offlineSessionMaxLifespanEnabled": true,
    "otpPolicyAlgorithm": "otpPolicyAlgorithm_dummy",
    "otpPolicyCodeReusable": true,
    "otpPolicyDigits": 1,
    "otpPolicyInitialCounter": 1,
    "otpPolicyLookAheadWindow": 1,
    "otpPolicyPeriod": 1,
    "otpPolicyType": "otpPolicyType_dummy",
    "otpSupportedApplications": [],
    "passwordCredentialGrantAllowed": true,
    "passwordPolicy": "passwordPolicy_dummy",
    "permanentLockout": true,
    "privateKey": "privateKey_dummy",
    "protocolMappers": [],
    "publicKey": "publicKey_dummy",
    "quickLoginCheckMilliSeconds": 1,
    "realm": String(realm),
    "realmCacheEnabled": true,
    "refreshTokenMaxReuse": 1,
    "registrationAllowed": true,
    "registrationEmailAsUsername": true,
    "registrationFlow": "registrationFlow_dummy",
    "rememberMe": true,
    "requiredActions": [],
    "requiredCredentials": [],
    "resetCredentialsFlow": "resetCredentialsFlow_dummy",
    "resetPasswordAllowed": true,
    "revokeRefreshToken": true,
    "roles": "roles_dummy",
    "scopeMappings": [],
    "smtpServer": {},
    "social": true,
    "socialProviders": {},
    "sslRequired": "sslRequired_dummy",
    "ssoSessionIdleTimeout": 1,
    "ssoSessionIdleTimeoutRememberMe": 1,
    "ssoSessionMaxLifespan": 1,
    "ssoSessionMaxLifespanRememberMe": 1,
    "supportedLocales": [],
    "updateProfileOnInitialSocialLogin": true,
    "userCacheEnabled": true,
    "userFederationMappers": [],
    "userFederationProviders": [],
    "userManagedAccessAllowed": true,
    "users": [],
    "verifyEmail": true,
    "waitIncrementSeconds": 1,
    "webAuthnPolicyAcceptableAaguids": [],
    "webAuthnPolicyAttestationConveyancePreference": "webAuthnPolicyAttestationConveyancePreference_dummy",
    "webAuthnPolicyAuthenticatorAttachment": "webAuthnPolicyAuthenticatorAttachment_dummy",
    "webAuthnPolicyAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyCreateTimeout": 1,
    "webAuthnPolicyPasswordlessAcceptableAaguids": [],
    "webAuthnPolicyPasswordlessAttestationConveyancePreference": "webAuthnPolicyPasswordlessAttestationConveyancePreference_dummy",
    "webAuthnPolicyPasswordlessAuthenticatorAttachment": "webAuthnPolicyPasswordlessAuthenticatorAttachment_dummy",
    "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": true,
    "webAuthnPolicyPasswordlessCreateTimeout": 1,
    "webAuthnPolicyPasswordlessRequireResidentKey": "webAuthnPolicyPasswordlessRequireResidentKey_dummy",
    "webAuthnPolicyPasswordlessRpEntityName": "webAuthnPolicyPasswordlessRpEntityName_dummy",
    "webAuthnPolicyPasswordlessRpId": "webAuthnPolicyPasswordlessRpId_dummy",
    "webAuthnPolicyPasswordlessSignatureAlgorithms": [],
    "webAuthnPolicyPasswordlessUserVerificationRequirement": "webAuthnPolicyPasswordlessUserVerificationRequirement_dummy",
    "webAuthnPolicyRequireResidentKey": "webAuthnPolicyRequireResidentKey_dummy",
    "webAuthnPolicyRpEntityName": "webAuthnPolicyRpEntityName_dummy",
    "webAuthnPolicyRpId": "webAuthnPolicyRpId_dummy",
    "webAuthnPolicySignatureAlgorithms": [],
    "webAuthnPolicyUserVerificationRequirement": "webAuthnPolicyUserVerificationRequirement_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRealm(realm) {
  var url = "/" + realm;
  var description = "Delete realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingRealm(realm) {
  var url = "/" + realm;
  var description = "Verify we cannot delete non-existing Realm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
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

// ---- Entity: admin event ----

function getAdminEvents(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Get admin events for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteAdminEvents(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Delete admin events for realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingAdminEvent(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Verify we cannot delete non-existing AdminEvent";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedAdminEvent(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes) {
  var expectedDesc = "Delete admin events for realm " + realm;
  return bp.EventSet("matchDeletedAdminEvent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAdminEventDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ admin\ events\ for\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ admin\ events\ for\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client description converter ----

function createClientDescriptionConverter(realm) {
  var url = "/" + realm + "/client-description-converter";
  var description = "Create client description converter in realm " + realm + " with data {body}";
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingClientDescriptionConverter(realm) {
  var url = "/" + realm + "/client-description-converter";
  var body = {
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientDescriptionConverter...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientDescriptionConverterExists(realm) {
  var url = "/" + realm + "/client-description-converter";
  var description = "Verify ClientDescriptionConverter exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientDescriptionConverter exists");
          }
        }
      }
      return pvg.fail("Expected ClientDescriptionConverter to exist but it does not");
    }
  });
}

function verifyClientDescriptionConverterDoesNotExist(realm) {
  var url = "/" + realm + "/client-description-converter";
  var description = "Verify ClientDescriptionConverter does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientDescriptionConverter to not exist but it does");
          }
        }
      }
      return pvg.success("ClientDescriptionConverter does not exist");
    }
  });
}

function matchAddedClientDescriptionConverter(realm) {
  var expectedDesc = "Create client description converter in realm " + realm + " with data {body}";
  return matchSuccess(expectedDesc);
}

function waitForAnyClientDescriptionConverterAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ description\ converter\ in\ realm\ (.+)\ with\ data\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ description\ converter\ in\ realm\ (.+)\ with\ data\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "body"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientDescriptionConverterAddedEvent(keyVal) {
  return bp.EventSet("AddClientDescriptionConverter:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientDescriptionConverterAdded() {
  return bp.EventSet("matchAnyClientDescriptionConverterAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client description converter") > -1;
  });
}

function waitForClientDescriptionConverterAdded(realm) {
  var expectedDesc = "Create client description converter in realm " + realm + " with data {body}";
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client policies ----

function getClientPolicies(realm) {
  var url = "/" + realm + "/client-policies/policies";
  var description = "Get client policies for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientPolicies(realm) {
  var url = "/" + realm + "/client-policies/policies";
  var description = "Update client policies for realm " + realm;
  var body = {
    "policies": [],
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: client profiles ----

function getClientProfiles(include-global-profiles, realm) {
  var url = "/" + realm + "/client-policies/profiles";
  var description = "Get client profiles for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientProfiles(include-global-profiles, realm) {
  var url = "/" + realm + "/client-policies/profiles";
  var description = "Update client profiles for realm " + realm;
  var body = {
    "globalProfiles": [],
    "profiles": [],
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: client session stats ----

function getClientSessionStats(realm) {
  var url = "/" + realm + "/client-session-stats";
  var description = "Get client session stats for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: credential registrators ----

function getCredentialRegistrators(realm) {
  var url = "/" + realm + "/credential-registrators";
  var description = "Get credential registrators for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: default default client scope ----

function updateDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Update default default client scope " + clientScopeId + " in realm " + realm;
  var body = {
    "clientScopeId": String(clientScopeId),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , clientScopeId: String(clientScopeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Delete default default client scope " + clientScopeId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultDefaultClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
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

// ---- Entity: default group ----

function putDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Update default group " + groupId + " in realm " + realm;
  var body = {
    "groupId": String(groupId),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , groupId: String(groupId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Delete default group " + groupId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getDefaultGroups(groupId, realm) {
  var url = "/" + realm + "/default-groups";
  var description = "Get default groups in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToDeleteANonExistingDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Verify we cannot delete non-existing DefaultGroup";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
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

// ---- Entity: default optional client scope ----

function putDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Update default optional client scope " + clientScopeId + " in realm " + realm;
  var body = {
    "clientScopeId": String(clientScopeId),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , clientScopeId: String(clientScopeId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Delete default optional client scope " + clientScopeId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getDefaultOptionalClientScopes(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes";
  var description = "Get default optional client scopes in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToDeleteANonExistingDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultOptionalClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
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

// ---- Entity: event ----

function getEvents(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user) {
  var url = "/" + realm + "/events";
  var description = "Get events in realm " + realm + " filtered by client " + client + ", dateFrom " + dateFrom + ", dateTo " + dateTo + ", first " + first + ", ipAddress " + ipAddress + ", max " + max + ", type " + type + ", user " + user;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteEvents(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user) {
  var url = "/" + realm + "/events";
  var description = "Delete events in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingEvent(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user) {
  var url = "/" + realm + "/events";
  var description = "Verify we cannot delete non-existing Event";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedEvent(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user) {
  var expectedDesc = "Delete events in realm " + realm;
  return bp.EventSet("matchDeletedEvent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyEventDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ events\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ events\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: events config ----

function getEventsConfig(realm) {
  var url = "/" + realm + "/events/config";
  var description = "Get events config in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putEventsConfig(realm) {
  var url = "/" + realm + "/events/config";
  var description = "Update events config in realm " + realm;
  var body = {
    "adminEventsDetailsEnabled": true,
    "adminEventsEnabled": true,
    "enabledEventTypes": [],
    "eventsEnabled": true,
    "eventsExpiration": 1,
    "eventsListeners": [],
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: group by path ----

function getGroupByPath(path, realm) {
  var url = "/" + realm + "/group-by-path/" + path;
  var description = "Get group by path " + path + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: localization ----

function getLocalizationByRealm(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization";
  var description = "Get localization in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getLocalizationByRealmByLocale(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Get localization in realm " + realm + " for locale " + locale;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function postLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Add localization in realm " + realm + " for locale " + locale;
  var body = {
    "locale": String(locale),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , key: String(key)
      , locale: String(locale)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteLocalizationByRealmByLocale(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Delete localization in realm " + realm + " for locale " + locale;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getLocalizationByRealmByLocaleByKey(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Get localization in realm " + realm + " for locale " + locale + " and key " + key;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Update localization in realm " + realm + " for locale " + locale + " and key " + key;
  var body = {
    "key": String(key),
    "locale": String(locale),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , key: String(key)
      , locale: String(locale)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteLocalizationByRealmByLocaleByKey(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Delete localization in realm " + realm + " for locale " + locale + " and key " + key;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var body = {
    "locale": String(locale),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another Localization...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyLocalizationExists(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Verify Localization with realm " + realm + " exists";
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

function verifyLocalizationDoesNotExist(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Verify Localization with realm " + realm + " does not exist";
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

function matchAddedLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var expectedDesc = "Add localization in realm " + realm + " for locale " + locale;
  return matchSuccess(expectedDesc);
}

function waitForAnyLocalizationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ localization\ in\ realm\ (.+)\ for\ locale\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ localization\ in\ realm\ (.+)\ for\ locale\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create localization") > -1;
  });
}

function waitForLocalizationAdded(key, locale, realm, useRealmDefaultLocaleFallback) {
  var expectedDesc = "Add localization in realm " + realm + " for locale " + locale;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: session ----

function deleteSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Delete session " + session + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Verify we cannot delete non-existing Session";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
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

// ---- Entity: usersManagementPermissions ----

function getUsersManagementPermissions(realm) {
  var url = "/" + realm + "/users-management-permissions";
  var description = "Get users management permissions in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putUsersManagementPermissions(realm) {
  var url = "/" + realm + "/users-management-permissions";
  var description = "Update users management permissions in realm " + realm;
  var body = {
    "enabled": true,
    "realm": String(realm),
    "resource": "resource_dummy",
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: authenticationConfig ----

function postAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Create authenticationConfig with id " + id;
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Get authenticationConfig with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Update authenticationConfig with id " + id;
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Delete authenticationConfig with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config";
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another AuthenticationConfig...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthenticationConfigExists(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Verify AuthenticationConfig with realm " + realm + " exists";
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

function verifyAuthenticationConfigDoesNotExist(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Verify AuthenticationConfig with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Verify we cannot delete non-existing AuthenticationConfig";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationConfig(alias, config, id, realm) {
  var expectedDesc = "Create authenticationConfig with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthenticationConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ authenticationConfig\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ authenticationConfig\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create authenticationConfig") > -1;
  });
}

function waitForAuthenticationConfigAdded(alias, config, id, realm) {
  var expectedDesc = "Create authenticationConfig with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAuthenticationConfig(alias, config, id, realm) {
  var expectedDesc = "Delete authenticationConfig with id " + id;
  return bp.EventSet("matchDeletedAuthenticationConfig", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationConfigDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ authenticationConfig\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ authenticationConfig\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: execution ----

function postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Create execution with executionId " + executionId;
  var body = {
    "authenticator": String(authenticator),
    "authenticatorConfig": String(authenticatorConfig),
    "authenticatorFlow": authenticatorFlow,
    "autheticatorFlow": autheticatorFlow,
    "executionId": String(executionId),
    "flowId": String(flowId),
    "id": String(id),
    "parentFlow": String(parentFlow),
    "priority": Number(priority),
    "realm": String(realm),
    "requirement": String(requirement),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , flowId: String(flowId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Get execution with executionId " + executionId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Delete execution with executionId " + executionId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions";
  var body = {
    "authenticator": String(authenticator),
    "authenticatorConfig": String(authenticatorConfig),
    "authenticatorFlow": authenticatorFlow,
    "autheticatorFlow": autheticatorFlow,
    "executionId": String(executionId),
    "flowId": String(flowId),
    "id": String(id),
    "parentFlow": String(parentFlow),
    "priority": Number(priority),
    "requirement": String(requirement),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another Execution...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Verify Execution with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Execution exists");
          }
        }
      }
      return pvg.fail("Expected Execution to exist but it does not");
    }
  });
}

function verifyExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions";
  var description = "Verify Execution with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Execution to not exist but it does");
          }
        }
      }
      return pvg.success("Execution does not exist");
    }
  });
}

function tryToDeleteANonExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Verify we cannot delete non-existing Execution";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var expectedDesc = "Create execution with executionId " + executionId;
  return matchSuccess(expectedDesc);
}

function waitForAnyExecutionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ execution\ with\ executionId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ execution\ with\ executionId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["executionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getExecutionAddedEvent(keyVal) {
  return bp.EventSet("AddExecution:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyExecutionAdded() {
  return bp.EventSet("matchAnyExecutionAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create execution") > -1;
  });
}

function waitForExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var expectedDesc = "Create execution with executionId " + executionId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var expectedDesc = "Delete execution with executionId " + executionId;
  return bp.EventSet("matchDeletedExecution", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyExecutionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ execution\ with\ executionId\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ execution\ with\ executionId\ (.+)$/);
  var captures = m.slice(1);
  var names = ["executionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: executionConfig ----

function postExecutionConfig(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Create executionConfig with id " + id + " for execution " + executionId;
  var body = {
    "alias": String(alias),
    "config": config,
    "executionId": String(executionId),
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , executionId: String(executionId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getExecutionConfig(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config/" + id;
  var description = "Get executionConfig with id " + id + " for execution " + executionId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingExecutionConfig(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var body = {
    "alias": String(alias),
    "config": config,
    "executionId": String(executionId),
    "id": String(id),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ExecutionConfig...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyExecutionConfigExists(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Verify ExecutionConfig with realm " + realm + " exists";
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

function verifyExecutionConfigDoesNotExist(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Verify ExecutionConfig with realm " + realm + " does not exist";
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

function matchAddedExecutionConfig(alias, config, executionId, id, realm) {
  var expectedDesc = "Create executionConfig with id " + id + " for execution " + executionId;
  return matchSuccess(expectedDesc);
}

function waitForAnyExecutionConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ executionConfig\ with\ id\ (.+)\ for\ execution\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ executionConfig\ with\ id\ (.+)\ for\ execution\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "executionId"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create executionConfig") > -1;
  });
}

function waitForExecutionConfigAdded(alias, config, executionId, id, realm) {
  var expectedDesc = "Create executionConfig with id " + id + " for execution " + executionId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: authentication flow ----

function createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Create authentication flow in realm " + realm;
  var body = {
    "alias": String(alias),
    "authenticationExecutions": String(authenticationExecutions),
    "builtIn": builtIn,
    "description": String(description),
    "id": String(id),
    "providerId": String(providerId),
    "realm": String(realm),
    "topLevel": topLevel,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , flowAlias: String(flowAlias)
      , id: String(id)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Get authentication flow " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Update authentication flow " + id + " in realm " + realm;
  var body = {
    "alias": String(alias),
    "authenticationExecutions": String(authenticationExecutions),
    "builtIn": builtIn,
    "description": String(description),
    "id": String(id),
    "providerId": String(providerId),
    "realm": String(realm),
    "topLevel": topLevel,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , flowAlias: String(flowAlias)
      , id: String(id)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Delete authentication flow " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function listAuthenticationFlows(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var description = "List authentication flows in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function copyAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/copy";
  var description = "Copy authentication flow " + flowAlias + " in realm " + realm;
  var body = {
    "flowAlias": String(flowAlias),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , flowAlias: String(flowAlias)
      , id: String(id)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var body = {
    "alias": String(alias),
    "authenticationExecutions": String(authenticationExecutions),
    "builtIn": builtIn,
    "description": String(description),
    "id": String(id),
    "providerId": String(providerId),
    "realm": String(realm),
    "topLevel": topLevel,
  };
  var description = "Verify that we cannot add another AuthenticationFlow...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Verify AuthenticationFlow with realm " + realm + " exists";
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

function verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Verify AuthenticationFlow with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows/" + id;
  var description = "Verify we cannot delete non-existing AuthenticationFlow";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var expectedDesc = "Create authentication flow in realm " + realm;
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create authentication flow") > -1;
  });
}

function waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var expectedDesc = "Create authentication flow in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
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

// ---- Entity: authentication execution ----

function raiseExecutionPriority(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/raise-priority";
  var description = "Raise priority of execution " + executionId + " in realm " + realm;
  var body = {
    "executionId": String(executionId),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , flowAlias: String(flowAlias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function listExecutions(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "List executions for flow " + flowAlias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateExecutions(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "Update executions for flow " + flowAlias + " in realm " + realm;
  var body = {
    "alias": "alias_dummy",
    "authenticationConfig": "authenticationConfig_dummy",
    "authenticationFlow": true,
    "configurable": true,
    "description": "description_dummy",
    "displayName": "displayName_dummy",
    "flowAlias": String(flowAlias),
    "flowId": "flowId_dummy",
    "id": "id_dummy",
    "index": 1,
    "level": 1,
    "providerId": "providerId_dummy",
    "realm": String(realm),
    "requirement": "requirement_dummy",
    "requirementChoices": [],
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , flowAlias: String(flowAlias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function addExecution(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/execution";
  var description = "Add execution to flow " + flowAlias + " in realm " + realm;
  var body = {
    "flowAlias": String(flowAlias),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , flowAlias: String(flowAlias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function addFlowExecution(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/flow";
  var description = "Add flow execution to flow " + flowAlias + " in realm " + realm;
  var body = {
    "flowAlias": String(flowAlias),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , executionId: String(executionId)
      , flowAlias: String(flowAlias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: required action ----

function postRegisterRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var description = "Create required action " + alias + " in realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Get required action " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Update required action " + alias + " in realm " + realm;
  var body = {
    "alias": String(alias),
    "config": {},
    "defaultAction": true,
    "enabled": true,
    "name": "name_dummy",
    "priority": 1,
    "providerId": "providerId_dummy",
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/required-actions/" + alias;
  var description = "Delete required action " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRequiredAction(alias, realm) {
  var url = "/" + realm + "/authentication/register-required-action";
  var body = {
    "realm": String(realm),
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
  var description = "Verify RequiredAction with realm " + realm + " exists";
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
  var description = "Verify RequiredAction with realm " + realm + " does not exist";
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
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedRequiredAction(alias, realm) {
  var expectedDesc = "Create required action " + alias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyRequiredActionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ required\ action\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ required\ action\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alias", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create required action") > -1;
  });
}

function waitForRequiredActionAdded(alias, realm) {
  var expectedDesc = "Create required action " + alias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
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

function getClientByRealmById(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id;
  var description = "Get client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function postClientPushRevocation(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/push-revocation";
  var description = "Post client push revocation for client " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , id: String(id)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function postRegistrationAccessToken(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/registration-access-token";
  var description = "Post registration access token for client " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , id: String(id)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function getServiceAccountUser(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/service-account-user";
  var description = "Get service account user for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getSessionCount(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/session-count";
  var description = "Get session count for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getTestNodesAvailable(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/test-nodes-available";
  var description = "Get test nodes available for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getClientUserSessions(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/user-sessions";
  var description = "Get user sessions for client " + id + " in realm " + realm + " with paging first " + first + " max " + max;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client node ----

function postNodes(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes";
  var description = "Add node " + node + " to client " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "node": String(node),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , node: String(node)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteNode(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes/" + node;
  var description = "Delete node " + node + " from client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingClientNode(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes";
  var body = {
    "id": String(id),
    "node": String(node),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientNode...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientNodeExists(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes";
  var description = "Verify ClientNode with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientNode exists");
          }
        }
      }
      return pvg.fail("Expected ClientNode to exist but it does not");
    }
  });
}

function verifyClientNodeDoesNotExist(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes";
  var description = "Verify ClientNode with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientNode to not exist but it does");
          }
        }
      }
      return pvg.success("ClientNode does not exist");
    }
  });
}

function tryToDeleteANonExistingClientNode(id, node, realm) {
  var url = "/" + realm + "/clients/" + id + "/nodes/" + node;
  var description = "Verify we cannot delete non-existing ClientNode";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientNode(id, node, realm) {
  var expectedDesc = "Add node " + node + " to client " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientNodeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ node\ (.+)\ to\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ node\ (.+)\ to\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["node", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientNodeAddedEvent(keyVal) {
  return bp.EventSet("AddClientNode:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientNodeAdded() {
  return bp.EventSet("matchAnyClientNodeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client node") > -1;
  });
}

function waitForClientNodeAdded(id, node, realm) {
  var expectedDesc = "Add node " + node + " to client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientNode(id, node, realm) {
  var expectedDesc = "Delete node " + node + " from client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientNode", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientNodeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ node\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ node\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["node", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client management permissions ----

function getClientManagementPermissions(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/management/permissions";
  var description = "Get management permissions for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putClientManagementPermissions(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/management/permissions";
  var description = "Update management permissions for client " + id + " in realm " + realm;
  var body = {
    "enabled": true,
    "id": String(id),
    "realm": String(realm),
    "resource": "resource_dummy",
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: optional client scope ----

function putOptionalClientScope(clientScopeId, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/optional-client-scopes/" + clientScopeId;
  var description = "Update optional client scope " + clientScopeId + " for client " + id + " in realm " + realm;
  var body = {
    "clientScopeId": String(clientScopeId),
    "id": String(id),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , clientScopeId: String(clientScopeId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteOptionalClientScope(clientScopeId, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/optional-client-scopes/" + clientScopeId;
  var description = "Delete optional client scope " + clientScopeId + " from client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingOptionalClientScope(clientScopeId, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/optional-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing OptionalClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedOptionalClientScope(clientScopeId, id, realm) {
  var expectedDesc = "Delete optional client scope " + clientScopeId + " from client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedOptionalClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyOptionalClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ optional\ client\ scope\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ optional\ client\ scope\ (.+)\ from\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["clientScopeId", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: installation provider ----

function getInstallationProvider(id, providerId, realm) {
  var url = "/" + realm + "/clients/" + id + "/installation/providers/" + providerId;
  var description = "Get installation provider " + providerId + " for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client evaluate scope mappings ----

function getGranted(id, realm, roleContainerId, scope) {
  var url = "/" + realm + "/clients/" + id + "/evaluate-scopes/scope-mappings/" + roleContainerId + "/granted";
  var description = "Get granted scopes " + scope + " for role container " + roleContainerId + " of client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getNotGranted(id, realm, roleContainerId, scope) {
  var url = "/" + realm + "/clients/" + id + "/evaluate-scopes/scope-mappings/" + roleContainerId + "/not-granted";
  var description = "Get not granted scopes " + scope + " for role container " + roleContainerId + " of client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: offline session ----

function getOfflineSessionCount(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/offline-session-count";
  var description = "Get offline session count for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getOfflineSessions(first, id, max, realm) {
  var url = "/" + realm + "/clients/" + id + "/offline-sessions";
  var description = "Get offline sessions for client " + id + " in realm " + realm + " with paging offset " + first + " and max " + max;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: optional client scopes list ----

function getOptionalClientScopes(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/optional-client-scopes";
  var description = "Get optional client scopes for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: user ----

function createUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users";
  var description = "Create user with realm " + realm;
  var body = {
    "access": access,
    "applicationRoles": applicationRoles,
    "attributes": attributes,
    "clientConsents": String(clientConsents),
    "clientRoles": clientRoles,
    "createdTimestamp": Number(createdTimestamp),
    "credentials": String(credentials),
    "disableableCredentialTypes": String(disableableCredentialTypes),
    "email": String(email),
    "emailVerified": emailVerified,
    "enabled": enabled,
    "federatedIdentities": String(federatedIdentities),
    "federationLink": String(federationLink),
    "firstName": String(firstName),
    "groups": String(groups),
    "id": String(id),
    "lastName": String(lastName),
    "notBefore": Number(notBefore),
    "origin": String(origin),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "requiredActions": String(requiredActions),
    "self": String(self),
    "serviceAccountClientId": String(serviceAccountClientId),
    "socialLinks": String(socialLinks),
    "totp": totp,
    "username": String(username),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Get user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Update user " + id + " in realm " + realm;
  var body = {
    "access": access,
    "applicationRoles": applicationRoles,
    "attributes": attributes,
    "clientConsents": String(clientConsents),
    "clientRoles": clientRoles,
    "createdTimestamp": Number(createdTimestamp),
    "credentials": String(credentials),
    "disableableCredentialTypes": String(disableableCredentialTypes),
    "email": String(email),
    "emailVerified": emailVerified,
    "enabled": enabled,
    "federatedIdentities": String(federatedIdentities),
    "federationLink": String(federationLink),
    "firstName": String(firstName),
    "groups": String(groups),
    "id": String(id),
    "lastName": String(lastName),
    "notBefore": Number(notBefore),
    "origin": String(origin),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "requiredActions": String(requiredActions),
    "self": String(self),
    "serviceAccountClientId": String(serviceAccountClientId),
    "socialLinks": String(socialLinks),
    "totp": totp,
    "username": String(username),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Delete user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function postLogout(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/logout";
  var description = "Logout user " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getOfflineSession(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/offline-sessions/" + clientUuid;
  var description = "Get offline session " + clientUuid + " for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putResetPassword(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/reset-password";
  var description = "Reset password for user " + id + " in realm " + realm;
  var body = {
    "algorithm": "algorithm_dummy",
    "config": {},
    "counter": 1,
    "createdDate": 1,
    "credentialData": "credentialData_dummy",
    "device": "device_dummy",
    "digits": 1,
    "hashIterations": 1,
    "hashedSaltedValue": "hashedSaltedValue_dummy",
    "id": String(id),
    "period": 1,
    "priority": 1,
    "realm": String(realm),
    "salt": "salt_dummy",
    "secretData": "secretData_dummy",
    "temporary": true,
    "type": "type_dummy",
    "userLabel": "userLabel_dummy",
    "value": "value_dummy",
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function putResetPasswordEmail(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/reset-password-email";
  var description = "Reset password email for user " + id + " in realm " + realm + " with client_id " + client_id + " and redirect_uri " + redirect_uri;
  var body = {
    "client_id": String(client_id),
    "id": String(id),
    "realm": String(realm),
    "redirect_uri": String(redirect_uri),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function putSendVerifyEmail(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/send-verify-email";
  var description = "Send verify email to user " + id + " in realm " + realm + " with client_id " + client_id + " and redirect_uri " + redirect_uri;
  var body = {
    "client_id": String(client_id),
    "id": String(id),
    "realm": String(realm),
    "redirect_uri": String(redirect_uri),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , clientUuid: String(clientUuid)
      , client_id: String(client_id)
      , id: String(id)
      , serviceAccountClientId: String(serviceAccountClientId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getSessions(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id + "/sessions";
  var description = "Get sessions for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users";
  var body = {
    "access": access,
    "applicationRoles": applicationRoles,
    "attributes": attributes,
    "clientConsents": String(clientConsents),
    "clientRoles": clientRoles,
    "createdTimestamp": Number(createdTimestamp),
    "credentials": String(credentials),
    "disableableCredentialTypes": String(disableableCredentialTypes),
    "email": String(email),
    "emailVerified": emailVerified,
    "enabled": enabled,
    "federatedIdentities": String(federatedIdentities),
    "federationLink": String(federationLink),
    "firstName": String(firstName),
    "groups": String(groups),
    "id": String(id),
    "lastName": String(lastName),
    "notBefore": Number(notBefore),
    "origin": String(origin),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "requiredActions": String(requiredActions),
    "self": String(self),
    "serviceAccountClientId": String(serviceAccountClientId),
    "socialLinks": String(socialLinks),
    "totp": totp,
    "username": String(username),
  };
  var description = "Verify that we cannot add another User...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users";
  var description = "Verify User with realm " + realm + " exists";
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

function verifyUserDoesNotExist(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users";
  var description = "Verify User with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Verify we cannot delete non-existing User";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var expectedDesc = "Create user with realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create user") > -1;
  });
}

function waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var expectedDesc = "Create user with realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var expectedDesc = "Delete user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user consent ----

function deleteConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Delete consent for client " + client + " of user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getConsents(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents";
  var description = "Get consents of user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToDeleteANonExistingUserConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Verify we cannot delete non-existing UserConsent";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedUserConsent(client, id, realm) {
  var expectedDesc = "Delete consent for client " + client + " of user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUserConsent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserConsentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ consent\ for\ client\ (.+)\ of\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ consent\ for\ client\ (.+)\ of\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user credential ----

function deleteCredential(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId;
  var description = "Delete credential " + credentialId + " of user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getCredentials(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials";
  var description = "Get credentials of user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserCredentialUserLabel(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId + "/userLabel";
  var description = "Update user credential label for credentialId " + credentialId + " of user " + id + " in realm " + realm;
  var body = {
    "credentialId": String(credentialId),
    "id": String(id),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , credentialId: String(credentialId)
      , id: String(id)
      , newPreviousCredentialId: String(newPreviousCredentialId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function moveUserCredentialToFirst(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId + "/moveToFirst";
  var description = "Move user credential " + credentialId + " to first for user " + id + " in realm " + realm;
  var body = {
    "credentialId": String(credentialId),
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , credentialId: String(credentialId)
      , id: String(id)
      , newPreviousCredentialId: String(newPreviousCredentialId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function tryToDeleteANonExistingUserCredential(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId;
  var description = "Verify we cannot delete non-existing UserCredential";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedUserCredential(credentialId, id, newPreviousCredentialId, realm) {
  var expectedDesc = "Delete credential " + credentialId + " of user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUserCredential", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserCredentialDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ credential\ (.+)\ of\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ credential\ (.+)\ of\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["credentialId", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user profile ----

function getProfile(realm) {
  var url = "/" + realm + "/users/profile";
  var description = "Get profile for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putProfile(realm) {
  var url = "/" + realm + "/users/profile";
  var description = "Update profile for realm " + realm;
  var body = {
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: user storage credential type ----

function getConfiguredUserStorageCredentialTypes(id, realm) {
  var url = "/" + realm + "/users/" + id + "/configured-user-storage-credential-types";
  var description = "Get configured user storage credential types for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: user credential types ----

function disableUserCredentialTypes(id, realm) {
  var url = "/" + realm + "/users/" + id + "/disable-credential-types";
  var description = "Disable credential types for user " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: user actions email ----

function executeUserActionsEmail(client_id, id, lifespan, realm, redirect_uri) {
  var url = "/" + realm + "/users/" + id + "/execute-actions-email";
  var description = "Execute actions email for user " + id + " in realm " + realm + " with client_id " + client_id + ", lifespan " + lifespan + ", redirect_uri " + redirect_uri;
  var body = {
    "client_id": String(client_id),
    "id": String(id),
    "lifespan": String(lifespan),
    "realm": String(realm),
    "redirect_uri": String(redirect_uri),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , client_id: String(client_id)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: user federated identity ----

function getUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity";
  var description = "Get federated identity for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Add federated identity " + provider + " for user " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "provider": String(provider),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , provider: String(provider)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var description = "Delete federated identity " + provider + " for user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingUserFederatedIdentity(id, provider, realm) {
  var url = "/" + realm + "/users/" + id + "/federated-identity/" + provider;
  var body = {
    "id": String(id),
    "provider": String(provider),
    "realm": String(realm),
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
  var description = "Verify UserFederatedIdentity with realm " + realm + " exists";
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
  var description = "Verify UserFederatedIdentity with realm " + realm + " does not exist";
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
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedUserFederatedIdentity(id, provider, realm) {
  var expectedDesc = "Add federated identity " + provider + " for user " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserFederatedIdentityAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ federated\ identity\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ federated\ identity\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["provider", "id", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create user federated identity") > -1;
  });
}

function waitForUserFederatedIdentityAdded(id, provider, realm) {
  var expectedDesc = "Add federated identity " + provider + " for user " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserFederatedIdentity(id, provider, realm) {
  var expectedDesc = "Delete federated identity " + provider + " for user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUserFederatedIdentity", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserFederatedIdentityDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ federated\ identity\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ federated\ identity\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["provider", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user group ----

function getUserGroups(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups";
  var description = "Get groups for user " + id + " in realm " + realm + " with briefRepresentation " + briefRepresentation + ", first " + first + ", max " + max + ", search " + search;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getUserGroupsCount(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/count";
  var description = "Get groups count for user " + id + " in realm " + realm + " with search " + search;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Add user " + id + " in realm " + realm + " to group " + groupId;
  var body = {
    "groupId": String(groupId),
    "id": String(id),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , groupId: String(groupId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Remove user " + id + " in realm " + realm + " from group " + groupId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var body = {
    "groupId": String(groupId),
    "id": String(id),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another UserGroup...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserGroupExists(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify UserGroup with realm " + realm + " exists";
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

function verifyUserGroupDoesNotExist(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify UserGroup with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Verify we cannot delete non-existing UserGroup";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var expectedDesc = "Add user " + id + " in realm " + realm + " to group " + groupId;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ (.+)\ in\ realm\ (.+)\ to\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ (.+)\ in\ realm\ (.+)\ to\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "groupId"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create user group") > -1;
  });
}

function waitForUserGroupAdded(briefRepresentation, first, groupId, id, max, realm, search) {
  var expectedDesc = "Add user " + id + " in realm " + realm + " to group " + groupId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var expectedDesc = "Remove user " + id + " in realm " + realm + " from group " + groupId;
  return bp.EventSet("matchDeletedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ in\ realm\ (.+)\ from\ group\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ in\ realm\ (.+)\ from\ group\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "groupId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user impersonation ----

function impersonateUser(id, realm) {
  var url = "/" + realm + "/users/" + id + "/impersonation";
  var description = "Impersonate user " + id + " in realm " + realm;
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , id: String(id)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingUserImpersonation(id, realm) {
  var url = "/" + realm + "/users/" + id + "/impersonation";
  var body = {
    "id": String(id),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another UserImpersonation...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserImpersonationExists(id, realm) {
  var url = "/" + realm + "/users/" + id + "/impersonation";
  var description = "Verify UserImpersonation exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("UserImpersonation exists");
          }
        }
      }
      return pvg.fail("Expected UserImpersonation to exist but it does not");
    }
  });
}

function verifyUserImpersonationDoesNotExist(id, realm) {
  var url = "/" + realm + "/users/" + id + "/impersonation";
  var description = "Verify UserImpersonation does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected UserImpersonation to not exist but it does");
          }
        }
      }
      return pvg.success("UserImpersonation does not exist");
    }
  });
}

function matchAddedUserImpersonation(id, realm) {
  var expectedDesc = "Impersonate user " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserImpersonationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Impersonate\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Impersonate\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserImpersonationAddedEvent(keyVal) {
  return bp.EventSet("AddUserImpersonation:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyUserImpersonationAdded() {
  return bp.EventSet("matchAnyUserImpersonationAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create user impersonation") > -1;
  });
}

function waitForUserImpersonationAdded(id, realm) {
  var expectedDesc = "Impersonate user " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client scope scope mapping client ----

function postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role to client scope " + id + " for client " + client + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role from client scope " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Get scope mappings for client scope " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientScopeScopeMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeScopeMappingClient with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeScopeMappingClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeScopeMappingClient to exist but it does not");
    }
  });
}

function verifyClientScopeScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeScopeMappingClient with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeScopeMappingClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeScopeMappingClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientScopeScopeMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope " + id + " for client " + client + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeScopeMappingClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeScopeMappingClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeScopeMappingClientAdded() {
  return bp.EventSet("matchAnyClientScopeScopeMappingClientAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope scope mapping client") > -1;
  });
}

function waitForClientScopeScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope " + id + " for client " + client + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope scope mapping client available ----

function getClientScopeScopeMappingsClientAvailable(client, id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client + "/available";
  var description = "Get available scope mappings for client scope " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping client composite ----

function getClientScopeScopeMappingsClientComposite(briefRepresentation, client, id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client + "/composite";
  var description = "Get composite scope mappings for client scope " + id + " and client " + client + " in realm " + realm + " with briefRepresentation " + briefRepresentation;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping realm ----

function postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Add role to client scope " + id + " realm scope mappings in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Delete role from client scope " + id + " realm scope mappings in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Get realm scope mappings for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientScopeScopeMappingRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeScopeMappingRealm with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeScopeMappingRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeScopeMappingRealm to exist but it does not");
    }
  });
}

function verifyClientScopeScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeScopeMappingRealm with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeScopeMappingRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeScopeMappingRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientScopeScopeMappingRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope " + id + " realm scope mappings in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeScopeMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ (.+)\ realm\ scope\ mappings\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ (.+)\ realm\ scope\ mappings\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeScopeMappingRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeScopeMappingRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeScopeMappingRealmAdded() {
  return bp.EventSet("matchAnyClientScopeScopeMappingRealmAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope scope mapping realm") > -1;
  });
}

function waitForClientScopeScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope " + id + " realm scope mappings in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope " + id + " realm scope mappings in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ (.+)\ realm\ scope\ mappings\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ (.+)\ realm\ scope\ mappings\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope scope mapping realm available ----

function getClientScopeScopeMappingsRealmAvailable(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm/available";
  var description = "Get available realm scope mappings for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping realm composite ----

function getClientScopeScopeMappingsRealmComposite(briefRepresentation, id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm/composite";
  var description = "Get composite realm scope mappings for client scope " + id + " in realm " + realm + " with briefRepresentation " + briefRepresentation;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mappings ----

function getClientScopeScopeMappings(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings";
  var description = "Get all scope mappings for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template scope mapping client ----

function postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role to client template " + id + " for client " + client + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role from client template " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Get scope mappings for client template " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientTemplateScopeMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientTemplateScopeMappingClient with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateScopeMappingClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateScopeMappingClient to exist but it does not");
    }
  });
}

function verifyClientTemplateScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientTemplateScopeMappingClient with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateScopeMappingClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateScopeMappingClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientTemplateScopeMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client template " + id + " for client " + client + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateScopeMappingClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateScopeMappingClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateScopeMappingClientAdded() {
  return bp.EventSet("matchAnyClientTemplateScopeMappingClientAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client template scope mapping client") > -1;
  });
}

function waitForClientTemplateScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client template " + id + " for client " + client + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client template " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "client", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template scope mapping client available ----

function getClientTemplateScopeMappingsClientAvailable(client, id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client + "/available";
  var description = "Get available scope mappings for client template " + id + " and client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template scope mappings ----

function getClientTemplateScopeMappings(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings";
  var description = "Get all scope mappings for client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template scope mapping realm ----

function postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Add role to client template scope mapping realm in realm " + realm + " with id " + id;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Delete role from client template scope mapping realm in realm " + realm + " with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Get client template scope mapping realm in realm " + realm + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientTemplateScopeMappingRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify ClientTemplateScopeMappingRealm with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateScopeMappingRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateScopeMappingRealm to exist but it does not");
    }
  });
}

function verifyClientTemplateScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify ClientTemplateScopeMappingRealm with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateScopeMappingRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateScopeMappingRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientTemplateScopeMappingRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client template scope mapping realm in realm " + realm + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateScopeMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ template\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ template\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateScopeMappingRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateScopeMappingRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateScopeMappingRealmAdded() {
  return bp.EventSet("matchAnyClientTemplateScopeMappingRealmAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client template scope mapping realm") > -1;
  });
}

function waitForClientTemplateScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client template scope mapping realm in realm " + realm + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientTemplateScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client template scope mapping realm in realm " + realm + " with id " + id;
  return bp.EventSet("matchDeletedClientTemplateScopeMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ template\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ template\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mapping client ----

function postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role to client scope mapping client " + client + " in client " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Delete role from client scope mapping client " + client + " in client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Get client scope mapping client " + client + " in client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientScopeMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeMappingClient with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeMappingClient exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeMappingClient to exist but it does not");
    }
  });
}

function verifyClientScopeMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify ClientScopeMappingClient with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeMappingClient to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeMappingClient does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing ClientScopeMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping client " + client + " in client " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ mapping\ client\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ mapping\ client\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeMappingClientAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeMappingClient:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeMappingClientAdded() {
  return bp.EventSet("matchAnyClientScopeMappingClientAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope mapping client") > -1;
  });
}

function waitForClientScopeMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping client " + client + " in client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope mapping client " + client + " in client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ mapping\ client\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ mapping\ client\ (.+)\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mapping realm ----

function postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Add role to client scope mapping realm in client " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Delete role from client scope mapping realm in client " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Get client scope mapping realm in client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientScopeMappingRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeMappingRealm with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeMappingRealm exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeMappingRealm to exist but it does not");
    }
  });
}

function verifyClientScopeMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify ClientScopeMappingRealm with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeMappingRealm to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeMappingRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Verify we cannot delete non-existing ClientScopeMappingRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping realm in client " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ mapping\ realm\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ mapping\ realm\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeMappingRealmAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeMappingRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeMappingRealmAdded() {
  return bp.EventSet("matchAnyClientScopeMappingRealmAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope mapping realm") > -1;
  });
}

function waitForClientScopeMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping realm in client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope mapping realm in client " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ mapping\ realm\ in\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ mapping\ realm\ in\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client role ----

function createClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Delete client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Update client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Get client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientRole...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Verify ClientRole with realm " + realm + " exists";
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

function verifyClientRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Verify ClientRole with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Verify we cannot delete non-existing ClientRole";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client role") > -1;
  });
}

function waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Create client role " + role-name + " in client " + id + " of realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
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

// ---- Entity: client roles ----

function getClientRoles(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/roles";
  var description = "Get roles of client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client role composites ----

function getClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Get composites of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Delete composites from client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another ClientRoleComposites...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify ClientRoleComposites with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientRoleComposites exists");
          }
        }
      }
      return pvg.fail("Expected ClientRoleComposites to exist but it does not");
    }
  });
}

function verifyClientRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify ClientRoleComposites with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientRoleComposites to not exist but it does");
          }
        }
      }
      return pvg.success("ClientRoleComposites does not exist");
    }
  });
}

function tryToDeleteANonExistingClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites";
  var description = "Verify we cannot delete non-existing ClientRoleComposites";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientRoleCompositesAdded() {
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

function getClientRoleCompositesAddedEvent(keyVal) {
  return bp.EventSet("AddClientRoleComposites:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientRoleCompositesAdded() {
  return bp.EventSet("matchAnyClientRoleCompositesAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client role composites") > -1;
  });
}

function waitForClientRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Add composites to client role " + role-name + " in client " + id + " of realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Delete composites from client role " + role-name + " in client " + id + " of realm " + realm;
  return bp.EventSet("matchDeletedClientRoleComposites", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientRoleCompositesDeleted() {
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

// ---- Entity: client role composites client ----

function getClientRoleCompositesClient(clientUuid, id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites/clients/" + clientUuid;
  var description = "Get client composites of client role " + role-name + " in client " + id + " of realm " + realm + " for client " + clientUuid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client role composites realm ----

function getClientRoleCompositesRealm(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/composites/realm";
  var description = "Get realm composites of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client role groups ----

function getClientRoleGroups(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/groups";
  var description = "Get groups of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client role management permissions ----

function getClientRoleManagementPermissions(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/management/permissions";
  var description = "Get management permissions of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientRoleManagementPermissions(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/management/permissions";
  var description = "Update management permissions of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "enabled": true,
    "id": String(id),
    "realm": String(realm),
    "resource": "resource_dummy",
    "role-name": String(role-name),
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: client role users ----

function getClientRoleUsers(id, realm, role-name) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name + "/users";
  var description = "Get users of client role " + role-name + " in client " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: realm role ----

function createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles";
  var description = "Create realm role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name;
  var description = "Delete realm role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name;
  var description = "Update realm role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name;
  var description = "Get realm role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another RealmRole...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRealmRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles";
  var description = "Verify RealmRole with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("RealmRole exists");
          }
        }
      }
      return pvg.fail("Expected RealmRole to exist but it does not");
    }
  });
}

function verifyRealmRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles";
  var description = "Verify RealmRole with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected RealmRole to not exist but it does");
          }
        }
      }
      return pvg.success("RealmRole does not exist");
    }
  });
}

function tryToDeleteANonExistingRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name;
  var description = "Verify we cannot delete non-existing RealmRole";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Create realm role " + role-name + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyRealmRoleAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ realm\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ realm\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRealmRoleAddedEvent(keyVal) {
  return bp.EventSet("AddRealmRole:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRealmRoleAdded() {
  return bp.EventSet("matchAnyRealmRoleAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create realm role") > -1;
  });
}

function waitForRealmRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Create realm role " + role-name + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Delete realm role " + role-name + " in realm " + realm;
  return bp.EventSet("matchDeletedRealmRole", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRealmRoleDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ realm\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ realm\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: realm roles ----

function getRolesByRealm(realm) {
  var url = "/" + realm + "/roles";
  var description = "Get roles in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: role composite ----

function getRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Get composites of role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Add composite role to role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Delete composite role from role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another RoleComposite...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Verify RoleComposite with realm " + realm + " exists";
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

function verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Verify RoleComposite with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Verify we cannot delete non-existing RoleComposite";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Add composite role to role " + role-name + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyRoleCompositeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ composite\ role\ to\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ composite\ role\ to\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create role composite") > -1;
  });
}

function waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Add composite role to role " + role-name + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Delete composite role from role " + role-name + " in realm " + realm;
  return bp.EventSet("matchDeletedRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleCompositeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ composite\ role\ from\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ composite\ role\ from\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role composite client ----

function getRoleCompositeClient(clientUuid, realm, role-id, role-name) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites/clients/" + clientUuid;
  var description = "Get client composites of role " + role-id + " for client " + clientUuid + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: role composite realm ----

function getRoleCompositeRealm(realm, role-id, role-name) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites/realm";
  var description = "Get realm composites of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: role group ----

function getRoleGroups(briefRepresentation, first, max, realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/groups";
  var description = "Get groups of role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: role management permission ----

function getRoleManagementPermissions(realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/management/permissions";
  var description = "Get management permissions of role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateRoleManagementPermissions(realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/management/permissions";
  var description = "Update management permissions of role " + role-name + " in realm " + realm;
  var body = {
    "enabled": true,
    "realm": String(realm),
    "resource": "resource_dummy",
    "role-name": String(role-name),
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , role-name: String(role-name)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: role user ----

function getRoleUsers(first, max, realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/users";
  var description = "Get users of role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope protocol mapper ----

function getClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client scope protocol mapper " + id2 + " in client scope " + id1 + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client scope protocol mapper " + id2 + " in client scope " + id1 + " of realm " + realm;
  var body = {
    "config": {},
    "consentRequired": true,
    "consentText": "consentText_dummy",
    "id": "id_dummy",
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client scope protocol mapper " + id2 + " in client scope " + id1 + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientScopeProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedClientScopeProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client scope protocol mapper " + id2 + " in client scope " + id1 + " of realm " + realm;
  return bp.EventSet("matchDeletedClientScopeProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ scope\ protocol\ mapper\ (.+)\ in\ client\ scope\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ scope\ protocol\ mapper\ (.+)\ in\ client\ scope\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope protocol mapper add model ----

function addClientScopeProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingClientScopeProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientScopeProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeProtocolMapperAddModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function verifyClientScopeProtocolMapperAddModelDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function matchAddedClientScopeProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ model\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ model\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client scope protocol mapper add model") > -1;
  });
}

function waitForClientScopeProtocolMapperAddModelAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client scope protocol mapper model ----

function getClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Get protocol mapper models for client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function tryToAddExistingClientScopeProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientScopeProtocolMapperModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeProtocolMapperModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapperModel with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeProtocolMapperModel exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMapperModel to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMapperModelDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapperModel with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeProtocolMapperModel to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMapperModel does not exist");
    }
  });
}

function matchAddedClientScopeProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeProtocolMapperModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ model\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ model\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeProtocolMapperModelAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMapperModel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMapperModelAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMapperModelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope protocol mapper model") > -1;
  });
}

function waitForClientScopeProtocolMapperModelAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client scope protocol mapper protocol ----

function getClientScopeProtocolMapperProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mappers for protocol " + protocol + " in client scope " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template protocol mapper ----

function getClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client template protocol mapper " + id2 + " in client template " + id1 + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client template protocol mapper " + id2 + " in client template " + id1 + " of realm " + realm;
  var body = {
    "config": {},
    "consentRequired": true,
    "consentText": "consentText_dummy",
    "id": "id_dummy",
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client template protocol mapper " + id2 + " in client template " + id1 + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientTemplateProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedClientTemplateProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client template protocol mapper " + id2 + " in client template " + id1 + " of realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ template\ protocol\ mapper\ (.+)\ in\ client\ template\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ template\ protocol\ mapper\ (.+)\ in\ client\ template\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template protocol mapper add model ----

function addClientTemplateProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper model to client template " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingClientTemplateProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientTemplateProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateProtocolMapperAddModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function verifyClientTemplateProtocolMapperAddModelDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function matchAddedClientTemplateProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ model\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ model\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client template protocol mapper add model") > -1;
  });
}

function waitForClientTemplateProtocolMapperAddModelAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client template protocol mapper model ----

function getClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Get protocol mapper models for client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Add protocol mapper model to client template " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function tryToAddExistingClientTemplateProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientTemplateProtocolMapperModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateProtocolMapperModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapperModel with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateProtocolMapperModel exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMapperModel to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMapperModelDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapperModel with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateProtocolMapperModel to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMapperModel does not exist");
    }
  });
}

function matchAddedClientTemplateProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateProtocolMapperModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ model\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ model\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateProtocolMapperModelAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMapperModel:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMapperModelAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMapperModelAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client template protocol mapper model") > -1;
  });
}

function waitForClientTemplateProtocolMapperModelAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client template protocol mapper protocol ----

function getClientTemplateProtocolMapperProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mappers for protocol " + protocol + " in client template " + id + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client protocol mapper ----

function getClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Get client protocol mapper " + id2 + " in client " + id1 + " of realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Update client protocol mapper " + id2 + " in client " + id1 + " of realm " + realm;
  var body = {
    "config": {},
    "consentRequired": true,
    "consentText": "consentText_dummy",
    "id": "id_dummy",
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_dummy",
    "protocol": "protocol_dummy",
    "protocolMapper": "protocolMapper_dummy",
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , id1: String(id1)
      , id2: String(id2)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Delete client protocol mapper " + id2 + " in client " + id1 + " of realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedClientProtocolMapper(id1, id2, realm) {
  var expectedDesc = "Delete client protocol mapper " + id2 + " in client " + id1 + " of realm " + realm;
  return bp.EventSet("matchDeletedClientProtocolMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientProtocolMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ protocol\ mapper\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ protocol\ mapper\ (.+)\ in\ client\ (.+)\ of\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id2", "id1", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client protocol mapper add model ----

function addClientProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper model to client " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      , id: String(id)
      , protocol: String(protocol)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingClientProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientProtocolMapperAddModel...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientProtocolMapperAddModelExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function verifyClientProtocolMapperAddModelDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
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

function matchAddedClientProtocolMapperAddModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientProtocolMapperAddModelAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ model\ to\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ model\ to\ client\ (.+)\ in\ realm\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client protocol mapper add model") > -1;
  });
}

function waitForClientProtocolMapperAddModelAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: protocol mapper ----

function createProtocolMapper(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Create protocol mapper with id " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getProtocolMappers(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Get protocol mappers for client " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingProtocolMapper(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var body = {
    "config": config,
    "consentRequired": consentRequired,
    "consentText": String(consentText),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMapper": String(protocolMapper),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ProtocolMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyProtocolMapperExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Verify ProtocolMapper with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ProtocolMapper exists");
          }
        }
      }
      return pvg.fail("Expected ProtocolMapper to exist but it does not");
    }
  });
}

function verifyProtocolMapperDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Verify ProtocolMapper with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ProtocolMapper to not exist but it does");
          }
        }
      }
      return pvg.success("ProtocolMapper does not exist");
    }
  });
}

function matchAddedProtocolMapper(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Create protocol mapper with id " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyProtocolMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ protocol\ mapper\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ protocol\ mapper\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getProtocolMapperAddedEvent(keyVal) {
  return bp.EventSet("AddProtocolMapper:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyProtocolMapperAdded() {
  return bp.EventSet("matchAnyProtocolMapperAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create protocol mapper") > -1;
  });
}

function waitForProtocolMapperAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Create protocol mapper with id " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: identity provider ----

function createIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Create identity provider with alias " + alias + " in realm " + realm;
  var body = {
    "addReadTokenRoleOnCreate": addReadTokenRoleOnCreate,
    "alias": String(alias),
    "authenticateByDefault": authenticateByDefault,
    "config": config,
    "displayName": String(displayName),
    "enabled": enabled,
    "firstBrokerLoginFlowAlias": String(firstBrokerLoginFlowAlias),
    "internalId": String(internalId),
    "linkOnly": linkOnly,
    "postBrokerLoginFlowAlias": String(postBrokerLoginFlowAlias),
    "providerId": String(providerId),
    "realm": String(realm),
    "storeToken": storeToken,
    "trustEmail": trustEmail,
    "updateProfileFirstLogin": updateProfileFirstLogin,
    "updateProfileFirstLoginMode": String(updateProfileFirstLoginMode),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , internalId: String(internalId)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Delete identity provider with alias " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Update identity provider with alias " + alias + " in realm " + realm;
  var body = {
    "addReadTokenRoleOnCreate": addReadTokenRoleOnCreate,
    "alias": String(alias),
    "authenticateByDefault": authenticateByDefault,
    "config": config,
    "displayName": String(displayName),
    "enabled": enabled,
    "firstBrokerLoginFlowAlias": String(firstBrokerLoginFlowAlias),
    "internalId": String(internalId),
    "linkOnly": linkOnly,
    "postBrokerLoginFlowAlias": String(postBrokerLoginFlowAlias),
    "providerId": String(providerId),
    "realm": String(realm),
    "storeToken": storeToken,
    "trustEmail": trustEmail,
    "updateProfileFirstLogin": updateProfileFirstLogin,
    "updateProfileFirstLoginMode": String(updateProfileFirstLoginMode),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , internalId: String(internalId)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Get identity provider with alias " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIdentityProviders(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "List identity providers in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances";
  var body = {
    "addReadTokenRoleOnCreate": addReadTokenRoleOnCreate,
    "alias": String(alias),
    "authenticateByDefault": authenticateByDefault,
    "config": config,
    "displayName": String(displayName),
    "enabled": enabled,
    "firstBrokerLoginFlowAlias": String(firstBrokerLoginFlowAlias),
    "internalId": String(internalId),
    "linkOnly": linkOnly,
    "postBrokerLoginFlowAlias": String(postBrokerLoginFlowAlias),
    "providerId": String(providerId),
    "realm": String(realm),
    "storeToken": storeToken,
    "trustEmail": trustEmail,
    "updateProfileFirstLogin": updateProfileFirstLogin,
    "updateProfileFirstLoginMode": String(updateProfileFirstLoginMode),
  };
  var description = "Verify that we cannot add another IdentityProvider...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Verify IdentityProvider with realm " + realm + " exists";
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

function verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances";
  var description = "Verify IdentityProvider with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Verify we cannot delete non-existing IdentityProvider";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var expectedDesc = "Create identity provider with alias " + alias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyIdentityProviderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ identity\ provider\ with\ alias\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ identity\ provider\ with\ alias\ (.+)\ in\ realm\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create identity provider") > -1;
  });
}

function waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var expectedDesc = "Create identity provider with alias " + alias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var expectedDesc = "Delete identity provider with alias " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProvider", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ identity\ provider\ with\ alias\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ identity\ provider\ with\ alias\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: identity provider mapper ----

function createIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Create identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "identityProviderAlias": String(identityProviderAlias),
    "identityProviderMapper": String(identityProviderMapper),
    "name": String(name),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Delete identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Update identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "identityProviderAlias": String(identityProviderAlias),
    "identityProviderMapper": String(identityProviderMapper),
    "name": String(name),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Get identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIdentityProviderMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "List identity provider mappers for provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var body = {
    "alias": String(alias),
    "config": config,
    "id": String(id),
    "identityProviderAlias": String(identityProviderAlias),
    "identityProviderMapper": String(identityProviderMapper),
    "name": String(name),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another IdentityProviderMapper...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Verify IdentityProviderMapper with realm " + realm + " exists";
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

function verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "Verify IdentityProviderMapper with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Verify we cannot delete non-existing IdentityProviderMapper";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var expectedDesc = "Create identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyIdentityProviderMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ identity\ provider\ mapper\ with\ id\ (.+)\ for\ provider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ identity\ provider\ mapper\ with\ id\ (.+)\ for\ provider\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "alias", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create identity provider mapper") > -1;
  });
}

function waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var expectedDesc = "Create identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var expectedDesc = "Delete identity provider mapper with id " + id + " for provider " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProviderMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ identity\ provider\ mapper\ with\ id\ (.+)\ for\ provider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ identity\ provider\ mapper\ with\ id\ (.+)\ for\ provider\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "alias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: identity provider management permissions ----

function updateIdentityProviderManagementPermissions(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/management/permissions";
  var description = "Update management permissions for identity provider " + alias + " in realm " + realm;
  var body = {
    "alias": String(alias),
    "enabled": true,
    "realm": String(realm),
    "resource": "resource_dummy",
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , alias: String(alias)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getIdentityProviderManagementPermissions(alias, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/management/permissions";
  var description = "Get management permissions for identity provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: group role mapping realm ----

function postGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Add role mapping to group " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Delete role mapping from group " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Get role mappings of group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another GroupRoleMappingRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify GroupRoleMappingRealm with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("GroupRoleMappingRealm exists");
          }
        }
      }
      return pvg.fail("Expected GroupRoleMappingRealm to exist but it does not");
    }
  });
}

function verifyGroupRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify GroupRoleMappingRealm with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected GroupRoleMappingRealm to not exist but it does");
          }
        }
      }
      return pvg.success("GroupRoleMappingRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/realm";
  var description = "Verify we cannot delete non-existing GroupRoleMappingRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupRoleMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupRoleMappingRealmAddedEvent(keyVal) {
  return bp.EventSet("AddGroupRoleMappingRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyGroupRoleMappingRealmAdded() {
  return bp.EventSet("matchAnyGroupRoleMappingRealmAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create group role mapping realm") > -1;
  });
}

function waitForGroupRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGroupRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from group " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  return bp.EventSet("matchDeletedGroupRoleMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user role mapping realm ----

function postUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Add role mapping to user " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Delete role mapping from user " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function getUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Get role mappings of user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another UserRoleMappingRealm...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserRoleMappingRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify UserRoleMappingRealm with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("UserRoleMappingRealm exists");
          }
        }
      }
      return pvg.fail("Expected UserRoleMappingRealm to exist but it does not");
    }
  });
}

function verifyUserRoleMappingRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify UserRoleMappingRealm with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected UserRoleMappingRealm to not exist but it does");
          }
        }
      }
      return pvg.success("UserRoleMappingRealm does not exist");
    }
  });
}

function tryToDeleteANonExistingUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/realm";
  var description = "Verify we cannot delete non-existing UserRoleMappingRealm";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserRoleMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getUserRoleMappingRealmAddedEvent(keyVal) {
  return bp.EventSet("AddUserRoleMappingRealm:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyUserRoleMappingRealmAdded() {
  return bp.EventSet("matchAnyUserRoleMappingRealmAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create user role mapping realm") > -1;
  });
}

function waitForUserRoleMappingRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserRoleMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from user " + id + " in realm " + realm + " with role name " + name + " and id " + id;
  return bp.EventSet("matchDeletedUserRoleMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ with\ role\ name\ (.+)\ and\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "name", "id"];
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
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function postUpload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var description = "Upload client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "attr": String(attr),
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function postUploadCertificate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload-certificate";
  var description = "Upload certificate for client " + id + " attribute " + attr + " in realm " + realm;
  var body = {
    "attr": String(attr),
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function postGenerate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/generate";
  var description = "Generate client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "attr": String(attr),
    "id": String(id),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function postGenerateAndDownload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/generate-and-download";
  var description = "Generate and download client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "attr": String(attr),
    "format": "format_dummy",
    "id": String(id),
    "keyAlias": "keyAlias_dummy",
    "keyPassword": "keyPassword_dummy",
    "realm": String(realm),
    "realmAlias": "realmAlias_dummy",
    "realmCertificate": true,
    "storePassword": "storePassword_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function postDownload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/download";
  var description = "Download client certificate " + attr + " for client " + id + " in realm " + realm;
  var body = {
    "attr": String(attr),
    "format": "format_dummy",
    "id": String(id),
    "keyAlias": "keyAlias_dummy",
    "keyPassword": "keyPassword_dummy",
    "realm": String(realm),
    "realmAlias": "realmAlias_dummy",
    "realmCertificate": true,
    "storePassword": "storePassword_dummy",
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , attr: String(attr)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function tryToAddExistingClientCertificate(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/upload";
  var body = {
    "attr": String(attr),
    "id": String(id),
    "realm": String(realm),
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
  var description = "Verify ClientCertificate with realm " + realm + " exists";
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
  var description = "Verify ClientCertificate with realm " + realm + " does not exist";
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
  return matchSuccess(expectedDesc);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client certificate") > -1;
  });
}

function waitForClientCertificateAdded(attr, id, realm) {
  var expectedDesc = "Upload client certificate " + attr + " for client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: group ----

function createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups";
  var description = "Create group " + name + " in realm " + realm;
  var body = {
    "access": access,
    "attributes": attributes,
    "clientRoles": clientRoles,
    "id": String(id),
    "name": String(name),
    "path": String(path),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "subGroups": String(subGroups),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , path: String(path)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Delete group " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function updateGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Update group " + id + " in realm " + realm + " with name " + name;
  var body = {
    "access": access,
    "attributes": attributes,
    "clientRoles": clientRoles,
    "id": String(id),
    "name": String(name),
    "path": String(path),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "subGroups": String(subGroups),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , path: String(path)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Get group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups";
  var body = {
    "access": access,
    "attributes": attributes,
    "clientRoles": clientRoles,
    "id": String(id),
    "name": String(name),
    "path": String(path),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "subGroups": String(subGroups),
  };
  var description = "Verify that we cannot add another Group...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups";
  var description = "Verify Group with realm " + realm + " exists";
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

function verifyGroupDoesNotExist(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups";
  var description = "Verify Group with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Verify we cannot delete non-existing Group";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var expectedDesc = "Create group " + name + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create group") > -1;
  });
}

function waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var expectedDesc = "Create group " + name + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var expectedDesc = "Delete group " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: group role mapping client ----

function getGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Get role mappings for group " + id + " in realm " + realm + " and client " + client;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Add role mapping to group " + id + " in realm " + realm + " and client " + client + " with role " + name;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Delete role mapping from group " + id + " in realm " + realm + " and client " + client + " with role " + name;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another GroupRoleMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify GroupRoleMappingClient with realm " + realm + " exists";
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

function verifyGroupRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify GroupRoleMappingClient with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/groups/" + id + "/role-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing GroupRoleMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " and client " + client + " with role " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupRoleMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ group\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "name"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create group role mapping client") > -1;
  });
}

function waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to group " + id + " in realm " + realm + " and client " + client + " with role " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from group " + id + " in realm " + realm + " and client " + client + " with role " + name;
  return bp.EventSet("matchDeletedGroupRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyGroupRoleMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ group\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user role mapping client ----

function getUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Get role mappings for user " + id + " in realm " + realm + " and client " + client;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Add role mapping to user " + id + " in realm " + realm + " and client " + client + " with role " + name;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , client: String(client)
      , containerId: String(containerId)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Delete role mapping from user " + id + " in realm " + realm + " and client " + client + " with role " + name;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another UserRoleMappingClient...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify UserRoleMappingClient with realm " + realm + " exists";
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

function verifyUserRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify UserRoleMappingClient with realm " + realm + " does not exist";
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

function tryToDeleteANonExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/users/" + id + "/role-mappings/clients/" + client;
  var description = "Verify we cannot delete non-existing UserRoleMappingClient";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " and client " + client + " with role " + name;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserRoleMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ user\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "name"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create user role mapping client") > -1;
  });
}

function waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to user " + id + " in realm " + realm + " and client " + client + " with role " + name;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from user " + id + " in realm " + realm + " and client " + client + " with role " + name;
  return bp.EventSet("matchDeletedUserRoleMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserRoleMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ user\ (.+)\ in\ realm\ (.+)\ and\ client\ (.+)\ with\ role\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm", "client", "name"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role ----

function getRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Get role with id " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Update role with id " + role-id + " in realm " + realm;
  var body = {
    "attributes": {},
    "clientRole": true,
    "composite": true,
    "composites": "composites_dummy",
    "containerId": "containerId_dummy",
    "description": "description_dummy",
    "id": "id_dummy",
    "name": "name_dummy",
    "realm": String(realm),
    "role-id": String(role-id),
    "scopeParamRequired": true,
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [204],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRoleById(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Delete role with id " + role-id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingRole(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id;
  var description = "Verify we cannot delete non-existing Role";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
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

function getRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Get composites of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Add composite to role " + role-id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-id": String(role-id),
    "scopeParamRequired": scopeParamRequired,
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [201],
    parameters: {
      description: description,
      realm: String(realm)
      , containerId: String(containerId)
      , id: String(id)
      , role-id: String(role-id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Delete composite from role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var body = {
    "attributes": attributes,
    "clientRole": clientRole,
    "composite": composite,
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-id": String(role-id),
    "scopeParamRequired": scopeParamRequired,
  };
  var description = "Verify that we cannot add another RoleComposites...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyRoleCompositesExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify RoleComposites with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("RoleComposites exists");
          }
        }
      }
      return pvg.fail("Expected RoleComposites to exist but it does not");
    }
  });
}

function verifyRoleCompositesDoesNotExist(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify RoleComposites with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected RoleComposites to not exist but it does");
          }
        }
      }
      return pvg.success("RoleComposites does not exist");
    }
  });
}

function tryToDeleteANonExistingRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/composites";
  var description = "Verify we cannot delete non-existing RoleComposites";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var expectedDesc = "Add composite to role " + role-id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyRoleCompositesAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ composite\ to\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ composite\ to\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getRoleCompositesAddedEvent(keyVal) {
  return bp.EventSet("AddRoleComposites:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyRoleCompositesAdded() {
  return bp.EventSet("matchAnyRoleCompositesAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create role composite") > -1;
  });
}

function waitForRoleCompositesAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var expectedDesc = "Add composite to role " + role-id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search) {
  var expectedDesc = "Delete composite from role " + role-id + " in realm " + realm;
  return bp.EventSet("matchDeletedRoleComposites", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleCompositesDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ composite\ from\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ composite\ from\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role management permission ----

function getRoleManagementPermissions(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/management/permissions";
  var description = "Get management permissions of role " + role-id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateRoleManagementPermissions(realm, role-id) {
  var url = "/" + realm + "/roles-by-id/" + role-id + "/management/permissions";
  var description = "Update management permissions of role " + role-id + " in realm " + realm;
  var body = {
    "enabled": true,
    "realm": String(realm),
    "resource": "resource_dummy",
    "role-id": String(role-id),
    "scopePermissions": {},
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , role-id: String(role-id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

// ---- Entity: client scope ----

function createClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes";
  var description = "Create client scope " + name + " with id " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes/" + id;
  var description = "Get client scope with id " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes/" + id;
  var description = "Update client scope " + name + " with id " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes/" + id;
  var description = "Delete client scope with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes";
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientScope...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientScopeExists(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes";
  var description = "Verify ClientScope with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScope exists");
          }
        }
      }
      return pvg.fail("Expected ClientScope to exist but it does not");
    }
  });
}

function verifyClientScopeDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes";
  var description = "Verify ClientScope with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScope to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScope does not exist");
    }
  });
}

function tryToDeleteANonExistingClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-scopes/" + id;
  var description = "Verify we cannot delete non-existing ClientScope";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Create client scope " + name + " with id " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ scope\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ scope\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeAddedEvent(keyVal) {
  return bp.EventSet("AddClientScope:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeAdded() {
  return bp.EventSet("matchAnyClientScopeAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope") > -1;
  });
}

function waitForClientScopeAdded(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Create client scope " + name + " with id " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScope(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Delete client scope with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ scope\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ scope\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client template ----

function createClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates";
  var description = "Create client template " + name + " with id " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates/" + id;
  var description = "Get client template with id " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates/" + id;
  var description = "Update client template " + name + " with id " + id + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , protocol: String(protocol)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates/" + id;
  var description = "Delete client template with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates";
  var body = {
    "attributes": attributes,
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "protocol": String(protocol),
    "protocolMappers": String(protocolMappers),
    "realm": String(realm),
  };
  var description = "Verify that we cannot add another ClientTemplate...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyClientTemplateExists(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates";
  var description = "Verify ClientTemplate with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplate exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplate to exist but it does not");
    }
  });
}

function verifyClientTemplateDoesNotExist(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates";
  var description = "Verify ClientTemplate with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplate to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplate does not exist");
    }
  });
}

function tryToDeleteANonExistingClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var url = "/" + realm + "/client-templates/" + id;
  var description = "Verify we cannot delete non-existing ClientTemplate";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Create client template " + name + " with id " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ template\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ template\ (.+)\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplate:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateAdded() {
  return bp.EventSet("matchAnyClientTemplateAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client template") > -1;
  });
}

function waitForClientTemplateAdded(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Create client template " + name + " with id " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientTemplate(attributes, description, id, name, protocol, protocolMappers, realm) {
  var expectedDesc = "Delete client template with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplate", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ template\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ template\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: component ----

function createComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components";
  var description = "Create component " + name + " with id " + id;
  var body = {
    "config": config,
    "id": String(id),
    "name": String(name),
    "parent": String(parent),
    "parentId": String(parentId),
    "providerId": String(providerId),
    "providerType": String(providerType),
    "realm": String(realm),
    "subType": String(subType),
    "type": String(type),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , parentId: String(parentId)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components/" + id;
  var description = "Get component with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components/" + id;
  var description = "Update component with id " + id;
  var body = {
    "config": config,
    "id": String(id),
    "name": String(name),
    "parentId": String(parentId),
    "providerId": String(providerId),
    "providerType": String(providerType),
    "realm": String(realm),
    "subType": String(subType),
  };
  svc.put(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
      , parentId: String(parentId)
      , providerId: String(providerId)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function deleteComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components/" + id;
  var description = "Delete component with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function listComponents(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components";
  var description = "List components filtered by name " + name + ", parent " + parent + ", type " + type;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components";
  var body = {
    "config": config,
    "id": String(id),
    "name": String(name),
    "parent": String(parent),
    "parentId": String(parentId),
    "providerId": String(providerId),
    "providerType": String(providerType),
    "realm": String(realm),
    "subType": String(subType),
    "type": String(type),
  };
  var description = "Verify that we cannot add another Component...";
  if (body === undefined) { body = {}; }
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [400, 409],
    parameters: { description: description }
  });
}

function verifyComponentExists(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components";
  var description = "Verify Component with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("Component exists");
          }
        }
      }
      return pvg.fail("Expected Component to exist but it does not");
    }
  });
}

function verifyComponentDoesNotExist(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components";
  var description = "Verify Component with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected Component to not exist but it does");
          }
        }
      }
      return pvg.success("Component does not exist");
    }
  });
}

function tryToDeleteANonExistingComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var url = "/" + realm + "/components/" + id;
  var description = "Verify we cannot delete non-existing Component";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var expectedDesc = "Create component " + name + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyComponentAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ component\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ component\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getComponentAddedEvent(keyVal) {
  return bp.EventSet("AddComponent:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyComponentAdded() {
  return bp.EventSet("matchAnyComponentAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create component") > -1;
  });
}

function waitForComponentAdded(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var expectedDesc = "Create component " + name + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedComponent(config, id, name, parent, parentId, providerId, providerType, realm, subType, type) {
  var expectedDesc = "Delete component with id " + id;
  return bp.EventSet("matchDeletedComponent", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyComponentDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ component\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ component\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: bruteForceUser ----

function getBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Get brute force user " + userId + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Delete brute force user " + userId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingBruteForceUser(realm, userId) {
  var url = "/" + realm + "/attack-detection/brute-force/users/" + userId;
  var description = "Verify we cannot delete non-existing BruteForceUser";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedBruteForceUser(realm, userId) {
  var expectedDesc = "Delete brute force user " + userId + " in realm " + realm;
  return bp.EventSet("matchDeletedBruteForceUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBruteForceUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ brute\ force\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ brute\ force\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["userId", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: bruteForceUsers ----

function deleteUsers(realm) {
  var url = "/" + realm + "/attack-detection/brute-force/users";
  var description = "Delete all brute force users in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToDeleteANonExistingBruteForceUsers(realm) {
  var url = "/" + realm + "/attack-detection/brute-force/users";
  var description = "Verify we cannot delete non-existing BruteForceUsers";
  svc.delete(url, {
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchDeletedBruteForceUsers(realm) {
  var expectedDesc = "Delete all brute force users in realm " + realm;
  return bp.EventSet("matchDeletedBruteForceUsers", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyBruteForceUsersDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ all\ brute\ force\ users\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ all\ brute\ force\ users\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: clientInitialAccess ----

function postClientsInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Create client initial access in realm " + realm;
  var body = {
    "count": Number(count),
    "expiration": Number(expiration),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      realm: String(realm)
      , id: String(id)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { realm: String(realm) }) });
}

function getClientsInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Get client initial access list in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteClientsInitialAcces(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access/" + id;
  var description = "Delete client initial access " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200, 204]
  });
}

function tryToAddExistingClientInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var body = {
    "count": Number(count),
    "expiration": Number(expiration),
    "realm": String(realm),
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
  var description = "Verify ClientInitialAccess with realm " + realm + " exists";
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
  var description = "Verify ClientInitialAccess with realm " + realm + " does not exist";
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
    expectedResponseCodes: [200, 204],
    parameters: { description: description }
  });
}

function matchAddedClientInitialAccess(count, expiration, id, realm) {
  var expectedDesc = "Create client initial access in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientInitialAccessAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ client\ initial\ access\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ client\ initial\ access\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create clientInitialAccess") > -1;
  });
}

function waitForClientInitialAccessAdded(count, expiration, id, realm) {
  var expectedDesc = "Create client initial access in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientInitialAccess(count, expiration, id, realm) {
  var expectedDesc = "Delete client initial access " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientInitialAccess", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientInitialAccessDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ initial\ access\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ initial\ access\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: key ----

function getKeys(realm) {
  var url = "/" + realm + "/keys";
  var description = "Get keys for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}
