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
    "accessCodeLifespan": String(1),
    "accessCodeLifespanLogin": String(1),
    "accessCodeLifespanUserAction": String(1),
    "accessTokenLifespan": String(1),
    "accessTokenLifespanForImplicitFlow": String(1),
    "accountTheme": "accountTheme_" + realm,
    "actionTokenGeneratedByAdminLifespan": String(1),
    "actionTokenGeneratedByUserLifespan": String(1),
    "adminEventsDetailsEnabled": String(true),
    "adminEventsEnabled": String(true),
    "adminTheme": "adminTheme_" + realm,
    "applicationScopeMappings": applicationScopeMappings,
    "applications": [],
    "attributes": attributes,
    "authenticationFlows": [],
    "authenticatorConfig": [],
    "browserFlow": "browserFlow_" + realm,
    "browserSecurityHeaders": browserSecurityHeaders,
    "bruteForceProtected": String(true),
    "certificate": "certificate_" + realm,
    "clientAuthenticationFlow": "clientAuthenticationFlow_" + realm,
    "clientOfflineSessionIdleTimeout": String(1),
    "clientOfflineSessionMaxLifespan": String(1),
    "clientPolicies": [],
    "clientProfiles": [],
    "clientScopeMappings": clientScopeMappings,
    "clientScopes": [],
    "clientSessionIdleTimeout": String(1),
    "clientSessionMaxLifespan": String(1),
    "clientTemplates": [],
    "clients": [],
    "codeSecret": "codeSecret_" + realm,
    "components": components,
    "defaultDefaultClientScopes": [],
    "defaultGroups": [],
    "defaultLocale": "defaultLocale_" + realm,
    "defaultOptionalClientScopes": [],
    "defaultRole": "defaultRole_" + realm,
    "defaultRoles": [],
    "defaultSignatureAlgorithm": "defaultSignatureAlgorithm_" + realm,
    "directGrantFlow": "directGrantFlow_" + realm,
    "displayName": "displayName_" + realm,
    "displayNameHtml": "displayNameHtml_" + realm,
    "dockerAuthenticationFlow": "dockerAuthenticationFlow_" + realm,
    "duplicateEmailsAllowed": String(true),
    "editUsernameAllowed": String(true),
    "emailTheme": "emailTheme_" + realm,
    "enabled": String(true),
    "enabledEventTypes": [],
    "eventsEnabled": String(true),
    "eventsExpiration": String(1),
    "eventsListeners": [],
    "failureFactor": String(1),
    "federatedUsers": [],
    "groups": [],
    "id": "id_" + realm,
    "identityProviderMappers": [],
    "identityProviders": [],
    "internationalizationEnabled": String(true),
    "keycloakVersion": "keycloakVersion_" + realm,
    "loginTheme": "loginTheme_" + realm,
    "loginWithEmailAllowed": String(true),
    "maxDeltaTimeSeconds": String(1),
    "maxFailureWaitSeconds": String(1),
    "minimumQuickLoginWaitSeconds": String(1),
    "notBefore": String(1),
    "oAuth2DeviceCodeLifespan": String(1),
    "oAuth2DevicePollingInterval": String(1),
    "oauth2DeviceCodeLifespan": String(1),
    "oauth2DevicePollingInterval": String(1),
    "oauthClients": [],
    "offlineSessionIdleTimeout": String(1),
    "offlineSessionMaxLifespan": String(1),
    "offlineSessionMaxLifespanEnabled": String(true),
    "otpPolicyAlgorithm": "otpPolicyAlgorithm_" + realm,
    "otpPolicyCodeReusable": String(true),
    "otpPolicyDigits": String(1),
    "otpPolicyInitialCounter": String(1),
    "otpPolicyLookAheadWindow": String(1),
    "otpPolicyPeriod": String(1),
    "otpPolicyType": "otpPolicyType_" + realm,
    "otpSupportedApplications": [],
    "passwordCredentialGrantAllowed": String(true),
    "passwordPolicy": "passwordPolicy_" + realm,
    "permanentLockout": String(true),
    "privateKey": "privateKey_" + realm,
    "protocolMappers": [],
    "publicKey": "publicKey_" + realm,
    "quickLoginCheckMilliSeconds": String(1),
    "realm": String(realm),
    "realmCacheEnabled": String(true),
    "refreshTokenMaxReuse": String(1),
    "registrationAllowed": String(true),
    "registrationEmailAsUsername": String(true),
    "registrationFlow": "registrationFlow_" + realm,
    "rememberMe": String(true),
    "requiredActions": [],
    "requiredCredentials": [],
    "resetCredentialsFlow": "resetCredentialsFlow_" + realm,
    "resetPasswordAllowed": String(true),
    "revokeRefreshToken": String(true),
    "roles": "roles_" + realm,
    "scopeMappings": [],
    "smtpServer": smtpServer,
    "social": String(true),
    "socialProviders": socialProviders,
    "sslRequired": "sslRequired_" + realm,
    "ssoSessionIdleTimeout": String(1),
    "ssoSessionIdleTimeoutRememberMe": String(1),
    "ssoSessionMaxLifespan": String(1),
    "ssoSessionMaxLifespanRememberMe": String(1),
    "supportedLocales": [],
    "updateProfileOnInitialSocialLogin": String(true),
    "userCacheEnabled": String(true),
    "userFederationMappers": [],
    "userFederationProviders": [],
    "userManagedAccessAllowed": String(true),
    "users": [],
    "verifyEmail": String(true),
    "waitIncrementSeconds": String(1),
    "webAuthnPolicyAcceptableAaguids": [],
    "webAuthnPolicyAttestationConveyancePreference": "webAuthnPolicyAttestationConveyancePreference_" + realm,
    "webAuthnPolicyAuthenticatorAttachment": "webAuthnPolicyAuthenticatorAttachment_" + realm,
    "webAuthnPolicyAvoidSameAuthenticatorRegister": String(true),
    "webAuthnPolicyCreateTimeout": String(1),
    "webAuthnPolicyPasswordlessAcceptableAaguids": [],
    "webAuthnPolicyPasswordlessAttestationConveyancePreference": "webAuthnPolicyPasswordlessAttestationConveyancePreference_" + realm,
    "webAuthnPolicyPasswordlessAuthenticatorAttachment": "webAuthnPolicyPasswordlessAuthenticatorAttachment_" + realm,
    "webAuthnPolicyPasswordlessAvoidSameAuthenticatorRegister": String(true),
    "webAuthnPolicyPasswordlessCreateTimeout": String(1),
    "webAuthnPolicyPasswordlessRequireResidentKey": "webAuthnPolicyPasswordlessRequireResidentKey_" + realm,
    "webAuthnPolicyPasswordlessRpEntityName": "webAuthnPolicyPasswordlessRpEntityName_" + realm,
    "webAuthnPolicyPasswordlessRpId": "webAuthnPolicyPasswordlessRpId_" + realm,
    "webAuthnPolicyPasswordlessSignatureAlgorithms": [],
    "webAuthnPolicyPasswordlessUserVerificationRequirement": "webAuthnPolicyPasswordlessUserVerificationRequirement_" + realm,
    "webAuthnPolicyRequireResidentKey": "webAuthnPolicyRequireResidentKey_" + realm,
    "webAuthnPolicyRpEntityName": "webAuthnPolicyRpEntityName_" + realm,
    "webAuthnPolicyRpId": "webAuthnPolicyRpId_" + realm,
    "webAuthnPolicySignatureAlgorithms": [],
    "webAuthnPolicyUserVerificationRequirement": "webAuthnPolicyUserVerificationRequirement_" + realm,
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingRealm(realm) {
  var url = "/" + realm;
  var description = "Verify we cannot delete non-existing Realm";
  svc.delete(url, {
    expectedResponseCodes: [204],
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingAdminEvent(authClient, authIpAddress, authRealm, authUser, dateFrom, dateTo, first, max, operationTypes, realm, resourcePath, resourceTypes) {
  var url = "/" + realm + "/admin-events";
  var description = "Verify we cannot delete non-existing AdminEvent";
  svc.delete(url, {
    expectedResponseCodes: [204],
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

function postClientDescriptionConverter(realm) {
  var url = "/" + realm + "/client-description-converter";
  var description = "Post client description converter for realm " + realm;
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
  postClientDescriptionConverter(realm);
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
  var expectedDesc = "Post client description converter for realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientDescriptionConverterAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Post\ client\ description\ converter\ for\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Post\ client\ description\ converter\ for\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
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
  var expectedDesc = "Post client description converter for realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client policies ----

function getPolicies(realm) {
  var url = "/" + realm + "/client-policies/policies";
  var description = "Get client policies for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putPolicies(realm) {
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

function getProfiles(include-global-profiles, realm) {
  var url = "/" + realm + "/client-policies/profiles";
  var description = "Get client profiles for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putProfiles(include-global-profiles, realm) {
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

function putDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Update default default client scope " + clientScopeId + " for realm " + realm;
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
  var description = "Delete default default client scope " + clientScopeId + " for realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingDefaultDefaultClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-default-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultDefaultClientScope";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedDefaultDefaultClientScope(clientScopeId, realm) {
  var expectedDesc = "Delete default default client scope " + clientScopeId + " for realm " + realm;
  return bp.EventSet("matchDeletedDefaultDefaultClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultDefaultClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ default\ client\ scope\ (.+)\ for\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ default\ client\ scope\ (.+)\ for\ realm\ (.+)$/);
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
  var description = "Delete default group " + groupId + " from realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingDefaultGroup(groupId, realm) {
  var url = "/" + realm + "/default-groups/" + groupId;
  var description = "Verify we cannot delete non-existing DefaultGroup";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedDefaultGroup(groupId, realm) {
  var expectedDesc = "Delete default group " + groupId + " from realm " + realm;
  return bp.EventSet("matchDeletedDefaultGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ group\ (.+)\ from\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ group\ (.+)\ from\ realm\ (.+)$/);
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
  var description = "Delete default optional client scope " + clientScopeId + " from realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingDefaultOptionalClientScope(clientScopeId, realm) {
  var url = "/" + realm + "/default-optional-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing DefaultOptionalClientScope";
  svc.delete(url, {
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedDefaultOptionalClientScope(clientScopeId, realm) {
  var expectedDesc = "Delete default optional client scope " + clientScopeId + " from realm " + realm;
  return bp.EventSet("matchDeletedDefaultOptionalClientScope", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyDefaultOptionalClientScopeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ default\ optional\ client\ scope\ (.+)\ from\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ default\ optional\ client\ scope\ (.+)\ from\ realm\ (.+)$/);
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingEvent(client, dateFrom, dateTo, first, ipAddress, max, realm, type, user) {
  var url = "/" + realm + "/events";
  var description = "Verify we cannot delete non-existing Event";
  svc.delete(url, {
    expectedResponseCodes: [204],
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
  var description = "Get events config for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putEventsConfig(realm) {
  var url = "/" + realm + "/events/config";
  var description = "Update events config for realm " + realm;
  var body = {
    "adminEventsDetailsEnabled": String(true),
    "adminEventsEnabled": String(true),
    "enabledEventTypes": [],
    "eventsEnabled": String(true),
    "eventsExpiration": String(1),
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

// ---- Entity: localization ----

function getLocalizationByRealm(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization";
  var description = "Get localization for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getLocalizationByRealmByLocale(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Get localization for realm " + realm + " and locale " + locale;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function postLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale;
  var description = "Add localization string for realm " + realm + " and locale " + locale;
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
  var description = "Delete localization for realm " + realm + " and locale " + locale;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getLocalizationByRealmByLocaleByKey(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Get localization for realm " + realm + ", locale " + locale + " and key " + key;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  var url = "/" + realm + "/localization/" + locale + "/" + key;
  var description = "Update localization string for realm " + realm + ", locale " + locale + " and key " + key;
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
  var description = "Delete localization for realm " + realm + ", locale " + locale + " and key " + key;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingLocalization(key, locale, realm, useRealmDefaultLocaleFallback) {
  deleteLocalizationByRealmByLocaleByKey(key, locale, realm, useRealmDefaultLocaleFallback);
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
  var expectedDesc = "Add localization string for realm " + realm + " and locale " + locale;
  return matchSuccess(expectedDesc);
}

function waitForAnyLocalizationAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ localization\ string\ for\ realm\ (.+)\ and\ locale\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ localization\ string\ for\ realm\ (.+)\ and\ locale\ (.+)$/);
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
  var expectedDesc = "Add localization string for realm " + realm + " and locale " + locale;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: session ----

function deleteSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Delete session " + session + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingSession(realm, session) {
  var url = "/" + realm + "/sessions/" + session;
  var description = "Verify we cannot delete non-existing Session";
  svc.delete(url, {
    expectedResponseCodes: [204],
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
    "enabled": String(true),
    "realm": String(realm),
    "resource": "resource_" + realm,
    "scopePermissions": scopePermissions,
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

// ---- Entity: authentication config ----

function postAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config";
  var description = "Create authentication config with id " + id;
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
  var description = "Get authentication config with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function putAuthenticationConfig(alias, config, id, realm) {
  var url = "/" + realm + "/authentication/config/" + id;
  var description = "Update authentication config with id " + id;
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
  var description = "Delete authentication config with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingAuthenticationConfig(alias, config, id, realm) {
  deleteConfig(alias, config, id, realm);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedAuthenticationConfig(alias, config, id, realm) {
  var expectedDesc = "Create authentication config with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthenticationConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ authentication\ config\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ authentication\ config\ with\ id\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create authentication config") > -1;
  });
}

function waitForAuthenticationConfigAdded(alias, config, id, realm) {
  var expectedDesc = "Create authentication config with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedAuthenticationConfig(alias, config, id, realm) {
  var expectedDesc = "Delete authentication config with id " + id;
  return bp.EventSet("matchDeletedAuthenticationConfig", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyAuthenticationConfigDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ authentication\ config\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ authentication\ config\ with\ id\ (.+)$/);
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
  var description = "Create execution with id " + executionId;
  var body = {
    "authenticator": String(authenticator),
    "authenticatorConfig": String(authenticatorConfig),
    "authenticatorFlow": String(authenticatorFlow),
    "autheticatorFlow": String(autheticatorFlow),
    "executionId": String(executionId),
    "flowId": String(flowId),
    "id": String(id),
    "parentFlow": String(parentFlow),
    "priority": String(priority),
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
  var description = "Get execution with id " + executionId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var url = "/" + realm + "/authentication/executions/" + executionId;
  var description = "Delete execution with id " + executionId;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var expectedDesc = "Create execution with id " + executionId;
  return matchSuccess(expectedDesc);
}

function waitForAnyExecutionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ execution\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ execution\ with\ id\ (.+)$/);
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
  var expectedDesc = "Create execution with id " + executionId;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement) {
  var expectedDesc = "Delete execution with id " + executionId;
  return bp.EventSet("matchDeletedExecution", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyExecutionDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ execution\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ execution\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["executionId"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: execution config ----

function postExecutionConfig(alias, config, executionId, id, realm) {
  var url = "/" + realm + "/authentication/executions/" + executionId + "/config";
  var description = "Create execution config with id " + id + " for execution " + executionId;
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
  var description = "Get execution config with id " + id + " for execution " + executionId;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingExecutionConfig(alias, config, executionId, id, realm) {
  getExecutionConfig(alias, config, executionId, id, realm);
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
  var expectedDesc = "Create execution config with id " + id + " for execution " + executionId;
  return matchSuccess(expectedDesc);
}

function waitForAnyExecutionConfigAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ execution\ config\ with\ id\ (.+)\ for\ execution\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ execution\ config\ with\ id\ (.+)\ for\ execution\ (.+)$/);
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create execution config") > -1;
  });
}

function waitForExecutionConfigAdded(alias, config, executionId, id, realm) {
  var expectedDesc = "Create execution config with id " + id + " for execution " + executionId;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: authentication flow ----

function createAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  var url = "/" + realm + "/authentication/flows";
  var description = "Create authentication flow in realm " + realm;
  var body = {
    "alias": String(alias),
    "authenticationExecutions": String(authenticationExecutions),
    "builtIn": String(builtIn),
    "description": String(description),
    "id": String(id),
    "providerId": String(providerId),
    "realm": String(realm),
    "topLevel": String(topLevel),
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
    "builtIn": String(builtIn),
    "description": String(description),
    "id": String(id),
    "providerId": String(providerId),
    "realm": String(realm),
    "topLevel": String(topLevel),
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
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel) {
  deleteAuthenticationFlow(alias, authenticationExecutions, builtIn, description, flowAlias, id, providerId, realm, topLevel);
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
    expectedResponseCodes: [204],
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

function getExecutions(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions";
  var description = "Get executions for flow " + flowAlias + " in realm " + realm;
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
    "alias": "alias_" + realm,
    "authenticationConfig": "authenticationConfig_" + realm,
    "authenticationFlow": String(true),
    "configurable": String(true),
    "description": "description_" + realm,
    "displayName": "displayName_" + realm,
    "flowAlias": String(flowAlias),
    "flowId": "flowId_" + realm,
    "id": "id_" + realm,
    "index": String(1),
    "level": String(1),
    "providerId": "providerId_" + realm,
    "realm": String(realm),
    "requirement": "requirement_" + realm,
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

function tryToAddExistingAuthenticationExecution(executionId, flowAlias, realm) {
  updateExecutions(executionId, flowAlias, realm);
}

function verifyAuthenticationExecutionExists(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/execution";
  var description = "Verify AuthenticationExecution with realm " + realm + " exists";
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

function verifyAuthenticationExecutionDoesNotExist(executionId, flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/execution";
  var description = "Verify AuthenticationExecution with realm " + realm + " does not exist";
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

function matchAddedAuthenticationExecution(executionId, flowAlias, realm) {
  var expectedDesc = "Add execution to flow " + flowAlias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthenticationExecutionAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ execution\ to\ flow\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ execution\ to\ flow\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["flowAlias", "realm"];
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
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create authentication execution") > -1;
  });
}

function waitForAuthenticationExecutionAdded(executionId, flowAlias, realm) {
  var expectedDesc = "Add execution to flow " + flowAlias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: authentication flow copy ----

function copyAuthenticationFlow(flowAlias, realm) {
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
      , flowAlias: String(flowAlias)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthenticationFlowCopy(flowAlias, realm) {
  copyAuthenticationFlow(flowAlias, realm);
}

function verifyAuthenticationFlowCopyExists(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/copy";
  var description = "Verify AuthenticationFlowCopy exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].flowAlias) === String(flowAlias) && String(items[i].realm) === String(realm)) {
            return pvg.success("AuthenticationFlowCopy exists");
          }
        }
      }
      return pvg.fail("Expected AuthenticationFlowCopy to exist but it does not");
    }
  });
}

function verifyAuthenticationFlowCopyDoesNotExist(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/copy";
  var description = "Verify AuthenticationFlowCopy does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].flowAlias) === String(flowAlias) && String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected AuthenticationFlowCopy to not exist but it does");
          }
        }
      }
      return pvg.success("AuthenticationFlowCopy does not exist");
    }
  });
}

function matchAddedAuthenticationFlowCopy(flowAlias, realm) {
  var expectedDesc = "Copy authentication flow " + flowAlias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthenticationFlowCopyAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Copy\ authentication\ flow\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Copy\ authentication\ flow\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["flowAlias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthenticationFlowCopyAddedEvent(keyVal) {
  return bp.EventSet("AddAuthenticationFlowCopy:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthenticationFlowCopyAdded() {
  return bp.EventSet("matchAnyAuthenticationFlowCopyAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create authentication flow copy") > -1;
  });
}

function waitForAuthenticationFlowCopyAdded(flowAlias, realm) {
  var expectedDesc = "Copy authentication flow " + flowAlias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: authentication flow flow ----

function addFlowToFlow(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/flow";
  var description = "Add flow to flow " + flowAlias + " in realm " + realm;
  var body = {
    "flowAlias": String(flowAlias),
    "realm": String(realm),
  };
  svc.post(url, {
    body: JSON.stringify(body),
    expectedResponseCodes: [200],
    parameters: {
      description: description,
      , flowAlias: String(flowAlias)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingAuthenticationFlowFlow(flowAlias, realm) {
  addFlowToFlow(flowAlias, realm);
}

function verifyAuthenticationFlowFlowExists(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/flow";
  var description = "Verify AuthenticationFlowFlow exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].flowAlias) === String(flowAlias) && String(items[i].realm) === String(realm)) {
            return pvg.success("AuthenticationFlowFlow exists");
          }
        }
      }
      return pvg.fail("Expected AuthenticationFlowFlow to exist but it does not");
    }
  });
}

function verifyAuthenticationFlowFlowDoesNotExist(flowAlias, realm) {
  var url = "/" + realm + "/authentication/flows/" + flowAlias + "/executions/flow";
  var description = "Verify AuthenticationFlowFlow does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].flowAlias) === String(flowAlias) && String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected AuthenticationFlowFlow to not exist but it does");
          }
        }
      }
      return pvg.success("AuthenticationFlowFlow does not exist");
    }
  });
}

function matchAddedAuthenticationFlowFlow(flowAlias, realm) {
  var expectedDesc = "Add flow to flow " + flowAlias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyAuthenticationFlowFlowAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ flow\ to\ flow\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ flow\ to\ flow\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["flowAlias", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getAuthenticationFlowFlowAddedEvent(keyVal) {
  return bp.EventSet("AddAuthenticationFlowFlow:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyAuthenticationFlowFlowAdded() {
  return bp.EventSet("matchAnyAuthenticationFlowFlowAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create authentication flow flow") > -1;
  });
}

function waitForAuthenticationFlowFlowAdded(flowAlias, realm) {
  var expectedDesc = "Add flow to flow " + flowAlias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: form action provider ----

function getFormActionProviders(realm) {
  var url = "/" + realm + "/authentication/form-action-providers";
  var description = "Get form action providers in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: form provider ----

function getFormProviders(realm) {
  var url = "/" + realm + "/authentication/form-providers";
  var description = "Get form providers in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: per client config description ----

function getPerClientConfigDescription(realm) {
  var url = "/" + realm + "/authentication/per-client-config-description";
  var description = "Get per client config description in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
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
    "config": config,
    "defaultAction": String(true),
    "enabled": String(true),
    "name": "name_" + realm,
    "priority": String(1),
    "providerId": "providerId_" + realm,
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
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingRequiredAction(alias, realm) {
  deleteRequiredAction(alias, realm);
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
    expectedResponseCodes: [204],
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
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingClientNode(id, node, realm) {
  deleteNode(id, node, realm);
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
    expectedResponseCodes: [204],
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingOptionalClientScope(clientScopeId, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/optional-client-scopes/" + clientScopeId;
  var description = "Verify we cannot delete non-existing OptionalClientScope";
  svc.delete(url, {
    expectedResponseCodes: [204],
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
    "enabled": String(true),
    "id": String(id),
    "realm": String(realm),
    "resource": "resource_" + realm,
    "scopePermissions": scopePermissions,
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

// ---- Entity: user ----

function createUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users";
  var description = "Create user with id " + id + " in realm " + realm;
  var body = {
    "access": access,
    "applicationRoles": applicationRoles,
    "attributes": attributes,
    "clientConsents": String(clientConsents),
    "clientRoles": clientRoles,
    "createdTimestamp": String(createdTimestamp),
    "credentials": String(credentials),
    "disableableCredentialTypes": String(disableableCredentialTypes),
    "email": String(email),
    "emailVerified": String(emailVerified),
    "enabled": String(enabled),
    "federatedIdentities": String(federatedIdentities),
    "federationLink": String(federationLink),
    "firstName": String(firstName),
    "groups": String(groups),
    "id": String(id),
    "lastName": String(lastName),
    "notBefore": String(notBefore),
    "origin": String(origin),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "requiredActions": String(requiredActions),
    "self": String(self),
    "serviceAccountClientId": String(serviceAccountClientId),
    "socialLinks": String(socialLinks),
    "totp": String(totp),
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

function getUserById(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Get user with id " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Update user with id " + id + " in realm " + realm;
  var body = {
    "access": access,
    "applicationRoles": applicationRoles,
    "attributes": attributes,
    "clientConsents": String(clientConsents),
    "clientRoles": clientRoles,
    "createdTimestamp": String(createdTimestamp),
    "credentials": String(credentials),
    "disableableCredentialTypes": String(disableableCredentialTypes),
    "email": String(email),
    "emailVerified": String(emailVerified),
    "enabled": String(enabled),
    "federatedIdentities": String(federatedIdentities),
    "federationLink": String(federationLink),
    "firstName": String(firstName),
    "groups": String(groups),
    "id": String(id),
    "lastName": String(lastName),
    "notBefore": String(notBefore),
    "origin": String(origin),
    "realm": String(realm),
    "realmRoles": String(realmRoles),
    "requiredActions": String(requiredActions),
    "self": String(self),
    "serviceAccountClientId": String(serviceAccountClientId),
    "socialLinks": String(socialLinks),
    "totp": String(totp),
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

function deleteUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var url = "/" + realm + "/users/" + id;
  var description = "Delete user with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
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
    "algorithm": "algorithm_" + realm,
    "config": config,
    "counter": String(1),
    "createdDate": String(1),
    "credentialData": "credentialData_" + realm,
    "device": "device_" + realm,
    "digits": String(1),
    "hashIterations": String(1),
    "hashedSaltedValue": "hashedSaltedValue_" + realm,
    "id": String(id),
    "period": String(1),
    "priority": String(1),
    "realm": String(realm),
    "salt": "salt_" + realm,
    "secretData": "secretData_" + realm,
    "temporary": String(true),
    "type": "type_" + realm,
    "userLabel": "userLabel_" + realm,
    "value": "value_" + realm,
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
  var description = "Send verify email for user " + id + " in realm " + realm + " with client_id " + client_id + " and redirect_uri " + redirect_uri;
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
  getSessions(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
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
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var expectedDesc = "Create user with id " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ user\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ user\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
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
  var expectedDesc = "Create user with id " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUser(access, applicationRoles, attributes, clientConsents, clientRoles, clientUuid, client_id, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, redirect_uri, requiredActions, self, serviceAccountClientId, socialLinks, totp, username) {
  var expectedDesc = "Delete user with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUser", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ user\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ user\ with\ id\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user consent ----

function getUserConsents(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents";
  var description = "Get consents for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteUserConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Delete consent for client " + client + " of user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingUserConsent(client, id, realm) {
  var url = "/" + realm + "/users/" + id + "/consents/" + client;
  var description = "Verify we cannot delete non-existing UserConsent";
  svc.delete(url, {
    expectedResponseCodes: [204],
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

function getUserCredentials(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials";
  var description = "Get credentials for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function deleteUserCredential(credentialId, id, newPreviousCredentialId, realm) {
  var url = "/" + realm + "/users/" + id + "/credentials/" + credentialId;
  var description = "Delete credential " + credentialId + " for user " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchDeletedUserCredential(credentialId, id, newPreviousCredentialId, realm) {
  var expectedDesc = "Delete credential " + credentialId + " for user " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedUserCredential", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserCredentialDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ credential\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ credential\ (.+)\ for\ user\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["credentialId", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: user profile ----

function getUserProfile(realm) {
  var url = "/" + realm + "/users/profile";
  var description = "Get profile for realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateUserProfile(realm) {
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

function getUserStorageCredentialTypes(id, realm) {
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
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingUserFederatedIdentity(id, provider, realm) {
  deleteUserFederatedIdentity(id, provider, realm);
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
    expectedResponseCodes: [204],
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
  var description = "Get groups for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function getUserGroupsCount(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/count";
  var description = "Get groups count for user " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var url = "/" + realm + "/users/" + id + "/groups/" + groupId;
  var description = "Add user " + id + " to group " + groupId + " in realm " + realm;
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
  var description = "Remove user " + id + " from group " + groupId + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  deleteUserGroup(briefRepresentation, first, groupId, id, max, realm, search);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var expectedDesc = "Add user " + id + " to group " + groupId + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyUserGroupAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ user\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ user\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "groupId", "realm"];
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
  var expectedDesc = "Add user " + id + " to group " + groupId + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedUserGroup(briefRepresentation, first, groupId, id, max, realm, search) {
  var expectedDesc = "Remove user " + id + " from group " + groupId + " in realm " + realm;
  return bp.EventSet("matchDeletedUserGroup", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyUserGroupDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Remove\ user\ (.+)\ from\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Remove\ user\ (.+)\ from\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "groupId", "realm"];
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
  impersonateUser(id, realm);
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
  var description = "Add role mapping to client scope " + id + " for client " + client + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role mapping from client scope " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client;
  var description = "Get role mappings of client scope " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  getClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to client scope " + id + " for client " + client + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
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
  var expectedDesc = "Add role mapping to client scope " + id + " for client " + client + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from client scope " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ client\ scope\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
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
  var description = "Get available role mappings of client scope " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping client composite ----

function getClientScopeScopeMappingsClientComposite(briefRepresentation, client, id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/clients/" + client + "/composite";
  var description = "Get composite role mappings of client scope " + id + " for client " + client + " in realm " + realm + " with briefRepresentation " + briefRepresentation;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping realm ----

function postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Add role mapping to client scope " + id + " realm in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role mapping from client scope " + id + " realm in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm";
  var description = "Get role mappings of client scope " + id + " realm in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  getClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to client scope " + id + " realm in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeScopeMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ client\ scope\ (.+)\ realm\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ client\ scope\ (.+)\ realm\ in\ realm\ (.+)$/);
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
  var expectedDesc = "Add role mapping to client scope " + id + " realm in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from client scope " + id + " realm in realm " + realm;
  return bp.EventSet("matchDeletedClientScopeScopeMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeScopeMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ client\ scope\ (.+)\ realm\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ client\ scope\ (.+)\ realm\ in\ realm\ (.+)$/);
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
  var description = "Get available role mappings of client scope " + id + " realm in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mapping realm composite ----

function getClientScopeScopeMappingsRealmComposite(briefRepresentation, id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings/realm/composite";
  var description = "Get composite role mappings of client scope " + id + " realm in realm " + realm + " with briefRepresentation " + briefRepresentation;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope scope mappings ----

function getClientScopeScopeMappings(id, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/scope-mappings";
  var description = "Get scope mappings of client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template scope mapping client ----

function postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role mapping to client template " + id + " for client " + client + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role mapping from client template " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings/clients/" + client;
  var description = "Get role mappings of client template " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  getClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role mapping to client template " + id + " for client " + client + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ mapping\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ mapping\ to\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
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
  var expectedDesc = "Add role mapping to client template " + id + " for client " + client + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientTemplateScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role mapping from client template " + id + " for client " + client + " in realm " + realm;
  return bp.EventSet("matchDeletedClientTemplateScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientTemplateScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ mapping\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ mapping\ from\ client\ template\ (.+)\ for\ client\ (.+)\ in\ realm\ (.+)$/);
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
  var description = "Get available role mappings of client template " + id + " for client " + client + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client template scope mappings ----

function getClientTemplateScopeMappings(id, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/scope-mappings";
  var description = "Get scope mappings of client template " + id + " in realm " + realm;
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
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
    expectedResponseCodes: [204]
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
  getClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
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

// ---- Entity: client scope mapping ----

function getClientScopeMappings(id, realm) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings";
  var description = "Get client scope mappings in realm " + realm + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: client scope mapping client ----

function postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Add role to client scope mapping client " + client + " in realm " + realm + " with id " + id;
  var body = {
    "attributes": attributes,
    "client": String(client),
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role from client scope mapping client " + client + " in realm " + realm + " with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/clients/" + client;
  var description = "Get client scope mapping client " + client + " in realm " + realm + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  getClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping client " + client + " in realm " + realm + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeMappingClientAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ mapping\ client\ (.+)\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ mapping\ client\ (.+)\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "realm", "id"];
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
  var expectedDesc = "Add role to client scope mapping client " + client + " in realm " + realm + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope mapping client " + client + " in realm " + realm + " with id " + id;
  return bp.EventSet("matchDeletedClientScopeMappingClient", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingClientDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ mapping\ client\ (.+)\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ mapping\ client\ (.+)\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["client", "realm", "id"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: client scope mapping realm ----

function postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Add role to client scope mapping realm in realm " + realm + " with id " + id;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role from client scope mapping realm in realm " + realm + " with id " + id;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/scope-mappings/realm";
  var description = "Get client scope mapping realm in realm " + realm + " with id " + id;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  getClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Add role to client scope mapping realm in realm " + realm + " with id " + id;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeMappingRealmAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ to\ client\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ to\ client\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "id"];
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
  var expectedDesc = "Add role to client scope mapping realm in realm " + realm + " with id " + id;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedClientScopeMappingRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired) {
  var expectedDesc = "Delete role from client scope mapping realm in realm " + realm + " with id " + id;
  return bp.EventSet("matchDeletedClientScopeMappingRealm", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientScopeMappingRealmDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ from\ client\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ from\ client\ scope\ mapping\ realm\ in\ realm\ (.+)\ with\ id\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm", "id"];
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
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
    expectedResponseCodes: [204]
  });
}

function updateClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/clients/" + id + "/roles/" + role-name;
  var description = "Update client role " + role-name + " in client " + id + " of realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": String(scopeParamRequired),
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
  getClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
    expectedResponseCodes: [204],
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

// ---- Entity: realm role ----

function createRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles";
  var description = "Create realm role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
    expectedResponseCodes: [204]
  });
}

function updateRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name;
  var description = "Update realm role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": String(scopeParamRequired),
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
  getRealmRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
    expectedResponseCodes: [204],
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

// ---- Entity: role composite ----

function postRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Add role composite to role " + role-name + " in realm " + realm;
  var body = {
    "attributes": attributes,
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "role-name": String(role-name),
    "scopeParamRequired": String(scopeParamRequired),
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
  var description = "Delete role composite from role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function getRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var url = "/" + realm + "/roles/" + role-name + "/composites";
  var description = "Get role composites of role " + role-name + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  getRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Add role composite to role " + role-name + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyRoleCompositeAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ role\ composite\ to\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ role\ composite\ to\ role\ (.+)\ in\ realm\ (.+)$/);
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
  var expectedDesc = "Add role composite to role " + role-name + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired) {
  var expectedDesc = "Delete role composite from role " + role-name + " in realm " + realm;
  return bp.EventSet("matchDeletedRoleComposite", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyRoleCompositeDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ role\ composite\ from\ role\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ role\ composite\ from\ role\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["role-name", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

// ---- Entity: role composite client ----

function getRoleCompositeClient(clientUuid, realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/composites/clients/" + clientUuid;
  var description = "Get client composites of role " + role-name + " in realm " + realm + " for client " + clientUuid;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: role composite realm ----

function getRoleCompositeRealm(realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/composites/realm";
  var description = "Get realm composites of role " + role-name + " in realm " + realm;
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

function putRoleManagementPermissions(realm, role-name) {
  var url = "/" + realm + "/roles/" + role-name + "/management/permissions";
  var description = "Update management permissions of role " + role-name + " in realm " + realm;
  var body = {
    "enabled": String(true),
    "realm": String(realm),
    "resource": "resource_" + realm,
    "role-name": String(role-name),
    "scopePermissions": scopePermissions,
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
    "config": config,
    "consentRequired": String(true),
    "consentText": "consentText_" + realm,
    "id": "id_" + realm,
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_" + realm,
    "protocol": "protocol_" + realm,
    "protocolMapper": "protocolMapper_" + realm,
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingClientScopeProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-scopes/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientScopeProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [204],
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

// ---- Entity: client scope protocol mapper add models ----

function addClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper models to client scope " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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

function tryToAddExistingClientScopeProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  addClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
}

function verifyClientScopeProtocolMapperAddModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientScopeProtocolMapperAddModels exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientScopeProtocolMapperAddModels exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMapperAddModels to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMapperAddModelsDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientScopeProtocolMapperAddModels does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientScopeProtocolMapperAddModels to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMapperAddModels does not exist");
    }
  });
}

function matchAddedClientScopeProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client scope " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeProtocolMapperAddModelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ models\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ models\ to\ client\ scope\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientScopeProtocolMapperAddModelsAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMapperAddModels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMapperAddModelsAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMapperAddModelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client scope protocol mapper add models") > -1;
  });
}

function waitForClientScopeProtocolMapperAddModelsAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client scope " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client scope protocol mapper models ----

function getClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Get protocol mapper models of client scope " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addClientScopeProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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

function tryToAddExistingClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  addClientScopeProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
}

function verifyClientScopeProtocolMapperModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapperModels with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientScopeProtocolMapperModels exists");
          }
        }
      }
      return pvg.fail("Expected ClientScopeProtocolMapperModels to exist but it does not");
    }
  });
}

function verifyClientScopeProtocolMapperModelsDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/models";
  var description = "Verify ClientScopeProtocolMapperModels with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientScopeProtocolMapperModels to not exist but it does");
          }
        }
      }
      return pvg.success("ClientScopeProtocolMapperModels does not exist");
    }
  });
}

function matchAddedClientScopeProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientScopeProtocolMapperModelsAdded() {
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

function getClientScopeProtocolMapperModelsAddedEvent(keyVal) {
  return bp.EventSet("AddClientScopeProtocolMapperModels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientScopeProtocolMapperModelsAdded() {
  return bp.EventSet("matchAnyClientScopeProtocolMapperModelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client scope protocol mapper models") > -1;
  });
}

function waitForClientScopeProtocolMapperModelsAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client scope " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client scope protocol mapper protocol ----

function getClientScopeProtocolMapperByProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-scopes/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mapper models for protocol " + protocol + " in client scope " + id + " of realm " + realm;
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
    "config": config,
    "consentRequired": String(true),
    "consentText": "consentText_" + realm,
    "id": "id_" + realm,
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_" + realm,
    "protocol": "protocol_" + realm,
    "protocolMapper": "protocolMapper_" + realm,
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingClientTemplateProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/client-templates/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientTemplateProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [204],
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

// ---- Entity: client template protocol mapper add models ----

function addClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper models to client template " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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

function tryToAddExistingClientTemplateProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  addClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
}

function verifyClientTemplateProtocolMapperAddModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientTemplateProtocolMapperAddModels exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientTemplateProtocolMapperAddModels exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMapperAddModels to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMapperAddModelsDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientTemplateProtocolMapperAddModels does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientTemplateProtocolMapperAddModels to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMapperAddModels does not exist");
    }
  });
}

function matchAddedClientTemplateProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client template " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateProtocolMapperAddModelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ models\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ models\ to\ client\ template\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientTemplateProtocolMapperAddModelsAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMapperAddModels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMapperAddModelsAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMapperAddModelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client template protocol mapper add models") > -1;
  });
}

function waitForClientTemplateProtocolMapperAddModelsAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client template " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client template protocol mapper models ----

function getClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Get protocol mapper models of client template " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function addClientTemplateProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Add protocol mapper model to client template " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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

function tryToAddExistingClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  addClientTemplateProtocolMapperModel(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
}

function verifyClientTemplateProtocolMapperModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapperModels with realm " + realm + " exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.success("ClientTemplateProtocolMapperModels exists");
          }
        }
      }
      return pvg.fail("Expected ClientTemplateProtocolMapperModels to exist but it does not");
    }
  });
}

function verifyClientTemplateProtocolMapperModelsDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/models";
  var description = "Verify ClientTemplateProtocolMapperModels with realm " + realm + " does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].realm) === String(realm)) {
            return pvg.fail("Expected ClientTemplateProtocolMapperModels to not exist but it does");
          }
        }
      }
      return pvg.success("ClientTemplateProtocolMapperModels does not exist");
    }
  });
}

function matchAddedClientTemplateProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientTemplateProtocolMapperModelsAdded() {
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

function getClientTemplateProtocolMapperModelsAddedEvent(keyVal) {
  return bp.EventSet("AddClientTemplateProtocolMapperModels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.realm) === String(keyVal);
  });
}

function matchAnyClientTemplateProtocolMapperModelsAdded() {
  return bp.EventSet("matchAnyClientTemplateProtocolMapperModelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.realm !== undefined && e.name.indexOf("Create client template protocol mapper models") > -1;
  });
}

function waitForClientTemplateProtocolMapperModelsAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper model to client template " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: client template protocol mapper protocol ----

function getClientTemplateProtocolMapperByProtocol(id, protocol, realm) {
  var url = "/" + realm + "/client-templates/" + id + "/protocol-mappers/protocol/" + protocol;
  var description = "Get protocol mapper models for protocol " + protocol + " in client template " + id + " of realm " + realm;
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
    "config": config,
    "consentRequired": String(true),
    "consentText": "consentText_" + realm,
    "id": "id_" + realm,
    "id1": String(id1),
    "id2": String(id2),
    "name": "name_" + realm,
    "protocol": "protocol_" + realm,
    "protocolMapper": "protocolMapper_" + realm,
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
    expectedResponseCodes: [204]
  });
}

