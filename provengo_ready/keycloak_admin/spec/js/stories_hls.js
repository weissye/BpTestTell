// Auto-generated HLS stories
//@provengo summon rest


function resolveDependencies(deps) {
  let captured = {};
  while (Object.keys(deps).length > 0) {
    let missingEventSets = Object.values(deps);
    let e = bp.sync({waitFor: missingEventSets});
    for (let k in deps) {
      if (deps[k].contains(e)) {
        captured[k] = e.data.parameters[k] || e.data.parameters.id || e.data.parameters.customerId || e.data.parameters.vin || e.data.parameters.garageId || e.data.parameters.chainId || e.data.parameters.pmId || e.data.parameters.roId;
        delete deps[k];
      }
    }
  }
  return captured;
}

// Story: crud:Realm:nondet:1:1
bthread("crud:Realm:nondet:1:1", function () {
  let realm = 200;
  createRealm(realm);
  // waitForRealmAdded(realm);
  tryToAddExistingRealm(realm);
  verifyRealmExists(realm);
  updateRealm(realm);
  deleteRealm(realm);
  tryToDeleteANonExistingRealm(realm);
  verifyRealmDoesNotExist(realm);
});

// Story: crud:Realm:nondet:1:2
bthread("crud:Realm:nondet:1:2", function () {
  let realm = 201;
  createRealm(realm);
  // waitForRealmAdded(realm);
  tryToAddExistingRealm(realm);
  updateRealm(realm);
  verifyRealmExists(realm);
  deleteRealm(realm);
  tryToDeleteANonExistingRealm(realm);
  verifyRealmDoesNotExist(realm);
});

// Story: crud:Realm:nondet:negative:dup-add
bthread("crud:Realm:nondet:negative:dup-add", function () {
  let realm = 206;
  createRealm(realm);
  // waitForRealmAdded(realm);
  verifyRealmExists(realm);
  tryToAddExistingRealm(realm);
  verifyRealmExists(realm);
});

// Story: crud:Localization:nondet:1:1
bthread("crud:Localization:nondet:1:1", function () {
  let key = "key_210";
  let locale = "locale_210";
  let realm = 210;
  addLocalization(key, locale, realm);
  // waitForLocalizationAdded(key, locale, realm);
  tryToAddExistingLocalization(key, locale, realm);
  verifyLocalizationExists(key, locale, realm);
  updateLocalization(key, locale, realm);
  deleteLocalization(key, locale, realm);
  tryToDeleteANonExistingLocalization(key, locale, realm);
  verifyLocalizationDoesNotExist(key, locale, realm);
});

// Story: crud:Localization:nondet:1:2
bthread("crud:Localization:nondet:1:2", function () {
  let key = "key_211";
  let locale = "locale_211";
  let realm = 211;
  addLocalization(key, locale, realm);
  // waitForLocalizationAdded(key, locale, realm);
  tryToAddExistingLocalization(key, locale, realm);
  updateLocalization(key, locale, realm);
  verifyLocalizationExists(key, locale, realm);
  deleteLocalization(key, locale, realm);
  tryToDeleteANonExistingLocalization(key, locale, realm);
  verifyLocalizationDoesNotExist(key, locale, realm);
});

// Story: crud:Localization:nondet:negative:dup-add
bthread("crud:Localization:nondet:negative:dup-add", function () {
  let key = "key_216";
  let locale = "locale_216";
  let realm = 216;
  addLocalization(key, locale, realm);
  // waitForLocalizationAdded(key, locale, realm);
  verifyLocalizationExists(key, locale, realm);
  tryToAddExistingLocalization(key, locale, realm);
  verifyLocalizationExists(key, locale, realm);
});

// Story: crud:ClientPolicies:read_only
bthread("crud:ClientPolicies:read_only", function () {
  let realm = 250;
  verifyClientPoliciesExists(realm);
});

// Story: crud:ClientProfiles:read_only
bthread("crud:ClientProfiles:read_only", function () {
  let realm = 260;
  verifyClientProfilesExists(realm);
});

// Story: crud:UsersManagementPermissions:read_only
bthread("crud:UsersManagementPermissions:read_only", function () {
  let realm = 270;
  verifyUsersManagementPermissionsExists(realm);
});

// Story: crud:AuthenticationConfig:nondet:1:1
bthread("crud:AuthenticationConfig:nondet:1:1", function () {
  let alias = "alias_290";
  let config = {};
  let id = 290;
  let realm = 290;
  postAuthenticationConfig(alias, config, id, realm);
  // waitForAuthenticationConfigAdded(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  putAuthenticationConfig(alias, config, id, realm);
  deleteConfig(alias, config, id, realm);
  tryToDeleteANonExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigDoesNotExist(alias, config, id, realm);
});

// Story: crud:AuthenticationConfig:nondet:1:2
bthread("crud:AuthenticationConfig:nondet:1:2", function () {
  let alias = "alias_291";
  let config = {};
  let id = 291;
  let realm = 291;
  postAuthenticationConfig(alias, config, id, realm);
  // waitForAuthenticationConfigAdded(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  putAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  deleteConfig(alias, config, id, realm);
  tryToDeleteANonExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigDoesNotExist(alias, config, id, realm);
});

// Story: crud:AuthenticationConfig:nondet:negative:dup-add
bthread("crud:AuthenticationConfig:nondet:negative:dup-add", function () {
  let alias = "alias_296";
  let config = {};
  let id = 296;
  let realm = 296;
  postAuthenticationConfig(alias, config, id, realm);
  // waitForAuthenticationConfigAdded(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
  tryToAddExistingAuthenticationConfig(alias, config, id, realm);
  verifyAuthenticationConfigExists(alias, config, id, realm);
});