function tryToDeleteANonExistingClientProtocolMapper(id1, id2, realm) {
  var url = "/" + realm + "/clients/" + id1 + "/protocol-mappers/models/" + id2;
  var description = "Verify we cannot delete non-existing ClientProtocolMapper";
  svc.delete(url, {
    expectedResponseCodes: [204],
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

// ---- Entity: client protocol mapper add models ----

function addClientProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Add protocol mapper models to client " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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

function tryToAddExistingClientProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  addClientProtocolMapperModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
}

function verifyClientProtocolMapperAddModelsExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientProtocolMapperAddModels exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("ClientProtocolMapperAddModels exists");
          }
        }
      }
      return pvg.fail("Expected ClientProtocolMapperAddModels to exist but it does not");
    }
  });
}

function verifyClientProtocolMapperAddModelsDoesNotExist(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/add-models";
  var description = "Verify ClientProtocolMapperAddModels does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected ClientProtocolMapperAddModels to not exist but it does");
          }
        }
      }
      return pvg.success("ClientProtocolMapperAddModels does not exist");
    }
  });
}

function matchAddedClientProtocolMapperAddModels(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyClientProtocolMapperAddModelsAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ protocol\ mapper\ models\ to\ client\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ protocol\ mapper\ models\ to\ client\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getClientProtocolMapperAddModelsAddedEvent(keyVal) {
  return bp.EventSet("AddClientProtocolMapperAddModels:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyClientProtocolMapperAddModelsAdded() {
  return bp.EventSet("matchAnyClientProtocolMapperAddModelsAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create client protocol mapper add models") > -1;
  });
}