// Story: crud:AuthenticationExecution:nondet:1:1
bthread("crud:AuthenticationExecution:nondet:1:1", function () {
  let authenticator = "authenticator_300";
  let authenticatorConfig = "authenticatorConfig_300";
  let authenticatorFlow = "authenticatorFlow_300";
  let autheticatorFlow = "autheticatorFlow_300";
  let executionId = 300;
  let flowId = 300;
  let id = 300;
  let parentFlow = "parentFlow_300";
  let priority = 300;
  let realm = 300;
  let requirement = "requirement_300";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForAuthenticationExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingAuthenticationExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToDeleteANonExistingAuthenticationExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:AuthenticationExecution:nondet:1:2
bthread("crud:AuthenticationExecution:nondet:1:2", function () {
  let authenticator = "authenticator_301";
  let authenticatorConfig = "authenticatorConfig_301";
  let authenticatorFlow = "authenticatorFlow_301";
  let autheticatorFlow = "autheticatorFlow_301";
  let executionId = 301;
  let flowId = 301;
  let id = 301;
  let parentFlow = "parentFlow_301";
  let priority = 301;
  let realm = 301;
  let requirement = "requirement_301";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForAuthenticationExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingAuthenticationExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  deleteExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToDeleteANonExistingAuthenticationExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionDoesNotExist(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:AuthenticationExecution:nondet:negative:dup-add
bthread("crud:AuthenticationExecution:nondet:negative:dup-add", function () {
  let authenticator = "authenticator_306";
  let authenticatorConfig = "authenticatorConfig_306";
  let authenticatorFlow = "authenticatorFlow_306";
  let autheticatorFlow = "autheticatorFlow_306";
  let executionId = 306;
  let flowId = 306;
  let id = 306;
  let parentFlow = "parentFlow_306";
  let priority = 306;
  let realm = 306;
  let requirement = "requirement_306";
  postExecutions(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  // waitForAuthenticationExecutionAdded(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  tryToAddExistingAuthenticationExecution(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
  verifyAuthenticationExecutionExists(authenticator, authenticatorConfig, authenticatorFlow, autheticatorFlow, executionId, flowId, id, parentFlow, priority, realm, requirement);
});

// Story: crud:ExecutionConfig:read_only
bthread("crud:ExecutionConfig:read_only", function () {
  let alias = "alias_310";
  let config = {};
  let executionId = 310;
  let id = 310;
  let realm = 310;
  verifyExecutionConfigExists(alias, config, executionId, id, realm);
});

// Story: crud:AuthenticationFlow:nondet:1:1
bthread("crud:AuthenticationFlow:nondet:1:1", function () {
  let alias = "alias_320";
  let authenticationExecutions = "authenticationExecutions_320";
  let builtIn = "builtIn_320";
  let description = "description_320";
  let id = 320;
  let providerId = 320;
  let realm = 320;
  let topLevel = "topLevel_320";
  postFlows(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  putFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  deleteFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationFlow:nondet:1:2
bthread("crud:AuthenticationFlow:nondet:1:2", function () {
  let alias = "alias_321";
  let authenticationExecutions = "authenticationExecutions_321";
  let builtIn = "builtIn_321";
  let description = "description_321";
  let id = 321;
  let providerId = 321;
  let realm = 321;
  let topLevel = "topLevel_321";
  postFlows(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  putFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  deleteFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  tryToDeleteANonExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowDoesNotExist(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
});

// Story: crud:AuthenticationFlow:nondet:negative:dup-add
bthread("crud:AuthenticationFlow:nondet:negative:dup-add", function () {
  let alias = "alias_326";
  let authenticationExecutions = "authenticationExecutions_326";
  let builtIn = "builtIn_326";
  let description = "description_326";
  let id = 326;
  let providerId = 326;
  let realm = 326;
  let topLevel = "topLevel_326";
  postFlows(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  // waitForAuthenticationFlowAdded(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  tryToAddExistingAuthenticationFlow(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
  verifyAuthenticationFlowExists(alias, authenticationExecutions, builtIn, description, id, providerId, realm, topLevel);
});

// Story: crud:RequiredAction:nondet:1:1
bthread("crud:RequiredAction:nondet:1:1", function () {
  let alias = "alias_340";
  let realm = 340;
  postRegisterRequiredAction(alias, realm);
  // waitForRequiredActionAdded(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
  putRequiredAction(alias, realm);
  deleteRequiredAction(alias, realm);
  tryToDeleteANonExistingRequiredAction(alias, realm);
  verifyRequiredActionDoesNotExist(alias, realm);
});

// Story: crud:RequiredAction:nondet:1:2
bthread("crud:RequiredAction:nondet:1:2", function () {
  let alias = "alias_341";
  let realm = 341;
  postRegisterRequiredAction(alias, realm);
  // waitForRequiredActionAdded(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  putRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
  deleteRequiredAction(alias, realm);
  tryToDeleteANonExistingRequiredAction(alias, realm);
  verifyRequiredActionDoesNotExist(alias, realm);
});

// Story: crud:RequiredAction:nondet:negative:dup-add
bthread("crud:RequiredAction:nondet:negative:dup-add", function () {
  let alias = "alias_346";
  let realm = 346;
  postRegisterRequiredAction(alias, realm);
  // waitForRequiredActionAdded(alias, realm);
  verifyRequiredActionExists(alias, realm);
  tryToAddExistingRequiredAction(alias, realm);
  verifyRequiredActionExists(alias, realm);
});

// Story: crud:Client:nondet:1:1
bthread("crud:Client:nondet:1:1", function () {
  let access = {};
  let adminUrl = "adminUrl_350";
  let alwaysDisplayInConsole = "alwaysDisplayInConsole_350";
  let attributes = {};
  let authorizationServicesEnabled = "authorizationServicesEnabled_350";
  let authorizationSettings = "authorizationSettings_350";
  let baseUrl = "baseUrl_350";
  let bearerOnly = "bearerOnly_350";
  let clientAuthenticatorType = "clientAuthenticatorType_350";
  let clientId = 350;
  let clientTemplate = "clientTemplate_350";
  let consentRequired = "consentRequired_350";
  let defaultClientScopes = "defaultClientScopes_350";
  let defaultRoles = "defaultRoles_350";
  let description = "description_350";
  let directAccessGrantsEnabled = "directAccessGrantsEnabled_350";
  let directGrantsOnly = "directGrantsOnly_350";
  let enabled = "enabled_350";
  let first = "first_350";
  let frontchannelLogout = "frontchannelLogout_350";
  let fullScopeAllowed = "fullScopeAllowed_350";
  let id = 350;
  let implicitFlowEnabled = "implicitFlowEnabled_350";
  let max = "max_350";
  let name = "name_350";
  let nodeReRegistrationTimeout = 350;
  let notBefore = 350;
  let oauth2DeviceAuthorizationGrantEnabled = "oauth2DeviceAuthorizationGrantEnabled_350";
  let optionalClientScopes = "optionalClientScopes_350";
  let origin = "origin_350";
  let protocol = "protocol_350";
  let protocolMappers = "protocolMappers_350";
  let publicClient = "publicClient_350";
  let q = "q_350";
  let realm = 350;
  let redirectUris = "redirectUris_350";
  let registeredNodes = {};
  let registrationAccessToken = "registrationAccessToken_350";
  let rootUrl = "rootUrl_350";
  let search = "search_350";
  let secret = "secret_350";
  let serviceAccountsEnabled = "serviceAccountsEnabled_350";
  let standardFlowEnabled = "standardFlowEnabled_350";
  let surrogateAuthRequired = "surrogateAuthRequired_350";
  let useTemplateConfig = "useTemplateConfig_350";
  let useTemplateMappers = "useTemplateMappers_350";
  let useTemplateScope = "useTemplateScope_350";
  let viewableOnly = "viewableOnly_350";
  let webOrigins = "webOrigins_350";
  // Dependency Barrier
  let deps = {};
  deps["authenticationFlowBindingOverrides"] = matchAnyAuthenticationFlowAdded();
  let captured = resolveDependencies(deps);
  authenticationFlowBindingOverrides = captured["authenticationFlowBindingOverrides"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["realm"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["id"];
  createClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  // waitForClientAdded(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  tryToAddExistingClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientExists(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  updateClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  deleteClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  tryToDeleteANonExistingClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientDoesNotExist(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
});

// Story: crud:Client:nondet:1:2
bthread("crud:Client:nondet:1:2", function () {
  let access = {};
  let adminUrl = "adminUrl_351";
  let alwaysDisplayInConsole = "alwaysDisplayInConsole_351";
  let attributes = {};
  let authorizationServicesEnabled = "authorizationServicesEnabled_351";
  let authorizationSettings = "authorizationSettings_351";
  let baseUrl = "baseUrl_351";
  let bearerOnly = "bearerOnly_351";
  let clientAuthenticatorType = "clientAuthenticatorType_351";
  let clientId = 351;
  let clientTemplate = "clientTemplate_351";
  let consentRequired = "consentRequired_351";
  let defaultClientScopes = "defaultClientScopes_351";
  let defaultRoles = "defaultRoles_351";
  let description = "description_351";
  let directAccessGrantsEnabled = "directAccessGrantsEnabled_351";
  let directGrantsOnly = "directGrantsOnly_351";
  let enabled = "enabled_351";
  let first = "first_351";
  let frontchannelLogout = "frontchannelLogout_351";
  let fullScopeAllowed = "fullScopeAllowed_351";
  let id = 351;
  let implicitFlowEnabled = "implicitFlowEnabled_351";
  let max = "max_351";
  let name = "name_351";
  let nodeReRegistrationTimeout = 351;
  let notBefore = 351;
  let oauth2DeviceAuthorizationGrantEnabled = "oauth2DeviceAuthorizationGrantEnabled_351";
  let optionalClientScopes = "optionalClientScopes_351";
  let origin = "origin_351";
  let protocol = "protocol_351";
  let protocolMappers = "protocolMappers_351";
  let publicClient = "publicClient_351";
  let q = "q_351";
  let realm = 351;
  let redirectUris = "redirectUris_351";
  let registeredNodes = {};
  let registrationAccessToken = "registrationAccessToken_351";
  let rootUrl = "rootUrl_351";
  let search = "search_351";
  let secret = "secret_351";
  let serviceAccountsEnabled = "serviceAccountsEnabled_351";
  let standardFlowEnabled = "standardFlowEnabled_351";
  let surrogateAuthRequired = "surrogateAuthRequired_351";
  let useTemplateConfig = "useTemplateConfig_351";
  let useTemplateMappers = "useTemplateMappers_351";
  let useTemplateScope = "useTemplateScope_351";
  let viewableOnly = "viewableOnly_351";
  let webOrigins = "webOrigins_351";
  // Dependency Barrier
  let deps = {};
  deps["authenticationFlowBindingOverrides"] = matchAnyAuthenticationFlowAdded();
  let captured = resolveDependencies(deps);
  authenticationFlowBindingOverrides = captured["authenticationFlowBindingOverrides"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["realm"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["id"];
  createClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  // waitForClientAdded(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  tryToAddExistingClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  updateClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientExists(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  deleteClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  tryToDeleteANonExistingClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientDoesNotExist(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
});

// Story: crud:Client:nondet:negative:dup-add
bthread("crud:Client:nondet:negative:dup-add", function () {
  let access = {};
  let adminUrl = "adminUrl_356";
  let alwaysDisplayInConsole = "alwaysDisplayInConsole_356";
  let attributes = {};
  let authorizationServicesEnabled = "authorizationServicesEnabled_356";
  let authorizationSettings = "authorizationSettings_356";
  let baseUrl = "baseUrl_356";
  let bearerOnly = "bearerOnly_356";
  let clientAuthenticatorType = "clientAuthenticatorType_356";
  let clientId = 356;
  let clientTemplate = "clientTemplate_356";
  let consentRequired = "consentRequired_356";
  let defaultClientScopes = "defaultClientScopes_356";
  let defaultRoles = "defaultRoles_356";
  let description = "description_356";
  let directAccessGrantsEnabled = "directAccessGrantsEnabled_356";
  let directGrantsOnly = "directGrantsOnly_356";
  let enabled = "enabled_356";
  let first = "first_356";
  let frontchannelLogout = "frontchannelLogout_356";
  let fullScopeAllowed = "fullScopeAllowed_356";
  let id = 356;
  let implicitFlowEnabled = "implicitFlowEnabled_356";
  let max = "max_356";
  let name = "name_356";
  let nodeReRegistrationTimeout = 356;
  let notBefore = 356;
  let oauth2DeviceAuthorizationGrantEnabled = "oauth2DeviceAuthorizationGrantEnabled_356";
  let optionalClientScopes = "optionalClientScopes_356";
  let origin = "origin_356";
  let protocol = "protocol_356";
  let protocolMappers = "protocolMappers_356";
  let publicClient = "publicClient_356";
  let q = "q_356";
  let realm = 356;
  let redirectUris = "redirectUris_356";
  let registeredNodes = {};
  let registrationAccessToken = "registrationAccessToken_356";
  let rootUrl = "rootUrl_356";
  let search = "search_356";
  let secret = "secret_356";
  let serviceAccountsEnabled = "serviceAccountsEnabled_356";
  let standardFlowEnabled = "standardFlowEnabled_356";
  let surrogateAuthRequired = "surrogateAuthRequired_356";
  let useTemplateConfig = "useTemplateConfig_356";
  let useTemplateMappers = "useTemplateMappers_356";
  let useTemplateScope = "useTemplateScope_356";
  let viewableOnly = "viewableOnly_356";
  let webOrigins = "webOrigins_356";
  // Dependency Barrier
  let deps = {};
  deps["authenticationFlowBindingOverrides"] = matchAnyAuthenticationFlowAdded();
  let captured = resolveDependencies(deps);
  authenticationFlowBindingOverrides = captured["authenticationFlowBindingOverrides"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["realm"];
  if (!authenticationFlowBindingOverrides) authenticationFlowBindingOverrides = captured["id"];
  createClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  // waitForClientAdded(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientExists(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  tryToAddExistingClient(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
  verifyClientExists(access, adminUrl, alwaysDisplayInConsole, attributes, authenticationFlowBindingOverrides, authorizationServicesEnabled, authorizationSettings, baseUrl, bearerOnly, clientAuthenticatorType, clientId, clientTemplate, consentRequired, defaultClientScopes, defaultRoles, description, directAccessGrantsEnabled, directGrantsOnly, enabled, first, frontchannelLogout, fullScopeAllowed, id, implicitFlowEnabled, max, name, nodeReRegistrationTimeout, notBefore, oauth2DeviceAuthorizationGrantEnabled, optionalClientScopes, origin, protocol, protocolMappers, publicClient, q, realm, redirectUris, registeredNodes, registrationAccessToken, rootUrl, search, secret, serviceAccountsEnabled, standardFlowEnabled, surrogateAuthRequired, useTemplateConfig, useTemplateMappers, useTemplateScope, viewableOnly, webOrigins);
});

// Story: crud:User:nondet:1:1
bthread("crud:User:nondet:1:1", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_360";
  let clientRoles = {};
  let createdTimestamp = 360;
  let credentials = "credentials_360";
  let disableableCredentialTypes = "disableableCredentialTypes_360";
  let email = "email_360";
  let emailVerified = "emailVerified_360";
  let enabled = "enabled_360";
  let federatedIdentities = "federatedIdentities_360";
  let federationLink = "federationLink_360";
  let firstName = "firstName_360";
  let groups = "groups_360";
  let id = 360;
  let lastName = "lastName_360";
  let notBefore = 360;
  let origin = "origin_360";
  let realm = 360;
  let realmRoles = "realmRoles_360";
  let requiredActions = "requiredActions_360";
  let self = "self_360";
  let socialLinks = "socialLinks_360";
  let totp = "totp_360";
  let username = "username_360";
  // Dependency Barrier
  let deps = {};
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let captured = resolveDependencies(deps);
  serviceAccountClientId = captured["serviceAccountClientId"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["realm"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["id"];
  postUsers(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  putUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToDeleteANonExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserDoesNotExist(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:User:nondet:1:2
bthread("crud:User:nondet:1:2", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_361";
  let clientRoles = {};
  let createdTimestamp = 361;
  let credentials = "credentials_361";
  let disableableCredentialTypes = "disableableCredentialTypes_361";
  let email = "email_361";
  let emailVerified = "emailVerified_361";
  let enabled = "enabled_361";
  let federatedIdentities = "federatedIdentities_361";
  let federationLink = "federationLink_361";
  let firstName = "firstName_361";
  let groups = "groups_361";
  let id = 361;
  let lastName = "lastName_361";
  let notBefore = 361;
  let origin = "origin_361";
  let realm = 361;
  let realmRoles = "realmRoles_361";
  let requiredActions = "requiredActions_361";
  let self = "self_361";
  let socialLinks = "socialLinks_361";
  let totp = "totp_361";
  let username = "username_361";
  // Dependency Barrier
  let deps = {};
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let captured = resolveDependencies(deps);
  serviceAccountClientId = captured["serviceAccountClientId"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["realm"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["id"];
  postUsers(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  putUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  deleteUserByRealmById(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToDeleteANonExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserDoesNotExist(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:User:nondet:negative:dup-add
bthread("crud:User:nondet:negative:dup-add", function () {
  let access = {};
  let applicationRoles = {};
  let attributes = {};
  let clientConsents = "clientConsents_366";
  let clientRoles = {};
  let createdTimestamp = 366;
  let credentials = "credentials_366";
  let disableableCredentialTypes = "disableableCredentialTypes_366";
  let email = "email_366";
  let emailVerified = "emailVerified_366";
  let enabled = "enabled_366";
  let federatedIdentities = "federatedIdentities_366";
  let federationLink = "federationLink_366";
  let firstName = "firstName_366";
  let groups = "groups_366";
  let id = 366;
  let lastName = "lastName_366";
  let notBefore = 366;
  let origin = "origin_366";
  let realm = 366;
  let realmRoles = "realmRoles_366";
  let requiredActions = "requiredActions_366";
  let self = "self_366";
  let socialLinks = "socialLinks_366";
  let totp = "totp_366";
  let username = "username_366";
  // Dependency Barrier
  let deps = {};
  deps["serviceAccountClientId"] = matchAnyClientAdded();
  let captured = resolveDependencies(deps);
  serviceAccountClientId = captured["serviceAccountClientId"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["realm"];
  if (!serviceAccountClientId) serviceAccountClientId = captured["id"];
  postUsers(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  // waitForUserAdded(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  tryToAddExistingUser(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
  verifyUserExists(access, applicationRoles, attributes, clientConsents, clientRoles, createdTimestamp, credentials, disableableCredentialTypes, email, emailVerified, enabled, federatedIdentities, federationLink, firstName, groups, id, lastName, notBefore, origin, realm, realmRoles, requiredActions, self, serviceAccountClientId, socialLinks, totp, username);
});

// Story: crud:UserFederatedIdentity:nondet:1:1
bthread("crud:UserFederatedIdentity:nondet:1:1", function () {
  let id = 400;
  let provider = "provider_400";
  let realm = 400;
  postFederatedIdentity(id, provider, realm);
  // waitForUserFederatedIdentityAdded(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  deleteFederatedIdentity(id, provider, realm);
  tryToDeleteANonExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityDoesNotExist(id, provider, realm);
});

// Story: crud:UserFederatedIdentity:nondet:1:2
bthread("crud:UserFederatedIdentity:nondet:1:2", function () {
  let id = 401;
  let provider = "provider_401";
  let realm = 401;
  postFederatedIdentity(id, provider, realm);
  // waitForUserFederatedIdentityAdded(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  deleteFederatedIdentity(id, provider, realm);
  tryToDeleteANonExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityDoesNotExist(id, provider, realm);
});

// Story: crud:UserFederatedIdentity:nondet:negative:dup-add
bthread("crud:UserFederatedIdentity:nondet:negative:dup-add", function () {
  let id = 406;
  let provider = "provider_406";
  let realm = 406;
  postFederatedIdentity(id, provider, realm);
  // waitForUserFederatedIdentityAdded(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
  tryToAddExistingUserFederatedIdentity(id, provider, realm);
  verifyUserFederatedIdentityExists(id, provider, realm);
});

// Story: crud:UserGroup:nondet:1:1
bthread("crud:UserGroup:nondet:1:1", function () {
  let id = 410;
  let realm = 410;
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let captured = resolveDependencies(deps);
  groupId = captured["groupId"];
  if (!groupId) groupId = captured["realm"];
  if (!groupId) groupId = captured["id"];
  putUserGroup(groupId, id, realm);
  // waitForUserGroupAdded(groupId, id, realm);
  tryToAddExistingUserGroup(groupId, id, realm);
  verifyUserGroupExists(groupId, id, realm);
  deleteUserGroup(groupId, id, realm);
  tryToDeleteANonExistingUserGroup(groupId, id, realm);
  verifyUserGroupDoesNotExist(groupId, id, realm);
});

// Story: crud:UserGroup:nondet:1:2
bthread("crud:UserGroup:nondet:1:2", function () {
  let id = 411;
  let realm = 411;
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let captured = resolveDependencies(deps);
  groupId = captured["groupId"];
  if (!groupId) groupId = captured["realm"];
  if (!groupId) groupId = captured["id"];
  putUserGroup(groupId, id, realm);
  // waitForUserGroupAdded(groupId, id, realm);
  tryToAddExistingUserGroup(groupId, id, realm);
  verifyUserGroupExists(groupId, id, realm);
  deleteUserGroup(groupId, id, realm);
  tryToDeleteANonExistingUserGroup(groupId, id, realm);
  verifyUserGroupDoesNotExist(groupId, id, realm);
});

// Story: crud:UserGroup:nondet:negative:dup-add
bthread("crud:UserGroup:nondet:negative:dup-add", function () {
  let id = 416;
  let realm = 416;
  // Dependency Barrier
  let deps = {};
  deps["groupId"] = matchAnyGroupAdded();
  let captured = resolveDependencies(deps);
  groupId = captured["groupId"];
  if (!groupId) groupId = captured["realm"];
  if (!groupId) groupId = captured["id"];
  putUserGroup(groupId, id, realm);
  // waitForUserGroupAdded(groupId, id, realm);
  verifyUserGroupExists(groupId, id, realm);
  tryToAddExistingUserGroup(groupId, id, realm);
  verifyUserGroupExists(groupId, id, realm);
});

// Story: crud:ClientScopeScopeMappingsClient:nondet:1:1
bthread("crud:ClientScopeScopeMappingsClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_430";
  let clientRole = "clientRole_430";
  let composite = "composite_430";
  let composites = "composites_430";
  let containerId = 430;
  let description = "description_430";
  let id = 430;
  let name = "name_430";
  let realm = 430;
  let scopeParamRequired = "scopeParamRequired_430";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingsClient:nondet:1:2
bthread("crud:ClientScopeScopeMappingsClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_431";
  let clientRole = "clientRole_431";
  let composite = "composite_431";
  let composites = "composites_431";
  let containerId = 431;
  let description = "description_431";
  let id = 431;
  let name = "name_431";
  let realm = 431;
  let scopeParamRequired = "scopeParamRequired_431";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingsClient:nondet:negative:dup-add
bthread("crud:ClientScopeScopeMappingsClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_436";
  let clientRole = "clientRole_436";
  let composite = "composite_436";
  let composites = "composites_436";
  let containerId = 436;
  let description = "description_436";
  let id = 436;
  let name = "name_436";
  let realm = 436;
  let scopeParamRequired = "scopeParamRequired_436";
  postClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingsRealm:nondet:1:1
bthread("crud:ClientScopeScopeMappingsRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_440";
  let composite = "composite_440";
  let composites = "composites_440";
  let containerId = 440;
  let description = "description_440";
  let id = 440;
  let name = "name_440";
  let realm = 440;
  let scopeParamRequired = "scopeParamRequired_440";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingsRealm:nondet:1:2
bthread("crud:ClientScopeScopeMappingsRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_441";
  let composite = "composite_441";
  let composites = "composites_441";
  let containerId = 441;
  let description = "description_441";
  let id = 441;
  let name = "name_441";
  let realm = 441;
  let scopeParamRequired = "scopeParamRequired_441";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeScopeMappingsRealm:nondet:negative:dup-add
bthread("crud:ClientScopeScopeMappingsRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_446";
  let composite = "composite_446";
  let composites = "composites_446";
  let containerId = 446;
  let description = "description_446";
  let id = 446;
  let name = "name_446";
  let realm = 446;
  let scopeParamRequired = "scopeParamRequired_446";
  postClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsClient:nondet:1:1
bthread("crud:ClientTemplateScopeMappingsClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_450";
  let clientRole = "clientRole_450";
  let composite = "composite_450";
  let composites = "composites_450";
  let containerId = 450;
  let description = "description_450";
  let id = 450;
  let name = "name_450";
  let realm = 450;
  let scopeParamRequired = "scopeParamRequired_450";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsClient:nondet:1:2
bthread("crud:ClientTemplateScopeMappingsClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_451";
  let clientRole = "clientRole_451";
  let composite = "composite_451";
  let composites = "composites_451";
  let containerId = 451;
  let description = "description_451";
  let id = 451;
  let name = "name_451";
  let realm = 451;
  let scopeParamRequired = "scopeParamRequired_451";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsClient:nondet:negative:dup-add
bthread("crud:ClientTemplateScopeMappingsClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_456";
  let clientRole = "clientRole_456";
  let composite = "composite_456";
  let composites = "composites_456";
  let containerId = 456;
  let description = "description_456";
  let id = 456;
  let name = "name_456";
  let realm = 456;
  let scopeParamRequired = "scopeParamRequired_456";
  postClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsRealm:nondet:1:1
bthread("crud:ClientTemplateScopeMappingsRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_460";
  let composite = "composite_460";
  let composites = "composites_460";
  let containerId = 460;
  let description = "description_460";
  let id = 460;
  let name = "name_460";
  let realm = 460;
  let scopeParamRequired = "scopeParamRequired_460";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsRealm:nondet:1:2
bthread("crud:ClientTemplateScopeMappingsRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_461";
  let composite = "composite_461";
  let composites = "composites_461";
  let containerId = 461;
  let description = "description_461";
  let id = 461;
  let name = "name_461";
  let realm = 461;
  let scopeParamRequired = "scopeParamRequired_461";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientTemplateScopeMappingsRealm:nondet:negative:dup-add
bthread("crud:ClientTemplateScopeMappingsRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_466";
  let composite = "composite_466";
  let composites = "composites_466";
  let containerId = 466;
  let description = "description_466";
  let id = 466;
  let name = "name_466";
  let realm = 466;
  let scopeParamRequired = "scopeParamRequired_466";
  postClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientTemplateScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientTemplateScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientTemplateScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsClient:nondet:1:1
bthread("crud:ClientScopeMappingsClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_470";
  let clientRole = "clientRole_470";
  let composite = "composite_470";
  let composites = "composites_470";
  let containerId = 470;
  let description = "description_470";
  let id = 470;
  let name = "name_470";
  let realm = 470;
  let scopeParamRequired = "scopeParamRequired_470";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsClient:nondet:1:2
bthread("crud:ClientScopeMappingsClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_471";
  let clientRole = "clientRole_471";
  let composite = "composite_471";
  let composites = "composites_471";
  let containerId = 471;
  let description = "description_471";
  let id = 471;
  let name = "name_471";
  let realm = 471;
  let scopeParamRequired = "scopeParamRequired_471";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsClient:nondet:negative:dup-add
bthread("crud:ClientScopeMappingsClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_476";
  let clientRole = "clientRole_476";
  let composite = "composite_476";
  let composites = "composites_476";
  let containerId = 476;
  let description = "description_476";
  let id = 476;
  let name = "name_476";
  let realm = 476;
  let scopeParamRequired = "scopeParamRequired_476";
  postClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsRealm:nondet:1:1
bthread("crud:ClientScopeMappingsRealm:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_480";
  let composite = "composite_480";
  let composites = "composites_480";
  let containerId = 480;
  let description = "description_480";
  let id = 480;
  let name = "name_480";
  let realm = 480;
  let scopeParamRequired = "scopeParamRequired_480";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsRealm:nondet:1:2
bthread("crud:ClientScopeMappingsRealm:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_481";
  let composite = "composite_481";
  let composites = "composites_481";
  let containerId = 481;
  let description = "description_481";
  let id = 481;
  let name = "name_481";
  let realm = 481;
  let scopeParamRequired = "scopeParamRequired_481";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappingsRealm:nondet:negative:dup-add
bthread("crud:ClientScopeMappingsRealm:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_486";
  let composite = "composite_486";
  let composites = "composites_486";
  let containerId = 486;
  let description = "description_486";
  let id = 486;
  let name = "name_486";
  let realm = 486;
  let scopeParamRequired = "scopeParamRequired_486";
  postClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForClientScopeMappingsRealmAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingClientScopeMappingsRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyClientScopeMappingsRealmExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientScopeMappings:read_only
bthread("crud:ClientScopeMappings:read_only", function () {
  let id = 490;
  let realm = 490;
  verifyClientScopeMappingsExists(id, realm);
});

// Story: crud:ClientScopeScopeMappings:read_only
bthread("crud:ClientScopeScopeMappings:read_only", function () {
  let id = 500;
  let realm = 500;
  verifyClientScopeScopeMappingsExists(id, realm);
});

// Story: crud:ClientTemplateScopeMappings:read_only
bthread("crud:ClientTemplateScopeMappings:read_only", function () {
  let id = 510;
  let realm = 510;
  verifyClientTemplateScopeMappingsExists(id, realm);
});

// Story: crud:ClientRole:nondet:1:1
bthread("crud:ClientRole:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_520";
  let composite = "composite_520";
  let composites = "composites_520";
  let containerId = 520;
  let description = "description_520";
  let id = 520;
  let name = "name_520";
  let realm = 520;
  let role-name = "role-name_520";
  let scopeParamRequired = "scopeParamRequired_520";
  postClientRoles(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  putClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:1:2
bthread("crud:ClientRole:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_521";
  let composite = "composite_521";
  let composites = "composites_521";
  let containerId = 521;
  let description = "description_521";
  let id = 521;
  let name = "name_521";
  let realm = 521;
  let role-name = "role-name_521";
  let scopeParamRequired = "scopeParamRequired_521";
  postClientRoles(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  putClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRole:nondet:negative:dup-add
bthread("crud:ClientRole:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_526";
  let composite = "composite_526";
  let composites = "composites_526";
  let containerId = 526;
  let description = "description_526";
  let id = 526;
  let name = "name_526";
  let realm = 526;
  let role-name = "role-name_526";
  let scopeParamRequired = "scopeParamRequired_526";
  postClientRoles(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleComposite:nondet:1:1
bthread("crud:ClientRoleComposite:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_530";
  let composite = "composite_530";
  let composites = "composites_530";
  let containerId = 530;
  let description = "description_530";
  let id = 530;
  let name = "name_530";
  let realm = 530;
  let role-name = "role-name_530";
  let scopeParamRequired = "scopeParamRequired_530";
  postClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleComposite:nondet:1:2
bthread("crud:ClientRoleComposite:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_531";
  let composite = "composite_531";
  let composites = "composites_531";
  let containerId = 531;
  let description = "description_531";
  let id = 531;
  let name = "name_531";
  let realm = 531;
  let role-name = "role-name_531";
  let scopeParamRequired = "scopeParamRequired_531";
  postClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  deleteClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToDeleteANonExistingClientRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:ClientRoleComposite:nondet:negative:dup-add
bthread("crud:ClientRoleComposite:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_536";
  let composite = "composite_536";
  let composites = "composites_536";
  let containerId = 536;
  let description = "description_536";
  let id = 536;
  let name = "name_536";
  let realm = 536;
  let role-name = "role-name_536";
  let scopeParamRequired = "scopeParamRequired_536";
  postClientRoleComposites(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  // waitForClientRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  tryToAddExistingClientRoleComposite(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
  verifyClientRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-name, scopeParamRequired);
});

// Story: crud:Role:nondet:1:1
bthread("crud:Role:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_540";
  let composite = "composite_540";
  let composites = "composites_540";
  let containerId = 540;
  let description = "description_540";
  let id = 540;
  let name = "name_540";
  let realm = 540;
  let role-id = 540;
  let scopeParamRequired = "scopeParamRequired_540";
  postRolesByRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  // waitForRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  tryToAddExistingRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  updateRoleById(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  deleteRoleById(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  tryToDeleteANonExistingRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
});

// Story: crud:Role:nondet:1:2
bthread("crud:Role:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_541";
  let composite = "composite_541";
  let composites = "composites_541";
  let containerId = 541;
  let description = "description_541";
  let id = 541;
  let name = "name_541";
  let realm = 541;
  let role-id = 541;
  let scopeParamRequired = "scopeParamRequired_541";
  postRolesByRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  // waitForRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  tryToAddExistingRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  updateRoleById(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  deleteRoleById(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  tryToDeleteANonExistingRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleDoesNotExist(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
});

// Story: crud:Role:nondet:negative:dup-add
bthread("crud:Role:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_546";
  let composite = "composite_546";
  let composites = "composites_546";
  let containerId = 546;
  let description = "description_546";
  let id = 546;
  let name = "name_546";
  let realm = 546;
  let role-id = 546;
  let scopeParamRequired = "scopeParamRequired_546";
  postRolesByRealm(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  // waitForRoleAdded(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  tryToAddExistingRole(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
  verifyRoleExists(attributes, clientRole, composite, composites, containerId, description, id, name, realm, role-id, scopeParamRequired);
});

// Story: crud:RoleComposite:nondet:1:1
bthread("crud:RoleComposite:nondet:1:1", function () {
  let attributes = {};
  let clientRole = "clientRole_550";
  let composite = "composite_550";
  let composites = "composites_550";
  let containerId = 550;
  let description = "description_550";
  let first = "first_550";
  let id = 550;
  let max = "max_550";
  let name = "name_550";
  let realm = 550;
  let scopeParamRequired = "scopeParamRequired_550";
  let search = "search_550";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let captured = resolveDependencies(deps);
  role-id = captured["role-id"];
  if (!role-id) role-id = captured["realm"];
  if (!role-id) role-id = captured["role-id"];
  addRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  deleteRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:RoleComposite:nondet:1:2
bthread("crud:RoleComposite:nondet:1:2", function () {
  let attributes = {};
  let clientRole = "clientRole_551";
  let composite = "composite_551";
  let composites = "composites_551";
  let containerId = 551;
  let description = "description_551";
  let first = "first_551";
  let id = 551;
  let max = "max_551";
  let name = "name_551";
  let realm = 551;
  let scopeParamRequired = "scopeParamRequired_551";
  let search = "search_551";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let captured = resolveDependencies(deps);
  role-id = captured["role-id"];
  if (!role-id) role-id = captured["realm"];
  if (!role-id) role-id = captured["role-id"];
  addRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  deleteRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToDeleteANonExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeDoesNotExist(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:RoleComposite:nondet:negative:dup-add
bthread("crud:RoleComposite:nondet:negative:dup-add", function () {
  let attributes = {};
  let clientRole = "clientRole_556";
  let composite = "composite_556";
  let composites = "composites_556";
  let containerId = 556;
  let description = "description_556";
  let first = "first_556";
  let id = 556;
  let max = "max_556";
  let name = "name_556";
  let realm = 556;
  let scopeParamRequired = "scopeParamRequired_556";
  let search = "search_556";
  // Dependency Barrier
  let deps = {};
  deps["role-id"] = matchAnyRoleAdded();
  let captured = resolveDependencies(deps);
  role-id = captured["role-id"];
  if (!role-id) role-id = captured["realm"];
  if (!role-id) role-id = captured["role-id"];
  addRoleComposites(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  // waitForRoleCompositeAdded(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  tryToAddExistingRoleComposite(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
  verifyRoleCompositeExists(attributes, clientRole, composite, composites, containerId, description, first, id, max, name, realm, role-id, scopeParamRequired, search);
});

// Story: crud:ClientRoleManagementPermission:read_only
bthread("crud:ClientRoleManagementPermission:read_only", function () {
  let id = 560;
  let realm = 560;
  let role-name = "role-name_560";
  verifyClientRoleManagementPermissionExists(id, realm, role-name);
});

// Story: crud:RoleManagementPermission:read_only
bthread("crud:RoleManagementPermission:read_only", function () {
  let realm = 570;
  verifyRoleManagementPermissionExists(realm, role-id);
});

// Story: crud:ClientScopeProtocolMapper:nondet:1:1
bthread("crud:ClientScopeProtocolMapper:nondet:1:1", function () {
  let config = {};
  let consentRequired = "consentRequired_580";
  let consentText = "consentText_580";
  let id = 580;
  let id1 = "id1_580";
  let id2 = "id2_580";
  let name = "name_580";
  let protocol = "protocol_580";
  let protocolMapper = "protocolMapper_580";
  let realm = 580;
  postClientScopeProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientScopeProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientScopeProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientScopeProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientScopeProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientScopeProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMapper:nondet:1:2
bthread("crud:ClientScopeProtocolMapper:nondet:1:2", function () {
  let config = {};
  let consentRequired = "consentRequired_581";
  let consentText = "consentText_581";
  let id = 581;
  let id1 = "id1_581";
  let id2 = "id2_581";
  let name = "name_581";
  let protocol = "protocol_581";
  let protocolMapper = "protocolMapper_581";
  let realm = 581;
  postClientScopeProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientScopeProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientScopeProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientScopeProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientScopeProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientScopeProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMapper:nondet:negative:dup-add
bthread("crud:ClientScopeProtocolMapper:nondet:negative:dup-add", function () {
  let config = {};
  let consentRequired = "consentRequired_586";
  let consentText = "consentText_586";
  let id = 586;
  let id1 = "id1_586";
  let id2 = "id2_586";
  let name = "name_586";
  let protocol = "protocol_586";
  let protocolMapper = "protocolMapper_586";
  let realm = 586;
  postClientScopeProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientScopeProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientScopeProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientScopeProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMappers:read_only
bthread("crud:ClientScopeProtocolMappers:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_600";
  let consentText = "consentText_600";
  let id = 600;
  let name = "name_600";
  let protocol = "protocol_600";
  let protocolMapper = "protocolMapper_600";
  let realm = 600;
  verifyClientScopeProtocolMappersExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientScopeProtocolMappersProtocol:read_only
bthread("crud:ClientScopeProtocolMappersProtocol:read_only", function () {
  let id = 610;
  let protocol = "protocol_610";
  let realm = 610;
  verifyClientScopeProtocolMappersProtocolExists(id, protocol, realm);
});

// Story: crud:ClientTemplateProtocolMapper:nondet:1:1
bthread("crud:ClientTemplateProtocolMapper:nondet:1:1", function () {
  let config = {};
  let consentRequired = "consentRequired_620";
  let consentText = "consentText_620";
  let id = 620;
  let id1 = "id1_620";
  let id2 = "id2_620";
  let name = "name_620";
  let protocol = "protocol_620";
  let protocolMapper = "protocolMapper_620";
  let realm = 620;
  postClientTemplateProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientTemplateProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientTemplateProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientTemplateProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientTemplateProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientTemplateProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMapper:nondet:1:2
bthread("crud:ClientTemplateProtocolMapper:nondet:1:2", function () {
  let config = {};
  let consentRequired = "consentRequired_621";
  let consentText = "consentText_621";
  let id = 621;
  let id1 = "id1_621";
  let id2 = "id2_621";
  let name = "name_621";
  let protocol = "protocol_621";
  let protocolMapper = "protocolMapper_621";
  let realm = 621;
  postClientTemplateProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientTemplateProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientTemplateProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientTemplateProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientTemplateProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientTemplateProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMapper:nondet:negative:dup-add
bthread("crud:ClientTemplateProtocolMapper:nondet:negative:dup-add", function () {
  let config = {};
  let consentRequired = "consentRequired_626";
  let consentText = "consentText_626";
  let id = 626;
  let id1 = "id1_626";
  let id2 = "id2_626";
  let name = "name_626";
  let protocol = "protocol_626";
  let protocolMapper = "protocolMapper_626";
  let realm = 626;
  postClientTemplateProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientTemplateProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientTemplateProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientTemplateProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMappers:read_only
bthread("crud:ClientTemplateProtocolMappers:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_640";
  let consentText = "consentText_640";
  let id = 640;
  let name = "name_640";
  let protocol = "protocol_640";
  let protocolMapper = "protocolMapper_640";
  let realm = 640;
  verifyClientTemplateProtocolMappersExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientTemplateProtocolMappersProtocol:read_only
bthread("crud:ClientTemplateProtocolMappersProtocol:read_only", function () {
  let id = 650;
  let protocol = "protocol_650";
  let realm = 650;
  verifyClientTemplateProtocolMappersProtocolExists(id, protocol, realm);
});

// Story: crud:ClientProtocolMapper:nondet:1:1
bthread("crud:ClientProtocolMapper:nondet:1:1", function () {
  let config = {};
  let consentRequired = "consentRequired_660";
  let consentText = "consentText_660";
  let id = 660;
  let id1 = "id1_660";
  let id2 = "id2_660";
  let name = "name_660";
  let protocol = "protocol_660";
  let protocolMapper = "protocolMapper_660";
  let realm = 660;
  postClientProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientProtocolMapper:nondet:1:2
bthread("crud:ClientProtocolMapper:nondet:1:2", function () {
  let config = {};
  let consentRequired = "consentRequired_661";
  let consentText = "consentText_661";
  let id = 661;
  let id1 = "id1_661";
  let id2 = "id2_661";
  let name = "name_661";
  let protocol = "protocol_661";
  let protocolMapper = "protocolMapper_661";
  let realm = 661;
  postClientProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  putClientProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  deleteClientProtocolMappersModel(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToDeleteANonExistingClientProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperDoesNotExist(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientProtocolMapper:nondet:negative:dup-add
bthread("crud:ClientProtocolMapper:nondet:negative:dup-add", function () {
  let config = {};
  let consentRequired = "consentRequired_666";
  let consentText = "consentText_666";
  let id = 666;
  let id1 = "id1_666";
  let id2 = "id2_666";
  let name = "name_666";
  let protocol = "protocol_666";
  let protocolMapper = "protocolMapper_666";
  let realm = 666;
  postClientProtocolMappersModels(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  // waitForClientProtocolMapperAdded(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  tryToAddExistingClientProtocolMapper(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
  verifyClientProtocolMapperExists(config, consentRequired, consentText, id, id1, id2, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientProtocolMappers:read_only
bthread("crud:ClientProtocolMappers:read_only", function () {
  let config = {};
  let consentRequired = "consentRequired_680";
  let consentText = "consentText_680";
  let id = 680;
  let name = "name_680";
  let protocol = "protocol_680";
  let protocolMapper = "protocolMapper_680";
  let realm = 680;
  verifyClientProtocolMappersExists(config, consentRequired, consentText, id, name, protocol, protocolMapper, realm);
});

// Story: crud:ClientProtocolMappersProtocol:read_only
bthread("crud:ClientProtocolMappersProtocol:read_only", function () {
  let id = 690;
  let protocol = "protocol_690";
  let realm = 690;
  verifyClientProtocolMappersProtocolExists(id, protocol, realm);
});

// Story: crud:IdentityProvider:nondet:1:1
bthread("crud:IdentityProvider:nondet:1:1", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_700";
  let alias = "alias_700";
  let authenticateByDefault = "authenticateByDefault_700";
  let config = {};
  let displayName = "displayName_700";
  let enabled = "enabled_700";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_700";
  let internalId = 700;
  let linkOnly = "linkOnly_700";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_700";
  let providerId = 700;
  let realm = 700;
  let storeToken = "storeToken_700";
  let trustEmail = "trustEmail_700";
  let updateProfileFirstLogin = "updateProfileFirstLogin_700";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_700";
  postInstances(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  putInstance(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  deleteInstance(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProvider:nondet:1:2
bthread("crud:IdentityProvider:nondet:1:2", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_701";
  let alias = "alias_701";
  let authenticateByDefault = "authenticateByDefault_701";
  let config = {};
  let displayName = "displayName_701";
  let enabled = "enabled_701";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_701";
  let internalId = 701;
  let linkOnly = "linkOnly_701";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_701";
  let providerId = 701;
  let realm = 701;
  let storeToken = "storeToken_701";
  let trustEmail = "trustEmail_701";
  let updateProfileFirstLogin = "updateProfileFirstLogin_701";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_701";
  postInstances(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  putInstance(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  deleteInstance(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToDeleteANonExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderDoesNotExist(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProvider:nondet:negative:dup-add
bthread("crud:IdentityProvider:nondet:negative:dup-add", function () {
  let addReadTokenRoleOnCreate = "addReadTokenRoleOnCreate_706";
  let alias = "alias_706";
  let authenticateByDefault = "authenticateByDefault_706";
  let config = {};
  let displayName = "displayName_706";
  let enabled = "enabled_706";
  let firstBrokerLoginFlowAlias = "firstBrokerLoginFlowAlias_706";
  let internalId = 706;
  let linkOnly = "linkOnly_706";
  let postBrokerLoginFlowAlias = "postBrokerLoginFlowAlias_706";
  let providerId = 706;
  let realm = 706;
  let storeToken = "storeToken_706";
  let trustEmail = "trustEmail_706";
  let updateProfileFirstLogin = "updateProfileFirstLogin_706";
  let updateProfileFirstLoginMode = "updateProfileFirstLoginMode_706";
  postInstances(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  // waitForIdentityProviderAdded(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  tryToAddExistingIdentityProvider(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
  verifyIdentityProviderExists(addReadTokenRoleOnCreate, alias, authenticateByDefault, config, displayName, enabled, firstBrokerLoginFlowAlias, internalId, linkOnly, postBrokerLoginFlowAlias, providerId, realm, storeToken, trustEmail, updateProfileFirstLogin, updateProfileFirstLoginMode);
});

// Story: crud:IdentityProviderMapper:nondet:1:1
bthread("crud:IdentityProviderMapper:nondet:1:1", function () {
  let alias = "alias_710";
  let config = {};
  let id = 710;
  let name = "name_710";
  let realm = 710;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let captured = resolveDependencies(deps);
  identityProviderAlias = captured["identityProviderAlias"];
  if (!identityProviderAlias) identityProviderAlias = captured["realm"];
  if (!identityProviderAlias) identityProviderAlias = captured["alias"];
  identityProviderMapper = captured["identityProviderMapper"];
  if (!identityProviderMapper) identityProviderMapper = captured["realm"];
  if (!identityProviderMapper) identityProviderMapper = captured["alias"];
  postMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  // waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  putMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  deleteMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderMapper:nondet:1:2
bthread("crud:IdentityProviderMapper:nondet:1:2", function () {
  let alias = "alias_711";
  let config = {};
  let id = 711;
  let name = "name_711";
  let realm = 711;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let captured = resolveDependencies(deps);
  identityProviderAlias = captured["identityProviderAlias"];
  if (!identityProviderAlias) identityProviderAlias = captured["realm"];
  if (!identityProviderAlias) identityProviderAlias = captured["alias"];
  identityProviderMapper = captured["identityProviderMapper"];
  if (!identityProviderMapper) identityProviderMapper = captured["realm"];
  if (!identityProviderMapper) identityProviderMapper = captured["alias"];
  postMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  // waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  putMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  deleteMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToDeleteANonExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperDoesNotExist(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderMapper:nondet:negative:dup-add
bthread("crud:IdentityProviderMapper:nondet:negative:dup-add", function () {
  let alias = "alias_716";
  let config = {};
  let id = 716;
  let name = "name_716";
  let realm = 716;
  // Dependency Barrier
  let deps = {};
  deps["identityProviderAlias"] = matchAnyIdentityProviderAdded();
  deps["identityProviderMapper"] = matchAnyIdentityProviderAdded();
  let captured = resolveDependencies(deps);
  identityProviderAlias = captured["identityProviderAlias"];
  if (!identityProviderAlias) identityProviderAlias = captured["realm"];
  if (!identityProviderAlias) identityProviderAlias = captured["alias"];
  identityProviderMapper = captured["identityProviderMapper"];
  if (!identityProviderMapper) identityProviderMapper = captured["realm"];
  if (!identityProviderMapper) identityProviderMapper = captured["alias"];
  postMappers(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  // waitForIdentityProviderMapperAdded(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  tryToAddExistingIdentityProviderMapper(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
  verifyIdentityProviderMapperExists(alias, config, id, identityProviderAlias, identityProviderMapper, name, realm);
});

// Story: crud:IdentityProviderManagementPermission:read_only
bthread("crud:IdentityProviderManagementPermission:read_only", function () {
  let alias = "alias_720";
  let realm = 720;
  verifyIdentityProviderManagementPermissionExists(alias, realm);
});

// Story: crud:GroupRoleMapping:nondet:1:1
bthread("crud:GroupRoleMapping:nondet:1:1", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_730";
  let clientRole = "clientRole_730";
  let composite = "composite_730";
  let composites = "composites_730";
  let containerId = 730;
  let description = "description_730";
  let id = 730;
  let name = "name_730";
  let realm = 730;
  let scopeParamRequired = "scopeParamRequired_730";
  postGroupRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingDoesNotExist(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMapping:nondet:1:2
bthread("crud:GroupRoleMapping:nondet:1:2", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_731";
  let clientRole = "clientRole_731";
  let composite = "composite_731";
  let composites = "composites_731";
  let containerId = 731;
  let description = "description_731";
  let id = 731;
  let name = "name_731";
  let realm = 731;
  let scopeParamRequired = "scopeParamRequired_731";
  postGroupRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingDoesNotExist(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMapping:nondet:negative:dup-add
bthread("crud:GroupRoleMapping:nondet:negative:dup-add", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_736";
  let clientRole = "clientRole_736";
  let composite = "composite_736";
  let composites = "composites_736";
  let containerId = 736;
  let description = "description_736";
  let id = 736;
  let name = "name_736";
  let realm = 736;
  let scopeParamRequired = "scopeParamRequired_736";
  postGroupRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMapping:nondet:1:1
bthread("crud:UserRoleMapping:nondet:1:1", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_740";
  let clientRole = "clientRole_740";
  let composite = "composite_740";
  let composites = "composites_740";
  let containerId = 740;
  let description = "description_740";
  let id = 740;
  let name = "name_740";
  let realm = 740;
  let scopeParamRequired = "scopeParamRequired_740";
  postUserRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingDoesNotExist(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMapping:nondet:1:2
bthread("crud:UserRoleMapping:nondet:1:2", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_741";
  let clientRole = "clientRole_741";
  let composite = "composite_741";
  let composites = "composites_741";
  let containerId = 741;
  let description = "description_741";
  let id = 741;
  let name = "name_741";
  let realm = 741;
  let scopeParamRequired = "scopeParamRequired_741";
  postUserRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingDoesNotExist(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMapping:nondet:negative:dup-add
bthread("crud:UserRoleMapping:nondet:negative:dup-add", function () {
  let attributes = {};
  let briefRepresentation = "briefRepresentation_746";
  let clientRole = "clientRole_746";
  let composite = "composite_746";
  let composites = "composites_746";
  let containerId = 746;
  let description = "description_746";
  let id = 746;
  let name = "name_746";
  let realm = 746;
  let scopeParamRequired = "scopeParamRequired_746";
  postUserRoleMappingsRealm(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingAdded(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMapping(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingExists(attributes, briefRepresentation, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:ClientCertificate:read_only
bthread("crud:ClientCertificate:read_only", function () {
  let attr = "attr_750";
  let id = 750;
  let realm = 750;
  verifyClientCertificateExists(attr, id, realm);
});

// Story: crud:Group:nondet:1:1
bthread("crud:Group:nondet:1:1", function () {
  let access = {};
  let attributes = {};
  let clientRoles = {};
  let id = 760;
  let name = "name_760";
  let path = "path_760";
  let realm = 760;
  let realmRoles = "realmRoles_760";
  let subGroups = "subGroups_760";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  // waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  updateGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  deleteGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToDeleteANonExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupDoesNotExist(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
});

// Story: crud:Group:nondet:1:2
bthread("crud:Group:nondet:1:2", function () {
  let access = {};
  let attributes = {};
  let clientRoles = {};
  let id = 761;
  let name = "name_761";
  let path = "path_761";
  let realm = 761;
  let realmRoles = "realmRoles_761";
  let subGroups = "subGroups_761";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  // waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  updateGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  deleteGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToDeleteANonExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupDoesNotExist(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
});

// Story: crud:Group:nondet:negative:dup-add
bthread("crud:Group:nondet:negative:dup-add", function () {
  let access = {};
  let attributes = {};
  let clientRoles = {};
  let id = 766;
  let name = "name_766";
  let path = "path_766";
  let realm = 766;
  let realmRoles = "realmRoles_766";
  let subGroups = "subGroups_766";
  createGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  // waitForGroupAdded(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  tryToAddExistingGroup(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
  verifyGroupExists(access, attributes, clientRoles, id, name, path, realm, realmRoles, subGroups);
});

// Story: crud:GroupRoleMappingClient:nondet:1:1
bthread("crud:GroupRoleMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_770";
  let clientRole = "clientRole_770";
  let composite = "composite_770";
  let composites = "composites_770";
  let containerId = 770;
  let description = "description_770";
  let id = 770;
  let name = "name_770";
  let realm = 770;
  let scopeParamRequired = "scopeParamRequired_770";
  postGroupRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingClient:nondet:1:2
bthread("crud:GroupRoleMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_771";
  let clientRole = "clientRole_771";
  let composite = "composite_771";
  let composites = "composites_771";
  let containerId = 771;
  let description = "description_771";
  let id = 771;
  let name = "name_771";
  let realm = 771;
  let scopeParamRequired = "scopeParamRequired_771";
  postGroupRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteGroupRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:GroupRoleMappingClient:nondet:negative:dup-add
bthread("crud:GroupRoleMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_776";
  let clientRole = "clientRole_776";
  let composite = "composite_776";
  let composites = "composites_776";
  let containerId = 776;
  let description = "description_776";
  let id = 776;
  let name = "name_776";
  let realm = 776;
  let scopeParamRequired = "scopeParamRequired_776";
  postGroupRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForGroupRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingGroupRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyGroupRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:1:1
bthread("crud:UserRoleMappingClient:nondet:1:1", function () {
  let attributes = {};
  let client = "client_780";
  let clientRole = "clientRole_780";
  let composite = "composite_780";
  let composites = "composites_780";
  let containerId = 780;
  let description = "description_780";
  let id = 780;
  let name = "name_780";
  let realm = 780;
  let scopeParamRequired = "scopeParamRequired_780";
  postUserRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:1:2
bthread("crud:UserRoleMappingClient:nondet:1:2", function () {
  let attributes = {};
  let client = "client_781";
  let clientRole = "clientRole_781";
  let composite = "composite_781";
  let composites = "composites_781";
  let containerId = 781;
  let description = "description_781";
  let id = 781;
  let name = "name_781";
  let realm = 781;
  let scopeParamRequired = "scopeParamRequired_781";
  postUserRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  deleteUserRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToDeleteANonExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientDoesNotExist(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:UserRoleMappingClient:nondet:negative:dup-add
bthread("crud:UserRoleMappingClient:nondet:negative:dup-add", function () {
  let attributes = {};
  let client = "client_786";
  let clientRole = "clientRole_786";
  let composite = "composite_786";
  let composites = "composites_786";
  let containerId = 786;
  let description = "description_786";
  let id = 786;
  let name = "name_786";
  let realm = 786;
  let scopeParamRequired = "scopeParamRequired_786";
  postUserRoleMappingsClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  // waitForUserRoleMappingClientAdded(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  tryToAddExistingUserRoleMappingClient(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
  verifyUserRoleMappingClientExists(attributes, client, clientRole, composite, composites, containerId, description, id, name, realm, scopeParamRequired);
});

// Story: crud:RoleCompositeClient:read_only
bthread("crud:RoleCompositeClient:read_only", function () {
  let realm = 790;
  verifyRoleCompositeClientExists(clientUuid, realm, role-id);
});

// Story: crud:RoleCompositeRealm:read_only
bthread("crud:RoleCompositeRealm:read_only", function () {
  let realm = 800;
  verifyRoleCompositeRealmExists(realm, role-id);
});

// Story: crud:ClientInitialAccess:nondet:1:1
bthread("crud:ClientInitialAccess:nondet:1:1", function () {
  let count = 810;
  let expiration = 810;
  let id = 810;
  let realm = 810;
  postClientsInitialAccess(count, expiration, id, realm);
  // waitForClientInitialAccessAdded(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  deleteClientsInitialAcces(count, expiration, id, realm);
  tryToDeleteANonExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessDoesNotExist(count, expiration, id, realm);
});

// Story: crud:ClientInitialAccess:nondet:1:2
bthread("crud:ClientInitialAccess:nondet:1:2", function () {
  let count = 811;
  let expiration = 811;
  let id = 811;
  let realm = 811;
  postClientsInitialAccess(count, expiration, id, realm);
  // waitForClientInitialAccessAdded(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  deleteClientsInitialAcces(count, expiration, id, realm);
  tryToDeleteANonExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessDoesNotExist(count, expiration, id, realm);
});

// Story: crud:ClientInitialAccess:nondet:negative:dup-add
bthread("crud:ClientInitialAccess:nondet:negative:dup-add", function () {
  let count = 816;
  let expiration = 816;
  let id = 816;
  let realm = 816;
  postClientsInitialAccess(count, expiration, id, realm);
  // waitForClientInitialAccessAdded(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
  tryToAddExistingClientInitialAccess(count, expiration, id, realm);
  verifyClientInitialAccessExists(count, expiration, id, realm);
});