function waitForClientProtocolMapperAddModelsAdded(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var expectedDesc = "Add protocol mapper models to client " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: protocol mapper ----

function createProtocolMapper(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm) {
  var url = "/" + realm + "/clients/" + id + "/protocol-mappers/models";
  var description = "Create protocol mapper with id " + id + " in realm " + realm;
  var body = {
    "config": config,
    "consentRequired": String(consentRequired),
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
  getProtocolMappers(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
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
  var description = "Create identity provider in realm " + realm;
  var body = {
    "addReadTokenRoleOnCreate": String(addReadTokenRoleOnCreate),
    "alias": String(alias),
    "authenticateByDefault": String(authenticateByDefault),
    "config": config,
    "displayName": String(displayName),
    "enabled": String(enabled),
    "firstBrokerLoginFlowAlias": String(firstBrokerLoginFlowAlias),
    "internalId": String(internalId),
    "linkOnly": String(linkOnly),
    "postBrokerLoginFlowAlias": String(postBrokerLoginFlowAlias),
    "providerId": String(providerId),
    "realm": String(realm),
    "storeToken": String(storeToken),
    "trustEmail": String(trustEmail),
    "updateProfileFirstLogin": String(updateProfileFirstLogin),
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
  var description = "Delete identity provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var url = "/" + realm + "/identity-provider/instances/" + alias;
  var description = "Update identity provider " + alias + " in realm " + realm;
  var body = {
    "addReadTokenRoleOnCreate": String(addReadTokenRoleOnCreate),
    "alias": String(alias),
    "authenticateByDefault": String(authenticateByDefault),
    "config": config,
    "displayName": String(displayName),
    "enabled": String(enabled),
    "firstBrokerLoginFlowAlias": String(firstBrokerLoginFlowAlias),
    "internalId": String(internalId),
    "linkOnly": String(linkOnly),
    "postBrokerLoginFlowAlias": String(postBrokerLoginFlowAlias),
    "providerId": String(providerId),
    "realm": String(realm),
    "storeToken": String(storeToken),
    "trustEmail": String(trustEmail),
    "updateProfileFirstLogin": String(updateProfileFirstLogin),
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
  var description = "Get identity provider " + alias + " in realm " + realm;
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
  listIdentityProviders(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
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
    expectedResponseCodes: [200],
    parameters: { description: description }
  });
}

function matchAddedIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var expectedDesc = "Create identity provider in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyIdentityProviderAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ identity\ provider\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ identity\ provider\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["realm"];
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
  var expectedDesc = "Create identity provider in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode) {
  var expectedDesc = "Delete identity provider " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProvider", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ identity\ provider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ identity\ provider\ (.+)\ in\ realm\ (.+)$/);
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
  var description = "Create mapper " + id + " for identity provider " + alias + " in realm " + realm;
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
  var description = "Delete mapper " + id + " for identity provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function updateIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers/" + id;
  var description = "Update mapper " + id + " for identity provider " + alias + " in realm " + realm;
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
  var description = "Get mapper " + id + " for identity provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function listIdentityProviderMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var url = "/" + realm + "/identity-provider/instances/" + alias + "/mappers";
  var description = "List mappers for identity provider " + alias + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  listIdentityProviderMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
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
    expectedResponseCodes: [204],
    parameters: { description: description }
  });
}

function matchAddedIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var expectedDesc = "Create mapper " + id + " for identity provider " + alias + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyIdentityProviderMapperAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Create\ mapper\ (.+)\ for\ identity\ provider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Create\ mapper\ (.+)\ for\ identity\ provider\ (.+)\ in\ realm\ (.+)$/);
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
  var expectedDesc = "Create mapper " + id + " for identity provider " + alias + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

function matchDeletedIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm) {
  var expectedDesc = "Delete mapper " + id + " for identity provider " + alias + " in realm " + realm;
  return bp.EventSet("matchDeletedIdentityProviderMapper", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyIdentityProviderMapperDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ mapper\ (.+)\ for\ identity\ provider\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ mapper\ (.+)\ for\ identity\ provider\ (.+)\ in\ realm\ (.+)$/);
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
    "enabled": String(true),
    "realm": String(realm),
    "resource": "resource_" + realm,
    "scopePermissions": scopePermissions,
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
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
    expectedResponseCodes: [204]
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
  getGroupRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
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
    "clientRole": String(clientRole),
    "composite": String(composite),
    "composites": String(composites),
    "containerId": String(containerId),
    "description": String(description),
    "id": String(id),
    "name": String(name),
    "realm": String(realm),
    "scopeParamRequired": String(scopeParamRequired),
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
    expectedResponseCodes: [204]
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
  getUserRoleMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
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
    expectedResponseCodes: [204],
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
  var description = "Upload client certificate file " + attr + " for client " + id + " in realm " + realm;
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

function postDownload(attr, id, realm) {
  var url = "/" + realm + "/clients/" + id + "/certificates/" + attr + "/download";
  var description = "Download client certificate " + attr + " for client " + id + " in realm " + realm + " with KeyStoreConfig";
  var body = {
    "attr": String(attr),
    "format": "format_" + realm,
    "id": String(id),
    "keyAlias": "keyAlias_" + realm,
    "keyPassword": "keyPassword_" + realm,
    "realm": String(realm),
    "realmAlias": "realmAlias_" + realm,
    "realmCertificate": String(true),
    "storePassword": "storePassword_" + realm,
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
  var description = "Generate and download client certificate " + attr + " for client " + id + " in realm " + realm + " with KeyStoreConfig";
  var body = {
    "attr": String(attr),
    "format": "format_" + realm,
    "id": String(id),
    "keyAlias": "keyAlias_" + realm,
    "keyPassword": "keyPassword_" + realm,
    "realm": String(realm),
    "realmAlias": "realmAlias_" + realm,
    "realmCertificate": String(true),
    "storePassword": "storePassword_" + realm,
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
  postGenerateAndDownload(attr, id, realm);
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
    expectedResponseCodes: [204]
  });
}

function updateGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id;
  var description = "Update group " + id + " in realm " + realm;
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
  getGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
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
    expectedResponseCodes: [204],
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

// ---- Entity: group child ----

function addGroupChild(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id + "/children";
  var description = "Add child group " + name + " to group " + id + " in realm " + realm;
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
      , id: String(id)
      , realm: String(realm)
    }
  });
  bp.sync({ request: bp.Event("Done: " + description, { None: String(None) }) });
}

function tryToAddExistingGroupChild(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  addGroupChild(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
}

function verifyGroupChildExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id + "/children";
  var description = "Verify GroupChild exists";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.success("GroupChild exists");
          }
        }
      }
      return pvg.fail("Expected GroupChild to exist but it does not");
    }
  });
}

function verifyGroupChildDoesNotExist(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var url = "/" + realm + "/groups/" + id + "/children";
  var description = "Verify GroupChild does not exist";
  svc.get(url, {
    expectedResponseCodes: [200],
    parameters: { description: description },
    callback: function(response) {
      var items = JSON.parse(response.body);
      if (Array.isArray(items)) {
        for (var i = 0; i < items.length; i++) {
          if (String(items[i].id) === String(id)) {
            return pvg.fail("Expected GroupChild to not exist but it does");
          }
        }
      }
      return pvg.success("GroupChild does not exist");
    }
  });
}

function matchAddedGroupChild(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var expectedDesc = "Add child group " + name + " to group " + id + " in realm " + realm;
  return matchSuccess(expectedDesc);
}

function waitForAnyGroupChildAdded() {
  var ev = waitFor(matchesDescriptionRegex(/^Add\ child\ group\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Add\ child\ group\ (.+)\ to\ group\ (.+)\ in\ realm\ (.+)$/);
  var captures = m.slice(1);
  var names = ["name", "id", "realm"];
  var obj = {};
  for (var i = 0; i < names.length; i++) {
    obj[names[i]] = (i < captures.length) ? captures[i] : undefined;
  }
  return obj;
}

function getGroupChildAddedEvent(keyVal) {
  return bp.EventSet("AddGroupChild:" + keyVal, function(e) {
    if (!e.data || !e.data.parameters) return false;
    return String(e.data.parameters.id) === String(keyVal);
  });
}

function matchAnyGroupChildAdded() {
  return bp.EventSet("matchAnyGroupChildAdded", function(e) {
    return e.name.startsWith("Done: ") && e.data && e.data.None !== undefined && e.name.indexOf("Create group child") > -1;
  });
}

function waitForGroupChildAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups) {
  var expectedDesc = "Add child group " + name + " to group " + id + " in realm " + realm;
  waitFor(matchSuccess(expectedDesc));
}

// ---- Entity: group management permission ----

function getGroupManagementPermissions(id, realm) {
  var url = "/" + realm + "/groups/" + id + "/management/permissions";
  var description = "Get management permissions for group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

function updateGroupManagementPermissions(id, realm) {
  var url = "/" + realm + "/groups/" + id + "/management/permissions";
  var description = "Update management permissions for group " + id + " in realm " + realm;
  var body = {
    "enabled": String(true),
    "id": String(id),
    "realm": String(realm),
    "resource": "resource_" + realm,
    "scopePermissions": scopePermissions,
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

// ---- Entity: group member ----

function getGroupMembers(id, realm) {
  var url = "/" + realm + "/groups/" + id + "/members";
  var description = "Get members of group " + id + " in realm " + realm;
  var body = undefined;
  svc.get(url, {
    parameters: { description: description },
    expectedResponseCodes: [200]
  });
}

// ---- Entity: clientInitialAccess ----

function postClientsInitialAccess(count, expiration, id, realm) {
  var url = "/" + realm + "/clients-initial-access";
  var description = "Create client initial access in realm " + realm;
  var body = {
    "count": String(count),
    "expiration": String(expiration),
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
  var description = "Delete client initial access with id " + id + " in realm " + realm;
  var body = undefined;
  svc.delete(url, {
    parameters: { description: description },
    expectedResponseCodes: [204]
  });
}

function tryToAddExistingClientInitialAccess(count, expiration, id, realm) {
  deleteClientsInitialAcces(count, expiration, id, realm);
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
    expectedResponseCodes: [204],
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
  var expectedDesc = "Delete client initial access with id " + id + " in realm " + realm;
  return bp.EventSet("matchDeletedClientInitialAccess", function(e) {
      return !!(e.data && e.data.parameters && e.data.parameters.description === expectedDesc);
  });
}

function waitForAnyClientInitialAccessDeleted() {
  var ev = waitFor(matchesDescriptionRegex(/^Delete\ client\ initial\ access\ with\ id\ (.+)\ in\ realm\ (.+)$/));
  var m = ev.data.parameters.description.match(/^Delete\ client\ initial\ access\ with\ id\ (.+)\ in\ realm\ (.+)$/);
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
